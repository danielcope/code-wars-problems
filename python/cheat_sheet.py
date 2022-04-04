# -----------------------------------
# defining a variable
# different variables ("string", int, float, array, dictionary)
from __future__ import division
from tokenize import Exponent


rawr = "rawr"
array = ['this', 'is', 'an', 'array']
number = 5
# like JS objects
dictionary = {
    "property": "value",
}

#------------------------------------
# operators
plus = 1 + 1
minus = 1 - 1
multiply = 1 * 1
division = 1 / 1
exponent = 1 ** 1
floordivision = 1 // 1


# -----------------------------------
# list comprehesion
def list_comprehension(str):
    result = [char for char in str]

    return result

# print(list_comprehension("rawr"))

# ---------------------------------
# reversing a str or array


def reverse(str):
    return str[::-1]

# print(reverse("something"))
# print(reverse([1, 2, 3, 4, 5, 6]))

# ---------------------------------------
# for loop with enumerate()
# this allows you to have a reference to the index of the element

def for_enumerate(arr):
    result = []

    for index, ele in enumerate(arr, 0):
        result.append([index, ele])

    return result


print(for_enumerate([1, 2, 3, 4, 5]))
