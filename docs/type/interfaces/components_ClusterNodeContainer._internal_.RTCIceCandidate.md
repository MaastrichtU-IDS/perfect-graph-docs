[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCIceCandidate

# Interface: RTCIceCandidate

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCIceCandidate

The RTCIceCandidate interface—part of the WebRTC API—represents a candidate Internet Connectivity Establishment (ICE) configuration which may be used to establish an RTCPeerConnection.

## Table of contents

### Properties

- [address](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#address)
- [candidate](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#candidate)
- [component](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#component)
- [foundation](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#foundation)
- [port](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#port)
- [priority](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#priority)
- [protocol](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#protocol)
- [relatedAddress](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#relatedaddress)
- [relatedPort](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#relatedport)
- [sdpMLineIndex](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#sdpmlineindex)
- [sdpMid](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#sdpmid)
- [tcpType](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#tcptype)
- [type](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#type)
- [usernameFragment](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#usernamefragment)

### Methods

- [toJSON](components_ClusterNodeContainer._internal_.RTCIceCandidate.md#tojson)

## Properties

### address

• `Readonly` **address**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10733

___

### candidate

• `Readonly` **candidate**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10734

___

### component

• `Readonly` **component**: ``null`` \| [`RTCIceComponent`](../modules/components_ClusterNodeContainer._internal_.md#rtcicecomponent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10735

___

### foundation

• `Readonly` **foundation**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10736

___

### port

• `Readonly` **port**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10737

___

### priority

• `Readonly` **priority**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10738

___

### protocol

• `Readonly` **protocol**: ``null`` \| [`RTCIceProtocol`](../modules/components_ClusterNodeContainer._internal_.md#rtciceprotocol)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10739

___

### relatedAddress

• `Readonly` **relatedAddress**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10740

___

### relatedPort

• `Readonly` **relatedPort**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10741

___

### sdpMLineIndex

• `Readonly` **sdpMLineIndex**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10742

___

### sdpMid

• `Readonly` **sdpMid**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10743

___

### tcpType

• `Readonly` **tcpType**: ``null`` \| [`RTCIceTcpCandidateType`](../modules/components_ClusterNodeContainer._internal_.md#rtcicetcpcandidatetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10744

___

### type

• `Readonly` **type**: ``null`` \| [`RTCIceCandidateType`](../modules/components_ClusterNodeContainer._internal_.md#rtcicecandidatetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10745

___

### usernameFragment

• `Readonly` **usernameFragment**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10746

## Methods

### toJSON

▸ **toJSON**(): [`RTCIceCandidateInit`](components_ClusterNodeContainer._internal_.RTCIceCandidateInit.md)

#### Returns

[`RTCIceCandidateInit`](components_ClusterNodeContainer._internal_.RTCIceCandidateInit.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10747
