[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](components_EdgeContainer.md) / <internal\>

# Namespace: <internal\>

[components/EdgeContainer](components_EdgeContainer.md).<internal>

## Table of contents

### Enumerations

- [LINE\_CAP](../enums/components_EdgeContainer._internal_.LINE_CAP.md)
- [LINE\_JOIN](../enums/components_EdgeContainer._internal_.LINE_JOIN.md)
- [SHAPES](../enums/components_EdgeContainer._internal_.SHAPES.md)

### Enumeration members

- [CIRC](components_EdgeContainer._internal_.md#circ)
- [ELIP](components_EdgeContainer._internal_.md#elip)
- [POLY](components_EdgeContainer._internal_.md#poly)
- [RREC](components_EdgeContainer._internal_.md#rrec)

### Classes

- [BatchPart](../classes/components_EdgeContainer._internal_.BatchPart.md)
- [Circle](../classes/components_EdgeContainer._internal_.Circle.md)
- [Ellipse](../classes/components_EdgeContainer._internal_.Ellipse.md)
- [FillStyle](../classes/components_EdgeContainer._internal_.FillStyle.md)
- [Graphics](../classes/components_EdgeContainer._internal_.Graphics.md)
- [GraphicsData](../classes/components_EdgeContainer._internal_.GraphicsData.md)
- [GraphicsGeometry](../classes/components_EdgeContainer._internal_.GraphicsGeometry.md)
- [LineStyle](../classes/components_EdgeContainer._internal_.LineStyle.md)
- [Polygon](../classes/components_EdgeContainer._internal_.Polygon.md)
- [RoundedRectangle](../classes/components_EdgeContainer._internal_.RoundedRectangle.md)
- [Victor](../classes/components_EdgeContainer._internal_.Victor.md)

### Interfaces

- [Graphics](../interfaces/components_EdgeContainer._internal_.Graphics-1.md)
- [IFillStyleOptions](../interfaces/components_EdgeContainer._internal_.IFillStyleOptions.md)
- [IGraphicsBatchElement](../interfaces/components_EdgeContainer._internal_.IGraphicsBatchElement.md)
- [ILineStyleOptions](../interfaces/components_EdgeContainer._internal_.ILineStyleOptions.md)
- [VictorCoordinates](../interfaces/components_EdgeContainer._internal_.VictorCoordinates.md)

### Type aliases

- [DrawLine](components_EdgeContainer._internal_.md#drawline)
- [EdgeConfig](components_EdgeContainer._internal_.md#edgeconfig)
- [EdgeContext](components_EdgeContainer._internal_.md#edgecontext)
- [EdgeLineType](components_EdgeContainer._internal_.md#edgelinetype)
- [IShape](components_EdgeContainer._internal_.md#ishape)
- [IShape\_2](components_EdgeContainer._internal_.md#ishape_2)
- [Parameters](components_EdgeContainer._internal_.md#parameters)
- [RenderEdge](components_EdgeContainer._internal_.md#renderedge)

## Enumeration members

### CIRC

• **CIRC**: `Object` = `2`

#### Defined in

node_modules/@pixi/math/index.d.ts:924

___

### ELIP

• **ELIP**: `Object` = `3`

#### Defined in

node_modules/@pixi/math/index.d.ts:925

___

### POLY

• **POLY**: `Object` = `0`

#### Defined in

node_modules/@pixi/math/index.d.ts:922

___

### RREC

• **RREC**: `Object` = `4`

#### Defined in

node_modules/@pixi/math/index.d.ts:926

## Type aliases

### DrawLine

Ƭ **DrawLine**: (`arg`: [`Parameters`](components_EdgeContainer._internal_.md#parameters)<[`RenderEdge`](components_EdgeContainer._internal_.md#renderedge)\>[``0``] & { `from`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `graphics`: [`Graphics`](../classes/components_EdgeContainer._internal_.Graphics.md) ; `to`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  }) => `void`

#### Type declaration

▸ (`arg`): `void`

Graph drawLine function for edge vectors

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Parameters`](components_EdgeContainer._internal_.md#parameters)<[`RenderEdge`](components_EdgeContainer._internal_.md#renderedge)\>[``0``] & { `from`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `graphics`: [`Graphics`](../classes/components_EdgeContainer._internal_.Graphics.md) ; `to`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  } |

##### Returns

`void`

#### Defined in

[src/type/index.ts:672](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L672)

___

### EdgeConfig

Ƭ **EdgeConfig**: { `view`: { `alpha`: `number` ; `fill`: { `default`: `number` ; `hovered`: `number` ; `nodeSelected`: `number` ; `selected`: `number`  } ; `labelVisible`: `boolean` ; `lineType`: [`EdgeLineType`](components_EdgeContainer._internal_.md#edgelinetype) ; `width`: `number`  }  } & [`ElementConfig`](components_ClusterNodeContainer._internal_.md#elementconfig)<[`EdgeElement`](components_ClusterNodeContainer._internal_.md#edgeelement)\>

#### Defined in

[src/type/index.ts:432](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L432)

___

### EdgeContext

Ƭ **EdgeContext**: [`ElementContext`](components_ClusterNodeContainer._internal_.md#elementcontext)<[`EdgeElementSettings`](components_ClusterNodeContainer._internal_.md#edgeelementsettings)\> & { `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_.md#edgeelement)  }

#### Defined in

[src/type/index.ts:143](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L143)

___

### EdgeLineType

Ƭ **EdgeLineType**: ``"bezier"`` \| ``"segments"`` \| ``"line"``

#### Defined in

[src/type/index.ts:430](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L430)

___

### IShape

Ƭ **IShape**: [`Circle`](../classes/components_EdgeContainer._internal_.Circle.md) \| [`Ellipse`](../classes/components_EdgeContainer._internal_.Ellipse.md) \| [`Polygon`](../classes/components_EdgeContainer._internal_.Polygon.md) \| [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md) \| [`RoundedRectangle`](../classes/components_EdgeContainer._internal_.RoundedRectangle.md)

#### Defined in

node_modules/@pixi/math/index.d.ts:363

___

### IShape\_2

Ƭ **IShape\_2**: [`Circle`](../classes/components_EdgeContainer._internal_.Circle.md) \| [`Ellipse`](../classes/components_EdgeContainer._internal_.Ellipse.md) \| [`Polygon`](../classes/components_EdgeContainer._internal_.Polygon.md) \| [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md) \| [`RoundedRectangle`](../classes/components_EdgeContainer._internal_.RoundedRectangle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1022

___

### Parameters

Ƭ **Parameters**<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Obtain the parameters of a function type in a tuple

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1586

___

### RenderEdge

Ƭ **RenderEdge**<`Additional`\>: (`c`: { `config`: [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_.md#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_.md#edgeelement) ; `from`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `targetElement`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `to`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  } & [`RenderElementParams`](components_ClusterNodeContainer._internal_.md#renderelementparams) & `Additional`) => [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_.md#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_.md#edgeelement) ; `from`: [`Position`](components_ClusterNodeContainer._internal_.md#position) ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `targetElement`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) ; `to`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  } & [`RenderElementParams`](components_ClusterNodeContainer._internal_.md#renderelementparams) & `Additional` |

##### Returns

[`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)

#### Defined in

[src/type/index.ts:247](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L247)
