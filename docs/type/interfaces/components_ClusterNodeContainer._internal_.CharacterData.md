[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CharacterData

# Interface: CharacterData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CharacterData

The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any object of type CharacterData: it is implemented by other interfaces, like Text, Comment, or ProcessingInstruction which aren't abstract.

## Hierarchy

- [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

- [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

- [`NonDocumentTypeChildNode`](components_ClusterNodeContainer._internal_.NonDocumentTypeChildNode.md)

  ↳ **`CharacterData`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#attribute_node)
- [CDATA\_SECTION\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#cdata_section_node)
- [COMMENT\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#document_fragment_node)
- [DOCUMENT\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](components_ClusterNodeContainer._internal_.CharacterData.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#document_type_node)
- [ELEMENT\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#element_node)
- [ENTITY\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#entity_reference_node)
- [NOTATION\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#processing_instruction_node)
- [TEXT\_NODE](components_ClusterNodeContainer._internal_.CharacterData.md#text_node)
- [baseURI](components_ClusterNodeContainer._internal_.CharacterData.md#baseuri)
- [childNodes](components_ClusterNodeContainer._internal_.CharacterData.md#childnodes)
- [data](components_ClusterNodeContainer._internal_.CharacterData.md#data)
- [firstChild](components_ClusterNodeContainer._internal_.CharacterData.md#firstchild)
- [isConnected](components_ClusterNodeContainer._internal_.CharacterData.md#isconnected)
- [lastChild](components_ClusterNodeContainer._internal_.CharacterData.md#lastchild)
- [length](components_ClusterNodeContainer._internal_.CharacterData.md#length)
- [nextElementSibling](components_ClusterNodeContainer._internal_.CharacterData.md#nextelementsibling)
- [nextSibling](components_ClusterNodeContainer._internal_.CharacterData.md#nextsibling)
- [nodeName](components_ClusterNodeContainer._internal_.CharacterData.md#nodename)
- [nodeType](components_ClusterNodeContainer._internal_.CharacterData.md#nodetype)
- [nodeValue](components_ClusterNodeContainer._internal_.CharacterData.md#nodevalue)
- [ownerDocument](components_ClusterNodeContainer._internal_.CharacterData.md#ownerdocument)
- [parentElement](components_ClusterNodeContainer._internal_.CharacterData.md#parentelement)
- [parentNode](components_ClusterNodeContainer._internal_.CharacterData.md#parentnode)
- [previousElementSibling](components_ClusterNodeContainer._internal_.CharacterData.md#previouselementsibling)
- [previousSibling](components_ClusterNodeContainer._internal_.CharacterData.md#previoussibling)
- [textContent](components_ClusterNodeContainer._internal_.CharacterData.md#textcontent)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.CharacterData.md#addeventlistener)
- [after](components_ClusterNodeContainer._internal_.CharacterData.md#after)
- [appendChild](components_ClusterNodeContainer._internal_.CharacterData.md#appendchild)
- [appendData](components_ClusterNodeContainer._internal_.CharacterData.md#appenddata)
- [before](components_ClusterNodeContainer._internal_.CharacterData.md#before)
- [cloneNode](components_ClusterNodeContainer._internal_.CharacterData.md#clonenode)
- [compareDocumentPosition](components_ClusterNodeContainer._internal_.CharacterData.md#comparedocumentposition)
- [contains](components_ClusterNodeContainer._internal_.CharacterData.md#contains)
- [deleteData](components_ClusterNodeContainer._internal_.CharacterData.md#deletedata)
- [dispatchEvent](components_ClusterNodeContainer._internal_.CharacterData.md#dispatchevent)
- [getRootNode](components_ClusterNodeContainer._internal_.CharacterData.md#getrootnode)
- [hasChildNodes](components_ClusterNodeContainer._internal_.CharacterData.md#haschildnodes)
- [insertBefore](components_ClusterNodeContainer._internal_.CharacterData.md#insertbefore)
- [insertData](components_ClusterNodeContainer._internal_.CharacterData.md#insertdata)
- [isDefaultNamespace](components_ClusterNodeContainer._internal_.CharacterData.md#isdefaultnamespace)
- [isEqualNode](components_ClusterNodeContainer._internal_.CharacterData.md#isequalnode)
- [isSameNode](components_ClusterNodeContainer._internal_.CharacterData.md#issamenode)
- [lookupNamespaceURI](components_ClusterNodeContainer._internal_.CharacterData.md#lookupnamespaceuri)
- [lookupPrefix](components_ClusterNodeContainer._internal_.CharacterData.md#lookupprefix)
- [normalize](components_ClusterNodeContainer._internal_.CharacterData.md#normalize)
- [remove](components_ClusterNodeContainer._internal_.CharacterData.md#remove)
- [removeChild](components_ClusterNodeContainer._internal_.CharacterData.md#removechild)
- [removeEventListener](components_ClusterNodeContainer._internal_.CharacterData.md#removeeventlistener)
- [replaceChild](components_ClusterNodeContainer._internal_.CharacterData.md#replacechild)
- [replaceData](components_ClusterNodeContainer._internal_.CharacterData.md#replacedata)
- [replaceWith](components_ClusterNodeContainer._internal_.CharacterData.md#replacewith)
- [substringData](components_ClusterNodeContainer._internal_.CharacterData.md#substringdata)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[ATTRIBUTE_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#attribute_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9696

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[CDATA_SECTION_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#cdata_section_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9698

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[COMMENT_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#comment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9700

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_FRAGMENT_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_fragment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9702

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9704

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_CONTAINED_BY](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_contained_by)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9706

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_CONTAINS](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9708

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_DISCONNECTED](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_disconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9710

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_FOLLOWING](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_following)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_implementation_specific)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9713

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_POSITION_PRECEDING](components_ClusterNodeContainer._internal_.ChildNode.md#document_position_preceding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9715

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[DOCUMENT_TYPE_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#document_type_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9717

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[ELEMENT_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#element_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9719

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[ENTITY_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#entity_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[ENTITY_REFERENCE_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#entity_reference_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9721

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[NOTATION_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#notation_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9722

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[PROCESSING_INSTRUCTION_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#processing_instruction_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9724

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[TEXT_NODE](components_ClusterNodeContainer._internal_.ChildNode.md#text_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9726

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[baseURI](components_ClusterNodeContainer._internal_.ChildNode.md#baseuri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9649

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[childNodes](components_ClusterNodeContainer._internal_.ChildNode.md#childnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9651

___

### data

• **data**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[firstChild](components_ClusterNodeContainer._internal_.ChildNode.md#firstchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9653

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[isConnected](components_ClusterNodeContainer._internal_.ChildNode.md#isconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9655

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[lastChild](components_ClusterNodeContainer._internal_.ChildNode.md#lastchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9657

___

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| `Element`

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](components_ClusterNodeContainer._internal_.NonDocumentTypeChildNode.md).[nextElementSibling](components_ClusterNodeContainer._internal_.NonDocumentTypeChildNode.md#nextelementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9816

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[nextSibling](components_ClusterNodeContainer._internal_.ChildNode.md#nextsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9659

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[nodeName](components_ClusterNodeContainer._internal_.ChildNode.md#nodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9661

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[nodeType](components_ClusterNodeContainer._internal_.ChildNode.md#nodetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9663

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[nodeValue](components_ClusterNodeContainer._internal_.ChildNode.md#nodevalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9664

___

### ownerDocument

• `Readonly` **ownerDocument**: `Document`

Returns the node document. Returns null for documents.

#### Overrides

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[ownerDocument](components_ClusterNodeContainer._internal_.ChildNode.md#ownerdocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[parentElement](components_ClusterNodeContainer._internal_.ChildNode.md#parentelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9668

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](components_ClusterNodeContainer._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[parentNode](components_ClusterNodeContainer._internal_.ChildNode.md#parentnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9670

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| `Element`

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](components_ClusterNodeContainer._internal_.NonDocumentTypeChildNode.md).[previousElementSibling](components_ClusterNodeContainer._internal_.NonDocumentTypeChildNode.md#previouselementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9818

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[previousSibling](components_ClusterNodeContainer._internal_.ChildNode.md#previoussibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9672

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[textContent](components_ClusterNodeContainer._internal_.ChildNode.md#textcontent)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[addEventListener](components_ClusterNodeContainer._internal_.ChildNode.md#addeventlistener)

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

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[after](components_ClusterNodeContainer._internal_.ChildNode.md#after)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[appendChild](components_ClusterNodeContainer._internal_.ChildNode.md#appendchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9674

___

### appendData

▸ **appendData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3433

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

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[before](components_ClusterNodeContainer._internal_.ChildNode.md#before)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[cloneNode](components_ClusterNodeContainer._internal_.ChildNode.md#clonenode)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[compareDocumentPosition](components_ClusterNodeContainer._internal_.ChildNode.md#comparedocumentposition)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[contains](components_ClusterNodeContainer._internal_.ChildNode.md#contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9680

___

### deleteData

▸ **deleteData**(`offset`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3434

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[dispatchEvent](components_ClusterNodeContainer._internal_.ChildNode.md#dispatchevent)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[getRootNode](components_ClusterNodeContainer._internal_.ChildNode.md#getrootnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9682

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[hasChildNodes](components_ClusterNodeContainer._internal_.ChildNode.md#haschildnodes)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[insertBefore](components_ClusterNodeContainer._internal_.ChildNode.md#insertbefore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9685

___

### insertData

▸ **insertData**(`offset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3435

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[isDefaultNamespace](components_ClusterNodeContainer._internal_.ChildNode.md#isdefaultnamespace)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[isEqualNode](components_ClusterNodeContainer._internal_.ChildNode.md#isequalnode)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[isSameNode](components_ClusterNodeContainer._internal_.ChildNode.md#issamenode)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[lookupNamespaceURI](components_ClusterNodeContainer._internal_.ChildNode.md#lookupnamespaceuri)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[lookupPrefix](components_ClusterNodeContainer._internal_.ChildNode.md#lookupprefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9691

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[normalize](components_ClusterNodeContainer._internal_.ChildNode.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9693

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[remove](components_ClusterNodeContainer._internal_.ChildNode.md#remove)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[removeChild](components_ClusterNodeContainer._internal_.ChildNode.md#removechild)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[removeEventListener](components_ClusterNodeContainer._internal_.ChildNode.md#removeeventlistener)

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

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[replaceChild](components_ClusterNodeContainer._internal_.ChildNode.md#replacechild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9695

___

### replaceData

▸ **replaceData**(`offset`, `count`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3436

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

#### Inherited from

[ChildNode](components_ClusterNodeContainer._internal_.ChildNode.md).[replaceWith](components_ClusterNodeContainer._internal_.ChildNode.md#replacewith)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3465

___

### substringData

▸ **substringData**(`offset`, `count`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3437
