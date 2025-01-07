import React, { useState } from "react";
import Input from "../../../../ui/Input";
import { Textarea } from "@nextui-org/react";
import { AddCircleIcon, Delete02Icon, MinusSignCircleIcon } from "../../../../assets/icons/Icons";
import { motion } from "framer-motion";
import Button from "../../../../ui/Button";

const defaultWorkExperience = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  description: "",
};

const EditWork = ({ workExpDraft, setWorkExpDraft }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the currently expanded section

  const toggleCollapse = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index)); // Expand or collapse
  };

  const addWorkExperience = () => {
    setWorkExpDraft((prev) => [...prev, defaultWorkExperience]);
    setExpandedIndex(workExpDraft.length); // Expand the newly added section
  };

  const deleteWorkExperience = (indexToRemove) => {
    setWorkExpDraft((prev) => prev.filter((_, index) => index !== indexToRemove));
  };



  return (
  <div className="flex flex-col gap-2">
    {workExpDraft.map((workExp, index) => (
      <div className="w-full bg-white rounded-md px-4 py-3 overflow-hidden" key={index}>
        <div className="flex justify-between items-center">
          <span className="text-primary">Work Experience {index + 1}</span>
          <div>
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
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expandedIndex === index ? "auto" : 0,
            opacity: expandedIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <label htmlFor={`company-${index}`} className="text-gray-700">
                  Company
                </label>
                <Input
                  id={`company-${index}`}
                  placeholder="Company"
                  value={workExp.company}
                  handleChange={(e) =>
                    setWorkExpDraft((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, company: e.target.value } : item
                      )
                    )
                  }
                />
              </div>

              <button onClick={() => deleteWorkExperience(index)} className="mt-2"><Delete02Icon /></button>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`position-${index}`} className="text-gray-700">
                Job Title
              </label>
              <Input
                id={`position-${index}`}
                placeholder="Job Title"
                value={workExp.position}
                handleChange={(e) =>
                  setWorkExpDraft((prev) =>
                    prev.map((item, i) =>
                      i === index ? { ...item, position: e.target.value } : item
                    )
                  )
                }
              />
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor={`startDate-${index}`} className="text-gray-700">
                  Start Date
                </label>
                <Input
                  id={`startDate-${index}`}
                  placeholder="Start Date"
                  value={workExp.startDate}
                  handleChange={(e) =>
                    setWorkExpDraft((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, startDate: e.target.value } : item
                      )
                    )
                  }
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor={`endDate-${index}`} className="text-gray-700">
                  End Date
                </label>
                <Input
                  id={`endDate-${index}`}
                  placeholder="End Date"
                  value={workExp.endDate}
                  handleChange={(e) =>
                    setWorkExpDraft((prev) =>
                      prev.map((item, i) =>
                        i === index ? { ...item, endDate: e.target.value } : item
                      )
                    )
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`description-${index}`} className="text-gray-700">
                Description
              </label>
              <Textarea
                id={`description-${index}`}
                isClearable
                className="text-gray-700"
                value={workExp.description}
                onChange={(e) =>
                  setWorkExpDraft((prev) =>
                    prev.map((item, i) =>
                      i === index ? { ...item, description: e.target.value } : item
                    )
                  )
                }
                placeholder="Describe your responsibilities and achievements"
                variant="faded"
              />
            </div>
          </div>
        </motion.div>
      </div>
    ))}

    <Button handleClick={addWorkExperience} className='self-start bg-brown text-white ml-3 mt-2'>Add Experience</Button>
  </div>
  )
};

export default EditWork;
