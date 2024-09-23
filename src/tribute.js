import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tribute.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

function TributePage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creating a Tribute page For FCC project</title>
        </Helmet>
      </HelmetProvider>
      <main id="main" className="py-3 px-3">
        <h1 id="title" className="text-center">
          Dr. Norman Borlaug
        </h1>
        <p className="text-center">The man who saved a billion lives</p>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 px-2 bg-white rounded-2">
            <figure id="img-div" className="">
              <img
                id="image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg"
                alt="Dr. Norman Borlaug seen standing in Mexican wheat field with a group of biologists"
              />
              <figcaption id="img-caption" className="text-center form-text">
                Dr. Norman Borlaug, third from the left, trains biologists in
                Mexico on how to increase wheat yields - part of his life-long
                war on hunger.
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 px-2">
            <section
              id="tribute-info"
              className="d-flex align-items-center flex-column gap-2"
            >
              <h3 id="headline" className="mt-4">
                Here's a time line of Dr. Borlaug's life:
              </h3>
              <ul className="d-flex flex-column gap-3">
                <li>
                  <strong>1914</strong> - Born in Cresco, Iowa
                </li>
                <li>
                  <strong>1933</strong> - Leaves his family's farm to attend the
                  University of Minnesota, thanks to a Depression era program
                  known as the "National Youth Administration"
                </li>
                <li>
                  <strong>1935</strong> - Has to stop school and save up more
                  money. Works in the Civilian Conservation Corps, helping
                  starving Americans. "I saw how food changed them", he said.
                  "All of this left scars on me."
                </li>
                <li>
                  <strong>1937</strong> - Finishes university and takes a job in
                  the US Forestry Service
                </li>
                <li>
                  <strong>1938</strong> - Marries wife of 69 years Margret
                  Gibson. Gets laid off due to budget cuts. Inspired by Elvin
                  Charles Stakman, he returns to school to study under Stakman,
                  who teaches him about breeding pest-resistant plants.
                </li>
                <li>
                  <strong>1941</strong> - Tries to enroll in the military after
                  the Pearl Harbor attack, but is rejected. Instead, the
                  military asked his lab to work on waterproof glue, DDT to
                  control malaria, disinfectants, and other applied science.
                </li>
                <li>
                  <strong>1942</strong> - Receives a Ph.D. in Genetics and Plant
                  Pathology
                </li>
                <li>
                  <strong>1944</strong> - Rejects a 100% salary increase from
                  Dupont, leaves behind his pregnant wife, and flies to Mexico
                  to head a new plant pathology program. Over the next 16 years,
                  his team breeds 6,000 different strains of disease-resistant
                  wheat, including different varieties for each major climate on
                  Earth.
                </li>
                <li>
                  <strong>1945</strong> - Discovers a way to grow wheat twice
                  each season, doubling wheat yields
                </li>
                <li>
                  <strong>1953</strong> - Crosses a short, sturdy dwarf breed of
                  wheat with a high-yielding American breed, creating a strain
                  that responds well to fertilizer. It goes on to provide 95% of
                  Mexico's wheat.
                </li>
                <li>
                  <strong>1962</strong> - Visits Delhi and brings his
                  high-yielding strains of wheat to the Indian subcontinent in
                  time to help mitigate mass starvation due to a rapidly
                  expanding population
                </li>
                <li>
                  <strong>1970</strong> - Receives the Nobel Peace Prize
                </li>
                <li>
                  <strong>1983</strong> - Helps seven African countries
                  dramatically increase their maize and sorghum yields
                </li>
                <li>
                  <strong>1984</strong> - Becomes a distinguished professor at
                  Texas A&M University
                </li>
                <li>
                  <strong>2005</strong> - States "we will have to double the
                  world food supply by 2050." Argues that genetically modified
                  crops are the only way we can meet the demand, as we run out
                  of arable land. Says that GM crops are not inherently
                  dangerous because "we've been genetically modifying plants and
                  animals for a long time. Long before we called it science,
                  people were selecting the best breeds."
                </li>
                <li>
                  <strong>2009</strong> - Dies at the age of 95.
                </li>
              </ul>
              <blockquote cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm">
                <p>
                  "Borlaug's life and achievement are testimony to the
                  far-reaching contribution that one man's towering intellect,
                  persistence and scientific vision can make to human peace and
                  progress."
                </p>
                <cite>-- Indian Prime Minister Manmohan Singh</cite>
              </blockquote>
              <h4 className="text-center fw-bold">
                If you have time, you should read more about this incredible
                human being on his{" "}
                <a
                  id="tribute-link"
                  href="https://en.wikipedia.org/wiki/Norman_Borlaug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia entry
                </a>
                .
              </h4>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default TributePage;
