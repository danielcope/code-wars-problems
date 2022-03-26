# Description:
# Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

# Examples
# remove("Hi!") == = "Hi"
# remove("Hi!!!") == = "Hi!!"
# remove("!Hi") == = "!Hi"
# remove("!Hi!") == = "!Hi"
# remove("Hi! Hi!") == = "Hi! Hi"
# remove("Hi") == = "Hi"
# Note
# Please don't post issue about difficulty or duplicate.


# -------------------------

def remove(str):
    result = []

    for ele in str:
        result.append(ele)

    if str[len(str) - 1] == "!":
        result.pop()

    return "".join(result)


print(remove("Hi!"))
