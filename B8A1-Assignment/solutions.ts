// 1:

const multiplyValue = (value:number,multiplier?:number): number =>{

  if(multiplier === undefined){
    return value * 2;

  }
 
  return value * multiplier;
};



//  2

const processInput = (value: string|number|boolean):string|number =>{

if (typeof value === "string"){
  return value.trim().toLowerCase();
} else if (
  typeof value === "number"){
    return value*10;
  }else{
    return value ? "Active" : "Inactive"
  }

};




// 3:

const formatCoordinate = (coordinate: readonly[number, number, string]): string =>{

return `Location: ${coordinate[2]}  (${coordinate[0]} ,${coordinate[1]}  )   `;
};

//  4:

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
const results : T[] = [];

for(const arr of arrays){
  for(const item of arr){
    results.push(item);
  }
}

return results;
}


//  5:

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


//  6:

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];

  for (const item of items){
    result.push(item[key]);
  }
  return result;
}


//  7:

class Employee {
    constructor (
    protected name: string,
    private baseSalary: number
    )  {}

    getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
  
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() :string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


// 8

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

