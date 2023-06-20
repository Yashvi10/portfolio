import { Nav,
	NavItem,
  NavLink,
  NavMenu,
  Logo,
  NavDropdown,
  NavDropdownContents
} from './Navbar.styled';

// function Navbar() {
//   return (
//     <>
//       <Nav>
//         <Logo>
//             portfolio
//         </Logo>
//         <NavMenu>
//           <NavLink to='/' >
//             Home
//           </NavLink>
//           <NavDropdown>
//           About
//           <NavDropdownContents>
//           <NavLink to='/projects' >
//           </NavLink>
//           </NavDropdownContents>
//           </NavDropdown>
//           <NavLink to='/contact' >
//             Contact
//           </NavLink>
//           </NavMenu>        
//       </Nav>
//       </>
//   );
// }

const Navbar = () => {
  return (
    <Nav>
      <NavItem to="/" exact activeClassName="active">
        Home
      </NavItem>
      <NavItem to="/about" activeClassName="active">
        About
      </NavItem>
		<NavItem to="/contact" activeClassName="active">
        Contact Us
      </NavItem>
      {/* Add more nav items for your routes */}
    </Nav>
  );
};

export default Navbar;