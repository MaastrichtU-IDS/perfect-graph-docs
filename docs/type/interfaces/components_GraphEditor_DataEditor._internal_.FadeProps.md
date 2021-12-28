[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / FadeProps

# Interface: FadeProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).FadeProps

## Hierarchy

- [`Omit`](../modules/components_ClusterNodeContainer._internal_.md#omit)<[`TransitionProps`](components_GraphEditor_DataEditor._internal_.TransitionProps.md), ``"children"``\>

  ↳ **`FadeProps`**

## Table of contents

### Properties

- [addEndListener](components_GraphEditor_DataEditor._internal_.FadeProps.md#addendlistener)
- [appear](components_GraphEditor_DataEditor._internal_.FadeProps.md#appear)
- [children](components_GraphEditor_DataEditor._internal_.FadeProps.md#children)
- [easing](components_GraphEditor_DataEditor._internal_.FadeProps.md#easing)
- [enter](components_GraphEditor_DataEditor._internal_.FadeProps.md#enter)
- [exit](components_GraphEditor_DataEditor._internal_.FadeProps.md#exit)
- [in](components_GraphEditor_DataEditor._internal_.FadeProps.md#in)
- [mountOnEnter](components_GraphEditor_DataEditor._internal_.FadeProps.md#mountonenter)
- [onEnter](components_GraphEditor_DataEditor._internal_.FadeProps.md#onenter)
- [onEntered](components_GraphEditor_DataEditor._internal_.FadeProps.md#onentered)
- [onEntering](components_GraphEditor_DataEditor._internal_.FadeProps.md#onentering)
- [onExit](components_GraphEditor_DataEditor._internal_.FadeProps.md#onexit)
- [onExited](components_GraphEditor_DataEditor._internal_.FadeProps.md#onexited)
- [onExiting](components_GraphEditor_DataEditor._internal_.FadeProps.md#onexiting)
- [ref](components_GraphEditor_DataEditor._internal_.FadeProps.md#ref)
- [style](components_GraphEditor_DataEditor._internal_.FadeProps.md#style)
- [timeout](components_GraphEditor_DataEditor._internal_.FadeProps.md#timeout)
- [unmountOnExit](components_GraphEditor_DataEditor._internal_.FadeProps.md#unmountonexit)

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

Omit.addEndListener

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:167

___

### appear

• `Optional` **appear**: `boolean`

Perform the enter transition when it first mounts if `in` is also `true`.
Set this to `false` to disable this behavior.

**`default`** true

#### Overrides

Omit.appear

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:10

___

### children

• **children**: [`ReactElement`](components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `any`\>

A single child content element.

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:14

___

### easing

• `Optional` **easing**: `string` \| { `enter?`: `string` ; `exit?`: `string`  }

The transition timing function.
You may specify a single easing or a object containing enter and exit values.

#### Overrides

Omit.easing

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:19

___

### enter

• `Optional` **enter**: `boolean`

Enable or disable enter transitions.

#### Inherited from

Omit.enter

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:45

___

### exit

• `Optional` **exit**: `boolean`

Enable or disable exit transitions.

#### Inherited from

Omit.exit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:50

___

### in

• `Optional` **in**: `boolean`

If `true`, the component will transition in.

#### Overrides

Omit.in

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:23

___

### mountOnEnter

• `Optional` **mountOnEnter**: `boolean`

By default the child component is mounted immediately along with the
parent Transition component. If you want to "lazy mount" the component on
the first `in={true}` you can set `mountOnEnter`. After the first enter
transition the component will stay mounted, even on "exited", unless you
also specify `unmountOnExit`.

#### Inherited from

Omit.mountOnEnter

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

Omit.onEnter

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

Omit.onEntered

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

Omit.onEntering

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

Omit.onExit

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

Omit.onExited

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

Omit.onExiting

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:104

___

### ref

• `Optional` **ref**: [`Ref`](../modules/components_Container._internal_.md#ref)<`unknown`\>

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:24

___

### style

• `Optional` **style**: [`CSSProperties`](components_Container._internal_.CSSProperties.md)

#### Inherited from

Omit.style

#### Defined in

node_modules/@mui/material/transitions/transition.d.ts:13

___

### timeout

• `Optional` **timeout**: `number` \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  } \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  }

The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.

**`default`** {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
}

#### Overrides

Omit.timeout

#### Defined in

node_modules/@mui/material/Fade/Fade.d.ts:33

___

### unmountOnExit

• `Optional` **unmountOnExit**: `boolean`

By default the child component stays mounted after it reaches the
'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
component after it finishes exiting.

#### Inherited from

Omit.unmountOnExit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:73
