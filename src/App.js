import React, { Component } from 'react';

class App extends Component {
    state = {
        noticias: []
    }

    async componentDidMount() {
        const token = "8251c17b02ea44db893f8d2af1f671e7"
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${token}`

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        console.log(noticias);

        this.setState({
            noticias
        })

    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;