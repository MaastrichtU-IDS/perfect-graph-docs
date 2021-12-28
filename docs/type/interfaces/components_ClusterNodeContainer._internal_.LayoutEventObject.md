[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / LayoutEventObject

# Interface: LayoutEventObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).LayoutEventObject

## Hierarchy

- [`AbstractEventObject`](components_ClusterNodeContainer._internal_.AbstractEventObject.md)

  ↳ **`LayoutEventObject`**

  ↳↳ [`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)

## Table of contents

### Properties

- [cy](components_ClusterNodeContainer._internal_.LayoutEventObject.md#cy)
- [layout](components_ClusterNodeContainer._internal_.LayoutEventObject.md#layout)
- [namespace](components_ClusterNodeContainer._internal_.LayoutEventObject.md#namespace)
- [target](components_ClusterNodeContainer._internal_.LayoutEventObject.md#target)
- [timeStamp](components_ClusterNodeContainer._internal_.LayoutEventObject.md#timestamp)
- [type](components_ClusterNodeContainer._internal_.LayoutEventObject.md#type)

### Methods

- [isDefaultPrevented](components_ClusterNodeContainer._internal_.LayoutEventObject.md#isdefaultprevented)
- [isImmediatePropagationStopped](components_ClusterNodeContainer._internal_.LayoutEventObject.md#isimmediatepropagationstopped)
- [isPropagationStopped](components_ClusterNodeContainer._internal_.LayoutEventObject.md#ispropagationstopped)
- [preventDefault](components_ClusterNodeContainer._internal_.LayoutEventObject.md#preventdefault)
- [stopImmediatePropagation](components_ClusterNodeContainer._internal_.LayoutEventObject.md#stopimmediatepropagation)
- [stopPropagation](components_ClusterNodeContainer._internal_.LayoutEventObject.md#stoppropagation)

## Properties

### cy

• **cy**: [`Core`](components_ClusterNodeContainer._internal_.Core.md)

a reference to the corresponding core Core

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[cy](components_ClusterNodeContainer._internal_.AbstractEventObject.md#cy)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4466

___

### layout

• **layout**: `any`

layout : indicates the corresponding layout that triggered the event
(useful if running multiple layouts simultaneously)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4496

___

### namespace

• **namespace**: `string`

the event namespace string (e.g. "foo" for "foo.tap")

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[namespace](components_ClusterNodeContainer._internal_.AbstractEventObject.md#namespace)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4472

___

### target

• **target**: `any`

indicates the element or core that first caused the event

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[target](components_ClusterNodeContainer._internal_.AbstractEventObject.md#target)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4468

___

### timeStamp

• **timeStamp**: `number`

Unix epoch time of event in milliseconds

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[timeStamp](components_ClusterNodeContainer._internal_.AbstractEventObject.md#timestamp)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4474

___

### type

• **type**: [`UserInputDeviceEventName`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventname) \| [`UserInputDeviceEventNameExt`](../modules/components_ClusterNodeContainer._internal_.md#userinputdeviceeventnameext)

the event type string (e.g. "tap")

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[type](components_ClusterNodeContainer._internal_.AbstractEventObject.md#type)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4470

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[isDefaultPrevented](components_ClusterNodeContainer._internal_.AbstractEventObject.md#isdefaultprevented)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4479

___

### isImmediatePropagationStopped

▸ **isImmediatePropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[isImmediatePropagationStopped](components_ClusterNodeContainer._internal_.AbstractEventObject.md#isimmediatepropagationstopped)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4481

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[isPropagationStopped](components_ClusterNodeContainer._internal_.AbstractEventObject.md#ispropagationstopped)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4480

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[preventDefault](components_ClusterNodeContainer._internal_.AbstractEventObject.md#preventdefault)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4476

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[stopImmediatePropagation](components_ClusterNodeContainer._internal_.AbstractEventObject.md#stopimmediatepropagation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4478

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractEventObject](components_ClusterNodeContainer._internal_.AbstractEventObject.md).[stopPropagation](components_ClusterNodeContainer._internal_.AbstractEventObject.md#stoppropagation)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4477
