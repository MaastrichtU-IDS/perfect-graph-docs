[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](components_GraphEditor_DataEditor.md) / <internal\>

# Namespace: <internal\>

[components/GraphEditor/DataEditor](components_GraphEditor_DataEditor.md).<internal/>

## Table of contents

### Type aliases

- [AdditionalDataItem](components_GraphEditor_DataEditor._internal_#additionaldataitem)
- [DataEditorProps](components_GraphEditor_DataEditor._internal_#dataeditorprops)
- [DataItem](components_GraphEditor_DataEditor._internal_#dataitem)
- [ElementData](components_GraphEditor_DataEditor._internal_#elementdata)
- [EventInfo](components_GraphEditor_DataEditor._internal_#eventinfo)
- [EventType](components_GraphEditor_DataEditor._internal_#eventtype)
- [EventType](components_GraphEditor_DataEditor._internal_#eventtype)
- [OnEventLite](components_GraphEditor_DataEditor._internal_#oneventlite)
- [RDFType](components_GraphEditor_DataEditor._internal_#rdftype)

### Variables

- [DATA_TYPE](components_GraphEditor_DataEditor._internal_#data_type)
- [EVENT](components_GraphEditor_DataEditor._internal_#event)

## Type aliases

### AdditionalDataItem

Ƭ **AdditionalDataItem**: `Object`

#### Type declaration

| Name    | Type                                                              |
| :------ | :---------------------------------------------------------------- |
| `name`  | `string`                                                          |
| `type`  | [`RDFType`](components_GraphEditor_DataEditor._internal_#rdftype) |
| `value` | `string`[]                                                        |

#### Defined in

[type/index.ts:159](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L159)

---

### DataEditorProps

Ƭ **DataEditorProps**: `Object`

#### Type declaration

| Name                  | Type                                                                      |
| :-------------------- | :------------------------------------------------------------------------ |
| `data`                | [`DataItem`](components_GraphEditor_DataEditor._internal_#dataitem)[]     |
| `globalLabel?`        | `string`[] \| `null`                                                      |
| `isGlobalLabelFirst?` | `boolean`                                                                 |
| `localLabel?`         | `string`[] \| `null`                                                      |
| `onEvent`             | [`OnEventLite`](components_GraphEditor_DataEditor._internal_#oneventlite) |
| `style?`              | `BoxProps`[``"style"``]                                                   |

#### Defined in

[components/GraphEditor/DataEditor/DataForm.tsx:8](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataEditor/DataForm.tsx#L8)

---

### DataItem

Ƭ **DataItem**: `Object`

#### Type declaration

| Name          | Type                                                                                      |
| :------------ | :---------------------------------------------------------------------------------------- |
| `additional?` | [`AdditionalDataItem`](components_GraphEditor_DataEditor._internal_#additionaldataitem)[] |
| `name`        | `string`                                                                                  |
| `type`        | [`RDFType`](components_GraphEditor_DataEditor._internal_#rdftype)                         |
| `value`       | `string`[]                                                                                |

#### Defined in

[type/index.ts:165](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L165)

---

### ElementData

Ƭ **ElementData**: [`NodeData`](components_ClusterNodeContainer._internal_#nodedata) \| [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata)

#### Defined in

[type/index.ts:178](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L178)

---

### EventInfo

Ƭ **EventInfo**: `Object`

#### Type declaration

| Name                     | Type                                                                      | Description                                        |
| :----------------------- | :------------------------------------------------------------------------ | :------------------------------------------------- |
| `avoidEventRecording?`   | `boolean`                                                                 | To avoid events being recorded by event recorder   |
| `avoidHistoryRecording?` | `boolean`                                                                 | To avoid events being recorded by history recorder |
| `dataItem?`              | [`DataItem`](components_GraphEditor_DataEditor._internal_#dataitem)       | Event dataItem ; deprecated                        |
| `date`                   | `string`                                                                  | Event date                                         |
| `elementId?`             | `string`                                                                  | Event target element id                            |
| `event?`                 | `Partial`<`PIXI.InteractionEvent`\>                                       | Original event                                     |
| `id`                     | `string`                                                                  | Unique event id                                    |
| `index?`                 | `number`                                                                  | Event index ; deprecated                           |
| `item?`                  | [`ElementData`](components_GraphEditor_DataEditor._internal_#elementdata) | Event target element data                          |
| `payload?`               | `any`                                                                     | Event payload                                      |
| `type`                   | [`EventType`](components_GraphEditor_DataEditor._internal_#eventtype)     | -                                                  |

#### Defined in

[type/index.ts:583](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L583)

---

### EventType

Ƭ **EventType**: keyof typeof [`EVENT`](components_GraphEditor_DataEditor._internal_#event)

#### Defined in

[components/GraphEditor/DataEditor/TripleItem/index.tsx:13](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/DataEditor/TripleItem/index.tsx#L13)

---

### EventType

Ƭ **EventType**: keyof typeof [`EVENT`](components_GraphEditor_DataEditor._internal_#event)

GraphEditor Event Types

#### Defined in

[type/index.ts:153](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L153)

---

### OnEventLite

Ƭ **OnEventLite**: (`eventInfo`: `Omit`<[`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo), `"id"` \| `"date"`\>) => `void`

#### Type declaration

▸ (`eventInfo`): `void`

GraphEditor Lite Event handler

##### Parameters

| Name        | Type                                                                                               |
| :---------- | :------------------------------------------------------------------------------------------------- |
| `eventInfo` | `Omit`<[`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo), `"id"` \| `"date"`\> |

##### Returns

`void`

#### Defined in

[type/index.ts:671](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L671)

---

### RDFType

Ƭ **RDFType**: keyof typeof [`DATA_TYPE`](components_GraphEditor_DataEditor._internal_#data_type)

#### Defined in

[type/index.ts:364](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L364)

## Variables

### DATA_TYPE

• **DATA_TYPE**: `Object`

#### Type declaration

| Name      | Type        |
| :-------- | :---------- |
| `id`      | `"id"`      |
| `number`  | `"number"`  |
| `string`  | `"string"`  |
| `unknown` | `"unknown"` |

#### Defined in

[constants/index.tsx:119](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/constants/index.tsx#L119)

---

### EVENT

• **EVENT**: `Object`

#### Type declaration

| Name                                      | Type                                        |
| :---------------------------------------- | :------------------------------------------ |
| `ADD_CLUSTER_ELEMENT`                     | `"ADD_CLUSTER_ELEMENT"`                     |
| `ADD_DATA`                                | `"ADD_DATA"`                                |
| `ADD_DATA_ADDITIONAL`                     | `"ADD_DATA_ADDITIONAL"`                     |
| `ADD_DATA_VALUE`                          | `"ADD_DATA_VALUE"`                          |
| `ADD_DATA_VALUE_ADDITIONAL`               | `"ADD_DATA_VALUE_ADDITIONAL"`               |
| `ADD_EDGE`                                | `"ADD_EDGE"`                                |
| `ADD_NODE`                                | `"ADD_NODE"`                                |
| `APPLY_EVENTS`                            | `"APPLY_EVENTS"`                            |
| `APPLY_RECORDED_EVENTS`                   | `"APPLY_RECORDED_EVENTS"`                   |
| `BOX_SELECTION`                           | `"BOX_SELECTION"`                           |
| `CALCULATE_GLOBAL_NETWORK_STATISTICS`     | `"CALCULATE_GLOBAL_NETWORK_STATISTICS"`     |
| `CALCULATE_LOCAL_NETWORK_STATISTICS`      | `"CALCULATE_LOCAL_NETWORK_STATISTICS"`      |
| `CHANGE_CLUSTER_VISIBILITY`               | `"CHANGE_CLUSTER_VISIBILITY"`               |
| `CHANGE_DATA_NAME`                        | `"CHANGE_DATA_NAME"`                        |
| `CHANGE_DATA_NAME_ADDITIONAL`             | `"CHANGE_DATA_NAME_ADDITIONAL"`             |
| `CHANGE_DATA_TYPE`                        | `"CHANGE_DATA_TYPE"`                        |
| `CHANGE_DATA_VALUE`                       | `"CHANGE_DATA_VALUE"`                       |
| `CHANGE_DATA_VALUE_ADDITIONAL`            | `"CHANGE_DATA_VALUE_ADDITIONAL"`            |
| `CHANGE_THEME`                            | `"CHANGE_THEME"`                            |
| `CLEAR_NODE_GLOBAL_LABEL`                 | `"CLEAR_NODE_GLOBAL_LABEL"`                 |
| `CLEAR_NODE_LOCAL_LABEL`                  | `"CLEAR_NODE_LOCAL_LABEL"`                  |
| `CLOSE_MODAL`                             | `"CLOSE_MODAL"`                             |
| `CREATE_CLUSTER`                          | `"CREATE_CLUSTER"`                          |
| `CREATE_CLUSTER_BY_ALGORITHM`             | `"CREATE_CLUSTER_BY_ALGORITHM"`             |
| `CREATE_CLUSTER_BY_ALGORITHM_FORM_CLEAR`  | `"CREATE_CLUSTER_BY_ALGORITHM_FORM_CLEAR"`  |
| `CREATE_CLUSTER_BY_ALGORITHM_FORM_SUBMIT` | `"CREATE_CLUSTER_BY_ALGORITHM_FORM_SUBMIT"` |
| `CREATE_CLUSTER_FORM_SUBMIT`              | `"CREATE_CLUSTER_FORM_SUBMIT"`              |
| `CREATE_PLAYLIST`                         | `"CREATE_PLAYLIST"`                         |
| `DATA_VALUE_DOWN`                         | `"DATA_VALUE_DOWN"`                         |
| `DATA_VALUE_UP`                           | `"DATA_VALUE_UP"`                           |
| `DEFOCUS`                                 | `"DEFOCUS"`                                 |
| `DELETE_CLUSTER`                          | `"DELETE_CLUSTER"`                          |
| `DELETE_CLUSTER_ELEMENT`                  | `"DELETE_CLUSTER_ELEMENT"`                  |
| `DELETE_DATA`                             | `"DELETE_DATA"`                             |
| `DELETE_DATA_ADDITIONAL`                  | `"DELETE_DATA_ADDITIONAL"`                  |
| `DELETE_DATA_VALUE`                       | `"DELETE_DATA_VALUE"`                       |
| `DELETE_DATA_VALUE_ADDITIONAL`            | `"DELETE_DATA_VALUE_ADDITIONAL"`            |
| `DELETE_EDGE`                             | `"DELETE_EDGE"`                             |
| `DELETE_HISTORY_ITEM`                     | `"DELETE_HISTORY_ITEM"`                     |
| `DELETE_NODE`                             | `"DELETE_NODE"`                             |
| `DELETE_PLAYLIST`                         | `"DELETE_PLAYLIST"`                         |
| `ELEMENT_SELECTED`                        | `"ELEMENT_SELECTED"`                        |
| `ELEMENT_SELECTED_WITH_ZOOM`              | `"ELEMENT_SELECTED_WITH_ZOOM"`              |
| `ELEMENT_SETTINGS`                        | `"ELEMENT_SETTINGS"`                        |
| `ELEMENT_SETTINGS_FORM_CLEAR`             | `"ELEMENT_SETTINGS_FORM_CLEAR"`             |
| `ELEMENT_SETTINGS_FORM_SUBMIT`            | `"ELEMENT_SETTINGS_FORM_SUBMIT"`            |
| `EXPORT_DATA`                             | `"EXPORT_DATA"`                             |
| `FOCUS`                                   | `"FOCUS"`                                   |
| `IMPORT_DATA`                             | `"IMPORT_DATA"`                             |
| `IMPORT_EVENTS`                           | `"IMPORT_EVENTS"`                           |
| `LAYOUT_ANIMATION_DURATION_CHANGED`       | `"LAYOUT_ANIMATION_DURATION_CHANGED"`       |
| `LAYOUT_CHANGED`                          | `"LAYOUT_CHANGED"`                          |
| `LAYOUT_FORM_CLEAR`                       | `"LAYOUT_FORM_CLEAR"`                       |
| `MAKE_DATA_LABEL`                         | `"MAKE_DATA_LABEL"`                         |
| `MAKE_DATA_LABEL_FIRST`                   | `"MAKE_DATA_LABEL_FIRST"`                   |
| `MAKE_GLOBAL_DATA_LABEL`                  | `"MAKE_GLOBAL_DATA_LABEL"`                  |
| `MAKE_GLOBAL_DATA_LABEL_FIRST`            | `"MAKE_GLOBAL_DATA_LABEL_FIRST"`            |
| `MODE_CHANGED`                            | `"MODE_CHANGED"`                            |
| `PLAY_EVENTS`                             | `"PLAY_EVENTS"`                             |
| `PREFERENCES_FORM_CLEAR`                  | `"PREFERENCES_FORM_CLEAR"`                  |
| `PREFERENCES_FORM_SUBMIT`                 | `"PREFERENCES_FORM_SUBMIT"`                 |
| `PRESS_ADD_CLUSTER_ELEMENT`               | `"PRESS_ADD_CLUSTER_ELEMENT"`               |
| `PRESS_BACKGROUND`                        | `"PRESS_BACKGROUND"`                        |
| `RECORD_FINISHED`                         | `"RECORD_FINISHED"`                         |
| `REDO_EVENT`                              | `"REDO_EVENT"`                              |
| `REORDER_CLUSTER`                         | `"REORDER_CLUSTER"`                         |
| `REORDER_HISTORY_ITEM`                    | `"REORDER_HISTORY_ITEM"`                    |
| `REORDER_PLAYLIST`                        | `"REORDER_PLAYLIST"`                        |
| `SELECT_CLUSTER`                          | `"SELECT_CLUSTER"`                          |
| `SETTINGS_FORM_CHANGED`                   | `"SETTINGS_FORM_CHANGED"`                   |
| `SETTINGS_FORM_CLEAR`                     | `"SETTINGS_FORM_CLEAR"`                     |
| `SET_NODE_GLOBAL_LABEL`                   | `"SET_NODE_GLOBAL_LABEL"`                   |
| `SET_NODE_LOCAL_LABEL`                    | `"SET_NODE_LOCAL_LABEL"`                    |
| `SET_POSITIONS_IMPERATIVELY`              | `"SET_POSITIONS_IMPERATIVELY"`              |
| `TOGGLE_ACTION_BAR`                       | `"TOGGLE_ACTION_BAR"`                       |
| `TOGGLE_DATA_BAR`                         | `"TOGGLE_DATA_BAR"`                         |
| `TOGGLE_FILTER_BAR`                       | `"TOGGLE_FILTER_BAR"`                       |
| `TOGGLE_NODE_GLOBAL_LABEL_FIRST`          | `"TOGGLE_NODE_GLOBAL_LABEL_FIRST"`          |
| `TOGGLE_PREFERENCES_MODAL`                | `"TOGGLE_PREFERENCES_MODAL"`                |
| `TOGGLE_RECORD`                           | `"TOGGLE_RECORD"`                           |
| `TOGGLE_RECORD_ACTIONS`                   | `"TOGGLE_RECORD_ACTIONS"`                   |
| `TOGGLE_RECORD_EVENTS`                    | `"TOGGLE_RECORD_EVENTS"`                    |
| `UNDO_EVENT`                              | `"UNDO_EVENT"`                              |
| `UPDATE_DATA`                             | `"UPDATE_DATA"`                             |

#### Defined in

[constants/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/constants/index.tsx#L16)
