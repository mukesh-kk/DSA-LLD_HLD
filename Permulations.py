
class Permutations:
    def permutations(self,str,ans=''):
        if len(str)==0:
            print(ans)
            return
        for i in range(len(str)):
            ch=str[i]
            left = str[:i]
            right = str[i+1:]
            self.permutations(left+right,ans+ch)
    def nextPermuatation(self,arr):
        n=len(arr)
        ind=-1
        for i in range(n-2,-1,-1):
            if(arr[i]<arr[i+1]):
                ind=i
                break
        if(ind==-1):
            arr.reverse()
            print(arr)
            return 
        for i in range(n-1,i,-1):
            if(arr[i]>arr[ind]):
                arr[i],arr[ind]=arr[ind],arr[i]
                break
        arr[i+1:]=reversed(arr[i+1:])  
        print(arr)  



pr= Permutations()

pr.nextPermuatation([3,2,1])