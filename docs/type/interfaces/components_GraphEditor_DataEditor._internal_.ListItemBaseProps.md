[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ListItemBaseProps

# Interface: ListItemBaseProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ListItemBaseProps

## Table of contents

### Properties

- [ContainerComponent](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#containercomponent)
- [ContainerProps](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#containerprops)
- [alignItems](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#alignitems)
- [autoFocus](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#autofocus)
- [children](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#children)
- [classes](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#classes)
- [dense](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#dense)
- [disableGutters](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#disablegutters)
- [disablePadding](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#disablepadding)
- [disabled](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#disabled)
- [divider](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#divider)
- [secondaryAction](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#secondaryaction)
- [selected](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#selected)
- [sx](components_GraphEditor_DataEditor._internal_.ListItemBaseProps.md#sx)

## Properties

### ContainerComponent

• `Optional` **ContainerComponent**: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<[`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLDivElement`\>\>

The container component used when a `ListItemSecondaryAction` is the last child.

**`default`** 'li'

**`deprecated`**

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:37

___

### ContainerProps

• `Optional` **ContainerProps**: [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)<`HTMLDivElement`\>

Props applied to the container component if used.

**`default`** {}

**`deprecated`**

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:43

___

### alignItems

• `Optional` **alignItems**: ``"center"`` \| ``"flex-start"``

Defines the `align-items` style property.

**`default`** 'center'

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:15

___

### autoFocus

• `Optional` **autoFocus**: `boolean`

If `true`, the list item is focused during the first mount.
Focus will also be triggered if the value changes from false to true.

**`default`** false

**`deprecated`** checkout [ListItemButton](/api/list-item-button/) instead

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:22

___

### children

• `Optional` **children**: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

The content of the component if a `ListItemSecondaryAction` is used it must
be the last child.

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:27

___

### classes

• `Optional` **classes**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ListItemClasses`](components_GraphEditor_DataEditor._internal_.ListItemClasses.md)\>

Override or extend the styles applied to the component.

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:31

___

### dense

• `Optional` **dense**: `boolean`

If `true`, compact vertical padding designed for keyboard and mouse input is used.
The prop defaults to the value inherited from the parent List component.

**`default`** false

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:49

___

### disableGutters

• `Optional` **disableGutters**: `boolean`

If `true`, the left and right padding is removed.

**`default`** false

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:60

___

### disablePadding

• `Optional` **disablePadding**: `boolean`

If `true`, all padding is removed.

**`default`** false

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:65

___

### disabled

• `Optional` **disabled**: `boolean`

If `true`, the component is disabled.

**`default`** false

**`deprecated`** checkout [ListItemButton](/api/list-item-button/) instead

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:55

___

### divider

• `Optional` **divider**: `boolean`

If `true`, a 1px light border is added to the bottom of the list item.

**`default`** false

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:70

___

### secondaryAction

• `Optional` **secondaryAction**: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

The element to display at the end of ListItem.

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:74

___

### selected

• `Optional` **selected**: `boolean`

Use to apply selected styling.

**`default`** false

**`deprecated`** checkout [ListItemButton](/api/list-item-button/) instead

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:80

___

### sx

• `Optional` **sx**: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\>

The system prop that allows defining system overrides as well as additional CSS styles.

#### Defined in

node_modules/@mui/material/ListItem/ListItem.d.ts:84
