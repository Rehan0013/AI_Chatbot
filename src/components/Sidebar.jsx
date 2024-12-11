import PropTypes from "prop-types";
import Logo from "./Logo";
import { ExtendedFab } from "./Button";
import { NavLink } from "react-router-dom";
import { IconBtn } from "./Button";

const Sidebar = () => {
  return ( 
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
            <div className="h-16 grid items-center px-4 mb-4 ">
                <Logo />
            </div>
            <ExtendedFab href='/' text="New Chat" classes=""/>
            <div className="overflow-y-auto -me-2 pe-1">
              <p className="text-titleSmall h-9 grid items-center px-4">Recent</p>

              <nav>
                <div className="realtive group">
                  <NavLink to='' className='nav-link' title="" >
                    <span className="material-symbols-rounded icon-small">Chat bubble</span>
                    <span className="truncate">New Conversation</span>
                    <div className="state-layer"></div>
                  </NavLink>
                    <IconBtn icon='delete' size="small" classes='absolute top-1 right-1.5' title="Delete"/> 
                </div>
              </nav>
            </div>
            <div className="">
              &copy; 2024 Rehan Ali
            </div>
        </div>
    </div>

    <div className={`overlay`}></div>
    </>
    
  );
};

export default Sidebar;