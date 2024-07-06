import React from 'react';
import waterImage from 'assets/water.jpg';
interface Department {
  name: string;
  contact: string;
  image: string;
}

const departments: Department[] = [
  {
    name: 'water Department',
    contact: '123-456-7890',
    image: waterImage,
  },
  {
    name: 'Municipal Department',
    contact: '098-765-4321',
    image: 'path/to/municipal-department.jpg',
  },
  // Add more departments as needed
];

const About: React.FC = () => {
  return (
    <div>
      <h1>Government Departments</h1>
      <div>
        {departments.map((department, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h2>{department.name}</h2>
            <p>Contact: {department.contact}</p>
            <img src={department.image} alt={`${department.name}`} style={{ width: '100px', height: '100px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
