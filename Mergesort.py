class MergeSort:
    def __init__(self):
        pass
    def merge(self,arr,low,mid,high,cnt):
        count=0
        i=low
        j=mid+1
        temp=[]
        while i<=mid and j<=high:
            if arr[i]<=arr[j]:
                temp.append(arr[i])
                i+=1
                
            else:
                temp.append(arr[j])
                count+=(mid-i+1)
                self.count+=(mid-i+1)
                cnt+=(mid-i+1)
                j+=1
        while i<=mid:
            temp.append(arr[i])
            i+=1
        while j<=high:
            temp.append(arr[j])
            j+=1
        for i in range(low,high+1):
            arr[i]=temp[i-low]
        
        return count

    def merge_sort(self,arr,low,high,cnt):
        count =0
        if low>=high:
            return 0
        mid=(low+high)//2
        count+=self.merge_sort(arr,low,mid,cnt)
        count+=self.merge_sort(arr,mid+1,high,cnt)
        count+=self.merge(arr,low,mid,high,cnt)
        return count

 
    def sort(self,arr):
        self.count=0
        cnt=0
        n=len(arr)
        count=self.merge_sort(arr,0,n-1,cnt)
        return count,self.count, arr,cnt
print(MergeSort().sort([94,3,3,-9,2,1]))
