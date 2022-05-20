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
  const { navbar, legals,promotions,header } = textContent;
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
            
            <div className="flex  justify-center items-center mr-1 h-10 w-30 border-opacity-50 rounded pl-2 pr-2 self-center">
              <select
                id="language"
                className="border-4 h-8 w-20 rounded ml-3"
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
