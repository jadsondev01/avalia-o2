import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Depoimentos de Nossos Usuários</h2>
      <div className="testimonial">
        <img src="/imagens/persona1.png" alt="Imagem do Usuário 1" />
        <p>
          "Encontrei as melhores noticias de futbol do mundo "
        </p>
        <p>
          <strong>João Silva</strong>, Curioso do Futbol
        </p>
      </div>
      <div className="testimonial">
        <img src="/imagens/persona2.png" alt="Imagem do Usuário 2" />
        <p>
          "O LOUCOS por Futbol é uma das melhores plataformas de futbol da internet."
        </p>
        <p>
          <strong>Maria Souza</strong>, Curiosa do futbol 
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
