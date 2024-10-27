import sys


def max_profit(nums):
    profit=0
    min_buy=sys.maxsize
    for i in range(len(nums)):
        min_buy=min(nums[i],min_buy)
        profit=max(profit,nums[i]-min_buy)
    return profit

print(max_profit([2,2,1,7,13,1,11,6]))