import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTempate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

function App() {
    return (
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
