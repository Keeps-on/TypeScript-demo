

// 使用联合类型
let type:string|number = "this is a string"
// type = 1

// 对于length方法只有string类型才会支持,所以我们在使用变量得方法和属性得时候应该是联合索引中都支持得类型
console.log(type.length)
// 例如
console.log(type.toString()) // 该方法都支持