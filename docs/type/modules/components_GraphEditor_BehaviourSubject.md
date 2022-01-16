[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/BehaviourSubject

# Module: components/GraphEditor/BehaviourSubject

## Table of contents

### Type aliases

- [Subscription](components_GraphEditor_BehaviourSubject.md#subscription)

### Functions

- [BehaviorSubject](components_GraphEditor_BehaviourSubject.md#behaviorsubject)

## Type aliases

### Subscription

Ƭ **Subscription**<`V`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Defined in

[components/GraphEditor/BehaviourSubject.tsx:1](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/BehaviourSubject.tsx#L1)

## Functions

### BehaviorSubject

▸ `Const` **BehaviorSubject**<`T`\>(`value`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `next` | (`nextValue`: `T`) => `void` |
| `subscribe` | (`subscriber`: `Subscriber`) => [`Subscription`](components_GraphEditor_BehaviourSubject.md#subscription)<`T`\> |
| `subscribers` | `Subscriber`[] |
| `value` | `T` |

#### Defined in

[components/GraphEditor/BehaviourSubject.tsx:4](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/BehaviourSubject.tsx#L4)
