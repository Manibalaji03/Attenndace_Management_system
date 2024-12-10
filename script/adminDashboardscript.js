document.addEventListener('DOMContentLoaded', () => {
    const pendingAttendanceContainer = document.getElementById('pendingAttendanceContainer');

    // Load pending attendance
    const loadPendingAttendance = () => {
        const pending = JSON.parse(localStorage.getItem('pendingAttendance')) || [];
        pendingAttendanceContainer.innerHTML = '';
        pending.forEach((date, index) => {
            const div = document.createElement('div');
            div.style.margin = '10px 0';
            div.textContent = `Pending: ${date}`;

            // Approve Button
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Approve';
            approveButton.addEventListener('click', () => {
                let approved = JSON.parse(localStorage.getItem('approvedAttendance')) || [];
                approved.push(date);
                localStorage.setItem('approvedAttendance', JSON.stringify(approved));

                // Remove from pending
                let pending = JSON.parse(localStorage.getItem('pendingAttendance')) || [];
                pending.splice(index, 1);
                localStorage.setItem('pendingAttendance', JSON.stringify(pending));

                loadPendingAttendance();
                alert(`Attendance for ${date} approved.`);
            });

            // Reject Button
            const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Reject';
            rejectButton.addEventListener('click', () => {
                let pending = JSON.parse(localStorage.getItem('pendingAttendance')) || [];
                pending.splice(index, 1);
                localStorage.setItem('pendingAttendance', JSON.stringify(pending));

                loadPendingAttendance();
                alert(`Attendance for ${date} rejected.`);
            });

            div.appendChild(approveButton);
            div.appendChild(rejectButton);
            pendingAttendanceContainer.appendChild(div);
        });
    };

    loadPendingAttendance();
});
