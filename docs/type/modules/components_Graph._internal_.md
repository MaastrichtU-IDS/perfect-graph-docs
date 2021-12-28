[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Graph](components_Graph.md) / <internal\>

# Namespace: <internal\>

[components/Graph](components_Graph.md).<internal>

## Table of contents

### Interfaces

- [ShadowStyleIOS](../interfaces/components_Graph._internal_.ShadowStyleIOS.md)
- [ViewStyle](../interfaces/components_Graph._internal_.ViewStyle.md)

### Type aliases

- [ColorValue](components_Graph._internal_.md#colorvalue)
- [FlexAlignType](components_Graph._internal_.md#flexaligntype)
- [FlexStyle](components_Graph._internal_.md#flexstyle)
- [GraphConfig](components_Graph._internal_.md#graphconfig)
- [GraphEdgesConfig](components_Graph._internal_.md#graphedgesconfig)
- [GraphNodesConfig](components_Graph._internal_.md#graphnodesconfig)
- [OnBoxSelection](components_Graph._internal_.md#onboxselection)
- [OnBoxSelectionEvent](components_Graph._internal_.md#onboxselectionevent)
- [OpaqueColorValueType](components_Graph._internal_.md#opaquecolorvaluetype)
- [RenderNode](components_Graph._internal_.md#rendernode)
- [ViewProps](components_Graph._internal_.md#viewprops)

### Variables

- [OpaqueColorValue](components_Graph._internal_.md#opaquecolorvalue)

## Type aliases

### ColorValue

Ƭ **ColorValue**: `string` \| [`OpaqueColorValueType`](components_Graph._internal_.md#opaquecolorvaluetype)

#### Defined in

node_modules/colay-ui/type/StyleSheetType.d.ts:3

___

### FlexAlignType

Ƭ **FlexAlignType**: ``"flex-start"`` \| ``"flex-end"`` \| ``"center"`` \| ``"stretch"`` \| ``"baseline"``

#### Defined in

node_modules/colay-ui/type/StyleSheetType.d.ts:41

___

### FlexStyle

Ƭ **FlexStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alignContent?` | ``"flex-start"`` \| ``"flex-end"`` \| ``"center"`` \| ``"stretch"`` \| ``"space-between"`` \| ``"space-around"`` |
| `alignItems?` | [`FlexAlignType`](components_Graph._internal_.md#flexaligntype) |
| `alignSelf?` | ``"auto"`` \| [`FlexAlignType`](components_Graph._internal_.md#flexaligntype) |
| `aspectRatio?` | `number` |
| `borderBottomWidth?` | `number` |
| `borderEndWidth?` | `number` \| `string` |
| `borderLeftWidth?` | `number` |
| `borderRightWidth?` | `number` |
| `borderStartWidth?` | `number` \| `string` |
| `borderTopWidth?` | `number` |
| `borderWidth?` | `number` |
| `bottom?` | `number` \| `string` |
| `direction?` | ``"inherit"`` \| ``"ltr"`` \| ``"rtl"`` |
| `display?` | ``"none"`` \| ``"flex"`` |
| `end?` | `number` \| `string` |
| `flex?` | `number` |
| `flexBasis?` | `number` \| `string` |
| `flexDirection?` | ``"row"`` \| ``"column"`` \| ``"row-reverse"`` \| ``"column-reverse"`` |
| `flexGrow?` | `number` |
| `flexShrink?` | `number` |
| `flexWrap?` | ``"wrap"`` \| ``"nowrap"`` \| ``"wrap-reverse"`` |
| `height?` | `number` \| `string` |
| `justifyContent?` | ``"flex-start"`` \| ``"flex-end"`` \| ``"center"`` \| ``"space-between"`` \| ``"space-around"`` \| ``"space-evenly"`` |
| `left?` | `number` \| `string` |
| `margin?` | `number` \| `string` |
| `marginBottom?` | `number` \| `string` |
| `marginEnd?` | `number` \| `string` |
| `marginHorizontal?` | `number` \| `string` |
| `marginLeft?` | `number` \| `string` |
| `marginRight?` | `number` \| `string` |
| `marginStart?` | `number` \| `string` |
| `marginTop?` | `number` \| `string` |
| `marginVertical?` | `number` \| `string` |
| `maxHeight?` | `number` \| `string` |
| `maxWidth?` | `number` \| `string` |
| `minHeight?` | `number` \| `string` |
| `minWidth?` | `number` \| `string` |
| `overflow?` | ``"visible"`` \| ``"hidden"`` \| ``"scroll"`` |
| `padding?` | `number` \| `string` |
| `paddingBottom?` | `number` \| `string` |
| `paddingEnd?` | `number` \| `string` |
| `paddingHorizontal?` | `number` \| `string` |
| `paddingLeft?` | `number` \| `string` |
| `paddingRight?` | `number` \| `string` |
| `paddingStart?` | `number` \| `string` |
| `paddingTop?` | `number` \| `string` |
| `paddingVertical?` | `number` \| `string` |
| `position?` | ``"absolute"`` \| ``"relative"`` |
| `right?` | `number` \| `string` |
| `start?` | `number` \| `string` |
| `top?` | `number` \| `string` |
| `width?` | `number` \| `string` |
| `zIndex?` | `number` |

#### Defined in

node_modules/colay-ui/type/StyleSheetType.d.ts:42

___

### GraphConfig

Ƭ **GraphConfig**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundColor?` | `number` | Viewport background color |
| `clusters?` | [`Cluster`](components_ClusterNodeContainer._internal_.md#cluster)[] | Cluster config data |
| `edges?` | [`GraphEdgesConfig`](components_Graph._internal_.md#graphedgesconfig) | Graph edge data list |
| `graphId?` | `string` | Related graph id, if not set, it will be generated |
| `layout?` | typeof [`default`](core_layouts.md#default)[``"cose"``] & { `expansion?`: `number`  } | Calculate the layout of the graph and set the node positions. |
| `nodes?` | [`GraphNodesConfig`](components_Graph._internal_.md#graphnodesconfig) | Graph node data list |
| `theme?` | [`Theme`](core_theme.md#theme) | Theme for graph stage and elements |
| `transform?` | `Object` | Viewport transform data |
| `transform.pivotX?` | `number` | - |
| `transform.pivotY?` | `number` | - |
| `transform.rotation?` | `number` | - |
| `transform.scaleX?` | `number` | - |
| `transform.scaleY?` | `number` | - |
| `transform.skewX?` | `number` | - |
| `transform.skewY?` | `number` | - |
| `transform.x?` | `number` | - |
| `transform.y?` | `number` | - |
| `zoom?` | `number` | Viewport zoom level |

#### Defined in

[src/type/index.ts:487](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L487)

___

### GraphEdgesConfig

Ƭ **GraphEdgesConfig**: [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) & { `ids?`: { [id: string]: [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig);  }  }

#### Defined in

[src/type/index.ts:481](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L481)

___

### GraphNodesConfig

Ƭ **GraphNodesConfig**: [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig) & { `ids?`: { [id: string]: [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig);  }  }

#### Defined in

[src/type/index.ts:475](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L475)

___

### OnBoxSelection

Ƭ **OnBoxSelection**: (`event`: [`OnBoxSelectionEvent`](components_Graph._internal_.md#onboxselectionevent)) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`OnBoxSelectionEvent`](components_Graph._internal_.md#onboxselectionevent) |

##### Returns

`void`

#### Defined in

[src/type/index.ts:897](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L897)

___

### OnBoxSelectionEvent

Ƭ **OnBoxSelectionEvent**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundingBox` | [`BoundingBox`](components_ClusterNodeContainer._internal_.md#boundingbox) | Selected boundingBox |
| `elements` | [`Collection`](../interfaces/components_ClusterNodeContainer._internal_.Collection.md) | Selected elements |
| `event` | [`InteractionEvent`](../classes/components_ClusterNodeContainer._internal_.InteractionEvent.md) | Original Event |
| `itemIds` | `string`[] | Selected elements ids |

#### Defined in

[src/type/index.ts:878](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L878)

___

### OpaqueColorValueType

Ƭ **OpaqueColorValueType**: typeof [`OpaqueColorValue`](components_Graph._internal_.md#opaquecolorvalue)

#### Defined in

node_modules/colay-ui/type/StyleSheetType.d.ts:2

___

### RenderNode

Ƭ **RenderNode**<`Additional`\>: (`c`: { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_.md#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `item`: [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)  } & [`RenderElementParams`](components_ClusterNodeContainer._internal_.md#renderelementparams) & `Additional`) => [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_.md#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_.md#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `item`: [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)  } & [`RenderElementParams`](components_ClusterNodeContainer._internal_.md#renderelementparams) & `Additional` |

##### Returns

[`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

#### Defined in

[src/type/index.ts:294](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L294)

___

### ViewProps

Ƭ **ViewProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `style?` | [`ViewStyle`](../interfaces/components_Graph._internal_.ViewStyle.md) |

#### Defined in

node_modules/colay-ui/components/View/index.d.ts:3

## Variables

### OpaqueColorValue

• **OpaqueColorValue**: unique `symbol`

#### Defined in

node_modules/colay-ui/type/StyleSheetType.d.ts:1
