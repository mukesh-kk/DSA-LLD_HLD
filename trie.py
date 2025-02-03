class Node:
    def __init__(self):
        self.letters = [None] * 26  # for 'a' to 'z' (26 letters)
        self.terminal = False  # Flag to mark the end of a word

    def isEnd(self):
        return self.terminal

    def getNext(self, ch):
        return self.letters[ord(ch) - ord('a')]

    def setNext(self, ch, node):
        self.letters[ord(ch) - ord('a')] = node

class Trie:

    def __init__(self):
        self.root = Node()  # Initialize the root node

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            next_node = node.getNext(char)
            if next_node is None:  # If no node for this letter, create one
                next_node = Node()
                node.setNext(char, next_node)
            node = next_node
        node.terminal = True  # Mark the end of the word

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            node = node.getNext(char)
            if node is None:
                return False  # If any character is not found, return False
        return node.isEnd()  # Return True if it's the end of a word

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            node = node.getNext(char)
            if node is None:
                return False  # If any character is not found, return False
        return True  # Return True if the prefix exists
