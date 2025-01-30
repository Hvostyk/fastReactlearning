import Header from "../components/Header.jsx";
import Firstpage from "../components/Firstpage.jsx";
import Features from "../components/Features.jsx";
import Market from "../components/Market.jsx";

function Homepage(){
    return(
        <header>
            <Header/>
            <Firstpage/>
            <Features/> 
            <Market/>
        </header>
    );
}

export default Homepage;