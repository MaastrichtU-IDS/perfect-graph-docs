[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/DataBar

# Module: components/GraphEditor/DataBar

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_DataBar._internal_.md)

### Type aliases

- [DataBarProps](components_GraphEditor_DataBar#databarprops)

### Functions

- [DataBar](components_GraphEditor_DataBar#databar)
- [EdgeElementSummary](components_GraphEditor_DataBar#edgeelementsummary)
- [isValidURL](components_GraphEditor_DataBar#isvalidurl)

## Type aliases

### DataBarProps

Ƭ **DataBarProps**: `Object`

#### Type declaration

| Name        | Type       |
| :---------- | :--------- |
| `editable?` | `boolean`  |
| `footer?`   | `React.FC` |
| `header?`   | `React.FC` |
| `isOpen?`   | `boolean`  |
| `sort?`     | `any`      |

#### Defined in

[components/GraphEditor/DataBar/index.tsx:26](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataBar/index.tsx#L26)

## Functions

### DataBar

▸ `Const` **DataBar**(`props`): `Element`

#### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `props` | [`DataBarProps`](components_GraphEditor_DataBar#databarprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataBar/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataBar/index.tsx#L34)

---

### EdgeElementSummary

▸ `Const` **EdgeElementSummary**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                           |
| :------ | :--------------------------------------------------------------------------------------------- |
| `props` | [`EdgeElementSummaryProps`](components_GraphEditor_DataBar._internal_#edgeelementsummaryprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/DataBar/index.tsx:276](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataBar/index.tsx#L276)

---

### isValidURL

▸ `Const` **isValidURL**(`value`): `boolean`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[components/GraphEditor/DataBar/index.tsx:296](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataBar/index.tsx#L296)
