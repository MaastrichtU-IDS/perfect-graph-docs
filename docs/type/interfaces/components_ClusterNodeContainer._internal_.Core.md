[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Core

# Interface: Core

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Core

 cy   --> Cy.Core
  The core object is your interface to a graph.

It is your entry point to Cytoscape.js:
All of the library’s features are accessed through this object.
http://js.cytoscape.org/#core

## Hierarchy

- [`CoreGraphManipulation`](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md)

- [`CoreGraphManipulationExt`](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md)

- [`CoreEvents`](components_ClusterNodeContainer._internal_.CoreEvents.md)

- [`CoreViewportManipulation`](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md)

- [`CoreAnimation`](components_ClusterNodeContainer._internal_.CoreAnimation.md)

- [`CoreLayout`](components_ClusterNodeContainer._internal_.CoreLayout.md)

- [`CoreStyle`](components_ClusterNodeContainer._internal_.CoreStyle.md)

- [`CoreExport`](components_ClusterNodeContainer._internal_.CoreExport.md)

  ↳ **`Core`**

## Table of contents

### Methods

- [$](components_ClusterNodeContainer._internal_.Core.md#$)
- [$id](components_ClusterNodeContainer._internal_.Core.md#$id)
- [add](components_ClusterNodeContainer._internal_.Core.md#add)
- [addListener](components_ClusterNodeContainer._internal_.Core.md#addlistener)
- [animate](components_ClusterNodeContainer._internal_.Core.md#animate)
- [animated](components_ClusterNodeContainer._internal_.Core.md#animated)
- [animation](components_ClusterNodeContainer._internal_.Core.md#animation)
- [autolock](components_ClusterNodeContainer._internal_.Core.md#autolock)
- [autoungrabify](components_ClusterNodeContainer._internal_.Core.md#autoungrabify)
- [autounselectify](components_ClusterNodeContainer._internal_.Core.md#autounselectify)
- [batch](components_ClusterNodeContainer._internal_.Core.md#batch)
- [bind](components_ClusterNodeContainer._internal_.Core.md#bind)
- [boxSelectionEnabled](components_ClusterNodeContainer._internal_.Core.md#boxselectionenabled)
- [center](components_ClusterNodeContainer._internal_.Core.md#center)
- [centre](components_ClusterNodeContainer._internal_.Core.md#centre)
- [clearQueue](components_ClusterNodeContainer._internal_.Core.md#clearqueue)
- [collection](components_ClusterNodeContainer._internal_.Core.md#collection)
- [container](components_ClusterNodeContainer._internal_.Core.md#container)
- [createLayout](components_ClusterNodeContainer._internal_.Core.md#createlayout)
- [delay](components_ClusterNodeContainer._internal_.Core.md#delay)
- [delayAnimation](components_ClusterNodeContainer._internal_.Core.md#delayanimation)
- [destroy](components_ClusterNodeContainer._internal_.Core.md#destroy)
- [destroyed](components_ClusterNodeContainer._internal_.Core.md#destroyed)
- [edges](components_ClusterNodeContainer._internal_.Core.md#edges)
- [elements](components_ClusterNodeContainer._internal_.Core.md#elements)
- [emit](components_ClusterNodeContainer._internal_.Core.md#emit)
- [endBatch](components_ClusterNodeContainer._internal_.Core.md#endbatch)
- [extent](components_ClusterNodeContainer._internal_.Core.md#extent)
- [filter](components_ClusterNodeContainer._internal_.Core.md#filter)
- [fit](components_ClusterNodeContainer._internal_.Core.md#fit)
- [forceRender](components_ClusterNodeContainer._internal_.Core.md#forcerender)
- [getElementById](components_ClusterNodeContainer._internal_.Core.md#getelementbyid)
- [hasElementWithId](components_ClusterNodeContainer._internal_.Core.md#haselementwithid)
- [height](components_ClusterNodeContainer._internal_.Core.md#height)
- [invalidateDimensions](components_ClusterNodeContainer._internal_.Core.md#invalidatedimensions)
- [jpeg](components_ClusterNodeContainer._internal_.Core.md#jpeg)
- [jpg](components_ClusterNodeContainer._internal_.Core.md#jpg)
- [json](components_ClusterNodeContainer._internal_.Core.md#json)
- [layout](components_ClusterNodeContainer._internal_.Core.md#layout)
- [listen](components_ClusterNodeContainer._internal_.Core.md#listen)
- [makeLayout](components_ClusterNodeContainer._internal_.Core.md#makelayout)
- [maxZoom](components_ClusterNodeContainer._internal_.Core.md#maxzoom)
- [minZoom](components_ClusterNodeContainer._internal_.Core.md#minzoom)
- [mount](components_ClusterNodeContainer._internal_.Core.md#mount)
- [nodes](components_ClusterNodeContainer._internal_.Core.md#nodes)
- [off](components_ClusterNodeContainer._internal_.Core.md#off)
- [on](components_ClusterNodeContainer._internal_.Core.md#on)
- [one](components_ClusterNodeContainer._internal_.Core.md#one)
- [pan](components_ClusterNodeContainer._internal_.Core.md#pan)
- [panBy](components_ClusterNodeContainer._internal_.Core.md#panby)
- [panningEnabled](components_ClusterNodeContainer._internal_.Core.md#panningenabled)
- [png](components_ClusterNodeContainer._internal_.Core.md#png)
- [pon](components_ClusterNodeContainer._internal_.Core.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.Core.md#promiseon)
- [ready](components_ClusterNodeContainer._internal_.Core.md#ready)
- [remove](components_ClusterNodeContainer._internal_.Core.md#remove)
- [removeListener](components_ClusterNodeContainer._internal_.Core.md#removelistener)
- [removeScratch](components_ClusterNodeContainer._internal_.Core.md#removescratch)
- [reset](components_ClusterNodeContainer._internal_.Core.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Core.md#resize)
- [scratch](components_ClusterNodeContainer._internal_.Core.md#scratch)
- [selectionType](components_ClusterNodeContainer._internal_.Core.md#selectiontype)
- [startBatch](components_ClusterNodeContainer._internal_.Core.md#startbatch)
- [stop](components_ClusterNodeContainer._internal_.Core.md#stop)
- [style](components_ClusterNodeContainer._internal_.Core.md#style)
- [trigger](components_ClusterNodeContainer._internal_.Core.md#trigger)
- [unbind](components_ClusterNodeContainer._internal_.Core.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.Core.md#unlisten)
- [unmount](components_ClusterNodeContainer._internal_.Core.md#unmount)
- [userPanningEnabled](components_ClusterNodeContainer._internal_.Core.md#userpanningenabled)
- [userZoomingEnabled](components_ClusterNodeContainer._internal_.Core.md#userzoomingenabled)
- [viewport](components_ClusterNodeContainer._internal_.Core.md#viewport)
- [width](components_ClusterNodeContainer._internal_.Core.md#width)
- [zoom](components_ClusterNodeContainer._internal_.Core.md#zoom)
- [zoomingEnabled](components_ClusterNodeContainer._internal_.Core.md#zoomingenabled)

## Methods

### $

▸ **$**(`selector`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector.
http://js.cytoscape.org/#cy.$

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[$](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#$)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:435

___

### $id

▸ **$id**(`id`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get an element from its ID in a very performant way.
http://js.cytoscape.org/#cy.getElementById

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[$id](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#$id)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:429

___

### add

▸ **add**(`eles`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Add elements to the graph and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`ElementDefinition`](components_ClusterNodeContainer._internal_.ElementDefinition.md) \| [`ElementDefinition`](components_ClusterNodeContainer._internal_.ElementDefinition.md)[] \| [`ElementsDefinition`](components_ClusterNodeContainer._internal_.ElementsDefinition.md) \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[add](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#add)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:401

___

### addListener

▸ **addListener**(`events`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[addListener](components_ClusterNodeContainer._internal_.CoreEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:571

▸ **addListener**(`events`, `selector`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[addListener](components_ClusterNodeContainer._internal_.CoreEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:572

▸ **addListener**(`events`, `selector`, `data`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[addListener](components_ClusterNodeContainer._internal_.CoreEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:573

▸ **addListener**(`eventsMap`, `selector?`, `data?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[addListener](components_ClusterNodeContainer._internal_.CoreEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:574

___

### animate

▸ **animate**(`anis`, `options?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Animate the viewport.
http://js.cytoscape.org/#cy.animate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anis` | [`AnimateOptions`](components_ClusterNodeContainer._internal_.AnimateOptions.md) | An object containing the details of the animation. |
| `options?` | [`AnimateOptions`](components_ClusterNodeContainer._internal_.AnimateOptions.md) | An object containing animation options. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[animate](components_ClusterNodeContainer._internal_.CoreAnimation.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1008

___

### animated

▸ **animated**(): `boolean`

Get whether the viewport is currently being animated.
http://js.cytoscape.org/#cy.animated

#### Returns

`boolean`

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[animated](components_ClusterNodeContainer._internal_.CoreAnimation.md#animated)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:998

___

### animation

▸ **animation**(`options`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get an animation of the viewport.
http://js.cytoscape.org/#cy.animation

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnimationOptions`](components_ClusterNodeContainer._internal_.AnimationOptions.md) |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[animation](components_ClusterNodeContainer._internal_.CoreAnimation.md#animation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1014

___

### autolock

▸ **autolock**(): `boolean`

Get whether nodes are automatically locked
(i.e. if true, nodes are locked despite their individual state).
http://js.cytoscape.org/#cy.autolock

#### Returns

`boolean`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autolock](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autolock)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:889

▸ **autolock**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether nodes are automatically locked
(i.e. if true, nodes are locked despite their individual state).
http://js.cytoscape.org/#cy.autolock

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autolock](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autolock)

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

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autoungrabify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autoungrabify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:904

▸ **autoungrabify**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether nodes are automatically ungrabified
(i.e. if true, nodes are ungrabbale despite their individual state).
http://js.cytoscape.org/#cy.autoungrabify

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autoungrabify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autoungrabify)

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

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autounselectify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autounselectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:919

▸ **autounselectify**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether nodes are automatically unselectified
(i.e. if true, nodes are unselectable despite their individual state).
http://js.cytoscape.org/#cy.autounselectify

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables autolocking; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[autounselectify](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#autounselectify)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:927

___

### batch

▸ **batch**(`callback`): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch
 A callback within which you can make batch updates to elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[batch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#batch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:462

___

### bind

▸ **bind**(`events`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[bind](components_ClusterNodeContainer._internal_.CoreEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:561

▸ **bind**(`events`, `selector`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[bind](components_ClusterNodeContainer._internal_.CoreEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:562

▸ **bind**(`events`, `selector`, `data`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[bind](components_ClusterNodeContainer._internal_.CoreEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:563

▸ **bind**(`eventsMap`, `selector?`, `data?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[bind](components_ClusterNodeContainer._internal_.CoreEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:564

___

### boxSelectionEnabled

▸ **boxSelectionEnabled**(): `boolean`

Get whether box selection is enabled.
If enabled, the user must hold left-click to initiate panning.
http://js.cytoscape.org/#cy.boxSelectionEnabled

#### Returns

`boolean`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[boxSelectionEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#boxselectionenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:839

▸ **boxSelectionEnabled**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether box selection is enabled.
If enabled, the user must hold left-click to initiate panning.
http://js.cytoscape.org/#cy.boxSelectionEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables box selection; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[boxSelectionEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#boxselectionenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:847

___

### center

▸ **center**(`eles?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Pan the graph to the centre of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to centre upon. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[center](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#center)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:687

___

### centre

▸ **centre**(`eles?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Pan the graph to the centre of a collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to centre upon. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[centre](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#centre)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:694

___

### clearQueue

▸ **clearQueue**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Remove all queued animations for the viewport.
http://js.cytoscape.org/#cy.clearQueue

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[clearQueue](components_ClusterNodeContainer._internal_.CoreAnimation.md#clearqueue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1043

___

### collection

▸ **collection**(`eles?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a collection from elements in the graph matching the specified selector or from an array of elements.
If no parameter specified, an empty collection will be returned

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles?` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)[] |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[collection](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#collection)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:412

___

### container

▸ **container**(): ``null`` \| `HTMLElement`

Get the HTML DOM element in which the graph is visualised.
A null value is returned if the Core is headless.

#### Returns

``null`` \| `HTMLElement`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[container](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#container)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:680

___

### createLayout

▸ **createLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CoreLayout](components_ClusterNodeContainer._internal_.CoreLayout.md).[createLayout](components_ClusterNodeContainer._internal_.CoreLayout.md#createlayout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1073

___

### delay

▸ **delay**(`duration`, `complete?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Add a delay between animations for the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. |
| `complete?` | () => `void` | A function to call when the delay is complete. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[delay](components_ClusterNodeContainer._internal_.CoreAnimation.md#delay)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1022

___

### delayAnimation

▸ **delayAnimation**(`duration`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get a delay animation of the viewport.
http://js.cytoscape.org/#cy.delayAnimation

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[delayAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md#delayanimation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1028

___

### destroy

▸ **destroy**(): `void`

A convenience function to explicitly destroy the Core.
http://js.cytoscape.org/#cy.destroy

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[destroy](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#destroy)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:503

___

### destroyed

▸ **destroyed**(): `boolean`

Get whether the instance of Cytoscape.js has been destroyed or not.
https://js.cytoscape.org/#cy.destroyed

#### Returns

`boolean`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[destroyed](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#destroyed)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:509

___

### edges

▸ **edges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get edges in the graph matching the specified selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[edges](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#edges)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:451

___

### elements

▸ **elements**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector.
http://js.cytoscape.org/#cy.$

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[elements](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#elements)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:441

___

### emit

▸ **emit**(`events`, `extraParams?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `extraParams?` | `any`[] |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[emit](components_ClusterNodeContainer._internal_.CoreEvents.md#emit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:649

___

### endBatch

▸ **endBatch**(): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch

Ends batching manually (useful for asynchronous cases).

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[endBatch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#endbatch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:476

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

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[extent](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#extent)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:880

___

### filter

▸ **filter**(`selector`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get elements in the graph matching the specified selector or filter function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` \| (`ele`: [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)<[`SingularElementReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#singularelementreturnvalue), [`SingularElementArgument`](../modules/components_ClusterNodeContainer._internal_.md#singularelementargument)\>, `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[filter](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#filter)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:455

___

### fit

▸ **fit**(`eles?`, `padding?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Pan and zooms the graph to fit to a collection.
http://js.cytoscape.org/#cy.fit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles?` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The collection to fit to. |
| `padding?` | `number` | An amount of padding (in pixels) to have around the graph |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[fit](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:703

___

### forceRender

▸ **forceRender**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Force the renderer to redraw (i.e. draw a new frame).

This function forces the renderer to draw a new frame.
It is useful for very specific edgecases, such as in certain UI plugins,
but it should not be needed for most developers.
http://js.cytoscape.org/#cy.forceRender

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[forceRender](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#forcerender)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:937

___

### getElementById

▸ **getElementById**(`id`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get an element from its ID in a very performant way.
http://js.cytoscape.org/#cy.getElementById

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[getElementById](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#getelementbyid)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:423

___

### hasElementWithId

▸ **hasElementWithId**(`id`): `boolean`

check whether the specified id is in the collection

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[hasElementWithId](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#haselementwithid)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:417

___

### height

▸ **height**(): `number`

Get the on-screen height of the viewport in pixels.
http://js.cytoscape.org/#cy.height

#### Returns

`number`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[height](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#height)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:872

___

### invalidateDimensions

▸ **invalidateDimensions**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[invalidateDimensions](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#invalidatedimensions)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:953

___

### jpeg

▸ **jpeg**(`options?`): `string`

Export the current graph view as a JPG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgStringOptions`](components_ClusterNodeContainer._internal_.ExportJpgStringOptions.md) |

#### Returns

`string`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[jpeg](components_ClusterNodeContainer._internal_.CoreExport.md#jpeg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1183

▸ **jpeg**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgBlobOptions`](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md) |

#### Returns

`Blob`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[jpeg](components_ClusterNodeContainer._internal_.CoreExport.md#jpeg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1184

___

### jpg

▸ **jpg**(`options?`): `string`

Export the current graph view as a JPG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgStringOptions`](components_ClusterNodeContainer._internal_.ExportJpgStringOptions.md) |

#### Returns

`string`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[jpg](components_ClusterNodeContainer._internal_.CoreExport.md#jpg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1177

▸ **jpg**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgBlobOptions`](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md) |

#### Returns

`Blob`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[jpg](components_ClusterNodeContainer._internal_.CoreExport.md#jpg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1178

___

### json

▸ **json**(): `object`

Export the graph as JSON, the same format used at initialisation.

#### Returns

`object`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[json](components_ClusterNodeContainer._internal_.CoreExport.md#json)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1189

▸ **json**(`json`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[json](components_ClusterNodeContainer._internal_.CoreExport.md#json)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1190

___

### layout

▸ **layout**(`layout`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Run a layout, which algorithmically positions the nodes in the graph.
For layouts included with Cytoscape.js, you can find their
options documented in the Layouts section.
For external layouts, please refer to their accompanying documentation.

An analogue to run a layout on a subset of the graph exists as eles.layout().
http://js.cytoscape.org/#cy.layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CoreLayout](components_ClusterNodeContainer._internal_.CoreLayout.md).[layout](components_ClusterNodeContainer._internal_.CoreLayout.md#layout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1059

___

### listen

▸ **listen**(`events`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[listen](components_ClusterNodeContainer._internal_.CoreEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:566

▸ **listen**(`events`, `selector`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[listen](components_ClusterNodeContainer._internal_.CoreEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:567

▸ **listen**(`events`, `selector`, `data`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[listen](components_ClusterNodeContainer._internal_.CoreEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:568

▸ **listen**(`eventsMap`, `selector?`, `data?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[listen](components_ClusterNodeContainer._internal_.CoreEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:569

___

### makeLayout

▸ **makeLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Get a new layout, which can be used to algorithmically
position the nodes in the graph.

You must specify options.name with the name of the layout you wish to use.

This function creates and returns a layout object.
You may want to keep a reference to the layout for more advanced usecases,
such as running multiple layouts simultaneously.
Note that you must call layout.run() in order for it to affect the graph.
An analogue to make a layout on a subset of the graph exists as eles.makeLayout().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[CoreLayout](components_ClusterNodeContainer._internal_.CoreLayout.md).[makeLayout](components_ClusterNodeContainer._internal_.CoreLayout.md#makelayout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1072

___

### maxZoom

▸ **maxZoom**(): `number`

Get the maximum zoom level.
http://js.cytoscape.org/#cy.maxZoom

#### Returns

`number`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[maxZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#maxzoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:816

▸ **maxZoom**(`zoom`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the maximum zoom level.
http://js.cytoscape.org/#cy.maxZoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The new maximum zoom level to use. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[maxZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#maxzoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:823

___

### minZoom

▸ **minZoom**(): `number`

Get the minimum zoom level.
http://js.cytoscape.org/#cy.minZoom

#### Returns

`number`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[minZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#minzoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:803

▸ **minZoom**(`zoom`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the minimum zoom level.
http://js.cytoscape.org/#cy.minZoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The new minimum zoom level to use. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[minZoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#minzoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:810

___

### mount

▸ **mount**(`element`): `void`

Attaches the instance to the specified container for visualisation.
http://js.cytoscape.org/#cy.mount

If the core instance is headless prior to calling cy.mount(), then
the instance will no longer be headless and the visualisation will
be shown in the specified container. If the core instance is
non-headless prior to calling cy.mount(), then the visualisation
is swapped from the prior container to the specified container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Element` |

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[mount](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#mount)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:488

___

### nodes

▸ **nodes**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get nodes in the graph matching the specified selector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[nodes](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#nodes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:446

___

### off

▸ **off**(`events`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Remove event handlers.
 http://js.cytoscape.org/#cy.off

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | A reference to the handler function to remove. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[off](components_ClusterNodeContainer._internal_.CoreEvents.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:626

▸ **off**(`events`, `selector`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[off](components_ClusterNodeContainer._internal_.CoreEvents.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:627

▸ **off**(`eventsMap`, `selector?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[off](components_ClusterNodeContainer._internal_.CoreEvents.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:628

___

### on

▸ **on**(`events`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Bind to events that occur in the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[on](components_ClusterNodeContainer._internal_.CoreEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:556

▸ **on**(`events`, `selector`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[on](components_ClusterNodeContainer._internal_.CoreEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:557

▸ **on**(`events`, `selector`, `data`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[on](components_ClusterNodeContainer._internal_.CoreEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:558

▸ **on**(`eventsMap`, `selector?`, `data?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |
| `data?` | `any` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[on](components_ClusterNodeContainer._internal_.CoreEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:559

___

### one

▸ **one**(`events`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[one](components_ClusterNodeContainer._internal_.CoreEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:590

▸ **one**(`events`, `selector`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A selector to specify elements for which the handler is triggered. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[one](components_ClusterNodeContainer._internal_.CoreEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:598

▸ **one**(`events`, `selector`, `data`, `handler`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector` | `string` | A selector to specify elements for which the handler is triggered. |
| `data` | `any` | A plain object which is passed to the handler in the event object argument. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[one](components_ClusterNodeContainer._internal_.CoreEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:607

▸ **one**(`eventsMap`, `selector?`, `data?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Bind to events that occur in the graph, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventsMap` | `Object` | A map of event names to handler functions. |
| `selector?` | `string` | A selector to specify elements for which the handler is triggered. |
| `data?` | `any` | A plain object which is passed to the handler in the event object argument. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[one](components_ClusterNodeContainer._internal_.CoreEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:615

___

### pan

▸ **pan**(): [`Position`](components_ClusterNodeContainer._internal_.Position.md)

Get the panning position of the graph.
http://js.cytoscape.org/#cy.pan

#### Returns

[`Position`](components_ClusterNodeContainer._internal_.Position.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[pan](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#pan)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:715

▸ **pan**(`renderedPosition?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the panning position of the graph.
http://js.cytoscape.org/#cy.pan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderedPosition?` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The rendered position to pan the graph to. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[pan](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#pan)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:723

___

### panBy

▸ **panBy**(`renderedPosition`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Relatively pan the graph by a specified rendered position vector.
http://js.cytoscape.org/#cy.panBy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderedPosition` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The rendered position vector to pan the graph by. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[panBy](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#panby)

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

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[panningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#panningenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:739

▸ **panningEnabled**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether panning is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.panningEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables panning; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[panningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#panningenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:747

___

### png

▸ **png**(`options?`): `string`

Export the current graph view as a PNG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportStringOptions`](components_ClusterNodeContainer._internal_.ExportStringOptions.md) |

#### Returns

`string`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[png](components_ClusterNodeContainer._internal_.CoreExport.md#png)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1171

▸ **png**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportBlobOptions`](components_ClusterNodeContainer._internal_.ExportBlobOptions.md) |

#### Returns

`Blob`

#### Inherited from

[CoreExport](components_ClusterNodeContainer._internal_.CoreExport.md).[png](components_ClusterNodeContainer._internal_.CoreExport.md#png)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1172

___

### pon

▸ **pon**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector?` | `string` |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[pon](components_ClusterNodeContainer._internal_.CoreEvents.md#pon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:583

___

### promiseOn

▸ **promiseOn**(`events`, `selector?`): `Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

Get a promise that is resolved with the first
of any of the specified events triggered on the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `selector?` | `string` | A selector to specify elements for which the handler is triggered. |

#### Returns

`Promise`<[`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler)\>

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[promiseOn](components_ClusterNodeContainer._internal_.CoreEvents.md#promiseon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:582

___

### ready

▸ **ready**(`fn`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Run a callback as soon as the graph becomes ready. If the graph is already ready, then the callback is called immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The callback run as soon as the graph is ready, inside which this refers to the core (cy). |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[ready](components_ClusterNodeContainer._internal_.CoreEvents.md#ready)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:655

___

### remove

▸ **remove**(`eles`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove elements in collecion or match the selector from the graph and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[remove](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#remove)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:406

___

### removeListener

▸ **removeListener**(`events`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[removeListener](components_ClusterNodeContainer._internal_.CoreEvents.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:638

▸ **removeListener**(`events`, `selector`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[removeListener](components_ClusterNodeContainer._internal_.CoreEvents.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:639

▸ **removeListener**(`eventsMap`, `selector?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[removeListener](components_ClusterNodeContainer._internal_.CoreEvents.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:640

___

### removeScratch

▸ **removeScratch**(`namespace`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Remove scratchpad data. You should remove scratchpad data only at your own namespaces.
http://js.cytoscape.org/#cy.removeScratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A namespace string. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreGraphManipulationExt](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md).[removeScratch](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md#removescratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:538

___

### reset

▸ **reset**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Reset the graph to the default zoom level and panning position.
http://js.cytoscape.org/#cy.reset

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[reset](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#reset)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:709

___

### resize

▸ **resize**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

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

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[resize](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#resize)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:952

___

### scratch

▸ **scratch**(`namespace?`): `any`

Set the scratchpad at a particular namespace,
where temporary or non-JSON data can be stored.
App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.

If no parameter provided, the entire scratchpad will be returned.
If only namespace provided, the scratchpad with the namespace will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | A namespace string. |

#### Returns

`any`

#### Inherited from

[CoreGraphManipulationExt](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md).[scratch](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md#scratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:529

▸ **scratch**(`namespace`, `value`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `value` | `any` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreGraphManipulationExt](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md).[scratch](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md#scratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:530

___

### selectionType

▸ **selectionType**(): [`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype)

Get the selection type.
http://js.cytoscape.org/#cy.selectionType

#### Returns

[`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[selectionType](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#selectiontype)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:853

▸ **selectionType**(`type`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the selection type.
http://js.cytoscape.org/#cy.selectionType

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`SelectionType`](../modules/components_ClusterNodeContainer._internal_.md#selectiontype) | The selection type string; one of 'single' (default) or 'additive'. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[selectionType](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#selectiontype)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:860

___

### startBatch

▸ **startBatch**(): `void`

Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
http://js.cytoscape.org/#cy.batch

Starts batching manually (useful for asynchronous cases).

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[startBatch](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#startbatch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:469

___

### stop

▸ **stop**(`clearQueue?`, `jumpToEnd?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Stop all viewport animations that are currently running.
http://js.cytoscape.org/#cy.stop

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearQueue?` | `boolean` | A boolean, indicating whether the queue of animations should be emptied. |
| `jumpToEnd?` | `boolean` | A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md).[stop](components_ClusterNodeContainer._internal_.CoreAnimation.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1037

___

### style

▸ **style**(): [`ElementStylesheetStyle`](components_ClusterNodeContainer._internal_.ElementStylesheetStyle.md) \| [`ElementStylesheetCSS`](components_ClusterNodeContainer._internal_.ElementStylesheetCSS.md)

Get the current style object.

#### Returns

[`ElementStylesheetStyle`](components_ClusterNodeContainer._internal_.ElementStylesheetStyle.md) \| [`ElementStylesheetCSS`](components_ClusterNodeContainer._internal_.ElementStylesheetCSS.md)

#### Inherited from

[CoreStyle](components_ClusterNodeContainer._internal_.CoreStyle.md).[style](components_ClusterNodeContainer._internal_.CoreStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1091

▸ **style**(`sheet`): [`Stylesheet`](../modules/components_ClusterNodeContainer._internal_.md#stylesheet)

Assign a new stylesheet to replace the existing one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sheet` | `string` \| [`Stylesheet`](../modules/components_ClusterNodeContainer._internal_.md#stylesheet) \| [`Stylesheet`](../modules/components_ClusterNodeContainer._internal_.md#stylesheet)[] |

#### Returns

[`Stylesheet`](../modules/components_ClusterNodeContainer._internal_.md#stylesheet)

#### Inherited from

[CoreStyle](components_ClusterNodeContainer._internal_.CoreStyle.md).[style](components_ClusterNodeContainer._internal_.CoreStyle.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1095

___

### trigger

▸ **trigger**(`events`, `extraParams?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Trigger one or more events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names to trigger. |
| `extraParams?` | `any`[] | An array of additional parameters to pass to the handler. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[trigger](components_ClusterNodeContainer._internal_.CoreEvents.md#trigger)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:648

___

### unbind

▸ **unbind**(`events`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unbind](components_ClusterNodeContainer._internal_.CoreEvents.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:630

▸ **unbind**(`events`, `selector`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unbind](components_ClusterNodeContainer._internal_.CoreEvents.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:631

▸ **unbind**(`eventsMap`, `selector?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unbind](components_ClusterNodeContainer._internal_.CoreEvents.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:632

___

### unlisten

▸ **unlisten**(`events`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unlisten](components_ClusterNodeContainer._internal_.CoreEvents.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:634

▸ **unlisten**(`events`, `selector`, `handler?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `selector` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unlisten](components_ClusterNodeContainer._internal_.CoreEvents.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:635

▸ **unlisten**(`eventsMap`, `selector?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventsMap` | `Object` |
| `selector?` | `string` |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreEvents](components_ClusterNodeContainer._internal_.CoreEvents.md).[unlisten](components_ClusterNodeContainer._internal_.CoreEvents.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:636

___

### unmount

▸ **unmount**(): `void`

Remove the instance from its current container.
http://js.cytoscape.org/#cy.unmount

This function sets the instance to be headless after unmounting from
the current container.

#### Returns

`void`

#### Inherited from

[CoreGraphManipulation](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md).[unmount](components_ClusterNodeContainer._internal_.CoreGraphManipulation.md#unmount)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:497

___

### userPanningEnabled

▸ **userPanningEnabled**(): `boolean`

Get whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.userPanningEnabled

#### Returns

`boolean`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[userPanningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userpanningenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:753

▸ **userPanningEnabled**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
http://js.cytoscape.org/#cy.userPanningEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables user panning; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[userPanningEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userpanningenabled)

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

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[userZoomingEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userzoomingenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:789

▸ **userZoomingEnabled**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Get or set whether zooming by user events get if no parameter provided
(e.g. mouse wheel, pinch-to-zoom) is enabled.
http://js.cytoscape.org/#cy.userZoomingEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables user zooming; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[userZoomingEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#userzoomingenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:797

___

### viewport

▸ **viewport**(`zoom`, `pan`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the viewport state (pan & zoom) in one call.
http://js.cytoscape.org/#cy.viewport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The zoom level to set. |
| `pan` | [`Position`](components_ClusterNodeContainer._internal_.Position.md) | The pan to set (a rendered position). |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[viewport](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#viewport)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:832

___

### width

▸ **width**(): `number`

Get the on-screen width of the viewport in pixels.
http://js.cytoscape.org/#cy.width

#### Returns

`number`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[width](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#width)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:866

___

### zoom

▸ **zoom**(): `number`

Get the zoom level.
http://js.cytoscape.org/#cy.zoom

#### Returns

`number`

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[zoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#zoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:766

▸ **zoom**(`level?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set the zoom level.
http://js.cytoscape.org/#cy.zoom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level?` | [`ZoomOptions`](../modules/components_ClusterNodeContainer._internal_.md#zoomoptions) | The zoom level to set. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[zoom](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#zoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:774

___

### zoomingEnabled

▸ **zoomingEnabled**(`bool?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Set or get whether zooming is enabled. Get if no parameter provided.
http://js.cytoscape.org/#cy.zoomingEnabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bool?` | `boolean` | A truthy value enables zooming; a falsey value disables it. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Inherited from

[CoreViewportManipulation](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md).[zoomingEnabled](components_ClusterNodeContainer._internal_.CoreViewportManipulation.md#zoomingenabled)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:782
