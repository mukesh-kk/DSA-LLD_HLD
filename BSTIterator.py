class Node:
    def __init__(self,data):
        self.left=None
        self.right=None
        self.val=data

class BSTIterator:
    def __init__(self,root,reversed=False):
        self.stack=[]
        self.reverse=reversed
        self.pushAll(root)
    def next(self):
        if self.stack:
            node=self.stack.pop()
            if(self.reversed):
                self.pushAll(node.left)
            else:
                self.pushAll(node.right)
            return node
    def hasNext(self):
        return True if self.stack else False
    def pushAll(self,node):
        while node:
            self.stack.append(node)
            if self.reverse:
                node=node.right
            else:
                node=node.left
class BuildTreeFromArray:
    def __init__(self,arr=[]):
        return self.build(arr,0)
    def build(self,arr,index):
        if index>=len(arr) or arr[index] is None:
            return None
        node=Node(arr[index])
        node.left=self.build(arr,2*index+1)
        node.right=self.build(arr,2*index+2)
        return node
