import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NotFoundPage = () => {
  return (
    <Container className="text-center">
      <h1> Sorry, the page is not exist!</h1>
      <h2>Please <b><Link to="/login">login </Link></b>to continue!</h2>
      <h2>Or go to <b><Link to="/user">Main </Link></b>to continue!</h2>
    </Container>
  )
}

export default NotFoundPage;