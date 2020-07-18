

// 没有确切定义返回值类型,运行的数组每一项都可以是任意类型
// function createArray(length: number, value: any): Array<any> {
//     let arr = []
//     for (let i = 0; i < length; i++){
//         arr[i] = value
//     }
//     return arr;
// }

// createArray(3,1) 

// 使用泛型将上述代码进行改造
// T表示的返回任意类型
function createArray<T>(length: number, value: T): Array<T> {
    let arr = []
    for (let i = 0; i < length; i++){
        arr[i] = value
    }
    return arr;
}

// 调用该方法
let strArry:string[] = createArray<string>(3,'1') 
/**
 * 在调用该方法的时候,表示该方法返回的是一个字符串的数组，传入的值也是一个字符串
 */

//  当我们不进行传值的时候会根据数值的类型进行倒退
let numArray:number[] = createArray(3,1)
// 泛型帮助我们限制类型的约束

// 接口中使用泛型进行类型的约束
interface ICreate{
    <T>(name:string,value:T):Array<T>
}

// 实现该方法

let func:ICreate;
func = function<T>(name:string,value:T):Array<T>{
    return []
}

let strArr:string [] = func("zhangsan","str")