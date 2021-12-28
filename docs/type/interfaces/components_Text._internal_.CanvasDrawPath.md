[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / CanvasDrawPath

# Interface: CanvasDrawPath

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).CanvasDrawPath

## Hierarchy

- **`CanvasDrawPath`**

  ↳ [`CanvasRenderingContext2D`](components_Text._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [beginPath](components_Text._internal_.CanvasDrawPath.md#beginpath)
- [clip](components_Text._internal_.CanvasDrawPath.md#clip)
- [fill](components_Text._internal_.CanvasDrawPath.md#fill)
- [isPointInPath](components_Text._internal_.CanvasDrawPath.md#ispointinpath)
- [isPointInStroke](components_Text._internal_.CanvasDrawPath.md#ispointinstroke)
- [stroke](components_Text._internal_.CanvasDrawPath.md#stroke)

## Methods

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3266

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3267

▸ **clip**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3268

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3269

▸ **fill**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3270

___

### isPointInPath

▸ **isPointInPath**(`x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3271

▸ **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3272

___

### isPointInStroke

▸ **isPointInStroke**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3273

▸ **isPointInStroke**(`path`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3274

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3275

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3276
