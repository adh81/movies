import Search from "./Search";
import { Link } from "react-router-dom";
import react from "react";
const Navbar = ({onSearch}) => {

    return(
        <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">فیلمهای من</a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link" to={"/"}>صفحه اصلی</Link>
          
        </li>
        <li class="nav-item">
          <Link className="nav-link " to={"/about"}>
          درباره
          </Link>
          
        </li>
        <li class="nav-item">
          <Link className="nav-link" to={"/news"}>جدیدترین ها</Link>
          
        </li>
    
      </ul>
      <Link className="nav-link text-white " to={"/favorites"}>علاقمندی ها</Link>
      
       <Search onSearch={onSearch}/>

    </div>
  </div>
</nav>


    )
}
export default Navbar;