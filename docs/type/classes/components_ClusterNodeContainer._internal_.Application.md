[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Application

# Class: Application

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Application

Convenience class to create a new PIXI application.

This class automatically creates the renderer, ticker and root container.

**`example`**
// Create the application
const app = new PIXI.Application();

// Add the view to the DOM
document.body.appendChild(app.view);

// ex, add display objects
app.stage.addChild(PIXI.Sprite.from('something.png'));

**`memberof`** PIXI

## Hierarchy

- `Application`

  ↳ **`Application`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Application.md#constructor)

### Properties

- [loader](components_ClusterNodeContainer._internal_.Application.md#loader)
- [renderer](components_ClusterNodeContainer._internal_.Application.md#renderer)
- [resizeTo](components_ClusterNodeContainer._internal_.Application.md#resizeto)
- [stage](components_ClusterNodeContainer._internal_.Application.md#stage)
- [ticker](components_ClusterNodeContainer._internal_.Application.md#ticker)
- [\_plugins](components_ClusterNodeContainer._internal_.Application.md#_plugins)

### Accessors

- [screen](components_ClusterNodeContainer._internal_.Application.md#screen)
- [view](components_ClusterNodeContainer._internal_.Application.md#view)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Application.md#destroy)
- [render](components_ClusterNodeContainer._internal_.Application.md#render)
- [resize](components_ClusterNodeContainer._internal_.Application.md#resize)
- [start](components_ClusterNodeContainer._internal_.Application.md#start)
- [stop](components_ClusterNodeContainer._internal_.Application.md#stop)
- [registerPlugin](components_ClusterNodeContainer._internal_.Application.md#registerplugin)

## Constructors

### constructor

• **new Application**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IApplicationOptions`](../interfaces/components_ClusterNodeContainer._internal_.IApplicationOptions.md) |

#### Inherited from

GlobalMixins.Application.constructor

#### Defined in

node_modules/@pixi/app/index.d.ts:77

## Properties

### loader

• **loader**: [`Loader`](components_ClusterNodeContainer._internal_.Loader-1.md)

#### Inherited from

GlobalMixins.Application.loader

#### Defined in

node_modules/@pixi/loaders/global.d.ts:26

___

### renderer

• **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) \| [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

WebGL renderer if available, otherwise CanvasRenderer.

**`member`** {PIXI.Renderer|PIXI.CanvasRenderer}

#### Defined in

node_modules/@pixi/app/index.d.ts:43

___

### resizeTo

• **resizeTo**: `HTMLElement` \| `Window`

#### Inherited from

GlobalMixins.Application.resizeTo

#### Defined in

node_modules/@pixi/app/global.d.ts:6

___

### stage

• **stage**: [`Container`](components_ClusterNodeContainer._internal_.Container.md)

The root display container that's rendered.

**`member`** {PIXI.Container}

#### Defined in

node_modules/@pixi/app/index.d.ts:38

___

### ticker

• **ticker**: [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

#### Inherited from

GlobalMixins.Application.ticker

#### Defined in

node_modules/@pixi/ticker/global.d.ts:5

___

### \_plugins

▪ `Static` `Private` **\_plugins**: `any`

Collection of installed plugins.

#### Defined in

node_modules/@pixi/app/index.d.ts:33

## Accessors

### screen

• `get` **screen**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.

**`member`** {PIXI.Rectangle}

**`readonly`**

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/app/index.d.ts:99

___

### view

• `get` **view**(): `HTMLCanvasElement`

Reference to the renderer's canvas element.

**`member`** {HTMLCanvasElement}

**`readonly`**

#### Returns

`HTMLCanvasElement`

#### Defined in

node_modules/@pixi/app/index.d.ts:93

## Methods

### destroy

▸ **destroy**(`removeView?`, `stageOptions?`): `void`

Destroy and don't use after this.

#### Parameters

| Name | Type |
| :------ | :------ |
| `removeView?` | `boolean` |
| `stageOptions?` | `boolean` \| [`IDestroyOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDestroyOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/app/index.d.ts:112

___

### render

▸ **render**(): `void`

Render the current stage.

#### Returns

`void`

#### Defined in

node_modules/@pixi/app/index.d.ts:87

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Inherited from

GlobalMixins.Application.resize

#### Defined in

node_modules/@pixi/app/global.d.ts:7

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

GlobalMixins.Application.start

#### Defined in

node_modules/@pixi/ticker/global.d.ts:7

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

GlobalMixins.Application.stop

#### Defined in

node_modules/@pixi/ticker/global.d.ts:6

___

### registerPlugin

▸ `Static` **registerPlugin**(`plugin`): `void`

Register a middleware plugin for the application

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plugin` | [`IApplicationPlugin`](../interfaces/components_ClusterNodeContainer._internal_.IApplicationPlugin.md) | Plugin being installed |

#### Returns

`void`

#### Defined in

node_modules/@pixi/app/index.d.ts:83
