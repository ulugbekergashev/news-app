import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {useRef} from "react"
import style from "../styles/Navbar.module.scss"
import  Link  from 'next/link';
import { useRouter } from 'next/router';
import {useState} from "react"

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("");
  
    const searchQueryHandler = (event) => {
      if (
          (event?.key === "Enter" || event === "searchButton") &&
          searchQuery?.length > 0
      ) {
          router.push(`/searchResult/${searchQuery}`);
          setSearchQuery("")
          onClose()
      }
  };
    const [display, setDisplay] = useState(true);
    return (
      <>
        
        <div className={style.bar} ref={btnRef} colorscheme='teal' onClick={onOpen} >
          <i className="fa-solid fa-bars-staggered fs-4"></i>
        </div>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

  
            <DrawerBody className={style.modalCategories}>
              <Link onClick={onClose} className={style.modalCategory }  href={"/"} >
                popular
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/business"} >
                business
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/entertainment"} >
                entertainment
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/general"} >
                general
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/science"} >
                science
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/sports"} >
                sports
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/category/technology"} >
                technology
              </Link>
              <div className={style.modalSearch } >
                <i className="fa-solid fa-xmark" 
                  onClick={()=>{
                    setSearchQuery("")
                  } }  
                  >  
                </i>
                <input type="text" 
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  value={searchQuery}
                  onKeyUp={searchQueryHandler} 

                />
                <div onClick={()=>{
                  setDisplay(false)
                  searchQueryHandler("searchButton")
                
                }}>
                  <i className={"fa-solid fa-magnifying-glass "}  ></i>
                </div>
              </div>
              <div className={style.regtext + " mt-4"}>
                  Regions
              </div>
              <Link onClick={onClose} className={style.modalCategory + " mt-2"} href={"/"} >
                United States
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/ru"} >
                Russia
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/cn"} >
                China
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/gb"} >
                Un.Kingdom
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/fr"} >
                France
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/jp"} >
                Japan
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/tr"} >
                Turkiye
              </Link>
              <Link onClick={onClose} className={style.modalCategory} href={"/country/in"} >
                India
              </Link>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }