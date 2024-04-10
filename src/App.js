import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import BookingForm from "./components/BookingForm";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <ChakraProvider>
      <AlertProvider>
      <BookingForm />
      <Alert/>
      </AlertProvider>
      </ChakraProvider>
      <Footer />
    </>
  );
}

export default App;
