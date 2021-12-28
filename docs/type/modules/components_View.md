[perfect-graph](../README.md) / [Modules](../modules.md) / components/View

# Module: components/View

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_View._internal_.md)

### Type aliases

- [ViewProps](components_View.md#viewprops)
- [ViewRef](components_View.md#viewref)
- [ViewType](components_View.md#viewtype)

### Variables

- [View](components_View.md#view)

## Type aliases

### ViewProps

Ƭ **ViewProps**: [`ComponentProps`](components_Container._internal_.md#componentprops)<typeof [`Graphics`](components_View._internal_.md#graphics)\> & { `children?`: [`ReactNode`](components_ClusterNodeContainer._internal_.md#reactnode) ; `fill?`: `number` ; `radius?`: `number`  }

#### Defined in

[src/components/View/index.tsx:13](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/View/index.tsx#L13)

___

### ViewRef

Ƭ **ViewRef**: [`Graphics`](../classes/components_EdgeContainer._internal_.Graphics.md)

#### Defined in

[src/components/View/index.tsx:27](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/View/index.tsx#L27)

___

### ViewType

Ƭ **ViewType**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`ViewProps`](components_View.md#viewprops)\>

#### Defined in

[src/components/View/index.tsx:25](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/View/index.tsx#L25)

## Variables

### View

• **View**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`PropsWithRef`](components_Container._internal_.md#propswithref)<[`Container`](../classes/components_ClusterNodeContainer._internal_.Container.md), [`ViewProps`](components_View.md#viewprops)\>\>

The rectangle creator for PIXI.

#### Defined in

[src/components/View/index.tsx:71](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/View/index.tsx#L71)
