var User = /** @class */ (function () {
    //构造函数
    function User(id, theName) {
        //只读属性只能在构造函数里初始化
        this.id = id;
        this._name = theName;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            console.log('this is set method');
            // dosomething
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    //实例方法
    User.prototype.say = function () {
        console.log("name:" + this.name);
    };
    //静态方法（类方法）
    User.print = function () {
        console.log("static method");
    };
    return User;
}());
var user = new User(1, 'linkFly');
user.name = 'tasaid'; //会输出'this is set method '
user.say(); // 实例方法
User.print(); //静态方法
function identity(arg) {
    //dosometing
    return arg;
}
//T泛型
function identity1(arg) {
    return arg;
}
identity1('linkFly');
identity1('linkFly');
identity1(0);
identity1(true);
