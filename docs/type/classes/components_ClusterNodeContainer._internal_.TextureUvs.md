[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextureUvs

# Class: TextureUvs

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextureUvs

Stores a texture's frame in UV coordinates, in
which everything lies in the rectangle `[(0,0), (1,0),
(1,1), (0,1)]`.

| Corner       | Coordinates |
|--------------|-------------|
| Top-Left     | `(x0,y0)`   |
| Top-Right    | `(x1,y1)`   |
| Bottom-Right | `(x2,y2)`   |
| Bottom-Left  | `(x3,y3)`   |

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TextureUvs.md#constructor)

### Properties

- [uvsFloat32](components_ClusterNodeContainer._internal_.TextureUvs.md#uvsfloat32)
- [x0](components_ClusterNodeContainer._internal_.TextureUvs.md#x0)
- [x1](components_ClusterNodeContainer._internal_.TextureUvs.md#x1)
- [x2](components_ClusterNodeContainer._internal_.TextureUvs.md#x2)
- [x3](components_ClusterNodeContainer._internal_.TextureUvs.md#x3)
- [y0](components_ClusterNodeContainer._internal_.TextureUvs.md#y0)
- [y1](components_ClusterNodeContainer._internal_.TextureUvs.md#y1)
- [y2](components_ClusterNodeContainer._internal_.TextureUvs.md#y2)
- [y3](components_ClusterNodeContainer._internal_.TextureUvs.md#y3)

### Methods

- [set](components_ClusterNodeContainer._internal_.TextureUvs.md#set)
- [toString](components_ClusterNodeContainer._internal_.TextureUvs.md#tostring)

## Constructors

### constructor

• **new TextureUvs**()

#### Defined in

node_modules/@pixi/core/index.d.ts:5155

## Properties

### uvsFloat32

• **uvsFloat32**: `Float32Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:5154

___

### x0

• **x0**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5146

___

### x1

• **x1**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5148

___

### x2

• **x2**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5150

___

### x3

• **x3**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5152

___

### y0

• **y0**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5147

___

### y1

• **y1**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5149

___

### y2

• **y2**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5151

___

### y3

• **y3**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5153

## Methods

### set

▸ `Protected` **set**(`frame`, `baseFrame`, `rotate`): `void`

Sets the texture Uvs based on the given frame information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The frame of the texture |
| `baseFrame` | [`ISize`](../interfaces/components_ClusterNodeContainer._internal_.ISize.md) | The base frame of the texture |
| `rotate` | `number` | Rotation of frame, see {@link PIXI.groupD8} |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5164

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:5165