# The Observer Pattern defines a one-to-many dependency between objects,
#  so when one object (subject) changes its state,
#  all its dependents (observers) are notified and updated automatically.


from typing import List
from abc import ABC ,abstractmethod

class Observer(ABC):
    def update_youself(self,data):
        pass
class Subject :
    def __init__(self,obs:List[Observer]=[]):
        self.observers=obs

    def subscribe(self,observer:Observer):
        self.observers.append(observer)
    def unsubscribe(self,observer: Observer):
        self.observers.remove(observer)
    def notify(self,data):
        for each_observer in self.observers:
            each_observer.update_youself(data)


class EmailSubScriber(Observer):
    def update_youself(self, data):
        print('Data Email',data)
class SMSSub(Observer):
    def update_youself(self, data):
        print('SMS data',data)

class NewsHouse(Subject):
        def print_new(self,data):
            self.notify(data)


newsHouse=NewsHouse([])

emailsub= EmailSubScriber()
smsSub=SMSSub()

newsHouse.subscribe(emailsub)
newsHouse.subscribe(smsSub)

newsHouse.print_new('Modi dies')

