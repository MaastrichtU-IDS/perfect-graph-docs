[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](components_Container.md) / <internal\>

# Namespace: <internal\>

[components/Container](components_Container.md).<internal/>

## Table of contents

### Type aliases

- [ContainerPropsWithRef](components_Container._internal_#containerpropswithref)
- [InteractionEventTypes](components_Container._internal_#interactioneventtypes)
- [InteractionMouseEvents](components_Container._internal_#interactionmouseevents)
- [InteractionPixiEvents](components_Container._internal_#interactionpixievents)
- [InteractionPointerEvents](components_Container._internal_#interactionpointerevents)
- [InteractionTouchEvents](components_Container._internal_#interactiontouchevents)
- [PIXIBasicProps](components_Container._internal_#pixibasicprops)
- [PIXIDisplayObjectProps](components_Container._internal_#pixidisplayobjectprops)
- [PropsWithRef](components_Container._internal_#propswithref)

## Type aliases

### ContainerPropsWithRef

Ƭ **ContainerPropsWithRef**: [`PropsWithRef`](components_Container._internal_#propswithref)<`PIXI.Container`, [`ContainerProps`](components_Container#containerprops)\>

#### Defined in

[components/Container/index.tsx:30](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Container/index.tsx#L30)

---

### InteractionEventTypes

Ƭ **InteractionEventTypes**: [`InteractionPointerEvents`](components_Container._internal_#interactionpointerevents) \| [`InteractionTouchEvents`](components_Container._internal_#interactiontouchevents) \| [`InteractionMouseEvents`](components_Container._internal_#interactionmouseevents) \| [`InteractionPixiEvents`](components_Container._internal_#interactionpixievents)

#### Defined in

[type/pixi.ts:6](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/pixi.ts#L6)

---

### InteractionMouseEvents

Ƭ **InteractionMouseEvents**: `"rightdown"` \| `"mousedown"` \| `"rightup"` \| `"mouseup"` \| `"rightclick"` \| `"click"` \| `"rightupoutside"` \| `"mouseupoutside"` \| `"mousemove"` \| `"mouseover"` \| `"mouseout"`

#### Defined in

[type/pixi.ts:3](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/pixi.ts#L3)

---

### InteractionPixiEvents

Ƭ **InteractionPixiEvents**: `"added"` \| `"removed"`

#### Defined in

[type/pixi.ts:4](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/pixi.ts#L4)

---

### InteractionPointerEvents

Ƭ **InteractionPointerEvents**: `"pointerdown"` \| `"pointercancel"` \| `"pointerup"` \| `"pointertap"` \| `"pointerupoutside"` \| `"pointermove"` \| `"pointerover"` \| `"pointerout"`

#### Defined in

[type/pixi.ts:1](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/pixi.ts#L1)

---

### InteractionTouchEvents

Ƭ **InteractionTouchEvents**: `"touchstart"` \| `"touchcancel"` \| `"touchend"` \| `"touchendoutside"` \| `"touchmove"` \| `"tap"`

#### Defined in

[type/pixi.ts:2](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/pixi.ts#L2)

---

### PIXIBasicProps

Ƭ **PIXIBasicProps**: { `buttonMode?`: `boolean` ; `interactive?`: `boolean` } & { [k in InteractionEventTypes]?: Function }

#### Defined in

[type/index.ts:368](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L368)

---

### PIXIDisplayObjectProps

Ƭ **PIXIDisplayObjectProps**: `Object`

#### Type declaration

| Name           | Type      | Description                |
| :------------- | :-------- | :------------------------- |
| `buttonMode?`  | `boolean` | To make object clickable   |
| `interactive?` | `boolean` | To make object interactive |

#### Defined in

[type/index.ts:552](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L552)

---

### PropsWithRef

Ƭ **PropsWithRef**<`C`, `P`\>: `Omit`<`P`, `"ref"`\> & { `ref?`: `React.Ref`<`C`\> }

#### Type parameters

| Name |
| :--- |
| `C`  |
| `P`  |

#### Defined in

[type/index.ts:911](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L911)
