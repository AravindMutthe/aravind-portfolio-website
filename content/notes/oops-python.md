## Outcomes

1. How To Construct Classes and Define Objects in Python 3:
2. Understanding Class and Instance Variables in Python 3
3. Understanding Class Inheritance in Python 3
4. How To Apply Polymorphism to Classes in Python 3:
5. Access Modifiers in Python 3

## 1. How To Construct Classes and Define Objects in Python 3:

**Class:** A blueprint created by a programmer to define to use to create objects.
**Object:** An instance of a class. T
 ***These are used to create patterns (in the case of classes) and then make use of the patterns (in the case of objects).***

1. **Class:**

* deined with class keyword.
* dm+mf //(class or instance)+ (class or instance ) 
* self means object varsor funtions of that class
* self, which is a reference to objects that are made based on this class.
**to reference instances (or objects) of the class, ***self*** will always be the first parameter.**

```python
  class Shark:
   name="sammy"
     def swim(self,n):      #logical memory allocation
      self.name=n;
```

2. **Objects:**

* An object is an instance of a class.
* The self parameter ensures that the methods have a way of referring to object attributes.

```python
   sammy = Shark()      #pysical memory allocation
   sammy.name       #for calling or accessing dm + mf of object use . operator
   sammy.swim()
```

1. **The Constructor Method:**

* used to initialize data.
* it is Also known as the __init__ method.
* constructor method is automatically initialized before creating objects

```python
 class Shark:
    def __init__(self, name):
        self.name = name
```

* we can modify the strings in our instance functions to reference the names

```python
      class Shark:
     def __init__(self, name):
         self.name = name
     def swim(self):         #Reference the name
        print(self.name + " is swimming.")
     def be_awesome(self):   #Reference the name
         print(self.name + " is being awesome.")
```

* we can set the name of the Shark object sammy as equal to "Sammy" by passing it as a parameter of the Shark class.
* we do not need to explicitly call the constructor function.
* only pass the arguments in the parentheses following the class name when we create a new instance of the class.

```python
      def main():        
      sammy = Shark("Sammy")   #Set name of Shark object
      sammy.swim()
      sammy.be_awesome()  

      if __name__ == "__main__": #no main fun in python bcz its interpreted lang
       main() #If the source file is executed as the main program, the interpreter sets the __name__ variable to have a value “__main__”.
         #If this file is being imported from another module, __name__ will be set to the module’s name.

```

**example program of class object**

```python
class Shark:
   name="sammy"
     def swim(self,n):      #class logical memory allocation
      self.name=n;

sammy = Shark()         #pbj pysical memory allocation
   sammy.name        #for calling or accessing dm + mf of object use  . operator
   sammy.swim()

class Shark:
     def __init__(self, name):
         self.name = name
     def swim(self):         #Reference the name
        print(self.name + " is swimming.")
     def be_awesome(self):        # Reference the name
         print(self.name + " is being awesome.")

def main():        
      sammy = Shark("Sammy")   #Set name of Shark object
      sammy.swim()
      sammy.be_awesome()

if __name__ == "__main__":  #no main fun in python bcz its interpreted lang
       main()   #If the source file is executed as the main program, the interpreter sets the __name__ variable to have a value “__main__”.
           #If this file is being imported from another module, __name__ will be set to the module’s name.
```

## 2. Understanding Class and Instance Variables in Python 3

* Object-oriented programming allows for variables to be used at the class level or the instance level.
* there are two kinds of data attributes on Python objects:
    1. class variables.
    2. instance variables.

1. **class variables:**
   
   * Declared inside the class definition / defined within the class construction.(but outside any of the instance methods). 
   * They are not tied to any particular object of the class.
   * shared across all the objects of the class.
   * Modifying a class variable affects all objects instance at the same time.
   * class variables can consist of any data type available to us in Python.

```python
  class Shark:
     animal_type = "fish" #class var decla & defining
```

1. **instance variables:**

   * Declared inside the constructor method of class (the __init__ method).
   * instance variables are defined within methods.
   * They are tied to the particular object instance of the class,
   * hence the contents of an instance variable are completely independent from one object instance to the other.
   * Instance variables are owned by instances of the class.
   * each object or instance of a class, the instance variables are different.
   * Instance variable overrides the Class variables having same name which can accidentally introduce bugs or surprising behaviour in our code.

```python
 class Shark:
    def __init__(self, name, age):
        self.name = name
        self.age = age  #Instance variable
    ```

   * When we create a Shark object, we will have to define these variables, as passed as parameters within the constructor method or another method.

   ```python
    class Shark:
    def __init__(self, name, age):
        self.name = name
        self.age = age   #declaring instance var

 new_shark = Shark("Sammy", 5) #definig

   ```

* example:
  
```python
class Car:
    wheels = 4            # Class variable
    def __init__(self, name):
        self.name = name         #Instance variable

jag = Car('jaguar')
fer = Car('ferrari')
print(jag.name, fer.name)           #jaguar', 'ferrari
print(jag.wheels, fer.wheels)       #(4, 4)  instane var accessd with obj only
print(Car.wheels)                   #4   class var acessed with obj or class itself

print(Car.name)       # trying to access the name var through the class will result in an AttributeError.
#since instance variables are object specific and are created when __init__ constructor is invoked
 
Car.wheels = 3  #we have modified a class variable, which will apply to all instances of Car class.
print(jag.wheels, fer.wheels)   #(3, 3) which will apply to all instances of Car class.

jag.wheels = 3   #modify class variable using the jag object.
          # new wheels variable that has been added to jag object and
          #this new variable shadows the class variable with same name, overriding and hiding it.
          #created a new instance variable with the same name as the class variable (wheels).
print(jag.wheels, jag.__class__.wheels)  #(3, 4) We can access both the wheels variable
```


## 3. Understanding Class Inheritance in Python 3

* Object-oriented programming creates reusable patterns to reduce code redundancy in development projects.
* One way that  recyclable code is through inheritance,
* Instance: when a class uses code constructed within another class.
* We have added the methods swim() and swim_backwards() to the Fish class,so that every subclass will also be able to make use of these methods.

```python
class Fish:
    def __init__(self, first_name, last_name="Fish"): #bcz most fish last name as fish
        self.first_name = first_name
        self.last_name = last_name     #data members

    def swim(self):         # member fun
        print("The fish is swimming.")
    def swim_backwards(self):
        print("The fish can swim backwards.")
```

* We have added the methods swim() and swim_backwards() to the Fish class, so that every subclass will also be able to make use of these methods.
* child class looks a little different than non-child classes.they must pass the parent class into the child class as a parameter.

> class gelly(Fish):     //creating child class

* With child classes, we can choose to add more methods, override existing parent methods, or
accept the default parent methods with the pass keyword.

```python
class gelly(Fish):
     pass      #accept the default parent methods
```

* We can now create a Trout object without having to define any additional methods.

```python
 class gelly(Fish):                #child class 1
     pass
```

```python
 gly = gelly("gelly ")       #cconstructor calling
 print(gly.first_name + " " + terry.last_name)   #op: gelly fish
 gly.swim()
 gly.swim_backwards()       #mf calling
```

* let’s create another child class that includes its own method.
* We’ll call this class Clownfish, and its special method will permit it to live with sea anemone:

```python
 class Clownfish(Fish):               #child class 2

     def live_with_anemone(self):
         print("The clownfish is coexisting with sea anemone.")
```

* Next, let’s create a Clownfish object to see how this works:

```python
 casey = Clownfish("Casey")
 print(casey.first_name + " " + casey.last_name)
 casey.swim()
 casey.live_with_anemone()...
class Shark(Fish):
    def __init__(self, first_name, last_name="Shark",
                 skeleton="cartilage", eyelids=True):
        self.first_name = first_name
        self.last_name = last_name
        self.skeleton = skeleton
        self.eyelids = eyelids

    def swim_backwards(self):
        print("The shark cannot swim backwards, but can sink backwards.")
```

* Clownfish object casey is able to use the Fish methods __init__() and swim() as well as its child class method of live_with_anemone().
* If we try to use the live_with_anemone() method in a gly object, we’ll receive an error,
* bcz the method live_with_anemone() belongs only to the Clownfish child class, and not the Fish parent class.
* Child classes inherit the methods of the parent class it belongs to, so each child class can make use of those methods within programs.

**Overriding Parent Methods:**

* we have looked at the child class Trout that made use of the pass keyword to inherit all of the parent class Fish behaviors,and another child class Clownfish that inherited all of the parent class behaviors and also created its own unique method that is specific to the child class
* Sometimes, however, we will want to make use of some of the parent class behaviors but not all of them.
* When we change parent class methods we override them.
* we’ll be overriding the __init__() constructor method and the swim_backwards() method.

```python
 class gelly(Fish):
     def __init__(self, first_name, last_name="gelly") #We have overridden the initialized parameters in the __init__() method
         self.first_name = first_name
         self.last_name = last_name
     def swim_backwards(self):
        print("The shark cannot swim backwards, but can sink backwards.") #prints a different string than the one in the Fish parent class
```

* Each instance of the class can also override these parameters.
* We can now create an instance of the gelly child class, which will still make use of the swim() method of the Fish parent class:
  
```python
sammy = Shark("Sammy")
print(sammy.first_name + " " + sammy.last_name)
sammy.swim()
sammy.swim_backwards()
print(sammy.eyelids)
print(sammy.skeleton)
```

**The super() Function:**
* With the super() function, you can gain access to inherited methods that have been overwritten in a class object.
* When we use the super() function, we are calling a parent method into a child method to make use of it.
* The super() function is most commonly used within the __init__() method.
* because that is where you will most likely need to add some uniqueness to the child class and then complete initialization from the parent.
* let’s modify our gelly child class.
* let’s add a water variable to the __init__() method and set it equal to the string "freshwater"

```python
 class Trout(Fish):
     def __init__(self, water = "freshwater"):
         self.water = water
         super().__init__(self)
```

* We have overridden the __init__() method in gelly child class, by providing a different implementation of the __init__() that is already defined by its parent class Fish.
* Within the __init__() method of our gelly class we have explicitly invoked the __init__() method of the Fish class.
* super() allows us to utilize parent class methods even when overriding certain aspects of those methods in our child classes.

**example program of inheritance**

```python
class Fish:                       #parent class 
    def __init__(self, first_name, last_name="Fish", skeleton="bone", eyelids=False): #bcz most fish last name as fish
        self.first_name = first_name
        self.last_name = last_name       #data members
        self.skeleton = skeleton
        self.eyelids = eyelids

    def swim(self):           # member fun
        print("The fish is swimming.")
    def swim_backwards(self):
        print("The fish can swim backwards.")

class gelly(Fish):   ##creating child class             #child class 1
     pass    #accept the default parent methods
 gly = gelly("gelly ")       #cconstructor calling
 print(gly.first_name + " " + gly.last_name)     #op: gelly fish
 gly.swim()
 gly.swim_backwards()     #mf calling
 gly.live_with_anemone()     #get error live_with_anemone() is belong to clownfish child class not fish parent

class Clownfish(Fish):                    #child class 2
     def live_with_anemone(self):    # have own child fun
         print("The clownfish is coexisting with sea anemone.")
casey = Clownfish("Casey")
 print(casey.first_name + " " + casey.last_name)
 casey.swim()
 casey.live_with_anemone()
class Shark(Fish):                     #child class 3 Overriding Parent Methods                   
    def __init__(self, first_name, last_name="Shark",skeleton="cartilage", eyelids=True):#last name changed 
        self.first_name = first_name
        self.last_name = last_name
        self.skeleton = skeleton
        self.eyelids = eyelids   #we’ll be overriding the __init__() constructor method and the swim_backwards() method.

    def swim_backwards(self):   #method swim_backwards() now prints a different string than the one in the Fish parent class
        print("The shark cannot swim backwards, but can sink backwards.") 

......
class Trout(Fish):                    #child class 4
    def __init__(self, water = "freshwater"): #add a water variable to the __init__()
        self.water = water #We have overridden the __init__() method in the Trout
        super().__init__(self) #explicitly invoked the __init__() method of the Fish class.

terry = Trout() #Because we have overridden the method ,no longer need to pass first_name in as a parameter to Trout
    #if we did pass in a parameter, we would reset freshwater instead.
terry.first_name = "Terry"# Initialize first name
print(terry.first_name + " " + terry.last_name)#use parent __init__() through super()
print(terry.eyelids)
print(terry.water)#Use child __init__() override
terry.swim()#Use parent swim() method
```

**Multiple inheritance:**

* when a class can inherit attributes and methods from more than one parent class.
* This can allow programs to reduce redundancy, but it can also introduce a certain amount of complexity as well as ambiguity,so it should be done with thought to overall program design.
* Multiple inheritance allows us to use the code from more than one parent class in a child class.
* If the same method is defined in multiple parent methods, the child class will use the method of the first parent declared in its tuple list.

```python
 class Coral:        #PARENT CLASS 1
     def community(self):
         print("Coral lives in a community.")

 class Anemone:        #PARENT CLASS 2
     def protect_clownfish(self):
         print("The anemone is protecting the clownfish.")

 class CoralReef(Coral, Anemone):   # CREATING CHILD CLASS FROM 2 PARENT CLSES
      pass
 OBJ= CoralReef()     #CREATIN OBJ O CHILD CLASS
 OBJ.community()
 OBJ.protect_clownfish()    #CALLING MF OF 2 CLASSES
```

## 4. How To Apply Polymorphism to Classes in Python 3:

* Polymorphism: ability to leverageI(loan) the same interface for different underlying forms such as data types or classes.
* this permits functions to use entities of different types at different times.
* Polymorphism allows for flexibility and loose coupling so that code can be extended and easily maintained over time.
* For object-oriented programming means that a particular object belonging to a particular class can be used in the same way as if it were a different object belonging to a different class.
* it is utilized when you have commonly named methods across classes or subclasses.
* this allows functions to use objects of any of these polymorphic classes
  without needing to be aware of distinctions across the classes.
* Polymorphism can be carried out through inheritance, with subclasses making use of base class methods or overriding them.
* When several classes or subclasses have the same method names, but different implementations for these same methods, the classes are polymorphic,
* because they are using a single interface to use with entities of different types.
* A function will be able to evaluate these polymorphic methods without knowing which classes are invoked.

  **Creating Polymorphic Classes:**

* To make use of polymorphism, we’re going to create two distinct classes to use with two distinct objects.
* Each of these distinct classes need to have an interface that is in common so that they can be used polymorphically,
* so we will give them methods that are distinct but that have the same name.
* in the below both the Shark and Clownfish class have three methods with the same name in common. 
* However, each of the functionalities of these methods differ for each class.

```python
   class Shark():                #class 1
     def swim(self):
         print("The shark is swimming.")
     def swim_backwards(self):
         print("The shark cannot swim backwards, but can sink backwards.")
     def skeleton(self):
         print("The shark's skeleton is made of cartilage.")

 class Clownfish():               #class 2
     def swim(self):
         print("The clownfish is swimming.")
     def swim_backwards(self):
         print("The clownfish can swim backwards.")
     def skeleton(self):
         print("The clownfish's skeleton is made of bone.")

     ...
 sammy = Shark()
 sammy.skeleton()               #creating objs of these class1 and class 2

 casey = Clownfish()
 casey.skeleton()
```

* When we run the program with the python polymorphic_fish.py command, we can see that each object behaves as expected:

* Output
  > The shark's skeleton is made of cartilage.
  > The clownfish's skeleton is made of bone.

* Now that we have two objects that make use of a common interface,
* we can use the two objects in the same way regardless of their individual types.

  **Polymorphism with Class Methods:**

* to sho how Python can use each of these different class types in the same way
* first create a for loop that iterates through a tuple of objects.
* Then we can call the methods without being concerned about which class type each object is.
* We will only assume that these methods actually exist in each class.

```python
...
 sammy = Shark()

 casey = Clownfish()

 for fish in (sammy, casey):
     fish.swim()
     fish.swim_backwards()
     fish.skeleton() 
```

* Python is using these methods in a way without knowing or caring exactly what class type each of these objects is. 
* That is, using these methods in a polymorphic way.

**Polymorphism with a Function:**

* We can also create a function that can take any object, allowing for polymorphism.
* Let’s create a function called in_the_pacific() which takes in an object as input.ie fish Though we are using the name fish, any instantiated object will be able to be called into this function:

>  def in_the_pacific(ip_obj):

* no we’ll give the function something to do that uses the fish object we passed to it.

```python
  def in_the_pacific(ip_obj):
   op_obj.swim()
```

* Next, we’ll create instantiations(objts) of both the Shark and Clownfish classes if we don’t have them already.

```python
  def in_the_pacific(ip_obj):           #polymorphic function takes obj as input
   op_obj.swim()


  sammy = Shark()
  casey = Clownfish()              #creating objts of 2 distinct classes
```

* by using these objts, we can call their action using the same in_the_pacific() function.

  in_the_pacific(sammy)         //passing obj as input 
  in_the_pacific(casey)


* Even though we passed a random object (ip_obj) into the in_the_pacific() function when defining it,we were still able to use it effectively for instantiations of the Shark and Clownfish classes. 

**example of polymorphism**

```python
class Shark():                  #CLASS 1
    def swim(self):
        print("The shark is swimming.")
    def swim_backwards(self):
        print("The shark cannot swim backwards, but can sink backwards.")
    def skeleton(self):
        print("The shark's skeleton is made of cartilage.")

class Clownfish():                 #class 2
    def swim(self):
        print("The clownfish is swimming.")
    def swim_backwards(self):
        print("The clownfish can swim backwards.")
    def skeleton(self):
        print("The clownfish's skeleton is made of bone.")

sammy = Shark()                 #creating objs of both classes
sammy.skeleton()

casey = Clownfish()
casey.skeleton()

 -----------------------
sammy = Shark()
casey = Clownfish()

for fish in (sammy, casey):     #poymorphism with class methods
    fish.swim()
    fish.swim_backwards()
    fish.skeleton()

 ---------------------
def in_the_pacific(fish):       #Polymorphism with a Function , create a polymorphic fun with obj as input
    fish.swim()

sammy = Shark()
casey = Clownfish()    #creating objs for both clases

in_the_pacific(sammy)   #passing obj as input
in_the_pacific(casey)

```

## 5. Access Modifiers:

* access modifications which are used to restrict access to the variables and methods of the class.
* Most programming languages has three forms of access modifiers, which are ***Public, Protected and Private in a class.***
* Access specifiers have an important role to play in securing data from unauthorized access and in preventing it from being exploited.
* Python uses ‘_’ symbol to determine the access control for a specific dm or mf of a class.
* A Class in Python ***has three types of access modifiers:***

1. **Public:** All data members and member functions of a class are public by default.

```python
    class Geek:
         def __init__(self, name, age): # constructor
             self.geekName = name      #public data members
             self.geekAge = age
        def displayAge(self):      #public member function     
              print("Age: ", self.geekAge    #accessing public data member
```

2. **Protected:** Data members of a class are declared protected by adding a single underscore ‘_’ symbol

```python
   class Geek:            # parent class 1
    _name = None          # private datamembers
        _roll = None
        _branch = None

       def __init__(self, name, roll, branch):      #construtor      
             self.__name = name
            self.__roll = roll
            self.__branch = branch

          def _displayDetails(self):        #private member functions
           print("Roll: ", self._roll)
            print("Branch: ", self._branch)


           class Geek(Student):         #child class-1
            def __init__(self, name, roll, branch):     #constructor 
                  Student.__init__(self, name, roll, branch)

             def displayDetails(self):
              print("Name: ", self._name)      #accessing protected data members of paent class
              self._displayRollAndBranch()     #accessing protected member functions of parent class

            obj = Geek("R2J", 1706256, "Information Technology")  #creating objects of the derived class  
            obj.displayDetails()         #calling public member functions of the child class
```

3. **Private:** Data members of a class are declared private by adding a double underscore ‘__’ symbol.

```python
  class Geek:
    __name = None    #private members
        __roll = None
        __branch = None

       def __init__(self, name, roll, branch):         
             self.__name = name
            self.__roll = roll
            self.__branch = branch

          def __displayDetails(self): #private member functions
           print("Name: ", self.__name)
             print("Roll: ", self.__roll)
             print("Branch: ", self.__branch)

            def accessPrivateFunction(self):#public member function
             self.__displayDetails()   #accessing private member function

        obj = Geek("R2J", 1706256, "Information Technology") #creating object
        obj.accessPrivateFunction()  #accesing private mf through calling public member function of the class

```

### 2. Special variables & Methods:

1. __name__ and __main__
2. __doc__
3. __getattr__ and getattr
4. __setattr__ and setattr
5. __class__ and type
6. __bases__
7. __dict_
8. locals() and globals()
__subclasses__()
dir()
