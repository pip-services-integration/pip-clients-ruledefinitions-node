"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RuleDefinitionsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('pip-services-ruledefinitions', 'controller', '*', '*', '1.0'));
    }
    getRules(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');
        this._controller.getRules(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getRuleById(correlationId, rule_id, callback) {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rule_by_id');
        this._controller.getRuleById(correlationId, rule_id, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    createRule(correlationId, rule, callback) {
        let timing = this.instrument(correlationId, 'ruledefinitions.create_rule');
        this._controller.createRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    updateRule(correlationId, rule, callback) {
        let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');
        this._controller.updateRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
    deleteRuleById(correlationId, rule_id, callback) {
        let timing = this.instrument(correlationId, 'ruledefinitions.delete_rule_by_id');
        this._controller.deleteRuleById(correlationId, rule_id, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
}
exports.RuleDefinitionsDirectClientV1 = RuleDefinitionsDirectClientV1;
//# sourceMappingURL=RuleDefinitionsDirectClientV1.js.map