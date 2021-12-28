[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / LayoutEvents

# Interface: LayoutEvents

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).LayoutEvents

## Hierarchy

- **`LayoutEvents`**

  ↳ [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

## Table of contents

### Methods

- [addListener](components_ClusterNodeContainer._internal_.LayoutEvents.md#addlistener)
- [bind](components_ClusterNodeContainer._internal_.LayoutEvents.md#bind)
- [listen](components_ClusterNodeContainer._internal_.LayoutEvents.md#listen)
- [off](components_ClusterNodeContainer._internal_.LayoutEvents.md#off)
- [on](components_ClusterNodeContainer._internal_.LayoutEvents.md#on)
- [one](components_ClusterNodeContainer._internal_.LayoutEvents.md#one)
- [pon](components_ClusterNodeContainer._internal_.LayoutEvents.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.LayoutEvents.md#promiseon)
- [removeListener](components_ClusterNodeContainer._internal_.LayoutEvents.md#removelistener)
- [trigger](components_ClusterNodeContainer._internal_.LayoutEvents.md#trigger)
- [unbind](components_ClusterNodeContainer._internal_.LayoutEvents.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.LayoutEvents.md#unlisten)

## Methods

### addListener

▸ **addListener**(`events`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4903

▸ **addListener**(`events`, `data`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4904

___

### bind

▸ **bind**(`events`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4899

▸ **bind**(`events`, `data`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4900

___

### listen

▸ **listen**(`events`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4901

▸ **listen**(`events`, `data`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4902

___

### off

▸ **off**(`events`, `handler?`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

Remove event handlers on the layout.
http://js.cytoscape.org/#layout.off

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | A reference to the handler function to remove. |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4930

___

### on

▸ **on**(`events`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4897

▸ **on**(`events`, `data`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4898

___

### one

▸ **one**(`events`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

Bind to events that are emitted by the layout, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4920

▸ **one**(`events`, `data`, `handler`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4921

___

### pon

▸ **pon**(`events`): `Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |

#### Returns

`Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4912

___

### promiseOn

▸ **promiseOn**(`events`): `Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

Get a promise that is resolved with the first of any of
the specified events triggered on the layout.
http://js.cytoscape.org/#layout.promiseOn

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |

#### Returns

`Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4911

___

### removeListener

▸ **removeListener**(`events`, `handler?`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4933

___

### trigger

▸ **trigger**(`events`, `extraParams?`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

Trigger one or more events on the layout.
http://js.cytoscape.org/#layout.trigger

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names to trigger. |
| `extraParams?` | `any`[] | An array of additional parameters to pass to the handler. |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4941

___

### unbind

▸ **unbind**(`events`, `handler?`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4931

___

### unlisten

▸ **unlisten**(`events`, `handler?`): [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4932
