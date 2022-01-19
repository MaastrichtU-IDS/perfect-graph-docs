[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Graph](components_Graph.md) / <internal\>

# Namespace: <internal\>

[components/Graph](components_Graph.md).<internal/>

## Table of contents

### Type aliases

- [GraphConfig](components_Graph._internal_#graphconfig)
- [GraphEdgesConfig](components_Graph._internal_#graphedgesconfig)
- [GraphNodesConfig](components_Graph._internal_#graphnodesconfig)
- [OnBoxSelection](components_Graph._internal_#onboxselection)
- [OnBoxSelectionEvent](components_Graph._internal_#onboxselectionevent)
- [RenderNode](components_Graph._internal_#rendernode)

## Type aliases

### GraphConfig

Ƭ **GraphConfig**: `Object`

#### Type declaration

| Name                  | Type                                                                                                        | Description                                                   |
| :-------------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| `backgroundColor?`    | `number`                                                                                                    | Viewport background color                                     |
| `clusters?`           | [`Cluster`](components_ClusterNodeContainer._internal_#cluster)[]                                           | Cluster config data                                           |
| `edges?`              | [`GraphEdgesConfig`](components_Graph._internal_#graphedgesconfig)                                          | Graph edge data list                                          |
| `graphId?`            | `string`                                                                                                    | Related graph id, if not set, it will be generated            |
| `layout?`             | typeof [`default`](core_layouts#default)[``"cose"``] & { `expansion?`: `number` ; `runLayout?`: `boolean` } | Calculate the layout of the graph and set the node positions. |
| `nodes?`              | [`GraphNodesConfig`](components_Graph._internal_#graphnodesconfig)                                          | Graph node data list                                          |
| `theme?`              | [`Theme`](core_theme#theme)                                                                                 | Theme for graph stage and elements                            |
| `transform?`          | `Object`                                                                                                    | Viewport transform data                                       |
| `transform.pivotX?`   | `number`                                                                                                    | -                                                             |
| `transform.pivotY?`   | `number`                                                                                                    | -                                                             |
| `transform.rotation?` | `number`                                                                                                    | -                                                             |
| `transform.scaleX?`   | `number`                                                                                                    | -                                                             |
| `transform.scaleY?`   | `number`                                                                                                    | -                                                             |
| `transform.skewX?`    | `number`                                                                                                    | -                                                             |
| `transform.skewY?`    | `number`                                                                                                    | -                                                             |
| `transform.x?`        | `number`                                                                                                    | -                                                             |
| `transform.y?`        | `number`                                                                                                    | -                                                             |
| `zoom?`               | `number`                                                                                                    | Viewport zoom level                                           |

#### Defined in

[type/index.ts:487](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L487)

---

### GraphEdgesConfig

Ƭ **GraphEdgesConfig**: [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig) & { `ids?`: { [id: string]: [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig); } }

#### Defined in

[type/index.ts:481](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L481)

---

### GraphNodesConfig

Ƭ **GraphNodesConfig**: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig) & { `ids?`: { [id: string]: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig); } }

#### Defined in

[type/index.ts:475](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L475)

---

### OnBoxSelection

Ƭ **OnBoxSelection**: (`event`: [`OnBoxSelectionEvent`](components_Graph._internal_#onboxselectionevent)) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name    | Type                                                                     |
| :------ | :----------------------------------------------------------------------- |
| `event` | [`OnBoxSelectionEvent`](components_Graph._internal_#onboxselectionevent) |

##### Returns

`void`

#### Defined in

[type/index.ts:904](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L904)

---

### OnBoxSelectionEvent

Ƭ **OnBoxSelectionEvent**: `Object`

#### Type declaration

| Name          | Type                                                                    | Description           |
| :------------ | :---------------------------------------------------------------------- | :-------------------- |
| `boundingBox` | [`BoundingBox`](components_ClusterNodeContainer._internal_#boundingbox) | Selected boundingBox  |
| `elements`    | `cytoscape.Collection`                                                  | Selected elements     |
| `event`       | `PIXI.InteractionEvent`                                                 | Original Event        |
| `itemIds`     | `string`[]                                                              | Selected elements ids |

#### Defined in

[type/index.ts:885](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L885)

---

### RenderNode

Ƭ **RenderNode**<`Additional`\>: (`c`: { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `item`: [`NodeData`](components_ClusterNodeContainer._internal_#nodedata) } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional`) => `React.ReactElement`

#### Type parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`  | { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `item`: [`NodeData`](components_ClusterNodeContainer._internal_#nodedata) } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[type/index.ts:294](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L294)
