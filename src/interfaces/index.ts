export type TImg = {src:string, alt:string};
export type TLiks = {tittle:string, href:string}
export type TNumbers = {name:string, number?:string, href?:string, main?:boolean};
export type TLanguage = "es-ES"| "en-US";
export type TTextContent = {
    es: IResponse,
    en: IResponse
} | {};

export interface IInitialState {
textContent: TTextContent,
initial:boolean
language:TLanguage;
}

export interface IResponse {
    navbar: INavbar;
    header: IHeader;
    promotions :Ipromotions[];
    carousel: ICarousel;
    buttonBook: IButtonBook;
    legals: string;
    prefooter: Iprefooter;
    footer: IFooter;
};

export interface INavbar {
    logo: string;
    menu: {
        lang: {
            title: string;
            href: string;
        },
        contact: string;
        currency: string[];
    };
};

export interface IHeader {
    h1: string;
    discount:string;
    paragraphs: string[];
};

export interface Ipromotions {
    title: string;
    logoPromo:string;
    Subtitle: string;
    paragraphs: string[];
    button: {
        href:string;
        text:string;
    };
    imagePromo:string;
};



export interface ICarousel{
    text:string;
    desktop: TImg[];
    mobile: TImg[];
};

export interface IButtonBook{
    href:string;
    text:string;
};

export interface Iprefooter{
    contactCenter: {
        title:string;
        email:string
    }; 
    numbers : TNumbers[];
    social:{
        facebookUrl:string;
        instagramUrl: string;
        twitterUrl: string;
    };
};



export interface IFooter {
    copy:string;
    links: TLiks[];
};
