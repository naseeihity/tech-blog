import React from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import Image from "./image";
import Header from "./header";
import Footer from "./footer";
import "../style/layout.css";
import "../style/typo.css";
import "../style/custom.css";
import mainStyle from "../style/main.module.css";

const shortcodes = { Image };
const Layout = ({ title, subTitle, children }) => (
  <MDXProvider components={shortcodes}>
    <Header siteTitle={title} subTitle={subTitle} />
    <div className={mainStyle.outer}>
      <main className={mainStyle.box}>{children}</main>
    </div>
    <Footer />
  </MDXProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
