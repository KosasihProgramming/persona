import chatAIImg from "../src/assets/images/chatAi/Conv.List.png";
import chatAIImg2 from "../src/assets/images/chatAi/login.png";
import chatAIImg3 from "../src/assets/images/chatAi/instructions.png";
import chatAIImg4 from "../src/assets/images/chatAi/sett.png";
import scrumImg from "../src/assets/images/scrum/pbi.png";
import scrumImg2 from "../src/assets/images/scrum/add.png";
import scrumImg3 from "../src/assets/images/scrum/anggota.png";
import scrumImg4 from "../src/assets/images/scrum/bukti.png";
import scrumImg5 from "../src/assets/images/scrum/dod.png";
import emplImg from "../src/assets/images/employ/list.png";
import emplImg2 from "../src/assets/images/employ/candidate.png";
import emplImg3 from "../src/assets/images/employ/detail.png";
import trackImg from "../src/assets/images/tracker/dashb.jpg";
import trackImg2 from "../src/assets/images/tracker/history.jpg";
import trackImg3 from "../src/assets/images/tracker/add.jpg";
import presImg from "../src/assets/images/presensi/absen.png";
import presImg2 from "../src/assets/images/presensi/kehadiran.png";
import presImg3 from "../src/assets/images/presensi/rekap.png";
import notaImg from "../src/assets/images/matchNota/inst.png";
import notaImg2 from "../src/assets/images/matchNota/res.png";
import me from "../src/assets/images/me.jpg";
const logotext = "Dzulfi";
const meta = {
  title: "Dzulfi Allaudin Hafidz",
  description: "I’m Dzufi Front-End Developer",
};

const introdata = {
  title: "Hello, I’m Dzulfi",
  animated: {
    first: "I Love Coding",
    second: "I code cool websites",
    third: "I Develop Web Apps",
  },
  description: "Front End Developer",
  your_img_url: me,
};

const dataabout = {
  title: "About My Self",
  aboutme:
    "Seorang Full Stack Developer berpengalaman dalam pengembangan aplikasi web dengan teknologi seperti React, Node.js, Firebase, SQL, dan NoSQL. Memiliki minat besar dalam kecerdasan buatan (AI) dan keahlian dalam menggunakan Tailwind CSS serta mengintegrasikan RESTful API. Berkomitmen pada pengembangan berkelanjutan dan mampu bekerja baik secara mandiri maupun dalam tim.",
};
const worktimeline = [
  {
    jobtitle: "Full Stack Developer",
    where: "Kosasih Group",
    date: "2024",
  },
  {
    jobtitle: "Front-end Intern",
    where: "Magang MSIBB – Skilvul #Tech4imapact ",
    date: "2023",
  },
];

const skills = [
  {
    name: "AI Integration",
    value: 90,
  },
  {
    name: "React Js",
    value: 95,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "Node Js",
    value: 90,
  },
  {
    name: "MY SQL Database",
    value: 95,
  },
  {
    name: "Firebase",
    value: 95,
  },
  {
    name: "Tailwind CSS",
    value: 95,
  },
];

const services = [
  {
    title: "Web Application Development",
    description:
      "Kami mengembangkan aplikasi web yang kuat dan scalable menggunakan teknologi terbaru seperti React, Node.js, dan database SQL/NoSQL untuk memberikan pengalaman pengguna yang optimal.",
  },
];

const dataportfolio = [
  {
    id: 1,
    img: chatAIImg2,
    description: "Customer Service AI",
    info: `Aplikasi ini digunakan untuk menjawab pesan WhatsApp pelanggan secara otomatis menggunakan AI, mempercepat respons dengan jawaban berbasis informasi yang sudah dikustomisasi sesuai kebutuhan perusahaan. AI memahami konteks tiap percakapan sehingga dapat memberikan jawaban yang relevan. Pesan pelanggan di WhatsApp juga diteruskan ke grup Telegram, dan pesan bisa dibalas langsung melalui Telegram menggunakan webhook. Admin dapat mengelola instruksi AI, memantau dan membalas pesan, serta mengaktifkan atau menonaktifkan fitur chat AI melalui dashboard.`,
    link: "#",
    features: [
      "Frontend: React JS, Tailwind CSS",
      "Backend: Node JS",
      "Database: MySQL",
      "AI: OpenAI API (ChatGPT)",
      "Storage: Firebase Storage untuk menyimpan gambar",
      "Automasi: Make.com untuk otomatisasi proses",
    ],
    libraries: [
      "WhatsApp: WHAPI untuk webhook dan API pengiriman pesan",
      "Telegram: API dan webhook Telegram untuk pengiriman dan penerimaan pesan",
    ],
  },
  {
    id: 2,
    img: scrumImg,
    description: "Scrum Management",
    link: "#",
    info: `Aplikasi ini memfasilitasi pemantauan tugas tim dalam skala bulanan, mingguan, dan harian, serta menampilkan persentase capaian setiap staf. Memudahkan manajer dalam melacak progres pekerjaan dan mengevaluasi kinerja, sehingga mendukung optimalisasi produktivitas tim.`,
    features: ["Frontend: React JS, Tailwind CSS", "Database: Baserow"],
    libraries: [
      "UI: @headlessui/react, @heroicons/react, @material-tailwind/react, antd - Mempercepat desain antarmuka yang intuitif.",
      "Notifikasi: SweetAlert2 - Memberikan feedback pengguna yang interaktif.",
      "Lainnya: axios, dayjs, react-icons, react-router-dom - Mempermudah komunikasi API, manipulasi tanggal, navigasi, dan ikon.",
    ],
  },

  {
    id: 3,
    img: emplImg,
    scale: 120,
    description: "Employee Management",
    info: ` Aplikasi web ini mempermudah tim HR dalam mengelola data
                  karyawan, pelamar, dan kontrak secara terpusat. Dengan fitur
                  form pelamar real-time, aplikasi mempercepat rekrutmen dan
                  mendukung keputusan berbasis data.`,
    features: [
      "React JS & Tailwind CSS: UI interaktif dan responsif.",
      "Firebase Firestore: Basis data real-time.",
      "SPA: Navigasi mulus tanpa reload.",
    ],

    libraries: [
      "@coreui/coreui, @mui/material: Komponen antarmuka yang dapat disesuaikan.",
      "React Icons, SweetAlert2, React Toastify: Notifikasi dan interaktivitas yang lebih baik.",
      "Axios: Komunikasi API yang cepat dan aman.",
      "HTML2Canvas, jsPDF: Ekspor data ke PDF untuk laporan.",
      "React Beautiful DnD, React Select, Day.js: Fitur drag-and-drop, pemilihan data dinamis, dan pengelolaan tanggal.",
    ],
    link: "#",
  },

  {
    id: 4,
    img: trackImg,
    description: "Tracker Location",
    link: "#",
    info: `Aplikasi Tracking Location ini mencatat lokasi awal dan tujuan staff saat bertugas di luar kantor. Dengan aplikasi ini, perusahaan dapat memonitor informasi lokasi, jarak tempuh, waktu perjalanan, dan estimasi biaya bahan bakar. Aplikasi ini memudahkan klaim biaya perjalanan berdasarkan jarak yang ditempuh, serta menyediakan visualisasi perbandingan jarak dan waktu tempuh antar staff. Data perjalanan juga bisa diekspor dalam format CSV.`,
    libraries: [
      "Peta: Leaflet dan React-Leaflet untuk menampilkan lokasi pada peta interaktif",
      "React-Leaflet & Leaflet: Untuk integrasi peta interaktif yang memudahkan peninjauan lokasi.",
      "Firebase: Sebagai database real-time dan penyimpanan untuk data perjalanan dan gambar.",
      "Dayjs & Date-fns: Untuk manipulasi dan format tanggal dan waktu.",
      "Papaparse & Json2csv: Mengkonversi data ke format CSV untuk kebutuhan ekspor riwayat perjalanan.",
      "mui/x-charts: Menampilkan grafik perbandingan data perjalanan antar staff.",
    ],
    features: [
      "Frontend: React + Tailwind CSS",
      "Database: Firebase Firestore dan Storage untuk penyimpanan data lokasi dan gambar",
    ],
  },

  {
    id: 5,
    img: notaImg,
    description: "Match Nota",
    link: "#",
    info: `App Match Nota AI adalah sistem yang memanfaatkan AI untuk membandingkan dua jenis nota, yaitu nota pembelian dan penjualan. Sistem ini secara otomatis membandingkan informasi yang relevan antara kedua nota dan memberikan kesimpulan dari hasil perbandingan. Hasil perbandingan disimpan dalam database dan digunakan untuk membantu perusahaan dalam melakukan audit dan pengecekan transaksi.`,
    features: [
      "Frontend: React + Tailwind CSS untuk antarmuka yang responsif dan modern.",
      "Backend: Node.js untuk menangani logika aplikasi dan integrasi webhook.",
      "Database: Baserow sebagai basis data yang menyimpan data nota dan hasil perbandingan.",
      "AI: API ChatGPT digunakan untuk menjalankan analisis perbandingan dengan dukungan dari OpenAI Assistant.",
    ],
    libraries: [],
  },
  {
    id: 6,
    img: presImg,
    description: "Presensi App.",
    link: "#",
    info: `Aplikasi Presensi memungkinkan staf untuk merekam kehadiran mereka tanpa perlu login, menggunakan sistem barcode untuk presensi. Aplikasi ini mencatat, menyimpan, dan mengelola data kehadiran lengkap dengan foto. Admin dapat melihat rekapan kehadiran setiap staf, termasuk nominal insentif yang terintegrasi dengan software lain seperti Acosys. Pengguna juga dapat mendownload rekapan dalam bentuk CSV`,
    features: [
      "Frontend: React JS, Tailwind CSS",
      "Backend: Node JS, Express JS",
      "Database: MySQL untuk penyimpanan data presensi",
      "Storage: Firebase Storage untuk menyimpan gambar presensi",
    ],
    libraries: [
      "UI & Komponen: @mui/material, antd, @heroicons/react, react-icons, react-bootstrap untuk membangun antarmuka yang responsif dan kaya fitur.",
      "Presensi & Barcode: react-webcam untuk menangkap gambar staf, react-sweetalert2 dan react-toastify untuk notifikasi interaktif, react-csv, papaparse untuk ekspor data ke CSV.",
      "Pengolahan Waktu: dayjs, date-fns untuk manipulasi tanggal dan waktu.",
      "Komunikasi API: axios untuk komunikasi backend dan frontend.",
      "Gambar & Kompresi: browser-image-compression untuk mengoptimalkan gambar yang diunggah.",
      "Firebase: Digunakan untuk penyimpanan gambar dan integrasi dengan platform lain.",
    ],
  },
];

const detailImg = [
  {
    id: 1,
    url: chatAIImg,
  },
  {
    id: 1,
    url: chatAIImg2,
  },
  {
    id: 1,
    url: chatAIImg3,
  },
  {
    id: 1,
    url: chatAIImg4,
  },
  {
    id: 2,
    url: scrumImg,
  },
  {
    id: 2,
    url: scrumImg2,
  },
  {
    id: 2,
    url: scrumImg3,
  },
  {
    id: 2,
    url: scrumImg4,
  },
  {
    id: 3,
    url: emplImg,
  },
  {
    id: 3,
    url: emplImg2,
  },
  {
    id: 3,
    url: emplImg3,
  },
  {
    id: 4,
    url: trackImg,
  },
  {
    id: 4,
    url: trackImg2,
  },
  {
    id: 4,
    url: trackImg3,
  },
  {
    id: 5,
    url: notaImg,
  },
  {
    id: 5,
    url: notaImg2,
  },
  {
    id: 6,
    url: presImg,
  },
  {
    id: 6,
    url: presImg2,
  },
  {
    id: 6,
    url: presImg3,
  },
];
const contactConfig = {
  YOUR_EMAIL: "dzulfihafidz14@gmail.com",
  YOUR_FONE: "081278965100",
  description: "Hubungi Saya Untuk Kerja Sama Lebih Lanjut ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  // github: "https://github.com",
  facebook: "https://www.facebook.com/dzulfi.hafidz.7",
  linkedin:
    "https://www.linkedin.com/in/dzulfi-hafidz-a129941a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  instagram:
    "https://www.instagram.com/dzulfihafidz/profilecard/?igsh=MWJ1YnYwOXFiejVvYg==",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  detailImg,
};
