[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AudioBuffer

# Interface: AudioBuffer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AudioBuffer

A short audio asset residing in memory, created from an audio file using the AudioContext.decodeAudioData() method, or from raw data using AudioContext.createBuffer(). Once put into an AudioBuffer, the audio can then be played by being passed into an AudioBufferSourceNode.

## Table of contents

### Properties

- [duration](components_ClusterNodeContainer._internal_.AudioBuffer.md#duration)
- [length](components_ClusterNodeContainer._internal_.AudioBuffer.md#length)
- [numberOfChannels](components_ClusterNodeContainer._internal_.AudioBuffer.md#numberofchannels)
- [sampleRate](components_ClusterNodeContainer._internal_.AudioBuffer.md#samplerate)

### Methods

- [copyFromChannel](components_ClusterNodeContainer._internal_.AudioBuffer.md#copyfromchannel)
- [copyToChannel](components_ClusterNodeContainer._internal_.AudioBuffer.md#copytochannel)
- [getChannelData](components_ClusterNodeContainer._internal_.AudioBuffer.md#getchanneldata)

## Properties

### duration

• `Readonly` **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2058

___

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2059

___

### numberOfChannels

• `Readonly` **numberOfChannels**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2060

___

### sampleRate

• `Readonly` **sampleRate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2061

## Methods

### copyFromChannel

▸ **copyFromChannel**(`destination`, `channelNumber`, `bufferOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `Float32Array` |
| `channelNumber` | `number` |
| `bufferOffset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2062

___

### copyToChannel

▸ **copyToChannel**(`source`, `channelNumber`, `bufferOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Float32Array` |
| `channelNumber` | `number` |
| `bufferOffset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2063

___

### getChannelData

▸ **getChannelData**(`channel`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`Float32Array`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2064
