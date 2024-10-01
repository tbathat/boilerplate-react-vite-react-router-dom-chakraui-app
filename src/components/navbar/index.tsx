import * as c from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <c.Flex justify="space-between">
      <Link to="/">
        <c.Text>Home</c.Text>
      </Link>
      <Link to="/about">
        <c.Text>About</c.Text>
      </Link>
      <Link to="/contact">
        <c.Text>Contact</c.Text>
      </Link>
    </c.Flex>
  );
};

export default Navbar;
