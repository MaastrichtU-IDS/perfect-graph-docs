[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / UseAutocompleteProps

# Interface: UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).UseAutocompleteProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Multiple` | extends `boolean` \| `undefined` |
| `DisableClearable` | extends `boolean` \| `undefined` |
| `FreeSolo` | extends `boolean` \| `undefined` |

## Hierarchy

- **`UseAutocompleteProps`**

  ↳ [`AutocompleteProps`](components_GraphEditor_DataEditor._internal_.AutocompleteProps.md)

## Table of contents

### Properties

- [autoComplete](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#autocomplete)
- [autoHighlight](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#autohighlight)
- [autoSelect](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#autoselect)
- [blurOnSelect](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#bluronselect)
- [clearOnBlur](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#clearonblur)
- [clearOnEscape](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#clearonescape)
- [componentName](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#componentname)
- [defaultValue](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#defaultvalue)
- [disableClearable](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#disableclearable)
- [disableCloseOnSelect](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#disablecloseonselect)
- [disableListWrap](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#disablelistwrap)
- [disabledItemsFocusable](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#disableditemsfocusable)
- [filterSelectedOptions](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#filterselectedoptions)
- [freeSolo](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#freesolo)
- [handleHomeEndKeys](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#handlehomeendkeys)
- [id](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#id)
- [includeInputInList](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#includeinputinlist)
- [inputValue](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#inputvalue)
- [multiple](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#multiple)
- [open](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#open)
- [openOnFocus](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#openonfocus)
- [options](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#options)
- [selectOnFocus](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#selectonfocus)
- [value](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#value)

### Methods

- [filterOptions](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#filteroptions)
- [getOptionDisabled](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#getoptiondisabled)
- [getOptionLabel](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#getoptionlabel)
- [groupBy](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#groupby)
- [isOptionEqualToValue](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#isoptionequaltovalue)
- [onChange](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#onchange)
- [onClose](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#onclose)
- [onHighlightChange](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#onhighlightchange)
- [onInputChange](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#oninputchange)
- [onOpen](components_GraphEditor_DataEditor._internal_.UseAutocompleteProps.md#onopen)

## Properties

### autoComplete

• `Optional` **autoComplete**: `boolean`

If `true`, the portion of the selected suggestion that has not been typed by the user,
known as the completion string, appears inline after the input cursor in the textbox.
The inline completion string is visually highlighted and has a selected state.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:50

___

### autoHighlight

• `Optional` **autoHighlight**: `boolean`

If `true`, the first option is automatically highlighted.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:55

___

### autoSelect

• `Optional` **autoSelect**: `boolean`

If `true`, the selected option becomes the value of the input
when the Autocomplete loses focus unless the user chooses
a different option or changes the character string in the input.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:62

___

### blurOnSelect

• `Optional` **blurOnSelect**: `boolean` \| ``"touch"`` \| ``"mouse"``

Control if the input should be blurred when an option is selected:

- `false` the input is not blurred.
- `true` the input is always blurred.
- `touch` the input is blurred after a touch event.
- `mouse` the input is blurred after a mouse event.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:72

___

### clearOnBlur

• `Optional` **clearOnBlur**: `boolean`

If `true`, the input's text is cleared on blur if no value is selected.

Set to `true` if you want to help the user enter a new value.
Set to `false` if you want to help the user resume his search.

**`default`** !props.freeSolo

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:80

___

### clearOnEscape

• `Optional` **clearOnEscape**: `boolean`

If `true`, clear all values when the user presses escape and the popup is closed.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:85

___

### componentName

• `Optional` **componentName**: `string`

The component name that is using this hook. Used for warnings.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:89

___

### defaultValue

• `Optional` **defaultValue**: [`AutocompleteValue`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompletevalue)<`T`, `Multiple`, `DisableClearable`, `FreeSolo`\>

The default value. Use when the component is not controlled.

**`default`** props.multiple ? [] : null

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:256

___

### disableClearable

• `Optional` **disableClearable**: `DisableClearable`

If `true`, the input can't be cleared.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:94

___

### disableCloseOnSelect

• `Optional` **disableCloseOnSelect**: `boolean`

If `true`, the popup won't close when a value is selected.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:99

___

### disableListWrap

• `Optional` **disableListWrap**: `boolean`

If `true`, the list box in the popup will not wrap focus.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:109

___

### disabledItemsFocusable

• `Optional` **disabledItemsFocusable**: `boolean`

If `true`, will allow focus on disabled items.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:104

___

### filterSelectedOptions

• `Optional` **filterSelectedOptions**: `boolean`

If `true`, hide the selected options from the list box.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:122

___

### freeSolo

• `Optional` **freeSolo**: `FreeSolo`

If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:127

___

### handleHomeEndKeys

• `Optional` **handleHomeEndKeys**: `boolean`

If `true`, the component handles the "Home" and "End" keys when the popup is open.
It should move focus to the first option and last option, respectively.

**`default`** !props.freeSolo

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:167

___

### id

• `Optional` **id**: `string`

This prop is used to help implement the accessibility logic.
If you don't provide an id it will fall back to a randomly generated one.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:172

___

### includeInputInList

• `Optional` **includeInputInList**: `boolean`

If `true`, the highlight can move to the input.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:177

___

### inputValue

• `Optional` **inputValue**: `string`

The input value.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:181

___

### multiple

• `Optional` **multiple**: `Multiple`

If `true`, `value` must be an array and the menu will support multiple selections.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:244

___

### open

• `Optional` **open**: `boolean`

If `true`, the component is shown.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:224

___

### openOnFocus

• `Optional` **openOnFocus**: `boolean`

If `true`, the popup will open on input focus.

**`default`** false

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:229

___

### options

• **options**: readonly `T`[]

Array of options.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:233

___

### selectOnFocus

• `Optional` **selectOnFocus**: `boolean`

If `true`, the input's text is selected on focus.
It helps the user clear the selected value.

**`default`** !props.freeSolo

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:239

___

### value

• `Optional` **value**: [`AutocompleteValue`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompletevalue)<`T`, `Multiple`, `DisableClearable`, `FreeSolo`\>

The value of the autocomplete.

The value must have reference equality with the option in order to be selected.
You can customize the equality behavior with the `isOptionEqualToValue` prop.

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:251

## Methods

### filterOptions

▸ `Optional` **filterOptions**(`options`, `state`): `T`[]

A filter function that determines the options that are eligible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `T`[] | The options to render. |
| `state` | [`FilterOptionsState`](components_GraphEditor_DataEditor._internal_.FilterOptionsState.md)<`T`\> | The state of the component. |

#### Returns

`T`[]

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:117

___

### getOptionDisabled

▸ `Optional` **getOptionDisabled**(`option`): `boolean`

Used to determine the disabled state for a given option.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `T` | The option to test. |

#### Returns

`boolean`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:134

___

### getOptionLabel

▸ `Optional` **getOptionLabel**(`option`): `string`

Used to determine the string value for a given option.
It's used to fill the input (and the list box options if `renderOption` is not provided).

**`default`** (option) => option.label ?? option

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

`string`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:143

___

### groupBy

▸ `Optional` **groupBy**(`option`): `string`

If provided, the options will be grouped under the returned string.
The groupBy value is also used as the text for group headings when `renderGroup` is not provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

`string`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:161

___

### isOptionEqualToValue

▸ `Optional` **isOptionEqualToValue**(`option`, `value`): `boolean`

Used to determine if the option represents the given value.
Uses strict equality by default.
⚠️ Both arguments need to be handled, an option can only match with one value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `T` | The option to test. |
| `value` | `T` | The value to test against. |

#### Returns

`boolean`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:153

___

### onChange

▸ `Optional` **onChange**(`event`, `value`, `reason`, `details?`): `void`

Callback fired when the value changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> | The event source of the callback. |
| `value` | [`AutocompleteValue`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompletevalue)<`T`, `Multiple`, `DisableClearable`, `FreeSolo`\> | The new value of the component. |
| `reason` | [`AutocompleteChangeReason`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompletechangereason) | One of "createOption", "selectOption", "removeOption", "blur" or "clear". |
| `details?` | [`AutocompleteChangeDetails`](components_GraphEditor_DataEditor._internal_.AutocompleteChangeDetails.md)<`T`\> | - |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:265

___

### onClose

▸ `Optional` **onClose**(`event`, `reason`): `void`

Callback fired when the popup requests to be closed.
Use in controlled mode (see open).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> | The event source of the callback. |
| `reason` | [`AutocompleteCloseReason`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompleteclosereason) | Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`. |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:189

___

### onHighlightChange

▸ `Optional` **onHighlightChange**(`event`, `option`, `reason`): `void`

Callback fired when the highlight option changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> | The event source of the callback. |
| `option` | ``null`` \| `T` | The highlighted option. |
| `reason` | [`AutocompleteHighlightChangeReason`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompletehighlightchangereason) | Can be: `"keyboard"`, `"auto"`, `"mouse"`. |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:216

___

### onInputChange

▸ `Optional` **onInputChange**(`event`, `value`, `reason`): `void`

Callback fired when the input value changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> | The event source of the callback. |
| `value` | `string` | The new value of the text input. |
| `reason` | [`AutocompleteInputChangeReason`](../modules/components_GraphEditor_DataEditor._internal_.md#autocompleteinputchangereason) | Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`. |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:197

___

### onOpen

▸ `Optional` **onOpen**(`event`): `void`

Callback fired when the popup requests to be opened.
Use in controlled mode (see open).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`Element`, `Event`\> | The event source of the callback. |

#### Returns

`void`

#### Defined in

node_modules/@mui/core/AutocompleteUnstyled/useAutocomplete.d.ts:208
