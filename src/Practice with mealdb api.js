import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
    
    return (
        <div className="App">
            <h1>Now we are learn about components</h1>
            
            {/* add a counter with react state  */}
            <Counter />

            {/* load dynamic data from api call  */}
            <h1>The meal db</h1>,
            <ExternalUsers />

        </div>
    );
}


// add a counter with state
const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if(count === 0){
            return;
        }
        setCount(count - 1);
    }
    return (
        <div className='card-style'>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrease} className='count-button'>Decrease</button>
            <button onClick={handleIncrease} className='count-button'>Increase</button>
        </div>
    )
}

// load dynamic data from api call 
const ExternalUsers = () =>{
    const [meals, setUsers] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setUsers(data.categories))
    },[])
    return (
        <div className='card-style4 grid-item'>
            {
                meals.map(meal => <LoadMeal key={meal.idCategory} name={meal.strCategory} img={meal.strCategoryThumb} />)
            }
        </div>
    )
}

const LoadMeal = (props) => {
    return (
        <div className='card-style2'>
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
        </div>
    )
}



export default App;
