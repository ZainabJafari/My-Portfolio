import CardsItems from "./cardItems";

const cardsItemsData = [
  {
    cardImageSrc: "./images/project8.png",
    cardTitle: "Full-Stack Image Posting Project",
    cardContent: "Upload and post images, utilizing MySQL for data management",
    projectUrl: "https://github.com/ZainabJafari/SocailPost",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" , "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
     ],
  },
  {
    cardImageSrc: "./images/project9.png",
    cardTitle: "Money Manager",
    cardContent: "Currently in development. A project focused on managing income and spending, developed using Next.js.",
    projectUrl: "https://github.com/ZainabJafari/Money_Manager",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", 
       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
     ],
  },
  {
    cardImageSrc: "./images/project7.png",
    cardTitle: "Streamlining of pressurized devices through digital solutions",
    cardContent: "This project is currently being developed for Lapine Media",
    projectUrl: "",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" , "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
     ],
  },
  {
    cardImageSrc: "./images/chatApp.png",
    cardTitle: "Chat App",
    projectUrl: "https://github.com/ZainabJafari/Chat-app",
    cardContent: "Chat app with TypeScript, Node.js, and Socket.io",
    icon: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg"
    ],
  },
  {
    cardImageSrc: "./images/projec.png",
    cardTitle: " Cabin Rentals",
    cardContent: "Vacation Rental System A platform for managing cabin rentals.",
    projectUrl: "https://github.com/ZainabJafari/Front-End_project",
    icon: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    ],
  },
  {
    cardImageSrc: "./images/project3.png",
    cardTitle: "Content Management System",
    cardContent:  "React CMS with Mongoose Integration",
    projectUrl: "https://github.com/ZainabJafari/CMS-project",
    icon: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"]
  },

  {
    cardImageSrc: "./images/backend.png",
    cardTitle: "Backend with Node.js",
    cardContent: "A backend project using Node.js, MongoDB, and Postman (for API testing).",
    projectUrl: "https://github.com/ZainabJafari/Backend-with-javascript",
    icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" , "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"]
  },
  {
    cardImageSrc: "./images/project2.png",
    cardTitle: "Shopping Cart",
    projectUrl: "https://github.com/ZainabJafari/ProjectWithTypescript",
    cardContent: "TypeScript Shopping Cart Implementation",
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
    ],
  },
  {
    cardImageSrc: "./images/project4.png",
    cardTitle: "HTML and CSS",
    projectUrl: "https://github.com/ZainabJafari/Recipe-page",
    cardContent: "Design-Focused Project with HTML and CSS",
    icon: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
    ],
  },
];

const Cards: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center max-sm:mr-10">
        {cardsItemsData.map((card, key) => (
          <CardsItems
            key={key}
            cardImageSrc={card.cardImageSrc}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
            projectUrl={card.projectUrl}
            icon={Array.isArray(card.icon) ? card.icon : [card.icon]}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
