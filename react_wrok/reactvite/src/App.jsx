import viteLogo from '/vite.svg'
import './App.css'
import Student from './component/Student'   // Make sure file name matches exactly

function App() {
  const Profile = {
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpa-OPGCHyX-GPQRrwoR289o79lh94R-ERw&s',
    name: 'Divyansh Singh',
    roll: '22028489',
    branch: 'CSE-AIML',
    section: 'B',
    college: 'ABES Engineering College'
  };

  return (
    <div className="container">
      {/* Render Student component and pass data */}
      <Student data={Profile} />
    </div>
  );
}

export default App;