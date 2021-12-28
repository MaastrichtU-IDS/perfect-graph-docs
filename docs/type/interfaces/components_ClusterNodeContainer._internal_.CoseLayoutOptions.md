[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoseLayoutOptions

# Interface: CoseLayoutOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoseLayoutOptions

http://js.cytoscape.org/#layouts/cose

## Hierarchy

- [`ShapedLayoutOptions`](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md)

  ↳ **`CoseLayoutOptions`**

## Table of contents

### Properties

- [animate](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#animate)
- [animationDuration](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#animationduration)
- [animationEasing](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#animationeasing)
- [avoidOverlap](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#avoidoverlap)
- [boundingBox](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#boundingbox)
- [componentSpacing](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#componentspacing)
- [coolingFactor](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#coolingfactor)
- [fit](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#fit)
- [gravity](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#gravity)
- [initialTemp](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#initialtemp)
- [minTemp](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#mintemp)
- [name](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#name)
- [nestingFactor](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#nestingfactor)
- [nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#nodedimensionsincludelabels)
- [nodeOverlap](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#nodeoverlap)
- [numIter](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#numiter)
- [padding](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#padding)
- [randomize](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#randomize)
- [ready](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#ready)
- [refresh](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#refresh)
- [sort](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#sort)
- [spacingFactor](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#spacingfactor)
- [stop](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#stop)
- [weaver](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#weaver)

### Methods

- [edgeElasticity](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#edgeelasticity)
- [idealEdgeLength](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#idealedgelength)
- [nodeRepulsion](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md#noderepulsion)

## Properties

### animate

• `Optional` **animate**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animate](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4685

___

### animationDuration

• `Optional` **animationDuration**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animationDuration](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationduration)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4687

___

### animationEasing

• `Optional` **animationEasing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animationEasing](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationeasing)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4689

___

### avoidOverlap

• `Optional` **avoidOverlap**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[avoidOverlap](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#avoidoverlap)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4739

___

### boundingBox

• `Optional` **boundingBox**: [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) \| [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[boundingBox](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#boundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4736

___

### componentSpacing

• **componentSpacing**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4840

___

### coolingFactor

• **coolingFactor**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4860

___

### fit

• **fit**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[fit](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4732

___

### gravity

• **gravity**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4854

___

### initialTemp

• **initialTemp**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4858

___

### minTemp

• **minTemp**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4862

___

### name

• **name**: ``"cose"``

#### Overrides

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[name](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#name)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4832

___

### nestingFactor

• **nestingFactor**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4852

___

### nodeDimensionsIncludeLabels

• **nodeDimensionsIncludeLabels**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#nodedimensionsincludelabels)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4742

___

### nodeOverlap

• **nodeOverlap**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4845

___

### numIter

• **numIter**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4856

___

### padding

• `Optional` **padding**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[padding](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#padding)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4734

___

### randomize

• **randomize**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4838

___

### ready

• `Optional` **ready**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[ready](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#ready)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4661

___

### refresh

• **refresh**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4836

___

### sort

• `Optional` **sort**: [`SortingFunction`](../modules/components_ClusterNodeContainer._internal_.md#sortingfunction)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[sort](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#sort)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4747

___

### spacingFactor

• `Optional` **spacingFactor**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[spacingFactor](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#spacingfactor)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4744

___

### stop

• `Optional` **stop**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[stop](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4663

___

### weaver

• **weaver**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4864

## Methods

### edgeElasticity

▸ **edgeElasticity**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4849

___

### idealEdgeLength

▸ **idealEdgeLength**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4847

___

### nodeRepulsion

▸ **nodeRepulsion**(`node`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4842
