import React,{ useState } from 'react';
function Header() {
    const [showtextbox,settextbox] = useState(false);
  const Clickinfo = () => {
    settextbox(!showtextbox);
    
  };

  return (
    <header className="Header">
      <h1>Know The Weather</h1>
     <center> <img src="https://cdn-icons-png.freepik.com/256/13264/13264513.png?ga=GA1.1.1414073263.1727198918&semt=ais_hybrid" width="60" height="60"alt="weather"></img></center>
      <p><b><i>Developed by Shivani Tumburu </i></b></p>
        <div>
        <img  width="40 px" height="40 px"  onClick={Clickinfo} src='https://img.icons8.com/?size=100&id=2800&format=png&color=000000'alt='info'></img>
        {showtextbox && (
        <div>
         <textarea rows="5" cols="30" style={{ width: '300px', height: '150px', backgroundColor: 'lightblue', border: '2px solid white',fontFamily:"Garamond",fontSize:"16px"}}>
         The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
          </textarea>
        </div>
        )}
        </div>
    </header>
  );
}

export default Header;
