import BasicNavbar from "./components/Navbar";
import Head from "next/head";
function About() {
  return (
    <>
     <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicNavbar />
    <div>
      <h1>this is about page</h1>
    </div>
    </>
  );
}

export default About;