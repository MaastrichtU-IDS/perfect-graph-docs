[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graphics

# Module: components/Graphics

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_Graphics._internal_.md)

### Type aliases

- [GraphicsProps](components_Graphics.md#graphicsprops)

### Variables

- [Graphics](components_Graphics.md#graphics)

### Functions

- [drawGraphics](components_Graphics.md#drawgraphics)
- [drawLine](components_Graphics.md#drawline)

## Type aliases

### GraphicsProps

Ƭ **GraphicsProps**: `Object`

#### Defined in

[src/components/Graphics/index.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graphics/index.tsx#L17)

## Variables

### Graphics

• **Graphics**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`IGraphics`](components_Graphics._internal_.md#igraphics)\> = `ReactPIXIGraphics`

[PIXI.Graphics React Component](https://reactpixi.org/components/graphics)

#### Defined in

[src/components/Graphics/index.tsx:332](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graphics/index.tsx#L332)

## Functions

### drawGraphics

▸ `Const` **drawGraphics**(`instance`, `props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`Graphics`](../classes/components_EdgeContainer._internal_.Graphics.md) |
| `props` | `Object` |
| `props.alpha?` | `number` |
| `props.fill?` | `number` |
| `props.height?` | `number` |
| `props.lineFill?` | `number` |
| `props.lineWidth?` | `number` |
| `props.radius?` | `number` |
| `props.width?` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Graphics/index.tsx:274](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graphics/index.tsx#L274)

___

### drawLine

▸ `Const` **drawLine**(`config`): `void`

It draws the line with the given config for graphics.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.alpha?` | `number` |
| `config.arrowHead?` | `Object` |
| `config.arrowHead.radius?` | `number` |
| `config.config` | [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) |
| `config.directed?` | `boolean` |
| `config.distance?` | `number` |
| `config.distanceVector` | [`Position`](components_Container._internal_.md#position) |
| `config.fill?` | `number` |
| `config.from` | [`BoundingBox`](components_ClusterNodeContainer._internal_.md#boundingbox) |
| `config.graphics` | [`Graphics`](../classes/components_EdgeContainer._internal_.Graphics.md) |
| `config.margin?` | [`Position`](components_Container._internal_.md#position) |
| `config.normVector` | [`Position`](components_Container._internal_.md#position) |
| `config.sourceElement` | `NodeSingular` |
| `config.targetElement` | `NodeSingular` |
| `config.to` | [`BoundingBox`](components_ClusterNodeContainer._internal_.md#boundingbox) |
| `config.type?` | ``"bezier"`` \| ``"segments"`` \| ``"straight"`` |
| `config.undirectedNormVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `config.undirectedUnitVector` | [`Position`](components_Container._internal_.md#position) |
| `config.unitVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `config.width?` | `number` |

#### Returns

`void`

#### Defined in

[src/components/Graphics/index.tsx:102](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graphics/index.tsx#L102)
