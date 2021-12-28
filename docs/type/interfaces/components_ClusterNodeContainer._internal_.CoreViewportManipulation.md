[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreViewportManipulation

# Interface: CoreViewportManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreViewportManipulation

http://js.cytoscape.org/#core/viewport-manipulation

## Hierarchy

- **`CoreViewportManipulation`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [autolock](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autolock)
- [autoungrabify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autoungrabify)
- [autounselectify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autounselectify)
- [boxSelectionEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#boxselectionenabled)
- [center](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#center)
- [centre](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#centre)
- [container](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#container)
- [extent](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#extent)
- [fit](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#fit)
- [forceRender](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#forcerender)
- [height](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#height)
- [invalidateDimensions](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#invalidatedimensions)
- [maxZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#maxzoom)
- [minZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#minzoom)
- [pan](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#pan)
- [panBy](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#panby)
- [panningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#panningenabled)
- [reset](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#reset)
- [resize](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#resize)
- [selectionType](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#selectiontype)
- [userPanningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userpanningenabled)
- [userZoomingEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userzoomingenabled)
- [viewport](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#viewport)
- [width](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#width)
- [zoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#zoom)
- [zoomingEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#zoomingenabled)

## Methods

### autolock

▸ **autolock**(): `boolean`

Get whether nodes are automatically locked
(i.e. if true, nodes are locked despite their individual state).
http://js.cytoscape.org/#cy.autolock

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:889

▸ **autolock**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether nodes are automatically locked
(i.e. if true, nodes are locked despite their individual state).
http://js.cytoscape.org/#cy.autolock

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:897

___

### autoungrabify

▸ **autoungrabify**(): `boolean`

Get whether nodes are automatically ungrabified
(i.e. if true, nodes are ungrabbale despite their individual state).
http://js.cytoscape.org/#cy.autoungrabify

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:904

▸ **autoungrabify**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether nodes are automatically ungrabified
(i.e. if true, nodes are ungrabbale despite their individual state).
http://js.cytoscape.org/#cy.autoungrabify

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:912

___

### autounselectify

▸ **autounselectify**(): `boolean`

Get whether nodes are automatically unselectified
(i.e. if true, nodes are unselectable despite their individual state).
http://js.cytoscape.org/#cy.autounselectify

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:919

▸ **autounselectify**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether nodes are automatically unselectified
(i.e. if true, nodes are unselectable despite their individual state).
http://js.cytoscape.org/#cy.autounselectify

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:927

___

### boxSelectionEnabled

▸ **boxSelectionEnabled**(): `boolean`

Get whether box selection is enabled.
If enabled, the user must hold left-click to initiate panning.
http://js.cytoscape.org/#cy.boxSelectionEnabled

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:839

▸ **boxSelectionEnabled**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether box selection is enabled.
If enabled, the user must hold left-click to initiate panning.
http://js.cytoscape.org/#cy.boxSelectionEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables box selection; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:847

___

### center

▸ **center**(`eles?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Pan the graph to the centre of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to centre upon. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:687

___

### centre

▸ **centre**(`eles?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Pan the graph to the centre of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to centre upon. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:694

___

### container

▸ **container**(): ``null`` \| `HTMLElement`

Get the HTML DOM element in which the graph is visualised.
A null value is returned if the Core is headless.

#### Returns

``null`` \| `HTMLElement`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:680

___

### extent

▸ **extent**(): `Object`

Get the extent of the viewport, a bounding box in model
coordinates that lets you know what model
positions are visible in the viewport.
http://js.cytoscape.org/#cy.extent

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `w` | `number` |
| `x1` | `number` |
| `x2` | `number` |
| `y1` | `number` |
| `y2` | `number` |

#### Defined in

node_modules/@types/cytoscape/index.d.ts:880

___

### fit

▸ **fit**(`eles?`, `padding?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Pan and zooms the graph to fit to a collection.
http://js.cytoscape.org/#cy.fit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to fit to. |
| `padding?` | `number` | An amount of padding (in pixels) to have around the graph |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:703

___

### forceRender

▸ **forceRender**(): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Force the renderer to redraw (i.e. draw a new frame).

This function forces the renderer to draw a new frame.
It is useful for very specific edgecases, such as in certain UI plugins,
but it should not be needed for most developers.
http://js.cytoscape.org/#cy.forceRender

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:937

___

### height

▸ **height**(): `number`

Get the on-screen height of the viewport in pixels.
http://js.cytoscape.org/#cy.height

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:872

___

### invalidateDimensions

▸ **invalidateDimensions**(): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:953

___

### maxZoom

▸ **maxZoom**(): `number`

Get the maximum zoom level.
http://js.cytoscape.org/#cy.maxZoom

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:816

▸ **maxZoom**(`zoom`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the maximum zoom level.
http://js.cytoscape.org/#cy.maxZoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The new maximum zoom level to use. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:823

___

### minZoom

▸ **minZoom**(): `number`

Get the minimum zoom level.
http://js.cytoscape.org/#cy.minZoom

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:803

▸ **minZoom**(`zoom`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the minimum zoom level.
http://js.cytoscape.org/#cy.minZoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The new minimum zoom level to use. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:810

___

### pan

▸ **pan**(): [`Position`](components_ClusterNodeContainer._internal_.Position.md)

Get the panning position of the graph.
http://js.cytoscape.org/#cy.pan

#### Returns

[`Position`](components_ClusterNodeContainer._internal_.Position.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:715

▸ **pan**(`renderedPosition?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the panning position of the graph.
http://js.cytoscape.org/#cy.pan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderedPosition?` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The rendered position to pan the graph to. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:723

___

### panBy

▸ **panBy**(`renderedPosition`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Relatively pan the graph by a specified rendered position vector.
http://js.cytoscape.org/#cy.panBy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderedPosition` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The rendered position vector to pan the graph by. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:731

___

### panningEnabled

▸ **panningEnabled**(): `boolean`

Get whether panning is enabled.
If cy.boxSelectionEnabled() === true, then the user
must taphold to initiate panning.
http://js.cytoscape.org/#cy.panningEnabled

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:739

▸ **panningEnabled**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether panning is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.panningEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables panning; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:747

___

### reset

▸ **reset**(): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Reset the graph to the default zoom level and panning position.
http://js.cytoscape.org/#cy.reset

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:709

___

### resize

▸ **resize**(): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Force the renderer to recalculate the viewport bounds.

If your code resizes the graph's dimensions or position
(i.e. by changing the style of the HTML DOM element that holds the graph),
you will want to call cy.resize() to have the graph resize and redraw itself.

Cytoscape.js can not automatically monitor the bounding box of the viewport,
as querying the DOM for those dimensions can be expensive.
Although cy.resize() is automatically called for you on the window's resize event,
there is no resize or style event for arbitrary DOM elements.
http://js.cytoscape.org/#cy.resize

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:952

___

### selectionType

▸ **selectionType**(): [`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype)

Get the selection type.
http://js.cytoscape.org/#cy.selectionType

#### Returns

[`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:853

▸ **selectionType**(`type`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the selection type.
http://js.cytoscape.org/#cy.selectionType

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype) | The selection type string; one of 'single' (default) or 'additive'. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:860

___

### userPanningEnabled

▸ **userPanningEnabled**(): `boolean`

Get whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.userPanningEnabled

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:753

▸ **userPanningEnabled**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.userPanningEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables user panning; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:761

___

### userZoomingEnabled

▸ **userZoomingEnabled**(): `boolean`

Get whether zooming by user events (e.g. mouse wheel, pinch-to-zoom)
is enabled.
http://js.cytoscape.org/#cy.userZoomingEnabled

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:789

▸ **userZoomingEnabled**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Get or set whether zooming by user events get if no parameter provided
(e.g. mouse wheel, pinch-to-zoom) is enabled.
http://js.cytoscape.org/#cy.userZoomingEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables user zooming; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:797

___

### viewport

▸ **viewport**(`zoom`, `pan`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the viewport state (pan & zoom) in one call.
http://js.cytoscape.org/#cy.viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The zoom level to set. |
| `pan` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The pan to set (a rendered position). |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:832

___

### width

▸ **width**(): `number`

Get the on-screen width of the viewport in pixels.
http://js.cytoscape.org/#cy.width

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:866

___

### zoom

▸ **zoom**(): `number`

Get the zoom level.
http://js.cytoscape.org/#cy.zoom

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:766

▸ **zoom**(`level?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set the zoom level.
http://js.cytoscape.org/#cy.zoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level?` | [`ZoomOptions`](../modules/components_ClusterNodeContainer._internal_.md#zoomoptions) | The zoom level to set. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:774

___

### zoomingEnabled

▸ **zoomingEnabled**(`bool?`): [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

Set or get whether zooming is enabled. Get if no parameter provided.
http://js.cytoscape.org/#cy.zoomingEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables zooming; a falsey value disables it. |

#### Returns

[`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:782
