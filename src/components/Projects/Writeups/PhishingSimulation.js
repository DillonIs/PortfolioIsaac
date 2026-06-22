import React from "react";
import WriteupTemplate from "./WriteupTemplate";


function RedTeam1() {


  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "24px",
    marginTop: "8px",
    border: "1px solid rgba(199, 112, 240, 0.3)",
  };

  return (
    <WriteupTemplate title="Breaking In — Legally">

      {/* ===================== EDIT BELOW THIS LINE ===================== */}

      <h1 style={{ fontSize: "2.3em", fontWeight: "500", paddingBottom: "20px", color: "white" }}>
        Breaking In — Phishing Simulation <span style={{ color: "#c770f0" }}>Legally</span>
      </h1>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Overview</h2>
      <p>
        Replace this with your project overview. Explain what the project is
        about in simple terms that anyone can understand.
        Phishing attacks use social engineering tactics to trick users into providing sensitive information.
          This project is to demonstrate how phishing attacks are conducted in a controlled and ethical environment, the tools that are commonly used and discussing ways to mitigate these attacks.
          The purpose of this project was to gain practical experience and better understand how phishing attacks are conducted.
      </p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>What Was the Goal?</h2>
      <p>
        Replace this with the goal of your project. What were you trying to
        achieve or demonstrate?
          The goal of this project is to gain a hands-on understanding of phishing attacks in a controlled environment by simulating real-world techniques and observing their potential outcomes, such as credential theft and unauthorized access.
      </p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>How It Was Done</h2>
      <p>Walk through the steps you took below.</p>

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 1 — Replace with step title Create App Password</h3>
      <p>Describe what you did in this step. In this step we have to create an app password, this is done so that we aren't using any of our passwords. Note: copy and paste the generated password somewhere as once we hit done it will be hidden.</p>

      {/* To add an image here, upload the image to src/Assets/Project-Writeups/ and make sure you redirect using the right link. */}

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 2 — Replace with step title Identify VM IP Address</h3>
      <p>Describe what you did in this step. For this project we will need to know the IP address of our VM, we can find this out by using the command ip a inside a terminal.</p>

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 3 — Replace with step title Starting Up Setoolkit</h3>
      <p>Describe what you did in this step. For this project we will be using a toolkit, to start up a toolkit we use the command sudo setoolkit. Toolkits can be used for various attacks and can generate templates.</p>
      
      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 4 — Replace with step title Navigating setoolkit</h3>
      <p>Describe what you did in this step. Once setoolkit has booted up we need to navigate through the options to perform our phishing simulation. The first lot of options setoolkit provides us with are types of attacks, the attack we will be performing in this project is option 1 Social-Engineering Attacks.</p>
      
      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 5 — Replace with step title Setting Up A Clone</h3>
      <p>Describe what you did in this step. The next option we are going to select is option 2 Website Attack Vectors. This option </p>      
      
      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Tools Used</h2>
      <ul style={{ paddingLeft: "24px" }}>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
      </ul>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Key Findings</h2>
      <p>Replace this with what you discovered or demonstrated during the project.</p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Conclusion</h2>
      <p>Replace this with your final thoughts and what someone should take away from this project.</p>

      {/* ===================== EDIT ABOVE THIS LINE ===================== */}

    </WriteupTemplate>
  );
}

export default RedTeam1;
