import './styles/navbar.css';

const Navbar = ({ setListStatus, deleteDoneTodos }) => {



    return (
        <div className='navbarContainer'>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: true,
                    vivibleDone: false,
                    visibleUndone: false,
                })
            }}>
                Show all
            </button>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: false,
                    vivibleDone: false,
                    visibleUndone: true,
                })
            }}>
                Show only undone
            </button>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: false,
                    visibleDone: true,
                    visibleUndone: false,
                })
            }}>
                Show only done
            </button>
            <button className='navbar__button navbar__button_delete' onClick={() => {
                deleteDoneTodos()
            }}>
                Delete all done
            </button>


        </div>
    );
}

export default Navbar;
