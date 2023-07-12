function SearchBar(props){
    return (
    <>
    <h1>YOOOOO</h1>
    <form>
        <input
        value={props.formState}
        onChange={e => props.formSetter(e.target.value)}
        ></input>
    </form>
    <div>
        
    </div>
    </>
    )
}

export default SearchBar;