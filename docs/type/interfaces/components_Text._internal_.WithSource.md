[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Text](../modules/components_Text.md) / [<internal\>](../modules/components_Text._internal_.md) / WithSource

# Interface: WithSource

[components/Text](../modules/components_Text.md).[<internal>](../modules/components_Text._internal_.md).WithSource

## Table of contents

### Properties

- [image](components_Text._internal_.WithSource.md#image)
- [source](components_Text._internal_.WithSource.md#source)
- [video](components_Text._internal_.WithSource.md#video)

## Properties

### image

• `Optional` **image**: [`ImageSource`](../modules/components_Text._internal_.md#imagesource)

Directly apply an image

**`example`**

image="./image.png"

#### Defined in

node_modules/@inlet/react-pixi/index.d.ts:141

___

### source

• `Optional` **source**: [`AnySource`](../modules/components_Text._internal_.md#anysource)

Directly apply a source.
Can be an image, video, canvas, frame id or even a texture

**`example`**

source="./image.jpg"
source="./video.mp4"
source={document.querySelector('img')}
source={document.querySelector('video')}
source={document.querySelector('canvas')}

#### Defined in

node_modules/@inlet/react-pixi/index.d.ts:164

___

### video

• `Optional` **video**: [`VideoSource`](../modules/components_Text._internal_.md#videosource)

Directly apply a video

**`example`**

video="./video.mp4"

#### Defined in

node_modules/@inlet/react-pixi/index.d.ts:150
