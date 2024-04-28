import Navegacion from "@/components/Navegacion";
import "./globals.css";

export const metadata = {
  title: "Megadigital",
  description: "Generated by create next app",
  keywords: 'next, react, app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>

      <body>
        <Navegacion />
        <div className="container p-4">
        {children}
        </div>
        </body>
    </html>
  );
}
