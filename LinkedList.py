#pylint: disable-all
class Node:
    def __init__(self,data):
        self.data=data
        self.next=None

class LinkedList:
    def __init__(self):
        self.head=None
    def append(self,data):
        new_node= Node(data)
        if not self.head:
            self.head=new_node
            return
        
        p=self.head
        while p.next:
            p=p.next
        
        p.next=new_node

    def display(self):
        p=self.head
        while p:
            print(p.data,end='->')
            p=p.next
        
        print('None')


ll=LinkedList()
ll.append(10)
ll.append(11)
ll.append(12)
ll.append(15)
ll.append(20)
ll.display()