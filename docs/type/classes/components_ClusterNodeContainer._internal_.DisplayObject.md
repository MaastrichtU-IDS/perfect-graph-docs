[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / DisplayObject

# Class: DisplayObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).DisplayObject

The base class for all objects that are rendered on the screen.

This is an abstract class and can not be used on its own; rather it should be extended.

## Display objects implemented in PixiJS

| Display Object                  | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| {@link PIXI.Container}          | Adds support for `children` to DisplayObject                          |
| {@link PIXI.Graphics}           | Shape-drawing display object similar to the Canvas API                |
| {@link PIXI.Sprite}             | Draws textures (i.e. images)                                          |
| {@link PIXI.Text}               | Draws text using the Canvas API internally                            |
| {@link PIXI.BitmapText}         | More scaleable solution for text rendering, reusing glyph textures    |
| {@link PIXI.TilingSprite}       | Draws textures/images in a tiled fashion                              |
| {@link PIXI.AnimatedSprite}     | Draws an animation of multiple images                                 |
| {@link PIXI.Mesh}               | Provides a lower-level API for drawing meshes with custom data        |
| {@link PIXI.NineSlicePlane}     | Mesh-related                                                          |
| {@link PIXI.SimpleMesh}         | v4-compatible mesh                                                    |
| {@link PIXI.SimplePlane}        | Mesh-related                                                          |
| {@link PIXI.SimpleRope}         | Mesh-related                                                          |

## Transforms

The [transform]{@link DisplayObject#transform} of a display object describes the projection from its
local coordinate space to its parent's local coordinate space. The following properties are derived
from the transform:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[pivot]{@link PIXI.DisplayObject#pivot}</td>
      <td>
        Invariant under rotation, scaling, and skewing. The projection of into the parent's space of the pivot
        is equal to position, regardless of the other three transformations. In other words, It is the center of
        rotation, scaling, and skewing.
      </td>
    </tr>
    <tr>
      <td>[position]{@link PIXI.DisplayObject#position}</td>
      <td>
        Translation. This is the position of the [pivot]{@link PIXI.DisplayObject#pivot} in the parent's local
        space. The default value of the pivot is the origin (0,0). If the top-left corner of your display object
        is (0,0) in its local space, then the position will be its top-left corner in the parent's local space.
      </td>
    </tr>
    <tr>
      <td>[scale]{@link PIXI.DisplayObject#scale}</td>
      <td>
        Scaling. This will stretch (or compress) the display object's projection. The scale factors are along the
        local coordinate axes. In other words, the display object is scaled before rotated or skewed. The center
        of scaling is the [pivot]{@link PIXI.DisplayObject#pivot}.
      </td>
    </tr>
    <tr>
      <td>[rotation]{@link PIXI.DisplayObject#rotation}</td>
      <td>
         Rotation. This will rotate the display object's projection by this angle (in radians).
      </td>
    </tr>
    <tr>
      <td>[skew]{@link PIXI.DisplayObject#skew}</td>
      <td>
        <p>Skewing. This can be used to deform a rectangular display object into a parallelogram.</p>
        <p>
        In PixiJS, skew has a slightly different behaviour than the conventional meaning. It can be
        thought of the net rotation applied to the coordinate axes (separately). For example, if "skew.x" is
        ⍺ and "skew.y" is β, then the line x = 0 will be rotated by ⍺ (y = -x*cot⍺) and the line y = 0 will be
        rotated by β (y = x*tanβ). A line y = x*tanϴ (i.e. a line at angle ϴ to the x-axis in local-space) will
        be rotated by an angle between ⍺ and β.
        </p>
        <p>
        It can be observed that if skew is applied equally to both axes, then it will be equivalent to applying
        a rotation. Indeed, if "skew.x" = -ϴ and "skew.y" = ϴ, it will produce an equivalent of "rotation" = ϴ.
        </p>
        <p>
        Another quite interesting observation is that "skew.x", "skew.y", rotation are communtative operations. Indeed,
        because rotation is essentially a careful combination of the two.
        </p>
      </td>
    </tr>
    <tr>
      <td>angle</td>
      <td>Rotation. This is an alias for [rotation]{@link PIXI.DisplayObject#rotation}, but in degrees.</td>
    </tr>
    <tr>
      <td>x</td>
      <td>Translation. This is an alias for position.x!</td>
    </tr>
    <tr>
      <td>y</td>
      <td>Translation. This is an alias for position.y!</td>
    </tr>
    <tr>
      <td>width</td>
      <td>
        Implemented in [Container]{@link PIXI.Container}. Scaling. The width property calculates scale.x by dividing
        the "requested" width by the local bounding box width. It is indirectly an abstraction over scale.x, and there
        is no concept of user-defined width.
      </td>
    </tr>
    <tr>
      <td>height</td>
      <td>
        Implemented in [Container]{@link PIXI.Container}. Scaling. The height property calculates scale.y by dividing
        the "requested" height by the local bounding box height. It is indirectly an abstraction over scale.y, and there
        is no concept of user-defined height.
      </td>
    </tr>
  </tbody>
</table>

## Bounds

The bounds of a display object is defined by the minimum axis-aligned rectangle in world space that can fit
around it. The abstract `calculateBounds` method is responsible for providing it (and it should use the
`worldTransform` to calculate in world space).

There are a few additional types of bounding boxes:

| Bounds                | Description                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| World Bounds          | This is synonymous is the regular bounds described above. See `getBounds()`.             |
| Local Bounds          | This the axis-aligned bounding box in the parent's local space. See `getLocalBounds()`.  |
| Render Bounds         | The bounds, but including extra rendering effects like filter padding.                   |
| Projected Bounds      | The bounds of the projected display object onto the screen. Usually equals world bounds. |
| Relative Bounds       | The bounds of a display object when projected onto a ancestor's (or parent's) space.     |
| Natural Bounds        | The bounds of an object in its own local space (not parent's space, like in local bounds)|
| Content Bounds        | The natural bounds when excluding all children of a `Container`.                         |

### calculateBounds

[Container](components_ClusterNodeContainer._internal_.Container.md) already implements `calculateBounds` in a manner that includes children.

But for a non-Container display object, the `calculateBounds` method must be overridden in order for `getBounds` and
`getLocalBounds` to work. This method must write the bounds into `this._bounds`.

Generally, the following technique works for most simple cases: take the list of points
forming the "hull" of the object (i.e. outline of the object's shape), and then add them
using {@link PIXI.Bounds#addPointMatrix}.

```js
calculateBounds(): void
{
    const points = [...];

    for (let i = 0, j = points.length; i < j; i++)
    {
        this._bounds.addPointMatrix(this.worldTransform, points[i]);
    }
}
```

You can optimize this for a large number of points by using {@link PIXI.Bounds#addVerticesMatrix} to pass them
in one array together.

## Alpha

This alpha sets a display object's **relative opacity** w.r.t its parent. For example, if the alpha of a display
object is 0.5 and its parent's alpha is 0.5, then it will be rendered with 25% opacity (assuming alpha is not
applied on any ancestor further up the chain).

The alpha with which the display object will be rendered is called the [worldAlpha]{@link PIXI.DisplayObject#worldAlpha}.

## Renderable vs Visible

The `renderable` and `visible` properties can be used to prevent a display object from being rendered to the
screen. However, there is a subtle difference between the two. When using `renderable`, the transforms  of the display
object (and its children subtree) will continue to be calculated. When using `visible`, the transforms will not
be calculated.

It is recommended that applications use the `renderable` property for culling. See
[@pixi-essentials/cull](https://www.npmjs.com/package/@pixi-essentials/cull) or
[pixi-cull](https://www.npmjs.com/package/pixi-cull) for more details.

Otherwise, to prevent an object from rendering in the general-purpose sense - `visible` is the property to use. This
one is also better in terms of performance.

**`memberof`** PIXI

## Hierarchy

- [`Omit`](../modules/components_ClusterNodeContainer._internal_.md#omit)<`GlobalMixins.DisplayObject`, keyof [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)\>

- [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)

  ↳ **`DisplayObject`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.DisplayObject.md#constructor)

### Properties

- [\_accessibleActive](components_ClusterNodeContainer._internal_.DisplayObject.md#_accessibleactive)
- [\_accessibleDiv](components_ClusterNodeContainer._internal_.DisplayObject.md#_accessiblediv)
- [\_bounds](components_ClusterNodeContainer._internal_.DisplayObject.md#_bounds)
- [\_boundsID](components_ClusterNodeContainer._internal_.DisplayObject.md#_boundsid)
- [\_boundsRect](components_ClusterNodeContainer._internal_.DisplayObject.md#_boundsrect)
- [\_cacheAsBitmap](components_ClusterNodeContainer._internal_.DisplayObject.md#_cacheasbitmap)
- [\_cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.DisplayObject.md#_cacheasbitmapmultisample)
- [\_cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.DisplayObject.md#_cacheasbitmapresolution)
- [\_cacheData](components_ClusterNodeContainer._internal_.DisplayObject.md#_cachedata)
- [\_destroyed](components_ClusterNodeContainer._internal_.DisplayObject.md#_destroyed)
- [\_enabledFilters](components_ClusterNodeContainer._internal_.DisplayObject.md#_enabledfilters)
- [\_lastSortedIndex](components_ClusterNodeContainer._internal_.DisplayObject.md#_lastsortedindex)
- [\_localBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#_localbounds)
- [\_localBoundsRect](components_ClusterNodeContainer._internal_.DisplayObject.md#_localboundsrect)
- [\_mask](components_ClusterNodeContainer._internal_.DisplayObject.md#_mask)
- [\_maskRefCount](components_ClusterNodeContainer._internal_.DisplayObject.md#_maskrefcount)
- [\_trackedPointers](components_ClusterNodeContainer._internal_.DisplayObject.md#_trackedpointers)
- [\_zIndex](components_ClusterNodeContainer._internal_.DisplayObject.md#_zindex)
- [accessible](components_ClusterNodeContainer._internal_.DisplayObject.md#accessible)
- [accessibleChildren](components_ClusterNodeContainer._internal_.DisplayObject.md#accessiblechildren)
- [accessibleHint](components_ClusterNodeContainer._internal_.DisplayObject.md#accessiblehint)
- [accessiblePointerEvents](components_ClusterNodeContainer._internal_.DisplayObject.md#accessiblepointerevents)
- [accessibleTitle](components_ClusterNodeContainer._internal_.DisplayObject.md#accessibletitle)
- [accessibleType](components_ClusterNodeContainer._internal_.DisplayObject.md#accessibletype)
- [alpha](components_ClusterNodeContainer._internal_.DisplayObject.md#alpha)
- [buttonMode](components_ClusterNodeContainer._internal_.DisplayObject.md#buttonmode)
- [cacheAsBitmap](components_ClusterNodeContainer._internal_.DisplayObject.md#cacheasbitmap)
- [cacheAsBitmapMultisample](components_ClusterNodeContainer._internal_.DisplayObject.md#cacheasbitmapmultisample)
- [cacheAsBitmapResolution](components_ClusterNodeContainer._internal_.DisplayObject.md#cacheasbitmapresolution)
- [cursor](components_ClusterNodeContainer._internal_.DisplayObject.md#cursor)
- [displayObjectUpdateTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#displayobjectupdatetransform)
- [filterArea](components_ClusterNodeContainer._internal_.DisplayObject.md#filterarea)
- [filters](components_ClusterNodeContainer._internal_.DisplayObject.md#filters)
- [hitArea](components_ClusterNodeContainer._internal_.DisplayObject.md#hitarea)
- [interactive](components_ClusterNodeContainer._internal_.DisplayObject.md#interactive)
- [interactiveChildren](components_ClusterNodeContainer._internal_.DisplayObject.md#interactivechildren)
- [isMask](components_ClusterNodeContainer._internal_.DisplayObject.md#ismask)
- [isSprite](components_ClusterNodeContainer._internal_.DisplayObject.md#issprite)
- [name](components_ClusterNodeContainer._internal_.DisplayObject.md#name)
- [parent](components_ClusterNodeContainer._internal_.DisplayObject.md#parent)
- [renderId](components_ClusterNodeContainer._internal_.DisplayObject.md#renderid)
- [renderable](components_ClusterNodeContainer._internal_.DisplayObject.md#renderable)
- [sortDirty](components_ClusterNodeContainer._internal_.DisplayObject.md#sortdirty)
- [tabIndex](components_ClusterNodeContainer._internal_.DisplayObject.md#tabindex)
- [tempDisplayObjectParent](components_ClusterNodeContainer._internal_.DisplayObject.md#tempdisplayobjectparent)
- [trackedPointers](components_ClusterNodeContainer._internal_.DisplayObject.md#trackedpointers)
- [transform](components_ClusterNodeContainer._internal_.DisplayObject.md#transform)
- [visible](components_ClusterNodeContainer._internal_.DisplayObject.md#visible)
- [worldAlpha](components_ClusterNodeContainer._internal_.DisplayObject.md#worldalpha)
- [prefixed](components_ClusterNodeContainer._internal_.DisplayObject.md#prefixed)

### Accessors

- [\_tempDisplayObjectParent](components_ClusterNodeContainer._internal_.DisplayObject.md#_tempdisplayobjectparent)
- [angle](components_ClusterNodeContainer._internal_.DisplayObject.md#angle)
- [destroyed](components_ClusterNodeContainer._internal_.DisplayObject.md#destroyed)
- [localTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#localtransform)
- [mask](components_ClusterNodeContainer._internal_.DisplayObject.md#mask)
- [pivot](components_ClusterNodeContainer._internal_.DisplayObject.md#pivot)
- [position](components_ClusterNodeContainer._internal_.DisplayObject.md#position)
- [rotation](components_ClusterNodeContainer._internal_.DisplayObject.md#rotation)
- [scale](components_ClusterNodeContainer._internal_.DisplayObject.md#scale)
- [skew](components_ClusterNodeContainer._internal_.DisplayObject.md#skew)
- [worldTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#worldtransform)
- [worldVisible](components_ClusterNodeContainer._internal_.DisplayObject.md#worldvisible)
- [x](components_ClusterNodeContainer._internal_.DisplayObject.md#x)
- [y](components_ClusterNodeContainer._internal_.DisplayObject.md#y)
- [zIndex](components_ClusterNodeContainer._internal_.DisplayObject.md#zindex)

### Methods

- [\_cacheAsBitmapDestroy](components_ClusterNodeContainer._internal_.DisplayObject.md#_cacheasbitmapdestroy)
- [\_calculateCachedBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#_calculatecachedbounds)
- [\_destroyCachedDisplayObject](components_ClusterNodeContainer._internal_.DisplayObject.md#_destroycacheddisplayobject)
- [\_getCachedLocalBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#_getcachedlocalbounds)
- [\_initCachedDisplayObject](components_ClusterNodeContainer._internal_.DisplayObject.md#_initcacheddisplayobject)
- [\_initCachedDisplayObjectCanvas](components_ClusterNodeContainer._internal_.DisplayObject.md#_initcacheddisplayobjectcanvas)
- [\_recursivePostUpdateTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#_recursivepostupdatetransform)
- [\_renderCached](components_ClusterNodeContainer._internal_.DisplayObject.md#_rendercached)
- [\_renderCachedCanvas](components_ClusterNodeContainer._internal_.DisplayObject.md#_rendercachedcanvas)
- [addListener](components_ClusterNodeContainer._internal_.DisplayObject.md#addlistener)
- [calculateBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#calculatebounds)
- [destroy](components_ClusterNodeContainer._internal_.DisplayObject.md#destroy)
- [disableTempParent](components_ClusterNodeContainer._internal_.DisplayObject.md#disabletempparent)
- [emit](components_ClusterNodeContainer._internal_.DisplayObject.md#emit)
- [enableTempParent](components_ClusterNodeContainer._internal_.DisplayObject.md#enabletempparent)
- [eventNames](components_ClusterNodeContainer._internal_.DisplayObject.md#eventnames)
- [getBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#getbounds)
- [getGlobalPosition](components_ClusterNodeContainer._internal_.DisplayObject.md#getglobalposition)
- [getLocalBounds](components_ClusterNodeContainer._internal_.DisplayObject.md#getlocalbounds)
- [listenerCount](components_ClusterNodeContainer._internal_.DisplayObject.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.DisplayObject.md#listeners)
- [off](components_ClusterNodeContainer._internal_.DisplayObject.md#off)
- [on](components_ClusterNodeContainer._internal_.DisplayObject.md#on)
- [once](components_ClusterNodeContainer._internal_.DisplayObject.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.DisplayObject.md#removealllisteners)
- [removeChild](components_ClusterNodeContainer._internal_.DisplayObject.md#removechild)
- [removeListener](components_ClusterNodeContainer._internal_.DisplayObject.md#removelistener)
- [render](components_ClusterNodeContainer._internal_.DisplayObject.md#render)
- [setParent](components_ClusterNodeContainer._internal_.DisplayObject.md#setparent)
- [setTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#settransform)
- [toGlobal](components_ClusterNodeContainer._internal_.DisplayObject.md#toglobal)
- [toLocal](components_ClusterNodeContainer._internal_.DisplayObject.md#tolocal)
- [updateTransform](components_ClusterNodeContainer._internal_.DisplayObject.md#updatetransform)
- [mixin](components_ClusterNodeContainer._internal_.DisplayObject.md#mixin)

## Constructors

### constructor

• **new DisplayObject**()

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@pixi/display/index.d.ts:611

## Properties

### \_accessibleActive

• `Optional` **\_accessibleActive**: `boolean`

#### Inherited from

Omit.\_accessibleActive

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:192

___

### \_accessibleDiv

• `Optional` **\_accessibleDiv**: [`IAccessibleHTMLElement`](../interfaces/components_ClusterNodeContainer._internal_.IAccessibleHTMLElement.md)

#### Inherited from

Omit.\_accessibleDiv

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:193

___

### \_bounds

• **\_bounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:594

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:598

___

### \_boundsRect

• `Protected` **\_boundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:599

___

### \_cacheAsBitmap

• **\_cacheAsBitmap**: `boolean`

#### Inherited from

Omit.\_cacheAsBitmap

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:9

___

### \_cacheAsBitmapMultisample

• **\_cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

Omit.\_cacheAsBitmapMultisample

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:8

___

### \_cacheAsBitmapResolution

• **\_cacheAsBitmapResolution**: `number`

#### Inherited from

Omit.\_cacheAsBitmapResolution

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:7

___

### \_cacheData

• **\_cacheData**: `CacheData`

#### Inherited from

Omit.\_cacheData

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:10

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:601

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Defined in

node_modules/@pixi/display/index.d.ts:597

___

### \_lastSortedIndex

• **\_lastSortedIndex**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:592

___

### \_localBounds

• **\_localBounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:595

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:600

___

### \_mask

• **\_mask**: [`Container`](components_ClusterNodeContainer._internal_.Container.md) \| [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:593

___

### \_maskRefCount

• `Private` **\_maskRefCount**: `any`

#### Defined in

node_modules/@pixi/display/index.d.ts:602

___

### \_trackedPointers

• **\_trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

Omit.\_trackedPointers

#### Defined in

node_modules/@pixi/interaction/index.d.ts:509

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:596

___

### accessible

• `Optional` **accessible**: `boolean`

#### Inherited from

Omit.accessible

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:188

___

### accessibleChildren

• `Optional` **accessibleChildren**: `boolean`

#### Inherited from

Omit.accessibleChildren

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:196

___

### accessibleHint

• `Optional` **accessibleHint**: `string`

#### Inherited from

Omit.accessibleHint

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:190

___

### accessiblePointerEvents

• `Optional` **accessiblePointerEvents**: [`PointerEvents`](../modules/components_ClusterNodeContainer._internal_.md#pointerevents)

#### Inherited from

Omit.accessiblePointerEvents

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:195

___

### accessibleTitle

• `Optional` **accessibleTitle**: `string`

#### Inherited from

Omit.accessibleTitle

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:189

___

### accessibleType

• `Optional` **accessibleType**: `string`

#### Inherited from

Omit.accessibleType

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:194

___

### alpha

• **alpha**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:585

___

### buttonMode

• **buttonMode**: `boolean`

#### Inherited from

Omit.buttonMode

#### Defined in

node_modules/@pixi/interaction/index.d.ts:505

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

#### Inherited from

Omit.cacheAsBitmap

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:4

___

### cacheAsBitmapMultisample

• **cacheAsBitmapMultisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

Omit.cacheAsBitmapMultisample

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:6

___

### cacheAsBitmapResolution

• **cacheAsBitmapResolution**: `number`

#### Inherited from

Omit.cacheAsBitmapResolution

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:5

___

### cursor

• **cursor**: `string`

#### Inherited from

Omit.cursor

#### Defined in

node_modules/@pixi/interaction/index.d.ts:504

___

### displayObjectUpdateTransform

• **displayObjectUpdateTransform**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:604

___

### filterArea

• **filterArea**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:588

___

### filters

• **filters**: ``null`` \| [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[]

#### Defined in

node_modules/@pixi/display/index.d.ts:589

___

### hitArea

• **hitArea**: [`IHitArea`](../interfaces/components_ClusterNodeContainer._internal_.IHitArea.md)

#### Inherited from

Omit.hitArea

#### Defined in

node_modules/@pixi/interaction/index.d.ts:503

___

### interactive

• **interactive**: `boolean`

#### Inherited from

Omit.interactive

#### Defined in

node_modules/@pixi/interaction/index.d.ts:501

___

### interactiveChildren

• **interactiveChildren**: `boolean`

#### Inherited from

Omit.interactiveChildren

#### Defined in

node_modules/@pixi/interaction/index.d.ts:502

___

### isMask

• **isMask**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:591

___

### isSprite

• **isSprite**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:590

___

### name

• **name**: `string`

#### Inherited from

Omit.name

#### Defined in

node_modules/@pixi/mixin-get-child-by-name/global.d.ts:5

___

### parent

• **parent**: [`Container`](components_ClusterNodeContainer._internal_.Container.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:582

___

### renderId

• `Optional` **renderId**: `number`

#### Inherited from

Omit.renderId

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:197

___

### renderable

• **renderable**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:587

___

### sortDirty

• `Abstract` **sortDirty**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:581

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

Omit.tabIndex

#### Defined in

node_modules/@pixi/accessibility/index.d.ts:191

___

### tempDisplayObjectParent

• `Private` **tempDisplayObjectParent**: `any`

#### Defined in

node_modules/@pixi/display/index.d.ts:603

___

### trackedPointers

• **trackedPointers**: `Object`

#### Index signature

▪ [x: `number`]: [`InteractionTrackingData`](components_ClusterNodeContainer._internal_.InteractionTrackingData.md)

#### Inherited from

Omit.trackedPointers

#### Defined in

node_modules/@pixi/interaction/index.d.ts:506

___

### transform

• **transform**: [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:584

___

### visible

• **visible**: `boolean`

#### Defined in

node_modules/@pixi/display/index.d.ts:586

___

### worldAlpha

• **worldAlpha**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:583

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### \_tempDisplayObjectParent

• `Protected` `get` **_tempDisplayObjectParent**(): [`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

**`member`** {PIXI.Container}

#### Returns

[`TemporaryDisplayObject`](components_ClusterNodeContainer._internal_.TemporaryDisplayObject.md)

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

#### Defined in

node_modules/@pixi/display/index.d.ts:857

___

### destroyed

• `get` **destroyed**(): `boolean`

Readonly flag for destroyed display objects.

#### Returns

`boolean`

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

Omit.\_cacheAsBitmapDestroy

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:18

___

### \_calculateCachedBounds

▸ **_calculateCachedBounds**(): `void`

#### Returns

`void`

#### Inherited from

Omit.\_calculateCachedBounds

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:13

___

### \_destroyCachedDisplayObject

▸ **_destroyCachedDisplayObject**(): `void`

#### Returns

`void`

#### Inherited from

Omit.\_destroyCachedDisplayObject

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:17

___

### \_getCachedLocalBounds

▸ **_getCachedLocalBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

Omit.\_getCachedLocalBounds

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

Omit.\_initCachedDisplayObject

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

Omit.\_initCachedDisplayObjectCanvas

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:16

___

### \_recursivePostUpdateTransform

▸ `Protected` **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

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

Omit.\_renderCached

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

Omit.\_renderCachedCanvas

#### Defined in

node_modules/@pixi/mixin-cache-as-bitmap/global.d.ts:15

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[addListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### calculateBounds

▸ `Abstract` **calculateBounds**(): `void`

Recalculates the bounds of the display object.

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:639

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

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[emit](components_ClusterNodeContainer._internal_.EventEmitter-1.md#emit)

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

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[eventNames](components_ClusterNodeContainer._internal_.EventEmitter-1.md#eventnames)

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

Omit.getGlobalPosition

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

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listenerCount](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listenercount)

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

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeChild

▸ `Abstract` **removeChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `DisplayObject` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:640

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DisplayObject`](components_ClusterNodeContainer._internal_.DisplayObject.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### render

▸ `Abstract` **render**(`renderer`): `void`

Renders the object using the WebGL renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:646

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

#### Defined in

node_modules/@pixi/display/index.d.ts:728

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `this`

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

`this`

The DisplayObject instance

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

#### Defined in

node_modules/@pixi/display/index.d.ts:721

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the object transform for rendering.

TODO - Optimization pass!

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:657

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
