set_countries = {'col', 'mex', 'bol'}
size = len(set_countries)
print(size)

print('col' in set_countries)
print('usa' in set_countries)


#add
set_countries.add('usa')
print(set_countries)

#update
set_countries.update({'usa', 'peru'})
print(set_countries)

#remove
set_countries.remove('usa')
print(set_countries)

#discard
set_countries.discard('usas')
print(set_countries)

#clear
set_countries.clear()
print(set_countries)

#pop
set_countries = {'col', 'mex', 'bol'}
set_countries.pop()
print(set_countries)
