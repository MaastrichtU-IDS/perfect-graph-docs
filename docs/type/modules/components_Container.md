[perfect-graph](../README.md) / [Modules](../modules.md) / components/Container

# Module: components/Container

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_Container._internal_.md)

### Type aliases

- [ContainerProps](components_Container.md#containerprops)
- [ContainerRef](components_Container.md#containerref)
- [ContainerType](components_Container.md#containertype)

### Variables

- [Container](components_Container.md#container)

## Type aliases

### ContainerProps

Ƭ **ContainerProps**: [`PIXIBasicProps`](components_Container._internal_.md#pixibasicprops) & [`PIXIDisplayObjectProps`](components_Container._internal_.md#pixidisplayobjectprops) & [`Omit`](components_ClusterNodeContainer._internal_.md#omit)<[`ComponentProps`](components_Container._internal_.md#componentprops)<typeof [`Container`](components_Container._internal_.md#container)\>, ``"children"``\> & { `children`: [`Enumerable`](components_Container._internal_.md#enumerable)<[`ReactNode`](components_ClusterNodeContainer._internal_.md#reactnode)\> ; `draggable?`: `boolean` ; `onDrag?`: (`param`: [`Position`](components_Container._internal_.md#position)) => `void`  }

#### Defined in

[src/components/Container/index.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Container/index.tsx#L17)

___

### ContainerRef

Ƭ **ContainerRef**: [`Container`](../classes/components_ClusterNodeContainer._internal_.Container.md)

#### Defined in

[src/components/Container/index.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Container/index.tsx#L36)

___

### ContainerType

Ƭ **ContainerType**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`ContainerPropsWithRef`](components_Container._internal_.md#containerpropswithref)\>

#### Defined in

[src/components/Container/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Container/index.tsx#L35)

## Variables

### Container

• **Container**: [`ContainerType`](components_Container.md#containertype)

The container for PIXI objects. It facilitates drag operations.

#### Defined in

[src/components/Container/index.tsx:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Container/index.tsx#L42)
