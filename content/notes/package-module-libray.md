
# Script: 

* is a Python file that’s intended to be run directly. 
* When you run it, it should do something. 
* This means that scripts will often contain code written outside the scope of any classes or functions.

# Module:(funtions + global-variables)

* is a Python file that’s intended to be imported into scripts or other modules. 
* It often defines members like classes, functions, and vars intended to be used in other files that import it.
* a bunch of related code saved in a file with the extension .py
* You may choose to define functions, classes, or variables in a module. It’s also fine to include runnable code in modules.
* If we want to use this code in our application, we first need to import the respective module using the import.
  
  * **random module:**  to generate pseudo-random number generators for various distributions.
  * **html module:**   to parse HTML pages.
  * **datetime module:**  to manipulate date and time data.
  * **re module:** to detect and parse regular expressions in Python.

# Package: (directory having collections of modules.)(modules+__init_.py)

* Python packages are basically a directory of a collection of modules.
* Packages allow the hierarchical structure of the module,ust like we organize our files on a hard drive into folders and sub-folders.
* We can import specific modules from this package using the dot notation.
* There are a lot of built-in and open-source Python packages.

* package is a collection of related modules that work together to provide certain functionality. 
* These modules are contained within a folder and can be imported just like any other modules. 
* This folder will often contain a special ___init_ file that tells Python it’s a package, potentially containing more modules nested within subfolders.

1. **NumPy:** is the fundamental Python package for scientific computing.
2. **pandas:** is a Python package for fast and efficient processing of tabular data, time series, matrix data, etc.
3. **pytest:**  provides a variety of modules to test new code, including small unit tests or complex functional tests.

# Library: A library is an umbrella term referring to a reusable chunk of code.

* It is a collection of modules.
* Library either contains built in modules(written in C) + modules written in python).
* a Python library contains a collection of related modules and packages.
* it is often assumed that while a package is a collection of modules, a library is a collection of packages.
* There are thousands of useful libraries available today.
* Library is an umbrella term that loosely means “a bundle of code.” 
* These can have tens or even hundreds of individual modules that can provide a wide range of functionality.
* The Python Standard Library contains hundreds of modules for performing common tasks, like sending emails or reading JSON data.
* standard Library is that it comes bundled with your installation of Python, so you can use its modules without having to download them from anywhere.

1. **Matplotlib library:** is a standard library for generating data visualizations in Python. It supports building basic two-dimensional graphs as well as more complex animated and interactive visualizations.

2. **PyTorch:** is an open-source deep-learning library built by Facebook’s AI Research lab to implement advanced neural networks and cutting-edge research ideas in industry and academia.

3. **pygame:** provides developers with tons of convenient features and tools to make game development a more intuitive task.

4. **Beautiful Soup:** is a very popular Python library for getting data from the web. The modules and packages inside this library help extract useful information from HTML and XML files.

5. **Requests:** is a part of a large collection of libraries designed to make Python HTTP requests simpler. The library offers an intuitive JSON method that helps you avoid manually adding query strings to your URLs.

6. **missingno:** is very handy for handling missing data points. It provides informative visualizations about the missing values in a dataframe, helping data scientists to spot areas with missing data. It is just one of the many great Python libraries for data cleaning.

7. **TensorFlow**
8. **Scikit-Learn**
9. **Numpy**
10. **Keras**
11. **LightGBM**
12. **Eli5**
13. **SciPy**
14. **Theano**
15. **Pandas**

# Python Frameworks:

* Similar to libraries, Python frameworks are a collection of modules and packages that help programmers to fast track the development process.
* frameworks are usually more complex than libraries. 
* Also, while libraries contain packages that perform specific operations,frameworks contain the basic flow and architecture of the application.
* Python frameworks provide all the essential building blocks like the foundation, walls, windows, and roof.

**Several popular frameworks:**	

1. **Django:** is a Python framework for building web applications with less coding. With all the necessary features included by default, developers can focus on their applications rather than dealing with routine processes.

2. **Flask:**is a web development framework that is known for its lightweight and modular design. It has many out-of-the-box features and is easily adaptable to specific requirements.

3. **Bottle:**is another lightweight framework for web development that was originally meant for building APIs. Its unique features are that it has no dependencies other than the Python Standard Library and it implements everything in a single source file.