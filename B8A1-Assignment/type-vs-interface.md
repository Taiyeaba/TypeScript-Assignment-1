# Title: Type vs Interface in TypeScript

## Introduction

TypeScript-এ কাজ করার সময় অনেক ক্ষেত্রে আমাদের নিজেদের মতো করে Data-এর Structure নির্ধারণ করতে হয়। এই কাজটি সহজ করার জন্য Type Alias এবং Interface ব্যবহার করা হয়। দুটির কাজ অনেকটা একই রকম হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

## Detailed Body Paragraphs with Code Examples

Interface ব্যবহার করে একটি Object-এর মধ্যে কী কী তথ্য থাকবে, তা ঠিক করে দিতে পারি। যেমন, একজন Student-এর নাম এবং বয়স রাখার জন্য আমরা নিচের মতো Interface তৈরি করতে পারি।

```ts
interface Student {
  name: string;
  age: number;
}
```

এখানে Student-এর মধ্যে name এবং age নামে দুটি Property রাখা হয়েছে। name-এর Type হলো String এবং age-এর Type হলো Number।

অন্যদিকে, Type Alias ব্যবহার করে আমরা বিভিন্ন ধরনের Type তৈরি করতে পারি। যেমন, কোনো একটি Value যদি String অথবা Number—দুটির যেকোনো একটি হতে পারে, তাহলে Type Alias ব্যবহার করতে পারি।

```ts
type ID = string | number;
```

এখানে ID-এর Value String অথবা Number হতে পারে।

Interface-এ কিছু Property Declare করে অন্য Interface-এ আগের Property-গুলো নিয়ে আসা যায়।

```ts
interface Person {
  name: string;
}

interface Teacher extends Person {
  subject: string;
}
```

এখানে Teacher Interface, Person Interface থেকে name Property পেয়েছে। তাই Teacher-এর মধ্যে name এবং subject দুটি Property-ই থাকবে।

## Conclusion

Type এবং Interface যখন যেটি দরকার, তখন সেটি ব্যবহার করব। এই দুটি মূলত কাজের ধরন দেখে ব্যবহার করব। Object-এর ক্ষেত্রে Interface ব্যবহার করা হয়, আর বিভিন্ন ধরনের Type-এর ক্ষেত্রে Type Alias ব্যবহার করা হয়।
