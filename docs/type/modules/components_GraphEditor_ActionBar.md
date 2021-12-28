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

[components/GraphEditor/ActionBar/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/ActionBar/index.tsx#L35)

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

[components/GraphEditor/ActionBar/index.tsx:53](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/ActionBar/index.tsx#L53)

## Variables

### ActionBar

• **ActionBar**: `FC`<[`ActionBarProps`](components_GraphEditor_ActionBar.md#actionbarprops)\>

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:465](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/GraphEditor/ActionBar/index.tsx#L465)
