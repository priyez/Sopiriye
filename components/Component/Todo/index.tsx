
import { useEffect, useState } from 'react';


export const Todo =({todos}) =>{
    const [isCompleted, setIsCompleted] = useState(todos.status);
    const [formattedDay, setFormattedDay] = useState<string>('');
    const [formattedMonth, setFormattedMonth] = useState<string>('');
    const [formattedYear, setFormattedYear] = useState<number>();

    useEffect(() => {
        const currentDate = new Date();
        const day = ('0' + currentDate.getDate()).slice(-2); // Pad single digit days with leading zero
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const year = currentDate.getFullYear();

        const dateDay = day;
        setFormattedDay(dateDay);

        const dateMonth = month;
        setFormattedMonth(dateMonth);

        const dateYear = year;
        setFormattedYear(dateYear);
       
        setIsCompleted(todos)
      
      }, []);
      const footerText ="Continuously honing my skills in web development, I strive to stay updated with the latest technologies and design trends. Collaborating closely with designers and stakeholders, I ensure that the final product not only meets but exceeds expectations. From optimizing performance to enhancing user experience, I am dedicated to delivering seamless digital solutions. "

    return (
        <div className='sectionContainer'> 
     <div className='todoContainer'>
        <div className='todo-header'>
<div className='todo-header-date'>
    <h2>{formattedDay}</h2>
    <p>{formattedMonth}, {formattedYear}</p>
</div>
<p className='todo-header-title'>As much as i like sharing my knowledge, i aslo like sharing  my Monthly TodoList for  {formattedMonth}, {formattedYear} </p>
        </div>
        <div className='todo-body ' >
            <p className='todo-body-title'>As much as i like sharing my knowledge,  i aslo like sharing  my Monthly TodoList for  {formattedMonth}, {formattedYear} </p>
            <div className='todo-body-container'>
                <ul>
                {todos.map((item, index) =>(
                
                    <li key={index} >
                        {isCompleted == null ? (    
<>
<svg
  fill="#fffff"
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  width="10px"
  height="10px"
  viewBox="0 0 305.00 305.00"
  stroke="#fffff"
  strokeWidth="0.00305002"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"></path>
        <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"></path>
      </g>
    </g>
  </g>
</svg>
<p>{item.task}</p>
</>
      ) : (
        <>
          <svg
            fill="#26b314"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="10px"
            height="10px"
            viewBox="0 0 305.00 305.00"
            stroke="#26b314"
            strokeWidth="0.00305002"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"></path>
                  <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"></path>
                </g>
              </g>
            </g>
          </svg>
          <p style={{ textDecoration: 'line-through', color:'#dbdbdb82' }}>{item.task}</p>
        </>

      )}
                    
                    </li>
                ))}
                </ul>
            </div>

        </div>
        <div className='todo-footer'>
<p>{footerText}</p>
        </div>

     </div>
     <div className='sectionContainer-footer'>
<p>{footerText}</p>
     </div>
        </div>
    )
}
export default Todo;




