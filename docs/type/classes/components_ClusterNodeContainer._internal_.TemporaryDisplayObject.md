[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TemporaryDisplayObject

# Class: TemporaryDisplayObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TemporaryDisplayObject

## Hierarchy

- `DisplayObject`

  ↳ **`TemporaryDisplayObject`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#constructor)

### Properties

- [\_\_hasYoga](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#__hasyoga)
- [\_\_yoga](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#__yoga)
- [\_accessibleActive](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_accessibleactive)
- [\_accessibleDiv](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_accessiblediv)
- [\_bounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_bounds)
- [\_boundsID](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_boundsid)
- [\_boundsRect](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_boundsrect)
- [\_cacheAsBitmap](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_cacheasbitmapresolution)
- [\_cacheData](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_cachedata)
- [\_destroyed](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_destroyed)
- [\_enabledFilters](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_enabledfilters)
- [\_lastSortedIndex](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_lastsortedindex)
- [\_localBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_localbounds)
- [\_localBoundsRect](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_localboundsrect)
- [\_mask](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_mask)
- [\_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_prevyogalayouthash)
- [\_trackedPointers](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_trackedpointers)
- [\_visible](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_visible)
- [\_yogaLayoutHash](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_yogalayouthash)
- [\_zIndex](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_zindex)
- [accessible](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessible)
- [accessibleChildren](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessiblechildren)
- [accessibleHint](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessiblehint)
- [accessiblePointerEvents](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessiblepointerevents)
- [accessibleTitle](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessibletitle)
- [accessibleType](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#accessibletype)
- [alpha](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#alpha)
- [buttonMode](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#buttonmode)
- [cacheAsBitmap](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#cacheasbitmapresolution)
- [calculateBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#calculatebounds)
- [cursor](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#cursor)
- [displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#displayobjectupdatetransform)
- [filterArea](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#filterarea)
- [filters](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#filters)
- [flex](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#flex)
- [hitArea](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#hitarea)
- [interactive](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#interactive)
- [interactiveChildren](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#interactivechildren)
- [isMask](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#ismask)
- [isSprite](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#issprite)
- [name](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#name)
- [parent](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#parent)
- [removeChild](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#removechild)
- [render](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#render)
- [renderId](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#renderid)
- [renderable](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#renderable)
- [sortDirty](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#sortdirty)
- [tabIndex](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#tabindex)
- [trackedPointers](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#trackedpointers)
- [transform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#transform)
- [visible](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#visible)
- [worldAlpha](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#worldalpha)
- [yoga](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#yoga)
- [prefixed](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_tempdisplayobjectparent)
- [angle](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#angle)
- [destroyed](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#destroyed)
- [localTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#localtransform)
- [mask](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#mask)
- [pivot](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#pivot)
- [position](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#position)
- [rotation](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#rotation)
- [scale](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#scale)
- [skew](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#skew)
- [worldTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#worldtransform)
- [worldVisible](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#worldvisible)
- [x](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#x)
- [y](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#y)
- [zIndex](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_cacheasbitmapdestroy)
- [\_calculateCachedBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_initcacheddisplayobjectcanvas)
- [\_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_recursivepostupdatetransform)
- [\_renderCached](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_rendercached)
- [\_renderCachedCanvas](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#_rendercachedcanvas)
- [addListener](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#addlistener)
- [checkIfBoundingBoxChanged](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#checkifboundingboxchanged)
- [destroy](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#destroy)
- [disableTempParent](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#disabletempparent)
- [emit](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#emit)
- [enableTempParent](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#enabletempparent)
- [eventNames](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#eventnames)
- [getBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#getbounds)
- [getGlobalPosition](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#getglobalposition)
- [getLocalBounds](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#getlocalbounds)
- [listenerCount](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#listeners)
- [off](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#off)
- [on](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#on)
- [once](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#removelistener)
- [setParent](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#setparent)
- [setTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#settransform)
- [toGlobal](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#toglobal)
- [toLocal](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#tolocal)
- [updateTransform](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#updatetransform)
- [updateYogaLayout](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#updateyogalayout)
- [mixin](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md#mixin)

## Constructors

### constructor

• **new TemporaryDisplayObject**()

#### Inherited from

DisplayObject.constructor

#### Defined in

node_modules/@pixi/display/index.d.ts:611

## Properties

### \_\_hasYoga

• **\_\_hasYoga**: `boolean`

Internal property for fast checking if object has yoga

#### Inherited from

DisplayObject.\_\_hasYoga

#### Defined in

[src/type/index.ts:27](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L27)

___

### \_\_yoga

• **\_\_yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

DisplayObject.\_\_yoga

#### Defined in

[src/type/index.ts:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L44)

___

### \_accessibleActive

• `Optional` **\_accessibleActive**: `boolean`

#### Inherited from

DisplayObject.\_accessibleActive

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:192

___

### \_accessibleDiv

• `Optional` **\_accessibleDiv**: [`IAccessibleHTMLElement`](../interfaces/components_ClusterNodeContainer._internal_.IAccessibleHTMLElement.md)

#### Inherited from

DisplayObject.\_accessibleDiv

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:193

___

### \_bounds

• **\_bounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

DisplayObject.\_bounds

#### Defined in

node_modules/@pixi/display/index.d.ts:594

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

#### Inherited from

DisplayObject.\_boundsID

#### Defined in

node_modules/@pixi/display/index.d.ts:598

___

### \_boundsRect

• `Protected` **\_boundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

DisplayObject.\_boundsRect

#### Defined in

node_modules/@pixi/display/index.d.ts:599

___

### \_cacheAsBitmap

• **\_cacheAsBitmap**: `boolean`

#### Inherited from

DisplayObject.\_cacheAsBitmap

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:9

___

### \_cacheAsBitmapMultisample

• **\_cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

DisplayObject.\_cacheAsBitmapMultisample

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:8

___

### \_cacheAsBitmapResolution

• **\_cacheAsBitmapResolution**: `number`

#### Inherited from

DisplayObject.\_cacheAsBitmapResolution

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:7

___

### \_cacheData

• **\_cacheData**: `CacheData`

#### Inherited from

DisplayObject.\_cacheData

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:10

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

#### Inherited from

DisplayObject.\_destroyed

#### Defined in

node_modules/@pixi/display/index.d.ts:601

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

DisplayObject.\_enabledFilters

#### Defined in

node_modules/@pixi/display/index.d.ts:597

___

### \_lastSortedIndex

• **\_lastSortedIndex**: `number`

#### Inherited from

DisplayObject.\_lastSortedIndex

#### Defined in

node_modules/@pixi/display/index.d.ts:592

___

### \_localBounds

• **\_localBounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

DisplayObject.\_localBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:595

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

DisplayObject.\_localBoundsRect

#### Defined in

node_modules/@pixi/display/index.d.ts:600

___

### \_mask

• **\_mask**: [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

#### Inherited from

DisplayObject.\_mask

#### Defined in

node_modules/@pixi/display/index.d.ts:593

___

### \_prevYogaLayoutHash

• **\_prevYogaLayoutHash**: `number`

#### Inherited from

DisplayObject.\_prevYogaLayoutHash

#### Defined in

[src/type/index.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L43)

___

### \_trackedPointers

• **\_trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

DisplayObject.\_trackedPointers

#### Defined in

node_modules/@pixi/interaction/index.d.ts:509

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

DisplayObject.\_visible

#### Defined in

[src/type/index.ts:29](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L29)

___

### \_yogaLayoutHash

• **\_yogaLayoutHash**: `number`

#### Inherited from

DisplayObject.\_yogaLayoutHash

#### Defined in

[src/type/index.ts:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L42)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

#### Inherited from

DisplayObject.\_zIndex

#### Defined in

node_modules/@pixi/display/index.d.ts:596

___

### accessible

• `Optional` **accessible**: `boolean`

#### Inherited from

DisplayObject.accessible

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:188

___

### accessibleChildren

• `Optional` **accessibleChildren**: `boolean`

#### Inherited from

DisplayObject.accessibleChildren

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:196

___

### accessibleHint

• `Optional` **accessibleHint**: `string`

#### Inherited from

DisplayObject.accessibleHint

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:190

___

### accessiblePointerEvents

• `Optional` **accessiblePointerEvents**: [`PointerEvents`](../modules/components_ClusterNodeContainer._internal_.md#pointerevents)

#### Inherited from

DisplayObject.accessiblePointerEvents

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:195

___

### accessibleTitle

• `Optional` **accessibleTitle**: `string`

#### Inherited from

DisplayObject.accessibleTitle

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:189

___

### accessibleType

• `Optional` **accessibleType**: `string`

#### Inherited from

DisplayObject.accessibleType

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:194

___

### alpha

• **alpha**: `number`

#### Inherited from

DisplayObject.alpha

#### Defined in

node_modules/@pixi/display/index.d.ts:585

___

### buttonMode

• **buttonMode**: `boolean`

#### Inherited from

DisplayObject.buttonMode

#### Defined in

node_modules/@pixi/interaction/index.d.ts:505

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

#### Inherited from

DisplayObject.cacheAsBitmap

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:4

___

### cacheAsBitmapMultisample

• **cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

DisplayObject.cacheAsBitmapMultisample

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:6

___

### cacheAsBitmapResolution

• **cacheAsBitmapResolution**: `number`

#### Inherited from

DisplayObject.cacheAsBitmapResolution

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:5

___

### calculateBounds

• **calculateBounds**: () => ``null``

#### Type declaration

▸ (): ``null``

##### Returns

``null``

#### Overrides

DisplayObject.calculateBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:911

___

### cursor

• **cursor**: `string`

#### Inherited from

DisplayObject.cursor

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

DisplayObject.displayObjectUpdateTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:604

___

### filterArea

• **filterArea**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

DisplayObject.filterArea

#### Defined in

node_modules/@pixi/display/index.d.ts:588

___

### filters

• **filters**: ``null`` \| [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

DisplayObject.filters

#### Defined in

node_modules/@pixi/display/index.d.ts:589

___

### flex

• **flex**: `boolean`

#### Inherited from

DisplayObject.flex

#### Defined in

[src/type/index.ts:31](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L31)

___

### hitArea

• **hitArea**: [`IHitArea`](../interfaces/components_ClusterNodeContainer._internal_.IHitArea.md)

#### Inherited from

DisplayObject.hitArea

#### Defined in

node_modules/@pixi/interaction/index.d.ts:503

___

### interactive

• **interactive**: `boolean`

#### Inherited from

DisplayObject.interactive

#### Defined in

node_modules/@pixi/interaction/index.d.ts:501

___

### interactiveChildren

• **interactiveChildren**: `boolean`

#### Inherited from

DisplayObject.interactiveChildren

#### Defined in

node_modules/@pixi/interaction/index.d.ts:502

___

### isMask

• **isMask**: `boolean`

#### Inherited from

DisplayObject.isMask

#### Defined in

node_modules/@pixi/display/index.d.ts:591

___

### isSprite

• **isSprite**: `boolean`

#### Inherited from

DisplayObject.isSprite

#### Defined in

node_modules/@pixi/display/index.d.ts:590

___

### name

• **name**: `string`

#### Inherited from

DisplayObject.name

#### Defined in

node_modules/@pixi/mixin-get-child-by-name/global.d.ts:5

___

### parent

• **parent**: [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.parent

#### Defined in

node_modules/@pixi/display/index.d.ts:582

___

### removeChild

• **removeChild**: (`child`: `DisplayObject`) => ``null``

#### Type declaration

▸ (`child`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `DisplayObject` |

##### Returns

``null``

#### Overrides

DisplayObject.removeChild

#### Defined in

node_modules/@pixi/display/index.d.ts:912

___

### render

• **render**: (`renderer`: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)) => ``null``

#### Type declaration

▸ (`renderer`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |

##### Returns

``null``

#### Overrides

DisplayObject.render

#### Defined in

node_modules/@pixi/display/index.d.ts:913

___

### renderId

• `Optional` **renderId**: `number`

#### Inherited from

DisplayObject.renderId

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:197

___

### renderable

• **renderable**: `boolean`

#### Inherited from

DisplayObject.renderable

#### Defined in

node_modules/@pixi/display/index.d.ts:587

___

### sortDirty

• **sortDirty**: `boolean`

#### Overrides

DisplayObject.sortDirty

#### Defined in

node_modules/@pixi/display/index.d.ts:914

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

DisplayObject.tabIndex

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:191

___

### trackedPointers

• **trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

DisplayObject.trackedPointers

#### Defined in

node_modules/@pixi/interaction/index.d.ts:506

___

### transform

• **transform**: [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

#### Inherited from

DisplayObject.transform

#### Defined in

node_modules/@pixi/display/index.d.ts:584

___

### visible

• **visible**: `boolean`

#### Inherited from

DisplayObject.visible

#### Defined in

node_modules/@pixi/display/index.d.ts:586

___

### worldAlpha

• **worldAlpha**: `number`

#### Inherited from

DisplayObject.worldAlpha

#### Defined in

node_modules/@pixi/display/index.d.ts:583

___

### yoga

• **yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

DisplayObject.yoga

#### Defined in

[src/type/index.ts:22](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L22)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

DisplayObject.prefixed

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### \_tempDisplayObjectParent

• `Protected` `get` **_tempDisplayObjectParent**(): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

**`member`** {PIXI.Container}

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.\_tempDisplayObjectParent

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

DisplayObject.angle

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

DisplayObject.angle

#### Defined in

node_modules/@pixi/display/index.d.ts:857

___

### destroyed

• `get` **destroyed**(): `boolean`

Readonly flag for destroyed display objects.

#### Returns

`boolean`

#### Inherited from

DisplayObject.destroyed

#### Defined in

node_modules/@pixi/display/index.d.ts:635

___

### localTransform

• `get` **localTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

DisplayObject.localTransform

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

DisplayObject.mask

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

DisplayObject.mask

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

DisplayObject.pivot

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

DisplayObject.pivot

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

DisplayObject.position

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

DisplayObject.position

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

DisplayObject.rotation

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

DisplayObject.rotation

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

DisplayObject.scale

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

DisplayObject.scale

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

DisplayObject.skew

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

DisplayObject.skew

#### Defined in

node_modules/@pixi/display/index.d.ts:841

___

### worldTransform

• `get` **worldTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

DisplayObject.worldTransform

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

DisplayObject.worldVisible

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

DisplayObject.x

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

DisplayObject.x

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

DisplayObject.y

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

DisplayObject.y

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

DisplayObject.zIndex

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

DisplayObject.zIndex

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

DisplayObject.\_cacheAsBitmapDestroy

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:18

___

### \_calculateCachedBounds

▸ **_calculateCachedBounds**(): `void`

#### Returns

`void`

#### Inherited from

DisplayObject.\_calculateCachedBounds

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:13

___

### \_destroyCachedDisplayObject

▸ **_destroyCachedDisplayObject**(): `void`

#### Returns

`void`

#### Inherited from

DisplayObject.\_destroyCachedDisplayObject

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:17

___

### \_getCachedLocalBounds

▸ **_getCachedLocalBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

DisplayObject.\_getCachedLocalBounds

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

DisplayObject.\_initCachedDisplayObject

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

DisplayObject.\_initCachedDisplayObjectCanvas

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:16

___

### \_recursivePostUpdateTransform

▸ `Protected` **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

DisplayObject.\_recursivePostUpdateTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:651

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

DisplayObject.\_renderCached

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

DisplayObject.\_renderCachedCanvas

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:15

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### checkIfBoundingBoxChanged

▸ **checkIfBoundingBoxChanged**(): `void`

Checks boundaries of DisplayObject and emits NEED_LAYOUT_UPDATE if needed

#### Returns

`void`

#### Inherited from

DisplayObject.checkIfBoundingBoxChanged

#### Defined in

[src/type/index.ts:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L41)

___

### destroy

▸ **destroy**(`_options?`): `void`

Base destroy method for generic display objects. This will automatically
remove the display object from its parent Container as well as remove
all current event listeners and internal references. Do not use a DisplayObject
after calling `destroy()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) |

#### Returns

`void`

#### Inherited from

DisplayObject.destroy

#### Defined in

node_modules/@pixi/display/index.d.ts:751

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

DisplayObject.disableTempParent

#### Defined in

node_modules/@pixi/display/index.d.ts:774

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

DisplayObject.emit

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

DisplayObject.enableTempParent

#### Defined in

node_modules/@pixi/display/index.d.ts:768

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

DisplayObject.eventNames

#### Defined in

node_modules/eventemitter3/index.d.ts:12

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

DisplayObject.getBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:693

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

DisplayObject.getGlobalPosition

#### Defined in

node_modules/@pixi/mixin-get-global-position/global.d.ts:5

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The rectangular bounding area.

#### Inherited from

DisplayObject.getLocalBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:700

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

DisplayObject.listenerCount

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

DisplayObject.listeners

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/eventemitter3/index.d.ts:43

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

DisplayObject.setParent

#### Defined in

node_modules/@pixi/display/index.d.ts:728

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

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

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

The DisplayObject instance

#### Inherited from

DisplayObject.setTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:743

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

DisplayObject.toGlobal

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

DisplayObject.toLocal

#### Defined in

node_modules/@pixi/display/index.d.ts:721

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the object transform for rendering.

TODO - Optimization pass!

#### Returns

`void`

#### Inherited from

DisplayObject.updateTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:657

___

### updateYogaLayout

▸ **updateYogaLayout**(): `void`

Applies yoga layout to DisplayObject

#### Returns

`void`

#### Inherited from

DisplayObject.updateYogaLayout

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

DisplayObject.mixin

#### Defined in

node_modules/@pixi/display/index.d.ts:610
