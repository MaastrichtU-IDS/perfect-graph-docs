[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EventObject

# Interface: EventObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EventObject

Events passed to handler callbacks are similar to
jQuery event objects in that they wrap native event objects,
mimicking their API.

http://js.cytoscape.org/#events

## Hierarchy

- [`InputEventObject`](components_ClusterNodeContainer._internal_.InputEventObject.md)

- [`LayoutEventObject`](components_ClusterNodeContainer._internal_.LayoutEventObject.md)

  ↳ **`EventObject`**

## Table of contents

### Properties

- [cy](components_ClusterNodeContainer._internal_.EventObject.md#cy)
- [layout](components_ClusterNodeContainer._internal_.EventObject.md#layout)
- [namespace](components_ClusterNodeContainer._internal_.EventObject.md#namespace)
- [originalEvent](components_ClusterNodeContainer._internal_.EventObject.md#originalevent)
- [position](components_ClusterNodeContainer._internal_.EventObject.md#position)
- [renderedPosition](components_ClusterNodeContainer._internal_.EventObject.md#renderedposition)
- [target](components_ClusterNodeContainer._internal_.EventObject.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.EventObject.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.EventObject.md#type)

### Methods

- [isDefaultPrevented](components_ClusterNodeContainer._internal_.EventObject.md#isdefaultprevented)
- [isImmediatePropagationStopped](components_ClusterNodeContainer._internal_.EventObject.md#isimmediatepropagationstopped)
- [isPropagationStopped](components_ClusterNodeContainer._internal_.EventObject.md#ispropagationstopped)
- [preventDefault](components_ClusterNodeContainer._internal_.EventObject.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.EventObject.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.EventObject.md#stoppropagation)

## Properties

### cy

• **cy**: [`Core`](components_ClusterNodeContainer._internal_.Core.md)

a reference to the corresponding core Core

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[cy](components_ClusterNodeContainer._internal_.LayoutEventObject.md#cy)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4466

___

### layout

• **layout**: `any`

layout : indicates the corresponding layout that triggered the event
(useful if running multiple layouts simultaneously)

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[layout](components_ClusterNodeContainer._internal_.LayoutEventObject.md#layout)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4496

___

### namespace

• **namespace**: `string`

the event namespace string (e.g. "foo" for "foo.tap")

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[namespace](components_ClusterNodeContainer._internal_.LayoutEventObject.md#namespace)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4472

___

### originalEvent

• **originalEvent**: `MouseEvent`

originalEvent : the original user input device event object

#### Inherited from

[InputEventObject](components_ClusterNodeContainer._internal_.InputEventObject.md).[originalEvent](components_ClusterNodeContainer._internal_.InputEventObject.md#originalevent)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4489

___

### position

• **position**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

position : indicates the model position of the event

#### Inherited from

[InputEventObject](components_ClusterNodeContainer._internal_.InputEventObject.md).[position](components_ClusterNodeContainer._internal_.InputEventObject.md#position)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4485

___

### renderedPosition

• **renderedPosition**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

renderedPosition : indicates the rendered position of the event

#### Inherited from

[InputEventObject](components_ClusterNodeContainer._internal_.InputEventObject.md).[renderedPosition](components_ClusterNodeContainer._internal_.InputEventObject.md#renderedposition)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4487

___

### target

• **target**: `any`

indicates the element or core that first caused the event

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[target](components_ClusterNodeContainer._internal_.LayoutEventObject.md#target)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4468

___

### timeStamp

• **timeStamp**: `number`

Unix epoch time of event in milliseconds

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[timeStamp](components_ClusterNodeContainer._internal_.LayoutEventObject.md#timestamp)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4474

___

### type

• **type**: [`UserInputDeviceEventName`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventname) \| [`UserInputDeviceEventNameExt`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventnameext)

the event type string (e.g. "tap")

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[type](components_ClusterNodeContainer._internal_.LayoutEventObject.md#type)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4470

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[isDefaultPrevented](components_ClusterNodeContainer._internal_.LayoutEventObject.md#isdefaultprevented)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4479

___

### isImmediatePropagationStopped

▸ **isImmediatePropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[isImmediatePropagationStopped](components_ClusterNodeContainer._internal_.LayoutEventObject.md#isimmediatepropagationstopped)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4481

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[isPropagationStopped](components_ClusterNodeContainer._internal_.LayoutEventObject.md#ispropagationstopped)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4480

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[preventDefault](components_ClusterNodeContainer._internal_.LayoutEventObject.md#preventdefault)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4476

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

#### Returns

`void`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[stopImmediatePropagation](components_ClusterNodeContainer._internal_.LayoutEventObject.md#stopimmediatepropagation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4478

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[LayoutEventObject](components_ClusterNodeContainer._internal_.LayoutEventObject.md).[stopPropagation](components_ClusterNodeContainer._internal_.LayoutEventObject.md#stoppropagation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4477
