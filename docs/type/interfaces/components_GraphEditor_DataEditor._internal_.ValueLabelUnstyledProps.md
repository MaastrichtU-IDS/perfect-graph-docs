[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ValueLabelUnstyledProps

# Interface: ValueLabelUnstyledProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ValueLabelUnstyledProps

## Table of contents

### Properties

- [className](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md#classname)
- [components](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md#components)
- [style](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md#style)
- [value](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md#value)
- [valueLabelDisplay](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md#valuelabeldisplay)

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderValueLabelUnstyled.d.ts:4

___

### components

• `Optional` **components**: `Object`

The components used for each slot inside the ValueLabel.
Either a string to use a HTML element or a component.

**`default`** {}

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Root?` | [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> |

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderValueLabelUnstyled.d.ts:11

___

### style

• `Optional` **style**: [`CSSProperties`](components_Container._internal_.CSSProperties.md)

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderValueLabelUnstyled.d.ts:5

___

### value

• `Optional` **value**: `number` \| `number`[]

The value of the slider.
For ranged sliders, provide an array with two values.

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderValueLabelUnstyled.d.ts:18

___

### valueLabelDisplay

• `Optional` **valueLabelDisplay**: ``"on"`` \| ``"off"`` \| ``"auto"``

Controls when the value label is displayed:

- `auto` the value label will display when the thumb is hovered or focused.
- `on` will display persistently.
- `off` will never display.

**`default`** 'off'

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderValueLabelUnstyled.d.ts:27
