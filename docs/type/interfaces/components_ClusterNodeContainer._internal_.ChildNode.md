[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ChildNode

# Interface: ChildNode

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ChildNode

## Hierarchy

- [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

  ↳ **`ChildNode`**

  ↳↳ [`DocumentType`](components_ClusterNodeContainer._internal_.DocumentType.md)

  ↳↳ [`CharacterData`](components_ClusterNodeContainer._internal_.CharacterData.md)

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#attribute_node)
- [CDATA\_SECTION\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#cdata_section_node)
- [COMMENT\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_fragment_node)
- [DOCUMENT\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_type_node)
- [ELEMENT\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#element_node)
- [ENTITY\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#entity_reference_node)
- [NOTATION\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#processing_instruction_node)
- [TEXT\_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#text_node)
- [baseURI](components_ClusterNodeContainer._internal_.ChildNode.md#baseuri)
- [childNodes](components_ClusterNodeContainer._internal_.ChildNode.md#childnodes)
- [firstChild](components_ClusterNodeContainer._internal_.ChildNode.md#firstchild)
- [isConnected](components_ClusterNodeContainer._internal_.ChildNode.md#isconnected)
- [lastChild](components_ClusterNodeContainer._internal_.ChildNode.md#lastchild)
- [nextSibling](components_ClusterNodeContainer._internal_.ChildNode.md#nextsibling)
- [nodeName](components_ClusterNodeContainer._internal_.ChildNode.md#nodename)
- [nodeType](components_ClusterNodeContainer._internal_.ChildNode.md#nodetype)
- [nodeValue](components_ClusterNodeContainer._internal_.ChildNode.md#nodevalue)
- [ownerDocument](components_ClusterNodeContainer._internal_.ChildNode.md#ownerdocument)
- [parentElement](components_ClusterNodeContainer._internal_.ChildNode.md#parentelement)
- [parentNode](components_ClusterNodeContainer._internal_.ChildNode.md#parentnode)
- [previousSibling](components_ClusterNodeContainer._internal_.ChildNode.md#previoussibling)
- [textContent](components_ClusterNodeContainer._internal_.ChildNode.md#textcontent)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.ChildNode.md#addeventlistener)
- [after](components_ClusterNodeContainer._internal_.ChildNode.md#after)
- [appendChild](components_ClusterNodeContainer._internal_.ChildNode.md#appendchild)
- [before](components_ClusterNodeContainer._internal_.ChildNode.md#before)
- [cloneNode](components_ClusterNodeContainer._internal_.ChildNode.md#clonenode)
- [compareDocumentPosition](components_ClusterNodeContainer._internal_.ChildNode.md#comparedocumentposition)
- [contains](components_ClusterNodeContainer._internal_.ChildNode.md#contains)
- [dispatchEvent](components_ClusterNodeContainer._internal_.ChildNode.md#dispatchevent)
- [getRootNode](components_ClusterNodeContainer._internal_.ChildNode.md#getrootnode)
- [hasChildNodes](components_ClusterNodeContainer._internal_.ChildNode.md#haschildnodes)
- [insertBefore](components_ClusterNodeContainer._internal_.ChildNode.md#insertbefore)
- [isDefaultNamespace](components_ClusterNodeContainer._internal_.ChildNode.md#isdefaultnamespace)
- [isEqualNode](components_ClusterNodeContainer._internal_.ChildNode.md#isequalnode)
- [isSameNode](components_ClusterNodeContainer._internal_.ChildNode.md#issamenode)
- [lookupNamespaceURI](components_ClusterNodeContainer._internal_.ChildNode.md#lookupnamespaceuri)
- [lookupPrefix](components_ClusterNodeContainer._internal_.ChildNode.md#lookupprefix)
- [normalize](components_ClusterNodeContainer._internal_.ChildNode.md#normalize)
- [remove](components_ClusterNodeContainer._internal_.ChildNode.md#remove)
- [removeChild](components_ClusterNodeContainer._internal_.ChildNode.md#removechild)
- [removeEventListener](components_ClusterNodeContainer._internal_.ChildNode.md#removeeventlistener)
- [replaceChild](components_ClusterNodeContainer._internal_.ChildNode.md#replacechild)
- [replaceWith](components_ClusterNodeContainer._internal_.ChildNode.md#replacewith)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Node.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9696

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Node.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9698

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Node.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9700

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Node.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9702

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Node.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9704

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9706

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9708

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Node.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9710

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Node.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Node.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9713

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Node.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9715

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Node.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9717

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Node.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9719

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Node.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Node.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9721

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Node.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9722

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Node.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9724

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Node.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9726

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Node.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9649

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Node.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9651

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Node.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9653

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Node.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9655

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Node.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9657

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Node.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9659

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Node.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9661

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Node.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9663

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Node.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9664

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null`` \| `Document`

Returns the node document. Returns null for documents.

#### Inherited from

Node.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9666

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

#### Inherited from

Node.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9668

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](components_ClusterNodeContainer._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Node.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9670

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Node.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9672

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Node.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9673

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Node.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4981

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3451

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Node.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9674

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3457

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Inherited from

Node.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9676

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`number`

#### Inherited from

Node.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9678

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9680

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

Node.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](components_ClusterNodeContainer._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Inherited from

Node.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9682

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Node.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9684

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`T`

#### Inherited from

Node.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9685

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Inherited from

Node.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9686

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9688

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9689

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Node.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9690

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Node.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9691

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Node.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9693

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3459

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9694

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Node.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4985

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9695

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3465