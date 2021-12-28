[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / PaymentMethodChangeEvent

# Interface: PaymentMethodChangeEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).PaymentMethodChangeEvent

Available only in secure contexts.

## Hierarchy

- [`PaymentRequestUpdateEvent`](../modules/components_ClusterNodeContainer._internal_.md#paymentrequestupdateevent)

  ↳ **`PaymentMethodChangeEvent`**

## Table of contents

### Properties

- [AT\_TARGET](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#at_target)
- [BUBBLING\_PHASE](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#capturing_phase)
- [NONE](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#none)
- [bubbles](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#bubbles)
- [cancelBubble](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#cancelbubble)
- [cancelable](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#cancelable)
- [composed](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#composed)
- [currentTarget](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#currenttarget)
- [defaultPrevented](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#defaultprevented)
- [eventPhase](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#eventphase)
- [isTrusted](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#istrusted)
- [methodDetails](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#methoddetails)
- [methodName](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#methodname)
- [returnValue](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#returnvalue)
- [srcElement](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#srcelement)
- [target](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#type)

### Methods

- [composedPath](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#composedpath)
- [initEvent](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#initevent)
- [preventDefault](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#stoppropagation)
- [updateWith](components_ClusterNodeContainer._internal_.PaymentMethodChangeEvent.md#updatewith)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

PaymentRequestUpdateEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

PaymentRequestUpdateEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

PaymentRequestUpdateEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4908

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

PaymentRequestUpdateEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

PaymentRequestUpdateEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4872

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

PaymentRequestUpdateEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

PaymentRequestUpdateEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

PaymentRequestUpdateEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

PaymentRequestUpdateEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

PaymentRequestUpdateEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

PaymentRequestUpdateEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

PaymentRequestUpdateEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4885

___

### methodDetails

• `Readonly` **methodDetails**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10062

___

### methodName

• `Readonly` **methodName**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

PaymentRequestUpdateEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`deprecated`**

#### Inherited from

PaymentRequestUpdateEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

PaymentRequestUpdateEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4891

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

PaymentRequestUpdateEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

PaymentRequestUpdateEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

PaymentRequestUpdateEvent.composedPath

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

PaymentRequestUpdateEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

PaymentRequestUpdateEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

PaymentRequestUpdateEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

PaymentRequestUpdateEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905

___

### updateWith

▸ **updateWith**(`detailsPromise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detailsPromise` | [`PaymentDetailsUpdate`](components_ClusterNodeContainer._internal_.PaymentDetailsUpdate.md) \| [`PromiseLike`](components_ClusterNodeContainer._internal_.PromiseLike.md)<[`PaymentDetailsUpdate`](components_ClusterNodeContainer._internal_.PaymentDetailsUpdate.md)\> |

#### Returns

`void`

#### Inherited from

PaymentRequestUpdateEvent.updateWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101
