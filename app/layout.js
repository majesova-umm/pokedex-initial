import "./globals.css";

export const metadata = {
  title: "Pokédex",
  description: "Laboratorio de Diseño de Interfaces — Universidad Marista de Mérida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
