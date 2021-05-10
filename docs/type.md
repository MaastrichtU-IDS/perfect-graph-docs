---
title: Complex Types
---

## NodeItem

### `id`


| Type  | Required |
| ----- | -------- |
| string | Yes       |

---

### `data`

The node item list.

| Type | Required |
| ---- | -------- |
| any | No      |

---

## EdgeItem

### `id`


| Type  | Required |
| ----- | -------- |
| string | Yes       |

---

### `source`


| Type  | Required |
| ----- | -------- |
| string | Yes       |

---

### `target`


| Type  | Required |
| ----- | -------- |
| string | Yes       |

---

### `data`

The node item list.

| Type | Required |
| ---- | -------- |
| any | No      |

---

## RenderNodeInput

### `item`


| Type  | Required |
| ----- | -------- |
| [NodeItem](#nodeitem) | Yes     |

---

### `element`


| Type  | Required |
| ----- | -------- |
| [NodeElement](https://js.cytoscape.org/#collection) | Yes     |

---

### `cy`


| Type  | Required |
| ----- | -------- |
| [Core](https://js.cytoscape.org/#core) | Yes     |

---

### `cy`


| Type  | Required |
| ----- | -------- |
| [Core](https://js.cytoscape.org/#core) | Yes     |

---

### `graphRef`


| Type  | Required |
| ----- | -------- |
| React.RefObject<[GraphRef](#graphref>) | Yes     |

---

### `theme`


| Type  | Required |
| ----- | -------- |
| [Theme](#theme> | Yes     |

---

## RenderEdgeInput

### `item`


| Type  | Required |
| ----- | -------- |
| [EdgeItem](#edgeitem) | Yes     |

---

### `sourceElement`


| Type  | Required |
| ----- | -------- |
| [NodeElement](https://js.cytoscape.org/#collection) | Yes     |

---

### `targetElement`


| Type  | Required |
| ----- | -------- |
| [NodeElement](https://js.cytoscape.org/#collection) | Yes     |

---

### `from`


| Type  | Required |
| ----- | -------- |
| [Position](#position) | Yes     |

---

### `to`


| Type  | Required |
| ----- | -------- |
| [Position](#position) | Yes     |

---

### `sortedIndex`


| Type  | Required |
| ----- | -------- |
| number | Yes     |

---

### `index`


| Type  | Required |
| ----- | -------- |
| number | Yes     |

---

### `count`


| Type  | Required |
| ----- | -------- |
| number | Yes     |

---

### `element`


| Type  | Required |
| ----- | -------- |
| [EdgeElement](https://js.cytoscape.org/#collection) | Yes     |

---

### `cy`


| Type  | Required |
| ----- | -------- |
| [Core](https://js.cytoscape.org/#core) | Yes     |

---

### `cy`


| Type  | Required |
| ----- | -------- |
| [Core](https://js.cytoscape.org/#core) | Yes     |

---

### `graphRef`


| Type  | Required |
| ----- | -------- |
| React.RefObject<[GraphRef](#graphref>) | Yes     |

---

### `theme`


| Type  | Required |
| ----- | -------- |
| [Theme](#theme> | Yes     |

---


## GraphRef

### `cy`


| Type  | Required |
| ----- | -------- |
| [Core](#cy) | Yes     |

---

### `app`


| Type  | Required |
| ----- | -------- |
| [App](#app) | Yes     |

---

### `viewportRef`


| Type  | Required |
| ----- | -------- |
| [Viewport](#viewport) | Yes     |

---




## Theme

### `palette`

| Type  | Required |
| ----- | -------- |
| [Palette](https://next.material-ui.com/customization/palette/#main-content) | Yes     |

---

## Position

### `x`

| Type  | Required |
| ----- | -------- |
| number | Yes     |

---

### `y`

| Type  | Required |
| ----- | -------- |
| number | Yes     |

---

## DrawLine

`(info: DrawLineInput) => void`

### Parameters

| Name  | Type  | Required |
| ----- | ----- | -------- |
| info  | number | Yes     |


## DrawLineInput

[RenderEdgeInput](#renderedgeinput) & 

### `graphics`

| Type  | Required |
| ----- | -------- |
| [PIXIGraphics](#pixigraphics) | Yes     |

---

### `to`

| Type  | Required |
| ----- | -------- |
| [Position](#position) | Yes     |

---

### `from`

| Type  | Required |
| ----- | -------- |
| [Position](#position) | Yes     |

---
  
## GraphConfig

### `layout`

| Type  | Required |
| ----- | -------- |
| [Layout](https://js.cytoscape.org/#core/layout) | No     |

---

### `clusters`

| Type  | Required |
| ----- | -------- |
| [Cluster](#cluster)[] | No     |

---

### `transform`

| Type  | Required |
| ----- | -------- |
| [Transform](#transform) | No     |

---

### `zoom`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `nodes`

| Type  | Required |
| ----- | -------- |
| [NodeGraphConfig](#nodegraphconfig) | No     |

---

### `edges`

| Type  | Required |
| ----- | -------- |
| [EdgeGraphConfig](#edgegraphconfig) | No     |

---

### `backgroundColor`

| Type  | Required |
| ----- | -------- |
| string | No     |

---

### `theme`

| Type  | Required |
| ----- | -------- |
| [Theme](#theme) | No     |

---


## Transform

### `x`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `y`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `scaleX`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `scaleY`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `rotation`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `skewX`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `skewY`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `pivotX`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

### `pivotY`

| Type  | Required |
| ----- | -------- |
| number | No     |

---

## NodeGraphConfig

### `filter`

| Type  | Required |
| ----- | -------- |
| [ElementFilterOption](#elementfilteroption) | No     |

---

### `renderEvents`

| Type  | Required |
| ----- | -------- |
| [CytoscapeEvent](#cytoscapeevent)[] | No     |

---

### `ids`

| Type  | Required |
| ----- | -------- |
| { [id: string]: [NodeConfig](#nodeconfig); } | No     |

---

## EdgeGraphConfig

### `filter`

| Type  | Required |
| ----- | -------- |
| [ElementFilterOption](#elementfilteroption) | No     |

---

### `renderEvents`

| Type  | Required |
| ----- | -------- |
| [CytoscapeEvent](#cytoscapeevent)[] | No     |

---

### `ids`

| Type  | Required |
| ----- | -------- |
| { [id: string]: [EdgeConfig](#edgeconfig); } | No     |

---


## PIXIGraphics

| Type  | Required |
| ----- | -------- |
| [PIXIGraphics](https://pixijs.download/dev/docs/PIXI.Graphics.html) | Yes     |

---

## cy

| Type  | Required |
| ----- | -------- |
| [Core](https://js.cytoscape.org/#core) | Yes     |

---

## App

| Type  | Required |
| ----- | -------- |
| [App](https://pixijs.download/dev/docs/PIXI.Application.html) | Yes     |

---

## Viewport

| Type  | Required |
| ----- | -------- |
| [Viewport](https://github.com/davidfig/pixi-viewport) | Yes     |

---


## Cluster

### `id`

| Type  | Required |
| ----- | -------- |
| string | Yes     |

---

### `name`

| Type  | Required |
| ----- | -------- |
| string | Yes     |

---

### `ids`

| Type  | Required |
| ----- | -------- |
| string[] | Yes     |

---

### `childClusterIds`

| Type  | Required |
| ----- | -------- |
| string[] | Yes     |

---

### `visible`

| Type  | Required |
| ----- | -------- |
| boolean | false     |

---


## ElementFilterOption

### `test`

| Type  | Required |
| ----- | -------- |
| `(params: {element: NodeElement}) => boolean` | Yes     |

Parameters:  
  - params: { element: [NodeElement](#nodeelement) }
---


### `settings`

| Type  | Required |
| ----- | -------- |
| `{ opacity?: number }` | No     |

---


## NodeConfig

### `position`

| Type  | Required |
| ----- | -------- |
| [Position](#position) | No     |

---

### `filter`

| Type  | Required |
| ----- | -------- |
| [ElementFilterOption](#elementfilteroption) | No     |

---

### `renderEvents`

| Type  | Required |
| ----- | -------- |
| [CytoscapeEvent](#cytoscapeevent)[] | No     |

---


## EdgeConfig

### `filter`

| Type  | Required |
| ----- | -------- |
| [ElementFilterOption](#elementfilteroption) | No     |

---

### `renderEvents`

| Type  | Required |
| ----- | -------- |
| [CytoscapeEvent](#cytoscapeevent)[] | No     |

---
