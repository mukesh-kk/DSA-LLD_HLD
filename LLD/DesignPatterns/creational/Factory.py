# Create one type of object
# Factory is a class that creates objects
from abc import ABC,abstractmethod
class Evil(ABC):
    @abstractmethod
    def kill(self):
        pass


class Monster(Evil):
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense

    def kill(self):
        print(f"{self.name} is killing")

class Demon(Evil):
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense
    def kill(self):
        print(f"{self.name} is killing")

class Satan(Evil):
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.health = health
        self.attack = attack
        self.defense = defense

    def kill(self):
        print(f"{self.name} is killing")


evil=Monster("Evil", 100, 10, 5)
evil2=Demon("Evil2", 100, 10, 5)



class EvilBuilder:
    def build(self,type):
        if type=="Monster":
            return Monster("Evil", 100, 10, 5)
        elif type=="Demon":
            return Demon("Evil2", 100, 10, 5)
        elif type=="Satan":
            return Satan("Satan", 100, 10, 5)



evil_builder=EvilBuilder()

print(str(evil_builder.build("Monster")))





