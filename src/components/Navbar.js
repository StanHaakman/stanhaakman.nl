import switcher from './../images/switch_bg.svg';
import logo from './../images/stanLogo.svg';
import moon from './../images/moon.svg'
import circle from './../images/circle.svg'

function Navbar() {
    return (
      <nav className="nav fixed top-0 flex w-full px-10 py-5 justify-between items-center">
          <div className="switcher relative justify-center items-center">
              <img src={switcher} alt="" className=""/>
          </div>

          <div className="brand">
              <img src={logo} alt=""/>
          </div>

          <div className="menu-trigger relative h-10 w-10 m-2">
              <span className="
              line w-10 bg-black h-1 absolute top-1/2 m-auto

              before:w-4 before:absolute before:bg-black before:h-1 before:-top-2

              after:w-4 after:absolute after:bg-black after:h-1 after:top-2 after:right-0
              " />
          </div>
      </nav>
    );
}

export default Navbar;