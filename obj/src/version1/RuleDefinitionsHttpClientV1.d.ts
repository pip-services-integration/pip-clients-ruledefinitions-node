import { FilterParams } from "pip-services3-commons-node";
import { PagingParams } from "pip-services3-commons-node";
import { DataPage } from "pip-services3-commons-node";
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { IRuleDefinitionsClientV1 } from "./IRuleDefinitionsClientV1";
import { RuleV1 } from './RuleV1';
export declare class RuleDefinitionsHttpClientV1 extends CommandableHttpClient implements IRuleDefinitionsClientV1 {
    constructor();
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<RuleV1>) => void): void;
    getRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void;
    createRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void;
    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, rule: RuleV1) => void): void;
    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, rule: RuleV1) => void): void;
}
