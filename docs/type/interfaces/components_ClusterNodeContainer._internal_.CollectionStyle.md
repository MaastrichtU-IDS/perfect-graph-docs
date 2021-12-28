[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionStyle

# Interface: CollectionStyle

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionStyle

## Hierarchy

- **`CollectionStyle`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [addClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#addclass)
- [classes](components_ClusterNodeContainer._internal_.CollectionStyle.md#classes)
- [css](components_ClusterNodeContainer._internal_.CollectionStyle.md#css)
- [flashClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#flashclass)
- [removeClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#removeclass)
- [removeStyle](components_ClusterNodeContainer._internal_.CollectionStyle.md#removestyle)
- [style](components_ClusterNodeContainer._internal_.CollectionStyle.md#style)
- [toggleClass](components_ClusterNodeContainer._internal_.CollectionStyle.md#toggleclass)

## Methods

### addClass

▸ **addClass**(`classes`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Add classes to elements.
http://js.cytoscape.org/#eles.addClass

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to add to the elements. |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1987

___

### classes

▸ **classes**(`classes?`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Replace the current list of classes on the elements with the specified list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes?` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names that replaces the current class list. http://js.cytoscape.org/#eles.classes Note: can be used to clear all classes (no arguments). |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2007

___

### css

▸ **css**(`name`, `value`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2041

▸ **css**(`name`): `any`

Get a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to get. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2046

▸ **css**(`obj`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2051

▸ **css**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2055

___

### flashClass

▸ **flashClass**(`classes`, `duration?`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Add classes to the elements, and then remove the classes after a specified duration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to flash on the elements. |
| `duration?` | `number` | The duration in milliseconds that the classes should be added on the elements. After the duration, the classes are removed. http://js.cytoscape.org/#eles.flashClass |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2014

___

### removeClass

▸ **removeClass**(`classes`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Remove classes from elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to remove from the elements. http://js.cytoscape.org/#eles.removeClass |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1993

___

### removeStyle

▸ **removeStyle**(`names?`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Remove all or specific style overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names?` | `string` | A space-separated list of property names to remove overrides |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2060

___

### style

▸ **style**(`name`, `value`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Set a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to set. |
| `value` | `any` | The value to which the property is set. |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2021

▸ **style**(`name`): `any`

Get a particular style property value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the visual style property to get. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2026

▸ **style**(`obj`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Set several particular style property values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | An object of style property name-value pairs to set. |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2031

▸ **style**(): `Object`

Get a name-value pair object containing visual style properties and their values for the element.

#### Returns

`Object`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2035

___

### toggleClass

▸ **toggleClass**(`classes`, `toggle?`): [`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

Toggle whether the elements have the specified classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classes` | [`ClassNames`](../modules/components_ClusterNodeContainer._internal_.md#classnames) | A space-separated list of class names to toggle on the elements. |
| `toggle?` | `boolean` | Instead of automatically toggling, adds the classes on truthy values or removes them on falsey values. http://js.cytoscape.org/#eles.toggleClass |

#### Returns

[`CollectionStyle`](components_ClusterNodeContainer._internal_.CollectionStyle.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2000
