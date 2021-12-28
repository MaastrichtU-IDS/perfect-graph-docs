[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / TableCellProps

# Interface: TableCellProps

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).TableCellProps

`<TableCell>` will be rendered as an `<th>`or `<td>` depending
on the context it is used in. Where context literally is the
React `context`.

Since it is not decided via prop, we have create loose typings
here.

## Hierarchy

- [`InternalStandardProps`](../modules/components_GraphEditor_DataEditor._internal_.md#internalstandardprops)<[`TableCellBaseProps`](../modules/components_GraphEditor_DataEditor._internal_.md#tablecellbaseprops), ``"align"``\>

  ↳ **`TableCellProps`**

## Table of contents

### Properties

- [abbr](components_GraphEditor_DataEditor._internal_.TableCellProps.md#abbr)
- [about](components_GraphEditor_DataEditor._internal_.TableCellProps.md#about)
- [accessKey](components_GraphEditor_DataEditor._internal_.TableCellProps.md#accesskey)
- [align](components_GraphEditor_DataEditor._internal_.TableCellProps.md#align)
- [aria-activedescendant](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-activedescendant)
- [aria-atomic](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-atomic)
- [aria-autocomplete](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-autocomplete)
- [aria-busy](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-busy)
- [aria-checked](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-checked)
- [aria-colcount](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-colcount)
- [aria-colindex](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-colindex)
- [aria-colspan](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-colspan)
- [aria-controls](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-controls)
- [aria-current](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-current)
- [aria-describedby](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-describedby)
- [aria-details](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-details)
- [aria-disabled](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-disabled)
- [aria-dropeffect](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-dropeffect)
- [aria-errormessage](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-errormessage)
- [aria-expanded](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-expanded)
- [aria-flowto](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-flowto)
- [aria-grabbed](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-grabbed)
- [aria-haspopup](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-haspopup)
- [aria-hidden](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-hidden)
- [aria-invalid](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-invalid)
- [aria-keyshortcuts](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-keyshortcuts)
- [aria-label](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-label)
- [aria-labelledby](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-labelledby)
- [aria-level](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-level)
- [aria-live](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-live)
- [aria-modal](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-modal)
- [aria-multiline](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-multiline)
- [aria-multiselectable](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-multiselectable)
- [aria-orientation](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-orientation)
- [aria-owns](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-owns)
- [aria-placeholder](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-placeholder)
- [aria-posinset](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-posinset)
- [aria-pressed](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-pressed)
- [aria-readonly](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-readonly)
- [aria-relevant](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-relevant)
- [aria-required](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-required)
- [aria-roledescription](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-roledescription)
- [aria-rowcount](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-rowcount)
- [aria-rowindex](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-rowindex)
- [aria-rowspan](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-rowspan)
- [aria-selected](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-selected)
- [aria-setsize](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-setsize)
- [aria-sort](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-sort)
- [aria-valuemax](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-valuemax)
- [aria-valuemin](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-valuemin)
- [aria-valuenow](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-valuenow)
- [aria-valuetext](components_GraphEditor_DataEditor._internal_.TableCellProps.md#aria-valuetext)
- [autoCapitalize](components_GraphEditor_DataEditor._internal_.TableCellProps.md#autocapitalize)
- [autoCorrect](components_GraphEditor_DataEditor._internal_.TableCellProps.md#autocorrect)
- [autoSave](components_GraphEditor_DataEditor._internal_.TableCellProps.md#autosave)
- [children](components_GraphEditor_DataEditor._internal_.TableCellProps.md#children)
- [className](components_GraphEditor_DataEditor._internal_.TableCellProps.md#classname)
- [classes](components_GraphEditor_DataEditor._internal_.TableCellProps.md#classes)
- [colSpan](components_GraphEditor_DataEditor._internal_.TableCellProps.md#colspan)
- [color](components_GraphEditor_DataEditor._internal_.TableCellProps.md#color)
- [component](components_GraphEditor_DataEditor._internal_.TableCellProps.md#component)
- [contentEditable](components_GraphEditor_DataEditor._internal_.TableCellProps.md#contenteditable)
- [contextMenu](components_GraphEditor_DataEditor._internal_.TableCellProps.md#contextmenu)
- [dangerouslySetInnerHTML](components_GraphEditor_DataEditor._internal_.TableCellProps.md#dangerouslysetinnerhtml)
- [datatype](components_GraphEditor_DataEditor._internal_.TableCellProps.md#datatype)
- [defaultChecked](components_GraphEditor_DataEditor._internal_.TableCellProps.md#defaultchecked)
- [defaultValue](components_GraphEditor_DataEditor._internal_.TableCellProps.md#defaultvalue)
- [dir](components_GraphEditor_DataEditor._internal_.TableCellProps.md#dir)
- [draggable](components_GraphEditor_DataEditor._internal_.TableCellProps.md#draggable)
- [headers](components_GraphEditor_DataEditor._internal_.TableCellProps.md#headers)
- [height](components_GraphEditor_DataEditor._internal_.TableCellProps.md#height)
- [hidden](components_GraphEditor_DataEditor._internal_.TableCellProps.md#hidden)
- [id](components_GraphEditor_DataEditor._internal_.TableCellProps.md#id)
- [inlist](components_GraphEditor_DataEditor._internal_.TableCellProps.md#inlist)
- [inputMode](components_GraphEditor_DataEditor._internal_.TableCellProps.md#inputmode)
- [is](components_GraphEditor_DataEditor._internal_.TableCellProps.md#is)
- [itemID](components_GraphEditor_DataEditor._internal_.TableCellProps.md#itemid)
- [itemProp](components_GraphEditor_DataEditor._internal_.TableCellProps.md#itemprop)
- [itemRef](components_GraphEditor_DataEditor._internal_.TableCellProps.md#itemref)
- [itemScope](components_GraphEditor_DataEditor._internal_.TableCellProps.md#itemscope)
- [itemType](components_GraphEditor_DataEditor._internal_.TableCellProps.md#itemtype)
- [lang](components_GraphEditor_DataEditor._internal_.TableCellProps.md#lang)
- [onAbort](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onabort)
- [onAbortCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onabortcapture)
- [onAnimationEnd](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationend)
- [onAnimationEndCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationendcapture)
- [onAnimationIteration](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationiteration)
- [onAnimationIterationCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationiterationcapture)
- [onAnimationStart](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationstart)
- [onAnimationStartCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onanimationstartcapture)
- [onAuxClick](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onauxclick)
- [onAuxClickCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onauxclickcapture)
- [onBeforeInput](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onbeforeinput)
- [onBeforeInputCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onbeforeinputcapture)
- [onBlur](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onblur)
- [onBlurCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onblurcapture)
- [onCanPlay](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncanplay)
- [onCanPlayCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncanplaycapture)
- [onCanPlayThrough](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncanplaythrough)
- [onCanPlayThroughCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncanplaythroughcapture)
- [onChange](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onchange)
- [onChangeCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onchangecapture)
- [onClick](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onclick)
- [onClickCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onclickcapture)
- [onCompositionEnd](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionend)
- [onCompositionEndCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionendcapture)
- [onCompositionStart](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionstart)
- [onCompositionStartCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionstartcapture)
- [onCompositionUpdate](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionupdate)
- [onCompositionUpdateCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncompositionupdatecapture)
- [onContextMenu](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncontextmenu)
- [onContextMenuCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncontextmenucapture)
- [onCopy](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncopy)
- [onCopyCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncopycapture)
- [onCut](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncut)
- [onCutCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oncutcapture)
- [onDoubleClick](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondoubleclick)
- [onDoubleClickCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondoubleclickcapture)
- [onDrag](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondrag)
- [onDragCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragcapture)
- [onDragEnd](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragend)
- [onDragEndCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragendcapture)
- [onDragEnter](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragenter)
- [onDragEnterCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragentercapture)
- [onDragExit](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragexit)
- [onDragExitCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragexitcapture)
- [onDragLeave](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragleave)
- [onDragLeaveCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragleavecapture)
- [onDragOver](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragover)
- [onDragOverCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragovercapture)
- [onDragStart](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragstart)
- [onDragStartCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondragstartcapture)
- [onDrop](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondrop)
- [onDropCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondropcapture)
- [onDurationChange](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondurationchange)
- [onDurationChangeCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ondurationchangecapture)
- [onEmptied](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onemptied)
- [onEmptiedCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onemptiedcapture)
- [onEncrypted](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onencrypted)
- [onEncryptedCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onencryptedcapture)
- [onEnded](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onended)
- [onEndedCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onendedcapture)
- [onError](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onerror)
- [onErrorCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onerrorcapture)
- [onFocus](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onfocus)
- [onFocusCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onfocuscapture)
- [onGotPointerCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ongotpointercapture)
- [onGotPointerCaptureCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ongotpointercapturecapture)
- [onInput](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oninput)
- [onInputCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oninputcapture)
- [onInvalid](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oninvalid)
- [onInvalidCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#oninvalidcapture)
- [onKeyDown](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeydown)
- [onKeyDownCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeydowncapture)
- [onKeyPress](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeypress)
- [onKeyPressCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeypresscapture)
- [onKeyUp](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeyup)
- [onKeyUpCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onkeyupcapture)
- [onLoad](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onload)
- [onLoadCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadcapture)
- [onLoadStart](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadstart)
- [onLoadStartCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadstartcapture)
- [onLoadedData](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadeddata)
- [onLoadedDataCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadeddatacapture)
- [onLoadedMetadata](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadedmetadata)
- [onLoadedMetadataCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onloadedmetadatacapture)
- [onLostPointerCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onlostpointercapture)
- [onLostPointerCaptureCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onlostpointercapturecapture)
- [onMouseDown](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmousedown)
- [onMouseDownCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmousedowncapture)
- [onMouseEnter](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseenter)
- [onMouseLeave](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseleave)
- [onMouseMove](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmousemove)
- [onMouseMoveCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmousemovecapture)
- [onMouseOut](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseout)
- [onMouseOutCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseoutcapture)
- [onMouseOver](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseover)
- [onMouseOverCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseovercapture)
- [onMouseUp](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseup)
- [onMouseUpCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onmouseupcapture)
- [onPaste](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpaste)
- [onPasteCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpastecapture)
- [onPause](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpause)
- [onPauseCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpausecapture)
- [onPlay](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onplay)
- [onPlayCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onplaycapture)
- [onPlaying](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onplaying)
- [onPlayingCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onplayingcapture)
- [onPointerCancel](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointercancel)
- [onPointerCancelCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointercancelcapture)
- [onPointerDown](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerdown)
- [onPointerDownCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerdowncapture)
- [onPointerEnter](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerenter)
- [onPointerEnterCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerentercapture)
- [onPointerLeave](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerleave)
- [onPointerLeaveCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerleavecapture)
- [onPointerMove](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointermove)
- [onPointerMoveCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointermovecapture)
- [onPointerOut](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerout)
- [onPointerOutCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointeroutcapture)
- [onPointerOver](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerover)
- [onPointerOverCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerovercapture)
- [onPointerUp](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerup)
- [onPointerUpCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onpointerupcapture)
- [onProgress](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onprogress)
- [onProgressCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onprogresscapture)
- [onRateChange](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onratechange)
- [onRateChangeCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onratechangecapture)
- [onReset](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onreset)
- [onResetCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onresetcapture)
- [onScroll](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onscroll)
- [onScrollCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onscrollcapture)
- [onSeeked](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onseeked)
- [onSeekedCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onseekedcapture)
- [onSeeking](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onseeking)
- [onSeekingCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onseekingcapture)
- [onSelect](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onselect)
- [onSelectCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onselectcapture)
- [onStalled](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onstalled)
- [onStalledCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onstalledcapture)
- [onSubmit](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onsubmit)
- [onSubmitCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onsubmitcapture)
- [onSuspend](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onsuspend)
- [onSuspendCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onsuspendcapture)
- [onTimeUpdate](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontimeupdate)
- [onTimeUpdateCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontimeupdatecapture)
- [onTouchCancel](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchcancel)
- [onTouchCancelCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchcancelcapture)
- [onTouchEnd](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchend)
- [onTouchEndCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchendcapture)
- [onTouchMove](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchmove)
- [onTouchMoveCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchmovecapture)
- [onTouchStart](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchstart)
- [onTouchStartCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontouchstartcapture)
- [onTransitionEnd](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontransitionend)
- [onTransitionEndCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ontransitionendcapture)
- [onVolumeChange](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onvolumechange)
- [onVolumeChangeCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onvolumechangecapture)
- [onWaiting](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onwaiting)
- [onWaitingCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onwaitingcapture)
- [onWheel](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onwheel)
- [onWheelCapture](components_GraphEditor_DataEditor._internal_.TableCellProps.md#onwheelcapture)
- [padding](components_GraphEditor_DataEditor._internal_.TableCellProps.md#padding)
- [placeholder](components_GraphEditor_DataEditor._internal_.TableCellProps.md#placeholder)
- [prefix](components_GraphEditor_DataEditor._internal_.TableCellProps.md#prefix)
- [property](components_GraphEditor_DataEditor._internal_.TableCellProps.md#property)
- [radioGroup](components_GraphEditor_DataEditor._internal_.TableCellProps.md#radiogroup)
- [ref](components_GraphEditor_DataEditor._internal_.TableCellProps.md#ref)
- [resource](components_GraphEditor_DataEditor._internal_.TableCellProps.md#resource)
- [results](components_GraphEditor_DataEditor._internal_.TableCellProps.md#results)
- [role](components_GraphEditor_DataEditor._internal_.TableCellProps.md#role)
- [rowSpan](components_GraphEditor_DataEditor._internal_.TableCellProps.md#rowspan)
- [scope](components_GraphEditor_DataEditor._internal_.TableCellProps.md#scope)
- [security](components_GraphEditor_DataEditor._internal_.TableCellProps.md#security)
- [size](components_GraphEditor_DataEditor._internal_.TableCellProps.md#size)
- [slot](components_GraphEditor_DataEditor._internal_.TableCellProps.md#slot)
- [sortDirection](components_GraphEditor_DataEditor._internal_.TableCellProps.md#sortdirection)
- [spellCheck](components_GraphEditor_DataEditor._internal_.TableCellProps.md#spellcheck)
- [style](components_GraphEditor_DataEditor._internal_.TableCellProps.md#style)
- [suppressContentEditableWarning](components_GraphEditor_DataEditor._internal_.TableCellProps.md#suppresscontenteditablewarning)
- [suppressHydrationWarning](components_GraphEditor_DataEditor._internal_.TableCellProps.md#suppresshydrationwarning)
- [sx](components_GraphEditor_DataEditor._internal_.TableCellProps.md#sx)
- [tabIndex](components_GraphEditor_DataEditor._internal_.TableCellProps.md#tabindex)
- [title](components_GraphEditor_DataEditor._internal_.TableCellProps.md#title)
- [translate](components_GraphEditor_DataEditor._internal_.TableCellProps.md#translate)
- [typeof](components_GraphEditor_DataEditor._internal_.TableCellProps.md#typeof)
- [unselectable](components_GraphEditor_DataEditor._internal_.TableCellProps.md#unselectable)
- [valign](components_GraphEditor_DataEditor._internal_.TableCellProps.md#valign)
- [variant](components_GraphEditor_DataEditor._internal_.TableCellProps.md#variant)
- [vocab](components_GraphEditor_DataEditor._internal_.TableCellProps.md#vocab)
- [width](components_GraphEditor_DataEditor._internal_.TableCellProps.md#width)

## Properties

### abbr

• `Optional` **abbr**: `string`

#### Inherited from

StandardProps.abbr

#### Defined in

node_modules/@types/react/index.d.ts:2454

___

### about

• `Optional` **about**: `string`

#### Inherited from

StandardProps.about

#### Defined in

node_modules/@types/react/index.d.ts:1859

___

### accessKey

• `Optional` **accessKey**: `string`

#### Inherited from

StandardProps.accessKey

#### Defined in

node_modules/@types/react/index.d.ts:1835

___

### align

• `Optional` **align**: ``"inherit"`` \| ``"right"`` \| ``"left"`` \| ``"center"`` \| ``"justify"``

Set the text-align on the table cell content.

Monetary or generally number fields **should be right aligned** as that allows
you to add them up quickly in your head without having to worry about decimals.

**`default`** 'inherit'

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:22

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

StandardProps.aria-activedescendant

#### Defined in

node_modules/@types/react/index.d.ts:1569

___

### aria-atomic

• `Optional` **aria-atomic**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

StandardProps.aria-atomic

#### Defined in

node_modules/@types/react/index.d.ts:1571

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"none"`` \| ``"list"`` \| ``"both"`` \| ``"inline"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

StandardProps.aria-autocomplete

#### Defined in

node_modules/@types/react/index.d.ts:1576

___

### aria-busy

• `Optional` **aria-busy**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

StandardProps.aria-busy

#### Defined in

node_modules/@types/react/index.d.ts:1578

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`see`** aria-pressed @see aria-selected.

#### Inherited from

StandardProps.aria-checked

#### Defined in

node_modules/@types/react/index.d.ts:1583

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`see`** aria-colindex.

#### Inherited from

StandardProps.aria-colcount

#### Defined in

node_modules/@types/react/index.d.ts:1588

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`see`** aria-colcount @see aria-colspan.

#### Inherited from

StandardProps.aria-colindex

#### Defined in

node_modules/@types/react/index.d.ts:1593

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-colindex @see aria-rowspan.

#### Inherited from

StandardProps.aria-colspan

#### Defined in

node_modules/@types/react/index.d.ts:1598

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`see`** aria-owns.

#### Inherited from

StandardProps.aria-controls

#### Defined in

node_modules/@types/react/index.d.ts:1603

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"true"`` \| ``"false"`` \| ``"step"`` \| ``"date"`` \| ``"page"`` \| ``"location"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

StandardProps.aria-current

#### Defined in

node_modules/@types/react/index.d.ts:1605

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`see`** aria-labelledby

#### Inherited from

StandardProps.aria-describedby

#### Defined in

node_modules/@types/react/index.d.ts:1610

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`see`** aria-describedby.

#### Inherited from

StandardProps.aria-details

#### Defined in

node_modules/@types/react/index.d.ts:1615

___

### aria-disabled

• `Optional` **aria-disabled**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`see`** aria-hidden @see aria-readonly.

#### Inherited from

StandardProps.aria-disabled

#### Defined in

node_modules/@types/react/index.d.ts:1620

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"none"`` \| ``"copy"`` \| ``"move"`` \| ``"link"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`deprecated`** in ARIA 1.1

#### Inherited from

StandardProps.aria-dropeffect

#### Defined in

node_modules/@types/react/index.d.ts:1625

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`see`** aria-invalid @see aria-describedby.

#### Inherited from

StandardProps.aria-errormessage

#### Defined in

node_modules/@types/react/index.d.ts:1630

___

### aria-expanded

• `Optional` **aria-expanded**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

StandardProps.aria-expanded

#### Defined in

node_modules/@types/react/index.d.ts:1632

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

StandardProps.aria-flowto

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-grabbed

• `Optional` **aria-grabbed**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`deprecated`** in ARIA 1.1

#### Inherited from

StandardProps.aria-grabbed

#### Defined in

node_modules/@types/react/index.d.ts:1642

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"grid"`` \| ``"dialog"`` \| ``"menu"`` \| ``"listbox"`` \| ``"tree"`` \| ``"true"`` \| ``"false"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

StandardProps.aria-haspopup

#### Defined in

node_modules/@types/react/index.d.ts:1644

___

### aria-hidden

• `Optional` **aria-hidden**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether the element is exposed to an accessibility API.

**`see`** aria-disabled.

#### Inherited from

StandardProps.aria-hidden

#### Defined in

node_modules/@types/react/index.d.ts:1649

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`see`** aria-errormessage.

#### Inherited from

StandardProps.aria-invalid

#### Defined in

node_modules/@types/react/index.d.ts:1654

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

StandardProps.aria-keyshortcuts

#### Defined in

node_modules/@types/react/index.d.ts:1656

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`see`** aria-labelledby.

#### Inherited from

StandardProps.aria-label

#### Defined in

node_modules/@types/react/index.d.ts:1661

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`see`** aria-describedby.

#### Inherited from

StandardProps.aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1666

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

StandardProps.aria-level

#### Defined in

node_modules/@types/react/index.d.ts:1668

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

StandardProps.aria-live

#### Defined in

node_modules/@types/react/index.d.ts:1670

___

### aria-modal

• `Optional` **aria-modal**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether an element is modal when displayed.

#### Inherited from

StandardProps.aria-modal

#### Defined in

node_modules/@types/react/index.d.ts:1672

___

### aria-multiline

• `Optional` **aria-multiline**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

StandardProps.aria-multiline

#### Defined in

node_modules/@types/react/index.d.ts:1674

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

StandardProps.aria-multiselectable

#### Defined in

node_modules/@types/react/index.d.ts:1676

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

StandardProps.aria-orientation

#### Defined in

node_modules/@types/react/index.d.ts:1678

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`see`** aria-controls.

#### Inherited from

StandardProps.aria-owns

#### Defined in

node_modules/@types/react/index.d.ts:1684

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

StandardProps.aria-placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1689

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-setsize.

#### Inherited from

StandardProps.aria-posinset

#### Defined in

node_modules/@types/react/index.d.ts:1694

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "pressed" state of toggle buttons.

**`see`** aria-checked @see aria-selected.

#### Inherited from

StandardProps.aria-pressed

#### Defined in

node_modules/@types/react/index.d.ts:1699

___

### aria-readonly

• `Optional` **aria-readonly**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the element is not editable, but is otherwise operable.

**`see`** aria-disabled.

#### Inherited from

StandardProps.aria-readonly

#### Defined in

node_modules/@types/react/index.d.ts:1704

___

### aria-relevant

• `Optional` **aria-relevant**: ``"all"`` \| ``"text"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`see`** aria-atomic.

#### Inherited from

StandardProps.aria-relevant

#### Defined in

node_modules/@types/react/index.d.ts:1709

___

### aria-required

• `Optional` **aria-required**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

StandardProps.aria-required

#### Defined in

node_modules/@types/react/index.d.ts:1711

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

StandardProps.aria-roledescription

#### Defined in

node_modules/@types/react/index.d.ts:1713

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`see`** aria-rowindex.

#### Inherited from

StandardProps.aria-rowcount

#### Defined in

node_modules/@types/react/index.d.ts:1718

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`see`** aria-rowcount @see aria-rowspan.

#### Inherited from

StandardProps.aria-rowindex

#### Defined in

node_modules/@types/react/index.d.ts:1723

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-rowindex @see aria-colspan.

#### Inherited from

StandardProps.aria-rowspan

#### Defined in

node_modules/@types/react/index.d.ts:1728

___

### aria-selected

• `Optional` **aria-selected**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates the current "selected" state of various widgets.

**`see`** aria-checked @see aria-pressed.

#### Inherited from

StandardProps.aria-selected

#### Defined in

node_modules/@types/react/index.d.ts:1733

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-posinset.

#### Inherited from

StandardProps.aria-setsize

#### Defined in

node_modules/@types/react/index.d.ts:1738

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

StandardProps.aria-sort

#### Defined in

node_modules/@types/react/index.d.ts:1740

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

StandardProps.aria-valuemax

#### Defined in

node_modules/@types/react/index.d.ts:1742

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

StandardProps.aria-valuemin

#### Defined in

node_modules/@types/react/index.d.ts:1744

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`see`** aria-valuetext.

#### Inherited from

StandardProps.aria-valuenow

#### Defined in

node_modules/@types/react/index.d.ts:1749

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

StandardProps.aria-valuetext

#### Defined in

node_modules/@types/react/index.d.ts:1751

___

### autoCapitalize

• `Optional` **autoCapitalize**: `string`

#### Inherited from

StandardProps.autoCapitalize

#### Defined in

node_modules/@types/react/index.d.ts:1869

___

### autoCorrect

• `Optional` **autoCorrect**: `string`

#### Inherited from

StandardProps.autoCorrect

#### Defined in

node_modules/@types/react/index.d.ts:1870

___

### autoSave

• `Optional` **autoSave**: `string`

#### Inherited from

StandardProps.autoSave

#### Defined in

node_modules/@types/react/index.d.ts:1871

___

### children

• `Optional` **children**: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

The content of the component.

#### Overrides

StandardProps.children

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:26

___

### className

• `Optional` **className**: `string`

#### Inherited from

StandardProps.className

#### Defined in

node_modules/@types/react/index.d.ts:1836

___

### classes

• `Optional` **classes**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TableCellClasses`](components_GraphEditor_DataEditor._internal_.TableCellClasses.md)\>

Override or extend the styles applied to the component.

#### Overrides

StandardProps.classes

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:30

___

### colSpan

• `Optional` **colSpan**: `number`

#### Inherited from

StandardProps.colSpan

#### Defined in

node_modules/@types/react/index.d.ts:2450

___

### color

• `Optional` **color**: `string`

#### Inherited from

StandardProps.color

#### Defined in

node_modules/@types/react/index.d.ts:1872

___

### component

• `Optional` **component**: [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<[`TableCellBaseProps`](../modules/components_GraphEditor_DataEditor._internal_.md#tablecellbaseprops)\>

The component used for the root node.
Either a string to use a HTML element or a component.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:35

___

### contentEditable

• `Optional` **contentEditable**: ``"inherit"`` \| [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

#### Inherited from

StandardProps.contentEditable

#### Defined in

node_modules/@types/react/index.d.ts:1837

___

### contextMenu

• `Optional` **contextMenu**: `string`

#### Inherited from

StandardProps.contextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1838

___

### dangerouslySetInnerHTML

• `Optional` **dangerouslySetInnerHTML**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__html` | `string` |

#### Inherited from

StandardProps.dangerouslySetInnerHTML

#### Defined in

node_modules/@types/react/index.d.ts:1360

___

### datatype

• `Optional` **datatype**: `string`

#### Inherited from

StandardProps.datatype

#### Defined in

node_modules/@types/react/index.d.ts:1860

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

#### Inherited from

StandardProps.defaultChecked

#### Defined in

node_modules/@types/react/index.d.ts:1829

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

StandardProps.defaultValue

#### Defined in

node_modules/@types/react/index.d.ts:1830

___

### dir

• `Optional` **dir**: `string`

#### Inherited from

StandardProps.dir

#### Defined in

node_modules/@types/react/index.d.ts:1839

___

### draggable

• `Optional` **draggable**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

#### Inherited from

StandardProps.draggable

#### Defined in

node_modules/@types/react/index.d.ts:1840

___

### headers

• `Optional` **headers**: `string`

#### Inherited from

StandardProps.headers

#### Defined in

node_modules/@types/react/index.d.ts:2451

___

### height

• `Optional` **height**: `string` \| `number`

#### Inherited from

StandardProps.height

#### Defined in

node_modules/@types/react/index.d.ts:2443

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

StandardProps.hidden

#### Defined in

node_modules/@types/react/index.d.ts:1841

___

### id

• `Optional` **id**: `string`

#### Inherited from

StandardProps.id

#### Defined in

node_modules/@types/react/index.d.ts:1842

___

### inlist

• `Optional` **inlist**: `any`

#### Inherited from

StandardProps.inlist

#### Defined in

node_modules/@types/react/index.d.ts:1861

___

### inputMode

• `Optional` **inputMode**: ``"none"`` \| ``"text"`` \| ``"search"`` \| ``"tel"`` \| ``"url"`` \| ``"email"`` \| ``"numeric"`` \| ``"decimal"``

Hints at the type of data that might be entered by the user while editing the element or its contents

**`see`** https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

StandardProps.inputMode

#### Defined in

node_modules/@types/react/index.d.ts:1887

___

### is

• `Optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

**`see`** https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

StandardProps.is

#### Defined in

node_modules/@types/react/index.d.ts:1892

___

### itemID

• `Optional` **itemID**: `string`

#### Inherited from

StandardProps.itemID

#### Defined in

node_modules/@types/react/index.d.ts:1876

___

### itemProp

• `Optional` **itemProp**: `string`

#### Inherited from

StandardProps.itemProp

#### Defined in

node_modules/@types/react/index.d.ts:1873

___

### itemRef

• `Optional` **itemRef**: `string`

#### Inherited from

StandardProps.itemRef

#### Defined in

node_modules/@types/react/index.d.ts:1877

___

### itemScope

• `Optional` **itemScope**: `boolean`

#### Inherited from

StandardProps.itemScope

#### Defined in

node_modules/@types/react/index.d.ts:1874

___

### itemType

• `Optional` **itemType**: `string`

#### Inherited from

StandardProps.itemType

#### Defined in

node_modules/@types/react/index.d.ts:1875

___

### lang

• `Optional` **lang**: `string`

#### Inherited from

StandardProps.lang

#### Defined in

node_modules/@types/react/index.d.ts:1843

___

### onAbort

• `Optional` **onAbort**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAbort

#### Defined in

node_modules/@types/react/index.d.ts:1415

___

### onAbortCapture

• `Optional` **onAbortCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAbortCapture

#### Defined in

node_modules/@types/react/index.d.ts:1416

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationEnd

#### Defined in

node_modules/@types/react/index.d.ts:1545

___

### onAnimationEndCapture

• `Optional` **onAnimationEndCapture**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1546

___

### onAnimationIteration

• `Optional` **onAnimationIteration**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationIteration

#### Defined in

node_modules/@types/react/index.d.ts:1547

___

### onAnimationIterationCapture

• `Optional` **onAnimationIterationCapture**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationIterationCapture

#### Defined in

node_modules/@types/react/index.d.ts:1548

___

### onAnimationStart

• `Optional` **onAnimationStart**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationStart

#### Defined in

node_modules/@types/react/index.d.ts:1543

___

### onAnimationStartCapture

• `Optional` **onAnimationStartCapture**: [`AnimationEventHandler`](../modules/components_Container._internal_.md#animationeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAnimationStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1544

___

### onAuxClick

• `Optional` **onAuxClick**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAuxClick

#### Defined in

node_modules/@types/react/index.d.ts:1461

___

### onAuxClickCapture

• `Optional` **onAuxClickCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onAuxClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1462

___

### onBeforeInput

• `Optional` **onBeforeInput**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onBeforeInput

#### Defined in

node_modules/@types/react/index.d.ts:1389

___

### onBeforeInputCapture

• `Optional` **onBeforeInputCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onBeforeInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1390

___

### onBlur

• `Optional` **onBlur**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onBlur

#### Defined in

node_modules/@types/react/index.d.ts:1383

___

### onBlurCapture

• `Optional` **onBlurCapture**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onBlurCapture

#### Defined in

node_modules/@types/react/index.d.ts:1384

___

### onCanPlay

• `Optional` **onCanPlay**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCanPlay

#### Defined in

node_modules/@types/react/index.d.ts:1417

___

### onCanPlayCapture

• `Optional` **onCanPlayCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCanPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1418

___

### onCanPlayThrough

• `Optional` **onCanPlayThrough**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCanPlayThrough

#### Defined in

node_modules/@types/react/index.d.ts:1419

___

### onCanPlayThroughCapture

• `Optional` **onCanPlayThroughCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCanPlayThroughCapture

#### Defined in

node_modules/@types/react/index.d.ts:1420

___

### onChange

• `Optional` **onChange**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onChange

#### Defined in

node_modules/@types/react/index.d.ts:1387

___

### onChangeCapture

• `Optional` **onChangeCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1388

___

### onClick

• `Optional` **onClick**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onClick

#### Defined in

node_modules/@types/react/index.d.ts:1463

___

### onClickCapture

• `Optional` **onClickCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1464

___

### onCompositionEnd

• `Optional` **onCompositionEnd**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1373

___

### onCompositionEndCapture

• `Optional` **onCompositionEndCapture**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1374

___

### onCompositionStart

• `Optional` **onCompositionStart**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionStart

#### Defined in

node_modules/@types/react/index.d.ts:1375

___

### onCompositionStartCapture

• `Optional` **onCompositionStartCapture**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1376

___

### onCompositionUpdate

• `Optional` **onCompositionUpdate**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1377

___

### onCompositionUpdateCapture

• `Optional` **onCompositionUpdateCapture**: [`CompositionEventHandler`](../modules/components_Container._internal_.md#compositioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCompositionUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1378

___

### onContextMenu

• `Optional` **onContextMenu**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onContextMenu

#### Defined in

node_modules/@types/react/index.d.ts:1465

___

### onContextMenuCapture

• `Optional` **onContextMenuCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onContextMenuCapture

#### Defined in

node_modules/@types/react/index.d.ts:1466

___

### onCopy

• `Optional` **onCopy**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCopy

#### Defined in

node_modules/@types/react/index.d.ts:1365

___

### onCopyCapture

• `Optional` **onCopyCapture**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCopyCapture

#### Defined in

node_modules/@types/react/index.d.ts:1366

___

### onCut

• `Optional` **onCut**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCut

#### Defined in

node_modules/@types/react/index.d.ts:1367

___

### onCutCapture

• `Optional` **onCutCapture**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onCutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1368

___

### onDoubleClick

• `Optional` **onDoubleClick**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDoubleClick

#### Defined in

node_modules/@types/react/index.d.ts:1467

___

### onDoubleClickCapture

• `Optional` **onDoubleClickCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDoubleClickCapture

#### Defined in

node_modules/@types/react/index.d.ts:1468

___

### onDrag

• `Optional` **onDrag**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDrag

#### Defined in

node_modules/@types/react/index.d.ts:1469

___

### onDragCapture

• `Optional` **onDragCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragCapture

#### Defined in

node_modules/@types/react/index.d.ts:1470

___

### onDragEnd

• `Optional` **onDragEnd**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragEnd

#### Defined in

node_modules/@types/react/index.d.ts:1471

___

### onDragEndCapture

• `Optional` **onDragEndCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1472

___

### onDragEnter

• `Optional` **onDragEnter**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragEnter

#### Defined in

node_modules/@types/react/index.d.ts:1473

___

### onDragEnterCapture

• `Optional` **onDragEnterCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1474

___

### onDragExit

• `Optional` **onDragExit**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragExit

#### Defined in

node_modules/@types/react/index.d.ts:1475

___

### onDragExitCapture

• `Optional` **onDragExitCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragExitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1476

___

### onDragLeave

• `Optional` **onDragLeave**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragLeave

#### Defined in

node_modules/@types/react/index.d.ts:1477

___

### onDragLeaveCapture

• `Optional` **onDragLeaveCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1478

___

### onDragOver

• `Optional` **onDragOver**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragOver

#### Defined in

node_modules/@types/react/index.d.ts:1479

___

### onDragOverCapture

• `Optional` **onDragOverCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1480

___

### onDragStart

• `Optional` **onDragStart**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragStart

#### Defined in

node_modules/@types/react/index.d.ts:1481

___

### onDragStartCapture

• `Optional` **onDragStartCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDragStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1482

___

### onDrop

• `Optional` **onDrop**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDrop

#### Defined in

node_modules/@types/react/index.d.ts:1483

___

### onDropCapture

• `Optional` **onDropCapture**: [`DragEventHandler`](../modules/components_Container._internal_.md#drageventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDropCapture

#### Defined in

node_modules/@types/react/index.d.ts:1484

___

### onDurationChange

• `Optional` **onDurationChange**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDurationChange

#### Defined in

node_modules/@types/react/index.d.ts:1421

___

### onDurationChangeCapture

• `Optional` **onDurationChangeCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onDurationChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1422

___

### onEmptied

• `Optional` **onEmptied**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEmptied

#### Defined in

node_modules/@types/react/index.d.ts:1423

___

### onEmptiedCapture

• `Optional` **onEmptiedCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEmptiedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1424

___

### onEncrypted

• `Optional` **onEncrypted**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEncrypted

#### Defined in

node_modules/@types/react/index.d.ts:1425

___

### onEncryptedCapture

• `Optional` **onEncryptedCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEncryptedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1426

___

### onEnded

• `Optional` **onEnded**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEnded

#### Defined in

node_modules/@types/react/index.d.ts:1427

___

### onEndedCapture

• `Optional` **onEndedCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onEndedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1428

___

### onError

• `Optional` **onError**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onError

#### Defined in

node_modules/@types/react/index.d.ts:1403

___

### onErrorCapture

• `Optional` **onErrorCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onErrorCapture

#### Defined in

node_modules/@types/react/index.d.ts:1404

___

### onFocus

• `Optional` **onFocus**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onFocus

#### Defined in

node_modules/@types/react/index.d.ts:1381

___

### onFocusCapture

• `Optional` **onFocusCapture**: [`FocusEventHandler`](../modules/components_Container._internal_.md#focuseventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onFocusCapture

#### Defined in

node_modules/@types/react/index.d.ts:1382

___

### onGotPointerCapture

• `Optional` **onGotPointerCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onGotPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1529

___

### onGotPointerCaptureCapture

• `Optional` **onGotPointerCaptureCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onGotPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1530

___

### onInput

• `Optional` **onInput**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onInput

#### Defined in

node_modules/@types/react/index.d.ts:1391

___

### onInputCapture

• `Optional` **onInputCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onInputCapture

#### Defined in

node_modules/@types/react/index.d.ts:1392

___

### onInvalid

• `Optional` **onInvalid**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onInvalid

#### Defined in

node_modules/@types/react/index.d.ts:1397

___

### onInvalidCapture

• `Optional` **onInvalidCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onInvalidCapture

#### Defined in

node_modules/@types/react/index.d.ts:1398

___

### onKeyDown

• `Optional` **onKeyDown**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyDown

#### Defined in

node_modules/@types/react/index.d.ts:1407

___

### onKeyDownCapture

• `Optional` **onKeyDownCapture**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1408

___

### onKeyPress

• `Optional` **onKeyPress**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyPress

#### Defined in

node_modules/@types/react/index.d.ts:1409

___

### onKeyPressCapture

• `Optional` **onKeyPressCapture**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyPressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1410

___

### onKeyUp

• `Optional` **onKeyUp**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyUp

#### Defined in

node_modules/@types/react/index.d.ts:1411

___

### onKeyUpCapture

• `Optional` **onKeyUpCapture**: [`KeyboardEventHandler`](../modules/components_Container._internal_.md#keyboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onKeyUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1412

___

### onLoad

• `Optional` **onLoad**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoad

#### Defined in

node_modules/@types/react/index.d.ts:1401

___

### onLoadCapture

• `Optional` **onLoadCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadCapture

#### Defined in

node_modules/@types/react/index.d.ts:1402

___

### onLoadStart

• `Optional` **onLoadStart**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadStart

#### Defined in

node_modules/@types/react/index.d.ts:1433

___

### onLoadStartCapture

• `Optional` **onLoadStartCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1434

___

### onLoadedData

• `Optional` **onLoadedData**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadedData

#### Defined in

node_modules/@types/react/index.d.ts:1429

___

### onLoadedDataCapture

• `Optional` **onLoadedDataCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadedDataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1430

___

### onLoadedMetadata

• `Optional` **onLoadedMetadata**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadedMetadata

#### Defined in

node_modules/@types/react/index.d.ts:1431

___

### onLoadedMetadataCapture

• `Optional` **onLoadedMetadataCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLoadedMetadataCapture

#### Defined in

node_modules/@types/react/index.d.ts:1432

___

### onLostPointerCapture

• `Optional` **onLostPointerCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLostPointerCapture

#### Defined in

node_modules/@types/react/index.d.ts:1531

___

### onLostPointerCaptureCapture

• `Optional` **onLostPointerCaptureCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onLostPointerCaptureCapture

#### Defined in

node_modules/@types/react/index.d.ts:1532

___

### onMouseDown

• `Optional` **onMouseDown**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseDown

#### Defined in

node_modules/@types/react/index.d.ts:1485

___

### onMouseDownCapture

• `Optional` **onMouseDownCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1486

___

### onMouseEnter

• `Optional` **onMouseEnter**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseEnter

#### Defined in

node_modules/@types/react/index.d.ts:1487

___

### onMouseLeave

• `Optional` **onMouseLeave**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseLeave

#### Defined in

node_modules/@types/react/index.d.ts:1488

___

### onMouseMove

• `Optional` **onMouseMove**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseMove

#### Defined in

node_modules/@types/react/index.d.ts:1489

___

### onMouseMoveCapture

• `Optional` **onMouseMoveCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1490

___

### onMouseOut

• `Optional` **onMouseOut**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseOut

#### Defined in

node_modules/@types/react/index.d.ts:1491

___

### onMouseOutCapture

• `Optional` **onMouseOutCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1492

___

### onMouseOver

• `Optional` **onMouseOver**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseOver

#### Defined in

node_modules/@types/react/index.d.ts:1493

___

### onMouseOverCapture

• `Optional` **onMouseOverCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1494

___

### onMouseUp

• `Optional` **onMouseUp**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseUp

#### Defined in

node_modules/@types/react/index.d.ts:1495

___

### onMouseUpCapture

• `Optional` **onMouseUpCapture**: [`MouseEventHandler`](../modules/components_Container._internal_.md#mouseeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onMouseUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1496

___

### onPaste

• `Optional` **onPaste**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPaste

#### Defined in

node_modules/@types/react/index.d.ts:1369

___

### onPasteCapture

• `Optional` **onPasteCapture**: [`ClipboardEventHandler`](../modules/components_Container._internal_.md#clipboardeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPasteCapture

#### Defined in

node_modules/@types/react/index.d.ts:1370

___

### onPause

• `Optional` **onPause**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPause

#### Defined in

node_modules/@types/react/index.d.ts:1435

___

### onPauseCapture

• `Optional` **onPauseCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPauseCapture

#### Defined in

node_modules/@types/react/index.d.ts:1436

___

### onPlay

• `Optional` **onPlay**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPlay

#### Defined in

node_modules/@types/react/index.d.ts:1437

___

### onPlayCapture

• `Optional` **onPlayCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPlayCapture

#### Defined in

node_modules/@types/react/index.d.ts:1438

___

### onPlaying

• `Optional` **onPlaying**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPlaying

#### Defined in

node_modules/@types/react/index.d.ts:1439

___

### onPlayingCapture

• `Optional` **onPlayingCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPlayingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1440

___

### onPointerCancel

• `Optional` **onPointerCancel**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerCancel

#### Defined in

node_modules/@types/react/index.d.ts:1519

___

### onPointerCancelCapture

• `Optional` **onPointerCancelCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1520

___

### onPointerDown

• `Optional` **onPointerDown**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerDown

#### Defined in

node_modules/@types/react/index.d.ts:1513

___

### onPointerDownCapture

• `Optional` **onPointerDownCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerDownCapture

#### Defined in

node_modules/@types/react/index.d.ts:1514

___

### onPointerEnter

• `Optional` **onPointerEnter**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerEnter

#### Defined in

node_modules/@types/react/index.d.ts:1521

___

### onPointerEnterCapture

• `Optional` **onPointerEnterCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerEnterCapture

#### Defined in

node_modules/@types/react/index.d.ts:1522

___

### onPointerLeave

• `Optional` **onPointerLeave**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerLeave

#### Defined in

node_modules/@types/react/index.d.ts:1523

___

### onPointerLeaveCapture

• `Optional` **onPointerLeaveCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerLeaveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1524

___

### onPointerMove

• `Optional` **onPointerMove**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerMove

#### Defined in

node_modules/@types/react/index.d.ts:1515

___

### onPointerMoveCapture

• `Optional` **onPointerMoveCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1516

___

### onPointerOut

• `Optional` **onPointerOut**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerOut

#### Defined in

node_modules/@types/react/index.d.ts:1527

___

### onPointerOutCapture

• `Optional` **onPointerOutCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerOutCapture

#### Defined in

node_modules/@types/react/index.d.ts:1528

___

### onPointerOver

• `Optional` **onPointerOver**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerOver

#### Defined in

node_modules/@types/react/index.d.ts:1525

___

### onPointerOverCapture

• `Optional` **onPointerOverCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerOverCapture

#### Defined in

node_modules/@types/react/index.d.ts:1526

___

### onPointerUp

• `Optional` **onPointerUp**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerUp

#### Defined in

node_modules/@types/react/index.d.ts:1517

___

### onPointerUpCapture

• `Optional` **onPointerUpCapture**: [`PointerEventHandler`](../modules/components_Container._internal_.md#pointereventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onPointerUpCapture

#### Defined in

node_modules/@types/react/index.d.ts:1518

___

### onProgress

• `Optional` **onProgress**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onProgress

#### Defined in

node_modules/@types/react/index.d.ts:1441

___

### onProgressCapture

• `Optional` **onProgressCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onProgressCapture

#### Defined in

node_modules/@types/react/index.d.ts:1442

___

### onRateChange

• `Optional` **onRateChange**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onRateChange

#### Defined in

node_modules/@types/react/index.d.ts:1443

___

### onRateChangeCapture

• `Optional` **onRateChangeCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onRateChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1444

___

### onReset

• `Optional` **onReset**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onReset

#### Defined in

node_modules/@types/react/index.d.ts:1393

___

### onResetCapture

• `Optional` **onResetCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onResetCapture

#### Defined in

node_modules/@types/react/index.d.ts:1394

___

### onScroll

• `Optional` **onScroll**: [`UIEventHandler`](../modules/components_Container._internal_.md#uieventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onScroll

#### Defined in

node_modules/@types/react/index.d.ts:1535

___

### onScrollCapture

• `Optional` **onScrollCapture**: [`UIEventHandler`](../modules/components_Container._internal_.md#uieventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onScrollCapture

#### Defined in

node_modules/@types/react/index.d.ts:1536

___

### onSeeked

• `Optional` **onSeeked**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSeeked

#### Defined in

node_modules/@types/react/index.d.ts:1445

___

### onSeekedCapture

• `Optional` **onSeekedCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSeekedCapture

#### Defined in

node_modules/@types/react/index.d.ts:1446

___

### onSeeking

• `Optional` **onSeeking**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSeeking

#### Defined in

node_modules/@types/react/index.d.ts:1447

___

### onSeekingCapture

• `Optional` **onSeekingCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSeekingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1448

___

### onSelect

• `Optional` **onSelect**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSelect

#### Defined in

node_modules/@types/react/index.d.ts:1499

___

### onSelectCapture

• `Optional` **onSelectCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSelectCapture

#### Defined in

node_modules/@types/react/index.d.ts:1500

___

### onStalled

• `Optional` **onStalled**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onStalled

#### Defined in

node_modules/@types/react/index.d.ts:1449

___

### onStalledCapture

• `Optional` **onStalledCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onStalledCapture

#### Defined in

node_modules/@types/react/index.d.ts:1450

___

### onSubmit

• `Optional` **onSubmit**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSubmit

#### Defined in

node_modules/@types/react/index.d.ts:1395

___

### onSubmitCapture

• `Optional` **onSubmitCapture**: [`FormEventHandler`](../modules/components_Container._internal_.md#formeventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSubmitCapture

#### Defined in

node_modules/@types/react/index.d.ts:1396

___

### onSuspend

• `Optional` **onSuspend**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSuspend

#### Defined in

node_modules/@types/react/index.d.ts:1451

___

### onSuspendCapture

• `Optional` **onSuspendCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onSuspendCapture

#### Defined in

node_modules/@types/react/index.d.ts:1452

___

### onTimeUpdate

• `Optional` **onTimeUpdate**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTimeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:1453

___

### onTimeUpdateCapture

• `Optional` **onTimeUpdateCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTimeUpdateCapture

#### Defined in

node_modules/@types/react/index.d.ts:1454

___

### onTouchCancel

• `Optional` **onTouchCancel**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchCancel

#### Defined in

node_modules/@types/react/index.d.ts:1503

___

### onTouchCancelCapture

• `Optional` **onTouchCancelCapture**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchCancelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1504

___

### onTouchEnd

• `Optional` **onTouchEnd**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchEnd

#### Defined in

node_modules/@types/react/index.d.ts:1505

___

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1506

___

### onTouchMove

• `Optional` **onTouchMove**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchMove

#### Defined in

node_modules/@types/react/index.d.ts:1507

___

### onTouchMoveCapture

• `Optional` **onTouchMoveCapture**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchMoveCapture

#### Defined in

node_modules/@types/react/index.d.ts:1508

___

### onTouchStart

• `Optional` **onTouchStart**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchStart

#### Defined in

node_modules/@types/react/index.d.ts:1509

___

### onTouchStartCapture

• `Optional` **onTouchStartCapture**: [`TouchEventHandler`](../modules/components_Container._internal_.md#toucheventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTouchStartCapture

#### Defined in

node_modules/@types/react/index.d.ts:1510

___

### onTransitionEnd

• `Optional` **onTransitionEnd**: [`TransitionEventHandler`](../modules/components_Container._internal_.md#transitioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTransitionEnd

#### Defined in

node_modules/@types/react/index.d.ts:1551

___

### onTransitionEndCapture

• `Optional` **onTransitionEndCapture**: [`TransitionEventHandler`](../modules/components_Container._internal_.md#transitioneventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onTransitionEndCapture

#### Defined in

node_modules/@types/react/index.d.ts:1552

___

### onVolumeChange

• `Optional` **onVolumeChange**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onVolumeChange

#### Defined in

node_modules/@types/react/index.d.ts:1455

___

### onVolumeChangeCapture

• `Optional` **onVolumeChangeCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onVolumeChangeCapture

#### Defined in

node_modules/@types/react/index.d.ts:1456

___

### onWaiting

• `Optional` **onWaiting**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onWaiting

#### Defined in

node_modules/@types/react/index.d.ts:1457

___

### onWaitingCapture

• `Optional` **onWaitingCapture**: [`ReactEventHandler`](../modules/components_Container._internal_.md#reacteventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onWaitingCapture

#### Defined in

node_modules/@types/react/index.d.ts:1458

___

### onWheel

• `Optional` **onWheel**: [`WheelEventHandler`](../modules/components_Container._internal_.md#wheeleventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onWheel

#### Defined in

node_modules/@types/react/index.d.ts:1539

___

### onWheelCapture

• `Optional` **onWheelCapture**: [`WheelEventHandler`](../modules/components_Container._internal_.md#wheeleventhandler)<[`HTMLTableCellElement`](../modules/components_ClusterNodeContainer._internal_.md#htmltablecellelement)\>

#### Inherited from

StandardProps.onWheelCapture

#### Defined in

node_modules/@types/react/index.d.ts:1540

___

### padding

• `Optional` **padding**: ``"none"`` \| ``"checkbox"`` \| ``"normal"``

Sets the padding applied to the cell.
The prop defaults to the value (`'default'`) inherited from the parent Table component.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:40

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

StandardProps.placeholder

#### Defined in

node_modules/@types/react/index.d.ts:1844

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

StandardProps.prefix

#### Defined in

node_modules/@types/react/index.d.ts:1862

___

### property

• `Optional` **property**: `string`

#### Inherited from

StandardProps.property

#### Defined in

node_modules/@types/react/index.d.ts:1863

___

### radioGroup

• `Optional` **radioGroup**: `string`

#### Inherited from

StandardProps.radioGroup

#### Defined in

node_modules/@types/react/index.d.ts:1853

___

### ref

• `Optional` **ref**: [`Ref`](../modules/components_Container._internal_.md#ref)<`unknown`\>

#### Inherited from

StandardProps.ref

#### Defined in

node_modules/@mui/material/index.d.ts:38

___

### resource

• `Optional` **resource**: `string`

#### Inherited from

StandardProps.resource

#### Defined in

node_modules/@types/react/index.d.ts:1864

___

### results

• `Optional` **results**: `number`

#### Inherited from

StandardProps.results

#### Defined in

node_modules/@types/react/index.d.ts:1878

___

### role

• `Optional` **role**: [`AriaRole`](../modules/components_Container._internal_.md#ariarole)

#### Inherited from

StandardProps.role

#### Defined in

node_modules/@types/react/index.d.ts:1856

___

### rowSpan

• `Optional` **rowSpan**: `number`

#### Inherited from

StandardProps.rowSpan

#### Defined in

node_modules/@types/react/index.d.ts:2452

___

### scope

• `Optional` **scope**: `string`

Set scope attribute.

#### Overrides

StandardProps.scope

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:44

___

### security

• `Optional` **security**: `string`

#### Inherited from

StandardProps.security

#### Defined in

node_modules/@types/react/index.d.ts:1879

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"``

Specify the size of the cell.
The prop defaults to the value (`'medium'`) inherited from the parent Table component.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:49

___

### slot

• `Optional` **slot**: `string`

#### Inherited from

StandardProps.slot

#### Defined in

node_modules/@types/react/index.d.ts:1845

___

### sortDirection

• `Optional` **sortDirection**: [`SortDirection`](../modules/components_GraphEditor_DataEditor._internal_.md#sortdirection)

Set aria-sort direction.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:53

___

### spellCheck

• `Optional` **spellCheck**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

#### Inherited from

StandardProps.spellCheck

#### Defined in

node_modules/@types/react/index.d.ts:1846

___

### style

• `Optional` **style**: [`CSSProperties`](components_Container._internal_.CSSProperties.md)

#### Inherited from

StandardProps.style

#### Defined in

node_modules/@types/react/index.d.ts:1847

___

### suppressContentEditableWarning

• `Optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

StandardProps.suppressContentEditableWarning

#### Defined in

node_modules/@types/react/index.d.ts:1831

___

### suppressHydrationWarning

• `Optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

StandardProps.suppressHydrationWarning

#### Defined in

node_modules/@types/react/index.d.ts:1832

___

### sx

• `Optional` **sx**: [`SxProps`](../modules/components_GraphEditor_DataEditor._internal_.md#sxprops)<[`Theme`](components_GraphEditor_DataEditor._internal_.Theme.md)\>

The system prop that allows defining system overrides as well as additional CSS styles.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:57

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

StandardProps.tabIndex

#### Defined in

node_modules/@types/react/index.d.ts:1848

___

### title

• `Optional` **title**: `string`

#### Inherited from

StandardProps.title

#### Defined in

node_modules/@types/react/index.d.ts:1849

___

### translate

• `Optional` **translate**: ``"no"`` \| ``"yes"``

#### Inherited from

StandardProps.translate

#### Defined in

node_modules/@types/react/index.d.ts:1850

___

### typeof

• `Optional` **typeof**: `string`

#### Inherited from

StandardProps.typeof

#### Defined in

node_modules/@types/react/index.d.ts:1865

___

### unselectable

• `Optional` **unselectable**: ``"on"`` \| ``"off"``

#### Inherited from

StandardProps.unselectable

#### Defined in

node_modules/@types/react/index.d.ts:1880

___

### valign

• `Optional` **valign**: ``"top"`` \| ``"bottom"`` \| ``"baseline"`` \| ``"middle"``

#### Inherited from

StandardProps.valign

#### Defined in

node_modules/@types/react/index.d.ts:2445

___

### variant

• `Optional` **variant**: ``"body"`` \| ``"footer"`` \| ``"head"``

Specify the cell type.
The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.

#### Defined in

node_modules/@mui/material/TableCell/TableCell.d.ts:62

___

### vocab

• `Optional` **vocab**: `string`

#### Inherited from

StandardProps.vocab

#### Defined in

node_modules/@types/react/index.d.ts:1866

___

### width

• `Optional` **width**: `string` \| `number`

#### Inherited from

StandardProps.width

#### Defined in

node_modules/@types/react/index.d.ts:2444
