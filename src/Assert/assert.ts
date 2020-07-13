
let num: number | string = "10"
num = 20
// console.log(num.length); 此时num的值为20没有length属性

// 类型断言 只能断言联合类型中存在得类型
function getAssert(name: string | number) {
    // return (<string>name).length
    return (name as string).length // 该种语法格式在React中适合在React中不适合使用(<string>name).length
}


