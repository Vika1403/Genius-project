let name = 'Ivan';
let city = 'Kyiv';
city = name;
console.log(city);

console.log(Math.max(10, 20, 15)); choose max number

console.log(Math.random() * (max - min) + min); randon number in diapasone

console.log(message.length); find out message length

console.log(message.toUpperCase()); big letters

let user = {};
user.name = 'Vika';
user.age = '23';
user.city = 'Odesa';
console.log(user);
delete user.city;
user['like flowers'] = true;
console.log(user);

for (key in user) {
    console.log(key);
    comsole.log(user[key]);
}