class AlwaysTrue:
    # This is method overloading in python. It's an equality operator in Python
    # which means that anything that uses the equlity will always return True since
    # we overloaded it.
    def __eq__(self, other):
        return True

def equals():
    # return the class the we created that always return True
    return AlwaysTrue()

# The main driver
if __name__ == '__main__':
    print(equals() == 0)
    print(equals() == [])
    print(equals() == (lambda: 1))
    print(equals() == None)