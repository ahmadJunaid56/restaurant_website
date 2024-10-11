import "./globals.css";
import { Poppins } from "next/font/google"
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets:['latin']
})

export const metadata = {
  title: "Restaurant Website",
  description: "Generated by Ahmad Junaid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
