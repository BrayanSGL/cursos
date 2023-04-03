from account import Account

class Driver(Account):
    def __init__(self, name, document, car, license):
        super().__init__(name, document)
        self.car = car
        self.license = license