const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add Todo') {
    return [...state, action.payload];
  }
  return state;
};

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

const addTodoAction = {
  type: 'add Todo',
  payload: newTodo,
};

let todos = todoReducer(initialState, addTodoAction);

console.log({ state: todos });
