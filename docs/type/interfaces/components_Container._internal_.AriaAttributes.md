[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / AriaAttributes

# Interface: AriaAttributes

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).AriaAttributes

## Hierarchy

- **`AriaAttributes`**

  ↳ [`HTMLAttributes`](components_Container._internal_.HTMLAttributes.md)

  ↳ [`SVGAttributes`](components_Container._internal_.SVGAttributes.md)

## Table of contents

### Properties

- [aria-activedescendant](components_Container._internal_.AriaAttributes.md#aria-activedescendant)
- [aria-atomic](components_Container._internal_.AriaAttributes.md#aria-atomic)
- [aria-autocomplete](components_Container._internal_.AriaAttributes.md#aria-autocomplete)
- [aria-busy](components_Container._internal_.AriaAttributes.md#aria-busy)
- [aria-checked](components_Container._internal_.AriaAttributes.md#aria-checked)
- [aria-colcount](components_Container._internal_.AriaAttributes.md#aria-colcount)
- [aria-colindex](components_Container._internal_.AriaAttributes.md#aria-colindex)
- [aria-colspan](components_Container._internal_.AriaAttributes.md#aria-colspan)
- [aria-controls](components_Container._internal_.AriaAttributes.md#aria-controls)
- [aria-current](components_Container._internal_.AriaAttributes.md#aria-current)
- [aria-describedby](components_Container._internal_.AriaAttributes.md#aria-describedby)
- [aria-details](components_Container._internal_.AriaAttributes.md#aria-details)
- [aria-disabled](components_Container._internal_.AriaAttributes.md#aria-disabled)
- [aria-dropeffect](components_Container._internal_.AriaAttributes.md#aria-dropeffect)
- [aria-errormessage](components_Container._internal_.AriaAttributes.md#aria-errormessage)
- [aria-expanded](components_Container._internal_.AriaAttributes.md#aria-expanded)
- [aria-flowto](components_Container._internal_.AriaAttributes.md#aria-flowto)
- [aria-grabbed](components_Container._internal_.AriaAttributes.md#aria-grabbed)
- [aria-haspopup](components_Container._internal_.AriaAttributes.md#aria-haspopup)
- [aria-hidden](components_Container._internal_.AriaAttributes.md#aria-hidden)
- [aria-invalid](components_Container._internal_.AriaAttributes.md#aria-invalid)
- [aria-keyshortcuts](components_Container._internal_.AriaAttributes.md#aria-keyshortcuts)
- [aria-label](components_Container._internal_.AriaAttributes.md#aria-label)
- [aria-labelledby](components_Container._internal_.AriaAttributes.md#aria-labelledby)
- [aria-level](components_Container._internal_.AriaAttributes.md#aria-level)
- [aria-live](components_Container._internal_.AriaAttributes.md#aria-live)
- [aria-modal](components_Container._internal_.AriaAttributes.md#aria-modal)
- [aria-multiline](components_Container._internal_.AriaAttributes.md#aria-multiline)
- [aria-multiselectable](components_Container._internal_.AriaAttributes.md#aria-multiselectable)
- [aria-orientation](components_Container._internal_.AriaAttributes.md#aria-orientation)
- [aria-owns](components_Container._internal_.AriaAttributes.md#aria-owns)
- [aria-placeholder](components_Container._internal_.AriaAttributes.md#aria-placeholder)
- [aria-posinset](components_Container._internal_.AriaAttributes.md#aria-posinset)
- [aria-pressed](components_Container._internal_.AriaAttributes.md#aria-pressed)
- [aria-readonly](components_Container._internal_.AriaAttributes.md#aria-readonly)
- [aria-relevant](components_Container._internal_.AriaAttributes.md#aria-relevant)
- [aria-required](components_Container._internal_.AriaAttributes.md#aria-required)
- [aria-roledescription](components_Container._internal_.AriaAttributes.md#aria-roledescription)
- [aria-rowcount](components_Container._internal_.AriaAttributes.md#aria-rowcount)
- [aria-rowindex](components_Container._internal_.AriaAttributes.md#aria-rowindex)
- [aria-rowspan](components_Container._internal_.AriaAttributes.md#aria-rowspan)
- [aria-selected](components_Container._internal_.AriaAttributes.md#aria-selected)
- [aria-setsize](components_Container._internal_.AriaAttributes.md#aria-setsize)
- [aria-sort](components_Container._internal_.AriaAttributes.md#aria-sort)
- [aria-valuemax](components_Container._internal_.AriaAttributes.md#aria-valuemax)
- [aria-valuemin](components_Container._internal_.AriaAttributes.md#aria-valuemin)
- [aria-valuenow](components_Container._internal_.AriaAttributes.md#aria-valuenow)
- [aria-valuetext](components_Container._internal_.AriaAttributes.md#aria-valuetext)

## Properties

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Defined in

node_modules/@types/react/index.d.ts:1569

___

### aria-atomic

• `Optional` **aria-atomic**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Defined in

node_modules/@types/react/index.d.ts:1571

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"none"`` \| ``"list"`` \| ``"both"`` \| ``"inline"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Defined in

node_modules/@types/react/index.d.ts:1576

___

### aria-busy

• `Optional` **aria-busy**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Defined in

node_modules/@types/react/index.d.ts:1578

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`see`** aria-pressed @see aria-selected.

#### Defined in

node_modules/@types/react/index.d.ts:1583

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`see`** aria-colindex.

#### Defined in

node_modules/@types/react/index.d.ts:1588

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`see`** aria-colcount @see aria-colspan.

#### Defined in

node_modules/@types/react/index.d.ts:1593

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-colindex @see aria-rowspan.

#### Defined in

node_modules/@types/react/index.d.ts:1598

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`see`** aria-owns.

#### Defined in

node_modules/@types/react/index.d.ts:1603

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"time"`` \| ``"true"`` \| ``"false"`` \| ``"step"`` \| ``"date"`` \| ``"page"`` \| ``"location"``

Indicates the element that represents the current item within a container or set of related elements.

#### Defined in

node_modules/@types/react/index.d.ts:1605

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`see`** aria-labelledby

#### Defined in

node_modules/@types/react/index.d.ts:1610

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`see`** aria-describedby.

#### Defined in

node_modules/@types/react/index.d.ts:1615

___

### aria-disabled

• `Optional` **aria-disabled**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`see`** aria-hidden @see aria-readonly.

#### Defined in

node_modules/@types/react/index.d.ts:1620

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"none"`` \| ``"copy"`` \| ``"move"`` \| ``"link"`` \| ``"execute"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`deprecated`** in ARIA 1.1

#### Defined in

node_modules/@types/react/index.d.ts:1625

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`see`** aria-invalid @see aria-describedby.

#### Defined in

node_modules/@types/react/index.d.ts:1630

___

### aria-expanded

• `Optional` **aria-expanded**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Defined in

node_modules/@types/react/index.d.ts:1632

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Defined in

node_modules/@types/react/index.d.ts:1637

___

### aria-grabbed

• `Optional` **aria-grabbed**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`deprecated`** in ARIA 1.1

#### Defined in

node_modules/@types/react/index.d.ts:1642

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"grid"`` \| ``"dialog"`` \| ``"menu"`` \| ``"listbox"`` \| ``"tree"`` \| ``"true"`` \| ``"false"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Defined in

node_modules/@types/react/index.d.ts:1644

___

### aria-hidden

• `Optional` **aria-hidden**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether the element is exposed to an accessibility API.

**`see`** aria-disabled.

#### Defined in

node_modules/@types/react/index.d.ts:1649

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`see`** aria-errormessage.

#### Defined in

node_modules/@types/react/index.d.ts:1654

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Defined in

node_modules/@types/react/index.d.ts:1656

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`see`** aria-labelledby.

#### Defined in

node_modules/@types/react/index.d.ts:1661

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`see`** aria-describedby.

#### Defined in

node_modules/@types/react/index.d.ts:1666

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Defined in

node_modules/@types/react/index.d.ts:1668

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Defined in

node_modules/@types/react/index.d.ts:1670

___

### aria-modal

• `Optional` **aria-modal**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether an element is modal when displayed.

#### Defined in

node_modules/@types/react/index.d.ts:1672

___

### aria-multiline

• `Optional` **aria-multiline**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Defined in

node_modules/@types/react/index.d.ts:1674

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the user may select more than one item from the current selectable descendants.

#### Defined in

node_modules/@types/react/index.d.ts:1676

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Defined in

node_modules/@types/react/index.d.ts:1678

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`see`** aria-controls.

#### Defined in

node_modules/@types/react/index.d.ts:1684

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Defined in

node_modules/@types/react/index.d.ts:1689

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-setsize.

#### Defined in

node_modules/@types/react/index.d.ts:1694

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "pressed" state of toggle buttons.

**`see`** aria-checked @see aria-selected.

#### Defined in

node_modules/@types/react/index.d.ts:1699

___

### aria-readonly

• `Optional` **aria-readonly**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that the element is not editable, but is otherwise operable.

**`see`** aria-disabled.

#### Defined in

node_modules/@types/react/index.d.ts:1704

___

### aria-relevant

• `Optional` **aria-relevant**: ``"all"`` \| ``"text"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`see`** aria-atomic.

#### Defined in

node_modules/@types/react/index.d.ts:1709

___

### aria-required

• `Optional` **aria-required**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates that user input is required on the element before a form may be submitted.

#### Defined in

node_modules/@types/react/index.d.ts:1711

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Defined in

node_modules/@types/react/index.d.ts:1713

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`see`** aria-rowindex.

#### Defined in

node_modules/@types/react/index.d.ts:1718

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`see`** aria-rowcount @see aria-rowspan.

#### Defined in

node_modules/@types/react/index.d.ts:1723

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-rowindex @see aria-colspan.

#### Defined in

node_modules/@types/react/index.d.ts:1728

___

### aria-selected

• `Optional` **aria-selected**: [`Booleanish`](../modules/components_Container._internal_.md#booleanish)

Indicates the current "selected" state of various widgets.

**`see`** aria-checked @see aria-pressed.

#### Defined in

node_modules/@types/react/index.d.ts:1733

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-posinset.

#### Defined in

node_modules/@types/react/index.d.ts:1738

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Defined in

node_modules/@types/react/index.d.ts:1740

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Defined in

node_modules/@types/react/index.d.ts:1742

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Defined in

node_modules/@types/react/index.d.ts:1744

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`see`** aria-valuetext.

#### Defined in

node_modules/@types/react/index.d.ts:1749

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Defined in

node_modules/@types/react/index.d.ts:1751
