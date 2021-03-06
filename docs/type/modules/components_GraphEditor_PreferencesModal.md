[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor/PreferencesModal

# Module: components/GraphEditor/PreferencesModal

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor_PreferencesModal._internal_.md)

### Type aliases

- [PreferencesModalProps](components_GraphEditor_PreferencesModal#preferencesmodalprops)

### Variables

- [DefaultComponents](components_GraphEditor_PreferencesModal#defaultcomponents)
- [DefaultSidebarData](components_GraphEditor_PreferencesModal#defaultsidebardata)

### Functions

- [PreferencesModal](components_GraphEditor_PreferencesModal#preferencesmodal)

## Type aliases

### PreferencesModalProps

Ƭ **PreferencesModalProps**: `Object`

#### Type declaration

| Name          | Type                                                                                                                  |
| :------------ | :-------------------------------------------------------------------------------------------------------------------- |
| `components?` | `Record`<`string`, `React.ReactNode` \| [`FormProps`](components_GraphEditor_PreferencesModal._internal_#formprops)\> |
| `isOpen?`     | `boolean`                                                                                                             |
| `sidebar?`    | [`SidebarItemData`](components_GraphEditor_PreferencesModal._internal_#sidebaritemdata)[]                             |

#### Defined in

[components/GraphEditor/PreferencesModal/index.tsx:35](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/PreferencesModal/index.tsx#L35)

## Variables

### DefaultComponents

• **DefaultComponents**: `Object`

#### Type declaration

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EdgeView` | (`graphConfig`: [`GraphConfig`](components_Graph._internal_#graphconfig)) => { `formData`: `Omit`<{ `alpha`: `number` ; `fill`: { `default`: `number` ; `hovered`: `number` ; `nodeSelected`: `number` ; `selected`: `number` } ; `labelVisible`: `boolean` ; `lineType`: [`EdgeLineType`](components_EdgeContainer._internal_#edgelinetype) ; `width`: `number` }, `"ids"`\> ; `schema`: { `properties`: { `alpha`: { `title`: `string` = 'Alpha'; `type`: `string` = 'number' } ; `fill`: { `properties`: { `default`: { `title`: `string` = 'Default'; `type`: `string` = 'number' } ; `hovered`: { `title`: `string` = 'Hovered'; `type`: `string` = 'number' } ; `nodeSelected`: { `title`: `string` = 'Node Selected'; `type`: `string` = 'number' } ; `selected`: { `title`: `string` = 'Selected'; `type`: `string` = 'number' } } ; `required`: `string`[] ; `title`: `string` = 'Fill'; `type`: `string` = 'object' } ; `labelVisible`: { `title`: `string` = 'Label Visible'; `type`: `string` = 'boolean' } ; `lineType`: { `enum`: `string`[] ; `enumNames`: `string`[] ; `title`: `string` = 'Line Type'; `type`: `string` = 'string' } ; `width`: { `title`: `string` = 'Width'; `type`: `string` = 'number' } } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `uiSchema`: { `fill`: { `default`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `hovered`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `nodeSelected`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `selected`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } } } } |
| `NodeView` | (`graphConfig`: [`GraphConfig`](components_Graph._internal_#graphconfig)) => { `formData`: `Omit`<{ `fill`: { `default`: `number` ; `edgeSelected`: `number` ; `hovered`: `number` ; `selected`: `number` } ; `height`: `number` ; `labelVisible`: `boolean` ; `radius`: `number` ; `width`: `number` }, `"ids"`\> ; `schema`: { `properties`: { `fill`: { `properties`: { `default`: { `title`: `string` = 'Default'; `type`: `string` = 'number' } ; `edgeSelected`: { `title`: `string` = 'Edge Selected'; `type`: `string` = 'number' } ; `hovered`: { `title`: `string` = 'Hovered'; `type`: `string` = 'number' } ; `selected`: { `title`: `string` = 'Selected'; `type`: `string` = 'number' } } ; `required`: `string`[] ; `title`: `string` = 'Fill'; `type`: `string` = 'object' } ; `height`: { `title`: `string` = 'Height'; `type`: `string` = 'number' } ; `labelVisible`: { `title`: `string` = 'Label Visible'; `type`: `string` = 'boolean' } ; `radius`: { `title`: `string` = 'Radius'; `type`: `string` = 'number' } ; `width`: { `title`: `string` = 'Width'; `type`: `string` = 'number' } } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `uiSchema`: { `fill`: { `default`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `edgeSelected`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `hovered`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } ; `selected`: { `ui:widget`: (`__namedParameters`: [`ColorPickerProps`](components_GraphEditor_ColorPicker._internal_#colorpickerprops)) => `Element` = ColorPicker } } } }                                                                                                              |

#### Defined in

[components/GraphEditor/PreferencesModal/index.tsx:365](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/PreferencesModal/index.tsx#L365)

---

### DefaultSidebarData

• **DefaultSidebarData**: { `children`: { `id`: `string` = 'NodeView' }[] ; `icon`: `Element` ; `id`: `string` = 'General'; `label`: `string` = 'General' }[]

#### Defined in

[components/GraphEditor/PreferencesModal/index.tsx:549](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/PreferencesModal/index.tsx#L549)

## Functions

### PreferencesModal

▸ `Const` **PreferencesModal**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                     |
| :------ | :--------------------------------------------------------------------------------------- |
| `props` | [`PreferencesModalProps`](components_GraphEditor_PreferencesModal#preferencesmodalprops) |

#### Returns

`Element`

#### Defined in

[components/GraphEditor/PreferencesModal/index.tsx:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/PreferencesModal/index.tsx#L43)
