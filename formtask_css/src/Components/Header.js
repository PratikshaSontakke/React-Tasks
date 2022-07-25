import { useState } from "react";
import './Head.css'
import Navbar from './Navbar'
//import Card from "./Card";
import ShowItem from './ItemView'
//import WishList from './Wishlist';
import Delete from './Delete';




const Header = () =>{
    const [deleteIcon, setDeleteIcon] = useState(false);
    const [deleteIconForCard, setDeleteIconForCard] = useState(false);
    const SelectAllCards =() =>{
        if (deleteIconForCard===false)
        setDeleteIconForCard(true);
        else
        setDeleteIconForCard(false);

    }
    return(
        <>
            <Navbar/>
            <Delete cardSelect={SelectAllCards}/>
            <ShowItem deleteicon={deleteIcon} setDelete={setDeleteIcon} deleteiconforCard={deleteIconForCard} />
            
        </>
    )
}



export default Header;
