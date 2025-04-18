# The Strategy Pattern defines a family of algorithms, 
# encapsulates each one, and makes them interchangeable.
#  It allows the algorithm to vary independently from the clients that use it.

from abc import ABC ,abstractmethod
class PaymentStrategy(ABC):
    def pay(self, amount):
        pass

class CreditcardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid {amount} using Credit Card")

class PaypalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paid {amount} using Paypal")



#context 

class ShoppingCart:
    def __init__(self, paymentStategy:PaymentStrategy):
        self.paymentStategy=paymentStategy
        self.items=[]

    def add_items(self,amount):
        self.item.append(amount)
    def checkout(self):
        amount=sum(self.items)

        self.paymentStategy.pay(amount)



# Usage
cart = ShoppingCart(CreditcardPayment())
cart.add_item(500)
cart.add_item(300)
cart.checkout()

# Switch strategy
cart.payment_strategy = PaymentStrategy()
cart.checkout()
