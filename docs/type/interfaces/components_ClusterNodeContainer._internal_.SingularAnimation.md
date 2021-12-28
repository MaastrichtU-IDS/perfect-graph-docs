[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SingularAnimation

# Interface: SingularAnimation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SingularAnimation

## Hierarchy

- **`SingularAnimation`**

  ↳ [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)

## Table of contents

### Methods

- [animated](components_ClusterNodeContainer._internal_.SingularAnimation.md#animated)
- [animation](components_ClusterNodeContainer._internal_.SingularAnimation.md#animation)
- [delayAnimation](components_ClusterNodeContainer._internal_.SingularAnimation.md#delayanimation)

## Methods

### animated

▸ **animated**(): `boolean`

Get whether the element is currently being animated.

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2200

___

### animation

▸ **animation**(`options`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

 Get an animation for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SingularAnimationOptionsRen`](components_ClusterNodeContainer._internal_.SingularAnimationOptionsRen.md) \| [`SingularAnimationOptionsPos`](components_ClusterNodeContainer._internal_.SingularAnimationOptionsPos.md) | An object containing the details of the animation. |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2205

___

### delayAnimation

▸ **delayAnimation**(`duration`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get a delay animation for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. http://js.cytoscape.org/#ele.delayAnimation |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2212
