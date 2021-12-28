[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreEvents

# Interface: CoreEvents

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreEvents

The principle events from the graph model.
 http://js.cytoscape.org/#core/events

## Hierarchy

- **`CoreEvents`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [addListener](components_ClusterNodeContainer._internal_.CoreEvents.md#addlistener)
- [bind](components_ClusterNodeContainer._internal_.CoreEvents.md#bind)
- [emit](components_ClusterNodeContainer._internal_.CoreEvents.md#emit)
- [listen](components_ClusterNodeContainer._internal_.CoreEvents.md#listen)
- [off](components_ClusterNodeContainer._internal_.CoreEvents.md#off)
- [on](components_ClusterNodeContainer._internal_.CoreEvents.md#on)
- [one](components_ClusterNodeContainer._internal_.CoreEvents.md#one)
- [pon](components_ClusterNodeContainer._internal_.CoreEvents.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.CoreEvents.md#promiseon)
- [ready](components_ClusterNodeContainer._internal_.CoreEvents.md#ready)
- [removeListener](components_ClusterNodeContainer._internal_.CoreEvents.md#removelistener)
- [trigger](components_ClusterNodeContainer._internal_.CoreEvents.md#trigger)
- [unbind](components_ClusterNodeContainer._internal_.CoreEvents.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.CoreEvents.md#unlisten)

## Methods

### addListener

▸ **addListener**(`events`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:571

▸ **addListener**(`events`, `selector`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:572

▸ **addListener**(`events`, `selector`, `data`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:573

▸ **addListener**(`eventsMap`, `selector?`, `data?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:574

___

### bind

▸ **bind**(`events`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:561

▸ **bind**(`events`, `selector`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:562

▸ **bind**(`events`, `selector`, `data`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:563

▸ **bind**(`eventsMap`, `selector?`, `data?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:564

___

### emit

▸ **emit**(`events`, `extraParams?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extraParams?` | `any`[] |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:649

___

### listen

▸ **listen**(`events`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:566

▸ **listen**(`events`, `selector`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:567

▸ **listen**(`events`, `selector`, `data`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:568

▸ **listen**(`eventsMap`, `selector?`, `data?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:569

___

### off

▸ **off**(`events`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Remove event handlers.
 http://js.cytoscape.org/#cy.off

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | A reference to the handler function to remove. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:626

▸ **off**(`events`, `selector`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:627

▸ **off**(`eventsMap`, `selector?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:628

___

### on

▸ **on**(`events`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Bind to events that occur in the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:556

▸ **on**(`events`, `selector`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:557

▸ **on**(`events`, `selector`, `data`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:558

▸ **on**(`eventsMap`, `selector?`, `data?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:559

___

### one

▸ **one**(`events`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:590

▸ **one**(`events`, `selector`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A selector to specify elements for which the handler is triggered. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:598

▸ **one**(`events`, `selector`, `data`, `handler`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A selector to specify elements for which the handler is triggered. |
| `data` | `any` | A plain object which is passed to the handler in the event object argument. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:607

▸ **one**(`eventsMap`, `selector?`, `data?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventsMap` | `Object` | A map of event names to handler functions. |
| `selector?` | `string` | A selector to specify elements for which the handler is triggered. |
| `data?` | `any` | A plain object which is passed to the handler in the event object argument. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:615

___

### pon

▸ **pon**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:583

___

### promiseOn

▸ **promiseOn**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

Get a promise that is resolved with the first
of any of the specified events triggered on the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector?` | `string` | A selector to specify elements for which the handler is triggered. |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:582

___

### ready

▸ **ready**(`fn`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Run a callback as soon as the graph becomes ready. If the graph is already ready, then the callback is called immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The callback run as soon as the graph is ready, inside which this refers to the core (cy). |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:655

___

### removeListener

▸ **removeListener**(`events`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:638

▸ **removeListener**(`events`, `selector`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:639

▸ **removeListener**(`eventsMap`, `selector?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:640

___

### trigger

▸ **trigger**(`events`, `extraParams?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

Trigger one or more events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names to trigger. |
| `extraParams?` | `any`[] | An array of additional parameters to pass to the handler. |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:648

___

### unbind

▸ **unbind**(`events`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:630

▸ **unbind**(`events`, `selector`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:631

▸ **unbind**(`eventsMap`, `selector?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:632

___

### unlisten

▸ **unlisten**(`events`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:634

▸ **unlisten**(`events`, `selector`, `handler?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:635

▸ **unlisten**(`eventsMap`, `selector?`): [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:636
