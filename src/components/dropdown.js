import { useRef, useState, useEffect } from 'react';
import './styles/dropdown.css';

const Dropdownmenu = ({ setShowSub, deleteTodo, id, isSub }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const divRef = useRef(null);

    useEffect(() => {
        const divElement = divRef.current;
        if (open) {
            Unfade(divElement);
        } else {
            Fade(divElement);
        }
    }, [open]);

    const Fade = (element) => {
        let op = 1;
        let timer = setInterval(() => {
            if (op <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 2);
    }

    const Unfade = (element) => {
        let op = 0.1;
        element.style.display = 'flex';
        let timer = setInterval(() => {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 2);
    }

    return (
        <div className='dropdownmenuContainer'>
            <button className='dropdownmenu__button dropdownmenu__button_main' onClick={() => { handleOpen() }}>
            </button>
            <div className='dropdownmenu' ref={divRef}>
                {(!isSub) &&
                    <button className='dropdownmenu__button' onClick={() => { setShowSub(id) }}>
                        Show sub
                    </button>}
                <button className='dropdownmenu__button' onClick={() => { }}>
                    Redact
                </button>
                <button className='dropdownmenu__button' onClick={() => { deleteTodo(id); }}>
                    Delete
                </button>
            </div>
        </div>
    )

}

export default Dropdownmenu;