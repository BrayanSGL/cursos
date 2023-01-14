set_a = {'col', 'mex', 'bol'}
set_b = {'pe','bol'}

#union
set_c = set_a.union(set_b)
print(set_c)
print(set_a | set_b)

#intersection
set_c = set_a.intersection(set_b)
print(set_c)
print(set_a & set_b)

#difference
set_c = set_a.difference(set_b)
print(set_c)
print(set_a - set_b)

#symmetric difference
set_c = set_a.symmetric_difference(set_b)
print(set_c)
print(set_a ^ set_b)

#subset es un subconjunto de otro conjunto (todos los elementos del conjunto A estan en el conjunto B)
print(set_a.issubset(set_b))
print(set_a <= set_b)

#superset es un superconjunto de otro conjunto (todos los elementos del conjunto B estan en el conjunto A)
print(set_a.issuperset(set_b))
print(set_a >= set_b)
