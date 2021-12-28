[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / Breakpoints

# Interface: Breakpoints

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).Breakpoints

## Table of contents

### Properties

- [keys](components_GraphEditor_DataEditor._internal_.Breakpoints.md#keys)
- [values](components_GraphEditor_DataEditor._internal_.Breakpoints.md#values)

### Methods

- [between](components_GraphEditor_DataEditor._internal_.Breakpoints.md#between)
- [down](components_GraphEditor_DataEditor._internal_.Breakpoints.md#down)
- [only](components_GraphEditor_DataEditor._internal_.Breakpoints.md#only)
- [up](components_GraphEditor_DataEditor._internal_.Breakpoints.md#up)

## Properties

### keys

• **keys**: [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint)[]

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:14

___

### values

• **values**: `Object`

Each breakpoint (a key) matches with a fixed screen width (a value).

**`default`** {
   // extra-small
   xs: 0,
   // small
   sm: 600,
   // medium
   md: 900,
   // large
   lg: 1200,
   // extra-large
   xl: 1536,
}

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lg` | `number` |
| `md` | `number` |
| `sm` | `number` |
| `xl` | `number` |
| `xs` | `number` |

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:30

## Methods

### between

▸ **between**(`start`, `end`): `string`

**`see`** [API documentation](https://mui.com/customization/breakpoints/#theme-breakpoints-between-start-end-media-query)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` \| [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint) | A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px. |
| `end` | `number` \| [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint) | A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px. |

#### Returns

`string`

A media query string ready to be used with most styling solutions, which matches screen widths greater than
         the screen size given by the breakpoint key in the first argument (inclusive) and less than the screen size given by the breakpoint key in the second argument (exclusive).

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:50

___

### down

▸ **down**(`key`): `string`

**`see`** [API documentation](https://mui.com/customization/breakpoints/#theme-breakpoints-down-key-media-query)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `number` \| [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint) | A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px. |

#### Returns

`string`

A media query string ready to be used with most styling solutions, which matches screen widths less than the screen size given by the breakpoint key (exclusive).

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:42

___

### only

▸ **only**(`key`): `string`

**`see`** [API documentation](https://mui.com/customization/breakpoints/#theme-breakpoints-only-key-media-query)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint) | A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px. |

#### Returns

`string`

A media query string ready to be used with most styling solutions, which matches screen widths starting from
         the screen size given by the breakpoint key (inclusive) and stopping at the screen size given by the next breakpoint key (exclusive).

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:57

___

### up

▸ **up**(`key`): `string`

**`see`** [API documentation](https://mui.com/customization/breakpoints/#theme-breakpoints-up-key-media-query)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `number` \| [`Breakpoint`](../modules/components_GraphEditor_DataEditor._internal_.md#breakpoint) | A breakpoint key (`xs`, `sm`, etc.) or a screen width number in px. |

#### Returns

`string`

A media query string ready to be used with most styling solutions, which matches screen widths greater than the screen size given by the breakpoint key (inclusive).

#### Defined in

node_modules/@mui/system/createTheme/createBreakpoints.d.ts:36
