document.addEventListener('DOMContentLoaded', () => {
    const attendanceForm = document.getElementById('attendanceForm');
    const attendanceDate = document.getElementById('attendanceDate');
    const approvedAttendanceContainer = document.getElementById('approvedAttendance');

    // Pre-fill today's date
    const today = new Date();
    attendanceDate.value = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

    // Load approved attendance
    const loadApprovedAttendance = () => {
        const approved = JSON.parse(localStorage.getItem('approvedAttendance')) || [];
        approvedAttendanceContainer.innerHTML = '';
        approved.forEach(date => {
            const div = document.createElement('div');
            div.textContent = `Approved: ${date}`;
            approvedAttendanceContainer.appendChild(div);
        });
    };
    loadApprovedAttendance();

    // Submit attendance
    attendanceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const date = attendanceDate.value;
        let pendingAttendance = JSON.parse(localStorage.getItem('pendingAttendance')) || [];
        if (!pendingAttendance.includes(date)) {
            pendingAttendance.push(date);
            localStorage.setItem('pendingAttendance', JSON.stringify(pendingAttendance));
            alert('Attendance marked! Waiting for admin approval.');
        } else {
            alert('Attendance for this date is already pending.');
        }
    });
});
