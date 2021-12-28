[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IAddOptions

# Interface: IAddOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IAddOptions

Options for a call to `.add()`.

**`see`** Loader#add

**`property`** {string} [name] - The name of the resource to load, if not passed the url is used.

**`property`** {string} [key] - Alias for `name`.

**`property`** {string} [url] - The url for this resource, relative to the baseUrl of this loader.

**`property`** {string|boolean} [crossOrigin] - Is this request cross-origin? Default is to
     determine automatically.

**`property`** {number} [timeout=0] - A timeout in milliseconds for the load. If the load takes
     longer than this time it is cancelled and the load is considered a failure. If this value is
     set to `0` then there is no explicit timeout.

**`property`** {PIXI.LoaderResource.LOAD_TYPE} [loadType=LoaderResource.LOAD_TYPE.XHR] - How should this resource
     be loaded?

**`property`** {PIXI.LoaderResource.XHR_RESPONSE_TYPE} [xhrType=LoaderResource.XHR_RESPONSE_TYPE.DEFAULT] - How
     should the data being loaded be interpreted when using XHR?

**`property`** {PIXI.LoaderResource.OnCompleteSignal} [onComplete] - Callback to add an an onComplete signal istener.

**`property`** {PIXI.LoaderResource.OnCompleteSignal} [callback] - Alias for `onComplete`.

**`property`** {PIXI.LoaderResource.IMetadata} [metadata] - Extra configuration for middleware and the Resource object.

## Table of contents

### Properties

- [callback](components_ClusterNodeContainer._internal_.IAddOptions.md#callback)
- [crossOrigin](components_ClusterNodeContainer._internal_.IAddOptions.md#crossorigin)
- [key](components_ClusterNodeContainer._internal_.IAddOptions.md#key)
- [loadType](components_ClusterNodeContainer._internal_.IAddOptions.md#loadtype)
- [metadata](components_ClusterNodeContainer._internal_.IAddOptions.md#metadata)
- [name](components_ClusterNodeContainer._internal_.IAddOptions.md#name)
- [onComplete](components_ClusterNodeContainer._internal_.IAddOptions.md#oncomplete)
- [parentResource](components_ClusterNodeContainer._internal_.IAddOptions.md#parentresource)
- [timeout](components_ClusterNodeContainer._internal_.IAddOptions.md#timeout)
- [url](components_ClusterNodeContainer._internal_.IAddOptions.md#url)
- [xhrType](components_ClusterNodeContainer._internal_.IAddOptions.md#xhrtype)

## Properties

### callback

• `Optional` **callback**: [`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:132

___

### crossOrigin

• `Optional` **crossOrigin**: `string` \| `boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:126

___

### key

• `Optional` **key**: `string`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:124

___

### loadType

• `Optional` **loadType**: [`LOAD_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.LOAD_TYPE.md)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:129

___

### metadata

• `Optional` **metadata**: [`IResourceMetadata`](components_ClusterNodeContainer._internal_.IResourceMetadata.md)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:133

___

### name

• `Optional` **name**: `string`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:123

___

### onComplete

• `Optional` **onComplete**: [`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:131

___

### parentResource

• `Optional` **parentResource**: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:128

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:127

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:125

___

### xhrType

• `Optional` **xhrType**: [`XHR_RESPONSE_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:130
