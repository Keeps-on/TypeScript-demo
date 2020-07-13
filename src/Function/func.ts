

// 声明是函数的参数约束和返回值得约束
/**
 * 注意函数得返回值必须是number类型
 * @param name : 姓名,该函数必须是字符串类型
 * @param age : 年龄,该函数必须是数字类型
 */
function funcType(name: string, age: number): number {
    return age // 返回值得类型必须是数字类型
}

// 接受函数得返回值
let ageNum: number = funcType('张三', 18)


// 函数参数不固定
/**
 * 展示得是参数不固定得情况 
 * @param name 姓名
 * @param age 年龄 上述两项都为必填项
 * @param sex 该参数为存疑参数
 */
function funcType2(name: string, age: number, sex?: string): number {
    return age
}

// 函数的参数
let ageNum2: number = funcType2('kevin', 15,) // sex参数可传入也可不传入


// 函数的默认值
function funcType3(name: string = '张三', age: number = 18): number {
    return age
}

// 表达式约束
let funcType4 = function (name: string, age: number): number {
    return age
}

// 对于变量的约束
let funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
    return age
}


// 接口类型的参数

interface funcType6 {
    (name: string, age: number): number
}

let funcType6: funcType6 = function (name: string, age: number): number {
    return age
}

// 对于联合类型的函数,可以采用重载的方式
/**
 * 该函数表示的是可以传入字符串和数字,并且返回值也是字符串或者数字       
 * @param value 参数可以是字符串或者是数字
 */
function getValue(value: string | number): string | number {
    return value
}

// 定义变量
// let v:number = getValue(1) // 此时不允许
let v:number|string = getValue(1) // 该种方式是正确的



