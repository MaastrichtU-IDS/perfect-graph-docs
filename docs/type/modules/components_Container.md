[perfect-graph](../README.md) / [Modules](../modules.md) / components/Container

# Module: components/Container

## Table of contents

### Type aliases

- [ContainerProps](components_Container.md#containerprops)
- [ContainerRef](components_Container.md#containerref)
- [ContainerType](components_Container.md#containertype)

### Variables

- [Container](components_Container.md#container)

## Type aliases

### ContainerProps

Ƭ **ContainerProps**: `PIXIBasicProps` & `PIXIDisplayObjectProps` & `Omit`<`React.ComponentProps`<typeof `PIXIReactContainer`\>, ``"children"``\> & { `children`: `Enumerable`<`React.ReactNode`\> ; `draggable?`: `boolean` ; `onDrag?`: (`param`: `Position`) => `void`  }

#### Defined in

[components/Container/index.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Container/index.tsx#L17)

___

### ContainerRef

Ƭ **ContainerRef**: `PIXI.Container`

#### Defined in

[components/Container/index.tsx:36](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Container/index.tsx#L36)

___

### ContainerType

Ƭ **ContainerType**: `React.FC`<`ContainerPropsWithRef`\>

#### Defined in

[components/Container/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Container/index.tsx#L35)

## Variables

### Container

• **Container**: [`ContainerType`](components_Container.md#containertype)

The container for PIXI objects. It facilitates drag operations.

#### Defined in

[components/Container/index.tsx:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Container/index.tsx#L42)
