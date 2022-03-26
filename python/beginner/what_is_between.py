# Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

# For example:

# a = 1
# b = 4
# --> [1, 2, 3, 4]

# ----------------------------

def between(n1, n2):
    result = []

    for ele in range(n1, n2+1):
        result.append(ele)

    return result


print(between(1, 5))
