/*
Exercise 1: Create an empty object called 'person'
Requirements:
- Create an empty object using object literal notation
Test cases:
console.log(typeof person === 'object');  // true
console.log(Object.keys(person).length === 0);  // true
*/

/*
Exercise 2: Add a property 'name' with your name to the person object
Requirements:
- Add property after object creation
- Name should be a string
Test cases:
console.log(person.name.length > 0);  // true
console.log(typeof person.name === 'string');  // true
*/

/*
Exercise 3: Add an 'age' property to the person object
Requirements:
- Age should be a number
- Age should be positive
Test cases:
console.log(typeof person.age === 'number');  // true
console.log(person.age > 0);  // true
*/

/*
Exercise 4: Create an object 'car' with properties: brand, model, and year
Requirements:
- All properties should be initialized during object creation
- Year should be a number
Test cases:
console.log(car.brand && car.model && car.year);  // true
console.log(typeof car.year === 'number');  // true
*/

/*
Exercise 5: Create a method 'start' in the car object
Requirements:
- Method should return a string "The [brand] [model] is starting!"
Test cases:
console.log(car.start() === `The ${car.brand} ${car.model} is starting!`);  // true
*/

/*
Exercise 6: Create an object 'calculator' with methods: add and subtract
Requirements:
- add(a, b) should return sum of two numbers
- subtract(a, b) should return difference of two numbers
- Both methods should handle invalid inputs
Test cases:
console.log(calculator.add(5, 3) === 8);  // true
console.log(calculator.subtract(5, 3) === 2);  // true
console.log(calculator.add('5', '3') === 8);  // true (bonus: type coercion)
*/

/*
Exercise 7: Create an object 'book' with properties: title, author, and pages
Requirements:
- All properties should be strings (except pages which is number)
- Pages should be positive number
Test cases:
console.log(typeof book.title === 'string');  // true
console.log(typeof book.pages === 'number');  // true
console.log(book.pages > 0);  // true
*/

/*
Exercise 8: Add a method 'info' to the book object
Requirements:
- Should return string in format "Title by Author, Pages pages"
- Should use template literals
Test cases:
console.log(book.info() === `${book.title} by ${book.author}, ${book.pages} pages`);  // true
*/

/*
Exercise 9: Create an object 'temperature' with conversion methods
Requirements:
- celsiusToFahrenheit(c) should convert Celsius to Fahrenheit
- fahrenheitToCelsius(f) should convert Fahrenheit to Celsius
- Both methods should return rounded numbers
Test cases:
console.log(temperature.celsiusToFahrenheit(0) === 32);  // true
console.log(temperature.fahrenheitToCelsius(32) === 0);  // true
*/

/*
Exercise 10: Create an object 'counter' with methods
Requirements:
- getValue() returns current count
- increment() increases count by 1
- decrement() decreases count by 1
- Count should not go below 0
Test cases:
counter.increment();
console.log(counter.getValue() === 1);  // true
counter.decrement();
console.log(counter.getValue() === 0);  // true
counter.decrement();
console.log(counter.getValue() === 0);  // true (doesn't go below 0)
*/

/*
Exercise 11: Create an object 'rectangle' with area calculation
Requirements:
- Properties: width and height (numbers)
- Method: getArea() returns width * height
- Method: getPerimeter() returns 2 * (width + height)
Test cases:
const rect = rectangle(5, 3);
console.log(rect.getArea() === 15);  // true
console.log(rect.getPerimeter() === 16);  // true
*/

/*
Exercise 12: Create an object 'pet' with speak method
Requirements:
- Properties: type (string), name (string)
- speak() returns different sounds based on type
- Supported types: 'dog', 'cat', 'bird'
Test cases:
const dog = pet('dog', 'Rex');
console.log(dog.speak() === 'Woof!');  // true
const cat = pet('cat', 'Whiskers');
console.log(cat.speak() === 'Meow!');  // true
*/

/*
Exercise 13: Create an object 'bankAccount' with transaction methods
Requirements:
- Property: balance (number, starts at 0)
- deposit(amount) adds to balance
- withdraw(amount) subtracts from balance if sufficient funds
- getBalance() returns current balance
Test cases:
bankAccount.deposit(100);
console.log(bankAccount.getBalance() === 100);  // true
console.log(bankAccount.withdraw(50) === true);  // true
console.log(bankAccount.withdraw(100) === false);  // true (insufficient funds)
*/

/*
Exercise 14: Create an object 'clock' with time methods
Requirements:
- Methods: setTime(hours, minutes), getTime24(), getTime12()
- Handle invalid hours/minutes
- Return formatted strings (HH:MM)
Test cases:
clock.setTime(13, 30);
console.log(clock.getTime24() === '13:30');  // true
console.log(clock.getTime12() === '1:30 PM');  // true
*/

/*
Exercise 15: Create an object 'playlist' with song management
Requirements:
- Property: songs (array)
- addSong(title, artist) adds song object to array
- removeSong(title) removes song by title
- listSongs() returns array of formatted strings
Test cases:
playlist.addSong('Yesterday', 'Beatles');
console.log(playlist.songs.length === 1);  // true
playlist.removeSong('Yesterday');
console.log(playlist.songs.length === 0);  // true
*/

/*
Exercise 16: Create an object 'dice' with rolling methods
Requirements:
- Method: roll() returns random number 1-6
- Method: rollMany(times) returns array of rolls
- Method: getLastRoll() returns most recent roll
Test cases:
console.log(dice.roll() >= 1 && dice.roll() <= 6);  // true
console.log(dice.rollMany(3).length === 3);  // true
console.log(dice.getLastRoll() === dice.rollMany(1)[0]);  // true
*/

/*
Exercise 17: Create an object 'student' with grade management
Requirements:
- Property: grades (array of numbers)
- addGrade(grade) adds new grade (0-100 only)
- getAverage() returns average grade
- getHighest() returns highest grade
Test cases:
student.addGrade(85);
student.addGrade(90);
console.log(student.getAverage() === 87.5);  // true
console.log(student.getHighest() === 90);  // true
*/

/*
Exercise 18: Create an object 'shoppingCart' with item management
Requirements:
- Property: items (array of objects with name, price, quantity)
- addItem(name, price, quantity) adds item
- removeItem(name) removes item
- getTotal() calculates total cost
Test cases:
shoppingCart.addItem('apple', 0.5, 3);
console.log(shoppingCart.getTotal() === 1.5);  // true
shoppingCart.removeItem('apple');
console.log(shoppingCart.getTotal() === 0);  // true
*/

/*
Exercise 19: Create an object 'timer' with time tracking
Requirements:
- Methods: start(), stop(), reset(), getElapsed()
- Track elapsed time in seconds
- Handle multiple start/stop cycles
Test cases:
timer.start();
// wait 1 second
timer.stop();
console.log(timer.getElapsed() >= 1);  // true
timer.reset();
console.log(timer.getElapsed() === 0);  // true
*/

/*
Exercise 20: Create an object 'calendar' with event management
Requirements:
- Method: addEvent(date, title, duration)
- Method: getEvents(date) returns array of events
- Method: removeEvent(date, title)
Test cases:
calendar.addEvent('2024-03-20', 'Meeting', 60);
console.log(calendar.getEvents('2024-03-20').length === 1);  // true
calendar.removeEvent('2024-03-20', 'Meeting');
console.log(calendar.getEvents('2024-03-20').length === 0);  // true
*/

/*
Exercise 21: Create a constructor function 'Person'
Requirements:
- Properties: name, age, country
- Method: introduce() returns formatted introduction
- Method: canVote() checks if age >= 18
Test cases:
const person = new Person('John', 25, 'USA');
console.log(person.introduce().includes('John'));  // true
console.log(person.canVote() === true);  // true
*/

/*
Exercise 22: Create a constructor function 'Circle'
Requirements:
- Property: radius
- Methods: getArea(), getCircumference()
- Use Math.PI for calculations
Test cases:
const circle = new Circle(5);
console.log(Math.round(circle.getArea()) === 79);  // true
console.log(Math.round(circle.getCircumference()) === 31);  // true
*/

/*
Exercise 23: Create a constructor function 'Product'
Requirements:
- Properties: name, price, quantity
- Method: getTotalValue() returns price * quantity
- Method: restock(amount) adds to quantity
Test cases:
const product = new Product('Phone', 500, 3);
console.log(product.getTotalValue() === 1500);  // true
product.restock(2);
console.log(product.quantity === 5);  // true
*/

/*
Exercise 24: Create a constructor function 'Library'
Requirements:
- Property: books (array)
- Method: addBook(title, author, isbn)
- Method: removeBook(isbn)
- Method: findBook(isbn) returns book object
Test cases:
const library = new Library();
library.addBook('1984', 'Orwell', '123');
console.log(library.findBook('123').title === '1984');  // true
library.removeBook('123');
console.log(library.findBook('123') === null);  // true
*/

/*
Exercise 25: Create a constructor function 'TodoList'
Requirements:
- Property: tasks (array of objects)
- Method: addTask(title, priority)
- Method: toggleTask(title)
- Method: getIncomplete() returns incomplete tasks
Test cases:
const todo = new TodoList();
todo.addTask('Learn JS', 'high');
console.log(todo.getIncomplete().length === 1);  // true
todo.toggleTask('Learn JS');
console.log(todo.getIncomplete().length === 0);  // true
*/

/*
Exercise 26: Create a constructor function 'Email'
Requirements:
- Properties: sender, recipient, subject, body
- Method: send() marks email as sent
- Method: isValid() checks if all fields are filled
Test cases:
const email = new Email('a@b.com', 'b@c.com', 'Hi', 'Hello');
console.log(email.isValid() === true);  // true
email.send();
console.log(email.sent === true);  // true
*/

/*
Exercise 27: Create a constructor function 'Restaurant'
Requirements:
- Properties: name, menu (array)
- Method: addMenuItem(name, price, category)
- Method: removeMenuItem(name)
- Method: getMenuByCategory(category)
Test cases:
const restaurant = new Restaurant('Tasty');
restaurant.addMenuItem('Pizza', 10, 'main');
console.log(restaurant.getMenuByCategory('main').length === 1);  // true
*/

/*
Exercise 28: Create a constructor function 'Game'
Requirements:
- Properties: player1Score, player2Score
- Method: addScore(player, points)
- Method: getWinner() returns leading player
- Method: resetScores()
Test cases:
const game = new Game();
game.addScore(1, 10);
console.log(game.getWinner() === 'Player 1');  // true
game.resetScores();
console.log(game.player1Score === 0);  // true
*/

/*
Exercise 29: Create a constructor function 'User'
Requirements:
- Properties: username, password (private)
- Method: changePassword(oldPass, newPass)
- Method: authenticate(pass) returns boolean
Test cases:
const user = new User('john', 'secret');
console.log(user.authenticate('secret') === true);  // true
console.log(user.changePassword('secret', 'new') === true);  // true
*/

/*
Exercise 30: Create a constructor function 'Quiz'
Requirements:
- Properties: questions (array), score
- Method: addQuestion(question, answer)
- Method: checkAnswer(index, answer)
- Method: getScore() returns percentage
Test cases:
const quiz = new Quiz();
quiz.addQuestion('2+2?', '4');
console.log(quiz.checkAnswer(0, '4') === true);  // true
console.log(quiz.getScore() === 100);  // true
*/

/*
Exercise 31: Create a class 'Vehicle' with inheritance
Requirements:
- Base class Vehicle with properties: make, model, year
- Child class Car extends Vehicle, adds property: doors
- Both classes should have toString() method
Test cases:
const car = new Car('Toyota', 'Camry', 2020, 4);
console.log(car.toString().includes('Toyota'));  // true
console.log(car instanceof Vehicle);  // true
*/

/*
Exercise 32: Create a class hierarchy for Shapes
Requirements:
- Base class Shape with method getArea()
- Child classes: Circle, Square, Triangle
- Each child implements getArea() differently
Test cases:
const circle = new Circle(5);
const square = new Square(5);
console.log(circle.getArea() > square.getArea());  // true
console.log(circle instanceof Shape);  // true
*/

/*
Exercise 33: Create a class 'BankAccount' with privacy
Requirements:
- Private balance property using closure
- Methods: deposit(), withdraw(), getBalance()
- Prevent direct access to balance
Test cases:
const account = new BankAccount(100);
console.log(account.balance === undefined);  // true
console.log(account.getBalance() === 100);  // true
*/

/*
Exercise 34: Create a class 'Stack'
Requirements:
- Methods: push(), pop(), peek(), isEmpty(), size()
- Use private array for storage
- Implement LIFO (Last In, First Out)
Test cases:
const stack = new Stack();
stack.push(1);
console.log(stack.peek() === 1);  // true
console.log(stack.pop() === 1);  // true
console.log(stack.isEmpty());  // true
*/

/*
Exercise 35: Create a class 'Queue'
Requirements:
- Methods: enqueue(), dequeue(), front(), isEmpty(), size()
- Use private array for storage
- Implement FIFO (First In, First Out)
Test cases:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);  // true
console.log(queue.front() === 2);  // true
*/

/*
Exercise 36: Create a class 'Person' with validation
Requirements:
- Properties: name, age with getters/setters
- Validate age is between 0 and 120
- Validate name is non-empty string
Test cases:
const person = new Person();
console.log(person.setAge(150) === false);  // true
console.log(person.setName('') === false);  // true
*/

/*
Exercise 37: Create a class 'Calculator' with history
Requirements:
- Methods: add(), subtract(), multiply(), divide()
- Method: getHistory() returns last 5 operations
- Method: clearHistory()
Test cases:
const calc = new Calculator();
calc.add(5, 3);
console.log(calc.getHistory().length === 1);  // true
calc.clearHistory();
console.log(calc.getHistory().length === 0);  // true
*/

/*
Exercise 38: Create a class 'Playlist' with sorting
Requirements:
- Methods: addSong(), removeSong(), shuffle()
- Method: sortBy(criteria) - 'title' or 'artist'
- Method: getCurrentSong()
Test cases:
const playlist = new Playlist();
playlist.addSong('Yesterday', 'Beatles');
playlist.addSong('Hey Jude', 'Beatles');
playlist.sortBy('title');
console.log(playlist.getCurrentSong().title === 'Hey Jude');  // true
*/

/*
Exercise 39: Create a class 'TodoList' with filters
Requirements:
- Methods: addTask(), removeTask(), toggleTask()
- Method: filterBy(status) - 'all', 'active', 'completed'
- Method: getStats() returns count of all/active/completed
Test cases:
const todo = new TodoList();
todo.addTask('Learn JS');
todo.toggleTask('Learn JS');
console.log(todo.filterBy('completed').length === 1);  // true
*/

/*
Exercise 40: Create a class 'Store' with inventory
Requirements:
- Methods: addProduct(), removeProduct(), updateStock()
- Method: getInventoryValue() returns total value
- Method: getLowStock(threshold) returns products below threshold
Test cases:
const store = new Store();
store.addProduct('Apple', 0.5, 100);
console.log(store.getInventoryValue() === 50);  // true
console.log(store.getLowStock(10).length === 0);  // true
*/

/*
Exercise 41: Create a class 'Database' with CRUD
Requirements:
- Methods: create(), read(), update(), delete()
- Method: query() for searching records
- Maintain unique IDs for records
Test cases:
const db = new Database();
const id = db.create({name: 'John'});
console.log(db.read(id).name === 'John');  // true
console.log(db.update(id, {name: 'Jane'}) === true);  // true
*/

/*
Exercise 42: Create a class 'ChatRoom'
Requirements:
- Methods: addUser(), removeUser(), sendMessage()
- Method: getMessageHistory(user)
- Handle private and group messages
Test cases:
const chat = new ChatRoom();
chat.addUser('Alice');
chat.sendMessage('Alice', 'Hello');
console.log(chat.getMessageHistory('Alice').length === 1);  // true
*/

/*
Exercise 43: Create a class 'FileSystem'
Requirements:
- Methods: createFile(), deleteFile(), renameFile()
- Method: getFilesByType(extension)
- Track file creation/modification dates
Test cases:
const fs = new FileSystem();
fs.createFile('test.txt', 'content');
console.log(fs.getFilesByType('txt').length === 1);  // true
console.log(fs.renameFile('test.txt', 'new.txt') === true);  // true
*/

/*
Exercise 44: Create a class 'Calendar'
Requirements:
- Methods: addEvent(), removeEvent(), updateEvent()
- Method: getEvents(date) returns events for specific date
- Detect scheduling conflicts
Test cases:
const calendar = new Calendar();
calendar.addEvent('2024-03-20', '10:00', '11:00', 'Meeting');
console.log(calendar.hasConflict('2024-03-20', '10:30', '11:30') === true);  // true
*/

/*
Exercise 45: Create a class 'Game' with inheritance
Requirements:
- Base class Character with health/damage properties
- Child classes: Warrior, Mage, Archer
    - Methods: attack(), defend(), useSpecialAbility()
Test cases:
const warrior = new Warrior('Conan');
warrior.attack(new Mage('Merlin'));
console.log(warrior.health > 0);  // true
console.log(warrior.useSpecialAbility() !== undefined);  // true
*/
