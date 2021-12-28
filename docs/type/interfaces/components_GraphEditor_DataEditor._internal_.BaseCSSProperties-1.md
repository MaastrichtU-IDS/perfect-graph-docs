[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / BaseCSSProperties

# Interface: BaseCSSProperties

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).BaseCSSProperties

Allows the user to augment the properties available

## Hierarchy

- [`NormalCssProperties`](../modules/components_GraphEditor_DataEditor._internal_.md#normalcssproperties)

  ↳ **`BaseCSSProperties`**

  ↳↳ [`CSSProperties`](components_GraphEditor_DataEditor._internal_.CSSProperties-1.md)

## Table of contents

### Properties

- [@font-face](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#@font-face)
- [KhtmlBoxAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxalign)
- [KhtmlBoxDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxdirection)
- [KhtmlBoxFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxflex)
- [KhtmlBoxFlexGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxflexgroup)
- [KhtmlBoxLines](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxlines)
- [KhtmlBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxordinalgroup)
- [KhtmlBoxOrient](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxorient)
- [KhtmlBoxPack](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlboxpack)
- [KhtmlLineBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmllinebreak)
- [KhtmlOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmlopacity)
- [KhtmlUserSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#khtmluserselect)
- [MozAnimation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimation)
- [MozAnimationDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationdelay)
- [MozAnimationDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationdirection)
- [MozAnimationDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationduration)
- [MozAnimationFillMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationfillmode)
- [MozAnimationIterationCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationiterationcount)
- [MozAnimationName](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationname)
- [MozAnimationPlayState](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationplaystate)
- [MozAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozanimationtimingfunction)
- [MozAppearance](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozappearance)
- [MozBackfaceVisibility](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbackfacevisibility)
- [MozBackgroundClip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbackgroundclip)
- [MozBackgroundInlinePolicy](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbackgroundinlinepolicy)
- [MozBackgroundOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbackgroundorigin)
- [MozBackgroundSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbackgroundsize)
- [MozBinding](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbinding)
- [MozBorderBottomColors](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderbottomcolors)
- [MozBorderEndColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderendcolor)
- [MozBorderEndStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderendstyle)
- [MozBorderEndWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderendwidth)
- [MozBorderImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderimage)
- [MozBorderLeftColors](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderleftcolors)
- [MozBorderRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderradius)
- [MozBorderRadiusBottomleft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderradiusbottomleft)
- [MozBorderRadiusBottomright](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderradiusbottomright)
- [MozBorderRadiusTopleft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderradiustopleft)
- [MozBorderRadiusTopright](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderradiustopright)
- [MozBorderRightColors](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderrightcolors)
- [MozBorderStartColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderstartcolor)
- [MozBorderStartStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozborderstartstyle)
- [MozBorderTopColors](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozbordertopcolors)
- [MozBoxAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxalign)
- [MozBoxDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxdirection)
- [MozBoxFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxflex)
- [MozBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxordinalgroup)
- [MozBoxOrient](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxorient)
- [MozBoxPack](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxpack)
- [MozBoxShadow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxshadow)
- [MozBoxSizing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozboxsizing)
- [MozColumnCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumncount)
- [MozColumnFill](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnfill)
- [MozColumnGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumngap)
- [MozColumnRule](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnrule)
- [MozColumnRuleColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnrulecolor)
- [MozColumnRuleStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnrulestyle)
- [MozColumnRuleWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnrulewidth)
- [MozColumnWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumnwidth)
- [MozColumns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcolumns)
- [MozContextProperties](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozcontextproperties)
- [MozFloatEdge](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozfloatedge)
- [MozFontFeatureSettings](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozfontfeaturesettings)
- [MozFontLanguageOverride](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozfontlanguageoverride)
- [MozForceBrokenImageIcon](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozforcebrokenimageicon)
- [MozHyphens](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozhyphens)
- [MozImageRegion](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozimageregion)
- [MozMarginEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozmarginend)
- [MozMarginStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozmarginstart)
- [MozOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozopacity)
- [MozOrient](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozorient)
- [MozOsxFontSmoothing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozosxfontsmoothing)
- [MozOutline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutline)
- [MozOutlineColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlinecolor)
- [MozOutlineRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlineradius)
- [MozOutlineRadiusBottomleft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlineradiusbottomleft)
- [MozOutlineRadiusBottomright](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlineradiusbottomright)
- [MozOutlineRadiusTopleft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlineradiustopleft)
- [MozOutlineRadiusTopright](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlineradiustopright)
- [MozOutlineStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlinestyle)
- [MozOutlineWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozoutlinewidth)
- [MozPaddingEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozpaddingend)
- [MozPaddingStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozpaddingstart)
- [MozPerspective](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozperspective)
- [MozPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozperspectiveorigin)
- [MozStackSizing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozstacksizing)
- [MozTabSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztabsize)
- [MozTextAlignLast](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextalignlast)
- [MozTextBlink](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextblink)
- [MozTextDecorationColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextdecorationcolor)
- [MozTextDecorationLine](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextdecorationline)
- [MozTextDecorationStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextdecorationstyle)
- [MozTextSizeAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztextsizeadjust)
- [MozTransformOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransformorigin)
- [MozTransformStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransformstyle)
- [MozTransition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransition)
- [MozTransitionDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransitiondelay)
- [MozTransitionDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransitionduration)
- [MozTransitionProperty](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransitionproperty)
- [MozTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#moztransitiontimingfunction)
- [MozUserFocus](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozuserfocus)
- [MozUserInput](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozuserinput)
- [MozUserModify](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozusermodify)
- [MozUserSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozuserselect)
- [MozWindowDragging](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozwindowdragging)
- [MozWindowShadow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mozwindowshadow)
- [OAnimation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimation)
- [OAnimationDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationdelay)
- [OAnimationDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationdirection)
- [OAnimationDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationduration)
- [OAnimationFillMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationfillmode)
- [OAnimationIterationCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationiterationcount)
- [OAnimationName](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationname)
- [OAnimationPlayState](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationplaystate)
- [OAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oanimationtimingfunction)
- [OBackgroundSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#obackgroundsize)
- [OBorderImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oborderimage)
- [OObjectFit](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oobjectfit)
- [OObjectPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#oobjectposition)
- [OTabSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otabsize)
- [OTextOverflow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otextoverflow)
- [OTransform](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransform)
- [OTransformOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransformorigin)
- [OTransition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransition)
- [OTransitionDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransitiondelay)
- [OTransitionDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransitionduration)
- [OTransitionProperty](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransitionproperty)
- [OTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#otransitiontimingfunction)
- [WebkitAlignContent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitaligncontent)
- [WebkitAlignItems](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitalignitems)
- [WebkitAlignSelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitalignself)
- [WebkitAnimation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimation)
- [WebkitAnimationDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationdelay)
- [WebkitAnimationDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationdirection)
- [WebkitAnimationDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationduration)
- [WebkitAnimationFillMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationfillmode)
- [WebkitAnimationIterationCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationiterationcount)
- [WebkitAnimationName](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationname)
- [WebkitAnimationPlayState](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationplaystate)
- [WebkitAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitanimationtimingfunction)
- [WebkitAppearance](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitappearance)
- [WebkitBackdropFilter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbackdropfilter)
- [WebkitBackfaceVisibility](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbackfacevisibility)
- [WebkitBackgroundClip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbackgroundclip)
- [WebkitBackgroundOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbackgroundorigin)
- [WebkitBackgroundSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbackgroundsize)
- [WebkitBorderBefore](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbefore)
- [WebkitBorderBeforeColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbeforecolor)
- [WebkitBorderBeforeStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbeforestyle)
- [WebkitBorderBeforeWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbeforewidth)
- [WebkitBorderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbottomleftradius)
- [WebkitBorderBottomRightRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderbottomrightradius)
- [WebkitBorderImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderimage)
- [WebkitBorderImageSlice](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderimageslice)
- [WebkitBorderRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitborderradius)
- [WebkitBorderTopLeftRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbordertopleftradius)
- [WebkitBorderTopRightRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitbordertoprightradius)
- [WebkitBoxAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxalign)
- [WebkitBoxDecorationBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxdecorationbreak)
- [WebkitBoxDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxdirection)
- [WebkitBoxFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxflex)
- [WebkitBoxFlexGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxflexgroup)
- [WebkitBoxLines](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxlines)
- [WebkitBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxordinalgroup)
- [WebkitBoxOrient](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxorient)
- [WebkitBoxPack](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxpack)
- [WebkitBoxReflect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxreflect)
- [WebkitBoxShadow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxshadow)
- [WebkitBoxSizing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitboxsizing)
- [WebkitClipPath](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitclippath)
- [WebkitColumnCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumncount)
- [WebkitColumnFill](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnfill)
- [WebkitColumnGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumngap)
- [WebkitColumnRule](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnrule)
- [WebkitColumnRuleColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnrulecolor)
- [WebkitColumnRuleStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnrulestyle)
- [WebkitColumnRuleWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnrulewidth)
- [WebkitColumnSpan](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnspan)
- [WebkitColumnWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumnwidth)
- [WebkitColumns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitcolumns)
- [WebkitFilter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitfilter)
- [WebkitFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflex)
- [WebkitFlexBasis](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexbasis)
- [WebkitFlexDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexdirection)
- [WebkitFlexFlow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexflow)
- [WebkitFlexGrow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexgrow)
- [WebkitFlexShrink](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexshrink)
- [WebkitFlexWrap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitflexwrap)
- [WebkitFontFeatureSettings](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitfontfeaturesettings)
- [WebkitFontKerning](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitfontkerning)
- [WebkitFontSmoothing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitfontsmoothing)
- [WebkitFontVariantLigatures](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitfontvariantligatures)
- [WebkitHyphens](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkithyphens)
- [WebkitJustifyContent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitjustifycontent)
- [WebkitLineBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitlinebreak)
- [WebkitLineClamp](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitlineclamp)
- [WebkitMarginEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmarginend)
- [WebkitMarginStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmarginstart)
- [WebkitMask](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmask)
- [WebkitMaskAttachment](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskattachment)
- [WebkitMaskBoxImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximage)
- [WebkitMaskBoxImageOutset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximageoutset)
- [WebkitMaskBoxImageRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximagerepeat)
- [WebkitMaskBoxImageSlice](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximageslice)
- [WebkitMaskBoxImageSource](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximagesource)
- [WebkitMaskBoxImageWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskboximagewidth)
- [WebkitMaskClip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskclip)
- [WebkitMaskComposite](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskcomposite)
- [WebkitMaskImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskimage)
- [WebkitMaskOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskorigin)
- [WebkitMaskPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskposition)
- [WebkitMaskPositionX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskpositionx)
- [WebkitMaskPositionY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskpositiony)
- [WebkitMaskRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskrepeat)
- [WebkitMaskRepeatX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskrepeatx)
- [WebkitMaskRepeatY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaskrepeaty)
- [WebkitMaskSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmasksize)
- [WebkitMaxInlineSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitmaxinlinesize)
- [WebkitOrder](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitorder)
- [WebkitOverflowScrolling](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitoverflowscrolling)
- [WebkitPaddingEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitpaddingend)
- [WebkitPaddingStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitpaddingstart)
- [WebkitPerspective](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitperspective)
- [WebkitPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitperspectiveorigin)
- [WebkitPrintColorAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitprintcoloradjust)
- [WebkitRubyPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitrubyposition)
- [WebkitScrollSnapPointsX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitscrollsnappointsx)
- [WebkitScrollSnapPointsY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitscrollsnappointsy)
- [WebkitScrollSnapType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitscrollsnaptype)
- [WebkitShapeMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitshapemargin)
- [WebkitTapHighlightColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittaphighlightcolor)
- [WebkitTextCombine](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextcombine)
- [WebkitTextDecorationColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextdecorationcolor)
- [WebkitTextDecorationLine](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextdecorationline)
- [WebkitTextDecorationSkip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextdecorationskip)
- [WebkitTextDecorationStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextdecorationstyle)
- [WebkitTextEmphasis](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextemphasis)
- [WebkitTextEmphasisColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextemphasiscolor)
- [WebkitTextEmphasisPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextemphasisposition)
- [WebkitTextEmphasisStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextemphasisstyle)
- [WebkitTextFillColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextfillcolor)
- [WebkitTextOrientation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextorientation)
- [WebkitTextSizeAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextsizeadjust)
- [WebkitTextStroke](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextstroke)
- [WebkitTextStrokeColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextstrokecolor)
- [WebkitTextStrokeWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextstrokewidth)
- [WebkitTextUnderlinePosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittextunderlineposition)
- [WebkitTouchCallout](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittouchcallout)
- [WebkitTransform](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransform)
- [WebkitTransformOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransformorigin)
- [WebkitTransformStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransformstyle)
- [WebkitTransition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransition)
- [WebkitTransitionDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransitiondelay)
- [WebkitTransitionDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransitionduration)
- [WebkitTransitionProperty](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransitionproperty)
- [WebkitTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkittransitiontimingfunction)
- [WebkitUserModify](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitusermodify)
- [WebkitUserSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkituserselect)
- [WebkitWritingMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#webkitwritingmode)
- [accentColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#accentcolor)
- [alignContent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#aligncontent)
- [alignItems](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#alignitems)
- [alignSelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#alignself)
- [alignTracks](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#aligntracks)
- [alignmentBaseline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#alignmentbaseline)
- [all](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#all)
- [animation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animation)
- [animationDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationdelay)
- [animationDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationdirection)
- [animationDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationduration)
- [animationFillMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationfillmode)
- [animationIterationCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationiterationcount)
- [animationName](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationname)
- [animationPlayState](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationplaystate)
- [animationTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#animationtimingfunction)
- [appearance](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#appearance)
- [aspectRatio](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#aspectratio)
- [azimuth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#azimuth)
- [backdropFilter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backdropfilter)
- [backfaceVisibility](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backfacevisibility)
- [background](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#background)
- [backgroundAttachment](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundattachment)
- [backgroundBlendMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundblendmode)
- [backgroundClip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundclip)
- [backgroundColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundcolor)
- [backgroundImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundimage)
- [backgroundOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundorigin)
- [backgroundPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundposition)
- [backgroundPositionX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundpositionx)
- [backgroundPositionY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundpositiony)
- [backgroundRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundrepeat)
- [backgroundSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#backgroundsize)
- [baselineShift](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#baselineshift)
- [blockOverflow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#blockoverflow)
- [blockSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#blocksize)
- [border](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#border)
- [borderBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblock)
- [borderBlockColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockcolor)
- [borderBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockend)
- [borderBlockEndColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockendcolor)
- [borderBlockEndStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockendstyle)
- [borderBlockEndWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockendwidth)
- [borderBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockstart)
- [borderBlockStartColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockstartcolor)
- [borderBlockStartStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockstartstyle)
- [borderBlockStartWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockstartwidth)
- [borderBlockStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockstyle)
- [borderBlockWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderblockwidth)
- [borderBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottom)
- [borderBottomColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottomcolor)
- [borderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottomleftradius)
- [borderBottomRightRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottomrightradius)
- [borderBottomStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottomstyle)
- [borderBottomWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderbottomwidth)
- [borderCollapse](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordercollapse)
- [borderColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordercolor)
- [borderEndEndRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderendendradius)
- [borderEndStartRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderendstartradius)
- [borderImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimage)
- [borderImageOutset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimageoutset)
- [borderImageRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimagerepeat)
- [borderImageSlice](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimageslice)
- [borderImageSource](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimagesource)
- [borderImageWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderimagewidth)
- [borderInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinline)
- [borderInlineColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinecolor)
- [borderInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlineend)
- [borderInlineEndColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlineendcolor)
- [borderInlineEndStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlineendstyle)
- [borderInlineEndWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlineendwidth)
- [borderInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinestart)
- [borderInlineStartColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinestartcolor)
- [borderInlineStartStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinestartstyle)
- [borderInlineStartWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinestartwidth)
- [borderInlineStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinestyle)
- [borderInlineWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderinlinewidth)
- [borderLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderleft)
- [borderLeftColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderleftcolor)
- [borderLeftStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderleftstyle)
- [borderLeftWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderleftwidth)
- [borderRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderradius)
- [borderRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderright)
- [borderRightColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderrightcolor)
- [borderRightStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderrightstyle)
- [borderRightWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderrightwidth)
- [borderSpacing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderspacing)
- [borderStartEndRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderstartendradius)
- [borderStartStartRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderstartstartradius)
- [borderStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderstyle)
- [borderTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertop)
- [borderTopColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertopcolor)
- [borderTopLeftRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertopleftradius)
- [borderTopRightRadius](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertoprightradius)
- [borderTopStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertopstyle)
- [borderTopWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bordertopwidth)
- [borderWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#borderwidth)
- [bottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#bottom)
- [boxAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxalign)
- [boxDecorationBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxdecorationbreak)
- [boxDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxdirection)
- [boxFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxflex)
- [boxFlexGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxflexgroup)
- [boxLines](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxlines)
- [boxOrdinalGroup](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxordinalgroup)
- [boxOrient](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxorient)
- [boxPack](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxpack)
- [boxShadow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxshadow)
- [boxSizing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#boxsizing)
- [breakAfter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#breakafter)
- [breakBefore](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#breakbefore)
- [breakInside](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#breakinside)
- [captionSide](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#captionside)
- [caretColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#caretcolor)
- [clear](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#clear)
- [clip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#clip)
- [clipPath](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#clippath)
- [clipRule](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#cliprule)
- [color](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#color)
- [colorAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#coloradjust)
- [colorInterpolation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#colorinterpolation)
- [colorRendering](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#colorrendering)
- [colorScheme](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#colorscheme)
- [columnCount](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columncount)
- [columnFill](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnfill)
- [columnGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columngap)
- [columnRule](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnrule)
- [columnRuleColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnrulecolor)
- [columnRuleStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnrulestyle)
- [columnRuleWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnrulewidth)
- [columnSpan](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnspan)
- [columnWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columnwidth)
- [columns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#columns)
- [contain](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#contain)
- [content](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#content)
- [contentVisibility](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#contentvisibility)
- [counterIncrement](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#counterincrement)
- [counterReset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#counterreset)
- [counterSet](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#counterset)
- [cursor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#cursor)
- [direction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#direction)
- [display](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#display)
- [dominantBaseline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#dominantbaseline)
- [emptyCells](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#emptycells)
- [fill](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fill)
- [fillOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fillopacity)
- [fillRule](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fillrule)
- [filter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#filter)
- [flex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flex)
- [flexBasis](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexbasis)
- [flexDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexdirection)
- [flexFlow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexflow)
- [flexGrow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexgrow)
- [flexShrink](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexshrink)
- [flexWrap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#flexwrap)
- [float](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#float)
- [floodColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#floodcolor)
- [floodOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#floodopacity)
- [font](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#font)
- [fontFamily](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontfamily)
- [fontFeatureSettings](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontfeaturesettings)
- [fontKerning](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontkerning)
- [fontLanguageOverride](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontlanguageoverride)
- [fontOpticalSizing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontopticalsizing)
- [fontSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontsize)
- [fontSizeAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontsizeadjust)
- [fontSmooth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontsmooth)
- [fontStretch](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontstretch)
- [fontStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontstyle)
- [fontSynthesis](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontsynthesis)
- [fontVariant](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariant)
- [fontVariantAlternates](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariantalternates)
- [fontVariantCaps](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariantcaps)
- [fontVariantEastAsian](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvarianteastasian)
- [fontVariantLigatures](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariantligatures)
- [fontVariantNumeric](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariantnumeric)
- [fontVariantPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariantposition)
- [fontVariationSettings](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontvariationsettings)
- [fontWeight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#fontweight)
- [forcedColorAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#forcedcoloradjust)
- [gap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gap)
- [glyphOrientationVertical](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#glyphorientationvertical)
- [grid](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#grid)
- [gridArea](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridarea)
- [gridAutoColumns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridautocolumns)
- [gridAutoFlow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridautoflow)
- [gridAutoRows](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridautorows)
- [gridColumn](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridcolumn)
- [gridColumnEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridcolumnend)
- [gridColumnGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridcolumngap)
- [gridColumnStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridcolumnstart)
- [gridGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridgap)
- [gridRow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridrow)
- [gridRowEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridrowend)
- [gridRowGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridrowgap)
- [gridRowStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridrowstart)
- [gridTemplate](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridtemplate)
- [gridTemplateAreas](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridtemplateareas)
- [gridTemplateColumns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridtemplatecolumns)
- [gridTemplateRows](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#gridtemplaterows)
- [hangingPunctuation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#hangingpunctuation)
- [height](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#height)
- [hyphens](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#hyphens)
- [imageOrientation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#imageorientation)
- [imageRendering](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#imagerendering)
- [imageResolution](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#imageresolution)
- [imeMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#imemode)
- [initialLetter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#initialletter)
- [inlineSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#inlinesize)
- [inset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#inset)
- [insetBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetblock)
- [insetBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetblockend)
- [insetBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetblockstart)
- [insetInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetinline)
- [insetInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetinlineend)
- [insetInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#insetinlinestart)
- [isolation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#isolation)
- [justifyContent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#justifycontent)
- [justifyItems](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#justifyitems)
- [justifySelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#justifyself)
- [justifyTracks](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#justifytracks)
- [left](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#left)
- [letterSpacing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#letterspacing)
- [lightingColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#lightingcolor)
- [lineBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#linebreak)
- [lineClamp](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#lineclamp)
- [lineHeight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#lineheight)
- [lineHeightStep](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#lineheightstep)
- [listStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#liststyle)
- [listStyleImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#liststyleimage)
- [listStylePosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#liststyleposition)
- [listStyleType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#liststyletype)
- [margin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#margin)
- [marginBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginblock)
- [marginBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginblockend)
- [marginBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginblockstart)
- [marginBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginbottom)
- [marginInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#margininline)
- [marginInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#margininlineend)
- [marginInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#margininlinestart)
- [marginLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginleft)
- [marginRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marginright)
- [marginTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#margintop)
- [marker](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#marker)
- [markerEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#markerend)
- [markerMid](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#markermid)
- [markerStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#markerstart)
- [mask](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mask)
- [maskBorder](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskborder)
- [maskBorderMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskbordermode)
- [maskBorderOutset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskborderoutset)
- [maskBorderRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskborderrepeat)
- [maskBorderSlice](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskborderslice)
- [maskBorderSource](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskbordersource)
- [maskBorderWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskborderwidth)
- [maskClip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskclip)
- [maskComposite](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskcomposite)
- [maskImage](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskimage)
- [maskMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskmode)
- [maskOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskorigin)
- [maskPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskposition)
- [maskRepeat](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maskrepeat)
- [maskSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#masksize)
- [maskType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#masktype)
- [mathStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mathstyle)
- [maxBlockSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maxblocksize)
- [maxHeight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maxheight)
- [maxInlineSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maxinlinesize)
- [maxLines](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maxlines)
- [maxWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#maxwidth)
- [minBlockSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#minblocksize)
- [minHeight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#minheight)
- [minInlineSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mininlinesize)
- [minWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#minwidth)
- [mixBlendMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mixblendmode)
- [motion](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#motion)
- [motionDistance](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#motiondistance)
- [motionPath](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#motionpath)
- [motionRotation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#motionrotation)
- [msAccelerator](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msaccelerator)
- [msAlignSelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msalignself)
- [msBlockProgression](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msblockprogression)
- [msContentZoomChaining](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomchaining)
- [msContentZoomLimit](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomlimit)
- [msContentZoomLimitMax](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomlimitmax)
- [msContentZoomLimitMin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomlimitmin)
- [msContentZoomSnap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomsnap)
- [msContentZoomSnapPoints](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomsnappoints)
- [msContentZoomSnapType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzoomsnaptype)
- [msContentZooming](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mscontentzooming)
- [msFilter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msfilter)
- [msFlex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msflex)
- [msFlexDirection](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msflexdirection)
- [msFlexPositive](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msflexpositive)
- [msFlowFrom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msflowfrom)
- [msFlowInto](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msflowinto)
- [msGridColumns](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msgridcolumns)
- [msGridRows](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msgridrows)
- [msHighContrastAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mshighcontrastadjust)
- [msHyphenateLimitChars](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mshyphenatelimitchars)
- [msHyphenateLimitLines](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mshyphenatelimitlines)
- [msHyphenateLimitZone](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mshyphenatelimitzone)
- [msHyphens](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mshyphens)
- [msImeAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msimealign)
- [msImeMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msimemode)
- [msJustifySelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msjustifyself)
- [msLineBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mslinebreak)
- [msOrder](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msorder)
- [msOverflowStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msoverflowstyle)
- [msOverflowX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msoverflowx)
- [msOverflowY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msoverflowy)
- [msScrollChaining](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollchaining)
- [msScrollLimit](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolllimit)
- [msScrollLimitXMax](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolllimitxmax)
- [msScrollLimitXMin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolllimitxmin)
- [msScrollLimitYMax](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolllimitymax)
- [msScrollLimitYMin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolllimitymin)
- [msScrollRails](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollrails)
- [msScrollSnapPointsX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollsnappointsx)
- [msScrollSnapPointsY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollsnappointsy)
- [msScrollSnapType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollsnaptype)
- [msScrollSnapX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollsnapx)
- [msScrollSnapY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollsnapy)
- [msScrollTranslation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrolltranslation)
- [msScrollbar3dlightColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbar3dlightcolor)
- [msScrollbarArrowColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbararrowcolor)
- [msScrollbarBaseColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbarbasecolor)
- [msScrollbarDarkshadowColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbardarkshadowcolor)
- [msScrollbarFaceColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbarfacecolor)
- [msScrollbarHighlightColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbarhighlightcolor)
- [msScrollbarShadowColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbarshadowcolor)
- [msScrollbarTrackColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msscrollbartrackcolor)
- [msTextAutospace](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstextautospace)
- [msTextCombineHorizontal](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstextcombinehorizontal)
- [msTextOverflow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstextoverflow)
- [msTouchAction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstouchaction)
- [msTouchSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstouchselect)
- [msTransform](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransform)
- [msTransformOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransformorigin)
- [msTransition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransition)
- [msTransitionDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransitiondelay)
- [msTransitionDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransitionduration)
- [msTransitionProperty](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransitionproperty)
- [msTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mstransitiontimingfunction)
- [msUserSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#msuserselect)
- [msWordBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mswordbreak)
- [msWrapFlow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mswrapflow)
- [msWrapMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mswrapmargin)
- [msWrapThrough](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mswrapthrough)
- [msWritingMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#mswritingmode)
- [objectFit](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#objectfit)
- [objectPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#objectposition)
- [offset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offset)
- [offsetAnchor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetanchor)
- [offsetBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetblock)
- [offsetBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetblockend)
- [offsetBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetblockstart)
- [offsetDistance](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetdistance)
- [offsetInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetinline)
- [offsetInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetinlineend)
- [offsetInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetinlinestart)
- [offsetPath](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetpath)
- [offsetRotate](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetrotate)
- [offsetRotation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#offsetrotation)
- [opacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#opacity)
- [order](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#order)
- [orphans](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#orphans)
- [outline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#outline)
- [outlineColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#outlinecolor)
- [outlineOffset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#outlineoffset)
- [outlineStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#outlinestyle)
- [outlineWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#outlinewidth)
- [overflow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflow)
- [overflowAnchor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowanchor)
- [overflowBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowblock)
- [overflowClipBox](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowclipbox)
- [overflowClipMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowclipmargin)
- [overflowInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowinline)
- [overflowWrap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowwrap)
- [overflowX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowx)
- [overflowY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overflowy)
- [overscrollBehavior](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overscrollbehavior)
- [overscrollBehaviorBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overscrollbehaviorblock)
- [overscrollBehaviorInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overscrollbehaviorinline)
- [overscrollBehaviorX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overscrollbehaviorx)
- [overscrollBehaviorY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#overscrollbehaviory)
- [padding](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#padding)
- [paddingBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingblock)
- [paddingBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingblockend)
- [paddingBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingblockstart)
- [paddingBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingbottom)
- [paddingInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddinginline)
- [paddingInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddinginlineend)
- [paddingInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddinginlinestart)
- [paddingLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingleft)
- [paddingRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingright)
- [paddingTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paddingtop)
- [pageBreakAfter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#pagebreakafter)
- [pageBreakBefore](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#pagebreakbefore)
- [pageBreakInside](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#pagebreakinside)
- [paintOrder](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#paintorder)
- [perspective](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#perspective)
- [perspectiveOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#perspectiveorigin)
- [placeContent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#placecontent)
- [placeItems](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#placeitems)
- [placeSelf](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#placeself)
- [pointerEvents](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#pointerevents)
- [position](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#position)
- [quotes](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#quotes)
- [resize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#resize)
- [right](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#right)
- [rotate](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#rotate)
- [rowGap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#rowgap)
- [rubyAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#rubyalign)
- [rubyMerge](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#rubymerge)
- [rubyPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#rubyposition)
- [scale](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scale)
- [scrollBehavior](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollbehavior)
- [scrollMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmargin)
- [scrollMarginBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginblock)
- [scrollMarginBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginblockend)
- [scrollMarginBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginblockstart)
- [scrollMarginBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginbottom)
- [scrollMarginInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmargininline)
- [scrollMarginInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmargininlineend)
- [scrollMarginInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmargininlinestart)
- [scrollMarginLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginleft)
- [scrollMarginRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmarginright)
- [scrollMarginTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollmargintop)
- [scrollPadding](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpadding)
- [scrollPaddingBlock](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingblock)
- [scrollPaddingBlockEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingblockend)
- [scrollPaddingBlockStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingblockstart)
- [scrollPaddingBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingbottom)
- [scrollPaddingInline](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddinginline)
- [scrollPaddingInlineEnd](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddinginlineend)
- [scrollPaddingInlineStart](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddinginlinestart)
- [scrollPaddingLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingleft)
- [scrollPaddingRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingright)
- [scrollPaddingTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollpaddingtop)
- [scrollSnapAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapalign)
- [scrollSnapCoordinate](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapcoordinate)
- [scrollSnapDestination](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapdestination)
- [scrollSnapMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapmargin)
- [scrollSnapMarginBottom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapmarginbottom)
- [scrollSnapMarginLeft](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapmarginleft)
- [scrollSnapMarginRight](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapmarginright)
- [scrollSnapMarginTop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapmargintop)
- [scrollSnapPointsX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnappointsx)
- [scrollSnapPointsY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnappointsy)
- [scrollSnapStop](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnapstop)
- [scrollSnapType](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnaptype)
- [scrollSnapTypeX](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnaptypex)
- [scrollSnapTypeY](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollsnaptypey)
- [scrollbarColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollbarcolor)
- [scrollbarGutter](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollbargutter)
- [scrollbarTrackColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollbartrackcolor)
- [scrollbarWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#scrollbarwidth)
- [shapeImageThreshold](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#shapeimagethreshold)
- [shapeMargin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#shapemargin)
- [shapeOutside](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#shapeoutside)
- [shapeRendering](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#shaperendering)
- [stopColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#stopcolor)
- [stopOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#stopopacity)
- [stroke](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#stroke)
- [strokeDasharray](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokedasharray)
- [strokeDashoffset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokedashoffset)
- [strokeLinecap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokelinecap)
- [strokeLinejoin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokelinejoin)
- [strokeMiterlimit](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokemiterlimit)
- [strokeOpacity](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokeopacity)
- [strokeWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#strokewidth)
- [tabSize](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#tabsize)
- [tableLayout](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#tablelayout)
- [textAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textalign)
- [textAlignLast](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textalignlast)
- [textAnchor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textanchor)
- [textCombineUpright](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textcombineupright)
- [textDecoration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecoration)
- [textDecorationColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationcolor)
- [textDecorationLine](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationline)
- [textDecorationSkip](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationskip)
- [textDecorationSkipInk](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationskipink)
- [textDecorationStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationstyle)
- [textDecorationThickness](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationthickness)
- [textDecorationWidth](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textdecorationwidth)
- [textEmphasis](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textemphasis)
- [textEmphasisColor](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textemphasiscolor)
- [textEmphasisPosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textemphasisposition)
- [textEmphasisStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textemphasisstyle)
- [textIndent](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textindent)
- [textJustify](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textjustify)
- [textOrientation](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textorientation)
- [textOverflow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textoverflow)
- [textRendering](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textrendering)
- [textShadow](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textshadow)
- [textSizeAdjust](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textsizeadjust)
- [textTransform](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#texttransform)
- [textUnderlineOffset](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textunderlineoffset)
- [textUnderlinePosition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#textunderlineposition)
- [top](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#top)
- [touchAction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#touchaction)
- [transform](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transform)
- [transformBox](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transformbox)
- [transformOrigin](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transformorigin)
- [transformStyle](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transformstyle)
- [transition](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transition)
- [transitionDelay](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transitiondelay)
- [transitionDuration](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transitionduration)
- [transitionProperty](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transitionproperty)
- [transitionTimingFunction](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#transitiontimingfunction)
- [translate](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#translate)
- [unicodeBidi](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#unicodebidi)
- [userSelect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#userselect)
- [vectorEffect](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#vectoreffect)
- [verticalAlign](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#verticalalign)
- [visibility](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#visibility)
- [whiteSpace](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#whitespace)
- [widows](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#widows)
- [width](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#width)
- [willChange](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#willchange)
- [wordBreak](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#wordbreak)
- [wordSpacing](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#wordspacing)
- [wordWrap](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#wordwrap)
- [writingMode](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#writingmode)
- [zIndex](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#zindex)
- [zoom](components_GraphEditor_DataEditor._internal_.BaseCSSProperties-1.md#zoom)

## Properties

### @font-face

• `Optional` **@font-face**: [`Fontface`](../modules/components_GraphEditor_DataEditor._internal_.md#fontface) \| [`Fontface`](../modules/components_GraphEditor_DataEditor._internal_.md#fontface)[]

#### Defined in

node_modules/@mui/material/styles/createTypography.d.ts:38

___

### KhtmlBoxAlign

• `Optional` **KhtmlBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign)

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:7976

___

### KhtmlBoxDirection

• `Optional` **KhtmlBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection)

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:7986

___

### KhtmlBoxFlex

• `Optional` **KhtmlBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex)

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:7996

___

### KhtmlBoxFlexGroup

• `Optional` **KhtmlBoxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup)

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8006

___

### KhtmlBoxLines

• `Optional` **KhtmlBoxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines)

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8016

___

### KhtmlBoxOrdinalGroup

• `Optional` **KhtmlBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup)

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8026

___

### KhtmlBoxOrient

• `Optional` **KhtmlBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient)

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8036

___

### KhtmlBoxPack

• `Optional` **KhtmlBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack)

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8046

___

### KhtmlLineBreak

• `Optional` **KhtmlLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlLineBreak

#### Defined in

node_modules/csstype/index.d.ts:8056

___

### KhtmlOpacity

• `Optional` **KhtmlOpacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity)

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlOpacity

#### Defined in

node_modules/csstype/index.d.ts:8066

___

### KhtmlUserSelect

• `Optional` **KhtmlUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.KhtmlUserSelect

#### Defined in

node_modules/csstype/index.d.ts:8076

___

### MozAnimation

• `Optional` **MozAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`string` & {}\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

NormalCssProperties.MozAnimation

#### Defined in

node_modules/csstype/index.d.ts:7539

___

### MozAnimationDelay

• `Optional` **MozAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.MozAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:5746

___

### MozAnimationDirection

• `Optional` **MozAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.MozAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:5754

___

### MozAnimationDuration

• `Optional` **MozAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.MozAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:5762

___

### MozAnimationFillMode

• `Optional` **MozAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:5770

___

### MozAnimationIterationCount

• `Optional` **MozAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

NormalCssProperties.MozAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:5778

___

### MozAnimationName

• `Optional` **MozAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozAnimationName

#### Defined in

node_modules/csstype/index.d.ts:5786

___

### MozAnimationPlayState

• `Optional` **MozAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

NormalCssProperties.MozAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:5794

___

### MozAnimationTimingFunction

• `Optional` **MozAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

NormalCssProperties.MozAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:5802

___

### MozAppearance

• `Optional` **MozAppearance**: [`MozAppearance`](../modules/components_Container._internal_.md#mozappearance)

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

NormalCssProperties.MozAppearance

#### Defined in

node_modules/csstype/index.d.ts:5810

___

### MozBackfaceVisibility

• `Optional` **MozBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

NormalCssProperties.MozBackfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:5818

___

### MozBackgroundClip

• `Optional` **MozBackgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip)

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBackgroundClip

#### Defined in

node_modules/csstype/index.d.ts:8086

___

### MozBackgroundInlinePolicy

• `Optional` **MozBackgroundInlinePolicy**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak)

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBackgroundInlinePolicy

#### Defined in

node_modules/csstype/index.d.ts:8096

___

### MozBackgroundOrigin

• `Optional` **MozBackgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin)

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBackgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:8106

___

### MozBackgroundSize

• `Optional` **MozBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`string` \| `number`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8116

___

### MozBinding

• `Optional` **MozBinding**: [`MozBinding`](../modules/components_Container._internal_.md#mozbinding)

The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.

**Syntax**: `<url> | none`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBinding

#### Defined in

node_modules/csstype/index.d.ts:8126

___

### MozBorderBottomColors

• `Optional` **MozBorderBottomColors**: [`MozBorderBottomColors`](../modules/components_Container._internal_.md#mozborderbottomcolors)

In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderBottomColors

#### Defined in

node_modules/csstype/index.d.ts:5826

___

### MozBorderEndColor

• `Optional` **MozBorderEndColor**: [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor)

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.MozBorderEndColor

#### Defined in

node_modules/csstype/index.d.ts:5834

___

### MozBorderEndStyle

• `Optional` **MozBorderEndStyle**: [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle)

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderEndStyle

#### Defined in

node_modules/csstype/index.d.ts:5842

___

### MozBorderEndWidth

• `Optional` **MozBorderEndWidth**: [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`string` \| `number`\>

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

#### Inherited from

NormalCssProperties.MozBorderEndWidth

#### Defined in

node_modules/csstype/index.d.ts:5850

___

### MozBorderImage

• `Optional` **MozBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

NormalCssProperties.MozBorderImage

#### Defined in

node_modules/csstype/index.d.ts:7545

___

### MozBorderLeftColors

• `Optional` **MozBorderLeftColors**: [`MozBorderLeftColors`](../modules/components_Container._internal_.md#mozborderleftcolors)

In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderLeftColors

#### Defined in

node_modules/csstype/index.d.ts:5858

___

### MozBorderRadius

• `Optional` **MozBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`string` \| `number`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBorderRadius

#### Defined in

node_modules/csstype/index.d.ts:8134

___

### MozBorderRadiusBottomleft

• `Optional` **MozBorderRadiusBottomleft**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`string` \| `number`\>

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBorderRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8144

___

### MozBorderRadiusBottomright

• `Optional` **MozBorderRadiusBottomright**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`string` \| `number`\>

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBorderRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8154

___

### MozBorderRadiusTopleft

• `Optional` **MozBorderRadiusTopleft**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`string` \| `number`\>

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBorderRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8164

___

### MozBorderRadiusTopright

• `Optional` **MozBorderRadiusTopright**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`string` \| `number`\>

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBorderRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8174

___

### MozBorderRightColors

• `Optional` **MozBorderRightColors**: [`MozBorderRightColors`](../modules/components_Container._internal_.md#mozborderrightcolors)

In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderRightColors

#### Defined in

node_modules/csstype/index.d.ts:5866

___

### MozBorderStartColor

• `Optional` **MozBorderStartColor**: [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor)

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.MozBorderStartColor

#### Defined in

node_modules/csstype/index.d.ts:5874

___

### MozBorderStartStyle

• `Optional` **MozBorderStartStyle**: [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle)

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderStartStyle

#### Defined in

node_modules/csstype/index.d.ts:5882

___

### MozBorderTopColors

• `Optional` **MozBorderTopColors**: [`MozBorderTopColors`](../modules/components_Container._internal_.md#mozbordertopcolors)

In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozBorderTopColors

#### Defined in

node_modules/csstype/index.d.ts:5890

___

### MozBoxAlign

• `Optional` **MozBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign)

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8184

___

### MozBoxDirection

• `Optional` **MozBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection)

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8194

___

### MozBoxFlex

• `Optional` **MozBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex)

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8204

___

### MozBoxOrdinalGroup

• `Optional` **MozBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup)

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8214

___

### MozBoxOrient

• `Optional` **MozBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient)

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8224

___

### MozBoxPack

• `Optional` **MozBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack)

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8234

___

### MozBoxShadow

• `Optional` **MozBoxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow)

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozBoxShadow

#### Defined in

node_modules/csstype/index.d.ts:8244

___

### MozBoxSizing

• `Optional` **MozBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

NormalCssProperties.MozBoxSizing

#### Defined in

node_modules/csstype/index.d.ts:5898

___

### MozColumnCount

• `Optional` **MozColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.MozColumnCount

#### Defined in

node_modules/csstype/index.d.ts:5906

___

### MozColumnFill

• `Optional` **MozColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

NormalCssProperties.MozColumnFill

#### Defined in

node_modules/csstype/index.d.ts:5914

___

### MozColumnGap

• `Optional` **MozColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`string` \| `number`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.MozColumnGap

#### Defined in

node_modules/csstype/index.d.ts:5922

___

### MozColumnRule

• `Optional` **MozColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`string` \| `number`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

NormalCssProperties.MozColumnRule

#### Defined in

node_modules/csstype/index.d.ts:7551

___

### MozColumnRuleColor

• `Optional` **MozColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.MozColumnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:5930

___

### MozColumnRuleStyle

• `Optional` **MozColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozColumnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:5938

___

### MozColumnRuleWidth

• `Optional` **MozColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`string` \| `number`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

NormalCssProperties.MozColumnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:5946

___

### MozColumnWidth

• `Optional` **MozColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`string` \| `number`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.MozColumnWidth

#### Defined in

node_modules/csstype/index.d.ts:5954

___

### MozColumns

• `Optional` **MozColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`string` \| `number`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

NormalCssProperties.MozColumns

#### Defined in

node_modules/csstype/index.d.ts:7557

___

### MozContextProperties

• `Optional` **MozContextProperties**: [`MozContextProperties`](../modules/components_Container._internal_.md#mozcontextproperties)

The `**-moz-context-properties**` property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.

**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozContextProperties

#### Defined in

node_modules/csstype/index.d.ts:5962

___

### MozFloatEdge

• `Optional` **MozFloatEdge**: [`MozFloatEdge`](../modules/components_Container._internal_.md#mozfloatedge)

The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.

**Syntax**: `border-box | content-box | margin-box | padding-box`

**Initial value**: `content-box`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozFloatEdge

#### Defined in

node_modules/csstype/index.d.ts:8254

___

### MozFontFeatureSettings

• `Optional` **MozFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.MozFontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:5970

___

### MozFontLanguageOverride

• `Optional` **MozFontLanguageOverride**: [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride)

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.MozFontLanguageOverride

#### Defined in

node_modules/csstype/index.d.ts:5978

___

### MozForceBrokenImageIcon

• `Optional` **MozForceBrokenImageIcon**: [`MozForceBrokenImageIcon`](../modules/components_Container._internal_.md#mozforcebrokenimageicon)

The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.

**Syntax**: `0 | 1`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozForceBrokenImageIcon

#### Defined in

node_modules/csstype/index.d.ts:8264

___

### MozHyphens

• `Optional` **MozHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

NormalCssProperties.MozHyphens

#### Defined in

node_modules/csstype/index.d.ts:5986

___

### MozImageRegion

• `Optional` **MozImageRegion**: [`MozImageRegion`](../modules/components_Container._internal_.md#mozimageregion)

For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.MozImageRegion

#### Defined in

node_modules/csstype/index.d.ts:5994

___

### MozMarginEnd

• `Optional` **MozMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`string` \| `number`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.MozMarginEnd

#### Defined in

node_modules/csstype/index.d.ts:6002

___

### MozMarginStart

• `Optional` **MozMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`string` \| `number`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.MozMarginStart

#### Defined in

node_modules/csstype/index.d.ts:6010

___

### MozOpacity

• `Optional` **MozOpacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity)

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOpacity

#### Defined in

node_modules/csstype/index.d.ts:8274

___

### MozOrient

• `Optional` **MozOrient**: [`MozOrient`](../modules/components_Container._internal_.md#mozorient)

The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.

**Syntax**: `inline | block | horizontal | vertical`

**Initial value**: `inline`

#### Inherited from

NormalCssProperties.MozOrient

#### Defined in

node_modules/csstype/index.d.ts:6018

___

### MozOsxFontSmoothing

• `Optional` **MozOsxFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`string` \| `number`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.MozOsxFontSmoothing

#### Defined in

node_modules/csstype/index.d.ts:6026

___

### MozOutline

• `Optional` **MozOutline**: [`Outline`](../modules/components_Container._internal_.md#outline)<`string` \| `number`\>

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutline

#### Defined in

node_modules/csstype/index.d.ts:8282

___

### MozOutlineColor

• `Optional` **MozOutlineColor**: [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor)

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineColor

#### Defined in

node_modules/csstype/index.d.ts:8292

___

### MozOutlineRadius

• `Optional` **MozOutlineRadius**: [`MozOutlineRadius`](../modules/components_Container._internal_.md#mozoutlineradius)<`string` \| `number`\>

In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.

**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineRadius

#### Defined in

node_modules/csstype/index.d.ts:8300

___

### MozOutlineRadiusBottomleft

• `Optional` **MozOutlineRadiusBottomleft**: [`MozOutlineRadiusBottomleft`](../modules/components_Container._internal_.md#mozoutlineradiusbottomleft)<`string` \| `number`\>

In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8310

___

### MozOutlineRadiusBottomright

• `Optional` **MozOutlineRadiusBottomright**: [`MozOutlineRadiusBottomright`](../modules/components_Container._internal_.md#mozoutlineradiusbottomright)<`string` \| `number`\>

In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8320

___

### MozOutlineRadiusTopleft

• `Optional` **MozOutlineRadiusTopleft**: [`MozOutlineRadiusTopleft`](../modules/components_Container._internal_.md#mozoutlineradiustopleft)<`string` \| `number`\>

In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8330

___

### MozOutlineRadiusTopright

• `Optional` **MozOutlineRadiusTopright**: [`MozOutlineRadiusTopright`](../modules/components_Container._internal_.md#mozoutlineradiustopright)<`string` \| `number`\>

In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8340

___

### MozOutlineStyle

• `Optional` **MozOutlineStyle**: [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle)

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineStyle

#### Defined in

node_modules/csstype/index.d.ts:8350

___

### MozOutlineWidth

• `Optional` **MozOutlineWidth**: [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`string` \| `number`\>

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozOutlineWidth

#### Defined in

node_modules/csstype/index.d.ts:8360

___

### MozPaddingEnd

• `Optional` **MozPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`string` \| `number`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.MozPaddingEnd

#### Defined in

node_modules/csstype/index.d.ts:6034

___

### MozPaddingStart

• `Optional` **MozPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`string` \| `number`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.MozPaddingStart

#### Defined in

node_modules/csstype/index.d.ts:6042

___

### MozPerspective

• `Optional` **MozPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`string` \| `number`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozPerspective

#### Defined in

node_modules/csstype/index.d.ts:6050

___

### MozPerspectiveOrigin

• `Optional` **MozPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`string` \| `number`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

NormalCssProperties.MozPerspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:6058

___

### MozStackSizing

• `Optional` **MozStackSizing**: [`MozStackSizing`](../modules/components_Container._internal_.md#mozstacksizing)

**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.

**Syntax**: `ignore | stretch-to-fit`

**Initial value**: `stretch-to-fit`

#### Inherited from

NormalCssProperties.MozStackSizing

#### Defined in

node_modules/csstype/index.d.ts:6066

___

### MozTabSize

• `Optional` **MozTabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`string` \| `number`\>

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

#### Inherited from

NormalCssProperties.MozTabSize

#### Defined in

node_modules/csstype/index.d.ts:6074

___

### MozTextAlignLast

• `Optional` **MozTextAlignLast**: [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast)

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozTextAlignLast

#### Defined in

node_modules/csstype/index.d.ts:8370

___

### MozTextBlink

• `Optional` **MozTextBlink**: [`MozTextBlink`](../modules/components_Container._internal_.md#moztextblink)

The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.

**Syntax**: `none | blink`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozTextBlink

#### Defined in

node_modules/csstype/index.d.ts:6082

___

### MozTextDecorationColor

• `Optional` **MozTextDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor)

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozTextDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:8380

___

### MozTextDecorationLine

• `Optional` **MozTextDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline)

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozTextDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:8390

___

### MozTextDecorationStyle

• `Optional` **MozTextDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle)

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozTextDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:8400

___

### MozTextSizeAdjust

• `Optional` **MozTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

NormalCssProperties.MozTextSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:6090

___

### MozTransformOrigin

• `Optional` **MozTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`string` \| `number`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

NormalCssProperties.MozTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:6098

___

### MozTransformStyle

• `Optional` **MozTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

NormalCssProperties.MozTransformStyle

#### Defined in

node_modules/csstype/index.d.ts:6106

___

### MozTransition

• `Optional` **MozTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

NormalCssProperties.MozTransition

#### Defined in

node_modules/csstype/index.d.ts:7563

___

### MozTransitionDelay

• `Optional` **MozTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.MozTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:6114

___

### MozTransitionDuration

• `Optional` **MozTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.MozTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:6122

___

### MozTransitionProperty

• `Optional` **MozTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

NormalCssProperties.MozTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:6130

___

### MozTransitionTimingFunction

• `Optional` **MozTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

NormalCssProperties.MozTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6138

___

### MozUserFocus

• `Optional` **MozUserFocus**: [`MozUserFocus`](../modules/components_Container._internal_.md#mozuserfocus)

The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.

**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.MozUserFocus

#### Defined in

node_modules/csstype/index.d.ts:6146

___

### MozUserInput

• `Optional` **MozUserInput**: [`MozUserInput`](../modules/components_Container._internal_.md#mozuserinput)

In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.

**Syntax**: `auto | none | enabled | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.MozUserInput

#### Defined in

node_modules/csstype/index.d.ts:8410

___

### MozUserModify

• `Optional` **MozUserModify**: [`MozUserModify`](../modules/components_Container._internal_.md#mozusermodify)

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

**Syntax**: `read-only | read-write | write-only`

**Initial value**: `read-only`

#### Inherited from

NormalCssProperties.MozUserModify

#### Defined in

node_modules/csstype/index.d.ts:6154

___

### MozUserSelect

• `Optional` **MozUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.MozUserSelect

#### Defined in

node_modules/csstype/index.d.ts:6162

___

### MozWindowDragging

• `Optional` **MozWindowDragging**: [`MozWindowDragging`](../modules/components_Container._internal_.md#mozwindowdragging)

The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.

**Syntax**: `drag | no-drag`

**Initial value**: `drag`

#### Inherited from

NormalCssProperties.MozWindowDragging

#### Defined in

node_modules/csstype/index.d.ts:6170

___

### MozWindowShadow

• `Optional` **MozWindowShadow**: [`MozWindowShadow`](../modules/components_Container._internal_.md#mozwindowshadow)

The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.

**Syntax**: `default | menu | tooltip | sheet | none`

**Initial value**: `default`

#### Inherited from

NormalCssProperties.MozWindowShadow

#### Defined in

node_modules/csstype/index.d.ts:6178

___

### OAnimation

• `Optional` **OAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`string` & {}\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimation

#### Defined in

node_modules/csstype/index.d.ts:8438

___

### OAnimationDelay

• `Optional` **OAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:8448

___

### OAnimationDirection

• `Optional` **OAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:8458

___

### OAnimationDuration

• `Optional` **OAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:8468

___

### OAnimationFillMode

• `Optional` **OAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:8478

___

### OAnimationIterationCount

• `Optional` **OAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:8488

___

### OAnimationName

• `Optional` **OAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationName

#### Defined in

node_modules/csstype/index.d.ts:8498

___

### OAnimationPlayState

• `Optional` **OAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:8508

___

### OAnimationTimingFunction

• `Optional` **OAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`deprecated`**

#### Inherited from

NormalCssProperties.OAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8518

___

### OBackgroundSize

• `Optional` **OBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`string` \| `number`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.OBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8528

___

### OBorderImage

• `Optional` **OBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

**`deprecated`**

#### Inherited from

NormalCssProperties.OBorderImage

#### Defined in

node_modules/csstype/index.d.ts:8536

___

### OObjectFit

• `Optional` **OObjectFit**: [`ObjectFit`](../modules/components_Container._internal_.md#objectfit)

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

**`deprecated`**

#### Inherited from

NormalCssProperties.OObjectFit

#### Defined in

node_modules/csstype/index.d.ts:8546

___

### OObjectPosition

• `Optional` **OObjectPosition**: [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`string` \| `number`\>

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

**`deprecated`**

#### Inherited from

NormalCssProperties.OObjectPosition

#### Defined in

node_modules/csstype/index.d.ts:8556

___

### OTabSize

• `Optional` **OTabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`string` \| `number`\>

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTabSize

#### Defined in

node_modules/csstype/index.d.ts:8566

___

### OTextOverflow

• `Optional` **OTextOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow)

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTextOverflow

#### Defined in

node_modules/csstype/index.d.ts:8576

___

### OTransform

• `Optional` **OTransform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransform

#### Defined in

node_modules/csstype/index.d.ts:8586

___

### OTransformOrigin

• `Optional` **OTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`string` \| `number`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:8596

___

### OTransition

• `Optional` **OTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransition

#### Defined in

node_modules/csstype/index.d.ts:8604

___

### OTransitionDelay

• `Optional` **OTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:8614

___

### OTransitionDuration

• `Optional` **OTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:8624

___

### OTransitionProperty

• `Optional` **OTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:8634

___

### OTransitionTimingFunction

• `Optional` **OTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`deprecated`**

#### Inherited from

NormalCssProperties.OTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8644

___

### WebkitAlignContent

• `Optional` **WebkitAlignContent**: [`AlignContent`](../modules/components_Container._internal_.md#aligncontent)

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitAlignContent

#### Defined in

node_modules/csstype/index.d.ts:6682

___

### WebkitAlignItems

• `Optional` **WebkitAlignItems**: [`AlignItems`](../modules/components_Container._internal_.md#alignitems)

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitAlignItems

#### Defined in

node_modules/csstype/index.d.ts:6690

___

### WebkitAlignSelf

• `Optional` **WebkitAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitAlignSelf

#### Defined in

node_modules/csstype/index.d.ts:6698

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`string` & {}\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

NormalCssProperties.WebkitAnimation

#### Defined in

node_modules/csstype/index.d.ts:7611

___

### WebkitAnimationDelay

• `Optional` **WebkitAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.WebkitAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:6706

___

### WebkitAnimationDirection

• `Optional` **WebkitAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:6714

___

### WebkitAnimationDuration

• `Optional` **WebkitAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.WebkitAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:6722

___

### WebkitAnimationFillMode

• `Optional` **WebkitAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:6730

___

### WebkitAnimationIterationCount

• `Optional` **WebkitAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

NormalCssProperties.WebkitAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:6738

___

### WebkitAnimationName

• `Optional` **WebkitAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitAnimationName

#### Defined in

node_modules/csstype/index.d.ts:6746

___

### WebkitAnimationPlayState

• `Optional` **WebkitAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

NormalCssProperties.WebkitAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:6754

___

### WebkitAnimationTimingFunction

• `Optional` **WebkitAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

NormalCssProperties.WebkitAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6762

___

### WebkitAppearance

• `Optional` **WebkitAppearance**: [`WebkitAppearance`](../modules/components_Container._internal_.md#webkitappearance)

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

NormalCssProperties.WebkitAppearance

#### Defined in

node_modules/csstype/index.d.ts:6770

___

### WebkitBackdropFilter

• `Optional` **WebkitBackdropFilter**: [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter)

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitBackdropFilter

#### Defined in

node_modules/csstype/index.d.ts:6778

___

### WebkitBackfaceVisibility

• `Optional` **WebkitBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

NormalCssProperties.WebkitBackfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:6786

___

### WebkitBackgroundClip

• `Optional` **WebkitBackgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip)

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

#### Inherited from

NormalCssProperties.WebkitBackgroundClip

#### Defined in

node_modules/csstype/index.d.ts:6794

___

### WebkitBackgroundOrigin

• `Optional` **WebkitBackgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin)

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

#### Inherited from

NormalCssProperties.WebkitBackgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:6802

___

### WebkitBackgroundSize

• `Optional` **WebkitBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`string` \| `number`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

NormalCssProperties.WebkitBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:6810

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: [`WebkitBorderBefore`](../modules/components_Container._internal_.md#webkitborderbefore)<`string` \| `number`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Inherited from

NormalCssProperties.WebkitBorderBefore

#### Defined in

node_modules/csstype/index.d.ts:7617

___

### WebkitBorderBeforeColor

• `Optional` **WebkitBorderBeforeColor**: [`WebkitBorderBeforeColor`](../modules/components_Container._internal_.md#webkitborderbeforecolor)

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitBorderBeforeColor

#### Defined in

node_modules/csstype/index.d.ts:6816

___

### WebkitBorderBeforeStyle

• `Optional` **WebkitBorderBeforeStyle**: [`WebkitBorderBeforeStyle`](../modules/components_Container._internal_.md#webkitborderbeforestyle)

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitBorderBeforeStyle

#### Defined in

node_modules/csstype/index.d.ts:6822

___

### WebkitBorderBeforeWidth

• `Optional` **WebkitBorderBeforeWidth**: [`WebkitBorderBeforeWidth`](../modules/components_Container._internal_.md#webkitborderbeforewidth)<`string` \| `number`\>

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

NormalCssProperties.WebkitBorderBeforeWidth

#### Defined in

node_modules/csstype/index.d.ts:6828

___

### WebkitBorderBottomLeftRadius

• `Optional` **WebkitBorderBottomLeftRadius**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`string` \| `number`\>

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitBorderBottomLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:6836

___

### WebkitBorderBottomRightRadius

• `Optional` **WebkitBorderBottomRightRadius**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`string` \| `number`\>

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitBorderBottomRightRadius

#### Defined in

node_modules/csstype/index.d.ts:6844

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

NormalCssProperties.WebkitBorderImage

#### Defined in

node_modules/csstype/index.d.ts:7623

___

### WebkitBorderImageSlice

• `Optional` **WebkitBorderImageSlice**: [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice)

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

#### Inherited from

NormalCssProperties.WebkitBorderImageSlice

#### Defined in

node_modules/csstype/index.d.ts:6852

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`string` \| `number`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Inherited from

NormalCssProperties.WebkitBorderRadius

#### Defined in

node_modules/csstype/index.d.ts:7629

___

### WebkitBorderTopLeftRadius

• `Optional` **WebkitBorderTopLeftRadius**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`string` \| `number`\>

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitBorderTopLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:6860

___

### WebkitBorderTopRightRadius

• `Optional` **WebkitBorderTopRightRadius**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`string` \| `number`\>

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitBorderTopRightRadius

#### Defined in

node_modules/csstype/index.d.ts:6868

___

### WebkitBoxAlign

• `Optional` **WebkitBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign)

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8654

___

### WebkitBoxDecorationBreak

• `Optional` **WebkitBoxDecorationBreak**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak)

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

#### Inherited from

NormalCssProperties.WebkitBoxDecorationBreak

#### Defined in

node_modules/csstype/index.d.ts:6876

___

### WebkitBoxDirection

• `Optional` **WebkitBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection)

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8664

___

### WebkitBoxFlex

• `Optional` **WebkitBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex)

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8674

___

### WebkitBoxFlexGroup

• `Optional` **WebkitBoxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup)

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8684

___

### WebkitBoxLines

• `Optional` **WebkitBoxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines)

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8694

___

### WebkitBoxOrdinalGroup

• `Optional` **WebkitBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup)

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8704

___

### WebkitBoxOrient

• `Optional` **WebkitBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient)

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8714

___

### WebkitBoxPack

• `Optional` **WebkitBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack)

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8724

___

### WebkitBoxReflect

• `Optional` **WebkitBoxReflect**: [`WebkitBoxReflect`](../modules/components_Container._internal_.md#webkitboxreflect)<`string` \| `number`\>

The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.

**Syntax**: `[ above | below | right | left ]? <length>? <image>?`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitBoxReflect

#### Defined in

node_modules/csstype/index.d.ts:6884

___

### WebkitBoxShadow

• `Optional` **WebkitBoxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow)

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitBoxShadow

#### Defined in

node_modules/csstype/index.d.ts:6892

___

### WebkitBoxSizing

• `Optional` **WebkitBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

NormalCssProperties.WebkitBoxSizing

#### Defined in

node_modules/csstype/index.d.ts:6900

___

### WebkitClipPath

• `Optional` **WebkitClipPath**: [`ClipPath`](../modules/components_Container._internal_.md#clippath)

The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitClipPath

#### Defined in

node_modules/csstype/index.d.ts:6908

___

### WebkitColumnCount

• `Optional` **WebkitColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitColumnCount

#### Defined in

node_modules/csstype/index.d.ts:6916

___

### WebkitColumnFill

• `Optional` **WebkitColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

NormalCssProperties.WebkitColumnFill

#### Defined in

node_modules/csstype/index.d.ts:6924

___

### WebkitColumnGap

• `Optional` **WebkitColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`string` \| `number`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitColumnGap

#### Defined in

node_modules/csstype/index.d.ts:6932

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`string` \| `number`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

NormalCssProperties.WebkitColumnRule

#### Defined in

node_modules/csstype/index.d.ts:7635

___

### WebkitColumnRuleColor

• `Optional` **WebkitColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitColumnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:6940

___

### WebkitColumnRuleStyle

• `Optional` **WebkitColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitColumnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:6948

___

### WebkitColumnRuleWidth

• `Optional` **WebkitColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`string` \| `number`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

NormalCssProperties.WebkitColumnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:6956

___

### WebkitColumnSpan

• `Optional` **WebkitColumnSpan**: [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan)

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitColumnSpan

#### Defined in

node_modules/csstype/index.d.ts:6964

___

### WebkitColumnWidth

• `Optional` **WebkitColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`string` \| `number`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitColumnWidth

#### Defined in

node_modules/csstype/index.d.ts:6972

___

### WebkitColumns

• `Optional` **WebkitColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`string` \| `number`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

NormalCssProperties.WebkitColumns

#### Defined in

node_modules/csstype/index.d.ts:7641

___

### WebkitFilter

• `Optional` **WebkitFilter**: [`Filter`](../modules/components_Container._internal_.md#filter)

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitFilter

#### Defined in

node_modules/csstype/index.d.ts:6980

___

### WebkitFlex

• `Optional` **WebkitFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`string` \| `number`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

NormalCssProperties.WebkitFlex

#### Defined in

node_modules/csstype/index.d.ts:7647

___

### WebkitFlexBasis

• `Optional` **WebkitFlexBasis**: [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`string` \| `number`\>

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitFlexBasis

#### Defined in

node_modules/csstype/index.d.ts:6988

___

### WebkitFlexDirection

• `Optional` **WebkitFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

NormalCssProperties.WebkitFlexDirection

#### Defined in

node_modules/csstype/index.d.ts:6996

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Inherited from

NormalCssProperties.WebkitFlexFlow

#### Defined in

node_modules/csstype/index.d.ts:7653

___

### WebkitFlexGrow

• `Optional` **WebkitFlexGrow**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitFlexGrow

#### Defined in

node_modules/csstype/index.d.ts:7004

___

### WebkitFlexShrink

• `Optional` **WebkitFlexShrink**: [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink)

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

#### Inherited from

NormalCssProperties.WebkitFlexShrink

#### Defined in

node_modules/csstype/index.d.ts:7012

___

### WebkitFlexWrap

• `Optional` **WebkitFlexWrap**: [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap)

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

#### Inherited from

NormalCssProperties.WebkitFlexWrap

#### Defined in

node_modules/csstype/index.d.ts:7020

___

### WebkitFontFeatureSettings

• `Optional` **WebkitFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitFontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:7028

___

### WebkitFontKerning

• `Optional` **WebkitFontKerning**: [`FontKerning`](../modules/components_Container._internal_.md#fontkerning)

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitFontKerning

#### Defined in

node_modules/csstype/index.d.ts:7036

___

### WebkitFontSmoothing

• `Optional` **WebkitFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`string` \| `number`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitFontSmoothing

#### Defined in

node_modules/csstype/index.d.ts:7044

___

### WebkitFontVariantLigatures

• `Optional` **WebkitFontVariantLigatures**: [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures)

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitFontVariantLigatures

#### Defined in

node_modules/csstype/index.d.ts:7052

___

### WebkitHyphens

• `Optional` **WebkitHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

NormalCssProperties.WebkitHyphens

#### Defined in

node_modules/csstype/index.d.ts:7060

___

### WebkitJustifyContent

• `Optional` **WebkitJustifyContent**: [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent)

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.WebkitJustifyContent

#### Defined in

node_modules/csstype/index.d.ts:7068

___

### WebkitLineBreak

• `Optional` **WebkitLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitLineBreak

#### Defined in

node_modules/csstype/index.d.ts:7076

___

### WebkitLineClamp

• `Optional` **WebkitLineClamp**: [`WebkitLineClamp`](../modules/components_Container._internal_.md#webkitlineclamp)

The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitLineClamp

#### Defined in

node_modules/csstype/index.d.ts:7084

___

### WebkitMarginEnd

• `Optional` **WebkitMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`string` \| `number`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitMarginEnd

#### Defined in

node_modules/csstype/index.d.ts:7092

___

### WebkitMarginStart

• `Optional` **WebkitMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`string` \| `number`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitMarginStart

#### Defined in

node_modules/csstype/index.d.ts:7100

___

### WebkitMask

• `Optional` **WebkitMask**: [`WebkitMask`](../modules/components_Container._internal_.md#webkitmask)<`string` \| `number`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Inherited from

NormalCssProperties.WebkitMask

#### Defined in

node_modules/csstype/index.d.ts:7659

___

### WebkitMaskAttachment

• `Optional` **WebkitMaskAttachment**: [`WebkitMaskAttachment`](../modules/components_Container._internal_.md#webkitmaskattachment)

If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

#### Inherited from

NormalCssProperties.WebkitMaskAttachment

#### Defined in

node_modules/csstype/index.d.ts:7108

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImage

#### Defined in

node_modules/csstype/index.d.ts:7665

___

### WebkitMaskBoxImageOutset

• `Optional` **WebkitMaskBoxImageOutset**: [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`string` \| `number`\>

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImageOutset

#### Defined in

node_modules/csstype/index.d.ts:7116

___

### WebkitMaskBoxImageRepeat

• `Optional` **WebkitMaskBoxImageRepeat**: [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat)

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImageRepeat

#### Defined in

node_modules/csstype/index.d.ts:7124

___

### WebkitMaskBoxImageSlice

• `Optional` **WebkitMaskBoxImageSlice**: [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice)

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImageSlice

#### Defined in

node_modules/csstype/index.d.ts:7132

___

### WebkitMaskBoxImageSource

• `Optional` **WebkitMaskBoxImageSource**: [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource)

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImageSource

#### Defined in

node_modules/csstype/index.d.ts:7140

___

### WebkitMaskBoxImageWidth

• `Optional` **WebkitMaskBoxImageWidth**: [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`string` \| `number`\>

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitMaskBoxImageWidth

#### Defined in

node_modules/csstype/index.d.ts:7148

___

### WebkitMaskClip

• `Optional` **WebkitMaskClip**: [`WebkitMaskClip`](../modules/components_Container._internal_.md#webkitmaskclip)

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <box> | border | padding | content | text ]#`

**Initial value**: `border`

#### Inherited from

NormalCssProperties.WebkitMaskClip

#### Defined in

node_modules/csstype/index.d.ts:7156

___

### WebkitMaskComposite

• `Optional` **WebkitMaskComposite**: [`WebkitMaskComposite`](../modules/components_Container._internal_.md#webkitmaskcomposite)

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.

**Syntax**: `<composite-style>#`

**Initial value**: `source-over`

#### Inherited from

NormalCssProperties.WebkitMaskComposite

#### Defined in

node_modules/csstype/index.d.ts:7164

___

### WebkitMaskImage

• `Optional` **WebkitMaskImage**: [`WebkitMaskImage`](../modules/components_Container._internal_.md#webkitmaskimage)

The **`mask-image`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitMaskImage

#### Defined in

node_modules/csstype/index.d.ts:7172

___

### WebkitMaskOrigin

• `Optional` **WebkitMaskOrigin**: [`WebkitMaskOrigin`](../modules/components_Container._internal_.md#webkitmaskorigin)

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `[ <box> | border | padding | content ]#`

**Initial value**: `padding`

#### Inherited from

NormalCssProperties.WebkitMaskOrigin

#### Defined in

node_modules/csstype/index.d.ts:7180

___

### WebkitMaskPosition

• `Optional` **WebkitMaskPosition**: [`WebkitMaskPosition`](../modules/components_Container._internal_.md#webkitmaskposition)<`string` \| `number`\>

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `0% 0%`

#### Inherited from

NormalCssProperties.WebkitMaskPosition

#### Defined in

node_modules/csstype/index.d.ts:7188

___

### WebkitMaskPositionX

• `Optional` **WebkitMaskPositionX**: [`WebkitMaskPositionX`](../modules/components_Container._internal_.md#webkitmaskpositionx)<`string` \| `number`\>

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

**Syntax**: `[ <length-percentage> | left | center | right ]#`

**Initial value**: `0%`

#### Inherited from

NormalCssProperties.WebkitMaskPositionX

#### Defined in

node_modules/csstype/index.d.ts:7196

___

### WebkitMaskPositionY

• `Optional` **WebkitMaskPositionY**: [`WebkitMaskPositionY`](../modules/components_Container._internal_.md#webkitmaskpositiony)<`string` \| `number`\>

The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.

**Syntax**: `[ <length-percentage> | top | center | bottom ]#`

**Initial value**: `0%`

#### Inherited from

NormalCssProperties.WebkitMaskPositionY

#### Defined in

node_modules/csstype/index.d.ts:7204

___

### WebkitMaskRepeat

• `Optional` **WebkitMaskRepeat**: [`WebkitMaskRepeat`](../modules/components_Container._internal_.md#webkitmaskrepeat)

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

#### Inherited from

NormalCssProperties.WebkitMaskRepeat

#### Defined in

node_modules/csstype/index.d.ts:7212

___

### WebkitMaskRepeatX

• `Optional` **WebkitMaskRepeatX**: [`WebkitMaskRepeatX`](../modules/components_Container._internal_.md#webkitmaskrepeatx)

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

NormalCssProperties.WebkitMaskRepeatX

#### Defined in

node_modules/csstype/index.d.ts:7220

___

### WebkitMaskRepeatY

• `Optional` **WebkitMaskRepeatY**: [`WebkitMaskRepeatY`](../modules/components_Container._internal_.md#webkitmaskrepeaty)

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

NormalCssProperties.WebkitMaskRepeatY

#### Defined in

node_modules/csstype/index.d.ts:7228

___

### WebkitMaskSize

• `Optional` **WebkitMaskSize**: [`WebkitMaskSize`](../modules/components_Container._internal_.md#webkitmasksize)<`string` \| `number`\>

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

NormalCssProperties.WebkitMaskSize

#### Defined in

node_modules/csstype/index.d.ts:7236

___

### WebkitMaxInlineSize

• `Optional` **WebkitMaxInlineSize**: [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`string` \| `number`\>

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitMaxInlineSize

#### Defined in

node_modules/csstype/index.d.ts:7244

___

### WebkitOrder

• `Optional` **WebkitOrder**: [`Order`](../modules/components_Container._internal_.md#order)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitOrder

#### Defined in

node_modules/csstype/index.d.ts:7252

___

### WebkitOverflowScrolling

• `Optional` **WebkitOverflowScrolling**: [`WebkitOverflowScrolling`](../modules/components_Container._internal_.md#webkitoverflowscrolling)

The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.

**Syntax**: `auto | touch`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitOverflowScrolling

#### Defined in

node_modules/csstype/index.d.ts:7260

___

### WebkitPaddingEnd

• `Optional` **WebkitPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`string` \| `number`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitPaddingEnd

#### Defined in

node_modules/csstype/index.d.ts:7268

___

### WebkitPaddingStart

• `Optional` **WebkitPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`string` \| `number`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitPaddingStart

#### Defined in

node_modules/csstype/index.d.ts:7276

___

### WebkitPerspective

• `Optional` **WebkitPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`string` \| `number`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitPerspective

#### Defined in

node_modules/csstype/index.d.ts:7284

___

### WebkitPerspectiveOrigin

• `Optional` **WebkitPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`string` \| `number`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

NormalCssProperties.WebkitPerspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:7292

___

### WebkitPrintColorAdjust

• `Optional` **WebkitPrintColorAdjust**: [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust)

The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

#### Inherited from

NormalCssProperties.WebkitPrintColorAdjust

#### Defined in

node_modules/csstype/index.d.ts:7300

___

### WebkitRubyPosition

• `Optional` **WebkitRubyPosition**: [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition)

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

#### Inherited from

NormalCssProperties.WebkitRubyPosition

#### Defined in

node_modules/csstype/index.d.ts:7308

___

### WebkitScrollSnapPointsX

• `Optional` **WebkitScrollSnapPointsX**: [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx)

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitScrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:8734

___

### WebkitScrollSnapPointsY

• `Optional` **WebkitScrollSnapPointsY**: [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy)

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.WebkitScrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:8744

___

### WebkitScrollSnapType

• `Optional` **WebkitScrollSnapType**: [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitScrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:7316

___

### WebkitShapeMargin

• `Optional` **WebkitShapeMargin**: [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`string` \| `number`\>

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitShapeMargin

#### Defined in

node_modules/csstype/index.d.ts:7324

___

### WebkitTapHighlightColor

• `Optional` **WebkitTapHighlightColor**: [`WebkitTapHighlightColor`](../modules/components_Container._internal_.md#webkittaphighlightcolor)

**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.

**Syntax**: `<color>`

**Initial value**: `black`

#### Inherited from

NormalCssProperties.WebkitTapHighlightColor

#### Defined in

node_modules/csstype/index.d.ts:7332

___

### WebkitTextCombine

• `Optional` **WebkitTextCombine**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitTextCombine

#### Defined in

node_modules/csstype/index.d.ts:7340

___

### WebkitTextDecorationColor

• `Optional` **WebkitTextDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor)

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitTextDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:7348

___

### WebkitTextDecorationLine

• `Optional` **WebkitTextDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline)

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitTextDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:7356

___

### WebkitTextDecorationSkip

• `Optional` **WebkitTextDecorationSkip**: [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip)

The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

#### Inherited from

NormalCssProperties.WebkitTextDecorationSkip

#### Defined in

node_modules/csstype/index.d.ts:7364

___

### WebkitTextDecorationStyle

• `Optional` **WebkitTextDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle)

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

#### Inherited from

NormalCssProperties.WebkitTextDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:7372

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Inherited from

NormalCssProperties.WebkitTextEmphasis

#### Defined in

node_modules/csstype/index.d.ts:7671

___

### WebkitTextEmphasisColor

• `Optional` **WebkitTextEmphasisColor**: [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor)

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitTextEmphasisColor

#### Defined in

node_modules/csstype/index.d.ts:7380

___

### WebkitTextEmphasisPosition

• `Optional` **WebkitTextEmphasisPosition**: [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition)

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

#### Inherited from

NormalCssProperties.WebkitTextEmphasisPosition

#### Defined in

node_modules/csstype/index.d.ts:7388

___

### WebkitTextEmphasisStyle

• `Optional` **WebkitTextEmphasisStyle**: [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle)

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitTextEmphasisStyle

#### Defined in

node_modules/csstype/index.d.ts:7396

___

### WebkitTextFillColor

• `Optional` **WebkitTextFillColor**: [`WebkitTextFillColor`](../modules/components_Container._internal_.md#webkittextfillcolor)

The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitTextFillColor

#### Defined in

node_modules/csstype/index.d.ts:7404

___

### WebkitTextOrientation

• `Optional` **WebkitTextOrientation**: [`TextOrientation`](../modules/components_Container._internal_.md#textorientation)

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

#### Inherited from

NormalCssProperties.WebkitTextOrientation

#### Defined in

node_modules/csstype/index.d.ts:7412

___

### WebkitTextSizeAdjust

• `Optional` **WebkitTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

NormalCssProperties.WebkitTextSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:7420

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: [`WebkitTextStroke`](../modules/components_Container._internal_.md#webkittextstroke)<`string` \| `number`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Inherited from

NormalCssProperties.WebkitTextStroke

#### Defined in

node_modules/csstype/index.d.ts:7677

___

### WebkitTextStrokeColor

• `Optional` **WebkitTextStrokeColor**: [`WebkitTextStrokeColor`](../modules/components_Container._internal_.md#webkittextstrokecolor)

The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

NormalCssProperties.WebkitTextStrokeColor

#### Defined in

node_modules/csstype/index.d.ts:7428

___

### WebkitTextStrokeWidth

• `Optional` **WebkitTextStrokeWidth**: [`WebkitTextStrokeWidth`](../modules/components_Container._internal_.md#webkittextstrokewidth)<`string` \| `number`\>

The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.WebkitTextStrokeWidth

#### Defined in

node_modules/csstype/index.d.ts:7436

___

### WebkitTextUnderlinePosition

• `Optional` **WebkitTextUnderlinePosition**: [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition)

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitTextUnderlinePosition

#### Defined in

node_modules/csstype/index.d.ts:7444

___

### WebkitTouchCallout

• `Optional` **WebkitTouchCallout**: [`WebkitTouchCallout`](../modules/components_Container._internal_.md#webkittouchcallout)

The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.

**Syntax**: `default | none`

**Initial value**: `default`

#### Inherited from

NormalCssProperties.WebkitTouchCallout

#### Defined in

node_modules/csstype/index.d.ts:7452

___

### WebkitTransform

• `Optional` **WebkitTransform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.WebkitTransform

#### Defined in

node_modules/csstype/index.d.ts:7460

___

### WebkitTransformOrigin

• `Optional` **WebkitTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`string` \| `number`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

NormalCssProperties.WebkitTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:7468

___

### WebkitTransformStyle

• `Optional` **WebkitTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

NormalCssProperties.WebkitTransformStyle

#### Defined in

node_modules/csstype/index.d.ts:7476

___

### WebkitTransition

• `Optional` **WebkitTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

NormalCssProperties.WebkitTransition

#### Defined in

node_modules/csstype/index.d.ts:7683

___

### WebkitTransitionDelay

• `Optional` **WebkitTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.WebkitTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:7484

___

### WebkitTransitionDuration

• `Optional` **WebkitTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.WebkitTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:7492

___

### WebkitTransitionProperty

• `Optional` **WebkitTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

NormalCssProperties.WebkitTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:7500

___

### WebkitTransitionTimingFunction

• `Optional` **WebkitTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

NormalCssProperties.WebkitTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:7508

___

### WebkitUserModify

• `Optional` **WebkitUserModify**: [`WebkitUserModify`](../modules/components_Container._internal_.md#webkitusermodify)

**Syntax**: `read-only | read-write | read-write-plaintext-only`

**Initial value**: `read-only`

#### Inherited from

NormalCssProperties.WebkitUserModify

#### Defined in

node_modules/csstype/index.d.ts:7514

___

### WebkitUserSelect

• `Optional` **WebkitUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.WebkitUserSelect

#### Defined in

node_modules/csstype/index.d.ts:7522

___

### WebkitWritingMode

• `Optional` **WebkitWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

NormalCssProperties.WebkitWritingMode

#### Defined in

node_modules/csstype/index.d.ts:7530

___

### accentColor

• `Optional` **accentColor**: [`AccentColor`](../modules/components_Container._internal_.md#accentcolor)

The **`accent-color`** CSS property sets the color of the elements accent. An accent appears in elements such as `<input>` of `type="checkbox"`, or `type="radio"`.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **93** | **92**  |   No   | **93** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/accent-color

#### Inherited from

NormalCssProperties.accentColor

#### Defined in

node_modules/csstype/index.d.ts:25

___

### alignContent

• `Optional` **alignContent**: [`AlignContent`](../modules/components_Container._internal_.md#aligncontent)

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

---

_Supported in Flex Layout_

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/align-content

#### Inherited from

NormalCssProperties.alignContent

#### Defined in

node_modules/csstype/index.d.ts:54

___

### alignItems

• `Optional` **alignItems**: [`AlignItems`](../modules/components_Container._internal_.md#alignitems)

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

---

_Supported in Flex Layout_

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **52**  | **20**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/align-items

#### Inherited from

NormalCssProperties.alignItems

#### Defined in

node_modules/csstype/index.d.ts:83

___

### alignSelf

• `Optional` **alignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

---

_Supported in Flex Layout_

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **36**  | **20**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  |      IE      |
| :----: | :-----: | :------: | :----: | :----------: |
| **57** | **52**  | **10.1** | **16** | **10** _-x-_ |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/align-self

#### Inherited from

NormalCssProperties.alignSelf

#### Defined in

node_modules/csstype/index.d.ts:112

___

### alignTracks

• `Optional` **alignTracks**: [`AlignTracks`](../modules/components_Container._internal_.md#aligntracks)

The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.

**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/align-tracks

#### Inherited from

NormalCssProperties.alignTracks

#### Defined in

node_modules/csstype/index.d.ts:126

___

### alignmentBaseline

• `Optional` **alignmentBaseline**: [`AlignmentBaseline`](../modules/components_Container._internal_.md#alignmentbaseline)

#### Inherited from

NormalCssProperties.alignmentBaseline

#### Defined in

node_modules/csstype/index.d.ts:8748

___

### all

• `Optional` **all**: [`Globals`](../modules/components_Container._internal_.md#globals)

The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

**Syntax**: `initial | inherit | unset | revert`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **37** | **27**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/all

#### Inherited from

NormalCssProperties.all

#### Defined in

node_modules/csstype/index.d.ts:5146

___

### animation

• `Optional` **animation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`string` & {}\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation

#### Inherited from

NormalCssProperties.animation

#### Defined in

node_modules/csstype/index.d.ts:5159

___

### animationDelay

• `Optional` **animationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`string` & {}\>

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-delay

#### Inherited from

NormalCssProperties.animationDelay

#### Defined in

node_modules/csstype/index.d.ts:141

___

### animationDirection

• `Optional` **animationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection)

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-direction

#### Inherited from

NormalCssProperties.animationDirection

#### Defined in

node_modules/csstype/index.d.ts:156

___

### animationDuration

• `Optional` **animationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`string` & {}\>

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-duration

#### Inherited from

NormalCssProperties.animationDuration

#### Defined in

node_modules/csstype/index.d.ts:171

___

### animationFillMode

• `Optional` **animationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode)

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode

#### Inherited from

NormalCssProperties.animationFillMode

#### Defined in

node_modules/csstype/index.d.ts:186

___

### animationIterationCount

• `Optional` **animationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount)

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count

#### Inherited from

NormalCssProperties.animationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:201

___

### animationName

• `Optional` **animationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname)

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-name

#### Inherited from

NormalCssProperties.animationName

#### Defined in

node_modules/csstype/index.d.ts:216

___

### animationPlayState

• `Optional` **animationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate)

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-play-state

#### Inherited from

NormalCssProperties.animationPlayState

#### Defined in

node_modules/csstype/index.d.ts:231

___

### animationTimingFunction

• `Optional` **animationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction)

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-timing-function

#### Inherited from

NormalCssProperties.animationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:246

___

### appearance

• `Optional` **appearance**: [`Appearance`](../modules/components_Container._internal_.md#appearance)

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`

**Initial value**: `auto`

| Chrome  | Firefox |   Safari    |   Edge   | IE  |
| :-----: | :-----: | :---------: | :------: | :-: |
| **84**  | **80**  | **3** _-x-_ |  **84**  | No  |
| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/appearance

#### Inherited from

NormalCssProperties.appearance

#### Defined in

node_modules/csstype/index.d.ts:261

___

### aspectRatio

• `Optional` **aspectRatio**: [`AspectRatio`](../modules/components_Container._internal_.md#aspectratio)

The **`aspect-ratio`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.

**Syntax**: `auto | <ratio>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **88** | **89**  | **15** | **88** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/aspect-ratio

#### Inherited from

NormalCssProperties.aspectRatio

#### Defined in

node_modules/csstype/index.d.ts:275

___

### azimuth

• `Optional` **azimuth**: [`Azimuth`](../modules/components_Container._internal_.md#azimuth)

In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.

**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`

**Initial value**: `center`

**`deprecated`**

#### Inherited from

NormalCssProperties.azimuth

#### Defined in

node_modules/csstype/index.d.ts:7698

___

### backdropFilter

• `Optional` **backdropFilter**: [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter)

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

| Chrome | Firefox |   Safari    |  Edge  | IE  |
| :----: | :-----: | :---------: | :----: | :-: |
| **76** |   n/a   | **9** _-x-_ | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/backdrop-filter

#### Inherited from

NormalCssProperties.backdropFilter

#### Defined in

node_modules/csstype/index.d.ts:289

___

### backfaceVisibility

• `Optional` **backfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility)

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
| :------: | :------: | :-----------: | :----: | :----: |
|  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ |               |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/backface-visibility

#### Inherited from

NormalCssProperties.backfaceVisibility

#### Defined in

node_modules/csstype/index.d.ts:304

___

### background

• `Optional` **background**: [`Background`](../modules/components_Container._internal_.md#background)<`string` \| `number`\>

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background

#### Inherited from

NormalCssProperties.background

#### Defined in

node_modules/csstype/index.d.ts:5171

___

### backgroundAttachment

• `Optional` **backgroundAttachment**: [`BackgroundAttachment`](../modules/components_Container._internal_.md#backgroundattachment)

The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-attachment

#### Inherited from

NormalCssProperties.backgroundAttachment

#### Defined in

node_modules/csstype/index.d.ts:318

___

### backgroundBlendMode

• `Optional` **backgroundBlendMode**: [`BackgroundBlendMode`](../modules/components_Container._internal_.md#backgroundblendmode)

The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.

**Syntax**: `<blend-mode>#`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **30**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-blend-mode

#### Inherited from

NormalCssProperties.backgroundBlendMode

#### Defined in

node_modules/csstype/index.d.ts:332

___

### backgroundClip

• `Optional` **backgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip)

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

| Chrome | Firefox |   Safari    |  Edge  |  IE   |
| :----: | :-----: | :---------: | :----: | :---: |
| **1**  |  **4**  | **3** _-x-_ | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-clip

#### Inherited from

NormalCssProperties.backgroundClip

#### Defined in

node_modules/csstype/index.d.ts:346

___

### backgroundColor

• `Optional` **backgroundColor**: [`BackgroundColor`](../modules/components_Container._internal_.md#backgroundcolor)

The **`background-color`** CSS property sets the background color of an element.

**Syntax**: `<color>`

**Initial value**: `transparent`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-color

#### Inherited from

NormalCssProperties.backgroundColor

#### Defined in

node_modules/csstype/index.d.ts:360

___

### backgroundImage

• `Optional` **backgroundImage**: [`BackgroundImage`](../modules/components_Container._internal_.md#backgroundimage)

The **`background-image`** CSS property sets one or more background images on an element.

**Syntax**: `<bg-image>#`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-image

#### Inherited from

NormalCssProperties.backgroundImage

#### Defined in

node_modules/csstype/index.d.ts:374

___

### backgroundOrigin

• `Optional` **backgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin)

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **4**  | **3**  | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-origin

#### Inherited from

NormalCssProperties.backgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:388

___

### backgroundPosition

• `Optional` **backgroundPosition**: [`BackgroundPosition`](../modules/components_Container._internal_.md#backgroundposition)<`string` \| `number`\>

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position

#### Inherited from

NormalCssProperties.backgroundPosition

#### Defined in

node_modules/csstype/index.d.ts:5185

___

### backgroundPositionX

• `Optional` **backgroundPositionX**: [`BackgroundPositionX`](../modules/components_Container._internal_.md#backgroundpositionx)<`string` \| `number`\>

The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`

**Initial value**: `left`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position-x

#### Inherited from

NormalCssProperties.backgroundPositionX

#### Defined in

node_modules/csstype/index.d.ts:402

___

### backgroundPositionY

• `Optional` **backgroundPositionY**: [`BackgroundPositionY`](../modules/components_Container._internal_.md#backgroundpositiony)<`string` \| `number`\>

The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`

**Initial value**: `top`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position-y

#### Inherited from

NormalCssProperties.backgroundPositionY

#### Defined in

node_modules/csstype/index.d.ts:416

___

### backgroundRepeat

• `Optional` **backgroundRepeat**: [`BackgroundRepeat`](../modules/components_Container._internal_.md#backgroundrepeat)

The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-repeat

#### Inherited from

NormalCssProperties.backgroundRepeat

#### Defined in

node_modules/csstype/index.d.ts:430

___

### backgroundSize

• `Optional` **backgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`string` \| `number`\>

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **3**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-size

#### Inherited from

NormalCssProperties.backgroundSize

#### Defined in

node_modules/csstype/index.d.ts:445

___

### baselineShift

• `Optional` **baselineShift**: [`BaselineShift`](../modules/components_Container._internal_.md#baselineshift)<`string` \| `number`\>

#### Inherited from

NormalCssProperties.baselineShift

#### Defined in

node_modules/csstype/index.d.ts:8749

___

### blockOverflow

• `Optional` **blockOverflow**: [`BlockOverflow`](../modules/components_Container._internal_.md#blockoverflow)

**Syntax**: `clip | ellipsis | <string>`

**Initial value**: `clip`

#### Inherited from

NormalCssProperties.blockOverflow

#### Defined in

node_modules/csstype/index.d.ts:451

___

### blockSize

• `Optional` **blockSize**: [`BlockSize`](../modules/components_Container._internal_.md#blocksize)<`string` \| `number`\>

The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/block-size

#### Inherited from

NormalCssProperties.blockSize

#### Defined in

node_modules/csstype/index.d.ts:465

___

### border

• `Optional` **border**: [`Border`](../modules/components_Container._internal_.md#border)<`string` \| `number`\>

The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border

#### Inherited from

NormalCssProperties.border

#### Defined in

node_modules/csstype/index.d.ts:5197

___

### borderBlock

• `Optional` **borderBlock**: [`BorderBlock`](../modules/components_Container._internal_.md#borderblock)<`string` \| `number`\>

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block

#### Inherited from

NormalCssProperties.borderBlock

#### Defined in

node_modules/csstype/index.d.ts:5209

___

### borderBlockColor

• `Optional` **borderBlockColor**: [`BorderBlockColor`](../modules/components_Container._internal_.md#borderblockcolor)

The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-color

#### Inherited from

NormalCssProperties.borderBlockColor

#### Defined in

node_modules/csstype/index.d.ts:479

___

### borderBlockEnd

• `Optional` **borderBlockEnd**: [`BorderBlockEnd`](../modules/components_Container._internal_.md#borderblockend)<`string` \| `number`\>

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Inherited from

NormalCssProperties.borderBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:5221

___

### borderBlockEndColor

• `Optional` **borderBlockEndColor**: [`BorderBlockEndColor`](../modules/components_Container._internal_.md#borderblockendcolor)

The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-color

#### Inherited from

NormalCssProperties.borderBlockEndColor

#### Defined in

node_modules/csstype/index.d.ts:493

___

### borderBlockEndStyle

• `Optional` **borderBlockEndStyle**: [`BorderBlockEndStyle`](../modules/components_Container._internal_.md#borderblockendstyle)

The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-style

#### Inherited from

NormalCssProperties.borderBlockEndStyle

#### Defined in

node_modules/csstype/index.d.ts:507

___

### borderBlockEndWidth

• `Optional` **borderBlockEndWidth**: [`BorderBlockEndWidth`](../modules/components_Container._internal_.md#borderblockendwidth)<`string` \| `number`\>

The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-width

#### Inherited from

NormalCssProperties.borderBlockEndWidth

#### Defined in

node_modules/csstype/index.d.ts:521

___

### borderBlockStart

• `Optional` **borderBlockStart**: [`BorderBlockStart`](../modules/components_Container._internal_.md#borderblockstart)<`string` \| `number`\>

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Inherited from

NormalCssProperties.borderBlockStart

#### Defined in

node_modules/csstype/index.d.ts:5233

___

### borderBlockStartColor

• `Optional` **borderBlockStartColor**: [`BorderBlockStartColor`](../modules/components_Container._internal_.md#borderblockstartcolor)

The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-color

#### Inherited from

NormalCssProperties.borderBlockStartColor

#### Defined in

node_modules/csstype/index.d.ts:535

___

### borderBlockStartStyle

• `Optional` **borderBlockStartStyle**: [`BorderBlockStartStyle`](../modules/components_Container._internal_.md#borderblockstartstyle)

The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-style

#### Inherited from

NormalCssProperties.borderBlockStartStyle

#### Defined in

node_modules/csstype/index.d.ts:549

___

### borderBlockStartWidth

• `Optional` **borderBlockStartWidth**: [`BorderBlockStartWidth`](../modules/components_Container._internal_.md#borderblockstartwidth)<`string` \| `number`\>

The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-width

#### Inherited from

NormalCssProperties.borderBlockStartWidth

#### Defined in

node_modules/csstype/index.d.ts:563

___

### borderBlockStyle

• `Optional` **borderBlockStyle**: [`BorderBlockStyle`](../modules/components_Container._internal_.md#borderblockstyle)

The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-style

#### Inherited from

NormalCssProperties.borderBlockStyle

#### Defined in

node_modules/csstype/index.d.ts:577

___

### borderBlockWidth

• `Optional` **borderBlockWidth**: [`BorderBlockWidth`](../modules/components_Container._internal_.md#borderblockwidth)<`string` \| `number`\>

The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-width

#### Inherited from

NormalCssProperties.borderBlockWidth

#### Defined in

node_modules/csstype/index.d.ts:591

___

### borderBottom

• `Optional` **borderBottom**: [`BorderBottom`](../modules/components_Container._internal_.md#borderbottom)<`string` \| `number`\>

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Inherited from

NormalCssProperties.borderBottom

#### Defined in

node_modules/csstype/index.d.ts:5245

___

### borderBottomColor

• `Optional` **borderBottomColor**: [`BorderBottomColor`](../modules/components_Container._internal_.md#borderbottomcolor)

The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-color

#### Inherited from

NormalCssProperties.borderBottomColor

#### Defined in

node_modules/csstype/index.d.ts:605

___

### borderBottomLeftRadius

• `Optional` **borderBottomLeftRadius**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`string` \| `number`\>

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius

#### Inherited from

NormalCssProperties.borderBottomLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:620

___

### borderBottomRightRadius

• `Optional` **borderBottomRightRadius**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`string` \| `number`\>

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius

#### Inherited from

NormalCssProperties.borderBottomRightRadius

#### Defined in

node_modules/csstype/index.d.ts:635

___

### borderBottomStyle

• `Optional` **borderBottomStyle**: [`BorderBottomStyle`](../modules/components_Container._internal_.md#borderbottomstyle)

The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-style

#### Inherited from

NormalCssProperties.borderBottomStyle

#### Defined in

node_modules/csstype/index.d.ts:649

___

### borderBottomWidth

• `Optional` **borderBottomWidth**: [`BorderBottomWidth`](../modules/components_Container._internal_.md#borderbottomwidth)<`string` \| `number`\>

The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-width

#### Inherited from

NormalCssProperties.borderBottomWidth

#### Defined in

node_modules/csstype/index.d.ts:663

___

### borderCollapse

• `Optional` **borderCollapse**: [`BorderCollapse`](../modules/components_Container._internal_.md#bordercollapse)

The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.

**Syntax**: `collapse | separate`

**Initial value**: `separate`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-collapse

#### Inherited from

NormalCssProperties.borderCollapse

#### Defined in

node_modules/csstype/index.d.ts:677

___

### borderColor

• `Optional` **borderColor**: [`BorderColor`](../modules/components_Container._internal_.md#bordercolor)

The **`border-color`** shorthand CSS property sets the color of an element's border.

**Syntax**: `<color>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-color

#### Inherited from

NormalCssProperties.borderColor

#### Defined in

node_modules/csstype/index.d.ts:5257

___

### borderEndEndRadius

• `Optional` **borderEndEndRadius**: [`BorderEndEndRadius`](../modules/components_Container._internal_.md#borderendendradius)<`string` \| `number`\>

The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius

#### Inherited from

NormalCssProperties.borderEndEndRadius

#### Defined in

node_modules/csstype/index.d.ts:691

___

### borderEndStartRadius

• `Optional` **borderEndStartRadius**: [`BorderEndStartRadius`](../modules/components_Container._internal_.md#borderendstartradius)<`string` \| `number`\>

The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius

#### Inherited from

NormalCssProperties.borderEndStartRadius

#### Defined in

node_modules/csstype/index.d.ts:705

___

### borderImage

• `Optional` **borderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image

#### Inherited from

NormalCssProperties.borderImage

#### Defined in

node_modules/csstype/index.d.ts:5270

___

### borderImageOutset

• `Optional` **borderImageOutset**: [`BorderImageOutset`](../modules/components_Container._internal_.md#borderimageoutset)<`string` \| `number`\>

The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-outset

#### Inherited from

NormalCssProperties.borderImageOutset

#### Defined in

node_modules/csstype/index.d.ts:719

___

### borderImageRepeat

• `Optional` **borderImageRepeat**: [`BorderImageRepeat`](../modules/components_Container._internal_.md#borderimagerepeat)

The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-repeat

#### Inherited from

NormalCssProperties.borderImageRepeat

#### Defined in

node_modules/csstype/index.d.ts:733

___

### borderImageSlice

• `Optional` **borderImageSlice**: [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice)

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-slice

#### Inherited from

NormalCssProperties.borderImageSlice

#### Defined in

node_modules/csstype/index.d.ts:747

___

### borderImageSource

• `Optional` **borderImageSource**: [`BorderImageSource`](../modules/components_Container._internal_.md#borderimagesource)

The **`border-image-source`** CSS property sets the source image used to create an element's border image.

**Syntax**: `none | <image>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-source

#### Inherited from

NormalCssProperties.borderImageSource

#### Defined in

node_modules/csstype/index.d.ts:761

___

### borderImageWidth

• `Optional` **borderImageWidth**: [`BorderImageWidth`](../modules/components_Container._internal_.md#borderimagewidth)<`string` \| `number`\>

The **`border-image-width`** CSS property sets the width of an element's border image.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `1`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **13**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-width

#### Inherited from

NormalCssProperties.borderImageWidth

#### Defined in

node_modules/csstype/index.d.ts:775

___

### borderInline

• `Optional` **borderInline**: [`BorderInline`](../modules/components_Container._internal_.md#borderinline)<`string` \| `number`\>

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Inherited from

NormalCssProperties.borderInline

#### Defined in

node_modules/csstype/index.d.ts:5282

___

### borderInlineColor

• `Optional` **borderInlineColor**: [`BorderInlineColor`](../modules/components_Container._internal_.md#borderinlinecolor)

The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-color

#### Inherited from

NormalCssProperties.borderInlineColor

#### Defined in

node_modules/csstype/index.d.ts:789

___

### borderInlineEnd

• `Optional` **borderInlineEnd**: [`BorderInlineEnd`](../modules/components_Container._internal_.md#borderinlineend)<`string` \| `number`\>

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Inherited from

NormalCssProperties.borderInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:5294

___

### borderInlineEndColor

• `Optional` **borderInlineEndColor**: [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor)

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-color)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color

#### Inherited from

NormalCssProperties.borderInlineEndColor

#### Defined in

node_modules/csstype/index.d.ts:804

___

### borderInlineEndStyle

• `Optional` **borderInlineEndStyle**: [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle)

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-style)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style

#### Inherited from

NormalCssProperties.borderInlineEndStyle

#### Defined in

node_modules/csstype/index.d.ts:819

___

### borderInlineEndWidth

• `Optional` **borderInlineEndWidth**: [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`string` \| `number`\>

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-width)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width

#### Inherited from

NormalCssProperties.borderInlineEndWidth

#### Defined in

node_modules/csstype/index.d.ts:834

___

### borderInlineStart

• `Optional` **borderInlineStart**: [`BorderInlineStart`](../modules/components_Container._internal_.md#borderinlinestart)<`string` \| `number`\>

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Inherited from

NormalCssProperties.borderInlineStart

#### Defined in

node_modules/csstype/index.d.ts:5306

___

### borderInlineStartColor

• `Optional` **borderInlineStartColor**: [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor)

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |            Firefox            |  Safari  |  Edge  | IE  |
| :----: | :---------------------------: | :------: | :----: | :-: |
| **69** |            **41**             | **12.1** | **79** | No  |
|        | 3 _(-moz-border-start-color)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color

#### Inherited from

NormalCssProperties.borderInlineStartColor

#### Defined in

node_modules/csstype/index.d.ts:849

___

### borderInlineStartStyle

• `Optional` **borderInlineStartStyle**: [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle)

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |            Firefox            |  Safari  |  Edge  | IE  |
| :----: | :---------------------------: | :------: | :----: | :-: |
| **69** |            **41**             | **12.1** | **79** | No  |
|        | 3 _(-moz-border-start-style)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style

#### Inherited from

NormalCssProperties.borderInlineStartStyle

#### Defined in

node_modules/csstype/index.d.ts:864

___

### borderInlineStartWidth

• `Optional` **borderInlineStartWidth**: [`BorderInlineStartWidth`](../modules/components_Container._internal_.md#borderinlinestartwidth)<`string` \| `number`\>

The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width

#### Inherited from

NormalCssProperties.borderInlineStartWidth

#### Defined in

node_modules/csstype/index.d.ts:878

___

### borderInlineStyle

• `Optional` **borderInlineStyle**: [`BorderInlineStyle`](../modules/components_Container._internal_.md#borderinlinestyle)

The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-style

#### Inherited from

NormalCssProperties.borderInlineStyle

#### Defined in

node_modules/csstype/index.d.ts:892

___

### borderInlineWidth

• `Optional` **borderInlineWidth**: [`BorderInlineWidth`](../modules/components_Container._internal_.md#borderinlinewidth)<`string` \| `number`\>

The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-width

#### Inherited from

NormalCssProperties.borderInlineWidth

#### Defined in

node_modules/csstype/index.d.ts:906

___

### borderLeft

• `Optional` **borderLeft**: [`BorderLeft`](../modules/components_Container._internal_.md#borderleft)<`string` \| `number`\>

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left

#### Inherited from

NormalCssProperties.borderLeft

#### Defined in

node_modules/csstype/index.d.ts:5318

___

### borderLeftColor

• `Optional` **borderLeftColor**: [`BorderLeftColor`](../modules/components_Container._internal_.md#borderleftcolor)

The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-color

#### Inherited from

NormalCssProperties.borderLeftColor

#### Defined in

node_modules/csstype/index.d.ts:920

___

### borderLeftStyle

• `Optional` **borderLeftStyle**: [`BorderLeftStyle`](../modules/components_Container._internal_.md#borderleftstyle)

The **`border-left-style`** CSS property sets the line style of an element's left `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-style

#### Inherited from

NormalCssProperties.borderLeftStyle

#### Defined in

node_modules/csstype/index.d.ts:934

___

### borderLeftWidth

• `Optional` **borderLeftWidth**: [`BorderLeftWidth`](../modules/components_Container._internal_.md#borderleftwidth)<`string` \| `number`\>

The **`border-left-width`** CSS property sets the width of the left border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-width

#### Inherited from

NormalCssProperties.borderLeftWidth

#### Defined in

node_modules/csstype/index.d.ts:948

___

### borderRadius

• `Optional` **borderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`string` \| `number`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Inherited from

NormalCssProperties.borderRadius

#### Defined in

node_modules/csstype/index.d.ts:5331

___

### borderRight

• `Optional` **borderRight**: [`BorderRight`](../modules/components_Container._internal_.md#borderright)<`string` \| `number`\>

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right

#### Inherited from

NormalCssProperties.borderRight

#### Defined in

node_modules/csstype/index.d.ts:5343

___

### borderRightColor

• `Optional` **borderRightColor**: [`BorderRightColor`](../modules/components_Container._internal_.md#borderrightcolor)

The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-color

#### Inherited from

NormalCssProperties.borderRightColor

#### Defined in

node_modules/csstype/index.d.ts:962

___

### borderRightStyle

• `Optional` **borderRightStyle**: [`BorderRightStyle`](../modules/components_Container._internal_.md#borderrightstyle)

The **`border-right-style`** CSS property sets the line style of an element's right `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-style

#### Inherited from

NormalCssProperties.borderRightStyle

#### Defined in

node_modules/csstype/index.d.ts:976

___

### borderRightWidth

• `Optional` **borderRightWidth**: [`BorderRightWidth`](../modules/components_Container._internal_.md#borderrightwidth)<`string` \| `number`\>

The **`border-right-width`** CSS property sets the width of the right border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-width

#### Inherited from

NormalCssProperties.borderRightWidth

#### Defined in

node_modules/csstype/index.d.ts:990

___

### borderSpacing

• `Optional` **borderSpacing**: [`BorderSpacing`](../modules/components_Container._internal_.md#borderspacing)<`string` \| `number`\>

The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.

**Syntax**: `<length> <length>?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-spacing

#### Inherited from

NormalCssProperties.borderSpacing

#### Defined in

node_modules/csstype/index.d.ts:1004

___

### borderStartEndRadius

• `Optional` **borderStartEndRadius**: [`BorderStartEndRadius`](../modules/components_Container._internal_.md#borderstartendradius)<`string` \| `number`\>

The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius

#### Inherited from

NormalCssProperties.borderStartEndRadius

#### Defined in

node_modules/csstype/index.d.ts:1018

___

### borderStartStartRadius

• `Optional` **borderStartStartRadius**: [`BorderStartStartRadius`](../modules/components_Container._internal_.md#borderstartstartradius)<`string` \| `number`\>

The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius

#### Inherited from

NormalCssProperties.borderStartStartRadius

#### Defined in

node_modules/csstype/index.d.ts:1032

___

### borderStyle

• `Optional` **borderStyle**: [`BorderStyle`](../modules/components_Container._internal_.md#borderstyle)

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-style

#### Inherited from

NormalCssProperties.borderStyle

#### Defined in

node_modules/csstype/index.d.ts:5355

___

### borderTop

• `Optional` **borderTop**: [`BorderTop`](../modules/components_Container._internal_.md#bordertop)<`string` \| `number`\>

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top

#### Inherited from

NormalCssProperties.borderTop

#### Defined in

node_modules/csstype/index.d.ts:5367

___

### borderTopColor

• `Optional` **borderTopColor**: [`BorderTopColor`](../modules/components_Container._internal_.md#bordertopcolor)

The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-color

#### Inherited from

NormalCssProperties.borderTopColor

#### Defined in

node_modules/csstype/index.d.ts:1046

___

### borderTopLeftRadius

• `Optional` **borderTopLeftRadius**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`string` \| `number`\>

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius

#### Inherited from

NormalCssProperties.borderTopLeftRadius

#### Defined in

node_modules/csstype/index.d.ts:1061

___

### borderTopRightRadius

• `Optional` **borderTopRightRadius**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`string` \| `number`\>

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius

#### Inherited from

NormalCssProperties.borderTopRightRadius

#### Defined in

node_modules/csstype/index.d.ts:1076

___

### borderTopStyle

• `Optional` **borderTopStyle**: [`BorderTopStyle`](../modules/components_Container._internal_.md#bordertopstyle)

The **`border-top-style`** CSS property sets the line style of an element's top `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-style

#### Inherited from

NormalCssProperties.borderTopStyle

#### Defined in

node_modules/csstype/index.d.ts:1090

___

### borderTopWidth

• `Optional` **borderTopWidth**: [`BorderTopWidth`](../modules/components_Container._internal_.md#bordertopwidth)<`string` \| `number`\>

The **`border-top-width`** CSS property sets the width of the top border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-width

#### Inherited from

NormalCssProperties.borderTopWidth

#### Defined in

node_modules/csstype/index.d.ts:1104

___

### borderWidth

• `Optional` **borderWidth**: [`BorderWidth`](../modules/components_Container._internal_.md#borderwidth)<`string` \| `number`\>

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-width

#### Inherited from

NormalCssProperties.borderWidth

#### Defined in

node_modules/csstype/index.d.ts:5379

___

### bottom

• `Optional` **bottom**: [`Bottom`](../modules/components_Container._internal_.md#bottom)<`string` \| `number`\>

The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/bottom

#### Inherited from

NormalCssProperties.bottom

#### Defined in

node_modules/csstype/index.d.ts:1118

___

### boxAlign

• `Optional` **boxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign)

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxAlign

#### Defined in

node_modules/csstype/index.d.ts:7708

___

### boxDecorationBreak

• `Optional` **boxDecorationBreak**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak)

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

|    Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :----------: | :-----: | :---------: | :----------: | :-: |
| **22** _-x-_ | **32**  | **7** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-decoration-break

#### Inherited from

NormalCssProperties.boxDecorationBreak

#### Defined in

node_modules/csstype/index.d.ts:1132

___

### boxDirection

• `Optional` **boxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection)

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxDirection

#### Defined in

node_modules/csstype/index.d.ts:7718

___

### boxFlex

• `Optional` **boxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex)

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxFlex

#### Defined in

node_modules/csstype/index.d.ts:7728

___

### boxFlexGroup

• `Optional` **boxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup)

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:7738

___

### boxLines

• `Optional` **boxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines)

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxLines

#### Defined in

node_modules/csstype/index.d.ts:7748

___

### boxOrdinalGroup

• `Optional` **boxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup)

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:7758

___

### boxOrient

• `Optional` **boxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient)

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

NormalCssProperties.boxOrient

#### Defined in

node_modules/csstype/index.d.ts:7768

___

### boxPack

• `Optional` **boxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack)

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

NormalCssProperties.boxPack

#### Defined in

node_modules/csstype/index.d.ts:7778

___

### boxShadow

• `Optional` **boxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow)

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  |  **4**  | **5.1** | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-shadow

#### Inherited from

NormalCssProperties.boxShadow

#### Defined in

node_modules/csstype/index.d.ts:1147

___

### boxSizing

• `Optional` **boxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing)

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  | **29**  | **5.1** | **12** | **8** |
| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-sizing

#### Inherited from

NormalCssProperties.boxSizing

#### Defined in

node_modules/csstype/index.d.ts:1162

___

### breakAfter

• `Optional` **breakAfter**: [`BreakAfter`](../modules/components_Container._internal_.md#breakafter)

The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`

**Initial value**: `auto`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  |   No   | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/break-after

#### Inherited from

NormalCssProperties.breakAfter

#### Defined in

node_modules/csstype/index.d.ts:1190

___

### breakBefore

• `Optional` **breakBefore**: [`BreakBefore`](../modules/components_Container._internal_.md#breakbefore)

The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`

**Initial value**: `auto`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  |   No   | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/break-before

#### Inherited from

NormalCssProperties.breakBefore

#### Defined in

node_modules/csstype/index.d.ts:1218

___

### breakInside

• `Optional` **breakInside**: [`BreakInside`](../modules/components_Container._internal_.md#breakinside)

The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.

**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`

**Initial value**: `auto`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/break-inside

#### Inherited from

NormalCssProperties.breakInside

#### Defined in

node_modules/csstype/index.d.ts:1246

___

### captionSide

• `Optional` **captionSide**: [`CaptionSide`](../modules/components_Container._internal_.md#captionside)

The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.

**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`

**Initial value**: `top`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/caption-side

#### Inherited from

NormalCssProperties.captionSide

#### Defined in

node_modules/csstype/index.d.ts:1260

___

### caretColor

• `Optional` **caretColor**: [`CaretColor`](../modules/components_Container._internal_.md#caretcolor)

The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **53**  | **11.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/caret-color

#### Inherited from

NormalCssProperties.caretColor

#### Defined in

node_modules/csstype/index.d.ts:1274

___

### clear

• `Optional` **clear**: [`Clear`](../modules/components_Container._internal_.md#clear)

The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.

**Syntax**: `none | left | right | both | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/clear

#### Inherited from

NormalCssProperties.clear

#### Defined in

node_modules/csstype/index.d.ts:1288

___

### clip

• `Optional` **clip**: [`Clip`](../modules/components_Container._internal_.md#clip)

The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.clip

#### Defined in

node_modules/csstype/index.d.ts:7788

___

### clipPath

• `Optional` **clipPath**: [`ClipPath`](../modules/components_Container._internal_.md#clippath)

The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **55**  | **3.5** |  **9.1**  | **12** | **10** |
| 23 _-x-_ |         | 6.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/clip-path

#### Inherited from

NormalCssProperties.clipPath

#### Defined in

node_modules/csstype/index.d.ts:1303

___

### clipRule

• `Optional` **clipRule**: [`ClipRule`](../modules/components_Container._internal_.md#cliprule)

#### Inherited from

NormalCssProperties.clipRule

#### Defined in

node_modules/csstype/index.d.ts:8752

___

### color

• `Optional` **color**: [`Color`](../modules/components_Container._internal_.md#color)

The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.

**Syntax**: `<color>`

**Initial value**: Varies from one browser to another

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color

#### Inherited from

NormalCssProperties.color

#### Defined in

node_modules/csstype/index.d.ts:1317

___

### colorAdjust

• `Optional` **colorAdjust**: [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust)

The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |
| :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |
| **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color-adjust

#### Inherited from

NormalCssProperties.colorAdjust

#### Defined in

node_modules/csstype/index.d.ts:1331

___

### colorInterpolation

• `Optional` **colorInterpolation**: [`ColorInterpolation`](../modules/components_Container._internal_.md#colorinterpolation)

#### Inherited from

NormalCssProperties.colorInterpolation

#### Defined in

node_modules/csstype/index.d.ts:8754

___

### colorRendering

• `Optional` **colorRendering**: [`ColorRendering`](../modules/components_Container._internal_.md#colorrendering)

#### Inherited from

NormalCssProperties.colorRendering

#### Defined in

node_modules/csstype/index.d.ts:8755

___

### colorScheme

• `Optional` **colorScheme**: [`ColorScheme`](../modules/components_Container._internal_.md#colorscheme)

The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

**Syntax**: `normal | [ light | dark | <custom-ident> ]+`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **81** |   No    | **13** | **81** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color-scheme

#### Inherited from

NormalCssProperties.colorScheme

#### Defined in

node_modules/csstype/index.d.ts:1345

___

### columnCount

• `Optional` **columnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount)

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-count

#### Inherited from

NormalCssProperties.columnCount

#### Defined in

node_modules/csstype/index.d.ts:1360

___

### columnFill

• `Optional` **columnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill)

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 8 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-fill

#### Inherited from

NormalCssProperties.columnFill

#### Defined in

node_modules/csstype/index.d.ts:1375

___

### columnGap

• `Optional` **columnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`string` \| `number`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **84** | **63**  | **14.1** | **84** | No  |

---

_Supported in Grid Layout_

|         Chrome         |        Firefox         |          Safari          |  Edge  | IE  |
| :--------------------: | :--------------------: | :----------------------: | :----: | :-: |
|         **66**         |         **61**         |          **12**          | **16** | No  |
| 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |

---

_Supported in Multi-column Layout_

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  | **10**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-gap

#### Inherited from

NormalCssProperties.columnGap

#### Defined in

node_modules/csstype/index.d.ts:1413

___

### columnRule

• `Optional` **columnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`string` \| `number`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Inherited from

NormalCssProperties.columnRule

#### Defined in

node_modules/csstype/index.d.ts:5392

___

### columnRuleColor

• `Optional` **columnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor)

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-color

#### Inherited from

NormalCssProperties.columnRuleColor

#### Defined in

node_modules/csstype/index.d.ts:1428

___

### columnRuleStyle

• `Optional` **columnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle)

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-style

#### Inherited from

NormalCssProperties.columnRuleStyle

#### Defined in

node_modules/csstype/index.d.ts:1443

___

### columnRuleWidth

• `Optional` **columnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`string` \| `number`\>

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-width

#### Inherited from

NormalCssProperties.columnRuleWidth

#### Defined in

node_modules/csstype/index.d.ts:1458

___

### columnSpan

• `Optional` **columnSpan**: [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan)

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **50**  | **71**  |   **9**   | **12** | **10** |
| 6 _-x-_ |         | 5.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-span

#### Inherited from

NormalCssProperties.columnSpan

#### Defined in

node_modules/csstype/index.d.ts:1473

___

### columnWidth

• `Optional` **columnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`string` \| `number`\>

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **50**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-width

#### Inherited from

NormalCssProperties.columnWidth

#### Defined in

node_modules/csstype/index.d.ts:1488

___

### columns

• `Optional` **columns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`string` \| `number`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/columns

#### Inherited from

NormalCssProperties.columns

#### Defined in

node_modules/csstype/index.d.ts:5405

___

### contain

• `Optional` **contain**: [`Contain`](../modules/components_Container._internal_.md#contain)

The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.

**Syntax**: `none | strict | content | [ size || layout || style || paint ]`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **52** | **69**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/contain

#### Inherited from

NormalCssProperties.contain

#### Defined in

node_modules/csstype/index.d.ts:1502

___

### content

• `Optional` **content**: [`Content`](../modules/components_Container._internal_.md#content)

The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._

**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/content

#### Inherited from

NormalCssProperties.content

#### Defined in

node_modules/csstype/index.d.ts:1516

___

### contentVisibility

• `Optional` **contentVisibility**: [`ContentVisibility`](../modules/components_Container._internal_.md#contentvisibility)

The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.

**Syntax**: `visible | auto | hidden`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** |   No    |   No   | **85** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/content-visibility

#### Inherited from

NormalCssProperties.contentVisibility

#### Defined in

node_modules/csstype/index.d.ts:1530

___

### counterIncrement

• `Optional` **counterIncrement**: [`CounterIncrement`](../modules/components_Container._internal_.md#counterincrement)

The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-increment

#### Inherited from

NormalCssProperties.counterIncrement

#### Defined in

node_modules/csstype/index.d.ts:1544

___

### counterReset

• `Optional` **counterReset**: [`CounterReset`](../modules/components_Container._internal_.md#counterreset)

The **`counter-reset`** CSS property resets a CSS counter to a given value.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-reset

#### Inherited from

NormalCssProperties.counterReset

#### Defined in

node_modules/csstype/index.d.ts:1558

___

### counterSet

• `Optional` **counterSet**: [`CounterSet`](../modules/components_Container._internal_.md#counterset)

The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** | **68**  |   No   | **85** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-set

#### Inherited from

NormalCssProperties.counterSet

#### Defined in

node_modules/csstype/index.d.ts:1572

___

### cursor

• `Optional` **cursor**: [`Cursor`](../modules/components_Container._internal_.md#cursor)

The **`cursor`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.

**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/cursor

#### Inherited from

NormalCssProperties.cursor

#### Defined in

node_modules/csstype/index.d.ts:1586

___

### direction

• `Optional` **direction**: [`Direction`](../modules/components_Container._internal_.md#direction)

The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).

**Syntax**: `ltr | rtl`

**Initial value**: `ltr`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **2**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/direction

#### Inherited from

NormalCssProperties.direction

#### Defined in

node_modules/csstype/index.d.ts:1600

___

### display

• `Optional` **display**: [`Display`](../modules/components_Container._internal_.md#display)

The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`

**Initial value**: `inline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/display

#### Inherited from

NormalCssProperties.display

#### Defined in

node_modules/csstype/index.d.ts:1614

___

### dominantBaseline

• `Optional` **dominantBaseline**: [`DominantBaseline`](../modules/components_Container._internal_.md#dominantbaseline)

#### Inherited from

NormalCssProperties.dominantBaseline

#### Defined in

node_modules/csstype/index.d.ts:8759

___

### emptyCells

• `Optional` **emptyCells**: [`EmptyCells`](../modules/components_Container._internal_.md#emptycells)

The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.

**Syntax**: `show | hide`

**Initial value**: `show`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/empty-cells

#### Inherited from

NormalCssProperties.emptyCells

#### Defined in

node_modules/csstype/index.d.ts:1628

___

### fill

• `Optional` **fill**: [`Fill`](../modules/components_Container._internal_.md#fill)

#### Inherited from

NormalCssProperties.fill

#### Defined in

node_modules/csstype/index.d.ts:8760

___

### fillOpacity

• `Optional` **fillOpacity**: [`FillOpacity`](../modules/components_Container._internal_.md#fillopacity)

#### Inherited from

NormalCssProperties.fillOpacity

#### Defined in

node_modules/csstype/index.d.ts:8761

___

### fillRule

• `Optional` **fillRule**: [`FillRule`](../modules/components_Container._internal_.md#fillrule)

#### Inherited from

NormalCssProperties.fillRule

#### Defined in

node_modules/csstype/index.d.ts:8762

___

### filter

• `Optional` **filter**: [`Filter`](../modules/components_Container._internal_.md#filter)

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **53**  | **35**  | **9.1** | **12** | No  |
| 18 _-x-_ |         | 6 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/filter

#### Inherited from

NormalCssProperties.filter

#### Defined in

node_modules/csstype/index.d.ts:1643

___

### flex

• `Optional` **flex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`string` \| `number`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex

#### Inherited from

NormalCssProperties.flex

#### Defined in

node_modules/csstype/index.d.ts:5418

___

### flexBasis

• `Optional` **flexBasis**: [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`string` \| `number`\>

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **22**  |  **9**  | **12** | **11** |
| 22 _-x-_ |         | 7 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-basis

#### Inherited from

NormalCssProperties.flexBasis

#### Defined in

node_modules/csstype/index.d.ts:1658

___

### flexDirection

• `Optional` **flexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-direction

#### Inherited from

NormalCssProperties.flexDirection

#### Defined in

node_modules/csstype/index.d.ts:1673

___

### flexFlow

• `Optional` **flexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Inherited from

NormalCssProperties.flexFlow

#### Defined in

node_modules/csstype/index.d.ts:5431

___

### flexGrow

• `Optional` **flexGrow**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |            IE            |
| :------: | :-----: | :-----: | :----: | :----------------------: |
|  **29**  | **20**  |  **9**  | **12** |          **11**          |
| 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-grow

#### Inherited from

NormalCssProperties.flexGrow

#### Defined in

node_modules/csstype/index.d.ts:1688

___

### flexShrink

• `Optional` **flexShrink**: [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink)

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **10** |
| 22 _-x-_ |         | 8 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-shrink

#### Inherited from

NormalCssProperties.flexShrink

#### Defined in

node_modules/csstype/index.d.ts:1703

___

### flexWrap

• `Optional` **flexWrap**: [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap)

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **29**  | **28**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-wrap

#### Inherited from

NormalCssProperties.flexWrap

#### Defined in

node_modules/csstype/index.d.ts:1718

___

### float

• `Optional` **float**: [`Float`](../modules/components_Container._internal_.md#float)

The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

**Syntax**: `left | right | none | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/float

#### Inherited from

NormalCssProperties.float

#### Defined in

node_modules/csstype/index.d.ts:1732

___

### floodColor

• `Optional` **floodColor**: [`FloodColor`](../modules/components_Container._internal_.md#floodcolor)

#### Inherited from

NormalCssProperties.floodColor

#### Defined in

node_modules/csstype/index.d.ts:8764

___

### floodOpacity

• `Optional` **floodOpacity**: [`FloodOpacity`](../modules/components_Container._internal_.md#floodopacity)

#### Inherited from

NormalCssProperties.floodOpacity

#### Defined in

node_modules/csstype/index.d.ts:8765

___

### font

• `Optional` **font**: [`Font`](../modules/components_Container._internal_.md#font)

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font

#### Inherited from

NormalCssProperties.font

#### Defined in

node_modules/csstype/index.d.ts:5443

___

### fontFamily

• `Optional` **fontFamily**: [`FontFamily`](../modules/components_Container._internal_.md#fontfamily)

The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

**Syntax**: `[ <family-name> | <generic-family> ]#`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-family

#### Inherited from

NormalCssProperties.fontFamily

#### Defined in

node_modules/csstype/index.d.ts:1746

___

### fontFeatureSettings

• `Optional` **fontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings)

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **48**  |  **34**  | **9.1** | **15** | **10** |
| 16 _-x-_ | 15 _-x-_ |         |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-feature-settings

#### Inherited from

NormalCssProperties.fontFeatureSettings

#### Defined in

node_modules/csstype/index.d.ts:1761

___

### fontKerning

• `Optional` **fontKerning**: [`FontKerning`](../modules/components_Container._internal_.md#fontkerning)

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **33** | **32**  |  **9**  | **79** | No  |
|        |         | 6 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-kerning

#### Inherited from

NormalCssProperties.fontKerning

#### Defined in

node_modules/csstype/index.d.ts:1776

___

### fontLanguageOverride

• `Optional` **fontLanguageOverride**: [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride)

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  |   No   |  No  | No  |
|        | 4 _-x-_ |        |      |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-language-override

#### Inherited from

NormalCssProperties.fontLanguageOverride

#### Defined in

node_modules/csstype/index.d.ts:1791

___

### fontOpticalSizing

• `Optional` **fontOpticalSizing**: [`FontOpticalSizing`](../modules/components_Container._internal_.md#fontopticalsizing)

The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **62**  | **11** | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing

#### Inherited from

NormalCssProperties.fontOpticalSizing

#### Defined in

node_modules/csstype/index.d.ts:1805

___

### fontSize

• `Optional` **fontSize**: [`FontSize`](../modules/components_Container._internal_.md#fontsize)<`string` \| `number`\>

The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.

**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-size

#### Inherited from

NormalCssProperties.fontSize

#### Defined in

node_modules/csstype/index.d.ts:1819

___

### fontSizeAdjust

• `Optional` **fontSizeAdjust**: [`FontSizeAdjust`](../modules/components_Container._internal_.md#fontsizeadjust)

The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).

**Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |  **1**  |   No   | n/a  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-size-adjust

#### Inherited from

NormalCssProperties.fontSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:1833

___

### fontSmooth

• `Optional` **fontSmooth**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`string` \| `number`\>

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
| :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-smooth

#### Inherited from

NormalCssProperties.fontSmooth

#### Defined in

node_modules/csstype/index.d.ts:1847

___

### fontStretch

• `Optional` **fontStretch**: [`FontStretch`](../modules/components_Container._internal_.md#fontstretch)

The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.

**Syntax**: `<font-stretch-absolute>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **60** |  **9**  | **11** | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-stretch

#### Inherited from

NormalCssProperties.fontStretch

#### Defined in

node_modules/csstype/index.d.ts:1861

___

### fontStyle

• `Optional` **fontStyle**: [`FontStyle`](../modules/components_Container._internal_.md#fontstyle)

The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.

**Syntax**: `normal | italic | oblique <angle>?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-style

#### Inherited from

NormalCssProperties.fontStyle

#### Defined in

node_modules/csstype/index.d.ts:1875

___

### fontSynthesis

• `Optional` **fontSynthesis**: [`FontSynthesis`](../modules/components_Container._internal_.md#fontsynthesis)

The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.

**Syntax**: `none | [ weight || style || small-caps ]`

**Initial value**: `weight style`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  | **9**  |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-synthesis

#### Inherited from

NormalCssProperties.fontSynthesis

#### Defined in

node_modules/csstype/index.d.ts:1889

___

### fontVariant

• `Optional` **fontVariant**: [`FontVariant`](../modules/components_Container._internal_.md#fontvariant)

The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant

#### Inherited from

NormalCssProperties.fontVariant

#### Defined in

node_modules/csstype/index.d.ts:1903

___

### fontVariantAlternates

• `Optional` **fontVariantAlternates**: [`FontVariantAlternates`](../modules/components_Container._internal_.md#fontvariantalternates)

The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.

**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

NormalCssProperties.fontVariantAlternates

#### Defined in

node_modules/csstype/index.d.ts:7798

___

### fontVariantCaps

• `Optional` **fontVariantCaps**: [`FontVariantCaps`](../modules/components_Container._internal_.md#fontvariantcaps)

The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.

**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-caps

#### Inherited from

NormalCssProperties.fontVariantCaps

#### Defined in

node_modules/csstype/index.d.ts:1917

___

### fontVariantEastAsian

• `Optional` **fontVariantEastAsian**: [`FontVariantEastAsian`](../modules/components_Container._internal_.md#fontvarianteastasian)

The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.

**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **63** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian

#### Inherited from

NormalCssProperties.fontVariantEastAsian

#### Defined in

node_modules/csstype/index.d.ts:1931

___

### fontVariantLigatures

• `Optional` **fontVariantLigatures**: [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures)

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **34**  | **34**  | **9.1** | **79** | No  |
| 31 _-x-_ |         | 7 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures

#### Inherited from

NormalCssProperties.fontVariantLigatures

#### Defined in

node_modules/csstype/index.d.ts:1946

___

### fontVariantNumeric

• `Optional` **fontVariantNumeric**: [`FontVariantNumeric`](../modules/components_Container._internal_.md#fontvariantnumeric)

The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric

#### Inherited from

NormalCssProperties.fontVariantNumeric

#### Defined in

node_modules/csstype/index.d.ts:1960

___

### fontVariantPosition

• `Optional` **fontVariantPosition**: [`FontVariantPosition`](../modules/components_Container._internal_.md#fontvariantposition)

The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.

**Syntax**: `normal | sub | super`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
|   No   | **34**  | **9.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-position

#### Inherited from

NormalCssProperties.fontVariantPosition

#### Defined in

node_modules/csstype/index.d.ts:1974

___

### fontVariationSettings

• `Optional` **fontVariationSettings**: [`FontVariationSettings`](../modules/components_Container._internal_.md#fontvariationsettings)

The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

**Syntax**: `normal | [ <string> <number> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **62** | **62**  | **11** | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variation-settings

#### Inherited from

NormalCssProperties.fontVariationSettings

#### Defined in

node_modules/csstype/index.d.ts:1988

___

### fontWeight

• `Optional` **fontWeight**: [`FontWeight`](../modules/components_Container._internal_.md#fontweight)

The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.

**Syntax**: `<font-weight-absolute> | bolder | lighter`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-weight

#### Inherited from

NormalCssProperties.fontWeight

#### Defined in

node_modules/csstype/index.d.ts:2002

___

### forcedColorAdjust

• `Optional` **forcedColorAdjust**: [`ForcedColorAdjust`](../modules/components_Container._internal_.md#forcedcoloradjust)

The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |              Edge               |                 IE                  |
| :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
| **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
|        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust

#### Inherited from

NormalCssProperties.forcedColorAdjust

#### Defined in

node_modules/csstype/index.d.ts:2017

___

### gap

• `Optional` **gap**: [`Gap`](../modules/components_Container._internal_.md#gap)<`string` \| `number`\>

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'row-gap'> <'column-gap'>?`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **84** | **63**  | **14.1** | **84** | No  |

---

_Supported in Grid Layout_

|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |
| :-------------: | :-------------: | :---------------: | :----: | :-: |
|     **66**      |     **61**      |      **12**       | **16** | No  |
| 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **66** | **61**  |   No   | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/gap

#### Inherited from

NormalCssProperties.gap

#### Defined in

node_modules/csstype/index.d.ts:5478

___

### glyphOrientationVertical

• `Optional` **glyphOrientationVertical**: [`GlyphOrientationVertical`](../modules/components_Container._internal_.md#glyphorientationvertical)

#### Inherited from

NormalCssProperties.glyphOrientationVertical

#### Defined in

node_modules/csstype/index.d.ts:8774

___

### grid

• `Optional` **grid**: [`Grid`](../modules/components_Container._internal_.md#grid)

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid

#### Inherited from

NormalCssProperties.grid

#### Defined in

node_modules/csstype/index.d.ts:5490

___

### gridArea

• `Optional` **gridArea**: [`GridArea`](../modules/components_Container._internal_.md#gridarea)

The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Inherited from

NormalCssProperties.gridArea

#### Defined in

node_modules/csstype/index.d.ts:5502

___

### gridAutoColumns

• `Optional` **gridAutoColumns**: [`GridAutoColumns`](../modules/components_Container._internal_.md#gridautocolumns)<`string` \| `number`\>

The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns

#### Inherited from

NormalCssProperties.gridAutoColumns

#### Defined in

node_modules/csstype/index.d.ts:2031

___

### gridAutoFlow

• `Optional` **gridAutoFlow**: [`GridAutoFlow`](../modules/components_Container._internal_.md#gridautoflow)

The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

**Syntax**: `[ row | column ] || dense`

**Initial value**: `row`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow

#### Inherited from

NormalCssProperties.gridAutoFlow

#### Defined in

node_modules/csstype/index.d.ts:2045

___

### gridAutoRows

• `Optional` **gridAutoRows**: [`GridAutoRows`](../modules/components_Container._internal_.md#gridautorows)<`string` \| `number`\>

The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows

#### Inherited from

NormalCssProperties.gridAutoRows

#### Defined in

node_modules/csstype/index.d.ts:2059

___

### gridColumn

• `Optional` **gridColumn**: [`GridColumn`](../modules/components_Container._internal_.md#gridcolumn)

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Inherited from

NormalCssProperties.gridColumn

#### Defined in

node_modules/csstype/index.d.ts:5514

___

### gridColumnEnd

• `Optional` **gridColumnEnd**: [`GridColumnEnd`](../modules/components_Container._internal_.md#gridcolumnend)

The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column-end

#### Inherited from

NormalCssProperties.gridColumnEnd

#### Defined in

node_modules/csstype/index.d.ts:2073

___

### gridColumnGap

• `Optional` **gridColumnGap**: [`GridColumnGap`](../modules/components_Container._internal_.md#gridcolumngap)<`string` \| `number`\>

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.gridColumnGap

#### Defined in

node_modules/csstype/index.d.ts:7808

___

### gridColumnStart

• `Optional` **gridColumnStart**: [`GridColumnStart`](../modules/components_Container._internal_.md#gridcolumnstart)

The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column-start

#### Inherited from

NormalCssProperties.gridColumnStart

#### Defined in

node_modules/csstype/index.d.ts:2087

___

### gridGap

• `Optional` **gridGap**: [`GridGap`](../modules/components_Container._internal_.md#gridgap)<`string` \| `number`\>

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`

**`deprecated`**

#### Inherited from

NormalCssProperties.gridGap

#### Defined in

node_modules/csstype/index.d.ts:7816

___

### gridRow

• `Optional` **gridRow**: [`GridRow`](../modules/components_Container._internal_.md#gridrow)

The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Inherited from

NormalCssProperties.gridRow

#### Defined in

node_modules/csstype/index.d.ts:5526

___

### gridRowEnd

• `Optional` **gridRowEnd**: [`GridRowEnd`](../modules/components_Container._internal_.md#gridrowend)

The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row-end

#### Inherited from

NormalCssProperties.gridRowEnd

#### Defined in

node_modules/csstype/index.d.ts:2101

___

### gridRowGap

• `Optional` **gridRowGap**: [`GridRowGap`](../modules/components_Container._internal_.md#gridrowgap)<`string` \| `number`\>

The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

NormalCssProperties.gridRowGap

#### Defined in

node_modules/csstype/index.d.ts:7826

___

### gridRowStart

• `Optional` **gridRowStart**: [`GridRowStart`](../modules/components_Container._internal_.md#gridrowstart)

The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row-start

#### Inherited from

NormalCssProperties.gridRowStart

#### Defined in

node_modules/csstype/index.d.ts:2115

___

### gridTemplate

• `Optional` **gridTemplate**: [`GridTemplate`](../modules/components_Container._internal_.md#gridtemplate)

The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Inherited from

NormalCssProperties.gridTemplate

#### Defined in

node_modules/csstype/index.d.ts:5538

___

### gridTemplateAreas

• `Optional` **gridTemplateAreas**: [`GridTemplateAreas`](../modules/components_Container._internal_.md#gridtemplateareas)

The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

**Syntax**: `none | <string>+`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-areas

#### Inherited from

NormalCssProperties.gridTemplateAreas

#### Defined in

node_modules/csstype/index.d.ts:2129

___

### gridTemplateColumns

• `Optional` **gridTemplateColumns**: [`GridTemplateColumns`](../modules/components_Container._internal_.md#gridtemplatecolumns)<`string` \| `number`\>

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-columns

#### Inherited from

NormalCssProperties.gridTemplateColumns

#### Defined in

node_modules/csstype/index.d.ts:2143

___

### gridTemplateRows

• `Optional` **gridTemplateRows**: [`GridTemplateRows`](../modules/components_Container._internal_.md#gridtemplaterows)<`string` \| `number`\>

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-rows

#### Inherited from

NormalCssProperties.gridTemplateRows

#### Defined in

node_modules/csstype/index.d.ts:2157

___

### hangingPunctuation

• `Optional` **hangingPunctuation**: [`HangingPunctuation`](../modules/components_Container._internal_.md#hangingpunctuation)

The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.

**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **10** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation

#### Inherited from

NormalCssProperties.hangingPunctuation

#### Defined in

node_modules/csstype/index.d.ts:2171

___

### height

• `Optional` **height**: [`Height`](../modules/components_Container._internal_.md#height)<`string` \| `number`\>

The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/height

#### Inherited from

NormalCssProperties.height

#### Defined in

node_modules/csstype/index.d.ts:2185

___

### hyphens

• `Optional` **hyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

|  Chrome  | Firefox |    Safari     |  Edge  |      IE      |
| :------: | :-----: | :-----------: | :----: | :----------: |
|  **55**  | **43**  | **5.1** _-x-_ | **79** | **10** _-x-_ |
| 13 _-x-_ | 6 _-x-_ |               |        |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/hyphens

#### Inherited from

NormalCssProperties.hyphens

#### Defined in

node_modules/csstype/index.d.ts:2200

___

### imageOrientation

• `Optional` **imageOrientation**: [`ImageOrientation`](../modules/components_Container._internal_.md#imageorientation)

The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.

**Syntax**: `from-image | <angle> | [ <angle>? flip ]`

**Initial value**: `from-image`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **81** | **26**  | **13.1** | **81** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/image-orientation

#### Inherited from

NormalCssProperties.imageOrientation

#### Defined in

node_modules/csstype/index.d.ts:2214

___

### imageRendering

• `Optional` **imageRendering**: [`ImageRendering`](../modules/components_Container._internal_.md#imagerendering)

The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

**Syntax**: `auto | crisp-edges | pixelated`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **13** | **3.6** | **6**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/image-rendering

#### Inherited from

NormalCssProperties.imageRendering

#### Defined in

node_modules/csstype/index.d.ts:2228

___

### imageResolution

• `Optional` **imageResolution**: [`ImageResolution`](../modules/components_Container._internal_.md#imageresolution)

**Syntax**: `[ from-image || <resolution> ] && snap?`

**Initial value**: `1dppx`

#### Inherited from

NormalCssProperties.imageResolution

#### Defined in

node_modules/csstype/index.d.ts:2234

___

### imeMode

• `Optional` **imeMode**: [`ImeMode`](../modules/components_Container._internal_.md#imemode)

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.imeMode

#### Defined in

node_modules/csstype/index.d.ts:7836

___

### initialLetter

• `Optional` **initialLetter**: [`InitialLetter`](../modules/components_Container._internal_.md#initialletter)

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: `normal | [ <number> <integer>? ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **9**  |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/initial-letter

#### Inherited from

NormalCssProperties.initialLetter

#### Defined in

node_modules/csstype/index.d.ts:2248

___

### inlineSize

• `Optional` **inlineSize**: [`InlineSize`](../modules/components_Container._internal_.md#inlinesize)<`string` \| `number`\>

The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inline-size

#### Inherited from

NormalCssProperties.inlineSize

#### Defined in

node_modules/csstype/index.d.ts:2262

___

### inset

• `Optional` **inset**: [`Inset`](../modules/components_Container._internal_.md#inset)<`string` \| `number`\>

The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.

**Syntax**: `<'top'>{1,4}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset

#### Inherited from

NormalCssProperties.inset

#### Defined in

node_modules/csstype/index.d.ts:2276

___

### insetBlock

• `Optional` **insetBlock**: [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`string` \| `number`\>

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block

#### Inherited from

NormalCssProperties.insetBlock

#### Defined in

node_modules/csstype/index.d.ts:2290

___

### insetBlockEnd

• `Optional` **insetBlockEnd**: [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`string` \| `number`\>

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block-end

#### Inherited from

NormalCssProperties.insetBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:2304

___

### insetBlockStart

• `Optional` **insetBlockStart**: [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`string` \| `number`\>

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block-start

#### Inherited from

NormalCssProperties.insetBlockStart

#### Defined in

node_modules/csstype/index.d.ts:2318

___

### insetInline

• `Optional` **insetInline**: [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`string` \| `number`\>

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline

#### Inherited from

NormalCssProperties.insetInline

#### Defined in

node_modules/csstype/index.d.ts:2332

___

### insetInlineEnd

• `Optional` **insetInlineEnd**: [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`string` \| `number`\>

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline-end

#### Inherited from

NormalCssProperties.insetInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:2346

___

### insetInlineStart

• `Optional` **insetInlineStart**: [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`string` \| `number`\>

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline-start

#### Inherited from

NormalCssProperties.insetInlineStart

#### Defined in

node_modules/csstype/index.d.ts:2360

___

### isolation

• `Optional` **isolation**: [`Isolation`](../modules/components_Container._internal_.md#isolation)

The **`isolation`** CSS property determines whether an element must create a new stacking context.

**Syntax**: `auto | isolate`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **36**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/isolation

#### Inherited from

NormalCssProperties.isolation

#### Defined in

node_modules/csstype/index.d.ts:2374

___

### justifyContent

• `Optional` **justifyContent**: [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent)

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

---

_Supported in Flex Layout_

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **52**  | **20**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/justify-content

#### Inherited from

NormalCssProperties.justifyContent

#### Defined in

node_modules/csstype/index.d.ts:2403

___

### justifyItems

• `Optional` **justifyItems**: [`JustifyItems`](../modules/components_Container._internal_.md#justifyitems)

The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`

**Initial value**: `legacy`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **52** | **20**  | **9**  | **12** | **11** |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **45**  | **10.1** | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/justify-items

#### Inherited from

NormalCssProperties.justifyItems

#### Defined in

node_modules/csstype/index.d.ts:2431

___

### justifySelf

• `Optional` **justifySelf**: [`JustifySelf`](../modules/components_Container._internal_.md#justifyself)

The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`

**Initial value**: `auto`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **45**  | **10.1** | **16** | No  |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  |      IE      |
| :----: | :-----: | :------: | :----: | :----------: |
| **57** | **45**  | **10.1** | **16** | **10** _-x-_ |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/justify-self

#### Inherited from

NormalCssProperties.justifySelf

#### Defined in

node_modules/csstype/index.d.ts:2459

___

### justifyTracks

• `Optional` **justifyTracks**: [`JustifyTracks`](../modules/components_Container._internal_.md#justifytracks)

The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.

**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/justify-tracks

#### Inherited from

NormalCssProperties.justifyTracks

#### Defined in

node_modules/csstype/index.d.ts:2473

___

### left

• `Optional` **left**: [`Left`](../modules/components_Container._internal_.md#left)<`string` \| `number`\>

The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/left

#### Inherited from

NormalCssProperties.left

#### Defined in

node_modules/csstype/index.d.ts:2487

___

### letterSpacing

• `Optional` **letterSpacing**: [`LetterSpacing`](../modules/components_Container._internal_.md#letterspacing)<`string` \| `number`\>

The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/letter-spacing

#### Inherited from

NormalCssProperties.letterSpacing

#### Defined in

node_modules/csstype/index.d.ts:2501

___

### lightingColor

• `Optional` **lightingColor**: [`LightingColor`](../modules/components_Container._internal_.md#lightingcolor)

#### Inherited from

NormalCssProperties.lightingColor

#### Defined in

node_modules/csstype/index.d.ts:8777

___

### lineBreak

• `Optional` **lineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE    |
| :-----: | :-----: | :-----: | :----: | :-----: |
| **58**  | **69**  | **11**  | **14** | **5.5** |
| 1 _-x-_ |         | 3 _-x-_ |        |         |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-break

#### Inherited from

NormalCssProperties.lineBreak

#### Defined in

node_modules/csstype/index.d.ts:2516

___

### lineClamp

• `Optional` **lineClamp**: [`LineClamp`](../modules/components_Container._internal_.md#lineclamp)

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.lineClamp

#### Defined in

node_modules/csstype/index.d.ts:5544

___

### lineHeight

• `Optional` **lineHeight**: [`LineHeight`](../modules/components_Container._internal_.md#lineheight)<`string` \| `number`\>

The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

**Syntax**: `normal | <number> | <length> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-height

#### Inherited from

NormalCssProperties.lineHeight

#### Defined in

node_modules/csstype/index.d.ts:2530

___

### lineHeightStep

• `Optional` **lineHeightStep**: [`LineHeightStep`](../modules/components_Container._internal_.md#lineheightstep)<`string` \| `number`\>

The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   | n/a  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-height-step

#### Inherited from

NormalCssProperties.lineHeightStep

#### Defined in

node_modules/csstype/index.d.ts:2544

___

### listStyle

• `Optional` **listStyle**: [`ListStyle`](../modules/components_Container._internal_.md#liststyle)

The **`list-style`** CSS shorthand property allows you set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style

#### Inherited from

NormalCssProperties.listStyle

#### Defined in

node_modules/csstype/index.d.ts:5556

___

### listStyleImage

• `Optional` **listStyleImage**: [`ListStyleImage`](../modules/components_Container._internal_.md#liststyleimage)

The **`list-style-image`** CSS property sets an image to be used as the list item marker.

**Syntax**: `<image> | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-image

#### Inherited from

NormalCssProperties.listStyleImage

#### Defined in

node_modules/csstype/index.d.ts:2558

___

### listStylePosition

• `Optional` **listStylePosition**: [`ListStylePosition`](../modules/components_Container._internal_.md#liststyleposition)

The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.

**Syntax**: `inside | outside`

**Initial value**: `outside`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-position

#### Inherited from

NormalCssProperties.listStylePosition

#### Defined in

node_modules/csstype/index.d.ts:2572

___

### listStyleType

• `Optional` **listStyleType**: [`ListStyleType`](../modules/components_Container._internal_.md#liststyletype)

The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.

**Syntax**: `<counter-style> | <string> | none`

**Initial value**: `disc`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-type

#### Inherited from

NormalCssProperties.listStyleType

#### Defined in

node_modules/csstype/index.d.ts:2586

___

### margin

• `Optional` **margin**: [`Margin`](../modules/components_Container._internal_.md#margin)<`string` \| `number`\>

The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin

#### Inherited from

NormalCssProperties.margin

#### Defined in

node_modules/csstype/index.d.ts:5568

___

### marginBlock

• `Optional` **marginBlock**: [`MarginBlock`](../modules/components_Container._internal_.md#marginblock)<`string` \| `number`\>

The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block

#### Inherited from

NormalCssProperties.marginBlock

#### Defined in

node_modules/csstype/index.d.ts:2600

___

### marginBlockEnd

• `Optional` **marginBlockEnd**: [`MarginBlockEnd`](../modules/components_Container._internal_.md#marginblockend)<`string` \| `number`\>

The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block-end

#### Inherited from

NormalCssProperties.marginBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:2614

___

### marginBlockStart

• `Optional` **marginBlockStart**: [`MarginBlockStart`](../modules/components_Container._internal_.md#marginblockstart)<`string` \| `number`\>

The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block-start

#### Inherited from

NormalCssProperties.marginBlockStart

#### Defined in

node_modules/csstype/index.d.ts:2628

___

### marginBottom

• `Optional` **marginBottom**: [`MarginBottom`](../modules/components_Container._internal_.md#marginbottom)<`string` \| `number`\>

The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

NormalCssProperties.marginBottom

#### Defined in

node_modules/csstype/index.d.ts:2642

___

### marginInline

• `Optional` **marginInline**: [`MarginInline`](../modules/components_Container._internal_.md#margininline)<`string` \| `number`\>

The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline

#### Inherited from

NormalCssProperties.marginInline

#### Defined in

node_modules/csstype/index.d.ts:2656

___

### marginInlineEnd

• `Optional` **marginInlineEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`string` \| `number`\>

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
| :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
|          **69**          |        **41**         |         **12.1**         | **79** | No  |
| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline-end

#### Inherited from

NormalCssProperties.marginInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:2671

___

### marginInlineStart

• `Optional` **marginInlineStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`string` \| `number`\>

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
| :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
|           **69**           |         **41**          |          **12.1**          | **79** | No  |
| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline-start

#### Inherited from

NormalCssProperties.marginInlineStart

#### Defined in

node_modules/csstype/index.d.ts:2686

___

### marginLeft

• `Optional` **marginLeft**: [`MarginLeft`](../modules/components_Container._internal_.md#marginleft)<`string` \| `number`\>

The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-left

#### Inherited from

NormalCssProperties.marginLeft

#### Defined in

node_modules/csstype/index.d.ts:2700

___

### marginRight

• `Optional` **marginRight**: [`MarginRight`](../modules/components_Container._internal_.md#marginright)<`string` \| `number`\>

The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

NormalCssProperties.marginRight

#### Defined in

node_modules/csstype/index.d.ts:2714

___

### marginTop

• `Optional` **marginTop**: [`MarginTop`](../modules/components_Container._internal_.md#margintop)<`string` \| `number`\>

The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-top

#### Inherited from

NormalCssProperties.marginTop

#### Defined in

node_modules/csstype/index.d.ts:2728

___

### marker

• `Optional` **marker**: [`Marker`](../modules/components_Container._internal_.md#marker)

#### Inherited from

NormalCssProperties.marker

#### Defined in

node_modules/csstype/index.d.ts:8779

___

### markerEnd

• `Optional` **markerEnd**: [`MarkerEnd`](../modules/components_Container._internal_.md#markerend)

#### Inherited from

NormalCssProperties.markerEnd

#### Defined in

node_modules/csstype/index.d.ts:8780

___

### markerMid

• `Optional` **markerMid**: [`MarkerMid`](../modules/components_Container._internal_.md#markermid)

#### Inherited from

NormalCssProperties.markerMid

#### Defined in

node_modules/csstype/index.d.ts:8781

___

### markerStart

• `Optional` **markerStart**: [`MarkerStart`](../modules/components_Container._internal_.md#markerstart)

#### Inherited from

NormalCssProperties.markerStart

#### Defined in

node_modules/csstype/index.d.ts:8782

___

### mask

• `Optional` **mask**: [`Mask`](../modules/components_Container._internal_.md#mask)<`string` \| `number`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox | Safari  | Edge  | IE  |
| :----: | :-----: | :-----: | :---: | :-: |
| **1**  |  **2**  | **3.1** | 12-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask

#### Inherited from

NormalCssProperties.mask

#### Defined in

node_modules/csstype/index.d.ts:5580

___

### maskBorder

• `Optional` **maskBorder**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |               Safari               |               Edge                | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :-------------------------------: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | **79** _(-webkit-mask-box-image)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Inherited from

NormalCssProperties.maskBorder

#### Defined in

node_modules/csstype/index.d.ts:5592

___

### maskBorderMode

• `Optional` **maskBorderMode**: [`MaskBorderMode`](../modules/components_Container._internal_.md#maskbordermode)

The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.

**Syntax**: `luminance | alpha`

**Initial value**: `alpha`

#### Inherited from

NormalCssProperties.maskBorderMode

#### Defined in

node_modules/csstype/index.d.ts:2736

___

### maskBorderOutset

• `Optional` **maskBorderOutset**: [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`string` \| `number`\>

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | **79** _(-webkit-mask-box-image-outset)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-outset

#### Inherited from

NormalCssProperties.maskBorderOutset

#### Defined in

node_modules/csstype/index.d.ts:2750

___

### maskBorderRepeat

• `Optional` **maskBorderRepeat**: [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat)

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | **79** _(-webkit-mask-box-image-repeat)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat

#### Inherited from

NormalCssProperties.maskBorderRepeat

#### Defined in

node_modules/csstype/index.d.ts:2764

___

### maskBorderSlice

• `Optional` **maskBorderSlice**: [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice)

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | **79** _(-webkit-mask-box-image-slice)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-slice

#### Inherited from

NormalCssProperties.maskBorderSlice

#### Defined in

node_modules/csstype/index.d.ts:2778

___

### maskBorderSource

• `Optional` **maskBorderSource**: [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource)

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | **79** _(-webkit-mask-box-image-source)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-source

#### Inherited from

NormalCssProperties.maskBorderSource

#### Defined in

node_modules/csstype/index.d.ts:2792

___

### maskBorderWidth

• `Optional` **maskBorderWidth**: [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`string` \| `number`\>

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | **79** _(-webkit-mask-box-image-width)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-width

#### Inherited from

NormalCssProperties.maskBorderWidth

#### Defined in

node_modules/csstype/index.d.ts:2806

___

### maskClip

• `Optional` **maskClip**: [`MaskClip`](../modules/components_Container._internal_.md#maskclip)

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <geometry-box> | no-clip ]#`

**Initial value**: `border-box`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-clip

#### Inherited from

NormalCssProperties.maskClip

#### Defined in

node_modules/csstype/index.d.ts:2820

___

### maskComposite

• `Optional` **maskComposite**: [`MaskComposite`](../modules/components_Container._internal_.md#maskcomposite)

The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.

**Syntax**: `<compositing-operator>#`

**Initial value**: `add`

| Chrome | Firefox | Safari | Edge  | IE  |
| :----: | :-----: | :----: | :---: | :-: |
|   No   | **53**  |   No   | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-composite

#### Inherited from

NormalCssProperties.maskComposite

#### Defined in

node_modules/csstype/index.d.ts:2834

___

### maskImage

• `Optional` **maskImage**: [`MaskImage`](../modules/components_Container._internal_.md#maskimage)

The **`mask-image`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

|   Chrome    | Firefox |   Safari    | Edge  | IE  |
| :---------: | :-----: | :---------: | :---: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | 16-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-image

#### Inherited from

NormalCssProperties.maskImage

#### Defined in

node_modules/csstype/index.d.ts:2848

___

### maskMode

• `Optional` **maskMode**: [`MaskMode`](../modules/components_Container._internal_.md#maskmode)

The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.

**Syntax**: `<masking-mode>#`

**Initial value**: `match-source`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **53**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-mode

#### Inherited from

NormalCssProperties.maskMode

#### Defined in

node_modules/csstype/index.d.ts:2862

___

### maskOrigin

• `Optional` **maskOrigin**: [`MaskOrigin`](../modules/components_Container._internal_.md#maskorigin)

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `<geometry-box>#`

**Initial value**: `border-box`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-origin

#### Inherited from

NormalCssProperties.maskOrigin

#### Defined in

node_modules/csstype/index.d.ts:2876

___

### maskPosition

• `Optional` **maskPosition**: [`MaskPosition`](../modules/components_Container._internal_.md#maskposition)<`string` \| `number`\>

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `center`

|   Chrome    | Firefox |    Safari     | Edge  | IE  |
| :---------: | :-----: | :-----------: | :---: | :-: |
| **1** _-x-_ | **53**  | **3.1** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-position

#### Inherited from

NormalCssProperties.maskPosition

#### Defined in

node_modules/csstype/index.d.ts:2890

___

### maskRepeat

• `Optional` **maskRepeat**: [`MaskRepeat`](../modules/components_Container._internal_.md#maskrepeat)

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `no-repeat`

|   Chrome    | Firefox |    Safari     | Edge  | IE  |
| :---------: | :-----: | :-----------: | :---: | :-: |
| **1** _-x-_ | **53**  | **3.1** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-repeat

#### Inherited from

NormalCssProperties.maskRepeat

#### Defined in

node_modules/csstype/index.d.ts:2904

___

### maskSize

• `Optional` **maskSize**: [`MaskSize`](../modules/components_Container._internal_.md#masksize)<`string` \| `number`\>

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto`

|   Chrome    | Firefox |   Safari    | Edge  | IE  |
| :---------: | :-----: | :---------: | :---: | :-: |
| **4** _-x-_ | **53**  | **4** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-size

#### Inherited from

NormalCssProperties.maskSize

#### Defined in

node_modules/csstype/index.d.ts:2918

___

### maskType

• `Optional` **maskType**: [`MaskType`](../modules/components_Container._internal_.md#masktype)

The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.

**Syntax**: `luminance | alpha`

**Initial value**: `luminance`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **24** | **35**  | **7**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-type

#### Inherited from

NormalCssProperties.maskType

#### Defined in

node_modules/csstype/index.d.ts:2932

___

### mathStyle

• `Optional` **mathStyle**: [`MathStyle`](../modules/components_Container._internal_.md#mathstyle)

The `math-style` property indicates whether MathML equations should render with normal or compact height.

**Syntax**: `normal | compact`

**Initial value**: `normal`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|  n/a   |   n/a   | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/math-style

#### Inherited from

NormalCssProperties.mathStyle

#### Defined in

node_modules/csstype/index.d.ts:2946

___

### maxBlockSize

• `Optional` **maxBlockSize**: [`MaxBlockSize`](../modules/components_Container._internal_.md#maxblocksize)<`string` \| `number`\>

The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-block-size

#### Inherited from

NormalCssProperties.maxBlockSize

#### Defined in

node_modules/csstype/index.d.ts:2960

___

### maxHeight

• `Optional` **maxHeight**: [`MaxHeight`](../modules/components_Container._internal_.md#maxheight)<`string` \| `number`\>

The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **18** |  **1**  | **1.3** | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-height

#### Inherited from

NormalCssProperties.maxHeight

#### Defined in

node_modules/csstype/index.d.ts:2974

___

### maxInlineSize

• `Optional` **maxInlineSize**: [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`string` \| `number`\>

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

| Chrome | Firefox |   Safari   |  Edge  | IE  |
| :----: | :-----: | :--------: | :----: | :-: |
| **57** | **41**  |  **12.1**  | **79** | No  |
|        |         | 10.1 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-inline-size

#### Inherited from

NormalCssProperties.maxInlineSize

#### Defined in

node_modules/csstype/index.d.ts:2989

___

### maxLines

• `Optional` **maxLines**: [`MaxLines`](../modules/components_Container._internal_.md#maxlines)

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.maxLines

#### Defined in

node_modules/csstype/index.d.ts:2995

___

### maxWidth

• `Optional` **maxWidth**: [`MaxWidth`](../modules/components_Container._internal_.md#maxwidth)<`string` \| `number`\>

The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-width

#### Inherited from

NormalCssProperties.maxWidth

#### Defined in

node_modules/csstype/index.d.ts:3009

___

### minBlockSize

• `Optional` **minBlockSize**: [`MinBlockSize`](../modules/components_Container._internal_.md#minblocksize)<`string` \| `number`\>

The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-block-size

#### Inherited from

NormalCssProperties.minBlockSize

#### Defined in

node_modules/csstype/index.d.ts:3023

___

### minHeight

• `Optional` **minHeight**: [`MinHeight`](../modules/components_Container._internal_.md#minheight)<`string` \| `number`\>

The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **3**  | **1.3** | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-height

#### Inherited from

NormalCssProperties.minHeight

#### Defined in

node_modules/csstype/index.d.ts:3037

___

### minInlineSize

• `Optional` **minInlineSize**: [`MinInlineSize`](../modules/components_Container._internal_.md#mininlinesize)<`string` \| `number`\>

The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-inline-size

#### Inherited from

NormalCssProperties.minInlineSize

#### Defined in

node_modules/csstype/index.d.ts:3051

___

### minWidth

• `Optional` **minWidth**: [`MinWidth`](../modules/components_Container._internal_.md#minwidth)<`string` \| `number`\>

The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-width

#### Inherited from

NormalCssProperties.minWidth

#### Defined in

node_modules/csstype/index.d.ts:3065

___

### mixBlendMode

• `Optional` **mixBlendMode**: [`MixBlendMode`](../modules/components_Container._internal_.md#mixblendmode)

The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.

**Syntax**: `<blend-mode>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **32**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode

#### Inherited from

NormalCssProperties.mixBlendMode

#### Defined in

node_modules/csstype/index.d.ts:3079

___

### motion

• `Optional` **motion**: [`Offset`](../modules/components_Container._internal_.md#offset)<`string` \| `number`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

NormalCssProperties.motion

#### Defined in

node_modules/csstype/index.d.ts:5605

___

### motionDistance

• `Optional` **motionDistance**: [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`string` \| `number`\>

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

NormalCssProperties.motionDistance

#### Defined in

node_modules/csstype/index.d.ts:3094

___

### motionPath

• `Optional` **motionPath**: [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath)

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

NormalCssProperties.motionPath

#### Defined in

node_modules/csstype/index.d.ts:3109

___

### motionRotation

• `Optional` **motionRotation**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate)

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

NormalCssProperties.motionRotation

#### Defined in

node_modules/csstype/index.d.ts:3124

___

### msAccelerator

• `Optional` **msAccelerator**: [`MsAccelerator`](../modules/components_Container._internal_.md#msaccelerator)

The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.

**Syntax**: `false | true`

**Initial value**: `false`

#### Inherited from

NormalCssProperties.msAccelerator

#### Defined in

node_modules/csstype/index.d.ts:6186

___

### msAlignSelf

• `Optional` **msAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself)

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msAlignSelf

#### Defined in

node_modules/csstype/index.d.ts:6194

___

### msBlockProgression

• `Optional` **msBlockProgression**: [`MsBlockProgression`](../modules/components_Container._internal_.md#msblockprogression)

The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.

**Syntax**: `tb | rl | bt | lr`

**Initial value**: `tb`

#### Inherited from

NormalCssProperties.msBlockProgression

#### Defined in

node_modules/csstype/index.d.ts:6202

___

### msContentZoomChaining

• `Optional` **msContentZoomChaining**: [`MsContentZoomChaining`](../modules/components_Container._internal_.md#mscontentzoomchaining)

The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.

**Syntax**: `none | chained`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msContentZoomChaining

#### Defined in

node_modules/csstype/index.d.ts:6210

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: [`MsContentZoomLimit`](../modules/components_Container._internal_.md#mscontentzoomlimit)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Inherited from

NormalCssProperties.msContentZoomLimit

#### Defined in

node_modules/csstype/index.d.ts:7569

___

### msContentZoomLimitMax

• `Optional` **msContentZoomLimitMax**: [`MsContentZoomLimitMax`](../modules/components_Container._internal_.md#mscontentzoomlimitmax)

The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `400%`

#### Inherited from

NormalCssProperties.msContentZoomLimitMax

#### Defined in

node_modules/csstype/index.d.ts:6218

___

### msContentZoomLimitMin

• `Optional` **msContentZoomLimitMin**: [`MsContentZoomLimitMin`](../modules/components_Container._internal_.md#mscontentzoomlimitmin)

The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `100%`

#### Inherited from

NormalCssProperties.msContentZoomLimitMin

#### Defined in

node_modules/csstype/index.d.ts:6226

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: [`MsContentZoomSnap`](../modules/components_Container._internal_.md#mscontentzoomsnap)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Inherited from

NormalCssProperties.msContentZoomSnap

#### Defined in

node_modules/csstype/index.d.ts:7575

___

### msContentZoomSnapPoints

• `Optional` **msContentZoomSnapPoints**: [`MsContentZoomSnapPoints`](../modules/components_Container._internal_.md#mscontentzoomsnappoints)

The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.

**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`

**Initial value**: `snapInterval(0%, 100%)`

#### Inherited from

NormalCssProperties.msContentZoomSnapPoints

#### Defined in

node_modules/csstype/index.d.ts:6234

___

### msContentZoomSnapType

• `Optional` **msContentZoomSnapType**: [`MsContentZoomSnapType`](../modules/components_Container._internal_.md#mscontentzoomsnaptype)

The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msContentZoomSnapType

#### Defined in

node_modules/csstype/index.d.ts:6242

___

### msContentZooming

• `Optional` **msContentZooming**: [`MsContentZooming`](../modules/components_Container._internal_.md#mscontentzooming)

The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.

**Syntax**: `none | zoom`

**Initial value**: zoom for the top level element, none for all other elements

#### Inherited from

NormalCssProperties.msContentZooming

#### Defined in

node_modules/csstype/index.d.ts:6250

___

### msFilter

• `Optional` **msFilter**: [`MsFilter`](../modules/components_Container._internal_.md#msfilter)

The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.

**Syntax**: `<string>`

**Initial value**: "" (the empty string)

#### Inherited from

NormalCssProperties.msFilter

#### Defined in

node_modules/csstype/index.d.ts:6258

___

### msFlex

• `Optional` **msFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`string` \| `number`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

NormalCssProperties.msFlex

#### Defined in

node_modules/csstype/index.d.ts:7581

___

### msFlexDirection

• `Optional` **msFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection)

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

NormalCssProperties.msFlexDirection

#### Defined in

node_modules/csstype/index.d.ts:6266

___

### msFlexPositive

• `Optional` **msFlexPositive**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow)

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msFlexPositive

#### Defined in

node_modules/csstype/index.d.ts:6274

___

### msFlowFrom

• `Optional` **msFlowFrom**: [`MsFlowFrom`](../modules/components_Container._internal_.md#msflowfrom)

The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msFlowFrom

#### Defined in

node_modules/csstype/index.d.ts:6282

___

### msFlowInto

• `Optional` **msFlowInto**: [`MsFlowInto`](../modules/components_Container._internal_.md#msflowinto)

The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msFlowInto

#### Defined in

node_modules/csstype/index.d.ts:6290

___

### msGridColumns

• `Optional` **msGridColumns**: [`MsGridColumns`](../modules/components_Container._internal_.md#msgridcolumns)<`string` \| `number`\>

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msGridColumns

#### Defined in

node_modules/csstype/index.d.ts:6298

___

### msGridRows

• `Optional` **msGridRows**: [`MsGridRows`](../modules/components_Container._internal_.md#msgridrows)<`string` \| `number`\>

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msGridRows

#### Defined in

node_modules/csstype/index.d.ts:6306

___

### msHighContrastAdjust

• `Optional` **msHighContrastAdjust**: [`MsHighContrastAdjust`](../modules/components_Container._internal_.md#mshighcontrastadjust)

The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msHighContrastAdjust

#### Defined in

node_modules/csstype/index.d.ts:6314

___

### msHyphenateLimitChars

• `Optional` **msHyphenateLimitChars**: [`MsHyphenateLimitChars`](../modules/components_Container._internal_.md#mshyphenatelimitchars)

The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.

**Syntax**: `auto | <integer>{1,3}`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msHyphenateLimitChars

#### Defined in

node_modules/csstype/index.d.ts:6322

___

### msHyphenateLimitLines

• `Optional` **msHyphenateLimitLines**: [`MsHyphenateLimitLines`](../modules/components_Container._internal_.md#mshyphenatelimitlines)

The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.

**Syntax**: `no-limit | <integer>`

**Initial value**: `no-limit`

#### Inherited from

NormalCssProperties.msHyphenateLimitLines

#### Defined in

node_modules/csstype/index.d.ts:6330

___

### msHyphenateLimitZone

• `Optional` **msHyphenateLimitZone**: [`MsHyphenateLimitZone`](../modules/components_Container._internal_.md#mshyphenatelimitzone)<`string` \| `number`\>

The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.

**Syntax**: `<percentage> | <length>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msHyphenateLimitZone

#### Defined in

node_modules/csstype/index.d.ts:6338

___

### msHyphens

• `Optional` **msHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens)

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

NormalCssProperties.msHyphens

#### Defined in

node_modules/csstype/index.d.ts:6346

___

### msImeAlign

• `Optional` **msImeAlign**: [`MsImeAlign`](../modules/components_Container._internal_.md#msimealign)

The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.

**Syntax**: `auto | after`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msImeAlign

#### Defined in

node_modules/csstype/index.d.ts:6354

___

### msImeMode

• `Optional` **msImeMode**: [`ImeMode`](../modules/components_Container._internal_.md#imemode)

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.msImeMode

#### Defined in

node_modules/csstype/index.d.ts:8420

___

### msJustifySelf

• `Optional` **msJustifySelf**: [`JustifySelf`](../modules/components_Container._internal_.md#justifyself)

The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msJustifySelf

#### Defined in

node_modules/csstype/index.d.ts:6362

___

### msLineBreak

• `Optional` **msLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak)

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msLineBreak

#### Defined in

node_modules/csstype/index.d.ts:6370

___

### msOrder

• `Optional` **msOrder**: [`Order`](../modules/components_Container._internal_.md#order)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msOrder

#### Defined in

node_modules/csstype/index.d.ts:6378

___

### msOverflowStyle

• `Optional` **msOverflowStyle**: [`MsOverflowStyle`](../modules/components_Container._internal_.md#msoverflowstyle)

The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.

**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msOverflowStyle

#### Defined in

node_modules/csstype/index.d.ts:6386

___

### msOverflowX

• `Optional` **msOverflowX**: [`OverflowX`](../modules/components_Container._internal_.md#overflowx)

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

NormalCssProperties.msOverflowX

#### Defined in

node_modules/csstype/index.d.ts:6394

___

### msOverflowY

• `Optional` **msOverflowY**: [`OverflowY`](../modules/components_Container._internal_.md#overflowy)

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

NormalCssProperties.msOverflowY

#### Defined in

node_modules/csstype/index.d.ts:6402

___

### msScrollChaining

• `Optional` **msScrollChaining**: [`MsScrollChaining`](../modules/components_Container._internal_.md#msscrollchaining)

The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.

**Syntax**: `chained | none`

**Initial value**: `chained`

#### Inherited from

NormalCssProperties.msScrollChaining

#### Defined in

node_modules/csstype/index.d.ts:6410

___

### msScrollLimit

• `Optional` **msScrollLimit**: [`MsScrollLimit`](../modules/components_Container._internal_.md#msscrolllimit)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Inherited from

NormalCssProperties.msScrollLimit

#### Defined in

node_modules/csstype/index.d.ts:7587

___

### msScrollLimitXMax

• `Optional` **msScrollLimitXMax**: [`MsScrollLimitXMax`](../modules/components_Container._internal_.md#msscrolllimitxmax)<`string` \| `number`\>

The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msScrollLimitXMax

#### Defined in

node_modules/csstype/index.d.ts:6418

___

### msScrollLimitXMin

• `Optional` **msScrollLimitXMin**: [`MsScrollLimitXMin`](../modules/components_Container._internal_.md#msscrolllimitxmin)<`string` \| `number`\>

The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msScrollLimitXMin

#### Defined in

node_modules/csstype/index.d.ts:6426

___

### msScrollLimitYMax

• `Optional` **msScrollLimitYMax**: [`MsScrollLimitYMax`](../modules/components_Container._internal_.md#msscrolllimitymax)<`string` \| `number`\>

The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msScrollLimitYMax

#### Defined in

node_modules/csstype/index.d.ts:6434

___

### msScrollLimitYMin

• `Optional` **msScrollLimitYMin**: [`MsScrollLimitYMin`](../modules/components_Container._internal_.md#msscrolllimitymin)<`string` \| `number`\>

The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msScrollLimitYMin

#### Defined in

node_modules/csstype/index.d.ts:6442

___

### msScrollRails

• `Optional` **msScrollRails**: [`MsScrollRails`](../modules/components_Container._internal_.md#msscrollrails)

The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.

**Syntax**: `none | railed`

**Initial value**: `railed`

#### Inherited from

NormalCssProperties.msScrollRails

#### Defined in

node_modules/csstype/index.d.ts:6450

___

### msScrollSnapPointsX

• `Optional` **msScrollSnapPointsX**: [`MsScrollSnapPointsX`](../modules/components_Container._internal_.md#msscrollsnappointsx)

The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

NormalCssProperties.msScrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:6458

___

### msScrollSnapPointsY

• `Optional` **msScrollSnapPointsY**: [`MsScrollSnapPointsY`](../modules/components_Container._internal_.md#msscrollsnappointsy)

The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

NormalCssProperties.msScrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:6466

___

### msScrollSnapType

• `Optional` **msScrollSnapType**: [`MsScrollSnapType`](../modules/components_Container._internal_.md#msscrollsnaptype)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msScrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:6474

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: [`MsScrollSnapX`](../modules/components_Container._internal_.md#msscrollsnapx)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Inherited from

NormalCssProperties.msScrollSnapX

#### Defined in

node_modules/csstype/index.d.ts:7593

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: [`MsScrollSnapY`](../modules/components_Container._internal_.md#msscrollsnapy)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Inherited from

NormalCssProperties.msScrollSnapY

#### Defined in

node_modules/csstype/index.d.ts:7599

___

### msScrollTranslation

• `Optional` **msScrollTranslation**: [`MsScrollTranslation`](../modules/components_Container._internal_.md#msscrolltranslation)

The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.

**Syntax**: `none | vertical-to-horizontal`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msScrollTranslation

#### Defined in

node_modules/csstype/index.d.ts:6482

___

### msScrollbar3dlightColor

• `Optional` **msScrollbar3dlightColor**: [`MsScrollbar3dlightColor`](../modules/components_Container._internal_.md#msscrollbar3dlightcolor)

The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

NormalCssProperties.msScrollbar3dlightColor

#### Defined in

node_modules/csstype/index.d.ts:6490

___

### msScrollbarArrowColor

• `Optional` **msScrollbarArrowColor**: [`MsScrollbarArrowColor`](../modules/components_Container._internal_.md#msscrollbararrowcolor)

The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.

**Syntax**: `<color>`

**Initial value**: `ButtonText`

#### Inherited from

NormalCssProperties.msScrollbarArrowColor

#### Defined in

node_modules/csstype/index.d.ts:6498

___

### msScrollbarBaseColor

• `Optional` **msScrollbarBaseColor**: [`MsScrollbarBaseColor`](../modules/components_Container._internal_.md#msscrollbarbasecolor)

The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

NormalCssProperties.msScrollbarBaseColor

#### Defined in

node_modules/csstype/index.d.ts:6506

___

### msScrollbarDarkshadowColor

• `Optional` **msScrollbarDarkshadowColor**: [`MsScrollbarDarkshadowColor`](../modules/components_Container._internal_.md#msscrollbardarkshadowcolor)

The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

NormalCssProperties.msScrollbarDarkshadowColor

#### Defined in

node_modules/csstype/index.d.ts:6514

___

### msScrollbarFaceColor

• `Optional` **msScrollbarFaceColor**: [`MsScrollbarFaceColor`](../modules/components_Container._internal_.md#msscrollbarfacecolor)

The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDFace`

#### Inherited from

NormalCssProperties.msScrollbarFaceColor

#### Defined in

node_modules/csstype/index.d.ts:6522

___

### msScrollbarHighlightColor

• `Optional` **msScrollbarHighlightColor**: [`MsScrollbarHighlightColor`](../modules/components_Container._internal_.md#msscrollbarhighlightcolor)

The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDHighlight`

#### Inherited from

NormalCssProperties.msScrollbarHighlightColor

#### Defined in

node_modules/csstype/index.d.ts:6530

___

### msScrollbarShadowColor

• `Optional` **msScrollbarShadowColor**: [`MsScrollbarShadowColor`](../modules/components_Container._internal_.md#msscrollbarshadowcolor)

The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

NormalCssProperties.msScrollbarShadowColor

#### Defined in

node_modules/csstype/index.d.ts:6538

___

### msScrollbarTrackColor

• `Optional` **msScrollbarTrackColor**: [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor)

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

**`deprecated`**

#### Inherited from

NormalCssProperties.msScrollbarTrackColor

#### Defined in

node_modules/csstype/index.d.ts:8430

___

### msTextAutospace

• `Optional` **msTextAutospace**: [`MsTextAutospace`](../modules/components_Container._internal_.md#mstextautospace)

The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.

**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msTextAutospace

#### Defined in

node_modules/csstype/index.d.ts:6546

___

### msTextCombineHorizontal

• `Optional` **msTextCombineHorizontal**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msTextCombineHorizontal

#### Defined in

node_modules/csstype/index.d.ts:6554

___

### msTextOverflow

• `Optional` **msTextOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow)

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

#### Inherited from

NormalCssProperties.msTextOverflow

#### Defined in

node_modules/csstype/index.d.ts:6562

___

### msTouchAction

• `Optional` **msTouchAction**: [`TouchAction`](../modules/components_Container._internal_.md#touchaction)

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msTouchAction

#### Defined in

node_modules/csstype/index.d.ts:6570

___

### msTouchSelect

• `Optional` **msTouchSelect**: [`MsTouchSelect`](../modules/components_Container._internal_.md#mstouchselect)

The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.

**Syntax**: `grippers | none`

**Initial value**: `grippers`

#### Inherited from

NormalCssProperties.msTouchSelect

#### Defined in

node_modules/csstype/index.d.ts:6578

___

### msTransform

• `Optional` **msTransform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

NormalCssProperties.msTransform

#### Defined in

node_modules/csstype/index.d.ts:6586

___

### msTransformOrigin

• `Optional` **msTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`string` \| `number`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

NormalCssProperties.msTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:6594

___

### msTransition

• `Optional` **msTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

NormalCssProperties.msTransition

#### Defined in

node_modules/csstype/index.d.ts:7605

___

### msTransitionDelay

• `Optional` **msTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.msTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:6602

___

### msTransitionDuration

• `Optional` **msTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

NormalCssProperties.msTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:6610

___

### msTransitionProperty

• `Optional` **msTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

NormalCssProperties.msTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:6618

___

### msTransitionTimingFunction

• `Optional` **msTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

NormalCssProperties.msTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:6626

___

### msUserSelect

• `Optional` **msUserSelect**: [`MsUserSelect`](../modules/components_Container._internal_.md#msuserselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `none | element | text`

**Initial value**: `text`

#### Inherited from

NormalCssProperties.msUserSelect

#### Defined in

node_modules/csstype/index.d.ts:6634

___

### msWordBreak

• `Optional` **msWordBreak**: [`WordBreak`](../modules/components_Container._internal_.md#wordbreak)

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.msWordBreak

#### Defined in

node_modules/csstype/index.d.ts:6642

___

### msWrapFlow

• `Optional` **msWrapFlow**: [`MsWrapFlow`](../modules/components_Container._internal_.md#mswrapflow)

The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.

**Syntax**: `auto | both | start | end | maximum | clear`

**Initial value**: `auto`

#### Inherited from

NormalCssProperties.msWrapFlow

#### Defined in

node_modules/csstype/index.d.ts:6650

___

### msWrapMargin

• `Optional` **msWrapMargin**: [`MsWrapMargin`](../modules/components_Container._internal_.md#mswrapmargin)<`string` \| `number`\>

The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

NormalCssProperties.msWrapMargin

#### Defined in

node_modules/csstype/index.d.ts:6658

___

### msWrapThrough

• `Optional` **msWrapThrough**: [`MsWrapThrough`](../modules/components_Container._internal_.md#mswrapthrough)

The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.

**Syntax**: `wrap | none`

**Initial value**: `wrap`

#### Inherited from

NormalCssProperties.msWrapThrough

#### Defined in

node_modules/csstype/index.d.ts:6666

___

### msWritingMode

• `Optional` **msWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

NormalCssProperties.msWritingMode

#### Defined in

node_modules/csstype/index.d.ts:6674

___

### objectFit

• `Optional` **objectFit**: [`ObjectFit`](../modules/components_Container._internal_.md#objectfit)

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/object-fit

#### Inherited from

NormalCssProperties.objectFit

#### Defined in

node_modules/csstype/index.d.ts:3138

___

### objectPosition

• `Optional` **objectPosition**: [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`string` \| `number`\>

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/object-position

#### Inherited from

NormalCssProperties.objectPosition

#### Defined in

node_modules/csstype/index.d.ts:3152

___

### offset

• `Optional` **offset**: [`Offset`](../modules/components_Container._internal_.md#offset)<`string` \| `number`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

NormalCssProperties.offset

#### Defined in

node_modules/csstype/index.d.ts:5618

___

### offsetAnchor

• `Optional` **offsetAnchor**: [`OffsetAnchor`](../modules/components_Container._internal_.md#offsetanchor)<`string` \| `number`\>

**Syntax**: `auto | <position>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **72**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-anchor

#### Inherited from

NormalCssProperties.offsetAnchor

#### Defined in

node_modules/csstype/index.d.ts:3164

___

### offsetBlock

• `Optional` **offsetBlock**: [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`string` \| `number`\>

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetBlock

#### Defined in

node_modules/csstype/index.d.ts:7846

___

### offsetBlockEnd

• `Optional` **offsetBlockEnd**: [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`string` \| `number`\>

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:7856

___

### offsetBlockStart

• `Optional` **offsetBlockStart**: [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`string` \| `number`\>

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetBlockStart

#### Defined in

node_modules/csstype/index.d.ts:7866

___

### offsetDistance

• `Optional` **offsetDistance**: [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`string` \| `number`\>

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

NormalCssProperties.offsetDistance

#### Defined in

node_modules/csstype/index.d.ts:3179

___

### offsetInline

• `Optional` **offsetInline**: [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`string` \| `number`\>

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetInline

#### Defined in

node_modules/csstype/index.d.ts:7876

___

### offsetInlineEnd

• `Optional` **offsetInlineEnd**: [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`string` \| `number`\>

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:7886

___

### offsetInlineStart

• `Optional` **offsetInlineStart**: [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`string` \| `number`\>

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

NormalCssProperties.offsetInlineStart

#### Defined in

node_modules/csstype/index.d.ts:7896

___

### offsetPath

• `Optional` **offsetPath**: [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath)

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

NormalCssProperties.offsetPath

#### Defined in

node_modules/csstype/index.d.ts:3194

___

### offsetRotate

• `Optional` **offsetRotate**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate)

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

NormalCssProperties.offsetRotate

#### Defined in

node_modules/csstype/index.d.ts:3209

___

### offsetRotation

• `Optional` **offsetRotation**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate)

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

NormalCssProperties.offsetRotation

#### Defined in

node_modules/csstype/index.d.ts:3224

___

### opacity

• `Optional` **opacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity)

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **2**  | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/opacity

#### Inherited from

NormalCssProperties.opacity

#### Defined in

node_modules/csstype/index.d.ts:3238

___

### order

• `Optional` **order**: [`Order`](../modules/components_Container._internal_.md#order)

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/order

#### Inherited from

NormalCssProperties.order

#### Defined in

node_modules/csstype/index.d.ts:3253

___

### orphans

• `Optional` **orphans**: [`Orphans`](../modules/components_Container._internal_.md#orphans)

The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/orphans

#### Inherited from

NormalCssProperties.orphans

#### Defined in

node_modules/csstype/index.d.ts:3267

___

### outline

• `Optional` **outline**: [`Outline`](../modules/components_Container._internal_.md#outline)<`string` \| `number`\>

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline

#### Inherited from

NormalCssProperties.outline

#### Defined in

node_modules/csstype/index.d.ts:5630

___

### outlineColor

• `Optional` **outlineColor**: [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor)

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-color

#### Inherited from

NormalCssProperties.outlineColor

#### Defined in

node_modules/csstype/index.d.ts:3281

___

### outlineOffset

• `Optional` **outlineOffset**: [`OutlineOffset`](../modules/components_Container._internal_.md#outlineoffset)<`string` \| `number`\>

The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **1**  | **1.5** | **1.2** | **15** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-offset

#### Inherited from

NormalCssProperties.outlineOffset

#### Defined in

node_modules/csstype/index.d.ts:3295

___

### outlineStyle

• `Optional` **outlineStyle**: [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle)

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-style

#### Inherited from

NormalCssProperties.outlineStyle

#### Defined in

node_modules/csstype/index.d.ts:3309

___

### outlineWidth

• `Optional` **outlineWidth**: [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`string` \| `number`\>

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-width

#### Inherited from

NormalCssProperties.outlineWidth

#### Defined in

node_modules/csstype/index.d.ts:3323

___

### overflow

• `Optional` **overflow**: [`Overflow`](../modules/components_Container._internal_.md#overflow)

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow

#### Inherited from

NormalCssProperties.overflow

#### Defined in

node_modules/csstype/index.d.ts:5644

___

### overflowAnchor

• `Optional` **overflowAnchor**: [`OverflowAnchor`](../modules/components_Container._internal_.md#overflowanchor)

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **56** | **66**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-anchor

#### Inherited from

NormalCssProperties.overflowAnchor

#### Defined in

node_modules/csstype/index.d.ts:3335

___

### overflowBlock

• `Optional` **overflowBlock**: [`OverflowBlock`](../modules/components_Container._internal_.md#overflowblock)

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-block

#### Inherited from

NormalCssProperties.overflowBlock

#### Defined in

node_modules/csstype/index.d.ts:3347

___

### overflowClipBox

• `Optional` **overflowClipBox**: [`OverflowClipBox`](../modules/components_Container._internal_.md#overflowclipbox)

The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.

**Syntax**: `padding-box | content-box`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **29**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box

#### Inherited from

NormalCssProperties.overflowClipBox

#### Defined in

node_modules/csstype/index.d.ts:3361

___

### overflowClipMargin

• `Optional` **overflowClipMargin**: [`OverflowClipMargin`](../modules/components_Container._internal_.md#overflowclipmargin)<`string` \| `number`\>

**Syntax**: `<visual-box> || <length [0,∞]>`

**Initial value**: `0px`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **90** |   No    |   No   | **90** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin

#### Inherited from

NormalCssProperties.overflowClipMargin

#### Defined in

node_modules/csstype/index.d.ts:3373

___

### overflowInline

• `Optional` **overflowInline**: [`OverflowInline`](../modules/components_Container._internal_.md#overflowinline)

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-inline

#### Inherited from

NormalCssProperties.overflowInline

#### Defined in

node_modules/csstype/index.d.ts:3385

___

### overflowWrap

• `Optional` **overflowWrap**: [`OverflowWrap`](../modules/components_Container._internal_.md#overflowwrap)

The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word | anywhere`

**Initial value**: `normal`

|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
|     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-wrap

#### Inherited from

NormalCssProperties.overflowWrap

#### Defined in

node_modules/csstype/index.d.ts:3400

___

### overflowX

• `Optional` **overflowX**: [`OverflowX`](../modules/components_Container._internal_.md#overflowx)

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-x

#### Inherited from

NormalCssProperties.overflowX

#### Defined in

node_modules/csstype/index.d.ts:3414

___

### overflowY

• `Optional` **overflowY**: [`OverflowY`](../modules/components_Container._internal_.md#overflowy)

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-y

#### Inherited from

NormalCssProperties.overflowY

#### Defined in

node_modules/csstype/index.d.ts:3428

___

### overscrollBehavior

• `Optional` **overscrollBehavior**: [`OverscrollBehavior`](../modules/components_Container._internal_.md#overscrollbehavior)

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Inherited from

NormalCssProperties.overscrollBehavior

#### Defined in

node_modules/csstype/index.d.ts:5658

___

### overscrollBehaviorBlock

• `Optional` **overscrollBehaviorBlock**: [`OverscrollBehaviorBlock`](../modules/components_Container._internal_.md#overscrollbehaviorblock)

The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block

#### Inherited from

NormalCssProperties.overscrollBehaviorBlock

#### Defined in

node_modules/csstype/index.d.ts:3442

___

### overscrollBehaviorInline

• `Optional` **overscrollBehaviorInline**: [`OverscrollBehaviorInline`](../modules/components_Container._internal_.md#overscrollbehaviorinline)

The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline

#### Inherited from

NormalCssProperties.overscrollBehaviorInline

#### Defined in

node_modules/csstype/index.d.ts:3456

___

### overscrollBehaviorX

• `Optional` **overscrollBehaviorX**: [`OverscrollBehaviorX`](../modules/components_Container._internal_.md#overscrollbehaviorx)

The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x

#### Inherited from

NormalCssProperties.overscrollBehaviorX

#### Defined in

node_modules/csstype/index.d.ts:3470

___

### overscrollBehaviorY

• `Optional` **overscrollBehaviorY**: [`OverscrollBehaviorY`](../modules/components_Container._internal_.md#overscrollbehaviory)

The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y

#### Inherited from

NormalCssProperties.overscrollBehaviorY

#### Defined in

node_modules/csstype/index.d.ts:3484

___

### padding

• `Optional` **padding**: [`Padding`](../modules/components_Container._internal_.md#padding)<`string` \| `number`\>

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding

#### Inherited from

NormalCssProperties.padding

#### Defined in

node_modules/csstype/index.d.ts:5670

___

### paddingBlock

• `Optional` **paddingBlock**: [`PaddingBlock`](../modules/components_Container._internal_.md#paddingblock)<`string` \| `number`\>

The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block

#### Inherited from

NormalCssProperties.paddingBlock

#### Defined in

node_modules/csstype/index.d.ts:3498

___

### paddingBlockEnd

• `Optional` **paddingBlockEnd**: [`PaddingBlockEnd`](../modules/components_Container._internal_.md#paddingblockend)<`string` \| `number`\>

The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block-end

#### Inherited from

NormalCssProperties.paddingBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:3512

___

### paddingBlockStart

• `Optional` **paddingBlockStart**: [`PaddingBlockStart`](../modules/components_Container._internal_.md#paddingblockstart)<`string` \| `number`\>

The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block-start

#### Inherited from

NormalCssProperties.paddingBlockStart

#### Defined in

node_modules/csstype/index.d.ts:3526

___

### paddingBottom

• `Optional` **paddingBottom**: [`PaddingBottom`](../modules/components_Container._internal_.md#paddingbottom)<`string` \| `number`\>

The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

NormalCssProperties.paddingBottom

#### Defined in

node_modules/csstype/index.d.ts:3540

___

### paddingInline

• `Optional` **paddingInline**: [`PaddingInline`](../modules/components_Container._internal_.md#paddinginline)<`string` \| `number`\>

The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline

#### Inherited from

NormalCssProperties.paddingInline

#### Defined in

node_modules/csstype/index.d.ts:3554

___

### paddingInlineEnd

• `Optional` **paddingInlineEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`string` \| `number`\>

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
| :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
|          **69**           |         **41**         |         **12.1**          | **79** | No  |
| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline-end

#### Inherited from

NormalCssProperties.paddingInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:3569

___

### paddingInlineStart

• `Optional` **paddingInlineStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`string` \| `number`\>

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
| :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
|           **69**            |          **41**          |          **12.1**           | **79** | No  |
| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline-start

#### Inherited from

NormalCssProperties.paddingInlineStart

#### Defined in

node_modules/csstype/index.d.ts:3584

___

### paddingLeft

• `Optional` **paddingLeft**: [`PaddingLeft`](../modules/components_Container._internal_.md#paddingleft)<`string` \| `number`\>

The **`padding-left`** CSS property sets the width of the padding area to the left of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-left

#### Inherited from

NormalCssProperties.paddingLeft

#### Defined in

node_modules/csstype/index.d.ts:3598

___

### paddingRight

• `Optional` **paddingRight**: [`PaddingRight`](../modules/components_Container._internal_.md#paddingright)<`string` \| `number`\>

The **`padding-right`** CSS property sets the width of the padding area on the right of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

NormalCssProperties.paddingRight

#### Defined in

node_modules/csstype/index.d.ts:3612

___

### paddingTop

• `Optional` **paddingTop**: [`PaddingTop`](../modules/components_Container._internal_.md#paddingtop)<`string` \| `number`\>

The **`padding-top`** CSS property sets the height of the padding area on the top of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-top

#### Inherited from

NormalCssProperties.paddingTop

#### Defined in

node_modules/csstype/index.d.ts:3626

___

### pageBreakAfter

• `Optional` **pageBreakAfter**: [`PageBreakAfter`](../modules/components_Container._internal_.md#pagebreakafter)

The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-after

#### Inherited from

NormalCssProperties.pageBreakAfter

#### Defined in

node_modules/csstype/index.d.ts:3640

___

### pageBreakBefore

• `Optional` **pageBreakBefore**: [`PageBreakBefore`](../modules/components_Container._internal_.md#pagebreakbefore)

The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-before

#### Inherited from

NormalCssProperties.pageBreakBefore

#### Defined in

node_modules/csstype/index.d.ts:3654

___

### pageBreakInside

• `Optional` **pageBreakInside**: [`PageBreakInside`](../modules/components_Container._internal_.md#pagebreakinside)

The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.

**Syntax**: `auto | avoid`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **19**  | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-inside

#### Inherited from

NormalCssProperties.pageBreakInside

#### Defined in

node_modules/csstype/index.d.ts:3668

___

### paintOrder

• `Optional` **paintOrder**: [`PaintOrder`](../modules/components_Container._internal_.md#paintorder)

The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.

**Syntax**: `normal | [ fill || stroke || markers ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **60**  | **8**  | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/paint-order

#### Inherited from

NormalCssProperties.paintOrder

#### Defined in

node_modules/csstype/index.d.ts:3682

___

### perspective

• `Optional` **perspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`string` \| `number`\>

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/perspective

#### Inherited from

NormalCssProperties.perspective

#### Defined in

node_modules/csstype/index.d.ts:3697

___

### perspectiveOrigin

• `Optional` **perspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`string` \| `number`\>

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/perspective-origin

#### Inherited from

NormalCssProperties.perspectiveOrigin

#### Defined in

node_modules/csstype/index.d.ts:3712

___

### placeContent

• `Optional` **placeContent**: [`PlaceContent`](../modules/components_Container._internal_.md#placecontent)

The `**place-content**` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.

**Syntax**: `<'align-content'> <'justify-content'>?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **9**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-content

#### Inherited from

NormalCssProperties.placeContent

#### Defined in

node_modules/csstype/index.d.ts:3726

___

### placeItems

• `Optional` **placeItems**: [`PlaceItems`](../modules/components_Container._internal_.md#placeitems)

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-items

#### Inherited from

NormalCssProperties.placeItems

#### Defined in

node_modules/csstype/index.d.ts:5682

___

### placeSelf

• `Optional` **placeSelf**: [`PlaceSelf`](../modules/components_Container._internal_.md#placeself)

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-self

#### Inherited from

NormalCssProperties.placeSelf

#### Defined in

node_modules/csstype/index.d.ts:5694

___

### pointerEvents

• `Optional` **pointerEvents**: [`PointerEvents`](../modules/components_Container._internal_.md#pointerevents)

The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **1**  | **1.5** | **4**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/pointer-events

#### Inherited from

NormalCssProperties.pointerEvents

#### Defined in

node_modules/csstype/index.d.ts:3740

___

### position

• `Optional` **position**: [`Position`](../modules/components_Container._internal_.md#position)

The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

**Syntax**: `static | relative | absolute | sticky | fixed`

**Initial value**: `static`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/position

#### Inherited from

NormalCssProperties.position

#### Defined in

node_modules/csstype/index.d.ts:3754

___

### quotes

• `Optional` **quotes**: [`Quotes`](../modules/components_Container._internal_.md#quotes)

The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.

**Syntax**: `none | auto | [ <string> <string> ]+`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **11** | **1.5** | **9**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/quotes

#### Inherited from

NormalCssProperties.quotes

#### Defined in

node_modules/csstype/index.d.ts:3768

___

### resize

• `Optional` **resize**: [`Resize`](../modules/components_Container._internal_.md#resize)

The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.

**Syntax**: `none | both | horizontal | vertical | block | inline`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **1**  |  **4**  | **3**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/resize

#### Inherited from

NormalCssProperties.resize

#### Defined in

node_modules/csstype/index.d.ts:3782

___

### right

• `Optional` **right**: [`Right`](../modules/components_Container._internal_.md#right)<`string` \| `number`\>

The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/right

#### Inherited from

NormalCssProperties.right

#### Defined in

node_modules/csstype/index.d.ts:3796

___

### rotate

• `Optional` **rotate**: [`Rotate`](../modules/components_Container._internal_.md#rotate)

The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.

**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/rotate

#### Inherited from

NormalCssProperties.rotate

#### Defined in

node_modules/csstype/index.d.ts:3810

___

### rowGap

• `Optional` **rowGap**: [`RowGap`](../modules/components_Container._internal_.md#rowgap)<`string` \| `number`\>

The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **84** | **63**  | **14.1** | **84** | No  |

---

_Supported in Grid Layout_

|       Chrome        |       Firefox       |        Safari         |  Edge  | IE  |
| :-----------------: | :-----------------: | :-------------------: | :----: | :-: |
|       **66**        |       **61**        |        **12**         | **16** | No  |
| 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/row-gap

#### Inherited from

NormalCssProperties.rowGap

#### Defined in

node_modules/csstype/index.d.ts:3839

___

### rubyAlign

• `Optional` **rubyAlign**: [`RubyAlign`](../modules/components_Container._internal_.md#rubyalign)

The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.

**Syntax**: `start | center | space-between | space-around`

**Initial value**: `space-around`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **38**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/ruby-align

#### Inherited from

NormalCssProperties.rubyAlign

#### Defined in

node_modules/csstype/index.d.ts:3853

___

### rubyMerge

• `Optional` **rubyMerge**: [`RubyMerge`](../modules/components_Container._internal_.md#rubymerge)

**Syntax**: `separate | collapse | auto`

**Initial value**: `separate`

#### Inherited from

NormalCssProperties.rubyMerge

#### Defined in

node_modules/csstype/index.d.ts:3859

___

### rubyPosition

• `Optional` **rubyPosition**: [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition)

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

| Chrome  | Firefox |    Safari     | Edge  | IE  |
| :-----: | :-----: | :-----------: | :---: | :-: |
| **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  |
| 1 _-x-_ |         |               |       |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/ruby-position

#### Inherited from

NormalCssProperties.rubyPosition

#### Defined in

node_modules/csstype/index.d.ts:3874

___

### scale

• `Optional` **scale**: [`Scale`](../modules/components_Container._internal_.md#scale)

The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <number>{1,3}`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scale

#### Inherited from

NormalCssProperties.scale

#### Defined in

node_modules/csstype/index.d.ts:3888

___

### scrollBehavior

• `Optional` **scrollBehavior**: [`ScrollBehavior`](../modules/components_Container._internal_.md#scrollbehavior)

The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

**Syntax**: `auto | smooth`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **61** | **36**  |  n/a   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-behavior

#### Inherited from

NormalCssProperties.scrollBehavior

#### Defined in

node_modules/csstype/index.d.ts:3902

___

### scrollMargin

• `Optional` **scrollMargin**: [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`string` \| `number`\>

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

**Initial value**: `0`

| Chrome | Firefox |          Safari           |  Edge  | IE  |
| :----: | :-----: | :-----------------------: | :----: | :-: |
| **69** | **90**  |         **14.1**          | **79** | No  |
|        |         | 11 _(scroll-snap-margin)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

NormalCssProperties.scrollMargin

#### Defined in

node_modules/csstype/index.d.ts:3917

___

### scrollMarginBlock

• `Optional` **scrollMarginBlock**: [`ScrollMarginBlock`](../modules/components_Container._internal_.md#scrollmarginblock)<`string` \| `number`\>

The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.

**Syntax**: `<length>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block

#### Inherited from

NormalCssProperties.scrollMarginBlock

#### Defined in

node_modules/csstype/index.d.ts:3931

___

### scrollMarginBlockEnd

• `Optional` **scrollMarginBlockEnd**: [`ScrollMarginBlockEnd`](../modules/components_Container._internal_.md#scrollmarginblockend)<`string` \| `number`\>

The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end

#### Inherited from

NormalCssProperties.scrollMarginBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:3945

___

### scrollMarginBlockStart

• `Optional` **scrollMarginBlockStart**: [`ScrollMarginBlockStart`](../modules/components_Container._internal_.md#scrollmarginblockstart)<`string` \| `number`\>

The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start

#### Inherited from

NormalCssProperties.scrollMarginBlockStart

#### Defined in

node_modules/csstype/index.d.ts:3959

___

### scrollMarginBottom

• `Optional` **scrollMarginBottom**: [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`string` \| `number`\>

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              |  Edge  | IE  |
| :----: | :-----: | :------------------------------: | :----: | :-: |
| **69** | **68**  |             **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

NormalCssProperties.scrollMarginBottom

#### Defined in

node_modules/csstype/index.d.ts:3974

___

### scrollMarginInline

• `Optional` **scrollMarginInline**: [`ScrollMarginInline`](../modules/components_Container._internal_.md#scrollmargininline)<`string` \| `number`\>

The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.

**Syntax**: `<length>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **68**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline

#### Inherited from

NormalCssProperties.scrollMarginInline

#### Defined in

node_modules/csstype/index.d.ts:3988

___

### scrollMarginInlineEnd

• `Optional` **scrollMarginInlineEnd**: [`ScrollMarginInlineEnd`](../modules/components_Container._internal_.md#scrollmargininlineend)<`string` \| `number`\>

The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end

#### Inherited from

NormalCssProperties.scrollMarginInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:4002

___

### scrollMarginInlineStart

• `Optional` **scrollMarginInlineStart**: [`ScrollMarginInlineStart`](../modules/components_Container._internal_.md#scrollmargininlinestart)<`string` \| `number`\>

The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start

#### Inherited from

NormalCssProperties.scrollMarginInlineStart

#### Defined in

node_modules/csstype/index.d.ts:4016

___

### scrollMarginLeft

• `Optional` **scrollMarginLeft**: [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`string` \| `number`\>

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             |  Edge  | IE  |
| :----: | :-----: | :----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

NormalCssProperties.scrollMarginLeft

#### Defined in

node_modules/csstype/index.d.ts:4031

___

### scrollMarginRight

• `Optional` **scrollMarginRight**: [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`string` \| `number`\>

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              |  Edge  | IE  |
| :----: | :-----: | :-----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

NormalCssProperties.scrollMarginRight

#### Defined in

node_modules/csstype/index.d.ts:4046

___

### scrollMarginTop

• `Optional` **scrollMarginTop**: [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`string` \| `number`\>

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             |  Edge  | IE  |
| :----: | :-----: | :---------------------------: | :----: | :-: |
| **69** | **68**  |           **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

NormalCssProperties.scrollMarginTop

#### Defined in

node_modules/csstype/index.d.ts:4061

___

### scrollPadding

• `Optional` **scrollPadding**: [`ScrollPadding`](../modules/components_Container._internal_.md#scrollpadding)<`string` \| `number`\>

The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.

**Syntax**: `[ auto | <length-percentage> ]{1,4}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding

#### Inherited from

NormalCssProperties.scrollPadding

#### Defined in

node_modules/csstype/index.d.ts:4075

___

### scrollPaddingBlock

• `Optional` **scrollPaddingBlock**: [`ScrollPaddingBlock`](../modules/components_Container._internal_.md#scrollpaddingblock)<`string` \| `number`\>

The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block

#### Inherited from

NormalCssProperties.scrollPaddingBlock

#### Defined in

node_modules/csstype/index.d.ts:4089

___

### scrollPaddingBlockEnd

• `Optional` **scrollPaddingBlockEnd**: [`ScrollPaddingBlockEnd`](../modules/components_Container._internal_.md#scrollpaddingblockend)<`string` \| `number`\>

The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end

#### Inherited from

NormalCssProperties.scrollPaddingBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:4103

___

### scrollPaddingBlockStart

• `Optional` **scrollPaddingBlockStart**: [`ScrollPaddingBlockStart`](../modules/components_Container._internal_.md#scrollpaddingblockstart)<`string` \| `number`\>

The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start

#### Inherited from

NormalCssProperties.scrollPaddingBlockStart

#### Defined in

node_modules/csstype/index.d.ts:4117

___

### scrollPaddingBottom

• `Optional` **scrollPaddingBottom**: [`ScrollPaddingBottom`](../modules/components_Container._internal_.md#scrollpaddingbottom)<`string` \| `number`\>

The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom

#### Inherited from

NormalCssProperties.scrollPaddingBottom

#### Defined in

node_modules/csstype/index.d.ts:4131

___

### scrollPaddingInline

• `Optional` **scrollPaddingInline**: [`ScrollPaddingInline`](../modules/components_Container._internal_.md#scrollpaddinginline)<`string` \| `number`\>

The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline

#### Inherited from

NormalCssProperties.scrollPaddingInline

#### Defined in

node_modules/csstype/index.d.ts:4145

___

### scrollPaddingInlineEnd

• `Optional` **scrollPaddingInlineEnd**: [`ScrollPaddingInlineEnd`](../modules/components_Container._internal_.md#scrollpaddinginlineend)<`string` \| `number`\>

The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end

#### Inherited from

NormalCssProperties.scrollPaddingInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:4159

___

### scrollPaddingInlineStart

• `Optional` **scrollPaddingInlineStart**: [`ScrollPaddingInlineStart`](../modules/components_Container._internal_.md#scrollpaddinginlinestart)<`string` \| `number`\>

The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start

#### Inherited from

NormalCssProperties.scrollPaddingInlineStart

#### Defined in

node_modules/csstype/index.d.ts:4173

___

### scrollPaddingLeft

• `Optional` **scrollPaddingLeft**: [`ScrollPaddingLeft`](../modules/components_Container._internal_.md#scrollpaddingleft)<`string` \| `number`\>

The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left

#### Inherited from

NormalCssProperties.scrollPaddingLeft

#### Defined in

node_modules/csstype/index.d.ts:4187

___

### scrollPaddingRight

• `Optional` **scrollPaddingRight**: [`ScrollPaddingRight`](../modules/components_Container._internal_.md#scrollpaddingright)<`string` \| `number`\>

The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right

#### Inherited from

NormalCssProperties.scrollPaddingRight

#### Defined in

node_modules/csstype/index.d.ts:4201

___

### scrollPaddingTop

• `Optional` **scrollPaddingTop**: [`ScrollPaddingTop`](../modules/components_Container._internal_.md#scrollpaddingtop)<`string` \| `number`\>

The **`scroll-padding-top`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top

#### Inherited from

NormalCssProperties.scrollPaddingTop

#### Defined in

node_modules/csstype/index.d.ts:4215

___

### scrollSnapAlign

• `Optional` **scrollSnapAlign**: [`ScrollSnapAlign`](../modules/components_Container._internal_.md#scrollsnapalign)

The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

**Syntax**: `[ none | start | end | center ]{1,2}`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align

#### Inherited from

NormalCssProperties.scrollSnapAlign

#### Defined in

node_modules/csstype/index.d.ts:4229

___

### scrollSnapCoordinate

• `Optional` **scrollSnapCoordinate**: [`ScrollSnapCoordinate`](../modules/components_Container._internal_.md#scrollsnapcoordinate)<`string` \| `number`\>

The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.

**Syntax**: `none | <position>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapCoordinate

#### Defined in

node_modules/csstype/index.d.ts:7906

___

### scrollSnapDestination

• `Optional` **scrollSnapDestination**: [`ScrollSnapDestination`](../modules/components_Container._internal_.md#scrollsnapdestination)<`string` \| `number`\>

The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.

**Syntax**: `<position>`

**Initial value**: `0px 0px`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapDestination

#### Defined in

node_modules/csstype/index.d.ts:7916

___

### scrollSnapMargin

• `Optional` **scrollSnapMargin**: [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`string` \| `number`\>

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

**Initial value**: `0`

| Chrome | Firefox |          Safari           |  Edge  | IE  |
| :----: | :-----: | :-----------------------: | :----: | :-: |
| **69** |  68-90  |         **14.1**          | **79** | No  |
|        |         | 11 _(scroll-snap-margin)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

NormalCssProperties.scrollSnapMargin

#### Defined in

node_modules/csstype/index.d.ts:4244

___

### scrollSnapMarginBottom

• `Optional` **scrollSnapMarginBottom**: [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`string` \| `number`\>

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              |  Edge  | IE  |
| :----: | :-----: | :------------------------------: | :----: | :-: |
| **69** | **68**  |             **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

NormalCssProperties.scrollSnapMarginBottom

#### Defined in

node_modules/csstype/index.d.ts:4259

___

### scrollSnapMarginLeft

• `Optional` **scrollSnapMarginLeft**: [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`string` \| `number`\>

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             |  Edge  | IE  |
| :----: | :-----: | :----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

NormalCssProperties.scrollSnapMarginLeft

#### Defined in

node_modules/csstype/index.d.ts:4274

___

### scrollSnapMarginRight

• `Optional` **scrollSnapMarginRight**: [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`string` \| `number`\>

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              |  Edge  | IE  |
| :----: | :-----: | :-----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

NormalCssProperties.scrollSnapMarginRight

#### Defined in

node_modules/csstype/index.d.ts:4289

___

### scrollSnapMarginTop

• `Optional` **scrollSnapMarginTop**: [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`string` \| `number`\>

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             |  Edge  | IE  |
| :----: | :-----: | :---------------------------: | :----: | :-: |
| **69** | **68**  |           **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

NormalCssProperties.scrollSnapMarginTop

#### Defined in

node_modules/csstype/index.d.ts:4304

___

### scrollSnapPointsX

• `Optional` **scrollSnapPointsX**: [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx)

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:7926

___

### scrollSnapPointsY

• `Optional` **scrollSnapPointsY**: [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy)

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:7936

___

### scrollSnapStop

• `Optional` **scrollSnapStop**: [`ScrollSnapStop`](../modules/components_Container._internal_.md#scrollsnapstop)

The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.

**Syntax**: `normal | always`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **75** |   No    | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop

#### Inherited from

NormalCssProperties.scrollSnapStop

#### Defined in

node_modules/csstype/index.d.ts:4318

___

### scrollSnapType

• `Optional` **scrollSnapType**: [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype)

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |      IE      |
| :----: | :-----: | :-----: | :----: | :----------: |
| **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
|        |         | 9 _-x-_ |        |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type

#### Inherited from

NormalCssProperties.scrollSnapType

#### Defined in

node_modules/csstype/index.d.ts:4333

___

### scrollSnapTypeX

• `Optional` **scrollSnapTypeX**: [`ScrollSnapTypeX`](../modules/components_Container._internal_.md#scrollsnaptypex)

The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapTypeX

#### Defined in

node_modules/csstype/index.d.ts:7946

___

### scrollSnapTypeY

• `Optional` **scrollSnapTypeY**: [`ScrollSnapTypeY`](../modules/components_Container._internal_.md#scrollsnaptypey)

The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollSnapTypeY

#### Defined in

node_modules/csstype/index.d.ts:7956

___

### scrollbarColor

• `Optional` **scrollbarColor**: [`ScrollbarColor`](../modules/components_Container._internal_.md#scrollbarcolor)

The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.

**Syntax**: `auto | <color>{2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-color

#### Inherited from

NormalCssProperties.scrollbarColor

#### Defined in

node_modules/csstype/index.d.ts:4347

___

### scrollbarGutter

• `Optional` **scrollbarGutter**: [`ScrollbarGutter`](../modules/components_Container._internal_.md#scrollbargutter)

The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

**Syntax**: `auto | stable && both-edges?`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter

#### Inherited from

NormalCssProperties.scrollbarGutter

#### Defined in

node_modules/csstype/index.d.ts:4361

___

### scrollbarTrackColor

• `Optional` **scrollbarTrackColor**: [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor)

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

**`deprecated`**

#### Inherited from

NormalCssProperties.scrollbarTrackColor

#### Defined in

node_modules/csstype/index.d.ts:7966

___

### scrollbarWidth

• `Optional` **scrollbarWidth**: [`ScrollbarWidth`](../modules/components_Container._internal_.md#scrollbarwidth)

The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.

**Syntax**: `auto | thin | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-width

#### Inherited from

NormalCssProperties.scrollbarWidth

#### Defined in

node_modules/csstype/index.d.ts:4375

___

### shapeImageThreshold

• `Optional` **shapeImageThreshold**: [`ShapeImageThreshold`](../modules/components_Container._internal_.md#shapeimagethreshold)

The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.

**Syntax**: `<alpha-value>`

**Initial value**: `0.0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold

#### Inherited from

NormalCssProperties.shapeImageThreshold

#### Defined in

node_modules/csstype/index.d.ts:4389

___

### shapeMargin

• `Optional` **shapeMargin**: [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`string` \| `number`\>

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-margin

#### Inherited from

NormalCssProperties.shapeMargin

#### Defined in

node_modules/csstype/index.d.ts:4403

___

### shapeOutside

• `Optional` **shapeOutside**: [`ShapeOutside`](../modules/components_Container._internal_.md#shapeoutside)

The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

**Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-outside

#### Inherited from

NormalCssProperties.shapeOutside

#### Defined in

node_modules/csstype/index.d.ts:4417

___

### shapeRendering

• `Optional` **shapeRendering**: [`ShapeRendering`](../modules/components_Container._internal_.md#shaperendering)

#### Inherited from

NormalCssProperties.shapeRendering

#### Defined in

node_modules/csstype/index.d.ts:8788

___

### stopColor

• `Optional` **stopColor**: [`StopColor`](../modules/components_Container._internal_.md#stopcolor)

#### Inherited from

NormalCssProperties.stopColor

#### Defined in

node_modules/csstype/index.d.ts:8789

___

### stopOpacity

• `Optional` **stopOpacity**: [`StopOpacity`](../modules/components_Container._internal_.md#stopopacity)

#### Inherited from

NormalCssProperties.stopOpacity

#### Defined in

node_modules/csstype/index.d.ts:8790

___

### stroke

• `Optional` **stroke**: [`Stroke`](../modules/components_Container._internal_.md#stroke)

#### Inherited from

NormalCssProperties.stroke

#### Defined in

node_modules/csstype/index.d.ts:8791

___

### strokeDasharray

• `Optional` **strokeDasharray**: [`StrokeDasharray`](../modules/components_Container._internal_.md#strokedasharray)<`string` \| `number`\>

#### Inherited from

NormalCssProperties.strokeDasharray

#### Defined in

node_modules/csstype/index.d.ts:8792

___

### strokeDashoffset

• `Optional` **strokeDashoffset**: [`StrokeDashoffset`](../modules/components_Container._internal_.md#strokedashoffset)<`string` \| `number`\>

#### Inherited from

NormalCssProperties.strokeDashoffset

#### Defined in

node_modules/csstype/index.d.ts:8793

___

### strokeLinecap

• `Optional` **strokeLinecap**: [`StrokeLinecap`](../modules/components_Container._internal_.md#strokelinecap)

#### Inherited from

NormalCssProperties.strokeLinecap

#### Defined in

node_modules/csstype/index.d.ts:8794

___

### strokeLinejoin

• `Optional` **strokeLinejoin**: [`StrokeLinejoin`](../modules/components_Container._internal_.md#strokelinejoin)

#### Inherited from

NormalCssProperties.strokeLinejoin

#### Defined in

node_modules/csstype/index.d.ts:8795

___

### strokeMiterlimit

• `Optional` **strokeMiterlimit**: [`StrokeMiterlimit`](../modules/components_Container._internal_.md#strokemiterlimit)

#### Inherited from

NormalCssProperties.strokeMiterlimit

#### Defined in

node_modules/csstype/index.d.ts:8796

___

### strokeOpacity

• `Optional` **strokeOpacity**: [`StrokeOpacity`](../modules/components_Container._internal_.md#strokeopacity)

#### Inherited from

NormalCssProperties.strokeOpacity

#### Defined in

node_modules/csstype/index.d.ts:8797

___

### strokeWidth

• `Optional` **strokeWidth**: [`StrokeWidth`](../modules/components_Container._internal_.md#strokewidth)<`string` \| `number`\>

#### Inherited from

NormalCssProperties.strokeWidth

#### Defined in

node_modules/csstype/index.d.ts:8798

___

### tabSize

• `Optional` **tabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`string` \| `number`\>

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **21** | **91**  | **7**  | **79** | No  |
|        | 4 _-x-_ |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/tab-size

#### Inherited from

NormalCssProperties.tabSize

#### Defined in

node_modules/csstype/index.d.ts:4432

___

### tableLayout

• `Optional` **tableLayout**: [`TableLayout`](../modules/components_Container._internal_.md#tablelayout)

The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.

**Syntax**: `auto | fixed`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **14** |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/table-layout

#### Inherited from

NormalCssProperties.tableLayout

#### Defined in

node_modules/csstype/index.d.ts:4446

___

### textAlign

• `Optional` **textAlign**: [`TextAlign`](../modules/components_Container._internal_.md#textalign)

The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.

**Syntax**: `start | end | left | right | center | justify | match-parent`

**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-align

#### Inherited from

NormalCssProperties.textAlign

#### Defined in

node_modules/csstype/index.d.ts:4460

___

### textAlignLast

• `Optional` **textAlignLast**: [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast)

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **47** | **49**  |   No   | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-align-last

#### Inherited from

NormalCssProperties.textAlignLast

#### Defined in

node_modules/csstype/index.d.ts:4474

___

### textAnchor

• `Optional` **textAnchor**: [`TextAnchor`](../modules/components_Container._internal_.md#textanchor)

#### Inherited from

NormalCssProperties.textAnchor

#### Defined in

node_modules/csstype/index.d.ts:8799

___

### textCombineUpright

• `Optional` **textCombineUpright**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright)

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

|           Chrome           | Firefox |              Safari              | Edge  |                   IE                   |
| :------------------------: | :-----: | :------------------------------: | :---: | :------------------------------------: |
|           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
| 9 _(-webkit-text-combine)_ |         |                                  |       |                                        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-combine-upright

#### Inherited from

NormalCssProperties.textCombineUpright

#### Defined in

node_modules/csstype/index.d.ts:4489

___

### textDecoration

• `Optional` **textDecoration**: [`TextDecoration`](../modules/components_Container._internal_.md#textdecoration)<`string` \| `number`\>

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Inherited from

NormalCssProperties.textDecoration

#### Defined in

node_modules/csstype/index.d.ts:5706

___

### textDecorationColor

• `Optional` **textDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor)

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-color

#### Inherited from

NormalCssProperties.textDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:4504

___

### textDecorationLine

• `Optional` **textDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline)

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-line

#### Inherited from

NormalCssProperties.textDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:4519

___

### textDecorationSkip

• `Optional` **textDecorationSkip**: [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip)

The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| 57-64  |   No    | **12.1** |  No  | No  |
|        |         | 7 _-x-_  |      |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip

#### Inherited from

NormalCssProperties.textDecorationSkip

#### Defined in

node_modules/csstype/index.d.ts:4534

___

### textDecorationSkipInk

• `Optional` **textDecorationSkipInk**: [`TextDecorationSkipInk`](../modules/components_Container._internal_.md#textdecorationskipink)

The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.

**Syntax**: `auto | all | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **64** | **70**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink

#### Inherited from

NormalCssProperties.textDecorationSkipInk

#### Defined in

node_modules/csstype/index.d.ts:4548

___

### textDecorationStyle

• `Optional` **textDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle)

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-style

#### Inherited from

NormalCssProperties.textDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:4563

___

### textDecorationThickness

• `Optional` **textDecorationThickness**: [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`string` \| `number`\>

The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: `auto | from-font | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **89** | **70**  | **12.1** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness

#### Inherited from

NormalCssProperties.textDecorationThickness

#### Defined in

node_modules/csstype/index.d.ts:4577

___

### textDecorationWidth

• `Optional` **textDecorationWidth**: [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`string` \| `number`\>

The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: `auto | from-font | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge  | IE  |
| :----: | :-----: | :------: | :---: | :-: |
| 87-89  | **70**  | **12.1** | 87-89 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness

#### Inherited from

NormalCssProperties.textDecorationWidth

#### Defined in

node_modules/csstype/index.d.ts:4591

___

### textEmphasis

• `Optional` **textEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Inherited from

NormalCssProperties.textEmphasis

#### Defined in

node_modules/csstype/index.d.ts:5718

___

### textEmphasisColor

• `Optional` **textEmphasisColor**: [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor)

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color

#### Inherited from

NormalCssProperties.textEmphasisColor

#### Defined in

node_modules/csstype/index.d.ts:4605

___

### textEmphasisPosition

• `Optional` **textEmphasisPosition**: [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition)

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position

#### Inherited from

NormalCssProperties.textEmphasisPosition

#### Defined in

node_modules/csstype/index.d.ts:4619

___

### textEmphasisStyle

• `Optional` **textEmphasisStyle**: [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle)

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style

#### Inherited from

NormalCssProperties.textEmphasisStyle

#### Defined in

node_modules/csstype/index.d.ts:4633

___

### textIndent

• `Optional` **textIndent**: [`TextIndent`](../modules/components_Container._internal_.md#textindent)<`string` \| `number`\>

The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

**Syntax**: `<length-percentage> && hanging? && each-line?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-indent

#### Inherited from

NormalCssProperties.textIndent

#### Defined in

node_modules/csstype/index.d.ts:4647

___

### textJustify

• `Optional` **textJustify**: [`TextJustify`](../modules/components_Container._internal_.md#textjustify)

The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.

**Syntax**: `auto | inter-character | inter-word | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
|  n/a   | **55**  |   No   | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-justify

#### Inherited from

NormalCssProperties.textJustify

#### Defined in

node_modules/csstype/index.d.ts:4661

___

### textOrientation

• `Optional` **textOrientation**: [`TextOrientation`](../modules/components_Container._internal_.md#textorientation)

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

|  Chrome  | Firefox |  Safari   |  Edge  | IE  |
| :------: | :-----: | :-------: | :----: | :-: |
|  **48**  | **41**  |  **14**   | **79** | No  |
| 11 _-x-_ |         | 5.1 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-orientation

#### Inherited from

NormalCssProperties.textOrientation

#### Defined in

node_modules/csstype/index.d.ts:4676

___

### textOverflow

• `Optional` **textOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow)

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **7**  | **1.3** | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-overflow

#### Inherited from

NormalCssProperties.textOverflow

#### Defined in

node_modules/csstype/index.d.ts:4690

___

### textRendering

• `Optional` **textRendering**: [`TextRendering`](../modules/components_Container._internal_.md#textrendering)

The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.

**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **4**  |  **1**  | **5**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-rendering

#### Inherited from

NormalCssProperties.textRendering

#### Defined in

node_modules/csstype/index.d.ts:4704

___

### textShadow

• `Optional` **textShadow**: [`TextShadow`](../modules/components_Container._internal_.md#textshadow)

The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

**Syntax**: `none | <shadow-t>#`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **2**  | **3.5** | **1.1** | **12** | **10** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-shadow

#### Inherited from

NormalCssProperties.textShadow

#### Defined in

node_modules/csstype/index.d.ts:4718

___

### textSizeAdjust

• `Optional` **textSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust)

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **54** |   No    |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-size-adjust

#### Inherited from

NormalCssProperties.textSizeAdjust

#### Defined in

node_modules/csstype/index.d.ts:4732

___

### textTransform

• `Optional` **textTransform**: [`TextTransform`](../modules/components_Container._internal_.md#texttransform)

The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-transform

#### Inherited from

NormalCssProperties.textTransform

#### Defined in

node_modules/csstype/index.d.ts:4746

___

### textUnderlineOffset

• `Optional` **textUnderlineOffset**: [`TextUnderlineOffset`](../modules/components_Container._internal_.md#textunderlineoffset)<`string` \| `number`\>

The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.

**Syntax**: `auto | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **70**  | **12.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-underline-offset

#### Inherited from

NormalCssProperties.textUnderlineOffset

#### Defined in

node_modules/csstype/index.d.ts:4760

___

### textUnderlinePosition

• `Optional` **textUnderlinePosition**: [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition)

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |  IE   |
| :----: | :-----: | :------: | :----: | :---: |
| **33** | **74**  | **12.1** | **12** | **6** |
|        |         | 9 _-x-_  |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-underline-position

#### Inherited from

NormalCssProperties.textUnderlinePosition

#### Defined in

node_modules/csstype/index.d.ts:4775

___

### top

• `Optional` **top**: [`Top`](../modules/components_Container._internal_.md#top)<`string` \| `number`\>

The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/top

#### Inherited from

NormalCssProperties.top

#### Defined in

node_modules/csstype/index.d.ts:4789

___

### touchAction

• `Optional` **touchAction**: [`TouchAction`](../modules/components_Container._internal_.md#touchaction)

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |    IE    |
| :----: | :-----: | :----: | :----: | :------: |
| **36** | **52**  | **13** | **12** |  **11**  |
|        |         |        |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/touch-action

#### Inherited from

NormalCssProperties.touchAction

#### Defined in

node_modules/csstype/index.d.ts:4804

___

### transform

• `Optional` **transform**: [`Transform`](../modules/components_Container._internal_.md#transform)

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE    |
| :-----: | :-----: | :-------: | :----: | :-----: |
| **36**  | **16**  |   **9**   | **12** | **10**  |
| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform

#### Inherited from

NormalCssProperties.transform

#### Defined in

node_modules/csstype/index.d.ts:4819

___

### transformBox

• `Optional` **transformBox**: [`TransformBox`](../modules/components_Container._internal_.md#transformbox)

The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.

**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`

**Initial value**: `view-box`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **64** | **55**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-box

#### Inherited from

NormalCssProperties.transformBox

#### Defined in

node_modules/csstype/index.d.ts:4833

___

### transformOrigin

• `Optional` **transformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`string` \| `number`\>

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
| :-----: | :-------: | :-----: | :----: | :-----: |
| **36**  |  **16**   |  **9**  | **12** | **10**  |
| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-origin

#### Inherited from

NormalCssProperties.transformOrigin

#### Defined in

node_modules/csstype/index.d.ts:4848

___

### transformStyle

• `Optional` **transformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle)

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

|  Chrome  | Firefox  | Safari  |  Edge  | IE  |
| :------: | :------: | :-----: | :----: | :-: |
|  **36**  |  **16**  |  **9**  | **12** | No  |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-style

#### Inherited from

NormalCssProperties.transformStyle

#### Defined in

node_modules/csstype/index.d.ts:4863

___

### transition

• `Optional` **transition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`string` & {}\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition

#### Inherited from

NormalCssProperties.transition

#### Defined in

node_modules/csstype/index.d.ts:5731

___

### transitionDelay

• `Optional` **transitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`string` & {}\>

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **26**  | **16**  |  **9**  | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-delay

#### Inherited from

NormalCssProperties.transitionDelay

#### Defined in

node_modules/csstype/index.d.ts:4878

___

### transitionDuration

• `Optional` **transitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`string` & {}\>

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-duration

#### Inherited from

NormalCssProperties.transitionDuration

#### Defined in

node_modules/csstype/index.d.ts:4893

___

### transitionProperty

• `Optional` **transitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty)

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-property

#### Inherited from

NormalCssProperties.transitionProperty

#### Defined in

node_modules/csstype/index.d.ts:4908

___

### transitionTimingFunction

• `Optional` **transitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction)

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-timing-function

#### Inherited from

NormalCssProperties.transitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:4923

___

### translate

• `Optional` **translate**: [`Translate`](../modules/components_Container._internal_.md#translate)<`string` \| `number`\>

The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/translate

#### Inherited from

NormalCssProperties.translate

#### Defined in

node_modules/csstype/index.d.ts:4937

___

### unicodeBidi

• `Optional` **unicodeBidi**: [`UnicodeBidi`](../modules/components_Container._internal_.md#unicodebidi)

The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.

**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **2**  |  **1**  | **1.3** | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/unicode-bidi

#### Inherited from

NormalCssProperties.unicodeBidi

#### Defined in

node_modules/csstype/index.d.ts:4951

___

### userSelect

• `Optional` **userSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect)

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

| Chrome  | Firefox |   Safari    |   Edge   |      IE      |
| :-----: | :-----: | :---------: | :------: | :----------: |
| **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/user-select

#### Inherited from

NormalCssProperties.userSelect

#### Defined in

node_modules/csstype/index.d.ts:4966

___

### vectorEffect

• `Optional` **vectorEffect**: [`VectorEffect`](../modules/components_Container._internal_.md#vectoreffect)

#### Inherited from

NormalCssProperties.vectorEffect

#### Defined in

node_modules/csstype/index.d.ts:8803

___

### verticalAlign

• `Optional` **verticalAlign**: [`VerticalAlign`](../modules/components_Container._internal_.md#verticalalign)<`string` \| `number`\>

The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.

**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`

**Initial value**: `baseline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/vertical-align

#### Inherited from

NormalCssProperties.verticalAlign

#### Defined in

node_modules/csstype/index.d.ts:4980

___

### visibility

• `Optional` **visibility**: [`Visibility`](../modules/components_Container._internal_.md#visibility)

The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.

**Syntax**: `visible | hidden | collapse`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/visibility

#### Inherited from

NormalCssProperties.visibility

#### Defined in

node_modules/csstype/index.d.ts:4994

___

### whiteSpace

• `Optional` **whiteSpace**: [`WhiteSpace`](../modules/components_Container._internal_.md#whitespace)

The **`white-space`** CSS property sets how white space inside an element is handled.

**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/white-space

#### Inherited from

NormalCssProperties.whiteSpace

#### Defined in

node_modules/csstype/index.d.ts:5008

___

### widows

• `Optional` **widows**: [`Widows`](../modules/components_Container._internal_.md#widows)

The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/widows

#### Inherited from

NormalCssProperties.widows

#### Defined in

node_modules/csstype/index.d.ts:5022

___

### width

• `Optional` **width**: [`Width`](../modules/components_Container._internal_.md#width)<`string` \| `number`\>

The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/width

#### Inherited from

NormalCssProperties.width

#### Defined in

node_modules/csstype/index.d.ts:5036

___

### willChange

• `Optional` **willChange**: [`WillChange`](../modules/components_Container._internal_.md#willchange)

The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

**Syntax**: `auto | <animateable-feature>#`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **36** | **36**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/will-change

#### Inherited from

NormalCssProperties.willChange

#### Defined in

node_modules/csstype/index.d.ts:5050

___

### wordBreak

• `Optional` **wordBreak**: [`WordBreak`](../modules/components_Container._internal_.md#wordbreak)

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  | **15**  | **3**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/word-break

#### Inherited from

NormalCssProperties.wordBreak

#### Defined in

node_modules/csstype/index.d.ts:5064

___

### wordSpacing

• `Optional` **wordSpacing**: [`WordSpacing`](../modules/components_Container._internal_.md#wordspacing)<`string` \| `number`\>

The **`word-spacing`** CSS property sets the length of space between words and between tags.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/word-spacing

#### Inherited from

NormalCssProperties.wordSpacing

#### Defined in

node_modules/csstype/index.d.ts:5078

___

### wordWrap

• `Optional` **wordWrap**: [`WordWrap`](../modules/components_Container._internal_.md#wordwrap)

The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word`

**Initial value**: `normal`

#### Inherited from

NormalCssProperties.wordWrap

#### Defined in

node_modules/csstype/index.d.ts:5086

___

### writingMode

• `Optional` **writingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode)

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

| Chrome  | Firefox |  Safari   |  Edge  |  IE   |
| :-----: | :-----: | :-------: | :----: | :---: |
| **48**  | **41**  | **10.1**  | **12** | **9** |
| 8 _-x-_ |         | 5.1 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/writing-mode

#### Inherited from

NormalCssProperties.writingMode

#### Defined in

node_modules/csstype/index.d.ts:5101

___

### zIndex

• `Optional` **zIndex**: [`ZIndex`](../modules/components_Container._internal_.md#zindex)

The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.

**Syntax**: `auto | <integer>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/z-index

#### Inherited from

NormalCssProperties.zIndex

#### Defined in

node_modules/csstype/index.d.ts:5115

___

### zoom

• `Optional` **zoom**: [`Zoom`](../modules/components_Container._internal_.md#zoom)

The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.

**Syntax**: `normal | reset | <number> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **1**  |   No    | **3.1** | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/zoom

#### Inherited from

NormalCssProperties.zoom

#### Defined in

node_modules/csstype/index.d.ts:5129
