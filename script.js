window.onload = function () {
    updateStatus();
    setInterval(updateStatus, 60000);
};

function updateStatus() {
    fetch('/status.php')
        .then(response => response.json())
        .then(data => {
            const serverStatus = data.serverStatus;
            const statusElement = document.getElementById('status');
            statusElement.innerText = serverStatus;

            if (serverStatus === 'Online') {
                statusElement.style.color = 'green';
            } else {
                statusElement.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
        });
}
