// Configuration
const API_URL = 'http://localhost:3005/v1/students/bulk-create';

// Student data - modify this array with your students
const studentsData = [
  {
    phone_number: '+2349038009031',
    mat_number: 'ENG20023111',
    level: '500',
  },
];

// Upload function
async function uploadStudents() {
  try {
    console.log('Starting students upload...');
    console.log(`Uploading ${studentsData.length} students...`);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        students: studentsData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    console.log('Students uploaded successfully!');
    console.log('Response:', result);
  } catch (error) {
    console.error('Error uploading students:', error.message);
    process.exit(1);
  }
}

// Run the upload
uploadStudents();
