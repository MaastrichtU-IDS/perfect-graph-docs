[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md) / [<internal\>](../modules/components_GraphEditor_DataEditor._internal_.md) / ComponentClass

# Interface: ComponentClass<P, S\>

[components/GraphEditor/DataEditor](../modules/components_GraphEditor_DataEditor.md).[<internal>](../modules/components_GraphEditor_DataEditor._internal_.md).ComponentClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | [`ComponentState`](../modules/components_GraphEditor_DataEditor._internal_.md#componentstate) |

## Hierarchy

- [`StaticLifecycle`](components_GraphEditor_DataEditor._internal_.StaticLifecycle.md)<`P`, `S`\>

  ↳ **`ComponentClass`**

## Table of contents

### Constructors

- [constructor](components_GraphEditor_DataEditor._internal_.ComponentClass.md#constructor)

### Properties

- [childContextTypes](components_GraphEditor_DataEditor._internal_.ComponentClass.md#childcontexttypes)
- [contextType](components_GraphEditor_DataEditor._internal_.ComponentClass.md#contexttype)
- [contextTypes](components_GraphEditor_DataEditor._internal_.ComponentClass.md#contexttypes)
- [defaultProps](components_GraphEditor_DataEditor._internal_.ComponentClass.md#defaultprops)
- [displayName](components_GraphEditor_DataEditor._internal_.ComponentClass.md#displayname)
- [getDerivedStateFromError](components_GraphEditor_DataEditor._internal_.ComponentClass.md#getderivedstatefromerror)
- [getDerivedStateFromProps](components_GraphEditor_DataEditor._internal_.ComponentClass.md#getderivedstatefromprops)
- [propTypes](components_GraphEditor_DataEditor._internal_.ComponentClass.md#proptypes)

## Constructors

### constructor

• **new ComponentClass**(`props`, `context?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` |
| `context?` | `any` |

#### Inherited from

StaticLifecycle<P, S\>.constructor

#### Defined in

node_modules/@types/react/index.d.ts:591

## Properties

### childContextTypes

• `Optional` **childContextTypes**: [`ValidationMap`](../modules/components_ClusterNodeContainer._internal_.md#validationmap)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:595

___

### contextType

• `Optional` **contextType**: [`Context`](components_ClusterNodeContainer._internal_.Context.md)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:593

___

### contextTypes

• `Optional` **contextTypes**: [`ValidationMap`](../modules/components_ClusterNodeContainer._internal_.md#validationmap)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:594

___

### defaultProps

• `Optional` **defaultProps**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<`P`\>

#### Defined in

node_modules/@types/react/index.d.ts:596

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:597

___

### getDerivedStateFromError

• `Optional` **getDerivedStateFromError**: [`GetDerivedStateFromError`](../modules/components_GraphEditor_DataEditor._internal_.md#getderivedstatefromerror)<`P`, `S`\>

#### Inherited from

[StaticLifecycle](components_GraphEditor_DataEditor._internal_.StaticLifecycle.md).[getDerivedStateFromError](components_GraphEditor_DataEditor._internal_.StaticLifecycle.md#getderivedstatefromerror)

#### Defined in

node_modules/@types/react/index.d.ts:652

___

### getDerivedStateFromProps

• `Optional` **getDerivedStateFromProps**: [`GetDerivedStateFromProps`](../modules/components_GraphEditor_DataEditor._internal_.md#getderivedstatefromprops)<`P`, `S`\>

#### Inherited from

[StaticLifecycle](components_GraphEditor_DataEditor._internal_.StaticLifecycle.md).[getDerivedStateFromProps](components_GraphEditor_DataEditor._internal_.StaticLifecycle.md#getderivedstatefromprops)

#### Defined in

node_modules/@types/react/index.d.ts:651

___

### propTypes

• `Optional` **propTypes**: [`WeakValidationMap`](../modules/components_ClusterNodeContainer._internal_.md#weakvalidationmap)<`P`\>

#### Defined in

node_modules/@types/react/index.d.ts:592
