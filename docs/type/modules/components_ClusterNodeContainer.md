[perfect-graph](../README.md) / [Modules](../modules.md) / components/ClusterNodeContainer

# Module: components/ClusterNodeContainer

## Table of contents

### Type aliases

- [ClusterNodeContainerProps](components_ClusterNodeContainer.md#clusternodecontainerprops)
- [ClusterNodeContainerType](components_ClusterNodeContainer.md#clusternodecontainertype)

### Variables

- [ClusterNodeContainer](components_ClusterNodeContainer.md#clusternodecontainer)

## Type aliases

### ClusterNodeContainerProps

Ƭ **ClusterNodeContainerProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | [`RenderClusterNode`](type.md#renderclusternode) | - |
| `config?` | [`NodeConfig`](type.md#nodeconfig) | Cluster node config |
| `graphID` | `string` | Related graph id |
| `graphRef` | `React.RefObject`<[`GraphRef`](type.md#graphref)\> | Related graph instance ref |
| `item` | [`Cluster`](type.md#cluster) | Cluster node data |

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/ClusterNodeContainer/index.tsx#L16)

___

### ClusterNodeContainerType

Ƭ **ClusterNodeContainerType**: `React.ForwardedRef`<[`ClusterNodeContainerProps`](components_ClusterNodeContainer.md#clusternodecontainerprops)\>

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:37](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/ClusterNodeContainer/index.tsx#L37)

## Variables

### ClusterNodeContainer

• **ClusterNodeContainer**: `FC`<[`ClusterNodeContainerProps`](components_ClusterNodeContainer.md#clusternodecontainerprops)\>

The container for ClusterNodes. It facilitates drag, visibility, and other
operations.

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:122](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/ClusterNodeContainer/index.tsx#L122)
