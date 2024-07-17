import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import EshopChatBot from "../chatbot/ChatBot";

const LayOut = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "74vh" }}>
        <Toaster />
        {props.children}
      </main>
      <EshopChatBot />
      <Footer />
    </div>
  );
};

LayOut.defaultProps = {
  title: "Eshop app",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Aarjav Jain",
};

export default LayOut;
