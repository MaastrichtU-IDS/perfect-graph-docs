[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/ModalComponent](components_GraphEditor_ModalComponent.md) / <internal\>

# Namespace: <internal\>

[components/GraphEditor/ModalComponent](components_GraphEditor_ModalComponent.md).<internal>

## Table of contents

### Interfaces

- [FieldProps](../interfaces/components_GraphEditor_ModalComponent._internal_.FieldProps.md)
- [FormProps](../interfaces/components_GraphEditor_ModalComponent._internal_.FormProps.md)
- [IChangeEvent](../interfaces/components_GraphEditor_ModalComponent._internal_.IChangeEvent.md)
- [JSONSchema7](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md)
- [JSONSchema7Array](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)
- [JSONSchema7Object](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7Object.md)
- [Registry](../interfaces/components_GraphEditor_ModalComponent._internal_.Registry.md)
- [WidgetProps](../interfaces/components_GraphEditor_ModalComponent._internal_.WidgetProps.md)

### Type aliases

- [AjvError](components_GraphEditor_ModalComponent._internal_.md#ajverror)
- [ArrayFieldTemplateProps](components_GraphEditor_ModalComponent._internal_.md#arrayfieldtemplateprops)
- [ErrorListProps](components_GraphEditor_ModalComponent._internal_.md#errorlistprops)
- [ErrorSchema](components_GraphEditor_ModalComponent._internal_.md#errorschema)
- [Field](components_GraphEditor_ModalComponent._internal_.md#field)
- [FieldError](components_GraphEditor_ModalComponent._internal_.md#fielderror)
- [FieldId](components_GraphEditor_ModalComponent._internal_.md#fieldid)
- [FieldTemplateProps](components_GraphEditor_ModalComponent._internal_.md#fieldtemplateprops)
- [FieldValidation](components_GraphEditor_ModalComponent._internal_.md#fieldvalidation)
- [FormValidation](components_GraphEditor_ModalComponent._internal_.md#formvalidation)
- [ISubmitEvent](components_GraphEditor_ModalComponent._internal_.md#isubmitevent)
- [IdSchema](components_GraphEditor_ModalComponent._internal_.md#idschema)
- [JSONSchema7Definition](components_GraphEditor_ModalComponent._internal_.md#jsonschema7definition)
- [JSONSchema7Type](components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)
- [JSONSchema7TypeName](components_GraphEditor_ModalComponent._internal_.md#jsonschema7typename)
- [ObjectFieldTemplateProps](components_GraphEditor_ModalComponent._internal_.md#objectfieldtemplateprops)
- [StatelessComponent](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)
- [UiSchema](components_GraphEditor_ModalComponent._internal_.md#uischema)
- [Widget](components_GraphEditor_ModalComponent._internal_.md#widget)

## Type aliases

### AjvError

Ƭ **AjvError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `name` | `string` |
| `params` | `any` |
| `property` | `string` |
| `stack` | `string` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:238

___

### ArrayFieldTemplateProps

Ƭ **ArrayFieldTemplateProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DescriptionField` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<{ `description`: `string` \| [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) ; `id`: `string`  }\> |
| `TitleField` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<{ `id`: `string` ; `required`: `boolean` ; `title`: `string`  }\> |
| `canAdd` | `boolean` |
| `className` | `string` |
| `disabled` | `boolean` |
| `formContext` | `any` |
| `formData` | `T` |
| `idSchema` | [`IdSchema`](components_GraphEditor_ModalComponent._internal_.md#idschema) |
| `items` | { `children`: [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) ; `className`: `string` ; `disabled`: `boolean` ; `hasMoveDown`: `boolean` ; `hasMoveUp`: `boolean` ; `hasRemove`: `boolean` ; `hasToolbar`: `boolean` ; `index`: `number` ; `key`: `string` ; `readonly`: `boolean` ; `onAddIndexClick`: (`index`: `number`) => (`event?`: `any`) => `void` ; `onDropIndexClick`: (`index`: `number`) => (`event?`: `any`) => `void` ; `onReorderClick`: (`index`: `number`, `newIndex`: `number`) => (`event?`: `any`) => `void`  }[] |
| `readonly` | `boolean` |
| `registry` | [`Registry`](../interfaces/components_GraphEditor_ModalComponent._internal_.Registry.md) |
| `required` | `boolean` |
| `schema` | [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md) |
| `title` | `string` |
| `uiSchema` | [`UiSchema`](components_GraphEditor_ModalComponent._internal_.md#uischema) |
| `onAddClick` | (`event?`: `any`) => `void` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:181

___

### ErrorListProps

Ƭ **ErrorListProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorSchema` | [`FormValidation`](components_GraphEditor_ModalComponent._internal_.md#formvalidation) |
| `errors` | [`AjvError`](components_GraphEditor_ModalComponent._internal_.md#ajverror)[] |
| `formContext` | `any` |
| `schema` | [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md) |
| `uiSchema` | [`UiSchema`](components_GraphEditor_ModalComponent._internal_.md#uischema) |

#### Defined in

node_modules/@rjsf/core/index.d.ts:246

___

### ErrorSchema

Ƭ **ErrorSchema**: `Object`

#### Index signature

▪ [k: `string`]: [`ErrorSchema`](components_GraphEditor_ModalComponent._internal_.md#errorschema)

#### Defined in

node_modules/@rjsf/core/index.d.ts:7

___

### Field

Ƭ **Field**: [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`FieldProps`](../interfaces/components_GraphEditor_ModalComponent._internal_.FieldProps.md)\> \| [`ComponentClass`](../interfaces/components_GraphEditor_DataEditor._internal_.ComponentClass.md)<[`FieldProps`](../interfaces/components_GraphEditor_ModalComponent._internal_.FieldProps.md)\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:152

___

### FieldError

Ƭ **FieldError**: `string`

#### Defined in

node_modules/@rjsf/core/index.d.ts:267

___

### FieldId

Ƭ **FieldId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:78

___

### FieldTemplateProps

Ƭ **FieldTemplateProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) |
| `classNames` | `string` |
| `description` | [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) |
| `disabled` | `boolean` |
| `displayLabel` | `boolean` |
| `errors` | [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) |
| `fields` | [`Field`](components_GraphEditor_ModalComponent._internal_.md#field)[] |
| `formContext` | `any` |
| `formData` | `T` |
| `help` | [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) |
| `hidden` | `boolean` |
| `id` | `string` |
| `label` | `string` |
| `rawDescription` | `string` |
| `rawErrors` | `string`[] |
| `rawHelp` | `string` |
| `readonly` | `boolean` |
| `registry` | [`Registry`](../interfaces/components_GraphEditor_ModalComponent._internal_.Registry.md) |
| `required` | `boolean` |
| `schema` | [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md) |
| `uiSchema` | [`UiSchema`](components_GraphEditor_ModalComponent._internal_.md#uischema) |
| `onChange` | (`value`: `T`) => `void` |
| `onDropPropertyClick` | (`value`: `string`) => () => `void` |
| `onKeyChange` | (`value`: `string`) => () => `void` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:154

___

### FieldValidation

Ƭ **FieldValidation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__errors` | [`FieldError`](components_GraphEditor_ModalComponent._internal_.md#fielderror)[] |
| `addError` | (`message`: `string`) => `void` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:269

___

### FormValidation

Ƭ **FormValidation**: [`FieldValidation`](components_GraphEditor_ModalComponent._internal_.md#fieldvalidation) & { [fieldName: string]: [`FieldValidation`](components_GraphEditor_ModalComponent._internal_.md#fieldvalidation);  }

#### Defined in

node_modules/@rjsf/core/index.d.ts:274

___

### ISubmitEvent

Ƭ **ISubmitEvent**<`T`\>: [`IChangeEvent`](../interfaces/components_GraphEditor_ModalComponent._internal_.IChangeEvent.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:265

___

### IdSchema

Ƭ **IdSchema**<`T`\>: { [key in keyof T]: IdSchema<T[key]\> } & [`FieldId`](components_GraphEditor_ModalComponent._internal_.md#fieldid)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:82

___

### JSONSchema7Definition

Ƭ **JSONSchema7Definition**: [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md) \| `boolean`

JSON Schema v7

**`see`** https://tools.ietf.org/html/draft-handrews-json-schema-validation-01

#### Defined in

node_modules/@types/json-schema/index.d.ts:617

___

### JSONSchema7Type

Ƭ **JSONSchema7Type**: `string` \| `number` \| `boolean` \| [`JSONSchema7Object`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7Object.md) \| [`JSONSchema7Array`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md) \| ``null``

Primitive type

**`see`** https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1

#### Defined in

node_modules/@types/json-schema/index.d.ts:583

___

### JSONSchema7TypeName

Ƭ **JSONSchema7TypeName**: ``"string"`` \| ``"number"`` \| ``"integer"`` \| ``"boolean"`` \| ``"object"`` \| ``"array"`` \| ``"null"``

Primitive type

**`see`** https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1

#### Defined in

node_modules/@types/json-schema/index.d.ts:570

___

### ObjectFieldTemplateProps

Ƭ **ObjectFieldTemplateProps**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DescriptionField` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<{ `description`: `string` \| [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) ; `id`: `string`  }\> |
| `TitleField` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<{ `id`: `string` ; `required`: `boolean` ; `title`: `string`  }\> |
| `description` | `string` |
| `disabled` | `boolean` |
| `formContext` | `any` |
| `formData` | `T` |
| `idSchema` | [`IdSchema`](components_GraphEditor_ModalComponent._internal_.md#idschema) |
| `properties` | { `content`: [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md) ; `disabled`: `boolean` ; `hidden`: `boolean` ; `name`: `string` ; `readonly`: `boolean`  }[] |
| `readonly` | `boolean` |
| `registry` | [`Registry`](../interfaces/components_GraphEditor_ModalComponent._internal_.Registry.md) |
| `required` | `boolean` |
| `schema` | [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md) |
| `title` | `string` |
| `uiSchema` | [`UiSchema`](components_GraphEditor_ModalComponent._internal_.md#uischema) |
| `onAddClick` | (`schema`: [`JSONSchema7`](../interfaces/components_GraphEditor_ModalComponent._internal_.JSONSchema7.md)) => () => `void` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:214

___

### StatelessComponent

Ƭ **StatelessComponent**<`P`\>: [`FunctionComponent`](../interfaces/components_ClusterNodeContainer._internal_.FunctionComponent.md)<`P`\>

**`deprecated`** as of recent React versions, function components can no
longer be considered 'stateless'. Please use `FunctionComponent` instead.

**`see`** [React Hooks](https://reactjs.org/docs/hooks-intro.html)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |

#### Defined in

node_modules/@types/react/index.d.ts:545

___

### UiSchema

Ƭ **UiSchema**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ui:ArrayFieldTemplate?` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`ArrayFieldTemplateProps`](components_GraphEditor_ModalComponent._internal_.md#arrayfieldtemplateprops)\> |
| `ui:FieldTemplate?` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`FieldTemplateProps`](components_GraphEditor_ModalComponent._internal_.md#fieldtemplateprops)\> |
| `ui:ObjectFieldTemplate?` | [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`ObjectFieldTemplateProps`](components_GraphEditor_ModalComponent._internal_.md#objectfieldtemplateprops)\> |
| `ui:field?` | [`Field`](components_GraphEditor_ModalComponent._internal_.md#field) \| `string` |
| `ui:options?` | `Object` |
| `ui:order?` | `string`[] |
| `ui:widget?` | [`Widget`](components_GraphEditor_ModalComponent._internal_.md#widget) \| `string` |

#### Defined in

node_modules/@rjsf/core/index.d.ts:67

___

### Widget

Ƭ **Widget**: [`StatelessComponent`](components_GraphEditor_ModalComponent._internal_.md#statelesscomponent)<[`WidgetProps`](../interfaces/components_GraphEditor_ModalComponent._internal_.WidgetProps.md)\> \| [`ComponentClass`](../interfaces/components_GraphEditor_DataEditor._internal_.ComponentClass.md)<[`WidgetProps`](../interfaces/components_GraphEditor_ModalComponent._internal_.WidgetProps.md)\>

#### Defined in

node_modules/@rjsf/core/index.d.ts:122
