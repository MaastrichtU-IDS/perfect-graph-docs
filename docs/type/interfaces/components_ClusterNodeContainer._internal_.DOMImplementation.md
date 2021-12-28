[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / DOMImplementation

# Interface: DOMImplementation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).DOMImplementation

An object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.

## Table of contents

### Methods

- [createDocument](components_ClusterNodeContainer._internal_.DOMImplementation.md#createdocument)
- [createDocumentType](components_ClusterNodeContainer._internal_.DOMImplementation.md#createdocumenttype)
- [createHTMLDocument](components_ClusterNodeContainer._internal_.DOMImplementation.md#createhtmldocument)
- [hasFeature](components_ClusterNodeContainer._internal_.DOMImplementation.md#hasfeature)

## Methods

### createDocument

▸ **createDocument**(`namespace`, `qualifiedName`, `doctype?`): [`XMLDocument`](../modules/components_ClusterNodeContainer._internal_.md#xmldocument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | ``null`` \| `string` |
| `doctype?` | ``null`` \| [`DocumentType`](../modules/components_ClusterNodeContainer._internal_.md#documenttype) |

#### Returns

[`XMLDocument`](../modules/components_ClusterNodeContainer._internal_.md#xmldocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3716

___

### createDocumentType

▸ **createDocumentType**(`qualifiedName`, `publicId`, `systemId`): [`DocumentType`](../modules/components_ClusterNodeContainer._internal_.md#documenttype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `publicId` | `string` |
| `systemId` | `string` |

#### Returns

[`DocumentType`](../modules/components_ClusterNodeContainer._internal_.md#documenttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3717

___

### createHTMLDocument

▸ **createHTMLDocument**(`title?`): `Document`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |

#### Returns

`Document`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3718

___

### hasFeature

▸ **hasFeature**(...`args`): ``true``

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

``true``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3720
