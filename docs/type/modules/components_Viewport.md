[perfect-graph](../README.md) / [Modules](../modules.md) / components/Viewport

# Module: components/Viewport

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_Viewport._internal_.md)

### Type aliases

- [ViewportOnPress](components_Viewport.md#viewportonpress)
- [ViewportProps](components_Viewport.md#viewportprops)

### Variables

- [Viewport](components_Viewport.md#viewport)

## Type aliases

### ViewportOnPress

Ƭ **ViewportOnPress**: (`event`: [`ViewportOnPressEvent`](components_Viewport._internal_.md#viewportonpressevent)) => `void` \| `undefined`

#### Type declaration

▸ (`event`): `void` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ViewportOnPressEvent`](components_Viewport._internal_.md#viewportonpressevent) |

##### Returns

`void` \| `undefined`

#### Defined in

[src/components/Viewport/index.tsx:30](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Viewport/index.tsx#L30)

___

### ViewportProps

Ƭ **ViewportProps**: { `children?`: [`ReactNode`](components_ClusterNodeContainer._internal_.md#reactnode)  } & [`Omit`](components_ClusterNodeContainer._internal_.md#omit)<[`NativeViewportProps`](components_Viewport._internal_.md#nativeviewportprops), ``"app"`` \| ``"theme"``\>

#### Defined in

[src/components/Viewport/index.tsx:360](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Viewport/index.tsx#L360)

## Variables

### Viewport

• **Viewport**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`ViewportProps`](components_Viewport.md#viewportprops)\>

The wrapper for Node and Edge Elements to provide drag, pinch, and zoom functionality.

#### Defined in

[src/components/Viewport/index.tsx:452](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Viewport/index.tsx#L452)
