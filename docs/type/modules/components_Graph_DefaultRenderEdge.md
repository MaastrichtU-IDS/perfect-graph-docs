[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph/DefaultRenderEdge

# Module: components/Graph/DefaultRenderEdge

## Table of contents

### Functions

- [DefaultRenderEdge](components_Graph_DefaultRenderEdge#defaultrenderedge)

## Functions

### DefaultRenderEdge

▸ `Const` **DefaultRenderEdge**(`c`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default render edge component. If renderEdge is not suplied, it will render.

#### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`  | { `config`: [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_#edgecontext) ; `count`: `number` ; `element`: `EdgeSingular` ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: `NodeSingular` ; `targetElement`: `NodeSingular` ; `to`: `Position` } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[components/Graph/DefaultRenderEdge.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Graph/DefaultRenderEdge.tsx#L10)
