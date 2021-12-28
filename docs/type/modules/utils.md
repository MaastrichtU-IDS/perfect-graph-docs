[perfect-graph](../README.md) / [Modules](../modules.md) / utils

# Module: utils

## Table of contents

### Type aliases

- [EventType](utils.md#eventtype)
- [Events](utils.md#events)

### Variables

- [IS\_FLEX\_DEFAULT](utils.md#is_flex_default)
- [contextUtils](utils.md#contextutils)

### Functions

- [adjustVisualQuality](utils.md#adjustvisualquality)
- [applyDefaultProps](utils.md#applydefaultprops)
- [applyEvents](utils.md#applyevents)
- [calculateObjectBoundsWithoutChildren](utils.md#calculateobjectboundswithoutchildren)
- [calculateVisibilityByContext](utils.md#calculatevisibilitybycontext)
- [cyUnselectAll](utils.md#cyunselectall)
- [filterEdges](utils.md#filteredges)
- [getBoundingBox](utils.md#getboundingbox)
- [getClusterVisibility](utils.md#getclustervisibility)
- [getElementData](utils.md#getelementdata)
- [getElementsCollectionByIds](utils.md#getelementscollectionbyids)
- [getEventClientPosition](utils.md#geteventclientposition)
- [getHitAreaCenter](utils.md#gethitareacenter)
- [getItemFromElement](utils.md#getitemfromelement)
- [getLabel](utils.md#getlabel)
- [getPointerPositionOnViewport](utils.md#getpointerpositiononviewport)
- [getSelectedElementInfo](utils.md#getselectedelementinfo)
- [getSelectedItemByElement](utils.md#getselecteditembyelement)
- [getTextureFromProps](utils.md#gettexturefromprops)
- [getUndoEvents](utils.md#getundoevents)
- [getViewportZoom](utils.md#getviewportzoom)
- [isFiltered](utils.md#isfiltered)
- [isMultipleTouches](utils.md#ismultipletouches)
- [isPositionInBox](utils.md#ispositioninbox)
- [isValidURL](utils.md#isvalidurl)
- [pauseEvent](utils.md#pauseevent)
- [preprocessProps](utils.md#preprocessprops)
- [processStyle](utils.md#processstyle)
- [processTextStyle](utils.md#processtextstyle)
- [readTextFile](utils.md#readtextfile)
- [throttle](utils.md#throttle)
- [vectorMidpoint](utils.md#vectormidpoint)

## Type aliases

### EventType

Ƭ **EventType**: (`e`: `PIXI.InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `PIXI.InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/utils/index.ts:107](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L107)

___

### Events

Ƭ **Events**: `EventMap`

#### Defined in

[src/utils/index.ts:108](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L108)

## Variables

### IS\_FLEX\_DEFAULT

• **IS\_FLEX\_DEFAULT**: ``false``

#### Defined in

[src/utils/index.ts:126](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L126)

___

### contextUtils

• **contextUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`element`: [`Element`](type.md#element)) => `any` |
| `getEdgeContext` | (`element`: [`Element`](type.md#element)) => [`EdgeContext`](type.md#edgecontext) |
| `getNodeContext` | (`element`: [`Element`](type.md#element)) => [`NodeContext`](type.md#nodecontext) |
| `update` | (`element`: [`Element`](type.md#element), `context`: `any`) => `void` |

#### Defined in

[src/utils/index.ts:766](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L766)

## Functions

### adjustVisualQuality

▸ `Const` **adjustVisualQuality**(`objectCount`, `viewport`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectCount` | `number` |
| `viewport` | [`ViewportType`](type.md#viewporttype) |

#### Returns

`void`

#### Defined in

[src/utils/index.ts:796](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L796)

___

### applyDefaultProps

▸ `Const` **applyDefaultProps**<`P`\>(`instance`, `oldProps`, `newProps?`, `config?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Container` \| `DisplayObject` \| `Graphics` |
| `oldProps` | `P` |
| `newProps` | `P` |
| `config` | `ApplyDefaultPropsConfig` |

#### Returns

`void`

#### Defined in

[src/utils/index.ts:128](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L128)

___

### applyEvents

▸ `Const` **applyEvents**(`instance`, `props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `DisplayObject` |
| `props` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[src/utils/index.ts:110](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L110)

___

### calculateObjectBoundsWithoutChildren

▸ `Const` **calculateObjectBoundsWithoutChildren**(`container`): `BoundingBox`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Container` |

#### Returns

`BoundingBox`

#### Defined in

[src/utils/index.ts:283](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L283)

___

### calculateVisibilityByContext

▸ `Const` **calculateVisibilityByContext**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `NodeSingular` \| `EdgeSingular` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:329](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L329)

___

### cyUnselectAll

▸ `Const` **cyUnselectAll**(`cy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cy` | `Core` |

#### Returns

`void`

#### Defined in

[src/utils/index.ts:723](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L723)

___

### filterEdges

▸ `Const` **filterEdges**(`nodes`): (`edges`: [`EdgeData`](type.md#edgedata)[]) => [`EdgeData`](type.md#edgedata)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`NodeData`](type.md#nodedata)[] |

#### Returns

`fn`

▸ (`edges`): [`EdgeData`](type.md#edgedata)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `edges` | [`EdgeData`](type.md#edgedata)[] |

##### Returns

[`EdgeData`](type.md#edgedata)[]

#### Defined in

[src/utils/index.ts:341](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L341)

___

### getBoundingBox

▸ `Const` **getBoundingBox**(`startPos`, `endPos`, `abs?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startPos` | `Position` | `undefined` |
| `endPos` | `Position` | `undefined` |
| `abs` | `boolean` | `false` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/utils/index.ts:707](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L707)

___

### getClusterVisibility

▸ `Const` **getClusterVisibility**(`id`, `clusters?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `clusters` | [`Cluster`](type.md#cluster)[] | `[]` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:319](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L319)

___

### getElementData

▸ `Const` **getElementData**(`element`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](type.md#element) |

#### Returns

`any`

#### Defined in

[src/utils/index.ts:781](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L781)

___

### getElementsCollectionByIds

▸ `Const` **getElementsCollectionByIds**(`cy`, `ids`): `CollectionReturnValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cy` | `Core` |
| `ids` | `string`[] |

#### Returns

`CollectionReturnValue`

#### Defined in

[src/utils/index.ts:727](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L727)

___

### getEventClientPosition

▸ `Const` **getEventClientPosition**(`e`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |

#### Defined in

[src/utils/index.ts:752](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L752)

___

### getHitAreaCenter

▸ `Const` **getHitAreaCenter**(`graphRef`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphRef` | [`GraphRef`](type.md#graphref) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/utils/index.ts:844](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L844)

___

### getItemFromElement

▸ `Const` **getItemFromElement**(`element`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](type.md#element) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `id` | `string` |

#### Defined in

[src/utils/index.ts:783](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L783)

___

### getLabel

▸ `Const` **getLabel**(`path?`, `item`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string`[] | `[]` |
| `item` | [`ElementData`](type.md#elementdata) | `undefined` |

#### Returns

`string`

#### Defined in

[src/utils/index.ts:264](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L264)

___

### getPointerPositionOnViewport

▸ `Const` **getPointerPositionOnViewport**(`viewport`, `event`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`ViewportType`](type.md#viewporttype) |
| `event` | `TouchEvent` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `y` | `any` |

#### Defined in

[src/utils/index.ts:735](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L735)

___

### getSelectedElementInfo

▸ `Const` **getSelectedElementInfo**(`controllerState`, `graphEditor`): { `index`: `undefined` ; `selectedElement`: `undefined` ; `selectedItem`: `undefined` ; `type`: `undefined` = targetPath } \| { `index`: `number` ; `selectedElement`: `NodeSingular` \| `EdgeSingular` ; `selectedItem`: [`NodeData`](type.md#nodedata) \| [`EdgeData`](type.md#edgedata) ; `type`: `string` = targetPath }

#### Parameters

| Name | Type |
| :------ | :------ |
| `controllerState` | [`ControllerState`](type.md#controllerstate) |
| `graphEditor` | [`GraphEditorRef`](type.md#grapheditorref) |

#### Returns

{ `index`: `undefined` ; `selectedElement`: `undefined` ; `selectedItem`: `undefined` ; `type`: `undefined` = targetPath } \| { `index`: `number` ; `selectedElement`: `NodeSingular` \| `EdgeSingular` ; `selectedItem`: [`NodeData`](type.md#nodedata) \| [`EdgeData`](type.md#edgedata) ; `type`: `string` = targetPath }

#### Defined in

[src/utils/index.ts:240](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L240)

___

### getSelectedItemByElement

▸ `Const` **getSelectedItemByElement**(`element`, `info`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](type.md#element) |
| `info` | `Object` |
| `info.edges` | [`EdgeData`](type.md#edgedata)[] |
| `info.nodes` | [`NodeData`](type.md#nodedata)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `item` | [`ElementData`](type.md#elementdata) |

#### Defined in

[src/utils/index.ts:226](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L226)

___

### getTextureFromProps

▸ `Const` **getTextureFromProps**(`elementType`, `pureProps?`): `any`

Helper util for fetching the texture from props
Can be either texture or image

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementType` | `string` |
| `pureProps` | `Record`<`string`, `any`\> |

#### Returns

`any`

#### Defined in

[src/utils/index.ts:173](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L173)

___

### getUndoEvents

▸ `Const` **getUndoEvents**(`events`, `settings`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | [`EventInfo`](type.md#eventinfo)[] |
| `settings` | `GetUndoActionsSettings` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addHistory` | `boolean` |
| `events` | [`LiteEventInfo`](type.md#liteeventinfo)[] |

#### Defined in

[src/utils/index.ts:364](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L364)

___

### getViewportZoom

▸ `Const` **getViewportZoom**(`graphRef`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphRef` | [`GraphRef`](type.md#graphref) |

#### Returns

`number`

#### Defined in

[src/utils/index.ts:856](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L856)

___

### isFiltered

▸ `Const` **isFiltered**(`element`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](type.md#element) |

#### Returns

`any`

#### Defined in

[src/utils/index.ts:852](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L852)

___

### isMultipleTouches

▸ `Const` **isMultipleTouches**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TouchEvent` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:761](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L761)

___

### isPositionInBox

▸ `Const` **isPositionInBox**(`position`, `box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Position` |
| `box` | `BoundingBox` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:688](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L688)

___

### isValidURL

▸ `Const` **isValidURL**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:861](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L861)

___

### pauseEvent

▸ `Const` **pauseEvent**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`boolean`

#### Defined in

[src/utils/index.ts:788](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L788)

___

### preprocessProps

▸ `Const` **preprocessProps**<`T`\>(`props`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

#### Returns

`T`

#### Defined in

[src/utils/index.ts:124](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L124)

___

### processStyle

▸ `Const` **processStyle**(`props?`, `mutableInstance`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |
| `mutableInstance` | `DisplayObject` |

#### Returns

`any`

#### Defined in

[src/utils/index.ts:23](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L23)

___

### processTextStyle

▸ `Const` **processTextStyle**(`style`): `TextStyle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `Object` |
| `style.color?` | `string` |
| `style.fontFamily?` | `string` |
| `style.fontSize?` | `number` |
| `style.fontWeight?` | `string` |
| `style.justifyContent?` | ``"center"`` \| ``"flex-start"`` \| ``"flex-end"`` |
| `style.width?` | `number` |

#### Returns

`TextStyle`

#### Defined in

[src/utils/index.ts:66](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L66)

___

### readTextFile

▸ `Const` **readTextFile**(`blob`, `encoding?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |
| `encoding?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/index.ts:268](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L268)

___

### throttle

▸ `Const` **throttle**(`callback`, `delay`, `_id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `string`) => `void` |
| `delay` | `number` |
| `_id?` | `string` |

#### Returns

`void`

#### Defined in

[src/utils/index.ts:677](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L677)

___

### vectorMidpoint

▸ `Const` **vectorMidpoint**(`from`, `to`): `Victor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `Victor` |
| `to` | `Victor` |

#### Returns

`Victor`

#### Defined in

[src/utils/index.ts:837](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/index.ts#L837)
