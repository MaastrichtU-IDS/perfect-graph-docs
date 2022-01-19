[perfect-graph](../README.md) / [Modules](../modules.md) / [plugins/controller](plugins_controller.md) / <internal\>

# Namespace: <internal\>

[plugins/controller](plugins_controller.md).<internal/>

## Table of contents

### Type aliases

- [ControllerState](plugins_controller._internal_#controllerstate)
- [UpdateFunction](plugins_controller._internal_#updatefunction)

## Type aliases

### ControllerState

Ƭ **ControllerState**: { `onEvent`: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo) & { `graphEditor`: [`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref) }, `draft`: [`ControllerState`](plugins_controller._internal_#controllerstate)) => `boolean` \| `void` } & `Pick`<[`GraphEditorProps`](components_GraphEditor#grapheditorprops), `"nodes"` \| `"edges"` \| `"mode"` \| `"selectedElementIds"` \| `"actionBar"` \| `"dataBar"` \| `"settingsBar"` \| `"graphConfig"` \| `"playlists"` \| `"isLoading"` \| `"modals"` \| `"events"` \| `"preferencesModal"` \| `"isFocusMode"` \| `"previousDataList"` \| `"label"` \| `"networkStatistics"`\>

#### Defined in

[type/index.ts:761](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L761)

---

### UpdateFunction

Ƭ **UpdateFunction**: (`draft`: [`ControllerState`](plugins_controller._internal_#controllerstate), `config`: { `graphEditorRef`: `React.MutableRefObject`<[`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref)\> }) => `void`

#### Type declaration

▸ (`draft`, `config`): `void`

##### Parameters

| Name                    | Type                                                                                            |
| :---------------------- | :---------------------------------------------------------------------------------------------- |
| `draft`                 | [`ControllerState`](plugins_controller._internal_#controllerstate)                              |
| `config`                | `Object`                                                                                        |
| `config.graphEditorRef` | `React.MutableRefObject`<[`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref)\> |

##### Returns

`void`

#### Defined in

[plugins/controller/index.tsx:78](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/plugins/controller/index.tsx#L78)
