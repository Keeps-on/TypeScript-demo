

// 定义接口 强约束
interface IUserInfo {
    name: string // 该接口只能有一个name属性
}

// 使用接口约束变量
let userinfo: IUserInfo

// 对该变量赋值的时候,只能赋值该接口对象才可以
userinfo = {
    name: 'Kevin',
    // age:18 // 此时不可以,因为在接口中没有被定义
}

// 可选属性
interface IUserInfo2 {
    name: string,
    age?: number, // 使用?将age变为可选属性
}

let bob: IUserInfo2

bob = { name: 'Bob', age: 18 }

let lisa: IUserInfo2
lisa = { name: 'lisa' }  // 强约束类型,所以此时不能赋值age属性


// 属性个数不确定
interface IUserDetails {
    name: string,
    age?: number,
    [propName: string]: any // 表示的是可以任意多个属性
    // 如果将PropName:string:number类型此时会报错,因为name:string类型会有冲突
}

let Tom: IUserDetails

Tom = {
    name: 'Tom',
    age: 15,
    sex: 'man',
}


// 只读属性
interface IUserRead {
    name: string,
    readonly age: number
}
// 将IUser属性
let tim: IUserRead = {
    name: 'tim',
    age: 15
}

// 此时可以对tim进行修改
tim.name = 'Tim'
// tim.age = 10 // 此时的值是可以修改的,但是如果在变量前增加readonly 此时该属性不能被修改