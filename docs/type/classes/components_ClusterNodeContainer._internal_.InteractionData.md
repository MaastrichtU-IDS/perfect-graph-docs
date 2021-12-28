[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InteractionData

# Class: InteractionData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InteractionData

Holds all information related to an Interaction event

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.InteractionData.md#constructor)

### Properties

- [button](components_ClusterNodeContainer._internal_.InteractionData.md#button)
- [buttons](components_ClusterNodeContainer._internal_.InteractionData.md#buttons)
- [global](components_ClusterNodeContainer._internal_.InteractionData.md#global)
- [height](components_ClusterNodeContainer._internal_.InteractionData.md#height)
- [identifier](components_ClusterNodeContainer._internal_.InteractionData.md#identifier)
- [isPrimary](components_ClusterNodeContainer._internal_.InteractionData.md#isprimary)
- [originalEvent](components_ClusterNodeContainer._internal_.InteractionData.md#originalevent)
- [pointerType](components_ClusterNodeContainer._internal_.InteractionData.md#pointertype)
- [pressure](components_ClusterNodeContainer._internal_.InteractionData.md#pressure)
- [rotationAngle](components_ClusterNodeContainer._internal_.InteractionData.md#rotationangle)
- [tangentialPressure](components_ClusterNodeContainer._internal_.InteractionData.md#tangentialpressure)
- [target](components_ClusterNodeContainer._internal_.InteractionData.md#target)
- [tiltX](components_ClusterNodeContainer._internal_.InteractionData.md#tiltx)
- [tiltY](components_ClusterNodeContainer._internal_.InteractionData.md#tilty)
- [twist](components_ClusterNodeContainer._internal_.InteractionData.md#twist)
- [width](components_ClusterNodeContainer._internal_.InteractionData.md#width)

### Accessors

- [pointerId](components_ClusterNodeContainer._internal_.InteractionData.md#pointerid)

### Methods

- [copyEvent](components_ClusterNodeContainer._internal_.InteractionData.md#copyevent)
- [getLocalPosition](components_ClusterNodeContainer._internal_.InteractionData.md#getlocalposition)
- [reset](components_ClusterNodeContainer._internal_.InteractionData.md#reset)

## Constructors

### constructor

• **new InteractionData**()

#### Defined in

node_modules/@pixi/interaction/index.d.ts:47

## Properties

### button

• **button**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:36

___

### buttons

• **buttons**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:37

___

### global

• **global**: [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:31

___

### height

• **height**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:39

___

### identifier

• **identifier**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:34

___

### isPrimary

• **isPrimary**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:35

___

### originalEvent

• **originalEvent**: [`InteractivePointerEvent`](../modules/components_ClusterNodeContainer._internal_.md#interactivepointerevent)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:33

___

### pointerType

• **pointerType**: `string`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:42

___

### pressure

• **pressure**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:43

___

### rotationAngle

• **rotationAngle**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:44

___

### tangentialPressure

• **tangentialPressure**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:46

___

### target

• **target**: `DisplayObject`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:32

___

### tiltX

• **tiltX**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:40

___

### tiltY

• **tiltY**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:41

___

### twist

• **twist**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:45

___

### width

• **width**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:38

## Accessors

### pointerId

• `get` **pointerId**(): `number`

The unique identifier of the pointer. It will be the same as `identifier`.

**`readonly`**

**`member`** {number}

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId

#### Returns

`number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:54

## Methods

### copyEvent

▸ **copyEvent**(`event`): `void`

Copies properties from normalized event data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`InteractivePointerEvent`](../modules/components_ClusterNodeContainer._internal_.md#interactivepointerevent) \| [`Touch`](../modules/components_ClusterNodeContainer._internal_.md#touch) | The normalized event data |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:73

___

### getLocalPosition

▸ **getLocalPosition**<`P`\>(`displayObject`, `point?`, `globalPos?`): `P`

This will return the local coordinates of the specified displayObject for this InteractionData

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) = [`Point`](components_ClusterNodeContainer._internal_.Point.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayObject` | `DisplayObject` | The DisplayObject that you would like the local  coords off |
| `point?` | `P` | - |
| `globalPos?` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | - |

#### Returns

`P`

A point containing the coordinates of the InteractionData position relative
 to the DisplayObject

#### Defined in

node_modules/@pixi/interaction/index.d.ts:67

___

### reset

▸ **reset**(): `void`

Resets the data for pooling.

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:77
