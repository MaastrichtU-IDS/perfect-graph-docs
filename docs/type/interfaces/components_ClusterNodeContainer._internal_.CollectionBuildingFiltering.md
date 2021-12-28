[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionBuildingFiltering

# Interface: CollectionBuildingFiltering<TIn, TOut\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionBuildingFiltering

http://js.cytoscape.org/#collection/building--filtering

## Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

## Hierarchy

- **`CollectionBuildingFiltering`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Properties

- [!](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#!)
- [&amp;](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#&amp;)
- [(+)](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#(+))
- [(-)](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#(-))
- [+](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#+)
- [-](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#-)
- [.](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#.)
- [\](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#/)
- [^](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#^)
- [add](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#add)
- [and](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#and)
- [difference](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#difference)
- [intersect](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#intersect)
- [intersection](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#intersection)
- [n](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#n)
- [not](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#not)
- [or](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#or)
- [relativeComplement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#relativecomplement)
- [subtract](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#subtract)
- [symdiff](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#symdiff)
- [symmetricDifference](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#symmetricdifference)
- [u](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#u)
- [union](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#union)
- [xor](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#xor)
- [\|](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#|)

### Methods

- [$id](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#$id)
- [abscomp](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#abscomp)
- [absoluteComplement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#absolutecomplement)
- [complement](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#complement)
- [diff](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#diff)
- [edges](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#edges)
- [filter](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#filter)
- [getElementById](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#getelementbyid)
- [map](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#map)
- [max](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#max)
- [merge](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#merge)
- [min](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#min)
- [nodes](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#nodes)
- [reduce](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#reduce)
- [sort](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#sort)
- [unmerge](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md#unmerge)

## Properties

### !

• **!**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2442

___

### &amp;

• **&**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2462

___

### (+)

• **(+)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2474

___

### (-)

• **(-)**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2475

___

### +

• **+**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2430

___

### -

• **-**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2444

___

### .

• **.**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2463

___

### \

• **\**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2440

___

### ^

• **^**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2473

___

### add

• **add**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2429

___

### and

• **and**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2460

___

### difference

• **difference**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

Get a new collection, resulting from the collection without some specified elements.
http://js.cytoscape.org/#eles.difference

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2438

___

### intersect

• **intersect**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2459

___

### intersection

• **intersection**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

Get the elements in both this collection and another specified collection.
http://js.cytoscape.org/#eles.intersection

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2458

___

### n

• **n**: [`CollectionBuildingIntersectionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingintersectionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2461

___

### not

• **not**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2441

___

### or

• **or**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2431

___

### relativeComplement

• **relativeComplement**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2443

___

### subtract

• **subtract**: [`CollectionBuildingDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2439

___

### symdiff

• **symdiff**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2471

___

### symmetricDifference

• **symmetricDifference**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

Get the elements that are in the calling collection
or the passed collection but not in both.
http://js.cytoscape.org/#eles.symmetricDifference

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2470

___

### u

• **u**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2428

___

### union

• **union**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

Get a new collection, resulting from adding the collection with another one
http://js.cytoscape.org/#eles.union

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2427

___

### xor

• **xor**: [`CollectionSymmetricDifferenceFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionsymmetricdifferencefunc)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2472

___

### \|

• **\|**: [`CollectionBuildingUnionFunc`](../modules/components_ClusterNodeContainer._internal_.md#collectionbuildingunionfunc)

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2421

___

### abscomp

▸ **abscomp**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2451

___

### absoluteComplement

▸ **absoluteComplement**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get all elements in the graph that are not in the calling collection.
http://js.cytoscape.org/#eles.absoluteComplement

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2450

___

### complement

▸ **complement**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2452

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2489

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2568

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2554

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2416

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2646

___

### merge

▸ **merge**(`eles`): [`CollectionBuildingFiltering`](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md)<`TIn`, `TOut`\>

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

[`CollectionBuildingFiltering`](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md)<`TIn`, `TOut`\>

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2624

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2561

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2610

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2580

___

### unmerge

▸ **unmerge**(`eles`): [`CollectionBuildingFiltering`](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md)<`TIn`, `TOut`\>

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

[`CollectionBuildingFiltering`](components_ClusterNodeContainer._internal_.CollectionBuildingFiltering.md)<`TIn`, `TOut`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2543
