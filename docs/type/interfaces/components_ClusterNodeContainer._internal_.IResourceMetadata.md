[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IResourceMetadata

# Interface: IResourceMetadata

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IResourceMetadata

Metadata for loader resource. It is very messy way to pass options for loader middlewares

Can be extended in `GlobalMixins.IResourceMetadata`

**`memberof`** PIXI

## Hierarchy

- `IResourceMetadata`

- [`IBaseTextureOptions`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)

  ↳ **`IResourceMetadata`**

## Table of contents

### Properties

- [alphaMode](components_ClusterNodeContainer._internal_.IResourceMetadata.md#alphamode)
- [anisotropicLevel](components_ClusterNodeContainer._internal_.IResourceMetadata.md#anisotropiclevel)
- [format](components_ClusterNodeContainer._internal_.IResourceMetadata.md#format)
- [height](components_ClusterNodeContainer._internal_.IResourceMetadata.md#height)
- [imageMetadata](components_ClusterNodeContainer._internal_.IResourceMetadata.md#imagemetadata)
- [loadElement](components_ClusterNodeContainer._internal_.IResourceMetadata.md#loadelement)
- [mimeType](components_ClusterNodeContainer._internal_.IResourceMetadata.md#mimetype)
- [mipmap](components_ClusterNodeContainer._internal_.IResourceMetadata.md#mipmap)
- [multisample](components_ClusterNodeContainer._internal_.IResourceMetadata.md#multisample)
- [pageFile](components_ClusterNodeContainer._internal_.IResourceMetadata.md#pagefile)
- [pixiIdPrefix](components_ClusterNodeContainer._internal_.IResourceMetadata.md#pixiidprefix)
- [resolution](components_ClusterNodeContainer._internal_.IResourceMetadata.md#resolution)
- [resourceOptions](components_ClusterNodeContainer._internal_.IResourceMetadata.md#resourceoptions)
- [scaleMode](components_ClusterNodeContainer._internal_.IResourceMetadata.md#scalemode)
- [skipSource](components_ClusterNodeContainer._internal_.IResourceMetadata.md#skipsource)
- [target](components_ClusterNodeContainer._internal_.IResourceMetadata.md#target)
- [type](components_ClusterNodeContainer._internal_.IResourceMetadata.md#type)
- [width](components_ClusterNodeContainer._internal_.IResourceMetadata.md#width)
- [wrapMode](components_ClusterNodeContainer._internal_.IResourceMetadata.md#wrapmode)

## Properties

### alphaMode

• `Optional` **alphaMode**: [`ALPHA_MODES`](../enums/components_ClusterNodeContainer._internal_.ALPHA_MODES.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[alphaMode](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#alphamode)

#### Defined in

node_modules/@pixi/core/index.d.ts:2693

___

### anisotropicLevel

• `Optional` **anisotropicLevel**: `number`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[anisotropicLevel](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#anisotropiclevel)

#### Defined in

node_modules/@pixi/core/index.d.ts:2695

___

### format

• `Optional` **format**: [`FORMATS`](../enums/components_ClusterNodeContainer._internal_.FORMATS.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[format](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#format)

#### Defined in

node_modules/@pixi/core/index.d.ts:2700

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[height](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#height)

#### Defined in

node_modules/@pixi/core/index.d.ts:2698

___

### imageMetadata

• `Optional` **imageMetadata**: [`IResourceMetadata`](components_ClusterNodeContainer._internal_.IResourceMetadata.md)

Used by BitmapFonts, Spritesheet and CompressedTextures as the options to used for
metadata when loading the child image.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:205

___

### loadElement

• `Optional` **loadElement**: `HTMLAudioElement` \| `HTMLImageElement` \| `HTMLVideoElement`

The element to use for loading, instead of creating one.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:189

___

### mimeType

• `Optional` **mimeType**: `string` \| `string`[]

The mime type to use for the source element
of a video/audio elment. If the urls are an array, you can pass this as an array as well
where each index is the mime type to use for the corresponding url index.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:200

___

### mipmap

• `Optional` **mipmap**: [`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[mipmap](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#mipmap)

#### Defined in

node_modules/@pixi/core/index.d.ts:2694

___

### multisample

• `Optional` **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[multisample](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#multisample)

#### Defined in

node_modules/@pixi/core/index.d.ts:2704

___

### pageFile

• `Optional` **pageFile**: `string`

#### Inherited from

GlobalMixins.IResourceMetadata.pageFile

#### Defined in

node_modules/@pixi/text-bitmap/global.d.ts:14

___

### pixiIdPrefix

• `Optional` **pixiIdPrefix**: `string`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[pixiIdPrefix](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#pixiidprefix)

#### Defined in

node_modules/@pixi/core/index.d.ts:2706

___

### resolution

• `Optional` **resolution**: `number`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[resolution](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#resolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:2703

___

### resourceOptions

• `Optional` **resourceOptions**: `any`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[resourceOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#resourceoptions)

#### Defined in

node_modules/@pixi/core/index.d.ts:2705

___

### scaleMode

• `Optional` **scaleMode**: [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[scaleMode](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#scalemode)

#### Defined in

node_modules/@pixi/core/index.d.ts:2696

___

### skipSource

• `Optional` **skipSource**: `boolean`

Skips adding source(s) to the load element. This
is useful if you want to pass in a `loadElement` that you already added load sources to.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:194

___

### target

• `Optional` **target**: [`TARGETS`](../enums/components_ClusterNodeContainer._internal_.TARGETS.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[target](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#target)

#### Defined in

node_modules/@pixi/core/index.d.ts:2702

___

### type

• `Optional` **type**: [`TYPES`](../enums/components_ClusterNodeContainer._internal_.TYPES.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[type](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#type)

#### Defined in

node_modules/@pixi/core/index.d.ts:2701

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[width](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#width)

#### Defined in

node_modules/@pixi/core/index.d.ts:2697

___

### wrapMode

• `Optional` **wrapMode**: [`WRAP_MODES`](../enums/components_ClusterNodeContainer._internal_.WRAP_MODES.md)

#### Inherited from

[IBaseTextureOptions](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md).[wrapMode](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md#wrapmode)

#### Defined in

node_modules/@pixi/core/index.d.ts:2699
