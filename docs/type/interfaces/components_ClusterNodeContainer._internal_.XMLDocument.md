[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / XMLDocument

# Interface: XMLDocument

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).XMLDocument

An XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents.

## Hierarchy

- `Document`

  ↳ **`XMLDocument`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#attribute_node)
- [CDATA\_SECTION\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#cdata_section_node)
- [COMMENT\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#document_fragment_node)
- [DOCUMENT\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](components_ClusterNodeContainer._internal_.XMLDocument.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#document_type_node)
- [ELEMENT\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#element_node)
- [ENTITY\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#entity_reference_node)
- [NOTATION\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#processing_instruction_node)
- [TEXT\_NODE](components_ClusterNodeContainer._internal_.XMLDocument.md#text_node)
- [URL](components_ClusterNodeContainer._internal_.XMLDocument.md#url)
- [activeElement](components_ClusterNodeContainer._internal_.XMLDocument.md#activeelement)
- [alinkColor](components_ClusterNodeContainer._internal_.XMLDocument.md#alinkcolor)
- [all](components_ClusterNodeContainer._internal_.XMLDocument.md#all)
- [anchors](components_ClusterNodeContainer._internal_.XMLDocument.md#anchors)
- [applets](components_ClusterNodeContainer._internal_.XMLDocument.md#applets)
- [baseURI](components_ClusterNodeContainer._internal_.XMLDocument.md#baseuri)
- [bgColor](components_ClusterNodeContainer._internal_.XMLDocument.md#bgcolor)
- [body](components_ClusterNodeContainer._internal_.XMLDocument.md#body)
- [characterSet](components_ClusterNodeContainer._internal_.XMLDocument.md#characterset)
- [charset](components_ClusterNodeContainer._internal_.XMLDocument.md#charset)
- [childElementCount](components_ClusterNodeContainer._internal_.XMLDocument.md#childelementcount)
- [childNodes](components_ClusterNodeContainer._internal_.XMLDocument.md#childnodes)
- [children](components_ClusterNodeContainer._internal_.XMLDocument.md#children)
- [compatMode](components_ClusterNodeContainer._internal_.XMLDocument.md#compatmode)
- [contentType](components_ClusterNodeContainer._internal_.XMLDocument.md#contenttype)
- [cookie](components_ClusterNodeContainer._internal_.XMLDocument.md#cookie)
- [currentScript](components_ClusterNodeContainer._internal_.XMLDocument.md#currentscript)
- [defaultView](components_ClusterNodeContainer._internal_.XMLDocument.md#defaultview)
- [designMode](components_ClusterNodeContainer._internal_.XMLDocument.md#designmode)
- [dir](components_ClusterNodeContainer._internal_.XMLDocument.md#dir)
- [doctype](components_ClusterNodeContainer._internal_.XMLDocument.md#doctype)
- [documentElement](components_ClusterNodeContainer._internal_.XMLDocument.md#documentelement)
- [documentURI](components_ClusterNodeContainer._internal_.XMLDocument.md#documenturi)
- [domain](components_ClusterNodeContainer._internal_.XMLDocument.md#domain)
- [embeds](components_ClusterNodeContainer._internal_.XMLDocument.md#embeds)
- [fgColor](components_ClusterNodeContainer._internal_.XMLDocument.md#fgcolor)
- [firstChild](components_ClusterNodeContainer._internal_.XMLDocument.md#firstchild)
- [firstElementChild](components_ClusterNodeContainer._internal_.XMLDocument.md#firstelementchild)
- [fonts](components_ClusterNodeContainer._internal_.XMLDocument.md#fonts)
- [forms](components_ClusterNodeContainer._internal_.XMLDocument.md#forms)
- [fullscreen](components_ClusterNodeContainer._internal_.XMLDocument.md#fullscreen)
- [fullscreenElement](components_ClusterNodeContainer._internal_.XMLDocument.md#fullscreenelement)
- [fullscreenEnabled](components_ClusterNodeContainer._internal_.XMLDocument.md#fullscreenenabled)
- [head](components_ClusterNodeContainer._internal_.XMLDocument.md#head)
- [hidden](components_ClusterNodeContainer._internal_.XMLDocument.md#hidden)
- [images](components_ClusterNodeContainer._internal_.XMLDocument.md#images)
- [implementation](components_ClusterNodeContainer._internal_.XMLDocument.md#implementation)
- [inputEncoding](components_ClusterNodeContainer._internal_.XMLDocument.md#inputencoding)
- [isConnected](components_ClusterNodeContainer._internal_.XMLDocument.md#isconnected)
- [lastChild](components_ClusterNodeContainer._internal_.XMLDocument.md#lastchild)
- [lastElementChild](components_ClusterNodeContainer._internal_.XMLDocument.md#lastelementchild)
- [lastModified](components_ClusterNodeContainer._internal_.XMLDocument.md#lastmodified)
- [linkColor](components_ClusterNodeContainer._internal_.XMLDocument.md#linkcolor)
- [links](components_ClusterNodeContainer._internal_.XMLDocument.md#links)
- [nextSibling](components_ClusterNodeContainer._internal_.XMLDocument.md#nextsibling)
- [nodeName](components_ClusterNodeContainer._internal_.XMLDocument.md#nodename)
- [nodeType](components_ClusterNodeContainer._internal_.XMLDocument.md#nodetype)
- [nodeValue](components_ClusterNodeContainer._internal_.XMLDocument.md#nodevalue)
- [onabort](components_ClusterNodeContainer._internal_.XMLDocument.md#onabort)
- [onanimationcancel](components_ClusterNodeContainer._internal_.XMLDocument.md#onanimationcancel)
- [onanimationend](components_ClusterNodeContainer._internal_.XMLDocument.md#onanimationend)
- [onanimationiteration](components_ClusterNodeContainer._internal_.XMLDocument.md#onanimationiteration)
- [onanimationstart](components_ClusterNodeContainer._internal_.XMLDocument.md#onanimationstart)
- [onauxclick](components_ClusterNodeContainer._internal_.XMLDocument.md#onauxclick)
- [onblur](components_ClusterNodeContainer._internal_.XMLDocument.md#onblur)
- [oncanplay](components_ClusterNodeContainer._internal_.XMLDocument.md#oncanplay)
- [oncanplaythrough](components_ClusterNodeContainer._internal_.XMLDocument.md#oncanplaythrough)
- [onchange](components_ClusterNodeContainer._internal_.XMLDocument.md#onchange)
- [onclick](components_ClusterNodeContainer._internal_.XMLDocument.md#onclick)
- [onclose](components_ClusterNodeContainer._internal_.XMLDocument.md#onclose)
- [oncontextmenu](components_ClusterNodeContainer._internal_.XMLDocument.md#oncontextmenu)
- [oncopy](components_ClusterNodeContainer._internal_.XMLDocument.md#oncopy)
- [oncuechange](components_ClusterNodeContainer._internal_.XMLDocument.md#oncuechange)
- [oncut](components_ClusterNodeContainer._internal_.XMLDocument.md#oncut)
- [ondblclick](components_ClusterNodeContainer._internal_.XMLDocument.md#ondblclick)
- [ondrag](components_ClusterNodeContainer._internal_.XMLDocument.md#ondrag)
- [ondragend](components_ClusterNodeContainer._internal_.XMLDocument.md#ondragend)
- [ondragenter](components_ClusterNodeContainer._internal_.XMLDocument.md#ondragenter)
- [ondragleave](components_ClusterNodeContainer._internal_.XMLDocument.md#ondragleave)
- [ondragover](components_ClusterNodeContainer._internal_.XMLDocument.md#ondragover)
- [ondragstart](components_ClusterNodeContainer._internal_.XMLDocument.md#ondragstart)
- [ondrop](components_ClusterNodeContainer._internal_.XMLDocument.md#ondrop)
- [ondurationchange](components_ClusterNodeContainer._internal_.XMLDocument.md#ondurationchange)
- [onemptied](components_ClusterNodeContainer._internal_.XMLDocument.md#onemptied)
- [onended](components_ClusterNodeContainer._internal_.XMLDocument.md#onended)
- [onerror](components_ClusterNodeContainer._internal_.XMLDocument.md#onerror)
- [onfocus](components_ClusterNodeContainer._internal_.XMLDocument.md#onfocus)
- [onformdata](components_ClusterNodeContainer._internal_.XMLDocument.md#onformdata)
- [onfullscreenchange](components_ClusterNodeContainer._internal_.XMLDocument.md#onfullscreenchange)
- [onfullscreenerror](components_ClusterNodeContainer._internal_.XMLDocument.md#onfullscreenerror)
- [ongotpointercapture](components_ClusterNodeContainer._internal_.XMLDocument.md#ongotpointercapture)
- [oninput](components_ClusterNodeContainer._internal_.XMLDocument.md#oninput)
- [oninvalid](components_ClusterNodeContainer._internal_.XMLDocument.md#oninvalid)
- [onkeydown](components_ClusterNodeContainer._internal_.XMLDocument.md#onkeydown)
- [onkeypress](components_ClusterNodeContainer._internal_.XMLDocument.md#onkeypress)
- [onkeyup](components_ClusterNodeContainer._internal_.XMLDocument.md#onkeyup)
- [onload](components_ClusterNodeContainer._internal_.XMLDocument.md#onload)
- [onloadeddata](components_ClusterNodeContainer._internal_.XMLDocument.md#onloadeddata)
- [onloadedmetadata](components_ClusterNodeContainer._internal_.XMLDocument.md#onloadedmetadata)
- [onloadstart](components_ClusterNodeContainer._internal_.XMLDocument.md#onloadstart)
- [onlostpointercapture](components_ClusterNodeContainer._internal_.XMLDocument.md#onlostpointercapture)
- [onmousedown](components_ClusterNodeContainer._internal_.XMLDocument.md#onmousedown)
- [onmouseenter](components_ClusterNodeContainer._internal_.XMLDocument.md#onmouseenter)
- [onmouseleave](components_ClusterNodeContainer._internal_.XMLDocument.md#onmouseleave)
- [onmousemove](components_ClusterNodeContainer._internal_.XMLDocument.md#onmousemove)
- [onmouseout](components_ClusterNodeContainer._internal_.XMLDocument.md#onmouseout)
- [onmouseover](components_ClusterNodeContainer._internal_.XMLDocument.md#onmouseover)
- [onmouseup](components_ClusterNodeContainer._internal_.XMLDocument.md#onmouseup)
- [onpaste](components_ClusterNodeContainer._internal_.XMLDocument.md#onpaste)
- [onpause](components_ClusterNodeContainer._internal_.XMLDocument.md#onpause)
- [onplay](components_ClusterNodeContainer._internal_.XMLDocument.md#onplay)
- [onplaying](components_ClusterNodeContainer._internal_.XMLDocument.md#onplaying)
- [onpointercancel](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointercancel)
- [onpointerdown](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerdown)
- [onpointerenter](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerenter)
- [onpointerleave](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerleave)
- [onpointerlockchange](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerlockchange)
- [onpointerlockerror](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerlockerror)
- [onpointermove](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointermove)
- [onpointerout](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerout)
- [onpointerover](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerover)
- [onpointerup](components_ClusterNodeContainer._internal_.XMLDocument.md#onpointerup)
- [onprogress](components_ClusterNodeContainer._internal_.XMLDocument.md#onprogress)
- [onratechange](components_ClusterNodeContainer._internal_.XMLDocument.md#onratechange)
- [onreadystatechange](components_ClusterNodeContainer._internal_.XMLDocument.md#onreadystatechange)
- [onreset](components_ClusterNodeContainer._internal_.XMLDocument.md#onreset)
- [onresize](components_ClusterNodeContainer._internal_.XMLDocument.md#onresize)
- [onscroll](components_ClusterNodeContainer._internal_.XMLDocument.md#onscroll)
- [onseeked](components_ClusterNodeContainer._internal_.XMLDocument.md#onseeked)
- [onseeking](components_ClusterNodeContainer._internal_.XMLDocument.md#onseeking)
- [onselect](components_ClusterNodeContainer._internal_.XMLDocument.md#onselect)
- [onselectionchange](components_ClusterNodeContainer._internal_.XMLDocument.md#onselectionchange)
- [onselectstart](components_ClusterNodeContainer._internal_.XMLDocument.md#onselectstart)
- [onstalled](components_ClusterNodeContainer._internal_.XMLDocument.md#onstalled)
- [onsubmit](components_ClusterNodeContainer._internal_.XMLDocument.md#onsubmit)
- [onsuspend](components_ClusterNodeContainer._internal_.XMLDocument.md#onsuspend)
- [ontimeupdate](components_ClusterNodeContainer._internal_.XMLDocument.md#ontimeupdate)
- [ontoggle](components_ClusterNodeContainer._internal_.XMLDocument.md#ontoggle)
- [ontouchcancel](components_ClusterNodeContainer._internal_.XMLDocument.md#ontouchcancel)
- [ontouchend](components_ClusterNodeContainer._internal_.XMLDocument.md#ontouchend)
- [ontouchmove](components_ClusterNodeContainer._internal_.XMLDocument.md#ontouchmove)
- [ontouchstart](components_ClusterNodeContainer._internal_.XMLDocument.md#ontouchstart)
- [ontransitioncancel](components_ClusterNodeContainer._internal_.XMLDocument.md#ontransitioncancel)
- [ontransitionend](components_ClusterNodeContainer._internal_.XMLDocument.md#ontransitionend)
- [ontransitionrun](components_ClusterNodeContainer._internal_.XMLDocument.md#ontransitionrun)
- [ontransitionstart](components_ClusterNodeContainer._internal_.XMLDocument.md#ontransitionstart)
- [onvisibilitychange](components_ClusterNodeContainer._internal_.XMLDocument.md#onvisibilitychange)
- [onvolumechange](components_ClusterNodeContainer._internal_.XMLDocument.md#onvolumechange)
- [onwaiting](components_ClusterNodeContainer._internal_.XMLDocument.md#onwaiting)
- [onwebkitanimationend](components_ClusterNodeContainer._internal_.XMLDocument.md#onwebkitanimationend)
- [onwebkitanimationiteration](components_ClusterNodeContainer._internal_.XMLDocument.md#onwebkitanimationiteration)
- [onwebkitanimationstart](components_ClusterNodeContainer._internal_.XMLDocument.md#onwebkitanimationstart)
- [onwebkittransitionend](components_ClusterNodeContainer._internal_.XMLDocument.md#onwebkittransitionend)
- [onwheel](components_ClusterNodeContainer._internal_.XMLDocument.md#onwheel)
- [ownerDocument](components_ClusterNodeContainer._internal_.XMLDocument.md#ownerdocument)
- [parentElement](components_ClusterNodeContainer._internal_.XMLDocument.md#parentelement)
- [parentNode](components_ClusterNodeContainer._internal_.XMLDocument.md#parentnode)
- [pictureInPictureElement](components_ClusterNodeContainer._internal_.XMLDocument.md#pictureinpictureelement)
- [pictureInPictureEnabled](components_ClusterNodeContainer._internal_.XMLDocument.md#pictureinpictureenabled)
- [plugins](components_ClusterNodeContainer._internal_.XMLDocument.md#plugins)
- [pointerLockElement](components_ClusterNodeContainer._internal_.XMLDocument.md#pointerlockelement)
- [previousSibling](components_ClusterNodeContainer._internal_.XMLDocument.md#previoussibling)
- [readyState](components_ClusterNodeContainer._internal_.XMLDocument.md#readystate)
- [referrer](components_ClusterNodeContainer._internal_.XMLDocument.md#referrer)
- [rootElement](components_ClusterNodeContainer._internal_.XMLDocument.md#rootelement)
- [scripts](components_ClusterNodeContainer._internal_.XMLDocument.md#scripts)
- [scrollingElement](components_ClusterNodeContainer._internal_.XMLDocument.md#scrollingelement)
- [styleSheets](components_ClusterNodeContainer._internal_.XMLDocument.md#stylesheets)
- [textContent](components_ClusterNodeContainer._internal_.XMLDocument.md#textcontent)
- [timeline](components_ClusterNodeContainer._internal_.XMLDocument.md#timeline)
- [title](components_ClusterNodeContainer._internal_.XMLDocument.md#title)
- [visibilityState](components_ClusterNodeContainer._internal_.XMLDocument.md#visibilitystate)
- [vlinkColor](components_ClusterNodeContainer._internal_.XMLDocument.md#vlinkcolor)

### Accessors

- [location](components_ClusterNodeContainer._internal_.XMLDocument.md#location)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.XMLDocument.md#addeventlistener)
- [adoptNode](components_ClusterNodeContainer._internal_.XMLDocument.md#adoptnode)
- [append](components_ClusterNodeContainer._internal_.XMLDocument.md#append)
- [appendChild](components_ClusterNodeContainer._internal_.XMLDocument.md#appendchild)
- [captureEvents](components_ClusterNodeContainer._internal_.XMLDocument.md#captureevents)
- [caretRangeFromPoint](components_ClusterNodeContainer._internal_.XMLDocument.md#caretrangefrompoint)
- [clear](components_ClusterNodeContainer._internal_.XMLDocument.md#clear)
- [cloneNode](components_ClusterNodeContainer._internal_.XMLDocument.md#clonenode)
- [close](components_ClusterNodeContainer._internal_.XMLDocument.md#close)
- [compareDocumentPosition](components_ClusterNodeContainer._internal_.XMLDocument.md#comparedocumentposition)
- [contains](components_ClusterNodeContainer._internal_.XMLDocument.md#contains)
- [createAttribute](components_ClusterNodeContainer._internal_.XMLDocument.md#createattribute)
- [createAttributeNS](components_ClusterNodeContainer._internal_.XMLDocument.md#createattributens)
- [createCDATASection](components_ClusterNodeContainer._internal_.XMLDocument.md#createcdatasection)
- [createComment](components_ClusterNodeContainer._internal_.XMLDocument.md#createcomment)
- [createDocumentFragment](components_ClusterNodeContainer._internal_.XMLDocument.md#createdocumentfragment)
- [createElement](components_ClusterNodeContainer._internal_.XMLDocument.md#createelement)
- [createElementNS](components_ClusterNodeContainer._internal_.XMLDocument.md#createelementns)
- [createEvent](components_ClusterNodeContainer._internal_.XMLDocument.md#createevent)
- [createExpression](components_ClusterNodeContainer._internal_.XMLDocument.md#createexpression)
- [createNSResolver](components_ClusterNodeContainer._internal_.XMLDocument.md#creatensresolver)
- [createNodeIterator](components_ClusterNodeContainer._internal_.XMLDocument.md#createnodeiterator)
- [createProcessingInstruction](components_ClusterNodeContainer._internal_.XMLDocument.md#createprocessinginstruction)
- [createRange](components_ClusterNodeContainer._internal_.XMLDocument.md#createrange)
- [createTextNode](components_ClusterNodeContainer._internal_.XMLDocument.md#createtextnode)
- [createTreeWalker](components_ClusterNodeContainer._internal_.XMLDocument.md#createtreewalker)
- [dispatchEvent](components_ClusterNodeContainer._internal_.XMLDocument.md#dispatchevent)
- [elementFromPoint](components_ClusterNodeContainer._internal_.XMLDocument.md#elementfrompoint)
- [elementsFromPoint](components_ClusterNodeContainer._internal_.XMLDocument.md#elementsfrompoint)
- [evaluate](components_ClusterNodeContainer._internal_.XMLDocument.md#evaluate)
- [execCommand](components_ClusterNodeContainer._internal_.XMLDocument.md#execcommand)
- [exitFullscreen](components_ClusterNodeContainer._internal_.XMLDocument.md#exitfullscreen)
- [exitPictureInPicture](components_ClusterNodeContainer._internal_.XMLDocument.md#exitpictureinpicture)
- [exitPointerLock](components_ClusterNodeContainer._internal_.XMLDocument.md#exitpointerlock)
- [getAnimations](components_ClusterNodeContainer._internal_.XMLDocument.md#getanimations)
- [getElementById](components_ClusterNodeContainer._internal_.XMLDocument.md#getelementbyid)
- [getElementsByClassName](components_ClusterNodeContainer._internal_.XMLDocument.md#getelementsbyclassname)
- [getElementsByName](components_ClusterNodeContainer._internal_.XMLDocument.md#getelementsbyname)
- [getElementsByTagName](components_ClusterNodeContainer._internal_.XMLDocument.md#getelementsbytagname)
- [getElementsByTagNameNS](components_ClusterNodeContainer._internal_.XMLDocument.md#getelementsbytagnamens)
- [getRootNode](components_ClusterNodeContainer._internal_.XMLDocument.md#getrootnode)
- [getSelection](components_ClusterNodeContainer._internal_.XMLDocument.md#getselection)
- [hasChildNodes](components_ClusterNodeContainer._internal_.XMLDocument.md#haschildnodes)
- [hasFocus](components_ClusterNodeContainer._internal_.XMLDocument.md#hasfocus)
- [hasStorageAccess](components_ClusterNodeContainer._internal_.XMLDocument.md#hasstorageaccess)
- [importNode](components_ClusterNodeContainer._internal_.XMLDocument.md#importnode)
- [insertBefore](components_ClusterNodeContainer._internal_.XMLDocument.md#insertbefore)
- [isDefaultNamespace](components_ClusterNodeContainer._internal_.XMLDocument.md#isdefaultnamespace)
- [isEqualNode](components_ClusterNodeContainer._internal_.XMLDocument.md#isequalnode)
- [isSameNode](components_ClusterNodeContainer._internal_.XMLDocument.md#issamenode)
- [lookupNamespaceURI](components_ClusterNodeContainer._internal_.XMLDocument.md#lookupnamespaceuri)
- [lookupPrefix](components_ClusterNodeContainer._internal_.XMLDocument.md#lookupprefix)
- [normalize](components_ClusterNodeContainer._internal_.XMLDocument.md#normalize)
- [open](components_ClusterNodeContainer._internal_.XMLDocument.md#open)
- [prepend](components_ClusterNodeContainer._internal_.XMLDocument.md#prepend)
- [queryCommandEnabled](components_ClusterNodeContainer._internal_.XMLDocument.md#querycommandenabled)
- [queryCommandIndeterm](components_ClusterNodeContainer._internal_.XMLDocument.md#querycommandindeterm)
- [queryCommandState](components_ClusterNodeContainer._internal_.XMLDocument.md#querycommandstate)
- [queryCommandSupported](components_ClusterNodeContainer._internal_.XMLDocument.md#querycommandsupported)
- [queryCommandValue](components_ClusterNodeContainer._internal_.XMLDocument.md#querycommandvalue)
- [querySelector](components_ClusterNodeContainer._internal_.XMLDocument.md#queryselector)
- [querySelectorAll](components_ClusterNodeContainer._internal_.XMLDocument.md#queryselectorall)
- [releaseEvents](components_ClusterNodeContainer._internal_.XMLDocument.md#releaseevents)
- [removeChild](components_ClusterNodeContainer._internal_.XMLDocument.md#removechild)
- [removeEventListener](components_ClusterNodeContainer._internal_.XMLDocument.md#removeeventlistener)
- [replaceChild](components_ClusterNodeContainer._internal_.XMLDocument.md#replacechild)
- [replaceChildren](components_ClusterNodeContainer._internal_.XMLDocument.md#replacechildren)
- [requestStorageAccess](components_ClusterNodeContainer._internal_.XMLDocument.md#requeststorageaccess)
- [write](components_ClusterNodeContainer._internal_.XMLDocument.md#write)
- [writeln](components_ClusterNodeContainer._internal_.XMLDocument.md#writeln)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Document.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9696

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Document.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9698

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Document.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9700

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Document.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9702

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Document.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9704

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9706

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9708

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Document.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9710

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Document.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Document.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9713

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Document.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9715

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Document.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9717

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Document.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9719

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Document.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Document.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9721

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Document.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9722

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Document.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9724

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Document.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9726

___

### URL

• `Readonly` **URL**: `string`

Sets or gets the URL for the current document.

#### Inherited from

Document.URL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4181

___

### activeElement

• `Readonly` **activeElement**: ``null`` \| `Element`

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

#### Inherited from

Document.activeElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4604

___

### alinkColor

• **alinkColor**: `string`

Sets or gets the color of all active links in the document.

**`deprecated`**

#### Inherited from

Document.alinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4186

___

### all

• `Readonly` **all**: [`HTMLAllCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlallcollection)

Returns a reference to the collection of elements contained by the object.

**`deprecated`**

#### Inherited from

Document.all

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4191

___

### anchors

• `Readonly` **anchors**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLAnchorElement`\>

Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.

**`deprecated`**

#### Inherited from

Document.anchors

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4196

___

### applets

• `Readonly` **applets**: [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

Retrieves a collection of all applet objects in the document.

**`deprecated`**

#### Inherited from

Document.applets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4201

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Document.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9649

___

### bgColor

• **bgColor**: `string`

Deprecated. Sets or retrieves a value that indicates the background color behind the object.

**`deprecated`**

#### Inherited from

Document.bgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4206

___

### body

• **body**: `HTMLElement`

Specifies the beginning and end of the document body.

#### Inherited from

Document.body

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4208

___

### characterSet

• `Readonly` **characterSet**: `string`

Returns document's encoding.

#### Inherited from

Document.characterSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4210

___

### charset

• `Readonly` **charset**: `string`

Gets or sets the character set used to encode the object.

**`deprecated`** This is a legacy alias of `characterSet`.

#### Inherited from

Document.charset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4215

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

Document.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10014

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Document.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9651

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

Document.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10016

___

### compatMode

• `Readonly` **compatMode**: `string`

Gets a value that indicates whether standards-compliant mode is switched on for the object.

#### Inherited from

Document.compatMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4217

___

### contentType

• `Readonly` **contentType**: `string`

Returns document's content type.

#### Inherited from

Document.contentType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4219

___

### cookie

• **cookie**: `string`

Returns the HTTP cookies that apply to the Document. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are sandboxed into a unique origin (e.g. in an iframe with the sandbox attribute), a "SecurityError" DOMException will be thrown on getting and setting.

#### Inherited from

Document.cookie

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4227

___

### currentScript

• `Readonly` **currentScript**: ``null`` \| [`HTMLOrSVGScriptElement`](../modules/components_ClusterNodeContainer._internal_.md#htmlorsvgscriptelement)

Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.

#### Inherited from

Document.currentScript

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4233

___

### defaultView

• `Readonly` **defaultView**: ``null`` \| `Window` & typeof `globalThis`

Returns the Window object of the active document.

#### Inherited from

Document.defaultView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4235

___

### designMode

• **designMode**: `string`

Sets or gets a value that indicates whether the document can be edited.

#### Inherited from

Document.designMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4237

___

### dir

• **dir**: `string`

Sets or retrieves a value that indicates the reading order of the object.

#### Inherited from

Document.dir

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4239

___

### doctype

• `Readonly` **doctype**: ``null`` \| [`DocumentType`](../modules/components_ClusterNodeContainer._internal_.md#documenttype)

Gets an object representing the document type declaration associated with the current document.

#### Inherited from

Document.doctype

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4241

___

### documentElement

• `Readonly` **documentElement**: `HTMLElement`

Gets a reference to the root node of the document.

#### Inherited from

Document.documentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4243

___

### documentURI

• `Readonly` **documentURI**: `string`

Returns document's URL.

#### Inherited from

Document.documentURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4245

___

### domain

• **domain**: `string`

Sets or gets the security domain of the document.

#### Inherited from

Document.domain

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4247

___

### embeds

• `Readonly` **embeds**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLEmbedElement`\>

Retrieves a collection of all embed objects in the document.

#### Inherited from

Document.embeds

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4249

___

### fgColor

• **fgColor**: `string`

Sets or gets the foreground (text) color of the document.

**`deprecated`**

#### Inherited from

Document.fgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4254

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Document.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9653

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| `Element`

Returns the first child that is an element, and null otherwise.

#### Inherited from

Document.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10018

___

### fonts

• `Readonly` **fonts**: [`FontFaceSet`](../modules/components_ClusterNodeContainer._internal_.md#fontfaceset)

#### Inherited from

Document.fonts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5195

___

### forms

• `Readonly` **forms**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLFormElement`\>

Retrieves a collection, in source order, of all form objects in the document.

#### Inherited from

Document.forms

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4256

___

### fullscreen

• `Readonly` **fullscreen**: `boolean`

**`deprecated`**

#### Inherited from

Document.fullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4258

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| `Element`

Returns document's fullscreen element.

#### Inherited from

Document.fullscreenElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4606

___

### fullscreenEnabled

• `Readonly` **fullscreenEnabled**: `boolean`

Returns true if document has the ability to display elements fullscreen and fullscreen is supported, or false otherwise.

#### Inherited from

Document.fullscreenEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4260

___

### head

• `Readonly` **head**: `HTMLHeadElement`

Returns the head element.

#### Inherited from

Document.head

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4262

___

### hidden

• `Readonly` **hidden**: `boolean`

#### Inherited from

Document.hidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4263

___

### images

• `Readonly` **images**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLImageElement`\>

Retrieves a collection, in source order, of img objects in the document.

#### Inherited from

Document.images

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4265

___

### implementation

• `Readonly` **implementation**: [`DOMImplementation`](../modules/components_ClusterNodeContainer._internal_.md#domimplementation)

Gets the implementation object of the current document.

#### Inherited from

Document.implementation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4267

___

### inputEncoding

• `Readonly` **inputEncoding**: `string`

Returns the character encoding used to create the webpage that is loaded into the document object.

**`deprecated`** This is a legacy alias of `characterSet`.

#### Inherited from

Document.inputEncoding

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4272

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Document.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9655

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Document.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9657

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| `Element`

Returns the last child that is an element, and null otherwise.

#### Inherited from

Document.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10020

___

### lastModified

• `Readonly` **lastModified**: `string`

Gets the date that the page was last modified, if the page supplies one.

#### Inherited from

Document.lastModified

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4274

___

### linkColor

• **linkColor**: `string`

Sets or gets the color of the document links.

**`deprecated`**

#### Inherited from

Document.linkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4279

___

### links

• `Readonly` **links**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLAnchorElement` \| `HTMLAreaElement`\>

Retrieves a collection of all a objects that specify the href property and all area objects in the document.

#### Inherited from

Document.links

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4281

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Document.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9659

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Document.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9661

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Document.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9663

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Document.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9664

___

### onabort

• **onabort**: ``null`` \| (`ev`: `UIEvent`) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

Document.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5454

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

Document.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5455

___

### onanimationend

• **onanimationend**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

Document.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5456

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

Document.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5457

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

Document.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5458

___

### onauxclick

• **onauxclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

Document.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5459

___

### onblur

• **onblur**: ``null`` \| (`ev`: `FocusEvent`) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

Document.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5464

___

### oncanplay

• **oncanplay**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

Document.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5469

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5470

___

### onchange

• **onchange**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

Document.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5475

___

### onclick

• **onclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

Document.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5480

___

### onclose

• **onclose**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5481

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

Document.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5486

___

### oncopy

• **oncopy**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

Document.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4576

___

### oncuechange

• **oncuechange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5487

___

### oncut

• **oncut**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

Document.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4577

___

### ondblclick

• **ondblclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

Document.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5492

___

### ondrag

• **ondrag**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

Document.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5497

___

### ondragend

• **ondragend**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

Document.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5502

___

### ondragenter

• **ondragenter**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

Document.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5507

___

### ondragleave

• **ondragleave**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

Document.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5512

___

### ondragover

• **ondragover**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

Document.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5517

___

### ondragstart

• **ondragstart**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

Document.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5522

___

### ondrop

• **ondrop**: ``null`` \| (`ev`: `DragEvent`) => `any`

#### Inherited from

Document.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5523

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

Document.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5528

___

### onemptied

• **onemptied**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

Document.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5533

___

### onended

• **onended**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

Document.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5538

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/components_ClusterNodeContainer._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

Document.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5543

___

### onfocus

• **onfocus**: ``null`` \| (`ev`: `FocusEvent`) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

Document.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### onformdata

• **onformdata**: ``null`` \| (`ev`: [`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)) => `any`

#### Inherited from

Document.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4285

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4286

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### oninput

• **oninput**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### oninvalid

• **oninvalid**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### onkeydown

• **onkeydown**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

Document.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### onkeypress

• **onkeypress**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

Document.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### onkeyup

• **onkeyup**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

Document.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### onload

• **onload**: ``null`` \| (`ev`: `Event`) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

Document.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

Document.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

Document.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### onloadstart

• **onloadstart**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

Document.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### onmousedown

• **onmousedown**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

Document.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

Document.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

Document.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### onmousemove

• **onmousemove**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

Document.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### onmouseout

• **onmouseout**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

Document.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### onmouseover

• **onmouseover**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

Document.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### onmouseup

• **onmouseup**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

Document.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### onpaste

• **onpaste**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

Document.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4578

___

### onpause

• **onpause**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

Document.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### onplay

• **onplay**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

Document.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### onplaying

• **onplaying**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

Document.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### onpointerlockchange

• **onpointerlockchange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onpointerlockchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4287

___

### onpointerlockerror

• **onpointerlockerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onpointerlockerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4288

___

### onpointermove

• **onpointermove**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### onpointerout

• **onpointerout**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### onpointerover

• **onpointerover**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### onpointerup

• **onpointerup**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

Document.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639

___

### onprogress

• **onprogress**: ``null`` \| (`ev`: `ProgressEvent`<`EventTarget`\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

Document.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5644

___

### onratechange

• **onratechange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

Document.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onreadystatechange

• **onreadystatechange**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the state of the object has changed.

**`param`** The event

#### Inherited from

Document.onreadystatechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4293

___

### onreset

• **onreset**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

Document.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5654

___

### onresize

• **onresize**: ``null`` \| (`ev`: `UIEvent`) => `any`

#### Inherited from

Document.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5655

___

### onscroll

• **onscroll**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

Document.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5660

___

### onseeked

• **onseeked**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

Document.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5665

___

### onseeking

• **onseeking**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

Document.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5670

___

### onselect

• **onselect**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

Document.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5675

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5676

___

### onselectstart

• **onselectstart**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5677

___

### onstalled

• **onstalled**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

Document.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5682

___

### onsubmit

• **onsubmit**: ``null`` \| (`ev`: [`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)) => `any`

#### Inherited from

Document.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5683

___

### onsuspend

• **onsuspend**: ``null`` \| (`ev`: `Event`) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

Document.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5688

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`ev`: `Event`) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

Document.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5693

___

### ontoggle

• **ontoggle**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5694

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

Document.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

Document.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5696

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

Document.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5697

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

Document.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5698

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

Document.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5699

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

Document.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

Document.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5701

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

Document.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5702

___

### onvisibilitychange

• **onvisibilitychange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

Document.onvisibilitychange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4294

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

Document.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5707

___

### onwaiting

• **onwaiting**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

Document.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5712

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

Document.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5714

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

Document.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

Document.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5718

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

Document.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5720

___

### onwheel

• **onwheel**: ``null`` \| (`ev`: `WheelEvent`) => `any`

#### Inherited from

Document.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null``

#### Inherited from

Document.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4295

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

#### Inherited from

Document.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9668

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](components_ClusterNodeContainer._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Document.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9670

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| `Element`

#### Inherited from

Document.pictureInPictureElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4607

___

### pictureInPictureEnabled

• `Readonly` **pictureInPictureEnabled**: `boolean`

#### Inherited from

Document.pictureInPictureEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4296

___

### plugins

• `Readonly` **plugins**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLEmbedElement`\>

Return an HTMLCollection of the embed elements in the Document.

#### Inherited from

Document.plugins

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4298

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| `Element`

#### Inherited from

Document.pointerLockElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4608

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Document.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9672

___

### readyState

• `Readonly` **readyState**: [`DocumentReadyState`](../modules/components_ClusterNodeContainer._internal_.md#documentreadystate)

Retrieves a value that indicates the current state of the object.

#### Inherited from

Document.readyState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4300

___

### referrer

• `Readonly` **referrer**: `string`

Gets the URL of the location that referred the user to the current page.

#### Inherited from

Document.referrer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4302

___

### rootElement

• `Readonly` **rootElement**: ``null`` \| `SVGSVGElement`

**`deprecated`**

#### Inherited from

Document.rootElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4304

___

### scripts

• `Readonly` **scripts**: [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLScriptElement`\>

Retrieves a collection of all script objects in the document.

#### Inherited from

Document.scripts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4306

___

### scrollingElement

• `Readonly` **scrollingElement**: ``null`` \| `Element`

#### Inherited from

Document.scrollingElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4307

___

### styleSheets

• `Readonly` **styleSheets**: [`StyleSheetList`](../modules/components_ClusterNodeContainer._internal_.md#stylesheetlist)

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

#### Inherited from

Document.styleSheets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4610

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Document.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9673

___

### timeline

• `Readonly` **timeline**: [`DocumentTimeline`](../modules/components_ClusterNodeContainer._internal_.md#documenttimeline)

#### Inherited from

Document.timeline

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4308

___

### title

• **title**: `string`

Contains the title of the document.

#### Inherited from

Document.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4310

___

### visibilityState

• `Readonly` **visibilityState**: [`VisibilityState`](../modules/components_ClusterNodeContainer._internal_.md#visibilitystate)

#### Inherited from

Document.visibilityState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4311

___

### vlinkColor

• **vlinkColor**: `string`

Sets or gets the color of the links that the user has visited.

**`deprecated`**

#### Inherited from

Document.vlinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4316

## Accessors

### location

• `get` **location**(): [`Location`](../modules/components_ClusterNodeContainer._internal_.md#location)

Contains information about the current URL.

#### Returns

[`Location`](../modules/components_ClusterNodeContainer._internal_.md#location)

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4283

• `set` **location**(`href`): `void`

Contains information about the current URL.

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` \| [`Location`](../modules/components_ClusterNodeContainer._internal_.md#location) |

#### Returns

`void`

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4284

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentEventMap`](components_ClusterNodeContainer._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`DocumentEventMap`](components_ClusterNodeContainer._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16396

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16397

___

### adoptNode

▸ **adoptNode**<`T`\>(`node`): `T`

Moves node from another document and returns it.

If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a "HierarchyRequestError" DOMException.

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

Document.adoptNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4322

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Document.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10026

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

Document.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9674

___

### captureEvents

▸ **captureEvents**(): `void`

**`deprecated`**

#### Returns

`void`

#### Inherited from

Document.captureEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4324

___

### caretRangeFromPoint

▸ **caretRangeFromPoint**(`x`, `y`): ``null`` \| [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Inherited from

Document.caretRangeFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4326

___

### clear

▸ **clear**(): `void`

**`deprecated`**

#### Returns

`void`

#### Inherited from

Document.clear

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4328

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

Document.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9676

___

### close

▸ **close**(): `void`

Closes an output stream and forces the sent data to display.

#### Returns

`void`

#### Inherited from

Document.close

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4330

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

Document.compareDocumentPosition

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

Document.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9680

___

### createAttribute

▸ **createAttribute**(`localName`): [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

Creates an attribute object with a specified name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `localName` | `string` |

#### Returns

[`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

Document.createAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4335

___

### createAttributeNS

▸ **createAttributeNS**(`namespace`, `qualifiedName`): [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |

#### Returns

[`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

Document.createAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4336

___

### createCDATASection

▸ **createCDATASection**(`data`): [`CDATASection`](../modules/components_ClusterNodeContainer._internal_.md#cdatasection)

Returns a CDATASection node whose data is data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`CDATASection`](../modules/components_ClusterNodeContainer._internal_.md#cdatasection)

#### Inherited from

Document.createCDATASection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4338

___

### createComment

▸ **createComment**(`data`): [`Comment`](../modules/components_ClusterNodeContainer._internal_.md#comment)

Creates a comment object with the specified data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Sets the comment object's data. |

#### Returns

[`Comment`](../modules/components_ClusterNodeContainer._internal_.md#comment)

#### Inherited from

Document.createComment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4343

___

### createDocumentFragment

▸ **createDocumentFragment**(): `DocumentFragment`

Creates a new document.

#### Returns

`DocumentFragment`

#### Inherited from

Document.createDocumentFragment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4345

___

### createElement

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

Creates an instance of the element for the specified tag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `K` | The name of an element. |
| `options?` | [`ElementCreationOptions`](components_ClusterNodeContainer._internal_.ElementCreationOptions.md) | - |

#### Returns

[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4350

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementDeprecatedTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

**`deprecated`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementDeprecatedTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementDeprecatedTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `K` |
| `options?` | [`ElementCreationOptions`](components_ClusterNodeContainer._internal_.ElementCreationOptions.md) |

#### Returns

[`HTMLElementDeprecatedTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4352

▸ **createElement**(`tagName`, `options?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `options?` | [`ElementCreationOptions`](components_ClusterNodeContainer._internal_.ElementCreationOptions.md) |

#### Returns

`HTMLElement`

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4353

___

### createElementNS

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): `HTMLElement`

Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after ":" (U+003E) in qualifiedName or qualifiedName.

If localName does not match the Name production an "InvalidCharacterError" DOMException will be thrown.

If one of the following conditions is true a "NamespaceError" DOMException will be thrown:

localName does not match the QName production.
Namespace prefix is not null and namespace is the empty string.
Namespace prefix is "xml" and namespace is not the XML namespace.
qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
namespace is the XMLNS namespace and neither qualifiedName nor namespace prefix is "xmlns".

When supplied, options's is can be used to create a customized built-in element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `qualifiedName` | `string` |

#### Returns

`HTMLElement`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4369

▸ **createElementNS**<`K`\>(`namespaceURI`, `qualifiedName`): [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `K` |

#### Returns

[`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4370

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): `SVGElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `string` |

#### Returns

`SVGElement`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4371

▸ **createElementNS**(`namespaceURI`, `qualifiedName`, `options?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | [`ElementCreationOptions`](components_ClusterNodeContainer._internal_.ElementCreationOptions.md) |

#### Returns

`Element`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4372

▸ **createElementNS**(`namespace`, `qualifiedName`, `options?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | `string` \| [`ElementCreationOptions`](components_ClusterNodeContainer._internal_.ElementCreationOptions.md) |

#### Returns

`Element`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4373

___

### createEvent

▸ **createEvent**(`eventInterface`): `AnimationEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationEvent"`` |

#### Returns

`AnimationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4374

▸ **createEvent**(`eventInterface`): [`AnimationPlaybackEvent`](../modules/components_ClusterNodeContainer._internal_.md#animationplaybackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationPlaybackEvent"`` |

#### Returns

[`AnimationPlaybackEvent`](../modules/components_ClusterNodeContainer._internal_.md#animationplaybackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4375

▸ **createEvent**(`eventInterface`): [`AudioProcessingEvent`](../modules/components_ClusterNodeContainer._internal_.md#audioprocessingevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AudioProcessingEvent"`` |

#### Returns

[`AudioProcessingEvent`](../modules/components_ClusterNodeContainer._internal_.md#audioprocessingevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4376

▸ **createEvent**(`eventInterface`): [`BeforeUnloadEvent`](../modules/components_ClusterNodeContainer._internal_.md#beforeunloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BeforeUnloadEvent"`` |

#### Returns

[`BeforeUnloadEvent`](../modules/components_ClusterNodeContainer._internal_.md#beforeunloadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4377

▸ **createEvent**(`eventInterface`): [`BlobEvent`](../modules/components_ClusterNodeContainer._internal_.md#blobevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BlobEvent"`` |

#### Returns

[`BlobEvent`](../modules/components_ClusterNodeContainer._internal_.md#blobevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4378

▸ **createEvent**(`eventInterface`): `ClipboardEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ClipboardEvent"`` |

#### Returns

`ClipboardEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4379

▸ **createEvent**(`eventInterface`): [`CloseEvent`](../modules/components_ClusterNodeContainer._internal_.md#closeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CloseEvent"`` |

#### Returns

[`CloseEvent`](../modules/components_ClusterNodeContainer._internal_.md#closeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4380

▸ **createEvent**(`eventInterface`): `CompositionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CompositionEvent"`` |

#### Returns

`CompositionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4381

▸ **createEvent**(`eventInterface`): [`CustomEvent`](../modules/components_ClusterNodeContainer._internal_.md#customevent)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CustomEvent"`` |

#### Returns

[`CustomEvent`](../modules/components_ClusterNodeContainer._internal_.md#customevent)<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4382

▸ **createEvent**(`eventInterface`): [`DeviceMotionEvent`](../modules/components_ClusterNodeContainer._internal_.md#devicemotionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceMotionEvent"`` |

#### Returns

[`DeviceMotionEvent`](../modules/components_ClusterNodeContainer._internal_.md#devicemotionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4383

▸ **createEvent**(`eventInterface`): [`DeviceOrientationEvent`](../modules/components_ClusterNodeContainer._internal_.md#deviceorientationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceOrientationEvent"`` |

#### Returns

[`DeviceOrientationEvent`](../modules/components_ClusterNodeContainer._internal_.md#deviceorientationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4384

▸ **createEvent**(`eventInterface`): `DragEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DragEvent"`` |

#### Returns

`DragEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4385

▸ **createEvent**(`eventInterface`): [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ErrorEvent"`` |

#### Returns

[`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4386

▸ **createEvent**(`eventInterface`): `FocusEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FocusEvent"`` |

#### Returns

`FocusEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4387

▸ **createEvent**(`eventInterface`): [`FontFaceSetLoadEvent`](../modules/components_ClusterNodeContainer._internal_.md#fontfacesetloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FontFaceSetLoadEvent"`` |

#### Returns

[`FontFaceSetLoadEvent`](../modules/components_ClusterNodeContainer._internal_.md#fontfacesetloadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4388

▸ **createEvent**(`eventInterface`): [`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FormDataEvent"`` |

#### Returns

[`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4389

▸ **createEvent**(`eventInterface`): [`GamepadEvent`](../modules/components_ClusterNodeContainer._internal_.md#gamepadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"GamepadEvent"`` |

#### Returns

[`GamepadEvent`](../modules/components_ClusterNodeContainer._internal_.md#gamepadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4390

▸ **createEvent**(`eventInterface`): [`HashChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#hashchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"HashChangeEvent"`` |

#### Returns

[`HashChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#hashchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4391

▸ **createEvent**(`eventInterface`): [`IDBVersionChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#idbversionchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"IDBVersionChangeEvent"`` |

#### Returns

[`IDBVersionChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#idbversionchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4392

▸ **createEvent**(`eventInterface`): [`InputEvent`](../modules/components_ClusterNodeContainer._internal_.md#inputevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"InputEvent"`` |

#### Returns

[`InputEvent`](../modules/components_ClusterNodeContainer._internal_.md#inputevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4393

▸ **createEvent**(`eventInterface`): `KeyboardEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"KeyboardEvent"`` |

#### Returns

`KeyboardEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4394

▸ **createEvent**(`eventInterface`): [`MediaEncryptedEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaencryptedevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaEncryptedEvent"`` |

#### Returns

[`MediaEncryptedEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaencryptedevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4395

▸ **createEvent**(`eventInterface`): [`MediaKeyMessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediakeymessageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaKeyMessageEvent"`` |

#### Returns

[`MediaKeyMessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediakeymessageevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4396

▸ **createEvent**(`eventInterface`): [`MediaQueryListEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaquerylistevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaQueryListEvent"`` |

#### Returns

[`MediaQueryListEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediaquerylistevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4397

▸ **createEvent**(`eventInterface`): [`MediaRecorderErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediarecordererrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaRecorderErrorEvent"`` |

#### Returns

[`MediaRecorderErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediarecordererrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4398

▸ **createEvent**(`eventInterface`): [`MediaStreamTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaStreamTrackEvent"`` |

#### Returns

[`MediaStreamTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4399

▸ **createEvent**(`eventInterface`): [`MessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#messageevent)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MessageEvent"`` |

#### Returns

[`MessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#messageevent)<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4400

▸ **createEvent**(`eventInterface`): `MouseEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvent"`` |

#### Returns

`MouseEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4401

▸ **createEvent**(`eventInterface`): `MouseEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvents"`` |

#### Returns

`MouseEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4402

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/components_ClusterNodeContainer._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvent"`` |

#### Returns

[`MutationEvent`](../modules/components_ClusterNodeContainer._internal_.md#mutationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4403

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/components_ClusterNodeContainer._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvents"`` |

#### Returns

[`MutationEvent`](../modules/components_ClusterNodeContainer._internal_.md#mutationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4404

▸ **createEvent**(`eventInterface`): [`OfflineAudioCompletionEvent`](../modules/components_ClusterNodeContainer._internal_.md#offlineaudiocompletionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"OfflineAudioCompletionEvent"`` |

#### Returns

[`OfflineAudioCompletionEvent`](../modules/components_ClusterNodeContainer._internal_.md#offlineaudiocompletionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4405

▸ **createEvent**(`eventInterface`): [`PageTransitionEvent`](../modules/components_ClusterNodeContainer._internal_.md#pagetransitionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PageTransitionEvent"`` |

#### Returns

[`PageTransitionEvent`](../modules/components_ClusterNodeContainer._internal_.md#pagetransitionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4406

▸ **createEvent**(`eventInterface`): [`PaymentMethodChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#paymentmethodchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentMethodChangeEvent"`` |

#### Returns

[`PaymentMethodChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#paymentmethodchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4407

▸ **createEvent**(`eventInterface`): [`PaymentRequestUpdateEvent`](../modules/components_ClusterNodeContainer._internal_.md#paymentrequestupdateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentRequestUpdateEvent"`` |

#### Returns

[`PaymentRequestUpdateEvent`](../modules/components_ClusterNodeContainer._internal_.md#paymentrequestupdateevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4408

▸ **createEvent**(`eventInterface`): `PointerEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PointerEvent"`` |

#### Returns

`PointerEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4409

▸ **createEvent**(`eventInterface`): [`PopStateEvent`](../modules/components_ClusterNodeContainer._internal_.md#popstateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PopStateEvent"`` |

#### Returns

[`PopStateEvent`](../modules/components_ClusterNodeContainer._internal_.md#popstateevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4410

▸ **createEvent**(`eventInterface`): `ProgressEvent`<`EventTarget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ProgressEvent"`` |

#### Returns

`ProgressEvent`<`EventTarget`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4411

▸ **createEvent**(`eventInterface`): [`PromiseRejectionEvent`](../modules/components_ClusterNodeContainer._internal_.md#promiserejectionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PromiseRejectionEvent"`` |

#### Returns

[`PromiseRejectionEvent`](../modules/components_ClusterNodeContainer._internal_.md#promiserejectionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4412

▸ **createEvent**(`eventInterface`): [`RTCDTMFToneChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtmftonechangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDTMFToneChangeEvent"`` |

#### Returns

[`RTCDTMFToneChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtmftonechangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4413

▸ **createEvent**(`eventInterface`): [`RTCDataChannelEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcdatachannelevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDataChannelEvent"`` |

#### Returns

[`RTCDataChannelEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcdatachannelevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4414

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcpeerconnectioniceerrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceErrorEvent"`` |

#### Returns

[`RTCPeerConnectionIceErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcpeerconnectioniceerrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4415

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcpeerconnectioniceevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceEvent"`` |

#### Returns

[`RTCPeerConnectionIceEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcpeerconnectioniceevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4416

▸ **createEvent**(`eventInterface`): [`RTCTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtctrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCTrackEvent"`` |

#### Returns

[`RTCTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtctrackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4417

▸ **createEvent**(`eventInterface`): [`SecurityPolicyViolationEvent`](../modules/components_ClusterNodeContainer._internal_.md#securitypolicyviolationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SecurityPolicyViolationEvent"`` |

#### Returns

[`SecurityPolicyViolationEvent`](../modules/components_ClusterNodeContainer._internal_.md#securitypolicyviolationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4418

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesiserrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisErrorEvent"`` |

#### Returns

[`SpeechSynthesisErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesiserrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4419

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisEvent"`` |

#### Returns

[`SpeechSynthesisEvent`](../modules/components_ClusterNodeContainer._internal_.md#speechsynthesisevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4420

▸ **createEvent**(`eventInterface`): [`StorageEvent`](../modules/components_ClusterNodeContainer._internal_.md#storageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"StorageEvent"`` |

#### Returns

[`StorageEvent`](../modules/components_ClusterNodeContainer._internal_.md#storageevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4421

▸ **createEvent**(`eventInterface`): [`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SubmitEvent"`` |

#### Returns

[`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4422

▸ **createEvent**(`eventInterface`): `TouchEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TouchEvent"`` |

#### Returns

`TouchEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4423

▸ **createEvent**(`eventInterface`): [`TrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#trackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TrackEvent"`` |

#### Returns

[`TrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#trackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4424

▸ **createEvent**(`eventInterface`): `TransitionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TransitionEvent"`` |

#### Returns

`TransitionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4425

▸ **createEvent**(`eventInterface`): `UIEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvent"`` |

#### Returns

`UIEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4426

▸ **createEvent**(`eventInterface`): `UIEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvents"`` |

#### Returns

`UIEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4427

▸ **createEvent**(`eventInterface`): [`WebGLContextEvent`](../modules/components_ClusterNodeContainer._internal_.md#webglcontextevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WebGLContextEvent"`` |

#### Returns

[`WebGLContextEvent`](../modules/components_ClusterNodeContainer._internal_.md#webglcontextevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4428

▸ **createEvent**(`eventInterface`): `WheelEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WheelEvent"`` |

#### Returns

`WheelEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4429

▸ **createEvent**(`eventInterface`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | `string` |

#### Returns

`Event`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4430

___

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/components_ClusterNodeContainer._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/components_ClusterNodeContainer._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/components_ClusterNodeContainer._internal_.md#xpathexpression)

#### Inherited from

Document.createExpression

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16576

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/components_ClusterNodeContainer._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/components_ClusterNodeContainer._internal_.md#xpathnsresolver)

#### Inherited from

Document.createNSResolver

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16577

___

### createNodeIterator

▸ **createNodeIterator**(`root`, `whatToShow?`, `filter?`): [`NodeIterator`](../modules/components_ClusterNodeContainer._internal_.md#nodeiterator)

Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/components_ClusterNodeContainer._internal_.md#nodefilter) | A custom NodeFilter function to use. For more information, see filter. Use null for no filter. |

#### Returns

[`NodeIterator`](../modules/components_ClusterNodeContainer._internal_.md#nodeiterator)

#### Inherited from

Document.createNodeIterator

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4437

___

### createProcessingInstruction

▸ **createProcessingInstruction**(`target`, `data`): [`ProcessingInstruction`](../modules/components_ClusterNodeContainer._internal_.md#processinginstruction)

Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `data` | `string` |

#### Returns

[`ProcessingInstruction`](../modules/components_ClusterNodeContainer._internal_.md#processinginstruction)

#### Inherited from

Document.createProcessingInstruction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4439

___

### createRange

▸ **createRange**(): [`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

Returns an empty range object that has both of its boundary points positioned at the beginning of the document.

#### Returns

[`Range`](../modules/components_ClusterNodeContainer._internal_.md#range)

#### Inherited from

Document.createRange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4441

___

### createTextNode

▸ **createTextNode**(`data`): `Text`

Creates a text string from the specified value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | String that specifies the nodeValue property of the text node. |

#### Returns

`Text`

#### Inherited from

Document.createTextNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4446

___

### createTreeWalker

▸ **createTreeWalker**(`root`, `whatToShow?`, `filter?`): [`TreeWalker`](../modules/components_ClusterNodeContainer._internal_.md#treewalker)

Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list. For more information, see whatToShow. |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/components_ClusterNodeContainer._internal_.md#nodefilter) | A custom NodeFilter function to use. |

#### Returns

[`TreeWalker`](../modules/components_ClusterNodeContainer._internal_.md#treewalker)

#### Inherited from

Document.createTreeWalker

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4453

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

Document.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

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

#### Inherited from

Document.elementFromPoint

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

#### Inherited from

Document.elementsFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4617

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/components_ClusterNodeContainer._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/components_ClusterNodeContainer._internal_.md#xpathresult)

#### Inherited from

Document.evaluate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16578

___

### execCommand

▸ **execCommand**(`commandId`, `showUI?`, `value?`): `boolean`

Executes a command on the current document, current selection, or the given range.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script. |
| `showUI?` | `boolean` | Display the user interface, defaults to false. |
| `value?` | `string` | Value to assign. |

#### Returns

`boolean`

#### Inherited from

Document.execCommand

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4461

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`void`\>

Stops document's fullscreen element from being displayed fullscreen and resolves promise when done.

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.exitFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4463

___

### exitPictureInPicture

▸ **exitPictureInPicture**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.exitPictureInPicture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4464

___

### exitPointerLock

▸ **exitPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

Document.exitPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4465

___

### getAnimations

▸ **getAnimations**(): [`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Returns

[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Inherited from

Document.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4618

___

### getElementById

▸ **getElementById**(`elementId`): ``null`` \| `HTMLElement`

Returns a reference to the first object with the specified value of the ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | String that specifies the ID value. |

#### Returns

``null`` \| `HTMLElement`

#### Inherited from

Document.getElementById

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4470

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Inherited from

Document.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4472

___

### getElementsByName

▸ **getElementsByName**(`elementName`): [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<`HTMLElement`\>

Gets a collection of objects based on the value of the NAME or ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementName` | `string` | Gets a collection of objects based on the value of the NAME or ID attribute. |

#### Returns

[`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<`HTMLElement`\>

#### Inherited from

Document.getElementsByName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4477

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]\>

Retrieves a collection of objects based on the specified element name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4482

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<[`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<[`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4483

▸ **getElementsByTagName**(`qualifiedName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4484

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLElement`\>

If namespace and localName are "*" returns a HTMLCollection of all descendant elements.

If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.

If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.

Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLElement`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4494

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`SVGElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`SVGElement`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4495

▸ **getElementsByTagNameNS**(`namespace`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4496

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

Document.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9682

___

### getSelection

▸ **getSelection**(): ``null`` \| [`Selection`](../modules/components_ClusterNodeContainer._internal_.md#selection)

Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.

#### Returns

``null`` \| [`Selection`](../modules/components_ClusterNodeContainer._internal_.md#selection)

#### Inherited from

Document.getSelection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4498

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Document.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9684

___

### hasFocus

▸ **hasFocus**(): `boolean`

Gets a value indicating whether the object currently has focus.

#### Returns

`boolean`

#### Inherited from

Document.hasFocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4500

___

### hasStorageAccess

▸ **hasStorageAccess**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

Document.hasStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4501

___

### importNode

▸ **importNode**<`T`\>(`node`, `deep?`): `T`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

If node is a document or a shadow root, throws a "NotSupportedError" DOMException.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `deep?` | `boolean` |

#### Returns

`T`

#### Inherited from

Document.importNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4507

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

Document.insertBefore

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

Document.isDefaultNamespace

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

Document.isEqualNode

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

Document.isSameNode

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

Document.lookupNamespaceURI

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

Document.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9691

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Document.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9693

___

### open

▸ **open**(`unused1?`, `unused2?`): `Document`

Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unused1?` | `string` |
| `unused2?` | `string` |

#### Returns

`Document`

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4515

▸ **open**(`url`, `name`, `features`): ``null`` \| `Window`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](../modules/components_ClusterNodeContainer._internal_.md#url) |
| `name` | `string` |
| `features` | `string` |

#### Returns

``null`` \| `Window`

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4516

___

### prepend

▸ **prepend**(...`nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Document.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10032

___

### queryCommandEnabled

▸ **queryCommandEnabled**(`commandId`): `boolean`

Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4522

___

### queryCommandIndeterm

▸ **queryCommandIndeterm**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the specified command is in the indeterminate state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandIndeterm

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4527

___

### queryCommandState

▸ **queryCommandState**(`commandId`): `boolean`

Returns a Boolean value that indicates the current state of the command.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4533

___

### queryCommandSupported

▸ **queryCommandSupported**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the current command is supported on the current range.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandSupported

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4539

___

### queryCommandValue

▸ **queryCommandValue**(`commandId`): `string`

Returns the current value of the document, range, or current selection for the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`string`

#### Inherited from

Document.queryCommandValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4544

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10034

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10035

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10036

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10038

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10039

▸ **querySelectorAll**<`E`\>(`selectors`): [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

[`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<`E`\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10040

___

### releaseEvents

▸ **releaseEvents**(): `void`

**`deprecated`**

#### Returns

`void`

#### Inherited from

Document.releaseEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4546

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

Document.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9694

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentEventMap`](components_ClusterNodeContainer._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`DocumentEventMap`](components_ClusterNodeContainer._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16398

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16399

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

Document.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9695

___

### replaceChildren

▸ **replaceChildren**(...`nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Document.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### requestStorageAccess

▸ **requestStorageAccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.requestStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4547

___

### write

▸ **write**(...`text`): `void`

Writes one or more HTML expressions to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.write

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4552

___

### writeln

▸ **writeln**(...`text`): `void`

Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.writeln

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4557
