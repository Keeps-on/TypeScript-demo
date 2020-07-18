// 使用枚举可以定义一些有名字的数字常量
var Days;
(function (Days) {
    Days[Days["Sum"] = 0] = "Sum";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days.Sum); // 默认按照定义的索引进行打印 此时打印的是0
console.log(Days.Sat); // 打印的是6
console.log(Days); // 枚举类型会被编译成一个双向映射的对象
console.log(Days[0] === "Sun");
