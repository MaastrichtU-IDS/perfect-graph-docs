[perfect-graph](../README.md) / [Modules](../modules.md) / utils/addFlexLayout/flex-layout

# Module: utils/addFlexLayout/flex-layout

## Table of contents

### Classes

- [YogaLayout](../classes/utils_addFlexLayout_flex_layout.YogaLayout.md)

### Type aliases

- [ComputedLayout](utils_addFlexLayout_flex_layout.md#computedlayout)
- [IFlexLayoutOptions](utils_addFlexLayout_flex_layout.md#iflexlayoutoptions)
- [IYogaAnimationConfig](utils_addFlexLayout_flex_layout.md#iyogaanimationconfig)
- [YogaLayoutConfig](utils_addFlexLayout_flex_layout.md#yogalayoutconfig)

### Variables

- [Align](utils_addFlexLayout_flex_layout.md#align)
- [Display](utils_addFlexLayout_flex_layout.md#display)
- [FlexDirection](utils_addFlexLayout_flex_layout.md#flexdirection)
- [FlexWrap](utils_addFlexLayout_flex_layout.md#flexwrap)
- [JustifyContent](utils_addFlexLayout_flex_layout.md#justifycontent)
- [PositionType](utils_addFlexLayout_flex_layout.md#positiontype)
- [YogaConstants](utils_addFlexLayout_flex_layout.md#yogaconstants)
- [YogaCustomSizeConfig](utils_addFlexLayout_flex_layout.md#yogacustomsizeconfig)
- [YogaEdges](utils_addFlexLayout_flex_layout.md#yogaedges)

### Functions

- [initializeYogaLayout](utils_addFlexLayout_flex_layout.md#initializeyogalayout)
- [yogaSetRenderer](utils_addFlexLayout_flex_layout.md#yogasetrenderer)

## Type aliases

### ComputedLayout

Ƭ **ComputedLayout**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |
| `height` | `number` |
| `left` | `number` |
| `right` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:54](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L54)

___

### IFlexLayoutOptions

Ƭ **IFlexLayoutOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `usePixiSharedTicker` | `boolean` |

#### Defined in

[utils/addFlexLayout/flex-layout/index.ts:13](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/index.ts#L13)

___

### IYogaAnimationConfig

Ƭ **IYogaAnimationConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `easing` | (`progress`: `number`) => `number` |
| `shouldRunAnimation?` | (`yoga`: [`YogaLayout`](../classes/utils_addFlexLayout_flex_layout.YogaLayout.md), `prev`: `any`, `newLayout`: `any`) => `boolean` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L35)

___

### YogaLayoutConfig

Ƭ **YogaLayoutConfig**: `Partial`<[`YogaLayout`](../classes/utils_addFlexLayout_flex_layout.YogaLayout.md)\>

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayoutConfig.ts:4](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaLayoutConfig.ts#L4)

## Variables

### Align

• **Align**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auto` | ``0`` |
| `baseline` | ``5`` |
| `center` | ``2`` |
| `flex-end` | ``3`` |
| `flex-start` | ``1`` |
| `space-around` | ``7`` |
| `space-between` | ``6`` |
| `stretch` | ``4`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:25](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L25)

___

### Display

• **Display**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `flex` | ``0`` |
| `none` | ``1`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L41)

___

### FlexDirection

• **FlexDirection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `column` | ``0`` |
| `column-reverse` | ``1`` |
| `row` | ``2`` |
| `row-reverse` | ``3`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:4](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L4)

___

### FlexWrap

• **FlexWrap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `no-wrap` | ``0`` |
| `wrap` | ``1`` |
| `wrap-reverse` | ``2`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:19](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L19)

___

### JustifyContent

• **JustifyContent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `center` | ``1`` |
| `flex-end` | ``2`` |
| `flex-start` | ``0`` |
| `space-around` | ``4`` |
| `space-between` | ``3`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:11](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L11)

___

### PositionType

• **PositionType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `absolute` | ``1`` |
| `relative` | ``0`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L36)

___

### YogaConstants

• **YogaConstants**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Align` | `Object` |
| `Align.auto` | ``0`` |
| `Align.baseline` | ``5`` |
| `Align.center` | ``2`` |
| `Align.flex-end` | ``3`` |
| `Align.flex-start` | ``1`` |
| `Align.space-around` | ``7`` |
| `Align.space-between` | ``6`` |
| `Align.stretch` | ``4`` |
| `Display` | `Object` |
| `Display.flex` | ``0`` |
| `Display.none` | ``1`` |
| `FlexDirection` | `Object` |
| `FlexDirection.column` | ``0`` |
| `FlexDirection.column-reverse` | ``1`` |
| `FlexDirection.row` | ``2`` |
| `FlexDirection.row-reverse` | ``3`` |
| `FlexWrap` | `Object` |
| `FlexWrap.no-wrap` | ``0`` |
| `FlexWrap.wrap` | ``1`` |
| `FlexWrap.wrap-reverse` | ``2`` |
| `JustifyContent` | `Object` |
| `JustifyContent.center` | ``1`` |
| `JustifyContent.flex-end` | ``2`` |
| `JustifyContent.flex-start` | ``0`` |
| `JustifyContent.space-around` | ``4`` |
| `JustifyContent.space-between` | ``3`` |
| `PositionType` | `Object` |
| `PositionType.absolute` | ``1`` |
| `PositionType.relative` | ``0`` |
| `YogaCustomSizeConfig` | `Object` |
| `YogaCustomSizeConfig.AUTO` | ``"auto"`` |
| `YogaCustomSizeConfig.SCREEN_SIZE` | ``"screen"`` |
| `YogaCustomSizeConfig.WINDOW_SIZE` | ``"window"`` |
| `YogaEdges` | (``0`` \| ``1`` \| ``2`` \| ``3``)[] |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:64](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L64)

___

### YogaCustomSizeConfig

• **YogaCustomSizeConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AUTO` | ``"auto"`` |
| `SCREEN_SIZE` | ``"screen"`` |
| `WINDOW_SIZE` | ``"window"`` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:46](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L46)

___

### YogaEdges

• **YogaEdges**: (``0`` \| ``1`` \| ``2`` \| ``3``)[]

#### Defined in

[utils/addFlexLayout/flex-layout/YogaContants.ts:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/YogaContants.ts#L52)

## Functions

### initializeYogaLayout

▸ **initializeYogaLayout**(`options?`): `void`

Polyfills PIXI.DisplayObject and PIXI.Container

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IFlexLayoutOptions`](utils_addFlexLayout_flex_layout.md#iflexlayoutoptions) |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/index.ts:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/index.ts#L21)

___

### yogaSetRenderer

▸ **yogaSetRenderer**(`renderer`): `void`

Can be used to optimize Yoga update calls.
If renderer is set yoga boundBoxCheck/layotutUpdate in updateTransform will be called ONLY when rendering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[utils/addFlexLayout/flex-layout/index.ts:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/addFlexLayout/flex-layout/index.ts#L34)
