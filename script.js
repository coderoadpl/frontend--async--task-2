const button = document.querySelector('button')

button.addEventListener(
    'click',
    () => {
        setTimeout(() => {
            console.log('You clicked the button')
        }, 2000)
    }
)

console.log('Hi!')

setTimeout(() => {
    console.log('Click the button!')
}, 5000)

console.log('Welcome to CodeRoad!')
