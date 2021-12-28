[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Layouts

# Interface: Layouts

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Layouts

Layouts
http://js.cytoscape.org/#layouts

The function of a layout is to set the positions on the nodes in the graph.
Layouts are extensions of Cytoscape.js such that it is possible for
anyone to write a layout without modifying the library itself.
Several layouts are included with Cytoscape.js by default,
and their options are described in the sections that follow
with the default values specified.
Note that you must set options.name to the name of the
layout to specify which one you want to run.
Each layout has its own algorithm for setting the position for each node.
This algorithm influences the overall shape of the graph and the lengths of the edges.
A layout’s algorithm can be customised by setting its options.
Therefore, edge lengths can be controlled by setting the layout options appropriately.
For force-directed (physics) layouts,
there is generally an option to set a weight to each edge
to affect the relative edge lengths.
Edge length can also be affected by options like spacing
factors, angles, and overlap avoidance.
Setting edge length depends on the particular layout,
and some layouts will allow for more precise edge lengths than others.

## Hierarchy

- [`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

- [`LayoutEvents`](components_ClusterNodeContainer._internal_.LayoutEvents.md)

  ↳ **`Layouts`**

## Table of contents

### Methods

- [addListener](components_ClusterNodeContainer._internal_.Layouts.md#addlistener)
- [bind](components_ClusterNodeContainer._internal_.Layouts.md#bind)
- [listen](components_ClusterNodeContainer._internal_.Layouts.md#listen)
- [off](components_ClusterNodeContainer._internal_.Layouts.md#off)
- [on](components_ClusterNodeContainer._internal_.Layouts.md#on)
- [one](components_ClusterNodeContainer._internal_.Layouts.md#one)
- [pon](components_ClusterNodeContainer._internal_.Layouts.md#pon)
- [promiseOn](components_ClusterNodeContainer._internal_.Layouts.md#promiseon)
- [removeListener](components_ClusterNodeContainer._internal_.Layouts.md#removelistener)
- [run](components_ClusterNodeContainer._internal_.Layouts.md#run)
- [start](components_ClusterNodeContainer._internal_.Layouts.md#start)
- [stop](components_ClusterNodeContainer._internal_.Layouts.md#stop)
- [trigger](components_ClusterNodeContainer._internal_.Layouts.md#trigger)
- [unbind](components_ClusterNodeContainer._internal_.Layouts.md#unbind)
- [unlisten](components_ClusterNodeContainer._internal_.Layouts.md#unlisten)

## Methods

### addListener

▸ **addListener**(`events`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[addListener](components_ClusterNodeContainer._internal_.LayoutEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4903

▸ **addListener**(`events`, `data`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[addListener](components_ClusterNodeContainer._internal_.LayoutEvents.md#addlistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4904

___

### bind

▸ **bind**(`events`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[bind](components_ClusterNodeContainer._internal_.LayoutEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4899

▸ **bind**(`events`, `data`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[bind](components_ClusterNodeContainer._internal_.LayoutEvents.md#bind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4900

___

### listen

▸ **listen**(`events`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[listen](components_ClusterNodeContainer._internal_.LayoutEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4901

▸ **listen**(`events`, `data`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[listen](components_ClusterNodeContainer._internal_.LayoutEvents.md#listen)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4902

___

### off

▸ **off**(`events`, `handler?`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Remove event handlers on the layout.
http://js.cytoscape.org/#layout.off

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | A reference to the handler function to remove. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[off](components_ClusterNodeContainer._internal_.LayoutEvents.md#off)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4930

___

### on

▸ **on**(`events`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[on](components_ClusterNodeContainer._internal_.LayoutEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4897

▸ **on**(`events`, `data`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[on](components_ClusterNodeContainer._internal_.LayoutEvents.md#on)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4898

___

### one

▸ **one**(`events`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Bind to events that are emitted by the layout, and trigger the handler only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names. |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) | The handler function that is called when one of the specified events occurs. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[one](components_ClusterNodeContainer._internal_.LayoutEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4920

▸ **one**(`events`, `data`, `handler`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `data` | `any` |
| `handler` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[one](components_ClusterNodeContainer._internal_.LayoutEvents.md#one)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4921

___

### pon

▸ **pon**(`events`): `Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |

#### Returns

`Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[pon](components_ClusterNodeContainer._internal_.LayoutEvents.md#pon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4912

___

### promiseOn

▸ **promiseOn**(`events`): `Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

Get a promise that is resolved with the first of any of
the specified events triggered on the layout.
http://js.cytoscape.org/#layout.promiseOn

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |

#### Returns

`Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[promiseOn](components_ClusterNodeContainer._internal_.LayoutEvents.md#promiseon)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4911

___

### removeListener

▸ **removeListener**(`events`, `handler?`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[removeListener](components_ClusterNodeContainer._internal_.LayoutEvents.md#removelistener)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4933

___

### run

▸ **run**(): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Start running the layout
http://js.cytoscape.org/#layout.run

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutManipulation](components_ClusterNodeContainer._internal_.LayoutManipulation.md).[run](components_ClusterNodeContainer._internal_.LayoutManipulation.md#run)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4878

___

### start

▸ **start**(): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutManipulation](components_ClusterNodeContainer._internal_.LayoutManipulation.md).[start](components_ClusterNodeContainer._internal_.LayoutManipulation.md#start)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4879

___

### stop

▸ **stop**(): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Stop running the (asynchronous/discrete) layout
http://js.cytoscape.org/#layout.stop

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutManipulation](components_ClusterNodeContainer._internal_.LayoutManipulation.md).[stop](components_ClusterNodeContainer._internal_.LayoutManipulation.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4884

___

### trigger

▸ **trigger**(`events`, `extraParams?`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Trigger one or more events on the layout.
http://js.cytoscape.org/#layout.trigger

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `string` | A space separated list of event names to trigger. |
| `extraParams?` | `any`[] | An array of additional parameters to pass to the handler. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[trigger](components_ClusterNodeContainer._internal_.LayoutEvents.md#trigger)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4941

___

### unbind

▸ **unbind**(`events`, `handler?`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[unbind](components_ClusterNodeContainer._internal_.LayoutEvents.md#unbind)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4931

___

### unlisten

▸ **unlisten**(`events`, `handler?`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` |
| `handler?` | [`EventHandler`](../modules/components_ClusterNodeContainer._internal_.md#eventhandler) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Inherited from

[LayoutEvents](components_ClusterNodeContainer._internal_.LayoutEvents.md).[unlisten](components_ClusterNodeContainer._internal_.LayoutEvents.md#unlisten)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4932
