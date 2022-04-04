# Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

# Examples
# n = 0  ==> [1]        # [2^0]
# n = 1  ==> [1, 2]     # [2^0, 2^1]
# n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

# ---------------------------------------

def powers_of_two(n):
    result = []

    for ele in range(0, n + 1):
        result.append(pow(2, ele))

    return result


print(powers_of_two(0))
print(powers_of_two(1))
print(powers_of_two(2))
print(powers_of_two(3))
