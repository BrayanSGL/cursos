import random
countries = ['Col', 'Mex', 'Arg', 'Per', 'Chi']
populations = {country : random.randint(1, 100) for country in countries}
# se puede leer como: para cada pais en la lista de paises, asignale como clave el pais y como valor un numero aleatorio entre 1 y 100
print(populations)

result = {country : population for country, population in populations.items() if population > 50}
# se puede leer como: para cada pais y poblacion en el diccionario de poblaciones, si la poblacion es mayor a 50, asignale como clave el pais y como valor la poblacion
print(result)

text = 'Hola, soy Brayan'
unique = {letter: letter.upper() for letter in text if letter in 'aeiou'}
# se puede leer como: para cada letra en el texto, si la letra esta en la cadena de vocales, asignale como clave la letra y como valor la letra en mayuscula
print(unique)
