[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TabsTypeMap

# Interface: TabsTypeMap<P, D\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TabsTypeMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `D` | extends [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype) = typeof [`ButtonBase`](../modules/components_GraphEditor_DataEditor._internal_.md#buttonbase) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.TabsTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.TabsTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `D`

#### Defined in

node_modules/@mui/material/Tabs/Tabs.d.ts:129

___

### props

• **props**: `P` & { `ScrollButtonComponent?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `TabIndicatorProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLDivElement`\>\> ; `TabScrollButtonProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TabScrollButtonProps`](components_GraphEditor_DataEditor._internal_.TabScrollButtonProps.md)\> ; `action?`: [`Ref`](../modules/components_Container._internal_.md#ref)<[`TabsActions`](components_GraphEditor_DataEditor._internal_.TabsActions.md)\> ; `allowScrollButtonsMobile?`: `boolean` ; `aria-label?`: `string` ; `aria-labelledby?`: `string` ; `centered?`: `boolean` ; `children?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TabsClasses`](components_GraphEditor_DataEditor._internal_.TabsClasses.md)\> ; `indicatorColor?`: ``"primary"`` \| ``"secondary"`` ; `orientation?`: ``"horizontal"`` \| ``"vertical"`` ; `scrollButtons?`: `boolean` \| ``"auto"`` ; `selectionFollowsFocus?`: `boolean` ; `sx?`: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\> ; `textColor?`: ``"inherit"`` \| ``"primary"`` \| ``"secondary"`` ; `value?`: `any` ; `variant?`: ``"standard"`` \| ``"fullWidth"`` \| ``"scrollable"`` ; `visibleScrollbar?`: `boolean` ; `onChange?`: (`event`: [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\>, `value`: `any`) => `void`  }

#### Defined in

node_modules/@mui/material/Tabs/Tabs.d.ts:10
