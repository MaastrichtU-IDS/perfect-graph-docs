[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SingularStyle

# Interface: SingularStyle

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SingularStyle

http://js.cytoscape.org/#collection/style

## Hierarchy

- **`SingularStyle`**

  ↳ [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)

## Table of contents

### Methods

- [effectiveOpacity](components_ClusterNodeContainer._internal_.SingularStyle.md#effectiveopacity)
- [hasClass](components_ClusterNodeContainer._internal_.SingularStyle.md#hasclass)
- [hidden](components_ClusterNodeContainer._internal_.SingularStyle.md#hidden)
- [numericStyle](components_ClusterNodeContainer._internal_.SingularStyle.md#numericstyle)
- [numericStyleUnits](components_ClusterNodeContainer._internal_.SingularStyle.md#numericstyleunits)
- [renderedCss](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedcss)
- [renderedStyle](components_ClusterNodeContainer._internal_.SingularStyle.md#renderedstyle)
- [transparent](components_ClusterNodeContainer._internal_.SingularStyle.md#transparent)
- [visible](components_ClusterNodeContainer._internal_.SingularStyle.md#visible)

## Methods

### effectiveOpacity

▸ **effectiveOpacity**(): `number`

Get the effective opacity of the element
 (i.e. on-screen opacity),
which takes into consideration parent node opacity.
http://js.cytoscape.org/#ele.effectiveOpacity

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2115

___

### hasClass

▸ **hasClass**(`className`): `boolean`

Get whether an element has a particular class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | The name of the class to test for. http://js.cytoscape.org/#ele.hasClass |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2072

___

### hidden

▸ **hidden**(): `boolean`

Get whether the element is hidden.
http://js.cytoscape.org/#ele.visible

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2108

___

### numericStyle

▸ **numericStyle**(`name`): `any`

Get the numeric value of a style property in
preferred units that can be used for calculations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style property to get. http://js.cytoscape.org/#ele.numericStyle |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2091

___

### numericStyleUnits

▸ **numericStyleUnits**(`name`): `any`

Get the units that ele.numericStyle() is expressed in, for a particular property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style property to get. http://js.cytoscape.org/#ele.numericStyleUnits |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2098

___

### renderedCss

▸ **renderedCss**(): `Object`

#### Returns

`Object`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2082

▸ **renderedCss**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2083

___

### renderedStyle

▸ **renderedStyle**(): `Object`

Get a name-value pair object containing rendered visual
style properties and their values for the element.

#### Returns

`Object`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2079

▸ **renderedStyle**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2080

___

### transparent

▸ **transparent**(): `number`

Get whether the element's effective opacity is completely transparent,
which takes into consideration parent node opacity.
http://js.cytoscape.org/#ele.transparent

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2121

___

### visible

▸ **visible**(): `boolean`

Get whether the element is visible.
http://js.cytoscape.org/#ele.visible

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2103
