[perfect-graph](../README.md) / [Modules](../modules.md) / utils/DocumentPicker/types

# Module: utils/DocumentPicker/types

## Table of contents

### Type aliases

- [DocumentPickerOptions](utils_DocumentPicker_types#documentpickeroptions)
- [DocumentResult](utils_DocumentPicker_types#documentresult)

## Type aliases

### DocumentPickerOptions

Ƭ **DocumentPickerOptions**: `Object`

#### Type declaration

| Name                    | Type      |
| :---------------------- | :-------- |
| `copyToCacheDirectory?` | `boolean` |
| `multiple?`             | `boolean` |
| `type?`                 | `string`  |

#### Defined in

[utils/DocumentPicker/types.ts:1](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/DocumentPicker/types.ts#L1)

---

### DocumentResult

Ƭ **DocumentResult**: { `type`: `"cancel"` } \| { `file?`: `File` ; `lastModified?`: `number` ; `name`: `string` ; `output?`: `FileList` \| `null` ; `size`: `number` ; `type`: `"success"` ; `uri`: `string` }

#### Defined in

[utils/DocumentPicker/types.ts:7](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/DocumentPicker/types.ts#L7)
