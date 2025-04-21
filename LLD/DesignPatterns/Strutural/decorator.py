#  adding behavior to a class without modifying it

def log_methods(cls):
    class Wrapped(cls):
        def __getattribute__(self, name):
            attr = super().__getattribute__(name)
            if callable(attr) and not name.startswith("__"):
                def logged(*args, **kwargs):
                    print(f"[LOG] Calling {name} with {args} {kwargs}")
                    return attr(*args, **kwargs)
                return logged
            return attr
    return Wrapped


@log_methods
class Calculator:
    def add(self, a, b):
        return a + b

    def mul(self, a, b):
        return a * b
    
    


