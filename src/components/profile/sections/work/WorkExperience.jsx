import React from "react";

const WorkExperience = ({ workExp }) => {
  return (
    <div>
      <ul className="flex flex-col gap-3 list-disc">
        {workExp.map((work, index) => {
          const { company, position, startDate, endDate } = work;

          // Skip rendering this work experience if all fields are empty
          if (!company && !position && !startDate && !endDate) {
            return null;
          }

          return (
            <li key={index} className="flex flex-col gap-1">
              {/* Render company and position if both are present */}
              {(company || position) && (
                <div className="flex items-center gap-2 text-gray-900">
                  {company && <span className="text-sm">{company}</span>}
                  {company && position && (
                    <div className="bg-gray-800 rounded-full w-[2px] h-[2px]" />
                  )}
                  {position && <span className="text-sm">{position}</span>}
                </div>
              )}

              {/* Render startDate and endDate if both are present */}
              {(startDate || endDate) && (
                <span className="text-sm text-gray-700">
                  {startDate && startDate} - {endDate && endDate}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExperience;
