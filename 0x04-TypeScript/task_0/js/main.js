// Creating two students based on the above interface
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Nairobi'
};
var student2 = {
    firstName: 'Sosthene',
    lastName: 'Timi',
    age: 29,
    location: 'Sydney, Australia'
};
// Creating an array of students and assigning it the two students above
var studentList = [student1, student2];
// Creating a new table and body
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "CCCCFF";
table.appendChild(tbody);
// For each student in the list, append a new row to the table
studentList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
// Append the table to the body of the document
document.body.appendChild(table);
