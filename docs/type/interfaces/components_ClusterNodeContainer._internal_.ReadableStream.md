[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ReadableStream

# Interface: ReadableStream<R\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ReadableStream

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](components_ClusterNodeContainer._internal_.ReadableStream.md#locked)

### Methods

- [cancel](components_ClusterNodeContainer._internal_.ReadableStream.md#cancel)
- [getReader](components_ClusterNodeContainer._internal_.ReadableStream.md#getreader)
- [pipeThrough](components_ClusterNodeContainer._internal_.ReadableStream.md#pipethrough)
- [pipeTo](components_ClusterNodeContainer._internal_.ReadableStream.md#pipeto)
- [tee](components_ClusterNodeContainer._internal_.ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11000

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11001

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules/components_ClusterNodeContainer._internal_.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules/components_ClusterNodeContainer._internal_.md#readablestreamdefaultreader)<`R`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11002

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](components_ClusterNodeContainer._internal_.ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](components_ClusterNodeContainer._internal_.StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11003

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules/components_ClusterNodeContainer._internal_.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](components_ClusterNodeContainer._internal_.StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11004

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`R`\>, [`ReadableStream`](../modules/components_ClusterNodeContainer._internal_.md#readablestream)<`R`\>]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11005
