[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/DataEditor

# Module: components/GraphEditor/DataEditor

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_DataEditor._internal_.md)

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
| `data` | [`DataItem`](components_GraphEditor_DataEditor._internal_.md#dataitem)[] |
| `globalLabel?` | `string`[] \| ``null`` |
| `isGlobalLabelFirst?` | `boolean` |
| `localLabel?` | `string`[] \| ``null`` |
| `style?` | [`BoxProps`](components_GraphEditor_DataEditor._internal_.md#boxprops)[``"style"``] |
| `onEvent` | (`param`: { `index?`: `number` ; `item?`: [`DataItem`](components_GraphEditor_DataEditor._internal_.md#dataitem) ; `payload`: `any` ; `type`: [`EventType`](components_GraphEditor_DataEditor._internal_.md#eventtype)  }) => `void` |

#### Defined in

[src/components/GraphEditor/DataEditor/index.tsx:14](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataEditor/index.tsx#L14)

## Functions

### DataEditor

▸ `Const` **DataEditor**(`props`): [`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DataEditorProps`](components_GraphEditor_DataEditor._internal_.md#dataeditorprops) |

#### Returns

[`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

[src/components/GraphEditor/DataEditor/index.tsx:70](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataEditor/index.tsx#L70)

___

### DataEditorElement

▸ `Const` **DataEditorElement**(`props`): [`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DataEditorProps`](components_GraphEditor_DataEditor.md#dataeditorprops) |

#### Returns

[`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

[src/components/GraphEditor/DataEditor/index.tsx:28](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataEditor/index.tsx#L28)
