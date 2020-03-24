class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    nameAndSurname(){
        console.log(this.name + ' ' + this.surname.toUpperCase())

    }

    shorts(){
        console.log(this.name.charAt(0).toUpperCase() + '.' + this.surname.charAt(0).toUpperCase() + '.')
    }
}

pszemke = new Person("Przemek", "Niedziela")
pszemke.nameAndSurname()
pszemke.shorts()

janek = new Person("Jan", "Nowak")
janek.nameAndSurname()
janek.shorts()