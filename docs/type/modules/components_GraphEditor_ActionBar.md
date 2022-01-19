[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/ActionBar

# Module: components/GraphEditor/ActionBar

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_ActionBar._internal_.md)

### Type aliases

- [ActionBarConfig](components_GraphEditor_ActionBar#actionbarconfig)
- [ActionBarProps](components_GraphEditor_ActionBar#actionbarprops)

### Variables

- [ActionBar](components_GraphEditor_ActionBar#actionbar)

## Type aliases

### ActionBarConfig

Ƭ **ActionBarConfig**: `Object`

#### Type declaration

| Name                | Type                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `actions?`          | [`Actions`](components_GraphEditor_ActionBar._internal_#actions)          |
| `autoOpen?`         | `boolean`                                                                 |
| `eventRecording?`   | `boolean`                                                                 |
| `isOpen?`           | `boolean`                                                                 |
| `left?`             | `React.FC`                                                                |
| `recording?`        | `boolean`                                                                 |
| `right?`            | `React.FC`                                                                |
| `theming?`          | `Object`                                                                  |
| `theming.options?`  | { `name`: `string` ; `value`: `string` }[]                                |
| `theming.value?`    | `string`                                                                  |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/ActionBar/index.tsx#L34)

---

### ActionBarProps

Ƭ **ActionBarProps**: `Object`

#### Type declaration

| Name                | Type                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `actions?`          | [`Actions`](components_GraphEditor_ActionBar._internal_#actions)          |
| `autoOpen?`         | `boolean`                                                                 |
| `eventRecording?`   | `boolean`                                                                 |
| `isOpen?`           | `boolean`                                                                 |
| `left?`             | `React.FC`                                                                |
| `recording?`        | `boolean`                                                                 |
| `right?`            | `React.FC`                                                                |
| `theming?`          | `Object`                                                                  |
| `theming.options?`  | { `name`: `string` ; `value`: `string` }[]                                |
| `theming.value?`    | `string`                                                                  |
| `onAction`          | (`action`: { `type`: `string` ; `value?`: `any` }) => `void`              |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/ActionBar/index.tsx#L52)

## Variables

### ActionBar

• **ActionBar**: `FC`<[`ActionBarProps`](components_GraphEditor_ActionBar#actionbarprops)\>

#### Defined in

[components/GraphEditor/ActionBar/index.tsx:464](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/ActionBar/index.tsx#L464)
