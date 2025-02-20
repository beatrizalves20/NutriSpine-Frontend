import React from 'react';
import Button from "../layouts/Button";                                                     

const Home = () => {
    return (
      <div className=" min-h-screen flex flex-col justify-center lg:px-29 px-5 text-white bg-[url('assets/img/nutrispine.png')] bg-no-repeat bg-cover opacity-90">
        <div className=" w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Uma clínica para quem busca mais saúde, autoestima e confiança,
            combinando ciência e prática.
          </h1>
          <p>
            A empresa em si é uma empresa de muito sucesso. Que ótimo cada
            nascimento dos acusadores que Ele vai criticar os incidentes que
            aconteceram evita desconforto, mas seguir a dor é culpa, a escolha dos
            prazeres ele deveria fugir?
          </p>
  
          <Button title="Ver Serviços" />
        </div>
      </div>
    );
  };

export default Home;