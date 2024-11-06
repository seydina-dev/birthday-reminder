import localFont from "next/font/local";
import "./globals.css";

const rubikDoodleShadowRegular = localFont({
  src: "./fonts/RubikDoodleShadow-Regular.ttf",
  variable: "--font-Rubik-doodle-shadow-regular",
  weight: "400",
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
});
const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
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
        className={`${rubikDoodleShadowRegular.variable} ${poppinsMedium.variable} ${poppinsBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
