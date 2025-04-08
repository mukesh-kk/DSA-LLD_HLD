# The Abstract Factory Design Pattern is a creational design pattern that provides 
# an interface for creating families of related or dependent objects 
# without specifying their concrete classes. 



# Abstract Product

from abc import ABC,abstractmethod
class Button(ABC):
    @abstractmethod
    def on_press(self):
        pass
    @abstractmethod
    def on_release(self):
        pass

class Checkbox(ABC):
    @abstractmethod
    def on_check(self):
        pass
    @abstractmethod
    def on_uncheck(self):
        pass

# Concrete Products
class WindowsButton(Button):
    def on_press(self):
        print("Windows Button Pressed")
    def on_release(self):
        print("Windows Button Released")
class MacButton(Button):
    def on_press(self):
        print("Mac Button Pressed")
    def on_release(self):
        print("Mac Button Released")
class WindowsCheckbox(Checkbox):
    def on_check(self):
        print("Windows Checkbox Checked")
    def on_uncheck(self):
        print("Windows Checkbox Unchecked")
class MacCheckbox(Checkbox):
    def on_check(self):
        print("Mac Checkbox Checked")
    def on_uncheck(self):
        print("Mac Checkbox Unchecked")

# Abstract Factory
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass
    @abstractmethod
    def create_checkbox(self) -> Checkbox:
        pass
# Concrete factory

class WindowsFactory(GUIFactory):
    def create_button(self) -> Button:
        return WindowsButton()
    def create_checkbox(self) -> Checkbox:
        return WindowsCheckbox()
class MacFactory(GUIFactory):
    def create_button(self):
        return MacButton()
    def create_checkbox(self):
        return MacCheckbox()
    
# client code

def client_code(factory: GUIFactory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()

    button.on_press()
    button.on_release()
    checkbox.on_check()
    checkbox.on_uncheck()