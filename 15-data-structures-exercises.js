// =====================================================
// SET EXERCISES - Practice with Built-in Methods
// =====================================================

/*
Exercise 1: Unique Username Validator
Description:
Create a system that manages unique usernames for a gaming platform.
Practice using: new Set(), .add(), .has(), .size, .delete()

Required Functions:
1. addUsername(username) - returns true if added, false if already exists
2. removeUsername(username) - returns true if removed, false if didn't exist
3. getNumberOfUsers() - returns total count of usernames
4. checkUsername(username) - checks if username is taken
5. clearInactiveUsers(inactiveList) - removes multiple usernames at once

Example Usage:
const userValidator = new UsernameValidator();

Test Cases:
console.log(userValidator.addUsername("player1")); // true
console.log(userValidator.addUsername("player1")); // false (duplicate)
console.log(userValidator.checkUsername("player1")); // true
console.log(userValidator.getNumberOfUsers()); // 1
console.log(userValidator.removeUsername("player1")); // true
*/

class UsernameValidator {
  constructor() {
    this.usernames = new Set();
  }

  // Implementation here
}

/*
Exercise 2: Browser Tab Manager
Description:
Create a system that tracks unique URLs of open browser tabs.
Practice using: .add(), .delete(), .has(), .clear(), Set operations

Required Functions:
1. openTab(url) - adds new URL to open tabs
2. closeTab(url) - removes URL from open tabs
3. hasTab(url) - checks if URL is open
4. getCommonTabs(otherWindow) - finds URLs open in both windows
5. mergeTabs(otherWindow) - combines tabs from two windows

Test Cases:
const tabManager = new TabManager();
tabManager.openTab("google.com");
tabManager.openTab("github.com");
console.log(tabManager.hasTab("google.com")); // true
console.log(tabManager.getTabCount()); // 2

const otherWindow = new TabManager();
otherWindow.openTab("google.com");
otherWindow.openTab("stackoverflow.com");
console.log(tabManager.getCommonTabs(otherWindow).size); // 1
*/

class TabManager {
  constructor() {
    this.tabs = new Set();
  }

  // Implementation here
}

// =====================================================
// MAP EXERCISES - Practice with Built-in Methods
// =====================================================

/*
Exercise 1: Online Shopping Cart
Description:
Create a shopping cart that maps product IDs to their quantities.
Practice using: new Map(), .set(), .get(), .has(), .delete(), .size

Required Functions:
1. addItem(productId, quantity) - adds or updates quantity
2. removeItem(productId) - removes item from cart
3. updateQuantity(productId, quantity) - updates existing item quantity
4. getQuantity(productId) - gets quantity of specific item
5. getTotalItems() - gets total number of unique items

Test Cases:
const cart = new ShoppingCartMap();
cart.addItem("P123", 2);
cart.addItem("P124", 1);
console.log(cart.getQuantity("P123")); // 2
cart.updateQuantity("P123", 3);
console.log(cart.getQuantity("P123")); // 3
console.log(cart.getTotalItems()); // 2
*/

class ShoppingCartMap {
  constructor() {
    this.items = new Map();
  }

  // Implementation here
}

/*
Exercise 2: User Session Manager
Description:
Create a system that manages active user sessions.
Practice using: .set(), .get(), .delete(), .has(), .clear(), .forEach()

Required Functions:
1. startSession(userId, deviceInfo) - creates new session
2. endSession(userId) - removes session
3. updateLastActive(userId) - updates last active timestamp
4. getSessionInfo(userId) - gets user's session details
5. cleanupOldSessions(maxAge) - removes sessions older than maxAge

Example Session Object:
{
    deviceInfo: "Chrome/Windows",
    startTime: timestamp,
    lastActive: timestamp
}

Test Cases:
const sessionManager = new SessionManager();
sessionManager.startSession("user123", "Chrome/Windows");
console.log(sessionManager.getSessionInfo("user123").deviceInfo); // "Chrome/Windows"
sessionManager.updateLastActive("user123");
console.log(sessionManager.hasActiveSession("user123")); // true
*/

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  // Implementation here
}

/*
Exercise 3: Language Translation Cache
Description:
Create a caching system for language translations.
Practice using: Map methods with complex keys/values

Required Functions:
1. addTranslation(fromLang, toLang, word, translation)
2. getTranslation(fromLang, toLang, word)
3. removeTranslation(fromLang, toLang, word)
4. clearLanguage(language)
5. getTranslationCount()

Test Cases:
const translator = new TranslationCache();
translator.addTranslation("en", "es", "hello", "hola");
translator.addTranslation("en", "fr", "hello", "bonjour");
console.log(translator.getTranslation("en", "es", "hello")); // "hola"
console.log(translator.getTranslationCount()); // 2
*/

class TranslationCache {
  constructor() {
    // Using Map with composite key: `${fromLang}-${toLang}-${word}`
    this.translations = new Map();
  }

  // Implementation here
}

/*
Exercise 4: Event Tracker
Description:
Create a system that tracks event occurrences and their timestamps.
Practice using: Map with arrays as values

Required Functions:
1. logEvent(eventName, timestamp) - records event occurrence
2. getEventCount(eventName) - gets number of times event occurred
3. getLastOccurrence(eventName) - gets most recent timestamp
4. getEventsBetween(start, end) - gets all events in time range
5. clearEventHistory(eventName) - removes all occurrences of an event

Test Cases:
const tracker = new EventTracker();
tracker.logEvent("login", Date.now());
tracker.logEvent("login", Date.now() + 1000);
console.log(tracker.getEventCount("login")); // 2
console.log(tracker.getLastOccurrence("login")); // most recent timestamp
*/

class EventTracker {
  constructor() {
    this.events = new Map(); // eventName -> [timestamps]
  }

  // Implementation here
}
