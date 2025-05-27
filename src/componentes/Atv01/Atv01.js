import "./Atv01.css"; // importa o CSS
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

export default function Atv01() {
    return (
        <div className="container">
            <h1>Atividade 1</h1>
            <div className="relogio">
                <Relogio />
            </div>
            <div className="letreiro">
                <Letreiro />
            </div>
            <Link to="/">Voltar</Link>
        </div>
    );
}
