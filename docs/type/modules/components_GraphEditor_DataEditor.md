[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/DataEditor

# Module: components/GraphEditor/DataEditor

## Table of contents

### Type aliases

- [DataEditorProps](components_GraphEditor_DataEditor.md#dataeditorprops)

### Functions

- [DataEditor](components_GraphEditor_DataEditor.md#dataeditor)
- [DataEditorElement](components_GraphEditor_DataEditor.md#dataeditorelement)

## Type aliases

### DataEditorProps

Ƭ **DataEditorProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `DataItem`[] |
| `globalLabel?` | `string`[] \| ``null`` |
| `isGlobalLabelFirst?` | `boolean` |
| `localLabel?` | `string`[] \| ``null`` |
| `style?` | `BoxProps`[``"style"``] |
| `onEvent` | (`param`: { `index?`: `number` ; `item?`: `DataItem` ; `payload`: `any` ; `type`: `EventType`  }) => `void` |

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:14](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/DataEditor/index.tsx#L14)

## Functions

### DataEditor

▸ `Const` **DataEditor**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `DataEditorProps` |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:70](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/DataEditor/index.tsx#L70)

___

### DataEditorElement

▸ `Const` **DataEditorElement**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DataEditorProps`](components_GraphEditor_DataEditor.md#dataeditorprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:28](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/DataEditor/index.tsx#L28)
