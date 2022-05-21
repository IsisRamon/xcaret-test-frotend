import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { changeLanguage } from "~/redux/redux";
import { IInitialState, IResponse } from "~/interfaces";
import { GetResponse } from '~/api/endpoints/response'

const Header = (props) => {
  const { locales, asPath } = useRouter();
  const [language, setLanguage] = useState(props.language || "es-ES")
  const {textContent} = props
  const { navbar} = textContent;
  let dispatch = useDispatch();

  const preView = async (l, initial) => {
    await GetResponse(l.split("-")[0]).then((res)=>{   
      setLanguage(l)
      dispatch(changeLanguage(l, initial, res as IResponse));
    });
  }

  useEffect(() => {
    preView(language, false)
  }, [props.initial === true]);

 
  useEffect(() => {   
    if((document.getElementById("language") !== null)){
      (document.getElementById("language") as HTMLInputElement).value = language;
    }    
    preView(language, false)
  }, [language]);

  if(navbar === undefined ){
    return <></>
   } else{
    return (
      <nav className="fixed top-0 nav-header w-full flex items-center justify-between flex-wrap mx-auto text-color13 font-sans p-4 bg-color2">
      <a onClick={() => (location.href = "/")}><img alt="Hoteles Xcaret" src={navbar.logo} className=" w-full m-auto"></img></a>     
      <div className="flex flex-row h-20 w-50">
      <div className=" w-full md:block md:w-auto">
          <ul className="flex flex-row mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium uppercase">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent  md:hover:text-blue-700 ">{navbar.menu.contact}</a>
            </li>
            <li>
            <select
                id="language"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 bg-transparent"
                defaultValue={props.language || "es-ES"}
                onChange={(e) => setLanguage(e.target.value) }
              >
                {locales.map((l,index)=> {
                  return(
                    <Link href={asPath} locale={l} key={index}>
                    <option value={l}>{l}</option>
                    </Link>                  
                  )
                })}
                
              </select>
            </li>
            <li>
              <select className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 bg-transparent uppercase">
                  {navbar.menu.currency.map((m,index)=> {
                    return(
                      <Link href={asPath} locale={m} key={index}>
                      <option value={m}>{m}</option>
                      </Link>                  
                    )
                  })}
              </select>
            </li>
            <li>    
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}};

const mapStateToProps = (state: IInitialState) => {
  return {
    language: state.language,
    initial: state.initial,
    textContent: state.textContent,
  };
};

export default connect(mapStateToProps)(Header);
