//cards do boostrap:
import { Link } from "react-router-dom";

function Menu() {
    return (

        <div className='containerNav'>
            <div className="row">
                <div className="col-12">

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">OnTech </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a classNameN="nav-link active" aria-current="page" href="/sobre-nos">Sobre Nós</a>
        <a className="nav-link" href="/nossos-clientes">Nossos Clientes</a>
      </div>
    </div>
  </div>
</nav>

</div>
</div>
</div>
          

    );
};


export default Menu
