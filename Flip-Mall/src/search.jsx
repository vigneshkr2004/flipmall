import { useNavigate } from "react-router-dom";

function Search(){

    const navigate = useNavigate()

    return(
            <nav className="nav">
                <div  className="logo">
                    <img className="flip-image rounded-circle" src="src/assets/fm.png" alt="filp-image" />
                    Flip Mall</div>
                    <input className="search form-control" type="text" placeholder="Search"/>
                <ul className="nav-links">
                    <li onClick={()=>{navigate('#')}}><a>Home</a></li>
                    <li onClick={()=>{navigate('/login')}}><a>Login</a></li>
                    <li onClick={()=>{navigate('/#')}}><a>About</a></li>
                </ul>
                
            </nav>
    )
}

export default Search