[perfect-graph](../README.md) / [Modules](../modules.md) / plugins/controller

# Module: plugins/controller

## Table of contents

### Functions

- [useController](plugins_controller.md#usecontroller)

## Functions

### useController

▸ `Const` **useController**(`useControllerData`, `_graphEditorRef?`): readonly [`Pick`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\>, { `onEvent`: (`eventInfo`: `EventInfo`) => `void` ; `update`: (`updater`: `UpdateFunction`) => `void`  }]

Graph Editor Controller. There are events handlers for the graph editor. It return the changed props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `useControllerData` | `Partial`<`ControllerState`\> |
| `_graphEditorRef?` | `MutableRefObject`<`GraphEditorRef`\> |

#### Returns

readonly [`Pick`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\>, { `onEvent`: (`eventInfo`: `EventInfo`) => `void` ; `update`: (`updater`: `UpdateFunction`) => `void`  }]

#### Defined in

[plugins/controller/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/plugins/controller/index.tsx#L52)
