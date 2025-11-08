import react,{ useState } from "react";
const Search = ({onSearch}) => {
  const [searchTerm,setSearchTerm]=useState('');
  const handleInpuitChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch){
      onSearch(searchTerm);
  }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  }
    return(
             <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="جستجوی فیلمها" aria-label="Search" value={searchTerm} onChange={handleInpuitChange}/>
        <button class="btn btn-outline-success" type="submit">جستجو</button>
      </form>
    )
}
export default Search;