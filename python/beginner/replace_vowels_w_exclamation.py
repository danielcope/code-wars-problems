# Description:
# Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

# Examples
# replace("Hi!") == = "H!!"
# replace("!Hi! Hi!") == = "!H!! H!!"
# replace("aeiou") == = "!!!!!"
# replace("ABCDE") == = "!BCD!"

# ---------------------------------------------------

# def replace_exclamation(s):
#     result = []

#     for ele in s:
#         if ele == "a" or ele == "e" or ele == "i" or ele == "o" or ele == "u" or ele == "A" or ele == "E" or ele == "I" or ele == "O" or ele == "U":
#             result.append("!")
#         else:
#             result.append(ele)

#     return "".join(result)


def replace_exclamation(s):
    return ''.join("!" if c in "aeiouAEIOU" else c for c in s)


print(replace_exclamation("Hi!"))
