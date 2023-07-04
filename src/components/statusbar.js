import './styles/statusbar.css'

const Statusbar = ({ todos }) => {

  return (
    <div className='statusBarContainer'>
      <div className='statusBar__counter'>{todos.filter((todo) => !todo.done).length}</div>
      <div className='statusBar__counter'>{todos.filter((todo) => todo.done).length}</div>
    </div>
  )
};


export default Statusbar;