- [AM any object](#am-any-object)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage](#usage)
  - [API](#api)
    - [anyObject()](#anyobject)
    - [anyNestedObject()](#anynestedobject)
  - [Advanced](#advanced)
    - [Generics](#generics)
  - [Use case](#use-case)
    - [Flat object](#flat-object)
    - [Nested object](#nested-object)
  - [Next step](#next-step)


# AM any object

This library is mock data definition, which removes all unnecessary mock data and type safe for unit testing.

## Installation

```bash
npm i am-any-object -D
```

## Import

```typescript
import { anyObject } from "am-any-object";

// or nested object more powerful
import { anyNestedObject } from "am-any-object";
```

## Usage

```typescript
vi.mocked(fetchFlatData).mockResolvedValue({
  ...anyObject(),

  // only data for unit testing 👍
  firstName: "Taro",
  lastName: "Yamada",
});

expect(name).toBe("Taro Yamada");
```

If not use `anyObject()`, you need to write all properties.

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

## API

### anyObject()

```typescript
const data = anyObject();

data.id; // undefined
data.age; // undefined
data.ANY_PROPERTY; // undefined
```

### anyNestedObject()

```typescript
const data = anyNestedObject({ address: { city: "Tokyo" } });

data.id; // {}
data.address.city; // "Tokyo"
data.address.ANY_PROPERTY.ANY_PROPERTY; // {}
```

## Advanced

### Generics

```typescript
import { anyObject } from "am-any-object";

const data = anyObject<{ id: string; age: number }>();
```

```typescript
import { anyNestedObject } from "am-any-object";

const data = anyNestedObject<{ id: string; address: { city: string } }>();
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

can use anyObject().

```typescript
import { anyObject } from "am-any-object";

const data: FlatData = {
  ...anyObject(),

  firstName: "Taro",
  lastName: "Yamada",
};

expect(data.firstName).toBe("Taro");
expect(data.lastName).toBe("Yamada");
expect(data.id).toBeUndefined();
```

### Nested object

```typescript
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
```

can use anyObject() for nested object.

```typescript
import { anyObject } from "am-any-object";

const data: NestedData = {
  ...anyObject(),

  address: {
    ...anyObject(),
    geo: anyObject(), // need to define nested object
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

// all not defined properties is empty object, be careful!
expect(data.address.geo.lat).toEqual({});
```


## Next step 

- [ ] Function mock support
- [ ] Array mock support