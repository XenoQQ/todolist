import './styles/navbar.css';

const Navbar = () => {






    return (
        <div className='navbarContainer'>
            <button className='navbar__button'>
            Show all

            </button>
            <button className='navbar__button'>
            Show only undone
            

            </button>
            <button className='navbar__button'>
            
            Show only done
            </button>
            <button className='navbar__button navbar__button_delete'>
            Delete all done

            </button>


        </div>
    );
}

export default Navbar;
