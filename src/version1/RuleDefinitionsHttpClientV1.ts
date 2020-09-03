import { FilterParams } from "pip-services3-commons-node";
import { PagingParams } from "pip-services3-commons-node";
import { DataPage } from "pip-services3-commons-node";
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';

export class RuleDefinitionsHttpClientV1 extends CommandableHttpClient implements IRuleDefinitionsClientV1 {

    public constructor() {
        super('v1/rule_definitions');
    }

    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<RuleV1>) => void): void {
        this.callCommand(
            'get_rules',
            correlationId,
            {
                filter: filter,
                paging: paging
            },
            callback
        );
    }

    getRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        this.callCommand(
            'get_rule_by_id',
            correlationId,
            {
                rule_id: rule_id
            },
            callback
        );
    }

    createRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        this.callCommand(
            'create_rule',
            correlationId,
            {
                rule: rule
            },
            callback
        );
    }

    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        this.callCommand(
            'update_rule',
            correlationId,
            {
                rule: rule
            },
            callback
        );
    }

    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        this.callCommand(
            'delete_rule_by_id',
            correlationId,
            {
                rule_id: rule_id
            },
            callback
        );
    }
}