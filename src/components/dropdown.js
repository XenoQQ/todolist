import { useState } from 'react';
import './styles/dropdown.css';

const Dropdownmenu = ({ setShowSub, deleteTodo, id, isSub }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='dropdownmenuContainer'>
            <button className='dropdownmenu__button dropdownmenu__button_main' onClick={() => { handleOpen() }}>

            </button>
            {open &&
                (<div className='dropdownmenu'>
                    {(!isSub === true) &&
                        <button className='dropdownmenu__button' onClick={() => { setShowSub(id) }}>
                            Show sub
                        </button>}
                    <button className='dropdownmenu__button' onClick={() => { }}>
                        Redact
                    </button>
                    <button className='dropdownmenu__button' onClick={() => { deleteTodo(id); }}>
                        Delete
                    </button>
                </div>)}
        </div>
    )

}

export default Dropdownmenu;