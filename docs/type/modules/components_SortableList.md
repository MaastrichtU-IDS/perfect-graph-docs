[perfect-graph](../README.md) / [Modules](../modules.md) / components/SortableList

# Module: components/SortableList

## Table of contents

### Type aliases

- [SortableListProps](components_SortableList.md#sortablelistprops)

### Functions

- [SortableList](components_SortableList.md#sortablelist)

## Type aliases

### SortableListProps

Ƭ **SortableListProps**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |
| `onDragEnd?` | (`result`: `DropResult`) => `void` |
| `onReorder?` | (`result`: `DropResult`) => `void` |
| `renderItem` | (`props`: { `droppableProvided`: `DroppableProvided` ; `droppableSnapshot`: `DroppableStateSnapshot` ; `index`: `number` ; `item`: `T` ; `provided`: `DraggableProvided` ; `rubric`: `DraggableRubric` ; `snapshot`: `DraggableStateSnapshot`  }) => `ReactNode` |

#### Defined in

[src/components/SortableList.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/SortableList.tsx#L35)

## Functions

### SortableList

▸ `Const` **SortableList**<`T`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SortableListProps`](components_SortableList.md#sortablelistprops)<`T`\> |

#### Returns

`Element`

#### Defined in

[src/components/SortableList.tsx:51](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/SortableList.tsx#L51)
