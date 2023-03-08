import MoveTopButton from "components/MoveTopButton";
import { Container } from "react-bootstrap";
import AppFooter from "./components/Footer";
import AppNavbar from "./components/Navbar";

export default function AppLayout(props: any) {
  const { children } = props;
  return (
    <div>
      <AppNavbar />
      <div style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </div>
      <MoveTopButton />
      <AppFooter />
    </div>
  )
}
