
from typing import List
class Pascal :
    def nth_pascal(self, i,j):
        if j<=0:
            return 1
        ans=1
        for k in range (1,j+1):
            ans*=(i-k+1)
            ans//=k

        return ans
    def genRow(self,n):
        ansRow=[1]
        ans=1
        for  col in range (1,n):
            ans*=(n-col)
            ans//=col
            ansRow.append(ans)
        return ansRow

    def generate(self, numRows: int) -> List[List[int]]:
        ans =[]
        for n in range(1,numRows+1):
            ans.append(self.genRow(n))
        return ans
    

pas= Pascal()
print(pas.nth_pascal(2,0))
