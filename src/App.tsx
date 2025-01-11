// import { Todo } from "./components/Todo"

import InputCopy from "./components/InputCopy"
import ShoppingList from "./components/ShoppingList"
import Switcher from "./components/Switcher"
import TodoList from "./components/TodoList"




const App = () => {
  return (
    <div className="flex items-center justify-center p-40">
      <ShoppingList/>
      
      <TodoList/>
      <Switcher/>
      

    </div>

  )
}
export default App