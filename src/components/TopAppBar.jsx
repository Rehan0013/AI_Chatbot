import {IconBtn} from "./Button";
import { useNavigation, useNavigate, useLoaderData } from "react-router-dom";
import Avatar from "./Avatar";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import { LinearProgress } from "./Progress";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "../hooks/useToggle";
import logout from "../utils/logout";
import Logo from "./Logo";

const TopAppBar = () => {

  const [showMenu, setShowMenu] = useToggle();

  const navigation = useNavigation();

  const navigate = useNavigate();

  const {user} = useLoaderData();

  const isNormalLoad = navigation.state === 'Loading' && !navigation.formData;

  return (
    <header className="relative flex justify-between items-center h-16 px-4">
      <div className="flex items-center gap-1">
        <IconBtn icon="menu" title="Menu" classes="lg:hidden"/>
        <Logo classes="lg:hidden" />
      </div> 
      <div className="menu-wrapper">
        <IconBtn onClick={setShowMenu}>
          <Avatar name={user.name}/>
        </IconBtn>
        <Menu classes={showMenu ? 'active' : ''}> 
          <MenuItems labelText="Logout" onClick={() => logout(navigate)} />
        </Menu>
      </div>
      <AnimatePresence>
         {isNormalLoad && (
        <LinearProgress />
      )}
      </AnimatePresence>
     
    </header>
  );
};

export default TopAppBar;