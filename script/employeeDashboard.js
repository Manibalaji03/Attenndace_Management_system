document.addEventListener('DOMContentLoaded', () => {
    let dateInput = document.getElementById('date');
    let attendanceSubmitButton = document.getElementById('attendanceSubmitButton');
    let previousDaysContainer = document.getElementById('previousDays');
    let attendanceArray = JSON.parse(localStorage.getItem('attendanceArray')) || [];

    let currentDate = new Date();
    let day = currentDate.getDate().toString().padStart(2, '0');
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    dateInput.value = `${day}/${month}/${currentDate.getFullYear()}`;

    // Load existing attendance from localStorage
    function loadAttendance() {
        previousDaysContainer.innerHTML = '';
        attendanceArray.forEach(({ date, status }) => {
            let divTag = document.createElement('div');
            divTag.style = 'display: flex; justify-content: space-between; align-items: center; width: 600px; margin: 1rem auto; padding: 0.5rem; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.251); border-radius: 1rem;';

            let pTag = document.createElement('p');
            pTag.textContent = `Attendance on: ${date} (${status || 'Pending'})`;
            divTag.appendChild(pTag);

            previousDaysContainer.appendChild(divTag);
        });
    }

    loadAttendance();

    attendanceSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let date = dateInput.value;
        if (attendanceArray.find((entry) => entry.date === date)) {
            alert("Attendance is already marked for this date.");
            return;
        }

        attendanceArray.push({ date, status: 'Pending' });
        localStorage.setItem('attendanceArray', JSON.stringify(attendanceArray));
        loadAttendance();
    });
});
