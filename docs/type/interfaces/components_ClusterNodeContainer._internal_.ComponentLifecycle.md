[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ComponentLifecycle

# Interface: ComponentLifecycle<P, S, SS\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ComponentLifecycle

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `S` | `S` |
| `SS` | `any` |

## Hierarchy

- [`NewLifecycle`](components_ClusterNodeContainer._internal_.NewLifecycle.md)<`P`, `S`, `SS`\>

- [`DeprecatedLifecycle`](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md)<`P`, `S`\>

  ↳ **`ComponentLifecycle`**

  ↳↳ [`Component`](../classes/components_ClusterNodeContainer._internal_.Component.md)

## Table of contents

### Methods

- [UNSAFE\_componentWillMount](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#unsafe_componentwillupdate)
- [componentDidCatch](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidcatch)
- [componentDidMount](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidmount)
- [componentDidUpdate](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentdidupdate)
- [componentWillMount](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillmount)
- [componentWillReceiveProps](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillreceiveprops)
- [componentWillUnmount](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillunmount)
- [componentWillUpdate](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#componentwillupdate)
- [getSnapshotBeforeUpdate](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#getsnapshotbeforeupdate)
- [shouldComponentUpdate](components_ClusterNodeContainer._internal_.ComponentLifecycle.md#shouldcomponentupdate)

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[UNSAFE_componentWillMount](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#unsafe_componentwillmount)

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[UNSAFE_componentWillReceiveProps](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#unsafe_componentwillreceiveprops)

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[UNSAFE_componentWillUpdate](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#unsafe_componentwillupdate)

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
| `errorInfo` | [`ErrorInfo`](components_ClusterNodeContainer._internal_.ErrorInfo.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:646

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

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

[NewLifecycle](components_ClusterNodeContainer._internal_.NewLifecycle.md).[componentDidUpdate](components_ClusterNodeContainer._internal_.NewLifecycle.md#componentdidupdate)

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[componentWillMount](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#componentwillmount)

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[componentWillReceiveProps](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#componentwillreceiveprops)

#### Defined in

node_modules/@types/react/index.d.ts:732

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

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

[DeprecatedLifecycle](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md).[componentWillUpdate](components_ClusterNodeContainer._internal_.DeprecatedLifecycle.md#componentwillupdate)

#### Defined in

node_modules/@types/react/index.d.ts:762

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

[NewLifecycle](components_ClusterNodeContainer._internal_.NewLifecycle.md).[getSnapshotBeforeUpdate](components_ClusterNodeContainer._internal_.NewLifecycle.md#getsnapshotbeforeupdate)

#### Defined in

node_modules/@types/react/index.d.ts:682

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

#### Defined in

node_modules/@types/react/index.d.ts:636
