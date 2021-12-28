[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / OverridableComponent

# Interface: OverridableComponent<M\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).OverridableComponent

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`OverridableTypeMap`](components_GraphEditor_DataEditor._internal_.OverridableTypeMap.md) |

## Callable

### OverridableComponent

▸ **OverridableComponent**<`C`\>(`props`): [`Element`](components_GraphEditor_ColorPicker._internal_.Element.md)

A component whose root component can be controlled via a `component` prop.

Adjusts valid props based on the type of `component`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ElementType`](../modules/components_GraphEditor_DataEditor._internal_.md#elementtype)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | { `component`: `C`  } & `M`[``"props"``] & [`CommonProps`](components_GraphEditor_DataEditor._internal_.CommonProps.md) & [`DistributiveOmit`](../modules/components_GraphEditor_DataEditor._internal_.md#distributiveomit)<[`ComponentPropsWithRef`](../modules/components_GraphEditor_DataEditor._internal_.md#componentpropswithref)<`C`\>, keyof [`CommonProps`](components_GraphEditor_DataEditor._internal_.CommonProps.md) \| keyof `M`[``"props"``]\> |

#### Returns

[`Element`](components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

node_modules/@mui/material/OverridableComponent.d.ts:11

### OverridableComponent

▸ **OverridableComponent**(`props`): [`Element`](components_GraphEditor_ColorPicker._internal_.Element.md)

A component whose root component can be controlled via a `component` prop.

Adjusts valid props based on the type of `component`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DefaultComponentProps`](../modules/components_GraphEditor_DataEditor._internal_.md#defaultcomponentprops)<`M`\> |

#### Returns

[`Element`](components_GraphEditor_ColorPicker._internal_.Element.md)

#### Defined in

node_modules/@mui/material/OverridableComponent.d.ts:20
