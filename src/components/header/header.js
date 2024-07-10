import React, { useEffect, useState } from "react";
import './header.css';

function Header() {
    const [modoEscuro, setModoEscuro] = useState(() => {
        const modoSalvo = localStorage.getItem('modoEscuro');
        return modoSalvo === 'true';
    });

    const alterarModo = () => {
        setModoEscuro((prevModoEscuro) => {
            const novoModo = !prevModoEscuro;
            localStorage.setItem('modoEscuro', novoModo);
            return novoModo;
        });
    };

    useEffect(() => {
        if (modoEscuro) {
            document.body.classList.add('modo-escuro');
        } else {
            document.body.classList.remove('modo-escuro');
        }
    }, [modoEscuro]);

    return (
        <header>
            <link href='https://unpkg.com/css.gg@2.0.0/icons/css/moon.css' rel='stylesheet'></link>
            <div className="titulo">
                <span>Onde no Mundo?</span>
            </div>
            <div className="alterar_modo" onClick={alterarModo}>
                <span className="icone">
                    <i className="gg-moon"></i>
                </span>
                <div className="titulo_icone">
                    Modo Escuro
                </div>
            </div>
        </header>
    );
}

export default Header;
