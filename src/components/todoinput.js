import './styles/todoinput.css';
import { useState } from 'react';

const Todoinput = ({ addTodo }) => {

    const [currentText, setCurrentText] = useState('');

    return (
        <div className='input'>
            <input
                className='input__form'
                placeholder='Got any plans? Write here!'
                value={currentText}
                onChange={(e) => { setCurrentText(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo(currentText, '');
                        setCurrentText('');
                    }
                }}
            />
            <button
                className='input__button'
                onClick={() => { addTodo(currentText, ''); setCurrentText('') }}
            />
        </div>
    )
}

export default Todoinput;