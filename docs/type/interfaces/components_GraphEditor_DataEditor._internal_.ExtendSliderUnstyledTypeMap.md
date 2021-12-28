[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ExtendSliderUnstyledTypeMap

# Interface: ExtendSliderUnstyledTypeMap<M\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ExtendSliderUnstyledTypeMap

Utility to create component types that inherit props from SliderUnstyled.

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`OverridableTypeMap`](components_GraphEditor_DataEditor._internal_.OverridableTypeMap-1.md) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.ExtendSliderUnstyledTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.ExtendSliderUnstyledTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `M`[``"defaultComponent"``]

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderUnstyled.d.ts:206

___

### props

• **props**: `M`[``"props"``] & { `aria-label?`: `string` ; `aria-labelledby?`: `string` ; `aria-valuetext?`: `string` ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`SliderUnstyledClasses`](components_GraphEditor_DataEditor._internal_.SliderUnstyledClasses.md)\> ; `components?`: { `Mark?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `MarkLabel?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `Rail?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `Root?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `Thumb?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `Track?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `ValueLabel?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\>  } ; `componentsProps?`: { `mark?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `markLabel?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `rail?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `root?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `thumb?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `track?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md) ; `valueLabel?`: [`ValueLabelUnstyledProps`](components_GraphEditor_DataEditor._internal_.ValueLabelUnstyledProps.md) & [`SliderUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.SliderUnstyledComponentsPropsOverrides.md)  } ; `defaultValue?`: `number` \| `number`[] ; `disableSwap?`: `boolean` ; `disabled?`: `boolean` ; `isRtl?`: `boolean` ; `marks?`: `boolean` \| [`Mark`](components_GraphEditor_DataEditor._internal_.Mark.md)[] ; `max?`: `number` ; `min?`: `number` ; `name?`: `string` ; `orientation?`: ``"horizontal"`` \| ``"vertical"`` ; `step?`: ``null`` \| `number` ; `tabIndex?`: `number` ; `track?`: ``false`` \| ``"normal"`` \| ``"inverted"`` ; `value?`: `number` \| `number`[] ; `valueLabelDisplay?`: ``"on"`` \| ``"off"`` \| ``"auto"`` ; `valueLabelFormat?`: `string` \| (`value`: `number`, `index`: `number`) => [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `getAriaLabel?`: (`index`: `number`) => `string` ; `getAriaValueText?`: (`value`: `number`, `index`: `number`) => `string` ; `onChange?`: (`event`: `Event`, `value`: `number` \| `number`[], `activeThumb`: `number`) => `void` ; `onChangeCommitted?`: (`event`: `Event` \| [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\>, `value`: `number` \| `number`[]) => `void` ; `scale?`: (`value`: `number`) => `number`  }

#### Defined in

node_modules/@mui/core/SliderUnstyled/SliderUnstyled.d.ts:205
