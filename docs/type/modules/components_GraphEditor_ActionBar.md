[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/ActionBar

# Module: components/GraphEditor/ActionBar

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_ActionBar._internal_.md)

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
| `actions?` | [`Actions`](components_GraphEditor_ActionBar._internal_.md#actions) |
| `autoOpen?` | `boolean` |
| `eventRecording?` | `boolean` |
| `isOpen?` | `boolean` |
| `left?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `recording?` | `boolean` |
| `right?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `theming?` | `Object` |
| `theming.options?` | { `name`: `string` ; `value`: `string`  }[] |
| `theming.value?` | `string` |
| `renderMoreAction?` | () => [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\> |

#### Defined in

[src/components/GraphEditor/ActionBar/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/ActionBar/index.tsx#L35)

___

### ActionBarProps

Ƭ **ActionBarProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions?` | [`Actions`](components_GraphEditor_ActionBar._internal_.md#actions) |
| `autoOpen?` | `boolean` |
| `eventRecording?` | `boolean` |
| `isOpen?` | `boolean` |
| `left?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `recording?` | `boolean` |
| `right?` | [`FC`](components_ClusterNodeContainer._internal_.md#fc) |
| `theming?` | `Object` |
| `theming.options?` | { `name`: `string` ; `value`: `string`  }[] |
| `theming.value?` | `string` |
| `onAction` | (`action`: { `type`: `string` ; `value?`: `any`  }) => `void` |
| `renderMoreAction?` | () => [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\> |

#### Defined in

[src/components/GraphEditor/ActionBar/index.tsx:53](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/ActionBar/index.tsx#L53)

## Variables

### ActionBar

• **ActionBar**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`ActionBarProps`](components_GraphEditor_ActionBar.md#actionbarprops)\>

#### Defined in

[src/components/GraphEditor/ActionBar/index.tsx:465](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/ActionBar/index.tsx#L465)
