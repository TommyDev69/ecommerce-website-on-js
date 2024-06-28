function status() {
    let selection = document.getElementById('namee');
    let manager = document.getElementById('opt2');
    let attendee = document.getElementById('opt3');

    manager.classList.add('manager');
    attendee.classList.add('attendee');


    var result = selection.value;
    if (result === 'option2') {
        manager.classList.remove('manager');

    } else {
        if (result === 'option3') {
            attendee.classList.remove('attendee');


        }

    }
}