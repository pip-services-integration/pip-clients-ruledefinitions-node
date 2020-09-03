
import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { RuleDefinitionsMemoryPersistence } from 'pip-services-ruledefinitions-node';
import { RuleDefinitionsController } from 'pip-services-ruledefinitions-node';

import { RuleDefinitionsDirectClientV1 } from '../../src/version1/RuleDefinitionsDirectClientV1';
import { RuleDefinitionsClientV1Fixture } from './RuleDefinitionsClientV1Fixture';


suite('RuleDefinitionsDirectClientV1', () => {
    let persistence: RuleDefinitionsMemoryPersistence;
    let controller: RuleDefinitionsController;
    let client: RuleDefinitionsDirectClientV1;
    let fixture: RuleDefinitionsClientV1Fixture;

    setup((done) => {
        persistence = new RuleDefinitionsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new RuleDefinitionsController();
        controller.configure(new ConfigParams());

        client = new RuleDefinitionsDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('pip-services-ruledefinitions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-ruledefinitions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-ruledefinitions', 'client', 'direct', 'default', '1.0'), client
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new RuleDefinitionsClientV1Fixture(client);

        persistence.open(null, done);
    });

    teardown((done) => {
        persistence.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCRUDOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetwithFilters(done);
    });
});