# Construct complex objects step-by-step
#It separates the construction of a complex object from its
#  representation so that the same construction process can create 
# different representations.


class Computer:
    def __init__(self):
        self.cpu = None
        self.ram = None
        self.storage = None
        self.gpu = None 
    
    def __str__(self):
        return f'This pc has {self.cpu} CPU, {self.ram} RAM, {self.storage} Storage and {self.gpu} GPU'
    
class PCBuilder:
    def __init__(self):
        self.computer = Computer()

    def add_cpu(self,cpu):
        self.computer.cpu = cpu
        return self
    def add_ram(self,ram):
        self.computer.ram = ram
        return self
    def add_storage(self,storage):
        self.computer.storage = storage
        return self
    def add_gpu(self,gpu):
        self.computer.gpu = gpu
        return self

x = PCBuilder() \
    .add_cpu("Intel") \
    .add_ram("16GB") \
    .add_storage("1TB")\
    .add_gpu("NVIDIA") \
    .computer

print(x)
