# pylint: disable=all
# pylint: disable=all
from typing import *

def getLongestKSumSubarrayLength(arr : List[int],k:int) -> int:
    # Write your code here.
    mp={}
    longest =0
    sum=0
    for i in range(len(arr)):
        sum+=arr[i]
        if sum-k==0:
            longest=i+1
        else:
            if sum-k in  mp:
                longest =max(longest,i-mp[sum-k])
            else:
                mp[sum]=i
    
    return longest

    #   xor =K 
def subarraysWithSumK(a: [int], b: int) -> int:
    xr=0
    cnt=0
    mp={}
    mp[0]=1
    for i in range(len(a)):
        xr^=a[i]

        removed=xr^b

        if removed in mp:
            cnt+=mp[removed]
        
        if xr in mp:
            mp[xr]+=1
        else:
            mp[xr]=1
    return cnt

