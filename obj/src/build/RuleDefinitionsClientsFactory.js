"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const RuleDefinitionsDirectClientV1_1 = require("../version1/RuleDefinitionsDirectClientV1");
const RuleDefinitionsHttpClientV1_1 = require("../version1/RuleDefinitionsHttpClientV1");
const RuleDefinitionsNullClientV1_1 = require("../version1/RuleDefinitionsNullClientV1");
class RuleDefinitionsClientsFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(RuleDefinitionsClientsFactory.DirectClientDescriptor, RuleDefinitionsDirectClientV1_1.RuleDefinitionsDirectClientV1);
        this.registerAsType(RuleDefinitionsClientsFactory.HttpClientDescriptor, RuleDefinitionsHttpClientV1_1.RuleDefinitionsHttpClientV1);
        this.registerAsType(RuleDefinitionsClientsFactory.NullClientDescriptor, RuleDefinitionsNullClientV1_1.RuleDefinitionsNullClientV1);
    }
}
exports.RuleDefinitionsClientsFactory = RuleDefinitionsClientsFactory;
RuleDefinitionsClientsFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services-ruledefinitions", "factory", "default", "default", "1.0");
RuleDefinitionsClientsFactory.DirectClientDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-ruledefinitions", "client", "direct", "*", "1.0");
RuleDefinitionsClientsFactory.HttpClientDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-ruledefinitions", "client", "http", "*", "1.0");
RuleDefinitionsClientsFactory.NullClientDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-ruledefinitions", "client", "null", "*", "1.0");
//# sourceMappingURL=RuleDefinitionsClientsFactory.js.map