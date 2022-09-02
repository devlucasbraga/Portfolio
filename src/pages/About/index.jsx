import ProgressLanguages from "../../components/ProgressLanguages";
import { BoxTitle, ContainerAbout } from "./styled";

export const About = () => {
  return (
    <ContainerAbout>
      <div className="title">
        <h1>Olá, Sou o Lucas</h1>
        <p>
          Iniciei minha trajetória nessa área da tecnologia em 2020 quando
          comecei na faculdade Estácio no curso de análise de desenvolvimento de
          sistemas onde aprendi muitos conceitos e tecnologia que estão no
          mercado, mas sempre fui apaixonado por tecnologia em saber como
          funciona por trás de um site, de uma rede e com avanço dessa nova era
          só me despertou mais o interesse de iniciar uma trajetória
          profissional como desenvolvedor. Desde então venho estudando e
          absorvendo conteúdos na internet para me ajudar no aprendizado
          participando de maratonas e cursos online pelo YouTube. Iniciei um
          curso online na plataforma da Origamid que tem o foco em
          desenvolvimento fron-end web e la aprendi muitos conceitos, linguagens
          e ferramentas, e venho estudando Javascript e seus framework React.js,
          Next.js e agora estou buscando estudar a cultura DevOps e cloud
          também. Um pouco sobre mim e meu início na carreira profissional.
        </p>

        <BoxTitle>
          <ProgressLanguages>
            <p>90%</p>
            <div className="b1">
              <div className="b2"></div>
            </div>
          </ProgressLanguages>
          <span>HTML</span>
          <p>80%</p>
          <div className="b1">
            <div className="b2"></div>
          </div>
          <span>CSS3</span>
          <p>60%</p>
          <div className="b1">
            <div className="b2"></div>
          </div>
          <span>JAVASCRIPT</span>
          <p>30%</p>
          <div className="b1">
            <div className="b2"></div>
          </div>
          <span>REACT.JS</span>
        </BoxTitle>
      </div>
    </ContainerAbout>
  );
};
