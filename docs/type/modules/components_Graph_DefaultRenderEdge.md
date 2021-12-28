[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph/DefaultRenderEdge

# Module: components/Graph/DefaultRenderEdge

## Table of contents

### Functions

- [DefaultRenderEdge](components_Graph_DefaultRenderEdge.md#defaultrenderedge)

## Functions

### DefaultRenderEdge

▸ `Const` **DefaultRenderEdge**(`c`): [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\>

Default render edge component. If renderEdge is not suplied, it will render.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_.md#edgecontext) ; `count`: `number` ; `element`: `EdgeSingular` ; `from`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: `NodeSingular` ; `targetElement`: `NodeSingular` ; `to`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  } & [`RenderElementParams`](components_ClusterNodeContainer._internal_.md#renderelementparams) |

#### Returns

[`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

[src/components/Graph/DefaultRenderEdge.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graph/DefaultRenderEdge.tsx#L10)
