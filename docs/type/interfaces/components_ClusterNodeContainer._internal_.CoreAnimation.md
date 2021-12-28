[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreAnimation

# Interface: CoreAnimation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreAnimation

## Hierarchy

- **`CoreAnimation`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [animate](components_ClusterNodeContainer._internal_.CoreAnimation.md#animate)
- [animated](components_ClusterNodeContainer._internal_.CoreAnimation.md#animated)
- [animation](components_ClusterNodeContainer._internal_.CoreAnimation.md#animation)
- [clearQueue](components_ClusterNodeContainer._internal_.CoreAnimation.md#clearqueue)
- [delay](components_ClusterNodeContainer._internal_.CoreAnimation.md#delay)
- [delayAnimation](components_ClusterNodeContainer._internal_.CoreAnimation.md#delayanimation)
- [stop](components_ClusterNodeContainer._internal_.CoreAnimation.md#stop)

## Methods

### animate

▸ **animate**(`anis`, `options?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Animate the viewport.
http://js.cytoscape.org/#cy.animate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anis` | [`AnimateOptions`](components_ClusterNodeContainer._internal_.AnimateOptions.md) | An object containing the details of the animation. |
| `options?` | [`AnimateOptions`](components_ClusterNodeContainer._internal_.AnimateOptions.md) | An object containing animation options. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1008

___

### animated

▸ **animated**(): `boolean`

Get whether the viewport is currently being animated.
http://js.cytoscape.org/#cy.animated

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:998

___

### animation

▸ **animation**(`options`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get an animation of the viewport.
http://js.cytoscape.org/#cy.animation

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnimationOptions`](components_ClusterNodeContainer._internal_.AnimationOptions.md) |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1014

___

### clearQueue

▸ **clearQueue**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Remove all queued animations for the viewport.
http://js.cytoscape.org/#cy.clearQueue

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1043

___

### delay

▸ **delay**(`duration`, `complete?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Add a delay between animations for the viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. |
| `complete?` | () => `void` | A function to call when the delay is complete. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1022

___

### delayAnimation

▸ **delayAnimation**(`duration`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get a delay animation of the viewport.
http://js.cytoscape.org/#cy.delayAnimation

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1028

___

### stop

▸ **stop**(`clearQueue?`, `jumpToEnd?`): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Stop all viewport animations that are currently running.
http://js.cytoscape.org/#cy.stop

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearQueue?` | `boolean` | A boolean, indicating whether the queue of animations should be emptied. |
| `jumpToEnd?` | `boolean` | A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway. |

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1037
