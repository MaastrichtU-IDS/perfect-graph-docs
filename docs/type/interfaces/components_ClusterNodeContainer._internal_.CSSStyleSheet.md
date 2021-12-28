[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CSSStyleSheet

# Interface: CSSStyleSheet

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CSSStyleSheet

A single CSS style sheet. It inherits properties and methods from its parent, StyleSheet.

## Hierarchy

- [`StyleSheet`](../modules/components_ClusterNodeContainer._internal_.md#stylesheet)

  ↳ **`CSSStyleSheet`**

## Table of contents

### Properties

- [cssRules](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#cssrules)
- [disabled](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#disabled)
- [href](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#href)
- [media](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#media)
- [ownerNode](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#ownernode)
- [ownerRule](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#ownerrule)
- [parentStyleSheet](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#parentstylesheet)
- [rules](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#rules)
- [title](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#title)
- [type](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#type)

### Methods

- [addRule](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#addrule)
- [deleteRule](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#deleterule)
- [insertRule](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#insertrule)
- [removeRule](components_ClusterNodeContainer._internal_.CSSStyleSheet.md#removerule)

## Properties

### cssRules

• `Readonly` **cssRules**: [`CSSRuleList`](../modules/components_ClusterNodeContainer._internal_.md#cssrulelist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3179

___

### disabled

• **disabled**: `boolean`

#### Inherited from

StyleSheet.disabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13390

___

### href

• `Readonly` **href**: ``null`` \| `string`

#### Inherited from

StyleSheet.href

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13391

___

### media

• `Readonly` **media**: [`MediaList`](../modules/components_ClusterNodeContainer._internal_.md#medialist)

#### Inherited from

StyleSheet.media

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13392

___

### ownerNode

• `Readonly` **ownerNode**: ``null`` \| `Element` \| [`ProcessingInstruction`](../modules/components_ClusterNodeContainer._internal_.md#processinginstruction)

#### Inherited from

StyleSheet.ownerNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13393

___

### ownerRule

• `Readonly` **ownerRule**: ``null`` \| [`CSSRule`](../modules/components_ClusterNodeContainer._internal_.md#cssrule)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3180

___

### parentStyleSheet

• `Readonly` **parentStyleSheet**: ``null`` \| [`CSSStyleSheet`](../modules/components_ClusterNodeContainer._internal_.md#cssstylesheet)

#### Inherited from

StyleSheet.parentStyleSheet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13394

___

### rules

• `Readonly` **rules**: [`CSSRuleList`](../modules/components_ClusterNodeContainer._internal_.md#cssrulelist)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3182

___

### title

• `Readonly` **title**: ``null`` \| `string`

#### Inherited from

StyleSheet.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13395

___

### type

• `Readonly` **type**: `string`

#### Inherited from

StyleSheet.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13396

## Methods

### addRule

▸ **addRule**(`selector?`, `style?`, `index?`): `number`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |
| `style?` | `string` |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3184

___

### deleteRule

▸ **deleteRule**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3185

___

### insertRule

▸ **insertRule**(`rule`, `index?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rule` | `string` |
| `index?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3186

___

### removeRule

▸ **removeRule**(`index?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3188
