import React, { Component } from "react";

class Sidebar extends Component {

    render() {
        return (

            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>puedes crear un articulo</h3>
                    <a href="#" className="btn btn-success">crear articulo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>encuentra el articulo que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="buscar" className="btn btn-success"/>
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;