// 1、利用set数组去重
// 利用 Set 数据结构的特性，可以快速去重。
// Set 对象是一种无序的集合，它不允许重复值存在。
// 可以将数组转换为 Set 对象，然后再转换回数组，这样就可以得到去重后的数组。
// const arr = [1, 2, 2, 3, 4 , 5, 5]
// const uniqqueArr = Array.from(new Set(arr))
// console.log(uniqqueArr)

// 2、 利用数组的 indexOf() 方法
// 可以遍历数组，将每个元素与之前的元素进行比较，如果相同则删除，最后得到去重后的数组
// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (uniqueArr.indexOf(arr[i]) === -1) {
//     uniqueArr.push(arr[i]);
//   }
// }
// console.log(uniqueArr); // [1, 2, 3, 4, 5]

// 3、利用 includes() 方法
// 与 indexOf() 类似，可以使用 includes() 方法来判断一个元素是否已经存在于数组中。
// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
// }
// console.log(uniqueArr); // [1, 2, 3, 4, 5]

// 4、利用 reduce() 方法
// 可以使用 reduce() 方法将数组转换为一个新的数组，过程中进行去重操作。
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
console.log(uniqueArr); // [1, 2, 3, 4, 5]
