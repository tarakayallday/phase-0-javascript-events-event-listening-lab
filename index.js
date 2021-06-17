function addingEventListener() {
    const input = document.getElementById('input');
    const main = document.getElementById('main');
    const three = document.getElementById("three");

    function clickAlert() {
        alert('I was clicked!');
    }
    function mainAlert() {
        alert('Hello beautiful!');
    }

    input.addEventListener('click', clickAlert);
    main.addEventListener('click', mainAlert); 
    three.addEventListener('click', clickAlert);
}
addingEventListener();

