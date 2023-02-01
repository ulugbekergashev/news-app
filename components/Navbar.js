// import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import style from "../styles/Navbar.module.scss"
import Image from "next/image"
import  Link  from 'next/link';
import { useRef } from "react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DrawerExample from "./MyDrawer";

export default function NavBar() {
  const focusRef = useRef();
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("");
  const [display, setDisplay] = useState(true);

  const searchQueryHandler = (event) => {
    if (
        (event?.key === "Enter" || event === "searchButton") &&
        searchQuery?.length > 0
    ) {
        router.push(`/searchResult/${searchQuery}`);
        setSearchQuery("")
        // focusRef.current.focus()
    }
};
  useEffect(() => {
    if (!display) {
      focusRef.current.focus();
    }
  }, [display]);
  return (
    <>  
    <div className={style.navbar + " container"}>
        <Link href={"/"} className={style.title + " text-decoration-none"} ><h1>NewsApp</h1></Link>
        <DrawerExample />
        <div className={style.categories}  style={{ display: display ? "flex" : "none" }} >
          <Link className={style.category }  href={"/"} >
            popular
          </Link>
          <Link className={style.category} href={"/category/business"} >
            business
          </Link>
          <Link className={style.category} href={"/category/entertainment"} >
            entertainment
          </Link>
          <Link className={style.category} href={"/category/general"} >
            general
          </Link>
          <Link className={style.category} href={"/category/science"} >
            science
          </Link>
          <Link className={style.category} href={"/category/sports"} >
            sports
          </Link>
          <Link className={style.category} href={"/category/technology"} >
            technology
          </Link>
        </div>
        <div className={style.searchbox } style={{flexGrow: display ? "0" : "1", border: display ? "none" : "2px solid black", padding: display ? "0" : "3px 8px" }} >
          <i className="fa-solid fa-xmark" 
            onClick={()=>{
              setDisplay(true)
            } }  
            style={{ display: display ? "none" : "block" }} >  
          </i>
          <input type="text" 
            style={{ display: display ? "none" : "block" }} 
            onChange={(e)=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchQueryHandler} 
            ref={focusRef}
          />
          <div onClick={()=>{
            setDisplay(false)
            searchQueryHandler("searchButton")
          
          }}>
            <i className={"fa-solid fa-magnifying-glass "}  ></i>
          </div>
        </div>
    </div>
    <div className={style.navbarfoot + " container"}>
      <div className={style.regtext}>
          Regions
      </div>
      <div className={style.countries}>
        <Link className={style.country} href={"/"} >
          United States
        </Link>
        <Link className={style.country} href={"/country/ru"} >
          Russia
        </Link>
        <Link className={style.country} href={"/country/cn"} >
          China
        </Link>
        <Link className={style.country} href={"/country/gb"} >
          Un.Kingdom
        </Link>
        <Link className={style.country} href={"/country/fr"} >
          France
        </Link>
        <Link className={style.country} href={"/country/jp"} >
          Japan
        </Link>
        <Link className={style.country} href={"/country/tr"} >
          Turkiye
        </Link>
        <Link className={style.country} href={"/country/in"} >
          India
        </Link>
      </div>
    </div>
    </>    
  );
}
