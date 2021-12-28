[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ClickAwayListenerProps

# Interface: ClickAwayListenerProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ClickAwayListenerProps

## Table of contents

### Properties

- [children](components_GraphEditor_DataEditor._internal_.ClickAwayListenerProps.md#children)
- [disableReactTree](components_GraphEditor_DataEditor._internal_.ClickAwayListenerProps.md#disablereacttree)
- [mouseEvent](components_GraphEditor_DataEditor._internal_.ClickAwayListenerProps.md#mouseevent)
- [touchEvent](components_GraphEditor_DataEditor._internal_.ClickAwayListenerProps.md#touchevent)

### Methods

- [onClickAway](components_GraphEditor_DataEditor._internal_.ClickAwayListenerProps.md#onclickaway)

## Properties

### children

• **children**: [`ReactElement`](components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](../modules/components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\>

The wrapped element.

#### Defined in

node_modules/@mui/core/ClickAwayListener/ClickAwayListener.d.ts:8

___

### disableReactTree

• `Optional` **disableReactTree**: `boolean`

If `true`, the React tree is ignored and only the DOM tree is considered.
This prop changes how portaled elements are handled.

**`default`** false

#### Defined in

node_modules/@mui/core/ClickAwayListener/ClickAwayListener.d.ts:14

___

### mouseEvent

• `Optional` **mouseEvent**: ``false`` \| [`ClickAwayMouseEventHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#clickawaymouseeventhandler)

The mouse event to listen to. You can disable the listener by providing `false`.

**`default`** 'onClick'

#### Defined in

node_modules/@mui/core/ClickAwayListener/ClickAwayListener.d.ts:19

___

### touchEvent

• `Optional` **touchEvent**: ``false`` \| [`ClickAwayTouchEventHandler`](../modules/components_GraphEditor_DataEditor._internal_.md#clickawaytoucheventhandler)

The touch event to listen to. You can disable the listener by providing `false`.

**`default`** 'onTouchEnd'

#### Defined in

node_modules/@mui/core/ClickAwayListener/ClickAwayListener.d.ts:28

## Methods

### onClickAway

▸ **onClickAway**(`event`): `void`

Callback fired when a "click away" event is detected.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/ClickAwayListener/ClickAwayListener.d.ts:23
