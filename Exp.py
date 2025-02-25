from typing import List
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        k,i,j =m+n-1,m-1,n-1
        if m==0:
            print('entered')
            nums1=[*nums2]
            return
        if n==0:
            return 
        while k>0:
            if nums1[i]<nums2[j]:
                nums1[k]=nums2[j]
                k-=1
                j-=1
            else:
                nums1[k]=nums1[i]
                i-=1
                k-=1
sl=Solution()
sl.merge([0],0,[1],1)
