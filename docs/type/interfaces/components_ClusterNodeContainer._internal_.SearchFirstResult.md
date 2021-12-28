[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchFirstResult

# Interface: SearchFirstResult

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchFirstResult

## Table of contents

### Properties

- [found](components_ClusterNodeContainer._internal_.SearchFirstResult.md#found)
- [path](components_ClusterNodeContainer._internal_.SearchFirstResult.md#path)

## Properties

### found

• **found**: [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

The node found by the search
- If no node was found, then found is empty.
- If your handler function returns false, then the only the path up to that point is returned.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2933

___

### path

• **path**: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

The path of the search.
- The path returned includes edges such that if path[i] is a node, then path[i - 1] is the edge used to get to that node.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2927
