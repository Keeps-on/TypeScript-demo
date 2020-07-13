
// 定义数组 类型+[]
// 定义数字类型数组
let arr: number[] = [1, 2, 3]
// 定义字符串类型数组
let arrString: string[] = ['1', '2']
// 定义任意类型数组
let arrAny: any[] = [1, '2', true]


// 使用泛型表示法
let arrTypeNumber:Array<number> = [1,2,3]
let arrTypeString:Array<string> = ['hello','text']
let arrTypeAny:Array<any> = [1,'2',true]

// 接口表示法
interface IArr{
    [index:number]:number
}
// 限定数值类型
let arrIType:IArr = [1,2,3]

// 重要数组中嵌套对象[{},{},{}]
interface IUser {
    name:string,
    age:number
}
// 约束数组类型
interface IArrUser{
    [index:number]:IUser
}
// 定义数组
let users:IArrUser = [
    {name:'kevin',age:18},
    // {name:'kevin'}, 必须符合接口 IArrUser
]



