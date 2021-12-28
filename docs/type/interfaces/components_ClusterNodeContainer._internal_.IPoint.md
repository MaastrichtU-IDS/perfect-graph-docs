[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IPoint

# Interface: IPoint

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IPoint

## Hierarchy

- [`IPointData`](components_ClusterNodeContainer._internal_.IPointData.md)

  ↳ **`IPoint`**

  ↳↳ [`ObservablePoint`](../classes/components_ClusterNodeContainer._internal_.ObservablePoint.md)

  ↳↳ [`Point`](../classes/components_ClusterNodeContainer._internal_.Point.md)

## Implemented by

- [`ObservablePoint`](../classes/components_ClusterNodeContainer._internal_.ObservablePoint.md)
- [`Point`](../classes/components_ClusterNodeContainer._internal_.Point.md)

## Table of contents

### Properties

- [x](components_ClusterNodeContainer._internal_.IPoint.md#x)
- [y](components_ClusterNodeContainer._internal_.IPoint.md#y)

### Methods

- [copyFrom](components_ClusterNodeContainer._internal_.IPoint.md#copyfrom)
- [copyTo](components_ClusterNodeContainer._internal_.IPoint.md#copyto)
- [equals](components_ClusterNodeContainer._internal_.IPoint.md#equals)
- [set](components_ClusterNodeContainer._internal_.IPoint.md#set)

## Properties

### x

• **x**: `number`

#### Inherited from

[IPointData](components_ClusterNodeContainer._internal_.IPointData.md).[x](components_ClusterNodeContainer._internal_.IPointData.md#x)

#### Defined in

node_modules/@pixi/math/index.d.ts:359

___

### y

• **y**: `number`

#### Inherited from

[IPointData](components_ClusterNodeContainer._internal_.IPointData.md).[y](components_ClusterNodeContainer._internal_.IPointData.md#y)

#### Defined in

node_modules/@pixi/math/index.d.ts:360

## Methods

### copyFrom

▸ **copyFrom**(`p`): [`IPoint`](components_ClusterNodeContainer._internal_.IPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`IPointData`](components_ClusterNodeContainer._internal_.IPointData.md) |

#### Returns

[`IPoint`](components_ClusterNodeContainer._internal_.IPoint.md)

#### Defined in

node_modules/@pixi/math/index.d.ts:352

___

### copyTo

▸ **copyTo**<`T`\>(`p`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IPoint`](components_ClusterNodeContainer._internal_.IPoint.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `T` |

#### Returns

`T`

#### Defined in

node_modules/@pixi/math/index.d.ts:353

___

### equals

▸ **equals**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`IPointData`](components_ClusterNodeContainer._internal_.IPointData.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/math/index.d.ts:354

___

### set

▸ **set**(`x?`, `y?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:355
