class Car:
    id = int
    license = str
    driver = str
    passenger = int
    
    def __init__(self, license, driver):
        self.license = license
        self.driver = driver
        self.__passenger = 4 ## con __ es privado son dos guiones bajos con un solo guion bajo es protegido

    def printDataCar(self):
        print("License: " + self.license)

    def getPassenger(self):
        return self.__passenger
    
    def setPassenger(self, passenger):
        if passenger == 4:
            self.__passenger = passenger
        else:
            print("Necesitas asignar 4 pasajeros")

