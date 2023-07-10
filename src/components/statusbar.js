import './styles/statusbar.css'

const Statusbar = ({ todos }) => {

  const getUndoneTodos = () => {
    let undoneTodos = todos.filter((todo) => !todo.done).length;
    if (undoneTodos === 0) {
      return 'No undone todos';
    } else {
      return `Undone todos:  ${undoneTodos}`;
    }
  }

  const getDoneTodos = () => {
    let doneTodos = todos.filter((todo) => todo.done).length;
    if (doneTodos === 0) {
      return 'No done todos';
    } else {
      return `Done todos:  ${doneTodos}`;
    }
  }

  return (
    <div className='statusBarContainer'>
      <div className='statusBar__counter'>{getUndoneTodos()}</div>
      <div className='statusBar__counter'>{getDoneTodos()}</div>
    </div>
  )
};


export default Statusbar;