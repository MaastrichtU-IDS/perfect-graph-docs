[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SecurityPolicyViolationEvent

# Interface: SecurityPolicyViolationEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SecurityPolicyViolationEvent

Inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated.

## Hierarchy

- `Event`

  ↳ **`SecurityPolicyViolationEvent`**

## Table of contents

### Properties

- [AT\_TARGET](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#at_target)
- [BUBBLING\_PHASE](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#capturing_phase)
- [NONE](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#none)
- [blockedURI](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#blockeduri)
- [bubbles](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#bubbles)
- [cancelBubble](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#cancelbubble)
- [cancelable](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#cancelable)
- [columnNumber](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#columnnumber)
- [composed](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#composed)
- [currentTarget](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#currenttarget)
- [defaultPrevented](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#defaultprevented)
- [disposition](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#disposition)
- [documentURI](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#documenturi)
- [effectiveDirective](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#effectivedirective)
- [eventPhase](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#eventphase)
- [isTrusted](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#istrusted)
- [lineNumber](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#linenumber)
- [originalPolicy](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#originalpolicy)
- [referrer](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#referrer)
- [returnValue](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#returnvalue)
- [sample](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#sample)
- [sourceFile](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#sourcefile)
- [srcElement](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#srcelement)
- [statusCode](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#statuscode)
- [target](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#type)
- [violatedDirective](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#violateddirective)

### Methods

- [composedPath](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#composedpath)
- [initEvent](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#initevent)
- [preventDefault](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.SecurityPolicyViolationEvent.md#stoppropagation)

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

### blockedURI

• `Readonly` **blockedURI**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12938

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

### columnNumber

• `Readonly` **columnNumber**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12939

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

### disposition

• `Readonly` **disposition**: [`SecurityPolicyViolationEventDisposition`](../modules/components_ClusterNodeContainer._internal_.md#securitypolicyviolationeventdisposition)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12940

___

### documentURI

• `Readonly` **documentURI**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12941

___

### effectiveDirective

• `Readonly` **effectiveDirective**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12942

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

### lineNumber

• `Readonly` **lineNumber**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12943

___

### originalPolicy

• `Readonly` **originalPolicy**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12944

___

### referrer

• `Readonly` **referrer**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12945

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

___

### sample

• `Readonly` **sample**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12946

___

### sourceFile

• `Readonly` **sourceFile**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12947

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### statusCode

• `Readonly` **statusCode**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12948

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

___

### violatedDirective

• `Readonly` **violatedDirective**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12949

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
