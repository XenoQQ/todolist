import './styles/navbar.css';

const Navbar = ({ todos, setListStatus, deleteDoneTodos }) => {

    const getUndoneTodos = () => {
        let undoneTodos = todos.filter((todo) => !todo.isSub).filter((todo) => !todo.done).length;
        if (undoneTodos === 0) {
            return 'No incomplete todos';
        } else {
            return `Show ${undoneTodos} incomplete todos`;
        }
    }

    const getDoneTodos = () => {
        let doneTodos = todos.filter((todo) => !todo.isSub).filter((todo) => todo.done).length;
        if (doneTodos === 0) {
            return 'No complete todos';
        } else {
            return `Show ${doneTodos} complete todos`;
        }
    }

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
                {getUndoneTodos()}
            </button>
            <button className='navbar__button' onClick={() => {
                setListStatus({
                    visibleAll: false,
                    visibleDone: true,
                    visibleUndone: false,
                })
            }}>
                {getDoneTodos()}
            </button>
            <button className='navbar__button' onClick={() => {
                deleteDoneTodos()
            }}>
                Clear completed
            </button>
        </div>
    );
}

export default Navbar;
