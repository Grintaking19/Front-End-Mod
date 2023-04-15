import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavBar from "./Components/layouts/navbar/NavBar";


import Container from "./Components/container/Container";
function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <NavBar />
        <Container> </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
