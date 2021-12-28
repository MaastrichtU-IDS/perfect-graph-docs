[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/DataBar

# Module: components/GraphEditor/DataBar

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_DataBar._internal_.md)

### Type aliases

- [DataBarProps](components_GraphEditor_DataBar.md#databarprops)

### Functions

- [DataBar](components_GraphEditor_DataBar.md#databar)
- [EdgeElementSummary](components_GraphEditor_DataBar.md#edgeelementsummary)
- [isValidURL](components_GraphEditor_DataBar.md#isvalidurl)

## Type aliases

### DataBarProps

Ƭ **DataBarProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `editable?` | `boolean` |
| `footer?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `header?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `isOpen?` | `boolean` |
| `sort?` | `any` |

#### Defined in

[src/components/GraphEditor/DataBar/index.tsx:26](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataBar/index.tsx#L26)

## Functions

### DataBar

▸ `Const` **DataBar**(`props`): [`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DataBarProps`](components_GraphEditor_DataBar.md#databarprops) |

#### Returns

[`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

[src/components/GraphEditor/DataBar/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataBar/index.tsx#L34)

___

### EdgeElementSummary

▸ `Const` **EdgeElementSummary**(`props`): [`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`EdgeElementSummaryProps`](components_GraphEditor_DataBar._internal_.md#edgeelementsummaryprops) |

#### Returns

[`Element`](../interfaces/components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

[src/components/GraphEditor/DataBar/index.tsx:276](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataBar/index.tsx#L276)

___

### isValidURL

▸ `Const` **isValidURL**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/components/GraphEditor/DataBar/index.tsx:296](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/DataBar/index.tsx#L296)
