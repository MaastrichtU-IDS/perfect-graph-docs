[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / DocumentOrShadowRoot

# Interface: DocumentOrShadowRoot

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).DocumentOrShadowRoot

## Hierarchy

- **`DocumentOrShadowRoot`**

  ↳ [`ShadowRoot`](components_ClusterNodeContainer._internal_.ShadowRoot.md)

## Table of contents

### Properties

- [activeElement](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#activeelement)
- [fullscreenElement](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#fullscreenelement)
- [pictureInPictureElement](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#pictureinpictureelement)
- [pointerLockElement](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#pointerlockelement)
- [styleSheets](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#stylesheets)

### Methods

- [elementFromPoint](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#elementfrompoint)
- [elementsFromPoint](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#elementsfrompoint)
- [getAnimations](components_ClusterNodeContainer._internal_.DocumentOrShadowRoot.md#getanimations)

## Properties

### activeElement

• `Readonly` **activeElement**: ``null`` \| `Element`

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4604

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| `Element`

Returns document's fullscreen element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4606

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| `Element`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4607

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| `Element`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4608

___

### styleSheets

• `Readonly` **styleSheets**: [`StyleSheetList`](../modules/components_ClusterNodeContainer._internal_.md#stylesheetlist)

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4610

## Methods

### elementFromPoint

▸ **elementFromPoint**(`x`, `y`): ``null`` \| `Element`

Returns the element for the specified x coordinate and the specified y coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-offset |
| `y` | `number` | The y-offset |

#### Returns

``null`` \| `Element`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4616

___

### elementsFromPoint

▸ **elementsFromPoint**(`x`, `y`): `Element`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`Element`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4617

___

### getAnimations

▸ **getAnimations**(): [`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Returns

[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4618
