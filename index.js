function toggleSignal(activeSignal) {
    ['red', 'yellow', 'green'].forEach(signal => {
        document.getElementById(`${signal}-signal`).classList.toggle('d-none', signal !== activeSignal);
        document.getElementById(`${signal}-signal-button`).classList.toggle('active', signal == activeSignal);
        document.getElementById(`${signal}-light`).classList.toggle('d-none', signal !== activeSignal);
        document.getElementById(`all`).classList.toggle('d-none', signal !== 'all');
    });

    if (activeSignal == 'red') {
        document.getElementById('traffic-title').classList.remove('text-warning');
        document.getElementById(`traffic-title`).classList.add('text-danger');
        document.getElementById('traffic-title').classList.remove('text-success');
    }
    else if (activeSignal == 'yellow') {
        document.getElementById('traffic-title').classList.add('text-warning');
        document.getElementById(`traffic-title`).classList.remove('text-danger');
        document.getElementById('traffic-title').classList.remove('text-success');    
    }
    else if (activeSignal == 'green') {
        document.getElementById('traffic-title').classList.remove('text-warning');
        document.getElementById(`traffic-title`).classList.remove('text-danger');
        document.getElementById('traffic-title').classList.add('text-success');    
    }
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
