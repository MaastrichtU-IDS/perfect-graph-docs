[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ExtendBadgeUnstyledTypeMap

# Interface: ExtendBadgeUnstyledTypeMap<M\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ExtendBadgeUnstyledTypeMap

Utility to create component types that inherit props from BadgeUnstyled.

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`OverridableTypeMap`](components_GraphEditor_DataEditor._internal_.OverridableTypeMap-1.md) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.ExtendBadgeUnstyledTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.ExtendBadgeUnstyledTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `M`[``"defaultComponent"``]

#### Defined in

node_modules/@mui/core/BadgeUnstyled/BadgeUnstyled.d.ts:84

___

### props

• **props**: `M`[``"props"``] & { `anchorOrigin?`: [`BadgeOrigin`](components_GraphEditor_DataEditor._internal_.BadgeOrigin.md) ; `badgeContent?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `children?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`BadgeUnstyledClasses`](components_GraphEditor_DataEditor._internal_.BadgeUnstyledClasses.md)\> ; `components?`: { `Badge?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `Root?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\>  } ; `componentsProps?`: { `badge?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`BadgeUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.BadgeUnstyledComponentsPropsOverrides.md) ; `root?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLSpanElement`\> & [`BadgeUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.BadgeUnstyledComponentsPropsOverrides.md)  } ; `invisible?`: `boolean` ; `max?`: `number` ; `overlap?`: ``"circular"`` \| ``"rectangular"`` ; `showZero?`: `boolean` ; `variant?`: `string`  }

#### Defined in

node_modules/@mui/core/BadgeUnstyled/BadgeUnstyled.d.ts:83
