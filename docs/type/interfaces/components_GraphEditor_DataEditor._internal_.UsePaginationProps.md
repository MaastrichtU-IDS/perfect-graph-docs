[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / UsePaginationProps

# Interface: UsePaginationProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).UsePaginationProps

## Hierarchy

- **`UsePaginationProps`**

  ↳ [`PaginationProps`](components_GraphEditor_DataEditor._internal_.PaginationProps.md)

## Table of contents

### Properties

- [boundaryCount](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#boundarycount)
- [componentName](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#componentname)
- [count](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#count)
- [defaultPage](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#defaultpage)
- [disabled](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#disabled)
- [hideNextButton](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#hidenextbutton)
- [hidePrevButton](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#hideprevbutton)
- [page](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#page)
- [showFirstButton](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#showfirstbutton)
- [showLastButton](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#showlastbutton)
- [siblingCount](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#siblingcount)

### Methods

- [onChange](components_GraphEditor_DataEditor._internal_.UsePaginationProps.md#onchange)

## Properties

### boundaryCount

• `Optional` **boundaryCount**: `number`

Number of always visible pages at the beginning and end.

**`default`** 1

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:8

___

### componentName

• `Optional` **componentName**: `string`

The name of the component where this hook is used.

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:12

___

### count

• `Optional` **count**: `number`

The total number of pages.

**`default`** 1

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:17

___

### defaultPage

• `Optional` **defaultPage**: `number`

The page selected by default when the component is uncontrolled.

**`default`** 1

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:22

___

### disabled

• `Optional` **disabled**: `boolean`

If `true`, the component is disabled.

**`default`** false

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:27

___

### hideNextButton

• `Optional` **hideNextButton**: `boolean`

If `true`, hide the next-page button.

**`default`** false

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:32

___

### hidePrevButton

• `Optional` **hidePrevButton**: `boolean`

If `true`, hide the previous-page button.

**`default`** false

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:37

___

### page

• `Optional` **page**: `number`

The current page.

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:48

___

### showFirstButton

• `Optional` **showFirstButton**: `boolean`

If `true`, show the first-page button.

**`default`** false

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:53

___

### showLastButton

• `Optional` **showLastButton**: `boolean`

If `true`, show the last-page button.

**`default`** false

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:58

___

### siblingCount

• `Optional` **siblingCount**: `number`

Number of always visible pages before and after the current page.

**`default`** 1

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:63

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `page`): `void`

Callback fired when the page is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`ChangeEvent`](components_Container._internal_.ChangeEvent.md)<`unknown`\> | The event source of the callback. |
| `page` | `number` | The page selected. |

#### Returns

`void`

#### Defined in

node_modules/@mui/material/usePagination/usePagination.d.ts:44
