set_countries = {'col', 'mex', 'bol'}
print(set_countries)
print(type(set_countries))

set_numbers = {1, 2, 3, 4, 5}
print(set_numbers)
print(type(set_numbers))

set_types = {1, 'col', 2.5, True}
print(set_types)
print(type(set_types))

set_from_string = set('hello')
print(set_from_string)

set_from_tuple = set((1, 2, 3, 4, 5))
print(set_from_tuple)

numbers = [1,2,3,4]
set_numbers = set(numbers)
print(set_numbers)
unique_numbers = list(set_numbers)
print(unique_numbers)