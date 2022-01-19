[perfect-graph](../README.md) / [Modules](../modules.md) / components/Viewport

# Module: components/Viewport

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_Viewport._internal_.md)

### Type aliases

- [ViewportOnPress](components_Viewport#viewportonpress)
- [ViewportProps](components_Viewport#viewportprops)

### Variables

- [Viewport](components_Viewport#viewport)

## Type aliases

### ViewportOnPress

Ƭ **ViewportOnPress**: (`event`: [`ViewportOnPressEvent`](components_Viewport._internal_#viewportonpressevent)) => `void` \| `undefined`

#### Type declaration

▸ (`event`): `void` \| `undefined`

##### Parameters

| Name    | Type                                                                          |
| :------ | :---------------------------------------------------------------------------- |
| `event` | [`ViewportOnPressEvent`](components_Viewport._internal_#viewportonpressevent) |

##### Returns

`void` \| `undefined`

#### Defined in

[components/Viewport/index.tsx:30](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Viewport/index.tsx#L30)

---

### ViewportProps

Ƭ **ViewportProps**: { `children?`: `React.ReactNode` } & `Omit`<[`NativeViewportProps`](components_Viewport._internal_#nativeviewportprops), `"app"` \| `"theme"`\>

#### Defined in

[components/Viewport/index.tsx:360](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Viewport/index.tsx#L360)

## Variables

### Viewport

• **Viewport**: `FC`<[`ViewportProps`](components_Viewport#viewportprops)\>

The wrapper for Node and Edge Elements to provide drag, pinch, and zoom functionality.

#### Defined in

[components/Viewport/index.tsx:452](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Viewport/index.tsx#L452)
