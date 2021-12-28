[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Component

# Class: Component<P, S, SS\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Component

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

## Hierarchy

- [`ComponentLifecycle`](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md)<`P`, `S`, `SS`\>

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Component.md#constructor)

### Properties

- [context](components_ClusterNodeContainer._internal_.Component.md#context)
- [props](components_ClusterNodeContainer._internal_.Component.md#props)
- [refs](components_ClusterNodeContainer._internal_.Component.md#refs)
- [state](components_ClusterNodeContainer._internal_.Component.md#state)
- [contextType](components_ClusterNodeContainer._internal_.Component.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](components_ClusterNodeContainer._internal_.Component.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](components_ClusterNodeContainer._internal_.Component.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](components_ClusterNodeContainer._internal_.Component.md#unsafe_componentwillupdate)
- [componentDidCatch](components_ClusterNodeContainer._internal_.Component.md#componentdidcatch)
- [componentDidMount](components_ClusterNodeContainer._internal_.Component.md#componentdidmount)
- [componentDidUpdate](components_ClusterNodeContainer._internal_.Component.md#componentdidupdate)
- [componentWillMount](components_ClusterNodeContainer._internal_.Component.md#componentwillmount)
- [componentWillReceiveProps](components_ClusterNodeContainer._internal_.Component.md#componentwillreceiveprops)
- [componentWillUnmount](components_ClusterNodeContainer._internal_.Component.md#componentwillunmount)
- [componentWillUpdate](components_ClusterNodeContainer._internal_.Component.md#componentwillupdate)
- [forceUpdate](components_ClusterNodeContainer._internal_.Component.md#forceupdate)
- [getSnapshotBeforeUpdate](components_ClusterNodeContainer._internal_.Component.md#getsnapshotbeforeupdate)
- [render](components_ClusterNodeContainer._internal_.Component.md#render)
- [setState](components_ClusterNodeContainer._internal_.Component.md#setstate)
- [shouldComponentUpdate](components_ClusterNodeContainer._internal_.Component.md#shouldcomponentupdate)

## Constructors

### constructor

• **new Component**<`P`, `S`, `SS`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` \| [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |

#### Inherited from

ComponentLifecycle<P, S, SS\>.constructor

#### Defined in

node_modules/@types/react/index.d.ts:481

• **new Component**<`P`, `S`, `SS`\>(`props`, `context`)

**`deprecated`**

**`see`** https://reactjs.org/docs/legacy-context.html

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` |
| `context` | `any` |

#### Inherited from

ComponentLifecycle<P, S, SS\>.constructor

#### Defined in

node_modules/@types/react/index.d.ts:486

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Defined in

node_modules/@types/react/index.d.ts:479

___

### props

• `Readonly` **props**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> & [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<{ `children?`: [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)  }\>

#### Defined in

node_modules/@types/react/index.d.ts:504

___

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: [`ReactInstance`](../modules/components_ClusterNodeContainer._internal_.md#reactinstance)

#### Defined in

node_modules/@types/react/index.d.ts:510

___

### state

• **state**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\>

#### Defined in

node_modules/@types/react/index.d.ts:505

___

### contextType

▪ `Static` `Optional` **contextType**: [`Context`](../interfaces/components_ClusterNodeContainer._internal_.Context.md)<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Defined in

node_modules/@types/react/index.d.ts:461

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[UNSAFE_componentWillMount](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillmount)

#### Defined in

node_modules/@types/react/index.d.ts:717

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[UNSAFE_componentWillReceiveProps](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillreceiveprops)

#### Defined in

node_modules/@types/react/index.d.ts:749

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `nextState` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[UNSAFE_componentWillUpdate](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillupdate)

#### Defined in

node_modules/@types/react/index.d.ts:777

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](../modules/components_ClusterNodeContainer._internal_.md#error) |
| `errorInfo` | [`ErrorInfo`](../interfaces/components_ClusterNodeContainer._internal_.ErrorInfo.md) |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentDidCatch](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidcatch)

#### Defined in

node_modules/@types/react/index.d.ts:646

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentDidMount](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidmount)

#### Defined in

node_modules/@types/react/index.d.ts:625

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `prevState` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\> |
| `snapshot?` | `SS` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentDidUpdate](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidupdate)

#### Defined in

node_modules/@types/react/index.d.ts:688

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentWillMount](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillmount)

#### Defined in

node_modules/@types/react/index.d.ts:703

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentWillReceiveProps](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillreceiveprops)

#### Defined in

node_modules/@types/react/index.d.ts:732

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentWillUnmount](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillunmount)

#### Defined in

node_modules/@types/react/index.d.ts:641

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `nextState` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[componentWillUpdate](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillupdate)

#### Defined in

node_modules/@types/react/index.d.ts:762

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:496

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): ``null`` \| `SS`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `prevState` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\> |

#### Returns

``null`` \| `SS`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[getSnapshotBeforeUpdate](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#getsnapshotbeforeupdate)

#### Defined in

node_modules/@types/react/index.d.ts:682

___

### render

▸ **render**(): [`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

#### Returns

[`ReactNode`](../modules/components_ClusterNodeContainer._internal_.md#reactnode)

#### Defined in

node_modules/@types/react/index.d.ts:497

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| `S` \| (`prevState`: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\>, `props`: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\>) => ``null`` \| `S` \| [`Pick`](../modules/components_ClusterNodeContainer._internal_.md#pick)<`S`, `K`\> \| [`Pick`](../modules/components_ClusterNodeContainer._internal_.md#pick)<`S`, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:491

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`P`\> |
| `nextState` | [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

[ComponentLifecycle](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md).[shouldComponentUpdate](../interfaces/components_ClusterNodeContainer._internal_.ComponentLifecycle.md#shouldcomponentupdate)

#### Defined in

node_modules/@types/react/index.d.ts:636
