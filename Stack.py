# Sort Stack : Monotonic Stack

def sort_stack(stack):
    temp_stack=[]
    while stack:
        temp=stack.pop()
        while temp_stack and temp>temp_stack[-1]:
           stack.append(temp_stack.pop()) 
        temp_stack.append(temp)
    while temp_stack:
        stack.append(temp_stack.pop())
    return stack

def sort_stack2(stack):
    if not stack:
        return  stack
    temp=stack.pop()
    sort_stack2(stack)
    rearrange(stack,temp)
    return stack

def rearrange(stack,temp):
    if not stack or temp>=stack[-1]:
        stack.append(temp)
        return 
    if stack:
        t2=stack.pop()
        rearrange(stack,temp)
        stack.append(t2)


print(sort_stack2([2,3,56,610,-1,10]))