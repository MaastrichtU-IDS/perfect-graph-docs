[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AsyncQueueItem

# Class: AsyncQueueItem<TaskData\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AsyncQueueItem

**`memberof`** PIXI

## Type parameters

| Name |
| :------ |
| `TaskData` |

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.AsyncQueueItem.md#constructor)

### Properties

- [callback](components_ClusterNodeContainer._internal_.AsyncQueueItem.md#callback)
- [data](components_ClusterNodeContainer._internal_.AsyncQueueItem.md#data)

## Constructors

### constructor

• `Private` **new AsyncQueueItem**<`TaskData`\>(`data`, `callback`)

#### Type parameters

| Name |
| :------ |
| `TaskData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TaskData` |
| `callback` | (...`args`: `any`[]) => `void` |

#### Defined in

node_modules/@pixi/loaders/index.d.ts:97

## Properties

### callback

• **callback**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:93

___

### data

• **data**: `TaskData`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:92
