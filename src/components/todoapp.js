import './styles/todoapp.css';
import './todoheader';
import {
    useState
} from 'react';
import Todoheader from './todoheader';
import Todosection from './todosection';
import Todofooter from './todofooter';





const Todoframe = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, todo]);
            setTodo('');
        }



    };


    return (
        <div className='todoapp'>
            <h1 className='title1'>To do list</h1>
            <h2 className='title2'>Digital deluxe edition</h2>
            <Todoheader todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <Todosection />
            <Todofooter />





        </div>
    )
};

export default Todoframe;