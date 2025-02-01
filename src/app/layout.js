import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageFooter from "./components/PageFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Kumar",
  description: "My portolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body className={inter.className}>
        <header><Navbar/></header>
        {children}
        <footer><PageFooter/></footer>
        </body>
       
    </html>
  );
}
