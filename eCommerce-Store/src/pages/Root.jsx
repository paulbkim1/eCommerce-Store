import { Outlet, json } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main className="mx-auto min-h-[80vh] max-w-[500px] sm:max-w-[900px] px-[10px] sm:px-[20px] my-[10vh]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
