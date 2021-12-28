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

Ƭ **ContainerProps**: [`PIXIBasicProps`](type.md#pixibasicprops) & [`PIXIDisplayObjectProps`](type.md#pixidisplayobjectprops) & `Omit`<`React.ComponentProps`<typeof `PIXIReactContainer`\>, ``"children"``\> & { `children`: `Enumerable`<`React.ReactNode`\> ; `draggable?`: `boolean` ; `onDrag?`: (`param`: `Position`) => `void`  }

#### Defined in

[src/components/Container/index.tsx:16](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Container/index.tsx#L16)

___

### ContainerRef

Ƭ **ContainerRef**: `PIXI.Container`

#### Defined in

[src/components/Container/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Container/index.tsx#L35)

___

### ContainerType

Ƭ **ContainerType**: `React.FC`<`ContainerPropsWithRef`\>

#### Defined in

[src/components/Container/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Container/index.tsx#L34)

## Variables

### Container

• **Container**: [`ContainerType`](components_Container.md#containertype)

The container for PIXI objects. It facilitates drag operations.

#### Defined in

[src/components/Container/index.tsx:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Container/index.tsx#L41)
