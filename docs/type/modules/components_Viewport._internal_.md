[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Viewport](components_Viewport.md) / <internal\>

# Namespace: <internal\>

[components/Viewport](components_Viewport.md).<internal/>

## Table of contents

### Type aliases

- [NativeViewportProps](components_Viewport._internal_#nativeviewportprops)
- [ViewportOnPressEvent](components_Viewport._internal_#viewportonpressevent)

## Type aliases

### NativeViewportProps

Ƭ **NativeViewportProps**: `Object`

#### Type declaration

| Name                   | Type                                                                                                                                           | Description                                  |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| `app`                  | `PIXI.Application`                                                                                                                             | Current PIXI app instance                    |
| `height`               | `number`                                                                                                                                       | -                                            |
| `onPress?`             | [`ViewportOnPress`](components_Viewport#viewportonpress)                                                                                       | -                                            |
| `theme`                | [`Theme`](core_theme#theme)                                                                                                                    | Theme for the viewport and its children      |
| `transform?`           | `Object`                                                                                                                                       | Scale, rotation and position of the viewport |
| `transform.pivotX?`    | `number`                                                                                                                                       | -                                            |
| `transform.pivotY?`    | `number`                                                                                                                                       | -                                            |
| `transform.rotation?`  | `number`                                                                                                                                       | -                                            |
| `transform.scaleX?`    | `number`                                                                                                                                       | -                                            |
| `transform.scaleY?`    | `number`                                                                                                                                       | -                                            |
| `transform.skewX?`     | `number`                                                                                                                                       | -                                            |
| `transform.skewY?`     | `number`                                                                                                                                       | -                                            |
| `transform.x?`         | `number`                                                                                                                                       | -                                            |
| `transform.y?`         | `number`                                                                                                                                       | -                                            |
| `width`                | `number`                                                                                                                                       | -                                            |
| `zoom?`                | `number`                                                                                                                                       | -                                            |
| `onBoxSelection?`      | (`c`: { `boundingBox`: `BoundingBox` ; `endPosition`: `Position` ; `event`: `PIXI.InteractionEvent` ; `startPosition`: `Position` }) => `void` | -                                            |
| `onBoxSelectionEnd?`   | (`c`: { `boundingBox`: `BoundingBox` ; `endPosition`: `Position` ; `event`: `PIXI.InteractionEvent` ; `startPosition`: `Position` }) => `void` | -                                            |
| `onBoxSelectionStart?` | (`c`: { `event`: `PIXI.InteractionEvent` ; `startPosition`: `Position` }) => `void`                                                            | -                                            |
| `onCreate?`            | (`v`: `Viewport`) => `void`                                                                                                                    | -                                            |

#### Defined in

[components/Viewport/index.tsx:32](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Viewport/index.tsx#L32)

---

### ViewportOnPressEvent

Ƭ **ViewportOnPressEvent**: `Object`

#### Type declaration

| Name          | Type                    | Description    |
| :------------ | :---------------------- | :------------- |
| `nativeEvent` | `PIXI.InteractionEvent` | Original event |
| `position`    | `Position`              | Event position |

#### Defined in

[components/Viewport/index.tsx:19](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Viewport/index.tsx#L19)
