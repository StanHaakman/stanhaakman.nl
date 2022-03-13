import switcher from './../images/switch_bg.svg';
import logo from './../images/stanLogo.svg';
import logoDarkMode from './../images/stanLogoDarkMode.svg';
import moon from './../images/moon.svg'
import circle from './../images/circle.svg'
import useDarkMode from "../hook/useDarkMode";

function Navbar(props) {
    const [colorTheme, setTheme] = useDarkMode();

    return (
      <nav className="nav fixed top-0 flex w-full px-10 py-5 justify-between items-center z-10">
          <span onClick={() => setTheme(colorTheme)} className="switcher relative justify-center items-center cursor-pointer h-fit">
              <img src={switcher} alt="" className=""/>
              <img className="absolute top-1/2 -translate-y-1/2 left-1 dark:left-auto dark:right-1 transition-all opacity-0 dark:opacity-100" src={moon} alt=""/>
              <img className="absolute top-1/2 -translate-y-1/2 left-1 dark:left-auto dark:right-1 transition-all opacity-100 dark:opacity-0" src={circle} alt=""/>
          </span>

          <div className="spacerLine bg-black dark:bg-white h-px"/>

          <div className="brand">
              { colorTheme === 'light' ? (
                  <img src={logoDarkMode} alt=""/>
              ): (
                  <img src={logo} alt=""/>
              )}
          </div>

          <div className="spacerLine bg-black dark:bg-white h-px"/>

          <div className={"menu-trigger relative h-10 w-10 m-2"}>
              <span className="
              line w-10 bg-black h-1 absolute top-1/2 m-auto dark:bg-white

              before:w-4 before:absolute before:bg-black before:h-1 before:-top-3 before:dark:bg-white

              after:w-4 after:absolute after:bg-black after:h-1 after:top-3 after:right-0 after:dark:bg-white
              " />
          </div>
      </nav>
    );
}

export default Navbar;