[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ExtendModalUnstyledTypeMap

# Interface: ExtendModalUnstyledTypeMap<M\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ExtendModalUnstyledTypeMap

Utility to create component types that inherit props from ModalUnstyled.

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`OverridableTypeMap`](components_GraphEditor_DataEditor._internal_.OverridableTypeMap-1.md) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.ExtendModalUnstyledTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.ExtendModalUnstyledTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `M`[``"defaultComponent"``]

#### Defined in

node_modules/@mui/core/ModalUnstyled/ModalUnstyled.d.ts:133

___

### props

• **props**: `M`[``"props"``] & { `BackdropComponent?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> ; `BackdropProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`BackdropUnstyledProps`](../modules/components_GraphEditor_DataEditor._internal_.md#backdropunstyledprops)<``"div"``, {}\>\> ; `children`: [`ReactElement`](components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](../modules/components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\> ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ModalUnstyledClasses`](components_GraphEditor_DataEditor._internal_.ModalUnstyledClasses.md)\> ; `closeAfterTransition?`: `boolean` ; `components?`: { `Root?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\>  } ; `componentsProps?`: { `root?`: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLDivElement`\> & [`ModalUnstyledComponentsPropsOverrides`](components_GraphEditor_DataEditor._internal_.ModalUnstyledComponentsPropsOverrides.md)  } ; `container?`: ``null`` \| `Element` \| () => ``null`` \| `Element` ; `disableAutoFocus?`: `boolean` ; `disableEnforceFocus?`: `boolean` ; `disableEscapeKeyDown?`: `boolean` ; `disablePortal?`: `boolean` ; `disableRestoreFocus?`: `boolean` ; `disableScrollLock?`: `boolean` ; `hideBackdrop?`: `boolean` ; `keepMounted?`: `boolean` ; `onBackdropClick?`: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<{}\> ; `onClose?`: (`event`: {}, `reason`: ``"backdropClick"`` \| ``"escapeKeyDown"``) => `void` ; `open`: `boolean`  }

#### Defined in

node_modules/@mui/core/ModalUnstyled/ModalUnstyled.d.ts:132
