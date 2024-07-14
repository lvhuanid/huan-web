// 根据 id/属性 去重 ----------start-------------

// 通过forEach再通过find方法判断数组是否包含当前对象id，不包含则添加
function unique22(arr) {
  let find = [];
  arr.forEach((el) => {
    if (!find.find((e) => e.brand_name == el.brand_name)) {
      find.push(el);
    }
  });
  return find;
}
//通过forEach再通过some方法判断数组是否包含当前对象id，不包含则添加
function unique22(arr) {
  let some = [];
  arr.forEach((el) => {
    if (!some.some((e) => e.brand_name == el.brand_name)) {
      some.push(el);
    }
  });
  return some;
}
// 根据 id/属性 去重 ----------end-------------1
