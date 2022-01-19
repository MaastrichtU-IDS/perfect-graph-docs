[perfect-graph](../README.md) / [Modules](../modules.md) / components/Container

# Module: components/Container

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_Container._internal_.md)

### Type aliases

- [ContainerProps](components_Container#containerprops)
- [ContainerRef](components_Container#containerref)
- [ContainerType](components_Container#containertype)

### Variables

- [Container](components_Container#container)

## Type aliases

### ContainerProps

Ƭ **ContainerProps**: [`PIXIBasicProps`](components_Container._internal_#pixibasicprops) & [`PIXIDisplayObjectProps`](components_Container._internal_#pixidisplayobjectprops) & `Omit`<`React.ComponentProps`<typeof `PIXIReactContainer`\>, `"children"`\> & { `children`: `Enumerable`<`React.ReactNode`\> ; `draggable?`: `boolean` ; `onDrag?`: (`param`: `Position`) => `void` }

#### Defined in

[components/Container/index.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Container/index.tsx#L17)

---

### ContainerRef

Ƭ **ContainerRef**: `PIXI.Container`

#### Defined in

[components/Container/index.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Container/index.tsx#L36)

---

### ContainerType

Ƭ **ContainerType**: `React.FC`<[`ContainerPropsWithRef`](components_Container._internal_#containerpropswithref)\>

#### Defined in

[components/Container/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Container/index.tsx#L35)

## Variables

### Container

• **Container**: [`ContainerType`](components_Container#containertype)

The container for PIXI objects. It facilitates drag operations.

#### Defined in

[components/Container/index.tsx:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Container/index.tsx#L42)
