[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreGraphManipulation

# Interface: CoreGraphManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreGraphManipulation

These are the principle functions used to interact with the graph model.

http://js.cytoscape.org/#core/graph-manipulation

## Hierarchy

- **`CoreGraphManipulation`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [$](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#$)
- [$id](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#$id)
- [add](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#add)
- [batch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#batch)
- [collection](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#collection)
- [destroy](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#destroy)
- [destroyed](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#destroyed)
- [edges](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#edges)
- [elements](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#elements)
- [endBatch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#endbatch)
- [filter](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#filter)
- [getElementById](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#getelementbyid)
- [hasElementWithId](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#haselementwithid)
- [mount](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#mount)
- [nodes](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#nodes)
- [remove](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#remove)
- [startBatch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#startbatch)
- [unmount](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#unmount)

## Methods

### $

▸ **$**(`selector`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector.
http://js.cytoscape.org/#cy.$

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:435

___

### $id

▸ **$id**(`id`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get an element from its ID in a very performant way.
http://js.cytoscape.org/#cy.getElementById

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:429

___

### add

▸ **add**(`eles`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Add elements to the graph and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`ElementDefinition`](components_ClusterNodeContainer._internal_.ElementDefinition.md) \| [`ElementDefinition`](components_ClusterNodeContainer._internal_.ElementDefinition.md)[] \| [`ElementsDefinition`](components_ClusterNodeContainer._internal_.ElementsDefinition.md) \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:401

___

### batch

▸ **batch**(`callback`): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch
 A callback within which you can make batch updates to elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:462

___

### collection

▸ **collection**(`eles?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a collection from elements in the graph matching the specified selector or from an array of elements.
If no parameter specified, an empty collection will be returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles?` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)[] |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:412

___

### destroy

▸ **destroy**(): `void`

A convenience function to explicitly destroy the Core.
http://js.cytoscape.org/#cy.destroy

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:503

___

### destroyed

▸ **destroyed**(): `boolean`

Get whether the instance of Cytoscape.js has been destroyed or not.
https://js.cytoscape.org/#cy.destroyed

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:509

___

### edges

▸ **edges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get edges in the graph matching the specified selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:451

___

### elements

▸ **elements**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector.
http://js.cytoscape.org/#cy.$

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:441

___

### endBatch

▸ **endBatch**(): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch

Ends batching manually (useful for asynchronous cases).

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:476

___

### filter

▸ **filter**(`selector`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector or filter function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| (`ele`: [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<[`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue), [`SingularElementArgument`](../modules/components_ClusterNodeContainer._internal_.md#singularelementargument)\>, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:455

___

### getElementById

▸ **getElementById**(`id`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get an element from its ID in a very performant way.
http://js.cytoscape.org/#cy.getElementById

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:423

___

### hasElementWithId

▸ **hasElementWithId**(`id`): `boolean`

check whether the specified id is in the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:417

___

### mount

▸ **mount**(`element`): `void`

Attaches the instance to the specified container for visualisation.
http://js.cytoscape.org/#cy.mount

If the core instance is headless prior to calling cy.mount(), then
the instance will no longer be headless and the visualisation will
be shown in the specified container. If the core instance is
non-headless prior to calling cy.mount(), then the visualisation
is swapped from the prior container to the specified container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Element` |

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:488

___

### nodes

▸ **nodes**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get nodes in the graph matching the specified selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:446

___

### remove

▸ **remove**(`eles`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove elements in collecion or match the selector from the graph and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:406

___

### startBatch

▸ **startBatch**(): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch

Starts batching manually (useful for asynchronous cases).

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:469

___

### unmount

▸ **unmount**(): `void`

Remove the instance from its current container.
http://js.cytoscape.org/#cy.unmount

This function sets the instance to be headless after unmounting from
the current container.

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:497
