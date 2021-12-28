[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Loader

# Class: Loader

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Loader

The new loader, forked from Resource Loader by Chad Engler: https://github.com/englercj/resource-loader

```js
const loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.
//or
const loader = new PIXI.Loader(); // you can also create your own if you want

const sprites = {};

// Chainable `add` to enqueue a resource
loader.add('bunny', 'data/bunny.png')
      .add('spaceship', 'assets/spritesheet.json');
loader.add('scoreFont', 'assets/score.fnt');

// Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
// This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
loader.pre(cachingMiddleware);

// Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
// This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
loader.use(parsingMiddleware);

// The `load` method loads the queue of resources, and calls the passed in callback called once all
// resources have loaded.
loader.load((loader, resources) => {
    // resources is an object where the key is the name of the resource loaded and the value is the resource object.
    // They have a couple default properties:
    // - `url`: The URL that the resource was loaded from
    // - `error`: The error that happened when trying to load (if any)
    // - `data`: The raw data that was loaded
    // also may contain other properties based on the middleware that runs.
    sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
    sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
    sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
});

// throughout the process multiple signals can be dispatched.
loader.onProgress.add(() => {}); // called once per loaded/errored file
loader.onError.add(() => {}); // called once per errored file
loader.onLoad.add(() => {}); // called once per loaded file
loader.onComplete.add(() => {}); // called once when the queued resources all load.
```

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Loader-1.md#constructor)

### Properties

- [\_afterMiddleware](components_ClusterNodeContainer._internal_.Loader-1.md#_aftermiddleware)
- [\_beforeMiddleware](components_ClusterNodeContainer._internal_.Loader-1.md#_beforemiddleware)
- [\_boundLoadResource](components_ClusterNodeContainer._internal_.Loader-1.md#_boundloadresource)
- [\_onComplete](components_ClusterNodeContainer._internal_.Loader-1.md#_oncomplete)
- [\_onLoad](components_ClusterNodeContainer._internal_.Loader-1.md#_onload)
- [\_onStart](components_ClusterNodeContainer._internal_.Loader-1.md#_onstart)
- [\_prepareUrl](components_ClusterNodeContainer._internal_.Loader-1.md#_prepareurl)
- [\_protected](components_ClusterNodeContainer._internal_.Loader-1.md#_protected)
- [\_queue](components_ClusterNodeContainer._internal_.Loader-1.md#_queue)
- [\_resourcesParsing](components_ClusterNodeContainer._internal_.Loader-1.md#_resourcesparsing)
- [add](components_ClusterNodeContainer._internal_.Loader-1.md#add)
- [baseUrl](components_ClusterNodeContainer._internal_.Loader-1.md#baseurl)
- [defaultQueryString](components_ClusterNodeContainer._internal_.Loader-1.md#defaultquerystring)
- [loading](components_ClusterNodeContainer._internal_.Loader-1.md#loading)
- [onComplete](components_ClusterNodeContainer._internal_.Loader-1.md#oncomplete)
- [onError](components_ClusterNodeContainer._internal_.Loader-1.md#onerror)
- [onLoad](components_ClusterNodeContainer._internal_.Loader-1.md#onload)
- [onProgress](components_ClusterNodeContainer._internal_.Loader-1.md#onprogress)
- [onStart](components_ClusterNodeContainer._internal_.Loader-1.md#onstart)
- [progress](components_ClusterNodeContainer._internal_.Loader-1.md#progress)
- [resources](components_ClusterNodeContainer._internal_.Loader-1.md#resources)
- [\_plugins](components_ClusterNodeContainer._internal_.Loader-1.md#_plugins)
- [\_shared](components_ClusterNodeContainer._internal_.Loader-1.md#_shared)

### Accessors

- [concurrency](components_ClusterNodeContainer._internal_.Loader-1.md#concurrency)
- [shared](components_ClusterNodeContainer._internal_.Loader-1.md#shared)

### Methods

- [\_add](components_ClusterNodeContainer._internal_.Loader-1.md#_add)
- [\_loadResource](components_ClusterNodeContainer._internal_.Loader-1.md#_loadresource)
- [destroy](components_ClusterNodeContainer._internal_.Loader-1.md#destroy)
- [load](components_ClusterNodeContainer._internal_.Loader-1.md#load)
- [pre](components_ClusterNodeContainer._internal_.Loader-1.md#pre)
- [reset](components_ClusterNodeContainer._internal_.Loader-1.md#reset)
- [use](components_ClusterNodeContainer._internal_.Loader-1.md#use)
- [registerPlugin](components_ClusterNodeContainer._internal_.Loader-1.md#registerplugin)

## Constructors

### constructor

• **new Loader**(`baseUrl?`, `concurrency?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseUrl?` | `string` | The base url for all resources loaded by this loader. |
| `concurrency?` | `number` | The number of resources to load concurrently. |

#### Defined in

node_modules/@pixi/loaders/index.d.ts:367

## Properties

### \_afterMiddleware

• `Private` **\_afterMiddleware**: `any`

The middleware to run after loading each resource.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:307

___

### \_beforeMiddleware

• `Private` **\_beforeMiddleware**: `any`

The middleware to run before loading each resource.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:303

___

### \_boundLoadResource

• `Private` **\_boundLoadResource**: (`r`: [`LoaderResource`](components_ClusterNodeContainer._internal_.LoaderResource-1.md), `d`: () => `void`) => `void`

#### Type declaration

▸ `Private` (`r`, `d`): `void`

The `_loadResource` function bound with this object context.

**`member`** {function}

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | [`LoaderResource`](components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource to load |
| `d` | () => `void` | The dequeue function |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:321

___

### \_onComplete

• `Private` **\_onComplete**: `any`

Called once each resource has loaded.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:480

___

### \_onLoad

• `Private` **\_onLoad**: `any`

Called each time a resources is loaded.

**`param`** The resource that was loaded

#### Defined in

node_modules/@pixi/loaders/index.d.ts:485

___

### \_onStart

• `Private` **\_onStart**: `any`

Called once loading has started.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:476

___

### \_prepareUrl

• `Private` **\_prepareUrl**: `any`

Prepares a url for usage based on the configuration of this object

**`param`** The url to prepare.

**`returns`** The prepared url.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:464

___

### \_protected

• `Private` **\_protected**: `any`

If this loader cannot be destroyed.

**`default`** false

#### Defined in

node_modules/@pixi/loaders/index.d.ts:492

___

### \_queue

• `Private` **\_queue**: [`AsyncQueue`](components_ClusterNodeContainer._internal_.AsyncQueue.md)<`any`\>

The resources waiting to be loaded.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:326

___

### \_resourcesParsing

• `Private` **\_resourcesParsing**: `any`

The tracks the resources we are currently completing parsing for.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:311

___

### add

• **add**: [`ILoaderAdd`](../interfaces/components_ClusterNodeContainer._internal_.ILoaderAdd.md)

Adds a resource (or multiple resources) to the loader queue.

This function can take a wide variety of different parameters. The only thing that is always
required the url to load. All the following will work:

```js
loader
    // normal param syntax
    .add('key', 'http://...', function () {})
    .add('http://...', function () {})
    .add('http://...')

    // object syntax
    .add({
        name: 'key2',
        url: 'http://...'
    }, function () {})
    .add({
        url: 'http://...'
    }, function () {})
    .add({
        name: 'key3',
        url: 'http://...'
        onComplete: function () {}
    })
    .add({
        url: 'https://...',
        onComplete: function () {},
        crossOrigin: true
    })

    // you can also pass an array of objects or urls or both
    .add([
        { name: 'key4', url: 'http://...', onComplete: function () {} },
        { url: 'http://...', onComplete: function () {} },
        'http://...'
    ])

    // and you can use both params and options
    .add('key', 'http://...', { crossOrigin: true }, function () {})
    .add('http://...', { crossOrigin: true }, function () {});
```

#### Defined in

node_modules/@pixi/loaders/index.d.ts:412

___

### baseUrl

• **baseUrl**: `string`

The base url for all resources loaded by this loader.

**`member`** {string}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:261

___

### defaultQueryString

• **defaultQueryString**: `string`

A querystring to append to every URL added to the loader.

This should be a valid query string *without* the question-mark (`?`). The loader will
also *not* escape values for you. Make sure to escape your parameters with
[`encodeURIComponent`](https://mdn.io/encodeURIComponent) before assigning this property.

**`example`**
const loader = new Loader();

loader.defaultQueryString = 'user=me&password=secret';

// This will request 'image.png?user=me&password=secret'
loader.add('image.png').load();

loader.reset();

// This will request 'image.png?v=1&user=me&password=secret'
loader.add('iamge.png?v=1').load();

**`member`** {string}

**`default`** ''

#### Defined in

node_modules/@pixi/loaders/index.d.ts:299

___

### loading

• **loading**: `boolean`

Loading state of the loader, true if it is currently loading resources.

**`member`** {boolean}

**`default`** false

#### Defined in

node_modules/@pixi/loaders/index.d.ts:275

___

### onComplete

• **onComplete**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#oncompletesignal)\>

Dispatched when the queued resources all load.

**`member`** {PIXI.Signal}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:362

___

### onError

• **onError**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnErrorSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#onerrorsignal)\>

Dispatched once per errored resource.

**`member`** {PIXI.Signal}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:344

___

### onLoad

• **onLoad**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnLoadSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#onloadsignal)\>

Dispatched once per loaded resource.

**`member`** {PIXI.Signal}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:350

___

### onProgress

• **onProgress**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnProgressSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#onprogresssignal)\>

Dispatched once per loaded or errored resource.

**`member`** {PIXI.Signal}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:338

___

### onStart

• **onStart**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<[`OnStartSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#onstartsignal)\>

Dispatched when the loader begins to process the queue.

**`member`** {PIXI.Signal}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:356

___

### progress

• **progress**: `number`

The progress percent of the loader going through the queue.

**`member`** {number}

**`default`** 0

#### Defined in

node_modules/@pixi/loaders/index.d.ts:268

___

### resources

• **resources**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`LoaderResource`](components_ClusterNodeContainer._internal_.LoaderResource-1.md)\>

All the resources for this loader keyed by name.

**`member`** {object<string, PIXI.LoaderResource>}

#### Defined in

node_modules/@pixi/loaders/index.d.ts:332

___

### \_plugins

▪ `Static` `Private` **\_plugins**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:486

___

### \_shared

▪ `Static` `Private` **\_shared**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:487

## Accessors

### concurrency

• `get` **concurrency**(): `number`

The number of resources to load concurrently.

**`member`** {number}

**`default`** 10

#### Returns

`number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:457

• `set` **concurrency**(`concurrency`): `void`

The number of resources to load concurrently.

**`member`** {number}

**`default`** 10

#### Parameters

| Name | Type |
| :------ | :------ |
| `concurrency` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:458

___

### shared

• `Static` `get` **shared**(): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

A premade instance of the loader that can be used to load resources.

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

#### Defined in

node_modules/@pixi/loaders/index.d.ts:500

## Methods

### \_add

▸ `Private` **_add**(`name`, `url`, `options`, `callback?`): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Same as add, params have strict order

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the resource to load. |
| `url` | `string` | The url for this resource, relative to the baseUrl of this loader. |
| `options` | [`IAddOptions`](../interfaces/components_ClusterNodeContainer._internal_.IAddOptions.md) | The options for the load. |
| `callback?` | [`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal) | Function to call when this specific resource completes loading. |

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Returns itself.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:422

___

### \_loadResource

▸ `Private` **_loadResource**(`resource`, `dequeue`): `void`

Loads a single resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource to load. |
| `dequeue` | () => `void` | The function to call when we need to dequeue this item. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:472

___

### destroy

▸ **destroy**(): `void`

Destroy the loader, removes references.

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:496

___

### load

▸ **load**(`cb?`): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Starts loading the queued resources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | [`OnCompleteSignal`](../modules/components_ClusterNodeContainer._internal_.Loader.md#oncompletesignal) |

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Returns itself.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:450

___

### pre

▸ **pre**(`fn`): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Sets up a middleware function that will run *before* the
resource is loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`ILoaderMiddleware`](../modules/components_ClusterNodeContainer._internal_.md#iloadermiddleware) | The middleware function to register. |

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Returns itself.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:430

___

### reset

▸ **reset**(): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Resets the queue of the loader to prepare for a new load.

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Returns itself.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:444

___

### use

▸ **use**(`fn`): [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Sets up a middleware function that will run *after* the
resource is loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`ILoaderMiddleware`](../modules/components_ClusterNodeContainer._internal_.md#iloadermiddleware) | The middleware function to register. |

#### Returns

[`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Returns itself.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:438

___

### registerPlugin

▸ `Static` **registerPlugin**(`plugin`): typeof [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Adds a Loader plugin for the global shared loader and all
new Loader instances created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plugin` | [`ILoaderPlugin`](../interfaces/components_ClusterNodeContainer._internal_.ILoaderPlugin.md) | The plugin to add |

#### Returns

typeof [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

Reference to PIXI.Loader for chaining

#### Defined in

node_modules/@pixi/loaders/index.d.ts:508
