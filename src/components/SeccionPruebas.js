import React, { Component } from "react";
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    contador =0;

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador:0
    //     }
    // }

    state = {
                contador:0
            }
    // esto es un metodo ya no es una funcion
    Hola(nombre, edad) {
        var presentacion = (<div>
            <h2>hola {nombre}</h2>
            <h2>edad {edad}</h2>
        </div>);
        return presentacion
    }

    sumar=(e)=>{
        // this.contador = this.contador+1;
    this.setState({
        contador:this.state.contador+1
    });
    }

    restar(e){
        // this.contador = this.contador-1;
        this.setState({
            contador:this.state.contador-1
        });
    }

    render() {

        var nombre = "sofia";
        var edad = 33;

        return (
            <section id='content'>

                <h2 className="subheader">Ultimos Articulos</h2>
                <p>tachannn</p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.Hola(nombre, edad)}

                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
                    <MiComponente />
                    <Peliculas />
                </section>

                <h2 className="subheader">Estado(son los que se actualizan dinamicamente)</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="sumar" onClick={this.sumar}/>
                    <input type="button" value="restar" onClick={this.restar.bind(this)}/>

                </p>

            </section>
        );
    }
}

export default SeccionPruebas;