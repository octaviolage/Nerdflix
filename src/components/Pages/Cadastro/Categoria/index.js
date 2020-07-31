import React, { useState, useEffect } from 'react';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import Loading from '../../../../assets/img/loading.gif';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(buffer) {
    setValue(
      buffer.target.getAttribute('name'),
      buffer.target.value,
    );
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    setTimeout(() => {
      fetch(url)
        .then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias(resposta);
        });
    }, 3 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(buffer) {
        buffer.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          <img src={Loading} width="50px" alt="Loading..." />
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
