[perfect-graph](../README.md) / [Modules](../modules.md) / core/theme

# Module: core/theme

## Table of contents

### Type aliases

- [Theme](core_theme.md#theme)
- [ThemeProps](core_theme.md#themeprops)

### Variables

- [DarkTheme](core_theme.md#darktheme)
- [DefaultTheme](core_theme.md#defaulttheme)
- [ThemeContext](core_theme.md#themecontext)

### Functions

- [ThemeProvider](core_theme.md#themeprovider)
- [useTheme](core_theme.md#usetheme)

## Type aliases

### Theme

Ƭ **Theme**: typeof [`DefaultTheme`](core_theme.md#defaulttheme)

#### Defined in

[core/theme/index.ts:178](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L178)

___

### ThemeProps

Ƭ **ThemeProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `theme` | [`Theme`](core_theme.md#theme) |

#### Defined in

[core/theme/index.ts:180](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L180)

## Variables

### DarkTheme

• **DarkTheme**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `palette` | `Object` |
| `palette.action` | `Object` |
| `palette.action.active` | `number` |
| `palette.action.disabled` | `number` |
| `palette.action.disabledBackground` | `number` |
| `palette.action.focus` | `number` |
| `palette.action.hover` | `number` |
| `palette.action.selected` | `number` |
| `palette.background` | `Object` |
| `palette.background.default` | `number` |
| `palette.background.paper` | `number` |
| `palette.common` | `Object` |
| `palette.common.black` | `number` |
| `palette.common.white` | `number` |
| `palette.divider` | `number` |
| `palette.error` | `Object` |
| `palette.error.contrastText` | `number` |
| `palette.error.dark` | `number` |
| `palette.error.light` | `number` |
| `palette.error.main` | `number` |
| `palette.grey` | `Object` |
| `palette.grey.100` | `number` |
| `palette.grey.200` | `number` |
| `palette.grey.300` | `number` |
| `palette.grey.400` | `number` |
| `palette.grey.50` | `number` |
| `palette.grey.500` | `number` |
| `palette.grey.600` | `number` |
| `palette.grey.700` | `number` |
| `palette.grey.800` | `number` |
| `palette.grey.900` | `number` |
| `palette.grey.A100` | `number` |
| `palette.grey.A200` | `number` |
| `palette.grey.A400` | `number` |
| `palette.grey.A700` | `number` |
| `palette.info` | `Object` |
| `palette.info.contrastText` | `number` |
| `palette.info.dark` | `number` |
| `palette.info.light` | `number` |
| `palette.info.main` | `number` |
| `palette.primary` | `Object` |
| `palette.primary.contrastText` | `number` |
| `palette.primary.dark` | `number` |
| `palette.primary.light` | `number` |
| `palette.primary.main` | `number` |
| `palette.secondary` | `Object` |
| `palette.secondary.contrastText` | `number` |
| `palette.secondary.dark` | `number` |
| `palette.secondary.light` | `number` |
| `palette.secondary.main` | `number` |
| `palette.success` | `Object` |
| `palette.success.contrastText` | `number` |
| `palette.success.dark` | `number` |
| `palette.success.light` | `number` |
| `palette.success.main` | `number` |
| `palette.text` | `Object` |
| `palette.text.disabled` | `number` |
| `palette.text.icon` | `number` |
| `palette.text.primary` | `number` |
| `palette.text.secondary` | `number` |
| `palette.warning` | `Object` |
| `palette.warning.contrastText` | `number` |
| `palette.warning.dark` | `number` |
| `palette.warning.light` | `number` |
| `palette.warning.main` | `number` |

#### Defined in

[core/theme/index.ts:82](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L82)

___

### DefaultTheme

• **DefaultTheme**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `palette` | `Object` |
| `palette.action` | `Object` |
| `palette.action.active` | `number` |
| `palette.action.disabled` | `number` |
| `palette.action.disabledBackground` | `number` |
| `palette.action.focus` | `number` |
| `palette.action.hover` | `number` |
| `palette.action.selected` | `number` |
| `palette.background` | `Object` |
| `palette.background.default` | `number` |
| `palette.background.paper` | `number` |
| `palette.common` | `Object` |
| `palette.common.black` | `number` |
| `palette.common.white` | `number` |
| `palette.divider` | `number` |
| `palette.error` | `Object` |
| `palette.error.contrastText` | `number` |
| `palette.error.dark` | `number` |
| `palette.error.light` | `number` |
| `palette.error.main` | `number` |
| `palette.grey` | `Object` |
| `palette.grey.100` | `number` |
| `palette.grey.200` | `number` |
| `palette.grey.300` | `number` |
| `palette.grey.400` | `number` |
| `palette.grey.50` | `number` |
| `palette.grey.500` | `number` |
| `palette.grey.600` | `number` |
| `palette.grey.700` | `number` |
| `palette.grey.800` | `number` |
| `palette.grey.900` | `number` |
| `palette.grey.A100` | `number` |
| `palette.grey.A200` | `number` |
| `palette.grey.A400` | `number` |
| `palette.grey.A700` | `number` |
| `palette.info` | `Object` |
| `palette.info.contrastText` | `number` |
| `palette.info.dark` | `number` |
| `palette.info.light` | `number` |
| `palette.info.main` | `number` |
| `palette.primary` | `Object` |
| `palette.primary.contrastText` | `number` |
| `palette.primary.dark` | `number` |
| `palette.primary.light` | `number` |
| `palette.primary.main` | `number` |
| `palette.secondary` | `Object` |
| `palette.secondary.contrastText` | `number` |
| `palette.secondary.dark` | `number` |
| `palette.secondary.light` | `number` |
| `palette.secondary.main` | `number` |
| `palette.success` | `Object` |
| `palette.success.contrastText` | `number` |
| `palette.success.dark` | `number` |
| `palette.success.light` | `number` |
| `palette.success.main` | `number` |
| `palette.text` | `Object` |
| `palette.text.disabled` | `number` |
| `palette.text.primary` | `number` |
| `palette.text.secondary` | `number` |
| `palette.warning` | `Object` |
| `palette.warning.contrastText` | `number` |
| `palette.warning.dark` | `number` |
| `palette.warning.light` | `number` |
| `palette.warning.main` | `number` |

#### Defined in

[core/theme/index.ts:3](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L3)

___

### ThemeContext

• **ThemeContext**: `Context`<[{ `palette`: { `action`: { `active`: `number` = 0; `disabled`: `number` = 0; `disabledBackground`: `number` = 0; `focus`: `number` = 0; `hover`: `number` = 0; `selected`: `number` = 0 } ; `background`: { `default`: `number` = 16448250; `paper`: `number` = 10066329 } ; `common`: { `black`: `number` = 0; `white`: `number` = 16777215 } ; `divider`: `number` = 0x0B0B0B; `error`: { `contrastText`: `number` = 16777215; `dark`: `number` = 13840175; `light`: `number` = 15037299; `main`: `number` = 16007990 } ; `grey`: { `100`: `number` = 16119285; `200`: `number` = 15658734; `300`: `number` = 14737632; `400`: `number` = 12434877; `50`: `number` = 16448250; `500`: `number` = 10395294; `600`: `number` = 7697781; `700`: `number` = 6381921; `800`: `number` = 4342338; `900`: `number` = 2171169; `A100`: `number` = 14013909; `A200`: `number` = 11184810; `A400`: `number` = 3158064; `A700`: `number` = 6381921 } ; `info`: { `contrastText`: `number` = 16777215; `dark`: `number` = 1668818; `light`: `number` = 6600182; `main`: `number` = 2201331 } ; `primary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 3162015; `light`: `number` = 7964363; `main`: `number` = 4149685 } ; `secondary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 12915042; `light`: `number` = 16728193; `main`: `number` = 16056407 } ; `success`: { `contrastText`: `number` = 0; `dark`: `number` = 3706428; `light`: `number` = 8505220; `main`: `number` = 5025616 } ; `text`: { `disabled`: `number` = 0x0B0B0B; `primary`: `number` = 0x0B0B0B; `secondary`: `number` = 0x0B0B0B } ; `warning`: { `contrastText`: `number` = 0; `dark`: `number` = 16088064; `light`: `number` = 16758605; `main`: `number` = 16750592 }  }  }, `Dispatch`<`SetStateAction`<{ `palette`: { `action`: { `active`: `number` = 0; `disabled`: `number` = 0; `disabledBackground`: `number` = 0; `focus`: `number` = 0; `hover`: `number` = 0; `selected`: `number` = 0 } ; `background`: { `default`: `number` = 16448250; `paper`: `number` = 10066329 } ; `common`: { `black`: `number` = 0; `white`: `number` = 16777215 } ; `divider`: `number` = 0x0B0B0B; `error`: { `contrastText`: `number` = 16777215; `dark`: `number` = 13840175; `light`: `number` = 15037299; `main`: `number` = 16007990 } ; `grey`: { `100`: `number` = 16119285; `200`: `number` = 15658734; `300`: `number` = 14737632; `400`: `number` = 12434877; `50`: `number` = 16448250; `500`: `number` = 10395294; `600`: `number` = 7697781; `700`: `number` = 6381921; `800`: `number` = 4342338; `900`: `number` = 2171169; `A100`: `number` = 14013909; `A200`: `number` = 11184810; `A400`: `number` = 3158064; `A700`: `number` = 6381921 } ; `info`: { `contrastText`: `number` = 16777215; `dark`: `number` = 1668818; `light`: `number` = 6600182; `main`: `number` = 2201331 } ; `primary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 3162015; `light`: `number` = 7964363; `main`: `number` = 4149685 } ; `secondary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 12915042; `light`: `number` = 16728193; `main`: `number` = 16056407 } ; `success`: { `contrastText`: `number` = 0; `dark`: `number` = 3706428; `light`: `number` = 8505220; `main`: `number` = 5025616 } ; `text`: { `disabled`: `number` = 0x0B0B0B; `primary`: `number` = 0x0B0B0B; `secondary`: `number` = 0x0B0B0B } ; `warning`: { `contrastText`: `number` = 0; `dark`: `number` = 16088064; `light`: `number` = 16758605; `main`: `number` = 16750592 }  }  }\>\>]\> = `Context`

#### Defined in

[core/theme/index.ts:171](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L171)

## Functions

### ThemeProvider

▸ `Const` **ThemeProvider**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ProviderProps`<{ `palette`: { `action`: { `active`: `number` = 0; `disabled`: `number` = 0; `disabledBackground`: `number` = 0; `focus`: `number` = 0; `hover`: `number` = 0; `selected`: `number` = 0 } ; `background`: { `default`: `number` = 16448250; `paper`: `number` = 10066329 } ; `common`: { `black`: `number` = 0; `white`: `number` = 16777215 } ; `divider`: `number` = 0x0B0B0B; `error`: { `contrastText`: `number` = 16777215; `dark`: `number` = 13840175; `light`: `number` = 15037299; `main`: `number` = 16007990 } ; `grey`: { `100`: `number` = 16119285; `200`: `number` = 15658734; `300`: `number` = 14737632; `400`: `number` = 12434877; `50`: `number` = 16448250; `500`: `number` = 10395294; `600`: `number` = 7697781; `700`: `number` = 6381921; `800`: `number` = 4342338; `900`: `number` = 2171169; `A100`: `number` = 14013909; `A200`: `number` = 11184810; `A400`: `number` = 3158064; `A700`: `number` = 6381921 } ; `info`: { `contrastText`: `number` = 16777215; `dark`: `number` = 1668818; `light`: `number` = 6600182; `main`: `number` = 2201331 } ; `primary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 3162015; `light`: `number` = 7964363; `main`: `number` = 4149685 } ; `secondary`: { `contrastText`: `number` = 16777215; `dark`: `number` = 12915042; `light`: `number` = 16728193; `main`: `number` = 16056407 } ; `success`: { `contrastText`: `number` = 0; `dark`: `number` = 3706428; `light`: `number` = 8505220; `main`: `number` = 5025616 } ; `text`: { `disabled`: `number` = 0x0B0B0B; `primary`: `number` = 0x0B0B0B; `secondary`: `number` = 0x0B0B0B } ; `warning`: { `contrastText`: `number` = 0; `dark`: `number` = 16088064; `light`: `number` = 16758605; `main`: `number` = 16750592 }  }  }\> |

#### Returns

`Element`

#### Defined in

[core/theme/index.ts:172](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L172)

___

### useTheme

▸ `Const` **useTheme**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `palette` | `Object` |
| `palette.action` | `Object` |
| `palette.action.active` | `number` |
| `palette.action.disabled` | `number` |
| `palette.action.disabledBackground` | `number` |
| `palette.action.focus` | `number` |
| `palette.action.hover` | `number` |
| `palette.action.selected` | `number` |
| `palette.background` | `Object` |
| `palette.background.default` | `number` |
| `palette.background.paper` | `number` |
| `palette.common` | `Object` |
| `palette.common.black` | `number` |
| `palette.common.white` | `number` |
| `palette.divider` | `number` |
| `palette.error` | `Object` |
| `palette.error.contrastText` | `number` |
| `palette.error.dark` | `number` |
| `palette.error.light` | `number` |
| `palette.error.main` | `number` |
| `palette.grey` | `Object` |
| `palette.grey.100` | `number` |
| `palette.grey.200` | `number` |
| `palette.grey.300` | `number` |
| `palette.grey.400` | `number` |
| `palette.grey.50` | `number` |
| `palette.grey.500` | `number` |
| `palette.grey.600` | `number` |
| `palette.grey.700` | `number` |
| `palette.grey.800` | `number` |
| `palette.grey.900` | `number` |
| `palette.grey.A100` | `number` |
| `palette.grey.A200` | `number` |
| `palette.grey.A400` | `number` |
| `palette.grey.A700` | `number` |
| `palette.info` | `Object` |
| `palette.info.contrastText` | `number` |
| `palette.info.dark` | `number` |
| `palette.info.light` | `number` |
| `palette.info.main` | `number` |
| `palette.primary` | `Object` |
| `palette.primary.contrastText` | `number` |
| `palette.primary.dark` | `number` |
| `palette.primary.light` | `number` |
| `palette.primary.main` | `number` |
| `palette.secondary` | `Object` |
| `palette.secondary.contrastText` | `number` |
| `palette.secondary.dark` | `number` |
| `palette.secondary.light` | `number` |
| `palette.secondary.main` | `number` |
| `palette.success` | `Object` |
| `palette.success.contrastText` | `number` |
| `palette.success.dark` | `number` |
| `palette.success.light` | `number` |
| `palette.success.main` | `number` |
| `palette.text` | `Object` |
| `palette.text.disabled` | `number` |
| `palette.text.primary` | `number` |
| `palette.text.secondary` | `number` |
| `palette.warning` | `Object` |
| `palette.warning.contrastText` | `number` |
| `palette.warning.dark` | `number` |
| `palette.warning.light` | `number` |
| `palette.warning.main` | `number` |

#### Defined in

[core/theme/index.ts:173](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/core/theme/index.ts#L173)
