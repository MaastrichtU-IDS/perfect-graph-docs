[perfect-graph](../README.md) / [Modules](../modules.md) / constants

# Module: constants

## Table of contents

### Variables

- [CYTOSCAPE\_EVENT](constants.md#cytoscape_event)
- [DATA\_TYPE](constants.md#data_type)
- [DATA\_TYPE\_BY\_INDEX](constants.md#data_type_by_index)
- [DEFAULT\_EDGE\_CONFIG](constants.md#default_edge_config)
- [DEFAULT\_NODE\_CONFIG](constants.md#default_node_config)
- [EDGE\_CONTAINER\_Z\_INDEX](constants.md#edge_container_z_index)
- [EDGE\_LINE\_Z\_INDEX](constants.md#edge_line_z_index)
- [EDITOR\_MODE](constants.md#editor_mode)
- [ELEMENT\_DATA\_FIELDS](constants.md#element_data_fields)
- [ELEMENT\_TYPE](constants.md#element_type)
- [EVENT](constants.md#event)
- [LAYOUT\_NAMES](constants.md#layout_names)
- [MOCK\_DATA](constants.md#mock_data)
- [QUALITY\_LEVEL](constants.md#quality_level)
- [SIDE\_PANEL\_DEFAULT\_HEIGHT](constants.md#side_panel_default_height)
- [SIDE\_PANEL\_DEFAULT\_WIDTH](constants.md#side_panel_default_width)
- [THEME](constants.md#theme)

## Variables

### CYTOSCAPE\_EVENT

• **CYTOSCAPE\_EVENT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | ``"data"`` |
| `mouseout` | ``"mouseout"`` |
| `mouseover` | ``"mouseover"`` |
| `position` | ``"position"`` |
| `select` | ``"select"`` |
| `selectEdge` | ``"selectEdge"`` |
| `selectNode` | ``"selectNode"`` |
| `unselect` | ``"unselect"`` |
| `unselectEdge` | ``"unselectEdge"`` |
| `unselectNode` | ``"unselectNode"`` |

#### Defined in

[src/constants/index.tsx:165](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L165)

___

### DATA\_TYPE

• **DATA\_TYPE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | ``"id"`` |
| `number` | ``"number"`` |
| `string` | ``"string"`` |
| `unknown` | ``"unknown"`` |

#### Defined in

[src/constants/index.tsx:114](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L114)

___

### DATA\_TYPE\_BY\_INDEX

• **DATA\_TYPE\_BY\_INDEX**: readonly [``"string"``, ``"number"``, ``"id"``, ``"unknown"``]

#### Defined in

[src/constants/index.tsx:121](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L121)

___

### DEFAULT\_EDGE\_CONFIG

• **DEFAULT\_EDGE\_CONFIG**: [`EdgeConfig`](type.md#edgeconfig)

#### Defined in

[src/constants/index.tsx:229](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L229)

___

### DEFAULT\_NODE\_CONFIG

• **DEFAULT\_NODE\_CONFIG**: [`NodeConfig`](type.md#nodeconfig)

#### Defined in

[src/constants/index.tsx:200](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L200)

___

### EDGE\_CONTAINER\_Z\_INDEX

• **EDGE\_CONTAINER\_Z\_INDEX**: ``-99``

#### Defined in

[src/constants/index.tsx:178](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L178)

___

### EDGE\_LINE\_Z\_INDEX

• **EDGE\_LINE\_Z\_INDEX**: ``-100``

#### Defined in

[src/constants/index.tsx:177](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L177)

___

### EDITOR\_MODE

• **EDITOR\_MODE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADD` | ``"ADD"`` |
| `ADD_CLUSTER_ELEMENT` | ``"ADD_CLUSTER_ELEMENT"`` |
| `CONTINUES_ADD` | ``"CONTINUES_ADD"`` |
| `CONTINUES_DELETE` | ``"CONTINUES_DELETE"`` |
| `DEFAULT` | ``"DEFAULT"`` |
| `DELETE` | ``"DELETE"`` |

#### Defined in

[src/constants/index.tsx:105](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L105)

___

### ELEMENT\_DATA\_FIELDS

• **ELEMENT\_DATA\_FIELDS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CONTEXT` | ``"__context"`` |
| `DATA` | ``"data"`` |
| `ID` | ``"id"`` |
| `POSITION` | ``"position"`` |

#### Defined in

[src/constants/index.tsx:98](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L98)

___

### ELEMENT\_TYPE

• **ELEMENT\_TYPE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EDGE` | ``"EDGE"`` |
| `NODE` | ``"NODE"`` |

#### Defined in

[src/constants/index.tsx:11](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L11)

___

### EVENT

• **EVENT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADD_CLUSTER_ELEMENT` | ``"ADD_CLUSTER_ELEMENT"`` |
| `ADD_DATA` | ``"ADD_DATA"`` |
| `ADD_DATA_ADDITIONAL` | ``"ADD_DATA_ADDITIONAL"`` |
| `ADD_DATA_VALUE` | ``"ADD_DATA_VALUE"`` |
| `ADD_DATA_VALUE_ADDITIONAL` | ``"ADD_DATA_VALUE_ADDITIONAL"`` |
| `ADD_EDGE` | ``"ADD_EDGE"`` |
| `ADD_NODE` | ``"ADD_NODE"`` |
| `APPLY_EVENTS` | ``"APPLY_EVENTS"`` |
| `APPLY_RECORDED_EVENTS` | ``"APPLY_RECORDED_EVENTS"`` |
| `BOX_SELECTION` | ``"BOX_SELECTION"`` |
| `CALCULATE_GLOBAL_NETWORK_STATISTICS` | ``"CALCULATE_GLOBAL_NETWORK_STATISTICS"`` |
| `CALCULATE_LOCAL_NETWORK_STATISTICS` | ``"CALCULATE_LOCAL_NETWORK_STATISTICS"`` |
| `CHANGE_CLUSTER_VISIBILITY` | ``"CHANGE_CLUSTER_VISIBILITY"`` |
| `CHANGE_DATA_NAME` | ``"CHANGE_DATA_NAME"`` |
| `CHANGE_DATA_NAME_ADDITIONAL` | ``"CHANGE_DATA_NAME_ADDITIONAL"`` |
| `CHANGE_DATA_TYPE` | ``"CHANGE_DATA_TYPE"`` |
| `CHANGE_DATA_VALUE` | ``"CHANGE_DATA_VALUE"`` |
| `CHANGE_DATA_VALUE_ADDITIONAL` | ``"CHANGE_DATA_VALUE_ADDITIONAL"`` |
| `CHANGE_THEME` | ``"CHANGE_THEME"`` |
| `CLEAR_NODE_GLOBAL_LABEL` | ``"CLEAR_NODE_GLOBAL_LABEL"`` |
| `CLEAR_NODE_LOCAL_LABEL` | ``"CLEAR_NODE_LOCAL_LABEL"`` |
| `CLOSE_MODAL` | ``"CLOSE_MODAL"`` |
| `CREATE_CLUSTER` | ``"CREATE_CLUSTER"`` |
| `CREATE_CLUSTER_BY_ALGORITHM` | ``"CREATE_CLUSTER_BY_ALGORITHM"`` |
| `CREATE_CLUSTER_BY_ALGORITHM_FORM_SUBMIT` | ``"CREATE_CLUSTER_BY_ALGORITHM_FORM_SUBMIT"`` |
| `CREATE_CLUSTER_FORM_SUBMIT` | ``"CREATE_CLUSTER_FORM_SUBMIT"`` |
| `CREATE_PLAYLIST` | ``"CREATE_PLAYLIST"`` |
| `DATA_VALUE_DOWN` | ``"DATA_VALUE_DOWN"`` |
| `DATA_VALUE_UP` | ``"DATA_VALUE_UP"`` |
| `DEFOCUS` | ``"DEFOCUS"`` |
| `DELETE_CLUSTER` | ``"DELETE_CLUSTER"`` |
| `DELETE_CLUSTER_ELEMENT` | ``"DELETE_CLUSTER_ELEMENT"`` |
| `DELETE_DATA` | ``"DELETE_DATA"`` |
| `DELETE_DATA_ADDITIONAL` | ``"DELETE_DATA_ADDITIONAL"`` |
| `DELETE_DATA_VALUE` | ``"DELETE_DATA_VALUE"`` |
| `DELETE_DATA_VALUE_ADDITIONAL` | ``"DELETE_DATA_VALUE_ADDITIONAL"`` |
| `DELETE_EDGE` | ``"DELETE_EDGE"`` |
| `DELETE_HISTORY_ITEM` | ``"DELETE_HISTORY_ITEM"`` |
| `DELETE_NODE` | ``"DELETE_NODE"`` |
| `DELETE_PLAYLIST` | ``"DELETE_PLAYLIST"`` |
| `ELEMENT_SELECTED` | ``"ELEMENT_SELECTED"`` |
| `ELEMENT_SELECTED_WITH_ZOOM` | ``"ELEMENT_SELECTED_WITH_ZOOM"`` |
| `ELEMENT_SETTINGS` | ``"ELEMENT_SETTINGS"`` |
| `ELEMENT_SETTINGS_FORM_SUBMIT` | ``"ELEMENT_SETTINGS_FORM_SUBMIT"`` |
| `EXPORT_DATA` | ``"EXPORT_DATA"`` |
| `FOCUS` | ``"FOCUS"`` |
| `IMPORT_DATA` | ``"IMPORT_DATA"`` |
| `IMPORT_EVENTS` | ``"IMPORT_EVENTS"`` |
| `LAYOUT_ANIMATION_DURATION_CHANGED` | ``"LAYOUT_ANIMATION_DURATION_CHANGED"`` |
| `LAYOUT_CHANGED` | ``"LAYOUT_CHANGED"`` |
| `MAKE_DATA_LABEL` | ``"MAKE_DATA_LABEL"`` |
| `MAKE_DATA_LABEL_FIRST` | ``"MAKE_DATA_LABEL_FIRST"`` |
| `MAKE_GLOBAL_DATA_LABEL` | ``"MAKE_GLOBAL_DATA_LABEL"`` |
| `MAKE_GLOBAL_DATA_LABEL_FIRST` | ``"MAKE_GLOBAL_DATA_LABEL_FIRST"`` |
| `MODE_CHANGED` | ``"MODE_CHANGED"`` |
| `PLAY_EVENTS` | ``"PLAY_EVENTS"`` |
| `PREFERENCES_FORM_SUBMIT` | ``"PREFERENCES_FORM_SUBMIT"`` |
| `PRESS_ADD_CLUSTER_ELEMENT` | ``"PRESS_ADD_CLUSTER_ELEMENT"`` |
| `PRESS_BACKGROUND` | ``"PRESS_BACKGROUND"`` |
| `RECORD_FINISHED` | ``"RECORD_FINISHED"`` |
| `REDO_EVENT` | ``"REDO_EVENT"`` |
| `REORDER_CLUSTER` | ``"REORDER_CLUSTER"`` |
| `REORDER_HISTORY_ITEM` | ``"REORDER_HISTORY_ITEM"`` |
| `REORDER_PLAYLIST` | ``"REORDER_PLAYLIST"`` |
| `SELECT_CLUSTER` | ``"SELECT_CLUSTER"`` |
| `SETTINGS_FORM_CHANGED` | ``"SETTINGS_FORM_CHANGED"`` |
| `SET_NODE_GLOBAL_LABEL` | ``"SET_NODE_GLOBAL_LABEL"`` |
| `SET_NODE_LOCAL_LABEL` | ``"SET_NODE_LOCAL_LABEL"`` |
| `SET_POSITIONS_IMPERATIVELY` | ``"SET_POSITIONS_IMPERATIVELY"`` |
| `TOGGLE_ACTION_BAR` | ``"TOGGLE_ACTION_BAR"`` |
| `TOGGLE_DATA_BAR` | ``"TOGGLE_DATA_BAR"`` |
| `TOGGLE_FILTER_BAR` | ``"TOGGLE_FILTER_BAR"`` |
| `TOGGLE_NODE_GLOBAL_LABEL_FIRST` | ``"TOGGLE_NODE_GLOBAL_LABEL_FIRST"`` |
| `TOGGLE_PREFERENCES_MODAL` | ``"TOGGLE_PREFERENCES_MODAL"`` |
| `TOGGLE_RECORD` | ``"TOGGLE_RECORD"`` |
| `TOGGLE_RECORD_ACTIONS` | ``"TOGGLE_RECORD_ACTIONS"`` |
| `TOGGLE_RECORD_EVENTS` | ``"TOGGLE_RECORD_EVENTS"`` |
| `UNDO_EVENT` | ``"UNDO_EVENT"`` |
| `UPDATE_DATA` | ``"UPDATE_DATA"`` |

#### Defined in

[src/constants/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L16)

___

### LAYOUT\_NAMES

• **LAYOUT\_NAMES**: `string`[]

#### Defined in

[src/constants/index.tsx:128](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L128)

___

### MOCK\_DATA

• **MOCK\_DATA**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | [`EventInfo`](type.md#eventinfo)[] |

#### Defined in

[src/constants/index.tsx:180](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L180)

___

### QUALITY\_LEVEL

• **QUALITY\_LEVEL**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `HIGH` | ``2`` |
| `LOW` | ``0`` |
| `MEDIUM` | ``1`` |

#### Defined in

[src/constants/index.tsx:194](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L194)

___

### SIDE\_PANEL\_DEFAULT\_HEIGHT

• **SIDE\_PANEL\_DEFAULT\_HEIGHT**: ``530``

#### Defined in

[src/constants/index.tsx:133](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L133)

___

### SIDE\_PANEL\_DEFAULT\_WIDTH

• **SIDE\_PANEL\_DEFAULT\_WIDTH**: ``260``

#### Defined in

[src/constants/index.tsx:132](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L132)

___

### THEME

• **THEME**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundColor` | `string` |
| `fillColor` | `string` |

#### Defined in

[src/constants/index.tsx:6](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/constants/index.tsx#L6)
