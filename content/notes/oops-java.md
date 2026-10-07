## Encapsulation
## Inheritance
## Polymorphism

# 1.Encapsulation:
* Encapsulation simply means binding DM and MF together into a single .
  *If you are creating class, you are doing encapsulation.*
* main idea behind dis is to hide the implementation details from user.
* Encapsulation is achived by making class data members as private,means it can only be accessed within the same class.
    1. can't be accessed directly from outside the class.
    You can only set and get values of these variables through the methods of the class.
    2. Have getter and setter methods in the class to set and get the values of the fields.

**example:**

  ```java
class EncapsulationDemo
{
    private int ssn;
    private String empName;
    private int empAge;
    
    public int getEmpSSN()    //Getter X methods
    {
        return ssn;
    }
    public String getEmpName()
    {
        return empName;
    }
    public int getEmpAge()
    {
        return empAge;
    }
    public void setEmpAge(int newValue) //Setter methods
    {
        empAge = newValue;
    }
    public void setEmpName(String newValue)
    {
        empName = newValue;
    }
    public void setEmpSSN(int newValue){
        ssn = newValue;
    }
}
public class Main
{
  public static void main(String args[])
  {
    EncapsulationDemo obj = new EncapsulationDemo();
    obj.setEmpName("Aravind");
    obj.setEmpAge(32);
    obj.setEmpSSN(112233);
    System.out.println("Employee Name: " + obj.getEmpName());
    System.out.println("Employee SSN: " + obj.getEmpSSN());
    System.out.println("Employee Age: " + obj.getEmpAge());
  } 
}
  ```

### VARIABLES & ITS TYPES:
- Variables are  piece of memory or a container wchich holds values.
    - "it is a name of memory location in RAM"
    - It is the memory-place where we store values".
- A variable is assigned with a datatype.
    - "Datatype is the type of data in which the variable is stored"

**TWO TYPES OF VARIBLES**
1. **CONSTANT VARIABLE:** variable memory address is fixed.
    * "VARIABLE's Value can not change once we assigned"REINTIALIZATION is not possible.
	* Constants variable's are declared using the *final* keyword.
	  "PREMITIVE TYPES can be made immutable/UNCHANGEBLE using the final modifier."
	* variable's pointer to the value cannot change. 
	    CONSTANT variable pointer that *CANT CHANGE THE LOCATION* to which it's POINTING.
	* The values of the CONSTANT VAR can't be changed once its declared.
2. **LITERAL VARIABLE:** variable value is fixed
    * FIXED VALUE ASSIGND to a Variable.
	ratherthan asignig a variable's value or the result of an expression. 
	* literal VARIABLE is totally based on the syntax.
	* This specifies the syntax of ur declaration of different types of values& operations
	* literal is an explicit number or string constant used in Java programs.
	  
**Note** to use a variable in a program you to need to perform 2 steps
1. Variable Declaration  eg:int a
2. Variable Initialization eg:a=20;
	  
### 3 LEVEL TYPES OF VARBLES:
1. LOCAL: These that are declared inside the body of a method.
2. INSTANCE:declared inside the class but outside the method.
They are Object specific and are known as instance variables
3. STATIC: It cannot be local.
It can also have as many copies which means it can be used for many classes 

**example**

```java
import java.util.*;
class VarTypes 
{
   int a=50;        //instance variable
   int b=10;  
   static int x=10;
   static int y=10  //static variable  
   int method(int a,b)
   {
    int n=10;
    int m=10;        //local variable
    return (n*m)+(a+b);   
   }  
   public static void main(String args[])
   {
    VarTypes obj=new VarTypes();
    VarTypes obj2 = new VarTypes();     //creating OBJ to class

    int sum1=obj.a+obj.b;           //accessing instatnce var with obj   
    System.out.println(sum1);

    obj2.a=100;                      //reinitializing  val to instance var with objs
    obj2.b=200;
    int sum2=obj2.a+obj2.b;          //accessing instatnce reinialized var with obj
    System.out.println(sum2);

    int mul=obj.method(5,5);          //accesing local var with obj
    System.out.println(mul);  

    System.out.println("before x="+VarTypes.x); // accesing static var with classname
    System.out.println("before y="+obj.y);      // accesing static var with obj
    obj2.x=50; 
    obj2.y=50;                           //reintializing static var with oj
    System.out.println("after x ="+VarTypes.x);
    System.out.println("after y ="+obj2.y);
    int sub=obj.x-obj.y+obj2.x-obj.y;        //accesing static var with all objs of class
    System.out.println("sub= "+sub);
   }
}
```
# 2.INHERITENCE: "one class acquires FEATURES OF other Class"
- "it is the mechanism by which one class is allow to inherit(receive) the features(fields and methods) of another class."
- Inheritance is an important pillar of OOP.
- When a Class extends another class
- it inherits all non-private members(obj mem) including fields and methods. 
- defines IS-A relationship between a Super and its Sub class.

#### Class Types:

* int is a perdifind datatype. 
    - once int datatype hasbeen defined we can create var of that type using declarations.
* once class datatype hasbeen defined we can create object of that type using declarations.
    - class is a user defined datatype with template that serve to define its properties.

**Two types of classes are there in java.**

1. Concrete class:(normal class) 
- which is containing fully implemented methods.
- these classes are used for specific requirement, but not for common requirement.
- If we use concrete classes for  fulfill common requirements then such application will get the following limitations.
  1. app will take more amount of memory.
  2. Excecution time is more & performance is decreced.
- Obj creation: 
> classname c=new classname();
- ***To overcome above limitation you can use abstract class.***

2. Abstract class (AC):(Abstract keyword)::
* which is containing some implented methods and some un-Implemented(abstract) methods.
* AC cantains only non static methods(obj),but not contains static methods(class).
every abstract method is obj but not static.
+ cantains common requirements or features.
+ Every abstract class participates in inheritance.
+ All the abstract classes of Java makes use of polymorphism along with method overriding for business logic development and makes use of dynamic binding for execution logic.

***Abstract Method:*** 
- which contains only declaration or prototype but,it never contains body or definition.
- Obj creation:it created indirectly.It means u can create an obj of abstract derived class
- ex: 
> parentclass pc=new derivedclass();
 
> ***Class=methods+variables or objects***
> ***object=memoryspace(var+methods)***
- **Example of concrete class**
```java
class Rectangle
{
	int length;
	int width;
	void setArea(int x,int y)
	{
		length=x;
		width=y;
	}
	int getArea()
	{
		int area=length*width;
		return area;
		
	}	
}
class Main
{
	public static void main(String args[])
	{
	    
		Rectangle var1=new Rectangle();        
		Rectangle var2=new Rectangle(); 
		Rectangle var3=new Rectangle();                       //creating objects of class
		int area1,area2,area3;
	        var1.length=19;
		var1.width=20;                                         // accesing instance variables
		var2.setArea(12,14);var2.getArea();
		var3.setArea(15,18);var3.getArea();                       //accesing methods

		area1=var1.length* var1.width;                          
		area2=var2.getArea();
		area3=var3.getArea();                                   //initailizing values to variables
		System.out.println("Area 1 is:"+area1);
		System.out.println("Area 2 is:"+area2);
		System.out.println("Area 3 is:"+area3);
	}
}
```
# 2.Abstract class:(Abstract keyword):

* which is contains some defined and some undefined(Abstract) method.
* Abstract classes cantains only abstract non static methods(obj), but not contains abstract static methods(class).
* every abstract method is instance but not static.
  - contains common requirements or features.
  - Every AC participates in inheritance.
  - All the ABSTRACT CLASSES of Java makes use of PLOYMORPHISM along with METHODOVERRIDDING for business logic development and
  - makes use of dynamic binding for execution logic.
--------------------------------------------------------------------------------------------------------     
- Abstract Method: which contains only declaration but it never contains body or definition.
- Obj creation:it created indirectly.It means you can create an OBJ OF ABSTRACT DERRIVED CLASS. 
- ex: parentclass pc=new derivedclass();
```java
import java.util.*;
abstract class Main
{
       public  abstract int sum(int a,double b);
       public  abstract int mul(int x,int y);
        public abstract int mod(int p,int q);
}

class First extends Main
{
       public double sum(int a,double b)
       {
               return a+b;
       }
       public int mul(int x,int y)
       {
               return x*y;
       }
      public  int mod(int p,int q);
       {
               return p%q;
       }
       public static void main (String[] args) 
       {
       First op=new Main();
       op.sum(2,3.5);
       op.mul(3,5);
       op.mod(5,10);
       }
}
```
- example:
```java
import java.util.Scanner;
abstract class Shapes
{
  public abstract double getArea();
}
class Rectangle extends Shapes
{
    double l,w;
    Rectangle(double l,double w)
    {
      this.l=l;
      this.w=w;
    }
    double getArea()
    {
      return l*w;
    }
}
class Square extends Shapes
{
  double side;
  Square(double side)
  {
    this.side=side;
  }
  double getArea()
  {
    return side*side;
  }
}
class Circle extends Shapes
{
  double pi,r;
  Circle(double pi,double r)
  {
    this.pi=pi;
    this.r=r;
  }
  double getArea()
  {
    return pi*r*r;
  }
}
class Test
{
  public static void main(String args[])
  {
    Shapes r=new Rectangle(5.5,5.5);
    Shapes s=new Square(5.5);
    Shapes c=new Circle(3.14,10);
    double a=r.getArea();
    double b=s.getArea();
    double d=c.getArea();
    if(a>b&&a>d)
    {
      System.out.println("Rectangle is largest "+ a);
    }
    else if(b>a&&b>d)
    {
      System.out.println("Square is largest "+ b);
    }
    else if(d>a&&d>b)
    {
      System.out.println("Circle is largest "+d);
    } 
  }
}

```
# 3. Polymorphism:

- **Method describe behavior of an object**
it is a collection of statements that are group together to perform a task.
- **Method can be declared in two different ways:**
  1. Non-static or concrete methods
  2. Static methods
  3. Abstract Methods

- **it is important to know the difference between parameter and argument.**
1. Parameter: is VARIABLE defined by a method,that RECEIVES VALUE when the FUN IS CALLED.
  Parameters are always local to the method 
  > ex: void sum(int x,int y)
2. Argument: is a VALUE that is PASSED to a FUN when it is called.
  > ex: a.sum(10,10)

##### There are two ways to pass an argument to a method.

1. **call-by-value:** 
- In this copy of an argument values is pass to a method wn it is called.
- Changes made to the argument value inside the method will have no effect on the arguments
    > ex: a.sum(10,10)

2. **call-by-reference:** 
   
- In this REFERENCE OF ARGUMENT is pass to a method pa wn it is called. 
  
- Any changes made inside the method will affect the agrument value.
    **note** java doesnt support call-by-reference

```java
import java.util.*;
class Main
{
    void callByValue(int x,double y)    //declared method with Parameters   
    {
        x=100;                              //method is collection of statements
        y=200.5;
    }
    public static void main(String[] args)
    {
      
        Main t = new Main();  //creating obj to class
        int a=50;
        double b=20.3;
        t.callByValue(a,b);//calling method by value
        double sum=a+b;
        System.out.println(sum);
    }

}
```

**Types of Method Declaration: Method can be declared in two different ways.**

1. Static methods:  executes only once in the program.
2. NON Static methods: If any method wants to be execute multiple time that can be 	declare as non static.
                                                                                                         
| Non-Static Methods                                           |        Static Methods                                     |
|                  :---:                                       |           :---:                                           |
|Memory is allocated multiple times whenever method is calling.|Memory is allocated only once at the time of class loading |
|These are specific to a classes (obj)known as instance method.|dis r common to evry cls(obj)knwn as mem method or clsmetho|
|access them with object reference.                            |object is not required to call static method               |
|                                                              |Access with both class and obj reference.                  |
|                                                              |  Objref.methodname();                                     |
|                                                                className.methodname(); obj.methodname();                 |

* Static method belong to class and not to class obj.
* Static methods are No need to creation and initialization of an Object 
* static method can not use non static variables and call non-static method directly.
* Usually, static methods are utility methods(ex:java.util.package)
  -that we want to expose to be used by other classes without the need of creating an instance

**Static block is a set of statements, which will be executed by the JVM before execution of main method.**

In a class we can take any number of static block but all these blocks will be execute from top to bottom.

```java
import java.util.*;
class StaticDemo
{
        int count=0;
        static int counter; 
        static
        {
                counter++;
                System.out.println("Sblok=="+counter);
        }
        void NSmethod()
        {
            count++;
            System.out.println("NSmethod="+count);
        }
        static void Smethod()
        {
                counter++;
                System.out.println("Smethod="+counter);
        }
}
class Main
{
        public static void main (String[] args) 
        {
         StaticDemo.counter=0;    //initialize static var before calling sta method.
         StaticDemo.Smethod();    //no need to create and initialize of an obj for static method
         StaticDemo.Smethod();    //directly can access with class name.
         StaticDemo.Smethod();
         StaticDemo st1=new StaticDemo();
         StaticDemo st2=new StaticDemo();
         StaticDemo st3=new StaticDemo();
         st1.NSmethod();
         st2.NSmethod();
         st3.NSmethod();
        }
}
```

#### Types of Polymorphism:

1. **METHOD OVERLOADING:**

"if a class have more then one-method with same name with different parameter lists"
 overloading always Occurs in Same Class.Unlike Overriding.

* its similar to constructor overloading.
* its an example of Static Polymorphisam.
* Three ways to overload a method.
  1. Number of parameters.
  2. Different Data type of parameters.
  3. Sequence of Data type of parameters.
* Private, static and final methods can be overloaded
* Overloading can be done at both static and non-static methods.
* For overloading methods return type may or may not be same.
*Note:* In overloading we have to check only methods names (must be same) and arguments types (must be different) except these the remaining dnt need check.

```java
import java.util.*;
class TEST
{

        void cal(int a,double b)
        {
                double sum=a+b;
                System.out.println(sum);
        }
        void cal(int a,int b)
        {
                int mul=a*b;
                System.out.println(mul);
        }
}
class Main
{
        public static void main (String[] args) {
                TEST t=new TEST();
                t.cal(2,5.9);
                t.cal(2,3);
        }
}
```

2. **Method Overriding:**
"if both parent and child classes have one or more methods with same name & types or
same order of parameter lists then its claled MoverLoding".

* Overriding will always Occurs in differnt Classes.Unlike Overloading.
***" Declaring a method in sub class which is already present in parent class"*** that a sub class can give its own Defination to a method.
* wch(def) is already provided by the parent class."
* is used for Dynamic Polymorphism
* The main advantage of method overriding is that the derived class can give its own specific implementation to a inherited method without even modifying the base class code.
  
##### Rules:

1. method must have same name as in the parent class.
2. method must have same parameter as in the parent class.
3. must be IS-A relationship (inheritance).
3. Private, static and final methods can not be override.
4. Overriding can be done only at non-static method.
**Note:** in overriding every things check like method names arguments types return types access modifiers etc.

**Super keyword:** Super keyword in java is a reference variable that is used to refer parent class(object).
  
* Super is an implicit keyword create by JVM
* Used at 
  1. variable level:
    - To access the data members of parent class
    - when both parent and child class have variable with same name
    > int sum= super.n1+n2;

  2. method level:
    - To access the Mem Functions of parent class
    - when child class has overridden(uses parent) that method
    > super.sum(4,5);

  3. constructor level:
    - To explicitly call the defult and parameterized constructor of parent class.
    > super();
    > super(12,12);

**Note:** Whenever we are using in the derived class constructors the super always must be as a first executable statement in the body of derived class constructor otherwise we get a compile time error.
"Override" is the cancellation of some previous action or decision. 
"Overwrite" specifically refers to something being written over something previously written. 
In other words, Actions and Decisions are Overriden.
Information is Overwritten. furthermore it is overwritten With new information.

Therefore in your example, overwrite is appropriate:

The administrator has the right to overwrite the user time slot for the venue A inside the online system.

A similar example where override would be appropriate is:

The administrator has the right to override all venue decisions made in the online system.

edit:

```java
class Person
{
  String name;
  void sleep (String name)
  {
    this.name = name;
    System.out.println (this.name + "is sleeping+8hr/day");
  }
  void walk ()
  {
    System.out.println ("this is walk()");
    System.out.println ("-----------------");
  }
};

class Student extends Person
{
  void writExams ()
  {
    System.out.println ("only student write the exam");
  }
  void sleep (String name)
  {
    super.name = name;
    System.out.println (super.name + "is sleeping 6hr/day");
    System.out.println ("------------------");
  }
};

class Developer extends Person
{
  public void designProj ()
  {
    System.out.println ("Design the project");
  }
  void sleep (String name)
  {
    super.name = name;
    System.out.println (super.name + "is sleeping 4hr/day");
    System.out.println ("------------------");
  }
};

class Main
{
  public static void main (String[]args)
  {
      Student s1 = new Student ();
      s1.writExams ();
      s1.sleep ("student");
      s1.walk ();
      Developer d1 = new Developer ();
      d1.designProj ();
      d1.sleep ("developer");
  }
}
```

**CONSTRUCTOR:**constructor is a special member function.

* which will be called automatically whenever object is created.
* Constructors are mainly create for initializing the object.
* Initialization is a process of assigning user defined values at the time of allocation of memory space.
  
1. A constructor eliminates placing the default values.
2. A constructor eliminates calling the normal or ordinary method implicitly.

* Constructors will not be inherited from one class to another class
* Constructor definitions should not be static. Because constructors will be called each and every time,whenever an object is creating.

```java
class rectangle
{
	rectangle (int x,int y)
	{
		int area=x*y;
		System.out.println(area);
		
	}	
}

class Main
{
	public static void main(String args[])
	{
	    
		rectangle var1=new rectangle(2,4);        
		rectangle var2=new rectangle(5,6); 
		rectangle var3=new rectangle(7,8);    //create no of objects from class
    /*                                    //initailizing values to variables
		System.out.println("Area 1 is:"+area1);
		System.out.println("Area 2 is:"+area2);
		System.out.println("Area 3 is:"+area3);
		*/
	}
}
```










