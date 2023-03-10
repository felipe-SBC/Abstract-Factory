//Interface da fábrica abstrata
class AnimalFactory{
    createAnimal(){
        throw new Error("O método createAnimal deve ser implementado.");
    }
}

//Fábricas concretas
class DogFactory extends AnimalFactory{
    createAnimal(){
        return new Dog();
    }
}

class CatFactory extends AnimalFactory{
    createAnimal(){
        return new Cat();
    }
}

class Animal {
    makeSound(){
        throw new Error("O método makeSound deve ser implementado")
    }
}

//Produtos concretos 
class Dog extends Animal{
    makeSound(){
        return "Woof!"
    }
}

class Cat extends Animal{
    makeSound(){
        return "Meow"
    }
}

//Criação da fábrica concreta de cachorro e do cachorro 
const dogFactory = new DogFactory();
const dog = dogFactory.createAnimal();
console.log(dog.makeSound()); //"Woof!"

//Criação da fábrica concreta de gato e do gato
const catFactory = new CatFactory();
const cat = catFactory.createAnimal();
console.log(cat.makeSound()); //"Meow!"