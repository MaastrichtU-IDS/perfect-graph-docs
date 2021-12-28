[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Singular

# Interface: Singular<TOut, TIn\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Singular

ele  --> Cy.Singular
a collection of a single element (node or edge)
NB: every singular collection is a general collection too (but not vice versa)!

## Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | [`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue) |
| `TIn` | [`SingularElementArgument`](../modules/components_ClusterNodeContainer._internal_.md#singularelementargument) |

## Hierarchy

- [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)<`TOut`, `TIn`\>

- [`SingularGraphManipulation`](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md)

- [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

- [`SingularPosition`](components_ClusterNodeContainer._internal_.SingularPosition.md)

- [`SingularSelection`](components_ClusterNodeContainer._internal_.SingularSelection.md)

- [`SingularStyle`](components_ClusterNodeContainer._internal_.SingularStyle.md)

- [`SingularAnimation`](components_ClusterNodeContainer._internal_.SingularAnimation.md)

  ↳ **`Singular`**

## Table of contents

### Properties

- [!](components_ClusterNodeContainer._internal_.Singular.md#!)
- [&amp;](components_ClusterNodeContainer._internal_.Singular.md#&amp;)
- [(+)](components_ClusterNodeContainer._internal_.Singular.md#(+))
- [(-)](components_ClusterNodeContainer._internal_.Singular.md#(-))
- [+](components_ClusterNodeContainer._internal_.Singular.md#+)
- [-](components_ClusterNodeContainer._internal_.Singular.md#-)
- [.](components_ClusterNodeContainer._internal_.Singular.md#.)
- [\](components_ClusterNodeContainer._internal_.Singular.md#/)
- [^](components_ClusterNodeContainer._internal_.Singular.md#^)
- [add](components_ClusterNodeContainer._internal_.Singular.md#add)
- [and](components_ClusterNodeContainer._internal_.Singular.md#and)
- [difference](components_ClusterNodeContainer._internal_.Singular.md#difference)
- [intersect](components_ClusterNodeContainer._internal_.Singular.md#intersect)
- [intersection](components_ClusterNodeContainer._internal_.Singular.md#intersection)
- [length](components_ClusterNodeContainer._internal_.Singular.md#length)
- [n](components_ClusterNodeContainer._internal_.Singular.md#n)
- [not](components_ClusterNodeContainer._internal_.Singular.md#not)
- [or](components_ClusterNodeContainer._internal_.Singular.md#or)
- [relativeComplement](components_ClusterNodeContainer._internal_.Singular.md#relativecomplement)
- [subtract](components_ClusterNodeContainer._internal_.Singular.md#subtract)
- [symdiff](components_ClusterNodeContainer._internal_.Singular.md#symdiff)
- [symmetricDifference](components_ClusterNodeContainer._internal_.Singular.md#symmetricdifference)
- [u](components_ClusterNodeContainer._internal_.Singular.md#u)
- [union](components_ClusterNodeContainer._internal_.Singular.md#union)
- [xor](components_ClusterNodeContainer._internal_.Singular.md#xor)
- [\|](components_ClusterNodeContainer._internal_.Singular.md#|)

### Methods

- [$id](components_ClusterNodeContainer._internal_.Singular.md#$id)
- [aStar](components_ClusterNodeContainer._internal_.Singular.md#astar)
- [abscomp](components_ClusterNodeContainer._internal_.Singular.md#abscomp)
- [absoluteComplement](components_ClusterNodeContainer._internal_.Singular.md#absolutecomplement)
- [active](components_ClusterNodeContainer._internal_.Singular.md#active)
- [addClass](components_ClusterNodeContainer._internal_.Singular.md#addclass)
- [addListener](components_ClusterNodeContainer._internal_.Singular.md#addlistener)
- [allAre](components_ClusterNodeContainer._internal_.Singular.md#allare)
- [allAreNeighbors](components_ClusterNodeContainer._internal_.Singular.md#allareneighbors)
- [allAreNeighbours](components_ClusterNodeContainer._internal_.Singular.md#allareneighbours)
- [animate](components_ClusterNodeContainer._internal_.Singular.md#animate)
- [animated](components_ClusterNodeContainer._internal_.Singular.md#animated)
- [animation](components_ClusterNodeContainer._internal_.Singular.md#animation)
- [anySame](components_ClusterNodeContainer._internal_.Singular.md#anysame)
- [attr](components_ClusterNodeContainer._internal_.Singular.md#attr)
- [bellmanFord](components_ClusterNodeContainer._internal_.Singular.md#bellmanford)
- [betweennessCentrality](components_ClusterNodeContainer._internal_.Singular.md#betweennesscentrality)
- [bfs](components_ClusterNodeContainer._internal_.Singular.md#bfs)
- [bind](components_ClusterNodeContainer._internal_.Singular.md#bind)
- [boundingBox](components_ClusterNodeContainer._internal_.Singular.md#boundingbox)
- [boundingbox](components_ClusterNodeContainer._internal_.Singular.md#boundingbox)
- [breadthFirstSearch](components_ClusterNodeContainer._internal_.Singular.md#breadthfirstsearch)
- [classes](components_ClusterNodeContainer._internal_.Singular.md#classes)
- [clearQueue](components_ClusterNodeContainer._internal_.Singular.md#clearqueue)
- [clone](components_ClusterNodeContainer._internal_.Singular.md#clone)
- [closedNeighborhood](components_ClusterNodeContainer._internal_.Singular.md#closedneighborhood)
- [closenessCentrality](components_ClusterNodeContainer._internal_.Singular.md#closenesscentrality)
- [closenessCentralityNormalized](components_ClusterNodeContainer._internal_.Singular.md#closenesscentralitynormalized)
- [complement](components_ClusterNodeContainer._internal_.Singular.md#complement)
- [components](components_ClusterNodeContainer._internal_.Singular.md#components)
- [contains](components_ClusterNodeContainer._internal_.Singular.md#contains)
- [copy](components_ClusterNodeContainer._internal_.Singular.md#copy)
- [createLayout](components_ClusterNodeContainer._internal_.Singular.md#createlayout)
- [css](components_ClusterNodeContainer._internal_.Singular.md#css)
- [cy](components_ClusterNodeContainer._internal_.Singular.md#cy)
- [data](components_ClusterNodeContainer._internal_.Singular.md#data)
- [degreeCentrality](components_ClusterNodeContainer._internal_.Singular.md#degreecentrality)
- [degreeCentralityNormalized](components_ClusterNodeContainer._internal_.Singular.md#degreecentralitynormalized)
- [delay](components_ClusterNodeContainer._internal_.Singular.md#delay)
- [delayAnimation](components_ClusterNodeContainer._internal_.Singular.md#delayanimation)
- [depthFirstSearch](components_ClusterNodeContainer._internal_.Singular.md#depthfirstsearch)
- [deselect](components_ClusterNodeContainer._internal_.Singular.md#deselect)
- [dfs](components_ClusterNodeContainer._internal_.Singular.md#dfs)
- [diff](components_ClusterNodeContainer._internal_.Singular.md#diff)
- [dijkstra](components_ClusterNodeContainer._internal_.Singular.md#dijkstra)
- [each](components_ClusterNodeContainer._internal_.Singular.md#each)
- [edges](components_ClusterNodeContainer._internal_.Singular.md#edges)
- [effectiveOpacity](components_ClusterNodeContainer._internal_.Singular.md#effectiveopacity)
- [emit](components_ClusterNodeContainer._internal_.Singular.md#emit)
- [empty](components_ClusterNodeContainer._internal_.Singular.md#empty)
- [eq](components_ClusterNodeContainer._internal_.Singular.md#eq)
- [every](components_ClusterNodeContainer._internal_.Singular.md#every)
- [filter](components_ClusterNodeContainer._internal_.Singular.md#filter)
- [first](components_ClusterNodeContainer._internal_.Singular.md#first)
- [flashClass](components_ClusterNodeContainer._internal_.Singular.md#flashclass)
- [floydWarshall](components_ClusterNodeContainer._internal_.Singular.md#floydwarshall)
- [forEach](components_ClusterNodeContainer._internal_.Singular.md#foreach)
- [getElementById](components_ClusterNodeContainer._internal_.Singular.md#getelementbyid)
- [group](components_ClusterNodeContainer._internal_.Singular.md#group)
- [has](components_ClusterNodeContainer._internal_.Singular.md#has)
- [hasClass](components_ClusterNodeContainer._internal_.Singular.md#hasclass)
- [height](components_ClusterNodeContainer._internal_.Singular.md#height)
- [hidden](components_ClusterNodeContainer._internal_.Singular.md#hidden)
- [hopcroftTarjanBiconnected](components_ClusterNodeContainer._internal_.Singular.md#hopcrofttarjanbiconnected)
- [hopcroftTarjanBiconnectedComponents](components_ClusterNodeContainer._internal_.Singular.md#hopcrofttarjanbiconnectedcomponents)
- [htb](components_ClusterNodeContainer._internal_.Singular.md#htb)
- [htbc](components_ClusterNodeContainer._internal_.Singular.md#htbc)
- [id](components_ClusterNodeContainer._internal_.Singular.md#id)
- [inside](components_ClusterNodeContainer._internal_.Singular.md#inside)
- [is](components_ClusterNodeContainer._internal_.Singular.md#is)
- [isEdge](components_ClusterNodeContainer._internal_.Singular.md#isedge)
- [isNode](components_ClusterNodeContainer._internal_.Singular.md#isnode)
- [json](components_ClusterNodeContainer._internal_.Singular.md#json)
- [jsons](components_ClusterNodeContainer._internal_.Singular.md#jsons)
- [kargerStein](components_ClusterNodeContainer._internal_.Singular.md#kargerstein)
- [kruskal](components_ClusterNodeContainer._internal_.Singular.md#kruskal)
- [last](components_ClusterNodeContainer._internal_.Singular.md#last)
- [layout](components_ClusterNodeContainer._internal_.Singular.md#layout)
- [listen](components_ClusterNodeContainer._internal_.Singular.md#listen)
- [makeLayout](components_ClusterNodeContainer._internal_.Singular.md#makelayout)
- [map](components_ClusterNodeContainer._internal_.Singular.md#map)
- [max](components_ClusterNodeContainer._internal_.Singular.md#max)
- [merge](components_ClusterNodeContainer._internal_.Singular.md#merge)
- [min](components_ClusterNodeContainer._internal_.Singular.md#min)
- [move](components_ClusterNodeContainer._internal_.Singular.md#move)
- [neighborhood](components_ClusterNodeContainer._internal_.Singular.md#neighborhood)
- [nodes](components_ClusterNodeContainer._internal_.Singular.md#nodes)
- [nonempty](components_ClusterNodeContainer._internal_.Singular.md#nonempty)
- [numericStyle](components_ClusterNodeContainer._internal_.Singular.md#numericstyle)
- [numericStyleUnits](components_ClusterNodeContainer._internal_.Singular.md#numericstyleunits)
- [off](components_ClusterNodeContainer._internal_.Singular.md#off)
- [on](components_ClusterNodeContainer._internal_.Singular.md#on)
- [once](components_ClusterNodeContainer._internal_.Singular.md#once)
- [one](components_ClusterNodeContainer._internal_.Singular.md#one)
- [openNeighborhood](components_ClusterNodeContainer._internal_.Singular.md#openneighborhood)
- [outerHeight](components_ClusterNodeContainer._internal_.Singular.md#outerheight)
- [outerWidth](components_ClusterNodeContainer._internal_.Singular.md#outerwidth)
- [pageRank](components_ClusterNodeContainer._internal_.Singular.md#pagerank)
- [pon](components_ClusterNodeContainer._internal_.Singular.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.Singular.md#promiseon)
- [reduce](components_ClusterNodeContainer._internal_.Singular.md#reduce)
- [remove](components_ClusterNodeContainer._internal_.Singular.md#remove)
- [removeAttr](components_ClusterNodeContainer._internal_.Singular.md#removeattr)
- [removeClass](components_ClusterNodeContainer._internal_.Singular.md#removeclass)
- [removeData](components_ClusterNodeContainer._internal_.Singular.md#removedata)
- [removeListener](components_ClusterNodeContainer._internal_.Singular.md#removelistener)
- [removeScratch](components_ClusterNodeContainer._internal_.Singular.md#removescratch)
- [removeStyle](components_ClusterNodeContainer._internal_.Singular.md#removestyle)
- [removed](components_ClusterNodeContainer._internal_.Singular.md#removed)
- [renderedBoundingBox](components_ClusterNodeContainer._internal_.Singular.md#renderedboundingbox)
- [renderedBoundingbox](components_ClusterNodeContainer._internal_.Singular.md#renderedboundingbox)
- [renderedCss](components_ClusterNodeContainer._internal_.Singular.md#renderedcss)
- [renderedHeight](components_ClusterNodeContainer._internal_.Singular.md#renderedheight)
- [renderedOuterHeight](components_ClusterNodeContainer._internal_.Singular.md#renderedouterheight)
- [renderedOuterWidth](components_ClusterNodeContainer._internal_.Singular.md#renderedouterwidth)
- [renderedStyle](components_ClusterNodeContainer._internal_.Singular.md#renderedstyle)
- [renderedWidth](components_ClusterNodeContainer._internal_.Singular.md#renderedwidth)
- [restore](components_ClusterNodeContainer._internal_.Singular.md#restore)
- [same](components_ClusterNodeContainer._internal_.Singular.md#same)
- [scratch](components_ClusterNodeContainer._internal_.Singular.md#scratch)
- [select](components_ClusterNodeContainer._internal_.Singular.md#select)
- [selectable](components_ClusterNodeContainer._internal_.Singular.md#selectable)
- [selected](components_ClusterNodeContainer._internal_.Singular.md#selected)
- [selectify](components_ClusterNodeContainer._internal_.Singular.md#selectify)
- [size](components_ClusterNodeContainer._internal_.Singular.md#size)
- [slice](components_ClusterNodeContainer._internal_.Singular.md#slice)
- [some](components_ClusterNodeContainer._internal_.Singular.md#some)
- [sort](components_ClusterNodeContainer._internal_.Singular.md#sort)
- [stop](components_ClusterNodeContainer._internal_.Singular.md#stop)
- [style](components_ClusterNodeContainer._internal_.Singular.md#style)
- [tarjanStronglyConnected](components_ClusterNodeContainer._internal_.Singular.md#tarjanstronglyconnected)
- [tarjanStronglyConnectedComponents](components_ClusterNodeContainer._internal_.Singular.md#tarjanstronglyconnectedcomponents)
- [toArray](components_ClusterNodeContainer._internal_.Singular.md#toarray)
- [toggleClass](components_ClusterNodeContainer._internal_.Singular.md#toggleclass)
- [transparent](components_ClusterNodeContainer._internal_.Singular.md#transparent)
- [trigger](components_ClusterNodeContainer._internal_.Singular.md#trigger)
- [tsc](components_ClusterNodeContainer._internal_.Singular.md#tsc)
- [tscc](components_ClusterNodeContainer._internal_.Singular.md#tscc)
- [unbind](components_ClusterNodeContainer._internal_.Singular.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.Singular.md#unlisten)
- [unmerge](components_ClusterNodeContainer._internal_.Singular.md#unmerge)
- [unselect](components_ClusterNodeContainer._internal_.Singular.md#unselect)
- [unselectify](components_ClusterNodeContainer._internal_.Singular.md#unselectify)
- [visible](components_ClusterNodeContainer._internal_.Singular.md#visible)
- [width](components_ClusterNodeContainer._internal_.Singular.md#width)

## Properties

### !

• **!**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[!](components_ClusterNodeContainer._internal_.Collection.md#!)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2442

___

### &amp;

• **&**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[&](components_ClusterNodeContainer._internal_.Collection.md#&)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2462

___

### (+)

• **(+)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[(+)](components_ClusterNodeContainer._internal_.Collection.md#(+))

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2474

___

### (-)

• **(-)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[(-)](components_ClusterNodeContainer._internal_.Collection.md#(-))

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2475

___

### +

• **+**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[+](components_ClusterNodeContainer._internal_.Collection.md#+)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2430

___

### -

• **-**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[-](components_ClusterNodeContainer._internal_.Collection.md#-)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2444

___

### .

• **.**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[.](components_ClusterNodeContainer._internal_.Collection.md#.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2463

___

### \

• **\**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[\](components_ClusterNodeContainer._internal_.Collection.md#/)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2440

___

### ^

• **^**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[^](components_ClusterNodeContainer._internal_.Collection.md#^)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2473

___

### add

• **add**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[add](components_ClusterNodeContainer._internal_.Collection.md#add)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2429

___

### and

• **and**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[and](components_ClusterNodeContainer._internal_.Collection.md#and)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2460

___

### difference

• **difference**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

Get a new collection, resulting from the collection without some specified elements.
http://js.cytoscape.org/#eles.difference

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[difference](components_ClusterNodeContainer._internal_.Collection.md#difference)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2438

___

### intersect

• **intersect**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[intersect](components_ClusterNodeContainer._internal_.Collection.md#intersect)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2459

___

### intersection

• **intersection**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

Get the elements in both this collection and another specified collection.
http://js.cytoscape.org/#eles.intersection

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[intersection](components_ClusterNodeContainer._internal_.Collection.md#intersection)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2458

___

### length

• **length**: `number`

Get the number of elements in the collection.

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[length](components_ClusterNodeContainer._internal_.Collection.md#length)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2304

___

### n

• **n**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[n](components_ClusterNodeContainer._internal_.Collection.md#n)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2461

___

### not

• **not**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[not](components_ClusterNodeContainer._internal_.Collection.md#not)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2441

___

### or

• **or**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[or](components_ClusterNodeContainer._internal_.Collection.md#or)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2431

___

### relativeComplement

• **relativeComplement**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[relativeComplement](components_ClusterNodeContainer._internal_.Collection.md#relativecomplement)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2443

___

### subtract

• **subtract**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[subtract](components_ClusterNodeContainer._internal_.Collection.md#subtract)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2439

___

### symdiff

• **symdiff**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[symdiff](components_ClusterNodeContainer._internal_.Collection.md#symdiff)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2471

___

### symmetricDifference

• **symmetricDifference**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

Get the elements that are in the calling collection
or the passed collection but not in both.
http://js.cytoscape.org/#eles.symmetricDifference

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[symmetricDifference](components_ClusterNodeContainer._internal_.Collection.md#symmetricdifference)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2470

___

### u

• **u**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[u](components_ClusterNodeContainer._internal_.Collection.md#u)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2428

___

### union

• **union**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

Get a new collection, resulting from adding the collection with another one
http://js.cytoscape.org/#eles.union

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[union](components_ClusterNodeContainer._internal_.Collection.md#union)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2427

___

### xor

• **xor**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[xor](components_ClusterNodeContainer._internal_.Collection.md#xor)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2472

___

### \|

• **\|**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[|](components_ClusterNodeContainer._internal_.Collection.md#|)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[$id](components_ClusterNodeContainer._internal_.Collection.md#$id)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[aStar](components_ClusterNodeContainer._internal_.Collection.md#astar)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3275

___

### abscomp

▸ **abscomp**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[abscomp](components_ClusterNodeContainer._internal_.Collection.md#abscomp)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[absoluteComplement](components_ClusterNodeContainer._internal_.Collection.md#absolutecomplement)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2450

___

### active

▸ **active**(): `boolean`

Gets whether the element is active (e.g. on user tap, grab, etc).
http://js.cytoscape.org/#ele.active

#### Returns

`boolean`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[active](components_ClusterNodeContainer._internal_.SingularPosition.md#active)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1822

___

### addClass

▸ **addClass**(`classes`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Add classes to elements.
http://js.cytoscape.org/#eles.addClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to add to the elements. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[addClass](components_ClusterNodeContainer._internal_.Collection.md#addclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1987

___

### addListener

▸ **addListener**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[addListener](components_ClusterNodeContainer._internal_.Collection.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1343

▸ **addListener**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[addListener](components_ClusterNodeContainer._internal_.Collection.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1344

▸ **addListener**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[addListener](components_ClusterNodeContainer._internal_.Collection.md#addlistener)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[allAre](components_ClusterNodeContainer._internal_.Collection.md#allare)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[allAreNeighbors](components_ClusterNodeContainer._internal_.Collection.md#allareneighbors)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[allAreNeighbours](components_ClusterNodeContainer._internal_.Collection.md#allareneighbours)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2255

___

### animate

▸ **animate**(`options`, `params?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Animate the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ElementAnimateOptionPos`](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md) \| [`ElementAnimateOptionRen`](components_ClusterNodeContainer._internal_.ElementAnimateOptionRen.md) | An object containing the details of the animation. http://js.cytoscape.org/#eles.animate |
| `params?` | [`ElementAnimateOptionsBase`](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md) | - |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[animate](components_ClusterNodeContainer._internal_.Collection.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2155

___

### animated

▸ **animated**(): `boolean`

Get whether the element is currently being animated.

#### Returns

`boolean`

#### Inherited from

[SingularAnimation](components_ClusterNodeContainer._internal_.SingularAnimation.md).[animated](components_ClusterNodeContainer._internal_.SingularAnimation.md#animated)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2200

___

### animation

▸ **animation**(`options`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

 Get an animation for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SingularAnimationOptionsRen`](components_ClusterNodeContainer._internal_.SingularAnimationOptionsRen.md) \| [`SingularAnimationOptionsPos`](components_ClusterNodeContainer._internal_.SingularAnimationOptionsPos.md) | An object containing the details of the animation. |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Inherited from

[SingularAnimation](components_ClusterNodeContainer._internal_.SingularAnimation.md).[animation](components_ClusterNodeContainer._internal_.SingularAnimation.md#animation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2205

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[anySame](components_ClusterNodeContainer._internal_.Collection.md#anysame)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2233

___

### attr

▸ **attr**(`name?`): `any`

Get a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | The name of the field to get. |

#### Returns

`any`

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[attr](components_ClusterNodeContainer._internal_.SingularData.md#attr)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1438

▸ **attr**(`name`, `value`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the field to set. |
| `value` | `any` | The value to set for the field. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[attr](components_ClusterNodeContainer._internal_.SingularData.md#attr)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1444

▸ **attr**(`obj`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Update multiple data fields at once via an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object containing name- value pairs to update data fields. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[attr](components_ClusterNodeContainer._internal_.SingularData.md#attr)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1449

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[bellmanFord](components_ClusterNodeContainer._internal_.Collection.md#bellmanford)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[betweennessCentrality](components_ClusterNodeContainer._internal_.Collection.md#betweennesscentrality)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[bfs](components_ClusterNodeContainer._internal_.Collection.md#bfs)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3254

___

### bind

▸ **bind**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[bind](components_ClusterNodeContainer._internal_.Collection.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1337

▸ **bind**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[bind](components_ClusterNodeContainer._internal_.Collection.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1338

▸ **bind**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[bind](components_ClusterNodeContainer._internal_.Collection.md#bind)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[boundingBox](components_ClusterNodeContainer._internal_.Collection.md#boundingbox)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[boundingbox](components_ClusterNodeContainer._internal_.Collection.md#boundingbox)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[breadthFirstSearch](components_ClusterNodeContainer._internal_.Collection.md#breadthfirstsearch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3253

___

### classes

▸ **classes**(`classes?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Replace the current list of classes on the elements with the specified list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes?` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names that replaces the current class list. http://js.cytoscape.org/#eles.classes Note: can be used to clear all classes (no arguments). |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[classes](components_ClusterNodeContainer._internal_.Collection.md#classes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2007

___

### clearQueue

▸ **clearQueue**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Remove all queued animations for the elements.
http://js.cytoscape.org/#eles.clearQueue

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[clearQueue](components_ClusterNodeContainer._internal_.Collection.md#clearqueue)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[clone](components_ClusterNodeContainer._internal_.Collection.md#clone)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[closedNeighborhood](components_ClusterNodeContainer._internal_.Collection.md#closedneighborhood)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[closenessCentrality](components_ClusterNodeContainer._internal_.Collection.md#closenesscentrality)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[closenessCentralityNormalized](components_ClusterNodeContainer._internal_.Collection.md#closenesscentralitynormalized)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3376

___

### complement

▸ **complement**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[complement](components_ClusterNodeContainer._internal_.Collection.md#complement)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[components](components_ClusterNodeContainer._internal_.Collection.md#components)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[contains](components_ClusterNodeContainer._internal_.Collection.md#contains)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[copy](components_ClusterNodeContainer._internal_.Collection.md#copy)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[createLayout](components_ClusterNodeContainer._internal_.Collection.md#createlayout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1876

___

### css

▸ **css**(`name`, `value`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[css](components_ClusterNodeContainer._internal_.Collection.md#css)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[css](components_ClusterNodeContainer._internal_.Collection.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2046

▸ **css**(`obj`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[css](components_ClusterNodeContainer._internal_.Collection.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2051

▸ **css**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[css](components_ClusterNodeContainer._internal_.Collection.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2055

___

### cy

▸ **cy**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Get the core instance that owns the element.

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[SingularGraphManipulation](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md).[cy](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#cy)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1314

___

### data

▸ **data**(`name?`): `any`

Get a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | The name of the field to get. |

#### Returns

`any`

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[data](components_ClusterNodeContainer._internal_.SingularData.md#data)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1422

▸ **data**(`name`, `value`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the field to set. |
| `value` | `any` | The value to set for the field. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[data](components_ClusterNodeContainer._internal_.SingularData.md#data)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1428

▸ **data**(`obj`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Update multiple data fields at once via an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object containing name- value pairs to update data fields. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[data](components_ClusterNodeContainer._internal_.SingularData.md#data)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1433

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[degreeCentrality](components_ClusterNodeContainer._internal_.Collection.md#degreecentrality)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[degreeCentralityNormalized](components_ClusterNodeContainer._internal_.Collection.md#degreecentralitynormalized)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3362

___

### delay

▸ **delay**(`duration`, `complete?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Add a delay between animations for the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. |
| `complete?` | () => `void` | A function to call when the delay is complete. http://js.cytoscape.org/#eles.delay |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[delay](components_ClusterNodeContainer._internal_.Collection.md#delay)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2162

___

### delayAnimation

▸ **delayAnimation**(`duration`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get a delay animation for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. http://js.cytoscape.org/#ele.delayAnimation |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Inherited from

[SingularAnimation](components_ClusterNodeContainer._internal_.SingularAnimation.md).[delayAnimation](components_ClusterNodeContainer._internal_.SingularAnimation.md#delayanimation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2212

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[depthFirstSearch](components_ClusterNodeContainer._internal_.Collection.md#depthfirstsearch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3260

___

### deselect

▸ **deselect**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[deselect](components_ClusterNodeContainer._internal_.Collection.md#deselect)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[dfs](components_ClusterNodeContainer._internal_.Collection.md#dfs)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[diff](components_ClusterNodeContainer._internal_.Collection.md#diff)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[dijkstra](components_ClusterNodeContainer._internal_.Collection.md#dijkstra)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3268

___

### each

▸ **each**(`each`, `thisArg?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Iterate over the elements in the collection using an implementation like the native array function namesake.

This function behaves like Array.prototype.forEach() with minor changes for convenience:
You can exit the iteration early by returning false in the iterating function.
The Array.prototype.forEach() implementation does not support this, but it is included anyway on account of its utility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `each` | (`ele`: `TOut`, `i`: `number`, `eles`: [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>) => `boolean` \| `void` | The function executed each iteration. ele - The current element. i - The index of the current element. eles - The collection of elements being iterated. |
| `thisArg?` | `any` | The value for this within the iterating function. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[each](components_ClusterNodeContainer._internal_.Collection.md#each)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[edges](components_ClusterNodeContainer._internal_.Collection.md#edges)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2568

___

### effectiveOpacity

▸ **effectiveOpacity**(): `number`

Get the effective opacity of the element
 (i.e. on-screen opacity),
which takes into consideration parent node opacity.
http://js.cytoscape.org/#ele.effectiveOpacity

#### Returns

`number`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[effectiveOpacity](components_ClusterNodeContainer._internal_.SingularStyle.md#effectiveopacity)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2115

___

### emit

▸ **emit**(`events`, `extra?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[emit](components_ClusterNodeContainer._internal_.Collection.md#emit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1383

___

### empty

▸ **empty**(): `boolean`

Get whether the collection is empty, meaning it has no elements.

#### Returns

`boolean`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[empty](components_ClusterNodeContainer._internal_.Collection.md#empty)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[eq](components_ClusterNodeContainer._internal_.Collection.md#eq)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[every](components_ClusterNodeContainer._internal_.Collection.md#every)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[filter](components_ClusterNodeContainer._internal_.Collection.md#filter)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2554

___

### first

▸ **first**(): `TIn`

Get the first element in the collection.

#### Returns

`TIn`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[first](components_ClusterNodeContainer._internal_.Collection.md#first)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2348

___

### flashClass

▸ **flashClass**(`classes`, `duration?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Add classes to the elements, and then remove the classes after a specified duration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to flash on the elements. |
| `duration?` | `number` | The duration in milliseconds that the classes should be added on the elements. After the duration, the classes are removed. http://js.cytoscape.org/#eles.flashClass |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[flashClass](components_ClusterNodeContainer._internal_.Collection.md#flashclass)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[floydWarshall](components_ClusterNodeContainer._internal_.Collection.md#floydwarshall)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3281

___

### forEach

▸ **forEach**(`each`, `thisArg?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `each` | (`ele`: `TOut`, `i`: `number`, `eles`: [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>) => `boolean` \| `void` |
| `thisArg?` | `any` |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[forEach](components_ClusterNodeContainer._internal_.Collection.md#foreach)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[getElementById](components_ClusterNodeContainer._internal_.Collection.md#getelementbyid)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2416

___

### group

▸ **group**(): [`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

Get the group string that defines the type of the element.

The group strings are 'nodes' for nodes and 'edges' for edges.
In general, you should be using ele.isEdge()
and ele.isNode() instead of ele.group().
http://js.cytoscape.org/#ele.group

#### Returns

[`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[group](components_ClusterNodeContainer._internal_.SingularData.md#group)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1492

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[has](components_ClusterNodeContainer._internal_.Collection.md#has)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2242

___

### hasClass

▸ **hasClass**(`className`): `boolean`

Get whether an element has a particular class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | The name of the class to test for. http://js.cytoscape.org/#ele.hasClass |

#### Returns

`boolean`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[hasClass](components_ClusterNodeContainer._internal_.SingularStyle.md#hasclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2072

___

### height

▸ **height**(): `number`

Get the height of the element.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[height](components_ClusterNodeContainer._internal_.SingularPosition.md#height)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1804

___

### hidden

▸ **hidden**(): `boolean`

Get whether the element is hidden.
http://js.cytoscape.org/#ele.visible

#### Returns

`boolean`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[hidden](components_ClusterNodeContainer._internal_.SingularStyle.md#hidden)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2108

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[hopcroftTarjanBiconnected](components_ClusterNodeContainer._internal_.Collection.md#hopcrofttarjanbiconnected)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[hopcroftTarjanBiconnectedComponents](components_ClusterNodeContainer._internal_.Collection.md#hopcrofttarjanbiconnectedcomponents)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[htb](components_ClusterNodeContainer._internal_.Collection.md#htb)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[htbc](components_ClusterNodeContainer._internal_.Collection.md#htbc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3323

___

### id

▸ **id**(): `string`

A shortcut to get the ID of an element.
http://js.cytoscape.org/#ele.id

#### Returns

`string`

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[id](components_ClusterNodeContainer._internal_.SingularData.md#id)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1476

___

### inside

▸ **inside**(): `boolean`

Get whether the element is inside the graph (i.e. not removed).
http://js.cytoscape.org/#ele.inside

#### Returns

`boolean`

#### Inherited from

[SingularGraphManipulation](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md).[inside](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#inside)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1324

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[is](components_ClusterNodeContainer._internal_.Collection.md#is)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2262

___

### isEdge

▸ **isEdge**(): this is EdgeSingular

Get whether the element is an edge.
http://js.cytoscape.org/#ele.isEdge

#### Returns

this is EdgeSingular

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[isEdge](components_ClusterNodeContainer._internal_.SingularData.md#isedge)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1504

___

### isNode

▸ **isNode**(): this is NodeSingular

Get whether the element is a node.
http://js.cytoscape.org/#ele.isNode

#### Returns

this is NodeSingular

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[isNode](components_ClusterNodeContainer._internal_.SingularData.md#isnode)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1498

___

### json

▸ **json**(): `string`

Get the element's plain JavaScript object representation.
http://js.cytoscape.org/#ele.json

#### Returns

`string`

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[json](components_ClusterNodeContainer._internal_.SingularData.md#json)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1482

___

### jsons

▸ **jsons**(): `string`[]

Get an array of the plain JavaScript object
representation of all elements in the collection.

#### Returns

`string`[]

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[jsons](components_ClusterNodeContainer._internal_.Collection.md#jsons)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[kargerStein](components_ClusterNodeContainer._internal_.Collection.md#kargerstein)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[kruskal](components_ClusterNodeContainer._internal_.Collection.md#kruskal)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3293

___

### last

▸ **last**(): `TIn`

Get the last element in the collection.

#### Returns

`TIn`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[last](components_ClusterNodeContainer._internal_.Collection.md#last)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[layout](components_ClusterNodeContainer._internal_.Collection.md#layout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1874

___

### listen

▸ **listen**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[listen](components_ClusterNodeContainer._internal_.Collection.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1340

▸ **listen**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[listen](components_ClusterNodeContainer._internal_.Collection.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1341

▸ **listen**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[listen](components_ClusterNodeContainer._internal_.Collection.md#listen)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[makeLayout](components_ClusterNodeContainer._internal_.Collection.md#makelayout)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[map](components_ClusterNodeContainer._internal_.Collection.md#map)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[max](components_ClusterNodeContainer._internal_.Collection.md#max)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2646

___

### merge

▸ **merge**(`eles`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

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

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[merge](components_ClusterNodeContainer._internal_.Collection.md#merge)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[min](components_ClusterNodeContainer._internal_.Collection.md#min)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[move](components_ClusterNodeContainer._internal_.Collection.md#move)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[move](components_ClusterNodeContainer._internal_.Collection.md#move)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[neighborhood](components_ClusterNodeContainer._internal_.Collection.md#neighborhood)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[nodes](components_ClusterNodeContainer._internal_.Collection.md#nodes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2561

___

### nonempty

▸ **nonempty**(): `boolean`

Get whether the collection is nonempty, meaning it has elements.

#### Returns

`boolean`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[nonempty](components_ClusterNodeContainer._internal_.Collection.md#nonempty)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2313

___

### numericStyle

▸ **numericStyle**(`name`): `any`

Get the numeric value of a style property in
preferred units that can be used for calculations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style property to get. http://js.cytoscape.org/#ele.numericStyle |

#### Returns

`any`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[numericStyle](components_ClusterNodeContainer._internal_.SingularStyle.md#numericstyle)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2091

___

### numericStyleUnits

▸ **numericStyleUnits**(`name`): `any`

Get the units that ele.numericStyle() is expressed in, for a particular property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style property to get. http://js.cytoscape.org/#ele.numericStyleUnits |

#### Returns

`any`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[numericStyleUnits](components_ClusterNodeContainer._internal_.SingularStyle.md#numericstyleunits)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2098

___

### off

▸ **off**(`events`, `selector?`, `handler?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.off
alias unbind, unlisten, removeListener

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[off](components_ClusterNodeContainer._internal_.Collection.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1374

___

### on

▸ **on**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.on

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[on](components_ClusterNodeContainer._internal_.Collection.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1334

▸ **on**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[on](components_ClusterNodeContainer._internal_.Collection.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1335

▸ **on**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[on](components_ClusterNodeContainer._internal_.Collection.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1336

___

### once

▸ **once**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.once

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[once](components_ClusterNodeContainer._internal_.Collection.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1367

▸ **once**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[once](components_ClusterNodeContainer._internal_.Collection.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1368

▸ **once**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[once](components_ClusterNodeContainer._internal_.Collection.md#once)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1369

___

### one

▸ **one**(`events`, `selector`, `data`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A delegate selector to specify child elements for which the handler is triggered. |
| `data` | `any` | A plain object which is passed to the handler in the event object argument. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | - |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[one](components_ClusterNodeContainer._internal_.Collection.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1361

▸ **one**(`events`, `selector`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[one](components_ClusterNodeContainer._internal_.Collection.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1362

▸ **one**(`events`, `handler`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[one](components_ClusterNodeContainer._internal_.Collection.md#one)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[openNeighborhood](components_ClusterNodeContainer._internal_.Collection.md#openneighborhood)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2687

___

### outerHeight

▸ **outerHeight**(): `number`

Get the outer height of the element (includes height, padding, & border).

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[outerHeight](components_ClusterNodeContainer._internal_.SingularPosition.md#outerheight)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1808

___

### outerWidth

▸ **outerWidth**(): `number`

Get the outer width of the element (includes width, padding, & border).

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[outerWidth](components_ClusterNodeContainer._internal_.SingularPosition.md#outerwidth)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1789

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[pageRank](components_ClusterNodeContainer._internal_.Collection.md#pagerank)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[pon](components_ClusterNodeContainer._internal_.Collection.md#pon)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[promiseOn](components_ClusterNodeContainer._internal_.Collection.md#promiseon)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[reduce](components_ClusterNodeContainer._internal_.Collection.md#reduce)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[remove](components_ClusterNodeContainer._internal_.Collection.md#remove)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[removeAttr](components_ClusterNodeContainer._internal_.Collection.md#removeattr)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1401

___

### removeClass

▸ **removeClass**(`classes`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Remove classes from elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to remove from the elements. http://js.cytoscape.org/#eles.removeClass |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[removeClass](components_ClusterNodeContainer._internal_.Collection.md#removeclass)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[removeData](components_ClusterNodeContainer._internal_.Collection.md#removedata)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1400

___

### removeListener

▸ **removeListener**(`events`, `selector?`, `handler?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[removeListener](components_ClusterNodeContainer._internal_.Collection.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1377

___

### removeScratch

▸ **removeScratch**(`namespace`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Remove scratchpad data.
You should remove scratchpad data only at your own namespaces.
http://js.cytoscape.org/#ele.removeScratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A namespace string. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[removeScratch](components_ClusterNodeContainer._internal_.SingularData.md#removescratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1470

___

### removeStyle

▸ **removeStyle**(`names?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Remove all or specific style overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names?` | `string` | A space-separated list of property names to remove overrides |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[removeStyle](components_ClusterNodeContainer._internal_.Collection.md#removestyle)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2060

___

### removed

▸ **removed**(): `boolean`

Get whether the element has been removed from the graph.
http://js.cytoscape.org/#ele.removed

#### Returns

`boolean`

#### Inherited from

[SingularGraphManipulation](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md).[removed](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#removed)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1319

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[renderedBoundingBox](components_ClusterNodeContainer._internal_.Collection.md#renderedboundingbox)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[renderedBoundingbox](components_ClusterNodeContainer._internal_.Collection.md#renderedboundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1857

___

### renderedCss

▸ **renderedCss**(): `Object`

#### Returns

`Object`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[renderedCss](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedcss)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2082

▸ **renderedCss**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[renderedCss](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedcss)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2083

___

### renderedHeight

▸ **renderedHeight**(): `number`

Get the height of the element in rendered dimensions.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[renderedHeight](components_ClusterNodeContainer._internal_.SingularPosition.md#renderedheight)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1812

___

### renderedOuterHeight

▸ **renderedOuterHeight**(): `number`

Get the outer height of the element (includes height, padding, & border) in rendered dimensions.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[renderedOuterHeight](components_ClusterNodeContainer._internal_.SingularPosition.md#renderedouterheight)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1817

___

### renderedOuterWidth

▸ **renderedOuterWidth**(): `number`

Get the outer width of the element (includes width, padding, & border) in rendered dimensions.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[renderedOuterWidth](components_ClusterNodeContainer._internal_.SingularPosition.md#renderedouterwidth)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1799

___

### renderedStyle

▸ **renderedStyle**(): `Object`

Get a name-value pair object containing rendered visual
style properties and their values for the element.

#### Returns

`Object`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[renderedStyle](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedstyle)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2079

▸ **renderedStyle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[renderedStyle](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedstyle)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2080

___

### renderedWidth

▸ **renderedWidth**(): `number`

Get the width of the element in rendered dimensions.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[renderedWidth](components_ClusterNodeContainer._internal_.SingularPosition.md#renderedwidth)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1794

___

### restore

▸ **restore**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Put removed elements back into the graph.
http://js.cytoscape.org/#eles.restore

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[restore](components_ClusterNodeContainer._internal_.Collection.md#restore)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[same](components_ClusterNodeContainer._internal_.Collection.md#same)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2226

___

### scratch

▸ **scratch**(`namespace?`): `any`

Get or set the scratchpad at a particular namespace,
where temporary or non-JSON data can be stored.
Get scratchpad if one or no parameter provided.
App-level scratchpad data should use namespaces
prefixed with underscore, like '_foo'.
http://js.cytoscape.org/#ele.scratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | A namespace string. |

#### Returns

`any`

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[scratch](components_ClusterNodeContainer._internal_.SingularData.md#scratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1461

▸ **scratch**(`namespace`, `value`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `value` | `any` |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[SingularData](components_ClusterNodeContainer._internal_.SingularData.md).[scratch](components_ClusterNodeContainer._internal_.SingularData.md#scratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1462

___

### select

▸ **select**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Make the elements selected (NB other elements outside the collection are not affected).
http://js.cytoscape.org/#eles.select

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[select](components_ClusterNodeContainer._internal_.Collection.md#select)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1955

___

### selectable

▸ **selectable**(): `boolean`

Get whether the element's selection state is mutable.
http://js.cytoscape.org/#ele.selectable

#### Returns

`boolean`

#### Inherited from

[SingularSelection](components_ClusterNodeContainer._internal_.SingularSelection.md).[selectable](components_ClusterNodeContainer._internal_.SingularSelection.md#selectable)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1945

___

### selected

▸ **selected**(): `boolean`

Get whether the element is selected.
http://js.cytoscape.org/#ele.selected

#### Returns

`boolean`

#### Inherited from

[SingularSelection](components_ClusterNodeContainer._internal_.SingularSelection.md).[selected](components_ClusterNodeContainer._internal_.SingularSelection.md#selected)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1939

___

### selectify

▸ **selectify**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Make the selection states of the elements mutable.
http://js.cytoscape.org/#eles.selectify

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[selectify](components_ClusterNodeContainer._internal_.Collection.md#selectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1966

___

### size

▸ **size**(): `number`

Get the number of elements in the collection.

#### Returns

`number`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[size](components_ClusterNodeContainer._internal_.Collection.md#size)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2300

___

### slice

▸ **slice**(`start?`, `end?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Get a subset of the elements in the collection based on specified indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | An integer that specifies where to start the selection.              The first element has an index of 0.              Use negative numbers to select from the end of an array. |
| `end?` | `number` | An integer that specifies where to end the selection.            If omitted, all elements from the start position and to the end of the array will be selected.            Use negative numbers to select from the end of an array. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[slice](components_ClusterNodeContainer._internal_.Collection.md#slice)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[some](components_ClusterNodeContainer._internal_.Collection.md#some)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[sort](components_ClusterNodeContainer._internal_.Collection.md#sort)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2580

___

### stop

▸ **stop**(`clearQueue?`, `jumpToEnd?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Stop all animations that are currently running.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearQueue?` | `boolean` | A boolean, indicating whether the queue of animations should be emptied. |
| `jumpToEnd?` | `boolean` | A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway. http://js.cytoscape.org/#eles.stop |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[stop](components_ClusterNodeContainer._internal_.Collection.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2169

___

### style

▸ **style**(`name`, `value`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[style](components_ClusterNodeContainer._internal_.Collection.md#style)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[style](components_ClusterNodeContainer._internal_.Collection.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2026

▸ **style**(`obj`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[style](components_ClusterNodeContainer._internal_.Collection.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2031

▸ **style**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[style](components_ClusterNodeContainer._internal_.Collection.md#style)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[tarjanStronglyConnected](components_ClusterNodeContainer._internal_.Collection.md#tarjanstronglyconnected)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[tarjanStronglyConnectedComponents](components_ClusterNodeContainer._internal_.Collection.md#tarjanstronglyconnectedcomponents)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3333

___

### toArray

▸ **toArray**(): `TIn`[]

Get the collection as an array, maintaining the order of the elements.

#### Returns

`TIn`[]

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[toArray](components_ClusterNodeContainer._internal_.Collection.md#toarray)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2369

___

### toggleClass

▸ **toggleClass**(`classes`, `toggle?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Toggle whether the elements have the specified classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to toggle on the elements. |
| `toggle?` | `boolean` | Instead of automatically toggling, adds the classes on truthy values or removes them on falsey values. http://js.cytoscape.org/#eles.toggleClass |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[toggleClass](components_ClusterNodeContainer._internal_.Collection.md#toggleclass)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2000

___

### transparent

▸ **transparent**(): `number`

Get whether the element's effective opacity is completely transparent,
which takes into consideration parent node opacity.
http://js.cytoscape.org/#ele.transparent

#### Returns

`number`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[transparent](components_ClusterNodeContainer._internal_.SingularStyle.md#transparent)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2121

___

### trigger

▸ **trigger**(`events`, `extra?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

http://js.cytoscape.org/#eles.trigger
alias: emit

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extra?` | `string`[] |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[trigger](components_ClusterNodeContainer._internal_.Collection.md#trigger)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[tsc](components_ClusterNodeContainer._internal_.Collection.md#tsc)

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

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[tscc](components_ClusterNodeContainer._internal_.Collection.md#tscc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3343

___

### unbind

▸ **unbind**(`events`, `selector?`, `handler?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[unbind](components_ClusterNodeContainer._internal_.Collection.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1375

___

### unlisten

▸ **unlisten**(`events`, `selector?`, `handler?`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[unlisten](components_ClusterNodeContainer._internal_.Collection.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1376

___

### unmerge

▸ **unmerge**(`eles`): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

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

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[unmerge](components_ClusterNodeContainer._internal_.Collection.md#unmerge)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2543

___

### unselect

▸ **unselect**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Make the elements not selected (NB other elements outside the collection are not affected).
http://js.cytoscape.org/#eles.unselect

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[unselect](components_ClusterNodeContainer._internal_.Collection.md#unselect)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1960

___

### unselectify

▸ **unselectify**(): [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

Make the selection states of the elements immutable.
http://js.cytoscape.org/#eles.unselectify

#### Returns

[`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<`TOut`, `TIn`\>

#### Inherited from

[Collection](components_ClusterNodeContainer._internal_.Collection.md).[unselectify](components_ClusterNodeContainer._internal_.Collection.md#unselectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1971

___

### visible

▸ **visible**(): `boolean`

Get whether the element is visible.
http://js.cytoscape.org/#ele.visible

#### Returns

`boolean`

#### Inherited from

[SingularStyle](components_ClusterNodeContainer._internal_.SingularStyle.md).[visible](components_ClusterNodeContainer._internal_.SingularStyle.md#visible)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2103

___

### width

▸ **width**(): `number`

Get the width of the element.

#### Returns

`number`

#### Inherited from

[SingularPosition](components_ClusterNodeContainer._internal_.SingularPosition.md).[width](components_ClusterNodeContainer._internal_.SingularPosition.md#width)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1785
