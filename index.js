function addingEventListener(event) {
    console.log('Button clicked!');
    const input = document.getElementById('button');
    function clickAlert() {
        alert('I was clicked')
    }
    
    input.addEventListener('click', clickAlert)
}

// const button = document.getElementById('myButton');

// button.addEventListener('click', handleClick);