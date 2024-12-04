// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student variables
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco'
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderStudentsTable() {
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  // Header cells
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  headerFirstName.style.border = '1px solid black';
  headerFirstName.style.padding = '8px';
  
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerLocation.style.border = '1px solid black';
  headerLocation.style.padding = '8px';

  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');

  // Render each student
  studentsList.forEach(student => {
      const row = document.createElement('tr');
      
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      firstNameCell.style.border = '1px solid black';
      firstNameCell.style.padding = '8px';
      
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      locationCell.style.border = '1px solid black';
      locationCell.style.padding = '8px';

      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Add table to the document body
  document.body.appendChild(table);
}

// Render the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderStudentsTable);
