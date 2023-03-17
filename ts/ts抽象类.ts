// ts抽象类
// 在TypeScript中，抽象类是一种不能被实例化的类，它只能用作其他类的基类。
// 抽象类的主要作用是定义一些基本的结构和方法，以供子类继承和实现。
// 抽象类中可以包含抽象方法和非抽象方法。

// 抽象方法是一种没有实现的方法，它只有方法名和参数列表，没有函数体。
// 子类必须实现抽象方法才能被实例化。

// 抽象类可以通过abstract关键字进行定义。
// 抽象类中可以包含非抽象方法，这些方法的实现可以被子类直接继承或重写。
// 但抽象类中至少有一个抽象方法，否则它与普通类没有区别。

// 以下是一个抽象类的例子：
abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract makeSound(): void;

  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
  
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound() {
    console.log(`${this.name} meows.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound() {
    console.log(`${this.name} barks.`);
  }
}

const cat = new Cat("Kitty");
cat.makeSound(); // 输出: "Kitty meows."
cat.move(10); // 输出: "Kitty moved 10m."

const dog = new Dog("Buddy");
dog.makeSound(); // 输出: "Buddy barks."
dog.move(20); // 输出: "Buddy moved 20m."
  

