/*
 * @Author: GZH
 * @Date: 2021-07-03 09:37:27
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-03 09:47:09
 * @FilePath: \rewrite\DesignPattern\FactoryMethodPattern.js
 * @Description: 工厂模式- 返回类实例
 */

/**
 * 使用构造函数就应该想到工厂模式，工厂模式就是为了传参简单，不用调用大量的new
 */

function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder';
  this.work = ['写代码', '写系分', '修Bug'];
}
function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product manager';
  this.work = ['订会议室', '写PRD', '催更'];
}

/**
 * 如果种类多了的情况下，就要 写很多的构造函数，new 很多次，问题是，变的只有
 * work 这个属性，为了简化，就需要再简化一下
 */
function Factory(name, age, career) {
  switch (career) {
    case 'coder':
      return new Coder(name, age);
      break;
    case 'product manager':
      return new ProductManager(name, age);
      break;
    //...
  }
}

function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

/**
 * 不变的参数 name age，变的是work
 */
function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug'];
      break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更'];
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户'];
    case 'xxx':
      // 其它工种的职责分配
      //...

      return new User(name, age, career, work);
  }
}
