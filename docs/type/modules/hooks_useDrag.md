[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useDrag

# Module: hooks/useDrag

## Table of contents

### Type aliases

- [Config](hooks_useDrag.md#config)

### Functions

- [useDrag](hooks_useDrag.md#usedrag)

## Type aliases

### Config

Ƭ **Config**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `React.MutableRefObject`<`HTMLDivElement` \| ``null`` \| `undefined`\> | HTML element ref |
| `onDrag` | (`pos`: `Position`, `rect`: `DOMRect`) => `void` \| { `keepDragging?`: `boolean` ; `position?`: `Position`  } | - |

#### Defined in

[src/hooks/useDrag.tsx:12](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useDrag.tsx#L12)

## Functions

### useDrag

▸ `Const` **useDrag**(`options`): (`event`: `any`) => `void`

Track drag events for Html Elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Config`](hooks_useDrag.md#config) |

#### Returns

`fn`

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

##### Returns

`void`

#### Defined in

[src/hooks/useDrag.tsx:26](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useDrag.tsx#L26)
