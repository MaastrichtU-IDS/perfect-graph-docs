[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / CanvasTransform

# Interface: CanvasTransform

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).CanvasTransform

## Hierarchy

- **`CanvasTransform`**

  ↳ [`CanvasRenderingContext2D`](components_Text._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [getTransform](components_Text._internal_.CanvasTransform.md#gettransform)
- [resetTransform](components_Text._internal_.CanvasTransform.md#resettransform)
- [rotate](components_Text._internal_.CanvasTransform.md#rotate)
- [scale](components_Text._internal_.CanvasTransform.md#scale)
- [setTransform](components_Text._internal_.CanvasTransform.md#settransform)
- [transform](components_Text._internal_.CanvasTransform.md#transform)
- [translate](components_Text._internal_.CanvasTransform.md#translate)

## Methods

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3395

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3396

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398

___

### setTransform

▸ **setTransform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3399

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](components_ClusterNodeContainer._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3400

___

### transform

▸ **transform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3401

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402
