import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "../libs/BootstrapClient";
import "../styles/globals.css";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      <BootstrapClient />
      </body>
    </html>
  );
}