[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionAnimation

# Interface: CollectionAnimation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionAnimation

## Hierarchy

- **`CollectionAnimation`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [animate](components_ClusterNodeContainer._internal_.CollectionAnimation.md#animate)
- [clearQueue](components_ClusterNodeContainer._internal_.CollectionAnimation.md#clearqueue)
- [delay](components_ClusterNodeContainer._internal_.CollectionAnimation.md#delay)
- [stop](components_ClusterNodeContainer._internal_.CollectionAnimation.md#stop)

## Methods

### animate

▸ **animate**(`options`, `params?`): [`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

Animate the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ElementAnimateOptionPos`](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md) \| [`ElementAnimateOptionRen`](components_ClusterNodeContainer._internal_.ElementAnimateOptionRen.md) | An object containing the details of the animation. http://js.cytoscape.org/#eles.animate |
| `params?` | [`ElementAnimateOptionsBase`](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md) | - |

#### Returns

[`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2155

___

### clearQueue

▸ **clearQueue**(): [`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

Remove all queued animations for the elements.
http://js.cytoscape.org/#eles.clearQueue

#### Returns

[`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2174

___

### delay

▸ **delay**(`duration`, `complete?`): [`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

Add a delay between animations for the elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | How long the delay should be in milliseconds. |
| `complete?` | () => `void` | A function to call when the delay is complete. http://js.cytoscape.org/#eles.delay |

#### Returns

[`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2162

___

### stop

▸ **stop**(`clearQueue?`, `jumpToEnd?`): [`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

Stop all animations that are currently running.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearQueue?` | `boolean` | A boolean, indicating whether the queue of animations should be emptied. |
| `jumpToEnd?` | `boolean` | A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway. http://js.cytoscape.org/#eles.stop |

#### Returns

[`CollectionAnimation`](components_ClusterNodeContainer._internal_.CollectionAnimation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2169
