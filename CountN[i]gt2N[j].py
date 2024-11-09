#pylint: disable=all
from typing import List
class Solution:
    def count_inversions(self,nums,low,mid,high):
        right=mid+1
        cnt=0
        for i in range(low,mid+1):
            while right<=high and nums[i]> 2*nums[right]:
                right+=1
            cnt+= (right-(mid+1))
        return cnt
    def merge(self,nums,low,mid,high):
        left = low
        right =mid+1
        temp=[]
        k=0
        while left <=mid  and right <=high:
            if nums[left]<=nums[right]:
                temp.append(nums[left])
                left+=1
            else:
                temp.append(nums[right])
                right+=1

        while left <=mid:
            temp.append(nums[left])
            left+=1
        while right<=high:
            temp.append(nums[right])
            right+=1
        for  i in range (low,high+1):
            nums[i]= temp[i-low]
        
    def merge_sort(self,nums,low,high):
        cnt=0
        if low >=high:
            return cnt
        
        mid=(low+high)//2
        cnt+=self.merge_sort(nums,low,mid)
        cnt+=self.merge_sort(nums,mid+1,high)
        cnt+=self.count_inversions(nums,low,mid,high)
        self.merge(nums,low,mid,high)
        
        return cnt

    def reversePairs(self, nums: List[int]) -> int:
        return self.merge_sort(nums,0,len(nums)-1)
        
        