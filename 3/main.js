let accessAllowed;
let name = prompt('Please enter name');
if (name === 'Admin') {
    let password = prompt('Please enter password');

    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if (password === null || password === '') {
        alert('Canceled');
    } else {
        alert('Wrong password');;
    }
}
if (name === '' || name === null) {
    alert('Canceled')
} 
if (name !== 'Admin') {
    alert("I don't know you");
}
