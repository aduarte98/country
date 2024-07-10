import React, { useState } from "react";
import './home.css';
import Header from '../components/header/header';
import PesquisaFiltro from "../components/pesquisa_filtro/pesquisa_filtro";
import Data from '../rest-countries-api-with-color-theme-switcher-master/data.json';

function Home() {
    const [filtro, setFiltro] = useState({
        regiao: "",
        texto: ""
    });

    const modoEscuro = localStorage.getItem('modoEscuro') === 'true';

    const mudancaRegiao = (event) => {
        setFiltro({
            ...filtro,
            regiao: event.target.value,
        });
    };

    const mudancaTexto = (event) => {
        setFiltro({
            ...filtro,
            texto: event.target.value,
        });
    };

    const paisesFiltrados = Data.filter(country => {
        if (filtro.regiao && filtro.regiao !== "Todos") {
            if (country.region !== filtro.regiao) {
                return false;
            }
        }
        
        if (filtro.texto) {
            if (!country.name.toLowerCase().startsWith(filtro.texto.toLowerCase())) {
                return false;
            }
        }

        return true;
    });

    return (
        <>
            <Header />
            <PesquisaFiltro mudancaRegiao={mudancaRegiao} mudancaTexto={mudancaTexto} />

            {/* Exemplo de uso de modoEscuro para classes condicionais */}
            <div className={`lista-paises ${modoEscuro ? 'modo-escuro' : ''}`}>
                {paisesFiltrados.map((country, index) => (
                    <div className="paises" key={country.name}>
                        <img src={country.flags.svg} alt={`Bandeira de ${country.name}`} />
                        <div className="conteudo">
                            <h2>{country.name}</h2>
                            <p><strong>Região:</strong> {country.region}</p>
                            <p><strong>População:</strong> {country.population}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
