[perfect-graph](../README.md) / [Modules](../modules.md) / [plugins/controller](plugins_controller.md) / <internal\>

# Namespace: <internal\>

[plugins/controller](plugins_controller.md).<internal>

## Table of contents

### Type aliases

- [ControllerState](plugins_controller._internal_.md#controllerstate)
- [UpdateFunction](plugins_controller._internal_.md#updatefunction)

## Type aliases

### ControllerState

Ƭ **ControllerState**: { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo) & { `graphEditor`: [`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref)  }, `draft`: [`ControllerState`](plugins_controller._internal_.md#controllerstate)) => `boolean` \| `void`  } & [`Pick`](components_ClusterNodeContainer._internal_.md#pick)<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"mode"`` \| ``"selectedElementIds"`` \| ``"actionBar"`` \| ``"dataBar"`` \| ``"settingsBar"`` \| ``"graphConfig"`` \| ``"playlists"`` \| ``"isLoading"`` \| ``"modals"`` \| ``"events"`` \| ``"preferencesModal"`` \| ``"isFocusMode"`` \| ``"previousDataList"`` \| ``"label"``\>

#### Defined in

[src/type/index.ts:757](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L757)

___

### UpdateFunction

Ƭ **UpdateFunction**: (`draft`: [`ControllerState`](plugins_controller._internal_.md#controllerstate), `config`: { `graphEditorRef`: [`MutableRefObject`](../interfaces/components_ClusterNodeContainer._internal_.MutableRefObject.md)<[`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref)\>  }) => `void`

#### Type declaration

▸ (`draft`, `config`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `draft` | [`ControllerState`](plugins_controller._internal_.md#controllerstate) |
| `config` | `Object` |
| `config.graphEditorRef` | [`MutableRefObject`](../interfaces/components_ClusterNodeContainer._internal_.MutableRefObject.md)<[`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref)\> |

##### Returns

`void`

#### Defined in

[src/plugins/controller/index.tsx:85](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/controller/index.tsx#L85)
