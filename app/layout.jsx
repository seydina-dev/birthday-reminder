// import localFont from "next/font/local";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Birthday Reminder",
  description:
    "This App helps me remind the birthdays of my friends since I always sleep  my mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.variable} ${roboto_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
