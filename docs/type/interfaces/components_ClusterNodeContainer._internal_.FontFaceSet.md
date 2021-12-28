[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / FontFaceSet

# Interface: FontFaceSet

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).FontFaceSet

## Hierarchy

- `EventTarget`

  ↳ **`FontFaceSet`**

## Table of contents

### Properties

- [onloading](components_ClusterNodeContainer._internal_.FontFaceSet.md#onloading)
- [onloadingdone](components_ClusterNodeContainer._internal_.FontFaceSet.md#onloadingdone)
- [onloadingerror](components_ClusterNodeContainer._internal_.FontFaceSet.md#onloadingerror)
- [ready](components_ClusterNodeContainer._internal_.FontFaceSet.md#ready)
- [status](components_ClusterNodeContainer._internal_.FontFaceSet.md#status)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.FontFaceSet.md#addeventlistener)
- [check](components_ClusterNodeContainer._internal_.FontFaceSet.md#check)
- [dispatchEvent](components_ClusterNodeContainer._internal_.FontFaceSet.md#dispatchevent)
- [forEach](components_ClusterNodeContainer._internal_.FontFaceSet.md#foreach)
- [load](components_ClusterNodeContainer._internal_.FontFaceSet.md#load)
- [removeEventListener](components_ClusterNodeContainer._internal_.FontFaceSet.md#removeeventlistener)

## Properties

### onloading

• **onloading**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5166

___

### onloadingdone

• **onloadingdone**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5167

___

### onloadingerror

• **onloadingerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5168

___

### ready

• `Readonly` **ready**: `Promise`<[`FontFaceSet`](../modules/components_ClusterNodeContainer._internal_.md#fontfaceset)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5169

___

### status

• `Readonly` **status**: [`FontFaceSetLoadStatus`](../modules/components_ClusterNodeContainer._internal_.md#fontfacesetloadstatus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5170

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`FontFaceSetEventMap`](components_ClusterNodeContainer._internal_.FontFaceSetEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`FontFaceSetEventMap`](components_ClusterNodeContainer._internal_.FontFaceSetEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5174

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

node_modules/typescript/lib/lib.dom.d.ts:5175

___

### check

▸ **check**(`font`, `text?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | `string` |
| `text?` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5171

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

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`FontFace`](../modules/components_ClusterNodeContainer._internal_.md#fontface), `key`: [`FontFace`](../modules/components_ClusterNodeContainer._internal_.md#fontface), `parent`: [`FontFaceSet`](../modules/components_ClusterNodeContainer._internal_.md#fontfaceset)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5173

___

### load

▸ **load**(`font`, `text?`): `Promise`<[`FontFace`](../modules/components_ClusterNodeContainer._internal_.md#fontface)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | `string` |
| `text?` | `string` |

#### Returns

`Promise`<[`FontFace`](../modules/components_ClusterNodeContainer._internal_.md#fontface)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5172

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`FontFaceSetEventMap`](components_ClusterNodeContainer._internal_.FontFaceSetEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`FontFaceSetEventMap`](components_ClusterNodeContainer._internal_.FontFaceSetEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5176

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

node_modules/typescript/lib/lib.dom.d.ts:5177
