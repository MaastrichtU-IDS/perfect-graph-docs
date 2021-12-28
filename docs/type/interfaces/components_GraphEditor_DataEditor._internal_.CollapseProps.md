[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / CollapseProps

# Interface: CollapseProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).CollapseProps

## Hierarchy

- [`InternalStandardProps`](../modules/components_GraphEditor_DataEditor._internal_.md#internalstandardprops)<[`TransitionProps`](components_GraphEditor_DataEditor._internal_.TransitionProps.md), ``"timeout"``\>

  ↳ **`CollapseProps`**

## Table of contents

### Properties

- [addEndListener](components_GraphEditor_DataEditor._internal_.CollapseProps.md#addendlistener)
- [appear](components_GraphEditor_DataEditor._internal_.CollapseProps.md#appear)
- [children](components_GraphEditor_DataEditor._internal_.CollapseProps.md#children)
- [className](components_GraphEditor_DataEditor._internal_.CollapseProps.md#classname)
- [classes](components_GraphEditor_DataEditor._internal_.CollapseProps.md#classes)
- [collapsedSize](components_GraphEditor_DataEditor._internal_.CollapseProps.md#collapsedsize)
- [component](components_GraphEditor_DataEditor._internal_.CollapseProps.md#component)
- [easing](components_GraphEditor_DataEditor._internal_.CollapseProps.md#easing)
- [enter](components_GraphEditor_DataEditor._internal_.CollapseProps.md#enter)
- [exit](components_GraphEditor_DataEditor._internal_.CollapseProps.md#exit)
- [in](components_GraphEditor_DataEditor._internal_.CollapseProps.md#in)
- [mountOnEnter](components_GraphEditor_DataEditor._internal_.CollapseProps.md#mountonenter)
- [onEnter](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onenter)
- [onEntered](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onentered)
- [onEntering](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onentering)
- [onExit](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onexit)
- [onExited](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onexited)
- [onExiting](components_GraphEditor_DataEditor._internal_.CollapseProps.md#onexiting)
- [orientation](components_GraphEditor_DataEditor._internal_.CollapseProps.md#orientation)
- [ref](components_GraphEditor_DataEditor._internal_.CollapseProps.md#ref)
- [style](components_GraphEditor_DataEditor._internal_.CollapseProps.md#style)
- [sx](components_GraphEditor_DataEditor._internal_.CollapseProps.md#sx)
- [timeout](components_GraphEditor_DataEditor._internal_.CollapseProps.md#timeout)
- [unmountOnExit](components_GraphEditor_DataEditor._internal_.CollapseProps.md#unmountonexit)

## Properties

### addEndListener

• `Optional` **addEndListener**: (`node`: `HTMLElement`, `done`: () => `void`) => `void`

#### Type declaration

▸ (`node`, `done`): `void`

Add a custom transition end trigger. Called with the transitioning DOM
node and a done callback. Allows for more fine grained transition end
logic. Note: Timeouts are still used as a fallback if provided.

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |
| `done` | () => `void` |

##### Returns

`void`

#### Inherited from

StandardProps.addEndListener

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:167

___

### appear

• `Optional` **appear**: `boolean`

Normally a component is not transitioned if it is shown when the
`<Transition>` component mounts. If you want to transition on the first
mount set  appear to true, and the component will transition in as soon
as the `<Transition>` mounts. Note: there are no specific "appear" states.
appear only adds an additional enter transition.

#### Inherited from

StandardProps.appear

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:40

___

### children

• `Optional` **children**: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

The content node to be collapsed.

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:11

___

### className

• `Optional` **className**: `string`

#### Overrides

StandardProps.className

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:12

___

### classes

• `Optional` **classes**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`CollapseClasses`](components_GraphEditor_DataEditor._internal_.CollapseClasses.md)\>

Override or extend the styles applied to the component.

#### Overrides

StandardProps.classes

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:16

___

### collapsedSize

• `Optional` **collapsedSize**: `string` \| `number`

The width (horizontal) or height (vertical) of the container when collapsed.

**`default`** '0px'

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:21

___

### component

• `Optional` **component**: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<[`TransitionProps`](components_GraphEditor_DataEditor._internal_.TransitionProps.md)\>

The component used for the root node.
Either a string to use a HTML element or a component.

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:26

___

### easing

• `Optional` **easing**: `string` \| { `enter?`: `string` ; `exit?`: `string`  }

The transition timing function.
You may specify a single easing or a object containing enter and exit values.

#### Overrides

StandardProps.easing

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:31

___

### enter

• `Optional` **enter**: `boolean`

Enable or disable enter transitions.

#### Inherited from

StandardProps.enter

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:45

___

### exit

• `Optional` **exit**: `boolean`

Enable or disable exit transitions.

#### Inherited from

StandardProps.exit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:50

___

### in

• `Optional` **in**: `boolean`

If `true`, the component will transition in.

#### Overrides

StandardProps.in

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:35

___

### mountOnEnter

• `Optional` **mountOnEnter**: `boolean`

By default the child component is mounted immediately along with the
parent Transition component. If you want to "lazy mount" the component on
the first `in={true}` you can set `mountOnEnter`. After the first enter
transition the component will stay mounted, even on "exited", unless you
also specify `unmountOnExit`.

#### Inherited from

StandardProps.mountOnEnter

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:66

___

### onEnter

• `Optional` **onEnter**: (`node`: `HTMLElement`, `isAppearing`: `boolean`) => `void`

#### Type declaration

▸ (`node`, `isAppearing`): `void`

Callback fired before the "entering" status is applied. An extra
parameter `isAppearing` is supplied to indicate if the enter stage is
occurring on the initial mount

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |
| `isAppearing` | `boolean` |

##### Returns

`void`

#### Inherited from

StandardProps.onEnter

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:80

___

### onEntered

• `Optional` **onEntered**: (`node`: `HTMLElement`, `isAppearing`: `boolean`) => `void`

#### Type declaration

▸ (`node`, `isAppearing`): `void`

Callback fired after the "entered" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |
| `isAppearing` | `boolean` |

##### Returns

`void`

#### Inherited from

StandardProps.onEntered

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:94

___

### onEntering

• `Optional` **onEntering**: (`node`: `HTMLElement`, `isAppearing`: `boolean`) => `void`

#### Type declaration

▸ (`node`, `isAppearing`): `void`

Callback fired after the "entering" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |
| `isAppearing` | `boolean` |

##### Returns

`void`

#### Inherited from

StandardProps.onEntering

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:87

___

### onExit

• `Optional` **onExit**: (`node`: `HTMLElement`) => `void`

#### Type declaration

▸ (`node`): `void`

Callback fired before the "exiting" status is applied.

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |

##### Returns

`void`

#### Inherited from

StandardProps.onExit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:99

___

### onExited

• `Optional` **onExited**: (`node`: `HTMLElement`) => `void`

#### Type declaration

▸ (`node`): `void`

Callback fired after the "exited" status is applied.

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |

##### Returns

`void`

#### Inherited from

StandardProps.onExited

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:109

___

### onExiting

• `Optional` **onExiting**: (`node`: `HTMLElement`) => `void`

#### Type declaration

▸ (`node`): `void`

Callback fired after the "exiting" status is applied.

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `HTMLElement` |

##### Returns

`void`

#### Inherited from

StandardProps.onExiting

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:104

___

### orientation

• `Optional` **orientation**: ``"horizontal"`` \| ``"vertical"``

The transition orientation.

**`default`** 'vertical'

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:40

___

### ref

• `Optional` **ref**: [`Ref`](../modules/components_Container._internal_.md#ref)<`unknown`\>

#### Inherited from

StandardProps.ref

#### Defined in

node_modules/@mui/material/index.d.ts:38

___

### style

• `Optional` **style**: [`CSSProperties`](components_Container._internal_.CSSProperties.md)

#### Inherited from

StandardProps.style

#### Defined in

node_modules/@mui/material/transitions/transition.d.ts:13

___

### sx

• `Optional` **sx**: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\>

The system prop that allows defining system overrides as well as additional CSS styles.

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:52

___

### timeout

• `Optional` **timeout**: `number` \| ``"auto"`` \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  } \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  }

The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

Set to 'auto' to automatically calculate transition time based on height.

**`default`** duration.standard

#### Defined in

node_modules/@mui/material/Collapse/Collapse.d.ts:48

___

### unmountOnExit

• `Optional` **unmountOnExit**: `boolean`

By default the child component stays mounted after it reaches the
'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
component after it finishes exiting.

#### Inherited from

StandardProps.unmountOnExit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:73
