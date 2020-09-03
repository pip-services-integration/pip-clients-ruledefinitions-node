Node.js client API for RuleDefinitions microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [IRuleDefinitionsClientV1 interface](#interface)
    - [getRules()](#operation1)
    - [getRuleById()](#operation2)
    - [createRule()](#operation3)
    - [updateRule()](#operation4)
    - [deleteRuleById()](#operation5)
* [RuleDefinitionsHttpClientV1 class](#client_http)
* [RuleDefinitionsDirectClientV1 class](#client_direct)
* [RuleDefinitionsNullClientV1 class](#client_null)

## <a name="interface"></a> IRuleDefinitionsClientV1 interface

If you are using Typescript, you can use IRuleDefinitionsClientV1 as a common interface across all client implementations.
If you are using plain typescript, you shall not worry about IRuleDefinitionsClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```typescript
interface IRuleDefinitionsClientV1 {
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<RuleV1>) => void): void;
    getRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
    createRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
}
```

### <a name="operation1"></a> getRules(correlationId, filter, paging, callback)

Get rules by filter

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- filter: FilterParams - filter parameters
- paging: PagingParams - paging parameters

**Returns:**
- err: Error - occured error or null for success
- result: DataPage<RuleV1> - Page with retrieved rules

### <a name="operation2"></a> getRuleById(correlationId, rule_id, callback)

Get rule by id

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- rule_id: string - unique rule id

**Returns:**
- err: Error - occured error or null for success
- result: RuleV1 - finded rule

### <a name="operation3"></a> createRule(correlationId, rule, callback)

Add new rule

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- rule: RuleV1 - rule parameters

**Returns:**
- err: Error - occured error or null for success
- result: RuleV1 - create new rule

### <a name="operation4"></a> updateRule(correlationId, rule, callback)

Changes rule properties

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- rule: RuleV1 - rule parameters

**Returns:**
- err: Error - occured error or null for success
- result: RuleV1 - updated rule

### <a name="operation5"></a> deleteRuleById(correlationId, rule_id, callback)

Delete rule by id

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- rule_id: string - unique rule id

**Returns:**
- err: Error - occured error or null for success
- result: RuleV1 - deleted rule

## <a name="client_http"></a> RuleDefinitionsHttpClientV1 class

RuleDefinitionsHttpClientV1 is a client that implements HTTP protocol

```typescript
class RuleDefinitionsHttpClientV1 extends CommandableHttpClient implements IRuleDefinitionsClientV1 {
    constructor(config?: any);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<RuleV1>) => void): void;
    getRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
    createRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
}
```

**Constructor config properties:**
- connection: object -HTTP transport configuration options
  - protocol: string -HTTP protocol - 'http' or 'https'(default is 'http')
  - host: string -IP address / hostname binding(default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_http"></a> RuleDefinitionsDirectClientV1 class

RuleDefinitionsDirectClientV1 is a dummy client calls controller from the same container.
It can be used in monolytic deployments.

```typescript
class RuleDefinitionsDirectClientV1 extends DirectClient<any> implements IRuleDefinitionsClientV1 {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<RuleV1>) => void): void;
    getRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
    createRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
}
```

## <a name="client_http"></a> RuleDefinitionsNullClientV1 class

RuleDefinitionsNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice.
It can be useful in testing scenarios to cut dependencies on external microservices.

```typescript
class RuleDefinitionsNullClientV1 implements IRuleDefinitionsClientV1 {
    constructor();
    getRules(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<RuleV1>) => void): void;
    getRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
    createRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    updateRule(correlationId: string, rule: RuleV1, callback: (err: any, result: RuleV1) => void): void;
    deleteRuleById(correlationId: string, rule_id: string, callback: (err: any, result: RuleV1) => void): void;
}
```

