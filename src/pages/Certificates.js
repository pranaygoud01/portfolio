import React from "react";

const Certificates = () => {
  const certificateslist = [
    {
      id: "0L1B04NUS7WG",
      name: "Advanced React",
      issued: "Meta",
      URL: "https://www.coursera.org/account/accomplishments/records/0L1B04NUS7WG",
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    },
    {
      id: "EBEON0724929039",
      name: "School of Coding - Learn Generative AI",
      issued: "Capgemini",
      URL: "http://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON0724929039",
      logo: "https://www.autonewspress.com/wp-content/uploads/2020/09/capgemini-logo.jpg",
    },
    {
      id: "vQbtHsWPxThZkX9BZ",
      name: "Front-End Software Engineering Job Simulation",
      issued: "Skyscanner",
      URL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_vLNetMJv5JC3DXdfX_1724516523448_completion_certificate.pdf",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktHfZAe2M0KApC9yFjs6oD8QxI3FprLZ2_w&s",
    },
    {
      id: "IBM1",
      name: "Getting Started with Enterprise Data Science",
      issued: "IBM",
      URL: "https://www.credly.com/badges/33e18de4-4f3f-4351-8648-2274ad349212/linked_in_profile",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    },
    {
      id: "IBM2",
      name: "Getting Started with Enterprise-grade AI",
      issued: "IBM",
      URL: "https://www.credly.com/badges/bec101a4-5b11-4696-836f-6801e1db4bae/public_url",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
    },
    {
      id: "91qreUse80",
      name: "SQL Fundamentals",
      issued: "Accenture",
      URL: "https://learn.futureskillsprime.in/verify_badge/91qreUse80?user_id=4185991&timestamp=1720852941201&edCast?latest",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
    },
    {
      id: "3D6733EC5F5E",
      name: "Java(Basic)",
      issued: "HackerRank",
      URL: "https://www.hackerrank.com/certificates/3d6733ec5f5e",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
      id: "CodingNinjas",
      name: "Java Guided Path",
      issued: "CodingNinjas",
      URL: "https://drive.google.com/file/d/1HPWkNvQxVtM8RAufepue-WcWI7S3Az5E/view?usp=drivesdk",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu3snh-RvJcVBP78lCH8hjQ0sIZ_0DZMlOQ&s",
    },
    {
      id: "BrainOVision",
      name: "24Hrs Hackathon on AI & ML",
      issued: "BRAINOVISION SOLUTIONS INDIA PVT.LTD",
      URL: "https://drive.google.com/file/d/1lPntAuSc7BctpiKNHOlAdnBlp8z3CI7m/view?usp=drivesdk",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQEzIZRYuW_aUQ/company-logo_200_200/company-logo_200_200/0/1630618555089/brainovision_logo?e=2147483647&v=beta&t=jqVOt_sdKdsE55wvvWrIwOfZTK3y2LYy-zPoPnjD8H0",
    },
  ];
  return (
    <div>
      <div className=" m-20 mt-10 p-12 pb-10 max-lg:p-5  max-lg:m-2">
        <h1 className=" mb-10 text-neutral-600 text-md">CERTIFICATIONS</h1>
        <div>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
            {certificateslist.map((cer) => {
              return (
                <a
                  id={cer.id}
                  className="h-[150px] rounded-2xl hover:bg-gray-100 p-5"
                  href={cer.URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex gap-3">
                    <div className="w-[30%] h-[100px]">
                      <img
                        src={cer.logo}
                        alt={cer.name}
                        className="p-2 rounded-xl w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[70%]">
                      {" "}
                      <a
                        href={cer.URL}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold mt-5 hover:underline"
                      >
                        {cer.name}
                      </a>
                      <p className="text-xs mt-2 ">Issued by:{cer.issued}</p>
                      <p className="text-xs font-semibold mt-2 text-blue-600">
                        Credential ID:{cer.id}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
