function toggleSignal(activeSignal) {
    ['red', 'yellow', 'green'].forEach(signal => {
        document.getElementById(`${signal}-signal`).classList.toggle('d-none', signal !== activeSignal);
        document.getElementById(`${signal}-signal-button`).classList.toggle('active', signal == activeSignal);

    });
}

document.getElementById('red-signal-button').addEventListener('click', function() {
    toggleSignal('red');
});

document.getElementById('yellow-signal-button').addEventListener('click', function() {
    toggleSignal('yellow');
});

document.getElementById('green-signal-button').addEventListener('click', function() {
    toggleSignal('green');
});
