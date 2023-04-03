from account import Account
from car import Car
from UberX import UberX


if __name__ == '__main__':
    print('Hola Mundo')
    UberX = UberX("AMS234", Account("Andres Herrera", "ANDA876"))
    UberX.passenger = 4
    print(vars(UberX))