[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionAlgorithms

# Interface: CollectionAlgorithms

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionAlgorithms

http://js.cytoscape.org/#eles.closenessCentralityNormalized
trivial

## Hierarchy

- **`CollectionAlgorithms`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [aStar](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#astar)
- [bellmanFord](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#bellmanford)
- [betweennessCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#betweennesscentrality)
- [bfs](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#bfs)
- [breadthFirstSearch](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#breadthfirstsearch)
- [closenessCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#closenesscentrality)
- [closenessCentralityNormalized](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#closenesscentralitynormalized)
- [degreeCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#degreecentrality)
- [degreeCentralityNormalized](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#degreecentralitynormalized)
- [depthFirstSearch](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#depthfirstsearch)
- [dfs](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#dfs)
- [dijkstra](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#dijkstra)
- [floydWarshall](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#floydwarshall)
- [hopcroftTarjanBiconnected](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#hopcrofttarjanbiconnected)
- [hopcroftTarjanBiconnectedComponents](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#hopcrofttarjanbiconnectedcomponents)
- [htb](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#htb)
- [htbc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#htbc)
- [kargerStein](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#kargerstein)
- [kruskal](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#kruskal)
- [pageRank](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#pagerank)
- [tarjanStronglyConnected](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tarjanstronglyconnected)
- [tarjanStronglyConnectedComponents](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tarjanstronglyconnectedcomponents)
- [tsc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tsc)
- [tscc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tscc)

## Methods

### aStar

▸ **aStar**(`options`): [`SearchAStarResult`](components_ClusterNodeContainer._internal_.SearchAStarResult.md)

Perform the A* search algorithm on the elements in the collection.
This finds the shortest path from the root node to the goal node.
http://js.cytoscape.org/#eles.aStar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchAStarOptions`](components_ClusterNodeContainer._internal_.SearchAStarOptions.md) |

#### Returns

[`SearchAStarResult`](components_ClusterNodeContainer._internal_.SearchAStarResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3275

___

### bellmanFord

▸ **bellmanFord**(`options`): [`SearchBellmanFordResult`](components_ClusterNodeContainer._internal_.SearchBellmanFordResult.md)

Perform the Bellman-Ford search algorithm on the elements in the collection.
This finds the shortest path from the starting node to all other nodes in the collection.
http://js.cytoscape.org/#eles.bellmanFord

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchBellmanFordOptions`](components_ClusterNodeContainer._internal_.SearchBellmanFordOptions.md) |

#### Returns

[`SearchBellmanFordResult`](components_ClusterNodeContainer._internal_.SearchBellmanFordResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3287

___

### betweennessCentrality

▸ **betweennessCentrality**(`options`): [`SearchBetweennessResult`](components_ClusterNodeContainer._internal_.SearchBetweennessResult.md)

Considering only the elements in the calling collection,
calculate the betweenness centrality of the nodes.
http://js.cytoscape.org/#eles.betweennessCentrality

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchBetweennessOptions`](components_ClusterNodeContainer._internal_.SearchBetweennessOptions.md) |

#### Returns

[`SearchBetweennessResult`](components_ClusterNodeContainer._internal_.SearchBetweennessResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3384

___

### bfs

▸ **bfs**(`options`): [`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchFirstOptions`](../modules/components_ClusterNodeContainer._internal_.md#searchfirstoptions) |

#### Returns

[`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3254

___

### breadthFirstSearch

▸ **breadthFirstSearch**(`options`): [`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

Perform a breadth-first search within the elements in the collection.

**`alias`** bfs

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SearchFirstOptions`](../modules/components_ClusterNodeContainer._internal_.md#searchfirstoptions) | http://js.cytoscape.org/#eles.breadthFirstSearch |

#### Returns

[`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3253

___

### closenessCentrality

▸ **closenessCentrality**(`options`): `number`

Considering only the elements in the calling collection,
calculate the closeness centrality of the specified root node.
http://js.cytoscape.org/#eles.closenessCentrality

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchClosenessCentralityOptions`](components_ClusterNodeContainer._internal_.SearchClosenessCentralityOptions.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3370

___

### closenessCentralityNormalized

▸ **closenessCentralityNormalized**(`options`): [`SearchDegreeCentralityNormalizedResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultDirected.md) \| [`SearchDegreeCentralityNormalizedResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultUndirected.md)

Considering only the elements in the calling collection,
calculate the closeness centrality of the nodes.
http://js.cytoscape.org/#eles.closenessCentralityNormalized

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchClosenessCentralityNormalizedOptions`](components_ClusterNodeContainer._internal_.SearchClosenessCentralityNormalizedOptions.md) |

#### Returns

[`SearchDegreeCentralityNormalizedResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultDirected.md) \| [`SearchDegreeCentralityNormalizedResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultUndirected.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3376

___

### degreeCentrality

▸ **degreeCentrality**(`options`): [`SearchDegreeCentralityResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityResultDirected.md) \| [`SearchDegreeCentralityResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityResultUndirected.md)

Considering only the elements in the calling collection,
calculate the degree centrality of the specified root node.
http://js.cytoscape.org/#eles.degreeCentrality

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchDegreeCentralityOptions`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityOptions.md) |

#### Returns

[`SearchDegreeCentralityResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityResultDirected.md) \| [`SearchDegreeCentralityResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityResultUndirected.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3354

___

### degreeCentralityNormalized

▸ **degreeCentralityNormalized**(`options`): [`SearchDegreeCentralityNormalizedResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultDirected.md) \| [`SearchDegreeCentralityNormalizedResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultUndirected.md)

Considering only the elements in the calling collection,
calculate the normalised degree centrality of the nodes.
http://js.cytoscape.org/#eles.degreeCentralityNormalized

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchDegreeCentralityNormalizedOptions`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedOptions.md) |

#### Returns

[`SearchDegreeCentralityNormalizedResultDirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultDirected.md) \| [`SearchDegreeCentralityNormalizedResultUndirected`](components_ClusterNodeContainer._internal_.SearchDegreeCentralityNormalizedResultUndirected.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3362

___

### depthFirstSearch

▸ **depthFirstSearch**(`options`): [`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

Perform a depth-first search within the elements in the collection.
http://js.cytoscape.org/#eles.depthFirstSearch

**`alias`** dfs

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchFirstOptions`](../modules/components_ClusterNodeContainer._internal_.md#searchfirstoptions) |

#### Returns

[`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3260

___

### dfs

▸ **dfs**(`options`): [`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchFirstOptions`](../modules/components_ClusterNodeContainer._internal_.md#searchfirstoptions) |

#### Returns

[`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3261

___

### dijkstra

▸ **dijkstra**(`options`): [`SearchDijkstraResult`](components_ClusterNodeContainer._internal_.SearchDijkstraResult.md)

Perform Dijkstra's algorithm on the elements in the collection.
This finds the shortest paths to all other nodes in the collection from the root node.
http://js.cytoscape.org/#eles.dijkstra

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchDijkstraOptions`](components_ClusterNodeContainer._internal_.SearchDijkstraOptions.md) |

#### Returns

[`SearchDijkstraResult`](components_ClusterNodeContainer._internal_.SearchDijkstraResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3268

___

### floydWarshall

▸ **floydWarshall**(`options`): [`SearchFloydWarshallResult`](components_ClusterNodeContainer._internal_.SearchFloydWarshallResult.md)

Perform the Floyd Warshall search algorithm on the elements in the collection.
This finds the shortest path between all pairs of nodes.
http://js.cytoscape.org/#eles.floydWarshall

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchFloydWarshallOptions`](components_ClusterNodeContainer._internal_.SearchFloydWarshallOptions.md) |

#### Returns

[`SearchFloydWarshallResult`](components_ClusterNodeContainer._internal_.SearchFloydWarshallResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3281

___

### hopcroftTarjanBiconnected

▸ **hopcroftTarjanBiconnected**(): `Object`

finds the biconnected components in an undirected graph,
as well as their respective cut vertices, using an algorithm due to Hopcroft and Tarjan.
http://js.cytoscape.org/#eles.hopcroftTarjanBiconnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3305

___

### hopcroftTarjanBiconnectedComponents

▸ **hopcroftTarjanBiconnectedComponents**(): `Object`

Finds the biconnected components in an undirected graph,
as well as their respective cut vertices, using an algorithm due to Hopcroft and Tarjan.
http://js.cytoscape.org/#eles.hopcroftTarjanBiconnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3311

___

### htb

▸ **htb**(): `Object`

Finds the biconnected components in an undirected graph,
as well as their respective cut vertices, using an algorithm due to Hopcroft and Tarjan.
http://js.cytoscape.org/#eles.hopcroftTarjanBiconnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3317

___

### htbc

▸ **htbc**(): `Object`

Finds the biconnected components in an undirected graph,
as well as their respective cut vertices, using an algorithm due to Hopcroft and Tarjan.
http://js.cytoscape.org/#eles.hopcroftTarjanBiconnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3323

___

### kargerStein

▸ **kargerStein**(): `Object`

Finds the minimum cut in a graph using the Karger-Stein algorithm.
The optimal result is found with a high probability, but without guarantee.
http://js.cytoscape.org/#eles.kargerStein

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md) |
| `partitionFirst` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |
| `partitionSecond` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3299

___

### kruskal

▸ **kruskal**(`handler`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Perform Kruskal's algorithm on the elements in the collection,
returning the minimum spanning tree, assuming undirected edges.
http://js.cytoscape.org/#eles.kruskal

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`edge`: [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)) => `number` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3293

___

### pageRank

▸ **pageRank**(`options`): [`SearchPageRankResult`](components_ClusterNodeContainer._internal_.SearchPageRankResult.md)

Rank the nodes in the collection using the Page Rank algorithm.
http://js.cytoscape.org/#eles.pageRank

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchPageRankOptions`](components_ClusterNodeContainer._internal_.SearchPageRankOptions.md) |

#### Returns

[`SearchPageRankResult`](components_ClusterNodeContainer._internal_.SearchPageRankResult.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3348

___

### tarjanStronglyConnected

▸ **tarjanStronglyConnected**(): `Object`

Finds the strongly connected components of a directed graph using Tarjan's algorithm.
http://js.cytoscape.org/#eles.tarjanStronglyConnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3328

___

### tarjanStronglyConnectedComponents

▸ **tarjanStronglyConnectedComponents**(): `Object`

Finds the strongly connected components of a directed graph using Tarjan's algorithm.
http://js.cytoscape.org/#eles.tarjanStronglyConnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3333

___

### tsc

▸ **tsc**(): `Object`

Finds the strongly connected components of a directed graph using Tarjan's algorithm.
http://js.cytoscape.org/#eles.tarjanStronglyConnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3338

___

### tscc

▸ **tscc**(): `Object`

Finds the strongly connected components of a directed graph using Tarjan's algorithm.
http://js.cytoscape.org/#eles.tarjanStronglyConnected

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `components` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `cut` | [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md) |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3343
