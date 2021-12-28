[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / CanvasRenderingContext2D

# Interface: CanvasRenderingContext2D

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).CanvasRenderingContext2D

The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.

## Hierarchy

- [`CanvasCompositing`](components_Text._internal_.CanvasCompositing.md)

- [`CanvasDrawImage`](components_Text._internal_.CanvasDrawImage.md)

- [`CanvasDrawPath`](components_Text._internal_.CanvasDrawPath.md)

- [`CanvasFillStrokeStyles`](components_Text._internal_.CanvasFillStrokeStyles.md)

- [`CanvasFilters`](components_Text._internal_.CanvasFilters.md)

- [`CanvasImageData`](components_Text._internal_.CanvasImageData.md)

- [`CanvasImageSmoothing`](components_Text._internal_.CanvasImageSmoothing.md)

- [`CanvasPath`](components_Text._internal_.CanvasPath.md)

- [`CanvasPathDrawingStyles`](components_Text._internal_.CanvasPathDrawingStyles.md)

- [`CanvasRect`](components_Text._internal_.CanvasRect.md)

- [`CanvasShadowStyles`](components_Text._internal_.CanvasShadowStyles.md)

- [`CanvasState`](components_Text._internal_.CanvasState.md)

- [`CanvasText`](components_Text._internal_.CanvasText.md)

- [`CanvasTextDrawingStyles`](components_Text._internal_.CanvasTextDrawingStyles.md)

- [`CanvasTransform`](components_Text._internal_.CanvasTransform.md)

- [`CanvasUserInterface`](components_Text._internal_.CanvasUserInterface.md)

  ↳ **`CanvasRenderingContext2D`**

## Table of contents

### Properties

- [canvas](components_Text._internal_.CanvasRenderingContext2D.md#canvas)
- [direction](components_Text._internal_.CanvasRenderingContext2D.md#direction)
- [fillStyle](components_Text._internal_.CanvasRenderingContext2D.md#fillstyle)
- [filter](components_Text._internal_.CanvasRenderingContext2D.md#filter)
- [font](components_Text._internal_.CanvasRenderingContext2D.md#font)
- [globalAlpha](components_Text._internal_.CanvasRenderingContext2D.md#globalalpha)
- [globalCompositeOperation](components_Text._internal_.CanvasRenderingContext2D.md#globalcompositeoperation)
- [imageSmoothingEnabled](components_Text._internal_.CanvasRenderingContext2D.md#imagesmoothingenabled)
- [imageSmoothingQuality](components_Text._internal_.CanvasRenderingContext2D.md#imagesmoothingquality)
- [lineCap](components_Text._internal_.CanvasRenderingContext2D.md#linecap)
- [lineDashOffset](components_Text._internal_.CanvasRenderingContext2D.md#linedashoffset)
- [lineJoin](components_Text._internal_.CanvasRenderingContext2D.md#linejoin)
- [lineWidth](components_Text._internal_.CanvasRenderingContext2D.md#linewidth)
- [miterLimit](components_Text._internal_.CanvasRenderingContext2D.md#miterlimit)
- [shadowBlur](components_Text._internal_.CanvasRenderingContext2D.md#shadowblur)
- [shadowColor](components_Text._internal_.CanvasRenderingContext2D.md#shadowcolor)
- [shadowOffsetX](components_Text._internal_.CanvasRenderingContext2D.md#shadowoffsetx)
- [shadowOffsetY](components_Text._internal_.CanvasRenderingContext2D.md#shadowoffsety)
- [strokeStyle](components_Text._internal_.CanvasRenderingContext2D.md#strokestyle)
- [textAlign](components_Text._internal_.CanvasRenderingContext2D.md#textalign)
- [textBaseline](components_Text._internal_.CanvasRenderingContext2D.md#textbaseline)

### Methods

- [arc](components_Text._internal_.CanvasRenderingContext2D.md#arc)
- [arcTo](components_Text._internal_.CanvasRenderingContext2D.md#arcto)
- [beginPath](components_Text._internal_.CanvasRenderingContext2D.md#beginpath)
- [bezierCurveTo](components_Text._internal_.CanvasRenderingContext2D.md#beziercurveto)
- [clearRect](components_Text._internal_.CanvasRenderingContext2D.md#clearrect)
- [clip](components_Text._internal_.CanvasRenderingContext2D.md#clip)
- [closePath](components_Text._internal_.CanvasRenderingContext2D.md#closepath)
- [createImageData](components_Text._internal_.CanvasRenderingContext2D.md#createimagedata)
- [createLinearGradient](components_Text._internal_.CanvasRenderingContext2D.md#createlineargradient)
- [createPattern](components_Text._internal_.CanvasRenderingContext2D.md#createpattern)
- [createRadialGradient](components_Text._internal_.CanvasRenderingContext2D.md#createradialgradient)
- [drawFocusIfNeeded](components_Text._internal_.CanvasRenderingContext2D.md#drawfocusifneeded)
- [drawImage](components_Text._internal_.CanvasRenderingContext2D.md#drawimage)
- [ellipse](components_Text._internal_.CanvasRenderingContext2D.md#ellipse)
- [fill](components_Text._internal_.CanvasRenderingContext2D.md#fill)
- [fillRect](components_Text._internal_.CanvasRenderingContext2D.md#fillrect)
- [fillText](components_Text._internal_.CanvasRenderingContext2D.md#filltext)
- [getContextAttributes](components_Text._internal_.CanvasRenderingContext2D.md#getcontextattributes)
- [getImageData](components_Text._internal_.CanvasRenderingContext2D.md#getimagedata)
- [getLineDash](components_Text._internal_.CanvasRenderingContext2D.md#getlinedash)
- [getTransform](components_Text._internal_.CanvasRenderingContext2D.md#gettransform)
- [isPointInPath](components_Text._internal_.CanvasRenderingContext2D.md#ispointinpath)
- [isPointInStroke](components_Text._internal_.CanvasRenderingContext2D.md#ispointinstroke)
- [lineTo](components_Text._internal_.CanvasRenderingContext2D.md#lineto)
- [measureText](components_Text._internal_.CanvasRenderingContext2D.md#measuretext)
- [moveTo](components_Text._internal_.CanvasRenderingContext2D.md#moveto)
- [putImageData](components_Text._internal_.CanvasRenderingContext2D.md#putimagedata)
- [quadraticCurveTo](components_Text._internal_.CanvasRenderingContext2D.md#quadraticcurveto)
- [rect](components_Text._internal_.CanvasRenderingContext2D.md#rect)
- [resetTransform](components_Text._internal_.CanvasRenderingContext2D.md#resettransform)
- [restore](components_Text._internal_.CanvasRenderingContext2D.md#restore)
- [rotate](components_Text._internal_.CanvasRenderingContext2D.md#rotate)
- [save](components_Text._internal_.CanvasRenderingContext2D.md#save)
- [scale](components_Text._internal_.CanvasRenderingContext2D.md#scale)
- [setLineDash](components_Text._internal_.CanvasRenderingContext2D.md#setlinedash)
- [setTransform](components_Text._internal_.CanvasRenderingContext2D.md#settransform)
- [stroke](components_Text._internal_.CanvasRenderingContext2D.md#stroke)
- [strokeRect](components_Text._internal_.CanvasRenderingContext2D.md#strokerect)
- [strokeText](components_Text._internal_.CanvasRenderingContext2D.md#stroketext)
- [transform](components_Text._internal_.CanvasRenderingContext2D.md#transform)
- [translate](components_Text._internal_.CanvasRenderingContext2D.md#translate)

## Properties

### canvas

• `Readonly` **canvas**: `HTMLCanvasElement`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3360

___

### direction

• **direction**: [`CanvasDirection`](../modules/components_Text._internal_.md#canvasdirection)

#### Inherited from

[CanvasTextDrawingStyles](components_Text._internal_.CanvasTextDrawingStyles.md).[direction](components_Text._internal_.CanvasTextDrawingStyles.md#direction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3388

___

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](components_Text._internal_.CanvasFillStrokeStyles.md).[fillStyle](components_Text._internal_.CanvasFillStrokeStyles.md#fillstyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3280

___

### filter

• **filter**: `string`

#### Inherited from

[CanvasFilters](components_Text._internal_.CanvasFilters.md).[filter](components_Text._internal_.CanvasFilters.md#filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3288

___

### font

• **font**: `string`

#### Inherited from

[CanvasTextDrawingStyles](components_Text._internal_.CanvasTextDrawingStyles.md).[font](components_Text._internal_.CanvasTextDrawingStyles.md#font)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3389

___

### globalAlpha

• **globalAlpha**: `number`

#### Inherited from

[CanvasCompositing](components_Text._internal_.CanvasCompositing.md).[globalAlpha](components_Text._internal_.CanvasCompositing.md#globalalpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3255

___

### globalCompositeOperation

• **globalCompositeOperation**: `string`

#### Inherited from

[CanvasCompositing](components_Text._internal_.CanvasCompositing.md).[globalCompositeOperation](components_Text._internal_.CanvasCompositing.md#globalcompositeoperation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3256

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

#### Inherited from

[CanvasImageSmoothing](components_Text._internal_.CanvasImageSmoothing.md).[imageSmoothingEnabled](components_Text._internal_.CanvasImageSmoothing.md#imagesmoothingenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3315

___

### imageSmoothingQuality

• **imageSmoothingQuality**: [`ImageSmoothingQuality`](../modules/components_Text._internal_.md#imagesmoothingquality)

#### Inherited from

[CanvasImageSmoothing](components_Text._internal_.CanvasImageSmoothing.md).[imageSmoothingQuality](components_Text._internal_.CanvasImageSmoothing.md#imagesmoothingquality)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3316

___

### lineCap

• **lineCap**: [`CanvasLineCap`](../modules/components_Text._internal_.md#canvaslinecap)

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[lineCap](components_Text._internal_.CanvasPathDrawingStyles.md#linecap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3332

___

### lineDashOffset

• **lineDashOffset**: `number`

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[lineDashOffset](components_Text._internal_.CanvasPathDrawingStyles.md#linedashoffset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3333

___

### lineJoin

• **lineJoin**: [`CanvasLineJoin`](../modules/components_Text._internal_.md#canvaslinejoin)

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[lineJoin](components_Text._internal_.CanvasPathDrawingStyles.md#linejoin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3334

___

### lineWidth

• **lineWidth**: `number`

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[lineWidth](components_Text._internal_.CanvasPathDrawingStyles.md#linewidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3335

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[miterLimit](components_Text._internal_.CanvasPathDrawingStyles.md#miterlimit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3336

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[CanvasShadowStyles](components_Text._internal_.CanvasShadowStyles.md).[shadowBlur](components_Text._internal_.CanvasShadowStyles.md#shadowblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3370

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[CanvasShadowStyles](components_Text._internal_.CanvasShadowStyles.md).[shadowColor](components_Text._internal_.CanvasShadowStyles.md#shadowcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3371

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[CanvasShadowStyles](components_Text._internal_.CanvasShadowStyles.md).[shadowOffsetX](components_Text._internal_.CanvasShadowStyles.md#shadowoffsetx)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3372

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[CanvasShadowStyles](components_Text._internal_.CanvasShadowStyles.md).[shadowOffsetY](components_Text._internal_.CanvasShadowStyles.md#shadowoffsety)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3373

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/components_ClusterNodeContainer._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/components_ClusterNodeContainer._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](components_Text._internal_.CanvasFillStrokeStyles.md).[strokeStyle](components_Text._internal_.CanvasFillStrokeStyles.md#strokestyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3281

___

### textAlign

• **textAlign**: [`CanvasTextAlign`](../modules/components_Text._internal_.md#canvastextalign)

#### Inherited from

[CanvasTextDrawingStyles](components_Text._internal_.CanvasTextDrawingStyles.md).[textAlign](components_Text._internal_.CanvasTextDrawingStyles.md#textalign)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### textBaseline

• **textBaseline**: [`CanvasTextBaseline`](../modules/components_Text._internal_.md#canvastextbaseline)

#### Inherited from

[CanvasTextDrawingStyles](components_Text._internal_.CanvasTextDrawingStyles.md).[textBaseline](components_Text._internal_.CanvasTextDrawingStyles.md#textbaseline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3391

## Methods

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[arc](components_Text._internal_.CanvasPath.md#arc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3320

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[arcTo](components_Text._internal_.CanvasPath.md#arcto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3321

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[beginPath](components_Text._internal_.CanvasDrawPath.md#beginpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3266

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[bezierCurveTo](components_Text._internal_.CanvasPath.md#beziercurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3322

___

### clearRect

▸ **clearRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](components_Text._internal_.CanvasRect.md).[clearRect](components_Text._internal_.CanvasRect.md#clearrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3353

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[clip](components_Text._internal_.CanvasDrawPath.md#clip)

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[clip](components_Text._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3268

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[closePath](components_Text._internal_.CanvasPath.md#closepath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3323

___

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](components_Text._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](components_Text._internal_.CanvasImageData.md).[createImageData](components_Text._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3307

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](components_Text._internal_.CanvasImageData.md).[createImageData](components_Text._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3308

___

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

#### Inherited from

[CanvasFillStrokeStyles](components_Text._internal_.CanvasFillStrokeStyles.md).[createLinearGradient](components_Text._internal_.CanvasFillStrokeStyles.md#createlineargradient)

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

#### Inherited from

[CanvasFillStrokeStyles](components_Text._internal_.CanvasFillStrokeStyles.md).[createPattern](components_Text._internal_.CanvasFillStrokeStyles.md#createpattern)

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

#### Inherited from

[CanvasFillStrokeStyles](components_Text._internal_.CanvasFillStrokeStyles.md).[createRadialGradient](components_Text._internal_.CanvasFillStrokeStyles.md#createradialgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3284

___

### drawFocusIfNeeded

▸ **drawFocusIfNeeded**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Element` |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](components_Text._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](components_Text._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3406

▸ **drawFocusIfNeeded**(`path`, `element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |
| `element` | `Element` |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](components_Text._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](components_Text._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/components_Text._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](components_Text._internal_.CanvasDrawImage.md).[drawImage](components_Text._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3260

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/components_Text._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](components_Text._internal_.CanvasDrawImage.md).[drawImage](components_Text._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3261

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/components_Text._internal_.md#canvasimagesource) |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](components_Text._internal_.CanvasDrawImage.md).[drawImage](components_Text._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3262

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[ellipse](components_Text._internal_.CanvasPath.md#ellipse)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3324

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/components_Text._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[fill](components_Text._internal_.CanvasDrawPath.md#fill)

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[fill](components_Text._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3270

___

### fillRect

▸ **fillRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](components_Text._internal_.CanvasRect.md).[fillRect](components_Text._internal_.CanvasRect.md#fillrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3354

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](components_Text._internal_.CanvasText.md).[fillText](components_Text._internal_.CanvasText.md#filltext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3382

___

### getContextAttributes

▸ **getContextAttributes**(): [`CanvasRenderingContext2DSettings`](components_Text._internal_.CanvasRenderingContext2DSettings.md)

#### Returns

[`CanvasRenderingContext2DSettings`](components_Text._internal_.CanvasRenderingContext2DSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3361

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](components_Text._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](components_Text._internal_.CanvasImageData.md).[getImageData](components_Text._internal_.CanvasImageData.md#getimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3309

___

### getLineDash

▸ **getLineDash**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[getLineDash](components_Text._internal_.CanvasPathDrawingStyles.md#getlinedash)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3337

___

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[getTransform](components_Text._internal_.CanvasTransform.md#gettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3395

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[isPointInPath](components_Text._internal_.CanvasDrawPath.md#ispointinpath)

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[isPointInPath](components_Text._internal_.CanvasDrawPath.md#ispointinpath)

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[isPointInStroke](components_Text._internal_.CanvasDrawPath.md#ispointinstroke)

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

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[isPointInStroke](components_Text._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3274

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[lineTo](components_Text._internal_.CanvasPath.md#lineto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3325

___

### measureText

▸ **measureText**(`text`): [`TextMetrics`](../modules/components_Text._internal_.md#textmetrics)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`TextMetrics`](../modules/components_Text._internal_.md#textmetrics)

#### Inherited from

[CanvasText](components_Text._internal_.CanvasText.md).[measureText](components_Text._internal_.CanvasText.md#measuretext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3383

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[moveTo](components_Text._internal_.CanvasPath.md#moveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3326

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](components_Text._internal_.CanvasImageData.md).[putImageData](components_Text._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3310

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](components_Text._internal_.CanvasImageData.md).[putImageData](components_Text._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3311

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpx` | `number` |
| `cpy` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[quadraticCurveTo](components_Text._internal_.CanvasPath.md#quadraticcurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3327

___

### rect

▸ **rect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](components_Text._internal_.CanvasPath.md).[rect](components_Text._internal_.CanvasPath.md#rect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3328

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[resetTransform](components_Text._internal_.CanvasTransform.md#resettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3396

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](components_Text._internal_.CanvasState.md).[restore](components_Text._internal_.CanvasState.md#restore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3377

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[rotate](components_Text._internal_.CanvasTransform.md#rotate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](components_Text._internal_.CanvasState.md).[save](components_Text._internal_.CanvasState.md#save)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3378

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

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[scale](components_Text._internal_.CanvasTransform.md#scale)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398

___

### setLineDash

▸ **setLineDash**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Inherited from

[CanvasPathDrawingStyles](components_Text._internal_.CanvasPathDrawingStyles.md).[setLineDash](components_Text._internal_.CanvasPathDrawingStyles.md#setlinedash)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3338

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

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[setTransform](components_Text._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3399

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](components_ClusterNodeContainer._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[setTransform](components_Text._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3400

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[stroke](components_Text._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3275

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/components_Text._internal_.md#path2d) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](components_Text._internal_.CanvasDrawPath.md).[stroke](components_Text._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3276

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](components_Text._internal_.CanvasRect.md).[strokeRect](components_Text._internal_.CanvasRect.md#strokerect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3355

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](components_Text._internal_.CanvasText.md).[strokeText](components_Text._internal_.CanvasText.md#stroketext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3384

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

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[transform](components_Text._internal_.CanvasTransform.md#transform)

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

#### Inherited from

[CanvasTransform](components_Text._internal_.CanvasTransform.md).[translate](components_Text._internal_.CanvasTransform.md#translate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402
