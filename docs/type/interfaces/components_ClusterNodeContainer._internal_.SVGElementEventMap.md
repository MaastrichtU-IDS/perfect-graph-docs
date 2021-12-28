[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SVGElementEventMap

# Interface: SVGElementEventMap

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SVGElementEventMap

## Hierarchy

- [`ElementEventMap`](components_ClusterNodeContainer._internal_.ElementEventMap.md)

- [`DocumentAndElementEventHandlersEventMap`](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md)

- [`GlobalEventHandlersEventMap`](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md)

  ↳ **`SVGElementEventMap`**

## Table of contents

### Properties

- [abort](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#abort)
- [animationcancel](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#animationcancel)
- [animationend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#animationend)
- [animationiteration](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#animationiteration)
- [animationstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#animationstart)
- [auxclick](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#auxclick)
- [beforeinput](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#beforeinput)
- [blur](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#blur)
- [canplay](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#canplay)
- [canplaythrough](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#canplaythrough)
- [change](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#change)
- [click](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#click)
- [close](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#close)
- [compositionend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#compositionend)
- [compositionstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#compositionstart)
- [compositionupdate](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#compositionupdate)
- [contextmenu](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#contextmenu)
- [copy](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#copy)
- [cuechange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#cuechange)
- [cut](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#cut)
- [dblclick](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dblclick)
- [drag](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#drag)
- [dragend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dragend)
- [dragenter](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dragenter)
- [dragleave](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dragleave)
- [dragover](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dragover)
- [dragstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#dragstart)
- [drop](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#drop)
- [durationchange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#durationchange)
- [emptied](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#emptied)
- [ended](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#ended)
- [error](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#error)
- [focus](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#focus)
- [focusin](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#focusin)
- [focusout](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#focusout)
- [formdata](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#formdata)
- [fullscreenchange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#fullscreenchange)
- [fullscreenerror](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#fullscreenerror)
- [gotpointercapture](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#gotpointercapture)
- [input](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#input)
- [invalid](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#invalid)
- [keydown](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#keydown)
- [keypress](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#keypress)
- [keyup](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#keyup)
- [load](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#load)
- [loadeddata](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#loadeddata)
- [loadedmetadata](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#loadedmetadata)
- [loadstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#loadstart)
- [lostpointercapture](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#lostpointercapture)
- [mousedown](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mousedown)
- [mouseenter](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mouseenter)
- [mouseleave](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mouseleave)
- [mousemove](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mousemove)
- [mouseout](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mouseout)
- [mouseover](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mouseover)
- [mouseup](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#mouseup)
- [paste](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#paste)
- [pause](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pause)
- [play](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#play)
- [playing](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#playing)
- [pointercancel](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointercancel)
- [pointerdown](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerdown)
- [pointerenter](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerenter)
- [pointerleave](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerleave)
- [pointermove](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointermove)
- [pointerout](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerout)
- [pointerover](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerover)
- [pointerup](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#pointerup)
- [progress](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#progress)
- [ratechange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#ratechange)
- [reset](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#reset)
- [resize](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#resize)
- [scroll](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#scroll)
- [securitypolicyviolation](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#securitypolicyviolation)
- [seeked](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#seeked)
- [seeking](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#seeking)
- [select](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#select)
- [selectionchange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#selectionchange)
- [selectstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#selectstart)
- [stalled](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#stalled)
- [submit](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#submit)
- [suspend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#suspend)
- [timeupdate](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#timeupdate)
- [toggle](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#toggle)
- [touchcancel](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#touchcancel)
- [touchend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#touchend)
- [touchmove](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#touchmove)
- [touchstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#touchstart)
- [transitioncancel](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#transitioncancel)
- [transitionend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#transitionend)
- [transitionrun](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#transitionrun)
- [transitionstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#transitionstart)
- [volumechange](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#volumechange)
- [waiting](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#waiting)
- [webkitanimationend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#webkitanimationend)
- [webkitanimationiteration](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#webkitanimationiteration)
- [webkitanimationstart](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#webkitanimationstart)
- [webkittransitionend](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#webkittransitionend)
- [wheel](components_ClusterNodeContainer._internal_.SVGElementEventMap.md#wheel)

## Properties

### abort

• **abort**: `UIEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[abort](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5353

___

### animationcancel

• **animationcancel**: `AnimationEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[animationcancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5354

___

### animationend

• **animationend**: `AnimationEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[animationend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5355

___

### animationiteration

• **animationiteration**: `AnimationEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[animationiteration](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5356

___

### animationstart

• **animationstart**: `AnimationEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[animationstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5357

___

### auxclick

• **auxclick**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[auxclick](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5358

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/components_ClusterNodeContainer._internal_.md#inputevent)

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[beforeinput](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#beforeinput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5359

___

### blur

• **blur**: `FocusEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[blur](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5360

___

### canplay

• **canplay**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[canplay](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5361

___

### canplaythrough

• **canplaythrough**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[canplaythrough](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5362

___

### change

• **change**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[change](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5363

___

### click

• **click**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[click](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5364

___

### close

• **close**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[close](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5365

___

### compositionend

• **compositionend**: `CompositionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[compositionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5366

___

### compositionstart

• **compositionstart**: `CompositionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[compositionstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5367

___

### compositionupdate

• **compositionupdate**: `CompositionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[compositionupdate](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5368

___

### contextmenu

• **contextmenu**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[contextmenu](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5369

___

### copy

• **copy**: `ClipboardEvent`

#### Inherited from

[DocumentAndElementEventHandlersEventMap](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md).[copy](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4570

___

### cuechange

• **cuechange**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[cuechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5370

___

### cut

• **cut**: `ClipboardEvent`

#### Inherited from

[DocumentAndElementEventHandlersEventMap](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md).[cut](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4571

___

### dblclick

• **dblclick**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dblclick](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5371

___

### drag

• **drag**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[drag](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5372

___

### dragend

• **dragend**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dragend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5373

___

### dragenter

• **dragenter**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dragenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5374

___

### dragleave

• **dragleave**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dragleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5375

___

### dragover

• **dragover**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dragover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5376

___

### dragstart

• **dragstart**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[dragstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5377

___

### drop

• **drop**: `DragEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[drop](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5378

___

### durationchange

• **durationchange**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[durationchange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5379

___

### emptied

• **emptied**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[emptied](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5380

___

### ended

• **ended**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[ended](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5381

___

### error

• **error**: [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[error](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5382

___

### focus

• **focus**: `FocusEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[focus](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5383

___

### focusin

• **focusin**: `FocusEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[focusin](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5384

___

### focusout

• **focusout**: `FocusEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[focusout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5385

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[formdata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5386

___

### fullscreenchange

• **fullscreenchange**: `Event`

#### Inherited from

[ElementEventMap](components_ClusterNodeContainer._internal_.ElementEventMap.md).[fullscreenchange](components_ClusterNodeContainer._internal_.ElementEventMap.md#fullscreenchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4714

___

### fullscreenerror

• **fullscreenerror**: `Event`

#### Inherited from

[ElementEventMap](components_ClusterNodeContainer._internal_.ElementEventMap.md).[fullscreenerror](components_ClusterNodeContainer._internal_.ElementEventMap.md#fullscreenerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4715

___

### gotpointercapture

• **gotpointercapture**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[gotpointercapture](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5387

___

### input

• **input**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[input](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5388

___

### invalid

• **invalid**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[invalid](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5389

___

### keydown

• **keydown**: `KeyboardEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[keydown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5390

___

### keypress

• **keypress**: `KeyboardEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[keypress](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5391

___

### keyup

• **keyup**: `KeyboardEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[keyup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5392

___

### load

• **load**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[load](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5393

___

### loadeddata

• **loadeddata**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[loadeddata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5394

___

### loadedmetadata

• **loadedmetadata**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[loadedmetadata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5395

___

### loadstart

• **loadstart**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[loadstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5396

___

### lostpointercapture

• **lostpointercapture**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[lostpointercapture](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5397

___

### mousedown

• **mousedown**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mousedown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5398

___

### mouseenter

• **mouseenter**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mouseenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5399

___

### mouseleave

• **mouseleave**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mouseleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5400

___

### mousemove

• **mousemove**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mousemove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5401

___

### mouseout

• **mouseout**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mouseout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5402

___

### mouseover

• **mouseover**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mouseover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5403

___

### mouseup

• **mouseup**: `MouseEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[mouseup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5404

___

### paste

• **paste**: `ClipboardEvent`

#### Inherited from

[DocumentAndElementEventHandlersEventMap](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md).[paste](components_ClusterNodeContainer._internal_.DocumentAndElementEventHandlersEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4572

___

### pause

• **pause**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pause](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5405

___

### play

• **play**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[play](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5406

___

### playing

• **playing**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[playing](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5407

___

### pointercancel

• **pointercancel**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointercancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5408

___

### pointerdown

• **pointerdown**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerdown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5409

___

### pointerenter

• **pointerenter**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5410

___

### pointerleave

• **pointerleave**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5411

___

### pointermove

• **pointermove**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointermove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5412

___

### pointerout

• **pointerout**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5413

___

### pointerover

• **pointerover**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5414

___

### pointerup

• **pointerup**: `PointerEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[pointerup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5415

___

### progress

• **progress**: `ProgressEvent`<`EventTarget`\>

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[progress](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5416

___

### ratechange

• **ratechange**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[ratechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#ratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5417

___

### reset

• **reset**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[reset](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5418

___

### resize

• **resize**: `UIEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[resize](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5419

___

### scroll

• **scroll**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[scroll](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5420

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/components_ClusterNodeContainer._internal_.md#securitypolicyviolationevent)

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[securitypolicyviolation](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5421

___

### seeked

• **seeked**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[seeked](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5422

___

### seeking

• **seeking**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[seeking](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5423

___

### select

• **select**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[select](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5424

___

### selectionchange

• **selectionchange**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[selectionchange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5425

___

### selectstart

• **selectstart**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[selectstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5426

___

### stalled

• **stalled**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[stalled](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#stalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5427

___

### submit

• **submit**: [`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[submit](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5428

___

### suspend

• **suspend**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[suspend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5429

___

### timeupdate

• **timeupdate**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[timeupdate](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5430

___

### toggle

• **toggle**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[toggle](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5431

___

### touchcancel

• **touchcancel**: `TouchEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[touchcancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5432

___

### touchend

• **touchend**: `TouchEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[touchend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5433

___

### touchmove

• **touchmove**: `TouchEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[touchmove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5434

___

### touchstart

• **touchstart**: `TouchEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[touchstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5435

___

### transitioncancel

• **transitioncancel**: `TransitionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[transitioncancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5436

___

### transitionend

• **transitionend**: `TransitionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[transitionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5437

___

### transitionrun

• **transitionrun**: `TransitionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[transitionrun](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5438

___

### transitionstart

• **transitionstart**: `TransitionEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[transitionstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5439

___

### volumechange

• **volumechange**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[volumechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5440

___

### waiting

• **waiting**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[waiting](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5441

___

### webkitanimationend

• **webkitanimationend**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[webkitanimationend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5442

___

### webkitanimationiteration

• **webkitanimationiteration**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[webkitanimationiteration](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5443

___

### webkitanimationstart

• **webkitanimationstart**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[webkitanimationstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5444

___

### webkittransitionend

• **webkittransitionend**: `Event`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[webkittransitionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5445

___

### wheel

• **wheel**: `WheelEvent`

#### Inherited from

[GlobalEventHandlersEventMap](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md).[wheel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5446
