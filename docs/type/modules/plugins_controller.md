[perfect-graph](../README.md) / [Modules](../modules.md) / plugins/controller

# Module: plugins/controller

## Table of contents

### Functions

- [useController](plugins_controller.md#usecontroller)

## Functions

### useController

▸ `Const` **useController**(`useControllerData`, `_graphEditorRef?`): (`Pick`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\> \| { `onEvent`: (`eventInfo`: [`EventInfo`](type.md#eventinfo)) => `void` ; `update`: (`updater`: `UpdateFunction`) => `void`  })[]

Graph Editor Controller. There are events handlers for the graph editor. It return the changed props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `useControllerData` | `Partial`<[`ControllerState`](type.md#controllerstate)\> |
| `_graphEditorRef?` | `MutableRefObject`<[`GraphEditorRef`](type.md#grapheditorref)\> |

#### Returns

(`Pick`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\> \| { `onEvent`: (`eventInfo`: [`EventInfo`](type.md#eventinfo)) => `void` ; `update`: (`updater`: `UpdateFunction`) => `void`  })[]

#### Defined in

[src/plugins/controller/index.tsx:59](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/plugins/controller/index.tsx#L59)
