import { useRef, useState, useEffect } from 'react';
import './styles/dropdown.css';
import imgMenu from '../assets/icon-menu.png';
import imgX from '../assets/icon-x.png';
import imgGarbage from '../assets/icon-garbage.png';
import imgEdit from '../assets/icon-edit.png';
import imgShow from '../assets/icon-show.png';
import imgAdd from '../assets/icon-add.png';

const Dropdownmenu = ({ setShowSub, deleteTodo, id, isSub, handleInputDisplayed, handleSubInputDisplayed, todo}) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const menuButtonImg = () => {
        return todo.isInputDisplayed ? <img src={imgX} width='60px' height='60px' /> : <img src={imgMenu} width='35px' height='35px' />;
    }

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
            <button
                className='dropdownmenu__button dropdownmenu__button_main'
                onClick={() => { todo.isInputDisplayed ? handleInputDisplayed(id) : handleOpen() }}
            >
                {menuButtonImg()}
            </button>
            <div className='dropdownmenu' ref={divRef}>
                <button className='dropdownmenu__button' onClick={() => { handleInputDisplayed(id) }}>
                    <img src={imgEdit} width='30px' height='30px' />
                </button>

                {(!isSub) &&
                    <>
                        <button className='dropdownmenu__button' onClick={() => { handleSubInputDisplayed(id) }}>
                            <img src={imgAdd} width='32px' height='32px' />
                        </button>
                        <button className='dropdownmenu__button' onClick={() => { setShowSub(id) }}>
                            <img src={imgShow} width='30px' height='30px' />
                        </button>

                    </>}
                <button className='dropdownmenu__button' onClick={() => { deleteTodo(id); }}>
                    <img src={imgGarbage} width='30px' height='30px' />
                </button>
            </div>
        </div>
    )

}

export default Dropdownmenu;