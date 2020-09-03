let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { IRuleDefinitionsClientV1 } from '../../src/version1/IRuleDefinitionsClientV1';
import { RuleV1 } from '../../src/version1/RuleV1';
import { RulePriorityV1 } from '../../src/version1/RulePriorityV1';

export class RuleDefinitionsClientV1Fixture {
    private _client: IRuleDefinitionsClientV1;

    RULE1: RuleV1 = {
        id: '1',
        name: 'name 1',
        group: 'Group 1',
        action: 'copy',
        condition: 'condition 1',
        priority: RulePriorityV1.High,
        description: null,
        params: { param1: '123' }
    };

    RULE2: RuleV1 = {
        id: '2',
        name: 'name 2',
        group: 'Group 1',
        action: 'delete',
        condition: 'condition 2',
        priority: RulePriorityV1.Low,
        description: null,
        params: { param1: '2443' }
    };

    RULE3: RuleV1 = {
        id: '3',
        name: 'name 3',
        group: 'Group 2',
        action: 'create',
        condition: 'condition 1',
        priority: RulePriorityV1.Medium,
        description: null,
        params: { param1: '2345' }
    };

    constructor(persistence) {
        assert.isNotNull(persistence);
        this._client = persistence;
    }

    testCRUDOperations(done) {
        let rule1: RuleV1;

        async.series([
            // Create one rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE1,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE1.id);
                        assert.equal(rule.name, this.RULE1.name);
                        assert.equal(rule.group, this.RULE1.group);

                        rule1 = rule;
                        callback();
                    }
                );
            },
            // Create another rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE2,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE2.id);
                        assert.equal(rule.name, this.RULE2.name);
                        assert.equal(rule.group, this.RULE2.group);

                        callback();
                    }
                );
            },
            // Create yet another rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE3,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE3.id);
                        assert.equal(rule.name, this.RULE3.name);
                        assert.equal(rule.group, this.RULE3.group);

                        callback();
                    }
                );
            },
            // Get all rules
            (callback) => {
                this._client.getRules(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        rule1 = page.data[0];

                        callback();
                    }
                );
            },
            // Update the rule
            (callback) => {
                rule1.name = 'Updated Name 1';

                this._client.updateRule(
                    null,
                    rule1,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.name, 'Updated Name 1');
                        assert.equal(rule.id, rule1.id);

                        callback();
                    }
                );
            },
            // Delete rule
            (callback) => {
                this._client.deleteRuleById(
                    null,
                    rule1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
            // Try to get delete rule
            (callback) => {
                this._client.getRuleById(
                    null,
                    rule1.id,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isNull(rule || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    testGetwithFilters(done) {
        var filter = new FilterParams();
        var s = filter.getAsNullableString('123123');

        async.series([
            // Create one rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE1,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE1.id);
                        assert.equal(rule.name, this.RULE1.name);
                        assert.equal(rule.group, this.RULE1.group);

                        callback();
                    }
                );
            },
            // Create another rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE2,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE2.id);
                        assert.equal(rule.name, this.RULE2.name);
                        assert.equal(rule.group, this.RULE2.group);

                        callback();
                    }
                );
            },
            // Create yet another rule
            (callback) => {
                this._client.createRule(
                    null,
                    this.RULE3,
                    (err, rule) => {
                        assert.isNull(err);

                        assert.isObject(rule);
                        assert.equal(rule.id, this.RULE3.id);
                        assert.equal(rule.name, this.RULE3.name);
                        assert.equal(rule.group, this.RULE3.group);

                        callback();
                    }
                );
            },
            // Get rules filtered by group
            (callback) => {
                this._client.getRules(
                    null,
                    FilterParams.fromValue({
                        group: 'Group 1'
                    }),
                    new PagingParams(),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.lengthOf(rules.data, 2);

                        callback();
                    }
                );
            },
            // Get rules filtered by search
            (callback) => {
                this._client.getRules(
                    null,
                    FilterParams.fromValue({
                        search: '2'
                    }),
                    new PagingParams(),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.lengthOf(rules.data, 2);

                        callback();
                    }
                );
            },
            // Get rules filtered by priority
            (callback) => {
                this._client.getRules(
                    null,
                    FilterParams.fromValue({
                        priority: RulePriorityV1.Medium
                    }),
                    new PagingParams(),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.lengthOf(rules.data, 1);

                        callback();
                    }
                );
            },
            // Get rules filtered by priority range
            (callback) => {
                this._client.getRules(
                    null,
                    FilterParams.fromValue({
                        min_priority: RulePriorityV1.Medium,
                        max_priority: RulePriorityV1.High
                    }),
                    new PagingParams(),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.lengthOf(rules.data, 2);

                        callback();
                    }
                );
            },
            // Get rules filtered by action
            (callback) => {
                this._client.getRules(
                    null,
                    FilterParams.fromValue({
                        action: 'delete'
                    }),
                    new PagingParams(),
                    (err, rules) => {
                        assert.isNull(err);

                        assert.isObject(rules);
                        assert.lengthOf(rules.data, 1);

                        callback();
                    }
                );
            }
        ], done);
    }
}
