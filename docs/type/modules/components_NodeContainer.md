[perfect-graph](../README.md) / [Modules](../modules.md) / components/NodeContainer

# Module: components/NodeContainer

## Table of contents

### Type aliases

- [NodeContainerProps](components_NodeContainer.md#nodecontainerprops)
- [NodeContainerType](components_NodeContainer.md#nodecontainertype)

### Variables

- [NodeContainer](components_NodeContainer.md#nodecontainer)

## Type aliases

### NodeContainerProps

Ƭ **NodeContainerProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | [`RenderNode`](components_Graph._internal_.md#rendernode) | - |
| `config` | [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig) | Node config data |
| `graphID` | `string` | Related graph id |
| `graphRef` | [`RefObject`](../interfaces/components_ClusterNodeContainer._internal_.RefObject.md)<[`GraphRef`](components_ClusterNodeContainer._internal_.md#graphref)\> | Related graph instance ref |
| `item` | `any` | Node data |

#### Defined in

[src/components/NodeContainer/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/NodeContainer/index.tsx#L16)

___

### NodeContainerType

Ƭ **NodeContainerType**: [`ForwardedRef`](components_ClusterNodeContainer._internal_.md#forwardedref)<[`NodeContainerProps`](components_NodeContainer.md#nodecontainerprops)\>

#### Defined in

[src/components/NodeContainer/index.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/NodeContainer/index.tsx#L36)

## Variables

### NodeContainer

• **NodeContainer**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`NodeContainerProps`](components_NodeContainer.md#nodecontainerprops)\>

The container for Node Elements. It facilitates drag, visibility, and other
operations.

#### Defined in

[src/components/NodeContainer/index.tsx:120](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/NodeContainer/index.tsx#L120)
