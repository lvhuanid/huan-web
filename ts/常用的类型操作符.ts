// 在 TypeScript 开发中，常用的类型操作符有很多，以下是一些比较常见的：

// -typeof：用于获取一个值的类型。
// -keyof：用于获取一个类型的所有键的联合类型。
// -extends：用于实现类型的继承和扩展。
// -in：用于判断一个属性是否存在于一个类型中。
// -as：用于类型断言，可以将一个值强制转换为指定类型。
// -instanceof：用于判断一个对象是否是某个类的实例。
// -never：表示那些不应该出现的类型。
// -Partial：用于将一个类型的所有属性变为可选属性。
// -Required：用于将一个类型的所有属性变为必选属性。
// -Pick：用于从一个类型中选择部分属性来构建一个新类型。
// -Omit：用于从一个类型中排除部分属性来构建一个新类型。

// 除此之外，还有一些高级的类型操作符，例如 Exclude、Extract、NonNullable 等，它们在一些特定的场景下非常有用。
// 在实际开发中，具体使用哪些类型操作符，需要根据具体场景和需求来决定。

// 冒号 : 是类型注解的语法符号，用于指定变量、函数参数、函数返回值等的类型
// |：用于表示联合类型，例如 string | number 表示字符串类型或数字类型。
// &：用于表示交叉类型，例如 type A = { x: number } & { y: string } 表示同时具有 x 属性和 y 属性的类型。
// []：用于表示数组类型，例如 number[] 表示数字类型的数组。
// ()：用于表示函数类型，例如 (a: number, b: number) => number 表示接受两个数字类型的参数并返回数字类型的函数。
// {}：用于表示对象类型，例如 { x: number, y: string } 表示具有 x 属性和 y 属性的对象类型。

// let num: number = 123;
// function add(a: number, b: number): number {
//   return a + b;
// }


// typeof 是 TypeScript 中的一个类型操作符，用于获取一个值的类型。具体来说，它可以用于获取一个变量或表达式的类型，并返回一个字符串表示该类型的名称。例如：
let num = 123;
let str = 'hello';

console.log(typeof num); // 输出 "number"
console.log(typeof str); // 输出 "string"
// 在上面的例子中，typeof num 返回的值是字符串 "number"，表示变量 num 的类型是数字类型。同样地，typeof str 返回的值是字符串 "string"，表示变量 str 的类型是字符串类型。

// typeof 还可以用于检查对象是否具有指定的属性，例如：
// interface Person {
//     name: string;
//     age: number;
//   }
  
//   let person: Person = { name: 'Alice', age: 30 };
  
//   if (typeof person.name === 'string') {
//     console.log('person has name property');
//   } else {
//     console.log('person does not have name property');
//   }
// 在上面的例子中，我们使用 typeof person.name 来判断 person 对象是否具有 name 属性，并在条件语句中根据判断结果输出不同的信息。因为 typeof person.name 返回的值是字符串 "string"，所以条件判断的结果为 true，表明 person 对象具有 name 属性。

// 1、类型断言操作符：可以用来告诉编译器变量的实际类型，类似于类型转换操作。类型断言操作符有两种写法，分别是<类型>值和值 as 类型，如下所示：
let str1: any = 'hello world';
let len1: number = (<string>str).length;
let len2: number = (str as string).length;
// 2、可选链操作符：用来简化访问对象属性或方法的代码，可以在属性或方法不存在时返回 undefined，避免程序抛出异常。可选链操作符是一个问号?，如下所示：
const person1 = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY',
    },
};
// const city = person?.address?.city;

// 3、空值合并操作符：用来处理变量为空或未定义的情况，可以给变量设置默认值。空值合并操作符是两个竖杠||，如下所示：
const str11: string | undefined = undefined;
const str2: string = str1 || 'hello world';
console.log(str2); // 输出 hello world

// 4、反义词操作符：用来表示一个类型的相反类型。反义词操作符是一个感叹号!，如下所示：
const num1: number | undefined = undefined;
const num2: number = num1!;

// 5、索引类型查询操作符：用来获取某个类型的属性名称的联合类型，可以通过属性名来访问对象的属性。索引类型查询操作符是一个类型名加上方括号[]，如下所示：
interface Person {
    name: string;
    age1: number;
    gender1: 'male' | 'female';
}
type PersonKeys = keyof Person;
const keys: PersonKeys = 'name';
console.log(keys); // 输出 name


// &：交叉类型
// 在 TypeScript 中，& 符号表示交叉类型（Intersection Types），也可以称为并集类型或者合并类型。交叉类型是将多个类型合并成一个类型，表示这个变量需要同时满足多种类型的要求。可以将 & 读作 "and"，表示这个变量需要同时满足多个类型中的所有要求。

// 例如，下面的代码定义了一个类型为 Person & Serializable 的变量，表示这个变量需要同时满足 Person 类型和 Serializable 类型的要求：
interface Person {
    name: string;
    age11: number;
}

interface Serializable {
    serialize: () => string;
}

type PersonSerializable = Person & Serializable;

// const person: PersonSerializable = {
//     name: 'Alice',
//     age: 30,
//     serialize: () => JSON.stringify({ name: 'Alice', age: 30 }),
// };
// 在上面的例子中，变量 person 同时满足 Person 类型和 Serializable 类型的要求，即它包含 name 和 age 属性，同时具有 serialize 方法。