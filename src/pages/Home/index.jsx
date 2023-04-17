import Main from "./Main";
import Carrousel from "./Carrousel";
import Productos from "./Productos";


const Home = () =>{
    return(
        <>
            <Main/>
            <Carrousel/>
            <Productos url={"/productos"}/>
        </>
    );
}

export default Home