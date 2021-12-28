[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IRenderingContext

# Interface: IRenderingContext

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IRenderingContext

Mixed WebGL1/WebGL2 Rendering Context.
Either its WebGL2, either its WebGL1 with PixiJS polyfills on it

## Hierarchy

- `WebGL2RenderingContext`

  ↳ **`IRenderingContext`**

## Table of contents

### Properties

- [ACTIVE\_ATTRIBUTES](components_ClusterNodeContainer._internal_.IRenderingContext.md#active_attributes)
- [ACTIVE\_TEXTURE](components_ClusterNodeContainer._internal_.IRenderingContext.md#active_texture)
- [ACTIVE\_UNIFORMS](components_ClusterNodeContainer._internal_.IRenderingContext.md#active_uniforms)
- [ACTIVE\_UNIFORM\_BLOCKS](components_ClusterNodeContainer._internal_.IRenderingContext.md#active_uniform_blocks)
- [ALIASED\_LINE\_WIDTH\_RANGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#aliased_line_width_range)
- [ALIASED\_POINT\_SIZE\_RANGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#aliased_point_size_range)
- [ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#alpha)
- [ALPHA\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#alpha_bits)
- [ALREADY\_SIGNALED](components_ClusterNodeContainer._internal_.IRenderingContext.md#already_signaled)
- [ALWAYS](components_ClusterNodeContainer._internal_.IRenderingContext.md#always)
- [ANY\_SAMPLES\_PASSED](components_ClusterNodeContainer._internal_.IRenderingContext.md#any_samples_passed)
- [ANY\_SAMPLES\_PASSED\_CONSERVATIVE](components_ClusterNodeContainer._internal_.IRenderingContext.md#any_samples_passed_conservative)
- [ARRAY\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#array_buffer)
- [ARRAY\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#array_buffer_binding)
- [ATTACHED\_SHADERS](components_ClusterNodeContainer._internal_.IRenderingContext.md#attached_shaders)
- [BACK](components_ClusterNodeContainer._internal_.IRenderingContext.md#back)
- [BLEND](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend)
- [BLEND\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_color)
- [BLEND\_DST\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_dst_alpha)
- [BLEND\_DST\_RGB](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_dst_rgb)
- [BLEND\_EQUATION](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_equation)
- [BLEND\_EQUATION\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_equation_alpha)
- [BLEND\_EQUATION\_RGB](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_equation_rgb)
- [BLEND\_SRC\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_src_alpha)
- [BLEND\_SRC\_RGB](components_ClusterNodeContainer._internal_.IRenderingContext.md#blend_src_rgb)
- [BLUE\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#blue_bits)
- [BOOL](components_ClusterNodeContainer._internal_.IRenderingContext.md#bool)
- [BOOL\_VEC2](components_ClusterNodeContainer._internal_.IRenderingContext.md#bool_vec2)
- [BOOL\_VEC3](components_ClusterNodeContainer._internal_.IRenderingContext.md#bool_vec3)
- [BOOL\_VEC4](components_ClusterNodeContainer._internal_.IRenderingContext.md#bool_vec4)
- [BROWSER\_DEFAULT\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#browser_default_webgl)
- [BUFFER\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#buffer_size)
- [BUFFER\_USAGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#buffer_usage)
- [BYTE](components_ClusterNodeContainer._internal_.IRenderingContext.md#byte)
- [CCW](components_ClusterNodeContainer._internal_.IRenderingContext.md#ccw)
- [CLAMP\_TO\_EDGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#clamp_to_edge)
- [COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#color)
- [COLOR\_ATTACHMENT0](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment0)
- [COLOR\_ATTACHMENT1](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment1)
- [COLOR\_ATTACHMENT10](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment10)
- [COLOR\_ATTACHMENT11](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment11)
- [COLOR\_ATTACHMENT12](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment12)
- [COLOR\_ATTACHMENT13](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment13)
- [COLOR\_ATTACHMENT14](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment14)
- [COLOR\_ATTACHMENT15](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment15)
- [COLOR\_ATTACHMENT2](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment2)
- [COLOR\_ATTACHMENT3](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment3)
- [COLOR\_ATTACHMENT4](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment4)
- [COLOR\_ATTACHMENT5](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment5)
- [COLOR\_ATTACHMENT6](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment6)
- [COLOR\_ATTACHMENT7](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment7)
- [COLOR\_ATTACHMENT8](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment8)
- [COLOR\_ATTACHMENT9](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_attachment9)
- [COLOR\_BUFFER\_BIT](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_buffer_bit)
- [COLOR\_CLEAR\_VALUE](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_clear_value)
- [COLOR\_WRITEMASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#color_writemask)
- [COMPARE\_REF\_TO\_TEXTURE](components_ClusterNodeContainer._internal_.IRenderingContext.md#compare_ref_to_texture)
- [COMPILE\_STATUS](components_ClusterNodeContainer._internal_.IRenderingContext.md#compile_status)
- [COMPRESSED\_TEXTURE\_FORMATS](components_ClusterNodeContainer._internal_.IRenderingContext.md#compressed_texture_formats)
- [CONDITION\_SATISFIED](components_ClusterNodeContainer._internal_.IRenderingContext.md#condition_satisfied)
- [CONSTANT\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#constant_alpha)
- [CONSTANT\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#constant_color)
- [CONTEXT\_LOST\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#context_lost_webgl)
- [COPY\_READ\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#copy_read_buffer)
- [COPY\_READ\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#copy_read_buffer_binding)
- [COPY\_WRITE\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#copy_write_buffer)
- [COPY\_WRITE\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#copy_write_buffer_binding)
- [CULL\_FACE](components_ClusterNodeContainer._internal_.IRenderingContext.md#cull_face)
- [CULL\_FACE\_MODE](components_ClusterNodeContainer._internal_.IRenderingContext.md#cull_face_mode)
- [CURRENT\_PROGRAM](components_ClusterNodeContainer._internal_.IRenderingContext.md#current_program)
- [CURRENT\_QUERY](components_ClusterNodeContainer._internal_.IRenderingContext.md#current_query)
- [CURRENT\_VERTEX\_ATTRIB](components_ClusterNodeContainer._internal_.IRenderingContext.md#current_vertex_attrib)
- [CW](components_ClusterNodeContainer._internal_.IRenderingContext.md#cw)
- [DECR](components_ClusterNodeContainer._internal_.IRenderingContext.md#decr)
- [DECR\_WRAP](components_ClusterNodeContainer._internal_.IRenderingContext.md#decr_wrap)
- [DELETE\_STATUS](components_ClusterNodeContainer._internal_.IRenderingContext.md#delete_status)
- [DEPTH](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth)
- [DEPTH24\_STENCIL8](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth24_stencil8)
- [DEPTH32F\_STENCIL8](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth32f_stencil8)
- [DEPTH\_ATTACHMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_attachment)
- [DEPTH\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_bits)
- [DEPTH\_BUFFER\_BIT](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_buffer_bit)
- [DEPTH\_CLEAR\_VALUE](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_clear_value)
- [DEPTH\_COMPONENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_component)
- [DEPTH\_COMPONENT16](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_component16)
- [DEPTH\_COMPONENT24](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_component24)
- [DEPTH\_COMPONENT32F](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_component32f)
- [DEPTH\_FUNC](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_func)
- [DEPTH\_RANGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_range)
- [DEPTH\_STENCIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_stencil)
- [DEPTH\_STENCIL\_ATTACHMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_stencil_attachment)
- [DEPTH\_TEST](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_test)
- [DEPTH\_WRITEMASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#depth_writemask)
- [DITHER](components_ClusterNodeContainer._internal_.IRenderingContext.md#dither)
- [DONT\_CARE](components_ClusterNodeContainer._internal_.IRenderingContext.md#dont_care)
- [DRAW\_BUFFER0](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer0)
- [DRAW\_BUFFER1](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer1)
- [DRAW\_BUFFER10](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer10)
- [DRAW\_BUFFER11](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer11)
- [DRAW\_BUFFER12](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer12)
- [DRAW\_BUFFER13](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer13)
- [DRAW\_BUFFER14](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer14)
- [DRAW\_BUFFER15](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer15)
- [DRAW\_BUFFER2](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer2)
- [DRAW\_BUFFER3](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer3)
- [DRAW\_BUFFER4](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer4)
- [DRAW\_BUFFER5](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer5)
- [DRAW\_BUFFER6](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer6)
- [DRAW\_BUFFER7](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer7)
- [DRAW\_BUFFER8](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer8)
- [DRAW\_BUFFER9](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_buffer9)
- [DRAW\_FRAMEBUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_framebuffer)
- [DRAW\_FRAMEBUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#draw_framebuffer_binding)
- [DST\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#dst_alpha)
- [DST\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#dst_color)
- [DYNAMIC\_COPY](components_ClusterNodeContainer._internal_.IRenderingContext.md#dynamic_copy)
- [DYNAMIC\_DRAW](components_ClusterNodeContainer._internal_.IRenderingContext.md#dynamic_draw)
- [DYNAMIC\_READ](components_ClusterNodeContainer._internal_.IRenderingContext.md#dynamic_read)
- [ELEMENT\_ARRAY\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#element_array_buffer)
- [ELEMENT\_ARRAY\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#element_array_buffer_binding)
- [EQUAL](components_ClusterNodeContainer._internal_.IRenderingContext.md#equal)
- [FASTEST](components_ClusterNodeContainer._internal_.IRenderingContext.md#fastest)
- [FLOAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#float)
- [FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_32_unsigned_int_24_8_rev)
- [FLOAT\_MAT2](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat2)
- [FLOAT\_MAT2x3](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat2x3)
- [FLOAT\_MAT2x4](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat2x4)
- [FLOAT\_MAT3](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat3)
- [FLOAT\_MAT3x2](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat3x2)
- [FLOAT\_MAT3x4](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat3x4)
- [FLOAT\_MAT4](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat4)
- [FLOAT\_MAT4x2](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat4x2)
- [FLOAT\_MAT4x3](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_mat4x3)
- [FLOAT\_VEC2](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_vec2)
- [FLOAT\_VEC3](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_vec3)
- [FLOAT\_VEC4](components_ClusterNodeContainer._internal_.IRenderingContext.md#float_vec4)
- [FRAGMENT\_SHADER](components_ClusterNodeContainer._internal_.IRenderingContext.md#fragment_shader)
- [FRAGMENT\_SHADER\_DERIVATIVE\_HINT](components_ClusterNodeContainer._internal_.IRenderingContext.md#fragment_shader_derivative_hint)
- [FRAMEBUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer)
- [FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_alpha_size)
- [FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_blue_size)
- [FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_color_encoding)
- [FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_component_type)
- [FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_depth_size)
- [FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_green_size)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_object_name)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_object_type)
- [FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_red_size)
- [FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_stencil_size)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_texture_cube_map_face)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_texture_layer)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_attachment_texture_level)
- [FRAMEBUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_binding)
- [FRAMEBUFFER\_COMPLETE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_complete)
- [FRAMEBUFFER\_DEFAULT](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_default)
- [FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_incomplete_attachment)
- [FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_incomplete_dimensions)
- [FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_incomplete_missing_attachment)
- [FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_incomplete_multisample)
- [FRAMEBUFFER\_UNSUPPORTED](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffer_unsupported)
- [FRONT](components_ClusterNodeContainer._internal_.IRenderingContext.md#front)
- [FRONT\_AND\_BACK](components_ClusterNodeContainer._internal_.IRenderingContext.md#front_and_back)
- [FRONT\_FACE](components_ClusterNodeContainer._internal_.IRenderingContext.md#front_face)
- [FUNC\_ADD](components_ClusterNodeContainer._internal_.IRenderingContext.md#func_add)
- [FUNC\_REVERSE\_SUBTRACT](components_ClusterNodeContainer._internal_.IRenderingContext.md#func_reverse_subtract)
- [FUNC\_SUBTRACT](components_ClusterNodeContainer._internal_.IRenderingContext.md#func_subtract)
- [GENERATE\_MIPMAP\_HINT](components_ClusterNodeContainer._internal_.IRenderingContext.md#generate_mipmap_hint)
- [GEQUAL](components_ClusterNodeContainer._internal_.IRenderingContext.md#gequal)
- [GREATER](components_ClusterNodeContainer._internal_.IRenderingContext.md#greater)
- [GREEN\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#green_bits)
- [HALF\_FLOAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#half_float)
- [HIGH\_FLOAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#high_float)
- [HIGH\_INT](components_ClusterNodeContainer._internal_.IRenderingContext.md#high_int)
- [IMPLEMENTATION\_COLOR\_READ\_FORMAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#implementation_color_read_format)
- [IMPLEMENTATION\_COLOR\_READ\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#implementation_color_read_type)
- [INCR](components_ClusterNodeContainer._internal_.IRenderingContext.md#incr)
- [INCR\_WRAP](components_ClusterNodeContainer._internal_.IRenderingContext.md#incr_wrap)
- [INT](components_ClusterNodeContainer._internal_.IRenderingContext.md#int)
- [INTERLEAVED\_ATTRIBS](components_ClusterNodeContainer._internal_.IRenderingContext.md#interleaved_attribs)
- [INT\_2\_10\_10\_10\_REV](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_2_10_10_10_rev)
- [INT\_SAMPLER\_2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_sampler_2d)
- [INT\_SAMPLER\_2D\_ARRAY](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_sampler_2d_array)
- [INT\_SAMPLER\_3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_sampler_3d)
- [INT\_SAMPLER\_CUBE](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_sampler_cube)
- [INT\_VEC2](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_vec2)
- [INT\_VEC3](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_vec3)
- [INT\_VEC4](components_ClusterNodeContainer._internal_.IRenderingContext.md#int_vec4)
- [INVALID\_ENUM](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalid_enum)
- [INVALID\_FRAMEBUFFER\_OPERATION](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalid_framebuffer_operation)
- [INVALID\_INDEX](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalid_index)
- [INVALID\_OPERATION](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalid_operation)
- [INVALID\_VALUE](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalid_value)
- [INVERT](components_ClusterNodeContainer._internal_.IRenderingContext.md#invert)
- [KEEP](components_ClusterNodeContainer._internal_.IRenderingContext.md#keep)
- [LEQUAL](components_ClusterNodeContainer._internal_.IRenderingContext.md#lequal)
- [LESS](components_ClusterNodeContainer._internal_.IRenderingContext.md#less)
- [LINEAR](components_ClusterNodeContainer._internal_.IRenderingContext.md#linear)
- [LINEAR\_MIPMAP\_LINEAR](components_ClusterNodeContainer._internal_.IRenderingContext.md#linear_mipmap_linear)
- [LINEAR\_MIPMAP\_NEAREST](components_ClusterNodeContainer._internal_.IRenderingContext.md#linear_mipmap_nearest)
- [LINES](components_ClusterNodeContainer._internal_.IRenderingContext.md#lines)
- [LINE\_LOOP](components_ClusterNodeContainer._internal_.IRenderingContext.md#line_loop)
- [LINE\_STRIP](components_ClusterNodeContainer._internal_.IRenderingContext.md#line_strip)
- [LINE\_WIDTH](components_ClusterNodeContainer._internal_.IRenderingContext.md#line_width)
- [LINK\_STATUS](components_ClusterNodeContainer._internal_.IRenderingContext.md#link_status)
- [LOW\_FLOAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#low_float)
- [LOW\_INT](components_ClusterNodeContainer._internal_.IRenderingContext.md#low_int)
- [LUMINANCE](components_ClusterNodeContainer._internal_.IRenderingContext.md#luminance)
- [LUMINANCE\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#luminance_alpha)
- [MAX](components_ClusterNodeContainer._internal_.IRenderingContext.md#max)
- [MAX\_3D\_TEXTURE\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_3d_texture_size)
- [MAX\_ARRAY\_TEXTURE\_LAYERS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_array_texture_layers)
- [MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_client_wait_timeout_webgl)
- [MAX\_COLOR\_ATTACHMENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_color_attachments)
- [MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_combined_fragment_uniform_components)
- [MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_combined_texture_image_units)
- [MAX\_COMBINED\_UNIFORM\_BLOCKS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_combined_uniform_blocks)
- [MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_combined_vertex_uniform_components)
- [MAX\_CUBE\_MAP\_TEXTURE\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_cube_map_texture_size)
- [MAX\_DRAW\_BUFFERS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_draw_buffers)
- [MAX\_ELEMENTS\_INDICES](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_elements_indices)
- [MAX\_ELEMENTS\_VERTICES](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_elements_vertices)
- [MAX\_ELEMENT\_INDEX](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_element_index)
- [MAX\_FRAGMENT\_INPUT\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_fragment_input_components)
- [MAX\_FRAGMENT\_UNIFORM\_BLOCKS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_fragment_uniform_blocks)
- [MAX\_FRAGMENT\_UNIFORM\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_fragment_uniform_components)
- [MAX\_FRAGMENT\_UNIFORM\_VECTORS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_fragment_uniform_vectors)
- [MAX\_PROGRAM\_TEXEL\_OFFSET](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_program_texel_offset)
- [MAX\_RENDERBUFFER\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_renderbuffer_size)
- [MAX\_SAMPLES](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_samples)
- [MAX\_SERVER\_WAIT\_TIMEOUT](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_server_wait_timeout)
- [MAX\_TEXTURE\_IMAGE\_UNITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_texture_image_units)
- [MAX\_TEXTURE\_LOD\_BIAS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_texture_lod_bias)
- [MAX\_TEXTURE\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_texture_size)
- [MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_transform_feedback_interleaved_components)
- [MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_transform_feedback_separate_attribs)
- [MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_transform_feedback_separate_components)
- [MAX\_UNIFORM\_BLOCK\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_uniform_block_size)
- [MAX\_UNIFORM\_BUFFER\_BINDINGS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_uniform_buffer_bindings)
- [MAX\_VARYING\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_varying_components)
- [MAX\_VARYING\_VECTORS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_varying_vectors)
- [MAX\_VERTEX\_ATTRIBS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_attribs)
- [MAX\_VERTEX\_OUTPUT\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_output_components)
- [MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_texture_image_units)
- [MAX\_VERTEX\_UNIFORM\_BLOCKS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_uniform_blocks)
- [MAX\_VERTEX\_UNIFORM\_COMPONENTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_uniform_components)
- [MAX\_VERTEX\_UNIFORM\_VECTORS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_vertex_uniform_vectors)
- [MAX\_VIEWPORT\_DIMS](components_ClusterNodeContainer._internal_.IRenderingContext.md#max_viewport_dims)
- [MEDIUM\_FLOAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#medium_float)
- [MEDIUM\_INT](components_ClusterNodeContainer._internal_.IRenderingContext.md#medium_int)
- [MIN](components_ClusterNodeContainer._internal_.IRenderingContext.md#min)
- [MIN\_PROGRAM\_TEXEL\_OFFSET](components_ClusterNodeContainer._internal_.IRenderingContext.md#min_program_texel_offset)
- [MIRRORED\_REPEAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#mirrored_repeat)
- [NEAREST](components_ClusterNodeContainer._internal_.IRenderingContext.md#nearest)
- [NEAREST\_MIPMAP\_LINEAR](components_ClusterNodeContainer._internal_.IRenderingContext.md#nearest_mipmap_linear)
- [NEAREST\_MIPMAP\_NEAREST](components_ClusterNodeContainer._internal_.IRenderingContext.md#nearest_mipmap_nearest)
- [NEVER](components_ClusterNodeContainer._internal_.IRenderingContext.md#never)
- [NICEST](components_ClusterNodeContainer._internal_.IRenderingContext.md#nicest)
- [NONE](components_ClusterNodeContainer._internal_.IRenderingContext.md#none)
- [NOTEQUAL](components_ClusterNodeContainer._internal_.IRenderingContext.md#notequal)
- [NO\_ERROR](components_ClusterNodeContainer._internal_.IRenderingContext.md#no_error)
- [OBJECT\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#object_type)
- [ONE](components_ClusterNodeContainer._internal_.IRenderingContext.md#one)
- [ONE\_MINUS\_CONSTANT\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_constant_alpha)
- [ONE\_MINUS\_CONSTANT\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_constant_color)
- [ONE\_MINUS\_DST\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_dst_alpha)
- [ONE\_MINUS\_DST\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_dst_color)
- [ONE\_MINUS\_SRC\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_src_alpha)
- [ONE\_MINUS\_SRC\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#one_minus_src_color)
- [OUT\_OF\_MEMORY](components_ClusterNodeContainer._internal_.IRenderingContext.md#out_of_memory)
- [PACK\_ALIGNMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#pack_alignment)
- [PACK\_ROW\_LENGTH](components_ClusterNodeContainer._internal_.IRenderingContext.md#pack_row_length)
- [PACK\_SKIP\_PIXELS](components_ClusterNodeContainer._internal_.IRenderingContext.md#pack_skip_pixels)
- [PACK\_SKIP\_ROWS](components_ClusterNodeContainer._internal_.IRenderingContext.md#pack_skip_rows)
- [PIXEL\_PACK\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#pixel_pack_buffer)
- [PIXEL\_PACK\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#pixel_pack_buffer_binding)
- [PIXEL\_UNPACK\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#pixel_unpack_buffer)
- [PIXEL\_UNPACK\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#pixel_unpack_buffer_binding)
- [POINTS](components_ClusterNodeContainer._internal_.IRenderingContext.md#points)
- [POLYGON\_OFFSET\_FACTOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#polygon_offset_factor)
- [POLYGON\_OFFSET\_FILL](components_ClusterNodeContainer._internal_.IRenderingContext.md#polygon_offset_fill)
- [POLYGON\_OFFSET\_UNITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#polygon_offset_units)
- [QUERY\_RESULT](components_ClusterNodeContainer._internal_.IRenderingContext.md#query_result)
- [QUERY\_RESULT\_AVAILABLE](components_ClusterNodeContainer._internal_.IRenderingContext.md#query_result_available)
- [R11F\_G11F\_B10F](components_ClusterNodeContainer._internal_.IRenderingContext.md#r11f_g11f_b10f)
- [R16F](components_ClusterNodeContainer._internal_.IRenderingContext.md#r16f)
- [R16I](components_ClusterNodeContainer._internal_.IRenderingContext.md#r16i)
- [R16UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#r16ui)
- [R32F](components_ClusterNodeContainer._internal_.IRenderingContext.md#r32f)
- [R32I](components_ClusterNodeContainer._internal_.IRenderingContext.md#r32i)
- [R32UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#r32ui)
- [R8](components_ClusterNodeContainer._internal_.IRenderingContext.md#r8)
- [R8I](components_ClusterNodeContainer._internal_.IRenderingContext.md#r8i)
- [R8UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#r8ui)
- [R8\_SNORM](components_ClusterNodeContainer._internal_.IRenderingContext.md#r8_snorm)
- [RASTERIZER\_DISCARD](components_ClusterNodeContainer._internal_.IRenderingContext.md#rasterizer_discard)
- [READ\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#read_buffer)
- [READ\_FRAMEBUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#read_framebuffer)
- [READ\_FRAMEBUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#read_framebuffer_binding)
- [RED](components_ClusterNodeContainer._internal_.IRenderingContext.md#red)
- [RED\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#red_bits)
- [RED\_INTEGER](components_ClusterNodeContainer._internal_.IRenderingContext.md#red_integer)
- [RENDERBUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer)
- [RENDERBUFFER\_ALPHA\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_alpha_size)
- [RENDERBUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_binding)
- [RENDERBUFFER\_BLUE\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_blue_size)
- [RENDERBUFFER\_DEPTH\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_depth_size)
- [RENDERBUFFER\_GREEN\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_green_size)
- [RENDERBUFFER\_HEIGHT](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_height)
- [RENDERBUFFER\_INTERNAL\_FORMAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_internal_format)
- [RENDERBUFFER\_RED\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_red_size)
- [RENDERBUFFER\_SAMPLES](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_samples)
- [RENDERBUFFER\_STENCIL\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_stencil_size)
- [RENDERBUFFER\_WIDTH](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbuffer_width)
- [RENDERER](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderer)
- [REPEAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#repeat)
- [REPLACE](components_ClusterNodeContainer._internal_.IRenderingContext.md#replace)
- [RG](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg)
- [RG16F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg16f)
- [RG16I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg16i)
- [RG16UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg16ui)
- [RG32F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg32f)
- [RG32I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg32i)
- [RG32UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg32ui)
- [RG8](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg8)
- [RG8I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg8i)
- [RG8UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg8ui)
- [RG8\_SNORM](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg8_snorm)
- [RGB](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb)
- [RGB10\_A2](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb10_a2)
- [RGB10\_A2UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb10_a2ui)
- [RGB16F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb16f)
- [RGB16I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb16i)
- [RGB16UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb16ui)
- [RGB32F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb32f)
- [RGB32I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb32i)
- [RGB32UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb32ui)
- [RGB565](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb565)
- [RGB5\_A1](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb5_a1)
- [RGB8](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb8)
- [RGB8I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb8i)
- [RGB8UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb8ui)
- [RGB8\_SNORM](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb8_snorm)
- [RGB9\_E5](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb9_e5)
- [RGBA](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba)
- [RGBA16F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba16f)
- [RGBA16I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba16i)
- [RGBA16UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba16ui)
- [RGBA32F](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba32f)
- [RGBA32I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba32i)
- [RGBA32UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba32ui)
- [RGBA4](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba4)
- [RGBA8](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba8)
- [RGBA8I](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba8i)
- [RGBA8UI](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba8ui)
- [RGBA8\_SNORM](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba8_snorm)
- [RGBA\_INTEGER](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgba_integer)
- [RGB\_INTEGER](components_ClusterNodeContainer._internal_.IRenderingContext.md#rgb_integer)
- [RG\_INTEGER](components_ClusterNodeContainer._internal_.IRenderingContext.md#rg_integer)
- [SAMPLER\_2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_2d)
- [SAMPLER\_2D\_ARRAY](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_2d_array)
- [SAMPLER\_2D\_ARRAY\_SHADOW](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_2d_array_shadow)
- [SAMPLER\_2D\_SHADOW](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_2d_shadow)
- [SAMPLER\_3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_3d)
- [SAMPLER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_binding)
- [SAMPLER\_CUBE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_cube)
- [SAMPLER\_CUBE\_SHADOW](components_ClusterNodeContainer._internal_.IRenderingContext.md#sampler_cube_shadow)
- [SAMPLES](components_ClusterNodeContainer._internal_.IRenderingContext.md#samples)
- [SAMPLE\_ALPHA\_TO\_COVERAGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sample_alpha_to_coverage)
- [SAMPLE\_BUFFERS](components_ClusterNodeContainer._internal_.IRenderingContext.md#sample_buffers)
- [SAMPLE\_COVERAGE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sample_coverage)
- [SAMPLE\_COVERAGE\_INVERT](components_ClusterNodeContainer._internal_.IRenderingContext.md#sample_coverage_invert)
- [SAMPLE\_COVERAGE\_VALUE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sample_coverage_value)
- [SCISSOR\_BOX](components_ClusterNodeContainer._internal_.IRenderingContext.md#scissor_box)
- [SCISSOR\_TEST](components_ClusterNodeContainer._internal_.IRenderingContext.md#scissor_test)
- [SEPARATE\_ATTRIBS](components_ClusterNodeContainer._internal_.IRenderingContext.md#separate_attribs)
- [SHADER\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#shader_type)
- [SHADING\_LANGUAGE\_VERSION](components_ClusterNodeContainer._internal_.IRenderingContext.md#shading_language_version)
- [SHORT](components_ClusterNodeContainer._internal_.IRenderingContext.md#short)
- [SIGNALED](components_ClusterNodeContainer._internal_.IRenderingContext.md#signaled)
- [SIGNED\_NORMALIZED](components_ClusterNodeContainer._internal_.IRenderingContext.md#signed_normalized)
- [SRC\_ALPHA](components_ClusterNodeContainer._internal_.IRenderingContext.md#src_alpha)
- [SRC\_ALPHA\_SATURATE](components_ClusterNodeContainer._internal_.IRenderingContext.md#src_alpha_saturate)
- [SRC\_COLOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#src_color)
- [SRGB](components_ClusterNodeContainer._internal_.IRenderingContext.md#srgb)
- [SRGB8](components_ClusterNodeContainer._internal_.IRenderingContext.md#srgb8)
- [SRGB8\_ALPHA8](components_ClusterNodeContainer._internal_.IRenderingContext.md#srgb8_alpha8)
- [STATIC\_COPY](components_ClusterNodeContainer._internal_.IRenderingContext.md#static_copy)
- [STATIC\_DRAW](components_ClusterNodeContainer._internal_.IRenderingContext.md#static_draw)
- [STATIC\_READ](components_ClusterNodeContainer._internal_.IRenderingContext.md#static_read)
- [STENCIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil)
- [STENCIL\_ATTACHMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_attachment)
- [STENCIL\_BACK\_FAIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_fail)
- [STENCIL\_BACK\_FUNC](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_func)
- [STENCIL\_BACK\_PASS\_DEPTH\_FAIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_pass_depth_fail)
- [STENCIL\_BACK\_PASS\_DEPTH\_PASS](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_pass_depth_pass)
- [STENCIL\_BACK\_REF](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_ref)
- [STENCIL\_BACK\_VALUE\_MASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_value_mask)
- [STENCIL\_BACK\_WRITEMASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_back_writemask)
- [STENCIL\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_bits)
- [STENCIL\_BUFFER\_BIT](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_buffer_bit)
- [STENCIL\_CLEAR\_VALUE](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_clear_value)
- [STENCIL\_FAIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_fail)
- [STENCIL\_FUNC](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_func)
- [STENCIL\_INDEX8](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_index8)
- [STENCIL\_PASS\_DEPTH\_FAIL](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_pass_depth_fail)
- [STENCIL\_PASS\_DEPTH\_PASS](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_pass_depth_pass)
- [STENCIL\_REF](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_ref)
- [STENCIL\_TEST](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_test)
- [STENCIL\_VALUE\_MASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_value_mask)
- [STENCIL\_WRITEMASK](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencil_writemask)
- [STREAM\_COPY](components_ClusterNodeContainer._internal_.IRenderingContext.md#stream_copy)
- [STREAM\_DRAW](components_ClusterNodeContainer._internal_.IRenderingContext.md#stream_draw)
- [STREAM\_READ](components_ClusterNodeContainer._internal_.IRenderingContext.md#stream_read)
- [SUBPIXEL\_BITS](components_ClusterNodeContainer._internal_.IRenderingContext.md#subpixel_bits)
- [SYNC\_CONDITION](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_condition)
- [SYNC\_FENCE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_fence)
- [SYNC\_FLAGS](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_flags)
- [SYNC\_FLUSH\_COMMANDS\_BIT](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_flush_commands_bit)
- [SYNC\_GPU\_COMMANDS\_COMPLETE](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_gpu_commands_complete)
- [SYNC\_STATUS](components_ClusterNodeContainer._internal_.IRenderingContext.md#sync_status)
- [TEXTURE](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture)
- [TEXTURE0](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture0)
- [TEXTURE1](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture1)
- [TEXTURE10](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture10)
- [TEXTURE11](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture11)
- [TEXTURE12](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture12)
- [TEXTURE13](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture13)
- [TEXTURE14](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture14)
- [TEXTURE15](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture15)
- [TEXTURE16](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture16)
- [TEXTURE17](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture17)
- [TEXTURE18](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture18)
- [TEXTURE19](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture19)
- [TEXTURE2](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture2)
- [TEXTURE20](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture20)
- [TEXTURE21](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture21)
- [TEXTURE22](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture22)
- [TEXTURE23](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture23)
- [TEXTURE24](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture24)
- [TEXTURE25](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture25)
- [TEXTURE26](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture26)
- [TEXTURE27](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture27)
- [TEXTURE28](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture28)
- [TEXTURE29](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture29)
- [TEXTURE3](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture3)
- [TEXTURE30](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture30)
- [TEXTURE31](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture31)
- [TEXTURE4](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture4)
- [TEXTURE5](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture5)
- [TEXTURE6](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture6)
- [TEXTURE7](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture7)
- [TEXTURE8](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture8)
- [TEXTURE9](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture9)
- [TEXTURE\_2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_2d)
- [TEXTURE\_2D\_ARRAY](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_2d_array)
- [TEXTURE\_3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_3d)
- [TEXTURE\_BASE\_LEVEL](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_base_level)
- [TEXTURE\_BINDING\_2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_binding_2d)
- [TEXTURE\_BINDING\_2D\_ARRAY](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_binding_2d_array)
- [TEXTURE\_BINDING\_3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_binding_3d)
- [TEXTURE\_BINDING\_CUBE\_MAP](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_binding_cube_map)
- [TEXTURE\_COMPARE\_FUNC](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_compare_func)
- [TEXTURE\_COMPARE\_MODE](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_compare_mode)
- [TEXTURE\_CUBE\_MAP](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_X](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_negative_x)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_negative_y)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_negative_z)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_X](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_positive_x)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Y](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_positive_y)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Z](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_cube_map_positive_z)
- [TEXTURE\_IMMUTABLE\_FORMAT](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_immutable_format)
- [TEXTURE\_IMMUTABLE\_LEVELS](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_immutable_levels)
- [TEXTURE\_MAG\_FILTER](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_mag_filter)
- [TEXTURE\_MAX\_LEVEL](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_max_level)
- [TEXTURE\_MAX\_LOD](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_max_lod)
- [TEXTURE\_MIN\_FILTER](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_min_filter)
- [TEXTURE\_MIN\_LOD](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_min_lod)
- [TEXTURE\_WRAP\_R](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_wrap_r)
- [TEXTURE\_WRAP\_S](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_wrap_s)
- [TEXTURE\_WRAP\_T](components_ClusterNodeContainer._internal_.IRenderingContext.md#texture_wrap_t)
- [TIMEOUT\_EXPIRED](components_ClusterNodeContainer._internal_.IRenderingContext.md#timeout_expired)
- [TIMEOUT\_IGNORED](components_ClusterNodeContainer._internal_.IRenderingContext.md#timeout_ignored)
- [TRANSFORM\_FEEDBACK](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback)
- [TRANSFORM\_FEEDBACK\_ACTIVE](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_active)
- [TRANSFORM\_FEEDBACK\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_binding)
- [TRANSFORM\_FEEDBACK\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_buffer)
- [TRANSFORM\_FEEDBACK\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_buffer_binding)
- [TRANSFORM\_FEEDBACK\_BUFFER\_MODE](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_buffer_mode)
- [TRANSFORM\_FEEDBACK\_BUFFER\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_buffer_size)
- [TRANSFORM\_FEEDBACK\_BUFFER\_START](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_buffer_start)
- [TRANSFORM\_FEEDBACK\_PAUSED](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_paused)
- [TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_primitives_written)
- [TRANSFORM\_FEEDBACK\_VARYINGS](components_ClusterNodeContainer._internal_.IRenderingContext.md#transform_feedback_varyings)
- [TRIANGLES](components_ClusterNodeContainer._internal_.IRenderingContext.md#triangles)
- [TRIANGLE\_FAN](components_ClusterNodeContainer._internal_.IRenderingContext.md#triangle_fan)
- [TRIANGLE\_STRIP](components_ClusterNodeContainer._internal_.IRenderingContext.md#triangle_strip)
- [UNIFORM\_ARRAY\_STRIDE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_array_stride)
- [UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_active_uniforms)
- [UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_active_uniform_indices)
- [UNIFORM\_BLOCK\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_binding)
- [UNIFORM\_BLOCK\_DATA\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_data_size)
- [UNIFORM\_BLOCK\_INDEX](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_index)
- [UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_referenced_by_fragment_shader)
- [UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_block_referenced_by_vertex_shader)
- [UNIFORM\_BUFFER](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_buffer)
- [UNIFORM\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_buffer_binding)
- [UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_buffer_offset_alignment)
- [UNIFORM\_BUFFER\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_buffer_size)
- [UNIFORM\_BUFFER\_START](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_buffer_start)
- [UNIFORM\_IS\_ROW\_MAJOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_is_row_major)
- [UNIFORM\_MATRIX\_STRIDE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_matrix_stride)
- [UNIFORM\_OFFSET](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_offset)
- [UNIFORM\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_size)
- [UNIFORM\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform_type)
- [UNPACK\_ALIGNMENT](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_alignment)
- [UNPACK\_COLORSPACE\_CONVERSION\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_colorspace_conversion_webgl)
- [UNPACK\_FLIP\_Y\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_flip_y_webgl)
- [UNPACK\_IMAGE\_HEIGHT](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_image_height)
- [UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_premultiply_alpha_webgl)
- [UNPACK\_ROW\_LENGTH](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_row_length)
- [UNPACK\_SKIP\_IMAGES](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_skip_images)
- [UNPACK\_SKIP\_PIXELS](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_skip_pixels)
- [UNPACK\_SKIP\_ROWS](components_ClusterNodeContainer._internal_.IRenderingContext.md#unpack_skip_rows)
- [UNSIGNALED](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsignaled)
- [UNSIGNED\_BYTE](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_byte)
- [UNSIGNED\_INT](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int)
- [UNSIGNED\_INT\_10F\_11F\_11F\_REV](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_10f_11f_11f_rev)
- [UNSIGNED\_INT\_24\_8](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_24_8)
- [UNSIGNED\_INT\_2\_10\_10\_10\_REV](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_2_10_10_10_rev)
- [UNSIGNED\_INT\_5\_9\_9\_9\_REV](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_5_9_9_9_rev)
- [UNSIGNED\_INT\_SAMPLER\_2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_sampler_2d)
- [UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_sampler_2d_array)
- [UNSIGNED\_INT\_SAMPLER\_3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_sampler_3d)
- [UNSIGNED\_INT\_SAMPLER\_CUBE](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_sampler_cube)
- [UNSIGNED\_INT\_VEC2](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_vec2)
- [UNSIGNED\_INT\_VEC3](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_vec3)
- [UNSIGNED\_INT\_VEC4](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_int_vec4)
- [UNSIGNED\_NORMALIZED](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_normalized)
- [UNSIGNED\_SHORT](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_short)
- [UNSIGNED\_SHORT\_4\_4\_4\_4](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_short_4_4_4_4)
- [UNSIGNED\_SHORT\_5\_5\_5\_1](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_short_5_5_5_1)
- [UNSIGNED\_SHORT\_5\_6\_5](components_ClusterNodeContainer._internal_.IRenderingContext.md#unsigned_short_5_6_5)
- [VALIDATE\_STATUS](components_ClusterNodeContainer._internal_.IRenderingContext.md#validate_status)
- [VENDOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#vendor)
- [VERSION](components_ClusterNodeContainer._internal_.IRenderingContext.md#version)
- [VERTEX\_ARRAY\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_array_binding)
- [VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_buffer_binding)
- [VERTEX\_ATTRIB\_ARRAY\_DIVISOR](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_divisor)
- [VERTEX\_ATTRIB\_ARRAY\_ENABLED](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_enabled)
- [VERTEX\_ATTRIB\_ARRAY\_INTEGER](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_integer)
- [VERTEX\_ATTRIB\_ARRAY\_NORMALIZED](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_normalized)
- [VERTEX\_ATTRIB\_ARRAY\_POINTER](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_pointer)
- [VERTEX\_ATTRIB\_ARRAY\_SIZE](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_size)
- [VERTEX\_ATTRIB\_ARRAY\_STRIDE](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_stride)
- [VERTEX\_ATTRIB\_ARRAY\_TYPE](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_attrib_array_type)
- [VERTEX\_SHADER](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertex_shader)
- [VIEWPORT](components_ClusterNodeContainer._internal_.IRenderingContext.md#viewport)
- [WAIT\_FAILED](components_ClusterNodeContainer._internal_.IRenderingContext.md#wait_failed)
- [ZERO](components_ClusterNodeContainer._internal_.IRenderingContext.md#zero)
- [canvas](components_ClusterNodeContainer._internal_.IRenderingContext.md#canvas)
- [drawingBufferHeight](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawingbufferheight)
- [drawingBufferWidth](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawingbufferwidth)

### Methods

- [activeTexture](components_ClusterNodeContainer._internal_.IRenderingContext.md#activetexture)
- [attachShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#attachshader)
- [beginQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#beginquery)
- [beginTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#begintransformfeedback)
- [bindAttribLocation](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindattriblocation)
- [bindBuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindbuffer)
- [bindBufferBase](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindbufferbase)
- [bindBufferRange](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindbufferrange)
- [bindFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindframebuffer)
- [bindRenderbuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindrenderbuffer)
- [bindSampler](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindsampler)
- [bindTexture](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindtexture)
- [bindTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindtransformfeedback)
- [bindVertexArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#bindvertexarray)
- [blendColor](components_ClusterNodeContainer._internal_.IRenderingContext.md#blendcolor)
- [blendEquation](components_ClusterNodeContainer._internal_.IRenderingContext.md#blendequation)
- [blendEquationSeparate](components_ClusterNodeContainer._internal_.IRenderingContext.md#blendequationseparate)
- [blendFunc](components_ClusterNodeContainer._internal_.IRenderingContext.md#blendfunc)
- [blendFuncSeparate](components_ClusterNodeContainer._internal_.IRenderingContext.md#blendfuncseparate)
- [blitFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#blitframebuffer)
- [bufferData](components_ClusterNodeContainer._internal_.IRenderingContext.md#bufferdata)
- [bufferSubData](components_ClusterNodeContainer._internal_.IRenderingContext.md#buffersubdata)
- [checkFramebufferStatus](components_ClusterNodeContainer._internal_.IRenderingContext.md#checkframebufferstatus)
- [clear](components_ClusterNodeContainer._internal_.IRenderingContext.md#clear)
- [clearBufferfi](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearbufferfi)
- [clearBufferfv](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearbufferfv)
- [clearBufferiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearbufferiv)
- [clearBufferuiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearbufferuiv)
- [clearColor](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearcolor)
- [clearDepth](components_ClusterNodeContainer._internal_.IRenderingContext.md#cleardepth)
- [clearStencil](components_ClusterNodeContainer._internal_.IRenderingContext.md#clearstencil)
- [clientWaitSync](components_ClusterNodeContainer._internal_.IRenderingContext.md#clientwaitsync)
- [colorMask](components_ClusterNodeContainer._internal_.IRenderingContext.md#colormask)
- [compileShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#compileshader)
- [compressedTexImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#compressedteximage2d)
- [compressedTexImage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#compressedteximage3d)
- [compressedTexSubImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#compressedtexsubimage2d)
- [compressedTexSubImage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#compressedtexsubimage3d)
- [copyBufferSubData](components_ClusterNodeContainer._internal_.IRenderingContext.md#copybuffersubdata)
- [copyTexImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#copyteximage2d)
- [copyTexSubImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#copytexsubimage2d)
- [copyTexSubImage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#copytexsubimage3d)
- [createBuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#createbuffer)
- [createFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#createframebuffer)
- [createProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#createprogram)
- [createQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#createquery)
- [createRenderbuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#createrenderbuffer)
- [createSampler](components_ClusterNodeContainer._internal_.IRenderingContext.md#createsampler)
- [createShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#createshader)
- [createTexture](components_ClusterNodeContainer._internal_.IRenderingContext.md#createtexture)
- [createTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#createtransformfeedback)
- [createVertexArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#createvertexarray)
- [cullFace](components_ClusterNodeContainer._internal_.IRenderingContext.md#cullface)
- [deleteBuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletebuffer)
- [deleteFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#deleteframebuffer)
- [deleteProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#deleteprogram)
- [deleteQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletequery)
- [deleteRenderbuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#deleterenderbuffer)
- [deleteSampler](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletesampler)
- [deleteShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#deleteshader)
- [deleteSync](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletesync)
- [deleteTexture](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletetexture)
- [deleteTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletetransformfeedback)
- [deleteVertexArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#deletevertexarray)
- [depthFunc](components_ClusterNodeContainer._internal_.IRenderingContext.md#depthfunc)
- [depthMask](components_ClusterNodeContainer._internal_.IRenderingContext.md#depthmask)
- [depthRange](components_ClusterNodeContainer._internal_.IRenderingContext.md#depthrange)
- [detachShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#detachshader)
- [disable](components_ClusterNodeContainer._internal_.IRenderingContext.md#disable)
- [disableVertexAttribArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#disablevertexattribarray)
- [drawArrays](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawarrays)
- [drawArraysInstanced](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawarraysinstanced)
- [drawBuffers](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawbuffers)
- [drawElements](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawelements)
- [drawElementsInstanced](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawelementsinstanced)
- [drawRangeElements](components_ClusterNodeContainer._internal_.IRenderingContext.md#drawrangeelements)
- [enable](components_ClusterNodeContainer._internal_.IRenderingContext.md#enable)
- [enableVertexAttribArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#enablevertexattribarray)
- [endQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#endquery)
- [endTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#endtransformfeedback)
- [fenceSync](components_ClusterNodeContainer._internal_.IRenderingContext.md#fencesync)
- [finish](components_ClusterNodeContainer._internal_.IRenderingContext.md#finish)
- [flush](components_ClusterNodeContainer._internal_.IRenderingContext.md#flush)
- [framebufferRenderbuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebufferrenderbuffer)
- [framebufferTexture2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffertexture2d)
- [framebufferTextureLayer](components_ClusterNodeContainer._internal_.IRenderingContext.md#framebuffertexturelayer)
- [frontFace](components_ClusterNodeContainer._internal_.IRenderingContext.md#frontface)
- [generateMipmap](components_ClusterNodeContainer._internal_.IRenderingContext.md#generatemipmap)
- [getActiveAttrib](components_ClusterNodeContainer._internal_.IRenderingContext.md#getactiveattrib)
- [getActiveUniform](components_ClusterNodeContainer._internal_.IRenderingContext.md#getactiveuniform)
- [getActiveUniformBlockName](components_ClusterNodeContainer._internal_.IRenderingContext.md#getactiveuniformblockname)
- [getActiveUniformBlockParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getactiveuniformblockparameter)
- [getActiveUniforms](components_ClusterNodeContainer._internal_.IRenderingContext.md#getactiveuniforms)
- [getAttachedShaders](components_ClusterNodeContainer._internal_.IRenderingContext.md#getattachedshaders)
- [getAttribLocation](components_ClusterNodeContainer._internal_.IRenderingContext.md#getattriblocation)
- [getBufferParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getbufferparameter)
- [getBufferSubData](components_ClusterNodeContainer._internal_.IRenderingContext.md#getbuffersubdata)
- [getContextAttributes](components_ClusterNodeContainer._internal_.IRenderingContext.md#getcontextattributes)
- [getError](components_ClusterNodeContainer._internal_.IRenderingContext.md#geterror)
- [getExtension](components_ClusterNodeContainer._internal_.IRenderingContext.md#getextension)
- [getFragDataLocation](components_ClusterNodeContainer._internal_.IRenderingContext.md#getfragdatalocation)
- [getFramebufferAttachmentParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getframebufferattachmentparameter)
- [getIndexedParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getindexedparameter)
- [getInternalformatParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getinternalformatparameter)
- [getParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getparameter)
- [getProgramInfoLog](components_ClusterNodeContainer._internal_.IRenderingContext.md#getprograminfolog)
- [getProgramParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getprogramparameter)
- [getQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#getquery)
- [getQueryParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getqueryparameter)
- [getRenderbufferParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getrenderbufferparameter)
- [getSamplerParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getsamplerparameter)
- [getShaderInfoLog](components_ClusterNodeContainer._internal_.IRenderingContext.md#getshaderinfolog)
- [getShaderParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getshaderparameter)
- [getShaderPrecisionFormat](components_ClusterNodeContainer._internal_.IRenderingContext.md#getshaderprecisionformat)
- [getShaderSource](components_ClusterNodeContainer._internal_.IRenderingContext.md#getshadersource)
- [getSupportedExtensions](components_ClusterNodeContainer._internal_.IRenderingContext.md#getsupportedextensions)
- [getSyncParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#getsyncparameter)
- [getTexParameter](components_ClusterNodeContainer._internal_.IRenderingContext.md#gettexparameter)
- [getTransformFeedbackVarying](components_ClusterNodeContainer._internal_.IRenderingContext.md#gettransformfeedbackvarying)
- [getUniform](components_ClusterNodeContainer._internal_.IRenderingContext.md#getuniform)
- [getUniformBlockIndex](components_ClusterNodeContainer._internal_.IRenderingContext.md#getuniformblockindex)
- [getUniformIndices](components_ClusterNodeContainer._internal_.IRenderingContext.md#getuniformindices)
- [getUniformLocation](components_ClusterNodeContainer._internal_.IRenderingContext.md#getuniformlocation)
- [getVertexAttrib](components_ClusterNodeContainer._internal_.IRenderingContext.md#getvertexattrib)
- [getVertexAttribOffset](components_ClusterNodeContainer._internal_.IRenderingContext.md#getvertexattriboffset)
- [hint](components_ClusterNodeContainer._internal_.IRenderingContext.md#hint)
- [invalidateFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalidateframebuffer)
- [invalidateSubFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#invalidatesubframebuffer)
- [isBuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#isbuffer)
- [isContextLost](components_ClusterNodeContainer._internal_.IRenderingContext.md#iscontextlost)
- [isEnabled](components_ClusterNodeContainer._internal_.IRenderingContext.md#isenabled)
- [isFramebuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#isframebuffer)
- [isProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#isprogram)
- [isQuery](components_ClusterNodeContainer._internal_.IRenderingContext.md#isquery)
- [isRenderbuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#isrenderbuffer)
- [isSampler](components_ClusterNodeContainer._internal_.IRenderingContext.md#issampler)
- [isShader](components_ClusterNodeContainer._internal_.IRenderingContext.md#isshader)
- [isSync](components_ClusterNodeContainer._internal_.IRenderingContext.md#issync)
- [isTexture](components_ClusterNodeContainer._internal_.IRenderingContext.md#istexture)
- [isTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#istransformfeedback)
- [isVertexArray](components_ClusterNodeContainer._internal_.IRenderingContext.md#isvertexarray)
- [lineWidth](components_ClusterNodeContainer._internal_.IRenderingContext.md#linewidth)
- [linkProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#linkprogram)
- [pauseTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#pausetransformfeedback)
- [pixelStorei](components_ClusterNodeContainer._internal_.IRenderingContext.md#pixelstorei)
- [polygonOffset](components_ClusterNodeContainer._internal_.IRenderingContext.md#polygonoffset)
- [readBuffer](components_ClusterNodeContainer._internal_.IRenderingContext.md#readbuffer)
- [readPixels](components_ClusterNodeContainer._internal_.IRenderingContext.md#readpixels)
- [renderbufferStorage](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbufferstorage)
- [renderbufferStorageMultisample](components_ClusterNodeContainer._internal_.IRenderingContext.md#renderbufferstoragemultisample)
- [resumeTransformFeedback](components_ClusterNodeContainer._internal_.IRenderingContext.md#resumetransformfeedback)
- [sampleCoverage](components_ClusterNodeContainer._internal_.IRenderingContext.md#samplecoverage)
- [samplerParameterf](components_ClusterNodeContainer._internal_.IRenderingContext.md#samplerparameterf)
- [samplerParameteri](components_ClusterNodeContainer._internal_.IRenderingContext.md#samplerparameteri)
- [scissor](components_ClusterNodeContainer._internal_.IRenderingContext.md#scissor)
- [shaderSource](components_ClusterNodeContainer._internal_.IRenderingContext.md#shadersource)
- [stencilFunc](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilfunc)
- [stencilFuncSeparate](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilfuncseparate)
- [stencilMask](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilmask)
- [stencilMaskSeparate](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilmaskseparate)
- [stencilOp](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilop)
- [stencilOpSeparate](components_ClusterNodeContainer._internal_.IRenderingContext.md#stencilopseparate)
- [texImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#teximage2d)
- [texImage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#teximage3d)
- [texParameterf](components_ClusterNodeContainer._internal_.IRenderingContext.md#texparameterf)
- [texParameteri](components_ClusterNodeContainer._internal_.IRenderingContext.md#texparameteri)
- [texStorage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texstorage2d)
- [texStorage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texstorage3d)
- [texSubImage2D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texsubimage2d)
- [texSubImage3D](components_ClusterNodeContainer._internal_.IRenderingContext.md#texsubimage3d)
- [transformFeedbackVaryings](components_ClusterNodeContainer._internal_.IRenderingContext.md#transformfeedbackvaryings)
- [uniform1f](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1f)
- [uniform1fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1fv)
- [uniform1i](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1i)
- [uniform1iv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1iv)
- [uniform1ui](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1ui)
- [uniform1uiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform1uiv)
- [uniform2f](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2f)
- [uniform2fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2fv)
- [uniform2i](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2i)
- [uniform2iv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2iv)
- [uniform2ui](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2ui)
- [uniform2uiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform2uiv)
- [uniform3f](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3f)
- [uniform3fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3fv)
- [uniform3i](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3i)
- [uniform3iv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3iv)
- [uniform3ui](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3ui)
- [uniform3uiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform3uiv)
- [uniform4f](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4f)
- [uniform4fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4fv)
- [uniform4i](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4i)
- [uniform4iv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4iv)
- [uniform4ui](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4ui)
- [uniform4uiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniform4uiv)
- [uniformBlockBinding](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformblockbinding)
- [uniformMatrix2fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix2fv)
- [uniformMatrix2x3fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix2x3fv)
- [uniformMatrix2x4fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix2x4fv)
- [uniformMatrix3fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix3fv)
- [uniformMatrix3x2fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix3x2fv)
- [uniformMatrix3x4fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix3x4fv)
- [uniformMatrix4fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix4fv)
- [uniformMatrix4x2fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix4x2fv)
- [uniformMatrix4x3fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#uniformmatrix4x3fv)
- [useProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#useprogram)
- [validateProgram](components_ClusterNodeContainer._internal_.IRenderingContext.md#validateprogram)
- [vertexAttrib1f](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib1f)
- [vertexAttrib1fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib1fv)
- [vertexAttrib2f](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib2f)
- [vertexAttrib2fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib2fv)
- [vertexAttrib3f](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib3f)
- [vertexAttrib3fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib3fv)
- [vertexAttrib4f](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib4f)
- [vertexAttrib4fv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattrib4fv)
- [vertexAttribDivisor](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribdivisor)
- [vertexAttribI4i](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribi4i)
- [vertexAttribI4iv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribi4iv)
- [vertexAttribI4ui](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribi4ui)
- [vertexAttribI4uiv](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribi4uiv)
- [vertexAttribIPointer](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribipointer)
- [vertexAttribPointer](components_ClusterNodeContainer._internal_.IRenderingContext.md#vertexattribpointer)
- [viewport](components_ClusterNodeContainer._internal_.IRenderingContext.md#viewport)
- [waitSync](components_ClusterNodeContainer._internal_.IRenderingContext.md#waitsync)

## Properties

### ACTIVE\_ATTRIBUTES

• `Readonly` **ACTIVE\_ATTRIBUTES**: `number`

#### Inherited from

WebGL2RenderingContext.ACTIVE\_ATTRIBUTES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15632

___

### ACTIVE\_TEXTURE

• `Readonly` **ACTIVE\_TEXTURE**: `number`

#### Inherited from

WebGL2RenderingContext.ACTIVE\_TEXTURE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15633

___

### ACTIVE\_UNIFORMS

• `Readonly` **ACTIVE\_UNIFORMS**: `number`

#### Inherited from

WebGL2RenderingContext.ACTIVE\_UNIFORMS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15634

___

### ACTIVE\_UNIFORM\_BLOCKS

• `Readonly` **ACTIVE\_UNIFORM\_BLOCKS**: `number`

#### Inherited from

WebGL2RenderingContext.ACTIVE\_UNIFORM\_BLOCKS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14808

___

### ALIASED\_LINE\_WIDTH\_RANGE

• `Readonly` **ALIASED\_LINE\_WIDTH\_RANGE**: `number`

#### Inherited from

WebGL2RenderingContext.ALIASED\_LINE\_WIDTH\_RANGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15635

___

### ALIASED\_POINT\_SIZE\_RANGE

• `Readonly` **ALIASED\_POINT\_SIZE\_RANGE**: `number`

#### Inherited from

WebGL2RenderingContext.ALIASED\_POINT\_SIZE\_RANGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15636

___

### ALPHA

• `Readonly` **ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15637

___

### ALPHA\_BITS

• `Readonly` **ALPHA\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.ALPHA\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15638

___

### ALREADY\_SIGNALED

• `Readonly` **ALREADY\_SIGNALED**: `number`

#### Inherited from

WebGL2RenderingContext.ALREADY\_SIGNALED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14809

___

### ALWAYS

• `Readonly` **ALWAYS**: `number`

#### Inherited from

WebGL2RenderingContext.ALWAYS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15639

___

### ANY\_SAMPLES\_PASSED

• `Readonly` **ANY\_SAMPLES\_PASSED**: `number`

#### Inherited from

WebGL2RenderingContext.ANY\_SAMPLES\_PASSED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14810

___

### ANY\_SAMPLES\_PASSED\_CONSERVATIVE

• `Readonly` **ANY\_SAMPLES\_PASSED\_CONSERVATIVE**: `number`

#### Inherited from

WebGL2RenderingContext.ANY\_SAMPLES\_PASSED\_CONSERVATIVE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14811

___

### ARRAY\_BUFFER

• `Readonly` **ARRAY\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.ARRAY\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15640

___

### ARRAY\_BUFFER\_BINDING

• `Readonly` **ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.ARRAY\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15641

___

### ATTACHED\_SHADERS

• `Readonly` **ATTACHED\_SHADERS**: `number`

#### Inherited from

WebGL2RenderingContext.ATTACHED\_SHADERS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15642

___

### BACK

• `Readonly` **BACK**: `number`

#### Inherited from

WebGL2RenderingContext.BACK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15643

___

### BLEND

• `Readonly` **BLEND**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15644

___

### BLEND\_COLOR

• `Readonly` **BLEND\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15645

___

### BLEND\_DST\_ALPHA

• `Readonly` **BLEND\_DST\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_DST\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15646

___

### BLEND\_DST\_RGB

• `Readonly` **BLEND\_DST\_RGB**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_DST\_RGB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15647

___

### BLEND\_EQUATION

• `Readonly` **BLEND\_EQUATION**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_EQUATION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15648

___

### BLEND\_EQUATION\_ALPHA

• `Readonly` **BLEND\_EQUATION\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_EQUATION\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15649

___

### BLEND\_EQUATION\_RGB

• `Readonly` **BLEND\_EQUATION\_RGB**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_EQUATION\_RGB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15650

___

### BLEND\_SRC\_ALPHA

• `Readonly` **BLEND\_SRC\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_SRC\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15651

___

### BLEND\_SRC\_RGB

• `Readonly` **BLEND\_SRC\_RGB**: `number`

#### Inherited from

WebGL2RenderingContext.BLEND\_SRC\_RGB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15652

___

### BLUE\_BITS

• `Readonly` **BLUE\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.BLUE\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15653

___

### BOOL

• `Readonly` **BOOL**: `number`

#### Inherited from

WebGL2RenderingContext.BOOL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15654

___

### BOOL\_VEC2

• `Readonly` **BOOL\_VEC2**: `number`

#### Inherited from

WebGL2RenderingContext.BOOL\_VEC2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15655

___

### BOOL\_VEC3

• `Readonly` **BOOL\_VEC3**: `number`

#### Inherited from

WebGL2RenderingContext.BOOL\_VEC3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15656

___

### BOOL\_VEC4

• `Readonly` **BOOL\_VEC4**: `number`

#### Inherited from

WebGL2RenderingContext.BOOL\_VEC4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15657

___

### BROWSER\_DEFAULT\_WEBGL

• `Readonly` **BROWSER\_DEFAULT\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.BROWSER\_DEFAULT\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15658

___

### BUFFER\_SIZE

• `Readonly` **BUFFER\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.BUFFER\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15659

___

### BUFFER\_USAGE

• `Readonly` **BUFFER\_USAGE**: `number`

#### Inherited from

WebGL2RenderingContext.BUFFER\_USAGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15660

___

### BYTE

• `Readonly` **BYTE**: `number`

#### Inherited from

WebGL2RenderingContext.BYTE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15661

___

### CCW

• `Readonly` **CCW**: `number`

#### Inherited from

WebGL2RenderingContext.CCW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15662

___

### CLAMP\_TO\_EDGE

• `Readonly` **CLAMP\_TO\_EDGE**: `number`

#### Inherited from

WebGL2RenderingContext.CLAMP\_TO\_EDGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15663

___

### COLOR

• `Readonly` **COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14812

___

### COLOR\_ATTACHMENT0

• `Readonly` **COLOR\_ATTACHMENT0**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT0

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15664

___

### COLOR\_ATTACHMENT1

• `Readonly` **COLOR\_ATTACHMENT1**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT1

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14813

___

### COLOR\_ATTACHMENT10

• `Readonly` **COLOR\_ATTACHMENT10**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT10

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14814

___

### COLOR\_ATTACHMENT11

• `Readonly` **COLOR\_ATTACHMENT11**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT11

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14815

___

### COLOR\_ATTACHMENT12

• `Readonly` **COLOR\_ATTACHMENT12**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT12

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14816

___

### COLOR\_ATTACHMENT13

• `Readonly` **COLOR\_ATTACHMENT13**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT13

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14817

___

### COLOR\_ATTACHMENT14

• `Readonly` **COLOR\_ATTACHMENT14**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT14

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14818

___

### COLOR\_ATTACHMENT15

• `Readonly` **COLOR\_ATTACHMENT15**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT15

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14819

___

### COLOR\_ATTACHMENT2

• `Readonly` **COLOR\_ATTACHMENT2**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14820

___

### COLOR\_ATTACHMENT3

• `Readonly` **COLOR\_ATTACHMENT3**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14821

___

### COLOR\_ATTACHMENT4

• `Readonly` **COLOR\_ATTACHMENT4**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14822

___

### COLOR\_ATTACHMENT5

• `Readonly` **COLOR\_ATTACHMENT5**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT5

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14823

___

### COLOR\_ATTACHMENT6

• `Readonly` **COLOR\_ATTACHMENT6**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT6

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14824

___

### COLOR\_ATTACHMENT7

• `Readonly` **COLOR\_ATTACHMENT7**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT7

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14825

___

### COLOR\_ATTACHMENT8

• `Readonly` **COLOR\_ATTACHMENT8**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14826

___

### COLOR\_ATTACHMENT9

• `Readonly` **COLOR\_ATTACHMENT9**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_ATTACHMENT9

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14827

___

### COLOR\_BUFFER\_BIT

• `Readonly` **COLOR\_BUFFER\_BIT**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_BUFFER\_BIT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15665

___

### COLOR\_CLEAR\_VALUE

• `Readonly` **COLOR\_CLEAR\_VALUE**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_CLEAR\_VALUE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15666

___

### COLOR\_WRITEMASK

• `Readonly` **COLOR\_WRITEMASK**: `number`

#### Inherited from

WebGL2RenderingContext.COLOR\_WRITEMASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15667

___

### COMPARE\_REF\_TO\_TEXTURE

• `Readonly` **COMPARE\_REF\_TO\_TEXTURE**: `number`

#### Inherited from

WebGL2RenderingContext.COMPARE\_REF\_TO\_TEXTURE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14828

___

### COMPILE\_STATUS

• `Readonly` **COMPILE\_STATUS**: `number`

#### Inherited from

WebGL2RenderingContext.COMPILE\_STATUS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15668

___

### COMPRESSED\_TEXTURE\_FORMATS

• `Readonly` **COMPRESSED\_TEXTURE\_FORMATS**: `number`

#### Inherited from

WebGL2RenderingContext.COMPRESSED\_TEXTURE\_FORMATS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15669

___

### CONDITION\_SATISFIED

• `Readonly` **CONDITION\_SATISFIED**: `number`

#### Inherited from

WebGL2RenderingContext.CONDITION\_SATISFIED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14829

___

### CONSTANT\_ALPHA

• `Readonly` **CONSTANT\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.CONSTANT\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15670

___

### CONSTANT\_COLOR

• `Readonly` **CONSTANT\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.CONSTANT\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15671

___

### CONTEXT\_LOST\_WEBGL

• `Readonly` **CONTEXT\_LOST\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.CONTEXT\_LOST\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15672

___

### COPY\_READ\_BUFFER

• `Readonly` **COPY\_READ\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.COPY\_READ\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14830

___

### COPY\_READ\_BUFFER\_BINDING

• `Readonly` **COPY\_READ\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.COPY\_READ\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14831

___

### COPY\_WRITE\_BUFFER

• `Readonly` **COPY\_WRITE\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.COPY\_WRITE\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14832

___

### COPY\_WRITE\_BUFFER\_BINDING

• `Readonly` **COPY\_WRITE\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.COPY\_WRITE\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14833

___

### CULL\_FACE

• `Readonly` **CULL\_FACE**: `number`

#### Inherited from

WebGL2RenderingContext.CULL\_FACE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15673

___

### CULL\_FACE\_MODE

• `Readonly` **CULL\_FACE\_MODE**: `number`

#### Inherited from

WebGL2RenderingContext.CULL\_FACE\_MODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15674

___

### CURRENT\_PROGRAM

• `Readonly` **CURRENT\_PROGRAM**: `number`

#### Inherited from

WebGL2RenderingContext.CURRENT\_PROGRAM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15675

___

### CURRENT\_QUERY

• `Readonly` **CURRENT\_QUERY**: `number`

#### Inherited from

WebGL2RenderingContext.CURRENT\_QUERY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14834

___

### CURRENT\_VERTEX\_ATTRIB

• `Readonly` **CURRENT\_VERTEX\_ATTRIB**: `number`

#### Inherited from

WebGL2RenderingContext.CURRENT\_VERTEX\_ATTRIB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15676

___

### CW

• `Readonly` **CW**: `number`

#### Inherited from

WebGL2RenderingContext.CW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15677

___

### DECR

• `Readonly` **DECR**: `number`

#### Inherited from

WebGL2RenderingContext.DECR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15678

___

### DECR\_WRAP

• `Readonly` **DECR\_WRAP**: `number`

#### Inherited from

WebGL2RenderingContext.DECR\_WRAP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15679

___

### DELETE\_STATUS

• `Readonly` **DELETE\_STATUS**: `number`

#### Inherited from

WebGL2RenderingContext.DELETE\_STATUS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15680

___

### DEPTH

• `Readonly` **DEPTH**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14835

___

### DEPTH24\_STENCIL8

• `Readonly` **DEPTH24\_STENCIL8**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH24\_STENCIL8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14836

___

### DEPTH32F\_STENCIL8

• `Readonly` **DEPTH32F\_STENCIL8**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH32F\_STENCIL8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14837

___

### DEPTH\_ATTACHMENT

• `Readonly` **DEPTH\_ATTACHMENT**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_ATTACHMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15681

___

### DEPTH\_BITS

• `Readonly` **DEPTH\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15682

___

### DEPTH\_BUFFER\_BIT

• `Readonly` **DEPTH\_BUFFER\_BIT**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_BUFFER\_BIT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15683

___

### DEPTH\_CLEAR\_VALUE

• `Readonly` **DEPTH\_CLEAR\_VALUE**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_CLEAR\_VALUE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15684

___

### DEPTH\_COMPONENT

• `Readonly` **DEPTH\_COMPONENT**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_COMPONENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15685

___

### DEPTH\_COMPONENT16

• `Readonly` **DEPTH\_COMPONENT16**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_COMPONENT16

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15686

___

### DEPTH\_COMPONENT24

• `Readonly` **DEPTH\_COMPONENT24**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_COMPONENT24

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14838

___

### DEPTH\_COMPONENT32F

• `Readonly` **DEPTH\_COMPONENT32F**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_COMPONENT32F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14839

___

### DEPTH\_FUNC

• `Readonly` **DEPTH\_FUNC**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_FUNC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15687

___

### DEPTH\_RANGE

• `Readonly` **DEPTH\_RANGE**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_RANGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15688

___

### DEPTH\_STENCIL

• `Readonly` **DEPTH\_STENCIL**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_STENCIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15689

___

### DEPTH\_STENCIL\_ATTACHMENT

• `Readonly` **DEPTH\_STENCIL\_ATTACHMENT**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_STENCIL\_ATTACHMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15690

___

### DEPTH\_TEST

• `Readonly` **DEPTH\_TEST**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_TEST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15691

___

### DEPTH\_WRITEMASK

• `Readonly` **DEPTH\_WRITEMASK**: `number`

#### Inherited from

WebGL2RenderingContext.DEPTH\_WRITEMASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15692

___

### DITHER

• `Readonly` **DITHER**: `number`

#### Inherited from

WebGL2RenderingContext.DITHER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15693

___

### DONT\_CARE

• `Readonly` **DONT\_CARE**: `number`

#### Inherited from

WebGL2RenderingContext.DONT\_CARE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15694

___

### DRAW\_BUFFER0

• `Readonly` **DRAW\_BUFFER0**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER0

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14840

___

### DRAW\_BUFFER1

• `Readonly` **DRAW\_BUFFER1**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER1

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14841

___

### DRAW\_BUFFER10

• `Readonly` **DRAW\_BUFFER10**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER10

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14842

___

### DRAW\_BUFFER11

• `Readonly` **DRAW\_BUFFER11**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER11

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14843

___

### DRAW\_BUFFER12

• `Readonly` **DRAW\_BUFFER12**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER12

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14844

___

### DRAW\_BUFFER13

• `Readonly` **DRAW\_BUFFER13**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER13

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14845

___

### DRAW\_BUFFER14

• `Readonly` **DRAW\_BUFFER14**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER14

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14846

___

### DRAW\_BUFFER15

• `Readonly` **DRAW\_BUFFER15**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER15

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14847

___

### DRAW\_BUFFER2

• `Readonly` **DRAW\_BUFFER2**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14848

___

### DRAW\_BUFFER3

• `Readonly` **DRAW\_BUFFER3**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14849

___

### DRAW\_BUFFER4

• `Readonly` **DRAW\_BUFFER4**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14850

___

### DRAW\_BUFFER5

• `Readonly` **DRAW\_BUFFER5**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER5

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14851

___

### DRAW\_BUFFER6

• `Readonly` **DRAW\_BUFFER6**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER6

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14852

___

### DRAW\_BUFFER7

• `Readonly` **DRAW\_BUFFER7**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER7

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14853

___

### DRAW\_BUFFER8

• `Readonly` **DRAW\_BUFFER8**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14854

___

### DRAW\_BUFFER9

• `Readonly` **DRAW\_BUFFER9**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_BUFFER9

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14855

___

### DRAW\_FRAMEBUFFER

• `Readonly` **DRAW\_FRAMEBUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_FRAMEBUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14856

___

### DRAW\_FRAMEBUFFER\_BINDING

• `Readonly` **DRAW\_FRAMEBUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.DRAW\_FRAMEBUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14857

___

### DST\_ALPHA

• `Readonly` **DST\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.DST\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15695

___

### DST\_COLOR

• `Readonly` **DST\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.DST\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15696

___

### DYNAMIC\_COPY

• `Readonly` **DYNAMIC\_COPY**: `number`

#### Inherited from

WebGL2RenderingContext.DYNAMIC\_COPY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14858

___

### DYNAMIC\_DRAW

• `Readonly` **DYNAMIC\_DRAW**: `number`

#### Inherited from

WebGL2RenderingContext.DYNAMIC\_DRAW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15697

___

### DYNAMIC\_READ

• `Readonly` **DYNAMIC\_READ**: `number`

#### Inherited from

WebGL2RenderingContext.DYNAMIC\_READ

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14859

___

### ELEMENT\_ARRAY\_BUFFER

• `Readonly` **ELEMENT\_ARRAY\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.ELEMENT\_ARRAY\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15698

___

### ELEMENT\_ARRAY\_BUFFER\_BINDING

• `Readonly` **ELEMENT\_ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.ELEMENT\_ARRAY\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15699

___

### EQUAL

• `Readonly` **EQUAL**: `number`

#### Inherited from

WebGL2RenderingContext.EQUAL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15700

___

### FASTEST

• `Readonly` **FASTEST**: `number`

#### Inherited from

WebGL2RenderingContext.FASTEST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15701

___

### FLOAT

• `Readonly` **FLOAT**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15702

___

### FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV

• `Readonly` **FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14860

___

### FLOAT\_MAT2

• `Readonly` **FLOAT\_MAT2**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15703

___

### FLOAT\_MAT2x3

• `Readonly` **FLOAT\_MAT2x3**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT2x3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14861

___

### FLOAT\_MAT2x4

• `Readonly` **FLOAT\_MAT2x4**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT2x4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14862

___

### FLOAT\_MAT3

• `Readonly` **FLOAT\_MAT3**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15704

___

### FLOAT\_MAT3x2

• `Readonly` **FLOAT\_MAT3x2**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT3x2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14863

___

### FLOAT\_MAT3x4

• `Readonly` **FLOAT\_MAT3x4**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT3x4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14864

___

### FLOAT\_MAT4

• `Readonly` **FLOAT\_MAT4**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15705

___

### FLOAT\_MAT4x2

• `Readonly` **FLOAT\_MAT4x2**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT4x2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14865

___

### FLOAT\_MAT4x3

• `Readonly` **FLOAT\_MAT4x3**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_MAT4x3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14866

___

### FLOAT\_VEC2

• `Readonly` **FLOAT\_VEC2**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_VEC2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15706

___

### FLOAT\_VEC3

• `Readonly` **FLOAT\_VEC3**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_VEC3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15707

___

### FLOAT\_VEC4

• `Readonly` **FLOAT\_VEC4**: `number`

#### Inherited from

WebGL2RenderingContext.FLOAT\_VEC4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15708

___

### FRAGMENT\_SHADER

• `Readonly` **FRAGMENT\_SHADER**: `number`

#### Inherited from

WebGL2RenderingContext.FRAGMENT\_SHADER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15709

___

### FRAGMENT\_SHADER\_DERIVATIVE\_HINT

• `Readonly` **FRAGMENT\_SHADER\_DERIVATIVE\_HINT**: `number`

#### Inherited from

WebGL2RenderingContext.FRAGMENT\_SHADER\_DERIVATIVE\_HINT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14867

___

### FRAMEBUFFER

• `Readonly` **FRAMEBUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15710

___

### FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14868

___

### FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14869

___

### FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14870

___

### FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14871

___

### FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14872

___

### FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14873

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15711

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15712

___

### FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14874

___

### FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14875

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15713

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14876

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15714

___

### FRAMEBUFFER\_BINDING

• `Readonly` **FRAMEBUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15715

___

### FRAMEBUFFER\_COMPLETE

• `Readonly` **FRAMEBUFFER\_COMPLETE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_COMPLETE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15716

___

### FRAMEBUFFER\_DEFAULT

• `Readonly` **FRAMEBUFFER\_DEFAULT**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_DEFAULT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14877

___

### FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15717

___

### FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15718

___

### FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15719

___

### FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14878

___

### FRAMEBUFFER\_UNSUPPORTED

• `Readonly` **FRAMEBUFFER\_UNSUPPORTED**: `number`

#### Inherited from

WebGL2RenderingContext.FRAMEBUFFER\_UNSUPPORTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15720

___

### FRONT

• `Readonly` **FRONT**: `number`

#### Inherited from

WebGL2RenderingContext.FRONT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15721

___

### FRONT\_AND\_BACK

• `Readonly` **FRONT\_AND\_BACK**: `number`

#### Inherited from

WebGL2RenderingContext.FRONT\_AND\_BACK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15722

___

### FRONT\_FACE

• `Readonly` **FRONT\_FACE**: `number`

#### Inherited from

WebGL2RenderingContext.FRONT\_FACE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15723

___

### FUNC\_ADD

• `Readonly` **FUNC\_ADD**: `number`

#### Inherited from

WebGL2RenderingContext.FUNC\_ADD

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15724

___

### FUNC\_REVERSE\_SUBTRACT

• `Readonly` **FUNC\_REVERSE\_SUBTRACT**: `number`

#### Inherited from

WebGL2RenderingContext.FUNC\_REVERSE\_SUBTRACT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15725

___

### FUNC\_SUBTRACT

• `Readonly` **FUNC\_SUBTRACT**: `number`

#### Inherited from

WebGL2RenderingContext.FUNC\_SUBTRACT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15726

___

### GENERATE\_MIPMAP\_HINT

• `Readonly` **GENERATE\_MIPMAP\_HINT**: `number`

#### Inherited from

WebGL2RenderingContext.GENERATE\_MIPMAP\_HINT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15727

___

### GEQUAL

• `Readonly` **GEQUAL**: `number`

#### Inherited from

WebGL2RenderingContext.GEQUAL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15728

___

### GREATER

• `Readonly` **GREATER**: `number`

#### Inherited from

WebGL2RenderingContext.GREATER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15729

___

### GREEN\_BITS

• `Readonly` **GREEN\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.GREEN\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15730

___

### HALF\_FLOAT

• `Readonly` **HALF\_FLOAT**: `number`

#### Inherited from

WebGL2RenderingContext.HALF\_FLOAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14879

___

### HIGH\_FLOAT

• `Readonly` **HIGH\_FLOAT**: `number`

#### Inherited from

WebGL2RenderingContext.HIGH\_FLOAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15731

___

### HIGH\_INT

• `Readonly` **HIGH\_INT**: `number`

#### Inherited from

WebGL2RenderingContext.HIGH\_INT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15732

___

### IMPLEMENTATION\_COLOR\_READ\_FORMAT

• `Readonly` **IMPLEMENTATION\_COLOR\_READ\_FORMAT**: `number`

#### Inherited from

WebGL2RenderingContext.IMPLEMENTATION\_COLOR\_READ\_FORMAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15733

___

### IMPLEMENTATION\_COLOR\_READ\_TYPE

• `Readonly` **IMPLEMENTATION\_COLOR\_READ\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.IMPLEMENTATION\_COLOR\_READ\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15734

___

### INCR

• `Readonly` **INCR**: `number`

#### Inherited from

WebGL2RenderingContext.INCR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15735

___

### INCR\_WRAP

• `Readonly` **INCR\_WRAP**: `number`

#### Inherited from

WebGL2RenderingContext.INCR\_WRAP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15736

___

### INT

• `Readonly` **INT**: `number`

#### Inherited from

WebGL2RenderingContext.INT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15737

___

### INTERLEAVED\_ATTRIBS

• `Readonly` **INTERLEAVED\_ATTRIBS**: `number`

#### Inherited from

WebGL2RenderingContext.INTERLEAVED\_ATTRIBS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14880

___

### INT\_2\_10\_10\_10\_REV

• `Readonly` **INT\_2\_10\_10\_10\_REV**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_2\_10\_10\_10\_REV

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14881

___

### INT\_SAMPLER\_2D

• `Readonly` **INT\_SAMPLER\_2D**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_SAMPLER\_2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14882

___

### INT\_SAMPLER\_2D\_ARRAY

• `Readonly` **INT\_SAMPLER\_2D\_ARRAY**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_SAMPLER\_2D\_ARRAY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14883

___

### INT\_SAMPLER\_3D

• `Readonly` **INT\_SAMPLER\_3D**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_SAMPLER\_3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14884

___

### INT\_SAMPLER\_CUBE

• `Readonly` **INT\_SAMPLER\_CUBE**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_SAMPLER\_CUBE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14885

___

### INT\_VEC2

• `Readonly` **INT\_VEC2**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_VEC2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15738

___

### INT\_VEC3

• `Readonly` **INT\_VEC3**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_VEC3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15739

___

### INT\_VEC4

• `Readonly` **INT\_VEC4**: `number`

#### Inherited from

WebGL2RenderingContext.INT\_VEC4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15740

___

### INVALID\_ENUM

• `Readonly` **INVALID\_ENUM**: `number`

#### Inherited from

WebGL2RenderingContext.INVALID\_ENUM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15741

___

### INVALID\_FRAMEBUFFER\_OPERATION

• `Readonly` **INVALID\_FRAMEBUFFER\_OPERATION**: `number`

#### Inherited from

WebGL2RenderingContext.INVALID\_FRAMEBUFFER\_OPERATION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15742

___

### INVALID\_INDEX

• `Readonly` **INVALID\_INDEX**: `number`

#### Inherited from

WebGL2RenderingContext.INVALID\_INDEX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14886

___

### INVALID\_OPERATION

• `Readonly` **INVALID\_OPERATION**: `number`

#### Inherited from

WebGL2RenderingContext.INVALID\_OPERATION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15743

___

### INVALID\_VALUE

• `Readonly` **INVALID\_VALUE**: `number`

#### Inherited from

WebGL2RenderingContext.INVALID\_VALUE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15744

___

### INVERT

• `Readonly` **INVERT**: `number`

#### Inherited from

WebGL2RenderingContext.INVERT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15745

___

### KEEP

• `Readonly` **KEEP**: `number`

#### Inherited from

WebGL2RenderingContext.KEEP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15746

___

### LEQUAL

• `Readonly` **LEQUAL**: `number`

#### Inherited from

WebGL2RenderingContext.LEQUAL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15747

___

### LESS

• `Readonly` **LESS**: `number`

#### Inherited from

WebGL2RenderingContext.LESS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15748

___

### LINEAR

• `Readonly` **LINEAR**: `number`

#### Inherited from

WebGL2RenderingContext.LINEAR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15749

___

### LINEAR\_MIPMAP\_LINEAR

• `Readonly` **LINEAR\_MIPMAP\_LINEAR**: `number`

#### Inherited from

WebGL2RenderingContext.LINEAR\_MIPMAP\_LINEAR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15750

___

### LINEAR\_MIPMAP\_NEAREST

• `Readonly` **LINEAR\_MIPMAP\_NEAREST**: `number`

#### Inherited from

WebGL2RenderingContext.LINEAR\_MIPMAP\_NEAREST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15751

___

### LINES

• `Readonly` **LINES**: `number`

#### Inherited from

WebGL2RenderingContext.LINES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15752

___

### LINE\_LOOP

• `Readonly` **LINE\_LOOP**: `number`

#### Inherited from

WebGL2RenderingContext.LINE\_LOOP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15753

___

### LINE\_STRIP

• `Readonly` **LINE\_STRIP**: `number`

#### Inherited from

WebGL2RenderingContext.LINE\_STRIP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15754

___

### LINE\_WIDTH

• `Readonly` **LINE\_WIDTH**: `number`

#### Inherited from

WebGL2RenderingContext.LINE\_WIDTH

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15755

___

### LINK\_STATUS

• `Readonly` **LINK\_STATUS**: `number`

#### Inherited from

WebGL2RenderingContext.LINK\_STATUS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15756

___

### LOW\_FLOAT

• `Readonly` **LOW\_FLOAT**: `number`

#### Inherited from

WebGL2RenderingContext.LOW\_FLOAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15757

___

### LOW\_INT

• `Readonly` **LOW\_INT**: `number`

#### Inherited from

WebGL2RenderingContext.LOW\_INT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15758

___

### LUMINANCE

• `Readonly` **LUMINANCE**: `number`

#### Inherited from

WebGL2RenderingContext.LUMINANCE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15759

___

### LUMINANCE\_ALPHA

• `Readonly` **LUMINANCE\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.LUMINANCE\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15760

___

### MAX

• `Readonly` **MAX**: `number`

#### Inherited from

WebGL2RenderingContext.MAX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14887

___

### MAX\_3D\_TEXTURE\_SIZE

• `Readonly` **MAX\_3D\_TEXTURE\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_3D\_TEXTURE\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14888

___

### MAX\_ARRAY\_TEXTURE\_LAYERS

• `Readonly` **MAX\_ARRAY\_TEXTURE\_LAYERS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_ARRAY\_TEXTURE\_LAYERS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14889

___

### MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL

• `Readonly` **MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14890

___

### MAX\_COLOR\_ATTACHMENTS

• `Readonly` **MAX\_COLOR\_ATTACHMENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_COLOR\_ATTACHMENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14891

___

### MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS

• `Readonly` **MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14892

___

### MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15761

___

### MAX\_COMBINED\_UNIFORM\_BLOCKS

• `Readonly` **MAX\_COMBINED\_UNIFORM\_BLOCKS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_COMBINED\_UNIFORM\_BLOCKS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14893

___

### MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS

• `Readonly` **MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14894

___

### MAX\_CUBE\_MAP\_TEXTURE\_SIZE

• `Readonly` **MAX\_CUBE\_MAP\_TEXTURE\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_CUBE\_MAP\_TEXTURE\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15762

___

### MAX\_DRAW\_BUFFERS

• `Readonly` **MAX\_DRAW\_BUFFERS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_DRAW\_BUFFERS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14895

___

### MAX\_ELEMENTS\_INDICES

• `Readonly` **MAX\_ELEMENTS\_INDICES**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_ELEMENTS\_INDICES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14896

___

### MAX\_ELEMENTS\_VERTICES

• `Readonly` **MAX\_ELEMENTS\_VERTICES**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_ELEMENTS\_VERTICES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14897

___

### MAX\_ELEMENT\_INDEX

• `Readonly` **MAX\_ELEMENT\_INDEX**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_ELEMENT\_INDEX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14898

___

### MAX\_FRAGMENT\_INPUT\_COMPONENTS

• `Readonly` **MAX\_FRAGMENT\_INPUT\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_FRAGMENT\_INPUT\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14899

___

### MAX\_FRAGMENT\_UNIFORM\_BLOCKS

• `Readonly` **MAX\_FRAGMENT\_UNIFORM\_BLOCKS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_FRAGMENT\_UNIFORM\_BLOCKS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14900

___

### MAX\_FRAGMENT\_UNIFORM\_COMPONENTS

• `Readonly` **MAX\_FRAGMENT\_UNIFORM\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_FRAGMENT\_UNIFORM\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14901

___

### MAX\_FRAGMENT\_UNIFORM\_VECTORS

• `Readonly` **MAX\_FRAGMENT\_UNIFORM\_VECTORS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_FRAGMENT\_UNIFORM\_VECTORS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15763

___

### MAX\_PROGRAM\_TEXEL\_OFFSET

• `Readonly` **MAX\_PROGRAM\_TEXEL\_OFFSET**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_PROGRAM\_TEXEL\_OFFSET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14902

___

### MAX\_RENDERBUFFER\_SIZE

• `Readonly` **MAX\_RENDERBUFFER\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_RENDERBUFFER\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15764

___

### MAX\_SAMPLES

• `Readonly` **MAX\_SAMPLES**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_SAMPLES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14903

___

### MAX\_SERVER\_WAIT\_TIMEOUT

• `Readonly` **MAX\_SERVER\_WAIT\_TIMEOUT**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_SERVER\_WAIT\_TIMEOUT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14904

___

### MAX\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TEXTURE\_IMAGE\_UNITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15765

___

### MAX\_TEXTURE\_LOD\_BIAS

• `Readonly` **MAX\_TEXTURE\_LOD\_BIAS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TEXTURE\_LOD\_BIAS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14905

___

### MAX\_TEXTURE\_SIZE

• `Readonly` **MAX\_TEXTURE\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TEXTURE\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15766

___

### MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS

• `Readonly` **MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14906

___

### MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS

• `Readonly` **MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14907

___

### MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS

• `Readonly` **MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14908

___

### MAX\_UNIFORM\_BLOCK\_SIZE

• `Readonly` **MAX\_UNIFORM\_BLOCK\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_UNIFORM\_BLOCK\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14909

___

### MAX\_UNIFORM\_BUFFER\_BINDINGS

• `Readonly` **MAX\_UNIFORM\_BUFFER\_BINDINGS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_UNIFORM\_BUFFER\_BINDINGS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14910

___

### MAX\_VARYING\_COMPONENTS

• `Readonly` **MAX\_VARYING\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VARYING\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14911

___

### MAX\_VARYING\_VECTORS

• `Readonly` **MAX\_VARYING\_VECTORS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VARYING\_VECTORS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15767

___

### MAX\_VERTEX\_ATTRIBS

• `Readonly` **MAX\_VERTEX\_ATTRIBS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_ATTRIBS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15768

___

### MAX\_VERTEX\_OUTPUT\_COMPONENTS

• `Readonly` **MAX\_VERTEX\_OUTPUT\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_OUTPUT\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14912

___

### MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15769

___

### MAX\_VERTEX\_UNIFORM\_BLOCKS

• `Readonly` **MAX\_VERTEX\_UNIFORM\_BLOCKS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_UNIFORM\_BLOCKS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14913

___

### MAX\_VERTEX\_UNIFORM\_COMPONENTS

• `Readonly` **MAX\_VERTEX\_UNIFORM\_COMPONENTS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_UNIFORM\_COMPONENTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14914

___

### MAX\_VERTEX\_UNIFORM\_VECTORS

• `Readonly` **MAX\_VERTEX\_UNIFORM\_VECTORS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VERTEX\_UNIFORM\_VECTORS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15770

___

### MAX\_VIEWPORT\_DIMS

• `Readonly` **MAX\_VIEWPORT\_DIMS**: `number`

#### Inherited from

WebGL2RenderingContext.MAX\_VIEWPORT\_DIMS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15771

___

### MEDIUM\_FLOAT

• `Readonly` **MEDIUM\_FLOAT**: `number`

#### Inherited from

WebGL2RenderingContext.MEDIUM\_FLOAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15772

___

### MEDIUM\_INT

• `Readonly` **MEDIUM\_INT**: `number`

#### Inherited from

WebGL2RenderingContext.MEDIUM\_INT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15773

___

### MIN

• `Readonly` **MIN**: `number`

#### Inherited from

WebGL2RenderingContext.MIN

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14915

___

### MIN\_PROGRAM\_TEXEL\_OFFSET

• `Readonly` **MIN\_PROGRAM\_TEXEL\_OFFSET**: `number`

#### Inherited from

WebGL2RenderingContext.MIN\_PROGRAM\_TEXEL\_OFFSET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14916

___

### MIRRORED\_REPEAT

• `Readonly` **MIRRORED\_REPEAT**: `number`

#### Inherited from

WebGL2RenderingContext.MIRRORED\_REPEAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15774

___

### NEAREST

• `Readonly` **NEAREST**: `number`

#### Inherited from

WebGL2RenderingContext.NEAREST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15775

___

### NEAREST\_MIPMAP\_LINEAR

• `Readonly` **NEAREST\_MIPMAP\_LINEAR**: `number`

#### Inherited from

WebGL2RenderingContext.NEAREST\_MIPMAP\_LINEAR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15776

___

### NEAREST\_MIPMAP\_NEAREST

• `Readonly` **NEAREST\_MIPMAP\_NEAREST**: `number`

#### Inherited from

WebGL2RenderingContext.NEAREST\_MIPMAP\_NEAREST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15777

___

### NEVER

• `Readonly` **NEVER**: `number`

#### Inherited from

WebGL2RenderingContext.NEVER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15778

___

### NICEST

• `Readonly` **NICEST**: `number`

#### Inherited from

WebGL2RenderingContext.NICEST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15779

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

WebGL2RenderingContext.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15780

___

### NOTEQUAL

• `Readonly` **NOTEQUAL**: `number`

#### Inherited from

WebGL2RenderingContext.NOTEQUAL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15781

___

### NO\_ERROR

• `Readonly` **NO\_ERROR**: `number`

#### Inherited from

WebGL2RenderingContext.NO\_ERROR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15782

___

### OBJECT\_TYPE

• `Readonly` **OBJECT\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.OBJECT\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14917

___

### ONE

• `Readonly` **ONE**: `number`

#### Inherited from

WebGL2RenderingContext.ONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15783

___

### ONE\_MINUS\_CONSTANT\_ALPHA

• `Readonly` **ONE\_MINUS\_CONSTANT\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_CONSTANT\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15784

___

### ONE\_MINUS\_CONSTANT\_COLOR

• `Readonly` **ONE\_MINUS\_CONSTANT\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_CONSTANT\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15785

___

### ONE\_MINUS\_DST\_ALPHA

• `Readonly` **ONE\_MINUS\_DST\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_DST\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15786

___

### ONE\_MINUS\_DST\_COLOR

• `Readonly` **ONE\_MINUS\_DST\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_DST\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15787

___

### ONE\_MINUS\_SRC\_ALPHA

• `Readonly` **ONE\_MINUS\_SRC\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_SRC\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15788

___

### ONE\_MINUS\_SRC\_COLOR

• `Readonly` **ONE\_MINUS\_SRC\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.ONE\_MINUS\_SRC\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15789

___

### OUT\_OF\_MEMORY

• `Readonly` **OUT\_OF\_MEMORY**: `number`

#### Inherited from

WebGL2RenderingContext.OUT\_OF\_MEMORY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15790

___

### PACK\_ALIGNMENT

• `Readonly` **PACK\_ALIGNMENT**: `number`

#### Inherited from

WebGL2RenderingContext.PACK\_ALIGNMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15791

___

### PACK\_ROW\_LENGTH

• `Readonly` **PACK\_ROW\_LENGTH**: `number`

#### Inherited from

WebGL2RenderingContext.PACK\_ROW\_LENGTH

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14918

___

### PACK\_SKIP\_PIXELS

• `Readonly` **PACK\_SKIP\_PIXELS**: `number`

#### Inherited from

WebGL2RenderingContext.PACK\_SKIP\_PIXELS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14919

___

### PACK\_SKIP\_ROWS

• `Readonly` **PACK\_SKIP\_ROWS**: `number`

#### Inherited from

WebGL2RenderingContext.PACK\_SKIP\_ROWS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14920

___

### PIXEL\_PACK\_BUFFER

• `Readonly` **PIXEL\_PACK\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.PIXEL\_PACK\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14921

___

### PIXEL\_PACK\_BUFFER\_BINDING

• `Readonly` **PIXEL\_PACK\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.PIXEL\_PACK\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14922

___

### PIXEL\_UNPACK\_BUFFER

• `Readonly` **PIXEL\_UNPACK\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.PIXEL\_UNPACK\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14923

___

### PIXEL\_UNPACK\_BUFFER\_BINDING

• `Readonly` **PIXEL\_UNPACK\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.PIXEL\_UNPACK\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14924

___

### POINTS

• `Readonly` **POINTS**: `number`

#### Inherited from

WebGL2RenderingContext.POINTS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15792

___

### POLYGON\_OFFSET\_FACTOR

• `Readonly` **POLYGON\_OFFSET\_FACTOR**: `number`

#### Inherited from

WebGL2RenderingContext.POLYGON\_OFFSET\_FACTOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15793

___

### POLYGON\_OFFSET\_FILL

• `Readonly` **POLYGON\_OFFSET\_FILL**: `number`

#### Inherited from

WebGL2RenderingContext.POLYGON\_OFFSET\_FILL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15794

___

### POLYGON\_OFFSET\_UNITS

• `Readonly` **POLYGON\_OFFSET\_UNITS**: `number`

#### Inherited from

WebGL2RenderingContext.POLYGON\_OFFSET\_UNITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15795

___

### QUERY\_RESULT

• `Readonly` **QUERY\_RESULT**: `number`

#### Inherited from

WebGL2RenderingContext.QUERY\_RESULT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14925

___

### QUERY\_RESULT\_AVAILABLE

• `Readonly` **QUERY\_RESULT\_AVAILABLE**: `number`

#### Inherited from

WebGL2RenderingContext.QUERY\_RESULT\_AVAILABLE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14926

___

### R11F\_G11F\_B10F

• `Readonly` **R11F\_G11F\_B10F**: `number`

#### Inherited from

WebGL2RenderingContext.R11F\_G11F\_B10F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14927

___

### R16F

• `Readonly` **R16F**: `number`

#### Inherited from

WebGL2RenderingContext.R16F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14928

___

### R16I

• `Readonly` **R16I**: `number`

#### Inherited from

WebGL2RenderingContext.R16I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14929

___

### R16UI

• `Readonly` **R16UI**: `number`

#### Inherited from

WebGL2RenderingContext.R16UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14930

___

### R32F

• `Readonly` **R32F**: `number`

#### Inherited from

WebGL2RenderingContext.R32F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14931

___

### R32I

• `Readonly` **R32I**: `number`

#### Inherited from

WebGL2RenderingContext.R32I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14932

___

### R32UI

• `Readonly` **R32UI**: `number`

#### Inherited from

WebGL2RenderingContext.R32UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14933

___

### R8

• `Readonly` **R8**: `number`

#### Inherited from

WebGL2RenderingContext.R8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14934

___

### R8I

• `Readonly` **R8I**: `number`

#### Inherited from

WebGL2RenderingContext.R8I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14935

___

### R8UI

• `Readonly` **R8UI**: `number`

#### Inherited from

WebGL2RenderingContext.R8UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14936

___

### R8\_SNORM

• `Readonly` **R8\_SNORM**: `number`

#### Inherited from

WebGL2RenderingContext.R8\_SNORM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14937

___

### RASTERIZER\_DISCARD

• `Readonly` **RASTERIZER\_DISCARD**: `number`

#### Inherited from

WebGL2RenderingContext.RASTERIZER\_DISCARD

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14938

___

### READ\_BUFFER

• `Readonly` **READ\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.READ\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14939

___

### READ\_FRAMEBUFFER

• `Readonly` **READ\_FRAMEBUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.READ\_FRAMEBUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14940

___

### READ\_FRAMEBUFFER\_BINDING

• `Readonly` **READ\_FRAMEBUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.READ\_FRAMEBUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14941

___

### RED

• `Readonly` **RED**: `number`

#### Inherited from

WebGL2RenderingContext.RED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14942

___

### RED\_BITS

• `Readonly` **RED\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.RED\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15796

___

### RED\_INTEGER

• `Readonly` **RED\_INTEGER**: `number`

#### Inherited from

WebGL2RenderingContext.RED\_INTEGER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14943

___

### RENDERBUFFER

• `Readonly` **RENDERBUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15797

___

### RENDERBUFFER\_ALPHA\_SIZE

• `Readonly` **RENDERBUFFER\_ALPHA\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_ALPHA\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15798

___

### RENDERBUFFER\_BINDING

• `Readonly` **RENDERBUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15799

___

### RENDERBUFFER\_BLUE\_SIZE

• `Readonly` **RENDERBUFFER\_BLUE\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_BLUE\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15800

___

### RENDERBUFFER\_DEPTH\_SIZE

• `Readonly` **RENDERBUFFER\_DEPTH\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_DEPTH\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15801

___

### RENDERBUFFER\_GREEN\_SIZE

• `Readonly` **RENDERBUFFER\_GREEN\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_GREEN\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15802

___

### RENDERBUFFER\_HEIGHT

• `Readonly` **RENDERBUFFER\_HEIGHT**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_HEIGHT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15803

___

### RENDERBUFFER\_INTERNAL\_FORMAT

• `Readonly` **RENDERBUFFER\_INTERNAL\_FORMAT**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_INTERNAL\_FORMAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15804

___

### RENDERBUFFER\_RED\_SIZE

• `Readonly` **RENDERBUFFER\_RED\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_RED\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15805

___

### RENDERBUFFER\_SAMPLES

• `Readonly` **RENDERBUFFER\_SAMPLES**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_SAMPLES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14944

___

### RENDERBUFFER\_STENCIL\_SIZE

• `Readonly` **RENDERBUFFER\_STENCIL\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_STENCIL\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15806

___

### RENDERBUFFER\_WIDTH

• `Readonly` **RENDERBUFFER\_WIDTH**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERBUFFER\_WIDTH

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15807

___

### RENDERER

• `Readonly` **RENDERER**: `number`

#### Inherited from

WebGL2RenderingContext.RENDERER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15808

___

### REPEAT

• `Readonly` **REPEAT**: `number`

#### Inherited from

WebGL2RenderingContext.REPEAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15809

___

### REPLACE

• `Readonly` **REPLACE**: `number`

#### Inherited from

WebGL2RenderingContext.REPLACE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15810

___

### RG

• `Readonly` **RG**: `number`

#### Inherited from

WebGL2RenderingContext.RG

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14945

___

### RG16F

• `Readonly` **RG16F**: `number`

#### Inherited from

WebGL2RenderingContext.RG16F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14946

___

### RG16I

• `Readonly` **RG16I**: `number`

#### Inherited from

WebGL2RenderingContext.RG16I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14947

___

### RG16UI

• `Readonly` **RG16UI**: `number`

#### Inherited from

WebGL2RenderingContext.RG16UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14948

___

### RG32F

• `Readonly` **RG32F**: `number`

#### Inherited from

WebGL2RenderingContext.RG32F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14949

___

### RG32I

• `Readonly` **RG32I**: `number`

#### Inherited from

WebGL2RenderingContext.RG32I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14950

___

### RG32UI

• `Readonly` **RG32UI**: `number`

#### Inherited from

WebGL2RenderingContext.RG32UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14951

___

### RG8

• `Readonly` **RG8**: `number`

#### Inherited from

WebGL2RenderingContext.RG8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14952

___

### RG8I

• `Readonly` **RG8I**: `number`

#### Inherited from

WebGL2RenderingContext.RG8I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14953

___

### RG8UI

• `Readonly` **RG8UI**: `number`

#### Inherited from

WebGL2RenderingContext.RG8UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14954

___

### RG8\_SNORM

• `Readonly` **RG8\_SNORM**: `number`

#### Inherited from

WebGL2RenderingContext.RG8\_SNORM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14955

___

### RGB

• `Readonly` **RGB**: `number`

#### Inherited from

WebGL2RenderingContext.RGB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15811

___

### RGB10\_A2

• `Readonly` **RGB10\_A2**: `number`

#### Inherited from

WebGL2RenderingContext.RGB10\_A2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14956

___

### RGB10\_A2UI

• `Readonly` **RGB10\_A2UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGB10\_A2UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14957

___

### RGB16F

• `Readonly` **RGB16F**: `number`

#### Inherited from

WebGL2RenderingContext.RGB16F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14958

___

### RGB16I

• `Readonly` **RGB16I**: `number`

#### Inherited from

WebGL2RenderingContext.RGB16I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14959

___

### RGB16UI

• `Readonly` **RGB16UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGB16UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14960

___

### RGB32F

• `Readonly` **RGB32F**: `number`

#### Inherited from

WebGL2RenderingContext.RGB32F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14961

___

### RGB32I

• `Readonly` **RGB32I**: `number`

#### Inherited from

WebGL2RenderingContext.RGB32I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14962

___

### RGB32UI

• `Readonly` **RGB32UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGB32UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14963

___

### RGB565

• `Readonly` **RGB565**: `number`

#### Inherited from

WebGL2RenderingContext.RGB565

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15812

___

### RGB5\_A1

• `Readonly` **RGB5\_A1**: `number`

#### Inherited from

WebGL2RenderingContext.RGB5\_A1

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15813

___

### RGB8

• `Readonly` **RGB8**: `number`

#### Inherited from

WebGL2RenderingContext.RGB8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14964

___

### RGB8I

• `Readonly` **RGB8I**: `number`

#### Inherited from

WebGL2RenderingContext.RGB8I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14965

___

### RGB8UI

• `Readonly` **RGB8UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGB8UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14966

___

### RGB8\_SNORM

• `Readonly` **RGB8\_SNORM**: `number`

#### Inherited from

WebGL2RenderingContext.RGB8\_SNORM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14967

___

### RGB9\_E5

• `Readonly` **RGB9\_E5**: `number`

#### Inherited from

WebGL2RenderingContext.RGB9\_E5

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14968

___

### RGBA

• `Readonly` **RGBA**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15814

___

### RGBA16F

• `Readonly` **RGBA16F**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA16F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14969

___

### RGBA16I

• `Readonly` **RGBA16I**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA16I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14970

___

### RGBA16UI

• `Readonly` **RGBA16UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA16UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14971

___

### RGBA32F

• `Readonly` **RGBA32F**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA32F

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14972

___

### RGBA32I

• `Readonly` **RGBA32I**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA32I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14973

___

### RGBA32UI

• `Readonly` **RGBA32UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA32UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14974

___

### RGBA4

• `Readonly` **RGBA4**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15815

___

### RGBA8

• `Readonly` **RGBA8**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14975

___

### RGBA8I

• `Readonly` **RGBA8I**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA8I

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14976

___

### RGBA8UI

• `Readonly` **RGBA8UI**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA8UI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14977

___

### RGBA8\_SNORM

• `Readonly` **RGBA8\_SNORM**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA8\_SNORM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14978

___

### RGBA\_INTEGER

• `Readonly` **RGBA\_INTEGER**: `number`

#### Inherited from

WebGL2RenderingContext.RGBA\_INTEGER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14979

___

### RGB\_INTEGER

• `Readonly` **RGB\_INTEGER**: `number`

#### Inherited from

WebGL2RenderingContext.RGB\_INTEGER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14980

___

### RG\_INTEGER

• `Readonly` **RG\_INTEGER**: `number`

#### Inherited from

WebGL2RenderingContext.RG\_INTEGER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14981

___

### SAMPLER\_2D

• `Readonly` **SAMPLER\_2D**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15816

___

### SAMPLER\_2D\_ARRAY

• `Readonly` **SAMPLER\_2D\_ARRAY**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_2D\_ARRAY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14982

___

### SAMPLER\_2D\_ARRAY\_SHADOW

• `Readonly` **SAMPLER\_2D\_ARRAY\_SHADOW**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_2D\_ARRAY\_SHADOW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14983

___

### SAMPLER\_2D\_SHADOW

• `Readonly` **SAMPLER\_2D\_SHADOW**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_2D\_SHADOW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14984

___

### SAMPLER\_3D

• `Readonly` **SAMPLER\_3D**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14985

___

### SAMPLER\_BINDING

• `Readonly` **SAMPLER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14986

___

### SAMPLER\_CUBE

• `Readonly` **SAMPLER\_CUBE**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_CUBE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15817

___

### SAMPLER\_CUBE\_SHADOW

• `Readonly` **SAMPLER\_CUBE\_SHADOW**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLER\_CUBE\_SHADOW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14987

___

### SAMPLES

• `Readonly` **SAMPLES**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15818

___

### SAMPLE\_ALPHA\_TO\_COVERAGE

• `Readonly` **SAMPLE\_ALPHA\_TO\_COVERAGE**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLE\_ALPHA\_TO\_COVERAGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15819

___

### SAMPLE\_BUFFERS

• `Readonly` **SAMPLE\_BUFFERS**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLE\_BUFFERS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15820

___

### SAMPLE\_COVERAGE

• `Readonly` **SAMPLE\_COVERAGE**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLE\_COVERAGE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15821

___

### SAMPLE\_COVERAGE\_INVERT

• `Readonly` **SAMPLE\_COVERAGE\_INVERT**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLE\_COVERAGE\_INVERT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15822

___

### SAMPLE\_COVERAGE\_VALUE

• `Readonly` **SAMPLE\_COVERAGE\_VALUE**: `number`

#### Inherited from

WebGL2RenderingContext.SAMPLE\_COVERAGE\_VALUE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15823

___

### SCISSOR\_BOX

• `Readonly` **SCISSOR\_BOX**: `number`

#### Inherited from

WebGL2RenderingContext.SCISSOR\_BOX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15824

___

### SCISSOR\_TEST

• `Readonly` **SCISSOR\_TEST**: `number`

#### Inherited from

WebGL2RenderingContext.SCISSOR\_TEST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15825

___

### SEPARATE\_ATTRIBS

• `Readonly` **SEPARATE\_ATTRIBS**: `number`

#### Inherited from

WebGL2RenderingContext.SEPARATE\_ATTRIBS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14988

___

### SHADER\_TYPE

• `Readonly` **SHADER\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.SHADER\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15826

___

### SHADING\_LANGUAGE\_VERSION

• `Readonly` **SHADING\_LANGUAGE\_VERSION**: `number`

#### Inherited from

WebGL2RenderingContext.SHADING\_LANGUAGE\_VERSION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15827

___

### SHORT

• `Readonly` **SHORT**: `number`

#### Inherited from

WebGL2RenderingContext.SHORT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15828

___

### SIGNALED

• `Readonly` **SIGNALED**: `number`

#### Inherited from

WebGL2RenderingContext.SIGNALED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14989

___

### SIGNED\_NORMALIZED

• `Readonly` **SIGNED\_NORMALIZED**: `number`

#### Inherited from

WebGL2RenderingContext.SIGNED\_NORMALIZED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14990

___

### SRC\_ALPHA

• `Readonly` **SRC\_ALPHA**: `number`

#### Inherited from

WebGL2RenderingContext.SRC\_ALPHA

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15829

___

### SRC\_ALPHA\_SATURATE

• `Readonly` **SRC\_ALPHA\_SATURATE**: `number`

#### Inherited from

WebGL2RenderingContext.SRC\_ALPHA\_SATURATE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15830

___

### SRC\_COLOR

• `Readonly` **SRC\_COLOR**: `number`

#### Inherited from

WebGL2RenderingContext.SRC\_COLOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15831

___

### SRGB

• `Readonly` **SRGB**: `number`

#### Inherited from

WebGL2RenderingContext.SRGB

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14991

___

### SRGB8

• `Readonly` **SRGB8**: `number`

#### Inherited from

WebGL2RenderingContext.SRGB8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14992

___

### SRGB8\_ALPHA8

• `Readonly` **SRGB8\_ALPHA8**: `number`

#### Inherited from

WebGL2RenderingContext.SRGB8\_ALPHA8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14993

___

### STATIC\_COPY

• `Readonly` **STATIC\_COPY**: `number`

#### Inherited from

WebGL2RenderingContext.STATIC\_COPY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14994

___

### STATIC\_DRAW

• `Readonly` **STATIC\_DRAW**: `number`

#### Inherited from

WebGL2RenderingContext.STATIC\_DRAW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15832

___

### STATIC\_READ

• `Readonly` **STATIC\_READ**: `number`

#### Inherited from

WebGL2RenderingContext.STATIC\_READ

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14995

___

### STENCIL

• `Readonly` **STENCIL**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14996

___

### STENCIL\_ATTACHMENT

• `Readonly` **STENCIL\_ATTACHMENT**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_ATTACHMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15833

___

### STENCIL\_BACK\_FAIL

• `Readonly` **STENCIL\_BACK\_FAIL**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_FAIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15834

___

### STENCIL\_BACK\_FUNC

• `Readonly` **STENCIL\_BACK\_FUNC**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_FUNC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15835

___

### STENCIL\_BACK\_PASS\_DEPTH\_FAIL

• `Readonly` **STENCIL\_BACK\_PASS\_DEPTH\_FAIL**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_PASS\_DEPTH\_FAIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15836

___

### STENCIL\_BACK\_PASS\_DEPTH\_PASS

• `Readonly` **STENCIL\_BACK\_PASS\_DEPTH\_PASS**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_PASS\_DEPTH\_PASS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15837

___

### STENCIL\_BACK\_REF

• `Readonly` **STENCIL\_BACK\_REF**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_REF

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15838

___

### STENCIL\_BACK\_VALUE\_MASK

• `Readonly` **STENCIL\_BACK\_VALUE\_MASK**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_VALUE\_MASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15839

___

### STENCIL\_BACK\_WRITEMASK

• `Readonly` **STENCIL\_BACK\_WRITEMASK**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BACK\_WRITEMASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15840

___

### STENCIL\_BITS

• `Readonly` **STENCIL\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15841

___

### STENCIL\_BUFFER\_BIT

• `Readonly` **STENCIL\_BUFFER\_BIT**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_BUFFER\_BIT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15842

___

### STENCIL\_CLEAR\_VALUE

• `Readonly` **STENCIL\_CLEAR\_VALUE**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_CLEAR\_VALUE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15843

___

### STENCIL\_FAIL

• `Readonly` **STENCIL\_FAIL**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_FAIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15844

___

### STENCIL\_FUNC

• `Readonly` **STENCIL\_FUNC**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_FUNC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15845

___

### STENCIL\_INDEX8

• `Readonly` **STENCIL\_INDEX8**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_INDEX8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15846

___

### STENCIL\_PASS\_DEPTH\_FAIL

• `Readonly` **STENCIL\_PASS\_DEPTH\_FAIL**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_PASS\_DEPTH\_FAIL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15847

___

### STENCIL\_PASS\_DEPTH\_PASS

• `Readonly` **STENCIL\_PASS\_DEPTH\_PASS**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_PASS\_DEPTH\_PASS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15848

___

### STENCIL\_REF

• `Readonly` **STENCIL\_REF**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_REF

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15849

___

### STENCIL\_TEST

• `Readonly` **STENCIL\_TEST**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_TEST

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15850

___

### STENCIL\_VALUE\_MASK

• `Readonly` **STENCIL\_VALUE\_MASK**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_VALUE\_MASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15851

___

### STENCIL\_WRITEMASK

• `Readonly` **STENCIL\_WRITEMASK**: `number`

#### Inherited from

WebGL2RenderingContext.STENCIL\_WRITEMASK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15852

___

### STREAM\_COPY

• `Readonly` **STREAM\_COPY**: `number`

#### Inherited from

WebGL2RenderingContext.STREAM\_COPY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14997

___

### STREAM\_DRAW

• `Readonly` **STREAM\_DRAW**: `number`

#### Inherited from

WebGL2RenderingContext.STREAM\_DRAW

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15853

___

### STREAM\_READ

• `Readonly` **STREAM\_READ**: `number`

#### Inherited from

WebGL2RenderingContext.STREAM\_READ

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14998

___

### SUBPIXEL\_BITS

• `Readonly` **SUBPIXEL\_BITS**: `number`

#### Inherited from

WebGL2RenderingContext.SUBPIXEL\_BITS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15854

___

### SYNC\_CONDITION

• `Readonly` **SYNC\_CONDITION**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_CONDITION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14999

___

### SYNC\_FENCE

• `Readonly` **SYNC\_FENCE**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_FENCE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15000

___

### SYNC\_FLAGS

• `Readonly` **SYNC\_FLAGS**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_FLAGS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15001

___

### SYNC\_FLUSH\_COMMANDS\_BIT

• `Readonly` **SYNC\_FLUSH\_COMMANDS\_BIT**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_FLUSH\_COMMANDS\_BIT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15002

___

### SYNC\_GPU\_COMMANDS\_COMPLETE

• `Readonly` **SYNC\_GPU\_COMMANDS\_COMPLETE**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_GPU\_COMMANDS\_COMPLETE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15003

___

### SYNC\_STATUS

• `Readonly` **SYNC\_STATUS**: `number`

#### Inherited from

WebGL2RenderingContext.SYNC\_STATUS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15004

___

### TEXTURE

• `Readonly` **TEXTURE**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15855

___

### TEXTURE0

• `Readonly` **TEXTURE0**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE0

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15856

___

### TEXTURE1

• `Readonly` **TEXTURE1**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE1

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15857

___

### TEXTURE10

• `Readonly` **TEXTURE10**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE10

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15858

___

### TEXTURE11

• `Readonly` **TEXTURE11**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE11

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15859

___

### TEXTURE12

• `Readonly` **TEXTURE12**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE12

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15860

___

### TEXTURE13

• `Readonly` **TEXTURE13**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE13

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15861

___

### TEXTURE14

• `Readonly` **TEXTURE14**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE14

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15862

___

### TEXTURE15

• `Readonly` **TEXTURE15**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE15

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15863

___

### TEXTURE16

• `Readonly` **TEXTURE16**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE16

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15864

___

### TEXTURE17

• `Readonly` **TEXTURE17**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE17

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15865

___

### TEXTURE18

• `Readonly` **TEXTURE18**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE18

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15866

___

### TEXTURE19

• `Readonly` **TEXTURE19**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE19

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15867

___

### TEXTURE2

• `Readonly` **TEXTURE2**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15868

___

### TEXTURE20

• `Readonly` **TEXTURE20**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE20

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15869

___

### TEXTURE21

• `Readonly` **TEXTURE21**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE21

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15870

___

### TEXTURE22

• `Readonly` **TEXTURE22**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE22

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15871

___

### TEXTURE23

• `Readonly` **TEXTURE23**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE23

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15872

___

### TEXTURE24

• `Readonly` **TEXTURE24**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE24

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15873

___

### TEXTURE25

• `Readonly` **TEXTURE25**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE25

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15874

___

### TEXTURE26

• `Readonly` **TEXTURE26**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE26

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15875

___

### TEXTURE27

• `Readonly` **TEXTURE27**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE27

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15876

___

### TEXTURE28

• `Readonly` **TEXTURE28**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE28

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15877

___

### TEXTURE29

• `Readonly` **TEXTURE29**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE29

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15878

___

### TEXTURE3

• `Readonly` **TEXTURE3**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15879

___

### TEXTURE30

• `Readonly` **TEXTURE30**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE30

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15880

___

### TEXTURE31

• `Readonly` **TEXTURE31**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE31

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15881

___

### TEXTURE4

• `Readonly` **TEXTURE4**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15882

___

### TEXTURE5

• `Readonly` **TEXTURE5**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE5

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15883

___

### TEXTURE6

• `Readonly` **TEXTURE6**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE6

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15884

___

### TEXTURE7

• `Readonly` **TEXTURE7**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE7

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15885

___

### TEXTURE8

• `Readonly` **TEXTURE8**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15886

___

### TEXTURE9

• `Readonly` **TEXTURE9**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE9

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15887

___

### TEXTURE\_2D

• `Readonly` **TEXTURE\_2D**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15888

___

### TEXTURE\_2D\_ARRAY

• `Readonly` **TEXTURE\_2D\_ARRAY**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_2D\_ARRAY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15005

___

### TEXTURE\_3D

• `Readonly` **TEXTURE\_3D**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15006

___

### TEXTURE\_BASE\_LEVEL

• `Readonly` **TEXTURE\_BASE\_LEVEL**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_BASE\_LEVEL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15007

___

### TEXTURE\_BINDING\_2D

• `Readonly` **TEXTURE\_BINDING\_2D**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_BINDING\_2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15889

___

### TEXTURE\_BINDING\_2D\_ARRAY

• `Readonly` **TEXTURE\_BINDING\_2D\_ARRAY**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_BINDING\_2D\_ARRAY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15008

___

### TEXTURE\_BINDING\_3D

• `Readonly` **TEXTURE\_BINDING\_3D**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_BINDING\_3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15009

___

### TEXTURE\_BINDING\_CUBE\_MAP

• `Readonly` **TEXTURE\_BINDING\_CUBE\_MAP**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_BINDING\_CUBE\_MAP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15890

___

### TEXTURE\_COMPARE\_FUNC

• `Readonly` **TEXTURE\_COMPARE\_FUNC**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_COMPARE\_FUNC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15010

___

### TEXTURE\_COMPARE\_MODE

• `Readonly` **TEXTURE\_COMPARE\_MODE**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_COMPARE\_MODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15011

___

### TEXTURE\_CUBE\_MAP

• `Readonly` **TEXTURE\_CUBE\_MAP**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15891

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_X

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_X**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_NEGATIVE\_X

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15892

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15893

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15894

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_X

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_X**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_POSITIVE\_X

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15895

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Y

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_Y**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_POSITIVE\_Y

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15896

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Z

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_Z**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_CUBE\_MAP\_POSITIVE\_Z

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15897

___

### TEXTURE\_IMMUTABLE\_FORMAT

• `Readonly` **TEXTURE\_IMMUTABLE\_FORMAT**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_IMMUTABLE\_FORMAT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15012

___

### TEXTURE\_IMMUTABLE\_LEVELS

• `Readonly` **TEXTURE\_IMMUTABLE\_LEVELS**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_IMMUTABLE\_LEVELS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15013

___

### TEXTURE\_MAG\_FILTER

• `Readonly` **TEXTURE\_MAG\_FILTER**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_MAG\_FILTER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15898

___

### TEXTURE\_MAX\_LEVEL

• `Readonly` **TEXTURE\_MAX\_LEVEL**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_MAX\_LEVEL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15014

___

### TEXTURE\_MAX\_LOD

• `Readonly` **TEXTURE\_MAX\_LOD**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_MAX\_LOD

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15015

___

### TEXTURE\_MIN\_FILTER

• `Readonly` **TEXTURE\_MIN\_FILTER**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_MIN\_FILTER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15899

___

### TEXTURE\_MIN\_LOD

• `Readonly` **TEXTURE\_MIN\_LOD**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_MIN\_LOD

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15016

___

### TEXTURE\_WRAP\_R

• `Readonly` **TEXTURE\_WRAP\_R**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_WRAP\_R

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15017

___

### TEXTURE\_WRAP\_S

• `Readonly` **TEXTURE\_WRAP\_S**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_WRAP\_S

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15900

___

### TEXTURE\_WRAP\_T

• `Readonly` **TEXTURE\_WRAP\_T**: `number`

#### Inherited from

WebGL2RenderingContext.TEXTURE\_WRAP\_T

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15901

___

### TIMEOUT\_EXPIRED

• `Readonly` **TIMEOUT\_EXPIRED**: `number`

#### Inherited from

WebGL2RenderingContext.TIMEOUT\_EXPIRED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15018

___

### TIMEOUT\_IGNORED

• `Readonly` **TIMEOUT\_IGNORED**: `number`

#### Inherited from

WebGL2RenderingContext.TIMEOUT\_IGNORED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15019

___

### TRANSFORM\_FEEDBACK

• `Readonly` **TRANSFORM\_FEEDBACK**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15020

___

### TRANSFORM\_FEEDBACK\_ACTIVE

• `Readonly` **TRANSFORM\_FEEDBACK\_ACTIVE**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_ACTIVE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15021

___

### TRANSFORM\_FEEDBACK\_BINDING

• `Readonly` **TRANSFORM\_FEEDBACK\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15022

___

### TRANSFORM\_FEEDBACK\_BUFFER

• `Readonly` **TRANSFORM\_FEEDBACK\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15023

___

### TRANSFORM\_FEEDBACK\_BUFFER\_BINDING

• `Readonly` **TRANSFORM\_FEEDBACK\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15024

___

### TRANSFORM\_FEEDBACK\_BUFFER\_MODE

• `Readonly` **TRANSFORM\_FEEDBACK\_BUFFER\_MODE**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BUFFER\_MODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15025

___

### TRANSFORM\_FEEDBACK\_BUFFER\_SIZE

• `Readonly` **TRANSFORM\_FEEDBACK\_BUFFER\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BUFFER\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15026

___

### TRANSFORM\_FEEDBACK\_BUFFER\_START

• `Readonly` **TRANSFORM\_FEEDBACK\_BUFFER\_START**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_BUFFER\_START

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15027

___

### TRANSFORM\_FEEDBACK\_PAUSED

• `Readonly` **TRANSFORM\_FEEDBACK\_PAUSED**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_PAUSED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15028

___

### TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN

• `Readonly` **TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15029

___

### TRANSFORM\_FEEDBACK\_VARYINGS

• `Readonly` **TRANSFORM\_FEEDBACK\_VARYINGS**: `number`

#### Inherited from

WebGL2RenderingContext.TRANSFORM\_FEEDBACK\_VARYINGS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15030

___

### TRIANGLES

• `Readonly` **TRIANGLES**: `number`

#### Inherited from

WebGL2RenderingContext.TRIANGLES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15902

___

### TRIANGLE\_FAN

• `Readonly` **TRIANGLE\_FAN**: `number`

#### Inherited from

WebGL2RenderingContext.TRIANGLE\_FAN

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15903

___

### TRIANGLE\_STRIP

• `Readonly` **TRIANGLE\_STRIP**: `number`

#### Inherited from

WebGL2RenderingContext.TRIANGLE\_STRIP

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15904

___

### UNIFORM\_ARRAY\_STRIDE

• `Readonly` **UNIFORM\_ARRAY\_STRIDE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_ARRAY\_STRIDE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15031

___

### UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS

• `Readonly` **UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15032

___

### UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES

• `Readonly` **UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15033

___

### UNIFORM\_BLOCK\_BINDING

• `Readonly` **UNIFORM\_BLOCK\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15034

___

### UNIFORM\_BLOCK\_DATA\_SIZE

• `Readonly` **UNIFORM\_BLOCK\_DATA\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_DATA\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15035

___

### UNIFORM\_BLOCK\_INDEX

• `Readonly` **UNIFORM\_BLOCK\_INDEX**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_INDEX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15036

___

### UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER

• `Readonly` **UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15037

___

### UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER

• `Readonly` **UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15038

___

### UNIFORM\_BUFFER

• `Readonly` **UNIFORM\_BUFFER**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BUFFER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15039

___

### UNIFORM\_BUFFER\_BINDING

• `Readonly` **UNIFORM\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15040

___

### UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT

• `Readonly` **UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15041

___

### UNIFORM\_BUFFER\_SIZE

• `Readonly` **UNIFORM\_BUFFER\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BUFFER\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15042

___

### UNIFORM\_BUFFER\_START

• `Readonly` **UNIFORM\_BUFFER\_START**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_BUFFER\_START

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15043

___

### UNIFORM\_IS\_ROW\_MAJOR

• `Readonly` **UNIFORM\_IS\_ROW\_MAJOR**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_IS\_ROW\_MAJOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15044

___

### UNIFORM\_MATRIX\_STRIDE

• `Readonly` **UNIFORM\_MATRIX\_STRIDE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_MATRIX\_STRIDE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15045

___

### UNIFORM\_OFFSET

• `Readonly` **UNIFORM\_OFFSET**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_OFFSET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15046

___

### UNIFORM\_SIZE

• `Readonly` **UNIFORM\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15047

___

### UNIFORM\_TYPE

• `Readonly` **UNIFORM\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.UNIFORM\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15048

___

### UNPACK\_ALIGNMENT

• `Readonly` **UNPACK\_ALIGNMENT**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_ALIGNMENT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15905

___

### UNPACK\_COLORSPACE\_CONVERSION\_WEBGL

• `Readonly` **UNPACK\_COLORSPACE\_CONVERSION\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_COLORSPACE\_CONVERSION\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15906

___

### UNPACK\_FLIP\_Y\_WEBGL

• `Readonly` **UNPACK\_FLIP\_Y\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_FLIP\_Y\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15907

___

### UNPACK\_IMAGE\_HEIGHT

• `Readonly` **UNPACK\_IMAGE\_HEIGHT**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_IMAGE\_HEIGHT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15049

___

### UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL

• `Readonly` **UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15908

___

### UNPACK\_ROW\_LENGTH

• `Readonly` **UNPACK\_ROW\_LENGTH**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_ROW\_LENGTH

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15050

___

### UNPACK\_SKIP\_IMAGES

• `Readonly` **UNPACK\_SKIP\_IMAGES**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_SKIP\_IMAGES

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15051

___

### UNPACK\_SKIP\_PIXELS

• `Readonly` **UNPACK\_SKIP\_PIXELS**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_SKIP\_PIXELS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15052

___

### UNPACK\_SKIP\_ROWS

• `Readonly` **UNPACK\_SKIP\_ROWS**: `number`

#### Inherited from

WebGL2RenderingContext.UNPACK\_SKIP\_ROWS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15053

___

### UNSIGNALED

• `Readonly` **UNSIGNALED**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNALED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15054

___

### UNSIGNED\_BYTE

• `Readonly` **UNSIGNED\_BYTE**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_BYTE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15909

___

### UNSIGNED\_INT

• `Readonly` **UNSIGNED\_INT**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15910

___

### UNSIGNED\_INT\_10F\_11F\_11F\_REV

• `Readonly` **UNSIGNED\_INT\_10F\_11F\_11F\_REV**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_10F\_11F\_11F\_REV

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15055

___

### UNSIGNED\_INT\_24\_8

• `Readonly` **UNSIGNED\_INT\_24\_8**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_24\_8

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15056

___

### UNSIGNED\_INT\_2\_10\_10\_10\_REV

• `Readonly` **UNSIGNED\_INT\_2\_10\_10\_10\_REV**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_2\_10\_10\_10\_REV

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15057

___

### UNSIGNED\_INT\_5\_9\_9\_9\_REV

• `Readonly` **UNSIGNED\_INT\_5\_9\_9\_9\_REV**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_5\_9\_9\_9\_REV

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15058

___

### UNSIGNED\_INT\_SAMPLER\_2D

• `Readonly` **UNSIGNED\_INT\_SAMPLER\_2D**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_SAMPLER\_2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15059

___

### UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY

• `Readonly` **UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15060

___

### UNSIGNED\_INT\_SAMPLER\_3D

• `Readonly` **UNSIGNED\_INT\_SAMPLER\_3D**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_SAMPLER\_3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15061

___

### UNSIGNED\_INT\_SAMPLER\_CUBE

• `Readonly` **UNSIGNED\_INT\_SAMPLER\_CUBE**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_SAMPLER\_CUBE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15062

___

### UNSIGNED\_INT\_VEC2

• `Readonly` **UNSIGNED\_INT\_VEC2**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_VEC2

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15063

___

### UNSIGNED\_INT\_VEC3

• `Readonly` **UNSIGNED\_INT\_VEC3**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_VEC3

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15064

___

### UNSIGNED\_INT\_VEC4

• `Readonly` **UNSIGNED\_INT\_VEC4**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_INT\_VEC4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15065

___

### UNSIGNED\_NORMALIZED

• `Readonly` **UNSIGNED\_NORMALIZED**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_NORMALIZED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15066

___

### UNSIGNED\_SHORT

• `Readonly` **UNSIGNED\_SHORT**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_SHORT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15911

___

### UNSIGNED\_SHORT\_4\_4\_4\_4

• `Readonly` **UNSIGNED\_SHORT\_4\_4\_4\_4**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_SHORT\_4\_4\_4\_4

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15912

___

### UNSIGNED\_SHORT\_5\_5\_5\_1

• `Readonly` **UNSIGNED\_SHORT\_5\_5\_5\_1**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_SHORT\_5\_5\_5\_1

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15913

___

### UNSIGNED\_SHORT\_5\_6\_5

• `Readonly` **UNSIGNED\_SHORT\_5\_6\_5**: `number`

#### Inherited from

WebGL2RenderingContext.UNSIGNED\_SHORT\_5\_6\_5

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15914

___

### VALIDATE\_STATUS

• `Readonly` **VALIDATE\_STATUS**: `number`

#### Inherited from

WebGL2RenderingContext.VALIDATE\_STATUS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15915

___

### VENDOR

• `Readonly` **VENDOR**: `number`

#### Inherited from

WebGL2RenderingContext.VENDOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15916

___

### VERSION

• `Readonly` **VERSION**: `number`

#### Inherited from

WebGL2RenderingContext.VERSION

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15917

___

### VERTEX\_ARRAY\_BINDING

• `Readonly` **VERTEX\_ARRAY\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ARRAY\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15067

___

### VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15918

___

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_DIVISOR**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_DIVISOR

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15068

___

### VERTEX\_ATTRIB\_ARRAY\_ENABLED

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_ENABLED**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_ENABLED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15919

___

### VERTEX\_ATTRIB\_ARRAY\_INTEGER

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_INTEGER**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_INTEGER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15069

___

### VERTEX\_ATTRIB\_ARRAY\_NORMALIZED

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_NORMALIZED**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_NORMALIZED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15920

___

### VERTEX\_ATTRIB\_ARRAY\_POINTER

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_POINTER**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_POINTER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15921

___

### VERTEX\_ATTRIB\_ARRAY\_SIZE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_SIZE**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_SIZE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15922

___

### VERTEX\_ATTRIB\_ARRAY\_STRIDE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_STRIDE**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_STRIDE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15923

___

### VERTEX\_ATTRIB\_ARRAY\_TYPE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_TYPE**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_ATTRIB\_ARRAY\_TYPE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15924

___

### VERTEX\_SHADER

• `Readonly` **VERTEX\_SHADER**: `number`

#### Inherited from

WebGL2RenderingContext.VERTEX\_SHADER

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15925

___

### VIEWPORT

• `Readonly` **VIEWPORT**: `number`

#### Inherited from

WebGL2RenderingContext.VIEWPORT

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15926

___

### WAIT\_FAILED

• `Readonly` **WAIT\_FAILED**: `number`

#### Inherited from

WebGL2RenderingContext.WAIT\_FAILED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15070

___

### ZERO

• `Readonly` **ZERO**: `number`

#### Inherited from

WebGL2RenderingContext.ZERO

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15927

___

### canvas

• `Readonly` **canvas**: `HTMLCanvasElement`

#### Inherited from

WebGL2RenderingContext.canvas

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15481

___

### drawingBufferHeight

• `Readonly` **drawingBufferHeight**: `number`

#### Inherited from

WebGL2RenderingContext.drawingBufferHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15482

___

### drawingBufferWidth

• `Readonly` **drawingBufferWidth**: `number`

#### Inherited from

WebGL2RenderingContext.drawingBufferWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15483

## Methods

### activeTexture

▸ **activeTexture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.activeTexture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15484

___

### attachShader

▸ **attachShader**(`program`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.attachShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15485

___

### beginQuery

▸ **beginQuery**(`target`, `query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `query` | [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.beginQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14713

___

### beginTransformFeedback

▸ **beginTransformFeedback**(`primitiveMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `primitiveMode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.beginTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14714

___

### bindAttribLocation

▸ **bindAttribLocation**(`program`, `index`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `index` | `number` |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindAttribLocation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15486

___

### bindBuffer

▸ **bindBuffer**(`target`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15487

___

### bindBufferBase

▸ **bindBufferBase**(`target`, `index`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `index` | `number` |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindBufferBase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14715

___

### bindBufferRange

▸ **bindBufferRange**(`target`, `index`, `buffer`, `offset`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `index` | `number` |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer) |
| `offset` | `number` |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindBufferRange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14716

___

### bindFramebuffer

▸ **bindFramebuffer**(`target`, `framebuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglframebuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15488

___

### bindRenderbuffer

▸ **bindRenderbuffer**(`target`, `renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindRenderbuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15489

___

### bindSampler

▸ **bindSampler**(`unit`, `sampler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `number` |
| `sampler` | ``null`` \| [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindSampler

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14717

___

### bindTexture

▸ **bindTexture**(`target`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindTexture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15490

___

### bindTransformFeedback

▸ **bindTransformFeedback**(`target`, `tf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `tf` | ``null`` \| [`WebGLTransformFeedback`](../modules/components_ClusterNodeContainer._internal_.md#webgltransformfeedback) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14718

___

### bindVertexArray

▸ **bindVertexArray**(`array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | ``null`` \| [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bindVertexArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14719

___

### blendColor

▸ **blendColor**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |
| `alpha` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blendColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15491

___

### blendEquation

▸ **blendEquation**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blendEquation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15492

___

### blendEquationSeparate

▸ **blendEquationSeparate**(`modeRGB`, `modeAlpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeRGB` | `number` |
| `modeAlpha` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blendEquationSeparate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15493

___

### blendFunc

▸ **blendFunc**(`sfactor`, `dfactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sfactor` | `number` |
| `dfactor` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blendFunc

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15494

___

### blendFuncSeparate

▸ **blendFuncSeparate**(`srcRGB`, `dstRGB`, `srcAlpha`, `dstAlpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcRGB` | `number` |
| `dstRGB` | `number` |
| `srcAlpha` | `number` |
| `dstAlpha` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blendFuncSeparate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15495

___

### blitFramebuffer

▸ **blitFramebuffer**(`srcX0`, `srcY0`, `srcX1`, `srcY1`, `dstX0`, `dstY0`, `dstX1`, `dstY1`, `mask`, `filter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcX0` | `number` |
| `srcY0` | `number` |
| `srcX1` | `number` |
| `srcY1` | `number` |
| `dstX0` | `number` |
| `dstY0` | `number` |
| `dstX1` | `number` |
| `dstY1` | `number` |
| `mask` | `number` |
| `filter` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.blitFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14720

___

### bufferData

▸ **bufferData**(`target`, `size`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `size` | `number` |
| `usage` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bufferData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15074

▸ **bufferData**(`target`, `srcData`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `srcData` | ``null`` \| [`BufferSource`](../modules/components_ClusterNodeContainer._internal_.md#buffersource) |
| `usage` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bufferData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15075

▸ **bufferData**(`target`, `srcData`, `usage`, `srcOffset`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `usage` | `number` |
| `srcOffset` | `number` |
| `length?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bufferData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15076

___

### bufferSubData

▸ **bufferSubData**(`target`, `dstByteOffset`, `srcData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `dstByteOffset` | `number` |
| `srcData` | [`BufferSource`](../modules/components_ClusterNodeContainer._internal_.md#buffersource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bufferSubData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15077

▸ **bufferSubData**(`target`, `dstByteOffset`, `srcData`, `srcOffset`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `dstByteOffset` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |
| `length?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.bufferSubData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15078

___

### checkFramebufferStatus

▸ **checkFramebufferStatus**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.checkFramebufferStatus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15496

___

### clear

▸ **clear**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clear

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15497

___

### clearBufferfi

▸ **clearBufferfi**(`buffer`, `drawbuffer`, `depth`, `stencil`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `number` |
| `drawbuffer` | `number` |
| `depth` | `number` |
| `stencil` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearBufferfi

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14721

___

### clearBufferfv

▸ **clearBufferfv**(`buffer`, `drawbuffer`, `values`, `srcOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `number` |
| `drawbuffer` | `number` |
| `values` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearBufferfv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14722

___

### clearBufferiv

▸ **clearBufferiv**(`buffer`, `drawbuffer`, `values`, `srcOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `number` |
| `drawbuffer` | `number` |
| `values` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |
| `srcOffset?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearBufferiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14723

___

### clearBufferuiv

▸ **clearBufferuiv**(`buffer`, `drawbuffer`, `values`, `srcOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `number` |
| `drawbuffer` | `number` |
| `values` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |
| `srcOffset?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearBufferuiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14724

___

### clearColor

▸ **clearColor**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |
| `alpha` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15498

___

### clearDepth

▸ **clearDepth**(`depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearDepth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15499

___

### clearStencil

▸ **clearStencil**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.clearStencil

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15500

___

### clientWaitSync

▸ **clientWaitSync**(`sync`, `flags`, `timeout`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync` | [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync) |
| `flags` | `number` |
| `timeout` | `number` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.clientWaitSync

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14725

___

### colorMask

▸ **colorMask**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `boolean` |
| `green` | `boolean` |
| `blue` | `boolean` |
| `alpha` | `boolean` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.colorMask

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15501

___

### compileShader

▸ **compileShader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compileShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15502

___

### compressedTexImage2D

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15079

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15080

___

### compressedTexImage3D

▸ **compressedTexImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14726

▸ **compressedTexImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14727

___

### compressedTexSubImage2D

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15081

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15082

___

### compressedTexSubImage3D

▸ **compressedTexSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `width`, `height`, `depth`, `format`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `format` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14728

▸ **compressedTexSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `width`, `height`, `depth`, `format`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `format` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.compressedTexSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14729

___

### copyBufferSubData

▸ **copyBufferSubData**(`readTarget`, `writeTarget`, `readOffset`, `writeOffset`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `readTarget` | `number` |
| `writeTarget` | `number` |
| `readOffset` | `number` |
| `writeOffset` | `number` |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.copyBufferSubData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14730

___

### copyTexImage2D

▸ **copyTexImage2D**(`target`, `level`, `internalformat`, `x`, `y`, `width`, `height`, `border`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.copyTexImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15503

___

### copyTexSubImage2D

▸ **copyTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.copyTexSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15504

___

### copyTexSubImage3D

▸ **copyTexSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.copyTexSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14731

___

### createBuffer

▸ **createBuffer**(): ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer)

#### Returns

``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer)

#### Inherited from

WebGL2RenderingContext.createBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15505

___

### createFramebuffer

▸ **createFramebuffer**(): ``null`` \| [`WebGLFramebuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglframebuffer)

#### Returns

``null`` \| [`WebGLFramebuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglframebuffer)

#### Inherited from

WebGL2RenderingContext.createFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15506

___

### createProgram

▸ **createProgram**(): ``null`` \| [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram)

#### Returns

``null`` \| [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram)

#### Inherited from

WebGL2RenderingContext.createProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15507

___

### createQuery

▸ **createQuery**(): ``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery)

#### Returns

``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery)

#### Inherited from

WebGL2RenderingContext.createQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14732

___

### createRenderbuffer

▸ **createRenderbuffer**(): ``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer)

#### Returns

``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer)

#### Inherited from

WebGL2RenderingContext.createRenderbuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15508

___

### createSampler

▸ **createSampler**(): ``null`` \| [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler)

#### Returns

``null`` \| [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler)

#### Inherited from

WebGL2RenderingContext.createSampler

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14733

___

### createShader

▸ **createShader**(`type`): ``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader)

#### Inherited from

WebGL2RenderingContext.createShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15509

___

### createTexture

▸ **createTexture**(): ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture)

#### Returns

``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture)

#### Inherited from

WebGL2RenderingContext.createTexture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15510

___

### createTransformFeedback

▸ **createTransformFeedback**(): ``null`` \| [`WebGLTransformFeedback`](../modules/components_ClusterNodeContainer._internal_.md#webgltransformfeedback)

#### Returns

``null`` \| [`WebGLTransformFeedback`](../modules/components_ClusterNodeContainer._internal_.md#webgltransformfeedback)

#### Inherited from

WebGL2RenderingContext.createTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14734

___

### createVertexArray

▸ **createVertexArray**(): ``null`` \| [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject)

#### Returns

``null`` \| [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject)

#### Inherited from

WebGL2RenderingContext.createVertexArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14735

___

### cullFace

▸ **cullFace**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.cullFace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15511

___

### deleteBuffer

▸ **deleteBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15512

___

### deleteFramebuffer

▸ **deleteFramebuffer**(`framebuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglframebuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15513

___

### deleteProgram

▸ **deleteProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15514

___

### deleteQuery

▸ **deleteQuery**(`query`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | ``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14736

___

### deleteRenderbuffer

▸ **deleteRenderbuffer**(`renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteRenderbuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15515

___

### deleteSampler

▸ **deleteSampler**(`sampler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler` | ``null`` \| [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteSampler

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14737

___

### deleteShader

▸ **deleteShader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | ``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15516

___

### deleteSync

▸ **deleteSync**(`sync`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync` | ``null`` \| [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteSync

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14738

___

### deleteTexture

▸ **deleteTexture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteTexture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15517

___

### deleteTransformFeedback

▸ **deleteTransformFeedback**(`tf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tf` | ``null`` \| [`WebGLTransformFeedback`](../modules/components_ClusterNodeContainer._internal_.md#webgltransformfeedback) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14739

___

### deleteVertexArray

▸ **deleteVertexArray**(`vertexArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexArray` | ``null`` \| [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.deleteVertexArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14740

___

### depthFunc

▸ **depthFunc**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.depthFunc

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15518

___

### depthMask

▸ **depthMask**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.depthMask

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15519

___

### depthRange

▸ **depthRange**(`zNear`, `zFar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zNear` | `number` |
| `zFar` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.depthRange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15520

___

### detachShader

▸ **detachShader**(`program`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.detachShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15521

___

### disable

▸ **disable**(`cap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.disable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15522

___

### disableVertexAttribArray

▸ **disableVertexAttribArray**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.disableVertexAttribArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15523

___

### drawArrays

▸ **drawArrays**(`mode`, `first`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawArrays

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15524

___

### drawArraysInstanced

▸ **drawArraysInstanced**(`mode`, `first`, `count`, `instanceCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `instanceCount` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawArraysInstanced

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14741

___

### drawBuffers

▸ **drawBuffers**(`buffers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | `number`[] |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawBuffers

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14742

___

### drawElements

▸ **drawElements**(`mode`, `count`, `type`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawElements

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15525

___

### drawElementsInstanced

▸ **drawElementsInstanced**(`mode`, `count`, `type`, `offset`, `instanceCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |
| `instanceCount` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawElementsInstanced

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14743

___

### drawRangeElements

▸ **drawRangeElements**(`mode`, `start`, `end`, `count`, `type`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `start` | `number` |
| `end` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.drawRangeElements

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14744

___

### enable

▸ **enable**(`cap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.enable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15526

___

### enableVertexAttribArray

▸ **enableVertexAttribArray**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.enableVertexAttribArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15527

___

### endQuery

▸ **endQuery**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.endQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14745

___

### endTransformFeedback

▸ **endTransformFeedback**(): `void`

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.endTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14746

___

### fenceSync

▸ **fenceSync**(`condition`, `flags`): ``null`` \| [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `number` |
| `flags` | `number` |

#### Returns

``null`` \| [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync)

#### Inherited from

WebGL2RenderingContext.fenceSync

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14747

___

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.finish

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15528

___

### flush

▸ **flush**(): `void`

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.flush

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15529

___

### framebufferRenderbuffer

▸ **framebufferRenderbuffer**(`target`, `attachment`, `renderbuffertarget`, `renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `renderbuffertarget` | `number` |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.framebufferRenderbuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15530

___

### framebufferTexture2D

▸ **framebufferTexture2D**(`target`, `attachment`, `textarget`, `texture`, `level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `textarget` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |
| `level` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.framebufferTexture2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15531

___

### framebufferTextureLayer

▸ **framebufferTextureLayer**(`target`, `attachment`, `texture`, `level`, `layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |
| `level` | `number` |
| `layer` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.framebufferTextureLayer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14748

___

### frontFace

▸ **frontFace**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.frontFace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15532

___

### generateMipmap

▸ **generateMipmap**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.generateMipmap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15533

___

### getActiveAttrib

▸ **getActiveAttrib**(`program`, `index`): ``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `index` | `number` |

#### Returns

``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Inherited from

WebGL2RenderingContext.getActiveAttrib

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15534

___

### getActiveUniform

▸ **getActiveUniform**(`program`, `index`): ``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `index` | `number` |

#### Returns

``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Inherited from

WebGL2RenderingContext.getActiveUniform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15535

___

### getActiveUniformBlockName

▸ **getActiveUniformBlockName**(`program`, `uniformBlockIndex`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformBlockIndex` | `number` |

#### Returns

``null`` \| `string`

#### Inherited from

WebGL2RenderingContext.getActiveUniformBlockName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14749

___

### getActiveUniformBlockParameter

▸ **getActiveUniformBlockParameter**(`program`, `uniformBlockIndex`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformBlockIndex` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getActiveUniformBlockParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14750

___

### getActiveUniforms

▸ **getActiveUniforms**(`program`, `uniformIndices`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformIndices` | `number`[] |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getActiveUniforms

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14751

___

### getAttachedShaders

▸ **getAttachedShaders**(`program`): ``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader)[]

#### Inherited from

WebGL2RenderingContext.getAttachedShaders

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15536

___

### getAttribLocation

▸ **getAttribLocation**(`program`, `name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.getAttribLocation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15537

___

### getBufferParameter

▸ **getBufferParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getBufferParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15538

___

### getBufferSubData

▸ **getBufferSubData**(`target`, `srcByteOffset`, `dstBuffer`, `dstOffset?`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `srcByteOffset` | `number` |
| `dstBuffer` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `dstOffset?` | `number` |
| `length?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.getBufferSubData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14752

___

### getContextAttributes

▸ **getContextAttributes**(): ``null`` \| [`WebGLContextAttributes`](components_ClusterNodeContainer._internal_.WebGLContextAttributes.md)

#### Returns

``null`` \| [`WebGLContextAttributes`](components_ClusterNodeContainer._internal_.WebGLContextAttributes.md)

#### Inherited from

WebGL2RenderingContext.getContextAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15539

___

### getError

▸ **getError**(): `number`

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.getError

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15540

___

### getExtension

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_blend_minmax`](components_ClusterNodeContainer._internal_.EXT_blend_minmax.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_blend_minmax"`` |

#### Returns

``null`` \| [`EXT_blend_minmax`](components_ClusterNodeContainer._internal_.EXT_blend_minmax.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15541

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_color_buffer_float`](components_ClusterNodeContainer._internal_.EXT_color_buffer_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_color_buffer_float"`` |

#### Returns

``null`` \| [`EXT_color_buffer_float`](components_ClusterNodeContainer._internal_.EXT_color_buffer_float.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15542

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_color_buffer_half_float`](components_ClusterNodeContainer._internal_.EXT_color_buffer_half_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_color_buffer_half_float"`` |

#### Returns

``null`` \| [`EXT_color_buffer_half_float`](components_ClusterNodeContainer._internal_.EXT_color_buffer_half_float.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15543

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_float_blend`](components_ClusterNodeContainer._internal_.EXT_float_blend.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_float_blend"`` |

#### Returns

``null`` \| [`EXT_float_blend`](components_ClusterNodeContainer._internal_.EXT_float_blend.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15544

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_texture_filter_anisotropic`](components_ClusterNodeContainer._internal_.EXT_texture_filter_anisotropic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_texture_filter_anisotropic"`` |

#### Returns

``null`` \| [`EXT_texture_filter_anisotropic`](components_ClusterNodeContainer._internal_.EXT_texture_filter_anisotropic.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15545

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_frag_depth`](components_ClusterNodeContainer._internal_.EXT_frag_depth.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_frag_depth"`` |

#### Returns

``null`` \| [`EXT_frag_depth`](components_ClusterNodeContainer._internal_.EXT_frag_depth.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15546

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_shader_texture_lod`](components_ClusterNodeContainer._internal_.EXT_shader_texture_lod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_shader_texture_lod"`` |

#### Returns

``null`` \| [`EXT_shader_texture_lod`](components_ClusterNodeContainer._internal_.EXT_shader_texture_lod.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15547

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_sRGB`](components_ClusterNodeContainer._internal_.EXT_sRGB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_sRGB"`` |

#### Returns

``null`` \| [`EXT_sRGB`](components_ClusterNodeContainer._internal_.EXT_sRGB.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15548

▸ **getExtension**(`extensionName`): ``null`` \| [`KHR_parallel_shader_compile`](components_ClusterNodeContainer._internal_.KHR_parallel_shader_compile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"KHR_parallel_shader_compile"`` |

#### Returns

``null`` \| [`KHR_parallel_shader_compile`](components_ClusterNodeContainer._internal_.KHR_parallel_shader_compile.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15549

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_vertex_array_object`](components_ClusterNodeContainer._internal_.OES_vertex_array_object.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_vertex_array_object"`` |

#### Returns

``null`` \| [`OES_vertex_array_object`](components_ClusterNodeContainer._internal_.OES_vertex_array_object.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15550

▸ **getExtension**(`extensionName`): ``null`` \| [`OVR_multiview2`](components_ClusterNodeContainer._internal_.OVR_multiview2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OVR_multiview2"`` |

#### Returns

``null`` \| [`OVR_multiview2`](components_ClusterNodeContainer._internal_.OVR_multiview2.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15551

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_color_buffer_float`](components_ClusterNodeContainer._internal_.WEBGL_color_buffer_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_color_buffer_float"`` |

#### Returns

``null`` \| [`WEBGL_color_buffer_float`](components_ClusterNodeContainer._internal_.WEBGL_color_buffer_float.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15552

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_astc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_astc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_astc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_astc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_astc.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15553

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_etc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_etc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_etc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_etc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_etc.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15554

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_etc1`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_etc1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_etc1"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_etc1`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_etc1.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15555

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_pvrtc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_pvrtc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_pvrtc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_pvrtc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_pvrtc.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15556

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_s3tc_srgb`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_s3tc_srgb.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_s3tc_srgb"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_s3tc_srgb`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_s3tc_srgb.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15557

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_debug_shaders`](components_ClusterNodeContainer._internal_.WEBGL_debug_shaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_debug_shaders"`` |

#### Returns

``null`` \| [`WEBGL_debug_shaders`](components_ClusterNodeContainer._internal_.WEBGL_debug_shaders.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15558

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_draw_buffers`](components_ClusterNodeContainer._internal_.WEBGL_draw_buffers.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_draw_buffers"`` |

#### Returns

``null`` \| [`WEBGL_draw_buffers`](components_ClusterNodeContainer._internal_.WEBGL_draw_buffers.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15559

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_lose_context`](components_ClusterNodeContainer._internal_.WEBGL_lose_context.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_lose_context"`` |

#### Returns

``null`` \| [`WEBGL_lose_context`](components_ClusterNodeContainer._internal_.WEBGL_lose_context.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15560

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_depth_texture`](components_ClusterNodeContainer._internal_.WEBGL_depth_texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_depth_texture"`` |

#### Returns

``null`` \| [`WEBGL_depth_texture`](components_ClusterNodeContainer._internal_.WEBGL_depth_texture.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15561

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_debug_renderer_info`](components_ClusterNodeContainer._internal_.WEBGL_debug_renderer_info.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_debug_renderer_info"`` |

#### Returns

``null`` \| [`WEBGL_debug_renderer_info`](components_ClusterNodeContainer._internal_.WEBGL_debug_renderer_info.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15562

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_s3tc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_s3tc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_s3tc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_s3tc`](components_ClusterNodeContainer._internal_.WEBGL_compressed_texture_s3tc.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15563

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_half_float_linear`](components_ClusterNodeContainer._internal_.OES_texture_half_float_linear.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_half_float_linear"`` |

#### Returns

``null`` \| [`OES_texture_half_float_linear`](components_ClusterNodeContainer._internal_.OES_texture_half_float_linear.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15564

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_half_float`](components_ClusterNodeContainer._internal_.OES_texture_half_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_half_float"`` |

#### Returns

``null`` \| [`OES_texture_half_float`](components_ClusterNodeContainer._internal_.OES_texture_half_float.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15565

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_float_linear`](components_ClusterNodeContainer._internal_.OES_texture_float_linear.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_float_linear"`` |

#### Returns

``null`` \| [`OES_texture_float_linear`](components_ClusterNodeContainer._internal_.OES_texture_float_linear.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15566

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_float`](components_ClusterNodeContainer._internal_.OES_texture_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_float"`` |

#### Returns

``null`` \| [`OES_texture_float`](components_ClusterNodeContainer._internal_.OES_texture_float.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15567

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_standard_derivatives`](components_ClusterNodeContainer._internal_.OES_standard_derivatives.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_standard_derivatives"`` |

#### Returns

``null`` \| [`OES_standard_derivatives`](components_ClusterNodeContainer._internal_.OES_standard_derivatives.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15568

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_element_index_uint`](components_ClusterNodeContainer._internal_.OES_element_index_uint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_element_index_uint"`` |

#### Returns

``null`` \| [`OES_element_index_uint`](components_ClusterNodeContainer._internal_.OES_element_index_uint.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15569

▸ **getExtension**(`extensionName`): ``null`` \| [`ANGLE_instanced_arrays`](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"ANGLE_instanced_arrays"`` |

#### Returns

``null`` \| [`ANGLE_instanced_arrays`](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md)

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15570

▸ **getExtension**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getExtension

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15571

___

### getFragDataLocation

▸ **getFragDataLocation**(`program`, `name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.getFragDataLocation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14753

___

### getFramebufferAttachmentParameter

▸ **getFramebufferAttachmentParameter**(`target`, `attachment`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getFramebufferAttachmentParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15572

___

### getIndexedParameter

▸ **getIndexedParameter**(`target`, `index`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `index` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getIndexedParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14754

___

### getInternalformatParameter

▸ **getInternalformatParameter**(`target`, `internalformat`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `internalformat` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getInternalformatParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14755

___

### getParameter

▸ **getParameter**(`pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15573

___

### getProgramInfoLog

▸ **getProgramInfoLog**(`program`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

``null`` \| `string`

#### Inherited from

WebGL2RenderingContext.getProgramInfoLog

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15574

___

### getProgramParameter

▸ **getProgramParameter**(`program`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getProgramParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15575

___

### getQuery

▸ **getQuery**(`target`, `pname`): ``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery)

#### Inherited from

WebGL2RenderingContext.getQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14756

___

### getQueryParameter

▸ **getQueryParameter**(`query`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getQueryParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14757

___

### getRenderbufferParameter

▸ **getRenderbufferParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getRenderbufferParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15576

___

### getSamplerParameter

▸ **getSamplerParameter**(`sampler`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler` | [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getSamplerParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14758

___

### getShaderInfoLog

▸ **getShaderInfoLog**(`shader`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

``null`` \| `string`

#### Inherited from

WebGL2RenderingContext.getShaderInfoLog

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15577

___

### getShaderParameter

▸ **getShaderParameter**(`shader`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getShaderParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15578

___

### getShaderPrecisionFormat

▸ **getShaderPrecisionFormat**(`shadertype`, `precisiontype`): ``null`` \| [`WebGLShaderPrecisionFormat`](../modules/components_ClusterNodeContainer._internal_.md#webglshaderprecisionformat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadertype` | `number` |
| `precisiontype` | `number` |

#### Returns

``null`` \| [`WebGLShaderPrecisionFormat`](../modules/components_ClusterNodeContainer._internal_.md#webglshaderprecisionformat)

#### Inherited from

WebGL2RenderingContext.getShaderPrecisionFormat

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15579

___

### getShaderSource

▸ **getShaderSource**(`shader`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

``null`` \| `string`

#### Inherited from

WebGL2RenderingContext.getShaderSource

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15580

___

### getSupportedExtensions

▸ **getSupportedExtensions**(): ``null`` \| `string`[]

#### Returns

``null`` \| `string`[]

#### Inherited from

WebGL2RenderingContext.getSupportedExtensions

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15581

___

### getSyncParameter

▸ **getSyncParameter**(`sync`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync` | [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getSyncParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14759

___

### getTexParameter

▸ **getTexParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getTexParameter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15582

___

### getTransformFeedbackVarying

▸ **getTransformFeedbackVarying**(`program`, `index`): ``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `index` | `number` |

#### Returns

``null`` \| [`WebGLActiveInfo`](../modules/components_ClusterNodeContainer._internal_.md#webglactiveinfo)

#### Inherited from

WebGL2RenderingContext.getTransformFeedbackVarying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14760

___

### getUniform

▸ **getUniform**(`program`, `location`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `location` | [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getUniform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15583

___

### getUniformBlockIndex

▸ **getUniformBlockIndex**(`program`, `uniformBlockName`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformBlockName` | `string` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.getUniformBlockIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14761

___

### getUniformIndices

▸ **getUniformIndices**(`program`, `uniformNames`): ``null`` \| `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformNames` | `string`[] |

#### Returns

``null`` \| `number`[]

#### Inherited from

WebGL2RenderingContext.getUniformIndices

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14762

___

### getUniformLocation

▸ **getUniformLocation**(`program`, `name`): ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `name` | `string` |

#### Returns

``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation)

#### Inherited from

WebGL2RenderingContext.getUniformLocation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15584

___

### getVertexAttrib

▸ **getVertexAttrib**(`index`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

WebGL2RenderingContext.getVertexAttrib

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15585

___

### getVertexAttribOffset

▸ **getVertexAttribOffset**(`index`, `pname`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `pname` | `number` |

#### Returns

`number`

#### Inherited from

WebGL2RenderingContext.getVertexAttribOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15586

___

### hint

▸ **hint**(`target`, `mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.hint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15587

___

### invalidateFramebuffer

▸ **invalidateFramebuffer**(`target`, `attachments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachments` | `number`[] |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.invalidateFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14763

___

### invalidateSubFramebuffer

▸ **invalidateSubFramebuffer**(`target`, `attachments`, `x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachments` | `number`[] |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.invalidateSubFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14764

___

### isBuffer

▸ **isBuffer**(`buffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglbuffer) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15588

___

### isContextLost

▸ **isContextLost**(): `boolean`

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isContextLost

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15589

___

### isEnabled

▸ **isEnabled**(`cap`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15590

___

### isFramebuffer

▸ **isFramebuffer**(`framebuffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglframebuffer) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isFramebuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15591

___

### isProgram

▸ **isProgram**(`program`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15592

___

### isQuery

▸ **isQuery**(`query`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | ``null`` \| [`WebGLQuery`](../modules/components_ClusterNodeContainer._internal_.md#webglquery) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isQuery

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14765

___

### isRenderbuffer

▸ **isRenderbuffer**(`renderbuffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/components_ClusterNodeContainer._internal_.md#webglrenderbuffer) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isRenderbuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15593

___

### isSampler

▸ **isSampler**(`sampler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler` | ``null`` \| [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isSampler

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14766

___

### isShader

▸ **isShader**(`shader`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | ``null`` \| [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isShader

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15594

___

### isSync

▸ **isSync**(`sync`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync` | ``null`` \| [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isSync

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14767

___

### isTexture

▸ **isTexture**(`texture`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/components_ClusterNodeContainer._internal_.md#webgltexture) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isTexture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15595

___

### isTransformFeedback

▸ **isTransformFeedback**(`tf`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tf` | ``null`` \| [`WebGLTransformFeedback`](../modules/components_ClusterNodeContainer._internal_.md#webgltransformfeedback) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14768

___

### isVertexArray

▸ **isVertexArray**(`vertexArray`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexArray` | ``null`` \| [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject) |

#### Returns

`boolean`

#### Inherited from

WebGL2RenderingContext.isVertexArray

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14769

___

### lineWidth

▸ **lineWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.lineWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15596

___

### linkProgram

▸ **linkProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.linkProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15597

___

### pauseTransformFeedback

▸ **pauseTransformFeedback**(): `void`

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.pauseTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14770

___

### pixelStorei

▸ **pixelStorei**(`pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pname` | `number` |
| `param` | `number` \| `boolean` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.pixelStorei

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15598

___

### polygonOffset

▸ **polygonOffset**(`factor`, `units`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |
| `units` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.polygonOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15599

___

### readBuffer

▸ **readBuffer**(`src`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.readBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14771

___

### readPixels

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `dstData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `dstData` | ``null`` \| [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.readPixels

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15083

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.readPixels

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15084

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `dstData`, `dstOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `dstData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `dstOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.readPixels

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15085

___

### renderbufferStorage

▸ **renderbufferStorage**(`target`, `internalformat`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.renderbufferStorage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15600

___

### renderbufferStorageMultisample

▸ **renderbufferStorageMultisample**(`target`, `samples`, `internalformat`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `samples` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.renderbufferStorageMultisample

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14772

___

### resumeTransformFeedback

▸ **resumeTransformFeedback**(): `void`

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.resumeTransformFeedback

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14773

___

### sampleCoverage

▸ **sampleCoverage**(`value`, `invert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `invert` | `boolean` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.sampleCoverage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15601

___

### samplerParameterf

▸ **samplerParameterf**(`sampler`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler` | [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.samplerParameterf

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14774

___

### samplerParameteri

▸ **samplerParameteri**(`sampler`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sampler` | [`WebGLSampler`](../modules/components_ClusterNodeContainer._internal_.md#webglsampler) |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.samplerParameteri

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14775

___

### scissor

▸ **scissor**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.scissor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15602

___

### shaderSource

▸ **shaderSource**(`shader`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/components_ClusterNodeContainer._internal_.md#webglshader) |
| `source` | `string` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.shaderSource

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15603

___

### stencilFunc

▸ **stencilFunc**(`func`, `ref`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |
| `ref` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilFunc

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15604

___

### stencilFuncSeparate

▸ **stencilFuncSeparate**(`face`, `func`, `ref`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `func` | `number` |
| `ref` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilFuncSeparate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15605

___

### stencilMask

▸ **stencilMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilMask

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15606

___

### stencilMaskSeparate

▸ **stencilMaskSeparate**(`face`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilMaskSeparate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15607

___

### stencilOp

▸ **stencilOp**(`fail`, `zfail`, `zpass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fail` | `number` |
| `zfail` | `number` |
| `zpass` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilOp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15608

___

### stencilOpSeparate

▸ **stencilOpSeparate**(`face`, `fail`, `zfail`, `zpass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `fail` | `number` |
| `zfail` | `number` |
| `zpass` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.stencilOpSeparate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15609

___

### texImage2D

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15086

▸ **texImage2D**(`target`, `level`, `internalformat`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15087

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15088

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15089

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `srcData`, `srcOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15090

___

### texImage3D

▸ **texImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14776

▸ **texImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14777

▸ **texImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `format`, `type`, `srcData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | ``null`` \| [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14778

▸ **texImage3D**(`target`, `level`, `internalformat`, `width`, `height`, `depth`, `border`, `format`, `type`, `srcData`, `srcOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14779

___

### texParameterf

▸ **texParameterf**(`target`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texParameterf

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15610

___

### texParameteri

▸ **texParameteri**(`target`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texParameteri

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15611

___

### texStorage2D

▸ **texStorage2D**(`target`, `levels`, `internalformat`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `levels` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texStorage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14780

___

### texStorage3D

▸ **texStorage3D**(`target`, `levels`, `internalformat`, `width`, `height`, `depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `levels` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texStorage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14781

___

### texSubImage2D

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15091

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15092

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15093

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15094

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `srcData`, `srcOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage2D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15095

___

### texSubImage3D

▸ **texSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `width`, `height`, `depth`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14782

▸ **texSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `width`, `height`, `depth`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/components_ClusterNodeContainer._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14783

▸ **texSubImage3D**(`target`, `level`, `xoffset`, `yoffset`, `zoffset`, `width`, `height`, `depth`, `format`, `type`, `srcData`, `srcOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `zoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | ``null`` \| [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.texSubImage3D

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14784

___

### transformFeedbackVaryings

▸ **transformFeedbackVaryings**(`program`, `varyings`, `bufferMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `varyings` | `string`[] |
| `bufferMode` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.transformFeedbackVaryings

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14785

___

### uniform1f

▸ **uniform1f**(`location`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15612

___

### uniform1fv

▸ **uniform1fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15096

___

### uniform1i

▸ **uniform1i**(`location`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1i

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15613

___

### uniform1iv

▸ **uniform1iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1iv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15097

___

### uniform1ui

▸ **uniform1ui**(`location`, `v0`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `v0` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1ui

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14786

___

### uniform1uiv

▸ **uniform1uiv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform1uiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14787

___

### uniform2f

▸ **uniform2f**(`location`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15614

___

### uniform2fv

▸ **uniform2fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15098

___

### uniform2i

▸ **uniform2i**(`location`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2i

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15615

___

### uniform2iv

▸ **uniform2iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2iv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15099

___

### uniform2ui

▸ **uniform2ui**(`location`, `v0`, `v1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `v0` | `number` |
| `v1` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2ui

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14788

___

### uniform2uiv

▸ **uniform2uiv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform2uiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14789

___

### uniform3f

▸ **uniform3f**(`location`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15616

___

### uniform3fv

▸ **uniform3fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15100

___

### uniform3i

▸ **uniform3i**(`location`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3i

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15617

___

### uniform3iv

▸ **uniform3iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3iv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15101

___

### uniform3ui

▸ **uniform3ui**(`location`, `v0`, `v1`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `v0` | `number` |
| `v1` | `number` |
| `v2` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3ui

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14790

___

### uniform3uiv

▸ **uniform3uiv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform3uiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14791

___

### uniform4f

▸ **uniform4f**(`location`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15618

___

### uniform4fv

▸ **uniform4fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15102

___

### uniform4i

▸ **uniform4i**(`location`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4i

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15619

___

### uniform4iv

▸ **uniform4iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4iv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15103

___

### uniform4ui

▸ **uniform4ui**(`location`, `v0`, `v1`, `v2`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `v0` | `number` |
| `v1` | `number` |
| `v2` | `number` |
| `v3` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4ui

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14792

___

### uniform4uiv

▸ **uniform4uiv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `data` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniform4uiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14793

___

### uniformBlockBinding

▸ **uniformBlockBinding**(`program`, `uniformBlockIndex`, `uniformBlockBinding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |
| `uniformBlockIndex` | `number` |
| `uniformBlockBinding` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformBlockBinding

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14794

___

### uniformMatrix2fv

▸ **uniformMatrix2fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix2fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15104

___

### uniformMatrix2x3fv

▸ **uniformMatrix2x3fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix2x3fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14795

___

### uniformMatrix2x4fv

▸ **uniformMatrix2x4fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix2x4fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14796

___

### uniformMatrix3fv

▸ **uniformMatrix3fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix3fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15105

___

### uniformMatrix3x2fv

▸ **uniformMatrix3x2fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix3x2fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14797

___

### uniformMatrix3x4fv

▸ **uniformMatrix3x4fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix3x4fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14798

___

### uniformMatrix4fv

▸ **uniformMatrix4fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix4fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15106

___

### uniformMatrix4x2fv

▸ **uniformMatrix4x2fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix4x2fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14799

___

### uniformMatrix4x3fv

▸ **uniformMatrix4x3fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/components_ClusterNodeContainer._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.uniformMatrix4x3fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14800

___

### useProgram

▸ **useProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.useProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15620

___

### validateProgram

▸ **validateProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.validateProgram

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15621

___

### vertexAttrib1f

▸ **vertexAttrib1f**(`index`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib1f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15622

___

### vertexAttrib1fv

▸ **vertexAttrib1fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib1fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15623

___

### vertexAttrib2f

▸ **vertexAttrib2f**(`index`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib2f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15624

___

### vertexAttrib2fv

▸ **vertexAttrib2fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib2fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15625

___

### vertexAttrib3f

▸ **vertexAttrib3f**(`index`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib3f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15626

___

### vertexAttrib3fv

▸ **vertexAttrib3fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib3fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15627

___

### vertexAttrib4f

▸ **vertexAttrib4f**(`index`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib4f

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15628

___

### vertexAttrib4fv

▸ **vertexAttrib4fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/components_ClusterNodeContainer._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttrib4fv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15629

___

### vertexAttribDivisor

▸ **vertexAttribDivisor**(`index`, `divisor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `divisor` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribDivisor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14801

___

### vertexAttribI4i

▸ **vertexAttribI4i**(`index`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribI4i

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14802

___

### vertexAttribI4iv

▸ **vertexAttribI4iv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Int32List`](../modules/components_ClusterNodeContainer._internal_.md#int32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribI4iv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14803

___

### vertexAttribI4ui

▸ **vertexAttribI4ui**(`index`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribI4ui

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14804

___

### vertexAttribI4uiv

▸ **vertexAttribI4uiv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Uint32List`](../modules/components_ClusterNodeContainer._internal_.md#uint32list) |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribI4uiv

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14805

___

### vertexAttribIPointer

▸ **vertexAttribIPointer**(`index`, `size`, `type`, `stride`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `size` | `number` |
| `type` | `number` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribIPointer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14806

___

### vertexAttribPointer

▸ **vertexAttribPointer**(`index`, `size`, `type`, `normalized`, `stride`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `size` | `number` |
| `type` | `number` |
| `normalized` | `boolean` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.vertexAttribPointer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15630

___

### viewport

▸ **viewport**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.viewport

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15631

___

### waitSync

▸ **waitSync**(`sync`, `flags`, `timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync` | [`WebGLSync`](../modules/components_ClusterNodeContainer._internal_.md#webglsync) |
| `flags` | `number` |
| `timeout` | `number` |

#### Returns

`void`

#### Inherited from

WebGL2RenderingContext.waitSync

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14807
