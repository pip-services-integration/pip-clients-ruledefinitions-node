import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { RuleDefinitionsMemoryPersistence } from 'pip-services-ruledefinitions-node';
import { RuleDefinitionsController } from 'pip-services-ruledefinitions-node';
import { RuleDefinitionsHttpServiceV1 } from 'pip-services-ruledefinitions-node';

import { RuleDefinitionsHttpClientV1 } from '../../src/version1/RuleDefinitionsHttpClientV1';
import { RuleDefinitionsClientV1Fixture } from './RuleDefinitionsClientV1Fixture';

suite('RuleDefinitionsHttpClientV1', () => {
    let persistence: RuleDefinitionsMemoryPersistence;
    let controller: RuleDefinitionsController;
    let service: RuleDefinitionsHttpServiceV1;
    let client: RuleDefinitionsHttpClientV1;
    let fixture: RuleDefinitionsClientV1Fixture;

    setup((done) => {
        persistence = new RuleDefinitionsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new RuleDefinitionsController();
        controller.configure(new ConfigParams());

        let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );

        service = new RuleDefinitionsHttpServiceV1();
        service.configure(httpConfig);

        client = new RuleDefinitionsHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('pip-services-ruledefinitions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-ruledefinitions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-ruledefinitions', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('pip-services-ruledefinitions', 'client', 'http', 'default', '1.0'), client
        );
        controller.setReferences(references);
        service.setReferences(references);
        client.setReferences(references);

        fixture = new RuleDefinitionsClientV1Fixture(client);

        persistence.open(null, (err) => {
            if (err) {
                done(err);
                return;
            }

            service.open(null, (err) => {
                if (err) {
                    done(err);
                    return;
                }

                client.open(null, done);
            });
        });
    });

    teardown((done) => {
        client.close(null, (err) => {
            service.close(null, (err) => {
                persistence.close(null, done);
            });
        });
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCRUDOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetwithFilters(done);
    });

});