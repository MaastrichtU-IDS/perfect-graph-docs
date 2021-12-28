[perfect-graph](../README.md) / [Modules](../modules.md) / plugins/controller

# Module: plugins/controller

## Table of contents

### Namespaces

- [&lt;internal\&gt;](plugins_controller._internal_.md)

### Functions

- [useController](plugins_controller.md#usecontroller)

## Functions

### useController

▸ `Const` **useController**(`useControllerData`, `_graphEditorRef?`): ([`Pick`](components_ClusterNodeContainer._internal_.md#pick)<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\> \| { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)) => `void` ; `update`: (`updater`: [`UpdateFunction`](plugins_controller._internal_.md#updatefunction)) => `void`  })[]

Graph Editor Controller. There are events handlers for the graph editor. It return the changed props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `useControllerData` | [`Partial`](components_ClusterNodeContainer._internal_.md#partial)<[`ControllerState`](plugins_controller._internal_.md#controllerstate)\> |
| `_graphEditorRef?` | [`MutableRefObject`](../interfaces/components_ClusterNodeContainer._internal_.MutableRefObject.md)<[`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref)\> |

#### Returns

([`Pick`](components_ClusterNodeContainer._internal_.md#pick)<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"onEvent"`` \| ``"graphConfig"`` \| ``"eventHistory"``\> \| { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)) => `void` ; `update`: (`updater`: [`UpdateFunction`](plugins_controller._internal_.md#updatefunction)) => `void`  })[]

#### Defined in

[src/plugins/controller/index.tsx:59](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/controller/index.tsx#L59)
