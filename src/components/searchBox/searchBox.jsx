import './searchBox.styles.css'
const SearchBox=({onSearch})=>{
    return(
        <input  
            type="search" 
            placeholder="Pokemon a buscar..." 
            onChange={onSearch}
            className="search-box"
        />
    )
}
export default SearchBox