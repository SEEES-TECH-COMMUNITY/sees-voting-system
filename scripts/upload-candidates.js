// Configuration
const API_URL = 'http://localhost:3005/v1/candidate/create/bulk';

// Candidate data - modify this array with your candidates
const candidatesData = [
  {
    position: 'president',
    full_name: 'Edobor Manasseh Osaivbie',
    level: '400',
    image:
      'https://ucarecdn.com/ae057b4c-1237-47b9-aa96-069a40afba93/-/preview/652x1000/',
  },
  {
    position: 'vice_president',
    full_name: 'Izuka Jane-Veronica Chidinma',
    level: '400',
    image:
      'https://ucarecdn.com/da60587e-4cc4-44b7-b091-9795379ea992/-/preview/562x1000/',
  },
  {
    position: 'vice_president',
    full_name: 'Ugo Miracle Chidinma',
    level: '200',
    image:
      'https://ucarecdn.com/1f2f1c37-e414-4b82-b6e8-bd3825a081ce/-/preview/750x1000/',
  },
  {
    position: 'director_of_welfare',
    full_name: 'Kelvin Ibamheyi',
    level: '300',
    image:
      'https://ucarecdn.com/31f1b77c-8ff8-4ed1-b7f8-bd867e853cf3/-/preview/825x1000/',
  },
  {
    position: 'director_of_socials',
    full_name: 'Ehiagwina Egheose Martha',
    level: '400',
    image:
      'https://ucarecdn.com/f5af1173-11e0-4574-8878-4fd6bbd67202/-/preview/750x1000/',
  },
  {
    position: 'director_of_sports',
    full_name: 'Aghahowa Osarodion Duke',
    level: '300',
    image:
      'https://ucarecdn.com/ed9fa53e-b278-4d76-8592-6e0f2e4feb51/-/preview/749x1000/',
  },
  {
    position: 'director_of_sports',
    full_name: 'Unuakhe Osarobo David',
    level: '400',
    image:
      'https://ucarecdn.com/97ca766b-bd6c-489c-b3fa-1347ae107042/-/preview/750x1000/',
  },
  {
    position: 'public_relations_officer',
    full_name: 'Netufo Segun Osadebamwen',
    level: '200',
    image:
      'https://ucarecdn.com/d6b9eeec-a086-4228-a581-7b684e175647/-/preview/750x1000/',
  },
  {
    position: 'financial_secretary',
    full_name: 'Udechukwu Michael',
    level: '300',
    image:
      'https://ucarecdn.com/30974de0-63cd-45aa-9a77-8c3a1869ddf7/-/preview/748x1000/',
  },
  {
    position: 'financial_secretary',
    full_name: 'Austin Marvelous Tobechukwu',
    level: '200',
    image:
      'https://ucarecdn.com/d43b92f4-a9a6-45e3-bde0-95546359f08d/-/preview/750x1000/',
  },
  {
    position: 'treasurer',
    full_name: 'Osagie Peter',
    level: '100',
    image:
      'https://ucarecdn.com/5cb0bae7-1ae4-4475-9248-b40eb93be15f/-/preview/776x1000/',
  },
  {
    position: 'treasurer',
    full_name: 'Agbinogieva Osasere Joy',
    level: '100',
    image:
      'https://ucarecdn.com/b5c4f2b8-a433-4ee2-a32f-a4993e4c3067/-/preview/1000x729/',
  },
  {
    position: 'assistant_secretary_general',
    full_name: 'Edo Iwinosa Ebenezer',
    level: '100',
    image:
      'https://ucarecdn.com/a37ef41a-f05b-41e9-ba91-d90f6414c84a/-/preview/720x956/',
  },
  {
    position: 'secretary_general',
    full_name: 'Oamhen Emmanuel Osagie',
    level: '200',
    image:
      'https://ucarecdn.com/0bca772c-4634-4c41-b865-a21950c902ca/-/preview/750x1000/',
  },
];

// Upload function
async function uploadCandidates() {
  try {
    console.log('Starting candidate upload...');
    console.log(`Uploading ${candidatesData.length} candidates`);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        candidates: candidatesData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    console.log('Candidates uploaded successfully!');
    console.log('Response:', result);
  } catch (error) {
    console.error('Error uploading candidates:', error.message);
    process.exit(1);
  }
}

// Run the upload
uploadCandidates();
