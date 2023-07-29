import React from "react";

const myinformation = () => {
  return (
    <div className="MyInformation">
      <main className="MyInformation_container">
        <div className="About_Title">
          <h1>About</h1>
        </div>
        <section className="About_Me">
          <article className="resolution">각오한마다</article>
          <article className="me">
            <h3>장유진</h3>
            <div className="me_detail">
              <p>📆1998.07.13</p>
              <p>📧 ujin4719@naver.com</p>
              <p>📞 +82 1012341234</p>
              <p>📆1998.07.13</p>
            </div>
          </article>
        </section>
        <section>
          <article></article>
          <article></article>
        </section>
      </main>
    </div>
  );
};

export default myinformation;
