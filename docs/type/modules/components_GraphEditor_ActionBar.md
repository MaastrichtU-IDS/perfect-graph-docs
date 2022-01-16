[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/ActionBar

# Module: components/GraphEditor/ActionBar

## Table of contents

### Type aliases

- [ActionBarConfig](components_GraphEditor_ActionBar.md#actionbarconfig)
- [ActionBarProps](components_GraphEditor_ActionBar.md#actionbarprops)

### Variables

- [ActionBar](components_GraphEditor_ActionBar.md#actionbar)

## Type aliases

### ActionBarConfig

Ƭ **ActionBarConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions?` | `Actions` |
| `autoOpen?` | `boolean` |
| `eventRecording?` | `boolean` |
| `isOpen?` | `boolean` |
| `left?` | `React.FC` |
| `recording?` | `boolean` |
| `right?` | `React.FC` |
| `theming?` | `Object` |
| `theming.options?` | { `name`: `string` ; `value`: `string`  }[] |
| `theming.value?` | `string` |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/ActionBar/index.tsx#L34)

___

### ActionBarProps

Ƭ **ActionBarProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions?` | `Actions` |
| `autoOpen?` | `boolean` |
| `eventRecording?` | `boolean` |
| `isOpen?` | `boolean` |
| `left?` | `React.FC` |
| `recording?` | `boolean` |
| `right?` | `React.FC` |
| `theming?` | `Object` |
| `theming.options?` | { `name`: `string` ; `value`: `string`  }[] |
| `theming.value?` | `string` |
| `onAction` | (`action`: { `type`: `string` ; `value?`: `any`  }) => `void` |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/ActionBar/index.tsx#L52)

## Variables

### ActionBar

• **ActionBar**: `FC`<[`ActionBarProps`](components_GraphEditor_ActionBar.md#actionbarprops)\>

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:464](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/ActionBar/index.tsx#L464)
