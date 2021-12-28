[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / CanvasImageData

# Interface: CanvasImageData

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).CanvasImageData

## Hierarchy

- **`CanvasImageData`**

  ↳ [`CanvasRenderingContext2D`](components_Text._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [createImageData](components_Text._internal_.CanvasImageData.md#createimagedata)
- [getImageData](components_Text._internal_.CanvasImageData.md#getimagedata)
- [putImageData](components_Text._internal_.CanvasImageData.md#putimagedata)

## Methods

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](components_Text._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3307

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3308

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](components_Text._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3309

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3310

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/components_ClusterNodeContainer._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3311
