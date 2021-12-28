[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TablePaginationTypeMap

# Interface: TablePaginationTypeMap<P, D\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TablePaginationTypeMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `D` | extends [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype) |

## Table of contents

### Properties

- [defaultComponent](components_GraphEditor_DataEditor._internal_.TablePaginationTypeMap.md#defaultcomponent)
- [props](components_GraphEditor_DataEditor._internal_.TablePaginationTypeMap.md#props)

## Properties

### defaultComponent

• **defaultComponent**: `D`

#### Defined in

node_modules/@mui/material/TablePagination/TablePagination.d.ts:124

___

### props

• **props**: `P` & [`TablePaginationBaseProps`](../modules/components_GraphEditor_DataEditor._internal_.md#tablepaginationbaseprops) & { `ActionsComponent?`: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<[`TablePaginationActionsProps`](components_GraphEditor_DataEditor._internal_.TablePaginationActionsProps.md)\> ; `SelectProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`SelectProps`](components_GraphEditor_DataEditor._internal_.SelectProps.md)<`unknown`\>\> ; `backIconButtonProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`IconButtonProps`](../modules/components_GraphEditor_DataEditor._internal_.md#iconbuttonprops)<``"button"``, {}\>\> ; `classes?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TablePaginationClasses`](components_GraphEditor_DataEditor._internal_.TablePaginationClasses.md)\> ; `count`: `number` ; `labelRowsPerPage?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `nextIconButtonProps?`: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`IconButtonProps`](../modules/components_GraphEditor_DataEditor._internal_.md#iconbuttonprops)<``"button"``, {}\>\> ; `onRowsPerPageChange?`: [`ChangeEventHandler`](../modules/components_Container._internal_.md#changeeventhandler)<`HTMLInputElement` \| `HTMLTextAreaElement`\> ; `page`: `number` ; `rowsPerPage`: `number` ; `rowsPerPageOptions?`: (`number` \| { `label`: `string` ; `value`: `number`  })[] ; `showFirstButton?`: `boolean` ; `showLastButton?`: `boolean` ; `sx?`: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\> ; `getItemAriaLabel?`: (`type`: ``"next"`` \| ``"previous"`` \| ``"first"`` \| ``"last"``) => `string` ; `labelDisplayedRows?`: (`paginationInfo`: [`LabelDisplayedRowsArgs`](components_GraphEditor_DataEditor._internal_.LabelDisplayedRowsArgs.md)) => [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode) ; `onPageChange`: (`event`: ``null`` \| [`MouseEvent`](components_Container._internal_.MouseEvent.md)<`HTMLButtonElement`, `MouseEvent`\>, `page`: `number`) => `void`  }

#### Defined in

node_modules/@mui/material/TablePagination/TablePagination.d.ts:19
