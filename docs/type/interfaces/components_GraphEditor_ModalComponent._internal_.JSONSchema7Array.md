[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor/ModalComponent](../modules/components_GraphEditor_ModalComponent.md) / [<internal\>](../modules/components_GraphEditor_ModalComponent._internal_.md) / JSONSchema7Array

# Interface: JSONSchema7Array

[components/GraphEditor/ModalComponent](../modules/components_GraphEditor_ModalComponent.md).[<internal>](../modules/components_GraphEditor_ModalComponent._internal_.md).JSONSchema7Array

## Hierarchy

- `Array`<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>

  ↳ **`JSONSchema7Array`**

## Table of contents

### Properties

- [length](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#length)

### Methods

- [[iterator]](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#[iterator])
- [[unscopables]](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#[unscopables])
- [at](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#at)
- [concat](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#concat)
- [copyWithin](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#copywithin)
- [entries](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#entries)
- [every](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#every)
- [fill](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#fill)
- [filter](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#filter)
- [find](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#find)
- [findIndex](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#findindex)
- [flat](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#flat)
- [flatMap](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#flatmap)
- [forEach](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#foreach)
- [includes](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#includes)
- [indexOf](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#indexof)
- [join](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#join)
- [keys](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#keys)
- [lastIndexOf](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#lastindexof)
- [map](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#map)
- [pop](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#pop)
- [push](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#push)
- [reduce](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#reduce)
- [reduceRight](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#reduceright)
- [reverse](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#reverse)
- [shift](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#shift)
- [slice](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#slice)
- [some](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#some)
- [sort](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#sort)
- [splice](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#splice)
- [toLocaleString](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#tolocalestring)
- [toString](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#tostring)
- [unshift](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#unshift)
- [values](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md#values)

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1273

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>

Iterator

#### Returns

[`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>

#### Inherited from

Array.\_\_@iterator@356

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@358

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:86

___

### concat

▸ **concat**(...`items`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`ConcatArray`](components_GraphEditor_DataEditor._internal_.ConcatArray.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **concat**(...`items`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) \| [`ConcatArray`](components_GraphEditor_DataEditor._internal_.ConcatArray.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1303

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): [`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`number`, [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

[`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`number`, [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1389

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

▸ **filter**(`predicate`, `thisArg?`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1422

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `obj`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `obj`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `obj`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`depth?`): [`FlatArray`](../modules/components_GraphEditor_DataEditor._internal_.md#flatarray)<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

[`FlatArray`](../modules/components_GraphEditor_DataEditor._internal_.md#flatarray)<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### keys

▸ **keys**(): [`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<`number`\>

Returns an iterable of keys in the array

#### Returns

[`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### pop

▸ **pop**(): `undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1286

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1291

___

### reduce

▸ **reduce**(`callbackfn`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1428

▸ **reduce**(`callbackfn`, `initialValue`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |
| `initialValue` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

▸ **reduceRight**(`callbackfn`, `initialValue`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |
| `initialValue` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type) |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1442

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `currentIndex`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

___

### reverse

▸ **reverse**(): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1313

___

### shift

▸ **shift**(): `undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### slice

▸ **slice**(`start?`, `end?`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `index`: `number`, `array`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1398

___

### sort

▸ **sort**(`compareFn?`): [`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type), `b`: [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`JSONSchema7Array`](components_GraphEditor_ModalComponent._internal_.JSONSchema7Array.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1346

▸ **splice**(`start`, `deleteCount`, ...`items`): [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1354

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1281

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1277

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

### values

▸ **values**(): [`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>

Returns an iterable of values in the array

#### Returns

[`IterableIterator`](components_ClusterNodeContainer._internal_.IterableIterator.md)<[`JSONSchema7Type`](../modules/components_GraphEditor_ModalComponent._internal_.md#jsonschema7type)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
