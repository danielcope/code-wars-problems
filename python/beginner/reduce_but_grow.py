# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

# ---------------------------------------------

def grow(arr_of_nums):
    result = 1

    for ele in arr_of_nums:
        result *= ele

    return result


print(grow([4, 1, 1, 1, 4]))
