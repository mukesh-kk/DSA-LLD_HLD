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
            if sum in  mp:
                longest =max(longest,i-mp[sum-k])
            else:
                mp[sum]=i
    
    return longest
        