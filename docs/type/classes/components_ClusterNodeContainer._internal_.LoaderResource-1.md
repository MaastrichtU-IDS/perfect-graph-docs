[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / LoaderResource

# Class: LoaderResource

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).LoaderResource

Manages the state and loading of a resource and all child resources.

Can be extended in `GlobalMixins.LoaderResource`.

**`memberof`** PIXI

## Hierarchy

- `LoaderResource`

- [`ILoaderResource`](../interfaces/components_ClusterNodeContainer._internal_.ILoaderResource.md)

  ↳ **`LoaderResource`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.LoaderResource-1.md#constructor)

### Properties

- [\_boundComplete](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundcomplete)
- [\_boundOnError](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundonerror)
- [\_boundOnProgress](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundonprogress)
- [\_boundOnTimeout](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundontimeout)
- [\_boundXhrOnAbort](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundxhronabort)
- [\_boundXhrOnError](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundxhronerror)
- [\_boundXhrOnLoad](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundxhronload)
- [\_boundXhrOnTimeout](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_boundxhrontimeout)
- [\_clearEvents](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_clearevents)
- [\_createSource](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_createsource)
- [\_dequeue](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_dequeue)
- [\_determineLoadType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_determineloadtype)
- [\_determineXhrType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_determinexhrtype)
- [\_elementTimer](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_elementtimer)
- [\_finish](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_finish)
- [\_flags](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_flags)
- [\_getExtension](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_getextension)
- [\_hasFlag](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_hasflag)
- [\_loadSourceElement](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_loadsourceelement)
- [\_loadXdr](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_loadxdr)
- [\_loadXhr](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_loadxhr)
- [\_onError](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_onerror)
- [\_onLoadBinding](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_onloadbinding)
- [\_onProgress](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_onprogress)
- [\_onTimeout](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_ontimeout)
- [\_setFlag](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_setflag)
- [\_xhrOnAbort](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_xhronabort)
- [\_xhrOnError](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_xhronerror)
- [\_xhrOnLoad](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_xhronload)
- [\_xhrOnTimeout](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_xhrontimeout)
- [bitmapFont](components_ClusterNodeContainer._internal_.LoaderResource-1.md#bitmapfont)
- [blob](components_ClusterNodeContainer._internal_.LoaderResource-1.md#blob)
- [children](components_ClusterNodeContainer._internal_.LoaderResource-1.md#children)
- [crossOrigin](components_ClusterNodeContainer._internal_.LoaderResource-1.md#crossorigin)
- [data](components_ClusterNodeContainer._internal_.LoaderResource-1.md#data)
- [error](components_ClusterNodeContainer._internal_.LoaderResource-1.md#error)
- [extension](components_ClusterNodeContainer._internal_.LoaderResource-1.md#extension)
- [loadType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#loadtype)
- [metadata](components_ClusterNodeContainer._internal_.LoaderResource-1.md#metadata)
- [name](components_ClusterNodeContainer._internal_.LoaderResource-1.md#name)
- [onAfterMiddleware](components_ClusterNodeContainer._internal_.LoaderResource-1.md#onaftermiddleware)
- [onComplete](components_ClusterNodeContainer._internal_.LoaderResource-1.md#oncomplete)
- [onProgress](components_ClusterNodeContainer._internal_.LoaderResource-1.md#onprogress)
- [onStart](components_ClusterNodeContainer._internal_.LoaderResource-1.md#onstart)
- [progressChunk](components_ClusterNodeContainer._internal_.LoaderResource-1.md#progresschunk)
- [spritesheet](components_ClusterNodeContainer._internal_.LoaderResource-1.md#spritesheet)
- [texture](components_ClusterNodeContainer._internal_.LoaderResource-1.md#texture)
- [textures](components_ClusterNodeContainer._internal_.LoaderResource-1.md#textures)
- [timeout](components_ClusterNodeContainer._internal_.LoaderResource-1.md#timeout)
- [type](components_ClusterNodeContainer._internal_.LoaderResource-1.md#type)
- [url](components_ClusterNodeContainer._internal_.LoaderResource-1.md#url)
- [xdr](components_ClusterNodeContainer._internal_.LoaderResource-1.md#xdr)
- [xhr](components_ClusterNodeContainer._internal_.LoaderResource-1.md#xhr)
- [xhrType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#xhrtype)

### Accessors

- [isComplete](components_ClusterNodeContainer._internal_.LoaderResource-1.md#iscomplete)
- [isDataUrl](components_ClusterNodeContainer._internal_.LoaderResource-1.md#isdataurl)
- [isLoading](components_ClusterNodeContainer._internal_.LoaderResource-1.md#isloading)

### Methods

- [\_determineCrossOrigin](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_determinecrossorigin)
- [\_getMimeFromXhrType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_getmimefromxhrtype)
- [\_loadElement](components_ClusterNodeContainer._internal_.LoaderResource-1.md#_loadelement)
- [abort](components_ClusterNodeContainer._internal_.LoaderResource-1.md#abort)
- [complete](components_ClusterNodeContainer._internal_.LoaderResource-1.md#complete)
- [load](components_ClusterNodeContainer._internal_.LoaderResource-1.md#load)
- [setExtensionLoadType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#setextensionloadtype)
- [setExtensionXhrType](components_ClusterNodeContainer._internal_.LoaderResource-1.md#setextensionxhrtype)

## Constructors

### constructor

• **new LoaderResource**(`name`, `url`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the resource to load. |
| `url` | `string` \| `string`[] | The url for this resource, for audio/video loads you can pass      an array of sources. |
| `options?` | `Object` | - |
| `options.crossOrigin?` | `string` \| `boolean` | - |
| `options.loadType?` | [`LOAD_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.LOAD_TYPE.md) | - |
| `options.metadata?` | [`IResourceMetadata`](../interfaces/components_ClusterNodeContainer._internal_.IResourceMetadata.md) | - |
| `options.timeout?` | `number` | - |
| `options.xhrType?` | [`XHR_RESPONSE_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md) | - |

#### Inherited from

GlobalMixins.LoaderResource.constructor

#### Defined in

node_modules/@pixi/loaders/index.d.ts:785

## Properties

### \_boundComplete

• `Private` **\_boundComplete**: `any`

The `complete` function bound to this resource's context.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:726

___

### \_boundOnError

• `Private` **\_boundOnError**: `any`

The `_onError` function bound to this resource's context.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:733

___

### \_boundOnProgress

• `Private` **\_boundOnProgress**: `any`

The `_onProgress` function bound to this resource's context.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:740

___

### \_boundOnTimeout

• `Private` **\_boundOnTimeout**: `any`

The `_onTimeout` function bound to this resource's context.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:747

___

### \_boundXhrOnAbort

• `Private` **\_boundXhrOnAbort**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:750

___

### \_boundXhrOnError

• `Private` **\_boundXhrOnError**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:748

___

### \_boundXhrOnLoad

• `Private` **\_boundXhrOnLoad**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:751

___

### \_boundXhrOnTimeout

• `Private` **\_boundXhrOnTimeout**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:749

___

### \_clearEvents

• `Private` **\_clearEvents**: `any`

Clears all the events from the underlying loading source.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:882

___

### \_createSource

• `Private` **\_createSource**: `any`

Creates a source used in loading via an element.

**`param`** The element type (video or audio).

**`param`** The source URL to load from.

**`param`** The mime type of the video

**`returns`** The source element.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:915

___

### \_dequeue

• `Private` **\_dequeue**: `any`

The `dequeue` method that will be used a storage place for the async queue dequeue method
used privately by the loader.

**`member`** {function}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:706

___

### \_determineLoadType

• `Private` **\_determineLoadType**: `any`

Determines the loadType of a resource based on the extension of the
resource being loaded.

**`returns`** The loadType to use.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:972

___

### \_determineXhrType

• `Private` **\_determineXhrType**: `any`

Determines the responseType of an XHR request based on the extension of the
resource being loaded.

**`returns`** The responseType to use.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:964

___

### \_elementTimer

• `Private` **\_elementTimer**: `any`

The timer for element loads to check if they timeout.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:719

___

### \_finish

• `Private` **\_finish**: `any`

Finalizes the load.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:886

___

### \_flags

• `Private` **\_flags**: `any`

The state flags of this resource.

**`member`** {number}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:698

___

### \_getExtension

• `Private` **\_getExtension**: `any`

Extracts the extension (sans '.') of the file being loaded by the resource.

**`param`** url to parse, `this.url` by default.

**`returns`** The extension.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:979

___

### \_hasFlag

• `Private` **\_hasFlag**: `any`

Checks if the flag is set.

**`param`** The flag to check.

**`returns`** True if the flag is set.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:871

___

### \_loadSourceElement

• `Private` **\_loadSourceElement**: `any`

Loads this resources using an element that has multiple sources,
like an HTMLAudioElement or HTMLVideoElement.

**`param`** The type of element to use.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:899

___

### \_loadXdr

• `Private` **\_loadXdr**: `any`

Loads this resources using an XDomainRequest. This is here because we need to support IE9 (gross).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:907

___

### \_loadXhr

• `Private` **\_loadXhr**: `any`

Loads this resources using an XMLHttpRequest.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:903

___

### \_onError

• `Private` **\_onError**: `any`

Called if a load errors out.

**`param`** The error event from the element that emits it.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:921

___

### \_onLoadBinding

• `Private` **\_onLoadBinding**: `any`

Used a storage place for the on load binding used privately by the loader.

**`member`** {function}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:713

___

### \_onProgress

• `Private` **\_onProgress**: `any`

Called if a load progress event fires for an element or xhr/xdr.

**`param`** Progress event.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:926

___

### \_onTimeout

• `Private` **\_onTimeout**: `any`

Called if a timeout event fires for an element.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:930

___

### \_setFlag

• `Private` **\_setFlag**: `any`

(Un)Sets the flag.

**`param`** The flag to (un)set.

**`param`** Whether to set or (un)set the flag.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:878

___

### \_xhrOnAbort

• `Private` **\_xhrOnAbort**: `any`

Called if an abort event fires for xhr/xdr.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:942

___

### \_xhrOnError

• `Private` **\_xhrOnError**: `any`

Called if an error event fires for xhr/xdr.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:934

___

### \_xhrOnLoad

• `Private` **\_xhrOnLoad**: `any`

Called when data successfully loads from an xhr/xdr request.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:946

___

### \_xhrOnTimeout

• `Private` **\_xhrOnTimeout**: `any`

Called if an error event fires for xhr/xdr.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:938

___

### bitmapFont

• `Optional` **bitmapFont**: [`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)

#### Inherited from

GlobalMixins.LoaderResource.bitmapFont

#### Defined in

node_modules/@pixi/text-bitmap/global.d.ts:4

___

### blob

• `Optional` **blob**: `Blob`

used by parsing middleware

#### Defined in

node_modules/@pixi/loaders/index.d.ts:561

___

### children

• `Readonly` **children**: [`LoaderResource`](components_ClusterNodeContainer._internal_.LoaderResource-1.md)[]

The child resources this resource owns.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:640

___

### crossOrigin

• **crossOrigin**: `string` \| `boolean`

Is this request cross-origin? If unset, determined automatically.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:590

___

### data

• **data**: `any`

The data that was loaded by the resource.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:586

___

### error

• **error**: [`Error`](../modules/components_ClusterNodeContainer._internal_.md#error)

The error that occurred while loading (if any).

**`readonly`**

**`member`** {Error}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:626

___

### extension

• `Readonly` **extension**: `string`

The extension used to load this resource.

**`readonly`**

#### Defined in

node_modules/@pixi/loaders/index.d.ts:582

___

### loadType

• **loadType**: [`LOAD_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.LOAD_TYPE.md)

The method of loading to use for this resource.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:604

___

### metadata

• **metadata**: [`IResourceMetadata`](../interfaces/components_ClusterNodeContainer._internal_.IResourceMetadata.md)

Extra info for middleware, and controlling specifics about how the resource loads.

Note that if you pass in a `loadElement`, the Resource class takes ownership of it.
Meaning it will modify it as it sees fit.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:619

___

### name

• `Readonly` **name**: `string`

The name of this resource.

**`readonly`**

#### Defined in

node_modules/@pixi/loaders/index.d.ts:568

___

### onAfterMiddleware

• **onAfterMiddleware**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal)\>

Dispatched after this resource has had all the *after* middleware run on it.

The callback looks like [LoaderResource.OnCompleteSignal](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:691

___

### onComplete

• **onComplete**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal)\>

Dispatched once this resource has loaded, if there was an error it will
be in the `error` property.

The callback looks like [LoaderResource.OnCompleteSignal](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:683

___

### onProgress

• **onProgress**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnProgressSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#onprogresssignal)\>

Dispatched each time progress of this resource load updates.
Not all resources types and loader systems can support this event
so sometimes it may not be available. If the resource
is being loaded on a modern browser, using XHR, and the remote server
properly sets Content-Length headers, then this will be available.

The callback looks like [LoaderResource.OnProgressSignal](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#onprogresssignal).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:674

___

### onStart

• **onStart**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnStartSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#onstartsignal)\>

Dispatched when the resource beings to load.

The callback looks like [LoaderResource.OnStartSignal](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#onstartsignal).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:662

___

### progressChunk

• **progressChunk**: `number`

The progress chunk owned by this resource.

**`readonly`**

**`member`** {number}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:654

___

### spritesheet

• `Optional` **spritesheet**: [`Spritesheet`](components_ClusterNodeContainer._internal_.Spritesheet.md)

Reference to Spritesheet object created.

#### Inherited from

GlobalMixins.LoaderResource.spritesheet

#### Defined in

node_modules/@pixi/spritesheet/global.d.ts:6

___

### texture

• `Optional` **texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Texture reference for loading images and other textures.

#### Inherited from

GlobalMixins.LoaderResource.texture

#### Defined in

node_modules/@pixi/loaders/index.d.ts:557

___

### textures

• `Optional` **textures**: `Object`

Dictionary of textures from Spritesheet.

#### Index signature

▪ [name: `string`]: [`"/Users/turgaysaba/Desktop/projects/perfect-graph/node_modules/@pixi/core/index"`](../modules/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.md)

#### Inherited from

GlobalMixins.LoaderResource.textures

#### Defined in

node_modules/@pixi/spritesheet/global.d.ts:9

___

### timeout

• **timeout**: `number`

A timeout in milliseconds for the load. If the load takes longer than this time
it is cancelled and the load is considered a failure. If this value is set to `0`
then there is no explicit timeout.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:598

___

### type

• **type**: [`TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.TYPE.md)

The resource type.

**`readonly`**

#### Defined in

node_modules/@pixi/loaders/index.d.ts:647

___

### url

• `Readonly` **url**: `string`

The url used to load this resource.

**`readonly`**

#### Defined in

node_modules/@pixi/loaders/index.d.ts:575

___

### xdr

• `Private` **xdr**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:634

___

### xhr

• **xhr**: `XMLHttpRequest`

The XHR object that was used to load this resource. This is only set
when `loadType` is `LoaderResource.LOAD_TYPE.XHR`.

**`readonly`**

#### Defined in

node_modules/@pixi/loaders/index.d.ts:633

___

### xhrType

• **xhrType**: `string`

The type used to load the resource via XHR. If unset, determined automatically.

**`member`** {string}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:610

## Accessors

### isComplete

• `get` **isComplete**(): `boolean`

Describes if this resource has finished loading. Is true when the resource has completely
loaded.

**`readonly`**

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:839

___

### isDataUrl

• `get` **isDataUrl**(): `boolean`

Stores whether or not this url is a data url.

**`readonly`**

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:831

___

### isLoading

• `get` **isLoading**(): `boolean`

Describes if this resource is currently loading. Is true when the resource starts loading,
and is false again when complete.

**`readonly`**

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:847

## Methods

### \_determineCrossOrigin

▸ `Private` **_determineCrossOrigin**(`url`, `loc?`): `string`

Sets the `crossOrigin` property for this resource based on if the url
for this resource is cross-origin. If crossOrigin was manually set, this
function does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The url to test. |
| `loc?` | `any` | - |

#### Returns

`string`

The crossOrigin value to use (or empty string for none).

#### Defined in

node_modules/@pixi/loaders/index.d.ts:956

___

### \_getMimeFromXhrType

▸ `Private` **_getMimeFromXhrType**(`type`): `string`

Determines the mime type of an XHR request based on the responseType of
resource being loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`XHR_RESPONSE_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md) | The type to get a mime type for. |

#### Returns

`string`

The mime type to use.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:988

___

### \_loadElement

▸ `Private` **_loadElement**(`type`): `void`

Loads this resources using an element that has a single source,
like an HTMLImageElement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of element to use. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:893

___

### abort

▸ **abort**(`message`): `void`

Aborts the loading of this resource, with an optional message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to use for the error |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:858

___

### complete

▸ **complete**(): `void`

Marks the resource as complete.

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:852

___

### load

▸ **load**(`cb?`): `void`

Kicks off loading of this resource. This method is asynchronous.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | [`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:864

___

### setExtensionLoadType

▸ `Static` **setExtensionLoadType**(`extname`, `loadType`): `void`

Sets the load type to be used for a specific extension.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extname` | `string` | The extension to set the type for, e.g. "png" or "fnt" |
| `loadType` | [`LOAD_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.LOAD_TYPE.md) | The load type to set it to. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:759

___

### setExtensionXhrType

▸ `Static` **setExtensionXhrType**(`extname`, `xhrType`): `void`

Sets the load type to be used for a specific extension.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extname` | `string` | The extension to set the type for, e.g. "png" or "fnt" |
| `xhrType` | [`XHR_RESPONSE_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md) | The xhr type to set it to. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:767
