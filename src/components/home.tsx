import { useState } from "react";
import { connect } from "react-redux";
import { IInitialState } from "~/interfaces";
import Slide from "~/components/slide";

const Home = (props) => {
  const { textContent } = props;
  const {
    navbar,
    legals,
    promotions,
    header,
    buttonBook,
    carousel,
    prefooter,
    footer,
  } = textContent;

  const [legal] = useState(legals.split("<br/>"));

  if (navbar === undefined) {
    return <></>;
  } else {
    return (
      <>
        <div className="w-full p-0 flex justify-center h-[600px] mt-16  flex-col  bg-cover bg-color4 mb:py-5 lg:h-[522px] lg:py-10  lg:px-64 lg:mt-28">
          <h1 className="text-center text-color13 pt-10 pb-4 text-5xl leading-normal uppercase lg:text-left">
            {header ? header.h1 : ""}
          </h1>
          
          <div className="flex flex-col lg:flex-row">
            <div className="flex items-center">
              <p className="w-full text-center text-5xl text-color13 font-medium px-10 ">
                {header.discount}
              </p>
            </div>
            <div className="flex items-center p-5">
              {" "}
              <p className="text-left text-3xl text-color8 font-medium lg:text-left">
                {header.paragraphs}
              </p>{" "}
            </div>
          </div>
        </div>
        {promotions.map((promotion, index) => {
          return (
            <div key={index}>
              <img
                alt={promotion.title}
                src={promotion.logoPromo}
                className="w-2/12 mx-auto py-16"
              ></img>
              <div className="flex flex-col container mx-auto items-center lg:flex-row lg:px-24 ">
                <img
                  alt="Hotel Xcaret Arte"
                  src={promotion.imagePromo}
                  className=" mx-auto"
                ></img>
                <div className="flex flex-col py-10 px-5 lg:w-1/2">
                  <h2 className="text-center text-3xl">{promotion.title}</h2>
                  <p className="font-medium py-4 text-2xl">
                    {promotion.Subtitle}
                  </p>
                  <p className="font-medium py-4 text-xl">
                    {promotion.paragraphs}
                  </p>
                  <div className="py-10 mx-auto w-1/2">
                    <a
                      href={promotion.button.href}
                      className="uppercase px-6 py-2 border text-black  justify-center text-center mx-auto text-sm"
                    >
                      {promotion.button.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="container mx-auto  flex flex-col py-10 lg:px-24">
          <p className="text-2xl py-10 text-center lg:px-40">{carousel.text} </p>
          <Slide />
          <div className="py-10 mx-auto w-1/2">
          <a
            href={buttonBook.href}
            className="flex items-center justify-center w-[250px] h-[60px] border-solid border-color7 border rounded-sm uppercase  text-black text-center mx-auto text-sm "
          >
            <h2>{buttonBook.text}</h2>
          </a>
          </div>
        </div>

        <div className="py-10 px-10 bg-lightsand bg-color3 lg:py-10 lg:px-20">
          {legal.map((lg, index) => {
            return (
              <p
                className="w-[300px] py-2 text-gray-900 text-xs md:w-[450px] lg:w-[600px]"
                key={index}
              >
                <span className="text-center justify-center">{lg}</span>
              </p>
            );
          })}
        </div>

        <footer>
          <div className=" w-full py-4 px-12 bg-color9">
            <div className=" mx-auto flex my-8">
              <div className="text-xs text-color1">
                <span className="uppercase flex mb-2 font-bold">
                  {prefooter.contactCenter.title}
                </span>
                <ul className=" text-simplegrey flex-col flex">
                  <li className="inline-block">
                    <span className="flex mb-2 font-bold">
                      {" "}
                      {prefooter.contactCenter.email}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mx-auto flex flex-wrap">

              {prefooter.numbers.map((l,index) => {
                return (
                  
                  <div className="text-xs font-bold pr-10 mb-3" key={index}>
                  <span className="uppercase flex mb-2">{l.name}</span>
                  <a className=" font-simplegrey" href={l.href}>
                    {l.number}
                  </a>
                </div>
                );
              })}
            </div>
          </div>

          <div className="py-2 px-10 bg-color13">
            <div className="text-color1  flex mx-auto px-2 text-xs">
              <div className="flex-auto">{footer.copy}</div>
              {footer.links.map((l, index) => {
                return (
                  <a
                    href={l.href}
                    className="ml-16 font-simplegrey"
                    key={index}
                  >
                    {l.tittle}
                  </a>
                );
              })}
            </div>
          </div>
        </footer>
      </>
    );
  }
};

const mapStateToProps = (state: IInitialState) => {
  return {
    language: state.language,
    textContent: state.textContent,
  };
};

export default connect(mapStateToProps)(Home);
