[perfect-graph](../README.md) / [Modules](../modules.md) / components/NodeContainer

# Module: components/NodeContainer

## Table of contents

### Type aliases

- [NodeContainerProps](components_NodeContainer#nodecontainerprops)
- [NodeContainerType](components_NodeContainer#nodecontainertype)

### Variables

- [NodeContainer](components_NodeContainer#nodecontainer)

## Type aliases

### NodeContainerProps

Ƭ **NodeContainerProps**: `Object`

#### Type declaration

| Name       | Type                                                                                  | Description                |
| :--------- | :------------------------------------------------------------------------------------ | :------------------------- |
| `children` | [`RenderNode`](components_Graph._internal_#rendernode)                                | -                          |
| `config`   | [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig)                 | Node config data           |
| `graphID`  | `string`                                                                              | Related graph id           |
| `graphRef` | `React.RefObject`<[`GraphRef`](components_ClusterNodeContainer._internal_#graphref)\> | Related graph instance ref |
| `item`     | `any`                                                                                 | Node data                  |

#### Defined in

[components/NodeContainer/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/NodeContainer/index.tsx#L16)

---

### NodeContainerType

Ƭ **NodeContainerType**: `React.ForwardedRef`<[`NodeContainerProps`](components_NodeContainer#nodecontainerprops)\>

#### Defined in

[components/NodeContainer/index.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/NodeContainer/index.tsx#L36)

## Variables

### NodeContainer

• **NodeContainer**: `FC`<[`NodeContainerProps`](components_NodeContainer#nodecontainerprops)\>

The container for Node Elements. It facilitates drag, visibility, and other
operations.

#### Defined in

[components/NodeContainer/index.tsx:120](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/NodeContainer/index.tsx#L120)
