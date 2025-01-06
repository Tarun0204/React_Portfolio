import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBriefcaseFill } from "react-icons/bs";
import { Experience as ExperienceData } from "../MyData";

const ExperienceTimeline = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        {ExperienceData.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            date={item.duration}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BsBriefcaseFill />}
          >
            <h3 className="vertical-timeline-element-title">{item.roleName}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.companyName}
            </h4>
            <p className="details">{`Duration: ${item.duration}`}</p>
            <p className="details">{`Projects: ${item.projectName.join(
              ", "
            )}`}</p>
            <p className="details">{`Skills: ${item.skills.join(", ")}`}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <style>
        {`
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
        
          .details {
            font-size: 0.9em;
            line-height: 1.5;
          }
        `}
      </style>
    </div>
  );
};

export default ExperienceTimeline;
