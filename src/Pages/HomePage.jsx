import React from 'react'
import Button from '../components/Button'
import '../styles/homepage.css'
import { useState } from 'react'

export default function HomePage() {




    const [amount, setAmount] = useState(0);
    const [count, setcount] = useState(amount);
    const handelchange = (e) => { setAmount(e.target.value); }
    const handelincress = () => { setcount(count + +amount) }
    const handeldecress = () => { setcount(count - +amount) }
    const handelrest = () => { setcount(0) }

    return (

        <div className='flex-box'>

            <input type="number" name="" id="input" onChange={handelchange} />


            <Button className={"increes-btn"} onClick={handelincress} btnTilte={"incress"} />
            <h1 className={count > 0 ? "green" : count == 0 ? "black" : "red"}>{count}</h1>
            {count > 0 && <Button className={"decress-btn"} onClick={handeldecress} btnTilte={"decress"} />}
            <Button className={"reset-btn"} onClick={handelrest} btnTilte={"reset"} />

        </div>
    )


}



