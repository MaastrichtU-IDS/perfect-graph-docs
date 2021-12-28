[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SpeechSynthesisUtterance

# Interface: SpeechSynthesisUtterance

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SpeechSynthesisUtterance

This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## Hierarchy

- `EventTarget`

  ↳ **`SpeechSynthesisUtterance`**

## Table of contents

### Properties

- [lang](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#lang)
- [onboundary](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onboundary)
- [onend](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onend)
- [onerror](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onerror)
- [onmark](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onmark)
- [onpause](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onpause)
- [onresume](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onresume)
- [onstart](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#onstart)
- [pitch](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#pitch)
- [rate](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#rate)
- [text](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#text)
- [voice](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#voice)
- [volume](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#volume)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#dispatchevent)
- [removeEventListener](components_ClusterNodeContainer._internal_.SpeechSynthesisUtterance.md#removeeventlistener)

## Properties

### lang

• **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13258

___

### onboundary

• **onboundary**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13259

___

### onend

• **onend**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13260

___

### onerror

• **onerror**: ``null`` \| (`ev`: [`SpeechSynthesisErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesiserrorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13261

___

### onmark

• **onmark**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13262

___

### onpause

• **onpause**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13263

___

### onresume

• **onresume**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13264

___

### onstart

• **onstart**: ``null`` \| (`ev`: [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13265

___

### pitch

• **pitch**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13266

___

### rate

• **rate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13267

___

### text

• **text**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13268

___

### voice

• **voice**: ``null`` \| [`SpeechSynthesisVoice`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisvoice)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13269

___

### volume

• **volume**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13270

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](components_ClusterNodeContainer._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SpeechSynthesisUtteranceEventMap`](components_ClusterNodeContainer._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13271

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

node_modules/typescript/lib/lib.dom.d.ts:13272

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
| `K` | extends keyof [`SpeechSynthesisUtteranceEventMap`](components_ClusterNodeContainer._internal_.SpeechSynthesisUtteranceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SpeechSynthesisUtteranceEventMap`](components_ClusterNodeContainer._internal_.SpeechSynthesisUtteranceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13273

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

node_modules/typescript/lib/lib.dom.d.ts:13274
