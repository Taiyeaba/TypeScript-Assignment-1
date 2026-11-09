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

