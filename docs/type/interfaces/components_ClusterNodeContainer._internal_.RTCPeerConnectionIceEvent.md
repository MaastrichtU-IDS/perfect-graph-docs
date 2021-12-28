[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCPeerConnectionIceEvent

# Interface: RTCPeerConnectionIceEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCPeerConnectionIceEvent

Events that occurs in relation to ICE candidates with the target, usually an RTCPeerConnection. Only one event is of this type: icecandidate.

## Hierarchy

- `Event`

  ↳ **`RTCPeerConnectionIceEvent`**

## Table of contents

### Properties

- [AT\_TARGET](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#at_target)
- [BUBBLING\_PHASE](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#capturing_phase)
- [NONE](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#none)
- [bubbles](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#bubbles)
- [cancelBubble](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#cancelbubble)
- [cancelable](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#cancelable)
- [candidate](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#candidate)
- [composed](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#composed)
- [currentTarget](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#currenttarget)
- [defaultPrevented](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#defaultprevented)
- [eventPhase](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#eventphase)
- [isTrusted](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#istrusted)
- [returnValue](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#returnvalue)
- [srcElement](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#srcelement)
- [target](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#type)

### Methods

- [composedPath](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#composedpath)
- [initEvent](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#initevent)
- [preventDefault](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.RTCPeerConnectionIceEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4908

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

Event.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4872

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### candidate

• `Readonly` **candidate**: ``null`` \| [`RTCIceCandidate`](../modules/components_ClusterNodeContainer._internal_.md#rtcicecandidate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10854

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

Event.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

Event.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

Event.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4885

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4891

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

Event.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

Event.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905
