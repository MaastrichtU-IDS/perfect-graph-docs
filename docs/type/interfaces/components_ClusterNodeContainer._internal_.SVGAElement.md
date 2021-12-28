[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SVGAElement

# Interface: SVGAElement

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SVGAElement

Provides access to the properties of <a> element, as well as methods to manipulate them.

## Hierarchy

- [`SVGGraphicsElement`](../modules/components_ClusterNodeContainer._internal_.md#svggraphicselement)

- [`SVGURIReference`](components_ClusterNodeContainer._internal_.SVGURIReference.md)

  ↳ **`SVGAElement`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#cdata_section_node)
- [COMMENT\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#document_fragment_node)
- [DOCUMENT\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](components_ClusterNodeContainer._internal_.SVGAElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#document_type_node)
- [ELEMENT\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#element_node)
- [ENTITY\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#entity_reference_node)
- [NOTATION\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#processing_instruction_node)
- [TEXT\_NODE](components_ClusterNodeContainer._internal_.SVGAElement.md#text_node)
- [ariaAtomic](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaatomic)
- [ariaAutoComplete](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaautocomplete)
- [ariaBusy](components_ClusterNodeContainer._internal_.SVGAElement.md#ariabusy)
- [ariaChecked](components_ClusterNodeContainer._internal_.SVGAElement.md#ariachecked)
- [ariaColCount](components_ClusterNodeContainer._internal_.SVGAElement.md#ariacolcount)
- [ariaColIndex](components_ClusterNodeContainer._internal_.SVGAElement.md#ariacolindex)
- [ariaColSpan](components_ClusterNodeContainer._internal_.SVGAElement.md#ariacolspan)
- [ariaCurrent](components_ClusterNodeContainer._internal_.SVGAElement.md#ariacurrent)
- [ariaDisabled](components_ClusterNodeContainer._internal_.SVGAElement.md#ariadisabled)
- [ariaExpanded](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaexpanded)
- [ariaHasPopup](components_ClusterNodeContainer._internal_.SVGAElement.md#ariahaspopup)
- [ariaHidden](components_ClusterNodeContainer._internal_.SVGAElement.md#ariahidden)
- [ariaKeyShortcuts](components_ClusterNodeContainer._internal_.SVGAElement.md#ariakeyshortcuts)
- [ariaLabel](components_ClusterNodeContainer._internal_.SVGAElement.md#arialabel)
- [ariaLevel](components_ClusterNodeContainer._internal_.SVGAElement.md#arialevel)
- [ariaLive](components_ClusterNodeContainer._internal_.SVGAElement.md#arialive)
- [ariaModal](components_ClusterNodeContainer._internal_.SVGAElement.md#ariamodal)
- [ariaMultiLine](components_ClusterNodeContainer._internal_.SVGAElement.md#ariamultiline)
- [ariaMultiSelectable](components_ClusterNodeContainer._internal_.SVGAElement.md#ariamultiselectable)
- [ariaOrientation](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaorientation)
- [ariaPlaceholder](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaplaceholder)
- [ariaPosInSet](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaposinset)
- [ariaPressed](components_ClusterNodeContainer._internal_.SVGAElement.md#ariapressed)
- [ariaReadOnly](components_ClusterNodeContainer._internal_.SVGAElement.md#ariareadonly)
- [ariaRequired](components_ClusterNodeContainer._internal_.SVGAElement.md#ariarequired)
- [ariaRoleDescription](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaroledescription)
- [ariaRowCount](components_ClusterNodeContainer._internal_.SVGAElement.md#ariarowcount)
- [ariaRowIndex](components_ClusterNodeContainer._internal_.SVGAElement.md#ariarowindex)
- [ariaRowSpan](components_ClusterNodeContainer._internal_.SVGAElement.md#ariarowspan)
- [ariaSelected](components_ClusterNodeContainer._internal_.SVGAElement.md#ariaselected)
- [ariaSetSize](components_ClusterNodeContainer._internal_.SVGAElement.md#ariasetsize)
- [ariaSort](components_ClusterNodeContainer._internal_.SVGAElement.md#ariasort)
- [ariaValueMax](components_ClusterNodeContainer._internal_.SVGAElement.md#ariavaluemax)
- [ariaValueMin](components_ClusterNodeContainer._internal_.SVGAElement.md#ariavaluemin)
- [ariaValueNow](components_ClusterNodeContainer._internal_.SVGAElement.md#ariavaluenow)
- [ariaValueText](components_ClusterNodeContainer._internal_.SVGAElement.md#ariavaluetext)
- [assignedSlot](components_ClusterNodeContainer._internal_.SVGAElement.md#assignedslot)
- [attributes](components_ClusterNodeContainer._internal_.SVGAElement.md#attributes)
- [autofocus](components_ClusterNodeContainer._internal_.SVGAElement.md#autofocus)
- [baseURI](components_ClusterNodeContainer._internal_.SVGAElement.md#baseuri)
- [childElementCount](components_ClusterNodeContainer._internal_.SVGAElement.md#childelementcount)
- [childNodes](components_ClusterNodeContainer._internal_.SVGAElement.md#childnodes)
- [children](components_ClusterNodeContainer._internal_.SVGAElement.md#children)
- [classList](components_ClusterNodeContainer._internal_.SVGAElement.md#classlist)
- [className](components_ClusterNodeContainer._internal_.SVGAElement.md#classname)
- [clientHeight](components_ClusterNodeContainer._internal_.SVGAElement.md#clientheight)
- [clientLeft](components_ClusterNodeContainer._internal_.SVGAElement.md#clientleft)
- [clientTop](components_ClusterNodeContainer._internal_.SVGAElement.md#clienttop)
- [clientWidth](components_ClusterNodeContainer._internal_.SVGAElement.md#clientwidth)
- [dataset](components_ClusterNodeContainer._internal_.SVGAElement.md#dataset)
- [firstChild](components_ClusterNodeContainer._internal_.SVGAElement.md#firstchild)
- [firstElementChild](components_ClusterNodeContainer._internal_.SVGAElement.md#firstelementchild)
- [href](components_ClusterNodeContainer._internal_.SVGAElement.md#href)
- [id](components_ClusterNodeContainer._internal_.SVGAElement.md#id)
- [innerHTML](components_ClusterNodeContainer._internal_.SVGAElement.md#innerhtml)
- [isConnected](components_ClusterNodeContainer._internal_.SVGAElement.md#isconnected)
- [lastChild](components_ClusterNodeContainer._internal_.SVGAElement.md#lastchild)
- [lastElementChild](components_ClusterNodeContainer._internal_.SVGAElement.md#lastelementchild)
- [localName](components_ClusterNodeContainer._internal_.SVGAElement.md#localname)
- [namespaceURI](components_ClusterNodeContainer._internal_.SVGAElement.md#namespaceuri)
- [nextElementSibling](components_ClusterNodeContainer._internal_.SVGAElement.md#nextelementsibling)
- [nextSibling](components_ClusterNodeContainer._internal_.SVGAElement.md#nextsibling)
- [nodeName](components_ClusterNodeContainer._internal_.SVGAElement.md#nodename)
- [nodeType](components_ClusterNodeContainer._internal_.SVGAElement.md#nodetype)
- [nodeValue](components_ClusterNodeContainer._internal_.SVGAElement.md#nodevalue)
- [nonce](components_ClusterNodeContainer._internal_.SVGAElement.md#nonce)
- [onabort](components_ClusterNodeContainer._internal_.SVGAElement.md#onabort)
- [onanimationcancel](components_ClusterNodeContainer._internal_.SVGAElement.md#onanimationcancel)
- [onanimationend](components_ClusterNodeContainer._internal_.SVGAElement.md#onanimationend)
- [onanimationiteration](components_ClusterNodeContainer._internal_.SVGAElement.md#onanimationiteration)
- [onanimationstart](components_ClusterNodeContainer._internal_.SVGAElement.md#onanimationstart)
- [onauxclick](components_ClusterNodeContainer._internal_.SVGAElement.md#onauxclick)
- [onblur](components_ClusterNodeContainer._internal_.SVGAElement.md#onblur)
- [oncanplay](components_ClusterNodeContainer._internal_.SVGAElement.md#oncanplay)
- [oncanplaythrough](components_ClusterNodeContainer._internal_.SVGAElement.md#oncanplaythrough)
- [onchange](components_ClusterNodeContainer._internal_.SVGAElement.md#onchange)
- [onclick](components_ClusterNodeContainer._internal_.SVGAElement.md#onclick)
- [onclose](components_ClusterNodeContainer._internal_.SVGAElement.md#onclose)
- [oncontextmenu](components_ClusterNodeContainer._internal_.SVGAElement.md#oncontextmenu)
- [oncopy](components_ClusterNodeContainer._internal_.SVGAElement.md#oncopy)
- [oncuechange](components_ClusterNodeContainer._internal_.SVGAElement.md#oncuechange)
- [oncut](components_ClusterNodeContainer._internal_.SVGAElement.md#oncut)
- [ondblclick](components_ClusterNodeContainer._internal_.SVGAElement.md#ondblclick)
- [ondrag](components_ClusterNodeContainer._internal_.SVGAElement.md#ondrag)
- [ondragend](components_ClusterNodeContainer._internal_.SVGAElement.md#ondragend)
- [ondragenter](components_ClusterNodeContainer._internal_.SVGAElement.md#ondragenter)
- [ondragleave](components_ClusterNodeContainer._internal_.SVGAElement.md#ondragleave)
- [ondragover](components_ClusterNodeContainer._internal_.SVGAElement.md#ondragover)
- [ondragstart](components_ClusterNodeContainer._internal_.SVGAElement.md#ondragstart)
- [ondrop](components_ClusterNodeContainer._internal_.SVGAElement.md#ondrop)
- [ondurationchange](components_ClusterNodeContainer._internal_.SVGAElement.md#ondurationchange)
- [onemptied](components_ClusterNodeContainer._internal_.SVGAElement.md#onemptied)
- [onended](components_ClusterNodeContainer._internal_.SVGAElement.md#onended)
- [onerror](components_ClusterNodeContainer._internal_.SVGAElement.md#onerror)
- [onfocus](components_ClusterNodeContainer._internal_.SVGAElement.md#onfocus)
- [onformdata](components_ClusterNodeContainer._internal_.SVGAElement.md#onformdata)
- [onfullscreenchange](components_ClusterNodeContainer._internal_.SVGAElement.md#onfullscreenchange)
- [onfullscreenerror](components_ClusterNodeContainer._internal_.SVGAElement.md#onfullscreenerror)
- [ongotpointercapture](components_ClusterNodeContainer._internal_.SVGAElement.md#ongotpointercapture)
- [oninput](components_ClusterNodeContainer._internal_.SVGAElement.md#oninput)
- [oninvalid](components_ClusterNodeContainer._internal_.SVGAElement.md#oninvalid)
- [onkeydown](components_ClusterNodeContainer._internal_.SVGAElement.md#onkeydown)
- [onkeypress](components_ClusterNodeContainer._internal_.SVGAElement.md#onkeypress)
- [onkeyup](components_ClusterNodeContainer._internal_.SVGAElement.md#onkeyup)
- [onload](components_ClusterNodeContainer._internal_.SVGAElement.md#onload)
- [onloadeddata](components_ClusterNodeContainer._internal_.SVGAElement.md#onloadeddata)
- [onloadedmetadata](components_ClusterNodeContainer._internal_.SVGAElement.md#onloadedmetadata)
- [onloadstart](components_ClusterNodeContainer._internal_.SVGAElement.md#onloadstart)
- [onlostpointercapture](components_ClusterNodeContainer._internal_.SVGAElement.md#onlostpointercapture)
- [onmousedown](components_ClusterNodeContainer._internal_.SVGAElement.md#onmousedown)
- [onmouseenter](components_ClusterNodeContainer._internal_.SVGAElement.md#onmouseenter)
- [onmouseleave](components_ClusterNodeContainer._internal_.SVGAElement.md#onmouseleave)
- [onmousemove](components_ClusterNodeContainer._internal_.SVGAElement.md#onmousemove)
- [onmouseout](components_ClusterNodeContainer._internal_.SVGAElement.md#onmouseout)
- [onmouseover](components_ClusterNodeContainer._internal_.SVGAElement.md#onmouseover)
- [onmouseup](components_ClusterNodeContainer._internal_.SVGAElement.md#onmouseup)
- [onpaste](components_ClusterNodeContainer._internal_.SVGAElement.md#onpaste)
- [onpause](components_ClusterNodeContainer._internal_.SVGAElement.md#onpause)
- [onplay](components_ClusterNodeContainer._internal_.SVGAElement.md#onplay)
- [onplaying](components_ClusterNodeContainer._internal_.SVGAElement.md#onplaying)
- [onpointercancel](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointercancel)
- [onpointerdown](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerdown)
- [onpointerenter](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerenter)
- [onpointerleave](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerleave)
- [onpointermove](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointermove)
- [onpointerout](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerout)
- [onpointerover](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerover)
- [onpointerup](components_ClusterNodeContainer._internal_.SVGAElement.md#onpointerup)
- [onprogress](components_ClusterNodeContainer._internal_.SVGAElement.md#onprogress)
- [onratechange](components_ClusterNodeContainer._internal_.SVGAElement.md#onratechange)
- [onreset](components_ClusterNodeContainer._internal_.SVGAElement.md#onreset)
- [onresize](components_ClusterNodeContainer._internal_.SVGAElement.md#onresize)
- [onscroll](components_ClusterNodeContainer._internal_.SVGAElement.md#onscroll)
- [onseeked](components_ClusterNodeContainer._internal_.SVGAElement.md#onseeked)
- [onseeking](components_ClusterNodeContainer._internal_.SVGAElement.md#onseeking)
- [onselect](components_ClusterNodeContainer._internal_.SVGAElement.md#onselect)
- [onselectionchange](components_ClusterNodeContainer._internal_.SVGAElement.md#onselectionchange)
- [onselectstart](components_ClusterNodeContainer._internal_.SVGAElement.md#onselectstart)
- [onstalled](components_ClusterNodeContainer._internal_.SVGAElement.md#onstalled)
- [onsubmit](components_ClusterNodeContainer._internal_.SVGAElement.md#onsubmit)
- [onsuspend](components_ClusterNodeContainer._internal_.SVGAElement.md#onsuspend)
- [ontimeupdate](components_ClusterNodeContainer._internal_.SVGAElement.md#ontimeupdate)
- [ontoggle](components_ClusterNodeContainer._internal_.SVGAElement.md#ontoggle)
- [ontouchcancel](components_ClusterNodeContainer._internal_.SVGAElement.md#ontouchcancel)
- [ontouchend](components_ClusterNodeContainer._internal_.SVGAElement.md#ontouchend)
- [ontouchmove](components_ClusterNodeContainer._internal_.SVGAElement.md#ontouchmove)
- [ontouchstart](components_ClusterNodeContainer._internal_.SVGAElement.md#ontouchstart)
- [ontransitioncancel](components_ClusterNodeContainer._internal_.SVGAElement.md#ontransitioncancel)
- [ontransitionend](components_ClusterNodeContainer._internal_.SVGAElement.md#ontransitionend)
- [ontransitionrun](components_ClusterNodeContainer._internal_.SVGAElement.md#ontransitionrun)
- [ontransitionstart](components_ClusterNodeContainer._internal_.SVGAElement.md#ontransitionstart)
- [onvolumechange](components_ClusterNodeContainer._internal_.SVGAElement.md#onvolumechange)
- [onwaiting](components_ClusterNodeContainer._internal_.SVGAElement.md#onwaiting)
- [onwebkitanimationend](components_ClusterNodeContainer._internal_.SVGAElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](components_ClusterNodeContainer._internal_.SVGAElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](components_ClusterNodeContainer._internal_.SVGAElement.md#onwebkitanimationstart)
- [onwebkittransitionend](components_ClusterNodeContainer._internal_.SVGAElement.md#onwebkittransitionend)
- [onwheel](components_ClusterNodeContainer._internal_.SVGAElement.md#onwheel)
- [outerHTML](components_ClusterNodeContainer._internal_.SVGAElement.md#outerhtml)
- [ownerDocument](components_ClusterNodeContainer._internal_.SVGAElement.md#ownerdocument)
- [ownerSVGElement](components_ClusterNodeContainer._internal_.SVGAElement.md#ownersvgelement)
- [parentElement](components_ClusterNodeContainer._internal_.SVGAElement.md#parentelement)
- [parentNode](components_ClusterNodeContainer._internal_.SVGAElement.md#parentnode)
- [part](components_ClusterNodeContainer._internal_.SVGAElement.md#part)
- [prefix](components_ClusterNodeContainer._internal_.SVGAElement.md#prefix)
- [previousElementSibling](components_ClusterNodeContainer._internal_.SVGAElement.md#previouselementsibling)
- [previousSibling](components_ClusterNodeContainer._internal_.SVGAElement.md#previoussibling)
- [rel](components_ClusterNodeContainer._internal_.SVGAElement.md#rel)
- [relList](components_ClusterNodeContainer._internal_.SVGAElement.md#rellist)
- [requiredExtensions](components_ClusterNodeContainer._internal_.SVGAElement.md#requiredextensions)
- [scrollHeight](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollheight)
- [scrollLeft](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollleft)
- [scrollTop](components_ClusterNodeContainer._internal_.SVGAElement.md#scrolltop)
- [scrollWidth](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollwidth)
- [shadowRoot](components_ClusterNodeContainer._internal_.SVGAElement.md#shadowroot)
- [slot](components_ClusterNodeContainer._internal_.SVGAElement.md#slot)
- [style](components_ClusterNodeContainer._internal_.SVGAElement.md#style)
- [systemLanguage](components_ClusterNodeContainer._internal_.SVGAElement.md#systemlanguage)
- [tabIndex](components_ClusterNodeContainer._internal_.SVGAElement.md#tabindex)
- [tagName](components_ClusterNodeContainer._internal_.SVGAElement.md#tagname)
- [target](components_ClusterNodeContainer._internal_.SVGAElement.md#target)
- [textContent](components_ClusterNodeContainer._internal_.SVGAElement.md#textcontent)
- [transform](components_ClusterNodeContainer._internal_.SVGAElement.md#transform)
- [viewportElement](components_ClusterNodeContainer._internal_.SVGAElement.md#viewportelement)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.SVGAElement.md#addeventlistener)
- [after](components_ClusterNodeContainer._internal_.SVGAElement.md#after)
- [animate](components_ClusterNodeContainer._internal_.SVGAElement.md#animate)
- [append](components_ClusterNodeContainer._internal_.SVGAElement.md#append)
- [appendChild](components_ClusterNodeContainer._internal_.SVGAElement.md#appendchild)
- [attachShadow](components_ClusterNodeContainer._internal_.SVGAElement.md#attachshadow)
- [before](components_ClusterNodeContainer._internal_.SVGAElement.md#before)
- [blur](components_ClusterNodeContainer._internal_.SVGAElement.md#blur)
- [cloneNode](components_ClusterNodeContainer._internal_.SVGAElement.md#clonenode)
- [closest](components_ClusterNodeContainer._internal_.SVGAElement.md#closest)
- [compareDocumentPosition](components_ClusterNodeContainer._internal_.SVGAElement.md#comparedocumentposition)
- [contains](components_ClusterNodeContainer._internal_.SVGAElement.md#contains)
- [dispatchEvent](components_ClusterNodeContainer._internal_.SVGAElement.md#dispatchevent)
- [focus](components_ClusterNodeContainer._internal_.SVGAElement.md#focus)
- [getAnimations](components_ClusterNodeContainer._internal_.SVGAElement.md#getanimations)
- [getAttribute](components_ClusterNodeContainer._internal_.SVGAElement.md#getattribute)
- [getAttributeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#getattributens)
- [getAttributeNames](components_ClusterNodeContainer._internal_.SVGAElement.md#getattributenames)
- [getAttributeNode](components_ClusterNodeContainer._internal_.SVGAElement.md#getattributenode)
- [getAttributeNodeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#getattributenodens)
- [getBBox](components_ClusterNodeContainer._internal_.SVGAElement.md#getbbox)
- [getBoundingClientRect](components_ClusterNodeContainer._internal_.SVGAElement.md#getboundingclientrect)
- [getCTM](components_ClusterNodeContainer._internal_.SVGAElement.md#getctm)
- [getClientRects](components_ClusterNodeContainer._internal_.SVGAElement.md#getclientrects)
- [getElementsByClassName](components_ClusterNodeContainer._internal_.SVGAElement.md#getelementsbyclassname)
- [getElementsByTagName](components_ClusterNodeContainer._internal_.SVGAElement.md#getelementsbytagname)
- [getElementsByTagNameNS](components_ClusterNodeContainer._internal_.SVGAElement.md#getelementsbytagnamens)
- [getRootNode](components_ClusterNodeContainer._internal_.SVGAElement.md#getrootnode)
- [getScreenCTM](components_ClusterNodeContainer._internal_.SVGAElement.md#getscreenctm)
- [hasAttribute](components_ClusterNodeContainer._internal_.SVGAElement.md#hasattribute)
- [hasAttributeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#hasattributens)
- [hasAttributes](components_ClusterNodeContainer._internal_.SVGAElement.md#hasattributes)
- [hasChildNodes](components_ClusterNodeContainer._internal_.SVGAElement.md#haschildnodes)
- [hasPointerCapture](components_ClusterNodeContainer._internal_.SVGAElement.md#haspointercapture)
- [insertAdjacentElement](components_ClusterNodeContainer._internal_.SVGAElement.md#insertadjacentelement)
- [insertAdjacentHTML](components_ClusterNodeContainer._internal_.SVGAElement.md#insertadjacenthtml)
- [insertAdjacentText](components_ClusterNodeContainer._internal_.SVGAElement.md#insertadjacenttext)
- [insertBefore](components_ClusterNodeContainer._internal_.SVGAElement.md#insertbefore)
- [isDefaultNamespace](components_ClusterNodeContainer._internal_.SVGAElement.md#isdefaultnamespace)
- [isEqualNode](components_ClusterNodeContainer._internal_.SVGAElement.md#isequalnode)
- [isSameNode](components_ClusterNodeContainer._internal_.SVGAElement.md#issamenode)
- [lookupNamespaceURI](components_ClusterNodeContainer._internal_.SVGAElement.md#lookupnamespaceuri)
- [lookupPrefix](components_ClusterNodeContainer._internal_.SVGAElement.md#lookupprefix)
- [matches](components_ClusterNodeContainer._internal_.SVGAElement.md#matches)
- [normalize](components_ClusterNodeContainer._internal_.SVGAElement.md#normalize)
- [prepend](components_ClusterNodeContainer._internal_.SVGAElement.md#prepend)
- [querySelector](components_ClusterNodeContainer._internal_.SVGAElement.md#queryselector)
- [querySelectorAll](components_ClusterNodeContainer._internal_.SVGAElement.md#queryselectorall)
- [releasePointerCapture](components_ClusterNodeContainer._internal_.SVGAElement.md#releasepointercapture)
- [remove](components_ClusterNodeContainer._internal_.SVGAElement.md#remove)
- [removeAttribute](components_ClusterNodeContainer._internal_.SVGAElement.md#removeattribute)
- [removeAttributeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#removeattributens)
- [removeAttributeNode](components_ClusterNodeContainer._internal_.SVGAElement.md#removeattributenode)
- [removeChild](components_ClusterNodeContainer._internal_.SVGAElement.md#removechild)
- [removeEventListener](components_ClusterNodeContainer._internal_.SVGAElement.md#removeeventlistener)
- [replaceChild](components_ClusterNodeContainer._internal_.SVGAElement.md#replacechild)
- [replaceChildren](components_ClusterNodeContainer._internal_.SVGAElement.md#replacechildren)
- [replaceWith](components_ClusterNodeContainer._internal_.SVGAElement.md#replacewith)
- [requestFullscreen](components_ClusterNodeContainer._internal_.SVGAElement.md#requestfullscreen)
- [requestPointerLock](components_ClusterNodeContainer._internal_.SVGAElement.md#requestpointerlock)
- [scroll](components_ClusterNodeContainer._internal_.SVGAElement.md#scroll)
- [scrollBy](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollby)
- [scrollIntoView](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollintoview)
- [scrollTo](components_ClusterNodeContainer._internal_.SVGAElement.md#scrollto)
- [setAttribute](components_ClusterNodeContainer._internal_.SVGAElement.md#setattribute)
- [setAttributeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#setattributens)
- [setAttributeNode](components_ClusterNodeContainer._internal_.SVGAElement.md#setattributenode)
- [setAttributeNodeNS](components_ClusterNodeContainer._internal_.SVGAElement.md#setattributenodens)
- [setPointerCapture](components_ClusterNodeContainer._internal_.SVGAElement.md#setpointercapture)
- [toggleAttribute](components_ClusterNodeContainer._internal_.SVGAElement.md#toggleattribute)
- [webkitMatchesSelector](components_ClusterNodeContainer._internal_.SVGAElement.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9696

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

SVGGraphicsElement.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9698

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

SVGGraphicsElement.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9700

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9702

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9704

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9706

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9708

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9710

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9712

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9713

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9715

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9717

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

SVGGraphicsElement.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9719

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9720

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9721

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9722

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

SVGGraphicsElement.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9724

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

SVGGraphicsElement.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9726

___

### ariaAtomic

• **ariaAtomic**: `string`

#### Inherited from

SVGGraphicsElement.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1827

___

### ariaAutoComplete

• **ariaAutoComplete**: `string`

#### Inherited from

SVGGraphicsElement.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1828

___

### ariaBusy

• **ariaBusy**: `string`

#### Inherited from

SVGGraphicsElement.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1829

___

### ariaChecked

• **ariaChecked**: `string`

#### Inherited from

SVGGraphicsElement.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1830

___

### ariaColCount

• **ariaColCount**: `string`

#### Inherited from

SVGGraphicsElement.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1831

___

### ariaColIndex

• **ariaColIndex**: `string`

#### Inherited from

SVGGraphicsElement.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1832

___

### ariaColSpan

• **ariaColSpan**: `string`

#### Inherited from

SVGGraphicsElement.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1833

___

### ariaCurrent

• **ariaCurrent**: `string`

#### Inherited from

SVGGraphicsElement.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1834

___

### ariaDisabled

• **ariaDisabled**: `string`

#### Inherited from

SVGGraphicsElement.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1835

___

### ariaExpanded

• **ariaExpanded**: `string`

#### Inherited from

SVGGraphicsElement.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1836

___

### ariaHasPopup

• **ariaHasPopup**: `string`

#### Inherited from

SVGGraphicsElement.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1837

___

### ariaHidden

• **ariaHidden**: `string`

#### Inherited from

SVGGraphicsElement.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1838

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: `string`

#### Inherited from

SVGGraphicsElement.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1839

___

### ariaLabel

• **ariaLabel**: `string`

#### Inherited from

SVGGraphicsElement.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1840

___

### ariaLevel

• **ariaLevel**: `string`

#### Inherited from

SVGGraphicsElement.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1841

___

### ariaLive

• **ariaLive**: `string`

#### Inherited from

SVGGraphicsElement.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1842

___

### ariaModal

• **ariaModal**: `string`

#### Inherited from

SVGGraphicsElement.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1843

___

### ariaMultiLine

• **ariaMultiLine**: `string`

#### Inherited from

SVGGraphicsElement.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1844

___

### ariaMultiSelectable

• **ariaMultiSelectable**: `string`

#### Inherited from

SVGGraphicsElement.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1845

___

### ariaOrientation

• **ariaOrientation**: `string`

#### Inherited from

SVGGraphicsElement.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1846

___

### ariaPlaceholder

• **ariaPlaceholder**: `string`

#### Inherited from

SVGGraphicsElement.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1847

___

### ariaPosInSet

• **ariaPosInSet**: `string`

#### Inherited from

SVGGraphicsElement.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1848

___

### ariaPressed

• **ariaPressed**: `string`

#### Inherited from

SVGGraphicsElement.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1849

___

### ariaReadOnly

• **ariaReadOnly**: `string`

#### Inherited from

SVGGraphicsElement.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1850

___

### ariaRequired

• **ariaRequired**: `string`

#### Inherited from

SVGGraphicsElement.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1851

___

### ariaRoleDescription

• **ariaRoleDescription**: `string`

#### Inherited from

SVGGraphicsElement.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1852

___

### ariaRowCount

• **ariaRowCount**: `string`

#### Inherited from

SVGGraphicsElement.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1853

___

### ariaRowIndex

• **ariaRowIndex**: `string`

#### Inherited from

SVGGraphicsElement.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1854

___

### ariaRowSpan

• **ariaRowSpan**: `string`

#### Inherited from

SVGGraphicsElement.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1855

___

### ariaSelected

• **ariaSelected**: `string`

#### Inherited from

SVGGraphicsElement.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1856

___

### ariaSetSize

• **ariaSetSize**: `string`

#### Inherited from

SVGGraphicsElement.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1857

___

### ariaSort

• **ariaSort**: `string`

#### Inherited from

SVGGraphicsElement.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1858

___

### ariaValueMax

• **ariaValueMax**: `string`

#### Inherited from

SVGGraphicsElement.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1859

___

### ariaValueMin

• **ariaValueMin**: `string`

#### Inherited from

SVGGraphicsElement.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1860

___

### ariaValueNow

• **ariaValueNow**: `string`

#### Inherited from

SVGGraphicsElement.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1861

___

### ariaValueText

• **ariaValueText**: `string`

#### Inherited from

SVGGraphicsElement.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1862

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| `HTMLSlotElement`

#### Inherited from

SVGGraphicsElement.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13103

___

### attributes

• `Readonly` **attributes**: [`NamedNodeMap`](../modules/components_ClusterNodeContainer._internal_.md#namednodemap)

#### Inherited from

SVGGraphicsElement.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4720

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

SVGGraphicsElement.autofocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7335

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

SVGGraphicsElement.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9649

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

SVGGraphicsElement.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10014

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](components_ClusterNodeContainer._internal_.NodeListOf.md)<[`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

SVGGraphicsElement.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9651

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

SVGGraphicsElement.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10016

___

### classList

• `Readonly` **classList**: [`DOMTokenList`](../modules/components_ClusterNodeContainer._internal_.md#domtokenlist)

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Inherited from

SVGGraphicsElement.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4722

___

### className

• `Readonly` **className**: `any`

**`deprecated`**

#### Inherited from

SVGGraphicsElement.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11482

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Inherited from

SVGGraphicsElement.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4725

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Inherited from

SVGGraphicsElement.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4726

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Inherited from

SVGGraphicsElement.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4727

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Inherited from

SVGGraphicsElement.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4728

___

### dataset

• `Readonly` **dataset**: [`DOMStringMap`](../modules/components_ClusterNodeContainer._internal_.md#domstringmap)

#### Inherited from

SVGGraphicsElement.dataset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7336

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

SVGGraphicsElement.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9653

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| `Element`

Returns the first child that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10018

___

### href

• `Readonly` **href**: [`SVGAnimatedString`](../modules/components_ClusterNodeContainer._internal_.md#svganimatedstring)

#### Inherited from

[SVGURIReference](components_ClusterNodeContainer._internal_.SVGURIReference.md).[href](components_ClusterNodeContainer._internal_.SVGURIReference.md#href)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12826

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Inherited from

SVGGraphicsElement.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4730

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

SVGGraphicsElement.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8682

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

SVGGraphicsElement.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9655

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

SVGGraphicsElement.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9657

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| `Element`

Returns the last child that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10020

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Inherited from

SVGGraphicsElement.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4732

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

#### Inherited from

SVGGraphicsElement.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4734

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| `Element`

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9816

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

SVGGraphicsElement.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9659

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

SVGGraphicsElement.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9661

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

SVGGraphicsElement.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9663

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9664

___

### nonce

• `Optional` **nonce**: `string`

#### Inherited from

SVGGraphicsElement.nonce

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7337

___

### onabort

• **onabort**: ``null`` \| (`ev`: `UIEvent`) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5454

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5455

___

### onanimationend

• **onanimationend**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5456

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5457

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`ev`: `AnimationEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5458

___

### onauxclick

• **onauxclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5459

___

### onblur

• **onblur**: ``null`` \| (`ev`: `FocusEvent`) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

SVGGraphicsElement.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5464

___

### oncanplay

• **oncanplay**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5469

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5470

___

### onchange

• **onchange**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5475

___

### onclick

• **onclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5480

___

### onclose

• **onclose**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5481

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5486

___

### oncopy

• **oncopy**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

SVGGraphicsElement.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4576

___

### oncuechange

• **oncuechange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5487

___

### oncut

• **oncut**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

SVGGraphicsElement.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4577

___

### ondblclick

• **ondblclick**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5492

___

### ondrag

• **ondrag**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5497

___

### ondragend

• **ondragend**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5502

___

### ondragenter

• **ondragenter**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

SVGGraphicsElement.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5507

___

### ondragleave

• **ondragleave**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

SVGGraphicsElement.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5512

___

### ondragover

• **ondragover**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5517

___

### ondragstart

• **ondragstart**: ``null`` \| (`ev`: `DragEvent`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5522

___

### ondrop

• **ondrop**: ``null`` \| (`ev`: `DragEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5523

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5528

___

### onemptied

• **onemptied**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5533

___

### onended

• **onended**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

SVGGraphicsElement.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5538

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/components_ClusterNodeContainer._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5543

___

### onfocus

• **onfocus**: ``null`` \| (`ev`: `FocusEvent`) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### onformdata

• **onformdata**: ``null`` \| (`ev`: [`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)) => `any`

#### Inherited from

SVGGraphicsElement.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4735

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4736

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### oninput

• **oninput**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### oninvalid

• **oninvalid**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### onkeydown

• **onkeydown**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

SVGGraphicsElement.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### onkeypress

• **onkeypress**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

SVGGraphicsElement.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### onkeyup

• **onkeyup**: ``null`` \| (`ev`: `KeyboardEvent`) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

SVGGraphicsElement.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### onload

• **onload**: ``null`` \| (`ev`: `Event`) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### onloadstart

• **onloadstart**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### onmousedown

• **onmousedown**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`ev`: `MouseEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### onmousemove

• **onmousemove**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### onmouseout

• **onmouseout**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### onmouseover

• **onmouseover**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### onmouseup

• **onmouseup**: ``null`` \| (`ev`: `MouseEvent`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### onpaste

• **onpaste**: ``null`` \| (`ev`: `ClipboardEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4578

___

### onpause

• **onpause**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### onplay

• **onplay**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### onplaying

• **onplaying**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### onpointermove

• **onpointermove**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### onpointerout

• **onpointerout**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### onpointerover

• **onpointerover**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### onpointerup

• **onpointerup**: ``null`` \| (`ev`: `PointerEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639

___

### onprogress

• **onprogress**: ``null`` \| (`ev`: `ProgressEvent`<`EventTarget`\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5644

___

### onratechange

• **onratechange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onreset

• **onreset**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5654

___

### onresize

• **onresize**: ``null`` \| (`ev`: `UIEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5655

___

### onscroll

• **onscroll**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5660

___

### onseeked

• **onseeked**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5665

___

### onseeking

• **onseeking**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5670

___

### onselect

• **onselect**: ``null`` \| (`ev`: `Event`) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5675

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5676

___

### onselectstart

• **onselectstart**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5677

___

### onstalled

• **onstalled**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5682

___

### onsubmit

• **onsubmit**: ``null`` \| (`ev`: [`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)) => `any`

#### Inherited from

SVGGraphicsElement.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5683

___

### onsuspend

• **onsuspend**: ``null`` \| (`ev`: `Event`) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5688

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`ev`: `Event`) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5693

___

### ontoggle

• **ontoggle**: ``null`` \| (`ev`: `Event`) => `any`

#### Inherited from

SVGGraphicsElement.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5694

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5696

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5697

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`ev`: `TouchEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5698

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5699

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5701

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`ev`: `TransitionEvent`) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5702

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5707

___

### onwaiting

• **onwaiting**: ``null`` \| (`ev`: `Event`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5712

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5714

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5718

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`ev`: `Event`) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

SVGGraphicsElement.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5720

___

### onwheel

• **onwheel**: ``null`` \| (`ev`: `WheelEvent`) => `any`

#### Inherited from

SVGGraphicsElement.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### outerHTML

• **outerHTML**: `string`

#### Inherited from

SVGGraphicsElement.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4737

___

### ownerDocument

• `Readonly` **ownerDocument**: `Document`

#### Inherited from

SVGGraphicsElement.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4738

___

### ownerSVGElement

• `Readonly` **ownerSVGElement**: ``null`` \| `SVGSVGElement`

#### Inherited from

SVGGraphicsElement.ownerSVGElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11483

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

#### Inherited from

SVGGraphicsElement.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9668

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](components_ClusterNodeContainer._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

SVGGraphicsElement.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9670

___

### part

• `Readonly` **part**: [`DOMTokenList`](../modules/components_ClusterNodeContainer._internal_.md#domtokenlist)

#### Inherited from

SVGGraphicsElement.part

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4739

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

#### Inherited from

SVGGraphicsElement.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4741

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| `Element`

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9818

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](components_ClusterNodeContainer._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

SVGGraphicsElement.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9672

___

### rel

• **rel**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11155

___

### relList

• `Readonly` **relList**: [`DOMTokenList`](../modules/components_ClusterNodeContainer._internal_.md#domtokenlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11156

___

### requiredExtensions

• `Readonly` **requiredExtensions**: [`SVGStringList`](../modules/components_ClusterNodeContainer._internal_.md#svgstringlist)

#### Inherited from

SVGGraphicsElement.requiredExtensions

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12665

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Inherited from

SVGGraphicsElement.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4742

___

### scrollLeft

• **scrollLeft**: `number`

#### Inherited from

SVGGraphicsElement.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4743

___

### scrollTop

• **scrollTop**: `number`

#### Inherited from

SVGGraphicsElement.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4744

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Inherited from

SVGGraphicsElement.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4745

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/components_ClusterNodeContainer._internal_.md#shadowroot)

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Inherited from

SVGGraphicsElement.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4747

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Inherited from

SVGGraphicsElement.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4749

___

### style

• `Readonly` **style**: [`CSSStyleDeclaration`](../modules/components_ClusterNodeContainer._internal_.md#cssstyledeclaration)

#### Inherited from

SVGGraphicsElement.style

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4835

___

### systemLanguage

• `Readonly` **systemLanguage**: [`SVGStringList`](../modules/components_ClusterNodeContainer._internal_.md#svgstringlist)

#### Inherited from

SVGGraphicsElement.systemLanguage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12666

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

SVGGraphicsElement.tabIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7338

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Inherited from

SVGGraphicsElement.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4751

___

### target

• `Readonly` **target**: [`SVGAnimatedString`](../modules/components_ClusterNodeContainer._internal_.md#svganimatedstring)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11157

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9673

___

### transform

• `Readonly` **transform**: [`SVGAnimatedTransformList`](../modules/components_ClusterNodeContainer._internal_.md#svganimatedtransformlist)

#### Inherited from

SVGGraphicsElement.transform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12117

___

### viewportElement

• `Readonly` **viewportElement**: ``null`` \| `SVGElement`

#### Inherited from

SVGGraphicsElement.viewportElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11484

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](components_ClusterNodeContainer._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SVGElementEventMap`](components_ClusterNodeContainer._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

SVGGraphicsElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11158

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

SVGGraphicsElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11159

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

SVGGraphicsElement.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3451

___

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`Keyframe`](components_ClusterNodeContainer._internal_.Keyframe.md)[] \| [`PropertyIndexedKeyframes`](components_ClusterNodeContainer._internal_.PropertyIndexedKeyframes.md) |
| `options?` | `number` \| [`KeyframeAnimationOptions`](components_ClusterNodeContainer._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)

#### Inherited from

SVGGraphicsElement.animate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1948

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

SVGGraphicsElement.append

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

SVGGraphicsElement.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9674

___

### attachShadow

▸ **attachShadow**(`init`): [`ShadowRoot`](../modules/components_ClusterNodeContainer._internal_.md#shadowroot)

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`ShadowRootInit`](components_ClusterNodeContainer._internal_.ShadowRootInit.md) |

#### Returns

[`ShadowRoot`](../modules/components_ClusterNodeContainer._internal_.md#shadowroot)

#### Inherited from

SVGGraphicsElement.attachShadow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4753

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

SVGGraphicsElement.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3457

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7339

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

SVGGraphicsElement.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9676

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4755

▸ **closest**<`K`\>(`selector`): ``null`` \| [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](components_ClusterNodeContainer._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4756

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

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

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4757

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

SVGGraphicsElement.compareDocumentPosition

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

SVGGraphicsElement.contains

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

SVGGraphicsElement.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### focus

▸ **focus**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FocusOptions`](components_ClusterNodeContainer._internal_.FocusOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7340

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](components_ClusterNodeContainer._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/components_ClusterNodeContainer._internal_.md#animation)[]

#### Inherited from

SVGGraphicsElement.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1949

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): ``null`` \| `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.getAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4759

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): ``null`` \| `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4761

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Inherited from

SVGGraphicsElement.getAttributeNames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4763

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4764

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4765

___

### getBBox

▸ **getBBox**(`options?`): [`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SVGBoundingBoxOptions`](components_ClusterNodeContainer._internal_.SVGBoundingBoxOptions.md) |

#### Returns

[`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Inherited from

SVGGraphicsElement.getBBox

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12118

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/components_ClusterNodeContainer._internal_.md#domrect)

#### Inherited from

SVGGraphicsElement.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4766

___

### getCTM

▸ **getCTM**(): ``null`` \| [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Inherited from

SVGGraphicsElement.getCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12119

___

### getClientRects

▸ **getClientRects**(): [`DOMRectList`](../modules/components_ClusterNodeContainer._internal_.md#domrectlist)

#### Returns

[`DOMRectList`](../modules/components_ClusterNodeContainer._internal_.md#domrectlist)

#### Inherited from

SVGGraphicsElement.getClientRects

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4767

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

SVGGraphicsElement.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4769

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<[`HTMLElementTagNameMap`](components_ClusterNodeContainer._internal_.HTMLElementTagNameMap.md)[`K`]\>

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

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4770

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

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4771

▸ **getElementsByTagName**(`qualifiedName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Inherited from

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4772

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`HTMLElement`\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4773

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`SVGElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`SVGElement`\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4774

▸ **getElementsByTagNameNS**(`namespace`, `localName`): [`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md)<`Element`\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4775

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

SVGGraphicsElement.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9682

___

### getScreenCTM

▸ **getScreenCTM**(): ``null`` \| [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/components_ClusterNodeContainer._internal_.md#dommatrix)

#### Inherited from

SVGGraphicsElement.getScreenCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12120

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4777

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4779

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4781

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9684

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4782

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/components_ClusterNodeContainer._internal_.md#insertposition) |
| `element` | `Element` |

#### Returns

``null`` \| `Element`

#### Inherited from

SVGGraphicsElement.insertAdjacentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4783

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`InsertPosition`](../modules/components_ClusterNodeContainer._internal_.md#insertposition) |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.insertAdjacentHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4784

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/components_ClusterNodeContainer._internal_.md#insertposition) |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.insertAdjacentText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4785

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

SVGGraphicsElement.insertBefore

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

SVGGraphicsElement.isDefaultNamespace

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

SVGGraphicsElement.isEqualNode

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

SVGGraphicsElement.isSameNode

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

SVGGraphicsElement.lookupNamespaceURI

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

SVGGraphicsElement.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9691

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4787

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9693

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

SVGGraphicsElement.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10032

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

SVGGraphicsElement.querySelector

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

SVGGraphicsElement.querySelector

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

SVGGraphicsElement.querySelector

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

SVGGraphicsElement.querySelectorAll

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

SVGGraphicsElement.querySelectorAll

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

SVGGraphicsElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10040

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4788

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3459

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.removeAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4790

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.removeAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4792

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr) |

#### Returns

[`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.removeAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4793

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

SVGGraphicsElement.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9694

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](components_ClusterNodeContainer._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SVGElementEventMap`](components_ClusterNodeContainer._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

SVGGraphicsElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11160

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

SVGGraphicsElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11161

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

SVGGraphicsElement.replaceChild

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

SVGGraphicsElement.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

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

SVGGraphicsElement.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3465

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`<`void`\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FullscreenOptions`](components_ClusterNodeContainer._internal_.FullscreenOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

SVGGraphicsElement.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4799

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.requestPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4800

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](components_ClusterNodeContainer._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4801

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4802

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](components_ClusterNodeContainer._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4803

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4804

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| [`ScrollIntoViewOptions`](components_ClusterNodeContainer._internal_.ScrollIntoViewOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollIntoView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4805

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](components_ClusterNodeContainer._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4806

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4807

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4809

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4811

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4812

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.setAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4813

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4814

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.toggleAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4820

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

**`deprecated`** This is a legacy alias of `matches`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4822
