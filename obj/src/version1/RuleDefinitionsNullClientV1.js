"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class RuleDefinitionsNullClientV1 {
    getRules(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage());
    }
    getRuleById(correlationId, rule_id, callback) {
        callback(null, null);
    }
    createRule(correlationId, rule, callback) {
        callback(null, null);
    }
    updateRule(correlationId, rule, callback) {
        callback(null, null);
    }
    deleteRuleById(correlationId, rule_id, callback) {
        callback(null, null);
    }
}
exports.RuleDefinitionsNullClientV1 = RuleDefinitionsNullClientV1;
//# sourceMappingURL=RuleDefinitionsNullClientV1.js.map