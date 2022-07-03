import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import './layout.styles.css'
const Layout =()=>{
    return (
        <Fragment>
            <div className='padingbotomsearch'>
            <img className="imagenlogo" src="../../../src\images\pokebola.png" alt=" asdasd" />
                    <nav className='padingbotomsearch'>
                        <Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>
                        <span>     </span>
                        <Link style={{textDecoration:'none', color:'black'}} to='/about'>About Pokemon</Link>
                    </nav>
                    <div>
                        <Outlet/>
                    </div>
            </div>
        </Fragment>
    )
}
export default Layout;