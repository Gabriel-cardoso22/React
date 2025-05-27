import { Link } from "react-router-dom";
import ToolBar from "./componentes/Toolbar";
import SculptureGallery from "./componentes/Gallery";
import Gallery from "./componentes/CreateRoot";
import ClockApp from "./componentes/ClockApp";
import Form from "./componentes/Form";
import Form2 from "./componentes/Form2";
import Form3 from "./componentes/Form3";
import Counter from "./componentes/Counter";
import MovingDot from "./componentes/MovingDot";
import List from "./componentes/List";
import List2 from "./componentes/List2";
import ShapeEditor from "./componentes/ShapeEditor";
import CounterList from "./componentes/CounterList";
import List3 from "./componentes/List3";
import List4 from "./componentes/List4";
import BucketList from "./componentes/BucketList";


export default function Atv04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <ToolBar/>
            <SculptureGallery/>
            <Gallery/>
            <ClockApp/>
            <Form/>
            <Form2/>
            <Form3/>
            <Counter/>
            <MovingDot/>
            <List/>
            <List2/>
            <List3/>
            <List4/>
            <ShapeEditor/>
            <CounterList/>
            <BucketList/>
            <br/>
            <Link to="/" className="voltar">voltar</Link>
        </>
    )
}