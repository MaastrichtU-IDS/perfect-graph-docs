[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreGraphManipulationExt

# Interface: CoreGraphManipulationExt

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreGraphManipulationExt

http://js.cytoscape.org/#core/graph-manipulation
http://js.cytoscape.org/#extensions
These functions are intended for use in extensions.

## Hierarchy

- **`CoreGraphManipulationExt`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [removeScratch](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md#removescratch)
- [scratch](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md#scratch)

## Methods

### removeScratch

▸ **removeScratch**(`namespace`): [`CoreGraphManipulationExt`](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md)

Remove scratchpad data. You should remove scratchpad data only at your own namespaces.
http://js.cytoscape.org/#cy.removeScratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A namespace string. |

#### Returns

[`CoreGraphManipulationExt`](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:538

___

### scratch

▸ **scratch**(`namespace?`): `any`

Set the scratchpad at a particular namespace,
where temporary or non-JSON data can be stored.
App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.

If no parameter provided, the entire scratchpad will be returned.
If only namespace provided, the scratchpad with the namespace will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | A namespace string. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:529

▸ **scratch**(`namespace`, `value`): [`CoreGraphManipulationExt`](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `value` | `any` |

#### Returns

[`CoreGraphManipulationExt`](components_ClusterNodeContainer._internal_.CoreGraphManipulationExt.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:530
