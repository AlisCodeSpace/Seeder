import React, { useState } from "react";
import Input from "../../../../ui/Input";
import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { AddCircleIcon, Delete02Icon, MinusSignCircleIcon } from "../../../../assets/icons/Icons";
import Button from "../../../../ui/Button";

const defaultEducation = {
  degree: "",
  institution: "",
  startDate: "",
  endDate: "",
  description: "",
};

const EditEducation = ({ educationDraft, setEducationDraft }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the currently expanded section

  const toggleCollapse = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Expand or collapse
  };

  const addEducation = () => {
    setEducationDraft((prev) => [...prev, defaultEducation]);
    setExpandedIndex(educationDraft.length); // Expand the newly added section
  };

  const deleteEducation = (indexToRemove) => {
    setEducationDraft((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
    setExpandedIndex(null); // Close any expanded section after deletion
  };

  return (
    <div className="flex flex-col">
      {educationDraft.map((edu, index) => (
        <div
          className="w-full bg-white rounded-md px-4 py-3 overflow-hidden"
          key={index}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="text-primary">Education {index + 1}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleCollapse(index)}
                className="relative"
              >
                <motion.div
                  key={expandedIndex === index} // Re-renders animation when expandedIndex changes
                  initial={{ rotate: -90 }}
                  animate={{ rotate: expandedIndex === index ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-block"
                >
                  {expandedIndex === index ? (
                    <MinusSignCircleIcon className="text-brown" />
                  ) : (
                    <AddCircleIcon className="text-brown" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Collapsible Section */}
          <motion.div
            className="overflow-hidden flex flex-col gap-2 mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expandedIndex === index ? "auto" : 0,
              opacity: expandedIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Degree */}
            <div className=" flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <label htmlFor={`degree-${index}`} className="text-gray-700">
                    Level of Education
                </label>
                <Input
                    id={`degree-${index}`}
                    placeholder="Degree"
                    value={edu.degree}
                    handleChange={(e) =>
                    setEducationDraft((prev) =>
                        prev.map((item, i) =>
                        i === index ? { ...item, degree: e.target.value } : item
                        )
                    )
                    }
                />
              </div>

              <button onClick={() => deleteEducation(index)} className="mt-2"><Delete02Icon /></button>
            </div>

            {/* Institution */}
            <div className="flex flex-col gap-2">
              <label htmlFor={`institution-${index}`} className="text-gray-700">
                Institution
              </label>
              <Input
                id={`institution-${index}`}
                placeholder="Institution"
                value={edu.institution}
                handleChange={(e) =>
                  setEducationDraft((prev) =>
                    prev.map((item, i) =>
                      i === index ? { ...item, institution: e.target.value } : item
                    )
                  )
                }
              />
            </div>

            {/* Dates */}
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor={`startDate-${index}`} className="text-gray-700">
                  Start Date
                </label>
                <Input
                  id={`startDate-${index}`}
                  placeholder="Start Date"
                  value={edu.startDate}
                  handleChange={(e) =>
                    setEducationDraft((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, startDate: e.target.value } : item
                      )
                    )
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`endDate-${index}`} className="text-gray-700">
                  End Date
                </label>
                <Input
                  id={`endDate-${index}`}
                  placeholder="End Date"
                  value={edu.endDate}
                  handleChange={(e) =>
                    setEducationDraft((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, endDate: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label htmlFor={`description-${index}`} className="text-gray-700">
                Description
              </label>
              <Textarea
                id={`description-${index}`}
                isClearable
                className="text-gray-700"
                value={edu.description}
                onChange={(e) =>
                  setEducationDraft((prev) =>
                    prev.map((item, i) =>
                      i === index
                        ? { ...item, description: e.target.value }
                        : item
                    )
                  )
                }
                placeholder="Tell us about your university experience"
                variant="faded"
              />
            </div>
          </motion.div>
        </div>
      ))}

      <Button handleClick={addEducation} className='self-start bg-brown text-white ml-3 mt-2'>Add Experience</Button>
    </div>
  );
};

export default EditEducation;
