# CLASS:

**Class class-name**
{
**DM:** var, arrays, obj,
**MF:** friend, virtual

**private:** DM+MF

**public:** DM + MF

**Static:** DM+MF

**Const:** DM+MF

**Friend Functions**
**Constructors**(default,para,copy)
**Destructors**
};

# FUNCTIONS:

**Syntax:** return type - function name(arg-list)

**Function can return:**

* void (nothing)
* primitives data
* objects data
* reference data

**Function arguments can take input as:**

* primitives value
* Object address or value
* primitive types
* Class types
* Pointers types
* Arrays

# VARIABLE vs OBJECT:

**constructor:** used to initilize values of data members.

**initialization can be:**

* Ststic initialization-> default constructor.
* Dynamic  initialization-> parameterized(call by value).
* Copy initialization-> Copy constructor (call by address).

## Declaration of variable and object

```
int a;
class obj;
```

## static Initialisation of objects and variables: (default values, default constructor).

```
int a =10, b=20;
constructor()
{
a=10;
b=20;
}
```
## Dynamic Initialization of objects: (parameterized , call by value).

```
cin>>a>>b;
constructor(int x int y)
{
a=x;
b=y;
}
```
* Dynamic initialization is nothing but taking input from users.
  
```  
Scanner ip= new Scanner ( system.in);
int n= ip.nextInt();

Console  ip= System. In
int n= Integer.ParseInt(ip.readLine())
```
## Copying one Object to another: (copy, call by adress).

```
a=b;
b=c;

constructor (class &x,)
{
a=x.b;
b=x.a;
}
```

## Static allocating Memory to objects: (static constructors)

**fixed in size**

## Dynamically Allocating Memory  to objects: (Dynamic Constructor)

* done using
    1. pointers
    2. new and delete

# DATA-TYPES:

1. Char 
> a='x' or 88
2. Boolean 
> b= true
3. String 
>s=  "  Aravind "
