[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useElement

# Module: hooks/useElement

## Table of contents

### Type aliases

- [Props](hooks_useElement.md#props)

### Functions

- [useElement](hooks_useElement.md#useelement)

## Type aliases

### Props

Ƭ **Props**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`NodeConfig`](type.md#nodeconfig) \| [`EdgeConfig`](type.md#edgeconfig) | The element config |
| `contextRef` | `React.RefObject`<[`ElementContext`](type.md#elementcontext)\> | The element context reference |
| `cy` | `Core` | The created cytoscape instance |
| `element` | [`Element`](type.md#element) | Related element |
| `filter?` | [`ElementFilterOption`](type.md#elementfilteroption)<[`Element`](type.md#element)\> | The Filter config |
| `item` | [`ElementData`](type.md#elementdata) | Element data |

#### Defined in

[src/hooks/useElement.ts:14](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useElement.ts#L14)

## Functions

### useElement

▸ `Const` **useElement**(`props`): `Result`

To support common features of node and edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](hooks_useElement.md#props) |

#### Returns

`Result`

#### Defined in

[src/hooks/useElement.ts:50](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useElement.ts#L50)
