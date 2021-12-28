[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Runner

# Class: Runner

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Runner

A Runner is a highly performant and simple alternative to signals. Best used in situations
where events are dispatched to many objects at high frequency (say every frame!)

like a signal..
```
import { Runner } from '@pixi/runner';

const myObject = {
    loaded: new Runner('loaded')
}

const listener = {
    loaded: function(){
        // thin
    }
}

myObject.loaded.add(listener);

myObject.loaded.emit();
```

Or for handling calling the same function on many items
```
import { Runner } from '@pixi/runner';

const myGame = {
    update: new Runner('update')
}

const gameObject = {
    update: function(time){
        // update my gamey state
    }
}

myGame.update.add(gameObject);

myGame.update.emit(time);
```

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Runner.md#constructor)

### Properties

- [\_aliasCount](components_ClusterNodeContainer._internal_.Runner.md#_aliascount)
- [\_name](components_ClusterNodeContainer._internal_.Runner.md#_name)
- [ensureNonAliasedItems](components_ClusterNodeContainer._internal_.Runner.md#ensurenonaliaseditems)
- [items](components_ClusterNodeContainer._internal_.Runner.md#items)

### Accessors

- [empty](components_ClusterNodeContainer._internal_.Runner.md#empty)
- [name](components_ClusterNodeContainer._internal_.Runner.md#name)

### Methods

- [add](components_ClusterNodeContainer._internal_.Runner.md#add)
- [contains](components_ClusterNodeContainer._internal_.Runner.md#contains)
- [destroy](components_ClusterNodeContainer._internal_.Runner.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.Runner.md#emit)
- [remove](components_ClusterNodeContainer._internal_.Runner.md#remove)
- [removeAll](components_ClusterNodeContainer._internal_.Runner.md#removeall)

## Constructors

### constructor

• **new Runner**(`name`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The function name that will be executed on the listeners added to this Runner. |

#### Defined in

node_modules/@pixi/runner/index.d.ts:54

## Properties

### \_aliasCount

• `Private` **\_aliasCount**: `any`

#### Defined in

node_modules/@pixi/runner/index.d.ts:50

___

### \_name

• `Private` **\_name**: `any`

#### Defined in

node_modules/@pixi/runner/index.d.ts:49

___

### ensureNonAliasedItems

• `Private` **ensureNonAliasedItems**: `any`

#### Defined in

node_modules/@pixi/runner/index.d.ts:61

___

### items

• **items**: `any`[]

#### Defined in

node_modules/@pixi/runner/index.d.ts:48

## Accessors

### empty

• `get` **empty**(): `boolean`

`true` if there are no this Runner contains no listeners

**`readonly`**

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/runner/index.d.ts:103

___

### name

• `get` **name**(): `string`

The name of the runner.

**`readonly`**

#### Returns

`string`

#### Defined in

node_modules/@pixi/runner/index.d.ts:109

## Methods

### add

▸ **add**(`item`): [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

Add a listener to the Runner

Runners do not need to have scope or functions passed to them.
All that is required is to pass the listening object and ensure that it has contains a function that has the same name
as the name provided to the Runner when it was created.

Eg A listener passed to this Runner will require a 'complete' function.

```
import { Runner } from '@pixi/runner';

const complete = new Runner('complete');
```

The scope used will be the object itself.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | The object that will be listening. |

#### Returns

[`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/runner/index.d.ts:81

___

### contains

▸ **contains**(`item`): `boolean`

Check to see if the listener is already in the Runner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | The listener that you would like to check. |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/runner/index.d.ts:93

___

### destroy

▸ **destroy**(): `void`

Remove all references, don't use after this.

#### Returns

`void`

#### Defined in

node_modules/@pixi/runner/index.d.ts:97

___

### emit

▸ **emit**(`a0?`, `a1?`, `a2?`, `a3?`, `a4?`, `a5?`, `a6?`, `a7?`): [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

Dispatch/Broadcast Runner to all listeners added to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a0?` | `unknown` |
| `a1?` | `unknown` |
| `a2?` | `unknown` |
| `a3?` | `unknown` |
| `a4?` | `unknown` |
| `a5?` | `unknown` |
| `a6?` | `unknown` |
| `a7?` | `unknown` |

#### Returns

[`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/runner/index.d.ts:60

___

### remove

▸ **remove**(`item`): [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

Remove a single listener from the dispatch queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `unknown` | The listener that you would like to remove. |

#### Returns

[`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/runner/index.d.ts:87

___

### removeAll

▸ **removeAll**(): [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

Remove all listeners from the Runner

#### Returns

[`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/runner/index.d.ts:95
