import React from "react";
import './modal.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from "../../components/header/header";
import Data from '../../rest-countries-api-with-color-theme-switcher-master/data.json';

function Modal() {
    const modoEscuro = localStorage.getItem('modoEscuro') === 'true';

    const { id } = useParams();
    const country = Data.find(e => e.name === id);

    const nomePais = (codigo) => {
        const country = Data.find(e => e.alpha3Code === codigo);
        return country ? country.name : codigo;
    };

    const navigate = useNavigate();

    const abrirModal = (country) => {
        navigate(`/country/${country.name}`);
    };

    return (
        <>
            <Header />
            <div className={`botao ${modoEscuro ? 'modo-escuro' : ''}`}>
                <Link className="tag" to="/">
                    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/arrow-left.css' rel='stylesheet'></link>
                    <span>
                        <i className="gg-arrow-left"></i>
                    </span>
                    <div className="texto2">
                        Voltar
                    </div>
                </Link>
            </div>
            <div className={`modal ${modoEscuro ? 'modo-escuro' : ''}`}>
                <div className="total-conteudo">
                    <img className="img-modal" src={country.flags.svg} alt={`Bandeira de ${country.name}`} />
                    <div className="conteudo2">
                        <div className="tituloPais">{country.name}</div>
                        <div className="texto-base">
                            <div className="coluna">
                                <p className="text"><strong>Nome Nativo:</strong> {country.nativeName}</p>
                                <p className="text"><strong>População</strong>: {country.population}</p>
                                <p className="text"><strong>Região:</strong> {country.region}</p>
                                <p className="text"><strong>Sub Região:</strong> {country.subregion}</p>
                                <p className="text"><strong>Capital:</strong> {country.capital}</p>
                            </div>
                            <div className="coluna">
                                <p className="text"><strong>Domínio de nível superior:</strong> {country.topLevelDomain}</p>
                                <p className="text"><strong>Moedas:</strong> {country.currencies.map(currency => currency.name).join(', ')}</p>
                                <p className="text"><strong>Linguagem:</strong> {country.languages.map(language => language.name).join(', ')}</p>
                            </div>
                        </div>
                        {country.borders && country.borders.length > 0 && (
                            <div className="fronteiras">
                                <div className="titulo-pais"><strong>Países Fronteiriços:</strong> </div>
                                <div className="paises-fronteiras">
                                    {country.borders.map((border) => {
                                        const borderingCountry = Data.find(e => e.alpha3Code === border);
                                        return (
                                            <div
                                                className="lista-fronteiras"
                                                key={border}
                                                onClick={() => abrirModal(borderingCountry)}
                                            >
                                                {nomePais(border)}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
