[perfect-graph](../README.md) / [Modules](../modules.md) / utils/createHistory

# Module: utils/createHistory

## Table of contents

### Type aliases

- [History](utils_createHistory.md#history)

### Functions

- [createHistory](utils_createHistory.md#createhistory)

## Type aliases

### History

Ƭ **History**: `ReturnType`<typeof [`createHistory`](utils_createHistory.md#createhistory)\>

#### Defined in

[src/utils/createHistory.ts:47](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/createHistory.ts#L47)

## Functions

### createHistory

▸ `Const` **createHistory**(`options`): `Object`

Create Event History recorder

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CreateHistoryOptions` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `add` | (`item`: `HistoryItemOptionalId`) => `void` |
| `clear` | () => `void` |
| `delete` | (`ids`: `string`[]) => `void` |
| `getEventIdsByDoItemIds` | (`ids`: `string`[]) => `string`[] |
| `record` | `HistoryRecord` |
| `redo` | () => `void` |
| `redoAll` | () => `any` |
| `reorder` | (`fromIndex`: `number`, `toIndex`: `number`) => `void` |
| `set` | (`newHistoryRecord`: `HistoryRecord`) => `void` |
| `undo` | () => `void` |
| `undoAll` | () => `any` |

#### Defined in

[src/utils/createHistory.ts:65](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/createHistory.ts#L65)
