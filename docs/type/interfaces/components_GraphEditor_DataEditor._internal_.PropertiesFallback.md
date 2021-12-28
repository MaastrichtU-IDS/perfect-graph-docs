[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / PropertiesFallback

# Interface: PropertiesFallback<TLength, TTime\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).PropertiesFallback

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- [`StandardPropertiesFallback`](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md)<`TLength`, `TTime`\>

- [`VendorPropertiesFallback`](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md)<`TLength`, `TTime`\>

- [`ObsoletePropertiesFallback`](../modules/components_GraphEditor_DataEditor._internal_.md#obsoletepropertiesfallback)<`TLength`, `TTime`\>

- [`SvgPropertiesFallback`](../modules/components_GraphEditor_DataEditor._internal_.md#svgpropertiesfallback)<`TLength`, `TTime`\>

  ↳ **`PropertiesFallback`**

## Table of contents

### Properties

- [KhtmlBoxAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxalign)
- [KhtmlBoxDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxdirection)
- [KhtmlBoxFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxflex)
- [KhtmlBoxFlexGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxflexgroup)
- [KhtmlBoxLines](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxlines)
- [KhtmlBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxordinalgroup)
- [KhtmlBoxOrient](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxorient)
- [KhtmlBoxPack](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlboxpack)
- [KhtmlLineBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmllinebreak)
- [KhtmlOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmlopacity)
- [KhtmlUserSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#khtmluserselect)
- [MozAnimation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimation)
- [MozAnimationDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationdelay)
- [MozAnimationDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationdirection)
- [MozAnimationDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationduration)
- [MozAnimationFillMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationfillmode)
- [MozAnimationIterationCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationiterationcount)
- [MozAnimationName](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationname)
- [MozAnimationPlayState](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationplaystate)
- [MozAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozanimationtimingfunction)
- [MozAppearance](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozappearance)
- [MozBackfaceVisibility](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbackfacevisibility)
- [MozBackgroundClip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbackgroundclip)
- [MozBackgroundInlinePolicy](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbackgroundinlinepolicy)
- [MozBackgroundOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbackgroundorigin)
- [MozBackgroundSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbackgroundsize)
- [MozBinding](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbinding)
- [MozBorderBottomColors](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderbottomcolors)
- [MozBorderEndColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderendcolor)
- [MozBorderEndStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderendstyle)
- [MozBorderEndWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderendwidth)
- [MozBorderImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderimage)
- [MozBorderLeftColors](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderleftcolors)
- [MozBorderRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderradius)
- [MozBorderRadiusBottomleft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderradiusbottomleft)
- [MozBorderRadiusBottomright](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderradiusbottomright)
- [MozBorderRadiusTopleft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderradiustopleft)
- [MozBorderRadiusTopright](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderradiustopright)
- [MozBorderRightColors](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderrightcolors)
- [MozBorderStartColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderstartcolor)
- [MozBorderStartStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozborderstartstyle)
- [MozBorderTopColors](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozbordertopcolors)
- [MozBoxAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxalign)
- [MozBoxDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxdirection)
- [MozBoxFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxflex)
- [MozBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxordinalgroup)
- [MozBoxOrient](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxorient)
- [MozBoxPack](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxpack)
- [MozBoxShadow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxshadow)
- [MozBoxSizing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozboxsizing)
- [MozColumnCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumncount)
- [MozColumnFill](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnfill)
- [MozColumnGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumngap)
- [MozColumnRule](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnrule)
- [MozColumnRuleColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnrulecolor)
- [MozColumnRuleStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnrulestyle)
- [MozColumnRuleWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnrulewidth)
- [MozColumnWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumnwidth)
- [MozColumns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcolumns)
- [MozContextProperties](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozcontextproperties)
- [MozFloatEdge](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozfloatedge)
- [MozFontFeatureSettings](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozfontfeaturesettings)
- [MozFontLanguageOverride](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozfontlanguageoverride)
- [MozForceBrokenImageIcon](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozforcebrokenimageicon)
- [MozHyphens](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozhyphens)
- [MozImageRegion](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozimageregion)
- [MozMarginEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozmarginend)
- [MozMarginStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozmarginstart)
- [MozOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozopacity)
- [MozOrient](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozorient)
- [MozOsxFontSmoothing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozosxfontsmoothing)
- [MozOutline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutline)
- [MozOutlineColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlinecolor)
- [MozOutlineRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlineradius)
- [MozOutlineRadiusBottomleft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlineradiusbottomleft)
- [MozOutlineRadiusBottomright](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlineradiusbottomright)
- [MozOutlineRadiusTopleft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlineradiustopleft)
- [MozOutlineRadiusTopright](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlineradiustopright)
- [MozOutlineStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlinestyle)
- [MozOutlineWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozoutlinewidth)
- [MozPaddingEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozpaddingend)
- [MozPaddingStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozpaddingstart)
- [MozPerspective](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozperspective)
- [MozPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozperspectiveorigin)
- [MozStackSizing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozstacksizing)
- [MozTabSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztabsize)
- [MozTextAlignLast](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextalignlast)
- [MozTextBlink](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextblink)
- [MozTextDecorationColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextdecorationcolor)
- [MozTextDecorationLine](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextdecorationline)
- [MozTextDecorationStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextdecorationstyle)
- [MozTextSizeAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztextsizeadjust)
- [MozTransformOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransformorigin)
- [MozTransformStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransformstyle)
- [MozTransition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransition)
- [MozTransitionDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransitiondelay)
- [MozTransitionDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransitionduration)
- [MozTransitionProperty](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransitionproperty)
- [MozTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#moztransitiontimingfunction)
- [MozUserFocus](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozuserfocus)
- [MozUserInput](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozuserinput)
- [MozUserModify](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozusermodify)
- [MozUserSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozuserselect)
- [MozWindowDragging](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozwindowdragging)
- [MozWindowShadow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mozwindowshadow)
- [OAnimation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimation)
- [OAnimationDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationdelay)
- [OAnimationDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationdirection)
- [OAnimationDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationduration)
- [OAnimationFillMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationfillmode)
- [OAnimationIterationCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationiterationcount)
- [OAnimationName](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationname)
- [OAnimationPlayState](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationplaystate)
- [OAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oanimationtimingfunction)
- [OBackgroundSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#obackgroundsize)
- [OBorderImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oborderimage)
- [OObjectFit](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oobjectfit)
- [OObjectPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#oobjectposition)
- [OTabSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otabsize)
- [OTextOverflow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otextoverflow)
- [OTransform](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransform)
- [OTransformOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransformorigin)
- [OTransition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransition)
- [OTransitionDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransitiondelay)
- [OTransitionDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransitionduration)
- [OTransitionProperty](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransitionproperty)
- [OTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#otransitiontimingfunction)
- [WebkitAlignContent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitaligncontent)
- [WebkitAlignItems](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitalignitems)
- [WebkitAlignSelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitalignself)
- [WebkitAnimation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimation)
- [WebkitAnimationDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationdelay)
- [WebkitAnimationDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationdirection)
- [WebkitAnimationDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationduration)
- [WebkitAnimationFillMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationfillmode)
- [WebkitAnimationIterationCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationiterationcount)
- [WebkitAnimationName](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationname)
- [WebkitAnimationPlayState](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationplaystate)
- [WebkitAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitanimationtimingfunction)
- [WebkitAppearance](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitappearance)
- [WebkitBackdropFilter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbackdropfilter)
- [WebkitBackfaceVisibility](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbackfacevisibility)
- [WebkitBackgroundClip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbackgroundclip)
- [WebkitBackgroundOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbackgroundorigin)
- [WebkitBackgroundSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbackgroundsize)
- [WebkitBorderBefore](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbefore)
- [WebkitBorderBeforeColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbeforecolor)
- [WebkitBorderBeforeStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbeforestyle)
- [WebkitBorderBeforeWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbeforewidth)
- [WebkitBorderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbottomleftradius)
- [WebkitBorderBottomRightRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderbottomrightradius)
- [WebkitBorderImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderimage)
- [WebkitBorderImageSlice](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderimageslice)
- [WebkitBorderRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitborderradius)
- [WebkitBorderTopLeftRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbordertopleftradius)
- [WebkitBorderTopRightRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitbordertoprightradius)
- [WebkitBoxAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxalign)
- [WebkitBoxDecorationBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxdecorationbreak)
- [WebkitBoxDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxdirection)
- [WebkitBoxFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxflex)
- [WebkitBoxFlexGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxflexgroup)
- [WebkitBoxLines](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxlines)
- [WebkitBoxOrdinalGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxordinalgroup)
- [WebkitBoxOrient](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxorient)
- [WebkitBoxPack](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxpack)
- [WebkitBoxReflect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxreflect)
- [WebkitBoxShadow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxshadow)
- [WebkitBoxSizing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitboxsizing)
- [WebkitClipPath](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitclippath)
- [WebkitColumnCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumncount)
- [WebkitColumnFill](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnfill)
- [WebkitColumnGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumngap)
- [WebkitColumnRule](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnrule)
- [WebkitColumnRuleColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnrulecolor)
- [WebkitColumnRuleStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnrulestyle)
- [WebkitColumnRuleWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnrulewidth)
- [WebkitColumnSpan](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnspan)
- [WebkitColumnWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumnwidth)
- [WebkitColumns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitcolumns)
- [WebkitFilter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitfilter)
- [WebkitFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflex)
- [WebkitFlexBasis](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexbasis)
- [WebkitFlexDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexdirection)
- [WebkitFlexFlow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexflow)
- [WebkitFlexGrow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexgrow)
- [WebkitFlexShrink](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexshrink)
- [WebkitFlexWrap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitflexwrap)
- [WebkitFontFeatureSettings](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitfontfeaturesettings)
- [WebkitFontKerning](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitfontkerning)
- [WebkitFontSmoothing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitfontsmoothing)
- [WebkitFontVariantLigatures](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitfontvariantligatures)
- [WebkitHyphens](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkithyphens)
- [WebkitJustifyContent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitjustifycontent)
- [WebkitLineBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitlinebreak)
- [WebkitLineClamp](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitlineclamp)
- [WebkitMarginEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmarginend)
- [WebkitMarginStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmarginstart)
- [WebkitMask](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmask)
- [WebkitMaskAttachment](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskattachment)
- [WebkitMaskBoxImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximage)
- [WebkitMaskBoxImageOutset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximageoutset)
- [WebkitMaskBoxImageRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximagerepeat)
- [WebkitMaskBoxImageSlice](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximageslice)
- [WebkitMaskBoxImageSource](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximagesource)
- [WebkitMaskBoxImageWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskboximagewidth)
- [WebkitMaskClip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskclip)
- [WebkitMaskComposite](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskcomposite)
- [WebkitMaskImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskimage)
- [WebkitMaskOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskorigin)
- [WebkitMaskPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskposition)
- [WebkitMaskPositionX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskpositionx)
- [WebkitMaskPositionY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskpositiony)
- [WebkitMaskRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskrepeat)
- [WebkitMaskRepeatX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskrepeatx)
- [WebkitMaskRepeatY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaskrepeaty)
- [WebkitMaskSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmasksize)
- [WebkitMaxInlineSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitmaxinlinesize)
- [WebkitOrder](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitorder)
- [WebkitOverflowScrolling](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitoverflowscrolling)
- [WebkitPaddingEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitpaddingend)
- [WebkitPaddingStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitpaddingstart)
- [WebkitPerspective](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitperspective)
- [WebkitPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitperspectiveorigin)
- [WebkitPrintColorAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitprintcoloradjust)
- [WebkitRubyPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitrubyposition)
- [WebkitScrollSnapPointsX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitscrollsnappointsx)
- [WebkitScrollSnapPointsY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitscrollsnappointsy)
- [WebkitScrollSnapType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitscrollsnaptype)
- [WebkitShapeMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitshapemargin)
- [WebkitTapHighlightColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittaphighlightcolor)
- [WebkitTextCombine](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextcombine)
- [WebkitTextDecorationColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextdecorationcolor)
- [WebkitTextDecorationLine](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextdecorationline)
- [WebkitTextDecorationSkip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextdecorationskip)
- [WebkitTextDecorationStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextdecorationstyle)
- [WebkitTextEmphasis](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextemphasis)
- [WebkitTextEmphasisColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextemphasiscolor)
- [WebkitTextEmphasisPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextemphasisposition)
- [WebkitTextEmphasisStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextemphasisstyle)
- [WebkitTextFillColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextfillcolor)
- [WebkitTextOrientation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextorientation)
- [WebkitTextSizeAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextsizeadjust)
- [WebkitTextStroke](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextstroke)
- [WebkitTextStrokeColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextstrokecolor)
- [WebkitTextStrokeWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextstrokewidth)
- [WebkitTextUnderlinePosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittextunderlineposition)
- [WebkitTouchCallout](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittouchcallout)
- [WebkitTransform](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransform)
- [WebkitTransformOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransformorigin)
- [WebkitTransformStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransformstyle)
- [WebkitTransition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransition)
- [WebkitTransitionDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransitiondelay)
- [WebkitTransitionDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransitionduration)
- [WebkitTransitionProperty](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransitionproperty)
- [WebkitTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkittransitiontimingfunction)
- [WebkitUserModify](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitusermodify)
- [WebkitUserSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkituserselect)
- [WebkitWritingMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#webkitwritingmode)
- [accentColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#accentcolor)
- [alignContent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#aligncontent)
- [alignItems](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#alignitems)
- [alignSelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#alignself)
- [alignTracks](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#aligntracks)
- [alignmentBaseline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#alignmentbaseline)
- [all](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#all)
- [animation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animation)
- [animationDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationdelay)
- [animationDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationdirection)
- [animationDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationduration)
- [animationFillMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationfillmode)
- [animationIterationCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationiterationcount)
- [animationName](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationname)
- [animationPlayState](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationplaystate)
- [animationTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#animationtimingfunction)
- [appearance](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#appearance)
- [aspectRatio](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#aspectratio)
- [azimuth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#azimuth)
- [backdropFilter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backdropfilter)
- [backfaceVisibility](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backfacevisibility)
- [background](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#background)
- [backgroundAttachment](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundattachment)
- [backgroundBlendMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundblendmode)
- [backgroundClip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundclip)
- [backgroundColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundcolor)
- [backgroundImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundimage)
- [backgroundOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundorigin)
- [backgroundPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundposition)
- [backgroundPositionX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundpositionx)
- [backgroundPositionY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundpositiony)
- [backgroundRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundrepeat)
- [backgroundSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#backgroundsize)
- [baselineShift](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#baselineshift)
- [blockOverflow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#blockoverflow)
- [blockSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#blocksize)
- [border](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#border)
- [borderBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblock)
- [borderBlockColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockcolor)
- [borderBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockend)
- [borderBlockEndColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockendcolor)
- [borderBlockEndStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockendstyle)
- [borderBlockEndWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockendwidth)
- [borderBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockstart)
- [borderBlockStartColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockstartcolor)
- [borderBlockStartStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockstartstyle)
- [borderBlockStartWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockstartwidth)
- [borderBlockStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockstyle)
- [borderBlockWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderblockwidth)
- [borderBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottom)
- [borderBottomColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottomcolor)
- [borderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottomleftradius)
- [borderBottomRightRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottomrightradius)
- [borderBottomStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottomstyle)
- [borderBottomWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderbottomwidth)
- [borderCollapse](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordercollapse)
- [borderColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordercolor)
- [borderEndEndRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderendendradius)
- [borderEndStartRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderendstartradius)
- [borderImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimage)
- [borderImageOutset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimageoutset)
- [borderImageRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimagerepeat)
- [borderImageSlice](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimageslice)
- [borderImageSource](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimagesource)
- [borderImageWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderimagewidth)
- [borderInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinline)
- [borderInlineColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinecolor)
- [borderInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlineend)
- [borderInlineEndColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlineendcolor)
- [borderInlineEndStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlineendstyle)
- [borderInlineEndWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlineendwidth)
- [borderInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinestart)
- [borderInlineStartColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinestartcolor)
- [borderInlineStartStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinestartstyle)
- [borderInlineStartWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinestartwidth)
- [borderInlineStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinestyle)
- [borderInlineWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderinlinewidth)
- [borderLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderleft)
- [borderLeftColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderleftcolor)
- [borderLeftStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderleftstyle)
- [borderLeftWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderleftwidth)
- [borderRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderradius)
- [borderRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderright)
- [borderRightColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderrightcolor)
- [borderRightStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderrightstyle)
- [borderRightWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderrightwidth)
- [borderSpacing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderspacing)
- [borderStartEndRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderstartendradius)
- [borderStartStartRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderstartstartradius)
- [borderStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderstyle)
- [borderTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertop)
- [borderTopColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertopcolor)
- [borderTopLeftRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertopleftradius)
- [borderTopRightRadius](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertoprightradius)
- [borderTopStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertopstyle)
- [borderTopWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bordertopwidth)
- [borderWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#borderwidth)
- [bottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#bottom)
- [boxAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxalign)
- [boxDecorationBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxdecorationbreak)
- [boxDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxdirection)
- [boxFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxflex)
- [boxFlexGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxflexgroup)
- [boxLines](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxlines)
- [boxOrdinalGroup](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxordinalgroup)
- [boxOrient](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxorient)
- [boxPack](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxpack)
- [boxShadow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxshadow)
- [boxSizing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#boxsizing)
- [breakAfter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#breakafter)
- [breakBefore](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#breakbefore)
- [breakInside](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#breakinside)
- [captionSide](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#captionside)
- [caretColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#caretcolor)
- [clear](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#clear)
- [clip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#clip)
- [clipPath](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#clippath)
- [clipRule](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#cliprule)
- [color](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#color)
- [colorAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#coloradjust)
- [colorInterpolation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#colorinterpolation)
- [colorRendering](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#colorrendering)
- [colorScheme](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#colorscheme)
- [columnCount](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columncount)
- [columnFill](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnfill)
- [columnGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columngap)
- [columnRule](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnrule)
- [columnRuleColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnrulecolor)
- [columnRuleStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnrulestyle)
- [columnRuleWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnrulewidth)
- [columnSpan](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnspan)
- [columnWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columnwidth)
- [columns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#columns)
- [contain](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#contain)
- [content](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#content)
- [contentVisibility](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#contentvisibility)
- [counterIncrement](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#counterincrement)
- [counterReset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#counterreset)
- [counterSet](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#counterset)
- [cursor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#cursor)
- [direction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#direction)
- [display](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#display)
- [dominantBaseline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#dominantbaseline)
- [emptyCells](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#emptycells)
- [fill](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fill)
- [fillOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fillopacity)
- [fillRule](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fillrule)
- [filter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#filter)
- [flex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flex)
- [flexBasis](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexbasis)
- [flexDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexdirection)
- [flexFlow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexflow)
- [flexGrow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexgrow)
- [flexShrink](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexshrink)
- [flexWrap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#flexwrap)
- [float](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#float)
- [floodColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#floodcolor)
- [floodOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#floodopacity)
- [font](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#font)
- [fontFamily](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontfamily)
- [fontFeatureSettings](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontfeaturesettings)
- [fontKerning](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontkerning)
- [fontLanguageOverride](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontlanguageoverride)
- [fontOpticalSizing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontopticalsizing)
- [fontSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontsize)
- [fontSizeAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontsizeadjust)
- [fontSmooth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontsmooth)
- [fontStretch](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontstretch)
- [fontStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontstyle)
- [fontSynthesis](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontsynthesis)
- [fontVariant](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariant)
- [fontVariantAlternates](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariantalternates)
- [fontVariantCaps](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariantcaps)
- [fontVariantEastAsian](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvarianteastasian)
- [fontVariantLigatures](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariantligatures)
- [fontVariantNumeric](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariantnumeric)
- [fontVariantPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariantposition)
- [fontVariationSettings](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontvariationsettings)
- [fontWeight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#fontweight)
- [forcedColorAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#forcedcoloradjust)
- [gap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gap)
- [glyphOrientationVertical](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#glyphorientationvertical)
- [grid](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#grid)
- [gridArea](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridarea)
- [gridAutoColumns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridautocolumns)
- [gridAutoFlow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridautoflow)
- [gridAutoRows](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridautorows)
- [gridColumn](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridcolumn)
- [gridColumnEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridcolumnend)
- [gridColumnGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridcolumngap)
- [gridColumnStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridcolumnstart)
- [gridGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridgap)
- [gridRow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridrow)
- [gridRowEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridrowend)
- [gridRowGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridrowgap)
- [gridRowStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridrowstart)
- [gridTemplate](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridtemplate)
- [gridTemplateAreas](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridtemplateareas)
- [gridTemplateColumns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridtemplatecolumns)
- [gridTemplateRows](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#gridtemplaterows)
- [hangingPunctuation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#hangingpunctuation)
- [height](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#height)
- [hyphens](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#hyphens)
- [imageOrientation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#imageorientation)
- [imageRendering](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#imagerendering)
- [imageResolution](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#imageresolution)
- [imeMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#imemode)
- [initialLetter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#initialletter)
- [inlineSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#inlinesize)
- [inset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#inset)
- [insetBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetblock)
- [insetBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetblockend)
- [insetBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetblockstart)
- [insetInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetinline)
- [insetInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetinlineend)
- [insetInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#insetinlinestart)
- [isolation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#isolation)
- [justifyContent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#justifycontent)
- [justifyItems](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#justifyitems)
- [justifySelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#justifyself)
- [justifyTracks](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#justifytracks)
- [left](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#left)
- [letterSpacing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#letterspacing)
- [lightingColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#lightingcolor)
- [lineBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#linebreak)
- [lineClamp](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#lineclamp)
- [lineHeight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#lineheight)
- [lineHeightStep](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#lineheightstep)
- [listStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#liststyle)
- [listStyleImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#liststyleimage)
- [listStylePosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#liststyleposition)
- [listStyleType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#liststyletype)
- [margin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#margin)
- [marginBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginblock)
- [marginBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginblockend)
- [marginBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginblockstart)
- [marginBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginbottom)
- [marginInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#margininline)
- [marginInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#margininlineend)
- [marginInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#margininlinestart)
- [marginLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginleft)
- [marginRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marginright)
- [marginTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#margintop)
- [marker](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#marker)
- [markerEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#markerend)
- [markerMid](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#markermid)
- [markerStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#markerstart)
- [mask](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mask)
- [maskBorder](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskborder)
- [maskBorderMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskbordermode)
- [maskBorderOutset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskborderoutset)
- [maskBorderRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskborderrepeat)
- [maskBorderSlice](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskborderslice)
- [maskBorderSource](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskbordersource)
- [maskBorderWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskborderwidth)
- [maskClip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskclip)
- [maskComposite](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskcomposite)
- [maskImage](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskimage)
- [maskMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskmode)
- [maskOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskorigin)
- [maskPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskposition)
- [maskRepeat](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maskrepeat)
- [maskSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#masksize)
- [maskType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#masktype)
- [mathStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mathstyle)
- [maxBlockSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maxblocksize)
- [maxHeight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maxheight)
- [maxInlineSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maxinlinesize)
- [maxLines](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maxlines)
- [maxWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#maxwidth)
- [minBlockSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#minblocksize)
- [minHeight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#minheight)
- [minInlineSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mininlinesize)
- [minWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#minwidth)
- [mixBlendMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mixblendmode)
- [motion](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#motion)
- [motionDistance](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#motiondistance)
- [motionPath](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#motionpath)
- [motionRotation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#motionrotation)
- [msAccelerator](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msaccelerator)
- [msAlignSelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msalignself)
- [msBlockProgression](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msblockprogression)
- [msContentZoomChaining](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomchaining)
- [msContentZoomLimit](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomlimit)
- [msContentZoomLimitMax](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomlimitmax)
- [msContentZoomLimitMin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomlimitmin)
- [msContentZoomSnap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomsnap)
- [msContentZoomSnapPoints](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomsnappoints)
- [msContentZoomSnapType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzoomsnaptype)
- [msContentZooming](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mscontentzooming)
- [msFilter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msfilter)
- [msFlex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msflex)
- [msFlexDirection](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msflexdirection)
- [msFlexPositive](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msflexpositive)
- [msFlowFrom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msflowfrom)
- [msFlowInto](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msflowinto)
- [msGridColumns](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msgridcolumns)
- [msGridRows](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msgridrows)
- [msHighContrastAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mshighcontrastadjust)
- [msHyphenateLimitChars](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mshyphenatelimitchars)
- [msHyphenateLimitLines](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mshyphenatelimitlines)
- [msHyphenateLimitZone](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mshyphenatelimitzone)
- [msHyphens](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mshyphens)
- [msImeAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msimealign)
- [msImeMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msimemode)
- [msJustifySelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msjustifyself)
- [msLineBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mslinebreak)
- [msOrder](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msorder)
- [msOverflowStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msoverflowstyle)
- [msOverflowX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msoverflowx)
- [msOverflowY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msoverflowy)
- [msScrollChaining](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollchaining)
- [msScrollLimit](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolllimit)
- [msScrollLimitXMax](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolllimitxmax)
- [msScrollLimitXMin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolllimitxmin)
- [msScrollLimitYMax](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolllimitymax)
- [msScrollLimitYMin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolllimitymin)
- [msScrollRails](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollrails)
- [msScrollSnapPointsX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollsnappointsx)
- [msScrollSnapPointsY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollsnappointsy)
- [msScrollSnapType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollsnaptype)
- [msScrollSnapX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollsnapx)
- [msScrollSnapY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollsnapy)
- [msScrollTranslation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrolltranslation)
- [msScrollbar3dlightColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbar3dlightcolor)
- [msScrollbarArrowColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbararrowcolor)
- [msScrollbarBaseColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbarbasecolor)
- [msScrollbarDarkshadowColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbardarkshadowcolor)
- [msScrollbarFaceColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbarfacecolor)
- [msScrollbarHighlightColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbarhighlightcolor)
- [msScrollbarShadowColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbarshadowcolor)
- [msScrollbarTrackColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msscrollbartrackcolor)
- [msTextAutospace](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstextautospace)
- [msTextCombineHorizontal](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstextcombinehorizontal)
- [msTextOverflow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstextoverflow)
- [msTouchAction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstouchaction)
- [msTouchSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstouchselect)
- [msTransform](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransform)
- [msTransformOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransformorigin)
- [msTransition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransition)
- [msTransitionDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransitiondelay)
- [msTransitionDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransitionduration)
- [msTransitionProperty](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransitionproperty)
- [msTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mstransitiontimingfunction)
- [msUserSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#msuserselect)
- [msWordBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mswordbreak)
- [msWrapFlow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mswrapflow)
- [msWrapMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mswrapmargin)
- [msWrapThrough](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mswrapthrough)
- [msWritingMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#mswritingmode)
- [objectFit](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#objectfit)
- [objectPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#objectposition)
- [offset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offset)
- [offsetAnchor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetanchor)
- [offsetBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetblock)
- [offsetBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetblockend)
- [offsetBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetblockstart)
- [offsetDistance](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetdistance)
- [offsetInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetinline)
- [offsetInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetinlineend)
- [offsetInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetinlinestart)
- [offsetPath](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetpath)
- [offsetRotate](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetrotate)
- [offsetRotation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#offsetrotation)
- [opacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#opacity)
- [order](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#order)
- [orphans](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#orphans)
- [outline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#outline)
- [outlineColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#outlinecolor)
- [outlineOffset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#outlineoffset)
- [outlineStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#outlinestyle)
- [outlineWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#outlinewidth)
- [overflow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflow)
- [overflowAnchor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowanchor)
- [overflowBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowblock)
- [overflowClipBox](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowclipbox)
- [overflowClipMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowclipmargin)
- [overflowInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowinline)
- [overflowWrap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowwrap)
- [overflowX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowx)
- [overflowY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overflowy)
- [overscrollBehavior](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overscrollbehavior)
- [overscrollBehaviorBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overscrollbehaviorblock)
- [overscrollBehaviorInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overscrollbehaviorinline)
- [overscrollBehaviorX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overscrollbehaviorx)
- [overscrollBehaviorY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#overscrollbehaviory)
- [padding](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#padding)
- [paddingBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingblock)
- [paddingBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingblockend)
- [paddingBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingblockstart)
- [paddingBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingbottom)
- [paddingInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddinginline)
- [paddingInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddinginlineend)
- [paddingInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddinginlinestart)
- [paddingLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingleft)
- [paddingRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingright)
- [paddingTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paddingtop)
- [pageBreakAfter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#pagebreakafter)
- [pageBreakBefore](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#pagebreakbefore)
- [pageBreakInside](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#pagebreakinside)
- [paintOrder](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#paintorder)
- [perspective](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#perspective)
- [perspectiveOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#perspectiveorigin)
- [placeContent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#placecontent)
- [placeItems](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#placeitems)
- [placeSelf](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#placeself)
- [pointerEvents](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#pointerevents)
- [position](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#position)
- [quotes](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#quotes)
- [resize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#resize)
- [right](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#right)
- [rotate](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#rotate)
- [rowGap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#rowgap)
- [rubyAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#rubyalign)
- [rubyMerge](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#rubymerge)
- [rubyPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#rubyposition)
- [scale](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scale)
- [scrollBehavior](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollbehavior)
- [scrollMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmargin)
- [scrollMarginBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginblock)
- [scrollMarginBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginblockend)
- [scrollMarginBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginblockstart)
- [scrollMarginBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginbottom)
- [scrollMarginInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmargininline)
- [scrollMarginInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmargininlineend)
- [scrollMarginInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmargininlinestart)
- [scrollMarginLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginleft)
- [scrollMarginRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmarginright)
- [scrollMarginTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollmargintop)
- [scrollPadding](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpadding)
- [scrollPaddingBlock](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingblock)
- [scrollPaddingBlockEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingblockend)
- [scrollPaddingBlockStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingblockstart)
- [scrollPaddingBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingbottom)
- [scrollPaddingInline](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddinginline)
- [scrollPaddingInlineEnd](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddinginlineend)
- [scrollPaddingInlineStart](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddinginlinestart)
- [scrollPaddingLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingleft)
- [scrollPaddingRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingright)
- [scrollPaddingTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollpaddingtop)
- [scrollSnapAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapalign)
- [scrollSnapCoordinate](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapcoordinate)
- [scrollSnapDestination](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapdestination)
- [scrollSnapMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapmargin)
- [scrollSnapMarginBottom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapmarginbottom)
- [scrollSnapMarginLeft](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapmarginleft)
- [scrollSnapMarginRight](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapmarginright)
- [scrollSnapMarginTop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapmargintop)
- [scrollSnapPointsX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnappointsx)
- [scrollSnapPointsY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnappointsy)
- [scrollSnapStop](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnapstop)
- [scrollSnapType](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnaptype)
- [scrollSnapTypeX](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnaptypex)
- [scrollSnapTypeY](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollsnaptypey)
- [scrollbarColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollbarcolor)
- [scrollbarGutter](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollbargutter)
- [scrollbarTrackColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollbartrackcolor)
- [scrollbarWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#scrollbarwidth)
- [shapeImageThreshold](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#shapeimagethreshold)
- [shapeMargin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#shapemargin)
- [shapeOutside](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#shapeoutside)
- [shapeRendering](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#shaperendering)
- [stopColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#stopcolor)
- [stopOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#stopopacity)
- [stroke](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#stroke)
- [strokeDasharray](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokedasharray)
- [strokeDashoffset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokedashoffset)
- [strokeLinecap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokelinecap)
- [strokeLinejoin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokelinejoin)
- [strokeMiterlimit](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokemiterlimit)
- [strokeOpacity](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokeopacity)
- [strokeWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#strokewidth)
- [tabSize](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#tabsize)
- [tableLayout](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#tablelayout)
- [textAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textalign)
- [textAlignLast](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textalignlast)
- [textAnchor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textanchor)
- [textCombineUpright](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textcombineupright)
- [textDecoration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecoration)
- [textDecorationColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationcolor)
- [textDecorationLine](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationline)
- [textDecorationSkip](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationskip)
- [textDecorationSkipInk](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationskipink)
- [textDecorationStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationstyle)
- [textDecorationThickness](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationthickness)
- [textDecorationWidth](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textdecorationwidth)
- [textEmphasis](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textemphasis)
- [textEmphasisColor](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textemphasiscolor)
- [textEmphasisPosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textemphasisposition)
- [textEmphasisStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textemphasisstyle)
- [textIndent](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textindent)
- [textJustify](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textjustify)
- [textOrientation](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textorientation)
- [textOverflow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textoverflow)
- [textRendering](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textrendering)
- [textShadow](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textshadow)
- [textSizeAdjust](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textsizeadjust)
- [textTransform](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#texttransform)
- [textUnderlineOffset](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textunderlineoffset)
- [textUnderlinePosition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#textunderlineposition)
- [top](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#top)
- [touchAction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#touchaction)
- [transform](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transform)
- [transformBox](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transformbox)
- [transformOrigin](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transformorigin)
- [transformStyle](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transformstyle)
- [transition](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transition)
- [transitionDelay](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transitiondelay)
- [transitionDuration](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transitionduration)
- [transitionProperty](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transitionproperty)
- [transitionTimingFunction](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#transitiontimingfunction)
- [translate](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#translate)
- [unicodeBidi](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#unicodebidi)
- [userSelect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#userselect)
- [vectorEffect](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#vectoreffect)
- [verticalAlign](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#verticalalign)
- [visibility](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#visibility)
- [whiteSpace](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#whitespace)
- [widows](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#widows)
- [width](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#width)
- [willChange](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#willchange)
- [wordBreak](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#wordbreak)
- [wordSpacing](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#wordspacing)
- [wordWrap](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#wordwrap)
- [writingMode](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#writingmode)
- [zIndex](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#zindex)
- [zoom](components_GraphEditor_DataEditor._internal_.PropertiesFallback.md#zoom)

## Properties

### KhtmlBoxAlign

• `Optional` **KhtmlBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign) \| (`undefined` \| [`BoxAlign`](../modules/components_Container._internal_.md#boxalign))[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:7976

___

### KhtmlBoxDirection

• `Optional` **KhtmlBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection) \| (`undefined` \| [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection))[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:7986

___

### KhtmlBoxFlex

• `Optional` **KhtmlBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex) \| (`undefined` \| [`BoxFlex`](../modules/components_Container._internal_.md#boxflex))[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:7996

___

### KhtmlBoxFlexGroup

• `Optional` **KhtmlBoxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup) \| (`undefined` \| [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup))[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8006

___

### KhtmlBoxLines

• `Optional` **KhtmlBoxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines) \| (`undefined` \| [`BoxLines`](../modules/components_Container._internal_.md#boxlines))[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8016

___

### KhtmlBoxOrdinalGroup

• `Optional` **KhtmlBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup) \| (`undefined` \| [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup))[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8026

___

### KhtmlBoxOrient

• `Optional` **KhtmlBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient) \| (`undefined` \| [`BoxOrient`](../modules/components_Container._internal_.md#boxorient))[]

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8036

___

### KhtmlBoxPack

• `Optional` **KhtmlBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack) \| (`undefined` \| [`BoxPack`](../modules/components_Container._internal_.md#boxpack))[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8046

___

### KhtmlLineBreak

• `Optional` **KhtmlLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak) \| (`undefined` \| [`LineBreak`](../modules/components_Container._internal_.md#linebreak))[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlLineBreak

#### Defined in

node_modules/csstype/index.d.ts:8056

___

### KhtmlOpacity

• `Optional` **KhtmlOpacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity) \| (`undefined` \| [`Opacity`](../modules/components_Container._internal_.md#opacity))[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlOpacity

#### Defined in

node_modules/csstype/index.d.ts:8066

___

### KhtmlUserSelect

• `Optional` **KhtmlUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect) \| (`undefined` \| [`UserSelect`](../modules/components_Container._internal_.md#userselect))[]

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.KhtmlUserSelect

#### Defined in

node_modules/csstype/index.d.ts:8076

___

### MozAnimation

• `Optional` **MozAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\> \| (`undefined` \| [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>)[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimation](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimation)

#### Defined in

node_modules/csstype/index.d.ts:7539

___

### MozAnimationDelay

• `Optional` **MozAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\> \| (`undefined` \| [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>)[]

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationDelay](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationdelay)

#### Defined in

node_modules/csstype/index.d.ts:5746

___

### MozAnimationDirection

• `Optional` **MozAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection) \| (`undefined` \| [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection))[]

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationDirection](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationdirection)

#### Defined in

node_modules/csstype/index.d.ts:5754

___

### MozAnimationDuration

• `Optional` **MozAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\> \| (`undefined` \| [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>)[]

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationDuration](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationduration)

#### Defined in

node_modules/csstype/index.d.ts:5762

___

### MozAnimationFillMode

• `Optional` **MozAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode) \| (`undefined` \| [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode))[]

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationFillMode](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationfillmode)

#### Defined in

node_modules/csstype/index.d.ts:5770

___

### MozAnimationIterationCount

• `Optional` **MozAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount) \| (`undefined` \| [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount))[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationIterationCount](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationiterationcount)

#### Defined in

node_modules/csstype/index.d.ts:5778

___

### MozAnimationName

• `Optional` **MozAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname) \| (`undefined` \| [`AnimationName`](../modules/components_Container._internal_.md#animationname))[]

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationName](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationname)

#### Defined in

node_modules/csstype/index.d.ts:5786

___

### MozAnimationPlayState

• `Optional` **MozAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate) \| (`undefined` \| [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate))[]

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationPlayState](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationplaystate)

#### Defined in

node_modules/csstype/index.d.ts:5794

___

### MozAnimationTimingFunction

• `Optional` **MozAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction) \| (`undefined` \| [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction))[]

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozanimationtimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:5802

___

### MozAppearance

• `Optional` **MozAppearance**: [`MozAppearance`](../modules/components_Container._internal_.md#mozappearance) \| (`undefined` \| [`MozAppearance`](../modules/components_Container._internal_.md#mozappearance))[]

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozAppearance](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozappearance)

#### Defined in

node_modules/csstype/index.d.ts:5810

___

### MozBackfaceVisibility

• `Optional` **MozBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility) \| (`undefined` \| [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility))[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBackfaceVisibility](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozbackfacevisibility)

#### Defined in

node_modules/csstype/index.d.ts:5818

___

### MozBackgroundClip

• `Optional` **MozBackgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip) \| (`undefined` \| [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip))[]

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBackgroundClip

#### Defined in

node_modules/csstype/index.d.ts:8086

___

### MozBackgroundInlinePolicy

• `Optional` **MozBackgroundInlinePolicy**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak) \| (`undefined` \| [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak))[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBackgroundInlinePolicy

#### Defined in

node_modules/csstype/index.d.ts:8096

___

### MozBackgroundOrigin

• `Optional` **MozBackgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin) \| (`undefined` \| [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin))[]

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBackgroundOrigin

#### Defined in

node_modules/csstype/index.d.ts:8106

___

### MozBackgroundSize

• `Optional` **MozBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\> \| (`undefined` \| [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\>)[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8116

___

### MozBinding

• `Optional` **MozBinding**: [`MozBinding`](../modules/components_Container._internal_.md#mozbinding) \| (`undefined` \| [`MozBinding`](../modules/components_Container._internal_.md#mozbinding))[]

The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.

**Syntax**: `<url> | none`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBinding

#### Defined in

node_modules/csstype/index.d.ts:8126

___

### MozBorderBottomColors

• `Optional` **MozBorderBottomColors**: [`MozBorderBottomColors`](../modules/components_Container._internal_.md#mozborderbottomcolors) \| (`undefined` \| [`MozBorderBottomColors`](../modules/components_Container._internal_.md#mozborderbottomcolors))[]

In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderBottomColors](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderbottomcolors)

#### Defined in

node_modules/csstype/index.d.ts:5826

___

### MozBorderEndColor

• `Optional` **MozBorderEndColor**: [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor) \| (`undefined` \| [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor))[]

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderEndColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderendcolor)

#### Defined in

node_modules/csstype/index.d.ts:5834

___

### MozBorderEndStyle

• `Optional` **MozBorderEndStyle**: [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle) \| (`undefined` \| [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle))[]

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderEndStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderendstyle)

#### Defined in

node_modules/csstype/index.d.ts:5842

___

### MozBorderEndWidth

• `Optional` **MozBorderEndWidth**: [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`TLength`\> \| (`undefined` \| [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`TLength`\>)[]

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderEndWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderendwidth)

#### Defined in

node_modules/csstype/index.d.ts:5850

___

### MozBorderImage

• `Optional` **MozBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage) \| (`undefined` \| [`BorderImage`](../modules/components_Container._internal_.md#borderimage))[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderImage](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderimage)

#### Defined in

node_modules/csstype/index.d.ts:7545

___

### MozBorderLeftColors

• `Optional` **MozBorderLeftColors**: [`MozBorderLeftColors`](../modules/components_Container._internal_.md#mozborderleftcolors) \| (`undefined` \| [`MozBorderLeftColors`](../modules/components_Container._internal_.md#mozborderleftcolors))[]

In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderLeftColors](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderleftcolors)

#### Defined in

node_modules/csstype/index.d.ts:5858

___

### MozBorderRadius

• `Optional` **MozBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\> \| (`undefined` \| [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>)[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBorderRadius

#### Defined in

node_modules/csstype/index.d.ts:8134

___

### MozBorderRadiusBottomleft

• `Optional` **MozBorderRadiusBottomleft**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\> \| (`undefined` \| [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\>)[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBorderRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8144

___

### MozBorderRadiusBottomright

• `Optional` **MozBorderRadiusBottomright**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\> \| (`undefined` \| [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\>)[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBorderRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8154

___

### MozBorderRadiusTopleft

• `Optional` **MozBorderRadiusTopleft**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\> \| (`undefined` \| [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\>)[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBorderRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8164

___

### MozBorderRadiusTopright

• `Optional` **MozBorderRadiusTopright**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\> \| (`undefined` \| [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\>)[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBorderRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8174

___

### MozBorderRightColors

• `Optional` **MozBorderRightColors**: [`MozBorderRightColors`](../modules/components_Container._internal_.md#mozborderrightcolors) \| (`undefined` \| [`MozBorderRightColors`](../modules/components_Container._internal_.md#mozborderrightcolors))[]

In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderRightColors](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderrightcolors)

#### Defined in

node_modules/csstype/index.d.ts:5866

___

### MozBorderStartColor

• `Optional` **MozBorderStartColor**: [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor) \| (`undefined` \| [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor))[]

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderStartColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderstartcolor)

#### Defined in

node_modules/csstype/index.d.ts:5874

___

### MozBorderStartStyle

• `Optional` **MozBorderStartStyle**: [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle) \| (`undefined` \| [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle))[]

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderStartStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozborderstartstyle)

#### Defined in

node_modules/csstype/index.d.ts:5882

___

### MozBorderTopColors

• `Optional` **MozBorderTopColors**: [`MozBorderTopColors`](../modules/components_Container._internal_.md#mozbordertopcolors) \| (`undefined` \| [`MozBorderTopColors`](../modules/components_Container._internal_.md#mozbordertopcolors))[]

In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.

**Syntax**: `<color>+ | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBorderTopColors](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozbordertopcolors)

#### Defined in

node_modules/csstype/index.d.ts:5890

___

### MozBoxAlign

• `Optional` **MozBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign) \| (`undefined` \| [`BoxAlign`](../modules/components_Container._internal_.md#boxalign))[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8184

___

### MozBoxDirection

• `Optional` **MozBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection) \| (`undefined` \| [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection))[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8194

___

### MozBoxFlex

• `Optional` **MozBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex) \| (`undefined` \| [`BoxFlex`](../modules/components_Container._internal_.md#boxflex))[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8204

___

### MozBoxOrdinalGroup

• `Optional` **MozBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup) \| (`undefined` \| [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup))[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8214

___

### MozBoxOrient

• `Optional` **MozBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient) \| (`undefined` \| [`BoxOrient`](../modules/components_Container._internal_.md#boxorient))[]

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8224

___

### MozBoxPack

• `Optional` **MozBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack) \| (`undefined` \| [`BoxPack`](../modules/components_Container._internal_.md#boxpack))[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8234

___

### MozBoxShadow

• `Optional` **MozBoxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow) \| (`undefined` \| [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow))[]

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozBoxShadow

#### Defined in

node_modules/csstype/index.d.ts:8244

___

### MozBoxSizing

• `Optional` **MozBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing) \| (`undefined` \| [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing))[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozBoxSizing](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozboxsizing)

#### Defined in

node_modules/csstype/index.d.ts:5898

___

### MozColumnCount

• `Optional` **MozColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount) \| (`undefined` \| [`ColumnCount`](../modules/components_Container._internal_.md#columncount))[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnCount](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumncount)

#### Defined in

node_modules/csstype/index.d.ts:5906

___

### MozColumnFill

• `Optional` **MozColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill) \| (`undefined` \| [`ColumnFill`](../modules/components_Container._internal_.md#columnfill))[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnFill](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnfill)

#### Defined in

node_modules/csstype/index.d.ts:5914

___

### MozColumnGap

• `Optional` **MozColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\> \| (`undefined` \| [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\>)[]

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnGap](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumngap)

#### Defined in

node_modules/csstype/index.d.ts:5922

___

### MozColumnRule

• `Optional` **MozColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\> \| (`undefined` \| [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>)[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnRule](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnrule)

#### Defined in

node_modules/csstype/index.d.ts:7551

___

### MozColumnRuleColor

• `Optional` **MozColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor) \| (`undefined` \| [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor))[]

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnRuleColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnrulecolor)

#### Defined in

node_modules/csstype/index.d.ts:5930

___

### MozColumnRuleStyle

• `Optional` **MozColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle) \| (`undefined` \| [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle))[]

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnRuleStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnrulestyle)

#### Defined in

node_modules/csstype/index.d.ts:5938

___

### MozColumnRuleWidth

• `Optional` **MozColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\> \| (`undefined` \| [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\>)[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnRuleWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnrulewidth)

#### Defined in

node_modules/csstype/index.d.ts:5946

___

### MozColumnWidth

• `Optional` **MozColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\> \| (`undefined` \| [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\>)[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumnWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumnwidth)

#### Defined in

node_modules/csstype/index.d.ts:5954

___

### MozColumns

• `Optional` **MozColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\> \| (`undefined` \| [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>)[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozColumns](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcolumns)

#### Defined in

node_modules/csstype/index.d.ts:7557

___

### MozContextProperties

• `Optional` **MozContextProperties**: [`MozContextProperties`](../modules/components_Container._internal_.md#mozcontextproperties) \| (`undefined` \| [`MozContextProperties`](../modules/components_Container._internal_.md#mozcontextproperties))[]

The `**-moz-context-properties**` property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.

**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozContextProperties](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozcontextproperties)

#### Defined in

node_modules/csstype/index.d.ts:5962

___

### MozFloatEdge

• `Optional` **MozFloatEdge**: [`MozFloatEdge`](../modules/components_Container._internal_.md#mozfloatedge) \| (`undefined` \| [`MozFloatEdge`](../modules/components_Container._internal_.md#mozfloatedge))[]

The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.

**Syntax**: `border-box | content-box | margin-box | padding-box`

**Initial value**: `content-box`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozFloatEdge

#### Defined in

node_modules/csstype/index.d.ts:8254

___

### MozFontFeatureSettings

• `Optional` **MozFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings) \| (`undefined` \| [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings))[]

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozFontFeatureSettings](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozfontfeaturesettings)

#### Defined in

node_modules/csstype/index.d.ts:5970

___

### MozFontLanguageOverride

• `Optional` **MozFontLanguageOverride**: [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride) \| (`undefined` \| [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride))[]

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozFontLanguageOverride](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozfontlanguageoverride)

#### Defined in

node_modules/csstype/index.d.ts:5978

___

### MozForceBrokenImageIcon

• `Optional` **MozForceBrokenImageIcon**: [`MozForceBrokenImageIcon`](../modules/components_Container._internal_.md#mozforcebrokenimageicon) \| (`undefined` \| [`MozForceBrokenImageIcon`](../modules/components_Container._internal_.md#mozforcebrokenimageicon))[]

The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.

**Syntax**: `0 | 1`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozForceBrokenImageIcon

#### Defined in

node_modules/csstype/index.d.ts:8264

___

### MozHyphens

• `Optional` **MozHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens) \| (`undefined` \| [`Hyphens`](../modules/components_Container._internal_.md#hyphens))[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozHyphens](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozhyphens)

#### Defined in

node_modules/csstype/index.d.ts:5986

___

### MozImageRegion

• `Optional` **MozImageRegion**: [`MozImageRegion`](../modules/components_Container._internal_.md#mozimageregion) \| (`undefined` \| [`MozImageRegion`](../modules/components_Container._internal_.md#mozimageregion))[]

For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozImageRegion](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozimageregion)

#### Defined in

node_modules/csstype/index.d.ts:5994

___

### MozMarginEnd

• `Optional` **MozMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\> \| (`undefined` \| [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\>)[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozMarginEnd](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozmarginend)

#### Defined in

node_modules/csstype/index.d.ts:6002

___

### MozMarginStart

• `Optional` **MozMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\> \| (`undefined` \| [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\>)[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozMarginStart](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozmarginstart)

#### Defined in

node_modules/csstype/index.d.ts:6010

___

### MozOpacity

• `Optional` **MozOpacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity) \| (`undefined` \| [`Opacity`](../modules/components_Container._internal_.md#opacity))[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOpacity

#### Defined in

node_modules/csstype/index.d.ts:8274

___

### MozOrient

• `Optional` **MozOrient**: [`MozOrient`](../modules/components_Container._internal_.md#mozorient) \| (`undefined` \| [`MozOrient`](../modules/components_Container._internal_.md#mozorient))[]

The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.

**Syntax**: `inline | block | horizontal | vertical`

**Initial value**: `inline`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozOrient](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozorient)

#### Defined in

node_modules/csstype/index.d.ts:6018

___

### MozOsxFontSmoothing

• `Optional` **MozOsxFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\> \| (`undefined` \| [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\>)[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozOsxFontSmoothing](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozosxfontsmoothing)

#### Defined in

node_modules/csstype/index.d.ts:6026

___

### MozOutline

• `Optional` **MozOutline**: [`Outline`](../modules/components_Container._internal_.md#outline)<`TLength`\> \| (`undefined` \| [`Outline`](../modules/components_Container._internal_.md#outline)<`TLength`\>)[]

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutline

#### Defined in

node_modules/csstype/index.d.ts:8282

___

### MozOutlineColor

• `Optional` **MozOutlineColor**: [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor) \| (`undefined` \| [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor))[]

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineColor

#### Defined in

node_modules/csstype/index.d.ts:8292

___

### MozOutlineRadius

• `Optional` **MozOutlineRadius**: [`MozOutlineRadius`](../modules/components_Container._internal_.md#mozoutlineradius)<`TLength`\> \| (`undefined` \| [`MozOutlineRadius`](../modules/components_Container._internal_.md#mozoutlineradius)<`TLength`\>)[]

In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.

**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineRadius

#### Defined in

node_modules/csstype/index.d.ts:8300

___

### MozOutlineRadiusBottomleft

• `Optional` **MozOutlineRadiusBottomleft**: [`MozOutlineRadiusBottomleft`](../modules/components_Container._internal_.md#mozoutlineradiusbottomleft)<`TLength`\> \| (`undefined` \| [`MozOutlineRadiusBottomleft`](../modules/components_Container._internal_.md#mozoutlineradiusbottomleft)<`TLength`\>)[]

In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineRadiusBottomleft

#### Defined in

node_modules/csstype/index.d.ts:8310

___

### MozOutlineRadiusBottomright

• `Optional` **MozOutlineRadiusBottomright**: [`MozOutlineRadiusBottomright`](../modules/components_Container._internal_.md#mozoutlineradiusbottomright)<`TLength`\> \| (`undefined` \| [`MozOutlineRadiusBottomright`](../modules/components_Container._internal_.md#mozoutlineradiusbottomright)<`TLength`\>)[]

In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineRadiusBottomright

#### Defined in

node_modules/csstype/index.d.ts:8320

___

### MozOutlineRadiusTopleft

• `Optional` **MozOutlineRadiusTopleft**: [`MozOutlineRadiusTopleft`](../modules/components_Container._internal_.md#mozoutlineradiustopleft)<`TLength`\> \| (`undefined` \| [`MozOutlineRadiusTopleft`](../modules/components_Container._internal_.md#mozoutlineradiustopleft)<`TLength`\>)[]

In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineRadiusTopleft

#### Defined in

node_modules/csstype/index.d.ts:8330

___

### MozOutlineRadiusTopright

• `Optional` **MozOutlineRadiusTopright**: [`MozOutlineRadiusTopright`](../modules/components_Container._internal_.md#mozoutlineradiustopright)<`TLength`\> \| (`undefined` \| [`MozOutlineRadiusTopright`](../modules/components_Container._internal_.md#mozoutlineradiustopright)<`TLength`\>)[]

In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.

**Syntax**: `<outline-radius>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineRadiusTopright

#### Defined in

node_modules/csstype/index.d.ts:8340

___

### MozOutlineStyle

• `Optional` **MozOutlineStyle**: [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle) \| (`undefined` \| [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle))[]

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineStyle

#### Defined in

node_modules/csstype/index.d.ts:8350

___

### MozOutlineWidth

• `Optional` **MozOutlineWidth**: [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`TLength`\> \| (`undefined` \| [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`TLength`\>)[]

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozOutlineWidth

#### Defined in

node_modules/csstype/index.d.ts:8360

___

### MozPaddingEnd

• `Optional` **MozPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\> \| (`undefined` \| [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\>)[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozPaddingEnd](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozpaddingend)

#### Defined in

node_modules/csstype/index.d.ts:6034

___

### MozPaddingStart

• `Optional` **MozPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\> \| (`undefined` \| [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\>)[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozPaddingStart](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozpaddingstart)

#### Defined in

node_modules/csstype/index.d.ts:6042

___

### MozPerspective

• `Optional` **MozPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\> \| (`undefined` \| [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\>)[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozPerspective](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozperspective)

#### Defined in

node_modules/csstype/index.d.ts:6050

___

### MozPerspectiveOrigin

• `Optional` **MozPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\> \| (`undefined` \| [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\>)[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozperspectiveorigin)

#### Defined in

node_modules/csstype/index.d.ts:6058

___

### MozStackSizing

• `Optional` **MozStackSizing**: [`MozStackSizing`](../modules/components_Container._internal_.md#mozstacksizing) \| (`undefined` \| [`MozStackSizing`](../modules/components_Container._internal_.md#mozstacksizing))[]

**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.

**Syntax**: `ignore | stretch-to-fit`

**Initial value**: `stretch-to-fit`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozStackSizing](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozstacksizing)

#### Defined in

node_modules/csstype/index.d.ts:6066

___

### MozTabSize

• `Optional` **MozTabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\> \| (`undefined` \| [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\>)[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTabSize](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztabsize)

#### Defined in

node_modules/csstype/index.d.ts:6074

___

### MozTextAlignLast

• `Optional` **MozTextAlignLast**: [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast) \| (`undefined` \| [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast))[]

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozTextAlignLast

#### Defined in

node_modules/csstype/index.d.ts:8370

___

### MozTextBlink

• `Optional` **MozTextBlink**: [`MozTextBlink`](../modules/components_Container._internal_.md#moztextblink) \| (`undefined` \| [`MozTextBlink`](../modules/components_Container._internal_.md#moztextblink))[]

The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.

**Syntax**: `none | blink`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTextBlink](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztextblink)

#### Defined in

node_modules/csstype/index.d.ts:6082

___

### MozTextDecorationColor

• `Optional` **MozTextDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor) \| (`undefined` \| [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor))[]

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozTextDecorationColor

#### Defined in

node_modules/csstype/index.d.ts:8380

___

### MozTextDecorationLine

• `Optional` **MozTextDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline) \| (`undefined` \| [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline))[]

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozTextDecorationLine

#### Defined in

node_modules/csstype/index.d.ts:8390

___

### MozTextDecorationStyle

• `Optional` **MozTextDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle) \| (`undefined` \| [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle))[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozTextDecorationStyle

#### Defined in

node_modules/csstype/index.d.ts:8400

___

### MozTextSizeAdjust

• `Optional` **MozTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust) \| (`undefined` \| [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust))[]

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTextSizeAdjust](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztextsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:6090

___

### MozTransformOrigin

• `Optional` **MozTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\> \| (`undefined` \| [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>)[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransformOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:6098

___

### MozTransformStyle

• `Optional` **MozTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle) \| (`undefined` \| [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle))[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransformStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransformstyle)

#### Defined in

node_modules/csstype/index.d.ts:6106

___

### MozTransition

• `Optional` **MozTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\> \| (`undefined` \| [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>)[]

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransition)

#### Defined in

node_modules/csstype/index.d.ts:7563

___

### MozTransitionDelay

• `Optional` **MozTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\> \| (`undefined` \| [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>)[]

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransitionDelay](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:6114

___

### MozTransitionDuration

• `Optional` **MozTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\> \| (`undefined` \| [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>)[]

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransitionDuration](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:6122

___

### MozTransitionProperty

• `Optional` **MozTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty) \| (`undefined` \| [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty))[]

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransitionProperty](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:6130

___

### MozTransitionTimingFunction

• `Optional` **MozTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction) \| (`undefined` \| [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction))[]

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#moztransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6138

___

### MozUserFocus

• `Optional` **MozUserFocus**: [`MozUserFocus`](../modules/components_Container._internal_.md#mozuserfocus) \| (`undefined` \| [`MozUserFocus`](../modules/components_Container._internal_.md#mozuserfocus))[]

The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.

**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozUserFocus](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozuserfocus)

#### Defined in

node_modules/csstype/index.d.ts:6146

___

### MozUserInput

• `Optional` **MozUserInput**: [`MozUserInput`](../modules/components_Container._internal_.md#mozuserinput) \| (`undefined` \| [`MozUserInput`](../modules/components_Container._internal_.md#mozuserinput))[]

In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.

**Syntax**: `auto | none | enabled | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.MozUserInput

#### Defined in

node_modules/csstype/index.d.ts:8410

___

### MozUserModify

• `Optional` **MozUserModify**: [`MozUserModify`](../modules/components_Container._internal_.md#mozusermodify) \| (`undefined` \| [`MozUserModify`](../modules/components_Container._internal_.md#mozusermodify))[]

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

**Syntax**: `read-only | read-write | write-only`

**Initial value**: `read-only`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozUserModify](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozusermodify)

#### Defined in

node_modules/csstype/index.d.ts:6154

___

### MozUserSelect

• `Optional` **MozUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect) \| (`undefined` \| [`UserSelect`](../modules/components_Container._internal_.md#userselect))[]

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozUserSelect](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozuserselect)

#### Defined in

node_modules/csstype/index.d.ts:6162

___

### MozWindowDragging

• `Optional` **MozWindowDragging**: [`MozWindowDragging`](../modules/components_Container._internal_.md#mozwindowdragging) \| (`undefined` \| [`MozWindowDragging`](../modules/components_Container._internal_.md#mozwindowdragging))[]

The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.

**Syntax**: `drag | no-drag`

**Initial value**: `drag`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozWindowDragging](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozwindowdragging)

#### Defined in

node_modules/csstype/index.d.ts:6170

___

### MozWindowShadow

• `Optional` **MozWindowShadow**: [`MozWindowShadow`](../modules/components_Container._internal_.md#mozwindowshadow) \| (`undefined` \| [`MozWindowShadow`](../modules/components_Container._internal_.md#mozwindowshadow))[]

The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.

**Syntax**: `default | menu | tooltip | sheet | none`

**Initial value**: `default`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[MozWindowShadow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mozwindowshadow)

#### Defined in

node_modules/csstype/index.d.ts:6178

___

### OAnimation

• `Optional` **OAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\> \| (`undefined` \| [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>)[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimation

#### Defined in

node_modules/csstype/index.d.ts:8438

___

### OAnimationDelay

• `Optional` **OAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\> \| (`undefined` \| [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>)[]

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationDelay

#### Defined in

node_modules/csstype/index.d.ts:8448

___

### OAnimationDirection

• `Optional` **OAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection) \| (`undefined` \| [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection))[]

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationDirection

#### Defined in

node_modules/csstype/index.d.ts:8458

___

### OAnimationDuration

• `Optional` **OAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\> \| (`undefined` \| [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>)[]

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationDuration

#### Defined in

node_modules/csstype/index.d.ts:8468

___

### OAnimationFillMode

• `Optional` **OAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode) \| (`undefined` \| [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode))[]

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationFillMode

#### Defined in

node_modules/csstype/index.d.ts:8478

___

### OAnimationIterationCount

• `Optional` **OAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount) \| (`undefined` \| [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount))[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationIterationCount

#### Defined in

node_modules/csstype/index.d.ts:8488

___

### OAnimationName

• `Optional` **OAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname) \| (`undefined` \| [`AnimationName`](../modules/components_Container._internal_.md#animationname))[]

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationName

#### Defined in

node_modules/csstype/index.d.ts:8498

___

### OAnimationPlayState

• `Optional` **OAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate) \| (`undefined` \| [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate))[]

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationPlayState

#### Defined in

node_modules/csstype/index.d.ts:8508

___

### OAnimationTimingFunction

• `Optional` **OAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction) \| (`undefined` \| [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction))[]

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OAnimationTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8518

___

### OBackgroundSize

• `Optional` **OBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\> \| (`undefined` \| [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\>)[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OBackgroundSize

#### Defined in

node_modules/csstype/index.d.ts:8528

___

### OBorderImage

• `Optional` **OBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage) \| (`undefined` \| [`BorderImage`](../modules/components_Container._internal_.md#borderimage))[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OBorderImage

#### Defined in

node_modules/csstype/index.d.ts:8536

___

### OObjectFit

• `Optional` **OObjectFit**: [`ObjectFit`](../modules/components_Container._internal_.md#objectfit) \| (`undefined` \| [`ObjectFit`](../modules/components_Container._internal_.md#objectfit))[]

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OObjectFit

#### Defined in

node_modules/csstype/index.d.ts:8546

___

### OObjectPosition

• `Optional` **OObjectPosition**: [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`TLength`\> \| (`undefined` \| [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`TLength`\>)[]

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OObjectPosition

#### Defined in

node_modules/csstype/index.d.ts:8556

___

### OTabSize

• `Optional` **OTabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\> \| (`undefined` \| [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\>)[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTabSize

#### Defined in

node_modules/csstype/index.d.ts:8566

___

### OTextOverflow

• `Optional` **OTextOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow) \| (`undefined` \| [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow))[]

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTextOverflow

#### Defined in

node_modules/csstype/index.d.ts:8576

___

### OTransform

• `Optional` **OTransform**: [`Transform`](../modules/components_Container._internal_.md#transform) \| (`undefined` \| [`Transform`](../modules/components_Container._internal_.md#transform))[]

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransform

#### Defined in

node_modules/csstype/index.d.ts:8586

___

### OTransformOrigin

• `Optional` **OTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\> \| (`undefined` \| [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>)[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransformOrigin

#### Defined in

node_modules/csstype/index.d.ts:8596

___

### OTransition

• `Optional` **OTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\> \| (`undefined` \| [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>)[]

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransition

#### Defined in

node_modules/csstype/index.d.ts:8604

___

### OTransitionDelay

• `Optional` **OTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\> \| (`undefined` \| [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>)[]

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransitionDelay

#### Defined in

node_modules/csstype/index.d.ts:8614

___

### OTransitionDuration

• `Optional` **OTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\> \| (`undefined` \| [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>)[]

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransitionDuration

#### Defined in

node_modules/csstype/index.d.ts:8624

___

### OTransitionProperty

• `Optional` **OTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty) \| (`undefined` \| [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty))[]

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransitionProperty

#### Defined in

node_modules/csstype/index.d.ts:8634

___

### OTransitionTimingFunction

• `Optional` **OTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction) \| (`undefined` \| [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction))[]

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.OTransitionTimingFunction

#### Defined in

node_modules/csstype/index.d.ts:8644

___

### WebkitAlignContent

• `Optional` **WebkitAlignContent**: [`AlignContent`](../modules/components_Container._internal_.md#aligncontent) \| (`undefined` \| [`AlignContent`](../modules/components_Container._internal_.md#aligncontent))[]

The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAlignContent](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitaligncontent)

#### Defined in

node_modules/csstype/index.d.ts:6682

___

### WebkitAlignItems

• `Optional` **WebkitAlignItems**: [`AlignItems`](../modules/components_Container._internal_.md#alignitems) \| (`undefined` \| [`AlignItems`](../modules/components_Container._internal_.md#alignitems))[]

The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAlignItems](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitalignitems)

#### Defined in

node_modules/csstype/index.d.ts:6690

___

### WebkitAlignSelf

• `Optional` **WebkitAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself) \| (`undefined` \| [`AlignSelf`](../modules/components_Container._internal_.md#alignself))[]

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAlignSelf](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitalignself)

#### Defined in

node_modules/csstype/index.d.ts:6698

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\> \| (`undefined` \| [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>)[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimation](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimation)

#### Defined in

node_modules/csstype/index.d.ts:7611

___

### WebkitAnimationDelay

• `Optional` **WebkitAnimationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\> \| (`undefined` \| [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>)[]

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationDelay](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationdelay)

#### Defined in

node_modules/csstype/index.d.ts:6706

___

### WebkitAnimationDirection

• `Optional` **WebkitAnimationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection) \| (`undefined` \| [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection))[]

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationDirection](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationdirection)

#### Defined in

node_modules/csstype/index.d.ts:6714

___

### WebkitAnimationDuration

• `Optional` **WebkitAnimationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\> \| (`undefined` \| [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>)[]

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationDuration](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationduration)

#### Defined in

node_modules/csstype/index.d.ts:6722

___

### WebkitAnimationFillMode

• `Optional` **WebkitAnimationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode) \| (`undefined` \| [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode))[]

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationFillMode](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationfillmode)

#### Defined in

node_modules/csstype/index.d.ts:6730

___

### WebkitAnimationIterationCount

• `Optional` **WebkitAnimationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount) \| (`undefined` \| [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount))[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationIterationCount](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationiterationcount)

#### Defined in

node_modules/csstype/index.d.ts:6738

___

### WebkitAnimationName

• `Optional` **WebkitAnimationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname) \| (`undefined` \| [`AnimationName`](../modules/components_Container._internal_.md#animationname))[]

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationName](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationname)

#### Defined in

node_modules/csstype/index.d.ts:6746

___

### WebkitAnimationPlayState

• `Optional` **WebkitAnimationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate) \| (`undefined` \| [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate))[]

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationPlayState](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationplaystate)

#### Defined in

node_modules/csstype/index.d.ts:6754

___

### WebkitAnimationTimingFunction

• `Optional` **WebkitAnimationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction) \| (`undefined` \| [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction))[]

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAnimationTimingFunction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitanimationtimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6762

___

### WebkitAppearance

• `Optional` **WebkitAppearance**: [`WebkitAppearance`](../modules/components_Container._internal_.md#webkitappearance) \| (`undefined` \| [`WebkitAppearance`](../modules/components_Container._internal_.md#webkitappearance))[]

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`

**Initial value**: `none` (but this value is overridden in the user agent CSS)

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitAppearance](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitappearance)

#### Defined in

node_modules/csstype/index.d.ts:6770

___

### WebkitBackdropFilter

• `Optional` **WebkitBackdropFilter**: [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter) \| (`undefined` \| [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter))[]

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBackdropFilter](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbackdropfilter)

#### Defined in

node_modules/csstype/index.d.ts:6778

___

### WebkitBackfaceVisibility

• `Optional` **WebkitBackfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility) \| (`undefined` \| [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility))[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBackfaceVisibility](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbackfacevisibility)

#### Defined in

node_modules/csstype/index.d.ts:6786

___

### WebkitBackgroundClip

• `Optional` **WebkitBackgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip) \| (`undefined` \| [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip))[]

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBackgroundClip](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbackgroundclip)

#### Defined in

node_modules/csstype/index.d.ts:6794

___

### WebkitBackgroundOrigin

• `Optional` **WebkitBackgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin) \| (`undefined` \| [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin))[]

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBackgroundOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbackgroundorigin)

#### Defined in

node_modules/csstype/index.d.ts:6802

___

### WebkitBackgroundSize

• `Optional` **WebkitBackgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\> \| (`undefined` \| [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\>)[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBackgroundSize](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbackgroundsize)

#### Defined in

node_modules/csstype/index.d.ts:6810

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: [`WebkitBorderBefore`](../modules/components_Container._internal_.md#webkitborderbefore)<`TLength`\> \| (`undefined` \| [`WebkitBorderBefore`](../modules/components_Container._internal_.md#webkitborderbefore)<`TLength`\>)[]

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBefore](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbefore)

#### Defined in

node_modules/csstype/index.d.ts:7617

___

### WebkitBorderBeforeColor

• `Optional` **WebkitBorderBeforeColor**: [`WebkitBorderBeforeColor`](../modules/components_Container._internal_.md#webkitborderbeforecolor) \| (`undefined` \| [`WebkitBorderBeforeColor`](../modules/components_Container._internal_.md#webkitborderbeforecolor))[]

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBeforeColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbeforecolor)

#### Defined in

node_modules/csstype/index.d.ts:6816

___

### WebkitBorderBeforeStyle

• `Optional` **WebkitBorderBeforeStyle**: [`WebkitBorderBeforeStyle`](../modules/components_Container._internal_.md#webkitborderbeforestyle) \| (`undefined` \| [`WebkitBorderBeforeStyle`](../modules/components_Container._internal_.md#webkitborderbeforestyle))[]

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBeforeStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbeforestyle)

#### Defined in

node_modules/csstype/index.d.ts:6822

___

### WebkitBorderBeforeWidth

• `Optional` **WebkitBorderBeforeWidth**: [`WebkitBorderBeforeWidth`](../modules/components_Container._internal_.md#webkitborderbeforewidth)<`TLength`\> \| (`undefined` \| [`WebkitBorderBeforeWidth`](../modules/components_Container._internal_.md#webkitborderbeforewidth)<`TLength`\>)[]

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBeforeWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbeforewidth)

#### Defined in

node_modules/csstype/index.d.ts:6828

___

### WebkitBorderBottomLeftRadius

• `Optional` **WebkitBorderBottomLeftRadius**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\> \| (`undefined` \| [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\>)[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbottomleftradius)

#### Defined in

node_modules/csstype/index.d.ts:6836

___

### WebkitBorderBottomRightRadius

• `Optional` **WebkitBorderBottomRightRadius**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\> \| (`undefined` \| [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\>)[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderBottomRightRadius](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderbottomrightradius)

#### Defined in

node_modules/csstype/index.d.ts:6844

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage) \| (`undefined` \| [`BorderImage`](../modules/components_Container._internal_.md#borderimage))[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderImage](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderimage)

#### Defined in

node_modules/csstype/index.d.ts:7623

___

### WebkitBorderImageSlice

• `Optional` **WebkitBorderImageSlice**: [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice) \| (`undefined` \| [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice))[]

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderImageSlice](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderimageslice)

#### Defined in

node_modules/csstype/index.d.ts:6852

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\> \| (`undefined` \| [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>)[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderRadius](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitborderradius)

#### Defined in

node_modules/csstype/index.d.ts:7629

___

### WebkitBorderTopLeftRadius

• `Optional` **WebkitBorderTopLeftRadius**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\> \| (`undefined` \| [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\>)[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderTopLeftRadius](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbordertopleftradius)

#### Defined in

node_modules/csstype/index.d.ts:6860

___

### WebkitBorderTopRightRadius

• `Optional` **WebkitBorderTopRightRadius**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\> \| (`undefined` \| [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\>)[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBorderTopRightRadius](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitbordertoprightradius)

#### Defined in

node_modules/csstype/index.d.ts:6868

___

### WebkitBoxAlign

• `Optional` **WebkitBoxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign) \| (`undefined` \| [`BoxAlign`](../modules/components_Container._internal_.md#boxalign))[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxAlign

#### Defined in

node_modules/csstype/index.d.ts:8654

___

### WebkitBoxDecorationBreak

• `Optional` **WebkitBoxDecorationBreak**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak) \| (`undefined` \| [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak))[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBoxDecorationBreak](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitboxdecorationbreak)

#### Defined in

node_modules/csstype/index.d.ts:6876

___

### WebkitBoxDirection

• `Optional` **WebkitBoxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection) \| (`undefined` \| [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection))[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxDirection

#### Defined in

node_modules/csstype/index.d.ts:8664

___

### WebkitBoxFlex

• `Optional` **WebkitBoxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex) \| (`undefined` \| [`BoxFlex`](../modules/components_Container._internal_.md#boxflex))[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxFlex

#### Defined in

node_modules/csstype/index.d.ts:8674

___

### WebkitBoxFlexGroup

• `Optional` **WebkitBoxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup) \| (`undefined` \| [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup))[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:8684

___

### WebkitBoxLines

• `Optional` **WebkitBoxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines) \| (`undefined` \| [`BoxLines`](../modules/components_Container._internal_.md#boxlines))[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxLines

#### Defined in

node_modules/csstype/index.d.ts:8694

___

### WebkitBoxOrdinalGroup

• `Optional` **WebkitBoxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup) \| (`undefined` \| [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup))[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:8704

___

### WebkitBoxOrient

• `Optional` **WebkitBoxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient) \| (`undefined` \| [`BoxOrient`](../modules/components_Container._internal_.md#boxorient))[]

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxOrient

#### Defined in

node_modules/csstype/index.d.ts:8714

___

### WebkitBoxPack

• `Optional` **WebkitBoxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack) \| (`undefined` \| [`BoxPack`](../modules/components_Container._internal_.md#boxpack))[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitBoxPack

#### Defined in

node_modules/csstype/index.d.ts:8724

___

### WebkitBoxReflect

• `Optional` **WebkitBoxReflect**: [`WebkitBoxReflect`](../modules/components_Container._internal_.md#webkitboxreflect)<`TLength`\> \| (`undefined` \| [`WebkitBoxReflect`](../modules/components_Container._internal_.md#webkitboxreflect)<`TLength`\>)[]

The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.

**Syntax**: `[ above | below | right | left ]? <length>? <image>?`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBoxReflect](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitboxreflect)

#### Defined in

node_modules/csstype/index.d.ts:6884

___

### WebkitBoxShadow

• `Optional` **WebkitBoxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow) \| (`undefined` \| [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow))[]

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBoxShadow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitboxshadow)

#### Defined in

node_modules/csstype/index.d.ts:6892

___

### WebkitBoxSizing

• `Optional` **WebkitBoxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing) \| (`undefined` \| [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing))[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitBoxSizing](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitboxsizing)

#### Defined in

node_modules/csstype/index.d.ts:6900

___

### WebkitClipPath

• `Optional` **WebkitClipPath**: [`ClipPath`](../modules/components_Container._internal_.md#clippath) \| (`undefined` \| [`ClipPath`](../modules/components_Container._internal_.md#clippath))[]

The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitClipPath](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitclippath)

#### Defined in

node_modules/csstype/index.d.ts:6908

___

### WebkitColumnCount

• `Optional` **WebkitColumnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount) \| (`undefined` \| [`ColumnCount`](../modules/components_Container._internal_.md#columncount))[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnCount](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumncount)

#### Defined in

node_modules/csstype/index.d.ts:6916

___

### WebkitColumnFill

• `Optional` **WebkitColumnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill) \| (`undefined` \| [`ColumnFill`](../modules/components_Container._internal_.md#columnfill))[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnFill](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnfill)

#### Defined in

node_modules/csstype/index.d.ts:6924

___

### WebkitColumnGap

• `Optional` **WebkitColumnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\> \| (`undefined` \| [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\>)[]

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `normal | <length-percentage>`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnGap](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumngap)

#### Defined in

node_modules/csstype/index.d.ts:6932

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\> \| (`undefined` \| [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>)[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnRule](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnrule)

#### Defined in

node_modules/csstype/index.d.ts:7635

___

### WebkitColumnRuleColor

• `Optional` **WebkitColumnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor) \| (`undefined` \| [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor))[]

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnRuleColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnrulecolor)

#### Defined in

node_modules/csstype/index.d.ts:6940

___

### WebkitColumnRuleStyle

• `Optional` **WebkitColumnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle) \| (`undefined` \| [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle))[]

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnRuleStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnrulestyle)

#### Defined in

node_modules/csstype/index.d.ts:6948

___

### WebkitColumnRuleWidth

• `Optional` **WebkitColumnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\> \| (`undefined` \| [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\>)[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnRuleWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnrulewidth)

#### Defined in

node_modules/csstype/index.d.ts:6956

___

### WebkitColumnSpan

• `Optional` **WebkitColumnSpan**: [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan) \| (`undefined` \| [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan))[]

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnSpan](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnspan)

#### Defined in

node_modules/csstype/index.d.ts:6964

___

### WebkitColumnWidth

• `Optional` **WebkitColumnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\> \| (`undefined` \| [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\>)[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumnWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumnwidth)

#### Defined in

node_modules/csstype/index.d.ts:6972

___

### WebkitColumns

• `Optional` **WebkitColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\> \| (`undefined` \| [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>)[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitColumns](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitcolumns)

#### Defined in

node_modules/csstype/index.d.ts:7641

___

### WebkitFilter

• `Optional` **WebkitFilter**: [`Filter`](../modules/components_Container._internal_.md#filter) \| (`undefined` \| [`Filter`](../modules/components_Container._internal_.md#filter))[]

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFilter](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitfilter)

#### Defined in

node_modules/csstype/index.d.ts:6980

___

### WebkitFlex

• `Optional` **WebkitFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\> \| (`undefined` \| [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>)[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlex](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflex)

#### Defined in

node_modules/csstype/index.d.ts:7647

___

### WebkitFlexBasis

• `Optional` **WebkitFlexBasis**: [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`TLength`\> \| (`undefined` \| [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`TLength`\>)[]

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexBasis](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexbasis)

#### Defined in

node_modules/csstype/index.d.ts:6988

___

### WebkitFlexDirection

• `Optional` **WebkitFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection) \| (`undefined` \| [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection))[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexDirection](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexdirection)

#### Defined in

node_modules/csstype/index.d.ts:6996

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow) \| (`undefined` \| [`FlexFlow`](../modules/components_Container._internal_.md#flexflow))[]

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexFlow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexflow)

#### Defined in

node_modules/csstype/index.d.ts:7653

___

### WebkitFlexGrow

• `Optional` **WebkitFlexGrow**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow) \| (`undefined` \| [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow))[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexGrow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexgrow)

#### Defined in

node_modules/csstype/index.d.ts:7004

___

### WebkitFlexShrink

• `Optional` **WebkitFlexShrink**: [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink) \| (`undefined` \| [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink))[]

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexShrink](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexshrink)

#### Defined in

node_modules/csstype/index.d.ts:7012

___

### WebkitFlexWrap

• `Optional` **WebkitFlexWrap**: [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap) \| (`undefined` \| [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap))[]

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFlexWrap](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitflexwrap)

#### Defined in

node_modules/csstype/index.d.ts:7020

___

### WebkitFontFeatureSettings

• `Optional` **WebkitFontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings) \| (`undefined` \| [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings))[]

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFontFeatureSettings](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitfontfeaturesettings)

#### Defined in

node_modules/csstype/index.d.ts:7028

___

### WebkitFontKerning

• `Optional` **WebkitFontKerning**: [`FontKerning`](../modules/components_Container._internal_.md#fontkerning) \| (`undefined` \| [`FontKerning`](../modules/components_Container._internal_.md#fontkerning))[]

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFontKerning](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitfontkerning)

#### Defined in

node_modules/csstype/index.d.ts:7036

___

### WebkitFontSmoothing

• `Optional` **WebkitFontSmoothing**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\> \| (`undefined` \| [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\>)[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFontSmoothing](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitfontsmoothing)

#### Defined in

node_modules/csstype/index.d.ts:7044

___

### WebkitFontVariantLigatures

• `Optional` **WebkitFontVariantLigatures**: [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures) \| (`undefined` \| [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures))[]

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitFontVariantLigatures](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitfontvariantligatures)

#### Defined in

node_modules/csstype/index.d.ts:7052

___

### WebkitHyphens

• `Optional` **WebkitHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens) \| (`undefined` \| [`Hyphens`](../modules/components_Container._internal_.md#hyphens))[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitHyphens](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkithyphens)

#### Defined in

node_modules/csstype/index.d.ts:7060

___

### WebkitJustifyContent

• `Optional` **WebkitJustifyContent**: [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent) \| (`undefined` \| [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent))[]

The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitJustifyContent](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitjustifycontent)

#### Defined in

node_modules/csstype/index.d.ts:7068

___

### WebkitLineBreak

• `Optional` **WebkitLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak) \| (`undefined` \| [`LineBreak`](../modules/components_Container._internal_.md#linebreak))[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitLineBreak](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitlinebreak)

#### Defined in

node_modules/csstype/index.d.ts:7076

___

### WebkitLineClamp

• `Optional` **WebkitLineClamp**: [`WebkitLineClamp`](../modules/components_Container._internal_.md#webkitlineclamp) \| (`undefined` \| [`WebkitLineClamp`](../modules/components_Container._internal_.md#webkitlineclamp))[]

The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitLineClamp](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitlineclamp)

#### Defined in

node_modules/csstype/index.d.ts:7084

___

### WebkitMarginEnd

• `Optional` **WebkitMarginEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\> \| (`undefined` \| [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\>)[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMarginEnd](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmarginend)

#### Defined in

node_modules/csstype/index.d.ts:7092

___

### WebkitMarginStart

• `Optional` **WebkitMarginStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\> \| (`undefined` \| [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\>)[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMarginStart](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmarginstart)

#### Defined in

node_modules/csstype/index.d.ts:7100

___

### WebkitMask

• `Optional` **WebkitMask**: [`WebkitMask`](../modules/components_Container._internal_.md#webkitmask)<`TLength`\> \| (`undefined` \| [`WebkitMask`](../modules/components_Container._internal_.md#webkitmask)<`TLength`\>)[]

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMask](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmask)

#### Defined in

node_modules/csstype/index.d.ts:7659

___

### WebkitMaskAttachment

• `Optional` **WebkitMaskAttachment**: [`WebkitMaskAttachment`](../modules/components_Container._internal_.md#webkitmaskattachment) \| (`undefined` \| [`WebkitMaskAttachment`](../modules/components_Container._internal_.md#webkitmaskattachment))[]

If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskAttachment](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskattachment)

#### Defined in

node_modules/csstype/index.d.ts:7108

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder) \| (`undefined` \| [`MaskBorder`](../modules/components_Container._internal_.md#maskborder))[]

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImage](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximage)

#### Defined in

node_modules/csstype/index.d.ts:7665

___

### WebkitMaskBoxImageOutset

• `Optional` **WebkitMaskBoxImageOutset**: [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`TLength`\> \| (`undefined` \| [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`TLength`\>)[]

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImageOutset](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximageoutset)

#### Defined in

node_modules/csstype/index.d.ts:7116

___

### WebkitMaskBoxImageRepeat

• `Optional` **WebkitMaskBoxImageRepeat**: [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat) \| (`undefined` \| [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat))[]

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImageRepeat](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximagerepeat)

#### Defined in

node_modules/csstype/index.d.ts:7124

___

### WebkitMaskBoxImageSlice

• `Optional` **WebkitMaskBoxImageSlice**: [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice) \| (`undefined` \| [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice))[]

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImageSlice](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximageslice)

#### Defined in

node_modules/csstype/index.d.ts:7132

___

### WebkitMaskBoxImageSource

• `Optional` **WebkitMaskBoxImageSource**: [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource) \| (`undefined` \| [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource))[]

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImageSource](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximagesource)

#### Defined in

node_modules/csstype/index.d.ts:7140

___

### WebkitMaskBoxImageWidth

• `Optional` **WebkitMaskBoxImageWidth**: [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`TLength`\> \| (`undefined` \| [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`TLength`\>)[]

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskBoxImageWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskboximagewidth)

#### Defined in

node_modules/csstype/index.d.ts:7148

___

### WebkitMaskClip

• `Optional` **WebkitMaskClip**: [`WebkitMaskClip`](../modules/components_Container._internal_.md#webkitmaskclip) \| (`undefined` \| [`WebkitMaskClip`](../modules/components_Container._internal_.md#webkitmaskclip))[]

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <box> | border | padding | content | text ]#`

**Initial value**: `border`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskClip](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskclip)

#### Defined in

node_modules/csstype/index.d.ts:7156

___

### WebkitMaskComposite

• `Optional` **WebkitMaskComposite**: [`WebkitMaskComposite`](../modules/components_Container._internal_.md#webkitmaskcomposite) \| (`undefined` \| [`WebkitMaskComposite`](../modules/components_Container._internal_.md#webkitmaskcomposite))[]

The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.

**Syntax**: `<composite-style>#`

**Initial value**: `source-over`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskComposite](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskcomposite)

#### Defined in

node_modules/csstype/index.d.ts:7164

___

### WebkitMaskImage

• `Optional` **WebkitMaskImage**: [`WebkitMaskImage`](../modules/components_Container._internal_.md#webkitmaskimage) \| (`undefined` \| [`WebkitMaskImage`](../modules/components_Container._internal_.md#webkitmaskimage))[]

The **`mask-image`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskImage](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskimage)

#### Defined in

node_modules/csstype/index.d.ts:7172

___

### WebkitMaskOrigin

• `Optional` **WebkitMaskOrigin**: [`WebkitMaskOrigin`](../modules/components_Container._internal_.md#webkitmaskorigin) \| (`undefined` \| [`WebkitMaskOrigin`](../modules/components_Container._internal_.md#webkitmaskorigin))[]

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `[ <box> | border | padding | content ]#`

**Initial value**: `padding`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskorigin)

#### Defined in

node_modules/csstype/index.d.ts:7180

___

### WebkitMaskPosition

• `Optional` **WebkitMaskPosition**: [`WebkitMaskPosition`](../modules/components_Container._internal_.md#webkitmaskposition)<`TLength`\> \| (`undefined` \| [`WebkitMaskPosition`](../modules/components_Container._internal_.md#webkitmaskposition)<`TLength`\>)[]

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `0% 0%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskPosition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskposition)

#### Defined in

node_modules/csstype/index.d.ts:7188

___

### WebkitMaskPositionX

• `Optional` **WebkitMaskPositionX**: [`WebkitMaskPositionX`](../modules/components_Container._internal_.md#webkitmaskpositionx)<`TLength`\> \| (`undefined` \| [`WebkitMaskPositionX`](../modules/components_Container._internal_.md#webkitmaskpositionx)<`TLength`\>)[]

The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.

**Syntax**: `[ <length-percentage> | left | center | right ]#`

**Initial value**: `0%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskPositionX](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskpositionx)

#### Defined in

node_modules/csstype/index.d.ts:7196

___

### WebkitMaskPositionY

• `Optional` **WebkitMaskPositionY**: [`WebkitMaskPositionY`](../modules/components_Container._internal_.md#webkitmaskpositiony)<`TLength`\> \| (`undefined` \| [`WebkitMaskPositionY`](../modules/components_Container._internal_.md#webkitmaskpositiony)<`TLength`\>)[]

The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.

**Syntax**: `[ <length-percentage> | top | center | bottom ]#`

**Initial value**: `0%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskPositionY](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskpositiony)

#### Defined in

node_modules/csstype/index.d.ts:7204

___

### WebkitMaskRepeat

• `Optional` **WebkitMaskRepeat**: [`WebkitMaskRepeat`](../modules/components_Container._internal_.md#webkitmaskrepeat) \| (`undefined` \| [`WebkitMaskRepeat`](../modules/components_Container._internal_.md#webkitmaskrepeat))[]

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskRepeat](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskrepeat)

#### Defined in

node_modules/csstype/index.d.ts:7212

___

### WebkitMaskRepeatX

• `Optional` **WebkitMaskRepeatX**: [`WebkitMaskRepeatX`](../modules/components_Container._internal_.md#webkitmaskrepeatx) \| (`undefined` \| [`WebkitMaskRepeatX`](../modules/components_Container._internal_.md#webkitmaskrepeatx))[]

The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskRepeatX](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskrepeatx)

#### Defined in

node_modules/csstype/index.d.ts:7220

___

### WebkitMaskRepeatY

• `Optional` **WebkitMaskRepeatY**: [`WebkitMaskRepeatY`](../modules/components_Container._internal_.md#webkitmaskrepeaty) \| (`undefined` \| [`WebkitMaskRepeatY`](../modules/components_Container._internal_.md#webkitmaskrepeaty))[]

The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.

**Syntax**: `repeat | no-repeat | space | round`

**Initial value**: `repeat`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskRepeatY](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaskrepeaty)

#### Defined in

node_modules/csstype/index.d.ts:7228

___

### WebkitMaskSize

• `Optional` **WebkitMaskSize**: [`WebkitMaskSize`](../modules/components_Container._internal_.md#webkitmasksize)<`TLength`\> \| (`undefined` \| [`WebkitMaskSize`](../modules/components_Container._internal_.md#webkitmasksize)<`TLength`\>)[]

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaskSize](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmasksize)

#### Defined in

node_modules/csstype/index.d.ts:7236

___

### WebkitMaxInlineSize

• `Optional` **WebkitMaxInlineSize**: [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`TLength`\> \| (`undefined` \| [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`TLength`\>)[]

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitMaxInlineSize](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitmaxinlinesize)

#### Defined in

node_modules/csstype/index.d.ts:7244

___

### WebkitOrder

• `Optional` **WebkitOrder**: [`Order`](../modules/components_Container._internal_.md#order) \| (`undefined` \| [`Order`](../modules/components_Container._internal_.md#order))[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitOrder](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitorder)

#### Defined in

node_modules/csstype/index.d.ts:7252

___

### WebkitOverflowScrolling

• `Optional` **WebkitOverflowScrolling**: [`WebkitOverflowScrolling`](../modules/components_Container._internal_.md#webkitoverflowscrolling) \| (`undefined` \| [`WebkitOverflowScrolling`](../modules/components_Container._internal_.md#webkitoverflowscrolling))[]

The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.

**Syntax**: `auto | touch`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitOverflowScrolling](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitoverflowscrolling)

#### Defined in

node_modules/csstype/index.d.ts:7260

___

### WebkitPaddingEnd

• `Optional` **WebkitPaddingEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\> \| (`undefined` \| [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\>)[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitPaddingEnd](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitpaddingend)

#### Defined in

node_modules/csstype/index.d.ts:7268

___

### WebkitPaddingStart

• `Optional` **WebkitPaddingStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\> \| (`undefined` \| [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\>)[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitPaddingStart](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitpaddingstart)

#### Defined in

node_modules/csstype/index.d.ts:7276

___

### WebkitPerspective

• `Optional` **WebkitPerspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\> \| (`undefined` \| [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\>)[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitPerspective](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitperspective)

#### Defined in

node_modules/csstype/index.d.ts:7284

___

### WebkitPerspectiveOrigin

• `Optional` **WebkitPerspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\> \| (`undefined` \| [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\>)[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitPerspectiveOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitperspectiveorigin)

#### Defined in

node_modules/csstype/index.d.ts:7292

___

### WebkitPrintColorAdjust

• `Optional` **WebkitPrintColorAdjust**: [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust) \| (`undefined` \| [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust))[]

The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitPrintColorAdjust](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitprintcoloradjust)

#### Defined in

node_modules/csstype/index.d.ts:7300

___

### WebkitRubyPosition

• `Optional` **WebkitRubyPosition**: [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition) \| (`undefined` \| [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition))[]

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitRubyPosition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitrubyposition)

#### Defined in

node_modules/csstype/index.d.ts:7308

___

### WebkitScrollSnapPointsX

• `Optional` **WebkitScrollSnapPointsX**: [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx) \| (`undefined` \| [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx))[]

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitScrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:8734

___

### WebkitScrollSnapPointsY

• `Optional` **WebkitScrollSnapPointsY**: [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy) \| (`undefined` \| [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy))[]

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.WebkitScrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:8744

___

### WebkitScrollSnapType

• `Optional` **WebkitScrollSnapType**: [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype) \| (`undefined` \| [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype))[]

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitScrollSnapType](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitscrollsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:7316

___

### WebkitShapeMargin

• `Optional` **WebkitShapeMargin**: [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`TLength`\> \| (`undefined` \| [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`TLength`\>)[]

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitShapeMargin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitshapemargin)

#### Defined in

node_modules/csstype/index.d.ts:7324

___

### WebkitTapHighlightColor

• `Optional` **WebkitTapHighlightColor**: [`WebkitTapHighlightColor`](../modules/components_Container._internal_.md#webkittaphighlightcolor) \| (`undefined` \| [`WebkitTapHighlightColor`](../modules/components_Container._internal_.md#webkittaphighlightcolor))[]

**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.

**Syntax**: `<color>`

**Initial value**: `black`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTapHighlightColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittaphighlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:7332

___

### WebkitTextCombine

• `Optional` **WebkitTextCombine**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright) \| (`undefined` \| [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright))[]

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextCombine](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextcombine)

#### Defined in

node_modules/csstype/index.d.ts:7340

___

### WebkitTextDecorationColor

• `Optional` **WebkitTextDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor) \| (`undefined` \| [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor))[]

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextDecorationColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextdecorationcolor)

#### Defined in

node_modules/csstype/index.d.ts:7348

___

### WebkitTextDecorationLine

• `Optional` **WebkitTextDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline) \| (`undefined` \| [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline))[]

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextDecorationLine](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextdecorationline)

#### Defined in

node_modules/csstype/index.d.ts:7356

___

### WebkitTextDecorationSkip

• `Optional` **WebkitTextDecorationSkip**: [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip) \| (`undefined` \| [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip))[]

The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextDecorationSkip](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextdecorationskip)

#### Defined in

node_modules/csstype/index.d.ts:7364

___

### WebkitTextDecorationStyle

• `Optional` **WebkitTextDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle) \| (`undefined` \| [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle))[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextDecorationStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextdecorationstyle)

#### Defined in

node_modules/csstype/index.d.ts:7372

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis) \| (`undefined` \| [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis))[]

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextEmphasis](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextemphasis)

#### Defined in

node_modules/csstype/index.d.ts:7671

___

### WebkitTextEmphasisColor

• `Optional` **WebkitTextEmphasisColor**: [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor) \| (`undefined` \| [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor))[]

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextEmphasisColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextemphasiscolor)

#### Defined in

node_modules/csstype/index.d.ts:7380

___

### WebkitTextEmphasisPosition

• `Optional` **WebkitTextEmphasisPosition**: [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition) \| (`undefined` \| [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition))[]

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextEmphasisPosition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextemphasisposition)

#### Defined in

node_modules/csstype/index.d.ts:7388

___

### WebkitTextEmphasisStyle

• `Optional` **WebkitTextEmphasisStyle**: [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle) \| (`undefined` \| [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle))[]

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextEmphasisStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextemphasisstyle)

#### Defined in

node_modules/csstype/index.d.ts:7396

___

### WebkitTextFillColor

• `Optional` **WebkitTextFillColor**: [`WebkitTextFillColor`](../modules/components_Container._internal_.md#webkittextfillcolor) \| (`undefined` \| [`WebkitTextFillColor`](../modules/components_Container._internal_.md#webkittextfillcolor))[]

The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextFillColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextfillcolor)

#### Defined in

node_modules/csstype/index.d.ts:7404

___

### WebkitTextOrientation

• `Optional` **WebkitTextOrientation**: [`TextOrientation`](../modules/components_Container._internal_.md#textorientation) \| (`undefined` \| [`TextOrientation`](../modules/components_Container._internal_.md#textorientation))[]

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextOrientation](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextorientation)

#### Defined in

node_modules/csstype/index.d.ts:7412

___

### WebkitTextSizeAdjust

• `Optional` **WebkitTextSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust) \| (`undefined` \| [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust))[]

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextSizeAdjust](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:7420

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: [`WebkitTextStroke`](../modules/components_Container._internal_.md#webkittextstroke)<`TLength`\> \| (`undefined` \| [`WebkitTextStroke`](../modules/components_Container._internal_.md#webkittextstroke)<`TLength`\>)[]

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextStroke](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextstroke)

#### Defined in

node_modules/csstype/index.d.ts:7677

___

### WebkitTextStrokeColor

• `Optional` **WebkitTextStrokeColor**: [`WebkitTextStrokeColor`](../modules/components_Container._internal_.md#webkittextstrokecolor) \| (`undefined` \| [`WebkitTextStrokeColor`](../modules/components_Container._internal_.md#webkittextstrokecolor))[]

The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextStrokeColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextstrokecolor)

#### Defined in

node_modules/csstype/index.d.ts:7428

___

### WebkitTextStrokeWidth

• `Optional` **WebkitTextStrokeWidth**: [`WebkitTextStrokeWidth`](../modules/components_Container._internal_.md#webkittextstrokewidth)<`TLength`\> \| (`undefined` \| [`WebkitTextStrokeWidth`](../modules/components_Container._internal_.md#webkittextstrokewidth)<`TLength`\>)[]

The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextStrokeWidth](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextstrokewidth)

#### Defined in

node_modules/csstype/index.d.ts:7436

___

### WebkitTextUnderlinePosition

• `Optional` **WebkitTextUnderlinePosition**: [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition) \| (`undefined` \| [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition))[]

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTextUnderlinePosition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittextunderlineposition)

#### Defined in

node_modules/csstype/index.d.ts:7444

___

### WebkitTouchCallout

• `Optional` **WebkitTouchCallout**: [`WebkitTouchCallout`](../modules/components_Container._internal_.md#webkittouchcallout) \| (`undefined` \| [`WebkitTouchCallout`](../modules/components_Container._internal_.md#webkittouchcallout))[]

The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.

**Syntax**: `default | none`

**Initial value**: `default`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTouchCallout](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittouchcallout)

#### Defined in

node_modules/csstype/index.d.ts:7452

___

### WebkitTransform

• `Optional` **WebkitTransform**: [`Transform`](../modules/components_Container._internal_.md#transform) \| (`undefined` \| [`Transform`](../modules/components_Container._internal_.md#transform))[]

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransform](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransform)

#### Defined in

node_modules/csstype/index.d.ts:7460

___

### WebkitTransformOrigin

• `Optional` **WebkitTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\> \| (`undefined` \| [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>)[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransformOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:7468

___

### WebkitTransformStyle

• `Optional` **WebkitTransformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle) \| (`undefined` \| [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle))[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransformStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransformstyle)

#### Defined in

node_modules/csstype/index.d.ts:7476

___

### WebkitTransition

• `Optional` **WebkitTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\> \| (`undefined` \| [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>)[]

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransition)

#### Defined in

node_modules/csstype/index.d.ts:7683

___

### WebkitTransitionDelay

• `Optional` **WebkitTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\> \| (`undefined` \| [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>)[]

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransitionDelay](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:7484

___

### WebkitTransitionDuration

• `Optional` **WebkitTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\> \| (`undefined` \| [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>)[]

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransitionDuration](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:7492

___

### WebkitTransitionProperty

• `Optional` **WebkitTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty) \| (`undefined` \| [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty))[]

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransitionProperty](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:7500

___

### WebkitTransitionTimingFunction

• `Optional` **WebkitTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction) \| (`undefined` \| [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction))[]

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkittransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:7508

___

### WebkitUserModify

• `Optional` **WebkitUserModify**: [`WebkitUserModify`](../modules/components_Container._internal_.md#webkitusermodify) \| (`undefined` \| [`WebkitUserModify`](../modules/components_Container._internal_.md#webkitusermodify))[]

**Syntax**: `read-only | read-write | read-write-plaintext-only`

**Initial value**: `read-only`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitUserModify](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitusermodify)

#### Defined in

node_modules/csstype/index.d.ts:7514

___

### WebkitUserSelect

• `Optional` **WebkitUserSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect) \| (`undefined` \| [`UserSelect`](../modules/components_Container._internal_.md#userselect))[]

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitUserSelect](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkituserselect)

#### Defined in

node_modules/csstype/index.d.ts:7522

___

### WebkitWritingMode

• `Optional` **WebkitWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode) \| (`undefined` \| [`WritingMode`](../modules/components_Container._internal_.md#writingmode))[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[WebkitWritingMode](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#webkitwritingmode)

#### Defined in

node_modules/csstype/index.d.ts:7530

___

### accentColor

• `Optional` **accentColor**: [`AccentColor`](../modules/components_Container._internal_.md#accentcolor) \| (`undefined` \| [`AccentColor`](../modules/components_Container._internal_.md#accentcolor))[]

The **`accent-color`** CSS property sets the color of the elements accent. An accent appears in elements such as `<input>` of `type="checkbox"`, or `type="radio"`.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **93** | **92**  |   No   | **93** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/accent-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[accentColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#accentcolor)

#### Defined in

node_modules/csstype/index.d.ts:25

___

### alignContent

• `Optional` **alignContent**: [`AlignContent`](../modules/components_Container._internal_.md#aligncontent) \| (`undefined` \| [`AlignContent`](../modules/components_Container._internal_.md#aligncontent))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[alignContent](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#aligncontent)

#### Defined in

node_modules/csstype/index.d.ts:54

___

### alignItems

• `Optional` **alignItems**: [`AlignItems`](../modules/components_Container._internal_.md#alignitems) \| (`undefined` \| [`AlignItems`](../modules/components_Container._internal_.md#alignitems))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[alignItems](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#alignitems)

#### Defined in

node_modules/csstype/index.d.ts:83

___

### alignSelf

• `Optional` **alignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself) \| (`undefined` \| [`AlignSelf`](../modules/components_Container._internal_.md#alignself))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[alignSelf](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#alignself)

#### Defined in

node_modules/csstype/index.d.ts:112

___

### alignTracks

• `Optional` **alignTracks**: [`AlignTracks`](../modules/components_Container._internal_.md#aligntracks) \| (`undefined` \| [`AlignTracks`](../modules/components_Container._internal_.md#aligntracks))[]

The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.

**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/align-tracks

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[alignTracks](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#aligntracks)

#### Defined in

node_modules/csstype/index.d.ts:126

___

### alignmentBaseline

• `Optional` **alignmentBaseline**: [`AlignmentBaseline`](../modules/components_Container._internal_.md#alignmentbaseline) \| (`undefined` \| [`AlignmentBaseline`](../modules/components_Container._internal_.md#alignmentbaseline))[]

#### Inherited from

SvgPropertiesFallback.alignmentBaseline

#### Defined in

node_modules/csstype/index.d.ts:8748

___

### all

• `Optional` **all**: [`Globals`](../modules/components_Container._internal_.md#globals) \| (`undefined` \| [`Globals`](../modules/components_Container._internal_.md#globals))[]

The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

**Syntax**: `initial | inherit | unset | revert`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **37** | **27**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/all

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[all](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#all)

#### Defined in

node_modules/csstype/index.d.ts:5146

___

### animation

• `Optional` **animation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\> \| (`undefined` \| [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>)[]

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animation)

#### Defined in

node_modules/csstype/index.d.ts:5159

___

### animationDelay

• `Optional` **animationDelay**: [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\> \| (`undefined` \| [`AnimationDelay`](../modules/components_Container._internal_.md#animationdelay)<`TTime`\>)[]

The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-delay

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationDelay](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationdelay)

#### Defined in

node_modules/csstype/index.d.ts:141

___

### animationDirection

• `Optional` **animationDirection**: [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection) \| (`undefined` \| [`AnimationDirection`](../modules/components_Container._internal_.md#animationdirection))[]

The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: `<single-animation-direction>#`

**Initial value**: `normal`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-direction

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationDirection](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationdirection)

#### Defined in

node_modules/csstype/index.d.ts:156

___

### animationDuration

• `Optional` **animationDuration**: [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\> \| (`undefined` \| [`AnimationDuration`](../modules/components_Container._internal_.md#animationduration)<`TTime`\>)[]

The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-duration

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationDuration](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationduration)

#### Defined in

node_modules/csstype/index.d.ts:171

___

### animationFillMode

• `Optional` **animationFillMode**: [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode) \| (`undefined` \| [`AnimationFillMode`](../modules/components_Container._internal_.md#animationfillmode))[]

The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: `<single-animation-fill-mode>#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationFillMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationfillmode)

#### Defined in

node_modules/csstype/index.d.ts:186

___

### animationIterationCount

• `Optional` **animationIterationCount**: [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount) \| (`undefined` \| [`AnimationIterationCount`](../modules/components_Container._internal_.md#animationiterationcount))[]

The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: `<single-animation-iteration-count>#`

**Initial value**: `1`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationIterationCount](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationiterationcount)

#### Defined in

node_modules/csstype/index.d.ts:201

___

### animationName

• `Optional` **animationName**: [`AnimationName`](../modules/components_Container._internal_.md#animationname) \| (`undefined` \| [`AnimationName`](../modules/components_Container._internal_.md#animationname))[]

The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.

**Syntax**: `[ none | <keyframes-name> ]#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-name

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationName](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationname)

#### Defined in

node_modules/csstype/index.d.ts:216

___

### animationPlayState

• `Optional` **animationPlayState**: [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate) \| (`undefined` \| [`AnimationPlayState`](../modules/components_Container._internal_.md#animationplaystate))[]

The **`animation-play-state`** CSS property sets whether an animation is running or paused.

**Syntax**: `<single-animation-play-state>#`

**Initial value**: `running`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-play-state

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationPlayState](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationplaystate)

#### Defined in

node_modules/csstype/index.d.ts:231

___

### animationTimingFunction

• `Optional` **animationTimingFunction**: [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction) \| (`undefined` \| [`AnimationTimingFunction`](../modules/components_Container._internal_.md#animationtimingfunction))[]

The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation-timing-function

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[animationTimingFunction](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#animationtimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:246

___

### appearance

• `Optional` **appearance**: [`Appearance`](../modules/components_Container._internal_.md#appearance) \| (`undefined` \| [`Appearance`](../modules/components_Container._internal_.md#appearance))[]

The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.

**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`

**Initial value**: `auto`

| Chrome  | Firefox |   Safari    |   Edge   | IE  |
| :-----: | :-----: | :---------: | :------: | :-: |
| **84**  | **80**  | **3** _-x-_ |  **84**  | No  |
| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/appearance

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[appearance](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#appearance)

#### Defined in

node_modules/csstype/index.d.ts:261

___

### aspectRatio

• `Optional` **aspectRatio**: [`AspectRatio`](../modules/components_Container._internal_.md#aspectratio) \| (`undefined` \| [`AspectRatio`](../modules/components_Container._internal_.md#aspectratio))[]

The **`aspect-ratio`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.

**Syntax**: `auto | <ratio>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **88** | **89**  | **15** | **88** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/aspect-ratio

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[aspectRatio](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#aspectratio)

#### Defined in

node_modules/csstype/index.d.ts:275

___

### azimuth

• `Optional` **azimuth**: [`Azimuth`](../modules/components_Container._internal_.md#azimuth) \| (`undefined` \| [`Azimuth`](../modules/components_Container._internal_.md#azimuth))[]

In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.

**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`

**Initial value**: `center`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.azimuth

#### Defined in

node_modules/csstype/index.d.ts:7698

___

### backdropFilter

• `Optional` **backdropFilter**: [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter) \| (`undefined` \| [`BackdropFilter`](../modules/components_Container._internal_.md#backdropfilter))[]

The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

| Chrome | Firefox |   Safari    |  Edge  | IE  |
| :----: | :-----: | :---------: | :----: | :-: |
| **76** |   n/a   | **9** _-x-_ | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/backdrop-filter

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backdropFilter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backdropfilter)

#### Defined in

node_modules/csstype/index.d.ts:289

___

### backfaceVisibility

• `Optional` **backfaceVisibility**: [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility) \| (`undefined` \| [`BackfaceVisibility`](../modules/components_Container._internal_.md#backfacevisibility))[]

The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: `visible | hidden`

**Initial value**: `visible`

|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
| :------: | :------: | :-----------: | :----: | :----: |
|  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ |               |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/backface-visibility

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backfaceVisibility](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backfacevisibility)

#### Defined in

node_modules/csstype/index.d.ts:304

___

### background

• `Optional` **background**: [`Background`](../modules/components_Container._internal_.md#background)<`TLength`\> \| (`undefined` \| [`Background`](../modules/components_Container._internal_.md#background)<`TLength`\>)[]

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[background](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#background)

#### Defined in

node_modules/csstype/index.d.ts:5171

___

### backgroundAttachment

• `Optional` **backgroundAttachment**: [`BackgroundAttachment`](../modules/components_Container._internal_.md#backgroundattachment) \| (`undefined` \| [`BackgroundAttachment`](../modules/components_Container._internal_.md#backgroundattachment))[]

The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.

**Syntax**: `<attachment>#`

**Initial value**: `scroll`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-attachment

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundAttachment](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundattachment)

#### Defined in

node_modules/csstype/index.d.ts:318

___

### backgroundBlendMode

• `Optional` **backgroundBlendMode**: [`BackgroundBlendMode`](../modules/components_Container._internal_.md#backgroundblendmode) \| (`undefined` \| [`BackgroundBlendMode`](../modules/components_Container._internal_.md#backgroundblendmode))[]

The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.

**Syntax**: `<blend-mode>#`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **30**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-blend-mode

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundBlendMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundblendmode)

#### Defined in

node_modules/csstype/index.d.ts:332

___

### backgroundClip

• `Optional` **backgroundClip**: [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip) \| (`undefined` \| [`BackgroundClip`](../modules/components_Container._internal_.md#backgroundclip))[]

The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: `<box>#`

**Initial value**: `border-box`

| Chrome | Firefox |   Safari    |  Edge  |  IE   |
| :----: | :-----: | :---------: | :----: | :---: |
| **1**  |  **4**  | **3** _-x-_ | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-clip

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundClip](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundclip)

#### Defined in

node_modules/csstype/index.d.ts:346

___

### backgroundColor

• `Optional` **backgroundColor**: [`BackgroundColor`](../modules/components_Container._internal_.md#backgroundcolor) \| (`undefined` \| [`BackgroundColor`](../modules/components_Container._internal_.md#backgroundcolor))[]

The **`background-color`** CSS property sets the background color of an element.

**Syntax**: `<color>`

**Initial value**: `transparent`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundcolor)

#### Defined in

node_modules/csstype/index.d.ts:360

___

### backgroundImage

• `Optional` **backgroundImage**: [`BackgroundImage`](../modules/components_Container._internal_.md#backgroundimage) \| (`undefined` \| [`BackgroundImage`](../modules/components_Container._internal_.md#backgroundimage))[]

The **`background-image`** CSS property sets one or more background images on an element.

**Syntax**: `<bg-image>#`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-image

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundImage](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundimage)

#### Defined in

node_modules/csstype/index.d.ts:374

___

### backgroundOrigin

• `Optional` **backgroundOrigin**: [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin) \| (`undefined` \| [`BackgroundOrigin`](../modules/components_Container._internal_.md#backgroundorigin))[]

The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: `<box>#`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **4**  | **3**  | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-origin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundOrigin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundorigin)

#### Defined in

node_modules/csstype/index.d.ts:388

___

### backgroundPosition

• `Optional` **backgroundPosition**: [`BackgroundPosition`](../modules/components_Container._internal_.md#backgroundposition)<`TLength`\> \| (`undefined` \| [`BackgroundPosition`](../modules/components_Container._internal_.md#backgroundposition)<`TLength`\>)[]

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundposition)

#### Defined in

node_modules/csstype/index.d.ts:5185

___

### backgroundPositionX

• `Optional` **backgroundPositionX**: [`BackgroundPositionX`](../modules/components_Container._internal_.md#backgroundpositionx)<`TLength`\> \| (`undefined` \| [`BackgroundPositionX`](../modules/components_Container._internal_.md#backgroundpositionx)<`TLength`\>)[]

The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`

**Initial value**: `left`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position-x

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundPositionX](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundpositionx)

#### Defined in

node_modules/csstype/index.d.ts:402

___

### backgroundPositionY

• `Optional` **backgroundPositionY**: [`BackgroundPositionY`](../modules/components_Container._internal_.md#backgroundpositiony)<`TLength`\> \| (`undefined` \| [`BackgroundPositionY`](../modules/components_Container._internal_.md#backgroundpositiony)<`TLength`\>)[]

The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`

**Initial value**: `top`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **49**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position-y

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundPositionY](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundpositiony)

#### Defined in

node_modules/csstype/index.d.ts:416

___

### backgroundRepeat

• `Optional` **backgroundRepeat**: [`BackgroundRepeat`](../modules/components_Container._internal_.md#backgroundrepeat) \| (`undefined` \| [`BackgroundRepeat`](../modules/components_Container._internal_.md#backgroundrepeat))[]

The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `repeat`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-repeat

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundRepeat](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundrepeat)

#### Defined in

node_modules/csstype/index.d.ts:430

___

### backgroundSize

• `Optional` **backgroundSize**: [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\> \| (`undefined` \| [`BackgroundSize`](../modules/components_Container._internal_.md#backgroundsize)<`TLength`\>)[]

The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: `<bg-size>#`

**Initial value**: `auto auto`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **3**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[backgroundSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#backgroundsize)

#### Defined in

node_modules/csstype/index.d.ts:445

___

### baselineShift

• `Optional` **baselineShift**: [`BaselineShift`](../modules/components_Container._internal_.md#baselineshift)<`TLength`\> \| (`undefined` \| [`BaselineShift`](../modules/components_Container._internal_.md#baselineshift)<`TLength`\>)[]

#### Inherited from

SvgPropertiesFallback.baselineShift

#### Defined in

node_modules/csstype/index.d.ts:8749

___

### blockOverflow

• `Optional` **blockOverflow**: [`BlockOverflow`](../modules/components_Container._internal_.md#blockoverflow) \| (`undefined` \| [`BlockOverflow`](../modules/components_Container._internal_.md#blockoverflow))[]

**Syntax**: `clip | ellipsis | <string>`

**Initial value**: `clip`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[blockOverflow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#blockoverflow)

#### Defined in

node_modules/csstype/index.d.ts:451

___

### blockSize

• `Optional` **blockSize**: [`BlockSize`](../modules/components_Container._internal_.md#blocksize)<`TLength`\> \| (`undefined` \| [`BlockSize`](../modules/components_Container._internal_.md#blocksize)<`TLength`\>)[]

The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/block-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[blockSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#blocksize)

#### Defined in

node_modules/csstype/index.d.ts:465

___

### border

• `Optional` **border**: [`Border`](../modules/components_Container._internal_.md#border)<`TLength`\> \| (`undefined` \| [`Border`](../modules/components_Container._internal_.md#border)<`TLength`\>)[]

The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[border](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#border)

#### Defined in

node_modules/csstype/index.d.ts:5197

___

### borderBlock

• `Optional` **borderBlock**: [`BorderBlock`](../modules/components_Container._internal_.md#borderblock)<`TLength`\> \| (`undefined` \| [`BorderBlock`](../modules/components_Container._internal_.md#borderblock)<`TLength`\>)[]

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblock)

#### Defined in

node_modules/csstype/index.d.ts:5209

___

### borderBlockColor

• `Optional` **borderBlockColor**: [`BorderBlockColor`](../modules/components_Container._internal_.md#borderblockcolor) \| (`undefined` \| [`BorderBlockColor`](../modules/components_Container._internal_.md#borderblockcolor))[]

The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockcolor)

#### Defined in

node_modules/csstype/index.d.ts:479

___

### borderBlockEnd

• `Optional` **borderBlockEnd**: [`BorderBlockEnd`](../modules/components_Container._internal_.md#borderblockend)<`TLength`\> \| (`undefined` \| [`BorderBlockEnd`](../modules/components_Container._internal_.md#borderblockend)<`TLength`\>)[]

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockend)

#### Defined in

node_modules/csstype/index.d.ts:5221

___

### borderBlockEndColor

• `Optional` **borderBlockEndColor**: [`BorderBlockEndColor`](../modules/components_Container._internal_.md#borderblockendcolor) \| (`undefined` \| [`BorderBlockEndColor`](../modules/components_Container._internal_.md#borderblockendcolor))[]

The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockEndColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockendcolor)

#### Defined in

node_modules/csstype/index.d.ts:493

___

### borderBlockEndStyle

• `Optional` **borderBlockEndStyle**: [`BorderBlockEndStyle`](../modules/components_Container._internal_.md#borderblockendstyle) \| (`undefined` \| [`BorderBlockEndStyle`](../modules/components_Container._internal_.md#borderblockendstyle))[]

The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockEndStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockendstyle)

#### Defined in

node_modules/csstype/index.d.ts:507

___

### borderBlockEndWidth

• `Optional` **borderBlockEndWidth**: [`BorderBlockEndWidth`](../modules/components_Container._internal_.md#borderblockendwidth)<`TLength`\> \| (`undefined` \| [`BorderBlockEndWidth`](../modules/components_Container._internal_.md#borderblockendwidth)<`TLength`\>)[]

The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockEndWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockendwidth)

#### Defined in

node_modules/csstype/index.d.ts:521

___

### borderBlockStart

• `Optional` **borderBlockStart**: [`BorderBlockStart`](../modules/components_Container._internal_.md#borderblockstart)<`TLength`\> \| (`undefined` \| [`BorderBlockStart`](../modules/components_Container._internal_.md#borderblockstart)<`TLength`\>)[]

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockstart)

#### Defined in

node_modules/csstype/index.d.ts:5233

___

### borderBlockStartColor

• `Optional` **borderBlockStartColor**: [`BorderBlockStartColor`](../modules/components_Container._internal_.md#borderblockstartcolor) \| (`undefined` \| [`BorderBlockStartColor`](../modules/components_Container._internal_.md#borderblockstartcolor))[]

The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockStartColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockstartcolor)

#### Defined in

node_modules/csstype/index.d.ts:535

___

### borderBlockStartStyle

• `Optional` **borderBlockStartStyle**: [`BorderBlockStartStyle`](../modules/components_Container._internal_.md#borderblockstartstyle) \| (`undefined` \| [`BorderBlockStartStyle`](../modules/components_Container._internal_.md#borderblockstartstyle))[]

The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockStartStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockstartstyle)

#### Defined in

node_modules/csstype/index.d.ts:549

___

### borderBlockStartWidth

• `Optional` **borderBlockStartWidth**: [`BorderBlockStartWidth`](../modules/components_Container._internal_.md#borderblockstartwidth)<`TLength`\> \| (`undefined` \| [`BorderBlockStartWidth`](../modules/components_Container._internal_.md#borderblockstartwidth)<`TLength`\>)[]

The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockStartWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockstartwidth)

#### Defined in

node_modules/csstype/index.d.ts:563

___

### borderBlockStyle

• `Optional` **borderBlockStyle**: [`BorderBlockStyle`](../modules/components_Container._internal_.md#borderblockstyle) \| (`undefined` \| [`BorderBlockStyle`](../modules/components_Container._internal_.md#borderblockstyle))[]

The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockstyle)

#### Defined in

node_modules/csstype/index.d.ts:577

___

### borderBlockWidth

• `Optional` **borderBlockWidth**: [`BorderBlockWidth`](../modules/components_Container._internal_.md#borderblockwidth)<`TLength`\> \| (`undefined` \| [`BorderBlockWidth`](../modules/components_Container._internal_.md#borderblockwidth)<`TLength`\>)[]

The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBlockWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderblockwidth)

#### Defined in

node_modules/csstype/index.d.ts:591

___

### borderBottom

• `Optional` **borderBottom**: [`BorderBottom`](../modules/components_Container._internal_.md#borderbottom)<`TLength`\> \| (`undefined` \| [`BorderBottom`](../modules/components_Container._internal_.md#borderbottom)<`TLength`\>)[]

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottom)

#### Defined in

node_modules/csstype/index.d.ts:5245

___

### borderBottomColor

• `Optional` **borderBottomColor**: [`BorderBottomColor`](../modules/components_Container._internal_.md#borderbottomcolor) \| (`undefined` \| [`BorderBottomColor`](../modules/components_Container._internal_.md#borderbottomcolor))[]

The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottomColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottomcolor)

#### Defined in

node_modules/csstype/index.d.ts:605

___

### borderBottomLeftRadius

• `Optional` **borderBottomLeftRadius**: [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\> \| (`undefined` \| [`BorderBottomLeftRadius`](../modules/components_Container._internal_.md#borderbottomleftradius)<`TLength`\>)[]

The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottomLeftRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottomleftradius)

#### Defined in

node_modules/csstype/index.d.ts:620

___

### borderBottomRightRadius

• `Optional` **borderBottomRightRadius**: [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\> \| (`undefined` \| [`BorderBottomRightRadius`](../modules/components_Container._internal_.md#borderbottomrightradius)<`TLength`\>)[]

The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottomRightRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottomrightradius)

#### Defined in

node_modules/csstype/index.d.ts:635

___

### borderBottomStyle

• `Optional` **borderBottomStyle**: [`BorderBottomStyle`](../modules/components_Container._internal_.md#borderbottomstyle) \| (`undefined` \| [`BorderBottomStyle`](../modules/components_Container._internal_.md#borderbottomstyle))[]

The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottomStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottomstyle)

#### Defined in

node_modules/csstype/index.d.ts:649

___

### borderBottomWidth

• `Optional` **borderBottomWidth**: [`BorderBottomWidth`](../modules/components_Container._internal_.md#borderbottomwidth)<`TLength`\> \| (`undefined` \| [`BorderBottomWidth`](../modules/components_Container._internal_.md#borderbottomwidth)<`TLength`\>)[]

The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderBottomWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderbottomwidth)

#### Defined in

node_modules/csstype/index.d.ts:663

___

### borderCollapse

• `Optional` **borderCollapse**: [`BorderCollapse`](../modules/components_Container._internal_.md#bordercollapse) \| (`undefined` \| [`BorderCollapse`](../modules/components_Container._internal_.md#bordercollapse))[]

The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.

**Syntax**: `collapse | separate`

**Initial value**: `separate`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-collapse

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderCollapse](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordercollapse)

#### Defined in

node_modules/csstype/index.d.ts:677

___

### borderColor

• `Optional` **borderColor**: [`BorderColor`](../modules/components_Container._internal_.md#bordercolor) \| (`undefined` \| [`BorderColor`](../modules/components_Container._internal_.md#bordercolor))[]

The **`border-color`** shorthand CSS property sets the color of an element's border.

**Syntax**: `<color>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordercolor)

#### Defined in

node_modules/csstype/index.d.ts:5257

___

### borderEndEndRadius

• `Optional` **borderEndEndRadius**: [`BorderEndEndRadius`](../modules/components_Container._internal_.md#borderendendradius)<`TLength`\> \| (`undefined` \| [`BorderEndEndRadius`](../modules/components_Container._internal_.md#borderendendradius)<`TLength`\>)[]

The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderEndEndRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderendendradius)

#### Defined in

node_modules/csstype/index.d.ts:691

___

### borderEndStartRadius

• `Optional` **borderEndStartRadius**: [`BorderEndStartRadius`](../modules/components_Container._internal_.md#borderendstartradius)<`TLength`\> \| (`undefined` \| [`BorderEndStartRadius`](../modules/components_Container._internal_.md#borderendstartradius)<`TLength`\>)[]

The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderEndStartRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderendstartradius)

#### Defined in

node_modules/csstype/index.d.ts:705

___

### borderImage

• `Optional` **borderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage) \| (`undefined` \| [`BorderImage`](../modules/components_Container._internal_.md#borderimage))[]

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImage](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimage)

#### Defined in

node_modules/csstype/index.d.ts:5270

___

### borderImageOutset

• `Optional` **borderImageOutset**: [`BorderImageOutset`](../modules/components_Container._internal_.md#borderimageoutset)<`TLength`\> \| (`undefined` \| [`BorderImageOutset`](../modules/components_Container._internal_.md#borderimageoutset)<`TLength`\>)[]

The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-outset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImageOutset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimageoutset)

#### Defined in

node_modules/csstype/index.d.ts:719

___

### borderImageRepeat

• `Optional` **borderImageRepeat**: [`BorderImageRepeat`](../modules/components_Container._internal_.md#borderimagerepeat) \| (`undefined` \| [`BorderImageRepeat`](../modules/components_Container._internal_.md#borderimagerepeat))[]

The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-repeat

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImageRepeat](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimagerepeat)

#### Defined in

node_modules/csstype/index.d.ts:733

___

### borderImageSlice

• `Optional` **borderImageSlice**: [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice) \| (`undefined` \| [`BorderImageSlice`](../modules/components_Container._internal_.md#borderimageslice))[]

The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.

**Syntax**: `<number-percentage>{1,4} && fill?`

**Initial value**: `100%`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-slice

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImageSlice](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimageslice)

#### Defined in

node_modules/csstype/index.d.ts:747

___

### borderImageSource

• `Optional` **borderImageSource**: [`BorderImageSource`](../modules/components_Container._internal_.md#borderimagesource) \| (`undefined` \| [`BorderImageSource`](../modules/components_Container._internal_.md#borderimagesource))[]

The **`border-image-source`** CSS property sets the source image used to create an element's border image.

**Syntax**: `none | <image>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-source

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImageSource](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimagesource)

#### Defined in

node_modules/csstype/index.d.ts:761

___

### borderImageWidth

• `Optional` **borderImageWidth**: [`BorderImageWidth`](../modules/components_Container._internal_.md#borderimagewidth)<`TLength`\> \| (`undefined` \| [`BorderImageWidth`](../modules/components_Container._internal_.md#borderimagewidth)<`TLength`\>)[]

The **`border-image-width`** CSS property sets the width of an element's border image.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `1`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **13**  | **6**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderImageWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderimagewidth)

#### Defined in

node_modules/csstype/index.d.ts:775

___

### borderInline

• `Optional` **borderInline**: [`BorderInline`](../modules/components_Container._internal_.md#borderinline)<`TLength`\> \| (`undefined` \| [`BorderInline`](../modules/components_Container._internal_.md#borderinline)<`TLength`\>)[]

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinline)

#### Defined in

node_modules/csstype/index.d.ts:5282

___

### borderInlineColor

• `Optional` **borderInlineColor**: [`BorderInlineColor`](../modules/components_Container._internal_.md#borderinlinecolor) \| (`undefined` \| [`BorderInlineColor`](../modules/components_Container._internal_.md#borderinlinecolor))[]

The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>{1,2}`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinecolor)

#### Defined in

node_modules/csstype/index.d.ts:789

___

### borderInlineEnd

• `Optional` **borderInlineEnd**: [`BorderInlineEnd`](../modules/components_Container._internal_.md#borderinlineend)<`TLength`\> \| (`undefined` \| [`BorderInlineEnd`](../modules/components_Container._internal_.md#borderinlineend)<`TLength`\>)[]

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlineend)

#### Defined in

node_modules/csstype/index.d.ts:5294

___

### borderInlineEndColor

• `Optional` **borderInlineEndColor**: [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor) \| (`undefined` \| [`BorderInlineEndColor`](../modules/components_Container._internal_.md#borderinlineendcolor))[]

The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-color)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineEndColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlineendcolor)

#### Defined in

node_modules/csstype/index.d.ts:804

___

### borderInlineEndStyle

• `Optional` **borderInlineEndStyle**: [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle) \| (`undefined` \| [`BorderInlineEndStyle`](../modules/components_Container._internal_.md#borderinlineendstyle))[]

The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-style)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineEndStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlineendstyle)

#### Defined in

node_modules/csstype/index.d.ts:819

___

### borderInlineEndWidth

• `Optional` **borderInlineEndWidth**: [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`TLength`\> \| (`undefined` \| [`BorderInlineEndWidth`](../modules/components_Container._internal_.md#borderinlineendwidth)<`TLength`\>)[]

The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome |           Firefox           |  Safari  |  Edge  | IE  |
| :----: | :-------------------------: | :------: | :----: | :-: |
| **69** |           **41**            | **12.1** | **79** | No  |
|        | 3 _(-moz-border-end-width)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineEndWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlineendwidth)

#### Defined in

node_modules/csstype/index.d.ts:834

___

### borderInlineStart

• `Optional` **borderInlineStart**: [`BorderInlineStart`](../modules/components_Container._internal_.md#borderinlinestart)<`TLength`\> \| (`undefined` \| [`BorderInlineStart`](../modules/components_Container._internal_.md#borderinlinestart)<`TLength`\>)[]

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinestart)

#### Defined in

node_modules/csstype/index.d.ts:5306

___

### borderInlineStartColor

• `Optional` **borderInlineStartColor**: [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor) \| (`undefined` \| [`BorderInlineStartColor`](../modules/components_Container._internal_.md#borderinlinestartcolor))[]

The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-color'>`

**Initial value**: `currentcolor`

| Chrome |            Firefox            |  Safari  |  Edge  | IE  |
| :----: | :---------------------------: | :------: | :----: | :-: |
| **69** |            **41**             | **12.1** | **79** | No  |
|        | 3 _(-moz-border-start-color)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineStartColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinestartcolor)

#### Defined in

node_modules/csstype/index.d.ts:849

___

### borderInlineStartStyle

• `Optional` **borderInlineStartStyle**: [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle) \| (`undefined` \| [`BorderInlineStartStyle`](../modules/components_Container._internal_.md#borderinlinestartstyle))[]

The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome |            Firefox            |  Safari  |  Edge  | IE  |
| :----: | :---------------------------: | :------: | :----: | :-: |
| **69** |            **41**             | **12.1** | **79** | No  |
|        | 3 _(-moz-border-start-style)_ |          |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineStartStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinestartstyle)

#### Defined in

node_modules/csstype/index.d.ts:864

___

### borderInlineStartWidth

• `Optional` **borderInlineStartWidth**: [`BorderInlineStartWidth`](../modules/components_Container._internal_.md#borderinlinestartwidth)<`TLength`\> \| (`undefined` \| [`BorderInlineStartWidth`](../modules/components_Container._internal_.md#borderinlinestartwidth)<`TLength`\>)[]

The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineStartWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinestartwidth)

#### Defined in

node_modules/csstype/index.d.ts:878

___

### borderInlineStyle

• `Optional` **borderInlineStyle**: [`BorderInlineStyle`](../modules/components_Container._internal_.md#borderinlinestyle) \| (`undefined` \| [`BorderInlineStyle`](../modules/components_Container._internal_.md#borderinlinestyle))[]

The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-style'>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinestyle)

#### Defined in

node_modules/csstype/index.d.ts:892

___

### borderInlineWidth

• `Optional` **borderInlineWidth**: [`BorderInlineWidth`](../modules/components_Container._internal_.md#borderinlinewidth)<`TLength`\> \| (`undefined` \| [`BorderInlineWidth`](../modules/components_Container._internal_.md#borderinlinewidth)<`TLength`\>)[]

The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'border-top-width'>`

**Initial value**: `medium`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderInlineWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderinlinewidth)

#### Defined in

node_modules/csstype/index.d.ts:906

___

### borderLeft

• `Optional` **borderLeft**: [`BorderLeft`](../modules/components_Container._internal_.md#borderleft)<`TLength`\> \| (`undefined` \| [`BorderLeft`](../modules/components_Container._internal_.md#borderleft)<`TLength`\>)[]

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderleft)

#### Defined in

node_modules/csstype/index.d.ts:5318

___

### borderLeftColor

• `Optional` **borderLeftColor**: [`BorderLeftColor`](../modules/components_Container._internal_.md#borderleftcolor) \| (`undefined` \| [`BorderLeftColor`](../modules/components_Container._internal_.md#borderleftcolor))[]

The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderLeftColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderleftcolor)

#### Defined in

node_modules/csstype/index.d.ts:920

___

### borderLeftStyle

• `Optional` **borderLeftStyle**: [`BorderLeftStyle`](../modules/components_Container._internal_.md#borderleftstyle) \| (`undefined` \| [`BorderLeftStyle`](../modules/components_Container._internal_.md#borderleftstyle))[]

The **`border-left-style`** CSS property sets the line style of an element's left `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderLeftStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderleftstyle)

#### Defined in

node_modules/csstype/index.d.ts:934

___

### borderLeftWidth

• `Optional` **borderLeftWidth**: [`BorderLeftWidth`](../modules/components_Container._internal_.md#borderleftwidth)<`TLength`\> \| (`undefined` \| [`BorderLeftWidth`](../modules/components_Container._internal_.md#borderleftwidth)<`TLength`\>)[]

The **`border-left-width`** CSS property sets the width of the left border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderLeftWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderleftwidth)

#### Defined in

node_modules/csstype/index.d.ts:948

___

### borderRadius

• `Optional` **borderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\> \| (`undefined` \| [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>)[]

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderradius)

#### Defined in

node_modules/csstype/index.d.ts:5331

___

### borderRight

• `Optional` **borderRight**: [`BorderRight`](../modules/components_Container._internal_.md#borderright)<`TLength`\> \| (`undefined` \| [`BorderRight`](../modules/components_Container._internal_.md#borderright)<`TLength`\>)[]

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderright)

#### Defined in

node_modules/csstype/index.d.ts:5343

___

### borderRightColor

• `Optional` **borderRightColor**: [`BorderRightColor`](../modules/components_Container._internal_.md#borderrightcolor) \| (`undefined` \| [`BorderRightColor`](../modules/components_Container._internal_.md#borderrightcolor))[]

The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderRightColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderrightcolor)

#### Defined in

node_modules/csstype/index.d.ts:962

___

### borderRightStyle

• `Optional` **borderRightStyle**: [`BorderRightStyle`](../modules/components_Container._internal_.md#borderrightstyle) \| (`undefined` \| [`BorderRightStyle`](../modules/components_Container._internal_.md#borderrightstyle))[]

The **`border-right-style`** CSS property sets the line style of an element's right `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderRightStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderrightstyle)

#### Defined in

node_modules/csstype/index.d.ts:976

___

### borderRightWidth

• `Optional` **borderRightWidth**: [`BorderRightWidth`](../modules/components_Container._internal_.md#borderrightwidth)<`TLength`\> \| (`undefined` \| [`BorderRightWidth`](../modules/components_Container._internal_.md#borderrightwidth)<`TLength`\>)[]

The **`border-right-width`** CSS property sets the width of the right border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderRightWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderrightwidth)

#### Defined in

node_modules/csstype/index.d.ts:990

___

### borderSpacing

• `Optional` **borderSpacing**: [`BorderSpacing`](../modules/components_Container._internal_.md#borderspacing)<`TLength`\> \| (`undefined` \| [`BorderSpacing`](../modules/components_Container._internal_.md#borderspacing)<`TLength`\>)[]

The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.

**Syntax**: `<length> <length>?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-spacing

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderSpacing](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderspacing)

#### Defined in

node_modules/csstype/index.d.ts:1004

___

### borderStartEndRadius

• `Optional` **borderStartEndRadius**: [`BorderStartEndRadius`](../modules/components_Container._internal_.md#borderstartendradius)<`TLength`\> \| (`undefined` \| [`BorderStartEndRadius`](../modules/components_Container._internal_.md#borderstartendradius)<`TLength`\>)[]

The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderStartEndRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderstartendradius)

#### Defined in

node_modules/csstype/index.d.ts:1018

___

### borderStartStartRadius

• `Optional` **borderStartStartRadius**: [`BorderStartStartRadius`](../modules/components_Container._internal_.md#borderstartstartradius)<`TLength`\> \| (`undefined` \| [`BorderStartStartRadius`](../modules/components_Container._internal_.md#borderstartstartradius)<`TLength`\>)[]

The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **89** | **66**  | **15** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderStartStartRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderstartstartradius)

#### Defined in

node_modules/csstype/index.d.ts:1032

___

### borderStyle

• `Optional` **borderStyle**: [`BorderStyle`](../modules/components_Container._internal_.md#borderstyle) \| (`undefined` \| [`BorderStyle`](../modules/components_Container._internal_.md#borderstyle))[]

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderstyle)

#### Defined in

node_modules/csstype/index.d.ts:5355

___

### borderTop

• `Optional` **borderTop**: [`BorderTop`](../modules/components_Container._internal_.md#bordertop)<`TLength`\> \| (`undefined` \| [`BorderTop`](../modules/components_Container._internal_.md#bordertop)<`TLength`\>)[]

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertop)

#### Defined in

node_modules/csstype/index.d.ts:5367

___

### borderTopColor

• `Optional` **borderTopColor**: [`BorderTopColor`](../modules/components_Container._internal_.md#bordertopcolor) \| (`undefined` \| [`BorderTopColor`](../modules/components_Container._internal_.md#bordertopcolor))[]

The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTopColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertopcolor)

#### Defined in

node_modules/csstype/index.d.ts:1046

___

### borderTopLeftRadius

• `Optional` **borderTopLeftRadius**: [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\> \| (`undefined` \| [`BorderTopLeftRadius`](../modules/components_Container._internal_.md#bordertopleftradius)<`TLength`\>)[]

The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTopLeftRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertopleftradius)

#### Defined in

node_modules/csstype/index.d.ts:1061

___

### borderTopRightRadius

• `Optional` **borderTopRightRadius**: [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\> \| (`undefined` \| [`BorderTopRightRadius`](../modules/components_Container._internal_.md#bordertoprightradius)<`TLength`\>)[]

The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: `<length-percentage>{1,2}`

**Initial value**: `0`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTopRightRadius](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertoprightradius)

#### Defined in

node_modules/csstype/index.d.ts:1076

___

### borderTopStyle

• `Optional` **borderTopStyle**: [`BorderTopStyle`](../modules/components_Container._internal_.md#bordertopstyle) \| (`undefined` \| [`BorderTopStyle`](../modules/components_Container._internal_.md#bordertopstyle))[]

The **`border-top-style`** CSS property sets the line style of an element's top `border`.

**Syntax**: `<line-style>`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTopStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertopstyle)

#### Defined in

node_modules/csstype/index.d.ts:1090

___

### borderTopWidth

• `Optional` **borderTopWidth**: [`BorderTopWidth`](../modules/components_Container._internal_.md#bordertopwidth)<`TLength`\> \| (`undefined` \| [`BorderTopWidth`](../modules/components_Container._internal_.md#bordertopwidth)<`TLength`\>)[]

The **`border-top-width`** CSS property sets the width of the top border of an element.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderTopWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bordertopwidth)

#### Defined in

node_modules/csstype/index.d.ts:1104

___

### borderWidth

• `Optional` **borderWidth**: [`BorderWidth`](../modules/components_Container._internal_.md#borderwidth)<`TLength`\> \| (`undefined` \| [`BorderWidth`](../modules/components_Container._internal_.md#borderwidth)<`TLength`\>)[]

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[borderWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#borderwidth)

#### Defined in

node_modules/csstype/index.d.ts:5379

___

### bottom

• `Optional` **bottom**: [`Bottom`](../modules/components_Container._internal_.md#bottom)<`TLength`\> \| (`undefined` \| [`Bottom`](../modules/components_Container._internal_.md#bottom)<`TLength`\>)[]

The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[bottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#bottom)

#### Defined in

node_modules/csstype/index.d.ts:1118

___

### boxAlign

• `Optional` **boxAlign**: [`BoxAlign`](../modules/components_Container._internal_.md#boxalign) \| (`undefined` \| [`BoxAlign`](../modules/components_Container._internal_.md#boxalign))[]

The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.

**Syntax**: `start | center | end | baseline | stretch`

**Initial value**: `stretch`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxAlign

#### Defined in

node_modules/csstype/index.d.ts:7708

___

### boxDecorationBreak

• `Optional` **boxDecorationBreak**: [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak) \| (`undefined` \| [`BoxDecorationBreak`](../modules/components_Container._internal_.md#boxdecorationbreak))[]

The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: `slice | clone`

**Initial value**: `slice`

|    Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :----------: | :-----: | :---------: | :----------: | :-: |
| **22** _-x-_ | **32**  | **7** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-decoration-break

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[boxDecorationBreak](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#boxdecorationbreak)

#### Defined in

node_modules/csstype/index.d.ts:1132

___

### boxDirection

• `Optional` **boxDirection**: [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection) \| (`undefined` \| [`BoxDirection`](../modules/components_Container._internal_.md#boxdirection))[]

The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).

**Syntax**: `normal | reverse | inherit`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxDirection

#### Defined in

node_modules/csstype/index.d.ts:7718

___

### boxFlex

• `Optional` **boxFlex**: [`BoxFlex`](../modules/components_Container._internal_.md#boxflex) \| (`undefined` \| [`BoxFlex`](../modules/components_Container._internal_.md#boxflex))[]

The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

**Syntax**: `<number>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxFlex

#### Defined in

node_modules/csstype/index.d.ts:7728

___

### boxFlexGroup

• `Optional` **boxFlexGroup**: [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup) \| (`undefined` \| [`BoxFlexGroup`](../modules/components_Container._internal_.md#boxflexgroup))[]

The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxFlexGroup

#### Defined in

node_modules/csstype/index.d.ts:7738

___

### boxLines

• `Optional` **boxLines**: [`BoxLines`](../modules/components_Container._internal_.md#boxlines) \| (`undefined` \| [`BoxLines`](../modules/components_Container._internal_.md#boxlines))[]

The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).

**Syntax**: `single | multiple`

**Initial value**: `single`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxLines

#### Defined in

node_modules/csstype/index.d.ts:7748

___

### boxOrdinalGroup

• `Optional` **boxOrdinalGroup**: [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup) \| (`undefined` \| [`BoxOrdinalGroup`](../modules/components_Container._internal_.md#boxordinalgroup))[]

The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.

**Syntax**: `<integer>`

**Initial value**: `1`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxOrdinalGroup

#### Defined in

node_modules/csstype/index.d.ts:7758

___

### boxOrient

• `Optional` **boxOrient**: [`BoxOrient`](../modules/components_Container._internal_.md#boxorient) \| (`undefined` \| [`BoxOrient`](../modules/components_Container._internal_.md#boxorient))[]

This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.

**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`

**Initial value**: `inline-axis` (`horizontal` in XUL)

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxOrient

#### Defined in

node_modules/csstype/index.d.ts:7768

___

### boxPack

• `Optional` **boxPack**: [`BoxPack`](../modules/components_Container._internal_.md#boxpack) \| (`undefined` \| [`BoxPack`](../modules/components_Container._internal_.md#boxpack))[]

The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.

**Syntax**: `start | center | end | justify`

**Initial value**: `start`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.boxPack

#### Defined in

node_modules/csstype/index.d.ts:7778

___

### boxShadow

• `Optional` **boxShadow**: [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow) \| (`undefined` \| [`BoxShadow`](../modules/components_Container._internal_.md#boxshadow))[]

The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: `none | <shadow>#`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  |  **4**  | **5.1** | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-shadow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[boxShadow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#boxshadow)

#### Defined in

node_modules/csstype/index.d.ts:1147

___

### boxSizing

• `Optional` **boxSizing**: [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing) \| (`undefined` \| [`BoxSizing`](../modules/components_Container._internal_.md#boxsizing))[]

The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: `content-box | border-box`

**Initial value**: `content-box`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  | **29**  | **5.1** | **12** | **8** |
| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/box-sizing

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[boxSizing](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#boxsizing)

#### Defined in

node_modules/csstype/index.d.ts:1162

___

### breakAfter

• `Optional` **breakAfter**: [`BreakAfter`](../modules/components_Container._internal_.md#breakafter) \| (`undefined` \| [`BreakAfter`](../modules/components_Container._internal_.md#breakafter))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[breakAfter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#breakafter)

#### Defined in

node_modules/csstype/index.d.ts:1190

___

### breakBefore

• `Optional` **breakBefore**: [`BreakBefore`](../modules/components_Container._internal_.md#breakbefore) \| (`undefined` \| [`BreakBefore`](../modules/components_Container._internal_.md#breakbefore))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[breakBefore](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#breakbefore)

#### Defined in

node_modules/csstype/index.d.ts:1218

___

### breakInside

• `Optional` **breakInside**: [`BreakInside`](../modules/components_Container._internal_.md#breakinside) \| (`undefined` \| [`BreakInside`](../modules/components_Container._internal_.md#breakinside))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[breakInside](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#breakinside)

#### Defined in

node_modules/csstype/index.d.ts:1246

___

### captionSide

• `Optional` **captionSide**: [`CaptionSide`](../modules/components_Container._internal_.md#captionside) \| (`undefined` \| [`CaptionSide`](../modules/components_Container._internal_.md#captionside))[]

The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.

**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`

**Initial value**: `top`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/caption-side

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[captionSide](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#captionside)

#### Defined in

node_modules/csstype/index.d.ts:1260

___

### caretColor

• `Optional` **caretColor**: [`CaretColor`](../modules/components_Container._internal_.md#caretcolor) \| (`undefined` \| [`CaretColor`](../modules/components_Container._internal_.md#caretcolor))[]

The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.

**Syntax**: `auto | <color>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **53**  | **11.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/caret-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[caretColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#caretcolor)

#### Defined in

node_modules/csstype/index.d.ts:1274

___

### clear

• `Optional` **clear**: [`Clear`](../modules/components_Container._internal_.md#clear) \| (`undefined` \| [`Clear`](../modules/components_Container._internal_.md#clear))[]

The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.

**Syntax**: `none | left | right | both | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/clear

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[clear](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#clear)

#### Defined in

node_modules/csstype/index.d.ts:1288

___

### clip

• `Optional` **clip**: [`Clip`](../modules/components_Container._internal_.md#clip) \| (`undefined` \| [`Clip`](../modules/components_Container._internal_.md#clip))[]

The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.

**Syntax**: `<shape> | auto`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.clip

#### Defined in

node_modules/csstype/index.d.ts:7788

___

### clipPath

• `Optional` **clipPath**: [`ClipPath`](../modules/components_Container._internal_.md#clippath) \| (`undefined` \| [`ClipPath`](../modules/components_Container._internal_.md#clippath))[]

The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`

**Initial value**: `none`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **55**  | **3.5** |  **9.1**  | **12** | **10** |
| 23 _-x-_ |         | 6.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/clip-path

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[clipPath](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#clippath)

#### Defined in

node_modules/csstype/index.d.ts:1303

___

### clipRule

• `Optional` **clipRule**: [`ClipRule`](../modules/components_Container._internal_.md#cliprule) \| (`undefined` \| [`ClipRule`](../modules/components_Container._internal_.md#cliprule))[]

#### Inherited from

SvgPropertiesFallback.clipRule

#### Defined in

node_modules/csstype/index.d.ts:8752

___

### color

• `Optional` **color**: [`Color`](../modules/components_Container._internal_.md#color) \| (`undefined` \| [`Color`](../modules/components_Container._internal_.md#color))[]

The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.

**Syntax**: `<color>`

**Initial value**: Varies from one browser to another

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[color](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#color)

#### Defined in

node_modules/csstype/index.d.ts:1317

___

### colorAdjust

• `Optional` **colorAdjust**: [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust) \| (`undefined` \| [`ColorAdjust`](../modules/components_Container._internal_.md#coloradjust))[]

The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: `economy | exact`

**Initial value**: `economy`

|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |
| :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |
| **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color-adjust

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[colorAdjust](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#coloradjust)

#### Defined in

node_modules/csstype/index.d.ts:1331

___

### colorInterpolation

• `Optional` **colorInterpolation**: [`ColorInterpolation`](../modules/components_Container._internal_.md#colorinterpolation) \| (`undefined` \| [`ColorInterpolation`](../modules/components_Container._internal_.md#colorinterpolation))[]

#### Inherited from

SvgPropertiesFallback.colorInterpolation

#### Defined in

node_modules/csstype/index.d.ts:8754

___

### colorRendering

• `Optional` **colorRendering**: [`ColorRendering`](../modules/components_Container._internal_.md#colorrendering) \| (`undefined` \| [`ColorRendering`](../modules/components_Container._internal_.md#colorrendering))[]

#### Inherited from

SvgPropertiesFallback.colorRendering

#### Defined in

node_modules/csstype/index.d.ts:8755

___

### colorScheme

• `Optional` **colorScheme**: [`ColorScheme`](../modules/components_Container._internal_.md#colorscheme) \| (`undefined` \| [`ColorScheme`](../modules/components_Container._internal_.md#colorscheme))[]

The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

**Syntax**: `normal | [ light | dark | <custom-ident> ]+`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **81** |   No    | **13** | **81** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/color-scheme

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[colorScheme](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#colorscheme)

#### Defined in

node_modules/csstype/index.d.ts:1345

___

### columnCount

• `Optional` **columnCount**: [`ColumnCount`](../modules/components_Container._internal_.md#columncount) \| (`undefined` \| [`ColumnCount`](../modules/components_Container._internal_.md#columncount))[]

The **`column-count`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: `<integer> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-count

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnCount](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columncount)

#### Defined in

node_modules/csstype/index.d.ts:1360

___

### columnFill

• `Optional` **columnFill**: [`ColumnFill`](../modules/components_Container._internal_.md#columnfill) \| (`undefined` \| [`ColumnFill`](../modules/components_Container._internal_.md#columnfill))[]

The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: `auto | balance | balance-all`

**Initial value**: `balance`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 8 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-fill

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnFill](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnfill)

#### Defined in

node_modules/csstype/index.d.ts:1375

___

### columnGap

• `Optional` **columnGap**: [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\> \| (`undefined` \| [`ColumnGap`](../modules/components_Container._internal_.md#columngap)<`TLength`\>)[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnGap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columngap)

#### Defined in

node_modules/csstype/index.d.ts:1413

___

### columnRule

• `Optional` **columnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\> \| (`undefined` \| [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>)[]

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnRule](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnrule)

#### Defined in

node_modules/csstype/index.d.ts:5392

___

### columnRuleColor

• `Optional` **columnRuleColor**: [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor) \| (`undefined` \| [`ColumnRuleColor`](../modules/components_Container._internal_.md#columnrulecolor))[]

The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnRuleColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnrulecolor)

#### Defined in

node_modules/csstype/index.d.ts:1428

___

### columnRuleStyle

• `Optional` **columnRuleStyle**: [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle) \| (`undefined` \| [`ColumnRuleStyle`](../modules/components_Container._internal_.md#columnrulestyle))[]

The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-style'>`

**Initial value**: `none`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnRuleStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnrulestyle)

#### Defined in

node_modules/csstype/index.d.ts:1443

___

### columnRuleWidth

• `Optional` **columnRuleWidth**: [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\> \| (`undefined` \| [`ColumnRuleWidth`](../modules/components_Container._internal_.md#columnrulewidth)<`TLength`\>)[]

The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: `<'border-width'>`

**Initial value**: `medium`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnRuleWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnrulewidth)

#### Defined in

node_modules/csstype/index.d.ts:1458

___

### columnSpan

• `Optional` **columnSpan**: [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan) \| (`undefined` \| [`ColumnSpan`](../modules/components_Container._internal_.md#columnspan))[]

The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.

**Syntax**: `none | all`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **50**  | **71**  |   **9**   | **12** | **10** |
| 6 _-x-_ |         | 5.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-span

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnSpan](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnspan)

#### Defined in

node_modules/csstype/index.d.ts:1473

___

### columnWidth

• `Optional` **columnWidth**: [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\> \| (`undefined` \| [`ColumnWidth`](../modules/components_Container._internal_.md#columnwidth)<`TLength`\>)[]

The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: `<length> | auto`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **50**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columnWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columnwidth)

#### Defined in

node_modules/csstype/index.d.ts:1488

___

### columns

• `Optional` **columns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\> \| (`undefined` \| [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>)[]

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/columns

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[columns](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#columns)

#### Defined in

node_modules/csstype/index.d.ts:5405

___

### contain

• `Optional` **contain**: [`Contain`](../modules/components_Container._internal_.md#contain) \| (`undefined` \| [`Contain`](../modules/components_Container._internal_.md#contain))[]

The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.

**Syntax**: `none | strict | content | [ size || layout || style || paint ]`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **52** | **69**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/contain

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[contain](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#contain)

#### Defined in

node_modules/csstype/index.d.ts:1502

___

### content

• `Optional` **content**: [`Content`](../modules/components_Container._internal_.md#content) \| (`undefined` \| [`Content`](../modules/components_Container._internal_.md#content))[]

The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._

**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/content

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[content](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#content)

#### Defined in

node_modules/csstype/index.d.ts:1516

___

### contentVisibility

• `Optional` **contentVisibility**: [`ContentVisibility`](../modules/components_Container._internal_.md#contentvisibility) \| (`undefined` \| [`ContentVisibility`](../modules/components_Container._internal_.md#contentvisibility))[]

The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.

**Syntax**: `visible | auto | hidden`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** |   No    |   No   | **85** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/content-visibility

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[contentVisibility](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#contentvisibility)

#### Defined in

node_modules/csstype/index.d.ts:1530

___

### counterIncrement

• `Optional` **counterIncrement**: [`CounterIncrement`](../modules/components_Container._internal_.md#counterincrement) \| (`undefined` \| [`CounterIncrement`](../modules/components_Container._internal_.md#counterincrement))[]

The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-increment

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[counterIncrement](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#counterincrement)

#### Defined in

node_modules/csstype/index.d.ts:1544

___

### counterReset

• `Optional` **counterReset**: [`CounterReset`](../modules/components_Container._internal_.md#counterreset) \| (`undefined` \| [`CounterReset`](../modules/components_Container._internal_.md#counterreset))[]

The **`counter-reset`** CSS property resets a CSS counter to a given value.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-reset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[counterReset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#counterreset)

#### Defined in

node_modules/csstype/index.d.ts:1558

___

### counterSet

• `Optional` **counterSet**: [`CounterSet`](../modules/components_Container._internal_.md#counterset) \| (`undefined` \| [`CounterSet`](../modules/components_Container._internal_.md#counterset))[]

The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.

**Syntax**: `[ <custom-ident> <integer>? ]+ | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** | **68**  |   No   | **85** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/counter-set

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[counterSet](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#counterset)

#### Defined in

node_modules/csstype/index.d.ts:1572

___

### cursor

• `Optional` **cursor**: [`Cursor`](../modules/components_Container._internal_.md#cursor) \| (`undefined` \| [`Cursor`](../modules/components_Container._internal_.md#cursor))[]

The **`cursor`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.

**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/cursor

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[cursor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#cursor)

#### Defined in

node_modules/csstype/index.d.ts:1586

___

### direction

• `Optional` **direction**: [`Direction`](../modules/components_Container._internal_.md#direction) \| (`undefined` \| [`Direction`](../modules/components_Container._internal_.md#direction))[]

The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).

**Syntax**: `ltr | rtl`

**Initial value**: `ltr`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **2**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/direction

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[direction](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#direction)

#### Defined in

node_modules/csstype/index.d.ts:1600

___

### display

• `Optional` **display**: [`Display`](../modules/components_Container._internal_.md#display) \| (`undefined` \| [`Display`](../modules/components_Container._internal_.md#display))[]

The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`

**Initial value**: `inline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/display

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[display](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#display)

#### Defined in

node_modules/csstype/index.d.ts:1614

___

### dominantBaseline

• `Optional` **dominantBaseline**: [`DominantBaseline`](../modules/components_Container._internal_.md#dominantbaseline) \| (`undefined` \| [`DominantBaseline`](../modules/components_Container._internal_.md#dominantbaseline))[]

#### Inherited from

SvgPropertiesFallback.dominantBaseline

#### Defined in

node_modules/csstype/index.d.ts:8759

___

### emptyCells

• `Optional` **emptyCells**: [`EmptyCells`](../modules/components_Container._internal_.md#emptycells) \| (`undefined` \| [`EmptyCells`](../modules/components_Container._internal_.md#emptycells))[]

The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.

**Syntax**: `show | hide`

**Initial value**: `show`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/empty-cells

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[emptyCells](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#emptycells)

#### Defined in

node_modules/csstype/index.d.ts:1628

___

### fill

• `Optional` **fill**: [`Fill`](../modules/components_Container._internal_.md#fill) \| (`undefined` \| [`Fill`](../modules/components_Container._internal_.md#fill))[]

#### Inherited from

SvgPropertiesFallback.fill

#### Defined in

node_modules/csstype/index.d.ts:8760

___

### fillOpacity

• `Optional` **fillOpacity**: [`FillOpacity`](../modules/components_Container._internal_.md#fillopacity) \| (`undefined` \| [`FillOpacity`](../modules/components_Container._internal_.md#fillopacity))[]

#### Inherited from

SvgPropertiesFallback.fillOpacity

#### Defined in

node_modules/csstype/index.d.ts:8761

___

### fillRule

• `Optional` **fillRule**: [`FillRule`](../modules/components_Container._internal_.md#fillrule) \| (`undefined` \| [`FillRule`](../modules/components_Container._internal_.md#fillrule))[]

#### Inherited from

SvgPropertiesFallback.fillRule

#### Defined in

node_modules/csstype/index.d.ts:8762

___

### filter

• `Optional` **filter**: [`Filter`](../modules/components_Container._internal_.md#filter) \| (`undefined` \| [`Filter`](../modules/components_Container._internal_.md#filter))[]

The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: `none | <filter-function-list>`

**Initial value**: `none`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **53**  | **35**  | **9.1** | **12** | No  |
| 18 _-x-_ |         | 6 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/filter

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[filter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#filter)

#### Defined in

node_modules/csstype/index.d.ts:1643

___

### flex

• `Optional` **flex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\> \| (`undefined` \| [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>)[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flex](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flex)

#### Defined in

node_modules/csstype/index.d.ts:5418

___

### flexBasis

• `Optional` **flexBasis**: [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`TLength`\> \| (`undefined` \| [`FlexBasis`](../modules/components_Container._internal_.md#flexbasis)<`TLength`\>)[]

The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

**Syntax**: `content | <'width'>`

**Initial value**: `auto`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **22**  |  **9**  | **12** | **11** |
| 22 _-x-_ |         | 7 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-basis

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexBasis](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexbasis)

#### Defined in

node_modules/csstype/index.d.ts:1658

___

### flexDirection

• `Optional` **flexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection) \| (`undefined` \| [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection))[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-direction

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexDirection](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexdirection)

#### Defined in

node_modules/csstype/index.d.ts:1673

___

### flexFlow

• `Optional` **flexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow) \| (`undefined` \| [`FlexFlow`](../modules/components_Container._internal_.md#flexflow))[]

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexFlow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexflow)

#### Defined in

node_modules/csstype/index.d.ts:5431

___

### flexGrow

• `Optional` **flexGrow**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow) \| (`undefined` \| [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow))[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |            IE            |
| :------: | :-----: | :-----: | :----: | :----------------------: |
|  **29**  | **20**  |  **9**  | **12** |          **11**          |
| 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-grow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexGrow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexgrow)

#### Defined in

node_modules/csstype/index.d.ts:1688

___

### flexShrink

• `Optional` **flexShrink**: [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink) \| (`undefined` \| [`FlexShrink`](../modules/components_Container._internal_.md#flexshrink))[]

The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

**Syntax**: `<number>`

**Initial value**: `1`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **10** |
| 22 _-x-_ |         | 8 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-shrink

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexShrink](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexshrink)

#### Defined in

node_modules/csstype/index.d.ts:1703

___

### flexWrap

• `Optional` **flexWrap**: [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap) \| (`undefined` \| [`FlexWrap`](../modules/components_Container._internal_.md#flexwrap))[]

The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: `nowrap | wrap | wrap-reverse`

**Initial value**: `nowrap`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **29**  | **28**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-wrap

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[flexWrap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#flexwrap)

#### Defined in

node_modules/csstype/index.d.ts:1718

___

### float

• `Optional` **float**: [`Float`](../modules/components_Container._internal_.md#float) \| (`undefined` \| [`Float`](../modules/components_Container._internal_.md#float))[]

The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

**Syntax**: `left | right | none | inline-start | inline-end`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/float

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[float](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#float)

#### Defined in

node_modules/csstype/index.d.ts:1732

___

### floodColor

• `Optional` **floodColor**: [`FloodColor`](../modules/components_Container._internal_.md#floodcolor) \| (`undefined` \| [`FloodColor`](../modules/components_Container._internal_.md#floodcolor))[]

#### Inherited from

SvgPropertiesFallback.floodColor

#### Defined in

node_modules/csstype/index.d.ts:8764

___

### floodOpacity

• `Optional` **floodOpacity**: [`FloodOpacity`](../modules/components_Container._internal_.md#floodopacity) \| (`undefined` \| [`FloodOpacity`](../modules/components_Container._internal_.md#floodopacity))[]

#### Inherited from

SvgPropertiesFallback.floodOpacity

#### Defined in

node_modules/csstype/index.d.ts:8765

___

### font

• `Optional` **font**: [`Font`](../modules/components_Container._internal_.md#font) \| (`undefined` \| [`Font`](../modules/components_Container._internal_.md#font))[]

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[font](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#font)

#### Defined in

node_modules/csstype/index.d.ts:5443

___

### fontFamily

• `Optional` **fontFamily**: [`FontFamily`](../modules/components_Container._internal_.md#fontfamily) \| (`undefined` \| [`FontFamily`](../modules/components_Container._internal_.md#fontfamily))[]

The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

**Syntax**: `[ <family-name> | <generic-family> ]#`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-family

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontFamily](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontfamily)

#### Defined in

node_modules/csstype/index.d.ts:1746

___

### fontFeatureSettings

• `Optional` **fontFeatureSettings**: [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings) \| (`undefined` \| [`FontFeatureSettings`](../modules/components_Container._internal_.md#fontfeaturesettings))[]

The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: `normal | <feature-tag-value>#`

**Initial value**: `normal`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **48**  |  **34**  | **9.1** | **15** | **10** |
| 16 _-x-_ | 15 _-x-_ |         |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-feature-settings

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontFeatureSettings](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontfeaturesettings)

#### Defined in

node_modules/csstype/index.d.ts:1761

___

### fontKerning

• `Optional` **fontKerning**: [`FontKerning`](../modules/components_Container._internal_.md#fontkerning) \| (`undefined` \| [`FontKerning`](../modules/components_Container._internal_.md#fontkerning))[]

The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: `auto | normal | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **33** | **32**  |  **9**  | **79** | No  |
|        |         | 6 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-kerning

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontKerning](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontkerning)

#### Defined in

node_modules/csstype/index.d.ts:1776

___

### fontLanguageOverride

• `Optional` **fontLanguageOverride**: [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride) \| (`undefined` \| [`FontLanguageOverride`](../modules/components_Container._internal_.md#fontlanguageoverride))[]

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: `normal | <string>`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  |   No   |  No  | No  |
|        | 4 _-x-_ |        |      |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-language-override

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontLanguageOverride](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontlanguageoverride)

#### Defined in

node_modules/csstype/index.d.ts:1791

___

### fontOpticalSizing

• `Optional` **fontOpticalSizing**: [`FontOpticalSizing`](../modules/components_Container._internal_.md#fontopticalsizing) \| (`undefined` \| [`FontOpticalSizing`](../modules/components_Container._internal_.md#fontopticalsizing))[]

The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **62**  | **11** | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontOpticalSizing](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontopticalsizing)

#### Defined in

node_modules/csstype/index.d.ts:1805

___

### fontSize

• `Optional` **fontSize**: [`FontSize`](../modules/components_Container._internal_.md#fontsize)<`TLength`\> \| (`undefined` \| [`FontSize`](../modules/components_Container._internal_.md#fontsize)<`TLength`\>)[]

The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.

**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`

**Initial value**: `medium`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontsize)

#### Defined in

node_modules/csstype/index.d.ts:1819

___

### fontSizeAdjust

• `Optional` **fontSizeAdjust**: [`FontSizeAdjust`](../modules/components_Container._internal_.md#fontsizeadjust) \| (`undefined` \| [`FontSizeAdjust`](../modules/components_Container._internal_.md#fontsizeadjust))[]

The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).

**Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |  **1**  |   No   | n/a  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-size-adjust

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontSizeAdjust](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:1833

___

### fontSmooth

• `Optional` **fontSmooth**: [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\> \| (`undefined` \| [`FontSmooth`](../modules/components_Container._internal_.md#fontsmooth)<`TLength`\>)[]

The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: `auto | never | always | <absolute-size> | <length>`

**Initial value**: `auto`

|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
| :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-smooth

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontSmooth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontsmooth)

#### Defined in

node_modules/csstype/index.d.ts:1847

___

### fontStretch

• `Optional` **fontStretch**: [`FontStretch`](../modules/components_Container._internal_.md#fontstretch) \| (`undefined` \| [`FontStretch`](../modules/components_Container._internal_.md#fontstretch))[]

The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.

**Syntax**: `<font-stretch-absolute>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **60** |  **9**  | **11** | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-stretch

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontStretch](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontstretch)

#### Defined in

node_modules/csstype/index.d.ts:1861

___

### fontStyle

• `Optional` **fontStyle**: [`FontStyle`](../modules/components_Container._internal_.md#fontstyle) \| (`undefined` \| [`FontStyle`](../modules/components_Container._internal_.md#fontstyle))[]

The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.

**Syntax**: `normal | italic | oblique <angle>?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontstyle)

#### Defined in

node_modules/csstype/index.d.ts:1875

___

### fontSynthesis

• `Optional` **fontSynthesis**: [`FontSynthesis`](../modules/components_Container._internal_.md#fontsynthesis) \| (`undefined` \| [`FontSynthesis`](../modules/components_Container._internal_.md#fontsynthesis))[]

The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.

**Syntax**: `none | [ weight || style || small-caps ]`

**Initial value**: `weight style`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  | **9**  |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-synthesis

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontSynthesis](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontsynthesis)

#### Defined in

node_modules/csstype/index.d.ts:1889

___

### fontVariant

• `Optional` **fontVariant**: [`FontVariant`](../modules/components_Container._internal_.md#fontvariant) \| (`undefined` \| [`FontVariant`](../modules/components_Container._internal_.md#fontvariant))[]

The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariant](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariant)

#### Defined in

node_modules/csstype/index.d.ts:1903

___

### fontVariantAlternates

• `Optional` **fontVariantAlternates**: [`FontVariantAlternates`](../modules/components_Container._internal_.md#fontvariantalternates) \| (`undefined` \| [`FontVariantAlternates`](../modules/components_Container._internal_.md#fontvariantalternates))[]

The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.

**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`

**Initial value**: `normal`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.fontVariantAlternates

#### Defined in

node_modules/csstype/index.d.ts:7798

___

### fontVariantCaps

• `Optional` **fontVariantCaps**: [`FontVariantCaps`](../modules/components_Container._internal_.md#fontvariantcaps) \| (`undefined` \| [`FontVariantCaps`](../modules/components_Container._internal_.md#fontvariantcaps))[]

The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.

**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-caps

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariantCaps](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariantcaps)

#### Defined in

node_modules/csstype/index.d.ts:1917

___

### fontVariantEastAsian

• `Optional` **fontVariantEastAsian**: [`FontVariantEastAsian`](../modules/components_Container._internal_.md#fontvarianteastasian) \| (`undefined` \| [`FontVariantEastAsian`](../modules/components_Container._internal_.md#fontvarianteastasian))[]

The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.

**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **63** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariantEastAsian](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvarianteastasian)

#### Defined in

node_modules/csstype/index.d.ts:1931

___

### fontVariantLigatures

• `Optional` **fontVariantLigatures**: [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures) \| (`undefined` \| [`FontVariantLigatures`](../modules/components_Container._internal_.md#fontvariantligatures))[]

The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`

**Initial value**: `normal`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **34**  | **34**  | **9.1** | **79** | No  |
| 31 _-x-_ |         | 7 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariantLigatures](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariantligatures)

#### Defined in

node_modules/csstype/index.d.ts:1946

___

### fontVariantNumeric

• `Optional` **fontVariantNumeric**: [`FontVariantNumeric`](../modules/components_Container._internal_.md#fontvariantnumeric) \| (`undefined` \| [`FontVariantNumeric`](../modules/components_Container._internal_.md#fontvariantnumeric))[]

The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariantNumeric](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariantnumeric)

#### Defined in

node_modules/csstype/index.d.ts:1960

___

### fontVariantPosition

• `Optional` **fontVariantPosition**: [`FontVariantPosition`](../modules/components_Container._internal_.md#fontvariantposition) \| (`undefined` \| [`FontVariantPosition`](../modules/components_Container._internal_.md#fontvariantposition))[]

The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.

**Syntax**: `normal | sub | super`

**Initial value**: `normal`

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
|   No   | **34**  | **9.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variant-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariantPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariantposition)

#### Defined in

node_modules/csstype/index.d.ts:1974

___

### fontVariationSettings

• `Optional` **fontVariationSettings**: [`FontVariationSettings`](../modules/components_Container._internal_.md#fontvariationsettings) \| (`undefined` \| [`FontVariationSettings`](../modules/components_Container._internal_.md#fontvariationsettings))[]

The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

**Syntax**: `normal | [ <string> <number> ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **62** | **62**  | **11** | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-variation-settings

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontVariationSettings](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontvariationsettings)

#### Defined in

node_modules/csstype/index.d.ts:1988

___

### fontWeight

• `Optional` **fontWeight**: [`FontWeight`](../modules/components_Container._internal_.md#fontweight) \| (`undefined` \| [`FontWeight`](../modules/components_Container._internal_.md#fontweight))[]

The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.

**Syntax**: `<font-weight-absolute> | bolder | lighter`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font-weight

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[fontWeight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#fontweight)

#### Defined in

node_modules/csstype/index.d.ts:2002

___

### forcedColorAdjust

• `Optional` **forcedColorAdjust**: [`ForcedColorAdjust`](../modules/components_Container._internal_.md#forcedcoloradjust) \| (`undefined` \| [`ForcedColorAdjust`](../modules/components_Container._internal_.md#forcedcoloradjust))[]

The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |              Edge               |                 IE                  |
| :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
| **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
|        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[forcedColorAdjust](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#forcedcoloradjust)

#### Defined in

node_modules/csstype/index.d.ts:2017

___

### gap

• `Optional` **gap**: [`Gap`](../modules/components_Container._internal_.md#gap)<`TLength`\> \| (`undefined` \| [`Gap`](../modules/components_Container._internal_.md#gap)<`TLength`\>)[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gap)

#### Defined in

node_modules/csstype/index.d.ts:5478

___

### glyphOrientationVertical

• `Optional` **glyphOrientationVertical**: [`GlyphOrientationVertical`](../modules/components_Container._internal_.md#glyphorientationvertical) \| (`undefined` \| [`GlyphOrientationVertical`](../modules/components_Container._internal_.md#glyphorientationvertical))[]

#### Inherited from

SvgPropertiesFallback.glyphOrientationVertical

#### Defined in

node_modules/csstype/index.d.ts:8774

___

### grid

• `Optional` **grid**: [`Grid`](../modules/components_Container._internal_.md#grid) \| (`undefined` \| [`Grid`](../modules/components_Container._internal_.md#grid))[]

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[grid](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#grid)

#### Defined in

node_modules/csstype/index.d.ts:5490

___

### gridArea

• `Optional` **gridArea**: [`GridArea`](../modules/components_Container._internal_.md#gridarea) \| (`undefined` \| [`GridArea`](../modules/components_Container._internal_.md#gridarea))[]

The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridArea](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridarea)

#### Defined in

node_modules/csstype/index.d.ts:5502

___

### gridAutoColumns

• `Optional` **gridAutoColumns**: [`GridAutoColumns`](../modules/components_Container._internal_.md#gridautocolumns)<`TLength`\> \| (`undefined` \| [`GridAutoColumns`](../modules/components_Container._internal_.md#gridautocolumns)<`TLength`\>)[]

The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridAutoColumns](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridautocolumns)

#### Defined in

node_modules/csstype/index.d.ts:2031

___

### gridAutoFlow

• `Optional` **gridAutoFlow**: [`GridAutoFlow`](../modules/components_Container._internal_.md#gridautoflow) \| (`undefined` \| [`GridAutoFlow`](../modules/components_Container._internal_.md#gridautoflow))[]

The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

**Syntax**: `[ row | column ] || dense`

**Initial value**: `row`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridAutoFlow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridautoflow)

#### Defined in

node_modules/csstype/index.d.ts:2045

___

### gridAutoRows

• `Optional` **gridAutoRows**: [`GridAutoRows`](../modules/components_Container._internal_.md#gridautorows)<`TLength`\> \| (`undefined` \| [`GridAutoRows`](../modules/components_Container._internal_.md#gridautorows)<`TLength`\>)[]

The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.

**Syntax**: `<track-size>+`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridAutoRows](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridautorows)

#### Defined in

node_modules/csstype/index.d.ts:2059

___

### gridColumn

• `Optional` **gridColumn**: [`GridColumn`](../modules/components_Container._internal_.md#gridcolumn) \| (`undefined` \| [`GridColumn`](../modules/components_Container._internal_.md#gridcolumn))[]

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridColumn](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridcolumn)

#### Defined in

node_modules/csstype/index.d.ts:5514

___

### gridColumnEnd

• `Optional` **gridColumnEnd**: [`GridColumnEnd`](../modules/components_Container._internal_.md#gridcolumnend) \| (`undefined` \| [`GridColumnEnd`](../modules/components_Container._internal_.md#gridcolumnend))[]

The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridColumnEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridcolumnend)

#### Defined in

node_modules/csstype/index.d.ts:2073

___

### gridColumnGap

• `Optional` **gridColumnGap**: [`GridColumnGap`](../modules/components_Container._internal_.md#gridcolumngap)<`TLength`\> \| (`undefined` \| [`GridColumnGap`](../modules/components_Container._internal_.md#gridcolumngap)<`TLength`\>)[]

The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.gridColumnGap

#### Defined in

node_modules/csstype/index.d.ts:7808

___

### gridColumnStart

• `Optional` **gridColumnStart**: [`GridColumnStart`](../modules/components_Container._internal_.md#gridcolumnstart) \| (`undefined` \| [`GridColumnStart`](../modules/components_Container._internal_.md#gridcolumnstart))[]

The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridColumnStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridcolumnstart)

#### Defined in

node_modules/csstype/index.d.ts:2087

___

### gridGap

• `Optional` **gridGap**: [`GridGap`](../modules/components_Container._internal_.md#gridgap)<`TLength`\> \| (`undefined` \| [`GridGap`](../modules/components_Container._internal_.md#gridgap)<`TLength`\>)[]

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.gridGap

#### Defined in

node_modules/csstype/index.d.ts:7816

___

### gridRow

• `Optional` **gridRow**: [`GridRow`](../modules/components_Container._internal_.md#gridrow) \| (`undefined` \| [`GridRow`](../modules/components_Container._internal_.md#gridrow))[]

The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridRow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridrow)

#### Defined in

node_modules/csstype/index.d.ts:5526

___

### gridRowEnd

• `Optional` **gridRowEnd**: [`GridRowEnd`](../modules/components_Container._internal_.md#gridrowend) \| (`undefined` \| [`GridRowEnd`](../modules/components_Container._internal_.md#gridrowend))[]

The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridRowEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridrowend)

#### Defined in

node_modules/csstype/index.d.ts:2101

___

### gridRowGap

• `Optional` **gridRowGap**: [`GridRowGap`](../modules/components_Container._internal_.md#gridrowgap)<`TLength`\> \| (`undefined` \| [`GridRowGap`](../modules/components_Container._internal_.md#gridrowgap)<`TLength`\>)[]

The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.gridRowGap

#### Defined in

node_modules/csstype/index.d.ts:7826

___

### gridRowStart

• `Optional` **gridRowStart**: [`GridRowStart`](../modules/components_Container._internal_.md#gridrowstart) \| (`undefined` \| [`GridRowStart`](../modules/components_Container._internal_.md#gridrowstart))[]

The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

**Syntax**: `<grid-line>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridRowStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridrowstart)

#### Defined in

node_modules/csstype/index.d.ts:2115

___

### gridTemplate

• `Optional` **gridTemplate**: [`GridTemplate`](../modules/components_Container._internal_.md#gridtemplate) \| (`undefined` \| [`GridTemplate`](../modules/components_Container._internal_.md#gridtemplate))[]

The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridTemplate](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridtemplate)

#### Defined in

node_modules/csstype/index.d.ts:5538

___

### gridTemplateAreas

• `Optional` **gridTemplateAreas**: [`GridTemplateAreas`](../modules/components_Container._internal_.md#gridtemplateareas) \| (`undefined` \| [`GridTemplateAreas`](../modules/components_Container._internal_.md#gridtemplateareas))[]

The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

**Syntax**: `none | <string>+`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-areas

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridTemplateAreas](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridtemplateareas)

#### Defined in

node_modules/csstype/index.d.ts:2129

___

### gridTemplateColumns

• `Optional` **gridTemplateColumns**: [`GridTemplateColumns`](../modules/components_Container._internal_.md#gridtemplatecolumns)<`TLength`\> \| (`undefined` \| [`GridTemplateColumns`](../modules/components_Container._internal_.md#gridtemplatecolumns)<`TLength`\>)[]

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-columns

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridTemplateColumns](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridtemplatecolumns)

#### Defined in

node_modules/csstype/index.d.ts:2143

___

### gridTemplateRows

• `Optional` **gridTemplateRows**: [`GridTemplateRows`](../modules/components_Container._internal_.md#gridtemplaterows)<`TLength`\> \| (`undefined` \| [`GridTemplateRows`](../modules/components_Container._internal_.md#gridtemplaterows)<`TLength`\>)[]

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template-rows

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[gridTemplateRows](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#gridtemplaterows)

#### Defined in

node_modules/csstype/index.d.ts:2157

___

### hangingPunctuation

• `Optional` **hangingPunctuation**: [`HangingPunctuation`](../modules/components_Container._internal_.md#hangingpunctuation) \| (`undefined` \| [`HangingPunctuation`](../modules/components_Container._internal_.md#hangingpunctuation))[]

The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.

**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`

**Initial value**: `none`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **10** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[hangingPunctuation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#hangingpunctuation)

#### Defined in

node_modules/csstype/index.d.ts:2171

___

### height

• `Optional` **height**: [`Height`](../modules/components_Container._internal_.md#height)<`TLength`\> \| (`undefined` \| [`Height`](../modules/components_Container._internal_.md#height)<`TLength`\>)[]

The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/height

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[height](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#height)

#### Defined in

node_modules/csstype/index.d.ts:2185

___

### hyphens

• `Optional` **hyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens) \| (`undefined` \| [`Hyphens`](../modules/components_Container._internal_.md#hyphens))[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

|  Chrome  | Firefox |    Safari     |  Edge  |      IE      |
| :------: | :-----: | :-----------: | :----: | :----------: |
|  **55**  | **43**  | **5.1** _-x-_ | **79** | **10** _-x-_ |
| 13 _-x-_ | 6 _-x-_ |               |        |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/hyphens

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[hyphens](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#hyphens)

#### Defined in

node_modules/csstype/index.d.ts:2200

___

### imageOrientation

• `Optional` **imageOrientation**: [`ImageOrientation`](../modules/components_Container._internal_.md#imageorientation) \| (`undefined` \| [`ImageOrientation`](../modules/components_Container._internal_.md#imageorientation))[]

The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.

**Syntax**: `from-image | <angle> | [ <angle>? flip ]`

**Initial value**: `from-image`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **81** | **26**  | **13.1** | **81** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/image-orientation

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[imageOrientation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#imageorientation)

#### Defined in

node_modules/csstype/index.d.ts:2214

___

### imageRendering

• `Optional` **imageRendering**: [`ImageRendering`](../modules/components_Container._internal_.md#imagerendering) \| (`undefined` \| [`ImageRendering`](../modules/components_Container._internal_.md#imagerendering))[]

The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

**Syntax**: `auto | crisp-edges | pixelated`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **13** | **3.6** | **6**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/image-rendering

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[imageRendering](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#imagerendering)

#### Defined in

node_modules/csstype/index.d.ts:2228

___

### imageResolution

• `Optional` **imageResolution**: [`ImageResolution`](../modules/components_Container._internal_.md#imageresolution) \| (`undefined` \| [`ImageResolution`](../modules/components_Container._internal_.md#imageresolution))[]

**Syntax**: `[ from-image || <resolution> ] && snap?`

**Initial value**: `1dppx`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[imageResolution](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#imageresolution)

#### Defined in

node_modules/csstype/index.d.ts:2234

___

### imeMode

• `Optional` **imeMode**: [`ImeMode`](../modules/components_Container._internal_.md#imemode) \| (`undefined` \| [`ImeMode`](../modules/components_Container._internal_.md#imemode))[]

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.imeMode

#### Defined in

node_modules/csstype/index.d.ts:7836

___

### initialLetter

• `Optional` **initialLetter**: [`InitialLetter`](../modules/components_Container._internal_.md#initialletter) \| (`undefined` \| [`InitialLetter`](../modules/components_Container._internal_.md#initialletter))[]

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: `normal | [ <number> <integer>? ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **9**  |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/initial-letter

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[initialLetter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#initialletter)

#### Defined in

node_modules/csstype/index.d.ts:2248

___

### inlineSize

• `Optional` **inlineSize**: [`InlineSize`](../modules/components_Container._internal_.md#inlinesize)<`TLength`\> \| (`undefined` \| [`InlineSize`](../modules/components_Container._internal_.md#inlinesize)<`TLength`\>)[]

The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.

**Syntax**: `<'width'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inline-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[inlineSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#inlinesize)

#### Defined in

node_modules/csstype/index.d.ts:2262

___

### inset

• `Optional` **inset**: [`Inset`](../modules/components_Container._internal_.md#inset)<`TLength`\> \| (`undefined` \| [`Inset`](../modules/components_Container._internal_.md#inset)<`TLength`\>)[]

The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.

**Syntax**: `<'top'>{1,4}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[inset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#inset)

#### Defined in

node_modules/csstype/index.d.ts:2276

___

### insetBlock

• `Optional` **insetBlock**: [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`TLength`\> \| (`undefined` \| [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`TLength`\>)[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetblock)

#### Defined in

node_modules/csstype/index.d.ts:2290

___

### insetBlockEnd

• `Optional` **insetBlockEnd**: [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`TLength`\> \| (`undefined` \| [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`TLength`\>)[]

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetblockend)

#### Defined in

node_modules/csstype/index.d.ts:2304

___

### insetBlockStart

• `Optional` **insetBlockStart**: [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`TLength`\> \| (`undefined` \| [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`TLength`\>)[]

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetblockstart)

#### Defined in

node_modules/csstype/index.d.ts:2318

___

### insetInline

• `Optional` **insetInline**: [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`TLength`\> \| (`undefined` \| [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`TLength`\>)[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetinline)

#### Defined in

node_modules/csstype/index.d.ts:2332

___

### insetInlineEnd

• `Optional` **insetInlineEnd**: [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`TLength`\> \| (`undefined` \| [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`TLength`\>)[]

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetinlineend)

#### Defined in

node_modules/csstype/index.d.ts:2346

___

### insetInlineStart

• `Optional` **insetInlineStart**: [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`TLength`\> \| (`undefined` \| [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`TLength`\>)[]

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **63**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/inset-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[insetInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#insetinlinestart)

#### Defined in

node_modules/csstype/index.d.ts:2360

___

### isolation

• `Optional` **isolation**: [`Isolation`](../modules/components_Container._internal_.md#isolation) \| (`undefined` \| [`Isolation`](../modules/components_Container._internal_.md#isolation))[]

The **`isolation`** CSS property determines whether an element must create a new stacking context.

**Syntax**: `auto | isolate`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **36**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/isolation

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[isolation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#isolation)

#### Defined in

node_modules/csstype/index.d.ts:2374

___

### justifyContent

• `Optional` **justifyContent**: [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent) \| (`undefined` \| [`JustifyContent`](../modules/components_Container._internal_.md#justifycontent))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[justifyContent](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#justifycontent)

#### Defined in

node_modules/csstype/index.d.ts:2403

___

### justifyItems

• `Optional` **justifyItems**: [`JustifyItems`](../modules/components_Container._internal_.md#justifyitems) \| (`undefined` \| [`JustifyItems`](../modules/components_Container._internal_.md#justifyitems))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[justifyItems](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#justifyitems)

#### Defined in

node_modules/csstype/index.d.ts:2431

___

### justifySelf

• `Optional` **justifySelf**: [`JustifySelf`](../modules/components_Container._internal_.md#justifyself) \| (`undefined` \| [`JustifySelf`](../modules/components_Container._internal_.md#justifyself))[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[justifySelf](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#justifyself)

#### Defined in

node_modules/csstype/index.d.ts:2459

___

### justifyTracks

• `Optional` **justifyTracks**: [`JustifyTracks`](../modules/components_Container._internal_.md#justifytracks) \| (`undefined` \| [`JustifyTracks`](../modules/components_Container._internal_.md#justifytracks))[]

The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.

**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`

**Initial value**: `normal`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/justify-tracks

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[justifyTracks](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#justifytracks)

#### Defined in

node_modules/csstype/index.d.ts:2473

___

### left

• `Optional` **left**: [`Left`](../modules/components_Container._internal_.md#left)<`TLength`\> \| (`undefined` \| [`Left`](../modules/components_Container._internal_.md#left)<`TLength`\>)[]

The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[left](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#left)

#### Defined in

node_modules/csstype/index.d.ts:2487

___

### letterSpacing

• `Optional` **letterSpacing**: [`LetterSpacing`](../modules/components_Container._internal_.md#letterspacing)<`TLength`\> \| (`undefined` \| [`LetterSpacing`](../modules/components_Container._internal_.md#letterspacing)<`TLength`\>)[]

The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/letter-spacing

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[letterSpacing](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#letterspacing)

#### Defined in

node_modules/csstype/index.d.ts:2501

___

### lightingColor

• `Optional` **lightingColor**: [`LightingColor`](../modules/components_Container._internal_.md#lightingcolor) \| (`undefined` \| [`LightingColor`](../modules/components_Container._internal_.md#lightingcolor))[]

#### Inherited from

SvgPropertiesFallback.lightingColor

#### Defined in

node_modules/csstype/index.d.ts:8777

___

### lineBreak

• `Optional` **lineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak) \| (`undefined` \| [`LineBreak`](../modules/components_Container._internal_.md#linebreak))[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

| Chrome  | Firefox | Safari  |  Edge  |   IE    |
| :-----: | :-----: | :-----: | :----: | :-----: |
| **58**  | **69**  | **11**  | **14** | **5.5** |
| 1 _-x-_ |         | 3 _-x-_ |        |         |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-break

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[lineBreak](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#linebreak)

#### Defined in

node_modules/csstype/index.d.ts:2516

___

### lineClamp

• `Optional` **lineClamp**: [`LineClamp`](../modules/components_Container._internal_.md#lineclamp) \| (`undefined` \| [`LineClamp`](../modules/components_Container._internal_.md#lineclamp))[]

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[lineClamp](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#lineclamp)

#### Defined in

node_modules/csstype/index.d.ts:5544

___

### lineHeight

• `Optional` **lineHeight**: [`LineHeight`](../modules/components_Container._internal_.md#lineheight)<`TLength`\> \| (`undefined` \| [`LineHeight`](../modules/components_Container._internal_.md#lineheight)<`TLength`\>)[]

The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

**Syntax**: `normal | <number> | <length> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-height

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[lineHeight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#lineheight)

#### Defined in

node_modules/csstype/index.d.ts:2530

___

### lineHeightStep

• `Optional` **lineHeightStep**: [`LineHeightStep`](../modules/components_Container._internal_.md#lineheightstep)<`TLength`\> \| (`undefined` \| [`LineHeightStep`](../modules/components_Container._internal_.md#lineheightstep)<`TLength`\>)[]

The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   | n/a  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/line-height-step

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[lineHeightStep](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#lineheightstep)

#### Defined in

node_modules/csstype/index.d.ts:2544

___

### listStyle

• `Optional` **listStyle**: [`ListStyle`](../modules/components_Container._internal_.md#liststyle) \| (`undefined` \| [`ListStyle`](../modules/components_Container._internal_.md#liststyle))[]

The **`list-style`** CSS shorthand property allows you set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[listStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#liststyle)

#### Defined in

node_modules/csstype/index.d.ts:5556

___

### listStyleImage

• `Optional` **listStyleImage**: [`ListStyleImage`](../modules/components_Container._internal_.md#liststyleimage) \| (`undefined` \| [`ListStyleImage`](../modules/components_Container._internal_.md#liststyleimage))[]

The **`list-style-image`** CSS property sets an image to be used as the list item marker.

**Syntax**: `<image> | none`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-image

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[listStyleImage](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#liststyleimage)

#### Defined in

node_modules/csstype/index.d.ts:2558

___

### listStylePosition

• `Optional` **listStylePosition**: [`ListStylePosition`](../modules/components_Container._internal_.md#liststyleposition) \| (`undefined` \| [`ListStylePosition`](../modules/components_Container._internal_.md#liststyleposition))[]

The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.

**Syntax**: `inside | outside`

**Initial value**: `outside`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[listStylePosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#liststyleposition)

#### Defined in

node_modules/csstype/index.d.ts:2572

___

### listStyleType

• `Optional` **listStyleType**: [`ListStyleType`](../modules/components_Container._internal_.md#liststyletype) \| (`undefined` \| [`ListStyleType`](../modules/components_Container._internal_.md#liststyletype))[]

The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.

**Syntax**: `<counter-style> | <string> | none`

**Initial value**: `disc`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style-type

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[listStyleType](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#liststyletype)

#### Defined in

node_modules/csstype/index.d.ts:2586

___

### margin

• `Optional` **margin**: [`Margin`](../modules/components_Container._internal_.md#margin)<`TLength`\> \| (`undefined` \| [`Margin`](../modules/components_Container._internal_.md#margin)<`TLength`\>)[]

The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[margin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#margin)

#### Defined in

node_modules/csstype/index.d.ts:5568

___

### marginBlock

• `Optional` **marginBlock**: [`MarginBlock`](../modules/components_Container._internal_.md#marginblock)<`TLength`\> \| (`undefined` \| [`MarginBlock`](../modules/components_Container._internal_.md#marginblock)<`TLength`\>)[]

The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginblock)

#### Defined in

node_modules/csstype/index.d.ts:2600

___

### marginBlockEnd

• `Optional` **marginBlockEnd**: [`MarginBlockEnd`](../modules/components_Container._internal_.md#marginblockend)<`TLength`\> \| (`undefined` \| [`MarginBlockEnd`](../modules/components_Container._internal_.md#marginblockend)<`TLength`\>)[]

The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginblockend)

#### Defined in

node_modules/csstype/index.d.ts:2614

___

### marginBlockStart

• `Optional` **marginBlockStart**: [`MarginBlockStart`](../modules/components_Container._internal_.md#marginblockstart)<`TLength`\> \| (`undefined` \| [`MarginBlockStart`](../modules/components_Container._internal_.md#marginblockstart)<`TLength`\>)[]

The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginblockstart)

#### Defined in

node_modules/csstype/index.d.ts:2628

___

### marginBottom

• `Optional` **marginBottom**: [`MarginBottom`](../modules/components_Container._internal_.md#marginbottom)<`TLength`\> \| (`undefined` \| [`MarginBottom`](../modules/components_Container._internal_.md#marginbottom)<`TLength`\>)[]

The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginbottom)

#### Defined in

node_modules/csstype/index.d.ts:2642

___

### marginInline

• `Optional` **marginInline**: [`MarginInline`](../modules/components_Container._internal_.md#margininline)<`TLength`\> \| (`undefined` \| [`MarginInline`](../modules/components_Container._internal_.md#margininline)<`TLength`\>)[]

The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#margininline)

#### Defined in

node_modules/csstype/index.d.ts:2656

___

### marginInlineEnd

• `Optional` **marginInlineEnd**: [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\> \| (`undefined` \| [`MarginInlineEnd`](../modules/components_Container._internal_.md#margininlineend)<`TLength`\>)[]

The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
| :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
|          **69**          |        **41**         |         **12.1**         | **79** | No  |
| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#margininlineend)

#### Defined in

node_modules/csstype/index.d.ts:2671

___

### marginInlineStart

• `Optional` **marginInlineStart**: [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\> \| (`undefined` \| [`MarginInlineStart`](../modules/components_Container._internal_.md#margininlinestart)<`TLength`\>)[]

The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'margin-left'>`

**Initial value**: `0`

|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
| :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
|           **69**           |         **41**          |          **12.1**          | **79** | No  |
| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#margininlinestart)

#### Defined in

node_modules/csstype/index.d.ts:2686

___

### marginLeft

• `Optional` **marginLeft**: [`MarginLeft`](../modules/components_Container._internal_.md#marginleft)<`TLength`\> \| (`undefined` \| [`MarginLeft`](../modules/components_Container._internal_.md#marginleft)<`TLength`\>)[]

The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginleft)

#### Defined in

node_modules/csstype/index.d.ts:2700

___

### marginRight

• `Optional` **marginRight**: [`MarginRight`](../modules/components_Container._internal_.md#marginright)<`TLength`\> \| (`undefined` \| [`MarginRight`](../modules/components_Container._internal_.md#marginright)<`TLength`\>)[]

The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#marginright)

#### Defined in

node_modules/csstype/index.d.ts:2714

___

### marginTop

• `Optional` **marginTop**: [`MarginTop`](../modules/components_Container._internal_.md#margintop)<`TLength`\> \| (`undefined` \| [`MarginTop`](../modules/components_Container._internal_.md#margintop)<`TLength`\>)[]

The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[marginTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#margintop)

#### Defined in

node_modules/csstype/index.d.ts:2728

___

### marker

• `Optional` **marker**: [`Marker`](../modules/components_Container._internal_.md#marker) \| (`undefined` \| [`Marker`](../modules/components_Container._internal_.md#marker))[]

#### Inherited from

SvgPropertiesFallback.marker

#### Defined in

node_modules/csstype/index.d.ts:8779

___

### markerEnd

• `Optional` **markerEnd**: [`MarkerEnd`](../modules/components_Container._internal_.md#markerend) \| (`undefined` \| [`MarkerEnd`](../modules/components_Container._internal_.md#markerend))[]

#### Inherited from

SvgPropertiesFallback.markerEnd

#### Defined in

node_modules/csstype/index.d.ts:8780

___

### markerMid

• `Optional` **markerMid**: [`MarkerMid`](../modules/components_Container._internal_.md#markermid) \| (`undefined` \| [`MarkerMid`](../modules/components_Container._internal_.md#markermid))[]

#### Inherited from

SvgPropertiesFallback.markerMid

#### Defined in

node_modules/csstype/index.d.ts:8781

___

### markerStart

• `Optional` **markerStart**: [`MarkerStart`](../modules/components_Container._internal_.md#markerstart) \| (`undefined` \| [`MarkerStart`](../modules/components_Container._internal_.md#markerstart))[]

#### Inherited from

SvgPropertiesFallback.markerStart

#### Defined in

node_modules/csstype/index.d.ts:8782

___

### mask

• `Optional` **mask**: [`Mask`](../modules/components_Container._internal_.md#mask)<`TLength`\> \| (`undefined` \| [`Mask`](../modules/components_Container._internal_.md#mask)<`TLength`\>)[]

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox | Safari  | Edge  | IE  |
| :----: | :-----: | :-----: | :---: | :-: |
| **1**  |  **2**  | **3.1** | 12-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[mask](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#mask)

#### Defined in

node_modules/csstype/index.d.ts:5580

___

### maskBorder

• `Optional` **maskBorder**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder) \| (`undefined` \| [`MaskBorder`](../modules/components_Container._internal_.md#maskborder))[]

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |               Safari               |               Edge                | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :-------------------------------: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | **79** _(-webkit-mask-box-image)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorder](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskborder)

#### Defined in

node_modules/csstype/index.d.ts:5592

___

### maskBorderMode

• `Optional` **maskBorderMode**: [`MaskBorderMode`](../modules/components_Container._internal_.md#maskbordermode) \| (`undefined` \| [`MaskBorderMode`](../modules/components_Container._internal_.md#maskbordermode))[]

The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.

**Syntax**: `luminance | alpha`

**Initial value**: `alpha`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskbordermode)

#### Defined in

node_modules/csstype/index.d.ts:2736

___

### maskBorderOutset

• `Optional` **maskBorderOutset**: [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`TLength`\> \| (`undefined` \| [`MaskBorderOutset`](../modules/components_Container._internal_.md#maskborderoutset)<`TLength`\>)[]

The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: `[ <length> | <number> ]{1,4}`

**Initial value**: `0`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | **79** _(-webkit-mask-box-image-outset)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-outset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderOutset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskborderoutset)

#### Defined in

node_modules/csstype/index.d.ts:2750

___

### maskBorderRepeat

• `Optional` **maskBorderRepeat**: [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat) \| (`undefined` \| [`MaskBorderRepeat`](../modules/components_Container._internal_.md#maskborderrepeat))[]

The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: `[ stretch | repeat | round | space ]{1,2}`

**Initial value**: `stretch`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | **79** _(-webkit-mask-box-image-repeat)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderRepeat](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskborderrepeat)

#### Defined in

node_modules/csstype/index.d.ts:2764

___

### maskBorderSlice

• `Optional` **maskBorderSlice**: [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice) \| (`undefined` \| [`MaskBorderSlice`](../modules/components_Container._internal_.md#maskborderslice))[]

The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.

**Syntax**: `<number-percentage>{1,4} fill?`

**Initial value**: `0`

|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | **79** _(-webkit-mask-box-image-slice)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-slice

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderSlice](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskborderslice)

#### Defined in

node_modules/csstype/index.d.ts:2778

___

### maskBorderSource

• `Optional` **maskBorderSource**: [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource) \| (`undefined` \| [`MaskBorderSource`](../modules/components_Container._internal_.md#maskbordersource))[]

The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.

**Syntax**: `none | <image>`

**Initial value**: `none`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | **79** _(-webkit-mask-box-image-source)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-source

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderSource](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskbordersource)

#### Defined in

node_modules/csstype/index.d.ts:2792

___

### maskBorderWidth

• `Optional` **maskBorderWidth**: [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`TLength`\> \| (`undefined` \| [`MaskBorderWidth`](../modules/components_Container._internal_.md#maskborderwidth)<`TLength`\>)[]

The **`mask-border-width`** CSS property sets the width of an element's mask border.

**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`

**Initial value**: `auto`

|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | **79** _(-webkit-mask-box-image-width)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskBorderWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskborderwidth)

#### Defined in

node_modules/csstype/index.d.ts:2806

___

### maskClip

• `Optional` **maskClip**: [`MaskClip`](../modules/components_Container._internal_.md#maskclip) \| (`undefined` \| [`MaskClip`](../modules/components_Container._internal_.md#maskclip))[]

The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: `[ <geometry-box> | no-clip ]#`

**Initial value**: `border-box`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-clip

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskClip](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskclip)

#### Defined in

node_modules/csstype/index.d.ts:2820

___

### maskComposite

• `Optional` **maskComposite**: [`MaskComposite`](../modules/components_Container._internal_.md#maskcomposite) \| (`undefined` \| [`MaskComposite`](../modules/components_Container._internal_.md#maskcomposite))[]

The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.

**Syntax**: `<compositing-operator>#`

**Initial value**: `add`

| Chrome | Firefox | Safari | Edge  | IE  |
| :----: | :-----: | :----: | :---: | :-: |
|   No   | **53**  |   No   | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-composite

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskComposite](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskcomposite)

#### Defined in

node_modules/csstype/index.d.ts:2834

___

### maskImage

• `Optional` **maskImage**: [`MaskImage`](../modules/components_Container._internal_.md#maskimage) \| (`undefined` \| [`MaskImage`](../modules/components_Container._internal_.md#maskimage))[]

The **`mask-image`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: `<mask-reference>#`

**Initial value**: `none`

|   Chrome    | Firefox |   Safari    | Edge  | IE  |
| :---------: | :-----: | :---------: | :---: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | 16-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-image

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskImage](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskimage)

#### Defined in

node_modules/csstype/index.d.ts:2848

___

### maskMode

• `Optional` **maskMode**: [`MaskMode`](../modules/components_Container._internal_.md#maskmode) \| (`undefined` \| [`MaskMode`](../modules/components_Container._internal_.md#maskmode))[]

The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.

**Syntax**: `<masking-mode>#`

**Initial value**: `match-source`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **53**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-mode

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskmode)

#### Defined in

node_modules/csstype/index.d.ts:2862

___

### maskOrigin

• `Optional` **maskOrigin**: [`MaskOrigin`](../modules/components_Container._internal_.md#maskorigin) \| (`undefined` \| [`MaskOrigin`](../modules/components_Container._internal_.md#maskorigin))[]

The **`mask-origin`** CSS property sets the origin of a mask.

**Syntax**: `<geometry-box>#`

**Initial value**: `border-box`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-origin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskOrigin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskorigin)

#### Defined in

node_modules/csstype/index.d.ts:2876

___

### maskPosition

• `Optional` **maskPosition**: [`MaskPosition`](../modules/components_Container._internal_.md#maskposition)<`TLength`\> \| (`undefined` \| [`MaskPosition`](../modules/components_Container._internal_.md#maskposition)<`TLength`\>)[]

The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.

**Syntax**: `<position>#`

**Initial value**: `center`

|   Chrome    | Firefox |    Safari     | Edge  | IE  |
| :---------: | :-----: | :-----------: | :---: | :-: |
| **1** _-x-_ | **53**  | **3.1** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskposition)

#### Defined in

node_modules/csstype/index.d.ts:2890

___

### maskRepeat

• `Optional` **maskRepeat**: [`MaskRepeat`](../modules/components_Container._internal_.md#maskrepeat) \| (`undefined` \| [`MaskRepeat`](../modules/components_Container._internal_.md#maskrepeat))[]

The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: `<repeat-style>#`

**Initial value**: `no-repeat`

|   Chrome    | Firefox |    Safari     | Edge  | IE  |
| :---------: | :-----: | :-----------: | :---: | :-: |
| **1** _-x-_ | **53**  | **3.1** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-repeat

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskRepeat](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maskrepeat)

#### Defined in

node_modules/csstype/index.d.ts:2904

___

### maskSize

• `Optional` **maskSize**: [`MaskSize`](../modules/components_Container._internal_.md#masksize)<`TLength`\> \| (`undefined` \| [`MaskSize`](../modules/components_Container._internal_.md#masksize)<`TLength`\>)[]

The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: `<bg-size>#`

**Initial value**: `auto`

|   Chrome    | Firefox |   Safari    | Edge  | IE  |
| :---------: | :-----: | :---------: | :---: | :-: |
| **4** _-x-_ | **53**  | **4** _-x-_ | 18-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#masksize)

#### Defined in

node_modules/csstype/index.d.ts:2918

___

### maskType

• `Optional` **maskType**: [`MaskType`](../modules/components_Container._internal_.md#masktype) \| (`undefined` \| [`MaskType`](../modules/components_Container._internal_.md#masktype))[]

The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.

**Syntax**: `luminance | alpha`

**Initial value**: `luminance`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **24** | **35**  | **7**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-type

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maskType](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#masktype)

#### Defined in

node_modules/csstype/index.d.ts:2932

___

### mathStyle

• `Optional` **mathStyle**: [`MathStyle`](../modules/components_Container._internal_.md#mathstyle) \| (`undefined` \| [`MathStyle`](../modules/components_Container._internal_.md#mathstyle))[]

The `math-style` property indicates whether MathML equations should render with normal or compact height.

**Syntax**: `normal | compact`

**Initial value**: `normal`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|  n/a   |   n/a   | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/math-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[mathStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#mathstyle)

#### Defined in

node_modules/csstype/index.d.ts:2946

___

### maxBlockSize

• `Optional` **maxBlockSize**: [`MaxBlockSize`](../modules/components_Container._internal_.md#maxblocksize)<`TLength`\> \| (`undefined` \| [`MaxBlockSize`](../modules/components_Container._internal_.md#maxblocksize)<`TLength`\>)[]

The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-block-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maxBlockSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maxblocksize)

#### Defined in

node_modules/csstype/index.d.ts:2960

___

### maxHeight

• `Optional` **maxHeight**: [`MaxHeight`](../modules/components_Container._internal_.md#maxheight)<`TLength`\> \| (`undefined` \| [`MaxHeight`](../modules/components_Container._internal_.md#maxheight)<`TLength`\>)[]

The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **18** |  **1**  | **1.3** | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-height

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maxHeight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maxheight)

#### Defined in

node_modules/csstype/index.d.ts:2974

___

### maxInlineSize

• `Optional` **maxInlineSize**: [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`TLength`\> \| (`undefined` \| [`MaxInlineSize`](../modules/components_Container._internal_.md#maxinlinesize)<`TLength`\>)[]

The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'max-width'>`

**Initial value**: `0`

| Chrome | Firefox |   Safari   |  Edge  | IE  |
| :----: | :-----: | :--------: | :----: | :-: |
| **57** | **41**  |  **12.1**  | **79** | No  |
|        |         | 10.1 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-inline-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maxInlineSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maxinlinesize)

#### Defined in

node_modules/csstype/index.d.ts:2989

___

### maxLines

• `Optional` **maxLines**: [`MaxLines`](../modules/components_Container._internal_.md#maxlines) \| (`undefined` \| [`MaxLines`](../modules/components_Container._internal_.md#maxlines))[]

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maxLines](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maxlines)

#### Defined in

node_modules/csstype/index.d.ts:2995

___

### maxWidth

• `Optional` **maxWidth**: [`MaxWidth`](../modules/components_Container._internal_.md#maxwidth)<`TLength`\> \| (`undefined` \| [`MaxWidth`](../modules/components_Container._internal_.md#maxwidth)<`TLength`\>)[]

The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.

**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/max-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[maxWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#maxwidth)

#### Defined in

node_modules/csstype/index.d.ts:3009

___

### minBlockSize

• `Optional` **minBlockSize**: [`MinBlockSize`](../modules/components_Container._internal_.md#minblocksize)<`TLength`\> \| (`undefined` \| [`MinBlockSize`](../modules/components_Container._internal_.md#minblocksize)<`TLength`\>)[]

The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-block-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[minBlockSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#minblocksize)

#### Defined in

node_modules/csstype/index.d.ts:3023

___

### minHeight

• `Optional` **minHeight**: [`MinHeight`](../modules/components_Container._internal_.md#minheight)<`TLength`\> \| (`undefined` \| [`MinHeight`](../modules/components_Container._internal_.md#minheight)<`TLength`\>)[]

The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **3**  | **1.3** | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-height

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[minHeight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#minheight)

#### Defined in

node_modules/csstype/index.d.ts:3037

___

### minInlineSize

• `Optional` **minInlineSize**: [`MinInlineSize`](../modules/components_Container._internal_.md#mininlinesize)<`TLength`\> \| (`undefined` \| [`MinInlineSize`](../modules/components_Container._internal_.md#mininlinesize)<`TLength`\>)[]

The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.

**Syntax**: `<'min-width'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-inline-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[minInlineSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#mininlinesize)

#### Defined in

node_modules/csstype/index.d.ts:3051

___

### minWidth

• `Optional` **minWidth**: [`MinWidth`](../modules/components_Container._internal_.md#minwidth)<`TLength`\> \| (`undefined` \| [`MinWidth`](../modules/components_Container._internal_.md#minwidth)<`TLength`\>)[]

The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **7** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/min-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[minWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#minwidth)

#### Defined in

node_modules/csstype/index.d.ts:3065

___

### mixBlendMode

• `Optional` **mixBlendMode**: [`MixBlendMode`](../modules/components_Container._internal_.md#mixblendmode) \| (`undefined` \| [`MixBlendMode`](../modules/components_Container._internal_.md#mixblendmode))[]

The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.

**Syntax**: `<blend-mode>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **32**  | **8**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[mixBlendMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#mixblendmode)

#### Defined in

node_modules/csstype/index.d.ts:3079

___

### motion

• `Optional` **motion**: [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\> \| (`undefined` \| [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\>)[]

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[motion](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#motion)

#### Defined in

node_modules/csstype/index.d.ts:5605

___

### motionDistance

• `Optional` **motionDistance**: [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`TLength`\> \| (`undefined` \| [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`TLength`\>)[]

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[motionDistance](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#motiondistance)

#### Defined in

node_modules/csstype/index.d.ts:3094

___

### motionPath

• `Optional` **motionPath**: [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath) \| (`undefined` \| [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath))[]

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[motionPath](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#motionpath)

#### Defined in

node_modules/csstype/index.d.ts:3109

___

### motionRotation

• `Optional` **motionRotation**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate) \| (`undefined` \| [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate))[]

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[motionRotation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#motionrotation)

#### Defined in

node_modules/csstype/index.d.ts:3124

___

### msAccelerator

• `Optional` **msAccelerator**: [`MsAccelerator`](../modules/components_Container._internal_.md#msaccelerator) \| (`undefined` \| [`MsAccelerator`](../modules/components_Container._internal_.md#msaccelerator))[]

The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.

**Syntax**: `false | true`

**Initial value**: `false`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msAccelerator](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msaccelerator)

#### Defined in

node_modules/csstype/index.d.ts:6186

___

### msAlignSelf

• `Optional` **msAlignSelf**: [`AlignSelf`](../modules/components_Container._internal_.md#alignself) \| (`undefined` \| [`AlignSelf`](../modules/components_Container._internal_.md#alignself))[]

The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msAlignSelf](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msalignself)

#### Defined in

node_modules/csstype/index.d.ts:6194

___

### msBlockProgression

• `Optional` **msBlockProgression**: [`MsBlockProgression`](../modules/components_Container._internal_.md#msblockprogression) \| (`undefined` \| [`MsBlockProgression`](../modules/components_Container._internal_.md#msblockprogression))[]

The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.

**Syntax**: `tb | rl | bt | lr`

**Initial value**: `tb`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msBlockProgression](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msblockprogression)

#### Defined in

node_modules/csstype/index.d.ts:6202

___

### msContentZoomChaining

• `Optional` **msContentZoomChaining**: [`MsContentZoomChaining`](../modules/components_Container._internal_.md#mscontentzoomchaining) \| (`undefined` \| [`MsContentZoomChaining`](../modules/components_Container._internal_.md#mscontentzoomchaining))[]

The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.

**Syntax**: `none | chained`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomChaining](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomchaining)

#### Defined in

node_modules/csstype/index.d.ts:6210

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: [`MsContentZoomLimit`](../modules/components_Container._internal_.md#mscontentzoomlimit) \| (`undefined` \| [`MsContentZoomLimit`](../modules/components_Container._internal_.md#mscontentzoomlimit))[]

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomLimit](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomlimit)

#### Defined in

node_modules/csstype/index.d.ts:7569

___

### msContentZoomLimitMax

• `Optional` **msContentZoomLimitMax**: [`MsContentZoomLimitMax`](../modules/components_Container._internal_.md#mscontentzoomlimitmax) \| (`undefined` \| [`MsContentZoomLimitMax`](../modules/components_Container._internal_.md#mscontentzoomlimitmax))[]

The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `400%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomLimitMax](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomlimitmax)

#### Defined in

node_modules/csstype/index.d.ts:6218

___

### msContentZoomLimitMin

• `Optional` **msContentZoomLimitMin**: [`MsContentZoomLimitMin`](../modules/components_Container._internal_.md#mscontentzoomlimitmin) \| (`undefined` \| [`MsContentZoomLimitMin`](../modules/components_Container._internal_.md#mscontentzoomlimitmin))[]

The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.

**Syntax**: `<percentage>`

**Initial value**: `100%`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomLimitMin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomlimitmin)

#### Defined in

node_modules/csstype/index.d.ts:6226

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: [`MsContentZoomSnap`](../modules/components_Container._internal_.md#mscontentzoomsnap) \| (`undefined` \| [`MsContentZoomSnap`](../modules/components_Container._internal_.md#mscontentzoomsnap))[]

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomSnap](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomsnap)

#### Defined in

node_modules/csstype/index.d.ts:7575

___

### msContentZoomSnapPoints

• `Optional` **msContentZoomSnapPoints**: [`MsContentZoomSnapPoints`](../modules/components_Container._internal_.md#mscontentzoomsnappoints) \| (`undefined` \| [`MsContentZoomSnapPoints`](../modules/components_Container._internal_.md#mscontentzoomsnappoints))[]

The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.

**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`

**Initial value**: `snapInterval(0%, 100%)`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomSnapPoints](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomsnappoints)

#### Defined in

node_modules/csstype/index.d.ts:6234

___

### msContentZoomSnapType

• `Optional` **msContentZoomSnapType**: [`MsContentZoomSnapType`](../modules/components_Container._internal_.md#mscontentzoomsnaptype) \| (`undefined` \| [`MsContentZoomSnapType`](../modules/components_Container._internal_.md#mscontentzoomsnaptype))[]

The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZoomSnapType](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzoomsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:6242

___

### msContentZooming

• `Optional` **msContentZooming**: [`MsContentZooming`](../modules/components_Container._internal_.md#mscontentzooming) \| (`undefined` \| [`MsContentZooming`](../modules/components_Container._internal_.md#mscontentzooming))[]

The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.

**Syntax**: `none | zoom`

**Initial value**: zoom for the top level element, none for all other elements

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msContentZooming](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mscontentzooming)

#### Defined in

node_modules/csstype/index.d.ts:6250

___

### msFilter

• `Optional` **msFilter**: [`MsFilter`](../modules/components_Container._internal_.md#msfilter) \| (`undefined` \| [`MsFilter`](../modules/components_Container._internal_.md#msfilter))[]

The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.

**Syntax**: `<string>`

**Initial value**: "" (the empty string)

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFilter](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msfilter)

#### Defined in

node_modules/csstype/index.d.ts:6258

___

### msFlex

• `Optional` **msFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\> \| (`undefined` \| [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>)[]

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFlex](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msflex)

#### Defined in

node_modules/csstype/index.d.ts:7581

___

### msFlexDirection

• `Optional` **msFlexDirection**: [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection) \| (`undefined` \| [`FlexDirection`](../modules/components_Container._internal_.md#flexdirection))[]

The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: `row | row-reverse | column | column-reverse`

**Initial value**: `row`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFlexDirection](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msflexdirection)

#### Defined in

node_modules/csstype/index.d.ts:6266

___

### msFlexPositive

• `Optional` **msFlexPositive**: [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow) \| (`undefined` \| [`FlexGrow`](../modules/components_Container._internal_.md#flexgrow))[]

The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: `<number>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFlexPositive](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msflexpositive)

#### Defined in

node_modules/csstype/index.d.ts:6274

___

### msFlowFrom

• `Optional` **msFlowFrom**: [`MsFlowFrom`](../modules/components_Container._internal_.md#msflowfrom) \| (`undefined` \| [`MsFlowFrom`](../modules/components_Container._internal_.md#msflowfrom))[]

The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFlowFrom](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msflowfrom)

#### Defined in

node_modules/csstype/index.d.ts:6282

___

### msFlowInto

• `Optional` **msFlowInto**: [`MsFlowInto`](../modules/components_Container._internal_.md#msflowinto) \| (`undefined` \| [`MsFlowInto`](../modules/components_Container._internal_.md#msflowinto))[]

The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.

**Syntax**: `[ none | <custom-ident> ]#`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msFlowInto](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msflowinto)

#### Defined in

node_modules/csstype/index.d.ts:6290

___

### msGridColumns

• `Optional` **msGridColumns**: [`MsGridColumns`](../modules/components_Container._internal_.md#msgridcolumns)<`TLength`\> \| (`undefined` \| [`MsGridColumns`](../modules/components_Container._internal_.md#msgridcolumns)<`TLength`\>)[]

The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msGridColumns](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msgridcolumns)

#### Defined in

node_modules/csstype/index.d.ts:6298

___

### msGridRows

• `Optional` **msGridRows**: [`MsGridRows`](../modules/components_Container._internal_.md#msgridrows)<`TLength`\> \| (`undefined` \| [`MsGridRows`](../modules/components_Container._internal_.md#msgridrows)<`TLength`\>)[]

The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: `none | <track-list> | <auto-track-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msGridRows](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msgridrows)

#### Defined in

node_modules/csstype/index.d.ts:6306

___

### msHighContrastAdjust

• `Optional` **msHighContrastAdjust**: [`MsHighContrastAdjust`](../modules/components_Container._internal_.md#mshighcontrastadjust) \| (`undefined` \| [`MsHighContrastAdjust`](../modules/components_Container._internal_.md#mshighcontrastadjust))[]

The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.

**Syntax**: `auto | none`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msHighContrastAdjust](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mshighcontrastadjust)

#### Defined in

node_modules/csstype/index.d.ts:6314

___

### msHyphenateLimitChars

• `Optional` **msHyphenateLimitChars**: [`MsHyphenateLimitChars`](../modules/components_Container._internal_.md#mshyphenatelimitchars) \| (`undefined` \| [`MsHyphenateLimitChars`](../modules/components_Container._internal_.md#mshyphenatelimitchars))[]

The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.

**Syntax**: `auto | <integer>{1,3}`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msHyphenateLimitChars](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mshyphenatelimitchars)

#### Defined in

node_modules/csstype/index.d.ts:6322

___

### msHyphenateLimitLines

• `Optional` **msHyphenateLimitLines**: [`MsHyphenateLimitLines`](../modules/components_Container._internal_.md#mshyphenatelimitlines) \| (`undefined` \| [`MsHyphenateLimitLines`](../modules/components_Container._internal_.md#mshyphenatelimitlines))[]

The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.

**Syntax**: `no-limit | <integer>`

**Initial value**: `no-limit`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msHyphenateLimitLines](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mshyphenatelimitlines)

#### Defined in

node_modules/csstype/index.d.ts:6330

___

### msHyphenateLimitZone

• `Optional` **msHyphenateLimitZone**: [`MsHyphenateLimitZone`](../modules/components_Container._internal_.md#mshyphenatelimitzone)<`TLength`\> \| (`undefined` \| [`MsHyphenateLimitZone`](../modules/components_Container._internal_.md#mshyphenatelimitzone)<`TLength`\>)[]

The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.

**Syntax**: `<percentage> | <length>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msHyphenateLimitZone](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mshyphenatelimitzone)

#### Defined in

node_modules/csstype/index.d.ts:6338

___

### msHyphens

• `Optional` **msHyphens**: [`Hyphens`](../modules/components_Container._internal_.md#hyphens) \| (`undefined` \| [`Hyphens`](../modules/components_Container._internal_.md#hyphens))[]

The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: `none | manual | auto`

**Initial value**: `manual`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msHyphens](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mshyphens)

#### Defined in

node_modules/csstype/index.d.ts:6346

___

### msImeAlign

• `Optional` **msImeAlign**: [`MsImeAlign`](../modules/components_Container._internal_.md#msimealign) \| (`undefined` \| [`MsImeAlign`](../modules/components_Container._internal_.md#msimealign))[]

The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.

**Syntax**: `auto | after`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msImeAlign](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msimealign)

#### Defined in

node_modules/csstype/index.d.ts:6354

___

### msImeMode

• `Optional` **msImeMode**: [`ImeMode`](../modules/components_Container._internal_.md#imemode) \| (`undefined` \| [`ImeMode`](../modules/components_Container._internal_.md#imemode))[]

The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.

**Syntax**: `auto | normal | active | inactive | disabled`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.msImeMode

#### Defined in

node_modules/csstype/index.d.ts:8420

___

### msJustifySelf

• `Optional` **msJustifySelf**: [`JustifySelf`](../modules/components_Container._internal_.md#justifyself) \| (`undefined` \| [`JustifySelf`](../modules/components_Container._internal_.md#justifyself))[]

The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msJustifySelf](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msjustifyself)

#### Defined in

node_modules/csstype/index.d.ts:6362

___

### msLineBreak

• `Optional` **msLineBreak**: [`LineBreak`](../modules/components_Container._internal_.md#linebreak) \| (`undefined` \| [`LineBreak`](../modules/components_Container._internal_.md#linebreak))[]

The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: `auto | loose | normal | strict | anywhere`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msLineBreak](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mslinebreak)

#### Defined in

node_modules/csstype/index.d.ts:6370

___

### msOrder

• `Optional` **msOrder**: [`Order`](../modules/components_Container._internal_.md#order) \| (`undefined` \| [`Order`](../modules/components_Container._internal_.md#order))[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msOrder](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msorder)

#### Defined in

node_modules/csstype/index.d.ts:6378

___

### msOverflowStyle

• `Optional` **msOverflowStyle**: [`MsOverflowStyle`](../modules/components_Container._internal_.md#msoverflowstyle) \| (`undefined` \| [`MsOverflowStyle`](../modules/components_Container._internal_.md#msoverflowstyle))[]

The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.

**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msOverflowStyle](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msoverflowstyle)

#### Defined in

node_modules/csstype/index.d.ts:6386

___

### msOverflowX

• `Optional` **msOverflowX**: [`OverflowX`](../modules/components_Container._internal_.md#overflowx) \| (`undefined` \| [`OverflowX`](../modules/components_Container._internal_.md#overflowx))[]

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msOverflowX](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msoverflowx)

#### Defined in

node_modules/csstype/index.d.ts:6394

___

### msOverflowY

• `Optional` **msOverflowY**: [`OverflowY`](../modules/components_Container._internal_.md#overflowy) \| (`undefined` \| [`OverflowY`](../modules/components_Container._internal_.md#overflowy))[]

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msOverflowY](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msoverflowy)

#### Defined in

node_modules/csstype/index.d.ts:6402

___

### msScrollChaining

• `Optional` **msScrollChaining**: [`MsScrollChaining`](../modules/components_Container._internal_.md#msscrollchaining) \| (`undefined` \| [`MsScrollChaining`](../modules/components_Container._internal_.md#msscrollchaining))[]

The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.

**Syntax**: `chained | none`

**Initial value**: `chained`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollChaining](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollchaining)

#### Defined in

node_modules/csstype/index.d.ts:6410

___

### msScrollLimit

• `Optional` **msScrollLimit**: [`MsScrollLimit`](../modules/components_Container._internal_.md#msscrolllimit) \| (`undefined` \| [`MsScrollLimit`](../modules/components_Container._internal_.md#msscrolllimit))[]

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollLimit](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolllimit)

#### Defined in

node_modules/csstype/index.d.ts:7587

___

### msScrollLimitXMax

• `Optional` **msScrollLimitXMax**: [`MsScrollLimitXMax`](../modules/components_Container._internal_.md#msscrolllimitxmax)<`TLength`\> \| (`undefined` \| [`MsScrollLimitXMax`](../modules/components_Container._internal_.md#msscrolllimitxmax)<`TLength`\>)[]

The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollLimitXMax](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolllimitxmax)

#### Defined in

node_modules/csstype/index.d.ts:6418

___

### msScrollLimitXMin

• `Optional` **msScrollLimitXMin**: [`MsScrollLimitXMin`](../modules/components_Container._internal_.md#msscrolllimitxmin)<`TLength`\> \| (`undefined` \| [`MsScrollLimitXMin`](../modules/components_Container._internal_.md#msscrolllimitxmin)<`TLength`\>)[]

The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollLimitXMin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolllimitxmin)

#### Defined in

node_modules/csstype/index.d.ts:6426

___

### msScrollLimitYMax

• `Optional` **msScrollLimitYMax**: [`MsScrollLimitYMax`](../modules/components_Container._internal_.md#msscrolllimitymax)<`TLength`\> \| (`undefined` \| [`MsScrollLimitYMax`](../modules/components_Container._internal_.md#msscrolllimitymax)<`TLength`\>)[]

The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.

**Syntax**: `auto | <length>`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollLimitYMax](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolllimitymax)

#### Defined in

node_modules/csstype/index.d.ts:6434

___

### msScrollLimitYMin

• `Optional` **msScrollLimitYMin**: [`MsScrollLimitYMin`](../modules/components_Container._internal_.md#msscrolllimitymin)<`TLength`\> \| (`undefined` \| [`MsScrollLimitYMin`](../modules/components_Container._internal_.md#msscrolllimitymin)<`TLength`\>)[]

The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollLimitYMin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolllimitymin)

#### Defined in

node_modules/csstype/index.d.ts:6442

___

### msScrollRails

• `Optional` **msScrollRails**: [`MsScrollRails`](../modules/components_Container._internal_.md#msscrollrails) \| (`undefined` \| [`MsScrollRails`](../modules/components_Container._internal_.md#msscrollrails))[]

The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.

**Syntax**: `none | railed`

**Initial value**: `railed`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollRails](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollrails)

#### Defined in

node_modules/csstype/index.d.ts:6450

___

### msScrollSnapPointsX

• `Optional` **msScrollSnapPointsX**: [`MsScrollSnapPointsX`](../modules/components_Container._internal_.md#msscrollsnappointsx) \| (`undefined` \| [`MsScrollSnapPointsX`](../modules/components_Container._internal_.md#msscrollsnappointsx))[]

The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollSnapPointsX](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollsnappointsx)

#### Defined in

node_modules/csstype/index.d.ts:6458

___

### msScrollSnapPointsY

• `Optional` **msScrollSnapPointsY**: [`MsScrollSnapPointsY`](../modules/components_Container._internal_.md#msscrollsnappointsy) \| (`undefined` \| [`MsScrollSnapPointsY`](../modules/components_Container._internal_.md#msscrollsnappointsy))[]

The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.

**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`

**Initial value**: `snapInterval(0px, 100%)`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollSnapPointsY](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollsnappointsy)

#### Defined in

node_modules/csstype/index.d.ts:6466

___

### msScrollSnapType

• `Optional` **msScrollSnapType**: [`MsScrollSnapType`](../modules/components_Container._internal_.md#msscrollsnaptype) \| (`undefined` \| [`MsScrollSnapType`](../modules/components_Container._internal_.md#msscrollsnaptype))[]

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | proximity | mandatory`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollSnapType](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:6474

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: [`MsScrollSnapX`](../modules/components_Container._internal_.md#msscrollsnapx) \| (`undefined` \| [`MsScrollSnapX`](../modules/components_Container._internal_.md#msscrollsnapx))[]

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollSnapX](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollsnapx)

#### Defined in

node_modules/csstype/index.d.ts:7593

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: [`MsScrollSnapY`](../modules/components_Container._internal_.md#msscrollsnapy) \| (`undefined` \| [`MsScrollSnapY`](../modules/components_Container._internal_.md#msscrollsnapy))[]

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollSnapY](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollsnapy)

#### Defined in

node_modules/csstype/index.d.ts:7599

___

### msScrollTranslation

• `Optional` **msScrollTranslation**: [`MsScrollTranslation`](../modules/components_Container._internal_.md#msscrolltranslation) \| (`undefined` \| [`MsScrollTranslation`](../modules/components_Container._internal_.md#msscrolltranslation))[]

The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.

**Syntax**: `none | vertical-to-horizontal`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollTranslation](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrolltranslation)

#### Defined in

node_modules/csstype/index.d.ts:6482

___

### msScrollbar3dlightColor

• `Optional` **msScrollbar3dlightColor**: [`MsScrollbar3dlightColor`](../modules/components_Container._internal_.md#msscrollbar3dlightcolor) \| (`undefined` \| [`MsScrollbar3dlightColor`](../modules/components_Container._internal_.md#msscrollbar3dlightcolor))[]

The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbar3dlightColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbar3dlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:6490

___

### msScrollbarArrowColor

• `Optional` **msScrollbarArrowColor**: [`MsScrollbarArrowColor`](../modules/components_Container._internal_.md#msscrollbararrowcolor) \| (`undefined` \| [`MsScrollbarArrowColor`](../modules/components_Container._internal_.md#msscrollbararrowcolor))[]

The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.

**Syntax**: `<color>`

**Initial value**: `ButtonText`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarArrowColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbararrowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6498

___

### msScrollbarBaseColor

• `Optional` **msScrollbarBaseColor**: [`MsScrollbarBaseColor`](../modules/components_Container._internal_.md#msscrollbarbasecolor) \| (`undefined` \| [`MsScrollbarBaseColor`](../modules/components_Container._internal_.md#msscrollbarbasecolor))[]

The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.

**Syntax**: `<color>`

**Initial value**: depends on user agent

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarBaseColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbarbasecolor)

#### Defined in

node_modules/csstype/index.d.ts:6506

___

### msScrollbarDarkshadowColor

• `Optional` **msScrollbarDarkshadowColor**: [`MsScrollbarDarkshadowColor`](../modules/components_Container._internal_.md#msscrollbardarkshadowcolor) \| (`undefined` \| [`MsScrollbarDarkshadowColor`](../modules/components_Container._internal_.md#msscrollbardarkshadowcolor))[]

The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarDarkshadowColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbardarkshadowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6514

___

### msScrollbarFaceColor

• `Optional` **msScrollbarFaceColor**: [`MsScrollbarFaceColor`](../modules/components_Container._internal_.md#msscrollbarfacecolor) \| (`undefined` \| [`MsScrollbarFaceColor`](../modules/components_Container._internal_.md#msscrollbarfacecolor))[]

The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDFace`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarFaceColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbarfacecolor)

#### Defined in

node_modules/csstype/index.d.ts:6522

___

### msScrollbarHighlightColor

• `Optional` **msScrollbarHighlightColor**: [`MsScrollbarHighlightColor`](../modules/components_Container._internal_.md#msscrollbarhighlightcolor) \| (`undefined` \| [`MsScrollbarHighlightColor`](../modules/components_Container._internal_.md#msscrollbarhighlightcolor))[]

The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDHighlight`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarHighlightColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbarhighlightcolor)

#### Defined in

node_modules/csstype/index.d.ts:6530

___

### msScrollbarShadowColor

• `Optional` **msScrollbarShadowColor**: [`MsScrollbarShadowColor`](../modules/components_Container._internal_.md#msscrollbarshadowcolor) \| (`undefined` \| [`MsScrollbarShadowColor`](../modules/components_Container._internal_.md#msscrollbarshadowcolor))[]

The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.

**Syntax**: `<color>`

**Initial value**: `ThreeDDarkShadow`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msScrollbarShadowColor](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msscrollbarshadowcolor)

#### Defined in

node_modules/csstype/index.d.ts:6538

___

### msScrollbarTrackColor

• `Optional` **msScrollbarTrackColor**: [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor) \| (`undefined` \| [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor))[]

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.msScrollbarTrackColor

#### Defined in

node_modules/csstype/index.d.ts:8430

___

### msTextAutospace

• `Optional` **msTextAutospace**: [`MsTextAutospace`](../modules/components_Container._internal_.md#mstextautospace) \| (`undefined` \| [`MsTextAutospace`](../modules/components_Container._internal_.md#mstextautospace))[]

The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.

**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTextAutospace](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstextautospace)

#### Defined in

node_modules/csstype/index.d.ts:6546

___

### msTextCombineHorizontal

• `Optional` **msTextCombineHorizontal**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright) \| (`undefined` \| [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright))[]

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTextCombineHorizontal](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstextcombinehorizontal)

#### Defined in

node_modules/csstype/index.d.ts:6554

___

### msTextOverflow

• `Optional` **msTextOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow) \| (`undefined` \| [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow))[]

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTextOverflow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstextoverflow)

#### Defined in

node_modules/csstype/index.d.ts:6562

___

### msTouchAction

• `Optional` **msTouchAction**: [`TouchAction`](../modules/components_Container._internal_.md#touchaction) \| (`undefined` \| [`TouchAction`](../modules/components_Container._internal_.md#touchaction))[]

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTouchAction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstouchaction)

#### Defined in

node_modules/csstype/index.d.ts:6570

___

### msTouchSelect

• `Optional` **msTouchSelect**: [`MsTouchSelect`](../modules/components_Container._internal_.md#mstouchselect) \| (`undefined` \| [`MsTouchSelect`](../modules/components_Container._internal_.md#mstouchselect))[]

The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.

**Syntax**: `grippers | none`

**Initial value**: `grippers`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTouchSelect](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstouchselect)

#### Defined in

node_modules/csstype/index.d.ts:6578

___

### msTransform

• `Optional` **msTransform**: [`Transform`](../modules/components_Container._internal_.md#transform) \| (`undefined` \| [`Transform`](../modules/components_Container._internal_.md#transform))[]

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransform](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransform)

#### Defined in

node_modules/csstype/index.d.ts:6586

___

### msTransformOrigin

• `Optional` **msTransformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\> \| (`undefined` \| [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>)[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransformOrigin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransformorigin)

#### Defined in

node_modules/csstype/index.d.ts:6594

___

### msTransition

• `Optional` **msTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\> \| (`undefined` \| [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>)[]

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransition](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransition)

#### Defined in

node_modules/csstype/index.d.ts:7605

___

### msTransitionDelay

• `Optional` **msTransitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\> \| (`undefined` \| [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>)[]

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransitionDelay](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:6602

___

### msTransitionDuration

• `Optional` **msTransitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\> \| (`undefined` \| [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>)[]

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransitionDuration](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransitionduration)

#### Defined in

node_modules/csstype/index.d.ts:6610

___

### msTransitionProperty

• `Optional` **msTransitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty) \| (`undefined` \| [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty))[]

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransitionProperty](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:6618

___

### msTransitionTimingFunction

• `Optional` **msTransitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction) \| (`undefined` \| [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction))[]

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msTransitionTimingFunction](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mstransitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:6626

___

### msUserSelect

• `Optional` **msUserSelect**: [`MsUserSelect`](../modules/components_Container._internal_.md#msuserselect) \| (`undefined` \| [`MsUserSelect`](../modules/components_Container._internal_.md#msuserselect))[]

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `none | element | text`

**Initial value**: `text`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msUserSelect](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#msuserselect)

#### Defined in

node_modules/csstype/index.d.ts:6634

___

### msWordBreak

• `Optional` **msWordBreak**: [`WordBreak`](../modules/components_Container._internal_.md#wordbreak) \| (`undefined` \| [`WordBreak`](../modules/components_Container._internal_.md#wordbreak))[]

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msWordBreak](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mswordbreak)

#### Defined in

node_modules/csstype/index.d.ts:6642

___

### msWrapFlow

• `Optional` **msWrapFlow**: [`MsWrapFlow`](../modules/components_Container._internal_.md#mswrapflow) \| (`undefined` \| [`MsWrapFlow`](../modules/components_Container._internal_.md#mswrapflow))[]

The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.

**Syntax**: `auto | both | start | end | maximum | clear`

**Initial value**: `auto`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msWrapFlow](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mswrapflow)

#### Defined in

node_modules/csstype/index.d.ts:6650

___

### msWrapMargin

• `Optional` **msWrapMargin**: [`MsWrapMargin`](../modules/components_Container._internal_.md#mswrapmargin)<`TLength`\> \| (`undefined` \| [`MsWrapMargin`](../modules/components_Container._internal_.md#mswrapmargin)<`TLength`\>)[]

The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.

**Syntax**: `<length>`

**Initial value**: `0`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msWrapMargin](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mswrapmargin)

#### Defined in

node_modules/csstype/index.d.ts:6658

___

### msWrapThrough

• `Optional` **msWrapThrough**: [`MsWrapThrough`](../modules/components_Container._internal_.md#mswrapthrough) \| (`undefined` \| [`MsWrapThrough`](../modules/components_Container._internal_.md#mswrapthrough))[]

The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.

**Syntax**: `wrap | none`

**Initial value**: `wrap`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msWrapThrough](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mswrapthrough)

#### Defined in

node_modules/csstype/index.d.ts:6666

___

### msWritingMode

• `Optional` **msWritingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode) \| (`undefined` \| [`WritingMode`](../modules/components_Container._internal_.md#writingmode))[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

#### Inherited from

[VendorPropertiesFallback](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md).[msWritingMode](components_GraphEditor_DataEditor._internal_.VendorPropertiesFallback.md#mswritingmode)

#### Defined in

node_modules/csstype/index.d.ts:6674

___

### objectFit

• `Optional` **objectFit**: [`ObjectFit`](../modules/components_Container._internal_.md#objectfit) \| (`undefined` \| [`ObjectFit`](../modules/components_Container._internal_.md#objectfit))[]

The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.

**Syntax**: `fill | contain | cover | none | scale-down`

**Initial value**: `fill`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/object-fit

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[objectFit](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#objectfit)

#### Defined in

node_modules/csstype/index.d.ts:3138

___

### objectPosition

• `Optional` **objectPosition**: [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`TLength`\> \| (`undefined` \| [`ObjectPosition`](../modules/components_Container._internal_.md#objectposition)<`TLength`\>)[]

The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/object-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[objectPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#objectposition)

#### Defined in

node_modules/csstype/index.d.ts:3152

___

### offset

• `Optional` **offset**: [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\> \| (`undefined` \| [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\>)[]

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offset)

#### Defined in

node_modules/csstype/index.d.ts:5618

___

### offsetAnchor

• `Optional` **offsetAnchor**: [`OffsetAnchor`](../modules/components_Container._internal_.md#offsetanchor)<`TLength`\> \| (`undefined` \| [`OffsetAnchor`](../modules/components_Container._internal_.md#offsetanchor)<`TLength`\>)[]

**Syntax**: `auto | <position>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **72**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-anchor

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offsetAnchor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offsetanchor)

#### Defined in

node_modules/csstype/index.d.ts:3164

___

### offsetBlock

• `Optional` **offsetBlock**: [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`TLength`\> \| (`undefined` \| [`InsetBlock`](../modules/components_Container._internal_.md#insetblock)<`TLength`\>)[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetBlock

#### Defined in

node_modules/csstype/index.d.ts:7846

___

### offsetBlockEnd

• `Optional` **offsetBlockEnd**: [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`TLength`\> \| (`undefined` \| [`InsetBlockEnd`](../modules/components_Container._internal_.md#insetblockend)<`TLength`\>)[]

The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetBlockEnd

#### Defined in

node_modules/csstype/index.d.ts:7856

___

### offsetBlockStart

• `Optional` **offsetBlockStart**: [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`TLength`\> \| (`undefined` \| [`InsetBlockStart`](../modules/components_Container._internal_.md#insetblockstart)<`TLength`\>)[]

The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetBlockStart

#### Defined in

node_modules/csstype/index.d.ts:7866

___

### offsetDistance

• `Optional` **offsetDistance**: [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`TLength`\> \| (`undefined` \| [`OffsetDistance`](../modules/components_Container._internal_.md#offsetdistance)<`TLength`\>)[]

The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-distance

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offsetDistance](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offsetdistance)

#### Defined in

node_modules/csstype/index.d.ts:3179

___

### offsetInline

• `Optional` **offsetInline**: [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`TLength`\> \| (`undefined` \| [`InsetInline`](../modules/components_Container._internal_.md#insetinline)<`TLength`\>)[]

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetInline

#### Defined in

node_modules/csstype/index.d.ts:7876

___

### offsetInlineEnd

• `Optional` **offsetInlineEnd**: [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`TLength`\> \| (`undefined` \| [`InsetInlineEnd`](../modules/components_Container._internal_.md#insetinlineend)<`TLength`\>)[]

The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetInlineEnd

#### Defined in

node_modules/csstype/index.d.ts:7886

___

### offsetInlineStart

• `Optional` **offsetInlineStart**: [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`TLength`\> \| (`undefined` \| [`InsetInlineStart`](../modules/components_Container._internal_.md#insetinlinestart)<`TLength`\>)[]

The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>`

**Initial value**: `auto`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.offsetInlineStart

#### Defined in

node_modules/csstype/index.d.ts:7896

___

### offsetPath

• `Optional` **offsetPath**: [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath) \| (`undefined` \| [`OffsetPath`](../modules/components_Container._internal_.md#offsetpath))[]

The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`

**Initial value**: `none`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-path

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offsetPath](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offsetpath)

#### Defined in

node_modules/csstype/index.d.ts:3194

___

### offsetRotate

• `Optional` **offsetRotate**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate) \| (`undefined` \| [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate))[]

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offsetRotate](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offsetrotate)

#### Defined in

node_modules/csstype/index.d.ts:3209

___

### offsetRotation

• `Optional` **offsetRotation**: [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate) \| (`undefined` \| [`OffsetRotate`](../modules/components_Container._internal_.md#offsetrotate))[]

The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.

**Syntax**: `[ auto | reverse ] || <angle>`

**Initial value**: `auto`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset-rotate

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[offsetRotation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#offsetrotation)

#### Defined in

node_modules/csstype/index.d.ts:3224

___

### opacity

• `Optional` **opacity**: [`Opacity`](../modules/components_Container._internal_.md#opacity) \| (`undefined` \| [`Opacity`](../modules/components_Container._internal_.md#opacity))[]

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: `<alpha-value>`

**Initial value**: `1.0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **2**  | **12** | **9** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/opacity

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[opacity](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#opacity)

#### Defined in

node_modules/csstype/index.d.ts:3238

___

### order

• `Optional` **order**: [`Order`](../modules/components_Container._internal_.md#order) \| (`undefined` \| [`Order`](../modules/components_Container._internal_.md#order))[]

The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.

**Syntax**: `<integer>`

**Initial value**: `0`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/order

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[order](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#order)

#### Defined in

node_modules/csstype/index.d.ts:3253

___

### orphans

• `Optional` **orphans**: [`Orphans`](../modules/components_Container._internal_.md#orphans) \| (`undefined` \| [`Orphans`](../modules/components_Container._internal_.md#orphans))[]

The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/orphans

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[orphans](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#orphans)

#### Defined in

node_modules/csstype/index.d.ts:3267

___

### outline

• `Optional` **outline**: [`Outline`](../modules/components_Container._internal_.md#outline)<`TLength`\> \| (`undefined` \| [`Outline`](../modules/components_Container._internal_.md#outline)<`TLength`\>)[]

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[outline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#outline)

#### Defined in

node_modules/csstype/index.d.ts:5630

___

### outlineColor

• `Optional` **outlineColor**: [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor) \| (`undefined` \| [`OutlineColor`](../modules/components_Container._internal_.md#outlinecolor))[]

The **`outline-color`** CSS property sets the color of an element's outline.

**Syntax**: `<color> | invert`

**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[outlineColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#outlinecolor)

#### Defined in

node_modules/csstype/index.d.ts:3281

___

### outlineOffset

• `Optional` **outlineOffset**: [`OutlineOffset`](../modules/components_Container._internal_.md#outlineoffset)<`TLength`\> \| (`undefined` \| [`OutlineOffset`](../modules/components_Container._internal_.md#outlineoffset)<`TLength`\>)[]

The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **1**  | **1.5** | **1.2** | **15** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-offset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[outlineOffset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#outlineoffset)

#### Defined in

node_modules/csstype/index.d.ts:3295

___

### outlineStyle

• `Optional` **outlineStyle**: [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle) \| (`undefined` \| [`OutlineStyle`](../modules/components_Container._internal_.md#outlinestyle))[]

The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `auto | <'border-style'>`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[outlineStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#outlinestyle)

#### Defined in

node_modules/csstype/index.d.ts:3309

___

### outlineWidth

• `Optional` **outlineWidth**: [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`TLength`\> \| (`undefined` \| [`OutlineWidth`](../modules/components_Container._internal_.md#outlinewidth)<`TLength`\>)[]

The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.

**Syntax**: `<line-width>`

**Initial value**: `medium`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[outlineWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#outlinewidth)

#### Defined in

node_modules/csstype/index.d.ts:3323

___

### overflow

• `Optional` **overflow**: [`Overflow`](../modules/components_Container._internal_.md#overflow) \| (`undefined` \| [`Overflow`](../modules/components_Container._internal_.md#overflow))[]

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflow)

#### Defined in

node_modules/csstype/index.d.ts:5644

___

### overflowAnchor

• `Optional` **overflowAnchor**: [`OverflowAnchor`](../modules/components_Container._internal_.md#overflowanchor) \| (`undefined` \| [`OverflowAnchor`](../modules/components_Container._internal_.md#overflowanchor))[]

**Syntax**: `auto | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **56** | **66**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-anchor

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowAnchor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowanchor)

#### Defined in

node_modules/csstype/index.d.ts:3335

___

### overflowBlock

• `Optional` **overflowBlock**: [`OverflowBlock`](../modules/components_Container._internal_.md#overflowblock) \| (`undefined` \| [`OverflowBlock`](../modules/components_Container._internal_.md#overflowblock))[]

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowblock)

#### Defined in

node_modules/csstype/index.d.ts:3347

___

### overflowClipBox

• `Optional` **overflowClipBox**: [`OverflowClipBox`](../modules/components_Container._internal_.md#overflowclipbox) \| (`undefined` \| [`OverflowClipBox`](../modules/components_Container._internal_.md#overflowclipbox))[]

The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.

**Syntax**: `padding-box | content-box`

**Initial value**: `padding-box`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **29**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowClipBox](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowclipbox)

#### Defined in

node_modules/csstype/index.d.ts:3361

___

### overflowClipMargin

• `Optional` **overflowClipMargin**: [`OverflowClipMargin`](../modules/components_Container._internal_.md#overflowclipmargin)<`TLength`\> \| (`undefined` \| [`OverflowClipMargin`](../modules/components_Container._internal_.md#overflowclipmargin)<`TLength`\>)[]

**Syntax**: `<visual-box> || <length [0,∞]>`

**Initial value**: `0px`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **90** |   No    |   No   | **90** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowClipMargin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowclipmargin)

#### Defined in

node_modules/csstype/index.d.ts:3373

___

### overflowInline

• `Optional` **overflowInline**: [`OverflowInline`](../modules/components_Container._internal_.md#overflowinline) \| (`undefined` \| [`OverflowInline`](../modules/components_Container._internal_.md#overflowinline))[]

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowinline)

#### Defined in

node_modules/csstype/index.d.ts:3385

___

### overflowWrap

• `Optional` **overflowWrap**: [`OverflowWrap`](../modules/components_Container._internal_.md#overflowwrap) \| (`undefined` \| [`OverflowWrap`](../modules/components_Container._internal_.md#overflowwrap))[]

The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word | anywhere`

**Initial value**: `normal`

|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
|     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-wrap

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowWrap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowwrap)

#### Defined in

node_modules/csstype/index.d.ts:3400

___

### overflowX

• `Optional` **overflowX**: [`OverflowX`](../modules/components_Container._internal_.md#overflowx) \| (`undefined` \| [`OverflowX`](../modules/components_Container._internal_.md#overflowx))[]

The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-x

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowX](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowx)

#### Defined in

node_modules/csstype/index.d.ts:3414

___

### overflowY

• `Optional` **overflowY**: [`OverflowY`](../modules/components_Container._internal_.md#overflowy) \| (`undefined` \| [`OverflowY`](../modules/components_Container._internal_.md#overflowy))[]

The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: `visible | hidden | clip | scroll | auto`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow-y

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overflowY](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overflowy)

#### Defined in

node_modules/csstype/index.d.ts:3428

___

### overscrollBehavior

• `Optional` **overscrollBehavior**: [`OverscrollBehavior`](../modules/components_Container._internal_.md#overscrollbehavior) \| (`undefined` \| [`OverscrollBehavior`](../modules/components_Container._internal_.md#overscrollbehavior))[]

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overscrollBehavior](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overscrollbehavior)

#### Defined in

node_modules/csstype/index.d.ts:5658

___

### overscrollBehaviorBlock

• `Optional` **overscrollBehaviorBlock**: [`OverscrollBehaviorBlock`](../modules/components_Container._internal_.md#overscrollbehaviorblock) \| (`undefined` \| [`OverscrollBehaviorBlock`](../modules/components_Container._internal_.md#overscrollbehaviorblock))[]

The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overscrollBehaviorBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overscrollbehaviorblock)

#### Defined in

node_modules/csstype/index.d.ts:3442

___

### overscrollBehaviorInline

• `Optional` **overscrollBehaviorInline**: [`OverscrollBehaviorInline`](../modules/components_Container._internal_.md#overscrollbehaviorinline) \| (`undefined` \| [`OverscrollBehaviorInline`](../modules/components_Container._internal_.md#overscrollbehaviorinline))[]

The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overscrollBehaviorInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overscrollbehaviorinline)

#### Defined in

node_modules/csstype/index.d.ts:3456

___

### overscrollBehaviorX

• `Optional` **overscrollBehaviorX**: [`OverscrollBehaviorX`](../modules/components_Container._internal_.md#overscrollbehaviorx) \| (`undefined` \| [`OverscrollBehaviorX`](../modules/components_Container._internal_.md#overscrollbehaviorx))[]

The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overscrollBehaviorX](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overscrollbehaviorx)

#### Defined in

node_modules/csstype/index.d.ts:3470

___

### overscrollBehaviorY

• `Optional` **overscrollBehaviorY**: [`OverscrollBehaviorY`](../modules/components_Container._internal_.md#overscrollbehaviory) \| (`undefined` \| [`OverscrollBehaviorY`](../modules/components_Container._internal_.md#overscrollbehaviory))[]

The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

**Syntax**: `contain | none | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[overscrollBehaviorY](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#overscrollbehaviory)

#### Defined in

node_modules/csstype/index.d.ts:3484

___

### padding

• `Optional` **padding**: [`Padding`](../modules/components_Container._internal_.md#padding)<`TLength`\> \| (`undefined` \| [`Padding`](../modules/components_Container._internal_.md#padding)<`TLength`\>)[]

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[padding](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#padding)

#### Defined in

node_modules/csstype/index.d.ts:5670

___

### paddingBlock

• `Optional` **paddingBlock**: [`PaddingBlock`](../modules/components_Container._internal_.md#paddingblock)<`TLength`\> \| (`undefined` \| [`PaddingBlock`](../modules/components_Container._internal_.md#paddingblock)<`TLength`\>)[]

The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingblock)

#### Defined in

node_modules/csstype/index.d.ts:3498

___

### paddingBlockEnd

• `Optional` **paddingBlockEnd**: [`PaddingBlockEnd`](../modules/components_Container._internal_.md#paddingblockend)<`TLength`\> \| (`undefined` \| [`PaddingBlockEnd`](../modules/components_Container._internal_.md#paddingblockend)<`TLength`\>)[]

The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingblockend)

#### Defined in

node_modules/csstype/index.d.ts:3512

___

### paddingBlockStart

• `Optional` **paddingBlockStart**: [`PaddingBlockStart`](../modules/components_Container._internal_.md#paddingblockstart)<`TLength`\> \| (`undefined` \| [`PaddingBlockStart`](../modules/components_Container._internal_.md#paddingblockstart)<`TLength`\>)[]

The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingblockstart)

#### Defined in

node_modules/csstype/index.d.ts:3526

___

### paddingBottom

• `Optional` **paddingBottom**: [`PaddingBottom`](../modules/components_Container._internal_.md#paddingbottom)<`TLength`\> \| (`undefined` \| [`PaddingBottom`](../modules/components_Container._internal_.md#paddingbottom)<`TLength`\>)[]

The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingbottom)

#### Defined in

node_modules/csstype/index.d.ts:3540

___

### paddingInline

• `Optional` **paddingInline**: [`PaddingInline`](../modules/components_Container._internal_.md#paddinginline)<`TLength`\> \| (`undefined` \| [`PaddingInline`](../modules/components_Container._internal_.md#paddinginline)<`TLength`\>)[]

The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddinginline)

#### Defined in

node_modules/csstype/index.d.ts:3554

___

### paddingInlineEnd

• `Optional` **paddingInlineEnd**: [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\> \| (`undefined` \| [`PaddingInlineEnd`](../modules/components_Container._internal_.md#paddinginlineend)<`TLength`\>)[]

The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
| :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
|          **69**           |         **41**         |         **12.1**          | **79** | No  |
| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddinginlineend)

#### Defined in

node_modules/csstype/index.d.ts:3569

___

### paddingInlineStart

• `Optional` **paddingInlineStart**: [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\> \| (`undefined` \| [`PaddingInlineStart`](../modules/components_Container._internal_.md#paddinginlinestart)<`TLength`\>)[]

The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>`

**Initial value**: `0`

|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
| :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
|           **69**            |          **41**          |          **12.1**           | **79** | No  |
| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddinginlinestart)

#### Defined in

node_modules/csstype/index.d.ts:3584

___

### paddingLeft

• `Optional` **paddingLeft**: [`PaddingLeft`](../modules/components_Container._internal_.md#paddingleft)<`TLength`\> \| (`undefined` \| [`PaddingLeft`](../modules/components_Container._internal_.md#paddingleft)<`TLength`\>)[]

The **`padding-left`** CSS property sets the width of the padding area to the left of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingleft)

#### Defined in

node_modules/csstype/index.d.ts:3598

___

### paddingRight

• `Optional` **paddingRight**: [`PaddingRight`](../modules/components_Container._internal_.md#paddingright)<`TLength`\> \| (`undefined` \| [`PaddingRight`](../modules/components_Container._internal_.md#paddingright)<`TLength`\>)[]

The **`padding-right`** CSS property sets the width of the padding area on the right of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingright)

#### Defined in

node_modules/csstype/index.d.ts:3612

___

### paddingTop

• `Optional` **paddingTop**: [`PaddingTop`](../modules/components_Container._internal_.md#paddingtop)<`TLength`\> \| (`undefined` \| [`PaddingTop`](../modules/components_Container._internal_.md#paddingtop)<`TLength`\>)[]

The **`padding-top`** CSS property sets the height of the padding area on the top of an element.

**Syntax**: `<length> | <percentage>`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paddingTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paddingtop)

#### Defined in

node_modules/csstype/index.d.ts:3626

___

### pageBreakAfter

• `Optional` **pageBreakAfter**: [`PageBreakAfter`](../modules/components_Container._internal_.md#pagebreakafter) \| (`undefined` \| [`PageBreakAfter`](../modules/components_Container._internal_.md#pagebreakafter))[]

The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-after

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[pageBreakAfter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#pagebreakafter)

#### Defined in

node_modules/csstype/index.d.ts:3640

___

### pageBreakBefore

• `Optional` **pageBreakBefore**: [`PageBreakBefore`](../modules/components_Container._internal_.md#pagebreakbefore) \| (`undefined` \| [`PageBreakBefore`](../modules/components_Container._internal_.md#pagebreakbefore))[]

The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.

**Syntax**: `auto | always | avoid | left | right | recto | verso`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-before

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[pageBreakBefore](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#pagebreakbefore)

#### Defined in

node_modules/csstype/index.d.ts:3654

___

### pageBreakInside

• `Optional` **pageBreakInside**: [`PageBreakInside`](../modules/components_Container._internal_.md#pagebreakinside) \| (`undefined` \| [`PageBreakInside`](../modules/components_Container._internal_.md#pagebreakinside))[]

The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.

**Syntax**: `auto | avoid`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **19**  | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/page-break-inside

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[pageBreakInside](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#pagebreakinside)

#### Defined in

node_modules/csstype/index.d.ts:3668

___

### paintOrder

• `Optional` **paintOrder**: [`PaintOrder`](../modules/components_Container._internal_.md#paintorder) \| (`undefined` \| [`PaintOrder`](../modules/components_Container._internal_.md#paintorder))[]

The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.

**Syntax**: `normal | [ fill || stroke || markers ]`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **60**  | **8**  | **17** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/paint-order

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[paintOrder](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#paintorder)

#### Defined in

node_modules/csstype/index.d.ts:3682

___

### perspective

• `Optional` **perspective**: [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\> \| (`undefined` \| [`Perspective`](../modules/components_Container._internal_.md#perspective)<`TLength`\>)[]

The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: `none | <length>`

**Initial value**: `none`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/perspective

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[perspective](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#perspective)

#### Defined in

node_modules/csstype/index.d.ts:3697

___

### perspectiveOrigin

• `Optional` **perspectiveOrigin**: [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\> \| (`undefined` \| [`PerspectiveOrigin`](../modules/components_Container._internal_.md#perspectiveorigin)<`TLength`\>)[]

The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.

**Syntax**: `<position>`

**Initial value**: `50% 50%`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/perspective-origin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[perspectiveOrigin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#perspectiveorigin)

#### Defined in

node_modules/csstype/index.d.ts:3712

___

### placeContent

• `Optional` **placeContent**: [`PlaceContent`](../modules/components_Container._internal_.md#placecontent) \| (`undefined` \| [`PlaceContent`](../modules/components_Container._internal_.md#placecontent))[]

The `**place-content**` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.

**Syntax**: `<'align-content'> <'justify-content'>?`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **9**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-content

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[placeContent](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#placecontent)

#### Defined in

node_modules/csstype/index.d.ts:3726

___

### placeItems

• `Optional` **placeItems**: [`PlaceItems`](../modules/components_Container._internal_.md#placeitems) \| (`undefined` \| [`PlaceItems`](../modules/components_Container._internal_.md#placeitems))[]

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-items

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[placeItems](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#placeitems)

#### Defined in

node_modules/csstype/index.d.ts:5682

___

### placeSelf

• `Optional` **placeSelf**: [`PlaceSelf`](../modules/components_Container._internal_.md#placeself) \| (`undefined` \| [`PlaceSelf`](../modules/components_Container._internal_.md#placeself))[]

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-self

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[placeSelf](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#placeself)

#### Defined in

node_modules/csstype/index.d.ts:5694

___

### pointerEvents

• `Optional` **pointerEvents**: [`PointerEvents`](../modules/components_Container._internal_.md#pointerevents) \| (`undefined` \| [`PointerEvents`](../modules/components_Container._internal_.md#pointerevents))[]

The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **1**  | **1.5** | **4**  | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/pointer-events

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[pointerEvents](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#pointerevents)

#### Defined in

node_modules/csstype/index.d.ts:3740

___

### position

• `Optional` **position**: [`Position`](../modules/components_Container._internal_.md#position) \| (`undefined` \| [`Position`](../modules/components_Container._internal_.md#position))[]

The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

**Syntax**: `static | relative | absolute | sticky | fixed`

**Initial value**: `static`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[position](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#position)

#### Defined in

node_modules/csstype/index.d.ts:3754

___

### quotes

• `Optional` **quotes**: [`Quotes`](../modules/components_Container._internal_.md#quotes) \| (`undefined` \| [`Quotes`](../modules/components_Container._internal_.md#quotes))[]

The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.

**Syntax**: `none | auto | [ <string> <string> ]+`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **11** | **1.5** | **9**  | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/quotes

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[quotes](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#quotes)

#### Defined in

node_modules/csstype/index.d.ts:3768

___

### resize

• `Optional` **resize**: [`Resize`](../modules/components_Container._internal_.md#resize) \| (`undefined` \| [`Resize`](../modules/components_Container._internal_.md#resize))[]

The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.

**Syntax**: `none | both | horizontal | vertical | block | inline`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **1**  |  **4**  | **3**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/resize

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[resize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#resize)

#### Defined in

node_modules/csstype/index.d.ts:3782

___

### right

• `Optional` **right**: [`Right`](../modules/components_Container._internal_.md#right)<`TLength`\> \| (`undefined` \| [`Right`](../modules/components_Container._internal_.md#right)<`TLength`\>)[]

The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[right](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#right)

#### Defined in

node_modules/csstype/index.d.ts:3796

___

### rotate

• `Optional` **rotate**: [`Rotate`](../modules/components_Container._internal_.md#rotate) \| (`undefined` \| [`Rotate`](../modules/components_Container._internal_.md#rotate))[]

The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.

**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/rotate

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[rotate](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#rotate)

#### Defined in

node_modules/csstype/index.d.ts:3810

___

### rowGap

• `Optional` **rowGap**: [`RowGap`](../modules/components_Container._internal_.md#rowgap)<`TLength`\> \| (`undefined` \| [`RowGap`](../modules/components_Container._internal_.md#rowgap)<`TLength`\>)[]

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

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[rowGap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#rowgap)

#### Defined in

node_modules/csstype/index.d.ts:3839

___

### rubyAlign

• `Optional` **rubyAlign**: [`RubyAlign`](../modules/components_Container._internal_.md#rubyalign) \| (`undefined` \| [`RubyAlign`](../modules/components_Container._internal_.md#rubyalign))[]

The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.

**Syntax**: `start | center | space-between | space-around`

**Initial value**: `space-around`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **38**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/ruby-align

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[rubyAlign](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#rubyalign)

#### Defined in

node_modules/csstype/index.d.ts:3853

___

### rubyMerge

• `Optional` **rubyMerge**: [`RubyMerge`](../modules/components_Container._internal_.md#rubymerge) \| (`undefined` \| [`RubyMerge`](../modules/components_Container._internal_.md#rubymerge))[]

**Syntax**: `separate | collapse | auto`

**Initial value**: `separate`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[rubyMerge](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#rubymerge)

#### Defined in

node_modules/csstype/index.d.ts:3859

___

### rubyPosition

• `Optional` **rubyPosition**: [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition) \| (`undefined` \| [`RubyPosition`](../modules/components_Container._internal_.md#rubyposition))[]

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

**Syntax**: `[ alternate || [ over | under ] ] | inter-character`

**Initial value**: `alternate`

| Chrome  | Firefox |    Safari     | Edge  | IE  |
| :-----: | :-----: | :-----------: | :---: | :-: |
| **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  |
| 1 _-x-_ |         |               |       |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/ruby-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[rubyPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#rubyposition)

#### Defined in

node_modules/csstype/index.d.ts:3874

___

### scale

• `Optional` **scale**: [`Scale`](../modules/components_Container._internal_.md#scale) \| (`undefined` \| [`Scale`](../modules/components_Container._internal_.md#scale))[]

The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <number>{1,3}`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scale

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scale](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scale)

#### Defined in

node_modules/csstype/index.d.ts:3888

___

### scrollBehavior

• `Optional` **scrollBehavior**: [`ScrollBehavior`](../modules/components_Container._internal_.md#scrollbehavior) \| (`undefined` \| [`ScrollBehavior`](../modules/components_Container._internal_.md#scrollbehavior))[]

The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

**Syntax**: `auto | smooth`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **61** | **36**  |  n/a   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-behavior

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollBehavior](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollbehavior)

#### Defined in

node_modules/csstype/index.d.ts:3902

___

### scrollMargin

• `Optional` **scrollMargin**: [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`TLength`\> \| (`undefined` \| [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`TLength`\>)[]

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

**Initial value**: `0`

| Chrome | Firefox |          Safari           |  Edge  | IE  |
| :----: | :-----: | :-----------------------: | :----: | :-: |
| **69** | **90**  |         **14.1**          | **79** | No  |
|        |         | 11 _(scroll-snap-margin)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMargin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmargin)

#### Defined in

node_modules/csstype/index.d.ts:3917

___

### scrollMarginBlock

• `Optional` **scrollMarginBlock**: [`ScrollMarginBlock`](../modules/components_Container._internal_.md#scrollmarginblock)<`TLength`\> \| (`undefined` \| [`ScrollMarginBlock`](../modules/components_Container._internal_.md#scrollmarginblock)<`TLength`\>)[]

The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.

**Syntax**: `<length>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginblock)

#### Defined in

node_modules/csstype/index.d.ts:3931

___

### scrollMarginBlockEnd

• `Optional` **scrollMarginBlockEnd**: [`ScrollMarginBlockEnd`](../modules/components_Container._internal_.md#scrollmarginblockend)<`TLength`\> \| (`undefined` \| [`ScrollMarginBlockEnd`](../modules/components_Container._internal_.md#scrollmarginblockend)<`TLength`\>)[]

The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginblockend)

#### Defined in

node_modules/csstype/index.d.ts:3945

___

### scrollMarginBlockStart

• `Optional` **scrollMarginBlockStart**: [`ScrollMarginBlockStart`](../modules/components_Container._internal_.md#scrollmarginblockstart)<`TLength`\> \| (`undefined` \| [`ScrollMarginBlockStart`](../modules/components_Container._internal_.md#scrollmarginblockstart)<`TLength`\>)[]

The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginblockstart)

#### Defined in

node_modules/csstype/index.d.ts:3959

___

### scrollMarginBottom

• `Optional` **scrollMarginBottom**: [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`TLength`\> \| (`undefined` \| [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`TLength`\>)[]

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              |  Edge  | IE  |
| :----: | :-----: | :------------------------------: | :----: | :-: |
| **69** | **68**  |             **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginbottom)

#### Defined in

node_modules/csstype/index.d.ts:3974

___

### scrollMarginInline

• `Optional` **scrollMarginInline**: [`ScrollMarginInline`](../modules/components_Container._internal_.md#scrollmargininline)<`TLength`\> \| (`undefined` \| [`ScrollMarginInline`](../modules/components_Container._internal_.md#scrollmargininline)<`TLength`\>)[]

The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.

**Syntax**: `<length>{1,2}`

**Initial value**: `0`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **68**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmargininline)

#### Defined in

node_modules/csstype/index.d.ts:3988

___

### scrollMarginInlineEnd

• `Optional` **scrollMarginInlineEnd**: [`ScrollMarginInlineEnd`](../modules/components_Container._internal_.md#scrollmargininlineend)<`TLength`\> \| (`undefined` \| [`ScrollMarginInlineEnd`](../modules/components_Container._internal_.md#scrollmargininlineend)<`TLength`\>)[]

The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmargininlineend)

#### Defined in

node_modules/csstype/index.d.ts:4002

___

### scrollMarginInlineStart

• `Optional` **scrollMarginInlineStart**: [`ScrollMarginInlineStart`](../modules/components_Container._internal_.md#scrollmargininlinestart)<`TLength`\> \| (`undefined` \| [`ScrollMarginInlineStart`](../modules/components_Container._internal_.md#scrollmargininlinestart)<`TLength`\>)[]

The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **68**  | **14.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmargininlinestart)

#### Defined in

node_modules/csstype/index.d.ts:4016

___

### scrollMarginLeft

• `Optional` **scrollMarginLeft**: [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`TLength`\> \| (`undefined` \| [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`TLength`\>)[]

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             |  Edge  | IE  |
| :----: | :-----: | :----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginleft)

#### Defined in

node_modules/csstype/index.d.ts:4031

___

### scrollMarginRight

• `Optional` **scrollMarginRight**: [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`TLength`\> \| (`undefined` \| [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`TLength`\>)[]

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              |  Edge  | IE  |
| :----: | :-----: | :-----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmarginright)

#### Defined in

node_modules/csstype/index.d.ts:4046

___

### scrollMarginTop

• `Optional` **scrollMarginTop**: [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`TLength`\> \| (`undefined` \| [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`TLength`\>)[]

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             |  Edge  | IE  |
| :----: | :-----: | :---------------------------: | :----: | :-: |
| **69** | **68**  |           **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollMarginTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollmargintop)

#### Defined in

node_modules/csstype/index.d.ts:4061

___

### scrollPadding

• `Optional` **scrollPadding**: [`ScrollPadding`](../modules/components_Container._internal_.md#scrollpadding)<`TLength`\> \| (`undefined` \| [`ScrollPadding`](../modules/components_Container._internal_.md#scrollpadding)<`TLength`\>)[]

The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.

**Syntax**: `[ auto | <length-percentage> ]{1,4}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPadding](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpadding)

#### Defined in

node_modules/csstype/index.d.ts:4075

___

### scrollPaddingBlock

• `Optional` **scrollPaddingBlock**: [`ScrollPaddingBlock`](../modules/components_Container._internal_.md#scrollpaddingblock)<`TLength`\> \| (`undefined` \| [`ScrollPaddingBlock`](../modules/components_Container._internal_.md#scrollpaddingblock)<`TLength`\>)[]

The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingBlock](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingblock)

#### Defined in

node_modules/csstype/index.d.ts:4089

___

### scrollPaddingBlockEnd

• `Optional` **scrollPaddingBlockEnd**: [`ScrollPaddingBlockEnd`](../modules/components_Container._internal_.md#scrollpaddingblockend)<`TLength`\> \| (`undefined` \| [`ScrollPaddingBlockEnd`](../modules/components_Container._internal_.md#scrollpaddingblockend)<`TLength`\>)[]

The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingBlockEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingblockend)

#### Defined in

node_modules/csstype/index.d.ts:4103

___

### scrollPaddingBlockStart

• `Optional` **scrollPaddingBlockStart**: [`ScrollPaddingBlockStart`](../modules/components_Container._internal_.md#scrollpaddingblockstart)<`TLength`\> \| (`undefined` \| [`ScrollPaddingBlockStart`](../modules/components_Container._internal_.md#scrollpaddingblockstart)<`TLength`\>)[]

The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingBlockStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingblockstart)

#### Defined in

node_modules/csstype/index.d.ts:4117

___

### scrollPaddingBottom

• `Optional` **scrollPaddingBottom**: [`ScrollPaddingBottom`](../modules/components_Container._internal_.md#scrollpaddingbottom)<`TLength`\> \| (`undefined` \| [`ScrollPaddingBottom`](../modules/components_Container._internal_.md#scrollpaddingbottom)<`TLength`\>)[]

The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingbottom)

#### Defined in

node_modules/csstype/index.d.ts:4131

___

### scrollPaddingInline

• `Optional` **scrollPaddingInline**: [`ScrollPaddingInline`](../modules/components_Container._internal_.md#scrollpaddinginline)<`TLength`\> \| (`undefined` \| [`ScrollPaddingInline`](../modules/components_Container._internal_.md#scrollpaddinginline)<`TLength`\>)[]

The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingInline](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddinginline)

#### Defined in

node_modules/csstype/index.d.ts:4145

___

### scrollPaddingInlineEnd

• `Optional` **scrollPaddingInlineEnd**: [`ScrollPaddingInlineEnd`](../modules/components_Container._internal_.md#scrollpaddinginlineend)<`TLength`\> \| (`undefined` \| [`ScrollPaddingInlineEnd`](../modules/components_Container._internal_.md#scrollpaddinginlineend)<`TLength`\>)[]

The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingInlineEnd](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddinginlineend)

#### Defined in

node_modules/csstype/index.d.ts:4159

___

### scrollPaddingInlineStart

• `Optional` **scrollPaddingInlineStart**: [`ScrollPaddingInlineStart`](../modules/components_Container._internal_.md#scrollpaddinginlinestart)<`TLength`\> \| (`undefined` \| [`ScrollPaddingInlineStart`](../modules/components_Container._internal_.md#scrollpaddinginlinestart)<`TLength`\>)[]

The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingInlineStart](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddinginlinestart)

#### Defined in

node_modules/csstype/index.d.ts:4173

___

### scrollPaddingLeft

• `Optional` **scrollPaddingLeft**: [`ScrollPaddingLeft`](../modules/components_Container._internal_.md#scrollpaddingleft)<`TLength`\> \| (`undefined` \| [`ScrollPaddingLeft`](../modules/components_Container._internal_.md#scrollpaddingleft)<`TLength`\>)[]

The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingleft)

#### Defined in

node_modules/csstype/index.d.ts:4187

___

### scrollPaddingRight

• `Optional` **scrollPaddingRight**: [`ScrollPaddingRight`](../modules/components_Container._internal_.md#scrollpaddingright)<`TLength`\> \| (`undefined` \| [`ScrollPaddingRight`](../modules/components_Container._internal_.md#scrollpaddingright)<`TLength`\>)[]

The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingright)

#### Defined in

node_modules/csstype/index.d.ts:4201

___

### scrollPaddingTop

• `Optional` **scrollPaddingTop**: [`ScrollPaddingTop`](../modules/components_Container._internal_.md#scrollpaddingtop)<`TLength`\> \| (`undefined` \| [`ScrollPaddingTop`](../modules/components_Container._internal_.md#scrollpaddingtop)<`TLength`\>)[]

The **`scroll-padding-top`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: `auto | <length-percentage>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollPaddingTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollpaddingtop)

#### Defined in

node_modules/csstype/index.d.ts:4215

___

### scrollSnapAlign

• `Optional` **scrollSnapAlign**: [`ScrollSnapAlign`](../modules/components_Container._internal_.md#scrollsnapalign) \| (`undefined` \| [`ScrollSnapAlign`](../modules/components_Container._internal_.md#scrollsnapalign))[]

The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

**Syntax**: `[ none | start | end | center ]{1,2}`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapAlign](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapalign)

#### Defined in

node_modules/csstype/index.d.ts:4229

___

### scrollSnapCoordinate

• `Optional` **scrollSnapCoordinate**: [`ScrollSnapCoordinate`](../modules/components_Container._internal_.md#scrollsnapcoordinate)<`TLength`\> \| (`undefined` \| [`ScrollSnapCoordinate`](../modules/components_Container._internal_.md#scrollsnapcoordinate)<`TLength`\>)[]

The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.

**Syntax**: `none | <position>#`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapCoordinate

#### Defined in

node_modules/csstype/index.d.ts:7906

___

### scrollSnapDestination

• `Optional` **scrollSnapDestination**: [`ScrollSnapDestination`](../modules/components_Container._internal_.md#scrollsnapdestination)<`TLength`\> \| (`undefined` \| [`ScrollSnapDestination`](../modules/components_Container._internal_.md#scrollsnapdestination)<`TLength`\>)[]

The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.

**Syntax**: `<position>`

**Initial value**: `0px 0px`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapDestination

#### Defined in

node_modules/csstype/index.d.ts:7916

___

### scrollSnapMargin

• `Optional` **scrollSnapMargin**: [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`TLength`\> \| (`undefined` \| [`ScrollMargin`](../modules/components_Container._internal_.md#scrollmargin)<`TLength`\>)[]

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

**Initial value**: `0`

| Chrome | Firefox |          Safari           |  Edge  | IE  |
| :----: | :-----: | :-----------------------: | :----: | :-: |
| **69** |  68-90  |         **14.1**          | **79** | No  |
|        |         | 11 _(scroll-snap-margin)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapMargin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapmargin)

#### Defined in

node_modules/csstype/index.d.ts:4244

___

### scrollSnapMarginBottom

• `Optional` **scrollSnapMarginBottom**: [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`TLength`\> \| (`undefined` \| [`ScrollMarginBottom`](../modules/components_Container._internal_.md#scrollmarginbottom)<`TLength`\>)[]

The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |              Safari              |  Edge  | IE  |
| :----: | :-----: | :------------------------------: | :----: | :-: |
| **69** | **68**  |             **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapMarginBottom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapmarginbottom)

#### Defined in

node_modules/csstype/index.d.ts:4259

___

### scrollSnapMarginLeft

• `Optional` **scrollSnapMarginLeft**: [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`TLength`\> \| (`undefined` \| [`ScrollMarginLeft`](../modules/components_Container._internal_.md#scrollmarginleft)<`TLength`\>)[]

The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari             |  Edge  | IE  |
| :----: | :-----: | :----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-left)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapMarginLeft](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapmarginleft)

#### Defined in

node_modules/csstype/index.d.ts:4274

___

### scrollSnapMarginRight

• `Optional` **scrollSnapMarginRight**: [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`TLength`\> \| (`undefined` \| [`ScrollMarginRight`](../modules/components_Container._internal_.md#scrollmarginright)<`TLength`\>)[]

The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |             Safari              |  Edge  | IE  |
| :----: | :-----: | :-----------------------------: | :----: | :-: |
| **69** | **68**  |            **14.1**             | **79** | No  |
|        |         | 11 _(scroll-snap-margin-right)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapMarginRight](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapmarginright)

#### Defined in

node_modules/csstype/index.d.ts:4289

___

### scrollSnapMarginTop

• `Optional` **scrollSnapMarginTop**: [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`TLength`\> \| (`undefined` \| [`ScrollMarginTop`](../modules/components_Container._internal_.md#scrollmargintop)<`TLength`\>)[]

The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: `<length>`

**Initial value**: `0`

| Chrome | Firefox |            Safari             |  Edge  | IE  |
| :----: | :-----: | :---------------------------: | :----: | :-: |
| **69** | **68**  |           **14.1**            | **79** | No  |
|        |         | 11 _(scroll-snap-margin-top)_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapMarginTop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapmargintop)

#### Defined in

node_modules/csstype/index.d.ts:4304

___

### scrollSnapPointsX

• `Optional` **scrollSnapPointsX**: [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx) \| (`undefined` \| [`ScrollSnapPointsX`](../modules/components_Container._internal_.md#scrollsnappointsx))[]

The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapPointsX

#### Defined in

node_modules/csstype/index.d.ts:7926

___

### scrollSnapPointsY

• `Optional` **scrollSnapPointsY**: [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy) \| (`undefined` \| [`ScrollSnapPointsY`](../modules/components_Container._internal_.md#scrollsnappointsy))[]

The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.

**Syntax**: `none | repeat( <length-percentage> )`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapPointsY

#### Defined in

node_modules/csstype/index.d.ts:7936

___

### scrollSnapStop

• `Optional` **scrollSnapStop**: [`ScrollSnapStop`](../modules/components_Container._internal_.md#scrollsnapstop) \| (`undefined` \| [`ScrollSnapStop`](../modules/components_Container._internal_.md#scrollsnapstop))[]

The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.

**Syntax**: `normal | always`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **75** |   No    | **15** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapStop](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnapstop)

#### Defined in

node_modules/csstype/index.d.ts:4318

___

### scrollSnapType

• `Optional` **scrollSnapType**: [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype) \| (`undefined` \| [`ScrollSnapType`](../modules/components_Container._internal_.md#scrollsnaptype))[]

The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |      IE      |
| :----: | :-----: | :-----: | :----: | :----------: |
| **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
|        |         | 9 _-x-_ |        |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollSnapType](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollsnaptype)

#### Defined in

node_modules/csstype/index.d.ts:4333

___

### scrollSnapTypeX

• `Optional` **scrollSnapTypeX**: [`ScrollSnapTypeX`](../modules/components_Container._internal_.md#scrollsnaptypex) \| (`undefined` \| [`ScrollSnapTypeX`](../modules/components_Container._internal_.md#scrollsnaptypex))[]

The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapTypeX

#### Defined in

node_modules/csstype/index.d.ts:7946

___

### scrollSnapTypeY

• `Optional` **scrollSnapTypeY**: [`ScrollSnapTypeY`](../modules/components_Container._internal_.md#scrollsnaptypey) \| (`undefined` \| [`ScrollSnapTypeY`](../modules/components_Container._internal_.md#scrollsnaptypey))[]

The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.

**Syntax**: `none | mandatory | proximity`

**Initial value**: `none`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollSnapTypeY

#### Defined in

node_modules/csstype/index.d.ts:7956

___

### scrollbarColor

• `Optional` **scrollbarColor**: [`ScrollbarColor`](../modules/components_Container._internal_.md#scrollbarcolor) \| (`undefined` \| [`ScrollbarColor`](../modules/components_Container._internal_.md#scrollbarcolor))[]

The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.

**Syntax**: `auto | <color>{2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollbarColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollbarcolor)

#### Defined in

node_modules/csstype/index.d.ts:4347

___

### scrollbarGutter

• `Optional` **scrollbarGutter**: [`ScrollbarGutter`](../modules/components_Container._internal_.md#scrollbargutter) \| (`undefined` \| [`ScrollbarGutter`](../modules/components_Container._internal_.md#scrollbargutter))[]

The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

**Syntax**: `auto | stable && both-edges?`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollbarGutter](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollbargutter)

#### Defined in

node_modules/csstype/index.d.ts:4361

___

### scrollbarTrackColor

• `Optional` **scrollbarTrackColor**: [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor) \| (`undefined` \| [`MsScrollbarTrackColor`](../modules/components_Container._internal_.md#msscrollbartrackcolor))[]

The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.

**Syntax**: `<color>`

**Initial value**: `Scrollbar`

**`deprecated`**

#### Inherited from

ObsoletePropertiesFallback.scrollbarTrackColor

#### Defined in

node_modules/csstype/index.d.ts:7966

___

### scrollbarWidth

• `Optional` **scrollbarWidth**: [`ScrollbarWidth`](../modules/components_Container._internal_.md#scrollbarwidth) \| (`undefined` \| [`ScrollbarWidth`](../modules/components_Container._internal_.md#scrollbarwidth))[]

The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.

**Syntax**: `auto | thin | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/scrollbar-width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[scrollbarWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#scrollbarwidth)

#### Defined in

node_modules/csstype/index.d.ts:4375

___

### shapeImageThreshold

• `Optional` **shapeImageThreshold**: [`ShapeImageThreshold`](../modules/components_Container._internal_.md#shapeimagethreshold) \| (`undefined` \| [`ShapeImageThreshold`](../modules/components_Container._internal_.md#shapeimagethreshold))[]

The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.

**Syntax**: `<alpha-value>`

**Initial value**: `0.0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[shapeImageThreshold](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#shapeimagethreshold)

#### Defined in

node_modules/csstype/index.d.ts:4389

___

### shapeMargin

• `Optional` **shapeMargin**: [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`TLength`\> \| (`undefined` \| [`ShapeMargin`](../modules/components_Container._internal_.md#shapemargin)<`TLength`\>)[]

The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.

**Syntax**: `<length-percentage>`

**Initial value**: `0`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-margin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[shapeMargin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#shapemargin)

#### Defined in

node_modules/csstype/index.d.ts:4403

___

### shapeOutside

• `Optional` **shapeOutside**: [`ShapeOutside`](../modules/components_Container._internal_.md#shapeoutside) \| (`undefined` \| [`ShapeOutside`](../modules/components_Container._internal_.md#shapeoutside))[]

The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

**Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **37** | **62**  | **10.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/shape-outside

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[shapeOutside](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#shapeoutside)

#### Defined in

node_modules/csstype/index.d.ts:4417

___

### shapeRendering

• `Optional` **shapeRendering**: [`ShapeRendering`](../modules/components_Container._internal_.md#shaperendering) \| (`undefined` \| [`ShapeRendering`](../modules/components_Container._internal_.md#shaperendering))[]

#### Inherited from

SvgPropertiesFallback.shapeRendering

#### Defined in

node_modules/csstype/index.d.ts:8788

___

### stopColor

• `Optional` **stopColor**: [`StopColor`](../modules/components_Container._internal_.md#stopcolor) \| (`undefined` \| [`StopColor`](../modules/components_Container._internal_.md#stopcolor))[]

#### Inherited from

SvgPropertiesFallback.stopColor

#### Defined in

node_modules/csstype/index.d.ts:8789

___

### stopOpacity

• `Optional` **stopOpacity**: [`StopOpacity`](../modules/components_Container._internal_.md#stopopacity) \| (`undefined` \| [`StopOpacity`](../modules/components_Container._internal_.md#stopopacity))[]

#### Inherited from

SvgPropertiesFallback.stopOpacity

#### Defined in

node_modules/csstype/index.d.ts:8790

___

### stroke

• `Optional` **stroke**: [`Stroke`](../modules/components_Container._internal_.md#stroke) \| (`undefined` \| [`Stroke`](../modules/components_Container._internal_.md#stroke))[]

#### Inherited from

SvgPropertiesFallback.stroke

#### Defined in

node_modules/csstype/index.d.ts:8791

___

### strokeDasharray

• `Optional` **strokeDasharray**: [`StrokeDasharray`](../modules/components_Container._internal_.md#strokedasharray)<`TLength`\> \| (`undefined` \| [`StrokeDasharray`](../modules/components_Container._internal_.md#strokedasharray)<`TLength`\>)[]

#### Inherited from

SvgPropertiesFallback.strokeDasharray

#### Defined in

node_modules/csstype/index.d.ts:8792

___

### strokeDashoffset

• `Optional` **strokeDashoffset**: [`StrokeDashoffset`](../modules/components_Container._internal_.md#strokedashoffset)<`TLength`\> \| (`undefined` \| [`StrokeDashoffset`](../modules/components_Container._internal_.md#strokedashoffset)<`TLength`\>)[]

#### Inherited from

SvgPropertiesFallback.strokeDashoffset

#### Defined in

node_modules/csstype/index.d.ts:8793

___

### strokeLinecap

• `Optional` **strokeLinecap**: [`StrokeLinecap`](../modules/components_Container._internal_.md#strokelinecap) \| (`undefined` \| [`StrokeLinecap`](../modules/components_Container._internal_.md#strokelinecap))[]

#### Inherited from

SvgPropertiesFallback.strokeLinecap

#### Defined in

node_modules/csstype/index.d.ts:8794

___

### strokeLinejoin

• `Optional` **strokeLinejoin**: [`StrokeLinejoin`](../modules/components_Container._internal_.md#strokelinejoin) \| (`undefined` \| [`StrokeLinejoin`](../modules/components_Container._internal_.md#strokelinejoin))[]

#### Inherited from

SvgPropertiesFallback.strokeLinejoin

#### Defined in

node_modules/csstype/index.d.ts:8795

___

### strokeMiterlimit

• `Optional` **strokeMiterlimit**: [`StrokeMiterlimit`](../modules/components_Container._internal_.md#strokemiterlimit) \| (`undefined` \| [`StrokeMiterlimit`](../modules/components_Container._internal_.md#strokemiterlimit))[]

#### Inherited from

SvgPropertiesFallback.strokeMiterlimit

#### Defined in

node_modules/csstype/index.d.ts:8796

___

### strokeOpacity

• `Optional` **strokeOpacity**: [`StrokeOpacity`](../modules/components_Container._internal_.md#strokeopacity) \| (`undefined` \| [`StrokeOpacity`](../modules/components_Container._internal_.md#strokeopacity))[]

#### Inherited from

SvgPropertiesFallback.strokeOpacity

#### Defined in

node_modules/csstype/index.d.ts:8797

___

### strokeWidth

• `Optional` **strokeWidth**: [`StrokeWidth`](../modules/components_Container._internal_.md#strokewidth)<`TLength`\> \| (`undefined` \| [`StrokeWidth`](../modules/components_Container._internal_.md#strokewidth)<`TLength`\>)[]

#### Inherited from

SvgPropertiesFallback.strokeWidth

#### Defined in

node_modules/csstype/index.d.ts:8798

___

### tabSize

• `Optional` **tabSize**: [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\> \| (`undefined` \| [`TabSize`](../modules/components_Container._internal_.md#tabsize)<`TLength`\>)[]

The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: `<integer> | <length>`

**Initial value**: `8`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **21** | **91**  | **7**  | **79** | No  |
|        | 4 _-x-_ |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/tab-size

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[tabSize](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#tabsize)

#### Defined in

node_modules/csstype/index.d.ts:4432

___

### tableLayout

• `Optional` **tableLayout**: [`TableLayout`](../modules/components_Container._internal_.md#tablelayout) \| (`undefined` \| [`TableLayout`](../modules/components_Container._internal_.md#tablelayout))[]

The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.

**Syntax**: `auto | fixed`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **14** |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/table-layout

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[tableLayout](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#tablelayout)

#### Defined in

node_modules/csstype/index.d.ts:4446

___

### textAlign

• `Optional` **textAlign**: [`TextAlign`](../modules/components_Container._internal_.md#textalign) \| (`undefined` \| [`TextAlign`](../modules/components_Container._internal_.md#textalign))[]

The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.

**Syntax**: `start | end | left | right | center | justify | match-parent`

**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-align

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textAlign](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textalign)

#### Defined in

node_modules/csstype/index.d.ts:4460

___

### textAlignLast

• `Optional` **textAlignLast**: [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast) \| (`undefined` \| [`TextAlignLast`](../modules/components_Container._internal_.md#textalignlast))[]

The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: `auto | start | end | left | right | center | justify`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **47** | **49**  |   No   | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-align-last

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textAlignLast](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textalignlast)

#### Defined in

node_modules/csstype/index.d.ts:4474

___

### textAnchor

• `Optional` **textAnchor**: [`TextAnchor`](../modules/components_Container._internal_.md#textanchor) \| (`undefined` \| [`TextAnchor`](../modules/components_Container._internal_.md#textanchor))[]

#### Inherited from

SvgPropertiesFallback.textAnchor

#### Defined in

node_modules/csstype/index.d.ts:8799

___

### textCombineUpright

• `Optional` **textCombineUpright**: [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright) \| (`undefined` \| [`TextCombineUpright`](../modules/components_Container._internal_.md#textcombineupright))[]

The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: `none | all | [ digits <integer>? ]`

**Initial value**: `none`

|           Chrome           | Firefox |              Safari              | Edge  |                   IE                   |
| :------------------------: | :-----: | :------------------------------: | :---: | :------------------------------------: |
|           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
| 9 _(-webkit-text-combine)_ |         |                                  |       |                                        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-combine-upright

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textCombineUpright](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textcombineupright)

#### Defined in

node_modules/csstype/index.d.ts:4489

___

### textDecoration

• `Optional` **textDecoration**: [`TextDecoration`](../modules/components_Container._internal_.md#textdecoration)<`TLength`\> \| (`undefined` \| [`TextDecoration`](../modules/components_Container._internal_.md#textdecoration)<`TLength`\>)[]

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecoration](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecoration)

#### Defined in

node_modules/csstype/index.d.ts:5706

___

### textDecorationColor

• `Optional` **textDecorationColor**: [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor) \| (`undefined` \| [`TextDecorationColor`](../modules/components_Container._internal_.md#textdecorationcolor))[]

The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationcolor)

#### Defined in

node_modules/csstype/index.d.ts:4504

___

### textDecorationLine

• `Optional` **textDecorationLine**: [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline) \| (`undefined` \| [`TextDecorationLine`](../modules/components_Container._internal_.md#textdecorationline))[]

The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`

**Initial value**: `none`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-line

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationLine](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationline)

#### Defined in

node_modules/csstype/index.d.ts:4519

___

### textDecorationSkip

• `Optional` **textDecorationSkip**: [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip) \| (`undefined` \| [`TextDecorationSkip`](../modules/components_Container._internal_.md#textdecorationskip))[]

The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`

**Initial value**: `objects`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| 57-64  |   No    | **12.1** |  No  | No  |
|        |         | 7 _-x-_  |      |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationSkip](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationskip)

#### Defined in

node_modules/csstype/index.d.ts:4534

___

### textDecorationSkipInk

• `Optional` **textDecorationSkipInk**: [`TextDecorationSkipInk`](../modules/components_Container._internal_.md#textdecorationskipink) \| (`undefined` \| [`TextDecorationSkipInk`](../modules/components_Container._internal_.md#textdecorationskipink))[]

The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.

**Syntax**: `auto | all | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **64** | **70**  |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationSkipInk](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationskipink)

#### Defined in

node_modules/csstype/index.d.ts:4548

___

### textDecorationStyle

• `Optional` **textDecorationStyle**: [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle) \| (`undefined` \| [`TextDecorationStyle`](../modules/components_Container._internal_.md#textdecorationstyle))[]

The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.

**Syntax**: `solid | double | dotted | dashed | wavy`

**Initial value**: `solid`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationstyle)

#### Defined in

node_modules/csstype/index.d.ts:4563

___

### textDecorationThickness

• `Optional` **textDecorationThickness**: [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`TLength`\> \| (`undefined` \| [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`TLength`\>)[]

The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: `auto | from-font | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **89** | **70**  | **12.1** | **89** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationThickness](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationthickness)

#### Defined in

node_modules/csstype/index.d.ts:4577

___

### textDecorationWidth

• `Optional` **textDecorationWidth**: [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`TLength`\> \| (`undefined` \| [`TextDecorationThickness`](../modules/components_Container._internal_.md#textdecorationthickness)<`TLength`\>)[]

The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: `auto | from-font | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  | Edge  | IE  |
| :----: | :-----: | :------: | :---: | :-: |
| 87-89  | **70**  | **12.1** | 87-89 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textDecorationWidth](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textdecorationwidth)

#### Defined in

node_modules/csstype/index.d.ts:4591

___

### textEmphasis

• `Optional` **textEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis) \| (`undefined` \| [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis))[]

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textEmphasis](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textemphasis)

#### Defined in

node_modules/csstype/index.d.ts:5718

___

### textEmphasisColor

• `Optional` **textEmphasisColor**: [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor) \| (`undefined` \| [`TextEmphasisColor`](../modules/components_Container._internal_.md#textemphasiscolor))[]

The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.

**Syntax**: `<color>`

**Initial value**: `currentcolor`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textEmphasisColor](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textemphasiscolor)

#### Defined in

node_modules/csstype/index.d.ts:4605

___

### textEmphasisPosition

• `Optional` **textEmphasisPosition**: [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition) \| (`undefined` \| [`TextEmphasisPosition`](../modules/components_Container._internal_.md#textemphasisposition))[]

The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: `[ over | under ] && [ right | left ]`

**Initial value**: `over right`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textEmphasisPosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textemphasisposition)

#### Defined in

node_modules/csstype/index.d.ts:4619

___

### textEmphasisStyle

• `Optional` **textEmphasisStyle**: [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle) \| (`undefined` \| [`TextEmphasisStyle`](../modules/components_Container._internal_.md#textemphasisstyle))[]

The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.

**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`

**Initial value**: `none`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textEmphasisStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textemphasisstyle)

#### Defined in

node_modules/csstype/index.d.ts:4633

___

### textIndent

• `Optional` **textIndent**: [`TextIndent`](../modules/components_Container._internal_.md#textindent)<`TLength`\> \| (`undefined` \| [`TextIndent`](../modules/components_Container._internal_.md#textindent)<`TLength`\>)[]

The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

**Syntax**: `<length-percentage> && hanging? && each-line?`

**Initial value**: `0`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-indent

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textIndent](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textindent)

#### Defined in

node_modules/csstype/index.d.ts:4647

___

### textJustify

• `Optional` **textJustify**: [`TextJustify`](../modules/components_Container._internal_.md#textjustify) \| (`undefined` \| [`TextJustify`](../modules/components_Container._internal_.md#textjustify))[]

The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.

**Syntax**: `auto | inter-character | inter-word | none`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
|  n/a   | **55**  |   No   | **12** | **11** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-justify

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textJustify](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textjustify)

#### Defined in

node_modules/csstype/index.d.ts:4661

___

### textOrientation

• `Optional` **textOrientation**: [`TextOrientation`](../modules/components_Container._internal_.md#textorientation) \| (`undefined` \| [`TextOrientation`](../modules/components_Container._internal_.md#textorientation))[]

The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

**Syntax**: `mixed | upright | sideways`

**Initial value**: `mixed`

|  Chrome  | Firefox |  Safari   |  Edge  | IE  |
| :------: | :-----: | :-------: | :----: | :-: |
|  **48**  | **41**  |  **14**   | **79** | No  |
| 11 _-x-_ |         | 5.1 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-orientation

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textOrientation](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textorientation)

#### Defined in

node_modules/csstype/index.d.ts:4676

___

### textOverflow

• `Optional` **textOverflow**: [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow) \| (`undefined` \| [`TextOverflow`](../modules/components_Container._internal_.md#textoverflow))[]

The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.

**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`

**Initial value**: `clip`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **7**  | **1.3** | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-overflow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textOverflow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textoverflow)

#### Defined in

node_modules/csstype/index.d.ts:4690

___

### textRendering

• `Optional` **textRendering**: [`TextRendering`](../modules/components_Container._internal_.md#textrendering) \| (`undefined` \| [`TextRendering`](../modules/components_Container._internal_.md#textrendering))[]

The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.

**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **4**  |  **1**  | **5**  | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-rendering

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textRendering](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textrendering)

#### Defined in

node_modules/csstype/index.d.ts:4704

___

### textShadow

• `Optional` **textShadow**: [`TextShadow`](../modules/components_Container._internal_.md#textshadow) \| (`undefined` \| [`TextShadow`](../modules/components_Container._internal_.md#textshadow))[]

The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

**Syntax**: `none | <shadow-t>#`

**Initial value**: `none`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **2**  | **3.5** | **1.1** | **12** | **10** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-shadow

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textShadow](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textshadow)

#### Defined in

node_modules/csstype/index.d.ts:4718

___

### textSizeAdjust

• `Optional` **textSizeAdjust**: [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust) \| (`undefined` \| [`TextSizeAdjust`](../modules/components_Container._internal_.md#textsizeadjust))[]

The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

**Syntax**: `none | auto | <percentage>`

**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **54** |   No    |   No   | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-size-adjust

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textSizeAdjust](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textsizeadjust)

#### Defined in

node_modules/csstype/index.d.ts:4732

___

### textTransform

• `Optional` **textTransform**: [`TextTransform`](../modules/components_Container._internal_.md#texttransform) \| (`undefined` \| [`TextTransform`](../modules/components_Container._internal_.md#texttransform))[]

The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`

**Initial value**: `none`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-transform

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textTransform](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#texttransform)

#### Defined in

node_modules/csstype/index.d.ts:4746

___

### textUnderlineOffset

• `Optional` **textUnderlineOffset**: [`TextUnderlineOffset`](../modules/components_Container._internal_.md#textunderlineoffset)<`TLength`\> \| (`undefined` \| [`TextUnderlineOffset`](../modules/components_Container._internal_.md#textunderlineoffset)<`TLength`\>)[]

The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.

**Syntax**: `auto | <length> | <percentage> `

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **70**  | **12.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-underline-offset

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textUnderlineOffset](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textunderlineoffset)

#### Defined in

node_modules/csstype/index.d.ts:4760

___

### textUnderlinePosition

• `Optional` **textUnderlinePosition**: [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition) \| (`undefined` \| [`TextUnderlinePosition`](../modules/components_Container._internal_.md#textunderlineposition))[]

The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.

**Syntax**: `auto | from-font | [ under || [ left | right ] ]`

**Initial value**: `auto`

| Chrome | Firefox |  Safari  |  Edge  |  IE   |
| :----: | :-----: | :------: | :----: | :---: |
| **33** | **74**  | **12.1** | **12** | **6** |
|        |         | 9 _-x-_  |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-underline-position

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[textUnderlinePosition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#textunderlineposition)

#### Defined in

node_modules/csstype/index.d.ts:4775

___

### top

• `Optional` **top**: [`Top`](../modules/components_Container._internal_.md#top)<`TLength`\> \| (`undefined` \| [`Top`](../modules/components_Container._internal_.md#top)<`TLength`\>)[]

The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: `<length> | <percentage> | auto`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/top

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[top](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#top)

#### Defined in

node_modules/csstype/index.d.ts:4789

___

### touchAction

• `Optional` **touchAction**: [`TouchAction`](../modules/components_Container._internal_.md#touchaction) \| (`undefined` \| [`TouchAction`](../modules/components_Container._internal_.md#touchaction))[]

The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |    IE    |
| :----: | :-----: | :----: | :----: | :------: |
| **36** | **52**  | **13** | **12** |  **11**  |
|        |         |        |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/touch-action

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[touchAction](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#touchaction)

#### Defined in

node_modules/csstype/index.d.ts:4804

___

### transform

• `Optional` **transform**: [`Transform`](../modules/components_Container._internal_.md#transform) \| (`undefined` \| [`Transform`](../modules/components_Container._internal_.md#transform))[]

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: `none | <transform-list>`

**Initial value**: `none`

| Chrome  | Firefox |  Safari   |  Edge  |   IE    |
| :-----: | :-----: | :-------: | :----: | :-----: |
| **36**  | **16**  |   **9**   | **12** | **10**  |
| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transform](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transform)

#### Defined in

node_modules/csstype/index.d.ts:4819

___

### transformBox

• `Optional` **transformBox**: [`TransformBox`](../modules/components_Container._internal_.md#transformbox) \| (`undefined` \| [`TransformBox`](../modules/components_Container._internal_.md#transformbox))[]

The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.

**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`

**Initial value**: `view-box`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **64** | **55**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-box

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transformBox](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transformbox)

#### Defined in

node_modules/csstype/index.d.ts:4833

___

### transformOrigin

• `Optional` **transformOrigin**: [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\> \| (`undefined` \| [`TransformOrigin`](../modules/components_Container._internal_.md#transformorigin)<`TLength`\>)[]

The **`transform-origin`** CSS property sets the origin for an element's transformations.

**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`

**Initial value**: `50% 50% 0`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
| :-----: | :-------: | :-----: | :----: | :-----: |
| **36**  |  **16**   |  **9**  | **12** | **10**  |
| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-origin

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transformOrigin](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transformorigin)

#### Defined in

node_modules/csstype/index.d.ts:4848

___

### transformStyle

• `Optional` **transformStyle**: [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle) \| (`undefined` \| [`TransformStyle`](../modules/components_Container._internal_.md#transformstyle))[]

The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: `flat | preserve-3d`

**Initial value**: `flat`

|  Chrome  | Firefox  | Safari  |  Edge  | IE  |
| :------: | :------: | :-----: | :----: | :-: |
|  **36**  |  **16**  |  **9**  | **12** | No  |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transform-style

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transformStyle](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transformstyle)

#### Defined in

node_modules/csstype/index.d.ts:4863

___

### transition

• `Optional` **transition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\> \| (`undefined` \| [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>)[]

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transition](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transition)

#### Defined in

node_modules/csstype/index.d.ts:5731

___

### transitionDelay

• `Optional` **transitionDelay**: [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\> \| (`undefined` \| [`TransitionDelay`](../modules/components_Container._internal_.md#transitiondelay)<`TTime`\>)[]

The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **26**  | **16**  |  **9**  | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-delay

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transitionDelay](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transitiondelay)

#### Defined in

node_modules/csstype/index.d.ts:4878

___

### transitionDuration

• `Optional` **transitionDuration**: [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\> \| (`undefined` \| [`TransitionDuration`](../modules/components_Container._internal_.md#transitionduration)<`TTime`\>)[]

The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

**Syntax**: `<time>#`

**Initial value**: `0s`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-duration

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transitionDuration](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transitionduration)

#### Defined in

node_modules/csstype/index.d.ts:4893

___

### transitionProperty

• `Optional` **transitionProperty**: [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty) \| (`undefined` \| [`TransitionProperty`](../modules/components_Container._internal_.md#transitionproperty))[]

The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: `none | <single-transition-property>#`

**Initial value**: all

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-property

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transitionProperty](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transitionproperty)

#### Defined in

node_modules/csstype/index.d.ts:4908

___

### transitionTimingFunction

• `Optional` **transitionTimingFunction**: [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction) \| (`undefined` \| [`TransitionTimingFunction`](../modules/components_Container._internal_.md#transitiontimingfunction))[]

The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: `<easing-function>#`

**Initial value**: `ease`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition-timing-function

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[transitionTimingFunction](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#transitiontimingfunction)

#### Defined in

node_modules/csstype/index.d.ts:4923

___

### translate

• `Optional` **translate**: [`Translate`](../modules/components_Container._internal_.md#translate)<`TLength`\> \| (`undefined` \| [`Translate`](../modules/components_Container._internal_.md#translate)<`TLength`\>)[]

The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`

**Initial value**: `none`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
|   No   | **72**  | **14.1** |  No  | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/translate

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[translate](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#translate)

#### Defined in

node_modules/csstype/index.d.ts:4937

___

### unicodeBidi

• `Optional` **unicodeBidi**: [`UnicodeBidi`](../modules/components_Container._internal_.md#unicodebidi) \| (`undefined` \| [`UnicodeBidi`](../modules/components_Container._internal_.md#unicodebidi))[]

The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.

**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **2**  |  **1**  | **1.3** | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/unicode-bidi

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[unicodeBidi](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#unicodebidi)

#### Defined in

node_modules/csstype/index.d.ts:4951

___

### userSelect

• `Optional` **userSelect**: [`UserSelect`](../modules/components_Container._internal_.md#userselect) \| (`undefined` \| [`UserSelect`](../modules/components_Container._internal_.md#userselect))[]

The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: `auto | text | none | contain | all`

**Initial value**: `auto`

| Chrome  | Firefox |   Safari    |   Edge   |      IE      |
| :-----: | :-----: | :---------: | :------: | :----------: |
| **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |

**`see`** https://developer.mozilla.org/docs/Web/CSS/user-select

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[userSelect](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#userselect)

#### Defined in

node_modules/csstype/index.d.ts:4966

___

### vectorEffect

• `Optional` **vectorEffect**: [`VectorEffect`](../modules/components_Container._internal_.md#vectoreffect) \| (`undefined` \| [`VectorEffect`](../modules/components_Container._internal_.md#vectoreffect))[]

#### Inherited from

SvgPropertiesFallback.vectorEffect

#### Defined in

node_modules/csstype/index.d.ts:8803

___

### verticalAlign

• `Optional` **verticalAlign**: [`VerticalAlign`](../modules/components_Container._internal_.md#verticalalign)<`TLength`\> \| (`undefined` \| [`VerticalAlign`](../modules/components_Container._internal_.md#verticalalign)<`TLength`\>)[]

The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.

**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`

**Initial value**: `baseline`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/vertical-align

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[verticalAlign](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#verticalalign)

#### Defined in

node_modules/csstype/index.d.ts:4980

___

### visibility

• `Optional` **visibility**: [`Visibility`](../modules/components_Container._internal_.md#visibility) \| (`undefined` \| [`Visibility`](../modules/components_Container._internal_.md#visibility))[]

The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.

**Syntax**: `visible | hidden | collapse`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/visibility

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[visibility](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#visibility)

#### Defined in

node_modules/csstype/index.d.ts:4994

___

### whiteSpace

• `Optional` **whiteSpace**: [`WhiteSpace`](../modules/components_Container._internal_.md#whitespace) \| (`undefined` \| [`WhiteSpace`](../modules/components_Container._internal_.md#whitespace))[]

The **`white-space`** CSS property sets how white space inside an element is handled.

**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/white-space

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[whiteSpace](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#whitespace)

#### Defined in

node_modules/csstype/index.d.ts:5008

___

### widows

• `Optional` **widows**: [`Widows`](../modules/components_Container._internal_.md#widows) \| (`undefined` \| [`Widows`](../modules/components_Container._internal_.md#widows))[]

The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.

**Syntax**: `<integer>`

**Initial value**: `2`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/widows

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[widows](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#widows)

#### Defined in

node_modules/csstype/index.d.ts:5022

___

### width

• `Optional` **width**: [`Width`](../modules/components_Container._internal_.md#width)<`TLength`\> \| (`undefined` \| [`Width`](../modules/components_Container._internal_.md#width)<`TLength`\>)[]

The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.

**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/width

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[width](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#width)

#### Defined in

node_modules/csstype/index.d.ts:5036

___

### willChange

• `Optional` **willChange**: [`WillChange`](../modules/components_Container._internal_.md#willchange) \| (`undefined` \| [`WillChange`](../modules/components_Container._internal_.md#willchange))[]

The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

**Syntax**: `auto | <animateable-feature>#`

**Initial value**: `auto`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **36** | **36**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/will-change

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[willChange](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#willchange)

#### Defined in

node_modules/csstype/index.d.ts:5050

___

### wordBreak

• `Optional` **wordBreak**: [`WordBreak`](../modules/components_Container._internal_.md#wordbreak) \| (`undefined` \| [`WordBreak`](../modules/components_Container._internal_.md#wordbreak))[]

The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: `normal | break-all | keep-all | break-word`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  | **15**  | **3**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/word-break

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[wordBreak](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#wordbreak)

#### Defined in

node_modules/csstype/index.d.ts:5064

___

### wordSpacing

• `Optional` **wordSpacing**: [`WordSpacing`](../modules/components_Container._internal_.md#wordspacing)<`TLength`\> \| (`undefined` \| [`WordSpacing`](../modules/components_Container._internal_.md#wordspacing)<`TLength`\>)[]

The **`word-spacing`** CSS property sets the length of space between words and between tags.

**Syntax**: `normal | <length>`

**Initial value**: `normal`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **6** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/word-spacing

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[wordSpacing](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#wordspacing)

#### Defined in

node_modules/csstype/index.d.ts:5078

___

### wordWrap

• `Optional` **wordWrap**: [`WordWrap`](../modules/components_Container._internal_.md#wordwrap) \| (`undefined` \| [`WordWrap`](../modules/components_Container._internal_.md#wordwrap))[]

The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: `normal | break-word`

**Initial value**: `normal`

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[wordWrap](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#wordwrap)

#### Defined in

node_modules/csstype/index.d.ts:5086

___

### writingMode

• `Optional` **writingMode**: [`WritingMode`](../modules/components_Container._internal_.md#writingmode) \| (`undefined` \| [`WritingMode`](../modules/components_Container._internal_.md#writingmode))[]

The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).

**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`

**Initial value**: `horizontal-tb`

| Chrome  | Firefox |  Safari   |  Edge  |  IE   |
| :-----: | :-----: | :-------: | :----: | :---: |
| **48**  | **41**  | **10.1**  | **12** | **9** |
| 8 _-x-_ |         | 5.1 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/writing-mode

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[writingMode](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#writingmode)

#### Defined in

node_modules/csstype/index.d.ts:5101

___

### zIndex

• `Optional` **zIndex**: [`ZIndex`](../modules/components_Container._internal_.md#zindex) \| (`undefined` \| [`ZIndex`](../modules/components_Container._internal_.md#zindex))[]

The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.

**Syntax**: `auto | <integer>`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/z-index

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[zIndex](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#zindex)

#### Defined in

node_modules/csstype/index.d.ts:5115

___

### zoom

• `Optional` **zoom**: [`Zoom`](../modules/components_Container._internal_.md#zoom) \| (`undefined` \| [`Zoom`](../modules/components_Container._internal_.md#zoom))[]

The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.

**Syntax**: `normal | reset | <number> | <percentage>`

**Initial value**: `normal`

| Chrome | Firefox | Safari  |  Edge  |   IE    |
| :----: | :-----: | :-----: | :----: | :-----: |
| **1**  |   No    | **3.1** | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/zoom

#### Inherited from

[StandardPropertiesFallback](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md).[zoom](components_GraphEditor_DataEditor._internal_.StandardPropertiesFallback.md#zoom)

#### Defined in

node_modules/csstype/index.d.ts:5129
