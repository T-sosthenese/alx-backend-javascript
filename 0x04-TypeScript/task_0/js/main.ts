// Creating a student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

// Creating two students based on the above interface
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Sosthene',
    lastName: 'Timi',
    age: 29,
    location: 'Sydney, Australia'
};

// Creating an array of students and assigning it the two students above
const studentList: Student[] = [student1, student2];

// Creating a new table and body
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "CCCCFF";
table.appendChild(tbody);

// For each student in the list, append a new row to the table
studentList.forEach((student: Student): void => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px"

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);