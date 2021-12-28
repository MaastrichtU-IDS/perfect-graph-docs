[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Container

# Class: Container

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Container

Container is a general-purpose display object that holds children. It also adds built-in support for advanced
rendering features like masking and filtering.

It is the base class of all display objects that act as a container for other objects, including Graphics
and Sprite.

```js
import { BlurFilter } from '@pixi/filter-blur';
import { Container } from '@pixi/display';
import { Graphics } from '@pixi/graphics';
import { Sprite } from '@pixi/sprite';

let container = new Container();
let sprite = Sprite.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png");

sprite.width = 512;
sprite.height = 512;

// Adds a sprite as a child to this container. As a result, the sprite will be rendered whenever the container
// is rendered.
container.addChild(sprite);

// Blurs whatever is rendered by the container
container.filters = [new BlurFilter()];

// Only the contents within a circle at the center should be rendered onto the screen.
container.mask = new Graphics()
 .beginFill(0xffffff)
 .drawCircle(sprite.width / 2, sprite.height / 2, Math.min(sprite.width, sprite.height) / 2)
 .endFill();
```

**`memberof`** PIXI

## Hierarchy

- `Container`

- `DisplayObject`

  ↳ **`Container`**

  ↳↳ [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

  ↳↳ [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

  ↳↳ [`Graphics`](components_EdgeContainer._internal_.Graphics.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Container.md#constructor)

### Properties

- [\_\_hasYoga](components_ClusterNodeContainer._internal_.Container.md#__hasyoga)
- [\_\_yoga](components_ClusterNodeContainer._internal_.Container.md#__yoga)
- [\_accessibleActive](components_ClusterNodeContainer._internal_.Container.md#_accessibleactive)
- [\_accessibleDiv](components_ClusterNodeContainer._internal_.Container.md#_accessiblediv)
- [\_bounds](components_ClusterNodeContainer._internal_.Container.md#_bounds)
- [\_boundsID](components_ClusterNodeContainer._internal_.Container.md#_boundsid)
- [\_boundsRect](components_ClusterNodeContainer._internal_.Container.md#_boundsrect)
- [\_cacheAsBitmap](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapresolution)
- [\_cacheData](components_ClusterNodeContainer._internal_.Container.md#_cachedata)
- [\_destroyed](components_ClusterNodeContainer._internal_.Container.md#_destroyed)
- [\_enabledFilters](components_ClusterNodeContainer._internal_.Container.md#_enabledfilters)
- [\_height](components_ClusterNodeContainer._internal_.Container.md#_height)
- [\_lastSortedIndex](components_ClusterNodeContainer._internal_.Container.md#_lastsortedindex)
- [\_localBounds](components_ClusterNodeContainer._internal_.Container.md#_localbounds)
- [\_localBoundsRect](components_ClusterNodeContainer._internal_.Container.md#_localboundsrect)
- [\_mask](components_ClusterNodeContainer._internal_.Container.md#_mask)
- [\_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.Container.md#_prevyogalayouthash)
- [\_trackedPointers](components_ClusterNodeContainer._internal_.Container.md#_trackedpointers)
- [\_visible](components_ClusterNodeContainer._internal_.Container.md#_visible)
- [\_width](components_ClusterNodeContainer._internal_.Container.md#_width)
- [\_yogaLayoutHash](components_ClusterNodeContainer._internal_.Container.md#_yogalayouthash)
- [\_zIndex](components_ClusterNodeContainer._internal_.Container.md#_zindex)
- [accessible](components_ClusterNodeContainer._internal_.Container.md#accessible)
- [accessibleChildren](components_ClusterNodeContainer._internal_.Container.md#accessiblechildren)
- [accessibleHint](components_ClusterNodeContainer._internal_.Container.md#accessiblehint)
- [accessiblePointerEvents](components_ClusterNodeContainer._internal_.Container.md#accessiblepointerevents)
- [accessibleTitle](components_ClusterNodeContainer._internal_.Container.md#accessibletitle)
- [accessibleType](components_ClusterNodeContainer._internal_.Container.md#accessibletype)
- [alpha](components_ClusterNodeContainer._internal_.Container.md#alpha)
- [buttonMode](components_ClusterNodeContainer._internal_.Container.md#buttonmode)
- [cacheAsBitmap](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Container.md#cacheasbitmapresolution)
- [children](components_ClusterNodeContainer._internal_.Container.md#children)
- [containerUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#containerupdatetransform)
- [cursor](components_ClusterNodeContainer._internal_.Container.md#cursor)
- [displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#displayobjectupdatetransform)
- [filterArea](components_ClusterNodeContainer._internal_.Container.md#filterarea)
- [filters](components_ClusterNodeContainer._internal_.Container.md#filters)
- [flex](components_ClusterNodeContainer._internal_.Container.md#flex)
- [hitArea](components_ClusterNodeContainer._internal_.Container.md#hitarea)
- [interactive](components_ClusterNodeContainer._internal_.Container.md#interactive)
- [interactiveChildren](components_ClusterNodeContainer._internal_.Container.md#interactivechildren)
- [isMask](components_ClusterNodeContainer._internal_.Container.md#ismask)
- [isSprite](components_ClusterNodeContainer._internal_.Container.md#issprite)
- [name](components_ClusterNodeContainer._internal_.Container.md#name)
- [parent](components_ClusterNodeContainer._internal_.Container.md#parent)
- [renderId](components_ClusterNodeContainer._internal_.Container.md#renderid)
- [renderable](components_ClusterNodeContainer._internal_.Container.md#renderable)
- [sortDirty](components_ClusterNodeContainer._internal_.Container.md#sortdirty)
- [sortableChildren](components_ClusterNodeContainer._internal_.Container.md#sortablechildren)
- [tabIndex](components_ClusterNodeContainer._internal_.Container.md#tabindex)
- [trackedPointers](components_ClusterNodeContainer._internal_.Container.md#trackedpointers)
- [transform](components_ClusterNodeContainer._internal_.Container.md#transform)
- [visible](components_ClusterNodeContainer._internal_.Container.md#visible)
- [worldAlpha](components_ClusterNodeContainer._internal_.Container.md#worldalpha)
- [yoga](components_ClusterNodeContainer._internal_.Container.md#yoga)
- [prefixed](components_ClusterNodeContainer._internal_.Container.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_ClusterNodeContainer._internal_.Container.md#_tempdisplayobjectparent)
- [angle](components_ClusterNodeContainer._internal_.Container.md#angle)
- [destroyed](components_ClusterNodeContainer._internal_.Container.md#destroyed)
- [height](components_ClusterNodeContainer._internal_.Container.md#height)
- [localTransform](components_ClusterNodeContainer._internal_.Container.md#localtransform)
- [mask](components_ClusterNodeContainer._internal_.Container.md#mask)
- [pivot](components_ClusterNodeContainer._internal_.Container.md#pivot)
- [position](components_ClusterNodeContainer._internal_.Container.md#position)
- [rotation](components_ClusterNodeContainer._internal_.Container.md#rotation)
- [scale](components_ClusterNodeContainer._internal_.Container.md#scale)
- [skew](components_ClusterNodeContainer._internal_.Container.md#skew)
- [width](components_ClusterNodeContainer._internal_.Container.md#width)
- [worldTransform](components_ClusterNodeContainer._internal_.Container.md#worldtransform)
- [worldVisible](components_ClusterNodeContainer._internal_.Container.md#worldvisible)
- [x](components_ClusterNodeContainer._internal_.Container.md#x)
- [y](components_ClusterNodeContainer._internal_.Container.md#y)
- [zIndex](components_ClusterNodeContainer._internal_.Container.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.Container.md#_cacheasbitmapdestroy)
- [\_calculateBounds](components_ClusterNodeContainer._internal_.Container.md#_calculatebounds)
- [\_calculateCachedBounds](components_ClusterNodeContainer._internal_.Container.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.Container.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_ClusterNodeContainer._internal_.Container.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_ClusterNodeContainer._internal_.Container.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.Container.md#_initcacheddisplayobjectcanvas)
- [\_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.Container.md#_recursivepostupdatetransform)
- [\_render](components_ClusterNodeContainer._internal_.Container.md#_render)
- [\_renderCached](components_ClusterNodeContainer._internal_.Container.md#_rendercached)
- [\_renderCachedCanvas](components_ClusterNodeContainer._internal_.Container.md#_rendercachedcanvas)
- [addChild](components_ClusterNodeContainer._internal_.Container.md#addchild)
- [addChildAt](components_ClusterNodeContainer._internal_.Container.md#addchildat)
- [addListener](components_ClusterNodeContainer._internal_.Container.md#addlistener)
- [calculateBounds](components_ClusterNodeContainer._internal_.Container.md#calculatebounds)
- [checkIfBoundingBoxChanged](components_ClusterNodeContainer._internal_.Container.md#checkifboundingboxchanged)
- [destroy](components_ClusterNodeContainer._internal_.Container.md#destroy)
- [disableTempParent](components_ClusterNodeContainer._internal_.Container.md#disabletempparent)
- [emit](components_ClusterNodeContainer._internal_.Container.md#emit)
- [enableTempParent](components_ClusterNodeContainer._internal_.Container.md#enabletempparent)
- [eventNames](components_ClusterNodeContainer._internal_.Container.md#eventnames)
- [getBounds](components_ClusterNodeContainer._internal_.Container.md#getbounds)
- [getChildAt](components_ClusterNodeContainer._internal_.Container.md#getchildat)
- [getChildByName](components_ClusterNodeContainer._internal_.Container.md#getchildbyname)
- [getChildIndex](components_ClusterNodeContainer._internal_.Container.md#getchildindex)
- [getGlobalPosition](components_ClusterNodeContainer._internal_.Container.md#getglobalposition)
- [getLocalBounds](components_ClusterNodeContainer._internal_.Container.md#getlocalbounds)
- [listenerCount](components_ClusterNodeContainer._internal_.Container.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.Container.md#listeners)
- [off](components_ClusterNodeContainer._internal_.Container.md#off)
- [on](components_ClusterNodeContainer._internal_.Container.md#on)
- [onChildrenChange](components_ClusterNodeContainer._internal_.Container.md#onchildrenchange)
- [once](components_ClusterNodeContainer._internal_.Container.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.Container.md#removealllisteners)
- [removeChild](components_ClusterNodeContainer._internal_.Container.md#removechild)
- [removeChildAt](components_ClusterNodeContainer._internal_.Container.md#removechildat)
- [removeChildren](components_ClusterNodeContainer._internal_.Container.md#removechildren)
- [removeListener](components_ClusterNodeContainer._internal_.Container.md#removelistener)
- [render](components_ClusterNodeContainer._internal_.Container.md#render)
- [renderAdvanced](components_ClusterNodeContainer._internal_.Container.md#renderadvanced)
- [setChildIndex](components_ClusterNodeContainer._internal_.Container.md#setchildindex)
- [setParent](components_ClusterNodeContainer._internal_.Container.md#setparent)
- [setTransform](components_ClusterNodeContainer._internal_.Container.md#settransform)
- [sortChildren](components_ClusterNodeContainer._internal_.Container.md#sortchildren)
- [swapChildren](components_ClusterNodeContainer._internal_.Container.md#swapchildren)
- [toGlobal](components_ClusterNodeContainer._internal_.Container.md#toglobal)
- [toLocal](components_ClusterNodeContainer._internal_.Container.md#tolocal)
- [updateTransform](components_ClusterNodeContainer._internal_.Container.md#updatetransform)
- [updateYogaLayout](components_ClusterNodeContainer._internal_.Container.md#updateyogalayout)
- [mixin](components_ClusterNodeContainer._internal_.Container.md#mixin)

## Constructors

### constructor

• **new Container**()

#### Inherited from

GlobalMixins.Container.constructor

#### Defined in

node_modules/@pixi/display/index.d.ts:214

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

### \_height

• `Protected` **\_height**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:213

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

### \_width

• `Protected` **\_width**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:212

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

### children

• `Readonly` **children**: `DisplayObject`[]

#### Defined in

node_modules/@pixi/display/index.d.ts:207

___

### containerUpdateTransform

• **containerUpdateTransform**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:211

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

node_modules/@pixi/display/index.d.ts:210

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

#### Inherited from

DisplayObject.sortDirty

#### Defined in

node_modules/@pixi/display/index.d.ts:209

___

### sortableChildren

• **sortableChildren**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:208

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

### height

• `get` **height**(): `number`

The height of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Returns

`number`

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

#### Defined in

node_modules/@pixi/display/index.d.ts:386

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

### width

• `get` **width**(): `number`

The width of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Returns

`number`

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

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Recalculates the content bounds of this object. This should be overriden to
calculate the bounds of this specific object (not including children).

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:321

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

### \_render

▸ `Protected` **_render**(`_renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:358

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

#### Defined in

node_modules/@pixi/display/index.d.ts:237

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

This implementation will automatically fit the children's bounds into the calculation. Each child's bounds
is limited to its mask's bounds or filterArea, if any is applied.

#### Returns

`void`

#### Inherited from

DisplayObject.calculateBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:302

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

▸ **destroy**(`options?`): `void`

Removes all internal references and listeners as well as removes children from the display list.
Do not use a Container after calling `destroy`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) |

#### Returns

`void`

#### Inherited from

DisplayObject.destroy

#### Defined in

node_modules/@pixi/display/index.d.ts:372

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

GlobalMixins.Container.getChildByName

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

DisplayObject.getGlobalPosition

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

DisplayObject.getLocalBounds

#### Defined in

node_modules/@pixi/display/index.d.ts:314

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.on

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

#### Defined in

node_modules/@pixi/display/index.d.ts:220

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.removeAllListeners

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

DisplayObject.removeChild

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

#### Defined in

node_modules/@pixi/display/index.d.ts:287

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

DisplayObject.removeListener

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

DisplayObject.render

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

#### Defined in

node_modules/@pixi/display/index.d.ts:258

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

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): [`Container`](components_ClusterNodeContainer._internal_.Container.md)

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

[`Container`](components_ClusterNodeContainer._internal_.Container.md)

The DisplayObject instance

#### Inherited from

DisplayObject.setTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:743

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex.

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:291

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

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

DisplayObject.updateTransform

#### Defined in

node_modules/@pixi/display/index.d.ts:295

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

#### Defined in

node_modules/@pixi/display/index.d.ts:610
