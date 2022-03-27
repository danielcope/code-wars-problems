# Description:
# Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

# Examples
# remove("Hi!") == = "Hi"
# remove("Hi!!!") == = "Hi!!"
# remove("!Hi") == = "!Hi"
# remove("!Hi!") == = "!Hi"
# remove("Hi! Hi!") == = "Hi! Hi"
# remove("Hi") == = "Hi"


# -------------------------

# def remove(str):
#     result = [x for x in str]

#     if len(result) > 0:
#         if result[len(result) - 1] == "!":
#             result.pop()

#     return "".join(result)

# ------------------------

def remove(s):
    return s[:-1] if s.endswith("!") else s


print(remove("Hi!"))

print(len("rawr"))
