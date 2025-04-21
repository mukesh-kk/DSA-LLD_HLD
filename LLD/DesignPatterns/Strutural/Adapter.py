# The Adapter Pattern allows objects with
#  incompatible interfaces to work together.

# Think of it like a power plug adapter —
#  it lets a device with a European plug work in an Indian socket.
from typing import Optional
class LegacyPaymentSystem:
    def pay_with_legacy(self, amount):
        print(f"Paid {amount} using Legacy Payment System")

class NewPaymentSystem:
    def pay(self, amount):
        print(f"Paid {amount} using New Payment System")


class PaymentAdapter:
    def __init__(self, legacy_payment_system: Optional[LegacyPaymentSystem]):
        self.legacy_payment_system = legacy_payment_system
    def pay(self, amount):
        
        if not self.legacy_payment_system:
            NewPaymentSystem().pay(amount)
        else:
            self.legacy_payment_system.pay_with_legacy(amount)



# Usage
legacy_payment_system = LegacyPaymentSystem()
adapter = PaymentAdapter(legacy_payment_system)
adapter.pay(100)
adapter2 = PaymentAdapter(None)
adapter2.pay(200)   