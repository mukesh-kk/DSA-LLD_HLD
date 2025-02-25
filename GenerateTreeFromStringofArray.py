from collections import deque
class Node:
    def __init__(self,val,left=None,right=None):
        self.left=None,
        self.right=None,
        self.val=val
class Tree:
    def __init__(self):
        self.root=None
    def get_root(self):
        return self.root
    def generate_str_from_tree(self):
        if not self.root:
            return ''
        p=self.root
        s=''
        dq=deque([p])
        while dq:

            node=dq.popleft()
            if not node:
                s+=',#'
            else:
                s+=','+str(node.val)
                dq.append(node.left)
                dq.append(node.right)
        return s

        
    def generrate_from_arr(self,arr):
        '''
         @example
        [1,2,3,'#','#',4,'#','#','#']

        '''
        if not arr:
            self.root=None
            return
        print(arr)
        i=0
        self.root=Node(arr[i])
        dq=deque([self.root])
        i+=1
        while dq:
            node=dq.popleft()
            if arr[i] !='#':
                t=Node(arr[i])
                node.left=t
                dq.append(t)
                
            else:
                node.left=None
            i+=1
            if arr[i]!='#':
                t=Node(arr[i])
                node.right=t
                dq.append(t)
            else:
                node.right=None
            i+=1

    def inorder(self,root:Node,s=''):
        if(root):
            s=self.inorder(root.left,s)
            s+=','+ str(root.val)
            s=self.inorder(root.right,s)
        return s
    def sum(self,root: Node):
        if not root:
            return 0
        return root.val +self.sum(root.left)+self.sum(root.right)
    def sum_param(self,root: Node,sum=0):
        if  root:
            sum=self.sum_param(root.left,sum)
            sum+=root.val
            sum=self.sum_param(root.right,sum)
        return sum

    def count_nodes(self,root: Node):
        if not root:
            return 0
        return 1+ self.count_nodes(root.left)+self.count_nodes(root.right)
        
            

tr=Tree()
tr.generrate_from_arr( [1,2,4,3,'#',5,6,'#','#','#','#','#','#'])
print(tr.sum_param(tr.get_root(),0))
print(tr.count_nodes(tr.get_root()))


        

