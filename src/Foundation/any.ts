
// 声明变量类型为any
let num: any = 1;
// 此时对变量进行赋值boolean值
num = true;
// 对变量进行赋值string
num = "hello"

// 当一个变量没有赋值操作,就会被认为任意值类型,等于var str:any;
let str;
// 对于str进行赋值 字符串 数字
str = "TypeScript"
str = 1 // 赋值数字

// 类型推论
let b = 1; // 此时根据TypeScript中的类型推论 会将b的类型推断成any类型
// 如果将b进行字符串的赋值则会报错
// b = 'test'  此时b不允许进行赋值推论