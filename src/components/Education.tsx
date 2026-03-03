import type { EducationItem } from "../App";

type Props = {
  items: EducationItem[];
};

function Education({ items }: Props) {
  return (
    <section>
      <h2 className="sectionTitle">Education</h2>

      {items.map((ed) => (
        <div key={ed.id} className="block">
          <h3 className="blueTitle">
            {ed.school}, {ed.location} - {ed.degree}
          </h3>
          <p className="muted">{ed.period}</p>

          <ul>
            {ed.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Education;