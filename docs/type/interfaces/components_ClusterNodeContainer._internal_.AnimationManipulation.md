[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AnimationManipulation

# Interface: AnimationManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AnimationManipulation

http://js.cytoscape.org/#animations/animation-manipulation

## Table of contents

### Methods

- [apply](components_ClusterNodeContainer._internal_.AnimationManipulation.md#apply)
- [applying](components_ClusterNodeContainer._internal_.AnimationManipulation.md#applying)
- [complete](components_ClusterNodeContainer._internal_.AnimationManipulation.md#complete)
- [completed](components_ClusterNodeContainer._internal_.AnimationManipulation.md#completed)
- [fastforward](components_ClusterNodeContainer._internal_.AnimationManipulation.md#fastforward)
- [pause](components_ClusterNodeContainer._internal_.AnimationManipulation.md#pause)
- [play](components_ClusterNodeContainer._internal_.AnimationManipulation.md#play)
- [playing](components_ClusterNodeContainer._internal_.AnimationManipulation.md#playing)
- [progress](components_ClusterNodeContainer._internal_.AnimationManipulation.md#progress)
- [promise](components_ClusterNodeContainer._internal_.AnimationManipulation.md#promise)
- [reverse](components_ClusterNodeContainer._internal_.AnimationManipulation.md#reverse)
- [rewind](components_ClusterNodeContainer._internal_.AnimationManipulation.md#rewind)
- [stop](components_ClusterNodeContainer._internal_.AnimationManipulation.md#stop)
- [time](components_ClusterNodeContainer._internal_.AnimationManipulation.md#time)

## Methods

### apply

▸ **apply**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Apply the animation at its current progress.
http://js.cytoscape.org/#ani.apply

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5021

___

### applying

▸ **applying**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get whether the animation is currently applying.
http://js.cytoscape.org/#ani.applying

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5026

___

### complete

▸ **complete**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5016

___

### completed

▸ **completed**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Get whether the animation has progressed to the end.
http://js.cytoscape.org/#ani.completed

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5015

___

### fastforward

▸ **fastforward**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Fastforward the animation to the end.

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4998

___

### pause

▸ **pause**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Pause the animation, maintaining the current progress.
http://js.cytoscape.org/#ani.pause

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5004

___

### play

▸ **play**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Requests that the animation be played, starting on the next frame.
If the animation is complete, it restarts from the beginning.
http://js.cytoscape.org/#ani.play

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4962

___

### playing

▸ **playing**(): `boolean`

Get whether the animation is currently playing.
http://js.cytoscape.org/#ani.playing

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4967

___

### progress

▸ **progress**(): `number`

Get the progress of the animation in percent.

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4975

▸ **progress**(`progress`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Set the progress of the animation in percent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `progress` | `number` | The progress in percent (i.e. between 0 and 1 inclusive) to set to the animation. |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4980

___

### promise

▸ **promise**(`animationEvent?`): `Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

Get a promise that is fulfilled with the specified animation event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animationEvent?` | ``"completed"`` \| ``"complete"`` \| ``"frame"`` | A string for the event name; completed or complete for completing the animation or frame for the next frame of the animation. http://js.cytoscape.org/#ani.promise |

#### Returns

`Promise`<[`EventObject`](components_ClusterNodeContainer._internal_.EventObject.md)\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5039

___

### reverse

▸ **reverse**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Reverse the animation such that its starting
conditions and ending conditions are reversed.
http://js.cytoscape.org/#ani.reverse

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5032

___

### rewind

▸ **rewind**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Rewind the animation to the beginning.

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4994

___

### stop

▸ **stop**(): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Stop the animation, maintaining the current progress
and removing the animation from any associated queues.
http://js.cytoscape.org/#ani.stop

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:5010

___

### time

▸ **time**(): `number`

Get the progress of the animation in milliseconds.

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4984

▸ **time**(`time`): [`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

Set the progress of the animation in milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The progress in milliseconds (i.e. between 0 and the duration inclusive) to set to the animation. |

#### Returns

[`AnimationManipulation`](components_ClusterNodeContainer._internal_.AnimationManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4990
