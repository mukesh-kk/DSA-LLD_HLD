#pylint: disable-all
from typing import int,List
def triplet(n: int, A: List[int]) -> List[List[int]]:

    ans=[]
    A.sort()
    for i in range(n):
        if i != 0 and A[i] == A[i - 1]:
            continue # makes Ai unique
        j=i+1
        k=n-1
        while (j<k):
            sum= A[i]+A[j]+A[k]
            if sum<0:
                j+=1
            elif sum>0:
                k-=1
            else:
                ans.append([A[i],A[j],A[k]])
                j+=1
                k-=1
                while j<k and A[j]==A[j-1]:
                    j+=1 #Makes Aj unique
                while j<k and A[k]==A[k+1]:
                    k-=1 #makes Ak unique

    return ans
for i in range(10,-1,-1):
    print(i)