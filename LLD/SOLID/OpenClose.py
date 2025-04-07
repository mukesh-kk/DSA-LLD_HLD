# Open close : Open for extension Closed for Modification
#You should be able to add new behavior without changing existing code.

class AreaCalculator:
    def calculate_area(self, shape):
        if shape["type"] == "circle":
            return 3.14 * shape["radius"] ** 2
        elif shape["type"] == "rectangle":
            return shape["width"] * shape["height"]


# Solution?---------------->

class AreaCalculator:
    def calculate_area(self,shape):
        return shape.area()
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


# Example 2--------------------------------------------
  
class NotificationSender:
    def send(self, message, type):
        if type == 'email':
            print(f"Sending email: {message}")
        elif type == 'sms':
            print(f"Sending SMS: {message}")
        elif type == 'whatsapp':
            print(f"Sending WhatsApp: {message}")

#solution ----------->
from abc import ABC, abstractmethod

class Animal(ABC):  # Abstract base class
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"




        
