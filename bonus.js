const squaresContainer = document.getElementById('squares-container')

let normalBeforeStyle = '<div class="col"><div class="square normal-square">';
let normalAfterStyle = '</div></div>';
let fizzStyle = '<div class="col"><div class="square normal-square fizz">Fizz</div></div>';
let buzzStyle = '<div class="col"><div class="square normal-square buzz">Buzz</div></div>';
let fizzBuzzStyle = '<div class="col"><div class="square normal-square fizz-buzz">FizzBuzz</div></div>';

for (let i = 1; i <= 100; i++) {
    setTimeout(function() {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz');
            squaresContainer.innerHTML += fizzBuzzStyle;
        } else if (i % 3 === 0 ) {
            console.log('Fizz');
            squaresContainer.innerHTML += fizzStyle;
        } else if (i % 5 === 0){
            console.log('Buzz')
            squaresContainer.innerHTML += buzzStyle;
        } else {
            squaresContainer.innerHTML += normalBeforeStyle + i + normalAfterStyle;
            console.log(i);
        }
        }, 50 * i)
}

