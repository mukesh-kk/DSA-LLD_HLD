import heapq
class Solution:
    def getMedian(self, arr):
        minh=[]
        maxh=[]
        ans=[]
        
        def add(num):
            if len(maxh)==0 or num<-(maxh[0]):
                heapq.heappush(maxh,-num)
            else:
                heapq.heappush(minh,num)
            
            if len(maxh)>len(minh)+1:
                heapq.heappush(minh,-(heapq.heappop(maxh)))
            elif len(maxh)<len(minh):
                heapq.heappush(maxh,-(heapq.heappop(minh)))

        
                
        for i in range(len(arr)):
            
            add(arr[i])
            print(minh,maxh)
            if (i+1) %2==1:
                ans.append(-(maxh[0])/1.0)
            else:
                ans.append((-(maxh[0])+minh[0])/2)
        return ans
    
sol=Solution()
print(sol.getMedian([5, 15, 1, 3, 2, 8]))