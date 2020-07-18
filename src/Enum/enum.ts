// 使用枚举可以定义一些有名字的数字常量
enum Days{
    Sum, // 可以 对其指名 初始值 Sum = 3 那么此时的索引值 会依次进行类推
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days.Sum) // 默认按照定义的索引进行打印 此时打印的是0
console.log(Days.Sat) // 打印的是6
console.log(Days) // 枚举类型会被编译成一个双向映射的对象
console.log(Days[0] === "Sun")



