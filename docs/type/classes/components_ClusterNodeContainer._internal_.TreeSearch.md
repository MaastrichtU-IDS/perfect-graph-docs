[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TreeSearch

# Class: TreeSearch

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TreeSearch

Strategy how to search through stage tree for interactive objects

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TreeSearch.md#constructor)

### Properties

- [\_tempPoint](components_ClusterNodeContainer._internal_.TreeSearch.md#_temppoint)

### Methods

- [findHit](components_ClusterNodeContainer._internal_.TreeSearch.md#findhit)
- [recursiveFindHit](components_ClusterNodeContainer._internal_.TreeSearch.md#recursivefindhit)

## Constructors

### constructor

• **new TreeSearch**()

#### Defined in

node_modules/@pixi/interaction/index.d.ts:541

## Properties

### \_tempPoint

• `Private` `Readonly` **\_tempPoint**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:540

## Methods

### findHit

▸ `Private` **findHit**(`interactionEvent`, `displayObject`, `func?`, `hitTest?`): `void`

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

returns true if the displayObject hit the point

#### Defined in

node_modules/@pixi/interaction/index.d.ts:572

___

### recursiveFindHit

▸ `Private` **recursiveFindHit**(`interactionEvent`, `displayObject`, `func?`, `hitTest?`, `interactive?`): `boolean`

Recursive implementation for findHit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactionEvent` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) | event containing the point that  is tested for collision |
| `displayObject` | `DisplayObject` | the displayObject  that will be hit test (recursively crawls its children) |
| `func?` | [`InteractionCallback`](../modules/components_ClusterNodeContainer._internal_.md#interactioncallback) | - |
| `hitTest?` | `boolean` | - |
| `interactive?` | `boolean` | - |

#### Returns

`boolean`

returns true if the displayObject hit the point

#### Defined in

node_modules/@pixi/interaction/index.d.ts:556
