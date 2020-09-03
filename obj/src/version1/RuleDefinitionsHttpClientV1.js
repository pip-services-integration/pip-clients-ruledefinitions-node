"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RuleDefinitionsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor() {
        super('v1/rule_definitions');
    }
    getRules(correlationId, filter, paging, callback) {
        this.callCommand('get_rules', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRuleById(correlationId, rule_id, callback) {
        this.callCommand('get_rule_by_id', correlationId, {
            rule_id: rule_id
        }, callback);
    }
    createRule(correlationId, rule, callback) {
        this.callCommand('create_rule', correlationId, {
            rule: rule
        }, callback);
    }
    updateRule(correlationId, rule, callback) {
        this.callCommand('update_rule', correlationId, {
            rule: rule
        }, callback);
    }
    deleteRuleById(correlationId, rule_id, callback) {
        this.callCommand('delete_rule_by_id', correlationId, {
            rule_id: rule_id
        }, callback);
    }
}
exports.RuleDefinitionsHttpClientV1 = RuleDefinitionsHttpClientV1;
//# sourceMappingURL=RuleDefinitionsHttpClientV1.js.map