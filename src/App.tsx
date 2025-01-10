// import { Todo } from "./components/Todo"

import ShoppingList from "./components/ShoppingList"
import TodoList from "./components/TodoList"




const App = () => {
  return (
    <div className="flex items-center justify-center p-40">
      <ShoppingList/>
      <TodoList/>

    </div>

  )
}
export default App