import './Head.css'
function Navbar(){
return(
<>
<div>
      <div className="header">
        <h1> Cosmetics </h1>{" "}
      </div>

      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <button> Cart</button>
        <button > Wishlist</button>

        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <i class="fa fa-bars"></i>
      </div>
    </div>

</>
)
}
export default Navbar;



