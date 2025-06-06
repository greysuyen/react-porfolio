import '../styles/nav.css'
import calc from '../assets/images/calculator.jpg'
export function Projects() {
    const stacks1 = [
    {
      name: "JavaScript",
      url: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "HTML5",
      url: "https://cdn.simpleicons.org/html5/E34F26",
    },
    {
      name: "CSS3",
      url: "https://cdn.simpleicons.org/css3/1572B6",
    },
    {
      name: "React",
      url: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "Postgres",
      url: "https://cdn.simpleicons.org/postgresql/336791",
    },
     
    {
      name: "MySQL",
      url: "https://cdn.simpleicons.org/mysql/4479A1",
    },
    {
      name: "Express",
      url: "https://cdn.simpleicons.org/express/000000",
    },
    
  ];
    

  const tools = [
    { 
      name: "VS Code", 
      url: "https://code.visualstudio.com/assets/images/code-stable.png"
    },

    {
      name: "Git",
      url: "https://cdn.simpleicons.org/git/F05032",
    },
    {
      name: "GitHub",
      url: "https://cdn.simpleicons.org/github/181717",
    },
    {
      name: "Postman",
      url: "https://cdn.simpleicons.org/postman/FF6C37",
    },
    {
      name: "XAMPP",
      url: "https://cdn.simpleicons.org/xampp/FF9900",
    },
  ];
  return (
    <>
      <div className="stack-container">
        <div className="tech-stacks">

        <h2 id='stack'>Tech Stacks</h2>
        <div className="proj-img" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          {stacks1.map(({ name, url }) => (
            <div key={name} style={{ flexDirection: 'column', alignItems: 'center' }}>
              <img src={url} alt={name} />
              <h3 style={{ marginTop: '8px', fontSize: '14px', color: 'lightgray', fontWeight: 100, textAlign: 'center', }}>{name}</h3>
            </div>
          ))}
          </div>
          <h2 id='tools'>Tools</h2>
          <div className="proj-img" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            {tools.map(({ name, url }) => (
              <div key={name} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <img src={url} alt={name} />
                <h3 style={{ marginTop: '8px', fontSize: '14px', color: 'lightgray', fontWeight: 100, textAlign: 'center', }}>{name}</h3>
              </div>
            ))}
          </div>
  
        </div>
       
    </div>    

  
    </>
  );
}

         
export default Projects