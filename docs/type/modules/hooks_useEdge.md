[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useEdge

# Module: hooks/useEdge

## Table of contents

### Type aliases

- [Props](hooks_useEdge.md#props)

### Functions

- [useEdge](hooks_useEdge.md#useedge)

## Type aliases

### Props

Ƭ **Props**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`EdgeConfig`](type.md#edgeconfig) | Edge config data |
| `graphID` | `string` | Related graph id |
| `item` | [`EdgeData`](type.md#edgedata) | Edge data |
| `onPositionChange?` | (`c`: { `context`: [`EdgeContext`](type.md#edgecontext) ; `cy`: `Core` ; `element`: `EdgeSingular`  }) => `void` | - |

#### Defined in

[src/hooks/useEdge.ts:15](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useEdge.ts#L15)

## Functions

### useEdge

▸ `Const` **useEdge**(`props`): `Result`

Add edge to graph by hooks

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](hooks_useEdge.md#props) |

#### Returns

`Result`

#### Defined in

[src/hooks/useEdge.ts:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useEdge.ts#L52)
