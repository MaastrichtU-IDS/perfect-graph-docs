[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionEvents

# Interface: CollectionEvents

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionEvents

http://js.cytoscape.org/#collection/events

## Hierarchy

- **`CollectionEvents`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [addListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#addlistener)
- [bind](components_ClusterNodeContainer._internal_.CollectionEvents.md#bind)
- [emit](components_ClusterNodeContainer._internal_.CollectionEvents.md#emit)
- [listen](components_ClusterNodeContainer._internal_.CollectionEvents.md#listen)
- [off](components_ClusterNodeContainer._internal_.CollectionEvents.md#off)
- [on](components_ClusterNodeContainer._internal_.CollectionEvents.md#on)
- [once](components_ClusterNodeContainer._internal_.CollectionEvents.md#once)
- [one](components_ClusterNodeContainer._internal_.CollectionEvents.md#one)
- [pon](components_ClusterNodeContainer._internal_.CollectionEvents.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.CollectionEvents.md#promiseon)
- [removeListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#removelistener)
- [trigger](components_ClusterNodeContainer._internal_.CollectionEvents.md#trigger)
- [unbind](components_ClusterNodeContainer._internal_.CollectionEvents.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.CollectionEvents.md#unlisten)

## Methods

### addListener

▸ **addListener**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1343

▸ **addListener**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1344

▸ **addListener**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1345

___

### bind

▸ **bind**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1337

▸ **bind**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1338

▸ **bind**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1339

___

### emit

▸ **emit**(`events`, `extra?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1383

___

### listen

▸ **listen**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1340

▸ **listen**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1341

▸ **listen**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1342

___

### off

▸ **off**(`events`, `selector?`, `handler?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

http://js.cytoscape.org/#eles.off
alias unbind, unlisten, removeListener

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1374

___

### on

▸ **on**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

http://js.cytoscape.org/#eles.on

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1334

▸ **on**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1335

▸ **on**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1336

___

### once

▸ **once**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

http://js.cytoscape.org/#eles.once

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1367

▸ **once**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1368

▸ **once**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1369

___

### one

▸ **one**(`events`, `selector`, `data`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A delegate selector to specify child elements for which the handler is triggered. |
| `data` | `any` | A plain object which is passed to the handler in the event object argument. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | - |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1361

▸ **one**(`events`, `selector`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1362

▸ **one**(`events`, `handler`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1363

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

node_modules/@types/cytoscape/index.d.ts:1351

___

### promiseOn

▸ **promiseOn**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

http://js.cytoscape.org/#eles.promiseOn
alias: pon

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1350

___

### removeListener

▸ **removeListener**(`events`, `selector?`, `handler?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1377

___

### trigger

▸ **trigger**(`events`, `extra?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

http://js.cytoscape.org/#eles.trigger
alias: emit

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1382

___

### unbind

▸ **unbind**(`events`, `selector?`, `handler?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1375

___

### unlisten

▸ **unlisten**(`events`, `selector?`, `handler?`): [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1376
