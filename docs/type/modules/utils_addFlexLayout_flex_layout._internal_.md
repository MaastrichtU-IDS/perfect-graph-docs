[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/addFlexLayout/flex-layout](utils_addFlexLayout_flex_layout.md) / <internal\>

# Namespace: <internal\>

[utils/addFlexLayout/flex-layout](utils_addFlexLayout_flex_layout.md).<internal>

## Table of contents

### Classes

- [Layout](../classes/utils_addFlexLayout_flex_layout._internal_.Layout.md)
- [Value](../classes/utils_addFlexLayout_flex_layout._internal_.Value.md)

### Interfaces

- [YogaNode](../interfaces/utils_addFlexLayout_flex_layout._internal_.YogaNode.md)

### Type aliases

- [IAnimationState](utils_addFlexLayout_flex_layout._internal_.md#ianimationstate)
- [PixelsOrPercentage](utils_addFlexLayout_flex_layout._internal_.md#pixelsorpercentage)
- [YogaAlign](utils_addFlexLayout_flex_layout._internal_.md#yogaalign)
- [YogaDirection](utils_addFlexLayout_flex_layout._internal_.md#yogadirection)
- [YogaDisplay](utils_addFlexLayout_flex_layout._internal_.md#yogadisplay)
- [YogaEdge](utils_addFlexLayout_flex_layout._internal_.md#yogaedge)
- [YogaFlexDirection](utils_addFlexLayout_flex_layout._internal_.md#yogaflexdirection)
- [YogaFlexWrap](utils_addFlexLayout_flex_layout._internal_.md#yogaflexwrap)
- [YogaJustifyContent](utils_addFlexLayout_flex_layout._internal_.md#yogajustifycontent)
- [YogaMeasureMode](utils_addFlexLayout_flex_layout._internal_.md#yogameasuremode)
- [YogaOverflow](utils_addFlexLayout_flex_layout._internal_.md#yogaoverflow)
- [YogaPositionType](utils_addFlexLayout_flex_layout._internal_.md#yogapositiontype)
- [YogaSize](utils_addFlexLayout_flex_layout._internal_.md#yogasize)

### Variables

- [ALIGN\_AUTO](utils_addFlexLayout_flex_layout._internal_.md#align_auto)
- [ALIGN\_BASELINE](utils_addFlexLayout_flex_layout._internal_.md#align_baseline)
- [ALIGN\_CENTER](utils_addFlexLayout_flex_layout._internal_.md#align_center)
- [ALIGN\_FLEX\_END](utils_addFlexLayout_flex_layout._internal_.md#align_flex_end)
- [ALIGN\_FLEX\_START](utils_addFlexLayout_flex_layout._internal_.md#align_flex_start)
- [ALIGN\_SPACE\_AROUND](utils_addFlexLayout_flex_layout._internal_.md#align_space_around)
- [ALIGN\_SPACE\_BETWEEN](utils_addFlexLayout_flex_layout._internal_.md#align_space_between)
- [ALIGN\_STRETCH](utils_addFlexLayout_flex_layout._internal_.md#align_stretch)
- [DIRECTION\_INHERIT](utils_addFlexLayout_flex_layout._internal_.md#direction_inherit)
- [DIRECTION\_LTR](utils_addFlexLayout_flex_layout._internal_.md#direction_ltr)
- [DIRECTION\_RTL](utils_addFlexLayout_flex_layout._internal_.md#direction_rtl)
- [DISPLAY\_FLEX](utils_addFlexLayout_flex_layout._internal_.md#display_flex)
- [DISPLAY\_NONE](utils_addFlexLayout_flex_layout._internal_.md#display_none)
- [EDGE\_ALL](utils_addFlexLayout_flex_layout._internal_.md#edge_all)
- [EDGE\_BOTTOM](utils_addFlexLayout_flex_layout._internal_.md#edge_bottom)
- [EDGE\_END](utils_addFlexLayout_flex_layout._internal_.md#edge_end)
- [EDGE\_HORIZONTAL](utils_addFlexLayout_flex_layout._internal_.md#edge_horizontal)
- [EDGE\_LEFT](utils_addFlexLayout_flex_layout._internal_.md#edge_left)
- [EDGE\_RIGHT](utils_addFlexLayout_flex_layout._internal_.md#edge_right)
- [EDGE\_START](utils_addFlexLayout_flex_layout._internal_.md#edge_start)
- [EDGE\_TOP](utils_addFlexLayout_flex_layout._internal_.md#edge_top)
- [EDGE\_VERTICAL](utils_addFlexLayout_flex_layout._internal_.md#edge_vertical)
- [FLEX\_DIRECTION\_COLUMN](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_column)
- [FLEX\_DIRECTION\_COLUMN\_REVERSE](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_column_reverse)
- [FLEX\_DIRECTION\_COUNT](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_count)
- [FLEX\_DIRECTION\_ROW](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_row)
- [FLEX\_DIRECTION\_ROW\_REVERSE](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_row_reverse)
- [JUSTIFY\_CENTER](utils_addFlexLayout_flex_layout._internal_.md#justify_center)
- [JUSTIFY\_FLEX\_END](utils_addFlexLayout_flex_layout._internal_.md#justify_flex_end)
- [JUSTIFY\_FLEX\_START](utils_addFlexLayout_flex_layout._internal_.md#justify_flex_start)
- [JUSTIFY\_SPACE\_AROUND](utils_addFlexLayout_flex_layout._internal_.md#justify_space_around)
- [JUSTIFY\_SPACE\_BETWEEN](utils_addFlexLayout_flex_layout._internal_.md#justify_space_between)
- [JUSTIFY\_SPACE\_EVENLY](utils_addFlexLayout_flex_layout._internal_.md#justify_space_evenly)
- [MEASURE\_MODE\_AT\_MOST](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_at_most)
- [MEASURE\_MODE\_COUNT](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_count)
- [MEASURE\_MODE\_EXACTLY](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_exactly)
- [MEASURE\_MODE\_UNDEFINED](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_undefined)
- [OVERFLOW\_HIDDEN](utils_addFlexLayout_flex_layout._internal_.md#overflow_hidden)
- [OVERFLOW\_SCROLL](utils_addFlexLayout_flex_layout._internal_.md#overflow_scroll)
- [OVERFLOW\_VISIBLE](utils_addFlexLayout_flex_layout._internal_.md#overflow_visible)
- [POSITION\_TYPE\_ABSOLUTE](utils_addFlexLayout_flex_layout._internal_.md#position_type_absolute)
- [POSITION\_TYPE\_RELATIVE](utils_addFlexLayout_flex_layout._internal_.md#position_type_relative)
- [WRAP\_NO\_WRAP](utils_addFlexLayout_flex_layout._internal_.md#wrap_no_wrap)
- [WRAP\_WRAP](utils_addFlexLayout_flex_layout._internal_.md#wrap_wrap)
- [WRAP\_WRAP\_REVERSE](utils_addFlexLayout_flex_layout._internal_.md#wrap_wrap_reverse)

## Type aliases

### IAnimationState

Ƭ **IAnimationState**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `curX` | `number` |
| `curY` | `number` |
| `elapsed` | `number` |
| `fromX` | `number` |
| `fromY` | `number` |
| `time` | `number` |
| `toX` | `number` |
| `toY` | `number` |
| `easing` | (`progress`: `number`) => `number` |

#### Defined in

[src/utils/addFlexLayout/flex-layout/YogaLayout.ts:23](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L23)

___

### PixelsOrPercentage

Ƭ **PixelsOrPercentage**: `number` \| `string`

#### Defined in

[src/utils/addFlexLayout/flex-layout/YogaLayout.ts:20](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L20)

___

### YogaAlign

Ƭ **YogaAlign**: typeof [`ALIGN_AUTO`](utils_addFlexLayout_flex_layout._internal_.md#align_auto) \| typeof [`ALIGN_BASELINE`](utils_addFlexLayout_flex_layout._internal_.md#align_baseline) \| typeof [`ALIGN_CENTER`](utils_addFlexLayout_flex_layout._internal_.md#align_center) \| typeof [`ALIGN_FLEX_END`](utils_addFlexLayout_flex_layout._internal_.md#align_flex_end) \| typeof [`ALIGN_FLEX_START`](utils_addFlexLayout_flex_layout._internal_.md#align_flex_start) \| typeof [`ALIGN_SPACE_AROUND`](utils_addFlexLayout_flex_layout._internal_.md#align_space_around) \| typeof [`ALIGN_SPACE_BETWEEN`](utils_addFlexLayout_flex_layout._internal_.md#align_space_between) \| typeof [`ALIGN_STRETCH`](utils_addFlexLayout_flex_layout._internal_.md#align_stretch)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:174

___

### YogaDirection

Ƭ **YogaDirection**: typeof [`DIRECTION_INHERIT`](utils_addFlexLayout_flex_layout._internal_.md#direction_inherit) \| typeof [`DIRECTION_LTR`](utils_addFlexLayout_flex_layout._internal_.md#direction_ltr) \| typeof [`DIRECTION_RTL`](utils_addFlexLayout_flex_layout._internal_.md#direction_rtl)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:191

___

### YogaDisplay

Ƭ **YogaDisplay**: typeof [`DISPLAY_FLEX`](utils_addFlexLayout_flex_layout._internal_.md#display_flex) \| typeof [`DISPLAY_NONE`](utils_addFlexLayout_flex_layout._internal_.md#display_none)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:212

___

### YogaEdge

Ƭ **YogaEdge**: typeof [`EDGE_LEFT`](utils_addFlexLayout_flex_layout._internal_.md#edge_left) \| typeof [`EDGE_TOP`](utils_addFlexLayout_flex_layout._internal_.md#edge_top) \| typeof [`EDGE_RIGHT`](utils_addFlexLayout_flex_layout._internal_.md#edge_right) \| typeof [`EDGE_BOTTOM`](utils_addFlexLayout_flex_layout._internal_.md#edge_bottom) \| typeof [`EDGE_START`](utils_addFlexLayout_flex_layout._internal_.md#edge_start) \| typeof [`EDGE_END`](utils_addFlexLayout_flex_layout._internal_.md#edge_end) \| typeof [`EDGE_HORIZONTAL`](utils_addFlexLayout_flex_layout._internal_.md#edge_horizontal) \| typeof [`EDGE_VERTICAL`](utils_addFlexLayout_flex_layout._internal_.md#edge_vertical) \| typeof [`EDGE_ALL`](utils_addFlexLayout_flex_layout._internal_.md#edge_all)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:201

___

### YogaFlexDirection

Ƭ **YogaFlexDirection**: typeof [`FLEX_DIRECTION_COLUMN`](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_column) \| typeof [`FLEX_DIRECTION_COLUMN_REVERSE`](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_column_reverse) \| typeof [`FLEX_DIRECTION_COUNT`](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_count) \| typeof [`FLEX_DIRECTION_ROW`](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_row) \| typeof [`FLEX_DIRECTION_ROW_REVERSE`](utils_addFlexLayout_flex_layout._internal_.md#flex_direction_row_reverse)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:184

___

### YogaFlexWrap

Ƭ **YogaFlexWrap**: typeof [`WRAP_NO_WRAP`](utils_addFlexLayout_flex_layout._internal_.md#wrap_no_wrap) \| typeof [`WRAP_WRAP`](utils_addFlexLayout_flex_layout._internal_.md#wrap_wrap) \| typeof [`WRAP_WRAP_REVERSE`](utils_addFlexLayout_flex_layout._internal_.md#wrap_wrap_reverse)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:196

___

### YogaJustifyContent

Ƭ **YogaJustifyContent**: typeof [`JUSTIFY_CENTER`](utils_addFlexLayout_flex_layout._internal_.md#justify_center) \| typeof [`JUSTIFY_FLEX_END`](utils_addFlexLayout_flex_layout._internal_.md#justify_flex_end) \| typeof [`JUSTIFY_FLEX_START`](utils_addFlexLayout_flex_layout._internal_.md#justify_flex_start) \| typeof [`JUSTIFY_SPACE_AROUND`](utils_addFlexLayout_flex_layout._internal_.md#justify_space_around) \| typeof [`JUSTIFY_SPACE_BETWEEN`](utils_addFlexLayout_flex_layout._internal_.md#justify_space_between) \| typeof [`JUSTIFY_SPACE_EVENLY`](utils_addFlexLayout_flex_layout._internal_.md#justify_space_evenly)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:166

___

### YogaMeasureMode

Ƭ **YogaMeasureMode**: typeof [`MEASURE_MODE_COUNT`](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_count) \| typeof [`MEASURE_MODE_UNDEFINED`](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_undefined) \| typeof [`MEASURE_MODE_EXACTLY`](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_exactly) \| typeof [`MEASURE_MODE_AT_MOST`](utils_addFlexLayout_flex_layout._internal_.md#measure_mode_at_most)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:233

___

### YogaOverflow

Ƭ **YogaOverflow**: typeof [`OVERFLOW_HIDDEN`](utils_addFlexLayout_flex_layout._internal_.md#overflow_hidden) \| typeof [`OVERFLOW_SCROLL`](utils_addFlexLayout_flex_layout._internal_.md#overflow_scroll) \| typeof [`OVERFLOW_VISIBLE`](utils_addFlexLayout_flex_layout._internal_.md#overflow_visible)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:222

___

### YogaPositionType

Ƭ **YogaPositionType**: typeof [`POSITION_TYPE_ABSOLUTE`](utils_addFlexLayout_flex_layout._internal_.md#position_type_absolute) \| typeof [`POSITION_TYPE_RELATIVE`](utils_addFlexLayout_flex_layout._internal_.md#position_type_relative)

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:227

___

### YogaSize

Ƭ **YogaSize**: [`PixelsOrPercentage`](utils_addFlexLayout_flex_layout._internal_.md#pixelsorpercentage) \| ``"pixi"`` \| ``"auto"``

#### Defined in

[src/utils/addFlexLayout/flex-layout/YogaLayout.ts:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/addFlexLayout/flex-layout/YogaLayout.ts#L21)

## Variables

### ALIGN\_AUTO

• **ALIGN\_AUTO**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:7

___

### ALIGN\_BASELINE

• **ALIGN\_BASELINE**: ``5``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:13

___

### ALIGN\_CENTER

• **ALIGN\_CENTER**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:10

___

### ALIGN\_FLEX\_END

• **ALIGN\_FLEX\_END**: ``3``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:11

___

### ALIGN\_FLEX\_START

• **ALIGN\_FLEX\_START**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:9

___

### ALIGN\_SPACE\_AROUND

• **ALIGN\_SPACE\_AROUND**: ``7``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:15

___

### ALIGN\_SPACE\_BETWEEN

• **ALIGN\_SPACE\_BETWEEN**: ``6``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:14

___

### ALIGN\_STRETCH

• **ALIGN\_STRETCH**: ``4``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:12

___

### DIRECTION\_INHERIT

• **DIRECTION\_INHERIT**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:20

___

### DIRECTION\_LTR

• **DIRECTION\_LTR**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:21

___

### DIRECTION\_RTL

• **DIRECTION\_RTL**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:22

___

### DISPLAY\_FLEX

• **DISPLAY\_FLEX**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:24

___

### DISPLAY\_NONE

• **DISPLAY\_NONE**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:25

___

### EDGE\_ALL

• **EDGE\_ALL**: ``8``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:35

___

### EDGE\_BOTTOM

• **EDGE\_BOTTOM**: ``3``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:30

___

### EDGE\_END

• **EDGE\_END**: ``5``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:32

___

### EDGE\_HORIZONTAL

• **EDGE\_HORIZONTAL**: ``6``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:33

___

### EDGE\_LEFT

• **EDGE\_LEFT**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:27

___

### EDGE\_RIGHT

• **EDGE\_RIGHT**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:29

___

### EDGE\_START

• **EDGE\_START**: ``4``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:31

___

### EDGE\_TOP

• **EDGE\_TOP**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:28

___

### EDGE\_VERTICAL

• **EDGE\_VERTICAL**: ``7``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:34

___

### FLEX\_DIRECTION\_COLUMN

• **FLEX\_DIRECTION\_COLUMN**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:39

___

### FLEX\_DIRECTION\_COLUMN\_REVERSE

• **FLEX\_DIRECTION\_COLUMN\_REVERSE**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:40

___

### FLEX\_DIRECTION\_COUNT

• **FLEX\_DIRECTION\_COUNT**: ``4``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:38

___

### FLEX\_DIRECTION\_ROW

• **FLEX\_DIRECTION\_ROW**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:41

___

### FLEX\_DIRECTION\_ROW\_REVERSE

• **FLEX\_DIRECTION\_ROW\_REVERSE**: ``3``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:42

___

### JUSTIFY\_CENTER

• **JUSTIFY\_CENTER**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:45

___

### JUSTIFY\_FLEX\_END

• **JUSTIFY\_FLEX\_END**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:46

___

### JUSTIFY\_FLEX\_START

• **JUSTIFY\_FLEX\_START**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:44

___

### JUSTIFY\_SPACE\_AROUND

• **JUSTIFY\_SPACE\_AROUND**: ``4``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:48

___

### JUSTIFY\_SPACE\_BETWEEN

• **JUSTIFY\_SPACE\_BETWEEN**: ``3``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:47

___

### JUSTIFY\_SPACE\_EVENLY

• **JUSTIFY\_SPACE\_EVENLY**: ``5``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:49

___

### MEASURE\_MODE\_AT\_MOST

• **MEASURE\_MODE\_AT\_MOST**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:60

___

### MEASURE\_MODE\_COUNT

• **MEASURE\_MODE\_COUNT**: ``3``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:57

___

### MEASURE\_MODE\_EXACTLY

• **MEASURE\_MODE\_EXACTLY**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:59

___

### MEASURE\_MODE\_UNDEFINED

• **MEASURE\_MODE\_UNDEFINED**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:58

___

### OVERFLOW\_HIDDEN

• **OVERFLOW\_HIDDEN**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:66

___

### OVERFLOW\_SCROLL

• **OVERFLOW\_SCROLL**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:67

___

### OVERFLOW\_VISIBLE

• **OVERFLOW\_VISIBLE**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:65

___

### POSITION\_TYPE\_ABSOLUTE

• **POSITION\_TYPE\_ABSOLUTE**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:70

___

### POSITION\_TYPE\_RELATIVE

• **POSITION\_TYPE\_RELATIVE**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:69

___

### WRAP\_NO\_WRAP

• **WRAP\_NO\_WRAP**: ``0``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:81

___

### WRAP\_WRAP

• **WRAP\_WRAP**: ``1``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:82

___

### WRAP\_WRAP\_REVERSE

• **WRAP\_WRAP\_REVERSE**: ``2``

#### Defined in

node_modules/@types/yoga-layout/index.d.ts:83
