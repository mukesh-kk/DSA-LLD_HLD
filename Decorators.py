"""
Functional Decorators:
Takes  function as argument and returns function

"""
from numpy.lib.function_base import kaiser


def logger(fun):
    def wrapper (*args,**kwargs):
        print(f"{fun.__name__} called with args : {args} ,kwargs: {kwargs}")
        fun(*args)
    return wrapper


def repeat(n):
    def decorator(fun):
        def wrapper(*args,**kwargs):
            for i in range(n):
                fun(args,**kwargs)
        return wrapper
    return decorator


@repeat(5)
@logger
def printer(whatever,name='a'):
    print(whatever)

printer('= >Mukesh ',name='m')






"""
Class Decorators :
Takes class as  argument and modify __init__ and other properties and return modified class

"""
# normal decorator
def decorate_logs(cls):
    original_init = cls.__init__
    def wrapper(self,*args,**kwargs):
        print( f"Created {cls.__name__} with args : {args} and kwargs: {kwargs}")
        original_init(self,*args,**kwargs)

    cls.__init__= wrapper
    return cls

# decorator factory
def limit_instance(n):
    def decorator(cls):
        original= cls.__init__
        cls._count =0
        def wrapper(self,*args,**kwargs):
            if cls._count>=n:
                raise  Exception(f"not more than {n}'")
            else:
                original(self,*args,**kwargs)
                cls._count +=1
        cls.__init__=wrapper
        return  cls
    return decorator


@limit_instance(2)
@decorate_logs
class Animal:
    def __init__(self,name):
        self.name=name
#
# try:
#     Animal('Tommy')
#     Animal('Tommy1')
#     Animal('Tommy2')
#     Animal('Tommy3')
# except Exception as e:
#     print(e)
