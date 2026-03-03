import React from "react";
import type { ContactInfo } from "../App";

type Props = {
  info: ContactInfo;
};

function Contact({ info }: Props) {
  return (
    <section>
      <div className="topLine" />

      <h1 className="name">{info.name}</h1>
      <p className="title">{info.title}</p>

      <div className="contactBlock">
        <p>{info.addressLine1}</p>
        <p>{info.addressLine2}</p>
        <p>{info.phone}</p>
        <p>{info.email}</p>
      </div>

      <h2 className="sectionTitle">Skills</h2>
      <p>{info.skills.join(", ")}</p>
    </section>
  );
}

export default Contact;