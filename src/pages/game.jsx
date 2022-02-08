import React, {useState} from "react";
import MyButton from "../UI /button/MyButton";

function Game() {
    const faces = ["heads", "tails"];
    const [selectedFace, setSelectedFace] = useState("");
    const [coinFlipResult, setCoinFlipResult] = useState(null);
    const [balance, setBalance] = useState(localStorage.getItem('balance'))
    const [bet, setBet] = useState(0)


    const flip = () => {
        if(!selectedFace) return
        if(balance < bet || bet < 0) return
        let index;
        if (Math.random() < 0.5) {
            index = 0;
        } else {
            index = 1;
        }
        setCoinFlipResult(faces[index]);
        changeBalance(faces[index]);

    };

    const zeroingout = () => {
        setCoinFlipResult(null)
        setSelectedFace(null)
    }
    const changeBalance = (flipResult) => {

        if (flipResult === selectedFace) {
            setBalance(+balance + +bet)
            localStorage.setItem('balance', String(+balance + +bet))
        }
        else {
            setBalance(+balance - +bet)
            localStorage.setItem('balance', String(+balance - +bet))
        }

    }
    const showResult = () => {
        if(!selectedFace || !coinFlipResult) return
        if (coinFlipResult === selectedFace) {
            return <p>you win</p>;
        }
        else {
            return <p>you lost</p>;
        }
    };
    return (
        <div>
            <p style={{left: '100px', position: 'absolute', marginTop: '5px'}}>Your balance: {balance}</p>
            <input style={{left: '100px', position: 'absolute', marginTop: '25px'}}
            placeholder="Сделайте ставку"
            onChange={e => setBet(e.target.value)}/>
            <div>
                <h1>select a face</h1>
                <MyButton onClick={() => { zeroingout()
                    setSelectedFace("heads")}}>
                    heads
                </MyButton>
                <MyButton onClick={() => { zeroingout()
                    setSelectedFace("tails")}}>
                    tails
                </MyButton>
            </div>
            <p>you selected: {selectedFace}</p>
            <MyButton onClick={() => {
                flip();
            }}>flip coin</MyButton>
            {showResult()}
        </div>
    );
}

export default Game