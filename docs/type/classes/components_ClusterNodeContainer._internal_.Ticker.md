[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Ticker

# Class: Ticker

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Ticker

A Ticker class that runs an update loop that other objects listen to.

This class is composed around listeners meant for execution on the next requested animation frame.
Animation frames are requested only when necessary, e.g. When the ticker is started and the emitter has listeners.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Ticker.md#constructor)

### Properties

- [\_addListener](components_ClusterNodeContainer._internal_.Ticker.md#_addlistener)
- [\_cancelIfNeeded](components_ClusterNodeContainer._internal_.Ticker.md#_cancelifneeded)
- [\_head](components_ClusterNodeContainer._internal_.Ticker.md#_head)
- [\_lastFrame](components_ClusterNodeContainer._internal_.Ticker.md#_lastframe)
- [\_maxElapsedMS](components_ClusterNodeContainer._internal_.Ticker.md#_maxelapsedms)
- [\_minElapsedMS](components_ClusterNodeContainer._internal_.Ticker.md#_minelapsedms)
- [\_protected](components_ClusterNodeContainer._internal_.Ticker.md#_protected)
- [\_requestId](components_ClusterNodeContainer._internal_.Ticker.md#_requestid)
- [\_requestIfNeeded](components_ClusterNodeContainer._internal_.Ticker.md#_requestifneeded)
- [\_startIfPossible](components_ClusterNodeContainer._internal_.Ticker.md#_startifpossible)
- [\_tick](components_ClusterNodeContainer._internal_.Ticker.md#_tick)
- [autoStart](components_ClusterNodeContainer._internal_.Ticker.md#autostart)
- [deltaMS](components_ClusterNodeContainer._internal_.Ticker.md#deltams)
- [deltaTime](components_ClusterNodeContainer._internal_.Ticker.md#deltatime)
- [elapsedMS](components_ClusterNodeContainer._internal_.Ticker.md#elapsedms)
- [lastTime](components_ClusterNodeContainer._internal_.Ticker.md#lasttime)
- [speed](components_ClusterNodeContainer._internal_.Ticker.md#speed)
- [started](components_ClusterNodeContainer._internal_.Ticker.md#started)
- [\_shared](components_ClusterNodeContainer._internal_.Ticker.md#_shared)
- [\_system](components_ClusterNodeContainer._internal_.Ticker.md#_system)

### Accessors

- [FPS](components_ClusterNodeContainer._internal_.Ticker.md#fps)
- [count](components_ClusterNodeContainer._internal_.Ticker.md#count)
- [maxFPS](components_ClusterNodeContainer._internal_.Ticker.md#maxfps)
- [minFPS](components_ClusterNodeContainer._internal_.Ticker.md#minfps)
- [shared](components_ClusterNodeContainer._internal_.Ticker.md#shared)
- [system](components_ClusterNodeContainer._internal_.Ticker.md#system)

### Methods

- [add](components_ClusterNodeContainer._internal_.Ticker.md#add)
- [addOnce](components_ClusterNodeContainer._internal_.Ticker.md#addonce)
- [destroy](components_ClusterNodeContainer._internal_.Ticker.md#destroy)
- [remove](components_ClusterNodeContainer._internal_.Ticker.md#remove)
- [start](components_ClusterNodeContainer._internal_.Ticker.md#start)
- [stop](components_ClusterNodeContainer._internal_.Ticker.md#stop)
- [update](components_ClusterNodeContainer._internal_.Ticker.md#update)

## Constructors

### constructor

• **new Ticker**()

#### Defined in

node_modules/@pixi/ticker/index.d.ts:109

## Properties

### \_addListener

• `Private` **\_addListener**: `any`

Internally adds the event handler so that it can be sorted by priority.
Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
before the rendering.

**`param`** Current listener being added.

**`returns`** This instance of a ticker

#### Defined in

node_modules/@pixi/ticker/index.d.ts:162

___

### \_cancelIfNeeded

• `Private` **\_cancelIfNeeded**: `any`

Conditionally cancels a pending animation frame.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:122

___

### \_head

• `Private` **\_head**: `any`

The first listener. All new listeners added are chained on this.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:78

___

### \_lastFrame

• `Private` **\_lastFrame**: `any`

The last time keyframe was executed.
Maintains a relatively fixed interval with the previous value.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:97

___

### \_maxElapsedMS

• `Private` **\_maxElapsedMS**: `any`

Internal value managed by minFPS property setter and getter.
This is the maximum allowed milliseconds between updates.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:85

___

### \_minElapsedMS

• `Private` **\_minElapsedMS**: `any`

Internal value managed by minFPS property setter and getter.
This is the maximum allowed milliseconds between updates.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:90

___

### \_protected

• `Private` **\_protected**: `any`

If enabled, deleting is disabled.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:92

___

### \_requestId

• `Private` **\_requestId**: `any`

Internal current frame request ID

#### Defined in

node_modules/@pixi/ticker/index.d.ts:80

___

### \_requestIfNeeded

• `Private` **\_requestIfNeeded**: `any`

Conditionally requests a new animation frame.
If a frame has not already been requested, and if the internal
emitter has listeners, a new frame is requested.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:117

___

### \_startIfPossible

• `Private` **\_startIfPossible**: `any`

Conditionally requests a new animation frame.
If the ticker has been started it checks if a frame has not already
been requested, and if the internal emitter has listeners. If these
conditions are met, a new frame is requested. If the ticker has not
been started, but autoStart is `true`, then the ticker starts now,
and continues with the previous conditions to request a new frame.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:133

___

### \_tick

• `Private` **\_tick**: `any`

Internal tick method bound to ticker instance.
This is because in early 2015, Function.bind
is still 60% slower in high performance scenarios.
Also separating frame requests from update method
so listeners may be called at any time and with
any animation API, just invoke ticker.update(time).

**`param`** Time since last tick.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:108

___

### autoStart

• **autoStart**: `boolean`

Whether or not this ticker should invoke the method
{@link PIXI.Ticker#start} automatically
when a listener is added.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:23

___

### deltaMS

• **deltaMS**: `number`

Scaler time elapsed in milliseconds from last frame to this frame.
This value is capped by setting {@link PIXI.Ticker#minFPS}
and is scaled with {@link PIXI.Ticker#speed}.
**Note:** The cap may be exceeded by scaling.
If the platform supports DOMHighResTimeStamp,
this value will have a precision of 1 µs.
Defaults to target frame time

**`default`** 16.66

#### Defined in

node_modules/@pixi/ticker/index.d.ts:41

___

### deltaTime

• **deltaTime**: `number`

Scalar time value from last frame to this frame.
This value is capped by setting {@link PIXI.Ticker#minFPS}
and is scaled with {@link PIXI.Ticker#speed}.
**Note:** The cap may be exceeded by scaling.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:30

___

### elapsedMS

• **elapsedMS**: `number`

Time elapsed in milliseconds from last frame to this frame.
Opposed to what the scalar {@link PIXI.Ticker#deltaTime}
is based, this value is neither capped nor scaled.
If the platform supports DOMHighResTimeStamp,
this value will have a precision of 1 µs.
Defaults to target frame time

**`default`** 16.66

#### Defined in

node_modules/@pixi/ticker/index.d.ts:51

___

### lastTime

• **lastTime**: `number`

The last time {@link PIXI.Ticker#update} was invoked.
This value is also reset internally outside of invoking
update, but only when a new animation frame is requested.
If the platform supports DOMHighResTimeStamp,
this value will have a precision of 1 µs.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:59

___

### speed

• **speed**: `number`

Factor of current {@link PIXI.Ticker#deltaTime}.

**`example`**
// Scales ticker.deltaTime to what would be
// the equivalent of approximately 120 FPS
ticker.speed = 2;

#### Defined in

node_modules/@pixi/ticker/index.d.ts:67

___

### started

• **started**: `boolean`

Whether or not this ticker has been started.
`true` if {@link PIXI.Ticker#start} has been called.
`false` if {@link PIXI.Ticker#stop} has been called.
While `false`, this value may change to `true` in the
event of {@link PIXI.Ticker#autoStart} being `true`
and a listener is added.

#### Defined in

node_modules/@pixi/ticker/index.d.ts:76

___

### \_shared

▪ `Static` `Private` **\_shared**: `any`

The private shared ticker instance

#### Defined in

node_modules/@pixi/ticker/index.d.ts:15

___

### \_system

▪ `Static` `Private` **\_system**: `any`

The private system ticker instance

#### Defined in

node_modules/@pixi/ticker/index.d.ts:17

## Accessors

### FPS

• `get` **FPS**(): `number`

The frames per second at which this ticker is running.
The default is approximately 60 in most modern browsers.
**Note:** This does not factor in the value of
{@link PIXI.Ticker#speed}, which is specific
to scaling {@link PIXI.Ticker#deltaTime}.

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:218

___

### count

• `get` **count**(): `number`

The number of listeners on this ticker, calculated by walking through linked list

**`readonly`**

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:178

___

### maxFPS

• `get` **maxFPS**(): `number`

Manages the minimum amount of milliseconds required to
elapse between invoking {@link PIXI.Ticker#update}.
This will effect the measured value of {@link PIXI.Ticker#FPS}.
If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
Otherwise it will be at least `minFPS`

**`member`** {number}

**`default`** 0

#### Returns

`number`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:242

• `set` **maxFPS**(`fps`): `void`

Manages the minimum amount of milliseconds required to
elapse between invoking {@link PIXI.Ticker#update}.
This will effect the measured value of {@link PIXI.Ticker#FPS}.
If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
Otherwise it will be at least `minFPS`

**`member`** {number}

**`default`** 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:243

___

### minFPS

• `get` **minFPS**(): `number`

Manages the maximum amount of milliseconds allowed to
elapse between invoking {@link PIXI.Ticker#update}.
This value is used to cap {@link PIXI.Ticker#deltaTime},
but does not effect the measured value of {@link PIXI.Ticker#FPS}.
When setting this property it is clamped to a value between
`0` and `PIXI.settings.TARGET_FPMS * 1000`.

**`member`** {number}

**`default`** 10

#### Returns

`number`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:230

• `set` **minFPS**(`fps`): `void`

Manages the maximum amount of milliseconds allowed to
elapse between invoking {@link PIXI.Ticker#update}.
This value is used to cap {@link PIXI.Ticker#deltaTime},
but does not effect the measured value of {@link PIXI.Ticker#FPS}.
When setting this property it is clamped to a value between
`0` and `PIXI.settings.TARGET_FPMS * 1000`.

**`member`** {number}

**`default`** 10

#### Parameters

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:231

___

### shared

• `Static` `get` **shared**(): [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
{@link PIXI.VideoResource} to update animation frames / video textures.

It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.

The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.

**`example`**
let ticker = PIXI.Ticker.shared;
// Set this to prevent starting this ticker when listeners are added.
// By default this is true only for the PIXI.Ticker.shared instance.
ticker.autoStart = false;
// FYI, call this to ensure the ticker is stopped. It should be stopped
// if you have not attempted to render anything yet.
ticker.stop();
// Call this when you are ready for a running shared ticker.
ticker.start();

**`example`**
// You may use the shared ticker to render...
let renderer = PIXI.autoDetectRenderer();
let stage = new PIXI.Container();
document.body.appendChild(renderer.view);
ticker.add(function (time) {
    renderer.render(stage);
});

**`example`**
// Or you can just update it manually.
ticker.autoStart = false;
ticker.stop();
function animate(time) {
    ticker.update(time);
    renderer.render(stage);
    requestAnimationFrame(animate);
}
animate(performance.now());

**`member`** {PIXI.Ticker}

**`static`**

#### Returns

[`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

#### Defined in

node_modules/@pixi/ticker/index.d.ts:287

___

### system

• `Static` `get` **system**(): [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

The system ticker instance used by {@link PIXI.InteractionManager} and by
{@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.

The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.

**`member`** {PIXI.Ticker}

**`static`**

#### Returns

[`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

#### Defined in

node_modules/@pixi/ticker/index.d.ts:298

## Methods

### add

▸ **add**<`T`\>(`fn`, `context?`, `priority?`): [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

Register a handler for tick events. Calls continuously unless
it is removed or the ticker is stopped.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`TickerCallback`](../modules/components_ClusterNodeContainer._internal_.md#tickercallback)<`T`\> | The listener function to be added for updates |
| `context?` | `T` | The listener context |
| `priority?` | [`UPDATE_PRIORITY`](../enums/components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md) | - |

#### Returns

[`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

This instance of a ticker

#### Defined in

node_modules/@pixi/ticker/index.d.ts:143

___

### addOnce

▸ **addOnce**<`T`\>(`fn`, `context?`, `priority?`): [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

Add a handler for the tick event which is only execute once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`TickerCallback`](../modules/components_ClusterNodeContainer._internal_.md#tickercallback)<`T`\> | The listener function to be added for one update |
| `context?` | `T` | The listener context |
| `priority?` | [`UPDATE_PRIORITY`](../enums/components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md) | - |

#### Returns

[`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

This instance of a ticker

#### Defined in

node_modules/@pixi/ticker/index.d.ts:152

___

### destroy

▸ **destroy**(): `void`

Destroy the ticker and don't use after this. Calling
this method removes all references to internal events.

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:193

___

### remove

▸ **remove**<`T`\>(`fn`, `context?`): [`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

Removes any handlers matching the function and context parameters.
If no handlers are left after removing, then it cancels the animation frame.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`TickerCallback`](../modules/components_ClusterNodeContainer._internal_.md#tickercallback)<`T`\> | The listener function to be removed |
| `context?` | `T` | The listener context to be removed |

#### Returns

[`Ticker`](components_ClusterNodeContainer._internal_.Ticker.md)

This instance of a ticker

#### Defined in

node_modules/@pixi/ticker/index.d.ts:171

___

### start

▸ **start**(): `void`

Starts the ticker. If the ticker has listeners
a new animation frame is requested at this point.

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:183

___

### stop

▸ **stop**(): `void`

Stops the ticker. If the ticker has requested
an animation frame it is canceled at this point.

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:188

___

### update

▸ **update**(`currentTime?`): `void`

Triggers an update. An update entails setting the
current {@link PIXI.Ticker#elapsedMS},
the current {@link PIXI.Ticker#deltaTime},
invoking all listeners with current deltaTime,
and then finally setting {@link PIXI.Ticker#lastTime}
with the value of currentTime that was provided.
This method will be called automatically by animation
frame callbacks if the ticker instance has been started
and listeners are added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentTime?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:207
