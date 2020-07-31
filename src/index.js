import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import CadastroVideo from './components/Pages/Cadastro/Video';
import CadastroCategoria from './components/Pages/Cadastro/Categoria';
import NotFound from './components/Pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
