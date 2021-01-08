/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from 'react'
import './MainScreen.css'
import ModalAlert from './ModalAlert'
import icon from '../img/calculator.svg'

function MainScreen() {
    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [thirdNum, setThirdNum] = useState('')
    const [operator, setOperator] = useState('')
    const [checkBox1, setCheckBox1] = useState(false)
    const [checkBox2, setCheckBox2] = useState(false)
    const [checkBox3, setCheckBox3] = useState(false)
    const [triggerModal, setTriggerModal] = useState(false)

    let ops1
    let ops2
    let ops3

    checkBox1 ? ops1 = firstNum + operator : ops1 = ''
    checkBox2 ? ops2 = secondNum + operator : ops2 = ''
    checkBox3 ? ops3 = thirdNum : ops3 = ''

    let numToCalculate

    if (ops1 && ops2 && ops3) {
        numToCalculate = ops1 + ops2 + ops3
    } else if (ops1 && ops2) {
        numToCalculate = ops1 + secondNum
    } else if (ops2 && ops3) {
        numToCalculate = ops2 + ops3
    } else if (ops1 && ops3) {
        numToCalculate = ops1 + ops3
    } else {
        numToCalculate = ''
    }

    const checkOperator = (e) => {
        numToCalculate !== '' ? setOperator(e.target.value) : setTriggerModal(true)
    }

    const handleFirstInput = e => {
        let value = e.target.value
        value[0] === '0' ? setFirstNum(value.slice([...value].findIndex(number => number > 0))) : setFirstNum(value)
        setOperator('')
    }

    const handleSecondInput = e => {
        let value = e.target.value
        value[0] === '0' ? setSecondNum(value.slice([...value].findIndex(number => number > 0))) : setSecondNum(value)
        setOperator('')
    }

    const handleThirdInput = e => {
        let value = e.target.value
        value[0] === '0' ? setThirdNum(value.slice([...value].findIndex(number => number > 0))) : setThirdNum(value)
        setOperator('')
    }

    let result

    if (operator === '') {
        result = ''
    } else if (numToCalculate === '') {
        setOperator('')
    } else {
        result = eval(numToCalculate)
    }


    const toggle = () => setTriggerModal(!triggerModal)


    return (
        <div className='container '>
            <div className="board">
                <h1>Simple Calculator</h1>
                <img src={icon} className='icon-calc' alt=""/>
                <div className="d-flex">
                    <input type="number" className='form-control' onChange={e => handleFirstInput(e, 'value')} />
                    <input type="checkbox" onChange={() => setCheckBox1(!checkBox1)}></input>
                </div>
                <div className="d-flex">
                    <input type="number" className='form-control' onChange={e => handleSecondInput(e, 'value')} />
                    <input type="checkbox" onChange={() => setCheckBox2(!checkBox2)}></input>
                </div>
                <div className="d-flex">
                    <input type="number" className='form-control' onChange={e => handleThirdInput(e, 'value')} />
                    <input type="checkbox" onChange={() => setCheckBox3(!checkBox3)}></input>
                </div>
                <div className="operator d-flex">
                    <button className={`btn ${operator === '+' ? 'btn-primary' : 'btn-light'}`} value='+' onClick={e => checkOperator(e, 'value')}>+</button>
                    <button className={`btn ${operator === '-' ? 'btn-primary' : 'btn-light'}`} value='-' onClick={e => checkOperator(e, 'value')}>-</button>
                    <button className={`btn ${operator === '*' ? 'btn-primary' : 'btn-light'}`} value='*' onClick={e => checkOperator(e, 'value')}>x</button>
                    <button className={`btn ${operator === '/' ? 'btn-primary' : 'btn-light'}`} value='/' onClick={e => checkOperator(e, 'value')}>/</button>
                </div>
                <div className="result d-flex">
                    <h1>Result: </h1>
                    <h1>{result}</h1>
                </div>
            </div>
            <ModalAlert trigger={triggerModal} toggle={toggle} />
        </div>
    )
}

export default MainScreen
