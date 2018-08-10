// const getFirstName = (x) => {
// return x.split(' ')[0];
// };

// const getFirstName = (x) => x.split(' ')[0];

// console.log(getFirstName('milly lee'));


//different examples from app
//cannot use if statements in the templateTwo because reserved for just jsx.  Have to write a function that will return the content to be plugged in
// const user = {
//     name: 'Nat',
//     age: 31,
//     location: 'LA',
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

//example using ternary operator good if you want to do two things
// and operator example - good is you want to do one thing or if exists at all
//example using if statement

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
//         {getLocation(user.location)}
//     </div>
// );

//


const multiplier = {
    numbers: [1,4,7,9],
    multiplyBy: 8,
    multiply() {
        return multiplier.numbers.map((num) => multiplier.multiplyBy * num);
    }

}

console.log(multiplier.multiply());