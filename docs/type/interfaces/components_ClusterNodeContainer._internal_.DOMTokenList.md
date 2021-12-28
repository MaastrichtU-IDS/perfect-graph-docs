[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / DOMTokenList

# Interface: DOMTokenList

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).DOMTokenList

A set of space-separated tokens. Such a set is returned by Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList, HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor. It is indexed beginning with 0 as with JavaScript Array objects. DOMTokenList is always case-sensitive.

## Indexable

▪ [index: `number`]: `string`

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.DOMTokenList.md#length)
- [value](components_ClusterNodeContainer._internal_.DOMTokenList.md#value)

### Methods

- [add](components_ClusterNodeContainer._internal_.DOMTokenList.md#add)
- [contains](components_ClusterNodeContainer._internal_.DOMTokenList.md#contains)
- [forEach](components_ClusterNodeContainer._internal_.DOMTokenList.md#foreach)
- [item](components_ClusterNodeContainer._internal_.DOMTokenList.md#item)
- [remove](components_ClusterNodeContainer._internal_.DOMTokenList.md#remove)
- [replace](components_ClusterNodeContainer._internal_.DOMTokenList.md#replace)
- [supports](components_ClusterNodeContainer._internal_.DOMTokenList.md#supports)
- [toString](components_ClusterNodeContainer._internal_.DOMTokenList.md#tostring)
- [toggle](components_ClusterNodeContainer._internal_.DOMTokenList.md#toggle)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of tokens.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3974

___

### value

• **value**: `string`

Returns the associated set as string.

Can be set, to change the associated attribute.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3980

## Methods

### add

▸ **add**(...`tokens`): `void`

Adds all arguments passed, except those already present.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tokens` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3989

___

### contains

▸ **contains**(`token`): `boolean`

Returns true if token is present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3991

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `number`, `parent`: [`DOMTokenList`](../modules/components_ClusterNodeContainer._internal_.md#domtokenlist)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4028

___

### item

▸ **item**(`index`): ``null`` \| `string`

Returns the token with index index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3993

___

### remove

▸ **remove**(...`tokens`): `void`

Removes arguments passed, if they are present.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tokens` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4001

___

### replace

▸ **replace**(`token`, `newToken`): `boolean`

Replaces token with newToken.

Returns true if token was replaced with newToken, and false otherwise.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `newToken` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4011

___

### supports

▸ **supports**(`token`): `boolean`

Returns true if token is in the associated attribute's supported tokens. Returns false otherwise.

Throws a TypeError if the associated attribute has no supported tokens defined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4017

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3981

___

### toggle

▸ **toggle**(`token`, `force?`): `boolean`

If force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).

Returns true if token is now present, and false otherwise.

Throws a "SyntaxError" DOMException if token is empty.

Throws an "InvalidCharacterError" DOMException if token contains any spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4027
