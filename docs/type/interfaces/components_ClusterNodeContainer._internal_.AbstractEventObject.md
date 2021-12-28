[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AbstractEventObject

# Interface: AbstractEventObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AbstractEventObject

http://js.cytoscape.org/#events/event-object

## Hierarchy

- **`AbstractEventObject`**

  ↳ [`InputEventObject`](components_ClusterNodeContainer._internal_.InputEventObject.md)

  ↳ [`LayoutEventObject`](components_ClusterNodeContainer._internal_.LayoutEventObject.md)

## Table of contents

### Properties

- [cy](components_ClusterNodeContainer._internal_.AbstractEventObject.md#cy)
- [namespace](components_ClusterNodeContainer._internal_.AbstractEventObject.md#namespace)
- [target](components_ClusterNodeContainer._internal_.AbstractEventObject.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.AbstractEventObject.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.AbstractEventObject.md#type)

### Methods

- [isDefaultPrevented](components_ClusterNodeContainer._internal_.AbstractEventObject.md#isdefaultprevented)
- [isImmediatePropagationStopped](components_ClusterNodeContainer._internal_.AbstractEventObject.md#isimmediatepropagationstopped)
- [isPropagationStopped](components_ClusterNodeContainer._internal_.AbstractEventObject.md#ispropagationstopped)
- [preventDefault](components_ClusterNodeContainer._internal_.AbstractEventObject.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.AbstractEventObject.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.AbstractEventObject.md#stoppropagation)

## Properties

### cy

• **cy**: [`Core`](components_ClusterNodeContainer._internal_.Core.md)

a reference to the corresponding core Core

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4466

___

### namespace

• **namespace**: `string`

the event namespace string (e.g. "foo" for "foo.tap")

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4472

___

### target

• **target**: `any`

indicates the element or core that first caused the event

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4468

___

### timeStamp

• **timeStamp**: `number`

Unix epoch time of event in milliseconds

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4474

___

### type

• **type**: [`UserInputDeviceEventName`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventname) \| [`UserInputDeviceEventNameExt`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventnameext)

the event type string (e.g. "tap")

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4470

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4479

___

### isImmediatePropagationStopped

▸ **isImmediatePropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4481

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4480

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4476

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4478

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4477
