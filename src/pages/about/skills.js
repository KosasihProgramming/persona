import React, { useState } from "react";
import { Link } from "react-router-dom";

function Skill() {
  const [activeTab, setActiveTab] = useState(1);

  const tech = [
    {
      id: 1,
      name: "HTML",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
      status: "Advanced",
    },
    {
      id: 2,
      name: "CSS",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      status: "Advanced",
    },
    {
      id: 3,
      name: "PHP",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
      status: "Advanced",
    },
    {
      id: 4,
      name: "Javascript",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
      status: "Advance",
    },
    {
      id: 5,
      name: "Laravel",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
      status: "Advance",
    },
    {
      id: 6,
      name: "Codeigniter",
      imageUrl:
        "https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png",
      status: "Intermediate",
    },
    {
      id: 7,
      name: "VueJS",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
      status: "Intermediate",
    },
    {
      id: 8,
      name: "AlpineJS",
      imageUrl: "https://avatars.githubusercontent.com/u/59030169?s=200&v=4",
      status: "Beginner",
    },
    {
      id: 9,
      name: "NodeJS",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
      status: "Beginner",
    },
    {
      id: 10,
      name: "Tailwind",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      status: "Advance",
    },
    {
      id: 11,
      name: "Bootstrap",
      imageUrl:
        "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
      status: "Intermediate",
    },
    {
      id: 12,
      name: "ReactJS",
      imageUrl:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      status: "Beginner",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Git",
      imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      status: "Version Control",
    },
    {
      id: 2,
      name: "GitHub",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      status: "Git Hosting",
    },
    {
      id: 3,
      name: "NPM",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
      status: "Package Manager",
    },
    {
      id: 4,
      name: "MySQL",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
      status: "Database",
    },
  ];

  const renderItems = (items) =>
    items.map((item) => (
      <div
        key={item.id}
        className="flex items-center gap-2 p-2 rounded border border-amber-200 hover:bg-amber-200 hover:bg-opacity-10"
      >
        <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-8 w-8 lg:h-12 lg:w-12 transition-transform duration-300 hover:scale-125"
          />
        </div>
        <div className="relative flex items-center text-sm md:text-base lg:text-lg">
          <span className="font-medium">{item.name}</span>
          <span className="absolute opacity-0 text-xs text-amber-200 transition-opacity duration-300 hover:opacity-100">
            {item.status}
          </span>
        </div>
      </div>
    ));

  return (
    <div>
      {/* <article data-page="about">
        <header>
          <div className="text-2xl font-bold text-white mb-5 flex items-center">
            About Me
            <div className="h-px w-32 bg-amber-200 ml-3"></div>
          </div>
        </header>
        <section className="flex flex-col gap-4 md:flex-row md:gap-8 md:items-center">
          <div className="flex justify-center">
            <img
              className="w-9/12 rounded-full mb-3"
              src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg"
              alt="Profile"
            />
          </div>
          <div className="md:w-7/12">
            <p className="mb-3 md:mb-7">
              Hi everyone! My name is Bagas Rakha Putra. I'm a web developer
              from Bogor, West Java. I have 1 year of experience in back-end web
              development. I enjoy creating programs that are not just
              functional but also artistic.
            </p>
            <p className="mb-3">
              My job is to build your website to be functional, user-friendly,
              and attractive. I ensure that your message and identity are
              conveyed creatively. Feel free to contact me if you're interested
              in hiring me.
            </p>
          </div>
        </section>
      </article> */}

      <div className="px-5 py-5 text-amber-50 mx-3">
        <article>
          {/* <header>
            <div className="text-2xl font-bold text-white mb-5 flex items-center">
              <div className="h-px w-10 bg-amber-200 mr-3"></div>
              Skills
            </div>
          </header> */}
          <section>
            <ul className="flex flex-wrap text-sm font-medium text-gray-500 mb-5">
              <li className="mr-2">
                <button
                  className={`px-4 py-3 rounded-lg ${
                    activeTab === 1
                      ? "text-amber-200 bg-amber-200 bg-opacity-10"
                      : ""
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  Tech Stack
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`px-4 py-3 rounded-lg ${
                    activeTab === 2
                      ? "text-amber-200 bg-amber-200 bg-opacity-10"
                      : ""
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Tools
                </button>
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 xl:grid-cols-4">
              {activeTab === 1 ? renderItems(tech) : renderItems(tools)}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default Skill;
