[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / XPathExpression

# Interface: XPathExpression

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).XPathExpression

This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information its DOM tree.

## Table of contents

### Methods

- [evaluate](components_ClusterNodeContainer._internal_.XPathExpression.md#evaluate)

## Methods

### evaluate

▸ **evaluate**(`contextNode`, `type?`, `result?`): [`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextNode` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16583
