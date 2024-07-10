import React, { useState, useEffect} from "react";
import './pesquisa_filtro.css';


function Pesquisa_Filtro({mudancaRegiao, mudancaTexto}){

    const [modoEscuro] = useState(localStorage.getItem('modoEscuro') === 'true');
    const [classeImagem, setClasseImagem] = useState(modoEscuro ? 'lupa-imagem-branca' : 'lupa-imagem-preta');

    useEffect(() => {
        setClasseImagem(modoEscuro ? 'lupa-imagem-branca' : 'lupa-imagem-preta');
    }, [modoEscuro]);

    console.log(classeImagem)
    return(
        <>
        <div className="div_geral">
            <div className="div-input">
                <span className="lupa">
                    <img id="lupa-imagem" alt="lupa" className={classeImagem}/>
                </span>
                <input type="text" className="input" placeholder="Procure um país ..." onChange={mudancaTexto}></input>
            </div>
            <div className="filtro">
                <form>
                    <select id="regiao" className="regiao1" name="regiao" onChange={mudancaRegiao}>
                        <option value="" disabled selected>Filtre sua região</option>
                        <option value='Todos' >Todos</option>
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europa</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </form>
            </div>
        </div>
        </>
    );
}

export default Pesquisa_Filtro;