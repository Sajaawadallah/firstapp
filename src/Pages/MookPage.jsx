import React from 'react'
import '../styles/app.css'
import { useState } from 'react';

// write jsx

function MyButton() {
    const handleClick = () => {
        alert("I'm a button");
    }
    return (
        <button onClick={handleClick}> I`m a button</button>
    );
}
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there,<br /> How do you do ?</p>
        </>
    );
}

// display data

const USER = {
    name: "John Doe",
    age: 30,
    imageUrl: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    imageSize: 90,
    role: true
}

function ProfilePage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3>{USER.name}</h3>
            <h4>{USER.age}</h4>
            {<h5>{USER.role ? "admin" : "user"}</h5>}
            {/* if there is no else condtion */}
            {/* <h5>{USER.role && "admin"}</h5> */}
            <img className="avter" src={USER.imageUrl} alt={"photo of" + USER.name} style={{ width: USER.imageSize, height: USER.imageSize }} />
        </div>
    );
}

// render list
const PRODUCTS = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
]

function ProductList() {
    return (
        <ul>
            {PRODUCTS.map((producy) => <li key={producy.id}>
                {producy.name} - ${producy.price}
            </li>)}
        </ul>
    );
}


// update screen with state

function Counter({ count, handelCLick }) {
    // here each button have a separate state
    // const [count, setCount] = useState(0);

    // const handelCLick = () => {
    //     setCount(count + 1);
    // }


    return (
        <button onClick={handelCLick}> The button was {count} times clciked </button>
    );
}


function MookPage() {
    // here all button have the same state from their perent
    const [count, setCount] = useState(0);

    const handelCLick = () => {
        setCount(count + 1);
    }


    return (

        <div className="app">
            <h1>Welcome to my app</h1>
            <MyButton />
            <AboutPage />
            <ProfilePage />
            <ProductList />
            <Counter count={count} handelCLick={handelCLick} />
            <Counter count={count} handelCLick={handelCLick} />
        </div>


    );
}


export default MookPage;
