[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / BaseTransitionProps

# Interface: BaseTransitionProps<RefElement\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).BaseTransitionProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `RefElement` | extends `undefined` \| `HTMLElement` |

## Hierarchy

- **`BaseTransitionProps`**

  ↳ [`TimeoutProps`](components_GraphEditor_DataEditor._internal_.TimeoutProps.md)

  ↳ [`EndListenerProps`](components_GraphEditor_DataEditor._internal_.EndListenerProps.md)

## Indexable

▪ [prop: `string`]: `any`

## Table of contents

### Properties

- [children](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#children)
- [in](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#in)
- [mountOnEnter](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#mountonenter)
- [nodeRef](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#noderef)
- [onEnter](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onenter)
- [onEntered](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onentered)
- [onEntering](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onentering)
- [onExit](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexit)
- [onExited](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexited)
- [onExiting](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#onexiting)
- [unmountOnExit](components_GraphEditor_DataEditor._internal_.BaseTransitionProps.md#unmountonexit)

## Properties

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

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:124

___

### in

• `Optional` **in**: `boolean`

Show the component; triggers the enter or exit states

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

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:66

___

### nodeRef

• `Optional` **nodeRef**: [`Ref`](../modules/components_Container._internal_.md#ref)<`RefElement`\>

A React reference to DOM element that need to transition: https://stackoverflow.com/a/51127130/4671932
When `nodeRef` prop is used, node is not passed to callback functions (e.g. onEnter) because user already has direct access to the node.
When changing `key` prop of `Transition` in a `TransitionGroup` a new `nodeRef` need to be provided to `Transition` with changed `key`
prop (@see https://github.com/reactjs/react-transition-group/blob/master/test/Transition-test.js).

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:132

___

### onEnter

• `Optional` **onEnter**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired before the "entering" status is applied. An extra
parameter `isAppearing` is supplied to indicate if the enter stage is
occurring on the initial mount

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:80

___

### onEntered

• `Optional` **onEntered**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired after the "entered" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:94

___

### onEntering

• `Optional` **onEntering**: [`EnterHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#enterhandler)<`RefElement`\>

Callback fired after the "entering" status is applied. An extra parameter
isAppearing is supplied to indicate if the enter stage is occurring on
the initial mount

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:87

___

### onExit

• `Optional` **onExit**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired before the "exiting" status is applied.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:99

___

### onExited

• `Optional` **onExited**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired after the "exited" status is applied.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:109

___

### onExiting

• `Optional` **onExiting**: [`ExitHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#exithandler)<`RefElement`\>

Callback fired after the "exiting" status is applied.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:104

___

### unmountOnExit

• `Optional` **unmountOnExit**: `boolean`

By default the child component stays mounted after it reaches the
'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
component after it finishes exiting.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:73
