[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ExtendButtonBaseTypeMap

# Interface: ExtendButtonBaseTypeMap<M\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ExtendButtonBaseTypeMap

utility to create component types that inherit props from ButtonBase.
This component has an additional overload if the `href` prop is set which
can make extension quite tricky

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`OverridableTypeMap`](components_GraphEditor_DataEditor._internal_.OverridableTypeMap.md) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.ExtendButtonBaseTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.ExtendButtonBaseTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `M`[``"defaultComponent"``]

#### Defined in

node_modules/@mui/material/ButtonBase/ButtonBase.d.ts:94

___

### props

• **props**: `M`[``"props"``] & [`Omit`](../modules/components_ClusterNodeContainer._internal_.md#omit)<{ `LinkComponent?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `TouchRippleProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TouchRippleProps`](../modules/components_GraphEditor_DataEditor._internal_.md#touchrippleprops)\> ; `action?`: [`Ref`](../modules/components_Container._internal_.md#ref)<[`ButtonBaseActions`](components_GraphEditor_DataEditor._internal_.ButtonBaseActions.md)\> ; `centerRipple?`: `boolean` ; `children?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ButtonBaseClasses`](components_GraphEditor_DataEditor._internal_.ButtonBaseClasses.md)\> ; `disableRipple?`: `boolean` ; `disableTouchRipple?`: `boolean` ; `disabled?`: `boolean` ; `focusRipple?`: `boolean` ; `focusVisibleClassName?`: `string` ; `onFocusVisible?`: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<`any`\> ; `sx?`: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\> ; `tabIndex?`: `number`  }, ``"classes"``\>

#### Defined in

node_modules/@mui/material/ButtonBase/ButtonBase.d.ts:93
