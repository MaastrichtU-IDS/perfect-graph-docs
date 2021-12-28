[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCRtpSender

# Interface: RTCRtpSender

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCRtpSender

Provides the ability to control and obtain details about how a particular MediaStreamTrack is encoded and sent to a remote peer.

## Table of contents

### Properties

- [dtmf](components_ClusterNodeContainer._internal_.RTCRtpSender.md#dtmf)
- [track](components_ClusterNodeContainer._internal_.RTCRtpSender.md#track)
- [transport](components_ClusterNodeContainer._internal_.RTCRtpSender.md#transport)

### Methods

- [getParameters](components_ClusterNodeContainer._internal_.RTCRtpSender.md#getparameters)
- [getStats](components_ClusterNodeContainer._internal_.RTCRtpSender.md#getstats)
- [replaceTrack](components_ClusterNodeContainer._internal_.RTCRtpSender.md#replacetrack)
- [setParameters](components_ClusterNodeContainer._internal_.RTCRtpSender.md#setparameters)
- [setStreams](components_ClusterNodeContainer._internal_.RTCRtpSender.md#setstreams)

## Properties

### dtmf

• `Readonly` **dtmf**: ``null`` \| [`RTCDTMFSender`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtmfsender)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10880

___

### track

• `Readonly` **track**: ``null`` \| [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10881

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10882

## Methods

### getParameters

▸ **getParameters**(): [`RTCRtpSendParameters`](components_ClusterNodeContainer._internal_.RTCRtpSendParameters.md)

#### Returns

[`RTCRtpSendParameters`](components_ClusterNodeContainer._internal_.RTCRtpSendParameters.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10883

___

### getStats

▸ **getStats**(): `Promise`<[`RTCStatsReport`](../modules/components_ClusterNodeContainer._internal_.md#rtcstatsreport)\>

#### Returns

`Promise`<[`RTCStatsReport`](../modules/components_ClusterNodeContainer._internal_.md#rtcstatsreport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10884

___

### replaceTrack

▸ **replaceTrack**(`withTrack`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `withTrack` | ``null`` \| [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10885

___

### setParameters

▸ **setParameters**(`parameters`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`RTCRtpSendParameters`](components_ClusterNodeContainer._internal_.RTCRtpSendParameters.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10886

___

### setStreams

▸ **setStreams**(...`streams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...streams` | [`MediaStream`](../modules/components_ClusterNodeContainer._internal_.md#mediastream)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10887
