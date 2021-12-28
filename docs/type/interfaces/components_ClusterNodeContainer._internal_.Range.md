[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Range

# Interface: Range

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Range

A fragment of a document that can contain nodes and parts of text nodes.

## Hierarchy

- [`AbstractRange`](../modules/components_ClusterNodeContainer._internal_.md#abstractrange)

  ↳ **`Range`**

## Table of contents

### Properties

- [END\_TO\_END](components_ClusterNodeContainer._internal_.Range.md#end_to_end)
- [END\_TO\_START](components_ClusterNodeContainer._internal_.Range.md#end_to_start)
- [START\_TO\_END](components_ClusterNodeContainer._internal_.Range.md#start_to_end)
- [START\_TO\_START](components_ClusterNodeContainer._internal_.Range.md#start_to_start)
- [collapsed](components_ClusterNodeContainer._internal_.Range.md#collapsed)
- [commonAncestorContainer](components_ClusterNodeContainer._internal_.Range.md#commonancestorcontainer)
- [endContainer](components_ClusterNodeContainer._internal_.Range.md#endcontainer)
- [endOffset](components_ClusterNodeContainer._internal_.Range.md#endoffset)
- [startContainer](components_ClusterNodeContainer._internal_.Range.md#startcontainer)
- [startOffset](components_ClusterNodeContainer._internal_.Range.md#startoffset)

### Methods

- [cloneContents](components_ClusterNodeContainer._internal_.Range.md#clonecontents)
- [cloneRange](components_ClusterNodeContainer._internal_.Range.md#clonerange)
- [collapse](components_ClusterNodeContainer._internal_.Range.md#collapse)
- [compareBoundaryPoints](components_ClusterNodeContainer._internal_.Range.md#compareboundarypoints)
- [comparePoint](components_ClusterNodeContainer._internal_.Range.md#comparepoint)
- [createContextualFragment](components_ClusterNodeContainer._internal_.Range.md#createcontextualfragment)
- [deleteContents](components_ClusterNodeContainer._internal_.Range.md#deletecontents)
- [detach](components_ClusterNodeContainer._internal_.Range.md#detach)
- [extractContents](components_ClusterNodeContainer._internal_.Range.md#extractcontents)
- [getBoundingClientRect](components_ClusterNodeContainer._internal_.Range.md#getboundingclientrect)
- [getClientRects](components_ClusterNodeContainer._internal_.Range.md#getclientrects)
- [insertNode](components_ClusterNodeContainer._internal_.Range.md#insertnode)
- [intersectsNode](components_ClusterNodeContainer._internal_.Range.md#intersectsnode)
- [isPointInRange](components_ClusterNodeContainer._internal_.Range.md#ispointinrange)
- [selectNode](components_ClusterNodeContainer._internal_.Range.md#selectnode)
- [selectNodeContents](components_ClusterNodeContainer._internal_.Range.md#selectnodecontents)
- [setEnd](components_ClusterNodeContainer._internal_.Range.md#setend)
- [setEndAfter](components_ClusterNodeContainer._internal_.Range.md#setendafter)
- [setEndBefore](components_ClusterNodeContainer._internal_.Range.md#setendbefore)
- [setStart](components_ClusterNodeContainer._internal_.Range.md#setstart)
- [setStartAfter](components_ClusterNodeContainer._internal_.Range.md#setstartafter)
- [setStartBefore](components_ClusterNodeContainer._internal_.Range.md#setstartbefore)
- [surroundContents](components_ClusterNodeContainer._internal_.Range.md#surroundcontents)
- [toString](components_ClusterNodeContainer._internal_.Range.md#tostring)

## Properties

### END\_TO\_END

• `Readonly` **END\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10982

___

### END\_TO\_START

• `Readonly` **END\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10983

___

### START\_TO\_END

• `Readonly` **START\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10984

___

### START\_TO\_START

• `Readonly` **START\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10985

___

### collapsed

• `Readonly` **collapsed**: `boolean`

Returns true if range is collapsed, and false otherwise.

#### Inherited from

AbstractRange.collapsed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1901

___

### commonAncestorContainer

• `Readonly` **commonAncestorContainer**: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns the node, furthest away from the document, that is an ancestor of both range's start node and end node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10955

___

### endContainer

• `Readonly` **endContainer**: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns range's end node.

#### Inherited from

AbstractRange.endContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1903

___

### endOffset

• `Readonly` **endOffset**: `number`

Returns range's end offset.

#### Inherited from

AbstractRange.endOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1905

___

### startContainer

• `Readonly` **startContainer**: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns range's start node.

#### Inherited from

AbstractRange.startContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1907

___

### startOffset

• `Readonly` **startOffset**: `number`

Returns range's start offset.

#### Inherited from

AbstractRange.startOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1909

## Methods

### cloneContents

▸ **cloneContents**(): `DocumentFragment`

#### Returns

`DocumentFragment`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10956

___

### cloneRange

▸ **cloneRange**(): [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Returns

[`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10957

___

### collapse

▸ **collapse**(`toStart?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toStart?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10958

___

### compareBoundaryPoints

▸ **compareBoundaryPoints**(`how`, `sourceRange`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `how` | `number` |
| `sourceRange` | [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10959

___

### comparePoint

▸ **comparePoint**(`node`, `offset`): `number`

Returns −1 if the point is before the range, 0 if the point is in the range, and 1 if the point is after the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10961

___

### createContextualFragment

▸ **createContextualFragment**(`fragment`): `DocumentFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |

#### Returns

`DocumentFragment`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10962

___

### deleteContents

▸ **deleteContents**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10963

___

### detach

▸ **detach**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10964

___

### extractContents

▸ **extractContents**(): `DocumentFragment`

#### Returns

`DocumentFragment`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10965

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10966

___

### getClientRects

▸ **getClientRects**(): [`DOMRectList`](../modules/components_ClusterNodeContainer._internal_.md#domrectlist)

#### Returns

[`DOMRectList`](../modules/components_ClusterNodeContainer._internal_.md#domrectlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10967

___

### insertNode

▸ **insertNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10968

___

### intersectsNode

▸ **intersectsNode**(`node`): `boolean`

Returns whether range intersects node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10970

___

### isPointInRange

▸ **isPointInRange**(`node`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10971

___

### selectNode

▸ **selectNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10972

___

### selectNodeContents

▸ **selectNodeContents**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10973

___

### setEnd

▸ **setEnd**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10974

___

### setEndAfter

▸ **setEndAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10975

___

### setEndBefore

▸ **setEndBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10976

___

### setStart

▸ **setStart**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10977

___

### setStartAfter

▸ **setStartAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10978

___

### setStartBefore

▸ **setStartBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10979

___

### surroundContents

▸ **surroundContents**(`newParent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10980

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10981
