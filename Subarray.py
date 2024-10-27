from typing import  List
import sys



def sub_sum_max(nums: List[int]) -> int:
    max_sum = -sys.maxsize - 1
    n = len(nums)
    temp_sum = 0

    for i in range(n):
        temp_sum += nums[i]

        if temp_sum > max_sum:
            max_sum = temp_sum

        if temp_sum < 0:
            temp_sum = 0

    return max_sum


class Solution:
    pass
