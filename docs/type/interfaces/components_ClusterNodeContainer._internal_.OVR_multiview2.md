[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / OVR\_multiview2

# Interface: OVR\_multiview2

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).OVR_multiview2

## Table of contents

### Properties

- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR](components_ClusterNodeContainer._internal_.OVR_multiview2.md#framebuffer_attachment_texture_base_view_index_ovr)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR](components_ClusterNodeContainer._internal_.OVR_multiview2.md#framebuffer_attachment_texture_num_views_ovr)
- [FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR](components_ClusterNodeContainer._internal_.OVR_multiview2.md#framebuffer_incomplete_view_targets_ovr)
- [MAX\_VIEWS\_OVR](components_ClusterNodeContainer._internal_.OVR_multiview2.md#max_views_ovr)

### Methods

- [framebufferTextureMultiviewOVR](components_ClusterNodeContainer._internal_.OVR_multiview2.md#framebuffertexturemultiviewovr)

## Properties

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9899

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9900

___

### FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9901

___

### MAX\_VIEWS\_OVR

• `Readonly` **MAX\_VIEWS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9902

## Methods

### framebufferTextureMultiviewOVR

▸ **framebufferTextureMultiviewOVR**(`target`, `attachment`, `texture`, `level`, `baseViewIndex`, `numViews`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |
| `level` | `number` |
| `baseViewIndex` | `number` |
| `numViews` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9898
