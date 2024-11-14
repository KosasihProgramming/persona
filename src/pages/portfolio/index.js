import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import chatAIImg from "../../assets/images/chatAi/Conv.List.png";
import chatAIImg2 from "../../assets/images/chatAi/login.png";
import scrumImg from "../../assets/images/scrum/pbi.png";
import emplImg from "../../assets/images/employ/list.png";
import trackImg from "../../assets/images/tracker/dashb.jpg";
import presImg from "../../assets/images/presensi/absen.png";
import notaImg from "../../assets/images/matchNota/inst.png";
import { Link } from "react-router-dom";
export const Portfolio = () => {
  return (
    <div className="px-16">
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="mb-5 flex justify-between items-start w-full">
            <div className="flex flex-col justify-start items-center w-[30%] ">
              <div className="po_item min-w-[15rem] ">
                <img
                  src={emplImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Employee Management</p>
                  <Link to={`/portfolio-detail/3`}>view project</Link>
                </div>
              </div>
              <Link
                to={`/portfolio-detail/3`}
                class=" mt-1 mb-8 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
              <div className="po_item min-w-[15rem] mt-6 ">
                <img
                  src={chatAIImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Customer Service AI</p>
                  <Link to={`/portfolio-detail/1`}>view project</Link>
                </div>
              </div>{" "}
              <Link
                to={`/portfolio-detail/1`}
                class=" mt-1 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
            </div>

            <div className="flex flex-col justify-start items-center w-[30%] ">
              <div className="po_item min-w-[15rem] ">
                <img
                  src={trackImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Tracker Location</p>
                  <Link to={`/portfolio-detail/4`}>view project</Link>
                </div>
              </div>
              <Link
                to={`/portfolio-detail/4`}
                class=" mt-1 mb-8 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
              <div className="po_item min-w-[15rem] mt-6">
                <img
                  src={presImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Presensi</p>
                  <Link to={`/portfolio-detail/6`}>view project</Link>
                </div>
              </div>{" "}
              <Link
                to={`/portfolio-detail/6`}
                class=" mt-1 mb-[3rem] group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
            </div>

            <div className="flex flex-col justify-start items-center w-[30%] ">
              <div className="po_item min-w-[15rem] ">
                <img
                  src={notaImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Match Nota</p>
                  <Link to={`/portfolio-detail/5`}>view project</Link>
                </div>
              </div>
              <Link
                to={`/portfolio-detail/5`}
                class=" mt-1 mb-8 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
              <div className="po_item min-w-[15rem]  ">
                <img
                  src={scrumImg}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>Scrum Management</p>
                  <Link to={`/portfolio-detail/2`}>view project</Link>
                </div>
              </div>{" "}
              <Link
                to={`/portfolio-detail/2`}
                class=" mt-1  group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-blue-300 relative bg-neutral-800 w-full border text-left p-3 text-gray-50 text-xs font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
              >
                Read more
              </Link>
            </div>
            {/* {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item min-w-[15rem] ">
                <img
                  src={data.img}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="content gap-4">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })} */}
          </div>
        </Container>
      </HelmetProvider>
    </div>
  );
};
