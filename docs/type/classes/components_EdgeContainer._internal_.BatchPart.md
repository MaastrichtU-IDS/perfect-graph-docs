[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / BatchPart

# Class: BatchPart

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).BatchPart

A structure to hold interim batch objects for Graphics.

**`memberof`** PIXI.graphicsUtils

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.BatchPart.md#constructor)

### Properties

- [attribSize](components_EdgeContainer._internal_.BatchPart.md#attribsize)
- [attribStart](components_EdgeContainer._internal_.BatchPart.md#attribstart)
- [size](components_EdgeContainer._internal_.BatchPart.md#size)
- [start](components_EdgeContainer._internal_.BatchPart.md#start)
- [style](components_EdgeContainer._internal_.BatchPart.md#style)

### Methods

- [begin](components_EdgeContainer._internal_.BatchPart.md#begin)
- [end](components_EdgeContainer._internal_.BatchPart.md#end)
- [reset](components_EdgeContainer._internal_.BatchPart.md#reset)

## Constructors

### constructor

• **new BatchPart**()

#### Defined in

node_modules/@pixi/graphics/index.d.ts:75

## Properties

### attribSize

• **attribSize**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:74

___

### attribStart

• **attribStart**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:73

___

### size

• **size**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:72

___

### start

• **start**: `number`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:71

___

### style

• **style**: [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) \| [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:70

## Methods

### begin

▸ **begin**(`style`, `startIndex`, `attribStart`): `void`

Begin batch part

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) \| [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md) |
| `startIndex` | `number` |
| `attribStart` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:83

___

### end

▸ **end**(`endIndex`, `endAttrib`): `void`

End batch part

#### Parameters

| Name | Type |
| :------ | :------ |
| `endIndex` | `number` |
| `endAttrib` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:90

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:91
