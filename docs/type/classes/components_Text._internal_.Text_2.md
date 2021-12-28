[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / Text\_2

# Class: Text\_2

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).Text_2

A Text Object will create a line or multiple lines of text.

The text is created using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

The primary advantage of this class over BitmapText is that you have great control over the style of the text,
which you can change at runtime.

The primary disadvantages is that each piece of text has it's own texture, which can use more memory.
When text changes, this texture has to be re-generated and re-uploaded to the GPU, taking up time.

To split a line you can use '\n' in your text string, or, on the `style` object,
change its `wordWrap` property to true and and give the `wordWrapWidth` property a value.

A Text can be created directly from a string and a style object,
which can be generated [here](https://pixijs.io/pixi-text-style).

```js
let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
```

**`memberof`** PIXI

## Hierarchy

- [`Sprite`](components_ClusterNodeContainer._internal_.Sprite.md)

  ↳ **`Text_2`**

## Table of contents

### Constructors

- [constructor](components_Text._internal_.Text_2.md#constructor)

### Properties

- [\_\_hasYoga](components_Text._internal_.Text_2.md#__hasyoga)
- [\_\_yoga](components_Text._internal_.Text_2.md#__yoga)
- [\_accessibleActive](components_Text._internal_.Text_2.md#_accessibleactive)
- [\_accessibleDiv](components_Text._internal_.Text_2.md#_accessiblediv)
- [\_anchor](components_Text._internal_.Text_2.md#_anchor)
- [\_autoResolution](components_Text._internal_.Text_2.md#_autoresolution)
- [\_bounds](components_Text._internal_.Text_2.md#_bounds)
- [\_boundsID](components_Text._internal_.Text_2.md#_boundsid)
- [\_boundsRect](components_Text._internal_.Text_2.md#_boundsrect)
- [\_cacheAsBitmap](components_Text._internal_.Text_2.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_Text._internal_.Text_2.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_Text._internal_.Text_2.md#_cacheasbitmapresolution)
- [\_cacheData](components_Text._internal_.Text_2.md#_cachedata)
- [\_cachedTint](components_Text._internal_.Text_2.md#_cachedtint)
- [\_destroyed](components_Text._internal_.Text_2.md#_destroyed)
- [\_enabledFilters](components_Text._internal_.Text_2.md#_enabledfilters)
- [\_font](components_Text._internal_.Text_2.md#_font)
- [\_generateFillStyle](components_Text._internal_.Text_2.md#_generatefillstyle)
- [\_height](components_Text._internal_.Text_2.md#_height)
- [\_lastSortedIndex](components_Text._internal_.Text_2.md#_lastsortedindex)
- [\_localBounds](components_Text._internal_.Text_2.md#_localbounds)
- [\_localBoundsRect](components_Text._internal_.Text_2.md#_localboundsrect)
- [\_mask](components_Text._internal_.Text_2.md#_mask)
- [\_ownCanvas](components_Text._internal_.Text_2.md#_owncanvas)
- [\_prevYogaLayoutHash](components_Text._internal_.Text_2.md#_prevyogalayouthash)
- [\_resolution](components_Text._internal_.Text_2.md#_resolution)
- [\_style](components_Text._internal_.Text_2.md#_style)
- [\_styleListener](components_Text._internal_.Text_2.md#_stylelistener)
- [\_text](components_Text._internal_.Text_2.md#_text)
- [\_texture](components_Text._internal_.Text_2.md#_texture)
- [\_textureID](components_Text._internal_.Text_2.md#_textureid)
- [\_textureTrimmedID](components_Text._internal_.Text_2.md#_texturetrimmedid)
- [\_tintRGB](components_Text._internal_.Text_2.md#_tintrgb)
- [\_trackedPointers](components_Text._internal_.Text_2.md#_trackedpointers)
- [\_visible](components_Text._internal_.Text_2.md#_visible)
- [\_width](components_Text._internal_.Text_2.md#_width)
- [\_yogaLayoutHash](components_Text._internal_.Text_2.md#_yogalayouthash)
- [\_zIndex](components_Text._internal_.Text_2.md#_zindex)
- [accessible](components_Text._internal_.Text_2.md#accessible)
- [accessibleChildren](components_Text._internal_.Text_2.md#accessiblechildren)
- [accessibleHint](components_Text._internal_.Text_2.md#accessiblehint)
- [accessiblePointerEvents](components_Text._internal_.Text_2.md#accessiblepointerevents)
- [accessibleTitle](components_Text._internal_.Text_2.md#accessibletitle)
- [accessibleType](components_Text._internal_.Text_2.md#accessibletype)
- [alpha](components_Text._internal_.Text_2.md#alpha)
- [blendMode](components_Text._internal_.Text_2.md#blendmode)
- [buttonMode](components_Text._internal_.Text_2.md#buttonmode)
- [cacheAsBitmap](components_Text._internal_.Text_2.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_Text._internal_.Text_2.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_Text._internal_.Text_2.md#cacheasbitmapresolution)
- [canvas](components_Text._internal_.Text_2.md#canvas)
- [children](components_Text._internal_.Text_2.md#children)
- [containerUpdateTransform](components_Text._internal_.Text_2.md#containerupdatetransform)
- [context](components_Text._internal_.Text_2.md#context)
- [cursor](components_Text._internal_.Text_2.md#cursor)
- [dirty](components_Text._internal_.Text_2.md#dirty)
- [displayObjectUpdateTransform](components_Text._internal_.Text_2.md#displayobjectupdatetransform)
- [drawLetterSpacing](components_Text._internal_.Text_2.md#drawletterspacing)
- [filterArea](components_Text._internal_.Text_2.md#filterarea)
- [filters](components_Text._internal_.Text_2.md#filters)
- [flex](components_Text._internal_.Text_2.md#flex)
- [hitArea](components_Text._internal_.Text_2.md#hitarea)
- [indices](components_Text._internal_.Text_2.md#indices)
- [interactive](components_Text._internal_.Text_2.md#interactive)
- [interactiveChildren](components_Text._internal_.Text_2.md#interactivechildren)
- [isMask](components_Text._internal_.Text_2.md#ismask)
- [isSprite](components_Text._internal_.Text_2.md#issprite)
- [localStyleID](components_Text._internal_.Text_2.md#localstyleid)
- [name](components_Text._internal_.Text_2.md#name)
- [parent](components_Text._internal_.Text_2.md#parent)
- [pluginName](components_Text._internal_.Text_2.md#pluginname)
- [renderId](components_Text._internal_.Text_2.md#renderid)
- [renderable](components_Text._internal_.Text_2.md#renderable)
- [sortDirty](components_Text._internal_.Text_2.md#sortdirty)
- [sortableChildren](components_Text._internal_.Text_2.md#sortablechildren)
- [tabIndex](components_Text._internal_.Text_2.md#tabindex)
- [trackedPointers](components_Text._internal_.Text_2.md#trackedpointers)
- [transform](components_Text._internal_.Text_2.md#transform)
- [updateTexture](components_Text._internal_.Text_2.md#updatetexture)
- [uvs](components_Text._internal_.Text_2.md#uvs)
- [vertexData](components_Text._internal_.Text_2.md#vertexdata)
- [visible](components_Text._internal_.Text_2.md#visible)
- [worldAlpha](components_Text._internal_.Text_2.md#worldalpha)
- [yoga](components_Text._internal_.Text_2.md#yoga)
- [nextLineHeightBehavior](components_Text._internal_.Text_2.md#nextlineheightbehavior)
- [prefixed](components_Text._internal_.Text_2.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_Text._internal_.Text_2.md#_tempdisplayobjectparent)
- [anchor](components_Text._internal_.Text_2.md#anchor)
- [angle](components_Text._internal_.Text_2.md#angle)
- [destroyed](components_Text._internal_.Text_2.md#destroyed)
- [height](components_Text._internal_.Text_2.md#height)
- [localTransform](components_Text._internal_.Text_2.md#localtransform)
- [mask](components_Text._internal_.Text_2.md#mask)
- [pivot](components_Text._internal_.Text_2.md#pivot)
- [position](components_Text._internal_.Text_2.md#position)
- [resolution](components_Text._internal_.Text_2.md#resolution)
- [rotation](components_Text._internal_.Text_2.md#rotation)
- [roundPixels](components_Text._internal_.Text_2.md#roundpixels)
- [scale](components_Text._internal_.Text_2.md#scale)
- [skew](components_Text._internal_.Text_2.md#skew)
- [style](components_Text._internal_.Text_2.md#style)
- [text](components_Text._internal_.Text_2.md#text)
- [texture](components_Text._internal_.Text_2.md#texture)
- [tint](components_Text._internal_.Text_2.md#tint)
- [width](components_Text._internal_.Text_2.md#width)
- [worldTransform](components_Text._internal_.Text_2.md#worldtransform)
- [worldVisible](components_Text._internal_.Text_2.md#worldvisible)
- [x](components_Text._internal_.Text_2.md#x)
- [y](components_Text._internal_.Text_2.md#y)
- [zIndex](components_Text._internal_.Text_2.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_Text._internal_.Text_2.md#_cacheasbitmapdestroy)
- [\_calculateBounds](components_Text._internal_.Text_2.md#_calculatebounds)
- [\_calculateCachedBounds](components_Text._internal_.Text_2.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_Text._internal_.Text_2.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_Text._internal_.Text_2.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_Text._internal_.Text_2.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_Text._internal_.Text_2.md#_initcacheddisplayobjectcanvas)
- [\_onTextureUpdate](components_Text._internal_.Text_2.md#_ontextureupdate)
- [\_recursivePostUpdateTransform](components_Text._internal_.Text_2.md#_recursivepostupdatetransform)
- [\_render](components_Text._internal_.Text_2.md#_render)
- [\_renderCached](components_Text._internal_.Text_2.md#_rendercached)
- [\_renderCachedCanvas](components_Text._internal_.Text_2.md#_rendercachedcanvas)
- [addChild](components_Text._internal_.Text_2.md#addchild)
- [addChildAt](components_Text._internal_.Text_2.md#addchildat)
- [addListener](components_Text._internal_.Text_2.md#addlistener)
- [calculateBounds](components_Text._internal_.Text_2.md#calculatebounds)
- [calculateTrimmedVertices](components_Text._internal_.Text_2.md#calculatetrimmedvertices)
- [calculateVertices](components_Text._internal_.Text_2.md#calculatevertices)
- [checkIfBoundingBoxChanged](components_Text._internal_.Text_2.md#checkifboundingboxchanged)
- [containsPoint](components_Text._internal_.Text_2.md#containspoint)
- [destroy](components_Text._internal_.Text_2.md#destroy)
- [disableTempParent](components_Text._internal_.Text_2.md#disabletempparent)
- [emit](components_Text._internal_.Text_2.md#emit)
- [enableTempParent](components_Text._internal_.Text_2.md#enabletempparent)
- [eventNames](components_Text._internal_.Text_2.md#eventnames)
- [getBounds](components_Text._internal_.Text_2.md#getbounds)
- [getChildAt](components_Text._internal_.Text_2.md#getchildat)
- [getChildByName](components_Text._internal_.Text_2.md#getchildbyname)
- [getChildIndex](components_Text._internal_.Text_2.md#getchildindex)
- [getGlobalPosition](components_Text._internal_.Text_2.md#getglobalposition)
- [getLocalBounds](components_Text._internal_.Text_2.md#getlocalbounds)
- [listenerCount](components_Text._internal_.Text_2.md#listenercount)
- [listeners](components_Text._internal_.Text_2.md#listeners)
- [off](components_Text._internal_.Text_2.md#off)
- [on](components_Text._internal_.Text_2.md#on)
- [onChildrenChange](components_Text._internal_.Text_2.md#onchildrenchange)
- [once](components_Text._internal_.Text_2.md#once)
- [removeAllListeners](components_Text._internal_.Text_2.md#removealllisteners)
- [removeChild](components_Text._internal_.Text_2.md#removechild)
- [removeChildAt](components_Text._internal_.Text_2.md#removechildat)
- [removeChildren](components_Text._internal_.Text_2.md#removechildren)
- [removeListener](components_Text._internal_.Text_2.md#removelistener)
- [render](components_Text._internal_.Text_2.md#render)
- [renderAdvanced](components_Text._internal_.Text_2.md#renderadvanced)
- [setChildIndex](components_Text._internal_.Text_2.md#setchildindex)
- [setParent](components_Text._internal_.Text_2.md#setparent)
- [setTransform](components_Text._internal_.Text_2.md#settransform)
- [sortChildren](components_Text._internal_.Text_2.md#sortchildren)
- [swapChildren](components_Text._internal_.Text_2.md#swapchildren)
- [toGlobal](components_Text._internal_.Text_2.md#toglobal)
- [toLocal](components_Text._internal_.Text_2.md#tolocal)
- [updateText](components_Text._internal_.Text_2.md#updatetext)
- [updateTransform](components_Text._internal_.Text_2.md#updatetransform)
- [updateYogaLayout](components_Text._internal_.Text_2.md#updateyogalayout)
- [from](components_Text._internal_.Text_2.md#from)
- [mixin](components_Text._internal_.Text_2.md#mixin)

## Constructors

### constructor

• **new Text_2**(`text`, `style?`, `canvas?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The string that you would like the text to display |
| `style?` | [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md) \| [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\> | - |
| `canvas?` | `HTMLCanvasElement` | The canvas element for drawing text |

#### Overrides

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[constructor](components_ClusterNodeContainer._internal_.Sprite.md#constructor)

#### Defined in

node_modules/@pixi/text/index.d.ts:131

## Properties

### \_\_hasYoga

• **\_\_hasYoga**: `boolean`

Internal property for fast checking if object has yoga

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[__hasYoga](components_ClusterNodeContainer._internal_.Sprite.md#__hasyoga)

#### Defined in

[src/type/index.ts:27](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L27)

___

### \_\_yoga

• **\_\_yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[__yoga](components_ClusterNodeContainer._internal_.Sprite.md#__yoga)

#### Defined in

[src/type/index.ts:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L44)

___

### \_accessibleActive

• `Optional` **\_accessibleActive**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_accessibleActive](components_ClusterNodeContainer._internal_.Sprite.md#_accessibleactive)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:192

___

### \_accessibleDiv

• `Optional` **\_accessibleDiv**: [`IAccessibleHTMLElement`](../interfaces/components_ClusterNodeContainer._internal_.IAccessibleHTMLElement.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_accessibleDiv](components_ClusterNodeContainer._internal_.Sprite.md#_accessiblediv)

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

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_anchor](components_ClusterNodeContainer._internal_.Sprite.md#_anchor)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:107

___

### \_autoResolution

• **\_autoResolution**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:94

___

### \_bounds

• **\_bounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_bounds](components_ClusterNodeContainer._internal_.Sprite.md#_bounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:594

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_boundsID](components_ClusterNodeContainer._internal_.Sprite.md#_boundsid)

#### Defined in

node_modules/@pixi/display/index.d.ts:598

___

### \_boundsRect

• `Protected` **\_boundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_boundsRect](components_ClusterNodeContainer._internal_.Sprite.md#_boundsrect)

#### Defined in

node_modules/@pixi/display/index.d.ts:599

___

### \_cacheAsBitmap

• **\_cacheAsBitmap**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cacheAsBitmap](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmap)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:9

___

### \_cacheAsBitmapMultisample

• **\_cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapmultisample)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:8

___

### \_cacheAsBitmapResolution

• **\_cacheAsBitmapResolution**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapresolution)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:7

___

### \_cacheData

• **\_cacheData**: `CacheData`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cacheData](components_ClusterNodeContainer._internal_.Sprite.md#_cachedata)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:10

___

### \_cachedTint

• `Protected` **\_cachedTint**: `number`

Cached tint value so we can tell when the tint is changed.
Value is used for 2d CanvasRenderer.

**`default`** 0xFFFFFF

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cachedTint](components_ClusterNodeContainer._internal_.Sprite.md#_cachedtint)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:82

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_destroyed](components_ClusterNodeContainer._internal_.Sprite.md#_destroyed)

#### Defined in

node_modules/@pixi/display/index.d.ts:601

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_enabledFilters](components_ClusterNodeContainer._internal_.Sprite.md#_enabledfilters)

#### Defined in

node_modules/@pixi/display/index.d.ts:597

___

### \_font

• `Private` **\_font**: `string`

Private tracker for the current font.

#### Defined in

node_modules/@pixi/text/index.d.ts:106

___

### \_generateFillStyle

• `Private` **\_generateFillStyle**: `any`

Generates the fill style. Can automatically generate a gradient based on the fill style being an array

**`param`** The style.

**`param`** The lines of text.

**`returns`** The fill style

#### Defined in

node_modules/@pixi/text/index.d.ts:176

___

### \_height

• `Protected` **\_height**: `number`

The height of the sprite (this is initially set by the texture)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_height](components_ClusterNodeContainer._internal_.Sprite.md#_height)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:67

___

### \_lastSortedIndex

• **\_lastSortedIndex**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_lastSortedIndex](components_ClusterNodeContainer._internal_.Sprite.md#_lastsortedindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:592

___

### \_localBounds

• **\_localBounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_localBounds](components_ClusterNodeContainer._internal_.Sprite.md#_localbounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:595

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_localBoundsRect](components_ClusterNodeContainer._internal_.Sprite.md#_localboundsrect)

#### Defined in

node_modules/@pixi/display/index.d.ts:600

___

### \_mask

• **\_mask**: [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_mask](components_ClusterNodeContainer._internal_.Sprite.md#_mask)

#### Defined in

node_modules/@pixi/display/index.d.ts:593

___

### \_ownCanvas

• `Private` **\_ownCanvas**: `any`

Keep track if this Text object created it's own canvas
element (`true`) or uses the constructor argument (`false`).
Used to workaround a GC issues with Safari < 13 when
destroying Text. See `destroy` for more info.

#### Defined in

node_modules/@pixi/text/index.d.ts:125

___

### \_prevYogaLayoutHash

• **\_prevYogaLayoutHash**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_prevYogaLayoutHash](components_ClusterNodeContainer._internal_.Sprite.md#_prevyogalayouthash)

#### Defined in

[src/type/index.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L43)

___

### \_resolution

• **\_resolution**: `number`

The resolution / device pixel ratio of the canvas.

This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.

**`default`** PIXI.settings.RESOLUTION

#### Defined in

node_modules/@pixi/text/index.d.ts:93

___

### \_style

• `Private` **\_style**: [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md)

Private tracker for the current style.

#### Defined in

node_modules/@pixi/text/index.d.ts:112

___

### \_styleListener

• `Private` **\_styleListener**: () => `void`

#### Type declaration

▸ `Private` (): `void`

Private listener to track style changes.

##### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:118

___

### \_text

• `Private` **\_text**: `string`

Private tracker for the current text.

#### Defined in

node_modules/@pixi/text/index.d.ts:100

___

### \_texture

• `Private` **\_texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture that the sprite is using.

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_texture](components_ClusterNodeContainer._internal_.Sprite.md#_texture)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:73

___

### \_textureID

• **\_textureID**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_textureID](components_ClusterNodeContainer._internal_.Sprite.md#_textureid)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:74

___

### \_textureTrimmedID

• `Protected` **\_textureTrimmedID**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_textureTrimmedID](components_ClusterNodeContainer._internal_.Sprite.md#_texturetrimmedid)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:83

___

### \_tintRGB

• `Private` **\_tintRGB**: `number`

The tint applied to the sprite. This is a RGB value. A value of 0xFFFFFF will remove any tint effect.

**`default`** 16777215

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_tintRGB](components_ClusterNodeContainer._internal_.Sprite.md#_tintrgb)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:140

___

### \_trackedPointers

• **\_trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_trackedPointers](components_ClusterNodeContainer._internal_.Sprite.md#_trackedpointers)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:509

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_visible](components_ClusterNodeContainer._internal_.Sprite.md#_visible)

#### Defined in

[src/type/index.ts:29](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L29)

___

### \_width

• `Protected` **\_width**: `number`

The width of the sprite (this is initially set by the texture).

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_width](components_ClusterNodeContainer._internal_.Sprite.md#_width)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:61

___

### \_yogaLayoutHash

• **\_yogaLayoutHash**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_yogaLayoutHash](components_ClusterNodeContainer._internal_.Sprite.md#_yogalayouthash)

#### Defined in

[src/type/index.ts:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L42)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_zIndex](components_ClusterNodeContainer._internal_.Sprite.md#_zindex)

#### Defined in

node_modules/@pixi/display/index.d.ts:596

___

### accessible

• `Optional` **accessible**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessible](components_ClusterNodeContainer._internal_.Sprite.md#accessible)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:188

___

### accessibleChildren

• `Optional` **accessibleChildren**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessibleChildren](components_ClusterNodeContainer._internal_.Sprite.md#accessiblechildren)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:196

___

### accessibleHint

• `Optional` **accessibleHint**: `string`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessibleHint](components_ClusterNodeContainer._internal_.Sprite.md#accessiblehint)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:190

___

### accessiblePointerEvents

• `Optional` **accessiblePointerEvents**: [`PointerEvents`](../modules/components_ClusterNodeContainer._internal_.md#pointerevents)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessiblePointerEvents](components_ClusterNodeContainer._internal_.Sprite.md#accessiblepointerevents)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:195

___

### accessibleTitle

• `Optional` **accessibleTitle**: `string`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessibleTitle](components_ClusterNodeContainer._internal_.Sprite.md#accessibletitle)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:189

___

### accessibleType

• `Optional` **accessibleType**: `string`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[accessibleType](components_ClusterNodeContainer._internal_.Sprite.md#accessibletype)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:194

___

### alpha

• **alpha**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[alpha](components_ClusterNodeContainer._internal_.Sprite.md#alpha)

#### Defined in

node_modules/@pixi/display/index.d.ts:585

___

### blendMode

• **blendMode**: [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`default`** PIXI.BLEND_MODES.NORMAL

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[blendMode](components_ClusterNodeContainer._internal_.Sprite.md#blendmode)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:47

___

### buttonMode

• **buttonMode**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[buttonMode](components_ClusterNodeContainer._internal_.Sprite.md#buttonmode)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:505

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[cacheAsBitmap](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmap)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:4

___

### cacheAsBitmapMultisample

• **cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmapmultisample)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:6

___

### cacheAsBitmapResolution

• **cacheAsBitmapResolution**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.Sprite.md#cacheasbitmapresolution)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:5

___

### canvas

• **canvas**: `HTMLCanvasElement`

The canvas element that everything is drawn to.

#### Defined in

node_modules/@pixi/text/index.d.ts:81

___

### children

• `Readonly` **children**: `DisplayObject`[]

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[children](components_ClusterNodeContainer._internal_.Sprite.md#children)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[containerUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#containerupdatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:211

___

### context

• **context**: [`ModernContext2D`](../interfaces/components_Text._internal_.ModernContext2D.md)

The canvas 2d context that everything is drawn with.

#### Defined in

node_modules/@pixi/text/index.d.ts:83

___

### cursor

• **cursor**: `string`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[cursor](components_ClusterNodeContainer._internal_.Sprite.md#cursor)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:504

___

### dirty

• **dirty**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:85

___

### displayObjectUpdateTransform

• **displayObjectUpdateTransform**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#displayobjectupdatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:604

___

### drawLetterSpacing

• `Private` **drawLetterSpacing**: `any`

Render the text with letter-spacing.

**`param`** The text to draw

**`param`** Horizontal position to draw the text

**`param`** Vertical position to draw the text

**`param`** Is this drawing for the outside stroke of the
 text? If not, it's for the inside fill

#### Defined in

node_modules/@pixi/text/index.d.ts:151

___

### filterArea

• **filterArea**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[filterArea](components_ClusterNodeContainer._internal_.Sprite.md#filterarea)

#### Defined in

node_modules/@pixi/display/index.d.ts:588

___

### filters

• **filters**: ``null`` \| [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[filters](components_ClusterNodeContainer._internal_.Sprite.md#filters)

#### Defined in

node_modules/@pixi/display/index.d.ts:589

___

### flex

• **flex**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[flex](components_ClusterNodeContainer._internal_.Sprite.md#flex)

#### Defined in

[src/type/index.ts:31](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L31)

___

### hitArea

• **hitArea**: [`IHitArea`](../interfaces/components_ClusterNodeContainer._internal_.IHitArea.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[hitArea](components_ClusterNodeContainer._internal_.Sprite.md#hitarea)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:503

___

### indices

• **indices**: `Uint16Array`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[indices](components_ClusterNodeContainer._internal_.Sprite.md#indices)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:48

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[interactive](components_ClusterNodeContainer._internal_.Sprite.md#interactive)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:501

___

### interactiveChildren

• **interactiveChildren**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[interactiveChildren](components_ClusterNodeContainer._internal_.Sprite.md#interactivechildren)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:502

___

### isMask

• **isMask**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[isMask](components_ClusterNodeContainer._internal_.Sprite.md#ismask)

#### Defined in

node_modules/@pixi/display/index.d.ts:591

___

### isSprite

• **isSprite**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[isSprite](components_ClusterNodeContainer._internal_.Sprite.md#issprite)

#### Defined in

node_modules/@pixi/display/index.d.ts:590

___

### localStyleID

• **localStyleID**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:84

___

### name

• **name**: `string`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[name](components_ClusterNodeContainer._internal_.Sprite.md#name)

#### Defined in

node_modules/@pixi/mixin-get-child-by-name/global.d.ts:5

___

### parent

• **parent**: [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[parent](components_ClusterNodeContainer._internal_.Sprite.md#parent)

#### Defined in

node_modules/@pixi/display/index.d.ts:210

___

### pluginName

• **pluginName**: `string`

Plugin that is responsible for rendering this element.
Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.

**`default`** 'batch'

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[pluginName](components_ClusterNodeContainer._internal_.Sprite.md#pluginname)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:55

___

### renderId

• `Optional` **renderId**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[renderId](components_ClusterNodeContainer._internal_.Sprite.md#renderid)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:197

___

### renderable

• **renderable**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[renderable](components_ClusterNodeContainer._internal_.Sprite.md#renderable)

#### Defined in

node_modules/@pixi/display/index.d.ts:587

___

### sortDirty

• **sortDirty**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[sortDirty](components_ClusterNodeContainer._internal_.Sprite.md#sortdirty)

#### Defined in

node_modules/@pixi/display/index.d.ts:209

___

### sortableChildren

• **sortableChildren**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[sortableChildren](components_ClusterNodeContainer._internal_.Sprite.md#sortablechildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:208

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[tabIndex](components_ClusterNodeContainer._internal_.Sprite.md#tabindex)

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:191

___

### trackedPointers

• **trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[trackedPointers](components_ClusterNodeContainer._internal_.Sprite.md#trackedpointers)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:506

___

### transform

• **transform**: [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[transform](components_ClusterNodeContainer._internal_.Sprite.md#transform)

#### Defined in

node_modules/@pixi/display/index.d.ts:584

___

### updateTexture

• `Private` **updateTexture**: `any`

Updates texture size based on canvas size.

#### Defined in

node_modules/@pixi/text/index.d.ts:153

___

### uvs

• `Protected` **uvs**: `Float32Array`

This is used to store the uvs data of the sprite, assigned at the same time
as the vertexData in calculateVertices().

**`member`** {Float32Array}

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[uvs](components_ClusterNodeContainer._internal_.Sprite.md#uvs)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:90

___

### vertexData

• `Protected` **vertexData**: `Float32Array`

This is used to store the vertex data of the sprite (basically a quad).

**`member`** {Float32Array}

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[vertexData](components_ClusterNodeContainer._internal_.Sprite.md#vertexdata)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:113

___

### visible

• **visible**: `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[visible](components_ClusterNodeContainer._internal_.Sprite.md#visible)

#### Defined in

node_modules/@pixi/display/index.d.ts:586

___

### worldAlpha

• **worldAlpha**: `number`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[worldAlpha](components_ClusterNodeContainer._internal_.Sprite.md#worldalpha)

#### Defined in

node_modules/@pixi/display/index.d.ts:583

___

### yoga

• **yoga**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[yoga](components_ClusterNodeContainer._internal_.Sprite.md#yoga)

#### Defined in

[src/type/index.ts:22](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L22)

___

### nextLineHeightBehavior

▪ `Static` **nextLineHeightBehavior**: `boolean`

New behavior for `lineHeight` that's meant to mimic HTML text. A value of `true` will
make sure the first baseline is offset by the `lineHeight` value if it is greater than `fontSize`.
A value of `false` will use the legacy behavior and not change the baseline of the first line.
In the next major release, we'll enable this by default.

#### Defined in

node_modules/@pixi/text/index.d.ts:79

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[prefixed](components_ClusterNodeContainer._internal_.Sprite.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### \_tempDisplayObjectParent

• `Protected` `get` **_tempDisplayObjectParent**(): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

**`member`** {PIXI.Container}

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

#### Inherited from

Sprite.\_tempDisplayObjectParent

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

#### Inherited from

Sprite.anchor

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

#### Inherited from

Sprite.anchor

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

Sprite.angle

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

Sprite.angle

#### Defined in

node_modules/@pixi/display/index.d.ts:857

___

### destroyed

• `get` **destroyed**(): `boolean`

Readonly flag for destroyed display objects.

#### Returns

`boolean`

#### Inherited from

Sprite.destroyed

#### Defined in

node_modules/@pixi/display/index.d.ts:635

___

### height

• `get` **height**(): `number`

The height of the Text, setting this will actually modify the scale to achieve the value set.

#### Returns

`number`

#### Overrides

Sprite.height

#### Defined in

node_modules/@pixi/text/index.d.ts:195

• `set` **height**(`value`): `void`

The height of the Text, setting this will actually modify the scale to achieve the value set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

Sprite.height

#### Defined in

node_modules/@pixi/text/index.d.ts:196

___

### localTransform

• `get` **localTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

Sprite.localTransform

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

Sprite.mask

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

Sprite.mask

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

Sprite.pivot

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

Sprite.pivot

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

Sprite.position

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

Sprite.position

#### Defined in

node_modules/@pixi/display/index.d.ts:812

___

### resolution

• `get` **resolution**(): `number`

The resolution / device pixel ratio of the canvas.

This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.

**`default`** 1

#### Returns

`number`

#### Defined in

node_modules/@pixi/text/index.d.ts:214

• `set` **resolution**(`value`): `void`

The resolution / device pixel ratio of the canvas.

This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.

**`default`** 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:215

___

### rotation

• `get` **rotation**(): `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Sprite.rotation

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

Sprite.rotation

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

#### Inherited from

Sprite.roundPixels

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

#### Inherited from

Sprite.roundPixels

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

Sprite.scale

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

Sprite.scale

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

Sprite.skew

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

Sprite.skew

#### Defined in

node_modules/@pixi/display/index.d.ts:841

___

### style

• `get` **style**(): [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md) \| [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\>

Set the style of the text.

Set up an event listener to listen for changes on the style object and mark the text as dirty.

#### Returns

[`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md) \| [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\>

#### Defined in

node_modules/@pixi/text/index.d.ts:202

• `set` **style**(`style`): `void`

Set the style of the text.

Set up an event listener to listen for changes on the style object and mark the text as dirty.

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md) \| [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:203

___

### text

• `get` **text**(): `string`

Set the copy for the text object. To split a line you can use '\n'.

#### Returns

`string`

#### Defined in

node_modules/@pixi/text/index.d.ts:205

• `set` **text**(`text`): `void`

Set the copy for the text object. To split a line you can use '\n'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:206

___

### texture

• `get` **texture**(): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture that the sprite is using.

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

#### Inherited from

Sprite.texture

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

#### Inherited from

Sprite.texture

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

#### Inherited from

Sprite.tint

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

#### Inherited from

Sprite.tint

#### Defined in

node_modules/@pixi/sprite/index.d.ts:242

___

### width

• `get` **width**(): `number`

The width of the Text, setting this will actually modify the scale to achieve the value set.

#### Returns

`number`

#### Overrides

Sprite.width

#### Defined in

node_modules/@pixi/text/index.d.ts:192

• `set` **width**(`value`): `void`

The width of the Text, setting this will actually modify the scale to achieve the value set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

Sprite.width

#### Defined in

node_modules/@pixi/text/index.d.ts:193

___

### worldTransform

• `get` **worldTransform**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

Sprite.worldTransform

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

Sprite.worldVisible

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

Sprite.x

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

Sprite.x

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

Sprite.y

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

Sprite.y

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

Sprite.zIndex

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

Sprite.zIndex

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.Sprite.md#_cacheasbitmapdestroy)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:18

___

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.

#### Returns

`void`

#### Overrides

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_calculateBounds](components_ClusterNodeContainer._internal_.Sprite.md#_calculatebounds)

#### Defined in

node_modules/@pixi/text/index.d.ts:168

___

### \_calculateCachedBounds

▸ **_calculateCachedBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_calculateCachedBounds](components_ClusterNodeContainer._internal_.Sprite.md#_calculatecachedbounds)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:13

___

### \_destroyCachedDisplayObject

▸ **_destroyCachedDisplayObject**(): `void`

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.Sprite.md#_destroycacheddisplayobject)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:17

___

### \_getCachedLocalBounds

▸ **_getCachedLocalBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_getCachedLocalBounds](components_ClusterNodeContainer._internal_.Sprite.md#_getcachedlocalbounds)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_initCachedDisplayObject](components_ClusterNodeContainer._internal_.Sprite.md#_initcacheddisplayobject)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.Sprite.md#_initcacheddisplayobjectcanvas)

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:16

___

### \_onTextureUpdate

▸ `Protected` **_onTextureUpdate**(): `void`

When the texture is updated, this event will fire to update the scale and frame.

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_onTextureUpdate](components_ClusterNodeContainer._internal_.Sprite.md#_ontextureupdate)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.Sprite.md#_recursivepostupdatetransform)

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

#### Overrides

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_render](components_ClusterNodeContainer._internal_.Sprite.md#_render)

#### Defined in

node_modules/@pixi/text/index.d.ts:159

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_renderCached](components_ClusterNodeContainer._internal_.Sprite.md#_rendercached)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[_renderCachedCanvas](components_ClusterNodeContainer._internal_.Sprite.md#_rendercachedcanvas)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[addChild](components_ClusterNodeContainer._internal_.Sprite.md#addchild)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[addChildAt](components_ClusterNodeContainer._internal_.Sprite.md#addchildat)

#### Defined in

node_modules/@pixi/display/index.d.ts:237

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Text_2`](components_Text._internal_.Text_2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[addListener](components_ClusterNodeContainer._internal_.Sprite.md#addlistener)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[calculateBounds](components_ClusterNodeContainer._internal_.Sprite.md#calculatebounds)

#### Defined in

node_modules/@pixi/display/index.d.ts:302

___

### calculateTrimmedVertices

▸ **calculateTrimmedVertices**(): `void`

Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.

This is used to ensure that the true width and height of a trimmed texture is respected.

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[calculateTrimmedVertices](components_ClusterNodeContainer._internal_.Sprite.md#calculatetrimmedvertices)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:154

___

### calculateVertices

▸ **calculateVertices**(): `void`

Calculates worldTransform * vertices, store it in vertexData.

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[calculateVertices](components_ClusterNodeContainer._internal_.Sprite.md#calculatevertices)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:148

___

### checkIfBoundingBoxChanged

▸ **checkIfBoundingBoxChanged**(): `void`

Checks boundaries of DisplayObject and emits NEED_LAYOUT_UPDATE if needed

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[checkIfBoundingBoxChanged](components_ClusterNodeContainer._internal_.Sprite.md#checkifboundingboxchanged)

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

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[containsPoint](components_ClusterNodeContainer._internal_.Sprite.md#containspoint)

#### Defined in

node_modules/@pixi/sprite/index.d.ts:177

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys this text object.

Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
the majority of the time the texture will not be shared with any other Sprites.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) | Options parameter. A boolean will act as if all options  have been set to that value |

#### Returns

`void`

#### Overrides

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[destroy](components_ClusterNodeContainer._internal_.Sprite.md#destroy)

#### Defined in

node_modules/@pixi/text/index.d.ts:190

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[disableTempParent](components_ClusterNodeContainer._internal_.Sprite.md#disabletempparent)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[emit](components_ClusterNodeContainer._internal_.Sprite.md#emit)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[enableTempParent](components_ClusterNodeContainer._internal_.Sprite.md#enabletempparent)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[eventNames](components_ClusterNodeContainer._internal_.Sprite.md#eventnames)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getBounds](components_ClusterNodeContainer._internal_.Sprite.md#getbounds)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getChildAt](components_ClusterNodeContainer._internal_.Sprite.md#getchildat)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getChildByName](components_ClusterNodeContainer._internal_.Sprite.md#getchildbyname)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getChildIndex](components_ClusterNodeContainer._internal_.Sprite.md#getchildindex)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getGlobalPosition](components_ClusterNodeContainer._internal_.Sprite.md#getglobalposition)

#### Defined in

node_modules/@pixi/mixin-get-global-position/global.d.ts:5

___

### getLocalBounds

▸ **getLocalBounds**(`rect`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Gets the local bounds of the text object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The output rectangle. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The bounds.

#### Overrides

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[getLocalBounds](components_ClusterNodeContainer._internal_.Sprite.md#getlocalbounds)

#### Defined in

node_modules/@pixi/text/index.d.ts:166

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[listenerCount](components_ClusterNodeContainer._internal_.Sprite.md#listenercount)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[listeners](components_ClusterNodeContainer._internal_.Sprite.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Text_2`](components_Text._internal_.Text_2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[off](components_ClusterNodeContainer._internal_.Sprite.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Text_2`](components_Text._internal_.Text_2.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[on](components_ClusterNodeContainer._internal_.Sprite.md#on)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[onChildrenChange](components_ClusterNodeContainer._internal_.Sprite.md#onchildrenchange)

#### Defined in

node_modules/@pixi/display/index.d.ts:220

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Text_2`](components_Text._internal_.Text_2.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[once](components_ClusterNodeContainer._internal_.Sprite.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Text_2`](components_Text._internal_.Text_2.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[removeAllListeners](components_ClusterNodeContainer._internal_.Sprite.md#removealllisteners)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[removeChild](components_ClusterNodeContainer._internal_.Sprite.md#removechild)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[removeChildAt](components_ClusterNodeContainer._internal_.Sprite.md#removechildat)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[removeChildren](components_ClusterNodeContainer._internal_.Sprite.md#removechildren)

#### Defined in

node_modules/@pixi/display/index.d.ts:287

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Text_2`](components_Text._internal_.Text_2.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Text_2`](components_Text._internal_.Text_2.md)

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[removeListener](components_ClusterNodeContainer._internal_.Sprite.md#removelistener)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[render](components_ClusterNodeContainer._internal_.Sprite.md#render)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[renderAdvanced](components_ClusterNodeContainer._internal_.Sprite.md#renderadvanced)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[setChildIndex](components_ClusterNodeContainer._internal_.Sprite.md#setchildindex)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[setParent](components_ClusterNodeContainer._internal_.Sprite.md#setparent)

#### Defined in

node_modules/@pixi/display/index.d.ts:728

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): [`Text_2`](components_Text._internal_.Text_2.md)

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

[`Text_2`](components_Text._internal_.Text_2.md)

The DisplayObject instance

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[setTransform](components_ClusterNodeContainer._internal_.Sprite.md#settransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:743

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[sortChildren](components_ClusterNodeContainer._internal_.Sprite.md#sortchildren)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[swapChildren](components_ClusterNodeContainer._internal_.Sprite.md#swapchildren)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[toGlobal](components_ClusterNodeContainer._internal_.Sprite.md#toglobal)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[toLocal](components_ClusterNodeContainer._internal_.Sprite.md#tolocal)

#### Defined in

node_modules/@pixi/display/index.d.ts:721

___

### updateText

▸ **updateText**(`respectDirty`): `void`

Renders text to its canvas, and updates its texture.

By default this is used internally to ensure the texture is correct before rendering,
but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
and then shared across multiple Sprites.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `respectDirty` | `boolean` | Whether to abort updating the text if the Text isn't dirty and the function is called. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:141

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[updateTransform](components_ClusterNodeContainer._internal_.Sprite.md#updatetransform)

#### Defined in

node_modules/@pixi/display/index.d.ts:295

___

### updateYogaLayout

▸ **updateYogaLayout**(): `void`

Applies yoga layout to DisplayObject

#### Returns

`void`

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[updateYogaLayout](components_ClusterNodeContainer._internal_.Sprite.md#updateyogalayout)

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

#### Inherited from

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[from](components_ClusterNodeContainer._internal_.Sprite.md#from)

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

[Sprite](components_ClusterNodeContainer._internal_.Sprite.md).[mixin](components_ClusterNodeContainer._internal_.Sprite.md#mixin)

#### Defined in

node_modules/@pixi/display/index.d.ts:610
