[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/addFlexLayout/flex-layout](utils_addFlexLayout_flex_layout.md) / <internal\>

# Namespace: <internal\>

[utils/addFlexLayout/flex-layout](utils_addFlexLayout_flex_layout.md).<internal/>

## Table of contents

### Type aliases

- [IAnimationState](utils_addFlexLayout_flex_layout._internal_#ianimationstate)
- [PixelsOrPercentage](utils_addFlexLayout_flex_layout._internal_#pixelsorpercentage)
- [YogaSize](utils_addFlexLayout_flex_layout._internal_#yogasize)

## Type aliases

### IAnimationState

Ƭ **IAnimationState**: `Object`

#### Type declaration

| Name      | Type                               |
| :-------- | :--------------------------------- |
| `curX`    | `number`                           |
| `curY`    | `number`                           |
| `elapsed` | `number`                           |
| `fromX`   | `number`                           |
| `fromY`   | `number`                           |
| `time`    | `number`                           |
| `toX`     | `number`                           |
| `toY`     | `number`                           |
| `easing`  | (`progress`: `number`) => `number` |

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:23](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L23)

---

### PixelsOrPercentage

Ƭ **PixelsOrPercentage**: `number` \| `string`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:20](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L20)

---

### YogaSize

Ƭ **YogaSize**: [`PixelsOrPercentage`](utils_addFlexLayout_flex_layout._internal_#pixelsorpercentage) \| `"pixi"` \| `"auto"`

#### Defined in

[utils/addFlexLayout/flex-layout/YogaLayout.ts:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L21)
