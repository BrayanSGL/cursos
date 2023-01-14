numbers = []

for element in range(1,11):
    numbers.append(element * 2)

print(numbers)

#list comprehension
numbers_v2 = [element * 2 for element in range(1,11)]
# se puede leer como: para cada elemento en el rango de 1 a 10, multiplicalo por 2
print(numbers_v2)

#list comprehension with condition
numbers_v3 = [element * 2 for element in range(1,11) if element % 2 == 0] 
# se puede leer como: para cada elemento en el rango de 1 a 10, si el elemento es par, multiplicalo por 2
print(numbers_v3)

#list comprehension with condition
numbers_v4 = [element * 2 if element % 2 == 0 else element / 2 for element in range(1,11)]
# se puede leer como: para cada elemento en el rango de 1 a 10, si el elemento es par, multiplicalo por 2, si no, dividelo por 2
print(numbers_v4)
