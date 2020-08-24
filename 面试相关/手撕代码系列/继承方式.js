/* 继承方式 */
function Parent() {
    this.name = 'father'
}
Parent.prototype.setName = function (name) {
    this.name = name
}

function Children(name, age) {
    Parent.call(this, name)
    this.age = age
}
Children.prototype.setAge = function (age) {
    this.age = age
}

Children.prototype = new Parent()
Children.prototype.constructor = Children