import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBriefcaseFill } from "react-icons/bs";
import { Experience as ExperienceData } from "../MyData";

const Experience = () => {
  return (
    <div className="timeline-container">
      <div className="experience-app">
        <h1 className="exp-heading">Experience</h1>
      </div>
      <VerticalTimeline>
        {ExperienceData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            date={
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {item.duration}
              </span>
            }
            iconStyle={{ background: "linear-gradient(225deg,hsla(271, 100%, 50%, 1) 0%,hsla(294, 100%, 50%, 1) 100%)", color: "#fff" }}
            icon={<BsBriefcaseFill />}
          >
            <h3 className="vertical-timeline-element-title">{item.roleName}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.companyName}
            </h4>
            <p className="details">{`Projects: ${item.projectName.join(
              ", "
            )}`}</p>
            <p className="details">{`Skills: ${item.skills.join(", ")}`}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <style>
        {`
          .exp-heading {
            background-image: linear-gradient(225deg,hsla(271, 100%, 50%, 1) 0%,hsla(294, 100%, 50%, 1) 100%);
            -webkit-background-clip: text;
            color: transparent;
            text-align: center;
            margin-bottom: 30px;
          }

          .timeline-container {
            width: 100%;
            overflow-x: hidden;
            background-color: #090917;
          }

          .vertical-timeline-element-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            border-radius: 8px;
            padding: 15px;
            box-shadow: none;
            border: none;
            border-bottom: 8px solid;
            border-image-source: linear-gradient(
              225deg,
              hsla(271, 100%, 50%, 1) 0%,
              hsla(294, 100%, 50%, 1) 100%
            );
            border-image-slice: 1;
          }

          .vertical-timeline-element-date {
            text-align: left;
            font-weight: bold;
          }

          .vertical-timeline-element-title {
            font-size: 1.2em;
          }

          .vertical-timeline-element-subtitle {
            font-size: 1em;
          }

          @media (min-width: 768px) {
            .timeline-container {
              width: 100%;
            }

            .vertical-timeline-element-title {
              font-size: 1em;
            }

            .vertical-timeline-element-subtitle {
              font-size: 0.9em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Experience;
