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
import GlassCard from "../../components/themetoggle/card";
export const Portfolio = () => {
  return (
    <div className="md:px-16 px-6 flex justify-center items-start w-full ">
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
          <div className="mb-5 flex flex-col md:flex-row justify-between items-start md:items-start w-full pl-4 md:pl-0 ">
            <div className="flex flex-col justify-start items-center w-[30%] ">
              <GlassCard
                img={emplImg}
                title={"Employee Management"}
                desc={
                  "Aplikasi ini memfasilitasi pemantauan tugas tim dalam skala bulanan, mingguan, dan harian, serta menampilkan persentase capaian setiap staf. Memudahkan manajer dalam melacak progres pekerjaan dan mengevaluasi kinerja, sehingga mendukung optimalisasi produktivitas tim."
                }
                info={"ReactJs, Tailwind CSS, Firebase"}
                url={"/portfolio-detail/3"}
              />
              <GlassCard
                img={chatAIImg}
                title={"Customer Service AI"}
                desc={
                  "Aplikasi ini digunakan untuk menjawab pesan WhatsApp pelanggan secara otomatis menggunakan AI, mempercepat respons dengan jawaban berbasis informasi yang sudah dikustomisasi sesuai kebutuhan perusahaan. AI memahami konteks tiap percakapan sehingga dapat memberikan jawaban yang relevan. Pesan pelanggan di WhatsApp juga diteruskan ke grup Telegram, dan pesan bisa dibalas langsung melalui Telegram menggunakan webhook. Admin dapat mengelola instruksi AI, memantau dan membalas pesan, serta mengaktifkan atau menonaktifkan fitur chat AI melalui dashboard."
                }
                info={
                  "ReactJs, Tailwind CSS, Firebase, ChatGPT API, Node JS, MYSQL"
                }
                url={"/portfolio-detail/1"}
              />
            </div>

            <div className="flex  flex-col justify-start items-center w-[30%] ">
              <GlassCard
                img={trackImg}
                title={"Tracker Location"}
                desc={
                  "Aplikasi Tracking Location ini mencatat lokasi awal dan tujuan staff saat bertugas di luar kantor. Dengan aplikasi ini, perusahaan dapat memonitor informasi lokasi, jarak tempuh, waktu perjalanan, dan estimasi biaya bahan bakar. Aplikasi ini memudahkan klaim biaya perjalanan berdasarkan jarak yang ditempuh, serta menyediakan visualisasi perbandingan jarak dan waktu tempuh antar staff. Data perjalanan juga bisa diekspor dalam format CSV."
                }
                info={"ReactJs, Tailwind CSS, Firebase"}
                url={"/portfolio-detail/4"}
              />

              <GlassCard
                img={presImg}
                title={"Presensi"}
                desc={`Aplikasi Presensi memungkinkan staf untuk merekam kehadiran mereka tanpa perlu login, menggunakan sistem barcode untuk presensi. Aplikasi ini mencatat, menyimpan, dan mengelola data kehadiran lengkap dengan foto. Admin dapat melihat rekapan kehadiran setiap staf, termasuk nominal insentif yang terintegrasi dengan software lain seperti Acosys. Pengguna juga dapat mendownload rekapan dalam bentuk CSV`}
                info={"ReactJs, Tailwind CSS, Firebase, Node JS, MYSQL"}
                url={"/portfolio-detail/6"}
              />
            </div>

            <div className="flex flex-col justify-start items-center w-[30%] ">
              <GlassCard
                img={notaImg}
                title={"Match Nota"}
                desc={`App Match Nota AI adalah sistem yang memanfaatkan AI untuk membandingkan dua jenis nota, yaitu nota pembelian dan penjualan. Sistem ini secara otomatis membandingkan informasi yang relevan antara kedua nota dan memberikan kesimpulan dari hasil perbandingan. Hasil perbandingan disimpan dalam database dan digunakan untuk membantu perusahaan dalam melakukan audit dan pengecekan transaksi.`}
                info={
                  "ReactJs, Tailwind CSS, ChatGPT API,Baserow, Node JS, MYSQL"
                }
                url={"/portfolio-detail/5"}
              />
              <GlassCard
                img={scrumImg}
                title={"Scrum Management"}
                desc={`Aplikasi web ini mempermudah tim HR dalam mengelola data
                  karyawan, pelamar, dan kontrak secara terpusat. Dengan fitur
                  form pelamar real-time, aplikasi mempercepat rekrutmen dan
                  mendukung keputusan berbasis data.`}
                info={"ReactJs, Tailwind CSS,Baserow"}
                url={"/portfolio-detail/2"}
              />
            </div>
          </div>
        </Container>
      </HelmetProvider>
    </div>
  );
};
