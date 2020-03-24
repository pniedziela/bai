
title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


firstAdress = title + ' ' + name + ' ' +  surname + '\n'  + 'ul. ' + street +
    '\n' + zip + ' ' + city + '\n' + country.toUpperCase();

console.log("nieformatowane: \n");
console.log(firstAdress);
console.log("formatowane: \n");
console.log("%s %s %s \nul. %s \n%s %s \n%s", title, name, surname, street, city, zip, country.toUpperCase());



/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
