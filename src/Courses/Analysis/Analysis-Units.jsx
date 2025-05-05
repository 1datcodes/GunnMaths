import React from "react";

const AnalysisUnits = ({ unitName, documents }) => {
  if (!documents || documents.length === 0) {
    return (
      <div className="">
        <div className="py-[2.5rem] px-[3.75rem]">
          <h2 className="text-2xl font-bold">No documents found</h2>
        </div>
      </div>
    );
  }

  console.log(unitName);

  return (
    <div id="content" className="">
      <h1>{unitName}</h1>
    </div>
  );
};

export default AnalysisUnits;
