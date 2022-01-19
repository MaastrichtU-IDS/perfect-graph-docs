[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/DataEditor

# Module: components/GraphEditor/DataEditor

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_DataEditor._internal_.md)

### Type aliases

- [DataEditorProps](components_GraphEditor_DataEditor#dataeditorprops)

### Functions

- [DataEditor](components_GraphEditor_DataEditor#dataeditor)
- [DataEditorElement](components_GraphEditor_DataEditor#dataeditorelement)

## Type aliases

### DataEditorProps

Ƭ **DataEditorProps**: `Object`

#### Type declaration

| Name                  | Type                                                                                                                                                                                                                          |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                | [`DataItem`](components_GraphEditor_DataEditor._internal_#dataitem)[]                                                                                                                                                         |
| `globalLabel?`        | `string`[] \| `null`                                                                                                                                                                                                          |
| `isGlobalLabelFirst?` | `boolean`                                                                                                                                                                                                                     |
| `localLabel?`         | `string`[] \| `null`                                                                                                                                                                                                          |
| `style?`              | `BoxProps`[``"style"``]                                                                                                                                                                                                       |
| `onEvent`             | (`param`: { `index?`: `number` ; `item?`: [`DataItem`](components_GraphEditor_DataEditor._internal_#dataitem) ; `payload`: `any` ; `type`: [`EventType`](components_GraphEditor_DataEditor._internal_#eventtype) }) => `void` |

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:14](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataEditor/index.tsx#L14)

## Functions

### DataEditor

▸ `Const` **DataEditor**(`props`): `Element`

#### Parameters

| Name    | Type                                                                              |
| :------ | :-------------------------------------------------------------------------------- |
| `props` | [`DataEditorProps`](components_GraphEditor_DataEditor._internal_#dataeditorprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:70](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataEditor/index.tsx#L70)

---

### DataEditorElement

▸ `Const` **DataEditorElement**(`props`): `Element`

#### Parameters

| Name    | Type                                                                   |
| :------ | :--------------------------------------------------------------------- |
| `props` | [`DataEditorProps`](components_GraphEditor_DataEditor#dataeditorprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataEditor/index.tsx:28](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataEditor/index.tsx#L28)
