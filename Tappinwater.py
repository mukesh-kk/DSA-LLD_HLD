# Program to Trappign Water 
def brute_force(arr):
    ans=0
    for i in range(n):
        left_max=max(arr[:i],default=arr[0])
        right_max=max(arr[i+1:],default=arr[len(arr)-1])

        cur=min(left_max,right_max)-arr[i]
        if cur>0:
            ans+=cur
    return ans
# using  prefix max suffix max
def  optimal1(arr):
    n=len(arr)
    left_max=[0]*n
    right_max=[]*n
    left_max[0]=arr[0]
    for i in range(1,n):
        left_max[i]=max(left_max[i-1],arr[i])
    right_max[n-1]=arr[n-1]
    for i in range(n-2,-1,-1):
        right_max[i]=max(arr[i],right_max[i+1])
    ans=0
    for i in range(n):
        cur=min(left_max[i],right_max[i])-arr[i]
        if cur >0:
            ans+=cur
    return ans