import React from "react";
import type { ExperienceItem } from "../App";

type Props = {
  items: ExperienceItem[];
};

function Experience({ items }: Props) {
  return (
    <section>
      <h2 className="sectionTitle">Experience</h2>

      {items.map((job) => (
        <div key={job.id} className="block">
          <h3 className="blueTitle">
            {job.company}, {job.location} - {job.jobTitle}
          </h3>
          <p className="muted">{job.period}</p>

          <ul>
            {job.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          <p>
            <strong>Skills:</strong> {job.skillsUsed.join(", ")}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Experience;