[perfect-graph](../README.md) / [Modules](../modules.md) / components/ContextMenu

# Module: components/ContextMenu

## Table of contents

### Type aliases

- [ContextMenuProps](components_ContextMenu.md#contextmenuprops)

### Functions

- [ContextMenu](components_ContextMenu.md#contextmenu)

## Type aliases

### ContextMenuProps

Ƭ **ContextMenuProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | `React.ReactNode` |
| `graphEditorRef` | `React.MutableRefObject`<[`GraphEditorRef`](type.md#grapheditorref)\> |
| `items?` | { `label`: `string` ; `value`: `string`  }[] |
| `open?` | `boolean` |
| `position?` | `Position` |
| `onSelect?` | (`value`: `string`) => `void` |

#### Defined in

[src/components/ContextMenu.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/ContextMenu.tsx#L10)

## Functions

### ContextMenu

▸ `Const` **ContextMenu**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ContextMenuProps`](components_ContextMenu.md#contextmenuprops) |

#### Returns

`Element`

#### Defined in

[src/components/ContextMenu.tsx:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/ContextMenu.tsx#L21)
