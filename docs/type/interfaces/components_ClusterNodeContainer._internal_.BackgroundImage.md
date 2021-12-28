[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BackgroundImage

# Interface: BackgroundImage

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BackgroundImage

A background image may be applied to a node’s body:

http://js.cytoscape.org/#style/background-image

## Hierarchy

- **`BackgroundImage`**

  ↳ [`Node`](components_ClusterNodeContainer._internal_.Node.md)

## Table of contents

### Properties

- [background-clip](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-clip)
- [background-fit](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-fit)
- [background-height](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-height)
- [background-image](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-image)
- [background-image-opacity](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-image-opacity)
- [background-position-x](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-position-x)
- [background-position-y](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-position-y)
- [background-repeat](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-repeat)
- [background-width](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-width)

## Properties

### background-clip

• `Optional` **background-clip**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"none"`` \| ``"clipped"``\>

How background image clipping is handled;
may be node for clipped to node shape or none for no clipping.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3721

___

### background-fit

• `Optional` **background-fit**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"none"`` \| ``"contain"`` \| ``"cover"``\>

How the background image is fit to the node;
may be none for original size,
contain to fit inside node,
or cover to cover the node.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3701

___

### background-height

• `Optional` **background-height**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

Specifies the height of the image.
A percent value (e.g. 50%) may be used to set the image
height relative to the node height.
If used in combination with background- fit,
then this value overrides the height of the image in calculating
the fitting — thereby overriding the aspect ratio.
The auto value is used by default, which uses the height of the image.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3694

___

### background-image

• `Optional` **background-image**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The URL that points to the image that should be used as the node’s background.
PNG, JPG, and SVG are supported formats.
You may use a data URI to use embedded images,
thereby saving a HTTP request.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3670

___

### background-image-opacity

• `Optional` **background-image-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the background image. [0 1]

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3674

___

### background-position-x

• `Optional` **background-position-x**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The x position of the background image,
measured in percent(e.g. 50%) or pixels (e.g. 10px).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3711

___

### background-position-y

• `Optional` **background-position-y**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The y position of the background image,
measured in percent(e.g. 50%) or pixels (e.g. 10px).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3716

___

### background-repeat

• `Optional` **background-repeat**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"repeat"`` \| ``"no-repeat"`` \| ``"repeat-x"`` \| ``"repeat-y"``\>

Whether to repeat the background image;
may be no-repeat, repeat-x, repeat-y, or repeat.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3706

___

### background-width

• `Optional` **background-width**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

Specifies the width of the image.
A percent value (e.g. 50%) may be used to set
the image width relative to the node width.
If used in combination with background- fit,
then this value overrides the width of the image
in calculating the fitting — thereby overriding the aspect ratio.
The auto value is used by default, which uses the width of the image.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3684
