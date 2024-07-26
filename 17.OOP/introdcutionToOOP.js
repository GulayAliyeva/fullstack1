/*1
class Person{
 constructor(name,age,country){
    this.name=name;
    this.age=age;
    this.country=country;

 }
 displayDetails(){
    console.log(`Name: ${this.name}  Age: ${this.age}  Country: ${this.country} `);
 }

}
const person1=new Person ("Gulay",19,"Azerbaijan");
const person2=new Person("Turkan",18,"Azerbaijan");
 person1.displayDetails();
 person2.displayDetails();*/
/*2
class Rectangle {

    constructor(width,height){
         this.height=height;
         this.width=width;
    }
        displayArea(){
       
            console.log(this.width*this.height);
        }
        displayPerimeter(){
       
            console.log(2*(this.width+this.height));
        }
       
}
 const area=new Rectangle(4,5);
 const perimeter=new Rectangle(4,5);
 area.displayArea();
 perimeter.displayPerimeter();*/
 /*3
 class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.year=year;
        this.model=model;
 }
      display(){
        console.log(`${this.make}  ${this.model} ${this.year}`);
      }

 }

   class Car extends Vehicle{
    constructor(make,model,year,door){
        super(make,model,year);
        this.door=door;
    }
    display(){
        console.log(`${this.make}  ${this.model}  ${this.year} ${this.door}`);
    }

   }
   const vehicle=new Vehicle("Yamaha", "YZF-R3", 2021);
   const car=new Car("Audi","S7",2022,4);
   vehicle.display();
   car.display();*/
/*4
   class BankAccount{

    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    depositToCard (num){
       this.balance+=num;
        console.log(`${this.balance}`);
     
    }
    withdrawfromCard(num){
         this.balance-=num;
           console.log(`${this.balance}`);
    }
}
      const deposit=new BankAccount(1346,5000);
      const withdraw=new BankAccount();
      deposit.depositToCard(500);
      deposit.withdrawfromCard(600);*/
/*5
    class Shape {
           constructor(a,b){
            this.a=a;
            this.b=b;
           }

          area(){
             
            console.log(`${this.a*this.b}`);
          }

    }
    class Circle extends Shape{
      constructor(a,b,r)
      {
        super(a,b);
        this.r=r;
      }
        area(r){
       let  circleArea=3.14*Math.pow(this.r,2);
           console.log(`${circleArea}`);
        }
    }
  class Triangle extends Shape
{
        constructor(a,b,c){
            super(a,b);
            this.c=c;

        }
        area(a,b,c){

          let  p=(this.a+this.b+this.c)/2;
         let   triangleArea =Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
            console.log(triangleArea);
        }

  }
    const circle=new Circle(0,0,2);
    const triangle=new Triangle(3,4,5);
    circle.area();
    triangle.area();*/
/*6
    class Employee{
        constructor(name,salary){
           this.name=name;
           this.salary=salary;
  }
          annualSalary(){
        
           console.log(`${12*this.salary}`);
          }

    }
 class  Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
}
          annualSalary(){
            console.log(`${12*(this.salary+this.salary*0.1)}`);
          }
 }
     const manager1=new Manager("John Smith", 9000, "Marketing");
     const manager2=new Manager("Jane Smith", 8000, "Marketing");
     manager1.annualSalary();
     manager2.annualSalary();
*/
/*7
class Book{
    constructor(title,author,year){
       
        this.title=title;
        this.author=author;
        this.year=year;
}
       display(){
        console.log(`${this.title} ${this.author} ${this.year} `);
       }

}
class Ebook extends Book{
    constructor(title,author,year,price){
       
    super(title,author,year);
    this.price=price;
}
      display(){
        console.log(` Title:${this.title} \n Author:${this.author}  \n Year:${this.year}  \n Price:${this.price}`);
    }
      }
const ebook =new Ebook ("To Kill a Mockingbird", "Harper Lee", 1960, 12.99);
  ebook.display();*/

/*8
class Animal{
    constructor(specie,sound){
    this.specie=specie;
    this.sound=sound;
}
           display(){
            console.log(`${this.specie} ${this.sound}`)
           }
}

class Dog extends Animal{
    constructor(specie,sound,color){
        super(specie,sound);
        this.color=color;
 
    }
    display(){
        console.log(`${this.color} ${this.specie} ${this.sound}`)
       }

}

const dog=new Dog("dog","barks","black");
dog.display();*/
/*9
class Bank{
  constructor(name,branch){
this.name=name;
this.branch=branch;
this.array=[];
}
    addBranch(item){

     this.array.push(item);
        
     for(let i=0;i<this.array.length;i++){
    //  console.log(this.array[i]);
     }
    }
    removeBranch(item){
         for(let i=0;i<this.array.length;i++){
          if(this.array[i]==item)
           this.array.splice(i,1);
               
         }
             
     for(let i=0;i<this.array.length;i++){
      console.log(this.array[i]);
     }
    }
  
   
}
 const bank=new Bank ();

 bank.addBranch("Account 001");
 bank.addBranch("Account 002");
 bank.addBranch("Account 003");
 bank.removeBranch("Account 002");
 */
/*10
class Product{
     constructor(id,name,price){
      this.id=id;
      this.price=price;
      this.name=name;
     }
        totalPrice(num){
            console.log(`${this.price*num}`);

        }

}
class PersonalCareProduct extends Product{
      constructor(id,name,price,period){
        super(id,name,price);
        this.period=period;
      }
      totalPrice(num){

        console.log(`${this.price*num +this.period*5}`);
      }
}
  const product=new PersonalCareProduct(201, 'Shampoo', 10, 2);
  product.totalPrice(3);*/
  /*11
  class BankAccount{

    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    depositToCard (num){
       this.balance+=num;
        console.log(`${this.balance}`);
     
    }
    withdrawfromCard(num){
         this.balance-=num;
           console.log(`${this.balance}`);
    }
}
      const deposit=new BankAccount(1346,5000);
      const withdraw=new BankAccount();
      deposit.depositToCard(500);
      deposit.withdrawfromCard(600);*/


  