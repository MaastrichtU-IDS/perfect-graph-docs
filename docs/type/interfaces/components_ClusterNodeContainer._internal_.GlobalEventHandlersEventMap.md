[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / GlobalEventHandlersEventMap

# Interface: GlobalEventHandlersEventMap

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).GlobalEventHandlersEventMap

## Hierarchy

- **`GlobalEventHandlersEventMap`**

  ↳ [`HTMLElementEventMap`](components_ClusterNodeContainer._internal_.HTMLElementEventMap.md)

  ↳ [`SVGElementEventMap`](components_ClusterNodeContainer._internal_.SVGElementEventMap.md)

  ↳ [`DocumentEventMap`](components_ClusterNodeContainer._internal_.DocumentEventMap.md)

## Table of contents

### Properties

- [abort](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#abort)
- [animationcancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationcancel)
- [animationend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationend)
- [animationiteration](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationiteration)
- [animationstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#animationstart)
- [auxclick](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#auxclick)
- [beforeinput](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#beforeinput)
- [blur](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#blur)
- [canplay](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#canplay)
- [canplaythrough](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#canplaythrough)
- [change](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#change)
- [click](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#click)
- [close](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#close)
- [compositionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionend)
- [compositionstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionstart)
- [compositionupdate](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#compositionupdate)
- [contextmenu](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#contextmenu)
- [cuechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#cuechange)
- [dblclick](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dblclick)
- [drag](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#drag)
- [dragend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragend)
- [dragenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragenter)
- [dragleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragleave)
- [dragover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragover)
- [dragstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#dragstart)
- [drop](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#drop)
- [durationchange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#durationchange)
- [emptied](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#emptied)
- [ended](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#ended)
- [error](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#error)
- [focus](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focus)
- [focusin](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focusin)
- [focusout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#focusout)
- [formdata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#formdata)
- [gotpointercapture](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)
- [input](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#input)
- [invalid](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#invalid)
- [keydown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keydown)
- [keypress](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keypress)
- [keyup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#keyup)
- [load](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#load)
- [loadeddata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadeddata)
- [loadedmetadata](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)
- [loadstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#loadstart)
- [lostpointercapture](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)
- [mousedown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mousedown)
- [mouseenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseenter)
- [mouseleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseleave)
- [mousemove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mousemove)
- [mouseout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseout)
- [mouseover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseover)
- [mouseup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#mouseup)
- [pause](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pause)
- [play](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#play)
- [playing](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#playing)
- [pointercancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointercancel)
- [pointerdown](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerdown)
- [pointerenter](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerenter)
- [pointerleave](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerleave)
- [pointermove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointermove)
- [pointerout](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerout)
- [pointerover](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerover)
- [pointerup](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#pointerup)
- [progress](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#progress)
- [ratechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#ratechange)
- [reset](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#reset)
- [resize](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#resize)
- [scroll](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#scroll)
- [securitypolicyviolation](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)
- [seeked](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#seeked)
- [seeking](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#seeking)
- [select](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#select)
- [selectionchange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#selectionchange)
- [selectstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#selectstart)
- [stalled](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#stalled)
- [submit](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#submit)
- [suspend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#suspend)
- [timeupdate](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#timeupdate)
- [toggle](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#toggle)
- [touchcancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchcancel)
- [touchend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchend)
- [touchmove](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchmove)
- [touchstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#touchstart)
- [transitioncancel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitioncancel)
- [transitionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionend)
- [transitionrun](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionrun)
- [transitionstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#transitionstart)
- [volumechange](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#volumechange)
- [waiting](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#waiting)
- [webkitanimationend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)
- [webkitanimationiteration](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)
- [webkitanimationstart](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)
- [webkittransitionend](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)
- [wheel](components_ClusterNodeContainer._internal_.GlobalEventHandlersEventMap.md#wheel)

## Properties

### abort

• **abort**: `UIEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5353

___

### animationcancel

• **animationcancel**: `AnimationEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5354

___

### animationend

• **animationend**: `AnimationEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5355

___

### animationiteration

• **animationiteration**: `AnimationEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5356

___

### animationstart

• **animationstart**: `AnimationEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5357

___

### auxclick

• **auxclick**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5358

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/components_ClusterNodeContainer._internal_.md#inputevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5359

___

### blur

• **blur**: `FocusEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5360

___

### canplay

• **canplay**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5361

___

### canplaythrough

• **canplaythrough**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5362

___

### change

• **change**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5363

___

### click

• **click**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5364

___

### close

• **close**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5365

___

### compositionend

• **compositionend**: `CompositionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5366

___

### compositionstart

• **compositionstart**: `CompositionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5367

___

### compositionupdate

• **compositionupdate**: `CompositionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5368

___

### contextmenu

• **contextmenu**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5369

___

### cuechange

• **cuechange**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5370

___

### dblclick

• **dblclick**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5371

___

### drag

• **drag**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5372

___

### dragend

• **dragend**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5373

___

### dragenter

• **dragenter**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5374

___

### dragleave

• **dragleave**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5375

___

### dragover

• **dragover**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5376

___

### dragstart

• **dragstart**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5377

___

### drop

• **drop**: `DragEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5378

___

### durationchange

• **durationchange**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5379

___

### emptied

• **emptied**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5380

___

### ended

• **ended**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5381

___

### error

• **error**: [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5382

___

### focus

• **focus**: `FocusEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5383

___

### focusin

• **focusin**: `FocusEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5384

___

### focusout

• **focusout**: `FocusEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5385

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/components_ClusterNodeContainer._internal_.md#formdataevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5386

___

### gotpointercapture

• **gotpointercapture**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5387

___

### input

• **input**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5388

___

### invalid

• **invalid**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5389

___

### keydown

• **keydown**: `KeyboardEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5390

___

### keypress

• **keypress**: `KeyboardEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5391

___

### keyup

• **keyup**: `KeyboardEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5392

___

### load

• **load**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5393

___

### loadeddata

• **loadeddata**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5394

___

### loadedmetadata

• **loadedmetadata**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5395

___

### loadstart

• **loadstart**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5396

___

### lostpointercapture

• **lostpointercapture**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5397

___

### mousedown

• **mousedown**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5398

___

### mouseenter

• **mouseenter**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5399

___

### mouseleave

• **mouseleave**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5400

___

### mousemove

• **mousemove**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5401

___

### mouseout

• **mouseout**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5402

___

### mouseover

• **mouseover**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5403

___

### mouseup

• **mouseup**: `MouseEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5404

___

### pause

• **pause**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5405

___

### play

• **play**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5406

___

### playing

• **playing**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5407

___

### pointercancel

• **pointercancel**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5408

___

### pointerdown

• **pointerdown**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5409

___

### pointerenter

• **pointerenter**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5410

___

### pointerleave

• **pointerleave**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5411

___

### pointermove

• **pointermove**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5412

___

### pointerout

• **pointerout**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5413

___

### pointerover

• **pointerover**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5414

___

### pointerup

• **pointerup**: `PointerEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5415

___

### progress

• **progress**: `ProgressEvent`<`EventTarget`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5416

___

### ratechange

• **ratechange**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5417

___

### reset

• **reset**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5418

___

### resize

• **resize**: `UIEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5419

___

### scroll

• **scroll**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5420

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/components_ClusterNodeContainer._internal_.md#securitypolicyviolationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5421

___

### seeked

• **seeked**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5422

___

### seeking

• **seeking**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5423

___

### select

• **select**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5424

___

### selectionchange

• **selectionchange**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5425

___

### selectstart

• **selectstart**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5426

___

### stalled

• **stalled**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5427

___

### submit

• **submit**: [`SubmitEvent`](../modules/components_ClusterNodeContainer._internal_.md#submitevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5428

___

### suspend

• **suspend**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5429

___

### timeupdate

• **timeupdate**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5430

___

### toggle

• **toggle**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5431

___

### touchcancel

• **touchcancel**: `TouchEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5432

___

### touchend

• **touchend**: `TouchEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5433

___

### touchmove

• **touchmove**: `TouchEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5434

___

### touchstart

• **touchstart**: `TouchEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5435

___

### transitioncancel

• **transitioncancel**: `TransitionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5436

___

### transitionend

• **transitionend**: `TransitionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5437

___

### transitionrun

• **transitionrun**: `TransitionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5438

___

### transitionstart

• **transitionstart**: `TransitionEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5439

___

### volumechange

• **volumechange**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5440

___

### waiting

• **waiting**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5441

___

### webkitanimationend

• **webkitanimationend**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5442

___

### webkitanimationiteration

• **webkitanimationiteration**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5443

___

### webkitanimationstart

• **webkitanimationstart**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5444

___

### webkittransitionend

• **webkittransitionend**: `Event`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5445

___

### wheel

• **wheel**: `WheelEvent`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5446
