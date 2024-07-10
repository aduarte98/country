import React ,{useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './home.css';
import Header from '../components/header/header';
import Pesquisa_Filtro from "../components/pesquisa_filtro/pesquisa_filtro";
import Data from '../rest-countries-api-with-color-theme-switcher-master/data.json';


function Home(){

    const modoEscuro = localStorage.getItem('modoEscuro') === 'true';


    const [filtro, setFiltro] = useState({
        regiao: "",
        texto: ""
    });

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

    const navigate = useNavigate();

    const abrirModal = (country) => {
        navigate(`/country/${country.name}`);
        console.log(country.name)
    };

    return(
        <>
            <Header/>
            <Pesquisa_Filtro mudancaRegiao={mudancaRegiao}
                mudancaTexto={mudancaTexto}/> 
            <div className="lista-paises">
                {paisesFiltrados.map((country,index) => (
                    <div className="paises" chave={country.name} onClick={() => abrirModal(country)}>
                        <img src={country.flags.svg} alt={`Bandeira de ${country.name}`}/>
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
    )

}


export default Home;