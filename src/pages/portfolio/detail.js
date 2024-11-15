import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataportfolio, meta, detailImg } from "../../content_option";
import Slider from "react-slick";
import chatAIImg from "../../assets/images/chatAi/Conv.List.png";
import chatAIImg2 from "../../assets/images/chatAi/login.png";
import chatAIImg3 from "../../assets/images/chatAi/instructions.png";
import chatAIImg4 from "../../assets/images/chatAi/sett.png";
import scrumImg from "../../assets/images/scrum/pbi.png";
import scrumImg2 from "../../assets/images/scrum/add.png";
import scrumImg3 from "../../assets/images/scrum/anggota.png";
import scrumImg4 from "../../assets/images/scrum/bukti.png";
import scrumImg5 from "../../assets/images/scrum/dod.png";
import emplImg from "../../assets/images/employ/list.png";
import emplImg2 from "../../assets/images/employ/candidate.png";
import emplImg3 from "../../assets/images/employ/detail.png";
import trackImg from "../../assets/images/tracker/dashb.jpg";
import trackImg2 from "../../assets/images/tracker/history.jpg";
import trackImg3 from "../../assets/images/tracker/add.jpg";
import presImg from "../../assets/images/presensi/absen.png";
import presImg2 from "../../assets/images/presensi/kehadiran.png";
import presImg3 from "../../assets/images/presensi/rekap.png";
import notaImg from "../../assets/images/matchNota/inst.png";
import notaImg2 from "../../assets/images/matchNota/res.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";
const Detail = () => {
  const { id } = useParams(); // Ambil id dari URL parameter
  const [savedId, setSavedId] = useState(null); // State untuk menyimpan id
  const [dataImg, setDataImg] = useState([]);
  const [title, setTittle] = useState([]);
  const [description, setDescription] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [features, setFeatures] = useState([]);
  const [libraries, setLibraries] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const detail = [
    {
      id: 1,
      url: chatAIImg2,
      desc: "Auth",
    },
    {
      id: 1,
      url: chatAIImg,

      desc: "List Conversation",
    },
    {
      id: 1,
      url: chatAIImg3,
      desc: "AI Instructions",
    },

    {
      id: 2,
      url: scrumImg,
      desc: "Task Period",
    },
    {
      id: 2,
      url: scrumImg2,
      desc: "Add Task",
    },
    {
      id: 2,
      url: scrumImg4,
      desc: "Task Progress",
    },

    {
      id: 3,
      url: emplImg,
      desc: "List Karyawan",
    },
    {
      id: 3,
      url: emplImg2,
      desc: "Kandidat Karyawan",
    },
    {
      id: 3,
      url: emplImg3,
      desc: "Detail Karyawan",
    },
    {
      id: 4,
      url: trackImg,
      desc: "Home",
    },
    {
      id: 4,
      url: trackImg2,
      desc: "Trips History",
    },
    {
      id: 4,
      url: trackImg3,
      desc: "Add Trip",
    },
    {
      id: 5,
      url: notaImg,
      desc: "AI Instructions",
    },
    {
      id: 5,
      url: notaImg2,
      desc: "Baserow Data Result",
    },
    {
      id: 6,
      url: presImg,
      desc: "Presensi",
    },
    {
      id: 6,
      url: presImg2,
      desc: "Kehadiran",
    },
    {
      id: 6,
      url: presImg3,
      desc: "Rekap Kehadiran",
    },
  ];
  useEffect(() => {
    // Simpan id ke dalam state saat komponen dimuat
    setSavedId(id);
    const data = detail.filter((a) => a.id == id);
    const tit = dataportfolio.filter((a) => a.id == id);
    setTittle(tit[0].description);
    setFeatures(tit[0].features);
    setLibraries(tit[0].libraries);
    setDescription(tit[0].info);
    setDataImg(data);
    console.log(data);
  }, [id]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentImageIndex(index),
  };

  return (
    <div className="md:px-16 px-6 flex justify-center items-start w-full ">
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Detail Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 text-3xl"> Project {title} </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="flex flex-col w-full ">
            <div className="mb-5 flex justify-between items-start w-full ">
              <div className="flex  justify-center gap-6 items-center w-[100%] flex-col md:flex-row  ">
                {dataImg.map((a, index) => (
                  <>
                    <div className="flex flex-col items-start justify-between gap-4">
                      <div class="relative duration-300 hover:z-[99]  hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] group border border-sky-900 border-4  overflow-hidden rounded-2xl relative  w-72 bg-sky-800 flex flex-col items-start gap-4 hover:scale-[190%] duration-300">
                        <div class="text-gray-50 w-full h-full">
                          <img
                            src={a.url}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <p className="text-base font-medium text-white">
                        {a.desc} Page
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {/* <div className="border border-white rounded-lg p-4 flex flex-col justify-start items-start"> */}
            <div className="w-full mt-10 flex flex-col justify-start items-start ">
              <div className="w-full flex justify-between items-start flex-col md:flex-row ">
                <h3 className="text-2xl font-medium text-white">
                  Project description
                </h3>
                <div className="w-full md:w-[50%] flex p-4 border border-white rounded-md text-sm mt-4 md:mt-0 md:text-base">
                  {description}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 flex flex-col justify-start items-start mb-[2rem]">
              <div className="w-full flex justify-between items-start flex-col md:flex-row ">
                <h3 className="text-2xl font-medium text-white">
                  Technical Info
                </h3>
                <div className="w-full md:w-[50%] flex p-4 border border-white rounded-md text-sm mt-4 md:mt-0 md:text-base">
                  <ul className="list-disc list-inside space-y-2">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    <li>
                      Library Penting:
                      <ul className="list-disc list-inside ml-4">
                        {libraries.map((library, index) => (
                          <li key={index}>{library}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </Container>
      </HelmetProvider>
    </div>
  );
};

export default Detail;
