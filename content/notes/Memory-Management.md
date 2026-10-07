# STACK AND HEAP

* Both stack and heap are stored in memory(RAM).
* a program is allocated and used for different purposes.
* a stack is also a data structure which is used to store. elements in LIFO order and available in Java API as java.util.Stack.

# HEAP:

* Java Heap space is used by java runtime To allocate memory to Objects and JRE Classes.
* Whenever we create Any Object, it’s always Created in the Heap space.
* Garbage Collection runs on the Heap Memory to free the memory used by objects that doesn’t have any reference.
* Any Object Created in the Heap space has Global Access and can be referenced from anywhere of the application.
* Whenever an object is created, it’s always stored in the Heap space and stack memory contains the reference to it.
* eg:
  - Test t=new Test();
  - t=stored in tack
  - Test =stored in Heap

# STACK:

* Java Stack memory is used for execution of a thread.
* They contain method(var) Specific Values that are short-Lived and References to other Objects in the heap that are getting referred from the method.
* Stack memory only Contains Local Primitive Variables and Reference Variables to objects in heap space
   - Test t=new Test
   - t=reference var stored in stack
   - Test= stored in heap.

# STACK vs HEAP

1. Stack is used for static memory allocation.
   Heap for dynamic memory allocation, both stored in the computer’s RAM .

2. stack memory is used to store local variables and function call
   heap memory is used to store objects in Java.
   No matter, where the object is created in program.
   e.g. as a member variable, local variable or class variable.

3. If there is no memory left in the stack for storing function call orlocalvariable,
   JVM will throw java.lang.StackOverFlowError.
   if there is no more heap space for creating an object, JVM will throw java.lang.OutOfMemoryError:

3.If u r using Recursion, on wch fun calls itself, u can quickly fill up stack memory.

   * stack memory is a lot lesser than the size of  heap memory.
   * stack size is fixed i.e. we get stackoverflow error , whereas heap size is operated by OS and can be change according to the needs.

1. **Variables stored in stacks are only visible to the owner Thread.**
   objects created in the heap are visible to all thread.
   Stack memory is kind of private memory of Java Threads while heap memory is shared among all threads.

1. **Associative memory:CAM:**

   - it can be accessed by using its contents instead of using memory locations [
   - A type of computer memory from which items may be retrieved by matching some part of their content,rather than by specifying their address .
   - Associative memory is much slower than RAM,and it is rarely encountered in mainstream computer designs.
   - 
# RAM vs CAM
* RAM, in which the user supplies a memory address and the RAM returns the data word stored at that address,
* CAM is designed such that the user supplies a data word and the CAM searches its entire memory to see if that data word is stored anywhere in it

1. **Auxiliary memory:**.

that provide backup storage are called auxiliary memory.

1. **CACHE MEMORY:**

whatetver data or contents of the main memory that are used again and again by CPU,  
That data or contents(of Main Memory ) are stored in the cache memory so that we can easily access that data in shorter time.
Whenever the CPU needs to access memory, it first checks the cache memory. If the data is not found in cache memory then the CPU moves onto the main memory.
performance of cache memory is measured in HIT RATIO.
