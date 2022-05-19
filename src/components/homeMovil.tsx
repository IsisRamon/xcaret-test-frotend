import { connect } from "react-redux";

import Image from 'next/image'

import { IInitialState } from "~/interfaces";

const Home = (props) => {
  const {textContent} = props
   const { navbar, legals,promotions,header } = textContent;
   if(navbar === undefined ){
    return <></>
   } else{
  return (
      <div>
        
 

          <div className='mt-28 flex justify-center text-sm w-1/4 bg-red-500 h-5 '>
            {navbar && 
            (<h1>{navbar.menu.contact}</h1> )
            }     
          </div>

          <div className="flex flex-col pt-10 pb-48 px-64 bg-cover bg-color4  " >
            <h1 className="text-color13 pt-10 pb-4 text-5xl leading-normal ">{header? header.h1:""}</h1>
              <div className="flex flex-row items-left w-2/3 pb-10"><p className="font-semibold text-4xl py-10"> </p>
                  <div>
                      <p className="text-lg text-color8-300 font-medium ">hola para disfrutar unas vacaciones All-Fun Inclusive en Hotel Xcaret Arte, una experiencia de hospedaje Solo Adultos, frente al mar Caribe, con acceso a todos los parques de Grupo Xcaret.
                      </p>
                      <p className="text-lg text-color13-300 font-medium ">10%
                        <span className="flex uppercase text-center justify-center mt-8 text-lg md:text-xl p-2 px-6 border border-white bg-white">Tarifa especial: 10 % de descuento durante el outlet Viaja y Vuela 2022.
                        </span>
                      </p>
                  </div>
              </div>
          </div>

          <img alt={promotions[0].title} src={promotions[0].logoPromo} className="w-2/12 mx-auto py-16"></img>

          <div className="flex flex-row px-24 container mx-auto items-center">
            <img alt="Hotel Xcaret Arte" src={promotions[0].imagePromo} className="w-1/2 mx-auto" ></img>
              <div className="w-1/2 flex flex-col py-10 px-5">
                <h2 className="text-3xl">HOTEL XCARET ARTE</h2>
                <p className="font-medium py-4 text-2xl">Será un honor darte la bienvenida a este paraíso eco-integrador que fusiona la belleza de la Riviera Maya con la riqueza cultural y artística de México.</p><p className="font-medium py-4 text-xl">Nuestras 900 suites cuentan con fascinantes vistas a la naturaleza. Elige entre el mar, caletas, río o jardines.</p>
                <div className="py-10 mx-auto w-1/2">
                  <a href="#" className="uppercase antialiased px-6 py-2 border text-black text-center mx-auto text-sm">¡Reserva ahora!</a>
                </div>
             </div>
          </div>



          <div className="px-24 container mx-auto relative flex flex-col py-10">
            <p className="text-2xl text-center px-40">La gastronomía es un arte que también se celebra en Hotel Xcaret Arte. Conoce las experiencias culinarias incluidas en tu próxima reservación.</p>






              <a href="#" className="uppercase antialiased px-6 py-2 border  text-black text-center mx-auto text-sm">¡Reserva ahora!</a>
              </div>



              <div className="py-10 px-20 bg-lightsand bg-color3">
                <p className="py-4 text-gray-900 text-xs">
                  <span className="text-center justify-center">
                  {legals}
                  </span>
                </p>

                </div>

    
  
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
}};

const mapStateToProps = (state: IInitialState) => {
  return {
    language: state.language,
    textContent: state.textContent
  };
};

export default connect(mapStateToProps)(Home);