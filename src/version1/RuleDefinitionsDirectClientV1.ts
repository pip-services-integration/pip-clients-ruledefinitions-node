import { FilterParams } from "pip-services3-commons-node";
import { PagingParams } from "pip-services3-commons-node";
import { Descriptor } from "pip-services3-commons-node";
import { DataPage } from "pip-services3-commons-node";

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { DirectClient } from 'pip-services3-rpc-node';
import { RuleV1 } from './RuleV1';

export class RuleDefinitionsDirectClientV1 extends DirectClient<any> implements IRuleDefinitionsClientV1 {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-ruledefinitions', 'controller', '*', '*', '1.0'));
    }

    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<RuleV1>) => void): void {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rules');
        this._controller.getRules(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    getRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        let timing = this.instrument(correlationId, 'ruledefinitions.get_rule_by_id');
        this._controller.getRuleById(correlationId, rule_id, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    createRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        let timing = this.instrument(correlationId, 'ruledefinitions.create_rule');
        this._controller.createRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        let timing = this.instrument(correlationId, 'ruledefinitions.update_rule');
        this._controller.updateRule(correlationId, rule, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }

    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        let timing = this.instrument(correlationId, 'ruledefinitions.delete_rule_by_id');
        this._controller.deleteRuleById(correlationId, rule_id, (err, rule) => {
            timing.endTiming();
            callback(err, rule);
        });
    }
}