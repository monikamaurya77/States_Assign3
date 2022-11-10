import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import logo from '../assets/copy.png';

const PasswordGenerate = () => {

    const [value, setValue] = useState("");

    let lengthVar = 0;
    let checkedUppercaseChar = false;
    let checkedLowercaseChar = false;
    let checkedNumbers = false;
    let checkedSymbols = false;



    const GeneratePassword = (e) => {
        const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%&*";
        let finalChar = "";//`${uppercaseChar}${lowercaseChar}${numbers}${symbols}`;
        let length = lengthVar;
        let password = "";

        if (checkedUppercaseChar == true) {
            finalChar = finalChar + uppercaseChar;
        } if (checkedLowercaseChar == true) {
            finalChar = finalChar + lowercaseChar;
        } if (checkedNumbers == true) {
            finalChar = finalChar + numbers;
        } if (checkedSymbols == true) {
            finalChar = finalChar + symbols;
        }

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * finalChar.length) + 1;
            password = password + finalChar.charAt(index);
        }

        setValue(password);
        //console.log(password);
    }

    //GeneratePassword();





    return (
        <div className="container">
            <h1 className="heading">Password Generator</h1>
            <input className="text" type="text" disabled value={value} />
            <CopyToClipboard text={value}>
                <div>
                    <input type="text" disabled value={value} className="copy" />
                    <button className="copy">
                        <img className="img" src={logo} alt="copy"/>
                    </button>
                </div>
            </CopyToClipboard>
            <br />
            <h3 className="select">Select Password length</h3>
            <select className="option" onChange={(e) => { lengthVar = e.target.value }}>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
            </select>
            <br />
            <br />

            <div className="checkbox">
                <input onClick={() => { checkedUppercaseChar = !checkedUppercaseChar }} type="checkbox" id="uppercase" />
                <label htmlFor="uppercase">Include uppercase letters</label>
                <br />

                <input onClick={() => { checkedLowercaseChar = !checkedLowercaseChar }} type="checkbox" id="lowercase" />
                <label htmlFor="lowercase">Include lowercase letters</label>
                <br />

                <input onClick={() => { checkedNumbers = !checkedNumbers }} type="checkbox" id="numbers" />
                <label htmlFor="numbers">Include numbers</label>
                <br />

                <input onClick={() => { checkedSymbols = !checkedSymbols }} type="checkbox" id="symbols" />
                <label htmlFor="symbols">Include symbols</label>
            </div>

            <br />

            <button onClick={GeneratePassword} className="button">Generate Password</button>
        </div>
    );
}

export default PasswordGenerate;