import React, {useState,useEffect} from 'react';

const Agents = () => {

    const [agents, setAgents] = useState([])
    
    
    useEffect(() => {
        fetch("http://localhost:3001/employees")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAgents(data);
      });
  }, []);

    
  const agentsInfo = agents.map(employee => {return <h1 key={employee.id} employee={employee}> {employee.name} </h1>})
    return (
        <div>
        
        </div>
    );
}

export default Agents;
