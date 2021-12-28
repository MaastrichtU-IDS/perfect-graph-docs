[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SourceBufferList

# Interface: SourceBufferList

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SourceBufferList

A simple container list for multiple SourceBuffer objects.

## Hierarchy

- `EventTarget`

  ↳ **`SourceBufferList`**

## Indexable

▪ [index: `number`]: [`SourceBuffer`](../modules/components_ClusterNodeContainer._internal_.md#sourcebuffer)

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.SourceBufferList.md#length)
- [onaddsourcebuffer](components_ClusterNodeContainer._internal_.SourceBufferList.md#onaddsourcebuffer)
- [onremovesourcebuffer](components_ClusterNodeContainer._internal_.SourceBufferList.md#onremovesourcebuffer)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.SourceBufferList.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.SourceBufferList.md#dispatchevent)
- [removeEventListener](components_ClusterNodeContainer._internal_.SourceBufferList.md#removeeventlistener)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13149

___

### onaddsourcebuffer

• **onaddsourcebuffer**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13150

___

### onremovesourcebuffer

• **onremovesourcebuffer**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13151

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](components_ClusterNodeContainer._internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferListEventMap`](components_ClusterNodeContainer._internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13152

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13153

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](components_ClusterNodeContainer._internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferListEventMap`](components_ClusterNodeContainer._internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13154

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13155
