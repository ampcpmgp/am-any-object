- [AM any object](#am-any-object)
  - [Installation](#installation)
  - [Import](#import)
  - [Usage](#usage)
  - [Use case](#use-case)
    - [Plain object](#plain-object)


# AM any object

This library is mock data definition, which removes all unnecessary mock data for unit testing.

## Installation

```bash
npm i am-any-object -D
```

## Import

```typescript
import { anyPlainObject } from "am-any-object";
```

## Usage

```typescript
vi.mocked(fetchPlainData).mockResolvedValue({
  ...anyPlainObject(),

  // only data for unit testing 👍
  firstName: "Taro",
  lastName: "Yamada",
});

expect(name).toBe("Taro Yamada");
```

If not use `anyPlainObject()`, you need to write all properties.

```typescript
vi.mocked(fetchPlainData).mockResolvedValue({
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
vi.mocked(fetchPlainData).mockResolvedValue({
  firstName: "Taro",
  lastName: "Yamada",
  lastName2: "Yamada", // type not safe! 😢
} as any);
```

`...({} as any)` is same `as any`.

```typescript
vi.mocked(fetchPlainData).mockResolvedValue({
      ...({} as any),

  firstName: "Taro",
  lastName: "Yamada",
  lastName2: "Yamada", // type not safe! 😢
});
```

## Use case

### Plain object

```typescript
import { anyPlainObject } from "am-any-object";

const data = {
  ...anyPlainObject(),

  firstName: "Taro",
  lastName: "Yamada",
};
```
