[perfect-graph](../README.md) / [Modules](../modules.md) / components/Collapsible

# Module: components/Collapsible

## Table of contents

### Type aliases

- [CollapsibleProps](components_Collapsible.md#collapsibleprops)

### Functions

- [Collapsible](components_Collapsible.md#collapsible)
- [CollapsibleContainer](components_Collapsible.md#collapsiblecontainer)
- [CollapsibleTitle](components_Collapsible.md#collapsibletitle)

## Type aliases

### CollapsibleProps

Ƭ **CollapsibleProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultIsOpen?` | `boolean` |
| `isOpen?` | `boolean` |
| `children` | (`params`: { `isOpen`: `boolean` ; `onClose`: () => `void` ; `onOpen`: () => `void` ; `onToggle`: () => `void`  }) => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[src/components/Collapsible.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Collapsible.tsx#L10)

## Functions

### Collapsible

▸ `Const` **Collapsible**(`props`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CollapsibleProps`](components_Collapsible.md#collapsibleprops) |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Collapsible.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Collapsible.tsx#L17)

___

### CollapsibleContainer

▸ `Const` **CollapsibleContainer**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`Element`

#### Defined in

[src/components/Collapsible.tsx:59](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Collapsible.tsx#L59)

___

### CollapsibleTitle

▸ `Const` **CollapsibleTitle**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`Element`

#### Defined in

[src/components/Collapsible.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Collapsible.tsx#L36)
