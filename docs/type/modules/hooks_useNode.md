[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useNode

# Module: hooks/useNode

## Table of contents

### Type aliases

- [Props](hooks_useNode.md#props)

### Functions

- [useNode](hooks_useNode.md#usenode)

## Type aliases

### Props

Ƭ **Props**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`NodeConfig`](type.md#nodeconfig) | Node config data |
| `graphID` | `string` | Related graph id |
| `isCluster?` | `boolean` | Node is cluster or not |
| `item` | [`NodeData`](type.md#nodedata) | Node data |
| `position` | `Position` | Node initial position |
| `onPositionChange?` | (`c`: { `context`: [`NodeContext`](type.md#nodecontext) ; `element`: `NodeSingular`  }) => `any` | - |

#### Defined in

[src/hooks/useNode.ts:18](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useNode.ts#L18)

## Functions

### useNode

▸ `Const` **useNode**(`props`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](hooks_useNode.md#props) |

#### Returns

`Result`

#### Defined in

[src/hooks/useNode.ts:59](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useNode.ts#L59)
