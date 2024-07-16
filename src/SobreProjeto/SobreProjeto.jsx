import InicioProjeto from "./InicioProjeto";
import Tecnologias from "./Tecnologias";
import Funcionalidades from "./Funcionalidades";
import Section from "../Components/Section";

function SobreProjeto({ name, tecnologias, funcionalidades }) {
  return (
    <>
      <Section id="sobreProjeto" className="h-max mt-32">
        <InicioProjeto name={name} />
      </Section>

      <Section id="tecnologias" className="h-max mb-32 lg:mb-0">
        <Tecnologias tecnologias={tecnologias} />
      </Section>

      <Section id="funcionalidades" className="h-max">
        <Funcionalidades funcionalidades={funcionalidades} />
      </Section>
    </>
  );
}

export default SobreProjeto;
