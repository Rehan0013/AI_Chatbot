import { Link } from "react-router-dom";
import { logoLight, logoDark } from "../assets/assets";
import PropTypes from "prop-types";

const Logo = ({classes = ''}) => {
  return (
    <Link to={'/'} className={`min-w-max max-w-max h-[24px] ${classes}`}>
    <img src={logoLight} alt="Phoenix logo" width={133} height={24} className='dark:hidden'/>
    <img src={logoDark} alt="Phoenix logo" width={133} height={24} className='hidden dark:block'/>
   </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;