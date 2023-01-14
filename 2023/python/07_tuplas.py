#Tuplas

#Son inmutables, no se pueden modificar
#Se pueden usar como claves en un diccionario
#Se pueden usar como valores en un diccionario
#Se pueden usar como elementos en un conjunto
#Se pueden usar como elementos en una lista
#Se pueden usar como elementos en una tupla
#Se pueden usar como argumentos en una funcion
#Se pueden usar como retorno de una funcion

# Se definen como una lista de elementos separados por comas y encerrados entre parentesis
# tupla = (1, 2, 3, 4, 5)
# print(tupla)

# Para modificar una tupla, se debe convertir en una lista, modificarla y luego convertirla de nuevo en una tupla
tupla = (1, 2, 3, 4, 5)
print(tupla)
tupla = list(tupla)
tupla[0] = 10
tupla = tuple(tupla)
print(tupla)

# Se pueden definir tuplas sin parentesis
tupla = 1, 2, 3, 4, 5
print(tupla)

# Se pueden definir tuplas con un solo elemento
tupla = (1)
print(tupla)
print(type(tupla))

tupla = (1,)
print(tupla)
print(type(tupla))

# Se pueden desempaquetar tuplas
tupla = (1, 2, 3, 4, 5)
a, b, c, d, e = tupla
print(a)
print(b)
print(c)
print(d)
print(e)

# Se pueden usar tuplas para intercambiar valores
a = 10
b = 20
print(a)
print(b)
a, b = b, a
print(a)
print(b)

# Se pueden usar tuplas para retornar multiples valores
def sum_and_sub(a, b):
    return a + b, a - b

    