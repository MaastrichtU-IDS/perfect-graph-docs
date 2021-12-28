[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TransitionActions

# Interface: TransitionActions

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TransitionActions

## Hierarchy

- **`TransitionActions`**

  ↳ [`TransitionProps`](components_GraphEditor_DataEditor._internal_.TransitionProps.md)

## Table of contents

### Properties

- [appear](components_GraphEditor_DataEditor._internal_.TransitionActions.md#appear)
- [enter](components_GraphEditor_DataEditor._internal_.TransitionActions.md#enter)
- [exit](components_GraphEditor_DataEditor._internal_.TransitionActions.md#exit)

## Properties

### appear

• `Optional` **appear**: `boolean`

Normally a component is not transitioned if it is shown when the
`<Transition>` component mounts. If you want to transition on the first
mount set  appear to true, and the component will transition in as soon
as the `<Transition>` mounts. Note: there are no specific "appear" states.
appear only adds an additional enter transition.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:40

___

### enter

• `Optional` **enter**: `boolean`

Enable or disable enter transitions.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:45

___

### exit

• `Optional` **exit**: `boolean`

Enable or disable exit transitions.

#### Defined in

node_modules/@types/react-transition-group/Transition.d.ts:50
