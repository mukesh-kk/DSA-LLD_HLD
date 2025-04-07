#Objects of a superclass should be replaceable with objects of its subclasses 
# without breaking the app.
# INheritnace in such a way that super class is replaceable by sub class

class Rectangle:
    def set_height(self,h):
        self.h=h
        return self
    def set_width(self,w):
        self.w=w
        return self
    def get_area(self):
        return self.h * self.w

class Square(Rectangle) :
    def set_height(self,h): # sets both ehight and width to h
        self.h=self.w=h
        return self
    def set_width(self,w):  # sets both ehight and width to h
        self.h=self.w=w
        return self

# here square cannot be used a rectanagle,so this is bad design
print(Square().set_height(5).set_width(6).get_area())

# Solution ? Use have generic properties  and behaviour in parent class 
#  Each class defines its own special behavior

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def get_area(self):
        pass

class Rectangle(Shape):
    def __init__(self):
        self.h = 0
        self.w = 0

    def set_height(self, h):
        self.h = h
        return self

    def set_width(self, w):
        self.w = w
        return self

    def get_area(self):
        return self.h * self.w

class Square(Shape):
    def __init__(self):
        self.side = 0

    def set_side(self, s):
        self.side = s
        return self

    def get_area(self):
        return self.side * self.side
