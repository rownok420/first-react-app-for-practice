import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
    
    return (
        <div className="App">
            <h1>Core Concept Recap </h1>

            <MyComponent brand='Apple' price='15000' />
            <MyComponent brand='Microsoft' price='60000' />
            <MyComponent brand='Google' price='24000' />

            {/* practice class component with props */}
            <Local local='en-us' />
            <Clock local='bn-bd'/>
            <Student name='Rownok Jahan' age='21' />

            {/* Load data from API  */}
            <LoadMeal />
        </div>
    );
}


const MyComponent = (props) => {
    
    const [point, setPoint] = useState(1);

    const handlePoint = () => {
        setPoint(point * 2);
    }

    return (
        <div className='card-style'>
            <h1>Yo Yo mama! {props.brand}!!!</h1>
            <h2>Asking money,price: {props.price}. I have points {point}</h2>
            <button onClick={handlePoint} className='count-button'>Add points</button>
            <p style={{color: 'brown', fontWeight: 'bold'}}>I can write my own component</p>
        </div>
    )
}


// practice class component with props 
const Local = (props) => {
    return (
        <div className='card-style3'>
            <h1>
                Hello {new Date().toLocaleTimeString(props.local)}
            </h1>
        </div>
    )
}


class Clock extends React.Component{
    render(){
        return(
            <div className='card-style'>
                <h1>
                    Hello {new Date().toLocaleTimeString(this.props.local)}
                </h1>
            </div>
        )
    }
}


class Student extends React.Component{
    render(){
        return(
            <div className='card-style1'>
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
            </div>
        )
    }
}





// Load data from API
const LoadMeal = () =>{
    const [coocktails, setCoocktail] = useState([])
    useEffect(() =>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setCoocktail(data.drinks))
    },[])
    return(
        <div className='card-style4'>
            <h1>Showing Coocktail {coocktails.length}</h1>
            <div className='grid-item'>
            {
                coocktails.map(coocktail => <ShowMeal key={coocktail.idDrink} img={coocktail.strDrinkThumb} name={coocktail.strCategory} />)
            }
            </div>
        </div>
    )
}

const ShowMeal = (props) => {
    return (
        <div className='card-style2'>
            <img style={{width: '300px', height: '250px', borderRadius: '20px'}} src={props.img} alt="" />
            <h1>{props.name}</h1>
        </div>
    )
}


export default App;
