[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TransitionProps

# Interface: TransitionProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TransitionProps

## Hierarchy

- [`TransitionActions`](components_GraphEditor_DataEditor._internal_.TransitionActions.md)

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Pick`](../modules/components_ClusterNodeContainer._internal_.md#pick)<[`TransitionProps`](../modules/components_GraphEditor_DataEditor._internal_.md#transitionprops) & [`EasingProps`](components_GraphEditor_DataEditor._internal_.EasingProps.md), [`TransitionKeys`](../modules/components_GraphEditor_DataEditor._internal_.md#transitionkeys)\>\>

  ↳ **`TransitionProps`**

  ↳↳ [`SlideProps`](components_GraphEditor_DataEditor._internal_.SlideProps.md)

## Table of contents

### Properties

- [addEndListener](components_GraphEditor_DataEditor._internal_.TransitionProps.md#addendlistener)
- [appear](components_GraphEditor_DataEditor._internal_.TransitionProps.md#appear)
- [easing](components_GraphEditor_DataEditor._internal_.TransitionProps.md#easing)
- [enter](components_GraphEditor_DataEditor._internal_.TransitionProps.md#enter)
- [exit](components_GraphEditor_DataEditor._internal_.TransitionProps.md#exit)
- [in](components_GraphEditor_DataEditor._internal_.TransitionProps.md#in)
- [mountOnEnter](components_GraphEditor_DataEditor._internal_.TransitionProps.md#mountonenter)
- [onEnter](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onenter)
- [onEntered](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onentered)
- [onEntering](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onentering)
- [onExit](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onexit)
- [onExited](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onexited)
- [onExiting](components_GraphEditor_DataEditor._internal_.TransitionProps.md#onexiting)
- [style](components_GraphEditor_DataEditor._internal_.TransitionProps.md#style)
- [timeout](components_GraphEditor_DataEditor._internal_.TransitionProps.md#timeout)
- [unmountOnExit](components_GraphEditor_DataEditor._internal_.TransitionProps.md#unmountonexit)

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

Partial.addEndListener

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

[TransitionActions](components_GraphEditor_DataEditor._internal_.TransitionActions.md).[appear](components_GraphEditor_DataEditor._internal_.TransitionActions.md#appear)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:40

___

### easing

• `Optional` **easing**: `string` \| { `enter?`: `string` ; `exit?`: `string`  }

#### Inherited from

Partial.easing

#### Defined in

node_modules/@mui/material/transitions/transition.d.ts:6

___

### enter

• `Optional` **enter**: `boolean`

Enable or disable enter transitions.

#### Inherited from

[TransitionActions](components_GraphEditor_DataEditor._internal_.TransitionActions.md).[enter](components_GraphEditor_DataEditor._internal_.TransitionActions.md#enter)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:45

___

### exit

• `Optional` **exit**: `boolean`

Enable or disable exit transitions.

#### Inherited from

[TransitionActions](components_GraphEditor_DataEditor._internal_.TransitionActions.md).[exit](components_GraphEditor_DataEditor._internal_.TransitionActions.md#exit)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:50

___

### in

• `Optional` **in**: `boolean`

Show the component; triggers the enter or exit states

#### Inherited from

Partial.in

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:57

___

### mountOnEnter

• `Optional` **mountOnEnter**: `boolean`

By default the child component is mounted immediately along with the
parent Transition component. If you want to "lazy mount" the component on
the first `in={true}` you can set `mountOnEnter`. After the first enter
transition the component will stay mounted, even on "exited", unless you
also specify `unmountOnExit`.

#### Inherited from

Partial.mountOnEnter

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

Partial.onEnter

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

Partial.onEntered

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

Partial.onEntering

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

Partial.onExit

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

Partial.onExited

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

Partial.onExiting

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:104

___

### style

• `Optional` **style**: [`CSSProperties`](components_Container._internal_.CSSProperties.md)

#### Defined in

node_modules/@mui/material/transitions/transition.d.ts:13

___

### timeout

• `Optional` **timeout**: `number` \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  } \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  }

The duration of the transition, in milliseconds. Required unless addEndListener is provided.

You may specify a single timeout for all transitions:
```js
  timeout={500}
```
or individually:
```js
timeout={{
 appear: 500,
 enter: 300,
 exit: 500,
}}
```
- appear defaults to the value of `enter`
- enter defaults to `0`
- exit defaults to `0`

#### Inherited from

Partial.timeout

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:160

___

### unmountOnExit

• `Optional` **unmountOnExit**: `boolean`

By default the child component stays mounted after it reaches the
'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
component after it finishes exiting.

#### Inherited from

Partial.unmountOnExit

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:73
