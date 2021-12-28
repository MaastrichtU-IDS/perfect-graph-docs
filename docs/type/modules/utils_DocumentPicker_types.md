[perfect-graph](../README.md) / [Modules](../modules.md) / utils/DocumentPicker/types

# Module: utils/DocumentPicker/types

## Table of contents

### Namespaces

- [&lt;internal\&gt;](utils_DocumentPicker_types._internal_.md)

### Type aliases

- [DocumentPickerOptions](utils_DocumentPicker_types.md#documentpickeroptions)
- [DocumentResult](utils_DocumentPicker_types.md#documentresult)

## Type aliases

### DocumentPickerOptions

Ƭ **DocumentPickerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyToCacheDirectory?` | `boolean` |
| `multiple?` | `boolean` |
| `type?` | `string` |

#### Defined in

[src/utils/DocumentPicker/types.ts:1](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/DocumentPicker/types.ts#L1)

___

### DocumentResult

Ƭ **DocumentResult**: { `type`: ``"cancel"``  } \| { `file?`: [`File`](components_ClusterNodeContainer._internal_.md#file) ; `lastModified?`: `number` ; `name`: `string` ; `output?`: [`FileList`](utils_DocumentPicker_types._internal_.md#filelist) \| ``null`` ; `size`: `number` ; `type`: ``"success"`` ; `uri`: `string`  }

#### Defined in

[src/utils/DocumentPicker/types.ts:7](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/DocumentPicker/types.ts#L7)
