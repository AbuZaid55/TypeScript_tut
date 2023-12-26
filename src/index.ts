//type Annotations
// let fname:string = "Zaid"
// let age:number = 21
// let isStudent:boolean = true
// fname = "Abu Zaid";
// console.log(fname)


//bigint type
// let bigNumber1 = 9007199254740991n
// let bigNumber2 = 9007199254740991n
// let sum = bigNumber1+bigNumber2
// console.log(sum)


//type any
// let number:any = 5
// number="String"
// number=true
// console.log(typeof number)


//type unknown
// let number:unknown = 5
// number="String"
// number=true
// console.log(typeof number)


//function
// function sum(a:number,b:number):number{
//     return a+b
// }
// console.log(sum(3,2))


//fat arrow function when you uncomment this arrow function you will look other structure
// const sum = (a:number,b:number):number=>{
//     return a+b
// }
// console.log(sum(3,2))


//type inference mean compiler automatic assume type of data and setit for variable
// let number = 5
// number="String"


//default parameter
// const user = (name:string,age:number=1):string=>{
//     return `My name is ${name} and my age is ${age}`
// }
// console.log(user("Zaid"))


//optinal parameter
// const user = (name:string,age?:number):string=>{
//     if(age){
//         return `My name is ${name} and my age is ${age}`
//     }else{
//         return `My name is ${name}`
//     }
// }
// console.log(user("Zaid"))


//Array
// const array:number[] = [1,2,3,4,5,6,7,8,9]
// const array:number[] = new Array(1,2,3,4,5,6,7,8,9)
// const array:number[] = Array.of(1,2,3,4,5,6,7,8,9)
// console.log(array)


//Map method
// const array:number[] = [1,2,3,4,5,6,7,8,9]
// const newArray:number[] = array.map((currVal:number)=>{
//     return currVal*2
// })
// console.log(newArray)


//Object
// const person:{
//     name:string;
//     age:number;
//     isStudent:boolean;
//     address:{
//         city:string;
//         country:string;
//     }
// } = {
//     name:"Abu Zaid",
//     age:21,
//     isStudent:true,
//     address:{
//         city:"Mau",
//         country:"India",
//     }
// }


//Type Alias
// type Person = {
//     name:string;
//     age:number;
//     isStudent:boolean;
//     address:{
//         city:string;
//         country:string;
//     }
// } 
// const person:Person = {
//     name:"Abu Zaid",
//     age:21,
//     isStudent:true,
//     address:{
//         city:"Mau",
//         country:"India",
//     }
// }
// const getAge = (person:Person):number=>{
//     return person.age
// }
// console.log(getAge(person))


//Call Signatures
// type Person = {
//     fname:string;
//     age:number;
//     gender?:string;
//     greet:(country:string)=>string  //method Call signature
// } 
// const person:Person = {
//     fname:"Abu Zaid",
//     age:21,
//     greet:function(country){
//         return `Welcome, my name is ${this.fname}, I am ${this.age} years old, and I am from ${country}.`
//     }
// }
// console.log(person.greet("India"))


//Enums
// enum Type {
//     admin="admin",
//     user="user"
// }
// type loginDetails={
//     name:string;
//     email:string;
//     password:number;
//     type:Type;
// }
// const user1:loginDetails={
//     name:"Abu Zaid",
//     email:"zaid70979@gmail.com",
//     password:12345678,
//     type:Type.admin,
// }
// const user2:loginDetails={
//     name:"Abu Zaid",
//     email:"zaid70979@gmail.com",
//     password:12345678,
//     type:Type.user,
// }
// console.log(user1.type)
// console.log(user2.type)


//Tuples
// type PersonInfo = readonly[string,number,boolean]
// const person:PersonInfo=["Abu Zaid",21,true]


//Unions
// const inputValue = (value:string | number | boolean)=>{
//     console.log(value)
// }
// inputValue("Abu Zaid")
// inputValue(21)
// inputValue(true)


//Unions
// type Person = {
//     name:string;
//     age:number;
// }
// type Employee = {
//     emp_id:number;
//     department:string
// }
// type employeeDetails = Person | Employee

// const user:employeeDetails = {
//     name:"Abu Zaid",
//     age:21,
//     emp_id:101,
// }


//Intersection
// type Person = {
//     name:string;
//     age:number;
// }
// type Employee = {
//     emp_id:number;
//     department:string
// }
// type employeeDetails = Person & Employee

// const user:employeeDetails = {
//     name:"Abu Zaid",
//     age:21,
//     emp_id:101,
//     department:"Google 23Nt2"
// }


//Intersection
// type User = {name:string;age:number};
// type MyLocation = {city:string;country:string}

// const user:User = {name:"Abu Zaid",age:21}
// const mylocation:MyLocation = {city:"Mau", country:"India"}

// const getUserProfile = (user:User,mylocation:MyLocation)=>{
//     return {...user, ...mylocation}
// }
// const info:User & MyLocation = getUserProfile(user,mylocation)
// console.log(info)


//Generics
// function returnValue<T>(value:T):T {
//     return value
// }
// const numberResult = returnValue<number>(42)
// const stringResult = returnValue<string>("Hello")
// const booleanResult = returnValue<boolean>(true)
// console.log(numberResult,stringResult,booleanResult)


//Generics
// function info <T,U> (name:T,age:U):string {
//     return `My name is ${name} and i am ${age}yrs old`
// }
// const data:string = info<string,number>("Abu Zaid",21)
// console.log(data)


//Interface
// interface Person {
//     name:string;
//     age:number;
//     isStudent:boolean;
//     address:{
//         city:string;
//         country:string;
//     }
// } 
// const person:Person = {
//     name:"Abu Zaid",
//     age:21,
//     isStudent:true,
//     address:{
//         city:"Mau",
//         country:"India",
//     }
// }
// const getAge = (person:Person):number=>{
//     return person.age
// }
// console.log(getAge(person))


//Settings
// 0. npm install typescript
// 1. "target":"ES2022",
// 2. "lib": ["ES2022","DOM"], 
// 3. "noEmitOnError": true,
// 4. tsc index.ts --watch
// 5. tsc index.ts -w
// 6. tsc -init 
// 7. tsc -w 
// 8. "rootDir":"./src",
// 9. "outDir":"./dist"
// 10. {"exclude":[node_modules],"include":[]}


//Class
// class Person {
//     name:string;
//     age:number;
//     hobbies:string[];

//     constructor(name:string, age:number, hobbies:string[]){
//         this.name=name;
//         this.age=age;
//         this.hobbies=hobbies
//     }

//     introduce ():string {
//         return `Hi, I am ${this.name} and i am ${this.age} years old . I love ${this.hobbies.join(',')}`
//     }
// }
// const person1 = new Person("Abu Zaid",21,["football","Coding"])
// console.log(person1.introduce())


//Extends in class
// class Student extends Person {
//     grade:number;

//     constructor(name:string, age:number, hobbies:string[],grade:number){
//         super(name,age,hobbies);
//         this.grade = grade
//     }

//     introduce ():string {
//         return `${super.introduce()}. I am in grade ${this.grade}.`
//     }
// }
// const student1 = new Student("jon",21,["coding","learning"],10)
// console.log(student1.introduce())


//Public,Protected,Private in Class

//              | Parent Class | Child Class | OutSide Class |
//   Public     |      ✅     |     ✅      |      ✅       |
//   Protected  |      ✅     |     ✅      |      ❌       |
//   Private    |      ✅     |     ❌      |      ❌       |

// class user {
//     public name:string;
//     protected age:number;
//     private GF_Name:string;

//     constructor(name:string,age:number,GF_Name:string){
//         this.name=name;
//         this.age=age;
//         this.GF_Name=GF_Name
//     }
// }


//Shorthand Properties in Class
// class Person {
//     constructor(
//         public name:string, 
//         public age:number, 
//         public hobbies:string[])
//     {}

//     introduce ():string {
//         return `Hi, I am ${this.name} and i am ${this.age} years old . I love ${this.hobbies.join(',')}`
//     }
// }
// const person1 = new Person("Abu Zaid",21,["football","Coding"])
// console.log(person1.introduce())

// class Student extends Person {
//     constructor(
//         name:string, 
//         age:number, 
//         hobbies:string[],
//         public grade:number)
//         {super(name,age,hobbies)}

//     introduce ():string {
//         return `${super.introduce()}. I am in grade ${this.grade}.`
//     }
// }
// const student1 = new Student("jon",21,["coding","learning"],10)
// console.log(student1.introduce())


// class Person {
//     private _age: number | undefined;
//     constructor(
//         public name: string,
//         public hobbies: string[]
//     ) {}
//     public set age(age: number) {
//         if (age > 120 || age < 0) {throw new Error("Age is not valid!")}
//         this._age = age;
//     }
//     public get age():number{
//         if(this._age===undefined){throw new Error("Age is not defined")}
//         return this._age;
//     }
//     introduce(): string {
//         return `Hi, I am ${this.name} and I am ${this._age} years old. I love ${this.hobbies.join(',')}`;
//     }
// }
// const person1 = new Person("Abu Zaid", ["football", "Coding"]);
// // console.log(person1.age) //throw error
// person1.age = 21;
// console.log(person1.age)
// console.log(person1.introduce());


//Static in Class
// class MathOperations {
//     public static PI = Math.PI
//     public static add(num1:number,num2:number){
//         return num1+num2
//     }
//     public static subs(num1:number,num2:number){
//         return num1-num2
//     }
// }
// console.log(MathOperations.PI)
// console.log(MathOperations.add(3,2))
// console.log(MathOperations.subs(3,2))


//Type Guards
// const favHobbies = (hobby:string | string[])=>{
//     if(typeof hobby === 'object'){
//         return hobby.map((value:string)=>{console.log(value)})
//     }else{
//         console.log(hobby)
//     }
// }
// favHobbies('learning')
// favHobbies(['coding','football'])