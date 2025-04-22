import React from "react";
import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='Avt01'>Atividade 1</Link>
                    </li>
                    <li>
                        <Link to='Avt02'>Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Home;