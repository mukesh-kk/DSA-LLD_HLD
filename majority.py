""" Final the Majority """
from typing import List

class Majority:
    """
    majority
    """
    def __init__(self):
        pass
    def better(self):
        """ok"""
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
