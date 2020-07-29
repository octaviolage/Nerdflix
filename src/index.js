import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/components/Pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './components/Pages/Cadastro/Video'
import CadastroCategoria from './components/Pages/Cadastro/Categoria'

const Pagina404 = () => (<div>404: Página não encotrada</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
