[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / VendorProperties

# Interface: VendorProperties<TLength, TTime\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).VendorProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- [`VendorLonghandProperties`](components_Container._internal_.VendorLonghandProperties.md)<`TLength`, `TTime`\>

- [`VendorShorthandProperties`](components_Container._internal_.VendorShorthandProperties.md)<`TLength`, `TTime`\>

  ↳ **`VendorProperties`**

  ↳↳ [`Properties`](components_Container._internal_.Properties.md)

## Table of contents

### Properties

- [MozAnimation](components_Container._internal_.VendorProperties.md#mozanimation)
- [MozAnimationDelay](components_Container._internal_.VendorProperties.md#mozanimationdelay)
- [MozAnimationDirection](components_Container._internal_.VendorProperties.md#mozanimationdirection)
- [MozAnimationDuration](components_Container._internal_.VendorProperties.md#mozanimationduration)
- [MozAnimationFillMode](components_Container._internal_.VendorProperties.md#mozanimationfillmode)
- [MozAnimationIterationCount](components_Container._internal_.VendorProperties.md#mozanimationiterationcount)
- [MozAnimationName](components_Container._internal_.VendorProperties.md#mozanimationname)
- [MozAnimationPlayState](components_Container._internal_.VendorProperties.md#mozanimationplaystate)
- [MozAnimationTimingFunction](components_Container._internal_.VendorProperties.md#mozanimationtimingfunction)
- [MozAppearance](components_Container._internal_.VendorProperties.md#mozappearance)
- [MozBackfaceVisibility](components_Container._internal_.VendorProperties.md#mozbackfacevisibility)
- [MozBorderBottomColors](components_Container._internal_.VendorProperties.md#mozborderbottomcolors)
- [MozBorderEndColor](components_Container._internal_.VendorProperties.md#mozborderendcolor)
- [MozBorderEndStyle](components_Container._internal_.VendorProperties.md#mozborderendstyle)
- [MozBorderEndWidth](components_Container._internal_.VendorProperties.md#mozborderendwidth)
- [MozBorderImage](components_Container._internal_.VendorProperties.md#mozborderimage)
- [MozBorderLeftColors](components_Container._internal_.VendorProperties.md#mozborderleftcolors)
- [MozBorderRightColors](components_Container._internal_.VendorProperties.md#mozborderrightcolors)
- [MozBorderStartColor](components_Container._internal_.VendorProperties.md#mozborderstartcolor)
- [MozBorderStartStyle](components_Container._internal_.VendorProperties.md#mozborderstartstyle)
- [MozBorderTopColors](components_Container._internal_.VendorProperties.md#mozbordertopcolors)
- [MozBoxSizing](components_Container._internal_.VendorProperties.md#mozboxsizing)
- [MozColumnCount](components_Container._internal_.VendorProperties.md#mozcolumncount)
- [MozColumnFill](components_Container._internal_.VendorProperties.md#mozcolumnfill)
- [MozColumnGap](components_Container._internal_.VendorProperties.md#mozcolumngap)
- [MozColumnRule](components_Container._internal_.VendorProperties.md#mozcolumnrule)
- [MozColumnRuleColor](components_Container._internal_.VendorProperties.md#mozcolumnrulecolor)
- [MozColumnRuleStyle](components_Container._internal_.VendorProperties.md#mozcolumnrulestyle)
- [MozColumnRuleWidth](components_Container._internal_.VendorProperties.md#mozcolumnrulewidth)
- [MozColumnWidth](components_Container._internal_.VendorProperties.md#mozcolumnwidth)
- [MozColumns](components_Container._internal_.VendorProperties.md#mozcolumns)
- [MozContextProperties](components_Container._internal_.VendorProperties.md#mozcontextproperties)
- [MozFontFeatureSettings](components_Container._internal_.VendorProperties.md#mozfontfeaturesettings)
- [MozFontLanguageOverride](components_Container._internal_.VendorProperties.md#mozfontlanguageoverride)
- [MozHyphens](components_Container._internal_.VendorProperties.md#mozhyphens)
- [MozImageRegion](components_Container._internal_.VendorProperties.md#mozimageregion)
- [MozMarginEnd](components_Container._internal_.VendorProperties.md#mozmarginend)
- [MozMarginStart](components_Container._internal_.VendorProperties.md#mozmarginstart)
- [MozOrient](components_Container._internal_.VendorProperties.md#mozorient)
- [MozOsxFontSmoothing](components_Container._internal_.VendorProperties.md#mozosxfontsmoothing)
- [MozPaddingEnd](components_Container._internal_.VendorProperties.md#mozpaddingend)
- [MozPaddingStart](components_Container._internal_.VendorProperties.md#mozpaddingstart)
- [MozPerspective](components_Container._internal_.VendorProperties.md#mozperspective)
- [MozPerspectiveOrigin](components_Container._internal_.VendorProperties.md#mozperspectiveorigin)
- [MozStackSizing](components_Container._internal_.VendorProperties.md#mozstacksizing)
- [MozTabSize](components_Container._internal_.VendorProperties.md#moztabsize)
- [MozTextBlink](components_Container._internal_.VendorProperties.md#moztextblink)
- [MozTextSizeAdjust](components_Container._internal_.VendorProperties.md#moztextsizeadjust)
- [MozTransformOrigin](components_Container._internal_.VendorProperties.md#moztransformorigin)
- [MozTransformStyle](components_Container._internal_.VendorProperties.md#moztransformstyle)
- [MozTransition](components_Container._internal_.VendorProperties.md#moztransition)
- [MozTransitionDelay](components_Container._internal_.VendorProperties.md#moztransitiondelay)
- [MozTransitionDuration](components_Container._internal_.VendorProperties.md#moztransitionduration)
- [MozTransitionProperty](components_Container._internal_.VendorProperties.md#moztransitionproperty)
- [MozTransitionTimingFunction](components_Container._internal_.VendorProperties.md#moztransitiontimingfunction)
- [MozUserFocus](components_Container._internal_.VendorProperties.md#mozuserfocus)
- [MozUserModify](components_Container._internal_.VendorProperties.md#mozusermodify)
- [MozUserSelect](components_Container._internal_.VendorProperties.md#mozuserselect)
- [MozWindowDragging](components_Container._internal_.VendorProperties.md#mozwindowdragging)
- [MozWindowShadow](components_Container._internal_.VendorProperties.md#mozwindowshadow)
- [WebkitAlignContent](components_Container._internal_.VendorProperties.md#webkitaligncontent)
- [WebkitAlignItems](components_Container._internal_.VendorProperties.md#webkitalignitems)
- [WebkitAlignSelf](components_Container._internal_.VendorProperties.md#webkitalignself)
- [WebkitAnimation](components_Container._internal_.VendorProperties.md#webkitanimation)
- [WebkitAnimationDelay](components_Container._internal_.VendorProperties.md#webkitanimationdelay)
- [WebkitAnimationDirection](components_Container._internal_.VendorProperties.md#webkitanimationdirection)
- [WebkitAnimationDuration](components_Container._internal_.VendorProperties.md#webkitanimationduration)
- [WebkitAnimationFillMode](components_Container._internal_.VendorProperties.md#webkitanimationfillmode)
- [WebkitAnimationIterationCount](components_Container._internal_.VendorProperties.md#webkitanimationiterationcount)
- [WebkitAnimationName](components_Container._internal_.VendorProperties.md#webkitanimationname)
- [WebkitAnimationPlayState](components_Container._internal_.VendorProperties.md#webkitanimationplaystate)
- [WebkitAnimationTimingFunction](components_Container._internal_.VendorProperties.md#webkitanimationtimingfunction)
- [WebkitAppearance](components_Container._internal_.VendorProperties.md#webkitappearance)
- [WebkitBackdropFilter](components_Container._internal_.VendorProperties.md#webkitbackdropfilter)
- [WebkitBackfaceVisibility](components_Container._internal_.VendorProperties.md#webkitbackfacevisibility)
- [WebkitBackgroundClip](components_Container._internal_.VendorProperties.md#webkitbackgroundclip)
- [WebkitBackgroundOrigin](components_Container._internal_.VendorProperties.md#webkitbackgroundorigin)
- [WebkitBackgroundSize](components_Container._internal_.VendorProperties.md#webkitbackgroundsize)
- [WebkitBorderBefore](components_Container._internal_.VendorProperties.md#webkitborderbefore)
- [WebkitBorderBeforeColor](components_Container._internal_.VendorProperties.md#webkitborderbeforecolor)
- [WebkitBorderBeforeStyle](components_Container._internal_.VendorProperties.md#webkitborderbeforestyle)
- [WebkitBorderBeforeWidth](components_Container._internal_.VendorProperties.md#webkitborderbeforewidth)
- [WebkitBorderBottomLeftRadius](components_Container._internal_.VendorProperties.md#webkitborderbottomleftradius)
- [WebkitBorderBottomRightRadius](components_Container._internal_.VendorProperties.md#webkitborderbottomrightradius)
- [WebkitBorderImage](components_Container._internal_.VendorProperties.md#webkitborderimage)
- [WebkitBorderImageSlice](components_Container._internal_.VendorProperties.md#webkitborderimageslice)
- [WebkitBorderRadius](components_Container._internal_.VendorProperties.md#webkitborderradius)
- [WebkitBorderTopLeftRadius](components_Container._internal_.VendorProperties.md#webkitbordertopleftradius)
- [WebkitBorderTopRightRadius](components_Container._internal_.VendorProperties.md#webkitbordertoprightradius)
- [WebkitBoxDecorationBreak](components_Container._internal_.VendorProperties.md#webkitboxdecorationbreak)
- [WebkitBoxReflect](components_Container._internal_.VendorProperties.md#webkitboxreflect)
- [WebkitBoxShadow](components_Container._internal_.VendorProperties.md#webkitboxshadow)
- [WebkitBoxSizing](components_Container._internal_.VendorProperties.md#webkitboxsizing)
- [WebkitClipPath](components_Container._internal_.VendorProperties.md#webkitclippath)
- [WebkitColumnCount](components_Container._internal_.VendorProperties.md#webkitcolumncount)
- [WebkitColumnFill](components_Container._internal_.VendorProperties.md#webkitcolumnfill)
- [WebkitColumnGap](components_Container._internal_.VendorProperties.md#webkitcolumngap)
- [WebkitColumnRule](components_Container._internal_.VendorProperties.md#webkitcolumnrule)
- [WebkitColumnRuleColor](components_Container._internal_.VendorProperties.md#webkitcolumnrulecolor)
- [WebkitColumnRuleStyle](components_Container._internal_.VendorProperties.md#webkitcolumnrulestyle)
- [WebkitColumnRuleWidth](components_Container._internal_.VendorProperties.md#webkitcolumnrulewidth)
- [WebkitColumnSpan](components_Container._internal_.VendorProperties.md#webkitcolumnspan)
- [WebkitColumnWidth](components_Container._internal_.VendorProperties.md#webkitcolumnwidth)
- [WebkitColumns](components_Container._internal_.VendorProperties.md#webkitcolumns)
- [WebkitFilter](components_Container._internal_.VendorProperties.md#webkitfilter)
- [WebkitFlex](components_Container._internal_.VendorProperties.md#webkitflex)
- [WebkitFlexBasis](components_Container._internal_.VendorProperties.md#webkitflexbasis)
- [WebkitFlexDirection](components_Container._internal_.VendorProperties.md#webkitflexdirection)
- [WebkitFlexFlow](components_Container._internal_.VendorProperties.md#webkitflexflow)
- [WebkitFlexGrow](components_Container._internal_.VendorProperties.md#webkitflexgrow)
- [WebkitFlexShrink](components_Container._internal_.VendorProperties.md#webkitflexshrink)
- [WebkitFlexWrap](components_Container._internal_.VendorProperties.md#webkitflexwrap)
- [WebkitFontFeatureSettings](components_Container._internal_.VendorProperties.md#webkitfontfeaturesettings)
- [WebkitFontKerning](components_Container._internal_.VendorProperties.md#webkitfontkerning)
- [WebkitFontSmoothing](components_Container._internal_.VendorProperties.md#webkitfontsmoothing)
- [WebkitFontVariantLigatures](components_Container._internal_.VendorProperties.md#webkitfontvariantligatures)
- [WebkitHyphens](components_Container._internal_.VendorProperties.md#webkithyphens)
- [WebkitJustifyContent](components_Container._internal_.VendorProperties.md#webkitjustifycontent)
- [WebkitLineBreak](components_Container._internal_.VendorProperties.md#webkitlinebreak)
- [WebkitLineClamp](components_Container._internal_.VendorProperties.md#webkitlineclamp)
- [WebkitMarginEnd](components_Container._internal_.VendorProperties.md#webkitmarginend)
- [WebkitMarginStart](components_Container._internal_.VendorProperties.md#webkitmarginstart)
- [WebkitMask](components_Container._internal_.VendorProperties.md#webkitmask)
- [WebkitMaskAttachment](components_Container._internal_.VendorProperties.md#webkitmaskattachment)
- [WebkitMaskBoxImage](components_Container._internal_.VendorProperties.md#webkitmaskboximage)
- [WebkitMaskBoxImageOutset](components_Container._internal_.VendorProperties.md#webkitmaskboximageoutset)
- [WebkitMaskBoxImageRepeat](components_Container._internal_.VendorProperties.md#webkitmaskboximagerepeat)
- [WebkitMaskBoxImageSlice](components_Container._internal_.VendorProperties.md#webkitmaskboximageslice)
- [WebkitMaskBoxImageSource](components_Container._internal_.VendorProperties.md#webkitmaskboximagesource)
- [WebkitMaskBoxImageWidth](components_Container._internal_.VendorProperties.md#webkitmaskboximagewidth)
- [WebkitMaskClip](components_Container._internal_.VendorProperties.md#webkitmaskclip)
- [WebkitMaskComposite](components_Container._internal_.VendorProperties.md#webkitmaskcomposite)
- [WebkitMaskImage](components_Container._internal_.VendorProperties.md#webkitmaskimage)
- [WebkitMaskOrigin](components_Container._internal_.VendorProperties.md#webkitmaskorigin)
- [WebkitMaskPosition](components_Container._internal_.VendorProperties.md#webkitmaskposition)
- [WebkitMaskPositionX](components_Container._internal_.VendorProperties.md#webkitmaskpositionx)
- [WebkitMaskPositionY](components_Container._internal_.VendorProperties.md#webkitmaskpositiony)
- [WebkitMaskRepeat](components_Container._internal_.VendorProperties.md#webkitmaskrepeat)
- [WebkitMaskRepeatX](components_Container._internal_.VendorProperties.md#webkitmaskrepeatx)
- [WebkitMaskRepeatY](components_Container._internal_.VendorProperties.md#webkitmaskrepeaty)
- [WebkitMaskSize](components_Container._internal_.VendorProperties.md#webkitmasksize)
- [WebkitMaxInlineSize](components_Container._internal_.VendorProperties.md#webkitmaxinlinesize)
- [WebkitOrder](components_Container._internal_.VendorProperties.md#webkitorder)
- [WebkitOverflowScrolling](components_Container._internal_.VendorProperties.md#webkitoverflowscrolling)
- [WebkitPaddingEnd](components_Container._internal_.VendorProperties.md#webkitpaddingend)
- [WebkitPaddingStart](components_Container._internal_.VendorProperties.md#webkitpaddingstart)
- [WebkitPerspective](components_Container._internal_.VendorProperties.md#webkitperspective)
- [WebkitPerspectiveOrigin](components_Container._internal_.VendorProperties.md#webkitperspectiveorigin)
- [WebkitPrintColorAdjust](components_Container._internal_.VendorProperties.md#webkitprintcoloradjust)
- [WebkitRubyPosition](components_Container._internal_.VendorProperties.md#webkitrubyposition)
- [WebkitScrollSnapType](components_Container._internal_.VendorProperties.md#webkitscrollsnaptype)
- [WebkitShapeMargin](components_Container._internal_.VendorProperties.md#webkitshapemargin)
- [WebkitTapHighlightColor](components_Container._internal_.VendorProperties.md#webkittaphighlightcolor)
- [WebkitTextCombine](components_Container._internal_.VendorProperties.md#webkittextcombine)
- [WebkitTextDecorationColor](components_Container._internal_.VendorProperties.md#webkittextdecorationcolor)
- [WebkitTextDecorationLine](components_Container._internal_.VendorProperties.md#webkittextdecorationline)
- [WebkitTextDecorationSkip](components_Container._internal_.VendorProperties.md#webkittextdecorationskip)
- [WebkitTextDecorationStyle](components_Container._internal_.VendorProperties.md#webkittextdecorationstyle)
- [WebkitTextEmphasis](components_Container._internal_.VendorProperties.md#webkittextemphasis)
- [WebkitTextEmphasisColor](components_Container._internal_.VendorProperties.md#webkittextemphasiscolor)
- [WebkitTextEmphasisPosition](components_Container._internal_.VendorProperties.md#webkittextemphasisposition)
- [WebkitTextEmphasisStyle](components_Container._internal_.VendorProperties.md#webkittextemphasisstyle)
- [WebkitTextFillColor](components_Container._internal_.VendorProperties.md#webkittextfillcolor)
- [WebkitTextOrientation](components_Container._internal_.VendorProperties.md#webkittextorientation)
- [WebkitTextSizeAdjust](components_Container._internal_.VendorProperties.md#webkittextsizeadjust)
- [WebkitTextStroke](components_Container._internal_.VendorProperties.md#webkittextstroke)
- [WebkitTextStrokeColor](components_Container._internal_.VendorProperties.md#webkittextstrokecolor)
- [WebkitTextStrokeWidth](components_Container._internal_.VendorProperties.md#webkittextstrokewidth)
- [WebkitTextUnderlinePosition](components_Container._internal_.VendorProperties.md#webkittextunderlineposition)
- [WebkitTouchCallout](components_Container._internal_.VendorProperties.md#webkittouchcallout)
- [WebkitTransform](components_Container._internal_.VendorProperties.md#webkittransform)
- [WebkitTransformOrigin](components_Container._internal_.VendorProperties.md#webkittransformorigin)
- [WebkitTransformStyle](components_Container._internal_.VendorProperties.md#webkittransformstyle)
- [WebkitTransition](components_Container._internal_.VendorProperties.md#webkittransition)
- [WebkitTransitionDelay](components_Container._internal_.VendorProperties.md#webkittransitiondelay)
- [WebkitTransitionDuration](components_Container._internal_.VendorProperties.md#webkittransitionduration)
- [WebkitTransitionProperty](components_Container._internal_.VendorProperties.md#webkittransitionproperty)
- [WebkitTransitionTimingFunction](components_Container._internal_.VendorProperties.md#webkittransitiontimingfunction)
- [WebkitUserModify](components_Container._internal_.VendorProperties.md#webkitusermodify)
- [WebkitUserSelect](components_Container._internal_.VendorProperties.md#webkituserselect)
- [WebkitWritingMode](components_Container._internal_.VendorProperties.md#webkitwritingmode)
- [msAccelerator](components_Container._internal_.VendorProperties.md#msaccelerator)
- [msAlignSelf](components_Container._internal_.VendorProperties.md#msalignself)
- [msBlockProgression](components_Container._internal_.VendorProperties.md#msblockprogression)
- [msContentZoomChaining](components_Container._internal_.VendorProperties.md#mscontentzoomchaining)
- [msContentZoomLimit](components_Container._internal_.VendorProperties.md#mscontentzoomlimit)
- [msContentZoomLimitMax](components_Container._internal_.VendorProperties.md#mscontentzoomlimitmax)
- [msContentZoomLimitMin](components_Container._internal_.VendorProperties.md#mscontentzoomlimitmin)
- [msContentZoomSnap](components_Container._internal_.VendorProperties.md#mscontentzoomsnap)
- [msContentZoomSnapPoints](components_Container._internal_.VendorProperties.md#mscontentzoomsnappoints)
- [msContentZoomSnapType](components_Container._internal_.VendorProperties.md#mscontentzoomsnaptype)
- [msContentZooming](components_Container._internal_.VendorProperties.md#mscontentzooming)
- [msFilter](components_Container._internal_.VendorProperties.md#msfilter)
- [msFlex](components_Container._internal_.VendorProperties.md#msflex)
- [msFlexDirection](components_Container._internal_.VendorProperties.md#msflexdirection)
- [msFlexPositive](components_Container._internal_.VendorProperties.md#msflexpositive)
- [msFlowFrom](components_Container._internal_.VendorProperties.md#msflowfrom)
- [msFlowInto](components_Container._internal_.VendorProperties.md#msflowinto)
- [msGridColumns](components_Container._internal_.VendorProperties.md#msgridcolumns)
- [msGridRows](components_Container._internal_.VendorProperties.md#msgridrows)
- [msHighContrastAdjust](components_Container._internal_.VendorProperties.md#mshighcontrastadjust)
- [msHyphenateLimitChars](components_Container._internal_.VendorProperties.md#mshyphenatelimitchars)
- [msHyphenateLimitLines](components_Container._internal_.VendorProperties.md#mshyphenatelimitlines)
- [msHyphenateLimitZone](components_Container._internal_.VendorProperties.md#mshyphenatelimitzone)
- [msHyphens](components_Container._internal_.VendorProperties.md#mshyphens)
- [msImeAlign](components_Container._internal_.VendorProperties.md#msimealign)
- [msJustifySelf](components_Container._internal_.VendorProperties.md#msjustifyself)
- [msLineBreak](components_Container._internal_.VendorProperties.md#mslinebreak)
- [msOrder](components_Container._internal_.VendorProperties.md#msorder)
- [msOverflowStyle](components_Container._internal_.VendorProperties.md#msoverflowstyle)
- [msOverflowX](components_Container._internal_.VendorProperties.md#msoverflowx)
- [msOverflowY](components_Container._internal_.VendorProperties.md#msoverflowy)
- [msScrollChaining](components_Container._internal_.VendorProperties.md#msscrollchaining)
- [msScrollLimit](components_Container._internal_.VendorProperties.md#msscrolllimit)
- [msScrollLimitXMax](components_Container._internal_.VendorProperties.md#msscrolllimitxmax)
- [msScrollLimitXMin](components_Container._internal_.VendorProperties.md#msscrolllimitxmin)
- [msScrollLimitYMax](components_Container._internal_.VendorProperties.md#msscrolllimitymax)
- [msScrollLimitYMin](components_Container._internal_.VendorProperties.md#msscrolllimitymin)
- [msScrollRails](components_Container._internal_.VendorProperties.md#msscrollrails)
- [msScrollSnapPointsX](components_Container._internal_.VendorProperties.md#msscrollsnappointsx)
- [msScrollSnapPointsY](components_Container._internal_.VendorProperties.md#msscrollsnappointsy)
- [msScrollSnapType](components_Container._internal_.VendorProperties.md#msscrollsnaptype)
- [msScrollSnapX](components_Container._internal_.VendorProperties.md#msscrollsnapx)
- [msScrollSnapY](components_Container._internal_.VendorProperties.md#msscrollsnapy)
- [msScrollTranslation](components_Container._internal_.VendorProperties.md#msscrolltranslation)
- [msScrollbar3dlightColor](components_Container._internal_.VendorProperties.md#msscrollbar3dlightcolor)
- [msScrollbarArrowColor](components_Container._internal_.VendorProperties.md#msscrollbararrowcolor)
- [msScrollbarBaseColor](components_Container._internal_.VendorProperties.md#msscrollbarbasecolor)
- [msScrollbarDarkshadowColor](components_Container._internal_.VendorProperties.md#msscrollbardarkshadowcolor)
- [msScrollbarFaceColor](components_Container._internal_.VendorProperties.md#msscrollbarfacecolor)
- [msScrollbarHighlightColor](components_Container._internal_.VendorProperties.md#msscrollbarhighlightcolor)
- [msScrollbarShadowColor](components_Container._internal_.VendorProperties.md#msscrollbarshadowcolor)
- [msTextAutospace](components_Container._internal_.VendorProperties.md#mstextautospace)
- [msTextCombineHorizontal](components_Container._internal_.VendorProperties.md#mstextcombinehorizontal)
- [msTextOverflow](components_Container._internal_.VendorProperties.md#mstextoverflow)
- [msTouchAction](components_Container._internal_.VendorProperties.md#mstouchaction)
- [msTouchSelect](components_Container._internal_.VendorProperties.md#mstouchselect)
- [msTransform](components_Container._internal_.VendorProperties.md#mstransform)
- [msTransformOrigin](components_Container._internal_.VendorProperties.md#mstransformorigin)
- [msTransition](components_Container._internal_.VendorProperties.md#mstransition)
- [msTransitionDelay](components_Container._internal_.VendorProperties.md#mstransitiondelay)
- [msTransitionDuration](components_Container._internal_.VendorProperties.md#mstransitionduration)
- [msTransitionProperty](components_Container._internal_.VendorProperties.md#mstransitionproperty)
- [msTransitionTimingFunction](components_Container._internal_.VendorProperties.md#mstransitiontimingfunction)
- [msUserSelect](components_Container._internal_.VendorProperties.md#msuserselect)
- [msWordBreak](components_Container._internal_.VendorProperties.md#mswordbreak)
- [msWrapFlow](components_Container._internal_.VendorProperties.md#mswrapflow)
- [msWrapMargin](components_Container._internal_.VendorProperties.md#mswrapmargin)
- [msWrapThrough](components_Container._internal_.VendorProperties.md#mswrapthrough)
- [msWritingMode](components_Container._internal_.VendorProperties.md#mswritingmode)

## Properties

### MozAnimation

• `Optional` **MozAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[MozAnimation](components_Container._internal_.VendorShorthandProperties.md#mozanimation)

#### Defined in

node_modules/csstype/index.d.ts:7539

___

### MozAnimationDelay

• `Optional` **MozAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationDelay](components_Container._internal_.VendorLonghandProperties.md#mozanimationdelay)

#### Defined in

node_modules/csstype/index.d.ts:5746

___

### MozAnimationDirection

• `Optional` **MozAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationDirection](components_Container._internal_.VendorLonghandProperties.md#mozanimationdirection)

#### Defined in

node_modules/csstype/index.d.ts:5754

___

### MozAnimationDuration

• `Optional` **MozAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationDuration](components_Container._internal_.VendorLonghandProperties.md#mozanimationduration)

#### Defined in

node_modules/csstype/index.d.ts:5762

___

### MozAnimationFillMode

• `Optional` **MozAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationFillMode](components_Container._internal_.VendorLonghandProperties.md#mozanimationfillmode)

#### Defined in

node_modules/csstype/index.d.ts:5770

___

### MozAnimationIterationCount

• `Optional` **MozAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationIterationCount](components_Container._internal_.VendorLonghandProperties.md#mozanimationiterationcount)

#### Defined in

node_modules/csstype/index.d.ts:5778

___

### MozAnimationName

• `Optional` **MozAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationName](components_Container._internal_.VendorLonghandProperties.md#mozanimationname)

#### Defined in

node_modules/csstype/index.d.ts:5786

___

### MozAnimationPlayState

• `Optional` **MozAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationPlayState](components_Container._internal_.VendorLonghandProperties.md#mozanimationplaystate)

#### Defined in

node_modules/csstype/index.d.ts:5794

___

### MozAnimationTimingFunction

• `Optional` **MozAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAnimationTimingFunction](components_Container._internal_.VendorLonghandProperties.md#mozanimationtimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:5802

___

### MozAppearance

• `Optional` **MozAppearance**: [`MozAppearance`](../modules/components_Container._internal_.md#mozappearance)

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozAppearance](components_Container._internal_.VendorLonghandProperties.md#mozappearance)

#### Defined in

node_modules/csstype/index.d.ts:5810

___

### MozBackfaceVisibility

• `Optional` **MozBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBackfaceVisibility](components_Container._internal_.VendorLonghandProperties.md#mozbackfacevisibility)

#### Defined in

node_modules/csstype/index.d.ts:5818

___

### MozBorderBottomColors

• `Optional` **MozBorderBottomColors**: [`MozBorderBottomColors`](../modules/components_Container._internal_.md#mozborderbottomcolors)

In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderBottomColors](components_Container._internal_.VendorLonghandProperties.md#mozborderbottomcolors)

#### Defined in

node_modules/csstype/index.d.ts:5826

___

### MozBorderEndColor

• `Optional` **MozBorderEndColor**: [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor)

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderEndColor](components_Container._internal_.VendorLonghandProperties.md#mozborderendcolor)

#### Defined in

node_modules/csstype/index.d.ts:5834

___

### MozBorderEndStyle

• `Optional` **MozBorderEndStyle**: [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle)

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderEndStyle](components_Container._internal_.VendorLonghandProperties.md#mozborderendstyle)

#### Defined in

node_modules/csstype/index.d.ts:5842

___

### MozBorderEndWidth

• `Optional` **MozBorderEndWidth**: [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`TLength`\>

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderEndWidth](components_Container._internal_.VendorLonghandProperties.md#mozborderendwidth)

#### Defined in

node_modules/csstype/index.d.ts:5850

___

### MozBorderImage

• `Optional` **MozBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[MozBorderImage](components_Container._internal_.VendorShorthandProperties.md#mozborderimage)

#### Defined in

node_modules/csstype/index.d.ts:7545

___

### MozBorderLeftColors

• `Optional` **MozBorderLeftColors**: [`MozBorderLeftColors`](../modules/components_Container._internal_.md#mozborderleftcolors)

In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderLeftColors](components_Container._internal_.VendorLonghandProperties.md#mozborderleftcolors)

#### Defined in

node_modules/csstype/index.d.ts:5858

___

### MozBorderRightColors

• `Optional` **MozBorderRightColors**: [`MozBorderRightColors`](../modules/components_Container._internal_.md#mozborderrightcolors)

In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderRightColors](components_Container._internal_.VendorLonghandProperties.md#mozborderrightcolors)

#### Defined in

node_modules/csstype/index.d.ts:5866

___

### MozBorderStartColor

• `Optional` **MozBorderStartColor**: [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor)

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderStartColor](components_Container._internal_.VendorLonghandProperties.md#mozborderstartcolor)

#### Defined in

node_modules/csstype/index.d.ts:5874

___

### MozBorderStartStyle

• `Optional` **MozBorderStartStyle**: [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle)

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderStartStyle](components_Container._internal_.VendorLonghandProperties.md#mozborderstartstyle)

#### Defined in

node_modules/csstype/index.d.ts:5882

___

### MozBorderTopColors

• `Optional` **MozBorderTopColors**: [`MozBorderTopColors`](../modules/components_Container._internal_.md#mozbordertopcolors)

In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBorderTopColors](components_Container._internal_.VendorLonghandProperties.md#mozbordertopcolors)

#### Defined in

node_modules/csstype/index.d.ts:5890

___

### MozBoxSizing

• `Optional` **MozBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozBoxSizing](components_Container._internal_.VendorLonghandProperties.md#mozboxsizing)

#### Defined in

node_modules/csstype/index.d.ts:5898

___

### MozColumnCount

• `Optional` **MozColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnCount](components_Container._internal_.VendorLonghandProperties.md#mozcolumncount)

#### Defined in

node_modules/csstype/index.d.ts:5906

___

### MozColumnFill

• `Optional` **MozColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnFill](components_Container._internal_.VendorLonghandProperties.md#mozcolumnfill)

#### Defined in

node_modules/csstype/index.d.ts:5914

___

### MozColumnGap

• `Optional` **MozColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnGap](components_Container._internal_.VendorLonghandProperties.md#mozcolumngap)

#### Defined in

node_modules/csstype/index.d.ts:5922

___

### MozColumnRule

• `Optional` **MozColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[MozColumnRule](components_Container._internal_.VendorShorthandProperties.md#mozcolumnrule)

#### Defined in

node_modules/csstype/index.d.ts:7551

___

### MozColumnRuleColor

• `Optional` **MozColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnRuleColor](components_Container._internal_.VendorLonghandProperties.md#mozcolumnrulecolor)

#### Defined in

node_modules/csstype/index.d.ts:5930

___

### MozColumnRuleStyle

• `Optional` **MozColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnRuleStyle](components_Container._internal_.VendorLonghandProperties.md#mozcolumnrulestyle)

#### Defined in

node_modules/csstype/index.d.ts:5938

___

### MozColumnRuleWidth

• `Optional` **MozColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnRuleWidth](components_Container._internal_.VendorLonghandProperties.md#mozcolumnrulewidth)

#### Defined in

node_modules/csstype/index.d.ts:5946

___

### MozColumnWidth

• `Optional` **MozColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozColumnWidth](components_Container._internal_.VendorLonghandProperties.md#mozcolumnwidth)

#### Defined in

node_modules/csstype/index.d.ts:5954

___

### MozColumns

• `Optional` **MozColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[MozColumns](components_Container._internal_.VendorShorthandProperties.md#mozcolumns)

#### Defined in

node_modules/csstype/index.d.ts:7557

___

### MozContextProperties

• `Optional` **MozContextProperties**: [`MozContextProperties`](../modules/components_Container._internal_.md#mozcontextproperties)

The `**-moz-context-properties**` property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.

**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozContextProperties](components_Container._internal_.VendorLonghandProperties.md#mozcontextproperties)

#### Defined in

node_modules/csstype/index.d.ts:5962

___

### MozFontFeatureSettings

• `Optional` **MozFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozFontFeatureSettings](components_Container._internal_.VendorLonghandProperties.md#mozfontfeaturesettings)

#### Defined in

node_modules/csstype/index.d.ts:5970

___

### MozFontLanguageOverride

• `Optional` **MozFontLanguageOverride**: [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride)

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozFontLanguageOverride](components_Container._internal_.VendorLonghandProperties.md#mozfontlanguageoverride)

#### Defined in

node_modules/csstype/index.d.ts:5978

___

### MozHyphens

• `Optional` **MozHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozHyphens](components_Container._internal_.VendorLonghandProperties.md#mozhyphens)

#### Defined in

node_modules/csstype/index.d.ts:5986

___

### MozImageRegion

• `Optional` **MozImageRegion**: [`MozImageRegion`](../modules/components_Container._internal_.md#mozimageregion)

For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozImageRegion](components_Container._internal_.VendorLonghandProperties.md#mozimageregion)

#### Defined in

node_modules/csstype/index.d.ts:5994

___

### MozMarginEnd

• `Optional` **MozMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozMarginEnd](components_Container._internal_.VendorLonghandProperties.md#mozmarginend)

#### Defined in

node_modules/csstype/index.d.ts:6002

___

### MozMarginStart

• `Optional` **MozMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozMarginStart](components_Container._internal_.VendorLonghandProperties.md#mozmarginstart)

#### Defined in

node_modules/csstype/index.d.ts:6010

___

### MozOrient

• `Optional` **MozOrient**: [`MozOrient`](../modules/components_Container._internal_.md#mozorient)

The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.

**Syntax**: `inline | block | horizontal | vertical`

**Initial value**: `inline`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozOrient](components_Container._internal_.VendorLonghandProperties.md#mozorient)

#### Defined in

node_modules/csstype/index.d.ts:6018

___

### MozOsxFontSmoothing

• `Optional` **MozOsxFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozOsxFontSmoothing](components_Container._internal_.VendorLonghandProperties.md#mozosxfontsmoothing)

#### Defined in

node_modules/csstype/index.d.ts:6026

___

### MozPaddingEnd

• `Optional` **MozPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozPaddingEnd](components_Container._internal_.VendorLonghandProperties.md#mozpaddingend)

#### Defined in

node_modules/csstype/index.d.ts:6034

___

### MozPaddingStart

• `Optional` **MozPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozPaddingStart](components_Container._internal_.VendorLonghandProperties.md#mozpaddingstart)

#### Defined in

node_modules/csstype/index.d.ts:6042

___

### MozPerspective

• `Optional` **MozPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozPerspective](components_Container._internal_.VendorLonghandProperties.md#mozperspective)

#### Defined in

node_modules/csstype/index.d.ts:6050

___

### MozPerspectiveOrigin

• `Optional` **MozPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozPerspectiveOrigin](components_Container._internal_.VendorLonghandProperties.md#mozperspectiveorigin)

#### Defined in

node_modules/csstype/index.d.ts:6058

___

### MozStackSizing

• `Optional` **MozStackSizing**: [`MozStackSizing`](../modules/components_Container._internal_.md#mozstacksizing)

**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.

**Syntax**: `ignore | stretch-to-fit`

**Initial value**: `stretch-to-fit`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozStackSizing](components_Container._internal_.VendorLonghandProperties.md#mozstacksizing)

#### Defined in

node_modules/csstype/index.d.ts:6066

___

### MozTabSize

• `Optional` **MozTabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\>

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTabSize](components_Container._internal_.VendorLonghandProperties.md#moztabsize)

#### Defined in

node_modules/csstype/index.d.ts:6074

___

### MozTextBlink

• `Optional` **MozTextBlink**: [`MozTextBlink`](../modules/components_Container._internal_.md#moztextblink)

The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.

**Syntax**: `none | blink`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTextBlink](components_Container._internal_.VendorLonghandProperties.md#moztextblink)

#### Defined in

node_modules/csstype/index.d.ts:6082

___

### MozTextSizeAdjust

• `Optional` **MozTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTextSizeAdjust](components_Container._internal_.VendorLonghandProperties.md#moztextsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:6090

___

### MozTransformOrigin

• `Optional` **MozTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransformOrigin](components_Container._internal_.VendorLonghandProperties.md#moztransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:6098

___

### MozTransformStyle

• `Optional` **MozTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransformStyle](components_Container._internal_.VendorLonghandProperties.md#moztransformstyle)

#### Defined in

node_modules/csstype/index.d.ts:6106

___

### MozTransition

• `Optional` **MozTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[MozTransition](components_Container._internal_.VendorShorthandProperties.md#moztransition)

#### Defined in

node_modules/csstype/index.d.ts:7563

___

### MozTransitionDelay

• `Optional` **MozTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransitionDelay](components_Container._internal_.VendorLonghandProperties.md#moztransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:6114

___

### MozTransitionDuration

• `Optional` **MozTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransitionDuration](components_Container._internal_.VendorLonghandProperties.md#moztransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:6122

___

### MozTransitionProperty

• `Optional` **MozTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransitionProperty](components_Container._internal_.VendorLonghandProperties.md#moztransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:6130

___

### MozTransitionTimingFunction

• `Optional` **MozTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozTransitionTimingFunction](components_Container._internal_.VendorLonghandProperties.md#moztransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6138

___

### MozUserFocus

• `Optional` **MozUserFocus**: [`MozUserFocus`](../modules/components_Container._internal_.md#mozuserfocus)

The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.

**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozUserFocus](components_Container._internal_.VendorLonghandProperties.md#mozuserfocus)

#### Defined in

node_modules/csstype/index.d.ts:6146

___

### MozUserModify

• `Optional` **MozUserModify**: [`MozUserModify`](../modules/components_Container._internal_.md#mozusermodify)

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

**Syntax**: `read-only | read-write | write-only`

**Initial value**: `read-only`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozUserModify](components_Container._internal_.VendorLonghandProperties.md#mozusermodify)

#### Defined in

node_modules/csstype/index.d.ts:6154

___

### MozUserSelect

• `Optional` **MozUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozUserSelect](components_Container._internal_.VendorLonghandProperties.md#mozuserselect)

#### Defined in

node_modules/csstype/index.d.ts:6162

___

### MozWindowDragging

• `Optional` **MozWindowDragging**: [`MozWindowDragging`](../modules/components_Container._internal_.md#mozwindowdragging)

The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.

**Syntax**: `drag | no-drag`

**Initial value**: `drag`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozWindowDragging](components_Container._internal_.VendorLonghandProperties.md#mozwindowdragging)

#### Defined in

node_modules/csstype/index.d.ts:6170

___

### MozWindowShadow

• `Optional` **MozWindowShadow**: [`MozWindowShadow`](../modules/components_Container._internal_.md#mozwindowshadow)

The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.

**Syntax**: `default | menu | tooltip | sheet | none`

**Initial value**: `default`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[MozWindowShadow](components_Container._internal_.VendorLonghandProperties.md#mozwindowshadow)

#### Defined in

node_modules/csstype/index.d.ts:6178

___

### WebkitAlignContent

• `Optional` **WebkitAlignContent**: [`AlignContent`](../modules/components_Container._internal_.md#aligncontent)

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAlignContent](components_Container._internal_.VendorLonghandProperties.md#webkitaligncontent)

#### Defined in

node_modules/csstype/index.d.ts:6682

___

### WebkitAlignItems

• `Optional` **WebkitAlignItems**: [`AlignItems`](../modules/components_Container._internal_.md#alignitems)

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAlignItems](components_Container._internal_.VendorLonghandProperties.md#webkitalignitems)

#### Defined in

node_modules/csstype/index.d.ts:6690

___

### WebkitAlignSelf

• `Optional` **WebkitAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAlignSelf](components_Container._internal_.VendorLonghandProperties.md#webkitalignself)

#### Defined in

node_modules/csstype/index.d.ts:6698

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitAnimation](components_Container._internal_.VendorShorthandProperties.md#webkitanimation)

#### Defined in

node_modules/csstype/index.d.ts:7611

___

### WebkitAnimationDelay

• `Optional` **WebkitAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationDelay](components_Container._internal_.VendorLonghandProperties.md#webkitanimationdelay)

#### Defined in

node_modules/csstype/index.d.ts:6706

___

### WebkitAnimationDirection

• `Optional` **WebkitAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationDirection](components_Container._internal_.VendorLonghandProperties.md#webkitanimationdirection)

#### Defined in

node_modules/csstype/index.d.ts:6714

___

### WebkitAnimationDuration

• `Optional` **WebkitAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationDuration](components_Container._internal_.VendorLonghandProperties.md#webkitanimationduration)

#### Defined in

node_modules/csstype/index.d.ts:6722

___

### WebkitAnimationFillMode

• `Optional` **WebkitAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationFillMode](components_Container._internal_.VendorLonghandProperties.md#webkitanimationfillmode)

#### Defined in

node_modules/csstype/index.d.ts:6730

___

### WebkitAnimationIterationCount

• `Optional` **WebkitAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationIterationCount](components_Container._internal_.VendorLonghandProperties.md#webkitanimationiterationcount)

#### Defined in

node_modules/csstype/index.d.ts:6738

___

### WebkitAnimationName

• `Optional` **WebkitAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationName](components_Container._internal_.VendorLonghandProperties.md#webkitanimationname)

#### Defined in

node_modules/csstype/index.d.ts:6746

___

### WebkitAnimationPlayState

• `Optional` **WebkitAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationPlayState](components_Container._internal_.VendorLonghandProperties.md#webkitanimationplaystate)

#### Defined in

node_modules/csstype/index.d.ts:6754

___

### WebkitAnimationTimingFunction

• `Optional` **WebkitAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAnimationTimingFunction](components_Container._internal_.VendorLonghandProperties.md#webkitanimationtimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6762

___

### WebkitAppearance

• `Optional` **WebkitAppearance**: [`WebkitAppearance`](../modules/components_Container._internal_.md#webkitappearance)

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitAppearance](components_Container._internal_.VendorLonghandProperties.md#webkitappearance)

#### Defined in

node_modules/csstype/index.d.ts:6770

___

### WebkitBackdropFilter

• `Optional` **WebkitBackdropFilter**: [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter)

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBackdropFilter](components_Container._internal_.VendorLonghandProperties.md#webkitbackdropfilter)

#### Defined in

node_modules/csstype/index.d.ts:6778

___

### WebkitBackfaceVisibility

• `Optional` **WebkitBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBackfaceVisibility](components_Container._internal_.VendorLonghandProperties.md#webkitbackfacevisibility)

#### Defined in

node_modules/csstype/index.d.ts:6786

___

### WebkitBackgroundClip

• `Optional` **WebkitBackgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip)

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBackgroundClip](components_Container._internal_.VendorLonghandProperties.md#webkitbackgroundclip)

#### Defined in

node_modules/csstype/index.d.ts:6794

___

### WebkitBackgroundOrigin

• `Optional` **WebkitBackgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin)

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBackgroundOrigin](components_Container._internal_.VendorLonghandProperties.md#webkitbackgroundorigin)

#### Defined in

node_modules/csstype/index.d.ts:6802

___

### WebkitBackgroundSize

• `Optional` **WebkitBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBackgroundSize](components_Container._internal_.VendorLonghandProperties.md#webkitbackgroundsize)

#### Defined in

node_modules/csstype/index.d.ts:6810

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: [`WebkitBorderBefore`](../modules/components_Container._internal_.md#webkitborderbefore)<`TLength`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitBorderBefore](components_Container._internal_.VendorShorthandProperties.md#webkitborderbefore)

#### Defined in

node_modules/csstype/index.d.ts:7617

___

### WebkitBorderBeforeColor

• `Optional` **WebkitBorderBeforeColor**: [`WebkitBorderBeforeColor`](../modules/components_Container._internal_.md#webkitborderbeforecolor)

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderBeforeColor](components_Container._internal_.VendorLonghandProperties.md#webkitborderbeforecolor)

#### Defined in

node_modules/csstype/index.d.ts:6816

___

### WebkitBorderBeforeStyle

• `Optional` **WebkitBorderBeforeStyle**: [`WebkitBorderBeforeStyle`](../modules/components_Container._internal_.md#webkitborderbeforestyle)

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderBeforeStyle](components_Container._internal_.VendorLonghandProperties.md#webkitborderbeforestyle)

#### Defined in

node_modules/csstype/index.d.ts:6822

___

### WebkitBorderBeforeWidth

• `Optional` **WebkitBorderBeforeWidth**: [`WebkitBorderBeforeWidth`](../modules/components_Container._internal_.md#webkitborderbeforewidth)<`TLength`\>

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderBeforeWidth](components_Container._internal_.VendorLonghandProperties.md#webkitborderbeforewidth)

#### Defined in

node_modules/csstype/index.d.ts:6828

___

### WebkitBorderBottomLeftRadius

• `Optional` **WebkitBorderBottomLeftRadius**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\>

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderBottomLeftRadius](components_Container._internal_.VendorLonghandProperties.md#webkitborderbottomleftradius)

#### Defined in

node_modules/csstype/index.d.ts:6836

___

### WebkitBorderBottomRightRadius

• `Optional` **WebkitBorderBottomRightRadius**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\>

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderBottomRightRadius](components_Container._internal_.VendorLonghandProperties.md#webkitborderbottomrightradius)

#### Defined in

node_modules/csstype/index.d.ts:6844

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitBorderImage](components_Container._internal_.VendorShorthandProperties.md#webkitborderimage)

#### Defined in

node_modules/csstype/index.d.ts:7623

___

### WebkitBorderImageSlice

• `Optional` **WebkitBorderImageSlice**: [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice)

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderImageSlice](components_Container._internal_.VendorLonghandProperties.md#webkitborderimageslice)

#### Defined in

node_modules/csstype/index.d.ts:6852

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitBorderRadius](components_Container._internal_.VendorShorthandProperties.md#webkitborderradius)

#### Defined in

node_modules/csstype/index.d.ts:7629

___

### WebkitBorderTopLeftRadius

• `Optional` **WebkitBorderTopLeftRadius**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\>

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderTopLeftRadius](components_Container._internal_.VendorLonghandProperties.md#webkitbordertopleftradius)

#### Defined in

node_modules/csstype/index.d.ts:6860

___

### WebkitBorderTopRightRadius

• `Optional` **WebkitBorderTopRightRadius**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\>

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBorderTopRightRadius](components_Container._internal_.VendorLonghandProperties.md#webkitbordertoprightradius)

#### Defined in

node_modules/csstype/index.d.ts:6868

___

### WebkitBoxDecorationBreak

• `Optional` **WebkitBoxDecorationBreak**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak)

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBoxDecorationBreak](components_Container._internal_.VendorLonghandProperties.md#webkitboxdecorationbreak)

#### Defined in

node_modules/csstype/index.d.ts:6876

___

### WebkitBoxReflect

• `Optional` **WebkitBoxReflect**: [`WebkitBoxReflect`](../modules/components_Container._internal_.md#webkitboxreflect)<`TLength`\>

The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.

**Syntax**: `[ above | below | right | left ]? <length>? <image>?`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBoxReflect](components_Container._internal_.VendorLonghandProperties.md#webkitboxreflect)

#### Defined in

node_modules/csstype/index.d.ts:6884

___

### WebkitBoxShadow

• `Optional` **WebkitBoxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow)

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBoxShadow](components_Container._internal_.VendorLonghandProperties.md#webkitboxshadow)

#### Defined in

node_modules/csstype/index.d.ts:6892

___

### WebkitBoxSizing

• `Optional` **WebkitBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitBoxSizing](components_Container._internal_.VendorLonghandProperties.md#webkitboxsizing)

#### Defined in

node_modules/csstype/index.d.ts:6900

___

### WebkitClipPath

• `Optional` **WebkitClipPath**: [`ClipPath`](../modules/components_Container._internal_.md#clippath)

The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitClipPath](components_Container._internal_.VendorLonghandProperties.md#webkitclippath)

#### Defined in

node_modules/csstype/index.d.ts:6908

___

### WebkitColumnCount

• `Optional` **WebkitColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnCount](components_Container._internal_.VendorLonghandProperties.md#webkitcolumncount)

#### Defined in

node_modules/csstype/index.d.ts:6916

___

### WebkitColumnFill

• `Optional` **WebkitColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnFill](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnfill)

#### Defined in

node_modules/csstype/index.d.ts:6924

___

### WebkitColumnGap

• `Optional` **WebkitColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnGap](components_Container._internal_.VendorLonghandProperties.md#webkitcolumngap)

#### Defined in

node_modules/csstype/index.d.ts:6932

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitColumnRule](components_Container._internal_.VendorShorthandProperties.md#webkitcolumnrule)

#### Defined in

node_modules/csstype/index.d.ts:7635

___

### WebkitColumnRuleColor

• `Optional` **WebkitColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnRuleColor](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnrulecolor)

#### Defined in

node_modules/csstype/index.d.ts:6940

___

### WebkitColumnRuleStyle

• `Optional` **WebkitColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnRuleStyle](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnrulestyle)

#### Defined in

node_modules/csstype/index.d.ts:6948

___

### WebkitColumnRuleWidth

• `Optional` **WebkitColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnRuleWidth](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnrulewidth)

#### Defined in

node_modules/csstype/index.d.ts:6956

___

### WebkitColumnSpan

• `Optional` **WebkitColumnSpan**: [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan)

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnSpan](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnspan)

#### Defined in

node_modules/csstype/index.d.ts:6964

___

### WebkitColumnWidth

• `Optional` **WebkitColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitColumnWidth](components_Container._internal_.VendorLonghandProperties.md#webkitcolumnwidth)

#### Defined in

node_modules/csstype/index.d.ts:6972

___

### WebkitColumns

• `Optional` **WebkitColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitColumns](components_Container._internal_.VendorShorthandProperties.md#webkitcolumns)

#### Defined in

node_modules/csstype/index.d.ts:7641

___

### WebkitFilter

• `Optional` **WebkitFilter**: [`Filter`](../modules/components_Container._internal_.md#filter)

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFilter](components_Container._internal_.VendorLonghandProperties.md#webkitfilter)

#### Defined in

node_modules/csstype/index.d.ts:6980

___

### WebkitFlex

• `Optional` **WebkitFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitFlex](components_Container._internal_.VendorShorthandProperties.md#webkitflex)

#### Defined in

node_modules/csstype/index.d.ts:7647

___

### WebkitFlexBasis

• `Optional` **WebkitFlexBasis**: [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`TLength`\>

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFlexBasis](components_Container._internal_.VendorLonghandProperties.md#webkitflexbasis)

#### Defined in

node_modules/csstype/index.d.ts:6988

___

### WebkitFlexDirection

• `Optional` **WebkitFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFlexDirection](components_Container._internal_.VendorLonghandProperties.md#webkitflexdirection)

#### Defined in

node_modules/csstype/index.d.ts:6996

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitFlexFlow](components_Container._internal_.VendorShorthandProperties.md#webkitflexflow)

#### Defined in

node_modules/csstype/index.d.ts:7653

___

### WebkitFlexGrow

• `Optional` **WebkitFlexGrow**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFlexGrow](components_Container._internal_.VendorLonghandProperties.md#webkitflexgrow)

#### Defined in

node_modules/csstype/index.d.ts:7004

___

### WebkitFlexShrink

• `Optional` **WebkitFlexShrink**: [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink)

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFlexShrink](components_Container._internal_.VendorLonghandProperties.md#webkitflexshrink)

#### Defined in

node_modules/csstype/index.d.ts:7012

___

### WebkitFlexWrap

• `Optional` **WebkitFlexWrap**: [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap)

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFlexWrap](components_Container._internal_.VendorLonghandProperties.md#webkitflexwrap)

#### Defined in

node_modules/csstype/index.d.ts:7020

___

### WebkitFontFeatureSettings

• `Optional` **WebkitFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFontFeatureSettings](components_Container._internal_.VendorLonghandProperties.md#webkitfontfeaturesettings)

#### Defined in

node_modules/csstype/index.d.ts:7028

___

### WebkitFontKerning

• `Optional` **WebkitFontKerning**: [`FontKerning`](../modules/components_Container._internal_.md#fontkerning)

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFontKerning](components_Container._internal_.VendorLonghandProperties.md#webkitfontkerning)

#### Defined in

node_modules/csstype/index.d.ts:7036

___

### WebkitFontSmoothing

• `Optional` **WebkitFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFontSmoothing](components_Container._internal_.VendorLonghandProperties.md#webkitfontsmoothing)

#### Defined in

node_modules/csstype/index.d.ts:7044

___

### WebkitFontVariantLigatures

• `Optional` **WebkitFontVariantLigatures**: [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures)

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitFontVariantLigatures](components_Container._internal_.VendorLonghandProperties.md#webkitfontvariantligatures)

#### Defined in

node_modules/csstype/index.d.ts:7052

___

### WebkitHyphens

• `Optional` **WebkitHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitHyphens](components_Container._internal_.VendorLonghandProperties.md#webkithyphens)

#### Defined in

node_modules/csstype/index.d.ts:7060

___

### WebkitJustifyContent

• `Optional` **WebkitJustifyContent**: [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent)

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitJustifyContent](components_Container._internal_.VendorLonghandProperties.md#webkitjustifycontent)

#### Defined in

node_modules/csstype/index.d.ts:7068

___

### WebkitLineBreak

• `Optional` **WebkitLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitLineBreak](components_Container._internal_.VendorLonghandProperties.md#webkitlinebreak)

#### Defined in

node_modules/csstype/index.d.ts:7076

___

### WebkitLineClamp

• `Optional` **WebkitLineClamp**: [`WebkitLineClamp`](../modules/components_Container._internal_.md#webkitlineclamp)

The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitLineClamp](components_Container._internal_.VendorLonghandProperties.md#webkitlineclamp)

#### Defined in

node_modules/csstype/index.d.ts:7084

___

### WebkitMarginEnd

• `Optional` **WebkitMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMarginEnd](components_Container._internal_.VendorLonghandProperties.md#webkitmarginend)

#### Defined in

node_modules/csstype/index.d.ts:7092

___

### WebkitMarginStart

• `Optional` **WebkitMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMarginStart](components_Container._internal_.VendorLonghandProperties.md#webkitmarginstart)

#### Defined in

node_modules/csstype/index.d.ts:7100

___

### WebkitMask

• `Optional` **WebkitMask**: [`WebkitMask`](../modules/components_Container._internal_.md#webkitmask)<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitMask](components_Container._internal_.VendorShorthandProperties.md#webkitmask)

#### Defined in

node_modules/csstype/index.d.ts:7659

___

### WebkitMaskAttachment

• `Optional` **WebkitMaskAttachment**: [`WebkitMaskAttachment`](../modules/components_Container._internal_.md#webkitmaskattachment)

If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskAttachment](components_Container._internal_.VendorLonghandProperties.md#webkitmaskattachment)

#### Defined in

node_modules/csstype/index.d.ts:7108

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitMaskBoxImage](components_Container._internal_.VendorShorthandProperties.md#webkitmaskboximage)

#### Defined in

node_modules/csstype/index.d.ts:7665

___

### WebkitMaskBoxImageOutset

• `Optional` **WebkitMaskBoxImageOutset**: [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`TLength`\>

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskBoxImageOutset](components_Container._internal_.VendorLonghandProperties.md#webkitmaskboximageoutset)

#### Defined in

node_modules/csstype/index.d.ts:7116

___

### WebkitMaskBoxImageRepeat

• `Optional` **WebkitMaskBoxImageRepeat**: [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat)

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskBoxImageRepeat](components_Container._internal_.VendorLonghandProperties.md#webkitmaskboximagerepeat)

#### Defined in

node_modules/csstype/index.d.ts:7124

___

### WebkitMaskBoxImageSlice

• `Optional` **WebkitMaskBoxImageSlice**: [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice)

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskBoxImageSlice](components_Container._internal_.VendorLonghandProperties.md#webkitmaskboximageslice)

#### Defined in

node_modules/csstype/index.d.ts:7132

___

### WebkitMaskBoxImageSource

• `Optional` **WebkitMaskBoxImageSource**: [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource)

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskBoxImageSource](components_Container._internal_.VendorLonghandProperties.md#webkitmaskboximagesource)

#### Defined in

node_modules/csstype/index.d.ts:7140

___

### WebkitMaskBoxImageWidth

• `Optional` **WebkitMaskBoxImageWidth**: [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`TLength`\>

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskBoxImageWidth](components_Container._internal_.VendorLonghandProperties.md#webkitmaskboximagewidth)

#### Defined in

node_modules/csstype/index.d.ts:7148

___

### WebkitMaskClip

• `Optional` **WebkitMaskClip**: [`WebkitMaskClip`](../modules/components_Container._internal_.md#webkitmaskclip)

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <box> | border | padding | content | text ]#`

**Initial value**: `border`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskClip](components_Container._internal_.VendorLonghandProperties.md#webkitmaskclip)

#### Defined in

node_modules/csstype/index.d.ts:7156

___

### WebkitMaskComposite

• `Optional` **WebkitMaskComposite**: [`WebkitMaskComposite`](../modules/components_Container._internal_.md#webkitmaskcomposite)

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.

**Syntax**: `<composite-style>#`

**Initial value**: `source-over`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskComposite](components_Container._internal_.VendorLonghandProperties.md#webkitmaskcomposite)

#### Defined in

node_modules/csstype/index.d.ts:7164

___

### WebkitMaskImage

• `Optional` **WebkitMaskImage**: [`WebkitMaskImage`](../modules/components_Container._internal_.md#webkitmaskimage)

The **`mask-image`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskImage](components_Container._internal_.VendorLonghandProperties.md#webkitmaskimage)

#### Defined in

node_modules/csstype/index.d.ts:7172

___

### WebkitMaskOrigin

• `Optional` **WebkitMaskOrigin**: [`WebkitMaskOrigin`](../modules/components_Container._internal_.md#webkitmaskorigin)

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `[ <box> | border | padding | content ]#`

**Initial value**: `padding`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskOrigin](components_Container._internal_.VendorLonghandProperties.md#webkitmaskorigin)

#### Defined in

node_modules/csstype/index.d.ts:7180

___

### WebkitMaskPosition

• `Optional` **WebkitMaskPosition**: [`WebkitMaskPosition`](../modules/components_Container._internal_.md#webkitmaskposition)<`TLength`\>

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `0% 0%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskPosition](components_Container._internal_.VendorLonghandProperties.md#webkitmaskposition)

#### Defined in

node_modules/csstype/index.d.ts:7188

___

### WebkitMaskPositionX

• `Optional` **WebkitMaskPositionX**: [`WebkitMaskPositionX`](../modules/components_Container._internal_.md#webkitmaskpositionx)<`TLength`\>

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

**Syntax**: `[ <length-percentage> | left | center | right ]#`

**Initial value**: `0%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskPositionX](components_Container._internal_.VendorLonghandProperties.md#webkitmaskpositionx)

#### Defined in

node_modules/csstype/index.d.ts:7196

___

### WebkitMaskPositionY

• `Optional` **WebkitMaskPositionY**: [`WebkitMaskPositionY`](../modules/components_Container._internal_.md#webkitmaskpositiony)<`TLength`\>

The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.

**Syntax**: `[ <length-percentage> | top | center | bottom ]#`

**Initial value**: `0%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskPositionY](components_Container._internal_.VendorLonghandProperties.md#webkitmaskpositiony)

#### Defined in

node_modules/csstype/index.d.ts:7204

___

### WebkitMaskRepeat

• `Optional` **WebkitMaskRepeat**: [`WebkitMaskRepeat`](../modules/components_Container._internal_.md#webkitmaskrepeat)

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskRepeat](components_Container._internal_.VendorLonghandProperties.md#webkitmaskrepeat)

#### Defined in

node_modules/csstype/index.d.ts:7212

___

### WebkitMaskRepeatX

• `Optional` **WebkitMaskRepeatX**: [`WebkitMaskRepeatX`](../modules/components_Container._internal_.md#webkitmaskrepeatx)

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskRepeatX](components_Container._internal_.VendorLonghandProperties.md#webkitmaskrepeatx)

#### Defined in

node_modules/csstype/index.d.ts:7220

___

### WebkitMaskRepeatY

• `Optional` **WebkitMaskRepeatY**: [`WebkitMaskRepeatY`](../modules/components_Container._internal_.md#webkitmaskrepeaty)

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskRepeatY](components_Container._internal_.VendorLonghandProperties.md#webkitmaskrepeaty)

#### Defined in

node_modules/csstype/index.d.ts:7228

___

### WebkitMaskSize

• `Optional` **WebkitMaskSize**: [`WebkitMaskSize`](../modules/components_Container._internal_.md#webkitmasksize)<`TLength`\>

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaskSize](components_Container._internal_.VendorLonghandProperties.md#webkitmasksize)

#### Defined in

node_modules/csstype/index.d.ts:7236

___

### WebkitMaxInlineSize

• `Optional` **WebkitMaxInlineSize**: [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`TLength`\>

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitMaxInlineSize](components_Container._internal_.VendorLonghandProperties.md#webkitmaxinlinesize)

#### Defined in

node_modules/csstype/index.d.ts:7244

___

### WebkitOrder

• `Optional` **WebkitOrder**: [`Order`](../modules/components_Container._internal_.md#order)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitOrder](components_Container._internal_.VendorLonghandProperties.md#webkitorder)

#### Defined in

node_modules/csstype/index.d.ts:7252

___

### WebkitOverflowScrolling

• `Optional` **WebkitOverflowScrolling**: [`WebkitOverflowScrolling`](../modules/components_Container._internal_.md#webkitoverflowscrolling)

The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.

**Syntax**: `auto | touch`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitOverflowScrolling](components_Container._internal_.VendorLonghandProperties.md#webkitoverflowscrolling)

#### Defined in

node_modules/csstype/index.d.ts:7260

___

### WebkitPaddingEnd

• `Optional` **WebkitPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitPaddingEnd](components_Container._internal_.VendorLonghandProperties.md#webkitpaddingend)

#### Defined in

node_modules/csstype/index.d.ts:7268

___

### WebkitPaddingStart

• `Optional` **WebkitPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitPaddingStart](components_Container._internal_.VendorLonghandProperties.md#webkitpaddingstart)

#### Defined in

node_modules/csstype/index.d.ts:7276

___

### WebkitPerspective

• `Optional` **WebkitPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitPerspective](components_Container._internal_.VendorLonghandProperties.md#webkitperspective)

#### Defined in

node_modules/csstype/index.d.ts:7284

___

### WebkitPerspectiveOrigin

• `Optional` **WebkitPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitPerspectiveOrigin](components_Container._internal_.VendorLonghandProperties.md#webkitperspectiveorigin)

#### Defined in

node_modules/csstype/index.d.ts:7292

___

### WebkitPrintColorAdjust

• `Optional` **WebkitPrintColorAdjust**: [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust)

The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitPrintColorAdjust](components_Container._internal_.VendorLonghandProperties.md#webkitprintcoloradjust)

#### Defined in

node_modules/csstype/index.d.ts:7300

___

### WebkitRubyPosition

• `Optional` **WebkitRubyPosition**: [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition)

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitRubyPosition](components_Container._internal_.VendorLonghandProperties.md#webkitrubyposition)

#### Defined in

node_modules/csstype/index.d.ts:7308

___

### WebkitScrollSnapType

• `Optional` **WebkitScrollSnapType**: [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitScrollSnapType](components_Container._internal_.VendorLonghandProperties.md#webkitscrollsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:7316

___

### WebkitShapeMargin

• `Optional` **WebkitShapeMargin**: [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`TLength`\>

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitShapeMargin](components_Container._internal_.VendorLonghandProperties.md#webkitshapemargin)

#### Defined in

node_modules/csstype/index.d.ts:7324

___

### WebkitTapHighlightColor

• `Optional` **WebkitTapHighlightColor**: [`WebkitTapHighlightColor`](../modules/components_Container._internal_.md#webkittaphighlightcolor)

**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.

**Syntax**: `<color>`

**Initial value**: `black`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTapHighlightColor](components_Container._internal_.VendorLonghandProperties.md#webkittaphighlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:7332

___

### WebkitTextCombine

• `Optional` **WebkitTextCombine**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextCombine](components_Container._internal_.VendorLonghandProperties.md#webkittextcombine)

#### Defined in

node_modules/csstype/index.d.ts:7340

___

### WebkitTextDecorationColor

• `Optional` **WebkitTextDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor)

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextDecorationColor](components_Container._internal_.VendorLonghandProperties.md#webkittextdecorationcolor)

#### Defined in

node_modules/csstype/index.d.ts:7348

___

### WebkitTextDecorationLine

• `Optional` **WebkitTextDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline)

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextDecorationLine](components_Container._internal_.VendorLonghandProperties.md#webkittextdecorationline)

#### Defined in

node_modules/csstype/index.d.ts:7356

___

### WebkitTextDecorationSkip

• `Optional` **WebkitTextDecorationSkip**: [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip)

The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextDecorationSkip](components_Container._internal_.VendorLonghandProperties.md#webkittextdecorationskip)

#### Defined in

node_modules/csstype/index.d.ts:7364

___

### WebkitTextDecorationStyle

• `Optional` **WebkitTextDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle)

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextDecorationStyle](components_Container._internal_.VendorLonghandProperties.md#webkittextdecorationstyle)

#### Defined in

node_modules/csstype/index.d.ts:7372

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitTextEmphasis](components_Container._internal_.VendorShorthandProperties.md#webkittextemphasis)

#### Defined in

node_modules/csstype/index.d.ts:7671

___

### WebkitTextEmphasisColor

• `Optional` **WebkitTextEmphasisColor**: [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor)

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextEmphasisColor](components_Container._internal_.VendorLonghandProperties.md#webkittextemphasiscolor)

#### Defined in

node_modules/csstype/index.d.ts:7380

___

### WebkitTextEmphasisPosition

• `Optional` **WebkitTextEmphasisPosition**: [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition)

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextEmphasisPosition](components_Container._internal_.VendorLonghandProperties.md#webkittextemphasisposition)

#### Defined in

node_modules/csstype/index.d.ts:7388

___

### WebkitTextEmphasisStyle

• `Optional` **WebkitTextEmphasisStyle**: [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle)

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextEmphasisStyle](components_Container._internal_.VendorLonghandProperties.md#webkittextemphasisstyle)

#### Defined in

node_modules/csstype/index.d.ts:7396

___

### WebkitTextFillColor

• `Optional` **WebkitTextFillColor**: [`WebkitTextFillColor`](../modules/components_Container._internal_.md#webkittextfillcolor)

The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextFillColor](components_Container._internal_.VendorLonghandProperties.md#webkittextfillcolor)

#### Defined in

node_modules/csstype/index.d.ts:7404

___

### WebkitTextOrientation

• `Optional` **WebkitTextOrientation**: [`TextOrientation`](../modules/components_Container._internal_.md#textorientation)

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextOrientation](components_Container._internal_.VendorLonghandProperties.md#webkittextorientation)

#### Defined in

node_modules/csstype/index.d.ts:7412

___

### WebkitTextSizeAdjust

• `Optional` **WebkitTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextSizeAdjust](components_Container._internal_.VendorLonghandProperties.md#webkittextsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:7420

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: [`WebkitTextStroke`](../modules/components_Container._internal_.md#webkittextstroke)<`TLength`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitTextStroke](components_Container._internal_.VendorShorthandProperties.md#webkittextstroke)

#### Defined in

node_modules/csstype/index.d.ts:7677

___

### WebkitTextStrokeColor

• `Optional` **WebkitTextStrokeColor**: [`WebkitTextStrokeColor`](../modules/components_Container._internal_.md#webkittextstrokecolor)

The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextStrokeColor](components_Container._internal_.VendorLonghandProperties.md#webkittextstrokecolor)

#### Defined in

node_modules/csstype/index.d.ts:7428

___

### WebkitTextStrokeWidth

• `Optional` **WebkitTextStrokeWidth**: [`WebkitTextStrokeWidth`](../modules/components_Container._internal_.md#webkittextstrokewidth)<`TLength`\>

The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextStrokeWidth](components_Container._internal_.VendorLonghandProperties.md#webkittextstrokewidth)

#### Defined in

node_modules/csstype/index.d.ts:7436

___

### WebkitTextUnderlinePosition

• `Optional` **WebkitTextUnderlinePosition**: [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition)

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTextUnderlinePosition](components_Container._internal_.VendorLonghandProperties.md#webkittextunderlineposition)

#### Defined in

node_modules/csstype/index.d.ts:7444

___

### WebkitTouchCallout

• `Optional` **WebkitTouchCallout**: [`WebkitTouchCallout`](../modules/components_Container._internal_.md#webkittouchcallout)

The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.

**Syntax**: `default | none`

**Initial value**: `default`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTouchCallout](components_Container._internal_.VendorLonghandProperties.md#webkittouchcallout)

#### Defined in

node_modules/csstype/index.d.ts:7452

___

### WebkitTransform

• `Optional` **WebkitTransform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransform](components_Container._internal_.VendorLonghandProperties.md#webkittransform)

#### Defined in

node_modules/csstype/index.d.ts:7460

___

### WebkitTransformOrigin

• `Optional` **WebkitTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransformOrigin](components_Container._internal_.VendorLonghandProperties.md#webkittransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:7468

___

### WebkitTransformStyle

• `Optional` **WebkitTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransformStyle](components_Container._internal_.VendorLonghandProperties.md#webkittransformstyle)

#### Defined in

node_modules/csstype/index.d.ts:7476

___

### WebkitTransition

• `Optional` **WebkitTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[WebkitTransition](components_Container._internal_.VendorShorthandProperties.md#webkittransition)

#### Defined in

node_modules/csstype/index.d.ts:7683

___

### WebkitTransitionDelay

• `Optional` **WebkitTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransitionDelay](components_Container._internal_.VendorLonghandProperties.md#webkittransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:7484

___

### WebkitTransitionDuration

• `Optional` **WebkitTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransitionDuration](components_Container._internal_.VendorLonghandProperties.md#webkittransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:7492

___

### WebkitTransitionProperty

• `Optional` **WebkitTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransitionProperty](components_Container._internal_.VendorLonghandProperties.md#webkittransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:7500

___

### WebkitTransitionTimingFunction

• `Optional` **WebkitTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitTransitionTimingFunction](components_Container._internal_.VendorLonghandProperties.md#webkittransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:7508

___

### WebkitUserModify

• `Optional` **WebkitUserModify**: [`WebkitUserModify`](../modules/components_Container._internal_.md#webkitusermodify)

**Syntax**: `read-only | read-write | read-write-plaintext-only`

**Initial value**: `read-only`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitUserModify](components_Container._internal_.VendorLonghandProperties.md#webkitusermodify)

#### Defined in

node_modules/csstype/index.d.ts:7514

___

### WebkitUserSelect

• `Optional` **WebkitUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitUserSelect](components_Container._internal_.VendorLonghandProperties.md#webkituserselect)

#### Defined in

node_modules/csstype/index.d.ts:7522

___

### WebkitWritingMode

• `Optional` **WebkitWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[WebkitWritingMode](components_Container._internal_.VendorLonghandProperties.md#webkitwritingmode)

#### Defined in

node_modules/csstype/index.d.ts:7530

___

### msAccelerator

• `Optional` **msAccelerator**: [`MsAccelerator`](../modules/components_Container._internal_.md#msaccelerator)

The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.

**Syntax**: `false | true`

**Initial value**: `false`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msAccelerator](components_Container._internal_.VendorLonghandProperties.md#msaccelerator)

#### Defined in

node_modules/csstype/index.d.ts:6186

___

### msAlignSelf

• `Optional` **msAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msAlignSelf](components_Container._internal_.VendorLonghandProperties.md#msalignself)

#### Defined in

node_modules/csstype/index.d.ts:6194

___

### msBlockProgression

• `Optional` **msBlockProgression**: [`MsBlockProgression`](../modules/components_Container._internal_.md#msblockprogression)

The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.

**Syntax**: `tb | rl | bt | lr`

**Initial value**: `tb`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msBlockProgression](components_Container._internal_.VendorLonghandProperties.md#msblockprogression)

#### Defined in

node_modules/csstype/index.d.ts:6202

___

### msContentZoomChaining

• `Optional` **msContentZoomChaining**: [`MsContentZoomChaining`](../modules/components_Container._internal_.md#mscontentzoomchaining)

The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.

**Syntax**: `none | chained`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZoomChaining](components_Container._internal_.VendorLonghandProperties.md#mscontentzoomchaining)

#### Defined in

node_modules/csstype/index.d.ts:6210

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: [`MsContentZoomLimit`](../modules/components_Container._internal_.md#mscontentzoomlimit)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msContentZoomLimit](components_Container._internal_.VendorShorthandProperties.md#mscontentzoomlimit)

#### Defined in

node_modules/csstype/index.d.ts:7569

___

### msContentZoomLimitMax

• `Optional` **msContentZoomLimitMax**: [`MsContentZoomLimitMax`](../modules/components_Container._internal_.md#mscontentzoomlimitmax)

The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `400%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZoomLimitMax](components_Container._internal_.VendorLonghandProperties.md#mscontentzoomlimitmax)

#### Defined in

node_modules/csstype/index.d.ts:6218

___

### msContentZoomLimitMin

• `Optional` **msContentZoomLimitMin**: [`MsContentZoomLimitMin`](../modules/components_Container._internal_.md#mscontentzoomlimitmin)

The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `100%`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZoomLimitMin](components_Container._internal_.VendorLonghandProperties.md#mscontentzoomlimitmin)

#### Defined in

node_modules/csstype/index.d.ts:6226

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: [`MsContentZoomSnap`](../modules/components_Container._internal_.md#mscontentzoomsnap)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msContentZoomSnap](components_Container._internal_.VendorShorthandProperties.md#mscontentzoomsnap)

#### Defined in

node_modules/csstype/index.d.ts:7575

___

### msContentZoomSnapPoints

• `Optional` **msContentZoomSnapPoints**: [`MsContentZoomSnapPoints`](../modules/components_Container._internal_.md#mscontentzoomsnappoints)

The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.

**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`

**Initial value**: `snapInterval(0%, 100%)`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZoomSnapPoints](components_Container._internal_.VendorLonghandProperties.md#mscontentzoomsnappoints)

#### Defined in

node_modules/csstype/index.d.ts:6234

___

### msContentZoomSnapType

• `Optional` **msContentZoomSnapType**: [`MsContentZoomSnapType`](../modules/components_Container._internal_.md#mscontentzoomsnaptype)

The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZoomSnapType](components_Container._internal_.VendorLonghandProperties.md#mscontentzoomsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:6242

___

### msContentZooming

• `Optional` **msContentZooming**: [`MsContentZooming`](../modules/components_Container._internal_.md#mscontentzooming)

The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.

**Syntax**: `none | zoom`

**Initial value**: zoom for the top level element, none for all other elements

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msContentZooming](components_Container._internal_.VendorLonghandProperties.md#mscontentzooming)

#### Defined in

node_modules/csstype/index.d.ts:6250

___

### msFilter

• `Optional` **msFilter**: [`MsFilter`](../modules/components_Container._internal_.md#msfilter)

The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.

**Syntax**: `<string>`

**Initial value**: "" (the empty string)

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msFilter](components_Container._internal_.VendorLonghandProperties.md#msfilter)

#### Defined in

node_modules/csstype/index.d.ts:6258

___

### msFlex

• `Optional` **msFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msFlex](components_Container._internal_.VendorShorthandProperties.md#msflex)

#### Defined in

node_modules/csstype/index.d.ts:7581

___

### msFlexDirection

• `Optional` **msFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msFlexDirection](components_Container._internal_.VendorLonghandProperties.md#msflexdirection)

#### Defined in

node_modules/csstype/index.d.ts:6266

___

### msFlexPositive

• `Optional` **msFlexPositive**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msFlexPositive](components_Container._internal_.VendorLonghandProperties.md#msflexpositive)

#### Defined in

node_modules/csstype/index.d.ts:6274

___

### msFlowFrom

• `Optional` **msFlowFrom**: [`MsFlowFrom`](../modules/components_Container._internal_.md#msflowfrom)

The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msFlowFrom](components_Container._internal_.VendorLonghandProperties.md#msflowfrom)

#### Defined in

node_modules/csstype/index.d.ts:6282

___

### msFlowInto

• `Optional` **msFlowInto**: [`MsFlowInto`](../modules/components_Container._internal_.md#msflowinto)

The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msFlowInto](components_Container._internal_.VendorLonghandProperties.md#msflowinto)

#### Defined in

node_modules/csstype/index.d.ts:6290

___

### msGridColumns

• `Optional` **msGridColumns**: [`MsGridColumns`](../modules/components_Container._internal_.md#msgridcolumns)<`TLength`\>

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msGridColumns](components_Container._internal_.VendorLonghandProperties.md#msgridcolumns)

#### Defined in

node_modules/csstype/index.d.ts:6298

___

### msGridRows

• `Optional` **msGridRows**: [`MsGridRows`](../modules/components_Container._internal_.md#msgridrows)<`TLength`\>

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msGridRows](components_Container._internal_.VendorLonghandProperties.md#msgridrows)

#### Defined in

node_modules/csstype/index.d.ts:6306

___

### msHighContrastAdjust

• `Optional` **msHighContrastAdjust**: [`MsHighContrastAdjust`](../modules/components_Container._internal_.md#mshighcontrastadjust)

The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msHighContrastAdjust](components_Container._internal_.VendorLonghandProperties.md#mshighcontrastadjust)

#### Defined in

node_modules/csstype/index.d.ts:6314

___

### msHyphenateLimitChars

• `Optional` **msHyphenateLimitChars**: [`MsHyphenateLimitChars`](../modules/components_Container._internal_.md#mshyphenatelimitchars)

The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.

**Syntax**: `auto | <integer>{1,3}`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msHyphenateLimitChars](components_Container._internal_.VendorLonghandProperties.md#mshyphenatelimitchars)

#### Defined in

node_modules/csstype/index.d.ts:6322

___

### msHyphenateLimitLines

• `Optional` **msHyphenateLimitLines**: [`MsHyphenateLimitLines`](../modules/components_Container._internal_.md#mshyphenatelimitlines)

The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.

**Syntax**: `no-limit | <integer>`

**Initial value**: `no-limit`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msHyphenateLimitLines](components_Container._internal_.VendorLonghandProperties.md#mshyphenatelimitlines)

#### Defined in

node_modules/csstype/index.d.ts:6330

___

### msHyphenateLimitZone

• `Optional` **msHyphenateLimitZone**: [`MsHyphenateLimitZone`](../modules/components_Container._internal_.md#mshyphenatelimitzone)<`TLength`\>

The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.

**Syntax**: `<percentage> | <length>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msHyphenateLimitZone](components_Container._internal_.VendorLonghandProperties.md#mshyphenatelimitzone)

#### Defined in

node_modules/csstype/index.d.ts:6338

___

### msHyphens

• `Optional` **msHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msHyphens](components_Container._internal_.VendorLonghandProperties.md#mshyphens)

#### Defined in

node_modules/csstype/index.d.ts:6346

___

### msImeAlign

• `Optional` **msImeAlign**: [`MsImeAlign`](../modules/components_Container._internal_.md#msimealign)

The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.

**Syntax**: `auto | after`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msImeAlign](components_Container._internal_.VendorLonghandProperties.md#msimealign)

#### Defined in

node_modules/csstype/index.d.ts:6354

___

### msJustifySelf

• `Optional` **msJustifySelf**: [`JustifySelf`](../modules/components_Container._internal_.md#justifyself)

The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msJustifySelf](components_Container._internal_.VendorLonghandProperties.md#msjustifyself)

#### Defined in

node_modules/csstype/index.d.ts:6362

___

### msLineBreak

• `Optional` **msLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msLineBreak](components_Container._internal_.VendorLonghandProperties.md#mslinebreak)

#### Defined in

node_modules/csstype/index.d.ts:6370

___

### msOrder

• `Optional` **msOrder**: [`Order`](../modules/components_Container._internal_.md#order)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msOrder](components_Container._internal_.VendorLonghandProperties.md#msorder)

#### Defined in

node_modules/csstype/index.d.ts:6378

___

### msOverflowStyle

• `Optional` **msOverflowStyle**: [`MsOverflowStyle`](../modules/components_Container._internal_.md#msoverflowstyle)

The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.

**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msOverflowStyle](components_Container._internal_.VendorLonghandProperties.md#msoverflowstyle)

#### Defined in

node_modules/csstype/index.d.ts:6386

___

### msOverflowX

• `Optional` **msOverflowX**: [`OverflowX`](../modules/components_Container._internal_.md#overflowx)

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msOverflowX](components_Container._internal_.VendorLonghandProperties.md#msoverflowx)

#### Defined in

node_modules/csstype/index.d.ts:6394

___

### msOverflowY

• `Optional` **msOverflowY**: [`OverflowY`](../modules/components_Container._internal_.md#overflowy)

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msOverflowY](components_Container._internal_.VendorLonghandProperties.md#msoverflowy)

#### Defined in

node_modules/csstype/index.d.ts:6402

___

### msScrollChaining

• `Optional` **msScrollChaining**: [`MsScrollChaining`](../modules/components_Container._internal_.md#msscrollchaining)

The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.

**Syntax**: `chained | none`

**Initial value**: `chained`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollChaining](components_Container._internal_.VendorLonghandProperties.md#msscrollchaining)

#### Defined in

node_modules/csstype/index.d.ts:6410

___

### msScrollLimit

• `Optional` **msScrollLimit**: [`MsScrollLimit`](../modules/components_Container._internal_.md#msscrolllimit)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msScrollLimit](components_Container._internal_.VendorShorthandProperties.md#msscrolllimit)

#### Defined in

node_modules/csstype/index.d.ts:7587

___

### msScrollLimitXMax

• `Optional` **msScrollLimitXMax**: [`MsScrollLimitXMax`](../modules/components_Container._internal_.md#msscrolllimitxmax)<`TLength`\>

The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollLimitXMax](components_Container._internal_.VendorLonghandProperties.md#msscrolllimitxmax)

#### Defined in

node_modules/csstype/index.d.ts:6418

___

### msScrollLimitXMin

• `Optional` **msScrollLimitXMin**: [`MsScrollLimitXMin`](../modules/components_Container._internal_.md#msscrolllimitxmin)<`TLength`\>

The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollLimitXMin](components_Container._internal_.VendorLonghandProperties.md#msscrolllimitxmin)

#### Defined in

node_modules/csstype/index.d.ts:6426

___

### msScrollLimitYMax

• `Optional` **msScrollLimitYMax**: [`MsScrollLimitYMax`](../modules/components_Container._internal_.md#msscrolllimitymax)<`TLength`\>

The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollLimitYMax](components_Container._internal_.VendorLonghandProperties.md#msscrolllimitymax)

#### Defined in

node_modules/csstype/index.d.ts:6434

___

### msScrollLimitYMin

• `Optional` **msScrollLimitYMin**: [`MsScrollLimitYMin`](../modules/components_Container._internal_.md#msscrolllimitymin)<`TLength`\>

The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollLimitYMin](components_Container._internal_.VendorLonghandProperties.md#msscrolllimitymin)

#### Defined in

node_modules/csstype/index.d.ts:6442

___

### msScrollRails

• `Optional` **msScrollRails**: [`MsScrollRails`](../modules/components_Container._internal_.md#msscrollrails)

The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.

**Syntax**: `none | railed`

**Initial value**: `railed`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollRails](components_Container._internal_.VendorLonghandProperties.md#msscrollrails)

#### Defined in

node_modules/csstype/index.d.ts:6450

___

### msScrollSnapPointsX

• `Optional` **msScrollSnapPointsX**: [`MsScrollSnapPointsX`](../modules/components_Container._internal_.md#msscrollsnappointsx)

The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollSnapPointsX](components_Container._internal_.VendorLonghandProperties.md#msscrollsnappointsx)

#### Defined in

node_modules/csstype/index.d.ts:6458

___

### msScrollSnapPointsY

• `Optional` **msScrollSnapPointsY**: [`MsScrollSnapPointsY`](../modules/components_Container._internal_.md#msscrollsnappointsy)

The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollSnapPointsY](components_Container._internal_.VendorLonghandProperties.md#msscrollsnappointsy)

#### Defined in

node_modules/csstype/index.d.ts:6466

___

### msScrollSnapType

• `Optional` **msScrollSnapType**: [`MsScrollSnapType`](../modules/components_Container._internal_.md#msscrollsnaptype)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollSnapType](components_Container._internal_.VendorLonghandProperties.md#msscrollsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:6474

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: [`MsScrollSnapX`](../modules/components_Container._internal_.md#msscrollsnapx)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msScrollSnapX](components_Container._internal_.VendorShorthandProperties.md#msscrollsnapx)

#### Defined in

node_modules/csstype/index.d.ts:7593

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: [`MsScrollSnapY`](../modules/components_Container._internal_.md#msscrollsnapy)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msScrollSnapY](components_Container._internal_.VendorShorthandProperties.md#msscrollsnapy)

#### Defined in

node_modules/csstype/index.d.ts:7599

___

### msScrollTranslation

• `Optional` **msScrollTranslation**: [`MsScrollTranslation`](../modules/components_Container._internal_.md#msscrolltranslation)

The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.

**Syntax**: `none | vertical-to-horizontal`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollTranslation](components_Container._internal_.VendorLonghandProperties.md#msscrolltranslation)

#### Defined in

node_modules/csstype/index.d.ts:6482

___

### msScrollbar3dlightColor

• `Optional` **msScrollbar3dlightColor**: [`MsScrollbar3dlightColor`](../modules/components_Container._internal_.md#msscrollbar3dlightcolor)

The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbar3dlightColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbar3dlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:6490

___

### msScrollbarArrowColor

• `Optional` **msScrollbarArrowColor**: [`MsScrollbarArrowColor`](../modules/components_Container._internal_.md#msscrollbararrowcolor)

The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.

**Syntax**: `<color>`

**Initial value**: `ButtonText`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarArrowColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbararrowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6498

___

### msScrollbarBaseColor

• `Optional` **msScrollbarBaseColor**: [`MsScrollbarBaseColor`](../modules/components_Container._internal_.md#msscrollbarbasecolor)

The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarBaseColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbarbasecolor)

#### Defined in

node_modules/csstype/index.d.ts:6506

___

### msScrollbarDarkshadowColor

• `Optional` **msScrollbarDarkshadowColor**: [`MsScrollbarDarkshadowColor`](../modules/components_Container._internal_.md#msscrollbardarkshadowcolor)

The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarDarkshadowColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbardarkshadowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6514

___

### msScrollbarFaceColor

• `Optional` **msScrollbarFaceColor**: [`MsScrollbarFaceColor`](../modules/components_Container._internal_.md#msscrollbarfacecolor)

The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDFace`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarFaceColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbarfacecolor)

#### Defined in

node_modules/csstype/index.d.ts:6522

___

### msScrollbarHighlightColor

• `Optional` **msScrollbarHighlightColor**: [`MsScrollbarHighlightColor`](../modules/components_Container._internal_.md#msscrollbarhighlightcolor)

The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDHighlight`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarHighlightColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbarhighlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:6530

___

### msScrollbarShadowColor

• `Optional` **msScrollbarShadowColor**: [`MsScrollbarShadowColor`](../modules/components_Container._internal_.md#msscrollbarshadowcolor)

The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msScrollbarShadowColor](components_Container._internal_.VendorLonghandProperties.md#msscrollbarshadowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6538

___

### msTextAutospace

• `Optional` **msTextAutospace**: [`MsTextAutospace`](../modules/components_Container._internal_.md#mstextautospace)

The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.

**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTextAutospace](components_Container._internal_.VendorLonghandProperties.md#mstextautospace)

#### Defined in

node_modules/csstype/index.d.ts:6546

___

### msTextCombineHorizontal

• `Optional` **msTextCombineHorizontal**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTextCombineHorizontal](components_Container._internal_.VendorLonghandProperties.md#mstextcombinehorizontal)

#### Defined in

node_modules/csstype/index.d.ts:6554

___

### msTextOverflow

• `Optional` **msTextOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow)

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTextOverflow](components_Container._internal_.VendorLonghandProperties.md#mstextoverflow)

#### Defined in

node_modules/csstype/index.d.ts:6562

___

### msTouchAction

• `Optional` **msTouchAction**: [`TouchAction`](../modules/components_Container._internal_.md#touchaction)

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTouchAction](components_Container._internal_.VendorLonghandProperties.md#mstouchaction)

#### Defined in

node_modules/csstype/index.d.ts:6570

___

### msTouchSelect

• `Optional` **msTouchSelect**: [`MsTouchSelect`](../modules/components_Container._internal_.md#mstouchselect)

The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.

**Syntax**: `grippers | none`

**Initial value**: `grippers`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTouchSelect](components_Container._internal_.VendorLonghandProperties.md#mstouchselect)

#### Defined in

node_modules/csstype/index.d.ts:6578

___

### msTransform

• `Optional` **msTransform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransform](components_Container._internal_.VendorLonghandProperties.md#mstransform)

#### Defined in

node_modules/csstype/index.d.ts:6586

___

### msTransformOrigin

• `Optional` **msTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransformOrigin](components_Container._internal_.VendorLonghandProperties.md#mstransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:6594

___

### msTransition

• `Optional` **msTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorShorthandProperties](components_Container._internal_.VendorShorthandProperties.md).[msTransition](components_Container._internal_.VendorShorthandProperties.md#mstransition)

#### Defined in

node_modules/csstype/index.d.ts:7605

___

### msTransitionDelay

• `Optional` **msTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransitionDelay](components_Container._internal_.VendorLonghandProperties.md#mstransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:6602

___

### msTransitionDuration

• `Optional` **msTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransitionDuration](components_Container._internal_.VendorLonghandProperties.md#mstransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:6610

___

### msTransitionProperty

• `Optional` **msTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransitionProperty](components_Container._internal_.VendorLonghandProperties.md#mstransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:6618

___

### msTransitionTimingFunction

• `Optional` **msTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msTransitionTimingFunction](components_Container._internal_.VendorLonghandProperties.md#mstransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6626

___

### msUserSelect

• `Optional` **msUserSelect**: [`MsUserSelect`](../modules/components_Container._internal_.md#msuserselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `none | element | text`

**Initial value**: `text`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msUserSelect](components_Container._internal_.VendorLonghandProperties.md#msuserselect)

#### Defined in

node_modules/csstype/index.d.ts:6634

___

### msWordBreak

• `Optional` **msWordBreak**: [`WordBreak`](../modules/components_Container._internal_.md#wordbreak)

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msWordBreak](components_Container._internal_.VendorLonghandProperties.md#mswordbreak)

#### Defined in

node_modules/csstype/index.d.ts:6642

___

### msWrapFlow

• `Optional` **msWrapFlow**: [`MsWrapFlow`](../modules/components_Container._internal_.md#mswrapflow)

The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.

**Syntax**: `auto | both | start | end | maximum | clear`

**Initial value**: `auto`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msWrapFlow](components_Container._internal_.VendorLonghandProperties.md#mswrapflow)

#### Defined in

node_modules/csstype/index.d.ts:6650

___

### msWrapMargin

• `Optional` **msWrapMargin**: [`MsWrapMargin`](../modules/components_Container._internal_.md#mswrapmargin)<`TLength`\>

The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msWrapMargin](components_Container._internal_.VendorLonghandProperties.md#mswrapmargin)

#### Defined in

node_modules/csstype/index.d.ts:6658

___

### msWrapThrough

• `Optional` **msWrapThrough**: [`MsWrapThrough`](../modules/components_Container._internal_.md#mswrapthrough)

The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.

**Syntax**: `wrap | none`

**Initial value**: `wrap`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msWrapThrough](components_Container._internal_.VendorLonghandProperties.md#mswrapthrough)

#### Defined in

node_modules/csstype/index.d.ts:6666

___

### msWritingMode

• `Optional` **msWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[VendorLonghandProperties](components_Container._internal_.VendorLonghandProperties.md).[msWritingMode](components_Container._internal_.VendorLonghandProperties.md#mswritingmode)

#### Defined in

node_modules/csstype/index.d.ts:6674