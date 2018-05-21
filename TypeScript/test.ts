

class User {
    //只读属性
    readonly id: number

    //存取器，get/set
    private _name: string
    get name(): string {
        return this._name
    }
    set name(name: string) {
        console.log('this is set method')
        // dosomething
        this._name = name
    }
    //构造函数
    constructor(id: number, theName: string) {
        //只读属性只能在构造函数里初始化
        this.id = id
        this._name = theName
    }
    //实例方法
    say() {
        console.log(`name:${this.name}`)
    }

    //静态方法（类方法）
    static print() {
        console.log(`static method`)
    }
}

let user = new User(1, 'linkFly')
user.name = 'tasaid' //会输出'this is set method '
user.say() // 实例方法
User.print()//静态方法


function identity(arg:number):number{
    //dosometing
    return arg
}
//T泛型
function identity1<T>(arg:T):T{
    return arg
}
identity1<string>('linkFly')
identity1('linkFly')
identity1(0)
identity1(true)

function fettch<T>(url:string):Promise<T>{
    //远程请求数据并返回结果
    return http(url).then(data =>{
        return data as T
    })
}