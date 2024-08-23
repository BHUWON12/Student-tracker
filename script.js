/* scripts.js */

document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    loadStudentList();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));
    
    document.getElementById(sectionId).classList.remove('hidden');
}

function loadDashboardData() {
    // Placeholder data, replace with real API calls
    document.getElementById('activeStudents').innerText = '15 Active Students';
    document.getElementById('recentActivities').innerHTML = `
        <li>John Doe accessed "Mathematics Homework"</li>
        <li>Jane Smith opened "Science Project"</li>
        <li>Mark Brown logged in</li>
    `;
}

function loadStudentList() {
    // Placeholder data, replace with real API calls
    const students = [
        { name: 'John Doe', status: 'Online', lastActivity: '10:00 AM', details: 'Details' },
        { name: 'Jane Smith', status: 'Offline', lastActivity: '9:30 AM', details: 'Details' },
        { name: 'Mark Brown', status: 'Online', lastActivity: '10:05 AM', details: 'Details' },
    ];
    
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; // Clear any existing rows

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.status}</td>
            <td>${student.lastActivity}</td>
            <td><button onclick="showDetails('${student.name}')">${student.details}</button></td>
        `;
        tbody.appendChild(row);
    });
}

function showDetails(name) {
    alert(`Showing details for ${name}`);
    // Implement the logic to show more detailed information about the student's activities
}
