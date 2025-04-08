# Clients should not be forced to depend on interfaces they do not use.
# Don’t make a class implement things it doesn't need. Break big
# interfaces into smaller, more specific ones

from abc import ABC, abstractmethod

class WorkerInterface(ABC):
    @abstractmethod
    def work(self):
        pass

    @abstractmethod
    def eat(self):
        pass

    @abstractmethod
    def sleep(self):
        pass

class Human(WorkerInterface):
    def work(self):
        print("Human working")

    def eat(self):
        print("Human eating")

    def sleep(self):
        print("Human sleeping")

# ✅ Works fine
h = Human()
h.work()


class Robot(WorkerInterface):
    def work(self):
        print("Robot working")

    def eat(self):  #dummy to keep compiler happy
        pass

    def sleep(self): #dummy to keep compiler happy
        pass


# SOlutiion ?--------------->
from abc import ABC, abstractmethod

class Workable(ABC):
    @abstractmethod
    def work(self): pass

class Eatable(ABC):
    @abstractmethod
    def eat(self): pass

class Sleepable(ABC):
    @abstractmethod
    def sleep(self): pass

class Human(Workable, Eatable, Sleepable):
    def work(self):
        print("👨 Human working")

    def eat(self):
        print("🍽️ Human eating")

    def sleep(self):
        print("💤 Human sleeping")

class Robot(Workable):
    def work(self):
        print("🤖 Robot working")



# ISP:	Split big interface into 3 smaller ones (Workable, Eatable, Sleepable)
# Benefit	No class is forced to implement methods it doesn't need