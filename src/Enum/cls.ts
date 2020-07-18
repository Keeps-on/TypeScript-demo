
// 创建Person类
class Person{
    private name:"张三" // 如果改为 privae name = "张三" console.log(Bob.name) 将不会被访问到
    protected age:18
    say(){
        console.log("我的名字"+this.name+",我的年龄为："+this.age)
    }
}

// 创建Person实例

let Bob = new Person()
Bob.say()
// console.log(Bob.name) // 默认情况下,类中的变量是没有修饰符修饰的,此时采用的是Public进行修饰
/**
 * 如果我们将 Person 中的类属性 name 改为 private name 进行修饰
 * 则 Bob.name 将不能被修饰 此时 name 属性只能在 Person 中进行修饰
 */
// 创建字类
// 一旦父类将属性定义为私有的之后,子类就不可以进行访问了
// 父类的属性定义成为受保护以后(protected),可以在子类里面进行访问
class Child extends Person{
    callParent(){
        console.log(super.age)
        super.say() // 子类如果继承自父类,那么在字类中通过super方法就可以调用父类的方法
    }
    // 定义静态方法 当定义了静态方法以后此时该方法就可以被类直接进行调用
    // 注意事项：在类的方法中不能使用this的属性,因为this是实例化后的对象
    static test(){
        console.log('test')
    }
}
// 生成子类的实例
let c = new Child()
c.callParent()
// console.log(c.age) // 如果当我们将父类中的age改为private则此时子类将不能访问私有的属性
console.log(c.say())
// test 方法被类进行了调用此时只能被类访问
console.log(Child.test())