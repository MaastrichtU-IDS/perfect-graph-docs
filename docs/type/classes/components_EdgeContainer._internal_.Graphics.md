[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / Graphics

# Class: Graphics

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).Graphics

The Graphics class is primarily used to render primitive shapes such as lines, circles and
rectangles to the display, and to color and fill them.  However, you can also use a Graphics
object to build a list of primitives to use as a mask, or as a complex hitArea.

Please note that due to legacy naming conventions, the behavior of some functions in this class
can be confusing.  Each call to `drawRect()`, `drawPolygon()`, etc. actually stores that primitive
in the Geometry class's GraphicsGeometry object for later use in rendering or hit testing - the
functions do not directly draw anything to the screen.  Similarly, the `clear()` function doesn't
change the screen, it simply resets the list of primitives, which can be useful if you want to
rebuild the contents of an existing Graphics object.

Once a GraphicsGeometry list is built, you can re-use it in other Geometry objects as
an optimization, by passing it into a new Geometry object's constructor.  Because of this
ability, it's important to call `destroy()` on Geometry objects once you are done with them, to
properly dereference each GraphicsGeometry and prevent memory leaks.

**`memberof`** PIXI

## Hierarchy

- [`Graphics`](../interfaces/components_EdgeContainer._internal_.Graphics-1.md)

- [`Container`](components_ClusterNodeContainer._internal_.Container.md)

  ↳ **`Graphics`**

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.Graphics.md#constructor)

### Properties

- [\_\_hasYoga](components_EdgeContainer._internal_.Graphics.md#__hasyoga)
- [\_\_yoga](components_EdgeContainer._internal_.Graphics.md#__yoga)
- [\_accessibleActive](components_EdgeContainer._internal_.Graphics.md#_accessibleactive)
- [\_accessibleDiv](components_EdgeContainer._internal_.Graphics.md#_accessiblediv)
- [\_bounds](components_EdgeContainer._internal_.Graphics.md#_bounds)
- [\_boundsID](components_EdgeContainer._internal_.Graphics.md#_boundsid)
- [\_boundsRect](components_EdgeContainer._internal_.Graphics.md#_boundsrect)
- [\_cacheAsBitmap](components_EdgeContainer._internal_.Graphics.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_EdgeContainer._internal_.Graphics.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_EdgeContainer._internal_.Graphics.md#_cacheasbitmapresolution)
- [\_cacheData](components_EdgeContainer._internal_.Graphics.md#_cachedata)
- [\_destroyed](components_EdgeContainer._internal_.Graphics.md#_destroyed)
- [\_enabledFilters](components_EdgeContainer._internal_.Graphics.md#_enabledfilters)
- [\_fillStyle](components_EdgeContainer._internal_.Graphics.md#_fillstyle)
- [\_geometry](components_EdgeContainer._internal_.Graphics.md#_geometry)
- [\_height](components_EdgeContainer._internal_.Graphics.md#_height)
- [\_holeMode](components_EdgeContainer._internal_.Graphics.md#_holemode)
- [\_lastSortedIndex](components_EdgeContainer._internal_.Graphics.md#_lastsortedindex)
- [\_lineStyle](components_EdgeContainer._internal_.Graphics.md#_linestyle)
- [\_localBounds](components_EdgeContainer._internal_.Graphics.md#_localbounds)
- [\_localBoundsRect](components_EdgeContainer._internal_.Graphics.md#_localboundsrect)
- [\_mask](components_EdgeContainer._internal_.Graphics.md#_mask)
- [\_matrix](components_EdgeContainer._internal_.Graphics.md#_matrix)
- [\_prevYogaLayoutHash](components_EdgeContainer._internal_.Graphics.md#_prevyogalayouthash)
- [\_tint](components_EdgeContainer._internal_.Graphics.md#_tint)
- [\_trackedPointers](components_EdgeContainer._internal_.Graphics.md#_trackedpointers)
- [\_transformID](components_EdgeContainer._internal_.Graphics.md#_transformid)
- [\_visible](components_EdgeContainer._internal_.Graphics.md#_visible)
- [\_width](components_EdgeContainer._internal_.Graphics.md#_width)
- [\_yogaLayoutHash](components_EdgeContainer._internal_.Graphics.md#_yogalayouthash)
- [\_zIndex](components_EdgeContainer._internal_.Graphics.md#_zindex)
- [accessible](components_EdgeContainer._internal_.Graphics.md#accessible)
- [accessibleChildren](components_EdgeContainer._internal_.Graphics.md#accessiblechildren)
- [accessibleHint](components_EdgeContainer._internal_.Graphics.md#accessiblehint)
- [accessiblePointerEvents](components_EdgeContainer._internal_.Graphics.md#accessiblepointerevents)
- [accessibleTitle](components_EdgeContainer._internal_.Graphics.md#accessibletitle)
- [accessibleType](components_EdgeContainer._internal_.Graphics.md#accessibletype)
- [alpha](components_EdgeContainer._internal_.Graphics.md#alpha)
- [batchDirty](components_EdgeContainer._internal_.Graphics.md#batchdirty)
- [batchTint](components_EdgeContainer._internal_.Graphics.md#batchtint)
- [batches](components_EdgeContainer._internal_.Graphics.md#batches)
- [buttonMode](components_EdgeContainer._internal_.Graphics.md#buttonmode)
- [cacheAsBitmap](components_EdgeContainer._internal_.Graphics.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_EdgeContainer._internal_.Graphics.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_EdgeContainer._internal_.Graphics.md#cacheasbitmapresolution)
- [children](components_EdgeContainer._internal_.Graphics.md#children)
- [containerUpdateTransform](components_EdgeContainer._internal_.Graphics.md#containerupdatetransform)
- [currentPath](components_EdgeContainer._internal_.Graphics.md#currentpath)
- [cursor](components_EdgeContainer._internal_.Graphics.md#cursor)
- [displayObjectUpdateTransform](components_EdgeContainer._internal_.Graphics.md#displayobjectupdatetransform)
- [filterArea](components_EdgeContainer._internal_.Graphics.md#filterarea)
- [filters](components_EdgeContainer._internal_.Graphics.md#filters)
- [flex](components_EdgeContainer._internal_.Graphics.md#flex)
- [hitArea](components_EdgeContainer._internal_.Graphics.md#hitarea)
- [interactive](components_EdgeContainer._internal_.Graphics.md#interactive)
- [interactiveChildren](components_EdgeContainer._internal_.Graphics.md#interactivechildren)
- [isMask](components_EdgeContainer._internal_.Graphics.md#ismask)
- [isSprite](components_EdgeContainer._internal_.Graphics.md#issprite)
- [name](components_EdgeContainer._internal_.Graphics.md#name)
- [parent](components_EdgeContainer._internal_.Graphics.md#parent)
- [pluginName](components_EdgeContainer._internal_.Graphics.md#pluginname)
- [renderId](components_EdgeContainer._internal_.Graphics.md#renderid)
- [renderable](components_EdgeContainer._internal_.Graphics.md#renderable)
- [shader](components_EdgeContainer._internal_.Graphics.md#shader)
- [sortDirty](components_EdgeContainer._internal_.Graphics.md#sortdirty)
- [sortableChildren](components_EdgeContainer._internal_.Graphics.md#sortablechildren)
- [state](components_EdgeContainer._internal_.Graphics.md#state)
- [tabIndex](components_EdgeContainer._internal_.Graphics.md#tabindex)
- [trackedPointers](components_EdgeContainer._internal_.Graphics.md#trackedpointers)
- [transform](components_EdgeContainer._internal_.Graphics.md#transform)
- [vertexData](components_EdgeContainer._internal_.Graphics.md#vertexdata)
- [visible](components_EdgeContainer._internal_.Graphics.md#visible)
- [worldAlpha](components_EdgeContainer._internal_.Graphics.md#worldalpha)
- [yoga](components_EdgeContainer._internal_.Graphics.md#yoga)
- [\_TEMP\_POINT](components_EdgeContainer._internal_.Graphics.md#_temp_point)
- [prefixed](components_EdgeContainer._internal_.Graphics.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_EdgeContainer._internal_.Graphics.md#_tempdisplayobjectparent)
- [angle](components_EdgeContainer._internal_.Graphics.md#angle)
- [blendMode](components_EdgeContainer._internal_.Graphics.md#blendmode)
- [destroyed](components_EdgeContainer._internal_.Graphics.md#destroyed)
- [fill](components_EdgeContainer._internal_.Graphics.md#fill)
- [geometry](components_EdgeContainer._internal_.Graphics.md#geometry)
- [height](components_EdgeContainer._internal_.Graphics.md#height)
- [line](components_EdgeContainer._internal_.Graphics.md#line)
- [localTransform](components_EdgeContainer._internal_.Graphics.md#localtransform)
- [mask](components_EdgeContainer._internal_.Graphics.md#mask)
- [pivot](components_EdgeContainer._internal_.Graphics.md#pivot)
- [position](components_EdgeContainer._internal_.Graphics.md#position)
- [rotation](components_EdgeContainer._internal_.Graphics.md#rotation)
- [scale](components_EdgeContainer._internal_.Graphics.md#scale)
- [skew](components_EdgeContainer._internal_.Graphics.md#skew)
- [tint](components_EdgeContainer._internal_.Graphics.md#tint)
- [width](components_EdgeContainer._internal_.Graphics.md#width)
- [worldTransform](components_EdgeContainer._internal_.Graphics.md#worldtransform)
- [worldVisible](components_EdgeContainer._internal_.Graphics.md#worldvisible)
- [x](components_EdgeContainer._internal_.Graphics.md#x)
- [y](components_EdgeContainer._internal_.Graphics.md#y)
- [zIndex](components_EdgeContainer._internal_.Graphics.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_EdgeContainer._internal_.Graphics.md#_cacheasbitmapdestroy)
- [\_calculateBounds](components_EdgeContainer._internal_.Graphics.md#_calculatebounds)
- [\_calculateCachedBounds](components_EdgeContainer._internal_.Graphics.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_EdgeContainer._internal_.Graphics.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_EdgeContainer._internal_.Graphics.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_EdgeContainer._internal_.Graphics.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_EdgeContainer._internal_.Graphics.md#_initcacheddisplayobjectcanvas)
- [\_initCurve](components_EdgeContainer._internal_.Graphics.md#_initcurve)
- [\_populateBatches](components_EdgeContainer._internal_.Graphics.md#_populatebatches)
- [\_recursivePostUpdateTransform](components_EdgeContainer._internal_.Graphics.md#_recursivepostupdatetransform)
- [\_render](components_EdgeContainer._internal_.Graphics.md#_render)
- [\_renderBatched](components_EdgeContainer._internal_.Graphics.md#_renderbatched)
- [\_renderCached](components_EdgeContainer._internal_.Graphics.md#_rendercached)
- [\_renderCachedCanvas](components_EdgeContainer._internal_.Graphics.md#_rendercachedcanvas)
- [\_renderDirect](components_EdgeContainer._internal_.Graphics.md#_renderdirect)
- [\_renderDrawCallDirect](components_EdgeContainer._internal_.Graphics.md#_renderdrawcalldirect)
- [\_resolveDirectShader](components_EdgeContainer._internal_.Graphics.md#_resolvedirectshader)
- [addChild](components_EdgeContainer._internal_.Graphics.md#addchild)
- [addChildAt](components_EdgeContainer._internal_.Graphics.md#addchildat)
- [addListener](components_EdgeContainer._internal_.Graphics.md#addlistener)
- [arc](components_EdgeContainer._internal_.Graphics.md#arc)
- [arcTo](components_EdgeContainer._internal_.Graphics.md#arcto)
- [beginFill](components_EdgeContainer._internal_.Graphics.md#beginfill)
- [beginHole](components_EdgeContainer._internal_.Graphics.md#beginhole)
- [beginTextureFill](components_EdgeContainer._internal_.Graphics.md#begintexturefill)
- [bezierCurveTo](components_EdgeContainer._internal_.Graphics.md#beziercurveto)
- [calculateBounds](components_EdgeContainer._internal_.Graphics.md#calculatebounds)
- [calculateTints](components_EdgeContainer._internal_.Graphics.md#calculatetints)
- [calculateVertices](components_EdgeContainer._internal_.Graphics.md#calculatevertices)
- [checkIfBoundingBoxChanged](components_EdgeContainer._internal_.Graphics.md#checkifboundingboxchanged)
- [clear](components_EdgeContainer._internal_.Graphics.md#clear)
- [clone](components_EdgeContainer._internal_.Graphics.md#clone)
- [closePath](components_EdgeContainer._internal_.Graphics.md#closepath)
- [containsPoint](components_EdgeContainer._internal_.Graphics.md#containspoint)
- [destroy](components_EdgeContainer._internal_.Graphics.md#destroy)
- [disableTempParent](components_EdgeContainer._internal_.Graphics.md#disabletempparent)
- [drawCircle](components_EdgeContainer._internal_.Graphics.md#drawcircle)
- [drawEllipse](components_EdgeContainer._internal_.Graphics.md#drawellipse)
- [drawPolygon](components_EdgeContainer._internal_.Graphics.md#drawpolygon)
- [drawRect](components_EdgeContainer._internal_.Graphics.md#drawrect)
- [drawRoundedRect](components_EdgeContainer._internal_.Graphics.md#drawroundedrect)
- [drawShape](components_EdgeContainer._internal_.Graphics.md#drawshape)
- [emit](components_EdgeContainer._internal_.Graphics.md#emit)
- [enableTempParent](components_EdgeContainer._internal_.Graphics.md#enabletempparent)
- [endFill](components_EdgeContainer._internal_.Graphics.md#endfill)
- [endHole](components_EdgeContainer._internal_.Graphics.md#endhole)
- [eventNames](components_EdgeContainer._internal_.Graphics.md#eventnames)
- [finishPoly](components_EdgeContainer._internal_.Graphics.md#finishpoly)
- [getBounds](components_EdgeContainer._internal_.Graphics.md#getbounds)
- [getChildAt](components_EdgeContainer._internal_.Graphics.md#getchildat)
- [getChildByName](components_EdgeContainer._internal_.Graphics.md#getchildbyname)
- [getChildIndex](components_EdgeContainer._internal_.Graphics.md#getchildindex)
- [getGlobalPosition](components_EdgeContainer._internal_.Graphics.md#getglobalposition)
- [getLocalBounds](components_EdgeContainer._internal_.Graphics.md#getlocalbounds)
- [isFastRect](components_EdgeContainer._internal_.Graphics.md#isfastrect)
- [lineStyle](components_EdgeContainer._internal_.Graphics.md#linestyle)
- [lineTextureStyle](components_EdgeContainer._internal_.Graphics.md#linetexturestyle)
- [lineTo](components_EdgeContainer._internal_.Graphics.md#lineto)
- [listenerCount](components_EdgeContainer._internal_.Graphics.md#listenercount)
- [listeners](components_EdgeContainer._internal_.Graphics.md#listeners)
- [moveTo](components_EdgeContainer._internal_.Graphics.md#moveto)
- [off](components_EdgeContainer._internal_.Graphics.md#off)
- [on](components_EdgeContainer._internal_.Graphics.md#on)
- [onChildrenChange](components_EdgeContainer._internal_.Graphics.md#onchildrenchange)
- [once](components_EdgeContainer._internal_.Graphics.md#once)
- [quadraticCurveTo](components_EdgeContainer._internal_.Graphics.md#quadraticcurveto)
- [removeAllListeners](components_EdgeContainer._internal_.Graphics.md#removealllisteners)
- [removeChild](components_EdgeContainer._internal_.Graphics.md#removechild)
- [removeChildAt](components_EdgeContainer._internal_.Graphics.md#removechildat)
- [removeChildren](components_EdgeContainer._internal_.Graphics.md#removechildren)
- [removeListener](components_EdgeContainer._internal_.Graphics.md#removelistener)
- [render](components_EdgeContainer._internal_.Graphics.md#render)
- [renderAdvanced](components_EdgeContainer._internal_.Graphics.md#renderadvanced)
- [setChildIndex](components_EdgeContainer._internal_.Graphics.md#setchildindex)
- [setMatrix](components_EdgeContainer._internal_.Graphics.md#setmatrix)
- [setParent](components_EdgeContainer._internal_.Graphics.md#setparent)
- [setTransform](components_EdgeContainer._internal_.Graphics.md#settransform)
- [sortChildren](components_EdgeContainer._internal_.Graphics.md#sortchildren)
- [startPoly](components_EdgeContainer._internal_.Graphics.md#startpoly)
- [swapChildren](components_EdgeContainer._internal_.Graphics.md#swapchildren)
- [toGlobal](components_EdgeContainer._internal_.Graphics.md#toglobal)
- [toLocal](components_EdgeContainer._internal_.Graphics.md#tolocal)
- [updateTransform](components_EdgeContainer._internal_.Graphics.md#updatetransform)
- [updateYogaLayout](components_EdgeContainer._internal_.Graphics.md#updateyogalayout)
- [mixin](components_EdgeContainer._internal_.Graphics.md#mixin)

## Constructors

### constructor

• **new Graphics**(`geometry?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry?` | [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md) |

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[constructor](components_ClusterNodeContainer._internal_.Container.md#constructor)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:295

## Properties

### \_\_hasYoga

• **\_\_hasYoga**: `boolean`

Internal property for fast checking if object has yoga

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[__hasYoga](components_ClusterNodeContainer._internal_.Container.md#__hasyoga)

#### Defined in

[src/type/index.ts:27](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L27)

___

### \_\_yoga

• **\_\_yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[__yoga](components_ClusterNodeContainer._internal_.Container.md#__yoga)

#### Defined in

[src/type/index.ts:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L44)

___

### \_accessibleActive

• `Optional` **\_accessibleActive**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_accessibleActive](components_ClusterNodeContainer._internal_.Container.md#_accessibleactive)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:192

___

### \_accessibleDiv

• `Optional` **\_accessibleDiv**: [`IAccessibleHTMLElement`](../interfaces/components_ClusterNodeContainer._internal_.IAccessibleHTMLElement.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_accessibleDiv](components_ClusterNodeContainer._internal_.Container.md#_accessiblediv)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:193

___

### \_bounds

• **\_bounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_bounds](components_ClusterNodeContainer._internal_.Container.md#_bounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:594

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_boundsID](components_ClusterNodeContainer._internal_.Container.md#_boundsid)

#### Defined in

node_modules/@pixi/display/index.d.ts:598

___

### \_boundsRect

• `Protected` **\_boundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_boundsRect](components_ClusterNodeContainer._internal_.Container.md#_boundsrect)

#### Defined in

node_modules/@pixi/display/index.d.ts:599

___

### \_cacheAsBitmap

• **\_cacheAsBitmap**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_cacheAsBitmap](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmap)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:9

___

### \_cacheAsBitmapMultisample

• **\_cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapmultisample)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:8

___

### \_cacheAsBitmapResolution

• **\_cacheAsBitmapResolution**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapresolution)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:7

___

### \_cacheData

• **\_cacheData**: `CacheData`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_cacheData](components_ClusterNodeContainer._internal_.Container.md#_cachedata)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:10

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_destroyed](components_ClusterNodeContainer._internal_.Container.md#_destroyed)

#### Defined in

node_modules/@pixi/display/index.d.ts:601

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_enabledFilters](components_ClusterNodeContainer._internal_.Container.md#_enabledfilters)

#### Defined in

node_modules/@pixi/display/index.d.ts:597

___

### \_fillStyle

• `Protected` **\_fillStyle**: [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

Current fill style

**`member`** {PIXI.FillStyle}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:257

___

### \_geometry

• `Private` **\_geometry**: `any`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:281

___

### \_height

• `Protected` **\_height**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_height](components_ClusterNodeContainer._internal_.Container.md#_height)

#### Defined in

node_modules/@pixi/display/index.d.ts:213

___

### \_holeMode

• `Protected` **\_holeMode**: `boolean`

Current hole mode is enabled.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:271

___

### \_lastSortedIndex

• **\_lastSortedIndex**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_lastSortedIndex](components_ClusterNodeContainer._internal_.Container.md#_lastsortedindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:592

___

### \_lineStyle

• `Protected` **\_lineStyle**: [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

Current line style

**`member`** {PIXI.LineStyle}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:263

___

### \_localBounds

• **\_localBounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_localBounds](components_ClusterNodeContainer._internal_.Container.md#_localbounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:595

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_localBoundsRect](components_ClusterNodeContainer._internal_.Container.md#_localboundsrect)

#### Defined in

node_modules/@pixi/display/index.d.ts:600

___

### \_mask

• **\_mask**: [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_mask](components_ClusterNodeContainer._internal_.Container.md#_mask)

#### Defined in

node_modules/@pixi/display/index.d.ts:593

___

### \_matrix

• `Protected` **\_matrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current shape transform matrix.

**`member`** {PIXI.Matrix}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:269

___

### \_prevYogaLayoutHash

• **\_prevYogaLayoutHash**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.Container.md#_prevyogalayouthash)

#### Defined in

[src/type/index.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L43)

___

### \_tint

• `Protected` **\_tint**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:273

___

### \_trackedPointers

• **\_trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_trackedPointers](components_ClusterNodeContainer._internal_.Container.md#_trackedpointers)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:509

___

### \_transformID

• `Protected` **\_transformID**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:272

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_visible](components_ClusterNodeContainer._internal_.Container.md#_visible)

#### Defined in

[src/type/index.ts:29](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L29)

___

### \_width

• `Protected` **\_width**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_width](components_ClusterNodeContainer._internal_.Container.md#_width)

#### Defined in

node_modules/@pixi/display/index.d.ts:212

___

### \_yogaLayoutHash

• **\_yogaLayoutHash**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_yogaLayoutHash](components_ClusterNodeContainer._internal_.Container.md#_yogalayouthash)

#### Defined in

[src/type/index.ts:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L42)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_zIndex](components_ClusterNodeContainer._internal_.Container.md#_zindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:596

___

### accessible

• `Optional` **accessible**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessible](components_ClusterNodeContainer._internal_.Container.md#accessible)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:188

___

### accessibleChildren

• `Optional` **accessibleChildren**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessibleChildren](components_ClusterNodeContainer._internal_.Container.md#accessiblechildren)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:196

___

### accessibleHint

• `Optional` **accessibleHint**: `string`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessibleHint](components_ClusterNodeContainer._internal_.Container.md#accessiblehint)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:190

___

### accessiblePointerEvents

• `Optional` **accessiblePointerEvents**: [`PointerEvents`](../modules/components_ClusterNodeContainer._internal_.md#pointerevents)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessiblePointerEvents](components_ClusterNodeContainer._internal_.Container.md#accessiblepointerevents)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:195

___

### accessibleTitle

• `Optional` **accessibleTitle**: `string`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessibleTitle](components_ClusterNodeContainer._internal_.Container.md#accessibletitle)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:189

___

### accessibleType

• `Optional` **accessibleType**: `string`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[accessibleType](components_ClusterNodeContainer._internal_.Container.md#accessibletype)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:194

___

### alpha

• **alpha**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[alpha](components_ClusterNodeContainer._internal_.Container.md#alpha)

#### Defined in

node_modules/@pixi/display/index.d.ts:585

___

### batchDirty

• `Protected` **batchDirty**: `number`

Update dirty for limiting calculating batches.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:249

___

### batchTint

• `Protected` **batchTint**: `number`

Update dirty for limiting calculating tints for batches.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:247

___

### batches

• `Protected` **batches**: [`IGraphicsBatchElement`](../interfaces/components_EdgeContainer._internal_.IGraphicsBatchElement.md)[]

A collections of batches! These can be drawn by the renderer batch system.

**`member`** {PIXI.IGraphicsBatchElement[]}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:245

___

### buttonMode

• **buttonMode**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[buttonMode](components_ClusterNodeContainer._internal_.Container.md#buttonmode)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:505

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[cacheAsBitmap](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmap)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:4

___

### cacheAsBitmapMultisample

• **cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmapmultisample)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:6

___

### cacheAsBitmapResolution

• **cacheAsBitmapResolution**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmapresolution)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:5

___

### children

• `Readonly` **children**: `DisplayObject`[]

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[children](components_ClusterNodeContainer._internal_.Container.md#children)

#### Defined in

node_modules/@pixi/display/index.d.ts:207

___

### containerUpdateTransform

• **containerUpdateTransform**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[containerUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#containerupdatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:211

___

### currentPath

• **currentPath**: [`Polygon`](components_EdgeContainer._internal_.Polygon.md)

Current path

**`member`** {PIXI.Polygon}

**`readonly`**

#### Defined in

node_modules/@pixi/graphics/index.d.ts:239

___

### cursor

• **cursor**: `string`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[cursor](components_ClusterNodeContainer._internal_.Container.md#cursor)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:504

___

### displayObjectUpdateTransform

• **displayObjectUpdateTransform**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#displayobjectupdatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:604

___

### filterArea

• **filterArea**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[filterArea](components_ClusterNodeContainer._internal_.Container.md#filterarea)

#### Defined in

node_modules/@pixi/display/index.d.ts:588

___

### filters

• **filters**: ``null`` \| [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[filters](components_ClusterNodeContainer._internal_.Container.md#filters)

#### Defined in

node_modules/@pixi/display/index.d.ts:589

___

### flex

• **flex**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[flex](components_ClusterNodeContainer._internal_.Container.md#flex)

#### Defined in

[src/type/index.ts:31](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L31)

___

### hitArea

• **hitArea**: [`IHitArea`](../interfaces/components_ClusterNodeContainer._internal_.IHitArea.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[hitArea](components_ClusterNodeContainer._internal_.Container.md#hitarea)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:503

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[interactive](components_ClusterNodeContainer._internal_.Container.md#interactive)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:501

___

### interactiveChildren

• **interactiveChildren**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[interactiveChildren](components_ClusterNodeContainer._internal_.Container.md#interactivechildren)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:502

___

### isMask

• **isMask**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[isMask](components_ClusterNodeContainer._internal_.Container.md#ismask)

#### Defined in

node_modules/@pixi/display/index.d.ts:591

___

### isSprite

• **isSprite**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[isSprite](components_ClusterNodeContainer._internal_.Container.md#issprite)

#### Defined in

node_modules/@pixi/display/index.d.ts:590

___

### name

• **name**: `string`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[name](components_ClusterNodeContainer._internal_.Container.md#name)

#### Defined in

node_modules/@pixi/mixin-get-child-by-name/global.d.ts:5

___

### parent

• **parent**: [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[parent](components_ClusterNodeContainer._internal_.Container.md#parent)

#### Defined in

node_modules/@pixi/display/index.d.ts:210

___

### pluginName

• **pluginName**: `string`

Renderer plugin for batching

#### Defined in

node_modules/@pixi/graphics/index.d.ts:232

___

### renderId

• `Optional` **renderId**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[renderId](components_ClusterNodeContainer._internal_.Container.md#renderid)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:197

___

### renderable

• **renderable**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[renderable](components_ClusterNodeContainer._internal_.Container.md#renderable)

#### Defined in

node_modules/@pixi/display/index.d.ts:587

___

### shader

• **shader**: [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Graphics objects.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:230

___

### sortDirty

• **sortDirty**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[sortDirty](components_ClusterNodeContainer._internal_.Container.md#sortdirty)

#### Defined in

node_modules/@pixi/display/index.d.ts:209

___

### sortableChildren

• **sortableChildren**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[sortableChildren](components_ClusterNodeContainer._internal_.Container.md#sortablechildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:208

___

### state

• `Private` **state**: `any`

Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
blend mode, culling, depth testing, direction of rendering triangles, backface, etc.

**`member`** {PIXI.State}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:280

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[tabIndex](components_ClusterNodeContainer._internal_.Container.md#tabindex)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:191

___

### trackedPointers

• **trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[trackedPointers](components_ClusterNodeContainer._internal_.Container.md#trackedpointers)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:506

___

### transform

• **transform**: [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[transform](components_ClusterNodeContainer._internal_.Container.md#transform)

#### Defined in

node_modules/@pixi/display/index.d.ts:584

___

### vertexData

• `Protected` **vertexData**: `Float32Array`

Copy of the object vertex data.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:251

___

### visible

• **visible**: `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[visible](components_ClusterNodeContainer._internal_.Container.md#visible)

#### Defined in

node_modules/@pixi/display/index.d.ts:586

___

### worldAlpha

• **worldAlpha**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[worldAlpha](components_ClusterNodeContainer._internal_.Container.md#worldalpha)

#### Defined in

node_modules/@pixi/display/index.d.ts:583

___

### yoga

• **yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[yoga](components_ClusterNodeContainer._internal_.Container.md#yoga)

#### Defined in

[src/type/index.ts:22](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L22)

___

### \_TEMP\_POINT

▪ `Static` `Private` **\_TEMP\_POINT**: [`Point`](components_ClusterNodeContainer._internal_.Point.md)

Temporary point to use for containsPoint

**`static`**

#### Defined in

node_modules/@pixi/graphics/index.d.ts:225

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[prefixed](components_ClusterNodeContainer._internal_.Container.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### \_tempDisplayObjectParent

• `Protected` `get` **_tempDisplayObjectParent**(): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

**`member`** {PIXI.Container}

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

Container.\_tempDisplayObjectParent

#### Defined in

node_modules/@pixi/display/index.d.ts:756

___

### angle

• `get` **angle**(): `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.angle

#### Defined in

node_modules/@pixi/display/index.d.ts:856

• `set` **angle**(`value`): `void`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.angle

#### Defined in

node_modules/@pixi/display/index.d.ts:857

___

### blendMode

• `get` **blendMode**(): [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

The blend mode to be applied to the graphic shape. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
primitive in the GraphicsGeometry list is rendered sequentially, modes
such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
be applied per-primitive.

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL;

**`see`** PIXI.BLEND_MODES

#### Returns

[`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:315

• `set` **blendMode**(`value`): `void`

The blend mode to be applied to the graphic shape. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
primitive in the GraphicsGeometry list is rendered sequentially, modes
such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
be applied per-primitive.

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL;

**`see`** PIXI.BLEND_MODES

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:314

___

### destroyed

• `get` **destroyed**(): `boolean`

Readonly flag for destroyed display objects.

#### Returns

`boolean`

#### Inherited from

Container.destroyed

#### Defined in

node_modules/@pixi/display/index.d.ts:635

___

### fill

• `get` **fill**(): [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

The current fill style.

**`member`** {PIXI.FillStyle}

**`readonly`**

#### Returns

[`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:331

___

### geometry

• `get` **geometry**(): [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Includes vertex positions, face indices, normals, colors, UVs, and
custom attributes within buffers, reducing the cost of passing all
this data to the GPU. Can be shared between multiple Mesh or Graphics objects.

**`member`** {PIXI.GraphicsGeometry}

**`readonly`**

#### Returns

[`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:290

___

### height

• `get` **height**(): `number`

The height of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.height

#### Defined in

node_modules/@pixi/display/index.d.ts:385

• `set` **height**(`value`): `void`

The height of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.height

#### Defined in

node_modules/@pixi/display/index.d.ts:386

___

### line

• `get` **line**(): [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

The current line style.

**`member`** {PIXI.LineStyle}

**`readonly`**

#### Returns

[`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:338

___

### localTransform

• `get` **localTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

Container.localTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:804

___

### mask

• `get` **mask**(): ``null`` \| [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData|null}

#### Returns

``null`` \| [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

#### Inherited from

Container.mask

#### Defined in

node_modules/@pixi/display/index.d.ts:897

• `set` **mask**(`value`): `void`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData|null}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) |

#### Returns

`void`

#### Inherited from

Container.mask

#### Defined in

node_modules/@pixi/display/index.d.ts:898

___

### pivot

• `get` **pivot**(): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The center of rotation, scaling, and skewing for this display object in its local space. The `position`
is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0).

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

#### Inherited from

Container.pivot

#### Defined in

node_modules/@pixi/display/index.d.ts:832

• `set` **pivot**(`value`): `void`

The center of rotation, scaling, and skewing for this display object in its local space. The `position`
is the projection of `pivot` in the parent's local space.

By default, the pivot is the origin (0, 0).

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\> |

#### Returns

`void`

#### Inherited from

Container.pivot

#### Defined in

node_modules/@pixi/display/index.d.ts:833

___

### position

• `get` **position**(): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The coordinate of the object relative to the local coordinates of the parent.

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

#### Inherited from

Container.position

#### Defined in

node_modules/@pixi/display/index.d.ts:811

• `set` **position**(`value`): `void`

The coordinate of the object relative to the local coordinates of the parent.

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\> |

#### Returns

`void`

#### Inherited from

Container.position

#### Defined in

node_modules/@pixi/display/index.d.ts:812

___

### rotation

• `get` **rotation**(): `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.rotation

#### Defined in

node_modules/@pixi/display/index.d.ts:848

• `set` **rotation**(`value`): `void`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.rotation

#### Defined in

node_modules/@pixi/display/index.d.ts:849

___

### scale

• `get` **scale**(): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The scale factors of this object along the local coordinate axes.

The default scale is (1, 1).

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

#### Inherited from

Container.scale

#### Defined in

node_modules/@pixi/display/index.d.ts:821

• `set` **scale**(`value`): `void`

The scale factors of this object along the local coordinate axes.

The default scale is (1, 1).

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\> |

#### Returns

`void`

#### Inherited from

Container.scale

#### Defined in

node_modules/@pixi/display/index.d.ts:822

___

### skew

• `get` **skew**(): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The skew factor for the object in radians.

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

#### Inherited from

Container.skew

#### Defined in

node_modules/@pixi/display/index.d.ts:840

• `set` **skew**(`value`): `void`

The skew factor for the object in radians.

**`since`** PixiJS 4

**`member`** {PIXI.ObservablePoint}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\> |

#### Returns

`void`

#### Inherited from

Container.skew

#### Defined in

node_modules/@pixi/display/index.d.ts:841

___

### tint

• `get` **tint**(): `number`

The tint applied to each graphic shape. This is a hex value. A value of
0xFFFFFF will remove any tint effect.

**`member`** {number}

**`default`** 0xFFFFFF

#### Returns

`number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:323

• `set` **tint**(`value`): `void`

The tint applied to each graphic shape. This is a hex value. A value of
0xFFFFFF will remove any tint effect.

**`member`** {number}

**`default`** 0xFFFFFF

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:324

___

### width

• `get` **width**(): `number`

The width of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.width

#### Defined in

node_modules/@pixi/display/index.d.ts:378

• `set` **width**(`value`): `void`

The width of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.width

#### Defined in

node_modules/@pixi/display/index.d.ts:379

___

### worldTransform

• `get` **worldTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

Container.worldTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:797

___

### worldVisible

• `get` **worldVisible**(): `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Returns

`boolean`

#### Inherited from

Container.worldVisible

#### Defined in

node_modules/@pixi/display/index.d.ts:876

___

### x

• `get` **x**(): `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.x

#### Defined in

node_modules/@pixi/display/index.d.ts:781

• `set` **x**(`value`): `void`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.x

#### Defined in

node_modules/@pixi/display/index.d.ts:782

___

### y

• `get` **y**(): `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Returns

`number`

#### Inherited from

Container.y

#### Defined in

node_modules/@pixi/display/index.d.ts:789

• `set` **y**(`value`): `void`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.y

#### Defined in

node_modules/@pixi/display/index.d.ts:790

___

### zIndex

• `get` **zIndex**(): `number`

The zIndex of the displayObject.

If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other display objects within the same container.

**`member`** {number}

**`see`** PIXI.Container#sortableChildren

#### Returns

`number`

#### Inherited from

Container.zIndex

#### Defined in

node_modules/@pixi/display/index.d.ts:868

• `set` **zIndex**(`value`): `void`

The zIndex of the displayObject.

If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other display objects within the same container.

**`member`** {number}

**`see`** PIXI.Container#sortableChildren

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.zIndex

#### Defined in

node_modules/@pixi/display/index.d.ts:869

## Methods

### \_cacheAsBitmapDestroy

▸ **_cacheAsBitmapDestroy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapdestroy)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:18

___

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Retrieves the bounds of the graphic shape as a rectangle object.

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_calculateBounds](components_ClusterNodeContainer._internal_.Container.md#_calculatebounds)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:595

___

### \_calculateCachedBounds

▸ **_calculateCachedBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_calculateCachedBounds](components_ClusterNodeContainer._internal_.Container.md#_calculatecachedbounds)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:13

___

### \_destroyCachedDisplayObject

▸ **_destroyCachedDisplayObject**(): `void`

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.Container.md#_destroycacheddisplayobject)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:17

___

### \_getCachedLocalBounds

▸ **_getCachedLocalBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_getCachedLocalBounds](components_ClusterNodeContainer._internal_.Container.md#_getcachedlocalbounds)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:14

___

### \_initCachedDisplayObject

▸ **_initCachedDisplayObject**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_initCachedDisplayObject](components_ClusterNodeContainer._internal_.Container.md#_initcacheddisplayobject)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:12

___

### \_initCachedDisplayObjectCanvas

▸ **_initCachedDisplayObjectCanvas**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.Container.md#_initcacheddisplayobjectcanvas)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:16

___

### \_initCurve

▸ `Protected` **_initCurve**(`x?`, `y?`): `void`

Initialize the curve

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:421

___

### \_populateBatches

▸ `Protected` **_populateBatches**(): `void`

Populating batches for rendering.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:568

___

### \_recursivePostUpdateTransform

▸ `Protected` **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#_recursivepostupdatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:651

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

Renders the object using the WebGL renderer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_render](components_ClusterNodeContainer._internal_.Container.md#_render)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:566

___

### \_renderBatched

▸ `Protected` **_renderBatched**(`renderer`): `void`

Renders the batches using the BathedRenderer plugin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:574

___

### \_renderCached

▸ **_renderCached**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_renderCached](components_ClusterNodeContainer._internal_.Container.md#_rendercached)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:11

___

### \_renderCachedCanvas

▸ **_renderCachedCanvas**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_renderCachedCanvas](components_ClusterNodeContainer._internal_.Container.md#_rendercachedcanvas)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:15

___

### \_renderDirect

▸ `Protected` **_renderDirect**(`renderer`): `void`

Renders the graphics direct

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:580

___

### \_renderDrawCallDirect

▸ `Protected` **_renderDrawCallDirect**(`renderer`, `drawCall`): `void`

Renders specific DrawCall

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |
| `drawCall` | [`BatchDrawCall`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchDrawCall.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:587

___

### \_resolveDirectShader

▸ `Protected` **_resolveDirectShader**(`renderer`): [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

Resolves shader for direct rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

[`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:593

___

### addChild

▸ **addChild**<`T`\>(...`children`): `T`

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | [`T`, ...DisplayObject[]] | The DisplayObject(s) to add to the container |

#### Returns

`T`

The first child that was added.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[addChild](components_ClusterNodeContainer._internal_.Container.md#addchild)

#### Defined in

node_modules/@pixi/display/index.d.ts:229

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[addChildAt](components_ClusterNodeContainer._internal_.Container.md#addchildat)

#### Defined in

node_modules/@pixi/display/index.d.ts:237

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[addListener](components_ClusterNodeContainer._internal_.Container.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### arc

▸ **arc**(`cx`, `cy`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

The arc method creates an arc/curve (used to create circles, or parts of circles).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cx` | `number` | The x-coordinate of the center of the circle |
| `cy` | `number` | The y-coordinate of the center of the circle |
| `radius` | `number` | The radius of the circle |
| `startAngle` | `number` | The starting angle, in radians (0 is at the 3 o'clock position  of the arc's circle) |
| `endAngle` | `number` | The ending angle, in radians |
| `anticlockwise?` | `boolean` | - |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:472

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

The arcTo() method creates an arc/curve between two tangents on the canvas.

"borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x-coordinate of the first tangent point of the arc |
| `y1` | `number` | The y-coordinate of the first tangent point of the arc |
| `x2` | `number` | The x-coordinate of the end of the arc |
| `y2` | `number` | The y-coordinate of the end of the arc |
| `radius` | `number` | The radius of the arc |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:457

___

### beginFill

▸ **beginFill**(`color?`, `alpha?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Specifies a simple one-color fill that subsequent calls to other Graphics methods
(such as lineTo() or drawCircle()) use when drawing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color?` | `number` |
| `alpha?` | `number` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:481

___

### beginHole

▸ **beginHole**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Begin adding holes to the last draw shape
IMPORTANT: holes must be fully inside a shape to work
Also weirdness ensues if holes overlap!
Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Returns itself.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:631

___

### beginTextureFill

▸ **beginTextureFill**(`options?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Begin the texture fill

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IFillStyleOptions`](../interfaces/components_EdgeContainer._internal_.IFillStyleOptions.md) |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:492

___

### bezierCurveTo

▸ **bezierCurveTo**(`cpX`, `cpY`, `cpX2`, `cpY2`, `toX`, `toY`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Calculate the points for a bezier curve and then draws it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpX` | `number` | Control point x |
| `cpY` | `number` | Control point y |
| `cpX2` | `number` | Second Control point x |
| `cpY2` | `number` | Second Control point y |
| `toX` | `number` | Destination point x |
| `toY` | `number` | Destination point y |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:444

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

This implementation will automatically fit the children's bounds into the calculation. Each child's bounds
is limited to its mask's bounds or filterArea, if any is applied.

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[calculateBounds](components_ClusterNodeContainer._internal_.Container.md#calculatebounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:302

___

### calculateTints

▸ `Protected` **calculateTints**(): `void`

Recalculate the tint by applying tint to batches using Graphics tint.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:604

___

### calculateVertices

▸ `Protected` **calculateVertices**(): `void`

If there's a transform update or a change to the shape of the
geometry, recalculate the vertices.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:609

___

### checkIfBoundingBoxChanged

▸ **checkIfBoundingBoxChanged**(): `void`

Checks boundaries of DisplayObject and emits NEED_LAYOUT_UPDATE if needed

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[checkIfBoundingBoxChanged](components_ClusterNodeContainer._internal_.Container.md#checkifboundingboxchanged)

#### Defined in

[src/type/index.ts:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L41)

___

### clear

▸ **clear**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:553

___

### clone

▸ **clone**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Creates a new Graphics object with the same values as this one.
Note that only the geometry of the object is cloned, not its transform (position,scale,etc)

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

A clone of the graphics object

#### Defined in

node_modules/@pixi/graphics/index.d.ts:302

___

### closePath

▸ **closePath**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Closes the current path.

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Returns itself.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:615

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Tests if a point is inside this graphics object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | the point to test |

#### Returns

`boolean`

the result of the test

#### Defined in

node_modules/@pixi/graphics/index.d.ts:602

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys the Graphics object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[destroy](components_ClusterNodeContainer._internal_.Container.md#destroy)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:649

___

### disableTempParent

▸ **disableTempParent**(`cacheParent`): `void`

Pair method for `enableTempParent`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheParent` | [`Container`](components_ClusterNodeContainer._internal_.Container.md) | Actual parent of element |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[disableTempParent](components_ClusterNodeContainer._internal_.Container.md#disabletempparent)

#### Defined in

node_modules/@pixi/display/index.d.ts:774

___

### drawCircle

▸ **drawCircle**(`x`, `y`, `radius`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draws a circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the center of the circle |
| `y` | `number` | The Y coordinate of the center of the circle |
| `radius` | `number` | The radius of the circle |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:528

___

### drawEllipse

▸ **drawEllipse**(`x`, `y`, `width`, `height`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draws an ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the center of the ellipse |
| `y` | `number` | The Y coordinate of the center of the ellipse |
| `width` | `number` | The half width of the ellipse |
| `height` | `number` | The half height of the ellipse |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:538

___

### drawPolygon

▸ **drawPolygon**(...`path`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...path` | `number`[] \| [`Point`](components_ClusterNodeContainer._internal_.Point.md)[] |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:539

▸ **drawPolygon**(`path`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Polygon`](components_EdgeContainer._internal_.Polygon.md) \| `number`[] \| [`Point`](components_ClusterNodeContainer._internal_.Point.md)[] |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:540

___

### drawRect

▸ **drawRect**(`x`, `y`, `width`, `height`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draws a rectangle shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coord of the top-left of the rectangle |
| `y` | `number` | The Y coord of the top-left of the rectangle |
| `width` | `number` | The width of the rectangle |
| `height` | `number` | The height of the rectangle |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:508

___

### drawRoundedRect

▸ **drawRoundedRect**(`x`, `y`, `width`, `height`, `radius`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draw a rectangle shape with rounded/beveled corners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coord of the top-left of the rectangle |
| `y` | `number` | The Y coord of the top-left of the rectangle |
| `width` | `number` | The width of the rectangle |
| `height` | `number` | The height of the rectangle |
| `radius` | `number` | Radius of the rectangle corners |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:519

___

### drawShape

▸ **drawShape**(`shape`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draw any shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`IShape`](../modules/components_EdgeContainer._internal_.md#ishape) | Shape to draw |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:547

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[emit](components_ClusterNodeContainer._internal_.Container.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### enableTempParent

▸ **enableTempParent**(): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root

```
const cacheParent = elem.enableTempParent();
elem.updateTransform();
elem.disableTempParent(cacheParent);
```

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

current parent

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[enableTempParent](components_ClusterNodeContainer._internal_.Container.md#enabletempparent)

#### Defined in

node_modules/@pixi/display/index.d.ts:768

___

### endFill

▸ **endFill**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:498

___

### endHole

▸ **endHole**(): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

End adding holes to the last draw shape

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Returns itself.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:636

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[eventNames](components_ClusterNodeContainer._internal_.Container.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:12

___

### finishPoly

▸ `Protected` **finishPoly**(): `void`

Finish the polygon object.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:397

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link PIXI.Rectangle}.

This method is expensive on containers with a large subtree (like the stage). This is because the bounds
of a container depend on its children's bounds, which recursively causes all bounds in the subtree to
be recalculated. The upside, however, is that calling `getBounds` once on a container will indeed update
the bounds of all children (the whole subtree, in fact). This side effect should be exploited by using
`displayObject._bounds.getRectangle()` when traversing through all the bounds in a scene graph. Otherwise,
calling `getBounds` on each object in a subtree will cause the total cost to increase quadratically as
its height increases.

* The transforms of all objects in a container's **subtree** and of all **ancestors** are updated.
* The world bounds of all display objects in a container's **subtree** will also be recalculated.

The `_bounds` object stores the last calculation of the bounds. You can use to entirely skip bounds
calculation if needed.

```js
const lastCalculatedBounds = displayObject._bounds.getRectangle(optionalRect);
```

Do know that usage of `getLocalBounds` can corrupt the `_bounds` of children (the whole subtree, actually). This
is a known issue that has not been solved. See [getLocalBounds]{@link PIXI.DisplayObject#getLocalBounds} for more
details.

`getBounds` should be called with `skipUpdate` equal to `true` in a render() call. This is because the transforms
are guaranteed to be update-to-date. In fact, recalculating inside a render() call may cause corruption in certain
cases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The minimum axis-aligned rectangle in world space that fits around this object.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getBounds](components_ClusterNodeContainer._internal_.Container.md#getbounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:693

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getChildAt](components_ClusterNodeContainer._internal_.Container.md#getchildat)

#### Defined in

node_modules/@pixi/display/index.d.ts:265

___

### getChildByName

▸ **getChildByName**(`name`, `isRecursive?`): `DisplayObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `isRecursive?` | `boolean` |

#### Returns

`DisplayObject`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getChildByName](components_ClusterNodeContainer._internal_.Container.md#getchildbyname)

#### Defined in

node_modules/@pixi/mixin-get-child-by-name/global.d.ts:10

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getChildIndex](components_ClusterNodeContainer._internal_.Container.md#getchildindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:251

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | [`Point`](components_ClusterNodeContainer._internal_.Point.md) |
| `skipUpdate?` | `boolean` |

#### Returns

[`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getGlobalPosition](components_ClusterNodeContainer._internal_.Container.md#getglobalposition)

#### Defined in

node_modules/@pixi/mixin-get-global-position/global.d.ts:5

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`, `skipChildrenUpdate?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Retrieves the local bounds of the displayObject as a rectangle object.

Calling `getLocalBounds` may invalidate the `_bounds` of the whole subtree below. If using it inside a render()
call, it is advised to call `getBounds()` immediately after to recalculate the world bounds of the subtree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |
| `skipChildrenUpdate?` | `boolean` |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The rectangular bounding area.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getLocalBounds](components_ClusterNodeContainer._internal_.Container.md#getlocalbounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:314

___

### isFastRect

▸ **isFastRect**(): `boolean`

True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
masked with gl.scissor.

#### Returns

`boolean`

True if only 1 rect.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:560

___

### lineStyle

▸ **lineStyle**(`width`, `color?`, `alpha?`, `alignment?`, `native?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
method or the drawCircle() method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `color?` | `number` |
| `alpha?` | `number` |
| `alignment?` | `number` |
| `native?` | `boolean` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:351

▸ **lineStyle**(`options?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
method or the drawCircle() method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ILineStyleOptions`](../interfaces/components_EdgeContainer._internal_.ILineStyleOptions.md) |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:368

___

### lineTextureStyle

▸ **lineTextureStyle**(`options`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Like line style but support texture for line fill.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ILineStyleOptions`](../interfaces/components_EdgeContainer._internal_.ILineStyleOptions.md) |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:387

___

### lineTo

▸ **lineTo**(`x`, `y`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Draws a line using the current line style from the current drawing position to (x, y);
The current drawing position is then set to (x, y).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the X coordinate to draw to |
| `y` | `number` | the Y coordinate to draw to |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:414

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[listenerCount](components_ClusterNodeContainer._internal_.Container.md#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:22

___

### listeners

▸ **listeners**(`event`): [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[listeners](components_ClusterNodeContainer._internal_.Container.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### moveTo

▸ **moveTo**(`x`, `y`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Moves the current drawing position to x, y.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the X coordinate to move to |
| `y` | `number` | the Y coordinate to move to |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:405

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[off](components_ClusterNodeContainer._internal_.Container.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[on](components_ClusterNodeContainer._internal_.Container.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(`_length?`): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Parameters

| Name | Type |
| :------ | :------ |
| `_length?` | `number` |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[onChildrenChange](components_ClusterNodeContainer._internal_.Container.md#onchildrenchange)

#### Defined in

node_modules/@pixi/display/index.d.ts:220

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[once](components_ClusterNodeContainer._internal_.Container.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpX`, `cpY`, `toX`, `toY`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Calculate the points for a quadratic bezier curve and then draws it.
Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpX` | `number` | Control point x |
| `cpY` | `number` | Control point y |
| `toX` | `number` | Destination point x |
| `toY` | `number` | Destination point y |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

This Graphics object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:432

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[removeAllListeners](components_ClusterNodeContainer._internal_.Container.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeChild

▸ **removeChild**<`T`\>(...`children`): `T`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `T` | The DisplayObject(s) to remove |

#### Returns

`T`[``0``]

The first child that was removed.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[removeChild](components_ClusterNodeContainer._internal_.Container.md#removechild)

#### Defined in

node_modules/@pixi/display/index.d.ts:272

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[removeChildAt](components_ClusterNodeContainer._internal_.Container.md#removechildat)

#### Defined in

node_modules/@pixi/display/index.d.ts:279

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[removeChildren](components_ClusterNodeContainer._internal_.Container.md#removechildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:287

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[removeListener](components_ClusterNodeContainer._internal_.Container.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### render

▸ **render**(`renderer`): `void`

Renders the object using the WebGL renderer.

The [_render]{@link PIXI.Container#_render} method is be overriden for rendering the contents of the
container itself. This `render` method will invoke it, and also invoke the `render` methods of all
children afterward.

If `renderable` or `visible` is false or if `worldAlpha` is not positive, this implementation will entirely
skip rendering. See {@link PIXI.DisplayObject} for choosing between `renderable` or `visible`. Generally,
setting alpha to zero is not recommended for purely skipping rendering.

When your scene becomes large (especially when it is larger than can be viewed in a single screen), it is
advised to employ **culling** to automatically skip rendering objects outside of the current screen. The
[@pixi-essentials/cull](https://www.npmjs.com/package/@pixi-essentials/cull) and
[pixi-cull](https://www.npmjs.com/package/pixi-cull) packages do this out of the box.

The [renderAdvanced]{@link PIXI.Container#renderAdvanced} method is internally used when when masking or
filtering is applied on a container. This does, however, break batching and can affect performance when
masking and filtering is applied extensively throughout the scene graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[render](components_ClusterNodeContainer._internal_.Container.md#render)

#### Defined in

node_modules/@pixi/display/index.d.ts:344

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[renderAdvanced](components_ClusterNodeContainer._internal_.Container.md#renderadvanced)

#### Defined in

node_modules/@pixi/display/index.d.ts:351

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[setChildIndex](components_ClusterNodeContainer._internal_.Container.md#setchildindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:258

___

### setMatrix

▸ **setMatrix**(`matrix`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Apply a matrix to the positional data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | Matrix to use for transform current shape. |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Returns itself.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:622

___

### setParent

▸ **setParent**(`container`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | [`Container`](components_ClusterNodeContainer._internal_.Container.md) | The Container to add this DisplayObject to. |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

The Container that this DisplayObject was added to.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[setParent](components_ClusterNodeContainer._internal_.Container.md#setparent)

#### Defined in

node_modules/@pixi/display/index.d.ts:728

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

[`Graphics`](components_EdgeContainer._internal_.Graphics.md)

The DisplayObject instance

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[setTransform](components_ClusterNodeContainer._internal_.Container.md#settransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:743

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[sortChildren](components_ClusterNodeContainer._internal_.Container.md#sortchildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:291

___

### startPoly

▸ `Protected` **startPoly**(): `void`

Start a polygon object internally

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:392

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[swapChildren](components_ClusterNodeContainer._internal_.Container.md#swapchildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:244

___

### toGlobal

▸ **toGlobal**<`P`\>(`position`, `point?`, `skipUpdate?`): `P`

Calculates the global position of the display object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) = [`Point`](components_ClusterNodeContainer._internal_.Point.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The world origin to calculate from. |
| `point?` | `P` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`P`

A point object representing the position of this object.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[toGlobal](components_ClusterNodeContainer._internal_.Container.md#toglobal)

#### Defined in

node_modules/@pixi/display/index.d.ts:710

___

### toLocal

▸ **toLocal**<`P`\>(`position`, `from?`, `point?`, `skipUpdate?`): `P`

Calculates the local position of the display object relative to another point.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) = [`Point`](components_ClusterNodeContainer._internal_.Point.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `P` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`P`

A point object representing the position of this object

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[toLocal](components_ClusterNodeContainer._internal_.Container.md#tolocal)

#### Defined in

node_modules/@pixi/display/index.d.ts:721

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[updateTransform](components_ClusterNodeContainer._internal_.Container.md#updatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:295

___

### updateYogaLayout

▸ **updateYogaLayout**(): `void`

Applies yoga layout to DisplayObject

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[updateYogaLayout](components_ClusterNodeContainer._internal_.Container.md#updateyogalayout)

#### Defined in

[src/type/index.ts:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L36)

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[mixin](components_ClusterNodeContainer._internal_.Container.md#mixin)

#### Defined in

node_modules/@pixi/display/index.d.ts:610
