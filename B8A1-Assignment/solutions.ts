// Problem 1:
// Create a function multiplyValue that accepts a number value and an optional number multiplier.

// -- If multiplier is provided, return value multiplied by multiplier.
// -- If multiplier is not provided (undefined), return value multiplied by 2 by default.

// Solution

const multiplyValue = (value:number,multiplier?:number): number =>{

  if(multiplier === undefined){
    return value * 2;

  }
 
  return value * multiplier;
};

// console.log(multiplyValue(10));    
// console.log(multiplyValue(10, 5)); 
// console.log(multiplyValue(7, 0)); 


// Problem 2:
// Create a function processInput that accepts a value which may be a string, number, or boolean, and returns a formatted result based on the value's type:

// --If the input is a string → trim any leading/trailing spaces and return it in lowercase.
// --If the input is a number → return the number multiplied by 10.
//-- If the input is a boolean → return "Active" if true, or "Inactive" if false.

// Requirements:
// -- Write the correct union type for the function parameter and the return type.
// -- Use type narrowing (typeof) to handle each case safely.

// solution

const processInput = (value: string|number|boolean):string|number|boolean =>{

if (typeof value === "string"){
  return value.toLowerCase();
} else if (
  typeof value === "number"){
    return value*10;
  }else{
    return value ? "Active" : "Inactive"
  }

};

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));


// Problem 3:
// Create a function formatCoordinate that accepts a readonly tuple representing a coordinate and location name in the exact order [latitude, longitude, locationName] ([number, number, string]), and returns a formatted location string.

// Requirements:
// -- Apply the readonly modifier to the tuple parameter so it cannot be mutated inside the function.
// -- Return the exact string format: "Location: [locationName] ([latitude], [longitude])" without rounding the numbers.


// solution

const formatCoordinate = (coordinate: readonly[number, number, string]): string =>{

return `Location: ${coordinate[2]}  (${coordinate[0]} ,${coordinate[1]}  )   `;
};



// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


// Problem 4:
// Create a generic function concatenateArrays that accepts multiple arrays of the same type T using rest parameters (...arrays: T[][]) and returns a single combined array containing all elements in the order they were passed.

// Requirements:
// -- Must use a generic type parameter <T> and rest parameters.
//--  Do not use any.

//solution

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
const results : T[] = [];

for(const arr of arrays){
  for(const item of arr){
    results.push(item);
  }
}

return results;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//   return arrays.flat();
// }

// Problem 5:
// Define an interface Course with the following properties:

// title (string)
// students (number)
// isPublished (boolean)

// Then, create a function getPopularCourses that accepts an array of Course objects and a minStudents number. The function should return a new array containing only the courses where isPublished is true and students is greater than or equal to minStudents.

// Requirements:
//-- Define the Course interface with the exact property names and types.
// --Do not mutate the original array.

//solution
interface Course {

title:string
students: number
isPublished:boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[]  {
    return courses.filter((course) => {
  if (course.isPublished && course.students >= minStudents) {
       return true;
  } else {
    return false;
  }
    });

  }

// const courses: Course[] = [
//    { title: "TypeScript Mastery", students: 120, isPublished: true },
//      { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];

// console.log(getPopularCourses(courses, 80));

// Problem 6:
// Write a generic function pluckValues that accepts an array of objects (items: T[]) and a valid property key of those objects (key: K), and returns a new array (T[K][]) containing the values of that specific property from each object in the same order.

// Requirements:
//-- Use generics with the keyof constraint (<T, K extends keyof T>).
//-- Do not use any.