# Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

def include(arr, item):
    if(item in arr):
        return True

    return False


print(include([1, 2, 3, 4], 3))
print(include([1, 2, 4, 5], 3))
