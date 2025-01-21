class MaxHeap:
    def __init__(self):
        self.heap = []
    def heapify_down(self,index):
        n=len(self.heap)
        left = 2 * index + 1
        right=2*index+2
        largest=index

        if left <n and self.heap[left]>self.heap[largest]:
            largest = left
        if  right<n and self.heap[right]>self.heap[largest]:
            largest=right
        if largest!=index:
            self.heap[index],self.heap[largest]=self.heap[largest],self.heap[index]
            self.heapify_down(largest)
        
    def heapify_up(self,index):
        parent = (index - 1) // 2
        if index and self.heap[parent] < self.heap[index]:
            self.heap[parent], self.heap[index] = self.heap[index], self.heap[parent]
            self.heapify_up(parent)
    def insert(self, val):
        self.heap.append(val)
        self.heapify_up(len(self.heap)-1)
    def delete(self):
        if not  self.heap:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        root = self.heap[0]
        self.heap[0]=self.heap[len(self.heap)-1]
        self.heap.pop()
        self.heapify_down(0)
        return root
    def size(self):
        return len(self.heap)
    def get(self):
        return self.heap[0]

arr=[1,5,10,45,60,3,10]

mp= MaxHeap()
for ele in arr:
    mp.insert(ele)
while mp.size():
    print(mp.delete())
