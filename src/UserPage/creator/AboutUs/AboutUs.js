import React from "react";

const ABOUT_US = [
  {
    title: "What is Casting Arabia?",
    subTitle:
      "Casting Arabia is an online platform created to support talents in the Arab World who wish to thrive in the entertainment industry; talents such as actors, singers, screenwriters, dancers, and models. Through the platform, talents will be able to apply to jobs and opportunities within their fields of interest. Casting Arabia also provides a Learning Center with several resources to help talents grow and refine their skills.",
  },
  {
    title: "How does it work?",
    subTitle:
      "Casting Arabia connects talented individuals with talent seekers such as casting directors, production companies and others. The platform allows talents to create their profiles to showcase their skills and experience, search for opportunities and apply to them. At the same time, Casting Arabia allows Talent seekers post their jobs, receive applications and contact qualified talents.",
  },
  {
    title: "I have a talent, how do I join Casting Arabia?",
    subTitle:
      "Currently, the platform is open for talent registration. To register, click on the “Join Casting Arabia” button and fill the short form. Due to the large number of requests we're receiving, we'll be accepting a limited number in the first phase. Upon registration, you'll be added to a waitlist where you'll get notified once we reach your request. Then you will be able to create your profile on the platform and start applying to jobs. Make sure to fill in the registration form correctly.",
  },
  {
    title: "How do I move up on the waitlist?",
    subTitle:
      "You can benefit from priority access and move up on the waitlist by sharing the platform with your talented friends as per the instructions listed on the registration page. The higher the number of your talented friends who join our platform, the faster you'll get access.",
  },
  {
    title: "Will I pay to join Casting Arabia?",
    subTitle: "No, the platform is 100% free of charge if you register now.",
  },
  {
    title: "What are the talents supported by the platform?",
    subTitle:
      "We accept all talents in the entertainment industry including acting, singing, dancing, writing, modeling, TV hosting as well as voiceover, directing and any other roles within the production staff. If you can't find your talent in the drop-down menu, please select “other” and specify it in the respective field.",
  },
  {
    title: "I am not a professional actor or model. Is this platform for me?",
    subTitle:
      "You don't have to be a professional performer to join Casting Arabia. If you are passionate about acting, filming, dancing, singing, writing, and/or modeling then you should join Casting Arabia. Our platform will give you access to job opportunities and the educational tools to pursue your passion.",
  },
  {
    title: "Are all jobs on Casting Arabia real?",
    subTitle:
      "When the talent seeker posts an opportunity for the first time, Casting Arabia requests them to upload a verification document. While we do our best to verify the posted opportunities as well, we advise our talent to do their own background check as well.",
  },
  {
    title: "What are the countries covered by Casting Arabia's service?",
    subTitle:
      "Casting Arabia is available in all of the Arabic-speaking countries.",
  },
  {
    title: "Who can see my profile on Casting Arabia?",
    subTitle:
      "To protect your privacy, we only show your profile to talent seekers once you apply to any of their listed jobs.",
  },
];

function AboutUs() {
  return (
    <div
      style={{
        background: "white",
        color: "#262e3b",
        direction: "ltr",
        padding: "16px",
        margin: "30px",
        maxWidth: "1355px",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Segoe UI",
        borderRadius: "10px",
      }}
    >
      {ABOUT_US.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{item.title}</h2>
          <p>{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
