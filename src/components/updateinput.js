import { useState } from "react";
import './styles/updateinput.css'
import imgChecked from '../assets/icon-checked.png';

const Updateinput = ({ updateTodo, todo }) => {

    const [currentText, setCurrentText] = useState(todo.text);

    return (
        <>
            <input
                className='updateinput__editor'
                style={{
                    display: todo.isInputDisplayed ? 'flex' : 'none',
                    fontSize: todo.isSub ? '20px' : '25px'
                }}
                placeholder={todo.text}
                value={currentText}
                onChange={(e) => { setCurrentText(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        updateTodo(todo.id, currentText);
                    }
                }}
            />
            <button
                className='updateinput__apply'
                style={{ display: todo.isInputDisplayed ? 'flex' : 'none' }}
                onClick={() => { updateTodo(todo.id, currentText) }}
            >
                <img src={imgChecked} width='45px' height='45px' alt='Checked'></img>
            </button>

        </>

    )
}

export default Updateinput;