import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = (props) => {
    
    return (
      <section className="formulario">
        <form>
          <h2>{props.titulo}</h2>
          <CampoTexto
            label="Nome"
            placeholder="Digite seu nome"
            obrigatorio={true}
          />
          <CampoTexto
            label="Cargo"
            placeholder="Digite seu cargo"
            obrigatorio={true}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
          />
        </form>
      </section>
    );
}

export default Formulario