dict = {}

for i in range(1, 5):
    dict[i] = i*2

print(dict)

#dict comprehension
dict_v2 = {i: i*2 for i in range(1, 5)}
# se puede leer como: para cada elemento en el rango de 1 a 4, asignale como clave el elemento y como valor el elemento multiplicado por 2
print(dict_v2)

#dict comprehension with condition
dict_v3 = {i: i*2 for i in range(1, 5) if i % 2 == 0}
# se puede leer como: para cada elemento en el rango de 1 a 4, si el elemento es par, asignale como clave el elemento y como valor el elemento multiplicado por 2
import random

coutries = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Peru', 'Venezuela']
population = {}
for country in coutries:
    population[country] = random.randint(1, 100)

print(population)

#dict comprehension
population_v2 = {country: random.randint(1, 100) for country in coutries}
print(population_v2)

#unir dos listas
names = ['Juan', 'Pedro', 'Maria', 'Jose']
ages = [random.randint(20, 47) for _ in range(len(names))]
print(list(zip(names, ages)))

new_dict = {name: age for name, age in zip(names, ages)}
# se puede leer como: para cada nombre y edad en la lista zip de nombres y edades, asignale como clave el nombre y como valor la edad
print(new_dict)