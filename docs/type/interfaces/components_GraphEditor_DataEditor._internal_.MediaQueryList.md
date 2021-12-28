[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / MediaQueryList

# Interface: MediaQueryList

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).MediaQueryList

Stores information on a media query applied to a document, and handles sending notifications to listeners when the media query state change (i.e. when the media query test starts or stops evaluating to true).

## Hierarchy

- `EventTarget`

  ↳ **`MediaQueryList`**

## Table of contents

### Properties

- [matches](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#matches)
- [media](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#media)
- [onchange](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#onchange)

### Methods

- [addEventListener](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#addeventlistener)
- [addListener](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#addlistener)
- [dispatchEvent](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#dispatchevent)
- [removeEventListener](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#removeeventlistener)
- [removeListener](components_GraphEditor_DataEditor._internal_.MediaQueryList.md#removelistener)

## Properties

### matches

• `Readonly` **matches**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9084

___

### media

• `Readonly` **media**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9085

___

### onchange

• **onchange**: ``null`` \| (`ev`: [`MediaQueryListEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaquerylistevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9086

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaQueryListEventMap`](components_GraphEditor_DataEditor._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9091

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

node_modules/typescript/lib/lib.dom.d.ts:9092

___

### addListener

▸ **addListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`ev`: [`MediaQueryListEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9088

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
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaQueryListEventMap`](components_GraphEditor_DataEditor._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9093

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

node_modules/typescript/lib/lib.dom.d.ts:9094

___

### removeListener

▸ **removeListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`ev`: [`MediaQueryListEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9090
