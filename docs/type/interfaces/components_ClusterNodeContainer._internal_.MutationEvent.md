[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MutationEvent

# Interface: MutationEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MutationEvent

Provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.

**`deprecated`** DOM4 [DOM] provides a new mechanism using a MutationObserver interface which addresses the use cases that mutation events solve, but in a more performant manner. Thus, this specification describes mutation events for reference and completeness of legacy behavior, but deprecates the use of the MutationEvent interface.

## Hierarchy

- `Event`

  ↳ **`MutationEvent`**

## Table of contents

### Properties

- [ADDITION](components_ClusterNodeContainer._internal_.MutationEvent.md#addition)
- [AT\_TARGET](components_ClusterNodeContainer._internal_.MutationEvent.md#at_target)
- [BUBBLING\_PHASE](components_ClusterNodeContainer._internal_.MutationEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](components_ClusterNodeContainer._internal_.MutationEvent.md#capturing_phase)
- [MODIFICATION](components_ClusterNodeContainer._internal_.MutationEvent.md#modification)
- [NONE](components_ClusterNodeContainer._internal_.MutationEvent.md#none)
- [REMOVAL](components_ClusterNodeContainer._internal_.MutationEvent.md#removal)
- [attrChange](components_ClusterNodeContainer._internal_.MutationEvent.md#attrchange)
- [attrName](components_ClusterNodeContainer._internal_.MutationEvent.md#attrname)
- [bubbles](components_ClusterNodeContainer._internal_.MutationEvent.md#bubbles)
- [cancelBubble](components_ClusterNodeContainer._internal_.MutationEvent.md#cancelbubble)
- [cancelable](components_ClusterNodeContainer._internal_.MutationEvent.md#cancelable)
- [composed](components_ClusterNodeContainer._internal_.MutationEvent.md#composed)
- [currentTarget](components_ClusterNodeContainer._internal_.MutationEvent.md#currenttarget)
- [defaultPrevented](components_ClusterNodeContainer._internal_.MutationEvent.md#defaultprevented)
- [eventPhase](components_ClusterNodeContainer._internal_.MutationEvent.md#eventphase)
- [isTrusted](components_ClusterNodeContainer._internal_.MutationEvent.md#istrusted)
- [newValue](components_ClusterNodeContainer._internal_.MutationEvent.md#newvalue)
- [prevValue](components_ClusterNodeContainer._internal_.MutationEvent.md#prevvalue)
- [relatedNode](components_ClusterNodeContainer._internal_.MutationEvent.md#relatednode)
- [returnValue](components_ClusterNodeContainer._internal_.MutationEvent.md#returnvalue)
- [srcElement](components_ClusterNodeContainer._internal_.MutationEvent.md#srcelement)
- [target](components_ClusterNodeContainer._internal_.MutationEvent.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.MutationEvent.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.MutationEvent.md#type)

### Methods

- [composedPath](components_ClusterNodeContainer._internal_.MutationEvent.md#composedpath)
- [initEvent](components_ClusterNodeContainer._internal_.MutationEvent.md#initevent)
- [initMutationEvent](components_ClusterNodeContainer._internal_.MutationEvent.md#initmutationevent)
- [preventDefault](components_ClusterNodeContainer._internal_.MutationEvent.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.MutationEvent.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.MutationEvent.md#stoppropagation)

## Properties

### ADDITION

• `Readonly` **ADDITION**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9464

___

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

### MODIFICATION

• `Readonly` **MODIFICATION**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9465

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### REMOVAL

• `Readonly` **REMOVAL**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9466

___

### attrChange

• `Readonly` **attrChange**: `number`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9453

___

### attrName

• `Readonly` **attrName**: `string`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9455

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

### newValue

• `Readonly` **newValue**: `string`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9457

___

### prevValue

• `Readonly` **prevValue**: `string`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9459

___

### relatedNode

• `Readonly` **relatedNode**: ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9461

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

### initMutationEvent

▸ **initMutationEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `relatedNodeArg?`, `prevValueArg?`, `newValueArg?`, `attrNameArg?`, `attrChangeArg?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `relatedNodeArg?` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `prevValueArg?` | `string` |
| `newValueArg?` | `string` |
| `attrNameArg?` | `string` |
| `attrChangeArg?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9463

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
