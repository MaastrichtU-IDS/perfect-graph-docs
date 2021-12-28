[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeCollectionPosition

# Interface: NodeCollectionPosition

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeCollectionPosition

http://js.cytoscape.org/#collection/position--dimensions

## Hierarchy

- **`NodeCollectionPosition`**

  ↳ [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

## Table of contents

### Methods

- [grabify](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#grabify)
- [lock](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#lock)
- [modelPositions](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#modelpositions)
- [points](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#points)
- [positions](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#positions)
- [shift](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#shift)
- [ungrabify](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#ungrabify)
- [unlock](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md#unlock)

## Methods

### grabify

▸ **grabify**(): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Allow the user to grab the nodes.
http://js.cytoscape.org/#nodes.grabify

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1761

___

### lock

▸ **lock**(): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Lock the nodes such that their positions can not be changed.
http://js.cytoscape.org/#nodes.lock

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1771

___

### modelPositions

▸ **modelPositions**(`handler`): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) \| [`ElementPositionFunction`](../modules/components_ClusterNodeContainer._internal_.md#elementpositionfunction) |

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1754

___

### points

▸ **points**(`handler`): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) \| [`ElementPositionFunction`](../modules/components_ClusterNodeContainer._internal_.md#elementpositionfunction) |

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1755

___

### positions

▸ **positions**(`handler`): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Set the positions via a function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) \| [`ElementPositionFunction`](../modules/components_ClusterNodeContainer._internal_.md#elementpositionfunction) | A callback function that returns the position to set for each element. |

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1753

___

### shift

▸ **shift**(`dimension`, `value?`): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Shift the positions of the nodes by a given model position vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dimension` | [`PositionDimension`](../modules/components_ClusterNodeContainer._internal_.md#positiondimension) | The position dimension to shift. |
| `value?` | `number` | The value to shift the dimension. |

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1740

▸ **shift**(`pos`): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Shift the positions of the nodes by a given model position vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | An object specifying name-value pairs representing dimensions to shift. |

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1745

___

### ungrabify

▸ **ungrabify**(): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Disallow the user to grab the nodes.
http://js.cytoscape.org/#nodes.ungrabify

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1766

___

### unlock

▸ **unlock**(): [`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

Unlock the nodes such that their positions can be changed.
http://js.cytoscape.org/#nodes.unlock

#### Returns

[`NodeCollectionPosition`](components_ClusterNodeContainer._internal_.NodeCollectionPosition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1776
