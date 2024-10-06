
import { useState, useEffect } from 'react';

const AddPerson = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(storedPeople);
  }, []);

  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleAddPerson = () => {
    if (!name || !dob || !aadhar || !mobile) {
      alert('All fields are required!');
      return;
    }
    if (aadhar.length !== 12) {
      alert('Aadhar Number must be 12 digits!');
      return;
    }
    if (mobile.length !== 10) {
      alert('Mobile Number must be 10 digits!');
      return;
    }

    const age = calculateAge(dob);
    const newPerson = { name, dob, aadhar, mobile, age };
    const updatedPeople = [...people, newPerson];

    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));

    setName('');
    setDob('');
    setAadhar('');
    setMobile('');
  };

  const handleDelete = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
    localStorage.setItem('people', JSON.stringify(updatedPeople));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add New Person</h2>
      <div className="my-4">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 mr-2"/>
        <input value={dob} onChange={e => setDob(e.target.value)} placeholder="Date of Birth" type="date" className="border p-2 mr-2"/>
        <input value={aadhar} onChange={e => setAadhar(e.target.value)} placeholder="Aadhar Number" className="border p-2 mr-2"/>
        <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile Number" className="border p-2 mr-2"/>
        <button onClick={handleAddPerson} className="bg-blue-500 text-white p-2">Add Person</button>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Date of Birth</th>
            <th className="border p-2">Aadhar Number</th>
            <th className="border p-2">Mobile Number</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td className="border p-2">{person.name}</td>
              <td className="border p-2">{person.dob}</td>
              <td className="border p-2">{person.aadhar}</td>
              <td className="border p-2">{person.mobile}</td>
              <td className="border p-2">{person.age}</td>
              <td className="border p-2">
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddPerson;
