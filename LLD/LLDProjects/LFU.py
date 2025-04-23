class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.freq = 1
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def is_empty(self):
        return self.head.next == self.tail

    def add_to_head(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def pop_tail(self):
        if self.is_empty():
            return None
        tail_node = self.tail.prev
        self.remove(tail_node)
        return tail_node

class LFUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.key_table = {}
        self.freq_table = {}
        self.min_freq = 0

    def get(self, key: int) -> int:
        if key not in self.key_table:
            return -1
        node = self.key_table[key]
        self._update_freq(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        if self.capacity == 0:
            return
        if key in self.key_table:
            node = self.key_table[key]
            node.value = value
            self._update_freq(node)
        else:
            if len(self.key_table) >= self.capacity:
                # evict LRU from the least freq list
                lfu_list = self.freq_table[self.min_freq]
                evicted = lfu_list.pop_tail()
                if evicted:
                    del self.key_table[evicted.key]

            new_node = Node(key, value)
            self.key_table[key] = new_node
            self.min_freq = 1
            if 1 not in self.freq_table:
                self.freq_table[1] = DoublyLinkedList()
            self.freq_table[1].add_to_head(new_node)

    def _update_freq(self, node):
        freq = node.freq
        self.freq_table[freq].remove(node)
        if self.freq_table[freq].is_empty():
            del self.freq_table[freq]
            if freq == self.min_freq:
                self.min_freq += 1

        node.freq += 1
        if node.freq not in self.freq_table:
            self.freq_table[node.freq] = DoublyLinkedList()
        self.freq_table[node.freq].add_to_head(node)


# key map {}
# fmap
#  1->[1,2,3]
#  2->[4,5,6]
# 
# 
