[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/addFlexLayout/flex-layout](../modules/utils_addFlexLayout_flex_layout.md) / YogaLayout

# Class: YogaLayout

[utils/addFlexLayout/flex-layout](../modules/utils_addFlexLayout_flex_layout.md).YogaLayout

## Table of contents

### Constructors

- [constructor](utils_addFlexLayout_flex_layout.YogaLayout.md#constructor)

### Properties

- [\_animation](utils_addFlexLayout_flex_layout.YogaLayout.md#_animation)
- [\_aspectRatio](utils_addFlexLayout_flex_layout.YogaLayout.md#_aspectratio)
- [\_cachedLayout](utils_addFlexLayout_flex_layout.YogaLayout.md#_cachedlayout)
- [\_gap](utils_addFlexLayout_flex_layout.YogaLayout.md#_gap)
- [\_height](utils_addFlexLayout_flex_layout.YogaLayout.md#_height)
- [\_lastLayout](utils_addFlexLayout_flex_layout.YogaLayout.md#_lastlayout)
- [\_lastRecalculationDuration](utils_addFlexLayout_flex_layout.YogaLayout.md#_lastrecalculationduration)
- [\_marginLeft](utils_addFlexLayout_flex_layout.YogaLayout.md#_marginleft)
- [\_marginTop](utils_addFlexLayout_flex_layout.YogaLayout.md#_margintop)
- [\_needUpdateAsRoot](utils_addFlexLayout_flex_layout.YogaLayout.md#_needupdateasroot)
- [\_width](utils_addFlexLayout_flex_layout.YogaLayout.md#_width)
- [animationConfig](utils_addFlexLayout_flex_layout.YogaLayout.md#animationconfig)
- [children](utils_addFlexLayout_flex_layout.YogaLayout.md#children)
- [keepAspectRatio](utils_addFlexLayout_flex_layout.YogaLayout.md#keepaspectratio)
- [node](utils_addFlexLayout_flex_layout.YogaLayout.md#node)
- [parent](utils_addFlexLayout_flex_layout.YogaLayout.md#parent)
- [rescaleToYoga](utils_addFlexLayout_flex_layout.YogaLayout.md#rescaletoyoga)
- [target](utils_addFlexLayout_flex_layout.YogaLayout.md#target)
- [AFTER\_LAYOUT\_UPDATED\_EVENT](utils_addFlexLayout_flex_layout.YogaLayout.md#after_layout_updated_event)
- [LAYOUT\_UPDATED\_EVENT](utils_addFlexLayout_flex_layout.YogaLayout.md#layout_updated_event)
- [NEED\_LAYOUT\_UPDATE](utils_addFlexLayout_flex_layout.YogaLayout.md#need_layout_update)
- [isRendering](utils_addFlexLayout_flex_layout.YogaLayout.md#isrendering)
- [roots](utils_addFlexLayout_flex_layout.YogaLayout.md#roots)

### Accessors

- [alignContent](utils_addFlexLayout_flex_layout.YogaLayout.md#aligncontent)
- [alignItems](utils_addFlexLayout_flex_layout.YogaLayout.md#alignitems)
- [alignSelf](utils_addFlexLayout_flex_layout.YogaLayout.md#alignself)
- [animationState](utils_addFlexLayout_flex_layout.YogaLayout.md#animationstate)
- [aspectRatio](utils_addFlexLayout_flex_layout.YogaLayout.md#aspectratio)
- [border](utils_addFlexLayout_flex_layout.YogaLayout.md#border)
- [borderAll](utils_addFlexLayout_flex_layout.YogaLayout.md#borderall)
- [borderBottom](utils_addFlexLayout_flex_layout.YogaLayout.md#borderbottom)
- [borderLeft](utils_addFlexLayout_flex_layout.YogaLayout.md#borderleft)
- [borderRight](utils_addFlexLayout_flex_layout.YogaLayout.md#borderright)
- [borderTop](utils_addFlexLayout_flex_layout.YogaLayout.md#bordertop)
- [bottom](utils_addFlexLayout_flex_layout.YogaLayout.md#bottom)
- [calculatedHeight](utils_addFlexLayout_flex_layout.YogaLayout.md#calculatedheight)
- [calculatedWidth](utils_addFlexLayout_flex_layout.YogaLayout.md#calculatedwidth)
- [config](utils_addFlexLayout_flex_layout.YogaLayout.md#config)
- [display](utils_addFlexLayout_flex_layout.YogaLayout.md#display)
- [flexBasis](utils_addFlexLayout_flex_layout.YogaLayout.md#flexbasis)
- [flexDirection](utils_addFlexLayout_flex_layout.YogaLayout.md#flexdirection)
- [flexGrow](utils_addFlexLayout_flex_layout.YogaLayout.md#flexgrow)
- [flexShrink](utils_addFlexLayout_flex_layout.YogaLayout.md#flexshrink)
- [flexWrap](utils_addFlexLayout_flex_layout.YogaLayout.md#flexwrap)
- [gap](utils_addFlexLayout_flex_layout.YogaLayout.md#gap)
- [hasContantDeclaredSize](utils_addFlexLayout_flex_layout.YogaLayout.md#hascontantdeclaredsize)
- [height](utils_addFlexLayout_flex_layout.YogaLayout.md#height)
- [isHeightCalculatedFromPixi](utils_addFlexLayout_flex_layout.YogaLayout.md#isheightcalculatedfrompixi)
- [isRoot](utils_addFlexLayout_flex_layout.YogaLayout.md#isroot)
- [isWidthCalculatedFromPixi](utils_addFlexLayout_flex_layout.YogaLayout.md#iswidthcalculatedfrompixi)
- [justifyContent](utils_addFlexLayout_flex_layout.YogaLayout.md#justifycontent)
- [left](utils_addFlexLayout_flex_layout.YogaLayout.md#left)
- [margin](utils_addFlexLayout_flex_layout.YogaLayout.md#margin)
- [marginAll](utils_addFlexLayout_flex_layout.YogaLayout.md#marginall)
- [marginBottom](utils_addFlexLayout_flex_layout.YogaLayout.md#marginbottom)
- [marginLeft](utils_addFlexLayout_flex_layout.YogaLayout.md#marginleft)
- [marginRight](utils_addFlexLayout_flex_layout.YogaLayout.md#marginright)
- [marginTop](utils_addFlexLayout_flex_layout.YogaLayout.md#margintop)
- [maxHeight](utils_addFlexLayout_flex_layout.YogaLayout.md#maxheight)
- [maxWidth](utils_addFlexLayout_flex_layout.YogaLayout.md#maxwidth)
- [minHeight](utils_addFlexLayout_flex_layout.YogaLayout.md#minheight)
- [minWidth](utils_addFlexLayout_flex_layout.YogaLayout.md#minwidth)
- [padding](utils_addFlexLayout_flex_layout.YogaLayout.md#padding)
- [paddingAll](utils_addFlexLayout_flex_layout.YogaLayout.md#paddingall)
- [paddingBottom](utils_addFlexLayout_flex_layout.YogaLayout.md#paddingbottom)
- [paddingLeft](utils_addFlexLayout_flex_layout.YogaLayout.md#paddingleft)
- [paddingRight](utils_addFlexLayout_flex_layout.YogaLayout.md#paddingright)
- [paddingTop](utils_addFlexLayout_flex_layout.YogaLayout.md#paddingtop)
- [position](utils_addFlexLayout_flex_layout.YogaLayout.md#position)
- [right](utils_addFlexLayout_flex_layout.YogaLayout.md#right)
- [root](utils_addFlexLayout_flex_layout.YogaLayout.md#root)
- [top](utils_addFlexLayout_flex_layout.YogaLayout.md#top)
- [width](utils_addFlexLayout_flex_layout.YogaLayout.md#width)

### Methods

- [\_parseValue](utils_addFlexLayout_flex_layout.YogaLayout.md#_parsevalue)
- [addChild](utils_addFlexLayout_flex_layout.YogaLayout.md#addchild)
- [copy](utils_addFlexLayout_flex_layout.YogaLayout.md#copy)
- [fillDefaults](utils_addFlexLayout_flex_layout.YogaLayout.md#filldefaults)
- [fromConfig](utils_addFlexLayout_flex_layout.YogaLayout.md#fromconfig)
- [getComputedLayout](utils_addFlexLayout_flex_layout.YogaLayout.md#getcomputedlayout)
- [recalculateLayout](utils_addFlexLayout_flex_layout.YogaLayout.md#recalculatelayout)
- [removeChild](utils_addFlexLayout_flex_layout.YogaLayout.md#removechild)
- [requestLayoutUpdate](utils_addFlexLayout_flex_layout.YogaLayout.md#requestlayoutupdate)
- [update](utils_addFlexLayout_flex_layout.YogaLayout.md#update)
- [updateGap](utils_addFlexLayout_flex_layout.YogaLayout.md#updategap)
- [willLayoutWillBeRecomputed](utils_addFlexLayout_flex_layout.YogaLayout.md#willlayoutwillberecomputed)

## Constructors

### constructor

• **new YogaLayout**(`pixiObject?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixiObject` | `any` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:116](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L116)

## Properties

### \_animation

• `Private` **\_animation**: `IAnimationState`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:95](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L95)

___

### \_aspectRatio

• `Private` **\_aspectRatio**: `number`

Used instead of Yoga.AspectRatio because of Yoga issue https://github.com/facebook/yoga/issues/677

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:105](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L105)

___

### \_cachedLayout

• `Private` **\_cachedLayout**: `any`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:89](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L89)

___

### \_gap

• `Private` **\_gap**: `number` = `0`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:107](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L107)

___

### \_height

• `Private` **\_height**: `YogaSize`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:87](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L87)

___

### \_lastLayout

• `Private` **\_lastLayout**: `any`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:91](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L91)

___

### \_lastRecalculationDuration

• `Private` **\_lastRecalculationDuration**: `number` = `0`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:93](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L93)

___

### \_marginLeft

• `Private` **\_marginLeft**: `number` = `0`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:114](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L114)

___

### \_marginTop

• `Private` **\_marginTop**: `number` = `0`

Internal values stored to reduce calls to nbind

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:112](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L112)

___

### \_needUpdateAsRoot

• `Private` **\_needUpdateAsRoot**: `boolean` = `false`

Will be recalculated in next frame

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:100](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L100)

___

### \_width

• `Private` **\_width**: `YogaSize`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:85](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L85)

___

### animationConfig

• **animationConfig**: [`IYogaAnimationConfig`](../modules/utils_addFlexLayout_flex_layout.md#iyogaanimationconfig)

If set, position transitions will be animated

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:72](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L72)

___

### children

• **children**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)[] = `[]`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:65](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L65)

___

### keepAspectRatio

• **keepAspectRatio**: `undefined` \| `boolean`

If true and rescaleToYoga===true, resizing will keep aspect ratio of obejct.
Defaults to true on PIXI.Text and PIXI.Sprite.

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:83](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L83)

___

### node

• `Readonly` **node**: `YogaNode`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:63](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L63)

___

### parent

• `Optional` **parent**: [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:67](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L67)

___

### rescaleToYoga

• **rescaleToYoga**: `boolean` = `false`

True if Yoga should manage PIXI objects width/height

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:77](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L77)

___

### target

• `Readonly` **target**: `any`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:61](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L61)

___

### AFTER\_LAYOUT\_UPDATED\_EVENT

▪ `Static` `Readonly` **AFTER\_LAYOUT\_UPDATED\_EVENT**: ``"AFTER_LAYOUT_UPDATED_EVENT"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:57](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L57)

___

### LAYOUT\_UPDATED\_EVENT

▪ `Static` `Readonly` **LAYOUT\_UPDATED\_EVENT**: ``"LAYOUT_UPDATED_EVENT"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:55](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L55)

___

### NEED\_LAYOUT\_UPDATE

▪ `Static` `Readonly` **NEED\_LAYOUT\_UPDATE**: ``"NEED_LAYOUT_UPDATE"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:59](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L59)

___

### isRendering

▪ `Static` **isRendering**: `boolean` = `true`

Internal value. True if we are currently in WebGLRenderer.render() (based on 'prerender' and 'postrender' events). Used to skip some updateTransform calls.

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:48](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L48)

___

### roots

▪ `Static` **roots**: `Map`<`string`, [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)\>

Experimental feature for building layouts independent of pixi tree

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:53](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L53)

## Accessors

### alignContent

• `get` **alignContent**(): ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Returns

``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:423](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L423)

• `set` **alignContent**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:417](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L417)

___

### alignItems

• `get` **alignItems**(): ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Returns

``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:434](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L434)

• `set` **alignItems**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:428](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L428)

___

### alignSelf

• `get` **alignSelf**(): ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Returns

``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:446](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L446)

• `set` **alignSelf**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``"auto"`` \| ``"baseline"`` \| ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"stretch"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:440](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L440)

___

### animationState

• `get` **animationState**(): `Readonly`<`IAnimationState`\>

#### Returns

`Readonly`<`IAnimationState`\>

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:148](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L148)

___

### aspectRatio

• `get` **aspectRatio**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:320](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L320)

• `set` **aspectRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:312](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L312)

___

### border

• `get` **border**(): `number`[]

#### Returns

`number`[]

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:620](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L620)

• `set` **border**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number`[] |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:612](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L612)

___

### borderAll

• `set` **borderAll**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:624](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L624)

___

### borderBottom

• `get` **borderBottom**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:642](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L642)

• `set` **borderBottom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:637](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L637)

___

### borderLeft

• `get` **borderLeft**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:651](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L651)

• `set` **borderLeft**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:646](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L646)

___

### borderRight

• `get` **borderRight**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:660](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L660)

• `set` **borderRight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:655](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L655)

___

### borderTop

• `get` **borderTop**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:633](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L633)

• `set` **borderTop**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:628](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L628)

___

### bottom

• `get` **bottom**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:678](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L678)

• `set` **bottom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:673](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L673)

___

### calculatedHeight

• `get` **calculatedHeight**(): `number`

Returns computed height in pixels

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:342](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L342)

___

### calculatedWidth

• `get` **calculatedWidth**(): `number`

Returns computed width in pixels

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:335](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L335)

___

### config

• `set` **config**(`config`): `void`

Same as 'fromConfig()'

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)\> |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:171](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L171)

___

### display

• `get` **display**(): ``"flex"`` \| ``"none"``

#### Returns

``"flex"`` \| ``"none"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:743](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L743)

• `set` **display**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``"flex"`` \| ``"none"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:737](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L737)

___

### flexBasis

• `get` **flexBasis**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:486](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L486)

• `set` **flexBasis**(`basis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `basis` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:481](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L481)

___

### flexDirection

• `get` **flexDirection**(): ``"row"`` \| ``"column"`` \| ``"column-reverse"`` \| ``"row-reverse"``

#### Returns

``"row"`` \| ``"column"`` \| ``"column-reverse"`` \| ``"row-reverse"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:401](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L401)

• `set` **flexDirection**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | ``"row"`` \| ``"column"`` \| ``"column-reverse"`` \| ``"row-reverse"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:393](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L393)

___

### flexGrow

• `get` **flexGrow**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:468](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L468)

• `set` **flexGrow**(`grow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `grow` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:463](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L463)

___

### flexShrink

• `get` **flexShrink**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:477](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L477)

• `set` **flexShrink**(`shrink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shrink` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:472](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L472)

___

### flexWrap

• `get` **flexWrap**(): ``"wrap"`` \| ``"no-wrap"`` \| ``"wrap-reverse"``

#### Returns

``"wrap"`` \| ``"no-wrap"`` \| ``"wrap-reverse"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:458](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L458)

• `set` **flexWrap**(`wrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrap` | ``"wrap"`` \| ``"no-wrap"`` \| ``"wrap-reverse"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:452](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L452)

___

### gap

• `get` **gap**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:757](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L757)

• `set` **gap**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:748](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L748)

___

### hasContantDeclaredSize

• `get` **hasContantDeclaredSize**(): `boolean`

Returns true if object size is independent of its children sizes.

#### Returns

`boolean`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:248](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L248)

___

### height

• `get` **height**(): `YogaSize`

Can handle:
- pixels (eg 150)
- percents ("50%")
- "auto" to use values from yoga
- "pixi" to use DisplayObject.width/height

#### Returns

`YogaSize`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:388](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L388)

• `set` **height**(`value`): `void`

Can handle:
- pixels (eg 150)
- percents ("50%")
- "auto" to use values from yoga
- "pixi" to use DisplayObject.width/height

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `YogaSize` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:377](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L377)

___

### isHeightCalculatedFromPixi

• `get` **isHeightCalculatedFromPixi**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:328](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L328)

___

### isRoot

• `get` **isRoot**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:241](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L241)

___

### isWidthCalculatedFromPixi

• `get` **isWidthCalculatedFromPixi**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:324](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L324)

___

### justifyContent

• `get` **justifyContent**(): ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"``

#### Returns

``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:412](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L412)

• `set` **justifyContent**(`just`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `just` | ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` \| ``"space-between"`` \| ``"space-around"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:406](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L406)

___

### left

• `get` **left**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:687](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L687)

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:682](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L682)

___

### margin

• `get` **margin**(): `number`[]

#### Returns

`number`[]

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:566](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L566)

• `set` **margin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number`[] |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:554](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L554)

___

### marginAll

• `set` **marginAll**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:562](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L562)

___

### marginBottom

• `get` **marginBottom**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:587](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L587)

• `set` **marginBottom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:582](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L582)

___

### marginLeft

• `get` **marginLeft**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:599](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L599)

• `set` **marginLeft**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:591](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L591)

___

### marginRight

• `get` **marginRight**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:608](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L608)

• `set` **marginRight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:603](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L603)

___

### marginTop

• `get` **marginTop**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:578](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L578)

• `set` **marginTop**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:570](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L570)

___

### maxHeight

• `get` **maxHeight**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:732](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L732)

• `set` **maxHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:727](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L727)

___

### maxWidth

• `get` **maxWidth**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:723](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L723)

• `set` **maxWidth**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:718](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L718)

___

### minHeight

• `get` **minHeight**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:714](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L714)

• `set` **minHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:709](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L709)

___

### minWidth

• `get` **minWidth**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:705](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L705)

• `set` **minWidth**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:700](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L700)

___

### padding

• `get` **padding**(): `number`[]

#### Returns

`number`[]

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:510](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L510)

• `set` **padding**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number`[] |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:502](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L502)

___

### paddingAll

• `set` **paddingAll**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:514](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L514)

___

### paddingBottom

• `get` **paddingBottom**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:532](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L532)

• `set` **paddingBottom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:527](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L527)

___

### paddingLeft

• `get` **paddingLeft**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:541](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L541)

• `set` **paddingLeft**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:536](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L536)

___

### paddingRight

• `get` **paddingRight**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:550](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L550)

• `set` **paddingRight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:545](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L545)

___

### paddingTop

• `get` **paddingTop**(): `number`

#### Returns

`number`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:523](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L523)

• `set` **paddingTop**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:518](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L518)

___

### position

• `get` **position**(): ``"relative"`` \| ``"absolute"``

#### Returns

``"relative"`` \| ``"absolute"``

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:497](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L497)

• `set` **position**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"relative"`` \| ``"absolute"`` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:491](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L491)

___

### right

• `get` **right**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:696](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L696)

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:691](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L691)

___

### root

• `set` **root**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:152](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L152)

___

### top

• `get` **top**(): `PixelsOrPercentage`

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:669](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L669)

• `set` **top**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `PixelsOrPercentage` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:664](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L664)

___

### width

• `get` **width**(): `YogaSize`

Can handle:
- pixels (eg 150)
- percents ("50%")
- "auto" to use values from yoga
- "pixi" to use DisplayObject.width/height

#### Returns

`YogaSize`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:365](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L365)

• `set` **width**(`value`): `void`

Can handle:
- pixels (eg 150)
- percents ("50%")
- "auto" to use values from yoga
- "pixi" to use DisplayObject.width/height

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `YogaSize` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:354](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L354)

## Methods

### \_parseValue

▸ `Private` **_parseValue**(`value`): `PixelsOrPercentage`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Object` |
| `value.unit` | `any` |
| `value.value` | `any` |

#### Returns

`PixelsOrPercentage`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:778](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L778)

___

### addChild

▸ **addChild**(`yoga`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `yoga` | [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md) |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:196](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L196)

___

### copy

▸ **copy**(`layout`): `void`

Copies all properties (styles, size, rescaleToYoga etc) from other YogaLayout objects

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md) |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:179](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L179)

___

### fillDefaults

▸ **fillDefaults**(): `void`

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:188](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L188)

___

### fromConfig

▸ **fromConfig**(`config`): `void`

Assigns given properties to this yoga layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md)\> |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:163](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L163)

___

### getComputedLayout

▸ **getComputedLayout**(): `any`

#### Returns

`any`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:258](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L258)

___

### recalculateLayout

▸ **recalculateLayout**(): `void`

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:222](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L222)

___

### removeChild

▸ **removeChild**(`yoga`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `yoga` | [`YogaLayout`](utils_addFlexLayout_flex_layout.YogaLayout.md) |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:206](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L206)

___

### requestLayoutUpdate

▸ **requestLayoutUpdate**(): `void`

Mark object as dirty and request layout recalculation

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:218](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L218)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:229](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L229)

___

### updateGap

▸ **updateGap**(): `void`

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:761](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L761)

___

### willLayoutWillBeRecomputed

▸ **willLayoutWillBeRecomputed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:253](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L253)
