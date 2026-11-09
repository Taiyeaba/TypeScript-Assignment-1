# Title: Type Narrowing in TypeScript

## Introduction

TypeScript-এ কাজ করার সময় অনেক সময় একটি Variable-এর মধ্যে একাধিক ধরনের Value থাকতে পারে। যেমন, একটি Variable-এর Value কখনো String আবার কখনো Number হতে পারে। তাই কোনো কাজ করার আগে Variable-টি কোন ধরনের Value রাখছে, তা জানা দরকার। এইভাবে Value-এর Type পরীক্ষা করে নির্দিষ্ট Type-এ নিয়ে আসার প্রক্রিয়াকে Type Narrowing বলে।

## Detailed Body Paragraphs with Code Examples

Type Narrowing ব্যবহার করলে আমরা সহজেই বুঝতে পারি একটি Variable বর্তমানে কোন Type-এর Value ধারণ করছে। TypeScript-এ typeof, instanceof এবং in Operator ব্যবহার করে এটি করা যায়।

### 1. typeof Operator

typeof Operator দিয়ে কোনো Value-এর Type পরীক্ষা করা যায়। যেমন:

```ts
function checkValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

এখানে value যদি String হয়, তাহলে সেটিকে বড় হাতের অক্ষরে পরিবর্তন করা হচ্ছে। আর value যদি Number হয়, তাহলে দশমিকের পর দুই ঘর পর্যন্ত দেখানো হচ্ছে।

### 2. instanceof Operator

instanceof Operator দিয়ে কোনো Object নির্দিষ্ট Class থেকে তৈরি হয়েছে কি না, তা পরীক্ষা করা যায়।

```ts
class Animal {
  move(): void {
    console.log("Animal is moving");
  }
}

function checkAnimal(animal: Animal | Date): void {
  if (animal instanceof Animal) {
    animal.move();
  } else {
    console.log(animal.getFullYear());
  }
}
```

এখানে animal যদি Animal Class-এর Object হয়, তাহলে move Method কাজ করবে। আর যদি Date Object হয়, তাহলে getFullYear Method ব্যবহার হবে।

### 3. in Operator

in Operator ব্যবহার করে কোনো Object-এর মধ্যে নির্দিষ্ট Property আছে কি না, তা পরীক্ষা করা যায়।

```ts
type Admin = {
  name: string;
  role: string;
};

type User = {
  name: string;
  email: string;
};

function checkUser(person: Admin | User): void {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.email);
  }
}
```

এখানে person Object-এর মধ্যে role Property থাকলে Admin-এর Property ব্যবহার করা হবে। আর role না থাকলে User-এর email Property ব্যবহার করা হবে।

## Conclusion

Type Narrowing TypeScript-এর একটি গুরুত্বপূর্ণ বিষয়। এটি ব্যবহার করলে কোনো Variable-এর Type সহজে পরীক্ষা করা যায় এবং সেই অনুযায়ী কাজ করা যায়। typeof, instanceof এবং in Operator ব্যবহার করে আমরা Code আরও সহজ, পরিষ্কার এবং Type-safe রাখতে পারি।