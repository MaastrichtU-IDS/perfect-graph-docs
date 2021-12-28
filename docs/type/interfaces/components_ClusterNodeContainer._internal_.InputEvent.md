[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InputEvent

# Interface: InputEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InputEvent

## Hierarchy

- `UIEvent`

  ↳ **`InputEvent`**

## Table of contents

### Properties

- [AT\_TARGET](components_ClusterNodeContainer._internal_.InputEvent.md#at_target)
- [BUBBLING\_PHASE](components_ClusterNodeContainer._internal_.InputEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](components_ClusterNodeContainer._internal_.InputEvent.md#capturing_phase)
- [NONE](components_ClusterNodeContainer._internal_.InputEvent.md#none)
- [bubbles](components_ClusterNodeContainer._internal_.InputEvent.md#bubbles)
- [cancelBubble](components_ClusterNodeContainer._internal_.InputEvent.md#cancelbubble)
- [cancelable](components_ClusterNodeContainer._internal_.InputEvent.md#cancelable)
- [composed](components_ClusterNodeContainer._internal_.InputEvent.md#composed)
- [currentTarget](components_ClusterNodeContainer._internal_.InputEvent.md#currenttarget)
- [data](components_ClusterNodeContainer._internal_.InputEvent.md#data)
- [dataTransfer](components_ClusterNodeContainer._internal_.InputEvent.md#datatransfer)
- [defaultPrevented](components_ClusterNodeContainer._internal_.InputEvent.md#defaultprevented)
- [detail](components_ClusterNodeContainer._internal_.InputEvent.md#detail)
- [eventPhase](components_ClusterNodeContainer._internal_.InputEvent.md#eventphase)
- [inputType](components_ClusterNodeContainer._internal_.InputEvent.md#inputtype)
- [isComposing](components_ClusterNodeContainer._internal_.InputEvent.md#iscomposing)
- [isTrusted](components_ClusterNodeContainer._internal_.InputEvent.md#istrusted)
- [returnValue](components_ClusterNodeContainer._internal_.InputEvent.md#returnvalue)
- [srcElement](components_ClusterNodeContainer._internal_.InputEvent.md#srcelement)
- [target](components_ClusterNodeContainer._internal_.InputEvent.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.InputEvent.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.InputEvent.md#type)
- [view](components_ClusterNodeContainer._internal_.InputEvent.md#view)
- [which](components_ClusterNodeContainer._internal_.InputEvent.md#which)

### Methods

- [composedPath](components_ClusterNodeContainer._internal_.InputEvent.md#composedpath)
- [getTargetRanges](components_ClusterNodeContainer._internal_.InputEvent.md#gettargetranges)
- [initEvent](components_ClusterNodeContainer._internal_.InputEvent.md#initevent)
- [initUIEvent](components_ClusterNodeContainer._internal_.InputEvent.md#inituievent)
- [preventDefault](components_ClusterNodeContainer._internal_.InputEvent.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.InputEvent.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.InputEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

UIEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

UIEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

UIEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4908

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

UIEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

UIEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4872

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

UIEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

UIEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

UIEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

UIEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### data

• `Readonly` **data**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8686

___

### dataTransfer

• `Readonly` **dataTransfer**: ``null`` \| `DataTransfer`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8687

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

UIEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### detail

• `Readonly` **detail**: `number`

#### Inherited from

UIEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13834

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

UIEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### inputType

• `Readonly` **inputType**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8688

___

### isComposing

• `Readonly` **isComposing**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8689

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

UIEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4885

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

UIEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`deprecated`**

#### Inherited from

UIEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

UIEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4891

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

UIEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

UIEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

___

### view

• `Readonly` **view**: ``null`` \| `Window`

#### Inherited from

UIEvent.view

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13835

___

### which

• `Readonly` **which**: `number`

**`deprecated`**

#### Inherited from

UIEvent.which

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13837

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

UIEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getTargetRanges

▸ **getTargetRanges**(): [`StaticRange`](../modules/components_ClusterNodeContainer._internal_.md#staticrange)[]

#### Returns

[`StaticRange`](../modules/components_ClusterNodeContainer._internal_.md#staticrange)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8690

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

UIEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

___

### initUIEvent

▸ **initUIEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `detailArg?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `viewArg?` | ``null`` \| `Window` |
| `detailArg?` | `number` |

#### Returns

`void`

#### Inherited from

UIEvent.initUIEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13839

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

UIEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

UIEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

UIEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905
