[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InteractionManager

# Class: InteractionManager

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InteractionManager

The interaction manager deals with mouse, touch and pointer events.

Any DisplayObject can be interactive if its `interactive` property is set to true.

This manager also supports multitouch.

An instance of this class is automatically created by default, and can be found at `renderer.plugins.interaction`

**`memberof`** PIXI

## Hierarchy

- [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)

  ↳ **`InteractionManager`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.InteractionManager.md#constructor)

### Properties

- [\_deltaTime](components_ClusterNodeContainer._internal_.InteractionManager.md#_deltatime)
- [\_didMove](components_ClusterNodeContainer._internal_.InteractionManager.md#_didmove)
- [\_eventListenerOptions](components_ClusterNodeContainer._internal_.InteractionManager.md#_eventlisteneroptions)
- [\_tempDisplayObject](components_ClusterNodeContainer._internal_.InteractionManager.md#_tempdisplayobject)
- [\_useSystemTicker](components_ClusterNodeContainer._internal_.InteractionManager.md#_usesystemticker)
- [activeInteractionData](components_ClusterNodeContainer._internal_.InteractionManager.md#activeinteractiondata)
- [addEvents](components_ClusterNodeContainer._internal_.InteractionManager.md#addevents)
- [addTickerListener](components_ClusterNodeContainer._internal_.InteractionManager.md#addtickerlistener)
- [autoPreventDefault](components_ClusterNodeContainer._internal_.InteractionManager.md#autopreventdefault)
- [configureInteractionEventForDOMEvent](components_ClusterNodeContainer._internal_.InteractionManager.md#configureinteractioneventfordomevent)
- [currentCursorMode](components_ClusterNodeContainer._internal_.InteractionManager.md#currentcursormode)
- [cursor](components_ClusterNodeContainer._internal_.InteractionManager.md#cursor)
- [cursorStyles](components_ClusterNodeContainer._internal_.InteractionManager.md#cursorstyles)
- [delayDispatchEvent](components_ClusterNodeContainer._internal_.InteractionManager.md#delaydispatchevent)
- [delayedEvents](components_ClusterNodeContainer._internal_.InteractionManager.md#delayedevents)
- [dispatchEvent](components_ClusterNodeContainer._internal_.InteractionManager.md#dispatchevent)
- [eventData](components_ClusterNodeContainer._internal_.InteractionManager.md#eventdata)
- [eventsAdded](components_ClusterNodeContainer._internal_.InteractionManager.md#eventsadded)
- [getInteractionDataForPointerId](components_ClusterNodeContainer._internal_.InteractionManager.md#getinteractiondataforpointerid)
- [interactionDOMElement](components_ClusterNodeContainer._internal_.InteractionManager.md#interactiondomelement)
- [interactionDataPool](components_ClusterNodeContainer._internal_.InteractionManager.md#interactiondatapool)
- [interactionFrequency](components_ClusterNodeContainer._internal_.InteractionManager.md#interactionfrequency)
- [mouse](components_ClusterNodeContainer._internal_.InteractionManager.md#mouse)
- [mouseOverRenderer](components_ClusterNodeContainer._internal_.InteractionManager.md#mouseoverrenderer)
- [moveWhenInside](components_ClusterNodeContainer._internal_.InteractionManager.md#movewheninside)
- [normalizeToPointerData](components_ClusterNodeContainer._internal_.InteractionManager.md#normalizetopointerdata)
- [onPointerCancel](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointercancel)
- [onPointerComplete](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointercomplete)
- [onPointerDown](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointerdown)
- [onPointerMove](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointermove)
- [onPointerOut](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointerout)
- [onPointerOver](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointerover)
- [onPointerUp](components_ClusterNodeContainer._internal_.InteractionManager.md#onpointerup)
- [processPointerCancel](components_ClusterNodeContainer._internal_.InteractionManager.md#processpointercancel)
- [processPointerDown](components_ClusterNodeContainer._internal_.InteractionManager.md#processpointerdown)
- [processPointerMove](components_ClusterNodeContainer._internal_.InteractionManager.md#processpointermove)
- [processPointerOverOut](components_ClusterNodeContainer._internal_.InteractionManager.md#processpointeroverout)
- [processPointerUp](components_ClusterNodeContainer._internal_.InteractionManager.md#processpointerup)
- [releaseInteractionDataForPointerId](components_ClusterNodeContainer._internal_.InteractionManager.md#releaseinteractiondataforpointerid)
- [removeEvents](components_ClusterNodeContainer._internal_.InteractionManager.md#removeevents)
- [removeTickerListener](components_ClusterNodeContainer._internal_.InteractionManager.md#removetickerlistener)
- [renderer](components_ClusterNodeContainer._internal_.InteractionManager.md#renderer)
- [resolution](components_ClusterNodeContainer._internal_.InteractionManager.md#resolution)
- [search](components_ClusterNodeContainer._internal_.InteractionManager.md#search)
- [supportsPointerEvents](components_ClusterNodeContainer._internal_.InteractionManager.md#supportspointerevents)
- [supportsTouchEvents](components_ClusterNodeContainer._internal_.InteractionManager.md#supportstouchevents)
- [tickerAdded](components_ClusterNodeContainer._internal_.InteractionManager.md#tickeradded)
- [prefixed](components_ClusterNodeContainer._internal_.InteractionManager.md#prefixed)

### Accessors

- [lastObjectRendered](components_ClusterNodeContainer._internal_.InteractionManager.md#lastobjectrendered)
- [useSystemTicker](components_ClusterNodeContainer._internal_.InteractionManager.md#usesystemticker)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.InteractionManager.md#addlistener)
- [destroy](components_ClusterNodeContainer._internal_.InteractionManager.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.InteractionManager.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.InteractionManager.md#eventnames)
- [hitTest](components_ClusterNodeContainer._internal_.InteractionManager.md#hittest)
- [listenerCount](components_ClusterNodeContainer._internal_.InteractionManager.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.InteractionManager.md#listeners)
- [mapPositionToPoint](components_ClusterNodeContainer._internal_.InteractionManager.md#mappositiontopoint)
- [off](components_ClusterNodeContainer._internal_.InteractionManager.md#off)
- [on](components_ClusterNodeContainer._internal_.InteractionManager.md#on)
- [once](components_ClusterNodeContainer._internal_.InteractionManager.md#once)
- [processInteractive](components_ClusterNodeContainer._internal_.InteractionManager.md#processinteractive)
- [removeAllListeners](components_ClusterNodeContainer._internal_.InteractionManager.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.InteractionManager.md#removelistener)
- [setCursorMode](components_ClusterNodeContainer._internal_.InteractionManager.md#setcursormode)
- [setTargetElement](components_ClusterNodeContainer._internal_.InteractionManager.md#settargetelement)
- [tickerUpdate](components_ClusterNodeContainer._internal_.InteractionManager.md#tickerupdate)
- [update](components_ClusterNodeContainer._internal_.InteractionManager.md#update)

## Constructors

### constructor

• **new InteractionManager**(`renderer`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md) | A reference to the current renderer |
| `options?` | [`InteractionManagerOptions`](../interfaces/components_ClusterNodeContainer._internal_.InteractionManagerOptions.md) | - |

#### Overrides

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:154

## Properties

### \_deltaTime

• `Private` **\_deltaTime**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:143

___

### \_didMove

• `Private` **\_didMove**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:144

___

### \_eventListenerOptions

• `Private` `Readonly` **\_eventListenerOptions**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:146

___

### \_tempDisplayObject

• `Private` **\_tempDisplayObject**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:145

___

### \_useSystemTicker

• `Private` **\_useSystemTicker**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:142

___

### activeInteractionData

• `Readonly` **activeInteractionData**: `Object`

#### Index signature

▪ [key: `number`]: [`InteractionData`](components_ClusterNodeContainer._internal_.InteractionData.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:120

___

### addEvents

• `Private` **addEvents**: `any`

Registers all the DOM events

#### Defined in

node_modules/@pixi/interaction/index.d.ts:205

___

### addTickerListener

• `Private` **addTickerListener**: `any`

Add the ticker listener

#### Defined in

node_modules/@pixi/interaction/index.d.ts:193

___

### autoPreventDefault

• **autoPreventDefault**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:130

___

### configureInteractionEventForDOMEvent

• `Private` **configureInteractionEventForDOMEvent**: `any`

Configure an InteractionEvent to wrap a DOM PointerEvent and InteractionData

**`param`** The event to be configured

**`param`** The DOM event that will be paired with the InteractionEvent

**`param`** The InteractionData that will be paired
       with the InteractionEvent

**`returns`** the interaction event that was passed in

#### Defined in

node_modules/@pixi/interaction/index.d.ts:396

___

### currentCursorMode

• **currentCursorMode**: `string`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:136

___

### cursor

• **cursor**: `string`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:126

___

### cursorStyles

• **cursorStyles**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`string` \| [`CSSStyleDeclaration`](../modules/components_ClusterNodeContainer._internal_.md#cssstyledeclaration) \| (`mode`: `string`) => `void`\>

#### Defined in

node_modules/@pixi/interaction/index.d.ts:135

___

### delayDispatchEvent

• `Private` **delayDispatchEvent**: `any`

Puts a event on a queue to be dispatched later. This is used to guarantee correct
ordering of over/out events.

**`param`** the display object in question

**`param`** the name of the event (e.g, mousedown)

**`param`** the event data object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:249

___

### delayedEvents

• **delayedEvents**: [`DelayedEvent`](../interfaces/components_ClusterNodeContainer._internal_.DelayedEvent.md)[]

#### Defined in

node_modules/@pixi/interaction/index.d.ts:127

___

### dispatchEvent

• `Private` **dispatchEvent**: `any`

Dispatches an event on the display object that was interacted with

**`param`** the display object in question

**`param`** the name of the event (e.g, mousedown)

**`param`** the event data object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:239

___

### eventData

• **eventData**: [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:133

___

### eventsAdded

• `Protected` **eventsAdded**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:139

___

### getInteractionDataForPointerId

• `Private` **getInteractionDataForPointerId**: `any`

Get InteractionData for a given pointerId. Store that data as well

**`param`** Normalized pointer event, output from normalizeToPointerData

**`returns`** - Interaction data for the given pointer identifier

#### Defined in

node_modules/@pixi/interaction/index.d.ts:378

___

### interactionDOMElement

• `Protected` **interactionDOMElement**: `HTMLElement`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:138

___

### interactionDataPool

• **interactionDataPool**: [`InteractionData`](components_ClusterNodeContainer._internal_.InteractionData.md)[]

#### Defined in

node_modules/@pixi/interaction/index.d.ts:125

___

### interactionFrequency

• **interactionFrequency**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:131

___

### mouse

• **mouse**: [`InteractionData`](components_ClusterNodeContainer._internal_.InteractionData.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:132

___

### mouseOverRenderer

• `Protected` **mouseOverRenderer**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:141

___

### moveWhenInside

• **moveWhenInside**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:134

___

### normalizeToPointerData

• `Private` **normalizeToPointerData**: `any`

Ensures that the original event object contains all data that a regular pointer event would have

**`param`** The original event data from a touch or mouse event

**`returns`** An array containing a single normalized pointer event, in the case of a pointer
 or mouse event, or a multiple normalized pointer events if there are multiple changed touches

#### Defined in

node_modules/@pixi/interaction/index.d.ts:405

___

### onPointerCancel

• `Private` **onPointerCancel**: `any`

Is called when the pointer button is cancelled

**`param`** The DOM event of a pointer button being released

#### Defined in

node_modules/@pixi/interaction/index.d.ts:307

___

### onPointerComplete

• `Private` **onPointerComplete**: `any`

Is called when the pointer button is released on the renderer element

**`param`** The DOM event of a pointer button being released

**`param`** true if the pointer is cancelled

**`param`** Function passed to [processInteractive](components_ClusterNodeContainer._internal_.InteractionManager.md#processinteractive)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:300

___

### onPointerDown

• `Private` **onPointerDown**: `any`

Is called when the pointer button is pressed down on the renderer element

**`param`** The DOM event of a pointer button being pressed down

#### Defined in

node_modules/@pixi/interaction/index.d.ts:282

___

### onPointerMove

• `Private` **onPointerMove**: `any`

Is called when the pointer moves across the renderer element

**`param`** The DOM event of a pointer moving

#### Defined in

node_modules/@pixi/interaction/index.d.ts:338

___

### onPointerOut

• `Private` **onPointerOut**: `any`

Is called when the pointer is moved out of the renderer element

**`param`** The DOM event of a pointer being moved out

#### Defined in

node_modules/@pixi/interaction/index.d.ts:354

___

### onPointerOver

• `Private` **onPointerOver**: `any`

Is called when the pointer is moved into the renderer element

**`param`** The DOM event of a pointer button being moved into the renderer view

#### Defined in

node_modules/@pixi/interaction/index.d.ts:370

___

### onPointerUp

• `Private` **onPointerUp**: `any`

Is called when the pointer button is released on the renderer element

**`param`** The DOM event of a pointer button being released

#### Defined in

node_modules/@pixi/interaction/index.d.ts:322

___

### processPointerCancel

• `Private` **processPointerCancel**: `any`

Processes the result of the pointer cancel check and dispatches the event if need be

**`param`** The interaction event wrapping the DOM event

**`param`** The display object that was tested

#### Defined in

node_modules/@pixi/interaction/index.d.ts:315

___

### processPointerDown

• `Private` **processPointerDown**: `any`

Processes the result of the pointer down check and dispatches the event if need be

**`param`** The interaction event wrapping the DOM event

**`param`** The display object that was tested

**`param`** the result of the hit test on the display object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:291

___

### processPointerMove

• `Private` **processPointerMove**: `any`

Processes the result of the pointer move check and dispatches the event if need be

**`param`** The interaction event wrapping the DOM event

**`param`** The display object that was tested

**`param`** the result of the hit test on the display object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:347

___

### processPointerOverOut

• `Private` **processPointerOverOut**: `any`

Processes the result of the pointer over/out check and dispatches the event if need be

**`param`** The interaction event wrapping the DOM event

**`param`** The display object that was tested

**`param`** the result of the hit test on the display object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:363

___

### processPointerUp

• `Private` **processPointerUp**: `any`

Processes the result of the pointer up check and dispatches the event if need be

**`param`** The interaction event wrapping the DOM event

**`param`** The display object that was tested

**`param`** the result of the hit test on the display object

#### Defined in

node_modules/@pixi/interaction/index.d.ts:331

___

### releaseInteractionDataForPointerId

• `Private` **releaseInteractionDataForPointerId**: `any`

Return unused InteractionData to the pool, for a given pointerId

**`param`** Identifier from a pointer event

#### Defined in

node_modules/@pixi/interaction/index.d.ts:385

___

### removeEvents

• `Private` **removeEvents**: `any`

Removes all the DOM events that were previously registered

#### Defined in

node_modules/@pixi/interaction/index.d.ts:211

___

### removeTickerListener

• `Private` **removeTickerListener**: `any`

Remove the ticker listener

#### Defined in

node_modules/@pixi/interaction/index.d.ts:199

___

### renderer

• **renderer**: [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:129

___

### resolution

• **resolution**: `number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:137

___

### search

• **search**: [`TreeSearch`](components_ClusterNodeContainer._internal_.TreeSearch.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:128

___

### supportsPointerEvents

• `Readonly` **supportsPointerEvents**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:124

___

### supportsTouchEvents

• `Readonly` **supportsTouchEvents**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:123

___

### tickerAdded

• `Protected` **tickerAdded**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:140

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### lastObjectRendered

• `Protected` `get` **lastObjectRendered**(): `DisplayObject`

Last rendered object or temp object

**`readonly`**

**`member`** {PIXI.DisplayObject}

#### Returns

`DisplayObject`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:169

___

### useSystemTicker

• `get` **useSystemTicker**(): `boolean`

Should the InteractionManager automatically add [tickerUpdate](components_ClusterNodeContainer._internal_.InteractionManager.md#tickerupdate) to {@link PIXI.Ticker.system}.

**`member`** {boolean}

**`default`** true

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:161

• `set` **useSystemTicker**(`useSystemTicker`): `void`

Should the InteractionManager automatically add [tickerUpdate](components_ClusterNodeContainer._internal_.InteractionManager.md#tickerupdate) to {@link PIXI.Ticker.system}.

**`member`** {boolean}

**`default`** true

#### Parameters

| Name | Type |
| :------ | :------ |
| `useSystemTicker` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:162

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[addListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### destroy

▸ **destroy**(): `void`

Destroys the interaction manager

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:410

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[emit](components_ClusterNodeContainer._internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[eventNames](components_ClusterNodeContainer._internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:12

___

### hitTest

▸ **hitTest**(`globalPoint`, `root?`): `DisplayObject`

Hit tests a point against the display tree, returning the first interactive object that is hit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `globalPoint` | [`Point`](components_ClusterNodeContainer._internal_.Point.md) | A point to hit test with, in global space. |
| `root?` | `DisplayObject` | - |

#### Returns

`DisplayObject`

The hit display object, if any.

#### Defined in

node_modules/@pixi/interaction/index.d.ts:178

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listenerCount](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:22

___

### listeners

▸ **listeners**(`event`): [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### mapPositionToPoint

▸ **mapPositionToPoint**(`point`, `x`, `y`): `void`

Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
resulting value is stored in the point. This takes into account the fact that the DOM
element could be scaled and positioned anywhere on the screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | the point that the result will be stored in |
| `x` | `number` | the x coord of the position to map |
| `y` | `number` | the y coord of the position to map |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:259

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### processInteractive

▸ `Protected` **processInteractive**(`interactionEvent`, `displayObject`, `func?`, `hitTest?`): `void`

This function is provides a neat way of crawling through the scene graph and running a
specified function on all interactive objects it finds. It will also take care of hit
testing the interactive objects and passes the hit across in the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactionEvent` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) | event containing the point that  is tested for collision |
| `displayObject` | `DisplayObject` | the displayObject  that will be hit test (recursively crawls its children) |
| `func?` | [`InteractionCallback`](../modules/components_ClusterNodeContainer._internal_.md#interactioncallback) | - |
| `hitTest?` | `boolean` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:275

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`InteractionManager`](components_ClusterNodeContainer._internal_.InteractionManager.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### setCursorMode

▸ **setCursorMode**(`mode`): `void`

Sets the current cursor mode, handling any callbacks or CSS style changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | `string` | cursor mode, a key from the cursorStyles dictionary |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:230

___

### setTargetElement

▸ **setTargetElement**(`element`, `resolution?`): `void`

Sets the DOM element which will receive mouse/touch events. This is useful for when you have
other DOM elements on top of the renderers Canvas element. With this you'll be bale to delegate
another DOM element to receive those events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | the DOM element which will receive mouse and touch events. |
| `resolution?` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:187

___

### tickerUpdate

▸ **tickerUpdate**(`deltaTime`): `void`

Updates the state of interactive objects if at least [interactionFrequency](components_ClusterNodeContainer._internal_.InteractionManager.md#interactionfrequency)
milliseconds have passed since the last invocation.

Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deltaTime` | `number` | time delta since the last call |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:220

___

### update

▸ **update**(): `void`

Updates the state of interactive objects.

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:224
