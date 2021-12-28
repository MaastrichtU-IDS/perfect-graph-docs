[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Collection

# Interface: Collection<TOut, TIn\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Collection

eles --> Cy.Collection
 a collection of one or more elements (nodes and edges)

The input can be any element (node and edge) collection.
http://js.cytoscape.org/#collection

## Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | [`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue) |
| `TIn` | [`SingularElementArgument`](../modules/components_ClusterNodeContainer._internal_.md#singularelementargument) |

## Hierarchy

- [`CollectionGraphManipulation`](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md)

- [`CollectionEvents`](components_ClusterNodeContainer._internal_.CollectionEvents.md)

- [`CollectionData`](components_ClusterNodeContainer._internal_.CollectionData.md)

- [`CollectionPosition`](components_ClusterNodeContainer._internal_.CollectionPosition.md)

- [`CollectionTraversing`](components_ClusterNodeContainer._internal_.CollectionTraversing.md)

- [`CollectionLayout`](components_ClusterNodeContainer._internal_.CollectionLayout.md)

- [`CollectionSelection`](components_ClusterNodeContainer._internal_.CollectionSelection.md)

- [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

- [`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

- [`CollectionComparision`](components_ClusterNodeContainer._internal_.CollectionComparision.md)

- [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TIn`, `TOut`\>

- [`CollectionBuildingFiltering`](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md)<`TIn`, `TOut`\>

- [`CollectionAlgorithms`](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md)

  ↳ **`Collection`**

  ↳↳ [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

  ↳↳ [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

  ↳↳ [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)

## Table of contents

### Properties

- [!](components_ClusterNodeContainer._internal_.Collection.md#!)
- [&amp;](components_ClusterNodeContainer._internal_.Collection.md#&amp;)
- [(+)](components_ClusterNodeContainer._internal_.Collection.md#(+))
- [(-)](components_ClusterNodeContainer._internal_.Collection.md#(-))
- [+](components_ClusterNodeContainer._internal_.Collection.md#+)
- [-](components_ClusterNodeContainer._internal_.Collection.md#-)
- [.](components_ClusterNodeContainer._internal_.Collection.md#.)
- [\](components_ClusterNodeContainer._internal_.Collection.md#/)
- [^](components_ClusterNodeContainer._internal_.Collection.md#^)
- [add](components_ClusterNodeContainer._internal_.Collection.md#add)
- [and](components_ClusterNodeContainer._internal_.Collection.md#and)
- [difference](components_ClusterNodeContainer._internal_.Collection.md#difference)
- [intersect](components_ClusterNodeContainer._internal_.Collection.md#intersect)
- [intersection](components_ClusterNodeContainer._internal_.Collection.md#intersection)
- [length](components_ClusterNodeContainer._internal_.Collection.md#length)
- [n](components_ClusterNodeContainer._internal_.Collection.md#n)
- [not](components_ClusterNodeContainer._internal_.Collection.md#not)
- [or](components_ClusterNodeContainer._internal_.Collection.md#or)
- [relativeComplement](components_ClusterNodeContainer._internal_.Collection.md#relativecomplement)
- [subtract](components_ClusterNodeContainer._internal_.Collection.md#subtract)
- [symdiff](components_ClusterNodeContainer._internal_.Collection.md#symdiff)
- [symmetricDifference](components_ClusterNodeContainer._internal_.Collection.md#symmetricdifference)
- [u](components_ClusterNodeContainer._internal_.Collection.md#u)
- [union](components_ClusterNodeContainer._internal_.Collection.md#union)
- [xor](components_ClusterNodeContainer._internal_.Collection.md#xor)
- [\|](components_ClusterNodeContainer._internal_.Collection.md#|)

### Methods

- [$id](components_ClusterNodeContainer._internal_.Collection.md#$id)
- [aStar](components_ClusterNodeContainer._internal_.Collection.md#astar)
- [abscomp](components_ClusterNodeContainer._internal_.Collection.md#abscomp)
- [absoluteComplement](components_ClusterNodeContainer._internal_.Collection.md#absolutecomplement)
- [addClass](components_ClusterNodeContainer._internal_.Collection.md#addclass)
- [addListener](components_ClusterNodeContainer._internal_.Collection.md#addlistener)
- [allAre](components_ClusterNodeContainer._internal_.Collection.md#allare)
- [allAreNeighbors](components_ClusterNodeContainer._internal_.Collection.md#allareneighbors)
- [allAreNeighbours](components_ClusterNodeContainer._internal_.Collection.md#allareneighbours)
- [animate](components_ClusterNodeContainer._internal_.Collection.md#animate)
- [anySame](components_ClusterNodeContainer._internal_.Collection.md#anysame)
- [bellmanFord](components_ClusterNodeContainer._internal_.Collection.md#bellmanford)
- [betweennessCentrality](components_ClusterNodeContainer._internal_.Collection.md#betweennesscentrality)
- [bfs](components_ClusterNodeContainer._internal_.Collection.md#bfs)
- [bind](components_ClusterNodeContainer._internal_.Collection.md#bind)
- [boundingBox](components_ClusterNodeContainer._internal_.Collection.md#boundingbox)
- [boundingbox](components_ClusterNodeContainer._internal_.Collection.md#boundingbox)
- [breadthFirstSearch](components_ClusterNodeContainer._internal_.Collection.md#breadthfirstsearch)
- [classes](components_ClusterNodeContainer._internal_.Collection.md#classes)
- [clearQueue](components_ClusterNodeContainer._internal_.Collection.md#clearqueue)
- [clone](components_ClusterNodeContainer._internal_.Collection.md#clone)
- [closedNeighborhood](components_ClusterNodeContainer._internal_.Collection.md#closedneighborhood)
- [closenessCentrality](components_ClusterNodeContainer._internal_.Collection.md#closenesscentrality)
- [closenessCentralityNormalized](components_ClusterNodeContainer._internal_.Collection.md#closenesscentralitynormalized)
- [complement](components_ClusterNodeContainer._internal_.Collection.md#complement)
- [components](components_ClusterNodeContainer._internal_.Collection.md#components)
- [contains](components_ClusterNodeContainer._internal_.Collection.md#contains)
- [copy](components_ClusterNodeContainer._internal_.Collection.md#copy)
- [createLayout](components_ClusterNodeContainer._internal_.Collection.md#createlayout)
- [css](components_ClusterNodeContainer._internal_.Collection.md#css)
- [degreeCentrality](components_ClusterNodeContainer._internal_.Collection.md#degreecentrality)
- [degreeCentralityNormalized](components_ClusterNodeContainer._internal_.Collection.md#degreecentralitynormalized)
- [delay](components_ClusterNodeContainer._internal_.Collection.md#delay)
- [depthFirstSearch](components_ClusterNodeContainer._internal_.Collection.md#depthfirstsearch)
- [deselect](components_ClusterNodeContainer._internal_.Collection.md#deselect)
- [dfs](components_ClusterNodeContainer._internal_.Collection.md#dfs)
- [diff](components_ClusterNodeContainer._internal_.Collection.md#diff)
- [dijkstra](components_ClusterNodeContainer._internal_.Collection.md#dijkstra)
- [each](components_ClusterNodeContainer._internal_.Collection.md#each)
- [edges](components_ClusterNodeContainer._internal_.Collection.md#edges)
- [emit](components_ClusterNodeContainer._internal_.Collection.md#emit)
- [empty](components_ClusterNodeContainer._internal_.Collection.md#empty)
- [eq](components_ClusterNodeContainer._internal_.Collection.md#eq)
- [every](components_ClusterNodeContainer._internal_.Collection.md#every)
- [filter](components_ClusterNodeContainer._internal_.Collection.md#filter)
- [first](components_ClusterNodeContainer._internal_.Collection.md#first)
- [flashClass](components_ClusterNodeContainer._internal_.Collection.md#flashclass)
- [floydWarshall](components_ClusterNodeContainer._internal_.Collection.md#floydwarshall)
- [forEach](components_ClusterNodeContainer._internal_.Collection.md#foreach)
- [getElementById](components_ClusterNodeContainer._internal_.Collection.md#getelementbyid)
- [has](components_ClusterNodeContainer._internal_.Collection.md#has)
- [hopcroftTarjanBiconnected](components_ClusterNodeContainer._internal_.Collection.md#hopcrofttarjanbiconnected)
- [hopcroftTarjanBiconnectedComponents](components_ClusterNodeContainer._internal_.Collection.md#hopcrofttarjanbiconnectedcomponents)
- [htb](components_ClusterNodeContainer._internal_.Collection.md#htb)
- [htbc](components_ClusterNodeContainer._internal_.Collection.md#htbc)
- [is](components_ClusterNodeContainer._internal_.Collection.md#is)
- [jsons](components_ClusterNodeContainer._internal_.Collection.md#jsons)
- [kargerStein](components_ClusterNodeContainer._internal_.Collection.md#kargerstein)
- [kruskal](components_ClusterNodeContainer._internal_.Collection.md#kruskal)
- [last](components_ClusterNodeContainer._internal_.Collection.md#last)
- [layout](components_ClusterNodeContainer._internal_.Collection.md#layout)
- [listen](components_ClusterNodeContainer._internal_.Collection.md#listen)
- [makeLayout](components_ClusterNodeContainer._internal_.Collection.md#makelayout)
- [map](components_ClusterNodeContainer._internal_.Collection.md#map)
- [max](components_ClusterNodeContainer._internal_.Collection.md#max)
- [merge](components_ClusterNodeContainer._internal_.Collection.md#merge)
- [min](components_ClusterNodeContainer._internal_.Collection.md#min)
- [move](components_ClusterNodeContainer._internal_.Collection.md#move)
- [neighborhood](components_ClusterNodeContainer._internal_.Collection.md#neighborhood)
- [nodes](components_ClusterNodeContainer._internal_.Collection.md#nodes)
- [nonempty](components_ClusterNodeContainer._internal_.Collection.md#nonempty)
- [off](components_ClusterNodeContainer._internal_.Collection.md#off)
- [on](components_ClusterNodeContainer._internal_.Collection.md#on)
- [once](components_ClusterNodeContainer._internal_.Collection.md#once)
- [one](components_ClusterNodeContainer._internal_.Collection.md#one)
- [openNeighborhood](components_ClusterNodeContainer._internal_.Collection.md#openneighborhood)
- [pageRank](components_ClusterNodeContainer._internal_.Collection.md#pagerank)
- [pon](components_ClusterNodeContainer._internal_.Collection.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.Collection.md#promiseon)
- [reduce](components_ClusterNodeContainer._internal_.Collection.md#reduce)
- [remove](components_ClusterNodeContainer._internal_.Collection.md#remove)
- [removeAttr](components_ClusterNodeContainer._internal_.Collection.md#removeattr)
- [removeClass](components_ClusterNodeContainer._internal_.Collection.md#removeclass)
- [removeData](components_ClusterNodeContainer._internal_.Collection.md#removedata)
- [removeListener](components_ClusterNodeContainer._internal_.Collection.md#removelistener)
- [removeStyle](components_ClusterNodeContainer._internal_.Collection.md#removestyle)
- [renderedBoundingBox](components_ClusterNodeContainer._internal_.Collection.md#renderedboundingbox)
- [renderedBoundingbox](components_ClusterNodeContainer._internal_.Collection.md#renderedboundingbox)
- [restore](components_ClusterNodeContainer._internal_.Collection.md#restore)
- [same](components_ClusterNodeContainer._internal_.Collection.md#same)
- [select](components_ClusterNodeContainer._internal_.Collection.md#select)
- [selectify](components_ClusterNodeContainer._internal_.Collection.md#selectify)
- [size](components_ClusterNodeContainer._internal_.Collection.md#size)
- [slice](components_ClusterNodeContainer._internal_.Collection.md#slice)
- [some](components_ClusterNodeContainer._internal_.Collection.md#some)
- [sort](components_ClusterNodeContainer._internal_.Collection.md#sort)
- [stop](components_ClusterNodeContainer._internal_.Collection.md#stop)
- [style](components_ClusterNodeContainer._internal_.Collection.md#style)
- [tarjanStronglyConnected](components_ClusterNodeContainer._internal_.Collection.md#tarjanstronglyconnected)
- [tarjanStronglyConnectedComponents](components_ClusterNodeContainer._internal_.Collection.md#tarjanstronglyconnectedcomponents)
- [toArray](components_ClusterNodeContainer._internal_.Collection.md#toarray)
- [toggleClass](components_ClusterNodeContainer._internal_.Collection.md#toggleclass)
- [trigger](components_ClusterNodeContainer._internal_.Collection.md#trigger)
- [tsc](components_ClusterNodeContainer._internal_.Collection.md#tsc)
- [tscc](components_ClusterNodeContainer._internal_.Collection.md#tscc)
- [unbind](components_ClusterNodeContainer._internal_.Collection.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.Collection.md#unlisten)
- [unmerge](components_ClusterNodeContainer._internal_.Collection.md#unmerge)
- [unselect](components_ClusterNodeContainer._internal_.Collection.md#unselect)
- [unselectify](components_ClusterNodeContainer._internal_.Collection.md#unselectify)

## Properties

### !

• **!**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[!](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#!)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2442

___

### &amp;

• **&**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[&](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#&)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2462

___

### (+)

• **(+)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[(+)](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#(+))

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2474

___

### (-)

• **(-)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[(-)](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#(-))

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2475

___

### +

• **+**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[+](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#+)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2430

___

### -

• **-**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[-](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#-)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2444

___

### .

• **.**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[.](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2463

___

### \

• **\**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[\](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#/)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2440

___

### ^

• **^**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[^](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#^)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2473

___

### add

• **add**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[add](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#add)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2429

___

### and

• **and**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[and](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#and)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2460

___

### difference

• **difference**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

Get a new collection, resulting from the collection without some specified elements.
http://js.cytoscape.org/#eles.difference

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[difference](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#difference)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2438

___

### intersect

• **intersect**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[intersect](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#intersect)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2459

___

### intersection

• **intersection**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

Get the elements in both this collection and another specified collection.
http://js.cytoscape.org/#eles.intersection

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[intersection](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#intersection)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2458

___

### length

• **length**: `number`

Get the number of elements in the collection.

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[length](components_ClusterNodeContainer._internal_.CollectionIteration.md#length)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2304

___

### n

• **n**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[n](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#n)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2461

___

### not

• **not**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[not](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#not)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2441

___

### or

• **or**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[or](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#or)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2431

___

### relativeComplement

• **relativeComplement**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[relativeComplement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#relativecomplement)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2443

___

### subtract

• **subtract**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[subtract](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#subtract)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2439

___

### symdiff

• **symdiff**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[symdiff](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#symdiff)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2471

___

### symmetricDifference

• **symmetricDifference**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

Get the elements that are in the calling collection
or the passed collection but not in both.
http://js.cytoscape.org/#eles.symmetricDifference

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[symmetricDifference](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#symmetricdifference)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2470

___

### u

• **u**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[u](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#u)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2428

___

### union

• **union**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

Get a new collection, resulting from adding the collection with another one
http://js.cytoscape.org/#eles.union

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[union](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#union)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2427

___

### xor

• **xor**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[xor](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#xor)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2472

___

### \|

• **\|**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[|](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#|)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2432

## Methods

### $id

▸ **$id**(`id`): `TOut`

Get an element in the collection from its ID in a very performant way.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the element to get. |

#### Returns

`TOut`

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[$id](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#$id)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2421

___

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[aStar](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#astar)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3275

___

### abscomp

▸ **abscomp**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[abscomp](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#abscomp)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2451

___

### absoluteComplement

▸ **absoluteComplement**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get all elements in the graph that are not in the calling collection.
http://js.cytoscape.org/#eles.absoluteComplement

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[absoluteComplement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#absolutecomplement)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2450

___

### addClass

▸ **addClass**(`classes`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Add classes to elements.
http://js.cytoscape.org/#eles.addClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to add to the elements. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[addClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#addclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1987

___

### addListener

▸ **addListener**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[addListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1343

▸ **addListener**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[addListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1344

▸ **addListener**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[addListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1345

___

### allAre

▸ **allAre**(`selector`): `boolean`

Determine whether all elements in the collection match a selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | The selector to match against. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[allAre](components_ClusterNodeContainer._internal_.CollectionComparision.md#allare)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2268

___

### allAreNeighbors

▸ **allAreNeighbors**(`eles`): `boolean`

Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[allAreNeighbors](components_ClusterNodeContainer._internal_.CollectionComparision.md#allareneighbors)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2249

___

### allAreNeighbours

▸ **allAreNeighbours**(`eles`): `boolean`

Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[allAreNeighbours](components_ClusterNodeContainer._internal_.CollectionComparision.md#allareneighbours)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2255

___

### animate

▸ **animate**(`options`, `params?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Animate the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ElementAnimateOptionPos`](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md) \| [`ElementAnimateOptionRen`](components_ClusterNodeContainer._internal_.ElementAnimateOptionRen.md) | An object containing the details of the animation. http://js.cytoscape.org/#eles.animate |
| `params?` | [`ElementAnimateOptionsBase`](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md) | - |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionAnimation](components_ClusterNodeContainer._internal_.CollectionAnimation.md).[animate](components_ClusterNodeContainer._internal_.CollectionAnimation.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2155

___

### anySame

▸ **anySame**(`eles`): `boolean`

Determine whether this collection contains any of the same elements as another collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[anySame](components_ClusterNodeContainer._internal_.CollectionComparision.md#anysame)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2233

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[bellmanFord](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#bellmanford)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[betweennessCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#betweennesscentrality)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[bfs](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#bfs)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3254

___

### bind

▸ **bind**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[bind](components_ClusterNodeContainer._internal_.CollectionEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1337

▸ **bind**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[bind](components_ClusterNodeContainer._internal_.CollectionEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1338

▸ **bind**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[bind](components_ClusterNodeContainer._internal_.CollectionEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1339

___

### boundingBox

▸ **boundingBox**(`options`): [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

Get the bounding box of the elements in model coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`BoundingBoxOptions`](components_ClusterNodeContainer._internal_.BoundingBoxOptions.md) | An object containing options for the function. http://js.cytoscape.org/#eles.boundingBox |

#### Returns

[`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[CollectionPosition](components_ClusterNodeContainer._internal_.CollectionPosition.md).[boundingBox](components_ClusterNodeContainer._internal_.CollectionPosition.md#boundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1850

___

### boundingbox

▸ **boundingbox**(`options`): [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BoundingBoxOptions`](components_ClusterNodeContainer._internal_.BoundingBoxOptions.md) |

#### Returns

[`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[CollectionPosition](components_ClusterNodeContainer._internal_.CollectionPosition.md).[boundingbox](components_ClusterNodeContainer._internal_.CollectionPosition.md#boundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1851

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[breadthFirstSearch](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#breadthfirstsearch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3253

___

### classes

▸ **classes**(`classes?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Replace the current list of classes on the elements with the specified list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes?` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names that replaces the current class list. http://js.cytoscape.org/#eles.classes Note: can be used to clear all classes (no arguments). |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[classes](components_ClusterNodeContainer._internal_.CollectionStyle.md#classes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2007

___

### clearQueue

▸ **clearQueue**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Remove all queued animations for the elements.
http://js.cytoscape.org/#eles.clearQueue

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionAnimation](components_ClusterNodeContainer._internal_.CollectionAnimation.md).[clearQueue](components_ClusterNodeContainer._internal_.CollectionAnimation.md#clearqueue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2174

___

### clone

▸ **clone**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
http://js.cytoscape.org/#eles.clone

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[clone](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#clone)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1288

___

### closedNeighborhood

▸ **closedNeighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the closed neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
A closed neighbourhood is one that does include the original set of elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionTraversing](components_ClusterNodeContainer._internal_.CollectionTraversing.md).[closedNeighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#closedneighborhood)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2697

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[closenessCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#closenesscentrality)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[closenessCentralityNormalized](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#closenesscentralitynormalized)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3376

___

### complement

▸ **complement**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[complement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#complement)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2452

___

### components

▸ **components**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)[]

Get the connected components, considering only the elements in the calling collection.
An array of collections is returned, with each collection representing a component.

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)[]

#### Inherited from

[CollectionTraversing](components_ClusterNodeContainer._internal_.CollectionTraversing.md).[components](components_ClusterNodeContainer._internal_.CollectionTraversing.md#components)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2703

___

### contains

▸ **contains**(`eles`): `boolean`

Determine whether this collection contains all of the elements of another collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[contains](components_ClusterNodeContainer._internal_.CollectionComparision.md#contains)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2238

___

### copy

▸ **copy**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
http://js.cytoscape.org/#eles.clone

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[copy](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#copy)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1293

___

### createLayout

▸ **createLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CollectionLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md).[createLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md#createlayout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1876

___

### css

▸ **css**(`name`, `value`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[css](components_ClusterNodeContainer._internal_.CollectionStyle.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2041

▸ **css**(`name`): `any`

Get a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to get. |

#### Returns

`any`

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[css](components_ClusterNodeContainer._internal_.CollectionStyle.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2046

▸ **css**(`obj`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[css](components_ClusterNodeContainer._internal_.CollectionStyle.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2051

▸ **css**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[css](components_ClusterNodeContainer._internal_.CollectionStyle.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2055

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[degreeCentrality](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#degreecentrality)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[degreeCentralityNormalized](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#degreecentralitynormalized)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3362

___

### delay

▸ **delay**(`duration`, `complete?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Add a delay between animations for the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. |
| `complete?` | () => `void` | A function to call when the delay is complete. http://js.cytoscape.org/#eles.delay |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionAnimation](components_ClusterNodeContainer._internal_.CollectionAnimation.md).[delay](components_ClusterNodeContainer._internal_.CollectionAnimation.md#delay)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2162

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[depthFirstSearch](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#depthfirstsearch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3260

___

### deselect

▸ **deselect**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionSelection](components_ClusterNodeContainer._internal_.CollectionSelection.md).[deselect](components_ClusterNodeContainer._internal_.CollectionSelection.md#deselect)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1961

___

### dfs

▸ **dfs**(`options`): [`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SearchFirstOptions`](../modules/components_ClusterNodeContainer._internal_.md#searchfirstoptions) |

#### Returns

[`SearchFirstResult`](components_ClusterNodeContainer._internal_.SearchFirstResult.md)

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[dfs](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#dfs)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3261

___

### diff

▸ **diff**(`selector`): `Object`

Perform a traditional left/right diff on the two collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | A selector representing the elements on the right side of the diff. All elements in the graph matching the selector are used as the passed collection.    The elements on the right side of the diff. |

#### Returns

`Object`

This function returns a plain object of the form { left, right, both } where
left - is the set of elements only in the calling (i.e. left) collection,
right - is the set of elements only in the passed (i.e. right) collection, and
both - is the set of elements in both collections.
http://js.cytoscape.org/#eles.diff

| Name | Type |
| :------ | :------ |
| `both` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `left` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |
| `right` | [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue) |

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[diff](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#diff)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2489

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[dijkstra](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#dijkstra)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3268

___

### each

▸ **each**(`each`, `thisArg?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Iterate over the elements in the collection using an implementation like the native array function namesake.

This function behaves like Array.prototype.forEach() with minor changes for convenience:
You can exit the iteration early by returning false in the iterating function.
The Array.prototype.forEach() implementation does not support this, but it is included anyway on account of its utility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `each` | (`ele`: `TOut`, `i`: `number`, `eles`: [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>) => `boolean` \| `void` | The function executed each iteration. ele - The current element. i - The index of the current element. eles - The collection of elements being iterated. |
| `thisArg?` | `any` | The value for this within the iterating function. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[each](components_ClusterNodeContainer._internal_.CollectionIteration.md#each)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2328

___

### edges

▸ **edges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get the edges that match the specified selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | The selector to match against. http://js.cytoscape.org/#eles.filter |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[edges](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#edges)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2568

___

### emit

▸ **emit**(`events`, `extra?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[emit](components_ClusterNodeContainer._internal_.CollectionEvents.md#emit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1383

___

### empty

▸ **empty**(): `boolean`

Get whether the collection is empty, meaning it has no elements.

#### Returns

`boolean`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[empty](components_ClusterNodeContainer._internal_.CollectionIteration.md#empty)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2309

___

### eq

▸ **eq**(`index`): `TIn`

Get an element at a particular index in the collection.

You may use eles[i] in place of eles.eq(i) as a more performant alternative.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the element to get. |

#### Returns

`TIn`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[eq](components_ClusterNodeContainer._internal_.CollectionIteration.md#eq)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2338

___

### every

▸ **every**(`test`, `thisArg?`): `boolean`

Determine whether all elements in this collection satisfy the specified test function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | (`ele`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument), `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` | The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test. ele - The current element. i - The index of the current element. eles - The collection of elements being tested. |
| `thisArg?` | `any` | The value for this within the test function. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[every](components_ClusterNodeContainer._internal_.CollectionComparision.md#every)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2290

___

### filter

▸ **filter**(`selector`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing elements that are accepted by the specified filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` \| (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` | The selector to match against. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[filter](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#filter)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2554

___

### first

▸ **first**(): `TIn`

Get the first element in the collection.

#### Returns

`TIn`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[first](components_ClusterNodeContainer._internal_.CollectionIteration.md#first)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2348

___

### flashClass

▸ **flashClass**(`classes`, `duration?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Add classes to the elements, and then remove the classes after a specified duration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to flash on the elements. |
| `duration?` | `number` | The duration in milliseconds that the classes should be added on the elements. After the duration, the classes are removed. http://js.cytoscape.org/#eles.flashClass |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[flashClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#flashclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2014

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[floydWarshall](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#floydwarshall)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3281

___

### forEach

▸ **forEach**(`each`, `thisArg?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `each` | (`ele`: `TOut`, `i`: `number`, `eles`: [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>) => `boolean` \| `void` |
| `thisArg?` | `any` |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[forEach](components_ClusterNodeContainer._internal_.CollectionIteration.md#foreach)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2329

___

### getElementById

▸ **getElementById**(`id`): `TOut`

Get an element in the collection from its ID in a very performant way.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the element to get. |

#### Returns

`TOut`

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[getElementById](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#getelementbyid)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2416

___

### has

▸ **has**(`eles`): `boolean`

Determine whether this collection contains all of the elements of another collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[has](components_ClusterNodeContainer._internal_.CollectionComparision.md#has)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2242

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[hopcroftTarjanBiconnected](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#hopcrofttarjanbiconnected)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[hopcroftTarjanBiconnectedComponents](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#hopcrofttarjanbiconnectedcomponents)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[htb](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#htb)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[htbc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#htbc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3323

___

### is

▸ **is**(`selector`): `boolean`

Determine whether any element in this collection matches a selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | The selector to match against. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[is](components_ClusterNodeContainer._internal_.CollectionComparision.md#is)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2262

___

### jsons

▸ **jsons**(): `string`[]

Get an array of the plain JavaScript object
representation of all elements in the collection.

#### Returns

`string`[]

#### Inherited from

[CollectionData](components_ClusterNodeContainer._internal_.CollectionData.md).[jsons](components_ClusterNodeContainer._internal_.CollectionData.md#jsons)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1407

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[kargerStein](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#kargerstein)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[kruskal](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#kruskal)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3293

___

### last

▸ **last**(): `TIn`

Get the last element in the collection.

#### Returns

`TIn`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[last](components_ClusterNodeContainer._internal_.CollectionIteration.md#last)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2352

___

### layout

▸ **layout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Get a new layout, which can be used to algorithmically position the nodes in the collection.
This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.

You must specify options.name with the name of the layout you wish to use.

Note: that you must call layout.run() in order for it to affect the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) | The layout options. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CollectionLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md).[layout](components_ClusterNodeContainer._internal_.CollectionLayout.md#layout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1874

___

### listen

▸ **listen**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[listen](components_ClusterNodeContainer._internal_.CollectionEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1340

▸ **listen**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[listen](components_ClusterNodeContainer._internal_.CollectionEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1341

▸ **listen**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[listen](components_ClusterNodeContainer._internal_.CollectionEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1342

___

### makeLayout

▸ **makeLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CollectionLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md).[makeLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md#makelayout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1875

___

### map

▸ **map**<`T`\>(`fn`, `thisArg?`): `T`[]

Get an array containing values mapped from the collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `T` | The function that returns the mapped value for each element. ele - The current element. i - The index of the current element. eles - The collection of elements being mapped. |
| `thisArg?` | `any` | The value for this within the iterating function.  http://js.cytoscape.org/#eles.map |

#### Returns

`T`[]

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[map](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#map)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2593

___

### max

▸ **max**<`T`\>(`fn`, `thisArg?`): `Object`

Find a maximum value and the corresponding element.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `T` | The function that returns the value to compare for each element. ele - The current element. i - The index of the current element. eles - The collection of elements being mapped. |
| `thisArg?` | `any` | The value for this within the iterating function.  http://js.cytoscape.org/#eles.max |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `ele` | [`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue) | The element that corresponds to the minimum value. |
| `value` | `T` | The minimum value found. |

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[max](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#max)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2646

___

### merge

▸ **merge**(`eles`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Perform a in-place merge of the given elements into the calling collection.

**`example`**
var col = cy.collection(); // new, empty collection
var j = cy.$('#j');
var e = cy.$('#e');
col.merge( j ).merge( e );

With a selector:

**`example`**
var col = cy.collection(); // new, empty collection
col.merge('#j').merge('#e');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The elements to merge in-place or a selector representing the elements to merge. All elements in the graph matching the selector are used as the passed collection.  This function modifies the calling collection instead of returning a new one. Use of this function should be considered for performance in some cases, but otherwise should be avoided. Consider using eles.union() instead. Use this function only on new collections that you create yourself, using cy.collection(). This ensures that you do not unintentionally modify another collection.  Examples With a collection: |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[merge](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#merge)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2518

___

### min

▸ **min**<`T`\>(`fn`, `thisArg?`): `Object`

Find a minimum value in a collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `T` | The function that returns the value to compare for each element. ele - The current element. i - The index of the current element. eles - The collection of elements being mapped. |
| `thisArg?` | `any` | The value for this within the iterating function.  http://js.cytoscape.org/#eles.min |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `ele` | [`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue) | The element that corresponds to the minimum value. |
| `value` | `T` | The minimum value found. |

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[min](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#min)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2624

___

### move

▸ **move**(`location`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Effectively move edges to different nodes. The modified (actually new) elements are returned.
http://js.cytoscape.org/#eles.move

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `Object` |
| `location.source?` | `string` |
| `location.target?` | `string` |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[move](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#move)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1299

▸ **move**(`location`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Effectively move nodes to different parent node. The modified (actually new) elements are returned.
http://js.cytoscape.org/#eles.move

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `Object` |
| `location.parent` | ``null`` \| `string` |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[move](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#move)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1304

___

### neighborhood

▸ **neighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the open neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionTraversing](components_ClusterNodeContainer._internal_.CollectionTraversing.md).[neighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#neighborhood)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2676

___

### nodes

▸ **nodes**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get the nodes that match the specified selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | The selector to match against. http://js.cytoscape.org/#eles.filter |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[nodes](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#nodes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2561

___

### nonempty

▸ **nonempty**(): `boolean`

Get whether the collection is nonempty, meaning it has elements.

#### Returns

`boolean`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[nonempty](components_ClusterNodeContainer._internal_.CollectionIteration.md#nonempty)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2313

___

### off

▸ **off**(`events`, `selector?`, `handler?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.off
alias unbind, unlisten, removeListener

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[off](components_ClusterNodeContainer._internal_.CollectionEvents.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1374

___

### on

▸ **on**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.on

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[on](components_ClusterNodeContainer._internal_.CollectionEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1334

▸ **on**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[on](components_ClusterNodeContainer._internal_.CollectionEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1335

▸ **on**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[on](components_ClusterNodeContainer._internal_.CollectionEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1336

___

### once

▸ **once**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.once

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[once](components_ClusterNodeContainer._internal_.CollectionEvents.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1367

▸ **once**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[once](components_ClusterNodeContainer._internal_.CollectionEvents.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1368

▸ **once**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[once](components_ClusterNodeContainer._internal_.CollectionEvents.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1369

___

### one

▸ **one**(`events`, `selector`, `data`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A delegate selector to specify child elements for which the handler is triggered. |
| `data` | `any` | A plain object which is passed to the handler in the event object argument. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | - |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[one](components_ClusterNodeContainer._internal_.CollectionEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1361

▸ **one**(`events`, `selector`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[one](components_ClusterNodeContainer._internal_.CollectionEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1362

▸ **one**(`events`, `handler`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[one](components_ClusterNodeContainer._internal_.CollectionEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1363

___

### openNeighborhood

▸ **openNeighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the open neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionTraversing](components_ClusterNodeContainer._internal_.CollectionTraversing.md).[openNeighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#openneighborhood)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2687

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[pageRank](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#pagerank)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3348

___

### pon

▸ **pon**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[pon](components_ClusterNodeContainer._internal_.CollectionEvents.md#pon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1351

___

### promiseOn

▸ **promiseOn**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

http://js.cytoscape.org/#eles.promiseOn
alias: pon

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[promiseOn](components_ClusterNodeContainer._internal_.CollectionEvents.md#promiseon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1350

___

### reduce

▸ **reduce**<`T`\>(`fn`, `initialValue`): `T`

Reduce a single value by applying a
function against an accumulator and each value of the collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`prevVal`: `T`, `ele`: `TIn`, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `T` | The function that returns the accumulated value given the previous value and the current element. prevVal The value accumulated from previous elements. ele The current element. i The index of the current element. eles The collection of elements being reduced. |
| `initialValue` | `T` | The initial value for reducing It is used also for type inference of output, but the type can be also stated explicitly as generic http://js.cytoscape.org/#eles.reduce |

#### Returns

`T`

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[reduce](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#reduce)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2610

___

### remove

▸ **remove**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove the elements from the graph.
http://js.cytoscape.org/#eles.remove

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[remove](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#remove)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1276

___

### removeAttr

▸ **removeAttr**(`names?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionData](components_ClusterNodeContainer._internal_.CollectionData.md).[removeAttr](components_ClusterNodeContainer._internal_.CollectionData.md#removeattr)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1401

___

### removeClass

▸ **removeClass**(`classes`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Remove classes from elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to remove from the elements. http://js.cytoscape.org/#eles.removeClass |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[removeClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#removeclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1993

___

### removeData

▸ **removeData**(`names?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove developer-defined data associated with the elements.
http://js.cytoscape.org/#eles.removeData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names?` | `string` | A space-separated list of fields to delete. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionData](components_ClusterNodeContainer._internal_.CollectionData.md).[removeData](components_ClusterNodeContainer._internal_.CollectionData.md#removedata)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1400

___

### removeListener

▸ **removeListener**(`events`, `selector?`, `handler?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[removeListener](components_ClusterNodeContainer._internal_.CollectionEvents.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1377

___

### removeStyle

▸ **removeStyle**(`names?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Remove all or specific style overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names?` | `string` | A space-separated list of property names to remove overrides |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[removeStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md#removestyle)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2060

___

### renderedBoundingBox

▸ **renderedBoundingBox**(`options`): [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

Get the bounding box of the elements in rendered coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`BoundingBoxOptions`](components_ClusterNodeContainer._internal_.BoundingBoxOptions.md) | An object containing options for the function. |

#### Returns

[`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[CollectionPosition](components_ClusterNodeContainer._internal_.CollectionPosition.md).[renderedBoundingBox](components_ClusterNodeContainer._internal_.CollectionPosition.md#renderedboundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1856

___

### renderedBoundingbox

▸ **renderedBoundingbox**(`options`): [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BoundingBoxOptions`](components_ClusterNodeContainer._internal_.BoundingBoxOptions.md) |

#### Returns

[`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) & [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[CollectionPosition](components_ClusterNodeContainer._internal_.CollectionPosition.md).[renderedBoundingbox](components_ClusterNodeContainer._internal_.CollectionPosition.md#renderedboundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1857

___

### restore

▸ **restore**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Put removed elements back into the graph.
http://js.cytoscape.org/#eles.restore

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionGraphManipulation](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md).[restore](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#restore)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1282

___

### same

▸ **same**(`eles`): `boolean`

Determine whether this collection contains exactly the same elements as another collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[same](components_ClusterNodeContainer._internal_.CollectionComparision.md#same)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2226

___

### select

▸ **select**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Make the elements selected (NB other elements outside the collection are not affected).
http://js.cytoscape.org/#eles.select

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionSelection](components_ClusterNodeContainer._internal_.CollectionSelection.md).[select](components_ClusterNodeContainer._internal_.CollectionSelection.md#select)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1955

___

### selectify

▸ **selectify**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Make the selection states of the elements mutable.
http://js.cytoscape.org/#eles.selectify

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionSelection](components_ClusterNodeContainer._internal_.CollectionSelection.md).[selectify](components_ClusterNodeContainer._internal_.CollectionSelection.md#selectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1966

___

### size

▸ **size**(): `number`

Get the number of elements in the collection.

#### Returns

`number`

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[size](components_ClusterNodeContainer._internal_.CollectionIteration.md#size)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2300

___

### slice

▸ **slice**(`start?`, `end?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Get a subset of the elements in the collection based on specified indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | An integer that specifies where to start the selection.              The first element has an index of 0.              Use negative numbers to select from the end of an array. |
| `end?` | `number` | An integer that specifies where to end the selection.            If omitted, all elements from the start position and to the end of the array will be selected.            Use negative numbers to select from the end of an array. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[slice](components_ClusterNodeContainer._internal_.CollectionIteration.md#slice)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2364

___

### some

▸ **some**(`test`, `thisArg?`): `boolean`

Determine whether any element in this collection satisfies the specified test function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | (`ele`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument), `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` | The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test. ele - The current element. i - The index of the current element. eles - The collection of elements being tested. |
| `thisArg?` | `any` | The value for this within the test function. |

#### Returns

`boolean`

#### Inherited from

[CollectionComparision](components_ClusterNodeContainer._internal_.CollectionComparision.md).[some](components_ClusterNodeContainer._internal_.CollectionComparision.md#some)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2279

___

### sort

▸ **sort**(`sort`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing the elements sorted by the
specified comparison function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sort` | (`ele1`: `TIn`, `ele2`: `TIn`) => `number` | The sorting comparison function that returns a negative number for ele1 before ele2, 0 for ele1 same as ele2, or a positive number for ele1 after ele2.  http://js.cytoscape.org/#eles.sort |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[sort](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#sort)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2580

___

### stop

▸ **stop**(`clearQueue?`, `jumpToEnd?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Stop all animations that are currently running.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearQueue?` | `boolean` | A boolean, indicating whether the queue of animations should be emptied. |
| `jumpToEnd?` | `boolean` | A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway. http://js.cytoscape.org/#eles.stop |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionAnimation](components_ClusterNodeContainer._internal_.CollectionAnimation.md).[stop](components_ClusterNodeContainer._internal_.CollectionAnimation.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2169

___

### style

▸ **style**(`name`, `value`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[style](components_ClusterNodeContainer._internal_.CollectionStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2021

▸ **style**(`name`): `any`

Get a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to get. |

#### Returns

`any`

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[style](components_ClusterNodeContainer._internal_.CollectionStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2026

▸ **style**(`obj`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[style](components_ClusterNodeContainer._internal_.CollectionStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2031

▸ **style**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[style](components_ClusterNodeContainer._internal_.CollectionStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2035

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[tarjanStronglyConnected](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tarjanstronglyconnected)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[tarjanStronglyConnectedComponents](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tarjanstronglyconnectedcomponents)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3333

___

### toArray

▸ **toArray**(): `TIn`[]

Get the collection as an array, maintaining the order of the elements.

#### Returns

`TIn`[]

#### Inherited from

[CollectionIteration](components_ClusterNodeContainer._internal_.CollectionIteration.md).[toArray](components_ClusterNodeContainer._internal_.CollectionIteration.md#toarray)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2369

___

### toggleClass

▸ **toggleClass**(`classes`, `toggle?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Toggle whether the elements have the specified classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to toggle on the elements. |
| `toggle?` | `boolean` | Instead of automatically toggling, adds the classes on truthy values or removes them on falsey values. http://js.cytoscape.org/#eles.toggleClass |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md).[toggleClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#toggleclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2000

___

### trigger

▸ **trigger**(`events`, `extra?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.trigger
alias: emit

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[trigger](components_ClusterNodeContainer._internal_.CollectionEvents.md#trigger)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1382

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[tsc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tsc)

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

#### Inherited from

[CollectionAlgorithms](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md).[tscc](components_ClusterNodeContainer._internal_.CollectionAlgorithms.md#tscc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3343

___

### unbind

▸ **unbind**(`events`, `selector?`, `handler?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[unbind](components_ClusterNodeContainer._internal_.CollectionEvents.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1375

___

### unlisten

▸ **unlisten**(`events`, `selector?`, `handler?`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionEvents](components_ClusterNodeContainer._internal_.CollectionEvents.md).[unlisten](components_ClusterNodeContainer._internal_.CollectionEvents.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1376

___

### unmerge

▸ **unmerge**(`eles`): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Perform an in-place operation on the calling collection to remove the given elements.

**`example`**
var col = cy.collection(); // new, empty collection
var e = cy.$('#e');
col.merge( cy.nodes() );
col.unmerge( e );

With a selector:

**`example`**
var col = cy.collection(); // new, empty collection
col.merge( cy.nodes() );
col.unmerge('#e');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The elements to remove  in-place or a selector representing the elements to remove . All elements in the graph matching the selector are used as the passed collection.  This function modifies the calling collection instead of returning a new one. Use of this function should be considered for performance in some cases, but otherwise should be avoided. Consider using eles.filter() or eles.remove() instead. Use this function only on new collections that you create yourself, using cy.collection(). This ensures that you do not unintentionally modify another collection.  Examples With a collection: |

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionBuildingFiltering](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md).[unmerge](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#unmerge)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2543

___

### unselect

▸ **unselect**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Make the elements not selected (NB other elements outside the collection are not affected).
http://js.cytoscape.org/#eles.unselect

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionSelection](components_ClusterNodeContainer._internal_.CollectionSelection.md).[unselect](components_ClusterNodeContainer._internal_.CollectionSelection.md#unselect)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1960

___

### unselectify

▸ **unselectify**(): [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

Make the selection states of the elements immutable.
http://js.cytoscape.org/#eles.unselectify

#### Returns

[`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

#### Inherited from

[CollectionSelection](components_ClusterNodeContainer._internal_.CollectionSelection.md).[unselectify](components_ClusterNodeContainer._internal_.CollectionSelection.md#unselectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1971
