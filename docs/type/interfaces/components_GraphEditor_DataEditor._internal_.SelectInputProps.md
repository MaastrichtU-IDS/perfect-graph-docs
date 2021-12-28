[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / SelectInputProps

# Interface: SelectInputProps<T\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).SelectInputProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [IconComponent](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#iconcomponent)
- [MenuProps](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#menuprops)
- [SelectDisplayProps](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#selectdisplayprops)
- [autoFocus](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#autofocus)
- [autoWidth](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#autowidth)
- [disabled](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#disabled)
- [multiple](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#multiple)
- [name](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#name)
- [native](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#native)
- [onBlur](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#onblur)
- [onFocus](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#onfocus)
- [open](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#open)
- [readOnly](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#readonly)
- [sx](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#sx)
- [tabIndex](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#tabindex)
- [value](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#value)
- [variant](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#variant)

### Methods

- [inputRef](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#inputref)
- [onChange](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#onchange)
- [onClose](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#onclose)
- [onOpen](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#onopen)
- [renderValue](components_GraphEditor_DataEditor._internal_.SelectInputProps.md#rendervalue)

## Properties

### IconComponent

• `Optional` **IconComponent**: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:19

___

### MenuProps

• `Optional` **MenuProps**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`MenuProps`](components_GraphEditor_DataEditor._internal_.MenuProps.md)\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:23

___

### SelectDisplayProps

• `Optional` **SelectDisplayProps**: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLDivElement`\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:35

___

### autoFocus

• `Optional` **autoFocus**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:16

___

### autoWidth

• **autoWidth**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:17

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:18

___

### multiple

• **multiple**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:24

___

### name

• `Optional` **name**: `string`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:25

___

### native

• **native**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:26

___

### onBlur

• `Optional` **onBlur**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<`any`\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:27

___

### onFocus

• `Optional` **onFocus**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<`any`\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:30

___

### open

• `Optional` **open**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:32

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:33

___

### sx

• `Optional` **sx**: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\>

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:36

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:37

___

### value

• `Optional` **value**: `T`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:38

___

### variant

• `Optional` **variant**: ``"filled"`` \| ``"standard"`` \| ``"outlined"``

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:39

## Methods

### inputRef

▸ `Optional` **inputRef**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `HTMLSelectElement` \| { `node`: `HTMLInputElement` ; `value`: `undefined` \| `T`  } |

#### Returns

`void`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:20

___

### onChange

▸ `Optional` **onChange**(`event`, `child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`SelectChangeEvent`](../modules/components_GraphEditor_DataEditor._internal_.md#selectchangeevent)<`T`\> |
| `child` | [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) |

#### Returns

`void`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:28

___

### onClose

▸ `Optional` **onClose**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> |

#### Returns

`void`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:29

___

### onOpen

▸ `Optional` **onOpen**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> |

#### Returns

`void`

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:31

___

### renderValue

▸ `Optional` **renderValue**(`value`): [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

[`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

#### Defined in

node_modules/@mui/material/Select/SelectInput.d.ts:34
