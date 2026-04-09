import { useState } from "react";
import "./App.css";

function App() {
  const [categoria, setCategoria] = useState("imoveis");

  const [imoveis] = useState([
    {
      id: 1,
      nome: "Apartamento 2 Quartos",
      preco: "R$ 180.000",
      desc: "Otima localização e segurança"
    },
    {
      id: 2,
      nome: "Apartamento com Suite",
      preco: "R$ 220.000",
      desc: "Conforto e espaço para família"
    },
    {
      id: 3,
      nome: "Casa em Condomínio",
      preco: "R$ 300.000",
      desc: "Área gourmet e vaga dupla"
    }
  ]);

  const [ofertas] = useState([
    { id: 1, descricao: "Desconto de R$ 10.000 na entrada" },
    { id: 2, descricao: "Parcelamento em até 60x sem juros" }
  ]);

  return (
    <div className="container">
      <h1>🏠 MRV - Imóveis</h1>

      <div className="botoes">
        <button
          className={categoria === "imoveis" ? "ativo" : ""}
          onClick={() => setCategoria("imoveis")}
        >
          Imóveis
        </button>
        <button
          className={categoria === "ofertas" ? "ativo" : ""}
          onClick={() => setCategoria("ofertas")}
        >
          Ofertas
        </button>
      </div>

      <div className="grid">
        {categoria === "imoveis"
          ? imoveis.map((item) => (
              <div className="card" key={item.id}>
                <h2>{item.nome}</h2>
                <p className="desc">{item.desc}</p>
                <span className="preco">{item.preco}</span>
              </div>
            ))
          : ofertas.map((oferta) => (
              <div className="card oferta" key={oferta.id}>
                <p>{oferta.descricao}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;