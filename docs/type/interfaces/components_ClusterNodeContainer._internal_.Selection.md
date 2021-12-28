[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Selection

# Interface: Selection

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Selection

A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call Window.getSelection().

## Table of contents

### Properties

- [anchorNode](components_ClusterNodeContainer._internal_.Selection.md#anchornode)
- [anchorOffset](components_ClusterNodeContainer._internal_.Selection.md#anchoroffset)
- [focusNode](components_ClusterNodeContainer._internal_.Selection.md#focusnode)
- [focusOffset](components_ClusterNodeContainer._internal_.Selection.md#focusoffset)
- [isCollapsed](components_ClusterNodeContainer._internal_.Selection.md#iscollapsed)
- [rangeCount](components_ClusterNodeContainer._internal_.Selection.md#rangecount)
- [type](components_ClusterNodeContainer._internal_.Selection.md#type)

### Methods

- [addRange](components_ClusterNodeContainer._internal_.Selection.md#addrange)
- [collapse](components_ClusterNodeContainer._internal_.Selection.md#collapse)
- [collapseToEnd](components_ClusterNodeContainer._internal_.Selection.md#collapsetoend)
- [collapseToStart](components_ClusterNodeContainer._internal_.Selection.md#collapsetostart)
- [containsNode](components_ClusterNodeContainer._internal_.Selection.md#containsnode)
- [deleteFromDocument](components_ClusterNodeContainer._internal_.Selection.md#deletefromdocument)
- [empty](components_ClusterNodeContainer._internal_.Selection.md#empty)
- [extend](components_ClusterNodeContainer._internal_.Selection.md#extend)
- [getRangeAt](components_ClusterNodeContainer._internal_.Selection.md#getrangeat)
- [removeAllRanges](components_ClusterNodeContainer._internal_.Selection.md#removeallranges)
- [removeRange](components_ClusterNodeContainer._internal_.Selection.md#removerange)
- [selectAllChildren](components_ClusterNodeContainer._internal_.Selection.md#selectallchildren)
- [setBaseAndExtent](components_ClusterNodeContainer._internal_.Selection.md#setbaseandextent)
- [setPosition](components_ClusterNodeContainer._internal_.Selection.md#setposition)
- [toString](components_ClusterNodeContainer._internal_.Selection.md#tostring)

## Properties

### anchorNode

• `Readonly` **anchorNode**: ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12959

___

### anchorOffset

• `Readonly` **anchorOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12960

___

### focusNode

• `Readonly` **focusNode**: ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12961

___

### focusOffset

• `Readonly` **focusOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12962

___

### isCollapsed

• `Readonly` **isCollapsed**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12963

___

### rangeCount

• `Readonly` **rangeCount**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12964

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12965

## Methods

### addRange

▸ **addRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12966

___

### collapse

▸ **collapse**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12967

___

### collapseToEnd

▸ **collapseToEnd**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12968

___

### collapseToStart

▸ **collapseToStart**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12969

___

### containsNode

▸ **containsNode**(`node`, `allowPartialContainment?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `allowPartialContainment?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12970

___

### deleteFromDocument

▸ **deleteFromDocument**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12971

___

### empty

▸ **empty**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12972

___

### extend

▸ **extend**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12973

___

### getRangeAt

▸ **getRangeAt**(`index`): [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12974

___

### removeAllRanges

▸ **removeAllRanges**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12975

___

### removeRange

▸ **removeRange**(`range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12976

___

### selectAllChildren

▸ **selectAllChildren**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12977

___

### setBaseAndExtent

▸ **setBaseAndExtent**(`anchorNode`, `anchorOffset`, `focusNode`, `focusOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorNode` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `anchorOffset` | `number` |
| `focusNode` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `focusOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12978

___

### setPosition

▸ **setPosition**(`node`, `offset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12979

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12980
