import React, { useContext } from "react";

import "./Achievement.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";

function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="achievement"
        id="achievement"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="achievement-body">
          <p style={{ color: theme.tertiary }}>
            Putting quantified achievements on a resume is great, but <br /> I
            just don’t work with hard numbers. I have no data to support <br />
            the quality of my work. If you have lots of relevant experience,
            <br /> the heading statement of your resume will be a summary.
          </p>
        </div>
        <div className="achievement-body">
          <p style={{ color: theme.tertiary }}>
            Putting quantified achievements on a resume is great, but <br /> I
            just don’t work with hard numbers. I have no data to support <br />
            the quality of my work. If you have lots of relevant experience,
            <br /> the heading statement of your resume will be a summary.
          </p>
        </div>
      </div>
    </>
  );
}

export default Achievement;

// {
//   achievementData.achievements.length > 0 && (
//     <div
//       className="achievement"
//       id="achievement"
//       style={{ backgroundColor: theme.secondary }}
//     >
//       <div className="achievement-body">
//         <h1 style={{ color: theme.primary }}>Achievements</h1>
//         <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
//       </div>
//       <div className="achievement-cards">
//         {achievementData.achievements.map((achieve) => (
//           <AchievementCard
//             key={achieve.id}
//             id={achieve.id}
//             title={achieve.title}
//             details={achieve.details}
//             date={achieve.date}
//             field={achieve.field}
//             image={achieve.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
