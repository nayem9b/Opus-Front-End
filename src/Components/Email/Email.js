import React, { useEffect, useState } from "react";

const Email = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/email")
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, []);
  console.log(emails);
  return (
    <div>
      <h2 className='text-3xl'>All Emails</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>

              <th className='text-start'>Emails</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, i) => (
              <tr key={email._id}>
                <th>{i + 1}</th>

                <td>{email.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Email;
