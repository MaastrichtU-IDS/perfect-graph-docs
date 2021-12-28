[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeCollectionCompound

# Interface: NodeCollectionCompound

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeCollectionCompound

http://js.cytoscape.org/#collection/compound-nodes

## Hierarchy

- **`NodeCollectionCompound`**

  ↳ [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

## Table of contents

### Methods

- [ancestors](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#ancestors)
- [children](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#children)
- [commonAncestors](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#commonancestors)
- [descendants](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#descendants)
- [nonorphans](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#nonorphans)
- [orphans](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#orphans)
- [parent](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#parent)
- [parents](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#parents)
- [siblings](components_ClusterNodeContainer._internal_.NodeCollectionCompound.md#siblings)

## Methods

### ancestors

▸ **ancestors**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all compound ancestor nodes
(i.e. parents, parents' parents, etc.) of each node in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.ancestors |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3429

___

### children

▸ **children**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all compound child (i.e. direct descendant) nodes of each node in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.children |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3455

___

### commonAncestors

▸ **commonAncestors**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all compound ancestors common to all the nodes in the collection,
starting with the closest and getting progressively farther.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.commonAncestors |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3437

___

### descendants

▸ **descendants**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all compound descendant (i.e. children, children's children, etc.)
nodes of each node in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.descendants |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3462

___

### nonorphans

▸ **nonorphans**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all nonorphan (i.e. has a compound parent) nodes in the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.nonorphans |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3449

___

### orphans

▸ **orphans**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all orphan (i.e. has no compound parent) nodes in the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.orphans |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3443

___

### parent

▸ **parent**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get the compound parent node of each node in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.parent |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3422

___

### parents

▸ **parents**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3430

___

### siblings

▸ **siblings**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get all sibling (i.e. same compound parent)
nodes of each node in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | A selector used to filter the resultant collection. http://js.cytoscape.org/#nodes.siblings |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3469
