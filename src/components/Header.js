import React, {Component} from "react";
import logo from '../assets/images/logo.svg';


class Header extends Component{

    render(){
        return(
            <header id="header">
            <div className="center">
                 {/* logo  */}
                <div id="logo" >
                    <img src={logo} className="app-logo" alt="logotipo" />
                    <span id="brand">Curso React</span>
                </div>
    
                {/* menu  */}
                <nav id="menu">
                    <ul>
                        <li><a href="index.html">inicio</a></li>
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="formulario.html">formulario</a></li>
                        <li><a href="#">pagina 1</a></li>
                        <li><a href="#">pagina 2</a></li>
    
                    </ul>
                </nav>
    
                {/* limpiar flotados */}
                <div className="clearfix"></div>
    
            </div>
        </header>
        );
    }
}

export default Header;