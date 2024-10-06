
import { useState } from 'react';

const RetrieveInfo = () => {
  const [aadhar, setAadhar] = useState('');
  const [person, setPerson] = useState(null);

  const handleRetrieve = () => {
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    const foundPerson = storedPeople.find(p => p.aadhar === aadhar);
    setPerson(foundPerson);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Retrieve Information</h2>
      <input 
        value={aadhar} 
        onChange={e => setAadhar(e.target.value)} 
        placeholder="Enter Aadhar Number" 
        className="border p-2"
      />
      <button onClick={handleRetrieve} className="bg-blue-500 text-white p-2 ml-2">Retrieve</button>
      
      {person ? (
        <table className="min-w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Date of Birth</th>
              <th className="border p-2">Aadhar Number</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{person.name}</td>
              <td className="border p-2">{person.dob}</td>
              <td className="border p-2">{person.aadhar}</td>
              <td className="border p-2">{person.mobile}</td>
              <td className="border p-2">{person.age}</td>
            </tr>
          </tbody>
        </table>
      ) : aadhar ? (
        <p className="mt-4">No match found.</p>
      ) : null}
    </div>
  );
};

export default RetrieveInfo;
