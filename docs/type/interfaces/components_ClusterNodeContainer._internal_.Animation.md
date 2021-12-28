[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Animation

# Interface: Animation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Animation

## Hierarchy

- `EventTarget`

  ↳ **`Animation`**

## Table of contents

### Properties

- [currentTime](components_ClusterNodeContainer._internal_.Animation.md#currenttime)
- [effect](components_ClusterNodeContainer._internal_.Animation.md#effect)
- [finished](components_ClusterNodeContainer._internal_.Animation.md#finished)
- [id](components_ClusterNodeContainer._internal_.Animation.md#id)
- [oncancel](components_ClusterNodeContainer._internal_.Animation.md#oncancel)
- [onfinish](components_ClusterNodeContainer._internal_.Animation.md#onfinish)
- [onremove](components_ClusterNodeContainer._internal_.Animation.md#onremove)
- [pending](components_ClusterNodeContainer._internal_.Animation.md#pending)
- [playState](components_ClusterNodeContainer._internal_.Animation.md#playstate)
- [playbackRate](components_ClusterNodeContainer._internal_.Animation.md#playbackrate)
- [ready](components_ClusterNodeContainer._internal_.Animation.md#ready)
- [replaceState](components_ClusterNodeContainer._internal_.Animation.md#replacestate)
- [startTime](components_ClusterNodeContainer._internal_.Animation.md#starttime)
- [timeline](components_ClusterNodeContainer._internal_.Animation.md#timeline)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.Animation.md#addeventlistener)
- [cancel](components_ClusterNodeContainer._internal_.Animation.md#cancel)
- [commitStyles](components_ClusterNodeContainer._internal_.Animation.md#commitstyles)
- [dispatchEvent](components_ClusterNodeContainer._internal_.Animation.md#dispatchevent)
- [finish](components_ClusterNodeContainer._internal_.Animation.md#finish)
- [pause](components_ClusterNodeContainer._internal_.Animation.md#pause)
- [persist](components_ClusterNodeContainer._internal_.Animation.md#persist)
- [play](components_ClusterNodeContainer._internal_.Animation.md#play)
- [removeEventListener](components_ClusterNodeContainer._internal_.Animation.md#removeeventlistener)
- [reverse](components_ClusterNodeContainer._internal_.Animation.md#reverse)
- [updatePlaybackRate](components_ClusterNodeContainer._internal_.Animation.md#updateplaybackrate)

## Properties

### currentTime

• **currentTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1959

___

### effect

• **effect**: ``null`` \| [`AnimationEffect`](../modules/components_ClusterNodeContainer._internal_.md#animationeffect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1960

___

### finished

• `Readonly` **finished**: `Promise`<[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1961

___

### id

• **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1962

___

### oncancel

• **oncancel**: ``null`` \| (`ev`: [`AnimationPlaybackEvent`](../modules/components_ClusterNodeContainer._internal_.md#animationplaybackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1963

___

### onfinish

• **onfinish**: ``null`` \| (`ev`: [`AnimationPlaybackEvent`](../modules/components_ClusterNodeContainer._internal_.md#animationplaybackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1964

___

### onremove

• **onremove**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1965

___

### pending

• `Readonly` **pending**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1966

___

### playState

• `Readonly` **playState**: [`AnimationPlayState`](../modules/components_ClusterNodeContainer._internal_.md#animationplaystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1967

___

### playbackRate

• **playbackRate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1968

___

### ready

• `Readonly` **ready**: `Promise`<[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1969

___

### replaceState

• `Readonly` **replaceState**: [`AnimationReplaceState`](../modules/components_ClusterNodeContainer._internal_.md#animationreplacestate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1970

___

### startTime

• **startTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1971

___

### timeline

• **timeline**: ``null`` \| [`AnimationTimeline`](../modules/components_ClusterNodeContainer._internal_.md#animationtimeline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1972

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`AnimationEventMap`](components_ClusterNodeContainer._internal_.AnimationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`AnimationEventMap`](components_ClusterNodeContainer._internal_.AnimationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1981

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

node_modules/typescript/lib/lib.dom.d.ts:1982

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1973

___

### commitStyles

▸ **commitStyles**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1974

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

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1975

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1976

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1977

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1978

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`AnimationEventMap`](components_ClusterNodeContainer._internal_.AnimationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`AnimationEventMap`](components_ClusterNodeContainer._internal_.AnimationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1983

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

node_modules/typescript/lib/lib.dom.d.ts:1984

___

### reverse

▸ **reverse**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1979

___

### updatePlaybackRate

▸ **updatePlaybackRate**(`playbackRate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `playbackRate` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1980
