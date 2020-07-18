

// 类型别名采用变量的形式
type strType = string|number|boolean;

let str:strType = "10"
str = 10 
str = true

// 类型别名采用的是接口的形式

interface muchType1 {
    name:string
}

interface muchType2 {
    age:number
}

type muchType = muchType1|muchType2

let obj:muchType = {name:"张三"}
let obj2:muchType = {age:10}
let obj3:muchType = {name:"李四",age:10}
// 限制字符串的选择
type sex = "男"|"女"
function getSex(s:sex):string{
    return s
}

getSex('男')
