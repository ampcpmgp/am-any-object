- [AM any object](#am-any-object)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage](#usage)
  - [API](#api)
    - [anyFlatObject()](#anyflatobject)
    - [anyNestedObject()](#anynestedobject)
  - [Advanced](#advanced)
    - [Generics](#generics)
  - [Next step](#next-step)


# AM any object

This library is mock data definition, which removes all unnecessary mock data for unit testing.

## Installation

```bash
npm i am-any-object -D
```

## Import

```typescript
import { anyFlatObject } from "am-any-object";

// or nested object more powerful
import { anyNestedObject } from "am-any-object";
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

## API

### anyFlatObject()

```typescript
const data = anyFlatObject();

data.id; // undefined
data.age; // undefined
data.ANY_PROPERTY; // undefined
```

### anyNestedObject()

```typescript
const data = anyNestedObject();

data.id; // {}
data.address // {}
data.address.city // {}
data.address.ANY_PROPERTY.ANY_PROPERTY // {}
```

## Advanced

### Generics

```typescript
import { anyFlatObject } from "am-any-object";

const data = anyFlatObject<{ id: string; age: number }>();
```

```typescript
import { anyNestedObject } from "am-any-object";

const data = anyNestedObject<{ id: string; address: { city: string } }>();
```


## Next step 

- [ ] Function mock support
- [ ] Array mock support