import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const nayoks =['Rownok', 'Mehedi', 'Babul', 'Monir', 'Jakaria', 'Monirul']
    const cinemas = [
        { id: 101, nayok: 'Rownok', nayika: 'Risha'},
        { id: 102, nayok: 'Mehedi', nayika: 'Sabana'},
        { id: 103, nayok: 'Babul', nayika: 'Kopila'},
        { id: 104, nayok: 'Monir', nayika: 'Sucorita'}
    ]
    return (
        <div className="App">
            <h1>Now we are learn about components</h1>

            {/* simple components  */}
            <Students />
            <Students />

            {/* with props */}
            <Products name='Phone' price='15000' />
            <Products name='Laptop' price='160000' />

            {/* components with dynamiclly */}
            <ul>
                {
                    nayoks.map(nayok => <li>{nayok}</li> )
                }
            </ul>

            {
                cinemas.map(cinema => <Cinema key={cinema.id} nayok={cinema.nayok} nayika={cinema.nayika} />)
            }

            {/* add a counter with react state  */}
            <Counter />

            {/* load dynamic data from api call  */}
            <ExternalUsers />


        </div>
    );
}

function Students(){
    return(
        <div className='card-style'>
            <h1>Name: Rownok Jahan</h1>
            <h3>Age: 21</h3>
        </div>
    )
}

// components with props 
function Products(props){
    return(
        <div className='card-style2'>
            <h1>Product Name: {props.name}</h1>
            <h2>Price: {props.price}</h2>
        </div>
    )
}

// components with dynamiclly
function Cinema(props){
    return (
        <div className='card-style3'>
            <h1>Nayok: {props.nayok}</h1>
            <h2>Nayika: {props.nayika}</h2>
        </div>
    )
}

// add a counter with state
function Counter(){
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => {
        if(count == 0){
            return
        }
        setCount(count - 1)
    };

    return(
        <div className='card-style'>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrease} className='count-button'>Decrease</button>
            <button onClick={handleIncrease} className='count-button'>Increase</button>
        </div>
    )
}

// load dynamic data from api call 
function ExternalUsers(){
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        console.log('inside use efeect')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])
    return(
        <div className='card-style4'>
            <h1>External users</h1>
            {
                users.map(user => <User key={user.id} name={user.name} email={user.email} />)
            }
        </div>
    )
}

function User(props){
    return(
        <div className='card-style2'>
            <h2>Name: {props.name}</h2>
            <h3>Email: {props.email}</h3>
        </div>
    )
}



export default App;
