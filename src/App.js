import React, { Component, Fragment } from 'react';
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
    state = {
        noticias: []
    }

    componentDidMount() {
        this.consultarNoticias();
    }
    
    consultarNoticias = async (categoria = 'general') => {
        const token = "8251c17b02ea44db893f8d2af1f671e7"
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${token}`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        this.setState({
            noticias : noticias.articles
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    titulo="Noticias React API"
                />
                <div className="container white contenedor-noticias ">
                    <Formulario 
                        consultarNoticias={this.consultarNoticias}
                    />
                    <ListaNoticias
                        noticias={this.state.noticias}
                    />
                </div>
            </Fragment>
        );
    }
}

export default App;