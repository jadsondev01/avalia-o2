import "./Areas.css";

function Areas() {
  return (
    <section className="areas">
      <h2>Principais Noticias da semana</h2>
      <ul>
        <li>
          <img src="imagens/logomessi.png" alt="Noticias" />
            Messi vence sua 8 bolo de ouro
        </li>
        <li>
          <img src="/imagens/vini.png" alt="Noticias 2" />
          Vini Jr sofre Racismo novamente
        </li>
        <li>
          <img src="imagens/beli.png" alt="Imagem da Área 3" />
          Belligham ganha premio por bom desempenho 
        </li>
        <li>
          <img src="imagens/Cr7.png" alt="Imagem da Área 4" />
          Cr7 segue quebrando records
        </li>
        <li>
          <img src="imagens/gabi.png" alt="Imagem da Área 5" />
          Sera que Gabigol voltará a sua melhor fase no flamengo?
        </li>
        <li>
          <img src="/imagens/ney.png" alt="Imagem da Área 6" />
          Ney segue machucado 
        </li>
      </ul>
    </section>
  );
}

export default Areas;
