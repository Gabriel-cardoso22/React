import { Link } from "react-router-dom";
import Avatar from "./componentes/Avatar";
import Gallery from "./componentes/Gallery";
import TodoList from "./componentes/TodoList";
import Profile from "./componentes/Profile";
import PackingList from "./componentes/PackingList";
import List from "./componentes/List";
import PrepareMode from "./componentes/Recipe";
import TeaSet from "./componentes/Tea";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <Avatar />
            <TodoList />
            <Profile />
            <PackingList />
            <List />
            <PrepareMode />
            <TeaSet />

            <Link to="/">Voltar</Link>
        </>
    );
}