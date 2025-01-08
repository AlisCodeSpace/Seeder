import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      <ul className="flex flex-col gap-3 list-disc">
        {education.map((edu, index) => {
          const { institution, degree, startDate, endDate } = edu;

          // Skip rendering this education entry if all fields are empty
          if (!institution && !degree && !startDate && !endDate) {
            return null;
          }

          return (
            <li key={index} className="flex flex-col gap-1">
              {institution && (
                <span className="font-medium text-gray-900">
                  {institution}
                </span>
              )}
              
              {degree && (
                <span className="text-sm text-gray-800">{degree}</span>
              )}

              {/* Render startDate and endDate if either is present */}
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

export default Education;
