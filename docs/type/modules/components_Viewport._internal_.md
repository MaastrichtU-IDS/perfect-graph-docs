[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Viewport](components_Viewport.md) / <internal\>

# Namespace: <internal\>

[components/Viewport](components_Viewport.md).<internal>

## Table of contents

### Type aliases

- [BoundingBox](components_Viewport._internal_.md#boundingbox)
- [NativeViewportProps](components_Viewport._internal_.md#nativeviewportprops)
- [ViewportOnPressEvent](components_Viewport._internal_.md#viewportonpressevent)

## Type aliases

### BoundingBox

Ƭ **BoundingBox**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

node_modules/colay/type.d.ts:24

___

### NativeViewportProps

Ƭ **NativeViewportProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | [`Application`](../classes/components_ClusterNodeContainer._internal_.Application.md) | Current PIXI app instance |
| `height` | `number` | - |
| `onPress?` | [`ViewportOnPress`](components_Viewport.md#viewportonpress) | - |
| `theme` | [`Theme`](core_theme.md#theme) | Theme for the viewport and its children |
| `transform?` | `Object` | Scale, rotation and position of the viewport |
| `transform.pivotX?` | `number` | - |
| `transform.pivotY?` | `number` | - |
| `transform.rotation?` | `number` | - |
| `transform.scaleX?` | `number` | - |
| `transform.scaleY?` | `number` | - |
| `transform.skewX?` | `number` | - |
| `transform.skewY?` | `number` | - |
| `transform.x?` | `number` | - |
| `transform.y?` | `number` | - |
| `width` | `number` | - |
| `zoom?` | `number` | - |
| `onBoxSelection?` | (`c`: { `boundingBox`: [`BoundingBox`](components_Viewport._internal_.md#boundingbox) ; `endPosition`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `event`: [`InteractionEvent`](../classes/components_ClusterNodeContainer._internal_.InteractionEvent.md) ; `startPosition`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  }) => `void` | - |
| `onBoxSelectionEnd?` | (`c`: { `boundingBox`: [`BoundingBox`](components_Viewport._internal_.md#boundingbox) ; `endPosition`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `event`: [`InteractionEvent`](../classes/components_ClusterNodeContainer._internal_.InteractionEvent.md) ; `startPosition`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  }) => `void` | - |
| `onBoxSelectionStart?` | (`c`: { `event`: [`InteractionEvent`](../classes/components_ClusterNodeContainer._internal_.InteractionEvent.md) ; `startPosition`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  }) => `void` | - |
| `onCreate?` | (`v`: [`Viewport`](../classes/components_ClusterNodeContainer._internal_.Viewport.md)) => `void` | - |

#### Defined in

[src/components/Viewport/index.tsx:32](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Viewport/index.tsx#L32)

___

### ViewportOnPressEvent

Ƭ **ViewportOnPressEvent**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nativeEvent` | [`InteractionEvent`](../classes/components_ClusterNodeContainer._internal_.InteractionEvent.md) | Original event |
| `position` | [`Position`](components_ClusterNodeContainer._internal_.md#position) | Event position |

#### Defined in

[src/components/Viewport/index.tsx:19](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Viewport/index.tsx#L19)
