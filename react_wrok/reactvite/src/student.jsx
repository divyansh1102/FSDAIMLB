// import React from 'react';
// const Profile = () => {
//     return ( 
//         <>
//         <div className="parent">
//             <h2>Welcome to my profile</h2>
//         </div>
//         <img src="">
//         </img>
//         <div>
//             <h2>Name:Kartikey</h2>
//             <h2>Roll Number:224575463</h2>
//             <h3>Branch:CSE AIML</h3>
//             <h3>Section:B</h3>
//             <h2>College:ABES</h2>
//         </div>
//         </>
//      );
// }
 
// export default Profile;

import React from 'react';

function Student({ data }) {
  return (
    <div>
      <h1>Student Info</h1>
      <img 
        src={data.pic} 
        height={200} 
        width={200} 
        alt="profile image" 
      />
      <h2>Name: {data.name}</h2>
      <h2>Roll: {data.roll}</h2>
      <h2>Branch: {data.branch}</h2>
      <h2>Section: {data.section}</h2>
      <h2>College: {data.college}</h2>
    </div>
  );
}

export default Student;