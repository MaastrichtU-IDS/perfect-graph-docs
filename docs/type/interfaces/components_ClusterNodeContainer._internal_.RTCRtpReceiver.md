[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCRtpReceiver

This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

## Table of contents

### Properties

- [track](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#track)
- [transport](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#transport)

### Methods

- [getContributingSources](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#getcontributingsources)
- [getParameters](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#getparameters)
- [getStats](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#getstats)
- [getSynchronizationSources](components_ClusterNodeContainer._internal_.RTCRtpReceiver.md#getsynchronizationsources)

## Properties

### track

• `Readonly` **track**: [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10864

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10865

## Methods

### getContributingSources

▸ **getContributingSources**(): [`RTCRtpContributingSource`](components_ClusterNodeContainer._internal_.RTCRtpContributingSource.md)[]

#### Returns

[`RTCRtpContributingSource`](components_ClusterNodeContainer._internal_.RTCRtpContributingSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10866

___

### getParameters

▸ **getParameters**(): [`RTCRtpReceiveParameters`](components_ClusterNodeContainer._internal_.RTCRtpReceiveParameters.md)

#### Returns

[`RTCRtpReceiveParameters`](components_ClusterNodeContainer._internal_.RTCRtpReceiveParameters.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10867

___

### getStats

▸ **getStats**(): `Promise`<[`RTCStatsReport`](../modules/components_ClusterNodeContainer._internal_.md#rtcstatsreport)\>

#### Returns

`Promise`<[`RTCStatsReport`](../modules/components_ClusterNodeContainer._internal_.md#rtcstatsreport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10868

___

### getSynchronizationSources

▸ **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](components_ClusterNodeContainer._internal_.RTCRtpSynchronizationSource.md)[]

#### Returns

[`RTCRtpSynchronizationSource`](components_ClusterNodeContainer._internal_.RTCRtpSynchronizationSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10869
