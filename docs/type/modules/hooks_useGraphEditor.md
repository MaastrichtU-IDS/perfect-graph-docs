[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useGraphEditor

# Module: hooks/useGraphEditor

## Table of contents

### Variables

- [GraphEditorContext](hooks_useGraphEditor.md#grapheditorcontext)

### Functions

- [GraphEditorProvider](hooks_useGraphEditor.md#grapheditorprovider)
- [useGraphEditor](hooks_useGraphEditor.md#usegrapheditor)

## Variables

### GraphEditorContext

• **GraphEditorContext**: `Context`<{ `state`: [`GraphEditorContextType`](type.md#grapheditorcontexttype) ; `clear`: () => `void` ; `connect`: <Y\>(`component`: `Component`<{}, {}, `any`\>, `selector`: (`state`: `T`) => `Y`, `fieldName?`: `string`) => `Y` ; `getState`: () => `T` ; `purge`: () => `Promise`<`void`\> ; `set`: (`nextValue`: `T`) => `void` ; `subscribe`: (`subscriber`: (`value`: `T`) => `void`) => `Subscription`<`T`\> ; `update`: (`updater`: `Updater`<`T`, `void` \| `UpdateConfig`\>) => `Promise`<`void`\>  }\> = `Context`

#### Defined in

[src/hooks/useGraphEditor.ts:15](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraphEditor.ts#L15)

## Functions

### GraphEditorProvider

▸ `Const` **GraphEditorProvider**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `props.fallback?` | `any` |
| `props.value?` | [`GraphEditorContextType`](type.md#grapheditorcontexttype) |

#### Returns

`Element`

#### Defined in

[src/hooks/useGraphEditor.ts:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraphEditor.ts#L16)

___

### useGraphEditor

▸ `Const` **useGraphEditor**<`Y_1`\>(`selector`): [`Y_1`, (`updater`: `Updater`<[`GraphEditorContextType`](type.md#grapheditorcontexttype), `void` \| `UpdateConfig`\>) => `Promise`<`void`\>, { `state`: [`GraphEditorContextType`](type.md#grapheditorcontexttype) ; `clear`: () => `void` ; `connect`: <Y\>(`component`: `Component`<{}, {}, `any`\>, `selector`: (`state`: `T`) => `Y`, `fieldName?`: `string`) => `Y` ; `getState`: () => `T` ; `purge`: () => `Promise`<`void`\> ; `set`: (`nextValue`: `T`) => `void` ; `subscribe`: (`subscriber`: (`value`: `T`) => `void`) => `Subscription`<`T`\> ; `update`: (`updater`: `Updater`<`T`, `void` \| `UpdateConfig`\>) => `Promise`<`void`\>  }]

To use graph editor context values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Y_1` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`GraphEditorContextType`](type.md#grapheditorcontexttype)) => `Y_1` |

#### Returns

[`Y_1`, (`updater`: `Updater`<[`GraphEditorContextType`](type.md#grapheditorcontexttype), `void` \| `UpdateConfig`\>) => `Promise`<`void`\>, { `state`: [`GraphEditorContextType`](type.md#grapheditorcontexttype) ; `clear`: () => `void` ; `connect`: <Y\>(`component`: `Component`<{}, {}, `any`\>, `selector`: (`state`: `T`) => `Y`, `fieldName?`: `string`) => `Y` ; `getState`: () => `T` ; `purge`: () => `Promise`<`void`\> ; `set`: (`nextValue`: `T`) => `void` ; `subscribe`: (`subscriber`: (`value`: `T`) => `void`) => `Subscription`<`T`\> ; `update`: (`updater`: `Updater`<`T`, `void` \| `UpdateConfig`\>) => `Promise`<`void`\>  }]

#### Defined in

[src/hooks/useGraphEditor.ts:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraphEditor.ts#L21)
