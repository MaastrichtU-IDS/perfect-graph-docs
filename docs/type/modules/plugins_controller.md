[perfect-graph](../README.md) / [Modules](../modules.md) / plugins/controller

# Module: plugins/controller

## Table of contents

### Namespaces

- [&lt;internal\&gt;](plugins_controller._internal_.md)

### Functions

- [useController](plugins_controller#usecontroller)

## Functions

### useController

▸ `Const` **useController**(`useControllerData`, `_graphEditorRef?`): readonly [`Pick`<[`GraphEditorProps`](components_GraphEditor#grapheditorprops), `"nodes"` \| `"edges"` \| `"onEvent"` \| `"graphConfig"` \| `"eventHistory"`\>, { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)) => `void` ; `update`: (`updater`: [`UpdateFunction`](plugins_controller._internal_#updatefunction)) => `void` }]

Graph Editor Controller. There are events handlers for the graph editor. It return the changed props.

#### Parameters

| Name                | Type                                                                                      |
| :------------------ | :---------------------------------------------------------------------------------------- |
| `useControllerData` | `Partial`<[`ControllerState`](plugins_controller._internal_#controllerstate)\>            |
| `_graphEditorRef?`  | `MutableRefObject`<[`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref)\> |

#### Returns

readonly [`Pick`<[`GraphEditorProps`](components_GraphEditor#grapheditorprops), `"nodes"` \| `"edges"` \| `"onEvent"` \| `"graphConfig"` \| `"eventHistory"`\>, { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)) => `void` ; `update`: (`updater`: [`UpdateFunction`](plugins_controller._internal_#updatefunction)) => `void` }]

#### Defined in

[plugins/controller/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/plugins/controller/index.tsx#L52)
