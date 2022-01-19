[perfect-graph](../README.md) / [Modules](../modules.md) / components/ClusterNodeContainer

# Module: components/ClusterNodeContainer

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_ClusterNodeContainer._internal_.md)

### Type aliases

- [ClusterNodeContainerProps](components_ClusterNodeContainer#clusternodecontainerprops)
- [ClusterNodeContainerType](components_ClusterNodeContainer#clusternodecontainertype)

### Variables

- [ClusterNodeContainer](components_ClusterNodeContainer#clusternodecontainer)

## Type aliases

### ClusterNodeContainerProps

Ƭ **ClusterNodeContainerProps**: `Object`

#### Type declaration

| Name       | Type                                                                                  | Description                |
| :--------- | :------------------------------------------------------------------------------------ | :------------------------- |
| `children` | [`RenderClusterNode`](components_ClusterNodeContainer._internal_#renderclusternode)   | -                          |
| `config?`  | [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig)                 | Cluster node config        |
| `graphID`  | `string`                                                                              | Related graph id           |
| `graphRef` | `React.RefObject`<[`GraphRef`](components_ClusterNodeContainer._internal_#graphref)\> | Related graph instance ref |
| `item`     | [`Cluster`](components_ClusterNodeContainer._internal_#cluster)                       | Cluster node data          |

#### Defined in

[components/ClusterNodeContainer/index.tsx:18](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/ClusterNodeContainer/index.tsx#L18)

---

### ClusterNodeContainerType

Ƭ **ClusterNodeContainerType**: `React.ForwardedRef`<[`ClusterNodeContainerProps`](components_ClusterNodeContainer#clusternodecontainerprops)\>

#### Defined in

[components/ClusterNodeContainer/index.tsx:39](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/ClusterNodeContainer/index.tsx#L39)

## Variables

### ClusterNodeContainer

• **ClusterNodeContainer**: `FC`<[`ClusterNodeContainerProps`](components_ClusterNodeContainer#clusternodecontainerprops)\>

The container for ClusterNodes. It facilitates drag, visibility, and other
operations.

#### Defined in

[components/ClusterNodeContainer/index.tsx:124](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/ClusterNodeContainer/index.tsx#L124)
