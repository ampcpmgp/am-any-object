- [AM any object](#am-any-object)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage](#usage)
  - [Use case](#use-case)
    - [Flat object](#flat-object)
    - [Nested object](#nested-object)
  - [Advanced](#advanced)
    - [Generics](#generics)


# AM any object

This library is mock data definition, which removes all unnecessary mock data for unit testing.

## Installation

```bash
npm i am-any-object -D
```

## Import

```typescript
import { anyFlatObject } from "am-any-object";
```

## Usage

```typescript
vi.mocked(fetchFlatData).mockResolvedValue({
  ...anyFlatObject(),

  // only data for unit testing 👍
  firstName: "Taro",
  lastName: "Yamada",
});

expect(name).toBe("Taro Yamada");
```

If not use `anyFlatObject()`, you need to write all properties.

```typescript
vi.mocked(fetchFlatData).mockResolvedValue({
    // data for unit testing
  firstName: "Taro",
  lastName: "Yamada",

  // unnecessary data definition for type error 😢
  id: 1,
  age: 20,
  country: "Japan",
  city: "Tokyo",
});

expect(name).toBe("Taro Yamada");
```

Why not `as any`?

```typescript
vi.mocked(fetchFlatData).mockResolvedValue({
  firstName: "Taro",
  lastName: "Yamada",
  lastName2: "Yamada", // type not safe! 😢
} as any);
```

`...({} as any)` is same `as any`.

```typescript
vi.mocked(fetchFlatData).mockResolvedValue({
  ...({} as any),

  firstName: "Taro",
  lastName: "Yamada",
  lastName2: "Yamada", // type not safe! 😢
});
```

## Use case

### Flat object

```typescript
type FlatData = {
  id: string;
  age: number;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
};
```

can use anyFlatObject() for flat object.

```typescript
import { anyFlatObject } from "am-any-object";

const data: FlatData = {
  ...anyFlatObject(),

  firstName: "Taro",
  lastName: "Yamada",
};

expect(data.firstName).toBe("Taro");
expect(data.lastName).toBe("Yamada");
expect(data.id).toBeUndefined();
```

### Nested object

can use anyFlatObject() for nested object.

```typescript
import { anyFlatObject } from "am-any-object";

export interface NestedData {
  id: string;
  address: {
    country: string;
    city: string;
    postalCode?: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
}

const data: NestedData = {
  ...anyFlatObject(),

  address: {
    ...anyFlatObject(),
    geo: anyFlatObject(), // need to define nested object
    postalCode: "100-0000",
  },

};

expect(data.address.postalCode).toBe("100-0000");
expect(data.address.geo.lat).toBeUndefined();
```

can use anyNestedObject() also.

```typescript
import { anyNestedObject } from "am-any-object";

const data: NestedData = anyNestedObject({
  address: {
    postalCode: "100-0000",
  },
});

expect(data.address.postalCode).toBe("100-0000");
expect(data.address.geo.lat).toEqual({}); // all properties is empty object, be careful!
```

## Advanced

### Generics

```typescript
import { anyFlatObject } from "am-any-object";

const data = anyFlatObject<{ id: string; age: number }>();
```

```typescript
import { anyNestedObject } from "am-any-object";

const data = anyNestedObject<{ id: string; age: number }>();
```
