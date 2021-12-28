[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AsyncQueue

# Class: AsyncQueue<TaskData\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AsyncQueue

**`memberof`** PIXI

## Type parameters

| Name |
| :------ |
| `TaskData` |

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.AsyncQueue.md#constructor)

### Properties

- [\_insert](components_ClusterNodeContainer._internal_.AsyncQueue.md#_insert)
- [\_tasks](components_ClusterNodeContainer._internal_.AsyncQueue.md#_tasks)
- [\_worker](components_ClusterNodeContainer._internal_.AsyncQueue.md#_worker)
- [buffer](components_ClusterNodeContainer._internal_.AsyncQueue.md#buffer)
- [concurrency](components_ClusterNodeContainer._internal_.AsyncQueue.md#concurrency)
- [drain](components_ClusterNodeContainer._internal_.AsyncQueue.md#drain)
- [empty](components_ClusterNodeContainer._internal_.AsyncQueue.md#empty)
- [error](components_ClusterNodeContainer._internal_.AsyncQueue.md#error)
- [paused](components_ClusterNodeContainer._internal_.AsyncQueue.md#paused)
- [process](components_ClusterNodeContainer._internal_.AsyncQueue.md#process)
- [saturated](components_ClusterNodeContainer._internal_.AsyncQueue.md#saturated)
- [started](components_ClusterNodeContainer._internal_.AsyncQueue.md#started)
- [unsaturated](components_ClusterNodeContainer._internal_.AsyncQueue.md#unsaturated)
- [workers](components_ClusterNodeContainer._internal_.AsyncQueue.md#workers)

### Methods

- [\_next](components_ClusterNodeContainer._internal_.AsyncQueue.md#_next)
- [idle](components_ClusterNodeContainer._internal_.AsyncQueue.md#idle)
- [kill](components_ClusterNodeContainer._internal_.AsyncQueue.md#kill)
- [length](components_ClusterNodeContainer._internal_.AsyncQueue.md#length)
- [pause](components_ClusterNodeContainer._internal_.AsyncQueue.md#pause)
- [push](components_ClusterNodeContainer._internal_.AsyncQueue.md#push)
- [resume](components_ClusterNodeContainer._internal_.AsyncQueue.md#resume)
- [running](components_ClusterNodeContainer._internal_.AsyncQueue.md#running)
- [unshift](components_ClusterNodeContainer._internal_.AsyncQueue.md#unshift)
- [eachSeries](components_ClusterNodeContainer._internal_.AsyncQueue.md#eachseries)
- [queue](components_ClusterNodeContainer._internal_.AsyncQueue.md#queue)

## Constructors

### constructor

• `Private` **new AsyncQueue**<`TaskData`\>(`worker`, `concurrency?`)

#### Type parameters

| Name |
| :------ |
| `TaskData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | (`x`: `TaskData`, `next`: () => `void`) => `void` |
| `concurrency?` | `number` |

#### Defined in

node_modules/@pixi/loaders/index.d.ts:53

## Properties

### \_insert

• `Private` **\_insert**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:54

___

### \_tasks

• **\_tasks**: [`AsyncQueueItem`](components_ClusterNodeContainer._internal_.AsyncQueueItem.md)<`TaskData`\>[]

#### Defined in

node_modules/@pixi/loaders/index.d.ts:49

___

### \_worker

• `Private` **\_worker**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:48

___

### buffer

• **buffer**: `number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:40

___

### concurrency

• **concurrency**: `number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:39

___

### drain

• **drain**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:44

___

### empty

• **empty**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:43

___

### error

• **error**: (`err`: [`Error`](../modules/components_ClusterNodeContainer._internal_.md#error), `task`: `TaskData`) => `void`

#### Type declaration

▸ (`err`, `task`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../modules/components_ClusterNodeContainer._internal_.md#error) |
| `task` | `TaskData` |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:45

___

### paused

• **paused**: `boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:47

___

### process

• **process**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:55

___

### saturated

• **saturated**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:41

___

### started

• **started**: `boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:46

___

### unsaturated

• **unsaturated**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:42

___

### workers

• **workers**: `number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:38

## Methods

### \_next

▸ `Private` **_next**(`task`): (...`args`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`AsyncQueueItem`](components_ClusterNodeContainer._internal_.AsyncQueueItem.md)<`TaskData`\> |

#### Returns

`fn`

▸ `Private` (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:59

___

### idle

▸ **idle**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:65

___

### kill

▸ **kill**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:61

___

### length

▸ **length**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:63

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:66

___

### push

▸ **push**(`data`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `callback?` | (...`args`: `any`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:60

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:67

___

### running

▸ **running**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:64

___

### unshift

▸ **unshift**(`data`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `callback?` | (...`args`: `any`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:62

___

### eachSeries

▸ `Static` **eachSeries**(`array`, `iterator`, `callback?`, `deferNext?`): `void`

Iterates an array in series.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | Array to iterate. |
| `iterator` | (`x`: `any`, `next`: (`err?`: `any`) => `void`) => `void` | Function to call for each element. |
| `callback?` | (`err?`: `any`) => `void` | Function to call when done, or on error. |
| `deferNext?` | `boolean` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:76

___

### queue

▸ `Static` **queue**(`worker`, `concurrency?`): [`AsyncQueue`](components_ClusterNodeContainer._internal_.AsyncQueue.md)<`any`\>

Async queue implementation,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worker` | (`x`: `any`, `next`: (...`args`: `any`) => `void`) => `void` | The worker function to call for each task. |
| `concurrency?` | `number` | How many workers to run in parrallel. |

#### Returns

[`AsyncQueue`](components_ClusterNodeContainer._internal_.AsyncQueue.md)<`any`\>

The async queue object.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:84
