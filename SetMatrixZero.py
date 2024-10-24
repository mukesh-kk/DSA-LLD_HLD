from typing import List
'''
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

'''

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        m=len(matrix)
        n=len(matrix[0])
        
        def setNegative1(i,j):
            for k in range(0,n):
                if(matrix[i][k]!=0):
                    matrix[i][k]=-10
            for l in range (0 ,m):
                if(matrix[l][j]!=0):
                    matrix[l][j]=-10
                            
        for i in range (0,m):
            for j in range (0,n):
                if(matrix[i][j] ==0):
                    setNegative1(i,j)
        for i in range (0,m):
            for j in range (0,n):
                if(matrix[i][j] ==-10):
                    matrix[i][j]=0                    


solution = Solution()
matrix =[
    [1,0,0,1],
    [1,1,1,1],
    [1,0,1,1]
]

solution.setZeroes(matrix)
for row in matrix:
    print(row)