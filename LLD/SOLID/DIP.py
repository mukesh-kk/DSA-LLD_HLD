# 🔥 Dependency Inversion Principle (DIP)
# High-level modules should not depend on low-level modules.
# Both should depend on abstractions (interfaces).
# Also:
# Abstractions should not depend on details.
# Details should depend on abstractions
# 🧠 In simple words:
# Don’t make your main business logic (high-level code) tightly 
# coupled to low-level details (like specific database, API, logger, etc).
# Instead, both should depend on a common interface or abstract class.


class MySQL:
    def save(self,data):
        print('Saved data')

class UserService:
    def _init__(self):
        self.db=MySQL() # tightly coupled to MySQL
    def  register_user(self,user):
        self.db.save(user)


# If you want to use MongoDB or PostgreSQL later — 
# you’ll have to change UserService. That’s bad design

# Solution 
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def save(self, data): pass

class MySQLDatabase(Database):
    def save(self, data):
        print(f"Saving {data} to MySQL")

class MongoDatabase(Database):
    def save(self, data):
        print(f"Saving {data} to MongoDB")


class UserService:
    def __init__(self, db: Database):  # depends on abstraction
        self.db = db

    def register_user(self, name):
        self.db.save(name)

# Inject the dependency
service = UserService(MySQLDatabase())
service.register_user("Mukesh")

# Easily switch database
service = UserService(MongoDatabase())
service.register_user("Laddo 💛")
