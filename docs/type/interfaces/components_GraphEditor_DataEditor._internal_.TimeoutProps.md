[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TimeoutProps

# Interface: TimeoutProps<RefElement\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TimeoutProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `RefElement` | extends `undefined` \| `HTMLElement` |

## Hierarchy

- [`BaseTransitionProps`](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md)<`RefElement`\>

  ↳ **`TimeoutProps`**

## Table of contents

### Properties

- [addEndListener](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#addendlistener)
- [children](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#children)
- [in](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#in)
- [mountOnEnter](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#mountonenter)
- [nodeRef](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#noderef)
- [onEnter](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onenter)
- [onEntered](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onentered)
- [onEntering](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onentering)
- [onExit](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onexit)
- [onExited](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onexited)
- [onExiting](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#onexiting)
- [timeout](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#timeout)
- [unmountOnExit](components_GraphEditor_DataEditor._internal_.TimeoutProps.md#unmountonexit)

## Properties

### addEndListener

• `Optional` **addEndListener**: [`EndHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#endhandler)<`RefElement`\>

Add a custom transition end trigger. Called with the transitioning DOM
node and a done callback. Allows for more fine grained transition end
logic. Note: Timeouts are still used as a fallback if provided.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:167

___

### children

• `Optional` **children**: [`TransitionChildren`](../modules/components_GraphEditor_DataEditor._internal_.md#transitionchildren)

A function child can be used instead of a React element. This function is
called with the current transition status ('entering', 'entered',
'exiting',  'exited', 'unmounted'), which can be used to apply context
specific props to a component.
```jsx
   <Transition in={this.state.in} timeout={150}>
       {state => (
           <MyComponent className={`fade fade-${state}`} />
       )}
   </Transition>
```

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[children](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#children)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:124

___

### in

• `Optional` **in**: `boolean`

Show the component; triggers the enter or exit states

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[in](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#in)

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

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[mountOnEnter](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#mountonenter)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:66

___

### nodeRef

• `Optional` **nodeRef**: [`Ref`](../modules/components_Container._internal_.md#ref)<`RefElement`\>

A React reference to DOM element that need to transition: https://stackoverflow.com/a/51127130/4671932
When `nodeRef` prop is used, node is not passed to callback functions (e.g. onEnter) because user already has direct access to the node.
When changing `key` prop of `Transition` in a `TransitionGroup` a new `nodeRef` need to be provided to `Transition` with changed `key`
prop (@see https://github.com/reactjs/react-transition-group/blob/master/test/Transition-test.js).

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[nodeRef](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#noderef)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:132

___

### onEnter

• `Optional` **onEnter**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired before the "entering" status is applied. An extra
parameter `isAppearing` is supplied to indicate if the enter stage is
occurring on the initial mount

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onEnter](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onenter)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:80

___

### onEntered

• `Optional` **onEntered**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired after the "entered" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onEntered](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onentered)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:94

___

### onEntering

• `Optional` **onEntering**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired after the "entering" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onEntering](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onentering)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:87

___

### onExit

• `Optional` **onExit**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired before the "exiting" status is applied.

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onExit](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexit)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:99

___

### onExited

• `Optional` **onExited**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired after the "exited" status is applied.

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onExited](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexited)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:109

___

### onExiting

• `Optional` **onExiting**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired after the "exiting" status is applied.

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[onExiting](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexiting)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:104

___

### timeout

• **timeout**: `number` \| { `appear?`: `number` ; `enter?`: `number` ; `exit?`: `number`  }

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

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:160

___

### unmountOnExit

• `Optional` **unmountOnExit**: `boolean`

By default the child component stays mounted after it reaches the
'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
component after it finishes exiting.

#### Inherited from

[BaseTransitionProps](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md).[unmountOnExit](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#unmountonexit)

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:73
