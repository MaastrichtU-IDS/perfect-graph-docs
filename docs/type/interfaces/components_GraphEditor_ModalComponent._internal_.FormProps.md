[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/ModalComponent](../modules/components_GraphEditor_ModalComponent.md) / [<internal\>](../modules/components_GraphEditor_ModalComponent._internal_.md) / FormProps

# Interface: FormProps<T\>

[components/GraphEditor/ModalComponent](../modules/components_GraphEditor_ModalComponent.md).[<internal>](../modules/components_GraphEditor_ModalComponent._internal_.md).FormProps

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [ArrayFieldTemplate](components_GraphEditor_ModalComponent._internal_.FormProps.md#arrayfieldtemplate)
- [ErrorList](components_GraphEditor_ModalComponent._internal_.FormProps.md#errorlist)
- [FieldTemplate](components_GraphEditor_ModalComponent._internal_.FormProps.md#fieldtemplate)
- [ObjectFieldTemplate](components_GraphEditor_ModalComponent._internal_.FormProps.md#objectfieldtemplate)
- [acceptcharset](components_GraphEditor_ModalComponent._internal_.FormProps.md#acceptcharset)
- [action](components_GraphEditor_ModalComponent._internal_.FormProps.md#action)
- [additionalMetaSchemas](components_GraphEditor_ModalComponent._internal_.FormProps.md#additionalmetaschemas)
- [autoComplete](components_GraphEditor_ModalComponent._internal_.FormProps.md#autocomplete)
- [autocomplete](components_GraphEditor_ModalComponent._internal_.FormProps.md#autocomplete)
- [children](components_GraphEditor_ModalComponent._internal_.FormProps.md#children)
- [className](components_GraphEditor_ModalComponent._internal_.FormProps.md#classname)
- [customFormats](components_GraphEditor_ModalComponent._internal_.FormProps.md#customformats)
- [disabled](components_GraphEditor_ModalComponent._internal_.FormProps.md#disabled)
- [enctype](components_GraphEditor_ModalComponent._internal_.FormProps.md#enctype)
- [extraErrors](components_GraphEditor_ModalComponent._internal_.FormProps.md#extraerrors)
- [fields](components_GraphEditor_ModalComponent._internal_.FormProps.md#fields)
- [formContext](components_GraphEditor_ModalComponent._internal_.FormProps.md#formcontext)
- [formData](components_GraphEditor_ModalComponent._internal_.FormProps.md#formdata)
- [id](components_GraphEditor_ModalComponent._internal_.FormProps.md#id)
- [idPrefix](components_GraphEditor_ModalComponent._internal_.FormProps.md#idprefix)
- [liveOmit](components_GraphEditor_ModalComponent._internal_.FormProps.md#liveomit)
- [liveValidate](components_GraphEditor_ModalComponent._internal_.FormProps.md#livevalidate)
- [method](components_GraphEditor_ModalComponent._internal_.FormProps.md#method)
- [name](components_GraphEditor_ModalComponent._internal_.FormProps.md#name)
- [noHtml5Validate](components_GraphEditor_ModalComponent._internal_.FormProps.md#nohtml5validate)
- [noValidate](components_GraphEditor_ModalComponent._internal_.FormProps.md#novalidate)
- [omitExtraData](components_GraphEditor_ModalComponent._internal_.FormProps.md#omitextradata)
- [readonly](components_GraphEditor_ModalComponent._internal_.FormProps.md#readonly)
- [schema](components_GraphEditor_ModalComponent._internal_.FormProps.md#schema)
- [showErrorList](components_GraphEditor_ModalComponent._internal_.FormProps.md#showerrorlist)
- [tagName](components_GraphEditor_ModalComponent._internal_.FormProps.md#tagname)
- [target](components_GraphEditor_ModalComponent._internal_.FormProps.md#target)
- [uiSchema](components_GraphEditor_ModalComponent._internal_.FormProps.md#uischema)
- [widgets](components_GraphEditor_ModalComponent._internal_.FormProps.md#widgets)

### Methods

- [onBlur](components_GraphEditor_ModalComponent._internal_.FormProps.md#onblur)
- [onChange](components_GraphEditor_ModalComponent._internal_.FormProps.md#onchange)
- [onError](components_GraphEditor_ModalComponent._internal_.FormProps.md#onerror)
- [onFocus](components_GraphEditor_ModalComponent._internal_.FormProps.md#onfocus)
- [onSubmit](components_GraphEditor_ModalComponent._internal_.FormProps.md#onsubmit)
- [transformErrors](components_GraphEditor_ModalComponent._internal_.FormProps.md#transformerrors)
- [validate](components_GraphEditor_ModalComponent._internal_.FormProps.md#validate)

## Properties

### ArrayFieldTemplate

• `Optional` **ArrayFieldTemplate**: [`StatelessComponent`](../modules/components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`ArrayFieldTemplateProps`](../modules/components_GraphEditor_ModalComponent._internal_.md#arrayfieldtemplateprops)<`any`\>\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:15

___

### ErrorList

• `Optional` **ErrorList**: [`StatelessComponent`](../modules/components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`ErrorListProps`](../modules/components_GraphEditor_ModalComponent._internal_.md#errorlistprops)\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:25

___

### FieldTemplate

• `Optional` **FieldTemplate**: [`StatelessComponent`](../modules/components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`FieldTemplateProps`](../modules/components_GraphEditor_ModalComponent._internal_.md#fieldtemplateprops)<`any`\>\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:27

___

### ObjectFieldTemplate

• `Optional` **ObjectFieldTemplate**: [`StatelessComponent`](../modules/components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`ObjectFieldTemplateProps`](../modules/components_GraphEditor_ModalComponent._internal_.md#objectfieldtemplateprops)<`any`\>\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:38

___

### acceptcharset

• `Optional` **acceptcharset**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:12

___

### action

• `Optional` **action**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:13

___

### additionalMetaSchemas

• `Optional` **additionalMetaSchemas**: readonly `object`[]

#### Defined in

node_modules/@rjsf/core/index.d.ts:14

___

### autoComplete

• `Optional` **autoComplete**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:16

___

### autocomplete

• `Optional` **autocomplete**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:17

___

### children

• `Optional` **children**: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

#### Defined in

node_modules/@rjsf/core/index.d.ts:18

___

### className

• `Optional` **className**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:19

___

### customFormats

• `Optional` **customFormats**: `Object`

#### Index signature

▪ [k: `string`]: `string` \| `RegExp` \| (`data`: `string`) => `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:20

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:21

___

### enctype

• `Optional` **enctype**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:23

___

### extraErrors

• `Optional` **extraErrors**: `any`

#### Defined in

node_modules/@rjsf/core/index.d.ts:24

___

### fields

• `Optional` **fields**: `Object`

#### Index signature

▪ [name: `string`]: [`Field`](../modules/components_GraphEditor_ModalComponent._internal_.md#field)

#### Defined in

node_modules/@rjsf/core/index.d.ts:26

___

### formContext

• `Optional` **formContext**: `any`

#### Defined in

node_modules/@rjsf/core/index.d.ts:28

___

### formData

• `Optional` **formData**: `T`

#### Defined in

node_modules/@rjsf/core/index.d.ts:29

___

### id

• `Optional` **id**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:30

___

### idPrefix

• `Optional` **idPrefix**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:31

___

### liveOmit

• `Optional` **liveOmit**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:32

___

### liveValidate

• `Optional` **liveValidate**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:33

___

### method

• `Optional` **method**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:34

___

### name

• `Optional` **name**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:35

___

### noHtml5Validate

• `Optional` **noHtml5Validate**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:36

___

### noValidate

• `Optional` **noValidate**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:37

___

### omitExtraData

• `Optional` **omitExtraData**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:39

___

### readonly

• `Optional` **readonly**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:22

___

### schema

• **schema**: [`JSONSchema7`](components_GraphEditor_ModalComponent._internal_.JSONSchema7.md)

#### Defined in

node_modules/@rjsf/core/index.d.ts:45

___

### showErrorList

• `Optional` **showErrorList**: `boolean`

#### Defined in

node_modules/@rjsf/core/index.d.ts:46

___

### tagName

• `Optional` **tagName**: keyof [`IntrinsicElements`](components_Container._internal_.IntrinsicElements.md) \| [`ComponentType`](../modules/components_GraphEditor_DataEditor._internal_.md#componenttype)<{}\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:47

___

### target

• `Optional` **target**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:48

___

### uiSchema

• `Optional` **uiSchema**: [`UiSchema`](../modules/components_GraphEditor_ModalComponent._internal_.md#uischema)

#### Defined in

node_modules/@rjsf/core/index.d.ts:50

___

### widgets

• `Optional` **widgets**: `Object`

#### Index signature

▪ [name: `string`]: [`Widget`](../modules/components_GraphEditor_ModalComponent._internal_.md#widget)

#### Defined in

node_modules/@rjsf/core/index.d.ts:52

## Methods

### onBlur

▸ `Optional` **onBlur**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@rjsf/core/index.d.ts:40

___

### onChange

▸ `Optional` **onChange**(`e`, `es?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IChangeEvent`](components_GraphEditor_ModalComponent._internal_.IChangeEvent.md)<`T`\> |
| `es?` | [`ErrorSchema`](../modules/components_GraphEditor_ModalComponent._internal_.md#errorschema) |

#### Returns

`any`

#### Defined in

node_modules/@rjsf/core/index.d.ts:41

___

### onError

▸ `Optional` **onError**(`e`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@rjsf/core/index.d.ts:42

___

### onFocus

▸ `Optional` **onFocus**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@rjsf/core/index.d.ts:43

___

### onSubmit

▸ `Optional` **onSubmit**(`e`, `nativeEvent`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ISubmitEvent`](../modules/components_GraphEditor_ModalComponent._internal_.md#isubmitevent)<`T`\> |
| `nativeEvent` | [`FormEvent`](components_Container._internal_.FormEvent.md)<`HTMLFormElement`\> |

#### Returns

`any`

#### Defined in

node_modules/@rjsf/core/index.d.ts:44

___

### transformErrors

▸ `Optional` **transformErrors**(`errors`): [`AjvError`](../modules/components_GraphEditor_ModalComponent._internal_.md#ajverror)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | [`AjvError`](../modules/components_GraphEditor_ModalComponent._internal_.md#ajverror)[] |

#### Returns

[`AjvError`](../modules/components_GraphEditor_ModalComponent._internal_.md#ajverror)[]

#### Defined in

node_modules/@rjsf/core/index.d.ts:49

___

### validate

▸ `Optional` **validate**(`formData`, `errors`): [`FormValidation`](../modules/components_GraphEditor_ModalComponent._internal_.md#formvalidation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `formData` | `T` |
| `errors` | [`FormValidation`](../modules/components_GraphEditor_ModalComponent._internal_.md#formvalidation) |

#### Returns

[`FormValidation`](../modules/components_GraphEditor_ModalComponent._internal_.md#formvalidation)

#### Defined in

node_modules/@rjsf/core/index.d.ts:51
