""" Find the Majority """
from typing import List

class Majority:
    """
    majority
    """
    def __init__(self):
        pass
    def better(self,arr:List[int]):
        """map"""

        mp={}
        for _,value in enumerate(arr):
            if value in mp:
                mp[value]+=1
            else :
                mp[value]=1
        for _,value in arr.items():
            if mp[value]>len(arr)/2:
                return value
        return -1

    def majority(self,arr:List[int]):
        """ moore's voting """
        count=0
        candidate=arr[0]
        for _,value in enumerate(arr):
            if count==0:
                candidate=value
            if candidate==value:
                count +=1
            else:
                count-=1
        return candidate
