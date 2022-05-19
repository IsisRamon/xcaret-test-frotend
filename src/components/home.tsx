import { connect } from "react-redux";

import Image from 'next/image'

import { IInitialState } from "~/interfaces";

const Home = (props) => {
  const {textContent} = props
   const { navbar, legals,promotions,header,buttonBook,carousel,prefooter,footer } = textContent;
   if(navbar === undefined ){
    return <></>
   } else{
  return (
      <div>

          <div className="mt-28 flex flex-col pt-10  pb-10 px-64 bg-cover bg-color4  " >
            <h1 className="text-color13 pt-10 pb-4 text-5xl leading-normal uppercase">{header? header.h1:""}</h1>

            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 ..."><p className="text-5xl text-color13 font-medium px-10 ">{header.discount}</p></div>
                <div className="row-span-2 col-span-2 ..."> <p className="text-3xl text-color8 font-medium ">{header.paragraphs}</p>        </div>
              </div>
          </div>

          <img alt={promotions[0].title} src={promotions[0].logoPromo} className="w-2/12 mx-auto py-16"></img>
    
          <div className="flex flex-row px-24 container mx-auto items-center">
            <img alt="Hotel Xcaret Arte" src={promotions[0].imagePromo} className="w-1/2 mx-auto" ></img>
              <div className="w-1/2 flex flex-col py-10 px-5">
                <h2 className="text-3xl">{promotions[0].title}</h2>
                <p className="font-medium py-4 text-2xl">{promotions[0].Subtitle}</p>
                <p className="font-medium py-4 text-xl">{promotions[0].paragraphs}</p>
                <div className="py-10 mx-auto w-1/2">
                  <a href={promotions[0].button.href} className="uppercase  px-6 py-2 border text-black text-center mx-auto text-sm">{promotions[0].button.text}</a>
                </div>
             </div>
          </div>

          <div className="px-24 container mx-auto relative flex flex-col py-10">
            <p className="text-2xl text-center px-40">{carousel.text}      </p>

              <a href={buttonBook.href} className="uppercase antialiased px-6 py-2 border  text-black text-center mx-auto text-sm">{buttonBook.text}</a>
              </div>

              <div className="py-10 px-20 bg-lightsand bg-color3">
                <p className="py-4 text-gray-900 text-xs">
                  <span className="text-center justify-center">
                  {legals}
                  </span>
                </p>

                </div>

  
        <footer>
          <div className=" w-full py-4 px-12 bg-color9">
              <div className=" mx-auto flex my-8">
                <div className="text-xs text-color1">
                  <span className="uppercase flex mb-2 font-bold">{prefooter.contactCenter.title}</span>
                  <ul className=" text-simplegrey flex-col flex">
                    <li className="inline-block">
                    <span className=" flex mb-2 font-bold"> {prefooter.contactCenter.email}</span>
                    </li>
                  </ul>
                </div>
              </div>
            <div className=" mx-auto flex flex-wrap">
                <div className="text-xs font-bold pr-10 mb-3">
                  <span className="uppercase flex mb-2">MÉXICO SIN COSTO</span>
                  <a className=" font-simplegrey" href="tel:8000097567">800 009 7567</a>
                </div>

                  <div className="text-xs font-bold text-simplegrey pr-10 mb-3">
                    <span className="uppercase text-simplegrey flex mb-2">CANADÁ</span>
                    <a className=" font-simplegrey" href="tel:18448340153">1 844 834 0153</a>
                  </div>         
            </div>
         </div>
                
          
           
          <div className="py-2 px-10 bg-color13">
              <div className="text-color1  flex mx-auto px-2 text-xs">
                <div className="flex-auto">{footer.copy}</div>
                <a href={footer.links[1].href} className="ml-16 font-simplegrey">{footer.links[1].tittle}</a>
                <a href={footer.links[0].href} className="ml-16 font-simplegrey">{footer.links[0].tittle}</a>
              </div>
          </div>
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