const intprogQuestions = [
  {
    q: "Which OOP concept represents 'IS-A' relationship?",
    a: [
      { option: "Encapsulation", whyWrong: "Encapsulation bundles data and methods together, but doesn't represent relationships between classes." },
      { option: "Polymorphism", whyWrong: "Polymorphism allows objects to take many forms, but inheritance establishes the 'IS-A' relationship." },
      { option: "Inheritance", whyRight: "Inheritance represents an 'IS-A' relationship where a subclass IS-A type of superclass (Dog IS-A Animal). It establishes hierarchical relationships between classes." },
      { option: "Abstraction", whyWrong: "Abstraction hides complexity, but doesn't create 'IS-A' relationships between classes." }
    ]
  },
  {
    q: "Binding data and functions together is:",
    a: [
      { option: "Inheritance", whyWrong: "Inheritance establishes parent-child relationships between classes, not bundling data with methods." },
      { option: "Abstraction", whyWrong: "Abstraction hides implementation details, not bundling data with methods." },
      { option: "Encapsulation", whyRight: "Encapsulation bundles data (fields) and methods that operate on that data within a class, hiding internal details. It's the foundation of data hiding and access control through private/public modifiers." },
      { option: "Polymorphism", whyWrong: "Polymorphism enables multiple forms of objects, not bundling data with methods." }
    ]
  },
  {
    q: "Keyword to inherit a class in Java:",
    a: [
      { option: "implements", whyWrong: "'implements' is used for interfaces, not class inheritance." },
      { option: "extends", whyRight: "The 'extends' keyword creates inheritance relationships between classes in Java. For example: 'class Dog extends Animal'." },
      { option: "inherits", whyWrong: "Java doesn't use 'inherits' as a keyword for inheritance." },
      { option: "using", whyWrong: "'using' is a C++ keyword for inheritance/namespaces, not Java." }
    ]
  },
  {
    q: "Ability of object to take many forms:",
    a: [
      { option: "Polymorphism", whyRight: "Polymorphism allows objects to take many forms - a Dog object can be treated as both Dog and Animal. This includes method overloading (compile-time) and overriding (runtime polymorphism)." },
      { option: "Encapsulation", whyWrong: "Encapsulation bundles data with methods, not enabling multiple forms." },
      { option: "Inheritance", whyWrong: "Inheritance establishes relationships but polymorphism enables the multiple forms." },
      { option: "Abstraction", whyWrong: "Abstraction hides complexity, not enabling objects to take multiple forms." }
    ]
  },
  {
    q: "Parent class is also called:",
    a: [
      { option: "Subclass", whyWrong: "Subclass is the child class that inherits from the parent." },
      { option: "Derived class", whyWrong: "Derived class is the child class that inherits from the parent." },
      { option: "Superclass", whyRight: "The parent class is called the superclass or base class. 'Super' indicates it's higher in the hierarchy. The child that inherits from it is called the subclass or derived class." },
      { option: "Child class", whyWrong: "Child class is the subclass that inherits from the parent." }
    ]
  },
  {
    q: "Hiding internal details is:",
    a: [
      { option: "Abstraction", whyRight: "Abstraction hides complex implementation details and shows only essential features. It's achieved through abstract classes and interfaces, focusing on what an object does rather than how it does it." },
      { option: "Inheritance", whyWrong: "Inheritance creates parent-child relationships, not hiding details." },
      { option: "Overloading", whyWrong: "Overloading creates multiple methods with the same name, not hiding details." },
      { option: "Instantiation", whyWrong: "Instantiation creates objects from classes, not hiding details." }
    ]
  },
  {
    q: "OOP focuses on:",
    a: [
      { option: "Functions", whyWrong: "Procedural programming focuses on functions; OOP focuses on objects." },
      { option: "Logic", whyWrong: "While logic is important, OOP's primary focus is organizing code around data and objects." },
      { option: "Data", whyRight: "Object-Oriented Programming focuses on data (objects) and the operations performed on them, unlike procedural programming which focuses on functions. Objects encapsulate both data and behavior." },
      { option: "Speed", whyWrong: "Performance isn't the primary focus of OOP; organization and maintainability are." }
    ]
  },
  {
    q: "Method in subclass with same signature is:",
    a: [
      { option: "Overloading", whyWrong: "Overloading has the same name but different parameters in the same class." },
      { option: "Overriding", whyRight: "Method overriding occurs when a subclass provides a different implementation of a method already defined in its superclass with the same signature. This enables runtime polymorphism." },
      { option: "Hiding", whyWrong: "Hiding applies to static methods and fields, not instance methods." },
      { option: "Duplicating", whyWrong: "Duplication is code smell; overriding is an intentional polymorphic mechanism." }
    ]
  },
  {
    q: "Multi-level inheritance example:",
    a: [
      { option: "A extends B, B extends C", whyRight: "Multi-level inheritance forms a chain where A extends B, and B extends C (GrandChild -> Child -> Parent). This creates a hierarchy with multiple levels of inheritance." },
      { option: "A extends B and C", whyWrong: "This describes multiple inheritance (inheriting from multiple classes), which Java doesn't support for classes." },
      { option: "A is final class", whyWrong: "Final classes cannot be extended, preventing any inheritance." },
      { option: "No inheritance", whyWrong: "This is the absence of inheritance, not multi-level inheritance." }
    ]
  },
  {
    q: "Java does NOT support this for classes:",
    a: [
      { option: "Single inheritance", whyWrong: "Java supports single inheritance (one class extends one parent)." },
      { option: "Multi-level inheritance", whyWrong: "Java supports multi-level inheritance (A extends B extends C)." },
      { option: "Multiple inheritance", whyRight: "Java doesn't allow a class to extend multiple classes (multiple inheritance) to avoid the diamond problem. However, it supports multiple interface implementation." },
      { option: "Hierarchical inheritance", whyWrong: "Java supports hierarchical inheritance (multiple classes extending one parent)." }
    ]
  },
  {
    q: "What is a class in Java?",
    a: [
      { option: "A function", whyWrong: "Functions (methods) are defined inside classes, but a class is not a function." },
      { option: "Blueprint for objects", whyRight: "A class is a blueprint or template that defines the structure (fields) and behavior (methods) of objects. Objects are instances created from classes, like building houses from blueprints." },
      { option: "A variable", whyWrong: "Variables store data; classes define the structure and behavior of objects." },
      { option: "A loop", whyWrong: "Loops are control structures for iteration, not related to class definition." }
    ]
  },
  {
    q: "What is an object?",
    a: [
      { option: "Class definition", whyWrong: "The class is the definition/blueprint; the object is the instance created from it." },
      { option: "Instance of a class", whyRight: "An object is a specific instance of a class with actual values. If 'Car' is a class, 'myCar' with color='red' and speed=100 is an object. Classes define structure; objects have actual data." },
      { option: "A method", whyWrong: "Methods are functions inside classes; objects are instances of classes." },
      { option: "A package", whyWrong: "Packages organize classes; objects are instances of classes." }
    ]
  },
  {
    q: "'this' keyword refers to:",
    a: [
      { option: "Superclass", whyWrong: "'super' refers to the superclass, not 'this'." },
      { option: "Current object instance", whyRight: "'this' refers to the current instance of the class. It's used to distinguish instance variables from parameters with the same name and to call other constructors in the same class." },
      { option: "Static context", whyWrong: "'this' cannot be used in static context as there's no current instance." },
      { option: "Method parameter", whyWrong: "Method parameters are separate from 'this'; 'this' refers to the object itself." }
    ]
  },
  {
    q: "Method overloading means:",
    a: [
      { option: "Same name, different parameters", whyRight: "Method overloading allows multiple methods with the same name but different parameter lists (number, type, or order). The compiler determines which method to call based on arguments at compile-time." },
      { option: "Same name in parent/child", whyWrong: "This describes method overriding, not overloading. Overriding occurs in inheritance hierarchies." },
      { option: "Too many methods", whyWrong: "Overloading is a design feature, not about having too many methods." },
      { option: "Private methods only", whyWrong: "Methods of any access level can be overloaded, not just private." }
    ]
  },
  {
    q: "'final' keyword on a class prevents:",
    a: [
      { option: "Instantiation", whyWrong: "Final classes can be instantiated; 'final' prevents inheritance, not object creation." },
      { option: "Inheritance", whyRight: "'final' classes cannot be extended (inherited from). This is used for security or design reasons when you don't want the class behavior to be modified. String is a famous final class." },
      { option: "Execution", whyWrong: "'final' doesn't prevent code execution; it prevents inheritance." },
      { option: "Declaration", whyWrong: "'final' doesn't prevent class declaration; it modifies inheritance behavior." }
    ]
  },
  {
    q: "What is a constructor?",
    a: [
      { option: "Special method to initialize object", whyRight: "A constructor is a special method with the same name as the class, called automatically when creating objects. It initializes object state. Unlike regular methods, constructors have no return type." },
      { option: "Destructor method", whyWrong: "Java doesn't have destructors (uses garbage collection); constructors initialize objects." },
      { option: "Infinite loop", whyWrong: "Constructors are initialization methods, not loops." },
      { option: "Primitive type", whyWrong: "Constructors are methods, not data types." }
    ]
  },
  {
    q: "'super' keyword is used to:",
    a: [
      { option: "Access/call superclass members", whyRight: "'super' accesses superclass members - fields, methods, or constructors. super() calls the parent constructor and must be the first statement in a child constructor if used." },
      { option: "Create new objects", whyWrong: "'new' keyword creates objects, not 'super'." },
      { option: "Define static variables", whyWrong: "'static' keyword defines static members, not 'super'." },
      { option: "Import packages", whyWrong: "'import' keyword imports packages, not 'super'." }
    ]
  },
  {
    q: "An interface in Java mainly contains:",
    a: [
      { option: "Concrete methods only", whyWrong: "Interfaces primarily contain abstract methods; concrete methods are allowed since Java 8 as default/static methods." },
      { option: "Abstract methods & constants", whyRight: "Interfaces primarily contain abstract method declarations (no body) and constants (public static final fields). Since Java 8, they can also have default and static methods with implementations." },
      { option: "Instance variables", whyWrong: "Interfaces can only have constants (public static final), not instance variables." },
      { option: "Constructors", whyWrong: "Interfaces cannot have constructors since they cannot be instantiated." }
    ]
  },
  {
    q: "'static' members belong to:",
    a: [
      { option: "Each instance", whyWrong: "Instance members belong to each object; static members are shared." },
      { option: "The class itself", whyRight: "Static members (fields and methods) belong to the class, not individual objects. They're shared across all instances and can be accessed without creating an object using ClassName.member." },
      { option: "Local scope only", whyWrong: "Static members have class scope, not local scope." },
      { option: "Final fields only", whyWrong: "Static and final are separate concepts; static members don't have to be final." }
    ]
  },
  {
    q: "Compile-time polymorphism is achieved by:",
    a: [
      { option: "Method overriding", whyWrong: "Method overriding provides runtime (dynamic) polymorphism, not compile-time." },
      { option: "Method overloading", whyRight: "Method overloading provides compile-time (static) polymorphism. The compiler determines which overloaded method to call based on method signature at compile time." },
      { option: "Inheritance only", whyWrong: "Inheritance enables polymorphism but doesn't directly achieve compile-time polymorphism." },
      { option: "Encapsulation", whyWrong: "Encapsulation bundles data with methods but doesn't provide polymorphism." }
    ]
  },
  {
    q: "Which keyword is used to implement an interface?",
    a: [
      { option: "extends", whyWrong: "'extends' is for class inheritance and interface-to-interface extension, not class-to-interface implementation." },
      { option: "implements", whyRight: "Classes use 'implements' to implement interfaces, while they use 'extends' to inherit from other classes. A class can implement multiple interfaces but extend only one class in Java." },
      { option: "inherits", whyWrong: "Java doesn't use 'inherits' as a keyword." },
      { option: "using", whyWrong: "'using' is not a Java keyword for implementation or inheritance." }
    ]
  },
  {
    q: "Can an abstract class have constructors?",
    a: [
      { option: "No, never", whyWrong: "Abstract classes can and often do have constructors." },
      { option: "Yes", whyRight: "Abstract classes can have constructors that are called when concrete subclasses are instantiated. These constructors initialize inherited fields. Abstract classes can't be instantiated directly, but constructors are used by subclasses." },
      { option: "Only static constructors", whyWrong: "Java doesn't have static constructors; abstract classes can have regular constructors." },
      { option: "Only private constructors", whyWrong: "Abstract classes can have constructors with any access modifier." }
    ]
  },
  {
    q: "Default access modifier in Java is:",
    a: [
      { option: "public", whyWrong: "'public' is explicitly specified; the default is more restrictive." },
      { option: "protected", whyWrong: "'protected' must be explicitly specified; it's not the default." },
      { option: "private", whyWrong: "'private' must be explicitly specified; the default is less restrictive." },
      { option: "package-private", whyRight: "When no access modifier is specified, Java uses package-private (default) access. Members are accessible only within the same package. It's more restrictive than public/protected but less than private." }
    ]
  },
  {
    q: "Which cannot be overridden?",
    a: [
      { option: "private methods", whyWrong: "True, but not the complete answer - static and final methods also cannot be overridden." },
      { option: "static methods", whyWrong: "True, but not the complete answer - private and final methods also cannot be overridden." },
      { option: "final methods", whyWrong: "True, but not the complete answer - private and static methods also cannot be overridden." },
      { option: "All of the above", whyRight: "Private methods aren't visible to subclasses. Static methods are hidden, not overridden. Final methods explicitly prevent overriding. All three cannot be overridden in the traditional sense." }
    ]
  },
  {
    q: "Access modifiers order (most to least restrictive):",
    a: [
      { option: "public > protected > default > private", whyWrong: "This is the opposite order; private is most restrictive." },
      { option: "private > default > protected > public", whyRight: "private (class only) > default/package-private (same package) > protected (same package + subclasses) > public (everywhere). Private is most restrictive, public is least." },
      { option: "protected > public > private > default", whyWrong: "This order is incorrect; private is most restrictive, not protected." },
      { option: "default > private > protected > public", whyWrong: "This order is incorrect; private is more restrictive than default." }
    ]
  },
  {
    q: "Marker interface is:",
    a: [
      { option: "Interface with many methods", whyWrong: "Marker interfaces have no methods at all." },
      { option: "Interface with no methods", whyRight: "Marker interfaces have no methods or fields - they just 'mark' a class as having a certain property. Examples: Serializable, Cloneable, Remote. They signal something to JVM or framework." },
      { option: "Interface with one method", whyWrong: "This describes a functional interface, not a marker interface." },
      { option: "Abstract class", whyWrong: "Marker interfaces are interfaces, not abstract classes." }
    ]
  },
  {
    q: "Can a subclass access private members of superclass?",
    a: [
      { option: "Yes, always", whyWrong: "Private members are not accessible outside the class, even to subclasses." },
      { option: "No", whyRight: "Private members are not accessible to subclasses. Subclasses must use public or protected methods (getters/setters) to access private superclass data. This enforces encapsulation." },
      { option: "Only if in same package", whyWrong: "Private members are not accessible even in the same package." },
      { option: "Only through inheritance", whyWrong: "Inheritance doesn't grant access to private members; they remain private to the defining class." }
    ]
  },
  {
    q: "'protected' allows access from:",
    a: [
      { option: "Same class only", whyWrong: "'protected' is less restrictive than private; it allows access beyond the same class." },
      { option: "Same package and subclasses", whyRight: "'protected' members are accessible in the same package and by subclasses (even in different packages). It's between default and public in terms of visibility." },
      { option: "Everywhere", whyWrong: "'public' allows access everywhere, not 'protected'." },
      { option: "Same package only", whyWrong: "This describes default access; 'protected' also includes subclasses." }
    ]
  },
  {
    q: "Can final variable be reassigned?",
    a: [
      { option: "Yes, anytime", whyWrong: "'final' prevents reassignment after initialization." },
      { option: "No", whyRight: "'final' variables cannot be reassigned after initialization. For objects, the reference can't change, but the object's state can (if the object is mutable)." },
      { option: "Only in constructor", whyWrong: "Final variables can be initialized in constructors, but cannot be reassigned afterward." },
      { option: "Only once per method", whyWrong: "'final' prevents any reassignment after initial assignment." }
    ]
  },
  {
    q: "Abstract method has:",
    a: [
      { option: "No body (declaration only)", whyRight: "Abstract methods have no implementation - just a signature ending with semicolon. Subclasses must provide the implementation. Only abstract classes and interfaces can have abstract methods." },
      { option: "Full implementation", whyWrong: "Concrete methods have full implementations; abstract methods only have declarations." },
      { option: "Private access", whyWrong: "Abstract methods cannot be private (they must be overridden by subclasses)." },
      { option: "Final modifier", whyWrong: "Abstract methods cannot be final (they must be overridden by subclasses)." }
    ]
  },
  {
    q: "Interface fields are implicitly:",
    a: [
      { option: "public only", whyWrong: "Interface fields are public, but also static and final." },
      { option: "public static final", whyRight: "All fields in interfaces are implicitly public static final (constants). You don't need to explicitly declare these modifiers - they're assumed." },
      { option: "private static", whyWrong: "Interface fields cannot be private; they're public constants." },
      { option: "protected final", whyWrong: "Interface fields are public, not protected." }
    ]
  },
  {
    q: "Covariant return type means:",
    a: [
      { option: "Same return type in override", whyWrong: "Covariant allows subclass return types, not just the same type." },
      { option: "Override can return subclass of original return type", whyRight: "Covariant return types (Java 5+) allow overriding methods to return a subclass of the original return type. If parent returns Animal, child can return Dog (subclass of Animal)." },
      { option: "Different return type always allowed", whyWrong: "Return types must be same or covariant (subclass); completely different types aren't allowed." },
      { option: "No return type", whyWrong: "Covariant return type is about the relationship between return types, not absence of return type." }
    ]
  },
  {
    q: "Multiple inheritance is achieved in Java via:",
    a: [
      { option: "Multiple class extension", whyWrong: "Java doesn't allow extending multiple classes." },
      { option: "Multiple interface implementation", whyRight: "Java achieves multiple inheritance through multiple interface implementation. A class can implement many interfaces, avoiding the diamond problem that occurs with multiple class inheritance." },
      { option: "Final classes", whyWrong: "Final classes prevent inheritance altogether." },
      { option: "Abstract classes", whyWrong: "You can only extend one abstract class, just like regular classes." }
    ]
  },
  {
    q: "Which method is called when object is created?",
    a: [
      { option: "finalize()", whyWrong: "finalize() is called before garbage collection, not object creation." },
      { option: "Constructor", whyRight: "Constructors are automatically called when objects are created using 'new'. They initialize the object's state." },
      { option: "main()", whyWrong: "main() is the program entry point, not called for each object creation." },
      { option: "init()", whyWrong: "init() is not a special Java method for object creation." }
    ]
  },
  {
    q: "Can constructor return a value?",
    a: [
      { option: "Yes, any type", whyWrong: "Constructors cannot have return types, not even void." },
      { option: "No, constructors don't return anything", whyRight: "Constructors don't have return types (not even void). They implicitly return the newly created object reference. Declaring a return type makes it a regular method." },
      { option: "Only void", whyWrong: "Constructors don't have return types; specifying void makes it a regular method." },
      { option: "Only the class type", whyWrong: "While constructors implicitly return an object of the class, you don't specify return types." }
    ]
  },
  {
    q: "Difference between abstract class and interface (before Java 8):",
    a: [
      { option: "Abstract class can have concrete methods", whyRight: "Before Java 8, interfaces could only have abstract methods, while abstract classes could have both abstract and concrete methods. Abstract classes could also have constructors and instance variables." },
      { option: "No difference", whyWrong: "There are significant differences between abstract classes and interfaces." },
      { option: "Interface can have constructors", whyWrong: "Interfaces cannot have constructors; abstract classes can." },
      { option: "Abstract class can be instantiated", whyWrong: "Neither abstract classes nor interfaces can be directly instantiated." }
    ]
  },
  {
    q: "Runtime polymorphism is achieved via:",
    a: [
      { option: "Method overloading", whyWrong: "Method overloading provides compile-time polymorphism, not runtime." },
      { option: "Method overriding", whyRight: "Method overriding provides runtime (dynamic) polymorphism. The JVM determines which method to call at runtime based on the actual object type, not the reference type." },
      { option: "Method hiding", whyWrong: "Method hiding applies to static methods and is resolved at compile-time, not runtime." },
      { option: "Constructor overloading", whyWrong: "Constructor overloading is compile-time polymorphism, not runtime." }
    ]
  },
  {
    q: "Tight coupling means:",
    a: [
      { option: "Classes are highly dependent on each other", whyRight: "Tight coupling occurs when classes are highly dependent on each other's implementation details. Changes in one class often require changes in dependent classes. It reduces flexibility and makes testing difficult." },
      { option: "Classes are independent", whyWrong: "This describes loose coupling, not tight coupling." },
      { option: "Using interfaces", whyWrong: "Interfaces promote loose coupling, not tight coupling." },
      { option: "No inheritance", whyWrong: "Coupling relates to dependencies between classes, not presence/absence of inheritance." }
    ]
  },
  {
    q: "Loose coupling is achieved via:",
    a: [
      { option: "Direct object references", whyWrong: "Direct references increase coupling; abstraction reduces it." },
      { option: "Interfaces and abstraction", whyRight: "Loose coupling is achieved by depending on interfaces/abstractions rather than concrete implementations. This makes code more flexible, testable, and maintainable." },
      { option: "Multiple inheritance", whyWrong: "Multiple inheritance doesn't necessarily lead to loose coupling." },
      { option: "Private constructors", whyWrong: "Private constructors are for singleton/factory patterns, not primarily for loose coupling." }
    ]
  },
  {
    q: "Composition vs Inheritance - prefer composition when:",
    a: [
      { option: "Always use inheritance", whyWrong: "Composition is often preferred for flexibility; inheritance should be used when there's a true 'IS-A' relationship." },
      { option: "You need 'HAS-A' relationship", whyRight: "Composition (HAS-A relationship) is preferred when you want flexibility and loose coupling. Car HAS-A Engine. Inheritance (IS-A) should be used when there's a true subtype relationship." },
      { option: "You need 'IS-A' relationship", whyWrong: "Inheritance is appropriate for 'IS-A' relationships, not composition." },
      { option: "Never use composition", whyWrong: "Composition is often preferable to inheritance for its flexibility and reusability." }
    ]
  },
  {
    q: "Which keyword prevents method overriding?",
    a: [
      { option: "static", whyWrong: "Static methods are hidden, not overridden, but there's a better answer." },
      { option: "final", whyWrong: "Final explicitly prevents overriding, but there's a more complete answer." },
      { option: "private", whyWrong: "Private methods aren't visible to subclasses, but there's a more complete answer." },
      { option: "All of the above", whyRight: "'final' explicitly prevents overriding. 'private' methods aren't visible to subclasses, so they can't be overridden. 'static' methods are hidden, not overridden. All three effectively prevent overriding." }
    ]
  },
  {
    q: "What is a default constructor?",
    a: [
      { option: "No-arg constructor provided by compiler", whyRight: "The default constructor is automatically provided by the compiler if no constructors are defined. It's a no-arg constructor that calls the superclass's no-arg constructor. If you define any constructor, the default is not provided." },
      { option: "User-defined no-arg constructor", whyWrong: "This is a no-arg constructor, but not the 'default' constructor provided by the compiler." },
      { option: "Parameterized constructor", whyWrong: "Parameterized constructors have parameters; the default constructor has no parameters." },
      { option: "Final constructor", whyWrong: "Constructors cannot be final; 'default' refers to compiler-provided no-arg constructor." }
    ]
  },
  {
    q: "Can a class have multiple constructors?",
    a: [
      { option: "No", whyWrong: "Classes can have multiple constructors with different parameters." },
      { option: "Yes (overloading)", whyRight: "A class can have multiple constructors with different parameter lists (constructor overloading). This provides flexibility in object creation, allowing various initialization methods." },
      { option: "Only two", whyWrong: "There's no limit of two; you can have as many constructors as needed with different parameters." },
      { option: "Only if abstract", whyWrong: "Both concrete and abstract classes can have multiple constructors." }
    ]
  },
  {
    q: "What happens if you don't define any constructor?",
    a: [
      { option: "Compilation error", whyWrong: "No error occurs; Java provides a default constructor automatically." },
      { option: "Default no-arg constructor", whyRight: "If no constructor is defined, Java automatically provides a default no-arg constructor that calls the superclass's no-arg constructor. This only happens if you define NO constructors." },
      { option: "Runtime error", whyWrong: "No runtime error; the default constructor is provided at compile time." },
      { option: "Abstract class error", whyWrong: "Classes without constructors don't become abstract; they get a default constructor." }
    ]
  },
  {
    q: "Which is used to call parent class constructor?",
    a: [
      { option: "this()", whyWrong: "this() calls another constructor in the same class, not the parent class." },
      { option: "super()", whyRight: "super() calls the superclass constructor and must be the first statement in a subclass constructor (if used explicitly). Every constructor calls a superclass constructor, either explicitly with super() or implicitly." },
      { option: "parent()", whyWrong: "Java doesn't have a 'parent()' keyword; use super()." },
      { option: "base()", whyWrong: "Java doesn't have a 'base()' keyword; use super()." }
    ]
  },
  {
    q: "Can super() and this() both appear in one constructor?",
    a: [
      { option: "Yes", whyWrong: "Only one constructor call (super() or this()) can appear, and it must be first." },
      { option: "No, only one allowed", whyRight: "Only one constructor call (super() or this()) can appear in a constructor, and it must be the first statement. You can't call both because each must be first, which is impossible." },
      { option: "Only in abstract class", whyWrong: "This restriction applies to all classes, not just abstract ones." },
      { option: "Only in final class", whyWrong: "This restriction applies to all classes, not just final ones." }
    ]
  },
  {
    q: "What is the first line in a constructor usually?",
    a: [
      { option: "super() or this()", whyRight: "Constructors typically start with super() or this() to call another constructor. If omitted, Java implicitly adds super() to call the no-arg constructor of the superclass." },
      { option: "System.out.println", whyWrong: "Constructor calls (super/this) must come first, before any other statements." },
      { option: "Variable declaration", whyWrong: "Constructor calls (super/this) must come first, before variable declarations." },
      { option: "Return statement", whyWrong: "Constructors don't have return statements." }
    ]
  },
  {
    q: "Which method cannot be abstract?",
    a: [
      { option: "private", whyWrong: "Correct, but not the complete answer - static and final also cannot be abstract." },
      { option: "static", whyWrong: "Correct, but not the complete answer - private and final also cannot be abstract." },
      { option: "final", whyWrong: "Correct, but not the complete answer - private and static also cannot be abstract." },
      { option: "All of the above", whyRight: "Abstract methods must be overridden, but private methods aren't visible to subclasses, static methods belong to the class (can't be overridden), and final methods can't be overridden. None can be abstract." }
    ]
  },
  {
    q: "Can an interface extend another interface?",
    a: [
      { option: "No", whyWrong: "Interfaces can extend other interfaces using the 'extends' keyword." },
      { option: "Yes", whyRight: "Interfaces can extend multiple other interfaces using 'extends' (not implements). This creates an interface hierarchy. A class implementing the child interface must implement all methods from the hierarchy." },
      { option: "Only one", whyWrong: "Interfaces can extend multiple interfaces, not just one." },
      { option: "Only multiple", whyWrong: "Interfaces can extend both single and multiple interfaces." }
    ]
  },
  {
    q: "Default methods in interface were introduced in:",
    a: [
      { option: "Java 7", whyWrong: "Default methods were introduced later, in Java 8." },
      { option: "Java 8", whyRight: "Java 8 introduced default methods in interfaces - methods with implementations using the 'default' keyword. This allows adding new methods to interfaces without breaking existing implementations." },
      { option: "Java 9", whyWrong: "Java 9 introduced private interface methods, but default methods came in Java 8." },
      { option: "Java 11", whyWrong: "Default methods were introduced earlier, in Java 8." }
    ]
  },
  {
    q: "What is functional interface?",
    a: [
      { option: "Interface with exactly one abstract method", whyRight: "A functional interface has exactly one abstract method (though it can have multiple default/static methods). They can be used with lambda expressions and method references. Example: Runnable, Callable." },
      { option: "Interface with many methods", whyWrong: "Functional interfaces must have exactly one abstract method." },
      { option: "Abstract class", whyWrong: "Functional interfaces are interfaces, not abstract classes." },
      { option: "Marker interface", whyWrong: "Marker interfaces have no methods; functional interfaces have exactly one abstract method." }
    ]
  },
  {
    q: "@FunctionalInterface annotation is:",
    a: [
      { option: "Mandatory", whyWrong: "It's optional but recommended for clarity and compile-time verification." },
      { option: "Optional but recommended", whyRight: "@FunctionalInterface is optional but recommended. It tells the compiler to verify the interface has exactly one abstract method, generating an error if violated. It documents intent for other developers." },
      { option: "Not allowed", whyWrong: "It's a valid annotation introduced in Java 8 for functional interfaces." },
      { option: "Only for abstract classes", whyWrong: "@FunctionalInterface is for interfaces, not abstract classes." }
    ]
  },
  {
    q: "Which is an example of functional interface?",
    a: [
      { option: "Runnable", whyWrong: "Correct, but not the only example - Comparable and Comparator are also functional interfaces." },
      { option: "Comparable", whyWrong: "Correct, but not the only example - Runnable and Comparator are also functional interfaces." },
      { option: "Comparator", whyWrong: "Correct (has one abstract method: compare), but Runnable and Comparable are also functional interfaces." },
      { option: "All of the above", whyRight: "Runnable (one method: run), Comparable (one method: compareTo), and Comparator (one abstract method: compare, plus default methods) are all functional interfaces with exactly one abstract method." }
    ]
  },
  {
    q: "What does diamond problem refer to?",
    a: [
      { option: "Multiple inheritance ambiguity", whyRight: "The diamond problem occurs in multiple inheritance when a class inherits the same method from multiple paths, causing ambiguity about which implementation to use. Java avoids this by not allowing multiple class inheritance." },
      { option: "Single inheritance", whyWrong: "Single inheritance doesn't cause the diamond problem; multiple inheritance does." },
      { option: "Composition issue", whyWrong: "Composition doesn't cause diamond problems; it's related to multiple inheritance." },
      { option: "Polymorphism issue", whyWrong: "Diamond problem is about inheritance ambiguity, not polymorphism." }
    ]
  },
  {
    q: "How does Java avoid diamond problem?",
    a: [
      { option: "No multiple inheritance for classes", whyWrong: "Correct, but not complete - Java also handles interface conflicts." },
      { option: "Multiple interfaces allowed", whyWrong: "Correct, but not complete - this is how Java provides multiple inheritance benefits." },
      { option: "Default methods conflict resolution", whyWrong: "Correct, but not complete - conflicts must be explicitly resolved." },
      { option: "All of the above", whyRight: "Java prevents diamond problem by disallowing multiple class inheritance. Interfaces can be multiply inherited; conflicts in default methods must be explicitly resolved by the implementing class." }
    ]
  },
  {
    q: "Which keyword creates anonymous class?",
    a: [
      { option: "new", whyRight: "Anonymous classes are created using 'new' followed by a class/interface name and braces containing the implementation. They're used for one-time implementations, especially in event handlers." },
      { option: "anonymous", whyWrong: "Java doesn't have an 'anonymous' keyword; use 'new' with immediate implementation." },
      { option: "class", whyWrong: "'class' keyword is for regular class definitions, not anonymous classes." },
      { option: "extend", whyWrong: "There's no 'extend' keyword; anonymous classes are created with 'new'." }
    ]
  },
  {
    q: "Lambda expressions were introduced in:",
    a: [
      { option: "Java 7", whyWrong: "Lambda expressions came in Java 8, not Java 7." },
      { option: "Java 8", whyRight: "Lambda expressions were introduced in Java 8, enabling functional programming style. They provide a concise way to implement functional interfaces (single abstract method interfaces)." },
      { option: "Java 9", whyWrong: "Lambda expressions were introduced earlier, in Java 8." },
      { option: "Java 11", whyWrong: "Lambda expressions were introduced earlier, in Java 8." }
    ]
  },
  {
    q: "What replaces anonymous inner class in many cases?",
    a: [
      { option: "Lambda expression", whyRight: "Lambda expressions provide a more concise alternative to anonymous inner classes for implementing functional interfaces. Instead of verbose anonymous class syntax, use compact lambda syntax like (x, y) -> x + y." },
      { option: "Anonymous function", whyWrong: "Java doesn't have standalone anonymous functions; lambdas implement functional interfaces." },
      { option: "Arrow function", whyWrong: "While lambdas use arrow syntax (->), the proper term in Java is 'lambda expression'." },
      { option: "All of the above", whyWrong: "Only lambda expressions are the correct Java term and feature." }
    ]
  },
  {
    q: "Which is correct lambda syntax?",
    a: [
      { option: "() -> System.out.println()", whyWrong: "This is valid, but not the only correct syntax." },
      { option: "x -> x*2", whyWrong: "This is valid, but not the only correct syntax." },
      { option: "(int a, int b) -> a+b", whyWrong: "This is valid, but not the only correct syntax." },
      { option: "All are correct", whyRight: "Lambda syntax: (parameters) -> expression or body. Parameters can be typed or inferred. Single parameters don't need parentheses. All three examples show valid lambda syntax for different scenarios." }
    ]
  },
  {
    q: "What is method reference?",
    a: [
      { option: ":: syntax to refer method", whyWrong: "Correct, but not the complete explanation." },
      { option: "Lambda replacement in some cases", whyRight: "Method references (::) provide shorthand for lambdas that only call an existing method. ClassName::methodName replaces x -> ClassName.methodName(x). They're more readable than equivalent lambdas." },
      { option: "Static method call only", whyWrong: "Method references work for static, instance, and constructor references." },
      { option: "Instance method call only", whyWrong: "Method references work for static, instance, and constructor references." }
    ]
  },
  {
    q: "Which is NOT a type of method reference?",
    a: [
      { option: "Static", whyWrong: "ClassName::staticMethod is a valid method reference type." },
      { option: "Instance", whyWrong: "object::instanceMethod is a valid method reference type." },
      { option: "Constructor", whyWrong: "ClassName::new is a valid constructor reference." },
      { option: "Abstract", whyRight: "Method reference types: Static (ClassName::staticMethod), Instance (object::instanceMethod), Constructor (ClassName::new). There's no 'abstract' method reference type." }
    ]
  },
  {
    q: "What is var keyword used for (Java 10+)?",
    a: [
      { option: "Local variable type inference", whyRight: "'var' (Java 10+) enables local variable type inference. The compiler determines the type from the initializer. Only for local variables with initializers, not fields, parameters, or return types." },
      { option: "Global variable", whyWrong: "'var' is only for local variables, not global/class fields." },
      { option: "Final variable", whyWrong: "'var' is for type inference; use 'final var' if you want both inference and immutability." },
      { option: "Static variable", whyWrong: "'var' cannot be used for static fields, only local variables." }
    ]
  },
  {
    q: "Can records (Java 14+) implement interfaces?",
    a: [
      { option: "No", whyWrong: "Records can implement interfaces and provide method implementations." },
      { option: "Yes", whyRight: "Records can implement interfaces, providing method implementations as needed. They're immutable data carriers with automatic constructor, getters, equals(), hashCode(), and toString()." },
      { option: "Only marker interfaces", whyWrong: "Records can implement any interface, not just marker interfaces." },
      { option: "Only functional interfaces", whyWrong: "Records can implement any interface type." }
    ]
  },
  {
    q: "What is the main purpose of records?",
    a: [
      { option: "Immutable data carriers", whyRight: "Records (Java 14+) are immutable data carriers. They automatically generate constructors, accessors, equals(), hashCode(), and toString() based on declared fields, reducing boilerplate for simple data classes." },
      { option: "Mutable data holders", whyWrong: "Records are immutable; their fields cannot be changed after creation." },
      { option: "Abstract classes", whyWrong: "Records are not abstract classes; they're concrete immutable data classes." },
      { option: "Functional interfaces", whyWrong: "Records are data classes, not functional interfaces." }
    ]
  }
];