[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EventEmitter

# Class: EventEmitter<EventTypes\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EventEmitter

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends `string` \| `symbol` = `string` \| `symbol` |

## Hierarchy

- **`EventEmitter`**

  ↳ [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

  ↳ [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)

  ↳ [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)

  ↳ [`AbstractRenderer`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.AbstractRenderer.md)

  ↳ [`BaseTexture`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseTexture.md)

  ↳ [`Texture`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Texture.md)

  ↳ [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

  ↳ [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

### Properties

- [prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#addlistener)
- [emit](components_ClusterNodeContainer._internal_.EventEmitter-1.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.EventEmitter-1.md#eventnames)
- [listenerCount](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listeners)
- [off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)
- [on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)
- [once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

## Constructors

### constructor

• **new EventEmitter**<`EventTypes`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends `string` \| `symbol` = `string` \| `symbol` |

## Properties

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### eventNames

▸ **eventNames**(): `EventTypes`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

`EventTypes`[]

#### Defined in

node_modules/eventemitter3/index.d.ts:12

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |

#### Returns

`number`

#### Defined in

node_modules/eventemitter3/index.d.ts:22

___

### listeners

▸ **listeners**(`event`): [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |

#### Returns

[`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `EventTypes` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `EventTypes` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)<`EventTypes`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:43
