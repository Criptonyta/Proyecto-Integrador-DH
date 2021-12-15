import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Contenido from "./Contenido";

function ContentWrapper() {
  return (
    <React.Fragment>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ContentRowTop />
          <Contenido />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
