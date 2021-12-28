[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Filter

# Class: Filter

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Filter

A filter is a special shader that applies post-processing effects to an input texture and writes into an output
render-target.

[Example](http://pixijs.io/examples/#/filters/blur-filter.js) of the
{@link PIXI.filters.BlurFilter BlurFilter}.

### Usage
Filters can be applied to any DisplayObject or Container.
PixiJS' `FilterSystem` renders the container into temporary Framebuffer,
then filter renders it to the screen.
Multiple filters can be added to the `filters` array property and stacked on each other.

```
const filter = new PIXI.Filter(myShaderVert, myShaderFrag, { myUniform: 0.5 });
const container = new PIXI.Container();
container.filters = [filter];
```

### Previous Version Differences

In PixiJS **v3**, a filter was always applied to _whole screen_.

In PixiJS **v4**, a filter can be applied _only part of the screen_.
Developers had to create a set of uniforms to deal with coordinates.

In PixiJS **v5** combines _both approaches_.
Developers can use normal coordinates of v3 and then allow filter to use partial Framebuffers,
bringing those extra uniforms into account.

Also be aware that we have changed default vertex shader, please consult
[Wiki](https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters).

### Frames

The following table summarizes the coordinate spaces used in the filtering pipeline:

<table>
<thead>
  <tr>
    <th>Coordinate Space</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Texture Coordinates</td>
    <td>
        The texture (or UV) coordinates in the input base-texture's space. These are normalized into the (0,1) range along
        both axes.
    </td>
  </tr>
  <tr>
    <td>World Space</td>
    <td>
        A point in the same space as the world bounds of any display-object (i.e. in the scene graph's space).
    </td>
  </tr>
  <tr>
    <td>Physical Pixels</td>
    <td>
        This is base-texture's space with the origin on the top-left. You can calculate these by multiplying the texture
        coordinates by the dimensions of the texture.
    </td>
  </tr>
</tbody>
</table>

### Built-in Uniforms

PixiJS viewport uses screen (CSS) coordinates, `(0, 0, renderer.screen.width, renderer.screen.height)`,
and `projectionMatrix` uniform maps it to the gl viewport.

**uSampler**

The most important uniform is the input texture that container was rendered into.
_Important note: as with all Framebuffers in PixiJS, both input and output are
premultiplied by alpha._

By default, input normalized coordinates are passed to fragment shader with `vTextureCoord`.
Use it to sample the input.

```
const fragment = `
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`;

const myFilter = new PIXI.Filter(null, fragment);
```

This filter is just one uniform less than {@link PIXI.filters.AlphaFilter AlphaFilter}.

**outputFrame**

The `outputFrame` holds the rectangle where filter is applied in screen (CSS) coordinates.
It's the same as `renderer.screen` for a fullscreen filter.
Only a part of  `outputFrame.zw` size of temporary Framebuffer is used,
`(0, 0, outputFrame.width, outputFrame.height)`,

Filters uses this quad to normalized (0-1) space, its passed into `aVertexPosition` attribute.
To calculate vertex position in screen space using normalized (0-1) space:

```
vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}
```

**inputSize**

Temporary framebuffer is different, it can be either the size of screen, either power-of-two.
The `inputSize.xy` are size of temporary framebuffer that holds input.
The `inputSize.zw` is inverted, it's a shortcut to evade division inside the shader.

Set `inputSize.xy = outputFrame.zw` for a fullscreen filter.

To calculate input normalized coordinate, you have to map it to filter normalized space.
Multiply by `outputFrame.zw` to get input coordinate.
Divide by `inputSize.xy` to get input normalized coordinate.

```
vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw); // same as /inputSize.xy
}
```
**resolution**

The `resolution` is the ratio of screen (CSS) pixels to real pixels.

**inputPixel**

`inputPixel.xy` is the size of framebuffer in real pixels, same as `inputSize.xy * resolution`
`inputPixel.zw` is inverted `inputPixel.xy`.

It's handy for filters that use neighbour pixels, like {@link PIXI.filters.FXAAFilter FXAAFilter}.

**inputClamp**

If you try to get info from outside of used part of Framebuffer - you'll get undefined behaviour.
For displacements, coordinates has to be clamped.

The `inputClamp.xy` is left-top pixel center, you may ignore it, because we use left-top part of Framebuffer
`inputClamp.zw` is bottom-right pixel center.

```
vec4 color = texture2D(uSampler, clamp(modifiedTextureCoord, inputClamp.xy, inputClamp.zw))
```
OR
```
vec4 color = texture2D(uSampler, min(modifigedTextureCoord, inputClamp.zw))
```

### Additional Information

Complete documentation on Filter usage is located in the
[Wiki](https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters).

Since PixiJS only had a handful of built-in filters, additional filters can be downloaded
[here](https://github.com/pixijs/pixi-filters) from the PixiJS Filters repository.

**`memberof`** PIXI

## Hierarchy

- [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

  ↳ **`Filter`**

  ↳↳ [`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md)

  ↳↳ [`SpriteMaskFilter`](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md)

  ↳↳ [`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.ISpriteMaskFilter.md)

  ↳↳ [`SpriteMaskFilter`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.SpriteMaskFilter.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Filter.md#constructor)

### Properties

- [\_resolution](components_ClusterNodeContainer._internal_.Filter.md#_resolution)
- [autoFit](components_ClusterNodeContainer._internal_.Filter.md#autofit)
- [enabled](components_ClusterNodeContainer._internal_.Filter.md#enabled)
- [legacy](components_ClusterNodeContainer._internal_.Filter.md#legacy)
- [multisample](components_ClusterNodeContainer._internal_.Filter.md#multisample)
- [padding](components_ClusterNodeContainer._internal_.Filter.md#padding)
- [program](components_ClusterNodeContainer._internal_.Filter.md#program)
- [state](components_ClusterNodeContainer._internal_.Filter.md#state)
- [uniformGroup](components_ClusterNodeContainer._internal_.Filter.md#uniformgroup)
- [SOURCE\_KEY\_MAP](components_ClusterNodeContainer._internal_.Filter.md#source_key_map)

### Accessors

- [blendMode](components_ClusterNodeContainer._internal_.Filter.md#blendmode)
- [resolution](components_ClusterNodeContainer._internal_.Filter.md#resolution)
- [uniforms](components_ClusterNodeContainer._internal_.Filter.md#uniforms)
- [defaultFragmentSrc](components_ClusterNodeContainer._internal_.Filter.md#defaultfragmentsrc)
- [defaultVertexSrc](components_ClusterNodeContainer._internal_.Filter.md#defaultvertexsrc)

### Methods

- [apply](components_ClusterNodeContainer._internal_.Filter.md#apply)
- [checkUniformExists](components_ClusterNodeContainer._internal_.Filter.md#checkuniformexists)
- [destroy](components_ClusterNodeContainer._internal_.Filter.md#destroy)
- [from](components_ClusterNodeContainer._internal_.Filter.md#from)

## Constructors

### constructor

• **new Filter**(`vertexSrc?`, `fragmentSrc?`, `uniforms?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexSrc?` | `string` |
| `fragmentSrc?` | `string` |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> |

#### Overrides

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[constructor](components_ClusterNodeContainer._internal_.Shader.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:1901

## Properties

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1895

___

### autoFit

• **autoFit**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:1888

___

### enabled

• **enabled**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:1887

___

### legacy

• **legacy**: `boolean`

Legacy filters use position and uvs from attributes (set by filter system)

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:1893

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1886

___

### padding

• **padding**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1885

___

### program

• **program**: [`Program`](components_ClusterNodeContainer._internal_.Program.md)

Program that the shader uses.

#### Inherited from

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[program](components_ClusterNodeContainer._internal_.Shader.md#program)

#### Defined in

node_modules/@pixi/core/index.d.ts:4223

___

### state

• **state**: [`State`](components_ClusterNodeContainer._internal_.State.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1894

___

### uniformGroup

• **uniformGroup**: [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Inherited from

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[uniformGroup](components_ClusterNodeContainer._internal_.Shader.md#uniformgroup)

#### Defined in

node_modules/@pixi/core/index.d.ts:4224

___

### SOURCE\_KEY\_MAP

▪ `Static` `Protected` **SOURCE\_KEY\_MAP**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`string`\>

Used for caching shader IDs

**`static`**

#### Defined in

node_modules/@pixi/core/index.d.ts:1953

## Accessors

### blendMode

• `get` **blendMode**(): [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

Sets the blendmode of the filter

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL

#### Returns

[`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1920

• `set` **blendMode**(`value`): `void`

Sets the blendmode of the filter

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1921

___

### resolution

• `get` **resolution**(): `number`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1928

• `set` **resolution**(`value`): `void`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1929

___

### uniforms

• `get` **uniforms**(): [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

Shader uniform values, shortcut for `uniformGroup.uniforms`.

**`readonly`**

#### Returns

[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

#### Inherited from

Shader.uniforms

#### Defined in

node_modules/@pixi/core/index.d.ts:4242

___

### defaultFragmentSrc

• `Static` `get` **defaultFragmentSrc**(): `string`

The default fragment shader source

**`static`**

**`constant`**

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:1945

___

### defaultVertexSrc

• `Static` `get` **defaultVertexSrc**(): `string`

The default vertex shader source

**`static`**

**`constant`**

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:1937

## Methods

### apply

▸ **apply**(`filterManager`, `input`, `output`, `clearMode?`, `_currentState?`): `void`

Applies the filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterManager` | [`FilterSystem`](components_ClusterNodeContainer._internal_.FilterSystem.md) | The renderer to retrieve the filter from |
| `input` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The input render target. |
| `output` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The target to output to. |
| `clearMode?` | [`CLEAR_MODES`](../enums/components_ClusterNodeContainer._internal_.CLEAR_MODES.md) | - |
| `_currentState?` | [`FilterState`](components_ClusterNodeContainer._internal_.FilterState.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1913

___

### checkUniformExists

▸ **checkUniformExists**(`name`, `group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `group` | [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\> |

#### Returns

`boolean`

#### Inherited from

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[checkUniformExists](components_ClusterNodeContainer._internal_.Shader.md#checkuniformexists)

#### Defined in

node_modules/@pixi/core/index.d.ts:4235

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[destroy](components_ClusterNodeContainer._internal_.Shader.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4236

___

### from

▸ `Static` **from**(`vertexSrc?`, `fragmentSrc?`, `uniforms?`): [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A short hand function to create a shader based of a vertex and fragment shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexSrc?` | `string` | The source of the vertex shader. |
| `fragmentSrc?` | `string` | The source of the fragment shader. |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> | Custom uniforms to use to augment the built-in ones. |

#### Returns

[`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A shiny new PixiJS shader!

#### Inherited from

[Shader](components_ClusterNodeContainer._internal_.Shader.md).[from](components_ClusterNodeContainer._internal_.Shader.md#from)

#### Defined in

node_modules/@pixi/core/index.d.ts:4251
