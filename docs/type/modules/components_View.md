[perfect-graph](../README.md) / [Modules](../modules.md) / components/View

# Module: components/View

## Table of contents

### Type aliases

- [ViewProps](components_View.md#viewprops)
- [ViewRef](components_View.md#viewref)
- [ViewType](components_View.md#viewtype)

### Variables

- [View](components_View.md#view)

## Type aliases

### ViewProps

Ƭ **ViewProps**: `React.ComponentProps`<typeof `InletGraphics`\> & { `children?`: `React.ReactNode` ; `fill?`: `number` ; `radius?`: `number`  }

#### Defined in

[components/View/index.tsx:13](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/View/index.tsx#L13)

___

### ViewRef

Ƭ **ViewRef**: `PIXI.Graphics`

#### Defined in

[components/View/index.tsx:27](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/View/index.tsx#L27)

___

### ViewType

Ƭ **ViewType**: `React.FC`<[`ViewProps`](components_View.md#viewprops)\>

#### Defined in

[components/View/index.tsx:25](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/View/index.tsx#L25)

## Variables

### View

• **View**: `FC`<`PropsWithRef`<`Container`, [`ViewProps`](components_View.md#viewprops)\>\>

The rectangle creator for PIXI.

#### Defined in

[components/View/index.tsx:71](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/View/index.tsx#L71)
