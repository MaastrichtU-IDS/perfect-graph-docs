[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Sprite

# Class: Sprite

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Sprite

The Sprite object is the base for all textured objects that are rendered to the screen

A sprite can be created directly from an image like this:

```js
let sprite = PIXI.Sprite.from('assets/image.png');
```

The more efficient way to create sprites is using a {@link PIXI.Spritesheet},
as swapping base textures when rendering to the screen is inefficient.

```js
PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);

function setup() {
  let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
  let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
  ...
}
```

**`memberof`** PIXI

## Hierarchy

- [`Sprite`](../interfaces/components_ClusterNodeContainer._internal_.Sprite-1.md)

- [`Container`](components_ClusterNodeContainer._internal_.Container.md)

  ↳ **`Sprite`**

  ↳↳ [`Text_2`](components_Text._internal_.Text_2.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Sprite.md#constructor)

### Properties

- [\_\_hasYoga](components_ClusterNodeContainer._internal_.Sprite.md#__hasyoga)
- [\_\_yoga](components_ClusterNodeContainer._internal_.Sprite.md#__yoga)
- [\_accessibleActive](components_ClusterNodeContainer._internal_.Sprite.md#_accessibleactive)
- [\_accessibleDiv](components_ClusterNodeContainer._internal_.Sprite.md#_accessiblediv)
- [\_anchor](components_ClusterNodeContainer._internal_.Sprite.md#_anchor)
- [\_bounds](components_ClusterNodeContainer._internal_.Sprite.md#_bounds)
- [\_boundsID](components_ClusterNodeContainer._internal_.Sprite.md#_boundsid)
- [\_boundsRect](components_ClusterNodeContainer._internal_.Sprite.md#_boundsrect)
- [\_cacheAsBitmap](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapresolution)
- [\_cacheData](components_ClusterNodeContainer._internal_.Sprite.md#_cachedata)
- [\_cachedTint](components_ClusterNodeContainer._internal_.Sprite.md#_cachedtint)
- [\_destroyed](components_ClusterNodeContainer._internal_.Sprite.md#_destroyed)
- [\_enabledFilters](components_ClusterNodeContainer._internal_.Sprite.md#_enabledfilters)
- [\_height](components_ClusterNodeContainer._internal_.Sprite.md#_height)
- [\_lastSortedIndex](components_ClusterNodeContainer._internal_.Sprite.md#_lastsortedindex)
- [\_localBounds](components_ClusterNodeContainer._internal_.Sprite.md#_localbounds)
- [\_localBoundsRect](components_ClusterNodeContainer._internal_.Sprite.md#_localboundsrect)
- [\_mask](components_ClusterNodeContainer._internal_.Sprite.md#_mask)
- [\_onAnchorUpdate](components_ClusterNodeContainer._internal_.Sprite.md#_onanchorupdate)
- [\_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.Sprite.md#_prevyogalayouthash)
- [\_roundPixels](components_ClusterNodeContainer._internal_.Sprite.md#_roundpixels)
- [\_texture](components_ClusterNodeContainer._internal_.Sprite.md#_texture)
- [\_textureID](components_ClusterNodeContainer._internal_.Sprite.md#_textureid)
- [\_textureTrimmedID](components_ClusterNodeContainer._internal_.Sprite.md#_texturetrimmedid)
- [\_tint](components_ClusterNodeContainer._internal_.Sprite.md#_tint)
- [\_tintRGB](components_ClusterNodeContainer._internal_.Sprite.md#_tintrgb)
- [\_trackedPointers](components_ClusterNodeContainer._internal_.Sprite.md#_trackedpointers)
- [\_transformID](components_ClusterNodeContainer._internal_.Sprite.md#_transformid)
- [\_transformTrimmedID](components_ClusterNodeContainer._internal_.Sprite.md#_transformtrimmedid)
- [\_visible](components_ClusterNodeContainer._internal_.Sprite.md#_visible)
- [\_width](components_ClusterNodeContainer._internal_.Sprite.md#_width)
- [\_yogaLayoutHash](components_ClusterNodeContainer._internal_.Sprite.md#_yogalayouthash)
- [\_zIndex](components_ClusterNodeContainer._internal_.Sprite.md#_zindex)
- [accessible](components_ClusterNodeContainer._internal_.Sprite.md#accessible)
- [accessibleChildren](components_ClusterNodeContainer._internal_.Sprite.md#accessiblechildren)
- [accessibleHint](components_ClusterNodeContainer._internal_.Sprite.md#accessiblehint)
- [accessiblePointerEvents](components_ClusterNodeContainer._internal_.Sprite.md#accessiblepointerevents)
- [accessibleTitle](components_ClusterNodeContainer._internal_.Sprite.md#accessibletitle)
- [accessibleType](components_ClusterNodeContainer._internal_.Sprite.md#accessibletype)
- [alpha](components_ClusterNodeContainer._internal_.Sprite.md#alpha)
- [blendMode](components_ClusterNodeContainer._internal_.Sprite.md#blendmode)
- [buttonMode](components_ClusterNodeContainer._internal_.Sprite.md#buttonmode)
- [cacheAsBitmap](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmapresolution)
- [children](components_ClusterNodeContainer._internal_.Sprite.md#children)
- [containerUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#containerupdatetransform)
- [cursor](components_ClusterNodeContainer._internal_.Sprite.md#cursor)
- [displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#displayobjectupdatetransform)
- [filterArea](components_ClusterNodeContainer._internal_.Sprite.md#filterarea)
- [filters](components_ClusterNodeContainer._internal_.Sprite.md#filters)
- [flex](components_ClusterNodeContainer._internal_.Sprite.md#flex)
- [hitArea](components_ClusterNodeContainer._internal_.Sprite.md#hitarea)
- [indices](components_ClusterNodeContainer._internal_.Sprite.md#indices)
- [interactive](components_ClusterNodeContainer._internal_.Sprite.md#interactive)
- [interactiveChildren](components_ClusterNodeContainer._internal_.Sprite.md#interactivechildren)
- [isMask](components_ClusterNodeContainer._internal_.Sprite.md#ismask)
- [isSprite](components_ClusterNodeContainer._internal_.Sprite.md#issprite)
- [name](components_ClusterNodeContainer._internal_.Sprite.md#name)
- [parent](components_ClusterNodeContainer._internal_.Sprite.md#parent)
- [pluginName](components_ClusterNodeContainer._internal_.Sprite.md#pluginname)
- [renderId](components_ClusterNodeContainer._internal_.Sprite.md#renderid)
- [renderable](components_ClusterNodeContainer._internal_.Sprite.md#renderable)
- [sortDirty](components_ClusterNodeContainer._internal_.Sprite.md#sortdirty)
- [sortableChildren](components_ClusterNodeContainer._internal_.Sprite.md#sortablechildren)
- [tabIndex](components_ClusterNodeContainer._internal_.Sprite.md#tabindex)
- [trackedPointers](components_ClusterNodeContainer._internal_.Sprite.md#trackedpointers)
- [transform](components_ClusterNodeContainer._internal_.Sprite.md#transform)
- [uvs](components_ClusterNodeContainer._internal_.Sprite.md#uvs)
- [vertexData](components_ClusterNodeContainer._internal_.Sprite.md#vertexdata)
- [vertexTrimmedData](components_ClusterNodeContainer._internal_.Sprite.md#vertextrimmeddata)
- [visible](components_ClusterNodeContainer._internal_.Sprite.md#visible)
- [worldAlpha](components_ClusterNodeContainer._internal_.Sprite.md#worldalpha)
- [yoga](components_ClusterNodeContainer._internal_.Sprite.md#yoga)
- [prefixed](components_ClusterNodeContainer._internal_.Sprite.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_ClusterNodeContainer._internal_.Sprite.md#_tempdisplayobjectparent)
- [anchor](components_ClusterNodeContainer._internal_.Sprite.md#anchor)
- [angle](components_ClusterNodeContainer._internal_.Sprite.md#angle)
- [destroyed](components_ClusterNodeContainer._internal_.Sprite.md#destroyed)
- [height](components_ClusterNodeContainer._internal_.Sprite.md#height)
- [localTransform](components_ClusterNodeContainer._internal_.Sprite.md#localtransform)
- [mask](components_ClusterNodeContainer._internal_.Sprite.md#mask)
- [pivot](components_ClusterNodeContainer._internal_.Sprite.md#pivot)
- [position](components_ClusterNodeContainer._internal_.Sprite.md#position)
- [rotation](components_ClusterNodeContainer._internal_.Sprite.md#rotation)
- [roundPixels](components_ClusterNodeContainer._internal_.Sprite.md#roundpixels)
- [scale](components_ClusterNodeContainer._internal_.Sprite.md#scale)
- [skew](components_ClusterNodeContainer._internal_.Sprite.md#skew)
- [texture](components_ClusterNodeContainer._internal_.Sprite.md#texture)
- [tint](components_ClusterNodeContainer._internal_.Sprite.md#tint)
- [width](components_ClusterNodeContainer._internal_.Sprite.md#width)
- [worldTransform](components_ClusterNodeContainer._internal_.Sprite.md#worldtransform)
- [worldVisible](components_ClusterNodeContainer._internal_.Sprite.md#worldvisible)
- [x](components_ClusterNodeContainer._internal_.Sprite.md#x)
- [y](components_ClusterNodeContainer._internal_.Sprite.md#y)
- [zIndex](components_ClusterNodeContainer._internal_.Sprite.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapdestroy)
- [\_calculateBounds](components_ClusterNodeContainer._internal_.Sprite.md#_calculatebounds)
- [\_calculateCachedBounds](components_ClusterNodeContainer._internal_.Sprite.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.Sprite.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_ClusterNodeContainer._internal_.Sprite.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_ClusterNodeContainer._internal_.Sprite.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.Sprite.md#_initcacheddisplayobjectcanvas)
- [\_onTextureUpdate](components_ClusterNodeContainer._internal_.Sprite.md#_ontextureupdate)
- [\_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#_recursivepostupdatetransform)
- [\_render](components_ClusterNodeContainer._internal_.Sprite.md#_render)
- [\_renderCached](components_ClusterNodeContainer._internal_.Sprite.md#_rendercached)
- [\_renderCachedCanvas](components_ClusterNodeContainer._internal_.Sprite.md#_rendercachedcanvas)
- [addChild](components_ClusterNodeContainer._internal_.Sprite.md#addchild)
- [addChildAt](components_ClusterNodeContainer._internal_.Sprite.md#addchildat)
- [addListener](components_ClusterNodeContainer._internal_.Sprite.md#addlistener)
- [calculateBounds](components_ClusterNodeContainer._internal_.Sprite.md#calculatebounds)
- [calculateTrimmedVertices](components_ClusterNodeContainer._internal_.Sprite.md#calculatetrimmedvertices)
- [calculateVertices](components_ClusterNodeContainer._internal_.Sprite.md#calculatevertices)
- [checkIfBoundingBoxChanged](components_ClusterNodeContainer._internal_.Sprite.md#checkifboundingboxchanged)
- [containsPoint](components_ClusterNodeContainer._internal_.Sprite.md#containspoint)
- [destroy](components_ClusterNodeContainer._internal_.Sprite.md#destroy)
- [disableTempParent](components_ClusterNodeContainer._internal_.Sprite.md#disabletempparent)
- [emit](components_ClusterNodeContainer._internal_.Sprite.md#emit)
- [enableTempParent](components_ClusterNodeContainer._internal_.Sprite.md#enabletempparent)
- [eventNames](components_ClusterNodeContainer._internal_.Sprite.md#eventnames)
- [getBounds](components_ClusterNodeContainer._internal_.Sprite.md#getbounds)
- [getChildAt](components_ClusterNodeContainer._internal_.Sprite.md#getchildat)
- [getChildByName](components_ClusterNodeContainer._internal_.Sprite.md#getchildbyname)
- [getChildIndex](components_ClusterNodeContainer._internal_.Sprite.md#getchildindex)
- [getGlobalPosition](components_ClusterNodeContainer._internal_.Sprite.md#getglobalposition)
- [getLocalBounds](components_ClusterNodeContainer._internal_.Sprite.md#getlocalbounds)
- [listenerCount](components_ClusterNodeContainer._internal_.Sprite.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.Sprite.md#listeners)
- [off](components_ClusterNodeContainer._internal_.Sprite.md#off)
- [on](components_ClusterNodeContainer._internal_.Sprite.md#on)
- [onChildrenChange](components_ClusterNodeContainer._internal_.Sprite.md#onchildrenchange)
- [once](components_ClusterNodeContainer._internal_.Sprite.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.Sprite.md#removealllisteners)
- [removeChild](components_ClusterNodeContainer._internal_.Sprite.md#removechild)
- [removeChildAt](components_ClusterNodeContainer._internal_.Sprite.md#removechildat)
- [removeChildren](components_ClusterNodeContainer._internal_.Sprite.md#removechildren)
- [removeListener](components_ClusterNodeContainer._internal_.Sprite.md#removelistener)
- [render](components_ClusterNodeContainer._internal_.Sprite.md#render)
- [renderAdvanced](components_ClusterNodeContainer._internal_.Sprite.md#renderadvanced)
- [setChildIndex](components_ClusterNodeContainer._internal_.Sprite.md#setchildindex)
- [setParent](components_ClusterNodeContainer._internal_.Sprite.md#setparent)
- [setTransform](components_ClusterNodeContainer._internal_.Sprite.md#settransform)
- [sortChildren](components_ClusterNodeContainer._internal_.Sprite.md#sortchildren)
- [swapChildren](components_ClusterNodeContainer._internal_.Sprite.md#swapchildren)
- [toGlobal](components_ClusterNodeContainer._internal_.Sprite.md#toglobal)
- [toLocal](components_ClusterNodeContainer._internal_.Sprite.md#tolocal)
- [updateTransform](components_ClusterNodeContainer._internal_.Sprite.md#updatetransform)
- [updateYogaLayout](components_ClusterNodeContainer._internal_.Sprite.md#updateyogalayout)
- [from](components_ClusterNodeContainer._internal_.Sprite.md#from)
- [mixin](components_ClusterNodeContainer._internal_.Sprite.md#mixin)

## Constructors

### constructor

• **new Sprite**(`texture?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture?` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | The texture for this sprite. |

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[constructor](components_ClusterNodeContainer._internal_.Container.md#constructor)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:142

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

### \_anchor

• `Protected` **\_anchor**: [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The anchor point defines the normalized coordinates
in the texture that map to the position of this
sprite.

By default, this is `(0,0)` (or `texture.defaultAnchor`
if you have modified that), which means the position
`(x,y)` of this `Sprite` will be the top-left corner.

Note: Updating `texture.defaultAnchor` after
constructing a `Sprite` does _not_ update its anchor.

[https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html](https://docs.cocos2d-x.org/cocos2d-x/en/sprites/manipulation.html)

**`default`** `this.texture.defaultAnchor`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:107

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

### \_cachedTint

• `Protected` **\_cachedTint**: `number`

Cached tint value so we can tell when the tint is changed.
Value is used for 2d CanvasRenderer.

**`default`** 0xFFFFFF

#### Defined in

node_modules/@pixi/sprite/index.d.ts:82

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

### \_height

• `Protected` **\_height**: `number`

The height of the sprite (this is initially set by the texture)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_height](components_ClusterNodeContainer._internal_.Container.md#_height)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:67

___

### \_lastSortedIndex

• **\_lastSortedIndex**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_lastSortedIndex](components_ClusterNodeContainer._internal_.Container.md#_lastsortedindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:592

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

### \_onAnchorUpdate

• `Private` **\_onAnchorUpdate**: `any`

Called when the anchor position updates.

#### Defined in

node_modules/@pixi/sprite/index.d.ts:146

___

### \_prevYogaLayoutHash

• **\_prevYogaLayoutHash**: `number`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.Container.md#_prevyogalayouthash)

#### Defined in

[src/type/index.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L43)

___

### \_roundPixels

• `Private` **\_roundPixels**: `any`

Internal roundPixels field

#### Defined in

node_modules/@pixi/sprite/index.d.ts:125

___

### \_texture

• `Private` **\_texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture that the sprite is using.

#### Defined in

node_modules/@pixi/sprite/index.d.ts:73

___

### \_textureID

• **\_textureID**: `number`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:74

___

### \_textureTrimmedID

• `Protected` **\_textureTrimmedID**: `number`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:83

___

### \_tint

• `Private` **\_tint**: `any`

The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.

**`default`** 0xFFFFFF

#### Defined in

node_modules/@pixi/sprite/index.d.ts:133

___

### \_tintRGB

• `Private` **\_tintRGB**: `number`

The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.

**`default`** 16777215

#### Defined in

node_modules/@pixi/sprite/index.d.ts:140

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

• `Private` **\_transformID**: `any`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:126

___

### \_transformTrimmedID

• `Private` **\_transformTrimmedID**: `any`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:127

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

The width of the sprite (this is initially set by the texture).

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_width](components_ClusterNodeContainer._internal_.Container.md#_width)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:61

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

### blendMode

• **blendMode**: [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`default`** PIXI.BLEND_MODES.NORMAL

#### Defined in

node_modules/@pixi/sprite/index.d.ts:47

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

### indices

• **indices**: `Uint16Array`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:48

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

Plugin that is responsible for rendering this element.
Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.

**`default`** 'batch'

#### Defined in

node_modules/@pixi/sprite/index.d.ts:55

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

### uvs

• `Protected` **uvs**: `Float32Array`

This is used to store the uvs data of the sprite, assigned at the same time
as the vertexData in calculateVertices().

**`member`** {Float32Array}

#### Defined in

node_modules/@pixi/sprite/index.d.ts:90

___

### vertexData

• `Protected` **vertexData**: `Float32Array`

This is used to store the vertex data of the sprite (basically a quad).

**`member`** {Float32Array}

#### Defined in

node_modules/@pixi/sprite/index.d.ts:113

___

### vertexTrimmedData

• `Private` **vertexTrimmedData**: `any`

This is used to calculate the bounds of the object IF it is a trimmed sprite.

**`member`** {Float32Array}

#### Defined in

node_modules/@pixi/sprite/index.d.ts:119

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

### anchor

• `get` **anchor**(): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
and passed to the constructor.

The default is `(0,0)`, this means the sprite's origin is the top left.

Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.

Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.

If you pass only single parameter, it will set both x and y to the same value as shown in the example below.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

#### Defined in

node_modules/@pixi/sprite/index.d.ts:232

• `set` **anchor**(`value`): `void`

The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
and passed to the constructor.

The default is `(0,0)`, this means the sprite's origin is the top left.

Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.

Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.

If you pass only single parameter, it will set both x and y to the same value as shown in the example below.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\> |

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:233

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

### height

• `get` **height**(): `number`

The height of the sprite, setting this will actually modify the scale to achieve the value set.

#### Returns

`number`

#### Inherited from

Container.height

#### Defined in

node_modules/@pixi/sprite/index.d.ts:214

• `set` **height**(`value`): `void`

The height of the sprite, setting this will actually modify the scale to achieve the value set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.height

#### Defined in

node_modules/@pixi/sprite/index.d.ts:215

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

### roundPixels

• `get` **roundPixels**(): `boolean`

If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.

Advantages can include sharper image quality (like text) and faster rendering on canvas.
The main disadvantage is movement of objects may appear less smooth.

To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.

**`default`** false

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:209

• `set` **roundPixels**(`value`): `void`

If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.

Advantages can include sharper image quality (like text) and faster rendering on canvas.
The main disadvantage is movement of objects may appear less smooth.

To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.

**`default`** false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:208

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

### texture

• `get` **texture**(): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture that the sprite is using.

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

#### Defined in

node_modules/@pixi/sprite/index.d.ts:244

• `set` **texture**(`value`): `void`

The texture that the sprite is using.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:245

___

### tint

• `get` **tint**(): `number`

The tint applied to the sprite. This is a hex value.

A value of 0xFFFFFF will remove any tint effect.

**`default`** 0xFFFFFF

#### Returns

`number`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:241

• `set` **tint**(`value`): `void`

The tint applied to the sprite. This is a hex value.

A value of 0xFFFFFF will remove any tint effect.

**`default`** 0xFFFFFF

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:242

___

### width

• `get` **width**(): `number`

The width of the sprite, setting this will actually modify the scale to achieve the value set.

#### Returns

`number`

#### Inherited from

Container.width

#### Defined in

node_modules/@pixi/sprite/index.d.ts:211

• `set` **width**(`value`): `void`

The width of the sprite, setting this will actually modify the scale to achieve the value set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Container.width

#### Defined in

node_modules/@pixi/sprite/index.d.ts:212

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

Updates the bounds of the sprite.

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_calculateBounds](components_ClusterNodeContainer._internal_.Container.md#_calculatebounds)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:163

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

### \_onTextureUpdate

▸ `Protected` **_onTextureUpdate**(): `void`

When the texture is updated, this event will fire to update the scale and frame.

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:144

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
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The webgl renderer to use. |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[_render](components_ClusterNodeContainer._internal_.Container.md#_render)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:161

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

▸ **addListener**(`event`, `fn`, `context?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[addListener](components_ClusterNodeContainer._internal_.Container.md#addlistener)

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

[Container](components_ClusterNodeContainer._internal_.Container.md).[calculateBounds](components_ClusterNodeContainer._internal_.Container.md#calculatebounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:302

___

### calculateTrimmedVertices

▸ **calculateTrimmedVertices**(): `void`

Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.

This is used to ensure that the true width and height of a trimmed texture is respected.

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:154

___

### calculateVertices

▸ **calculateVertices**(): `void`

Calculates worldTransform * vertices, store it in vertexData.

#### Returns

`void`

#### Defined in

node_modules/@pixi/sprite/index.d.ts:148

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

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Tests if a point is inside this sprite

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | the point to test |

#### Returns

`boolean`

The result of the test

#### Defined in

node_modules/@pixi/sprite/index.d.ts:177

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys this sprite and optionally its texture and children.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) | Options parameter. A boolean will act as if all options  have been set to that value |

#### Returns

`void`

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[destroy](components_ClusterNodeContainer._internal_.Container.md#destroy)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:188

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

▸ **getLocalBounds**(`rect?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Gets the local bounds of the sprite object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | Optional output rectangle. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The bounds.

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[getLocalBounds](components_ClusterNodeContainer._internal_.Container.md#getlocalbounds)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:170

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

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[off](components_ClusterNodeContainer._internal_.Container.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

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

▸ **once**(`event`, `fn`, `context?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

#### Inherited from

[Container](components_ClusterNodeContainer._internal_.Container.md).[once](components_ClusterNodeContainer._internal_.Container.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

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

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

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

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

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

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

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

### from

▸ `Static` **from**(`source`, `options?`): [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

Helper function that creates a new sprite based on the source you provide.
The source can be - frame id, image url, video url, canvas element, video element, base texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`SpriteSource`](../modules/components_ClusterNodeContainer._internal_.md#spritesource) | Source to create texture from |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> | - |

#### Returns

[`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

The newly created sprite

#### Defined in

node_modules/@pixi/sprite/index.d.ts:197

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