[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / CanvasFillStrokeStyles

# Interface: CanvasFillStrokeStyles

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).CanvasFillStrokeStyles

## Hierarchy

- **`CanvasFillStrokeStyles`**

  ↳ [`CanvasRenderingContext2D`](components_Text._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Properties

- [fillStyle](components_Text._internal_.CanvasFillStrokeStyles.md#fillstyle)
- [strokeStyle](components_Text._internal_.CanvasFillStrokeStyles.md#strokestyle)

### Methods

- [createLinearGradient](components_Text._internal_.CanvasFillStrokeStyles.md#createlineargradient)
- [createPattern](components_Text._internal_.CanvasFillStrokeStyles.md#createpattern)
- [createRadialGradient](components_Text._internal_.CanvasFillStrokeStyles.md#createradialgradient)

## Properties

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3280

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3281

## Methods

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

[`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3282

___

### createPattern

▸ **createPattern**(`image`, `repetition`): ``null`` \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/components_Text._internal_.md#canvasimagesource) |
| `repetition` | ``null`` \| `string` |

#### Returns

``null`` \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3283

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

[`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3284
