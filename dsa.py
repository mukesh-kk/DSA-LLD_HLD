from typing import List
class Solution:
    def isPalindrome(self,s:str):
        end=len(s)-1
        start=0
        while (start<=end):
            if s[start]!=s[end]:
                return False
            start+=1
            end-=1
        return True

    def partition(self, s: str) -> List[List[str]]:

        path=[]
        ans=[]
        def helper(ind):
            if ind==len(s):
                ans.append(path[:])
                return

            for i in range(ind,len(s)):
                print(s[ind:i+1],self.isPalindrome(s[ind:i+1]))
                if self.isPalindrome(s[ind:i+1]):
                    path.append(s[ind:i+1])
                    helper(i+1)
                    path.pop()
        return ans


# obj=Solution()
# print(obj.partition('aabb'))
res=[]
def permutations(s,ans=''):
    if(len(s)==0):
        res.append(ans[:])
        return
    for i in range(len(s)):
        if(i>0 and s[i]==s[i-1]):
            continue
        ch=s[i]
        remaining_string=s[:i]+s[i+1:]
        permutations(remaining_string,ans+ch)


# permutations('aabc')
# print(res)

board=[ ['.' for j in range(5)] for i in range(5)]
print(len([[0]*3]*4))