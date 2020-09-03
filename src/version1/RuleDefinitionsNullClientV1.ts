import { FilterParams } from "pip-services3-commons-node";
import { PagingParams } from "pip-services3-commons-node";
import { DataPage } from "pip-services3-commons-node";

import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';


export class RuleDefinitionsNullClientV1 implements IRuleDefinitionsClientV1 {
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<RuleV1>) => void): void {
        callback(null, new DataPage<RuleV1>());
    }

    getRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        callback(null, null);
    }

    createRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        callback(null, null);
    }

    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void {
        callback(null, null);
    }

    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void {
        callback(null, null);
    }
}