[perfect-graph](../README.md) / [Modules](../modules.md) / components/ClusterNodeContainer

# Module: components/ClusterNodeContainer

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_ClusterNodeContainer._internal_.md)

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
| `children` | [`RenderClusterNode`](components_ClusterNodeContainer._internal_.md#renderclusternode) | - |
| `config?` | [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig) | Cluster node config |
| `graphID` | `string` | Related graph id |
| `graphRef` | [`RefObject`](../interfaces/components_ClusterNodeContainer._internal_.RefObject.md)<[`GraphRef`](components_ClusterNodeContainer._internal_.md#graphref)\> | Related graph instance ref |
| `item` | [`Cluster`](components_ClusterNodeContainer._internal_.md#cluster) | Cluster node data |

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/ClusterNodeContainer/index.tsx#L16)

___

### ClusterNodeContainerType

Ƭ **ClusterNodeContainerType**: [`ForwardedRef`](components_ClusterNodeContainer._internal_.md#forwardedref)<[`ClusterNodeContainerProps`](components_ClusterNodeContainer.md#clusternodecontainerprops)\>

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:37](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/ClusterNodeContainer/index.tsx#L37)

## Variables

### ClusterNodeContainer

• **ClusterNodeContainer**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`ClusterNodeContainerProps`](components_ClusterNodeContainer.md#clusternodecontainerprops)\>

The container for ClusterNodes. It facilitates drag, visibility, and other
operations.

#### Defined in

[src/components/ClusterNodeContainer/index.tsx:122](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/ClusterNodeContainer/index.tsx#L122)
