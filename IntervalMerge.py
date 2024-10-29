from typing import List

class Solution:
    def merge(self, ls: List[List[int]]) -> List[List[int]]:
        ans=[]
        n=len(ls)

        ls.sort(key=lambda x:x[0])
        for i in range(n):
            start,end= ls[i][0],ls[i][1]
            if ans and end <= ans[-1][1]:
                continue
            for j in range(i+1,n):

                if ls[j][0]<=end:
                    end=max(end,ls[j][1])
                else :
                    break
            ans.append([start,end])
        return ans
    def mergeOptimal(self ,ls):
        ls.sort()
        n=len(ls)
        ans=[]
        for i in range(n):
            if not ans or ans[-1][1]<ls[i][0]:
                ans.append(ls[i])
            else:
                ans[-1][1]=max(ans[-1][1],ls[i][1])


