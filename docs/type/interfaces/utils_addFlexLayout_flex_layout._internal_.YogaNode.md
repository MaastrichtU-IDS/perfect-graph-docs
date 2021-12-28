[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/addFlexLayout/flex-layout](../modules/utils_addFlexLayout_flex_layout.md) / [<internal\>](../modules/utils_addFlexLayout_flex_layout._internal_.md) / YogaNode

# Interface: YogaNode

[utils/addFlexLayout/flex-layout](../modules/utils_addFlexLayout_flex_layout.md).[<internal>](../modules/utils_addFlexLayout_flex_layout._internal_.md).YogaNode

## Table of contents

### Methods

- [calculateLayout](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#calculatelayout)
- [copyStyle](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#copystyle)
- [free](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#free)
- [freeRecursive](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#freerecursive)
- [getAlignContent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getaligncontent)
- [getAlignItems](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getalignitems)
- [getAlignSelf](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getalignself)
- [getAspectRatio](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getaspectratio)
- [getBorder](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getborder)
- [getChild](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getchild)
- [getChildCount](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getchildcount)
- [getComputedBorder](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedborder)
- [getComputedBottom](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedbottom)
- [getComputedHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedheight)
- [getComputedLayout](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedlayout)
- [getComputedLeft](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedleft)
- [getComputedMargin](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedmargin)
- [getComputedPadding](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedpadding)
- [getComputedRight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedright)
- [getComputedTop](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedtop)
- [getComputedWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getcomputedwidth)
- [getDisplay](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getdisplay)
- [getFlexBasis](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getflexbasis)
- [getFlexDirection](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getflexdirection)
- [getFlexGrow](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getflexgrow)
- [getFlexShrink](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getflexshrink)
- [getFlexWrap](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getflexwrap)
- [getHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getheight)
- [getJustifyContent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getjustifycontent)
- [getMargin](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getmargin)
- [getMaxHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getmaxheight)
- [getMaxWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getmaxwidth)
- [getMinHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getminheight)
- [getMinWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getminwidth)
- [getOverflow](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getoverflow)
- [getPadding](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getpadding)
- [getParent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getparent)
- [getPosition](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getposition)
- [getPositionType](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getpositiontype)
- [getWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#getwidth)
- [insertChild](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#insertchild)
- [isDirty](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#isdirty)
- [markDirty](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#markdirty)
- [removeChild](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#removechild)
- [reset](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#reset)
- [setAlignContent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setaligncontent)
- [setAlignItems](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setalignitems)
- [setAlignSelf](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setalignself)
- [setAspectRatio](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setaspectratio)
- [setBorder](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setborder)
- [setDisplay](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setdisplay)
- [setFlex](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflex)
- [setFlexBasis](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexbasis)
- [setFlexBasisPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexbasispercent)
- [setFlexDirection](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexdirection)
- [setFlexGrow](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexgrow)
- [setFlexShrink](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexshrink)
- [setFlexWrap](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setflexwrap)
- [setHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setheight)
- [setHeightAuto](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setheightauto)
- [setHeightPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setheightpercent)
- [setJustifyContent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setjustifycontent)
- [setMargin](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmargin)
- [setMarginAuto](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmarginauto)
- [setMarginPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmarginpercent)
- [setMaxHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmaxheight)
- [setMaxHeightPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmaxheightpercent)
- [setMaxWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmaxwidth)
- [setMaxWidthPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmaxwidthpercent)
- [setMeasureFunc](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setmeasurefunc)
- [setMinHeight](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setminheight)
- [setMinHeightPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setminheightpercent)
- [setMinWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setminwidth)
- [setMinWidthPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setminwidthpercent)
- [setOverflow](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setoverflow)
- [setPadding](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setpadding)
- [setPaddingPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setpaddingpercent)
- [setPosition](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setposition)
- [setPositionPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setpositionpercent)
- [setPositionType](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setpositiontype)
- [setWidth](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setwidth)
- [setWidthAuto](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setwidthauto)
- [setWidthPercent](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#setwidthpercent)
- [unsetMeasureFunc](utils_addFlexLayout_flex_layout._internal_.YogaNode.md#unsetmeasurefunc)

## Methods

### calculateLayout

▸ **calculateLayout**(`width?`, `height?`, `direction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |
| `direction?` | [`YogaDirection`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogadirection) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:240

___

### copyStyle

▸ **copyStyle**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:245

___

### free

▸ **free**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:246

___

### freeRecursive

▸ **freeRecursive**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:247

___

### getAlignContent

▸ **getAlignContent**(): [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Returns

[`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:248

___

### getAlignItems

▸ **getAlignItems**(): [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Returns

[`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:249

___

### getAlignSelf

▸ **getAlignSelf**(): [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Returns

[`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:250

___

### getAspectRatio

▸ **getAspectRatio**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:251

___

### getBorder

▸ **getBorder**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:252

___

### getChild

▸ **getChild**(`index`): [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:253

___

### getChildCount

▸ **getChildCount**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:254

___

### getComputedBorder

▸ **getComputedBorder**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:255

___

### getComputedBottom

▸ **getComputedBottom**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:256

___

### getComputedHeight

▸ **getComputedHeight**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:257

___

### getComputedLayout

▸ **getComputedLayout**(): [`Layout`](../classes/utils_addFlexLayout_flex_layout._internal_.Layout.md)

#### Returns

[`Layout`](../classes/utils_addFlexLayout_flex_layout._internal_.Layout.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:258

___

### getComputedLeft

▸ **getComputedLeft**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:259

___

### getComputedMargin

▸ **getComputedMargin**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:260

___

### getComputedPadding

▸ **getComputedPadding**(`edge`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:261

___

### getComputedRight

▸ **getComputedRight**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:262

___

### getComputedTop

▸ **getComputedTop**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:263

___

### getComputedWidth

▸ **getComputedWidth**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:264

___

### getDisplay

▸ **getDisplay**(): [`YogaDisplay`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogadisplay)

#### Returns

[`YogaDisplay`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogadisplay)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:265

___

### getFlexBasis

▸ **getFlexBasis**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:266

___

### getFlexDirection

▸ **getFlexDirection**(): [`YogaFlexDirection`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexdirection)

#### Returns

[`YogaFlexDirection`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexdirection)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:267

___

### getFlexGrow

▸ **getFlexGrow**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:268

___

### getFlexShrink

▸ **getFlexShrink**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:269

___

### getFlexWrap

▸ **getFlexWrap**(): [`YogaFlexWrap`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexwrap)

#### Returns

[`YogaFlexWrap`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexwrap)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:270

___

### getHeight

▸ **getHeight**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:271

___

### getJustifyContent

▸ **getJustifyContent**(): [`YogaJustifyContent`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogajustifycontent)

#### Returns

[`YogaJustifyContent`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogajustifycontent)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:272

___

### getMargin

▸ **getMargin**(`edge`): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:273

___

### getMaxHeight

▸ **getMaxHeight**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:274

___

### getMaxWidth

▸ **getMaxWidth**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:275

___

### getMinHeight

▸ **getMinHeight**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:276

___

### getMinWidth

▸ **getMinWidth**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:277

___

### getOverflow

▸ **getOverflow**(): [`YogaOverflow`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaoverflow)

#### Returns

[`YogaOverflow`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaoverflow)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:278

___

### getPadding

▸ **getPadding**(`edge`): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:279

___

### getParent

▸ **getParent**(): ``null`` \| [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md)

#### Returns

``null`` \| [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:280

___

### getPosition

▸ **getPosition**(`edge`): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:281

___

### getPositionType

▸ **getPositionType**(): [`YogaPositionType`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogapositiontype)

#### Returns

[`YogaPositionType`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogapositiontype)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:282

___

### getWidth

▸ **getWidth**(): [`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Returns

[`Value`](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:283

___

### insertChild

▸ **insertChild**(`child`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md) |
| `index` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:284

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:285

___

### markDirty

▸ **markDirty**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:286

___

### removeChild

▸ **removeChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`YogaNode`](utils_addFlexLayout_flex_layout._internal_.YogaNode.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:287

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:288

___

### setAlignContent

▸ **setAlignContent**(`alignContent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alignContent` | [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:289

___

### setAlignItems

▸ **setAlignItems**(`alignItems`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alignItems` | [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:290

___

### setAlignSelf

▸ **setAlignSelf**(`alignSelf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alignSelf` | [`YogaAlign`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaalign) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:291

___

### setAspectRatio

▸ **setAspectRatio**(`aspectRatio`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aspectRatio` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:292

___

### setBorder

▸ **setBorder**(`edge`, `borderWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `borderWidth` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:293

___

### setDisplay

▸ **setDisplay**(`display`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `display` | [`YogaDisplay`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogadisplay) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:294

___

### setFlex

▸ **setFlex**(`flex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flex` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:295

___

### setFlexBasis

▸ **setFlexBasis**(`flexBasis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexBasis` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:296

___

### setFlexBasisPercent

▸ **setFlexBasisPercent**(`flexBasis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexBasis` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:297

___

### setFlexDirection

▸ **setFlexDirection**(`flexDirection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexDirection` | [`YogaFlexDirection`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexdirection) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:298

___

### setFlexGrow

▸ **setFlexGrow**(`flexGrow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexGrow` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:299

___

### setFlexShrink

▸ **setFlexShrink**(`flexShrink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexShrink` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:300

___

### setFlexWrap

▸ **setFlexWrap**(`flexWrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flexWrap` | [`YogaFlexWrap`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaflexwrap) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:301

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:302

___

### setHeightAuto

▸ **setHeightAuto**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:303

___

### setHeightPercent

▸ **setHeightPercent**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:304

___

### setJustifyContent

▸ **setJustifyContent**(`justifyContent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `justifyContent` | [`YogaJustifyContent`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogajustifycontent) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:305

___

### setMargin

▸ **setMargin**(`edge`, `margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `margin` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:306

___

### setMarginAuto

▸ **setMarginAuto**(`edge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:307

___

### setMarginPercent

▸ **setMarginPercent**(`edge`, `margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `margin` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:308

___

### setMaxHeight

▸ **setMaxHeight**(`maxHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxHeight` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:309

___

### setMaxHeightPercent

▸ **setMaxHeightPercent**(`maxHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxHeight` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:310

___

### setMaxWidth

▸ **setMaxWidth**(`maxWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxWidth` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:311

___

### setMaxWidthPercent

▸ **setMaxWidthPercent**(`maxWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxWidth` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:312

___

### setMeasureFunc

▸ **setMeasureFunc**(`measureFunc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureFunc` | (`width`: `number`, `widthMeasureMode`: [`YogaMeasureMode`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogameasuremode), `height`: `number`, `heightMeasureMode`: [`YogaMeasureMode`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogameasuremode)) => ``null`` \| { `height?`: `number` ; `width?`: `number`  } |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:313

___

### setMinHeight

▸ **setMinHeight**(`minHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minHeight` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:314

___

### setMinHeightPercent

▸ **setMinHeightPercent**(`minHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minHeight` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:315

___

### setMinWidth

▸ **setMinWidth**(`minWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minWidth` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:316

___

### setMinWidthPercent

▸ **setMinWidthPercent**(`minWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minWidth` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:317

___

### setOverflow

▸ **setOverflow**(`overflow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overflow` | [`YogaOverflow`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaoverflow) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:318

___

### setPadding

▸ **setPadding**(`edge`, `padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `padding` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:319

___

### setPaddingPercent

▸ **setPaddingPercent**(`edge`, `padding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `padding` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:320

___

### setPosition

▸ **setPosition**(`edge`, `position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `position` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:321

___

### setPositionPercent

▸ **setPositionPercent**(`edge`, `position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`YogaEdge`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogaedge) |
| `position` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:322

___

### setPositionType

▸ **setPositionType**(`positionType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `positionType` | [`YogaPositionType`](../modules/utils_addFlexLayout_flex_layout._internal_.md#yogapositiontype) |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:323

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:324

___

### setWidthAuto

▸ **setWidthAuto**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:325

___

### setWidthPercent

▸ **setWidthPercent**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:326

___

### unsetMeasureFunc

▸ **unsetMeasureFunc**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:327
