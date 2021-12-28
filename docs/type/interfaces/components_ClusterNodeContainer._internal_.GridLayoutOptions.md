[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / GridLayoutOptions

# Interface: GridLayoutOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).GridLayoutOptions

http://js.cytoscape.org/#layouts/grid

## Hierarchy

- [`ShapedLayoutOptions`](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md)

  ↳ **`GridLayoutOptions`**

## Table of contents

### Properties

- [animate](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#animate)
- [animationDuration](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#animationduration)
- [animationEasing](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#animationeasing)
- [avoidOverlap](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#avoidoverlap)
- [avoidOverlapPadding](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#avoidoverlappadding)
- [boundingBox](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#boundingbox)
- [cols](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#cols)
- [condense](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#condense)
- [fit](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#fit)
- [name](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#name)
- [nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#nodedimensionsincludelabels)
- [padding](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#padding)
- [ready](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#ready)
- [rows](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#rows)
- [sort](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#sort)
- [spacingFactor](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#spacingfactor)
- [stop](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#stop)

### Methods

- [position](components_ClusterNodeContainer._internal_.GridLayoutOptions.md#position)

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

### avoidOverlapPadding

• `Optional` **avoidOverlapPadding**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4756

___

### boundingBox

• `Optional` **boundingBox**: [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) \| [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[boundingBox](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#boundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4736

___

### cols

• `Optional` **cols**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4763

___

### condense

• **condense**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4759

___

### fit

• **fit**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[fit](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4732

___

### name

• **name**: ``"grid"``

#### Overrides

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[name](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#name)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4753

___

### nodeDimensionsIncludeLabels

• **nodeDimensionsIncludeLabels**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#nodedimensionsincludelabels)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4742

___

### padding

• `Optional` **padding**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[padding](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#padding)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4734

___

### ready

• `Optional` **ready**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[ready](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#ready)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4661

___

### rows

• `Optional` **rows**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4761

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

## Methods

### position

▸ **position**(`node`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeSingular` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `col` | `number` |
| `row` | `number` |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4765
