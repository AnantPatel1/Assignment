import totalscore from "../../assets/Group 237814.png";
import score2 from "../../assets/Group 237815.png";
import score3 from "../../assets/Group 237816.png";
import score1 from "../../assets/Component 15.png";
function Report() {
  const metricsData = [
    { metric: "Correct Answered", value: 50 },
    { metric: "Wrong Answered", value: 10 },
    { metric: "Unanswered", value: 5 },
    { metric: "Skipped", value: 8 },
    { metric: "Out of Time", value: 7 },
    { metric: "Time Used", value: "120 minutes" },
  ];
  return (
    <>
      <div className="flex h-screen">
        {/* Left Section (60%) */}
        <div className="w-8/12 p-4">
          {/* Student's Answer Section */}
          <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Your Answer:</h2>
            {/* Display the student's answer and correct answer here */}
            <div className="border p-2">
              <p className="mb-4">
                The most challenging software for me is specifically{" "}
                <span style={{ backgroundColor: "red", color: "white" }}>
                  to be specifically
                </span>{" "}
                Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is,
                uh, they are quite{" "}
                <span style={{ backgroundColor: "orange", color: "white" }}>
                  nuance
                </span>{" "}
                and all the constraints and, uh,{" "}
                <span style={{ backgroundColor: "blue", color: "white" }}>
                  spill
                </span>{" "}
                small, small things that need to be{" "}
                <span style={{ backgroundColor: "purple", color: "white" }}>
                  learned up
                </span>
                . Yeah. This question, it almost took three to four months to
                complete{" "}
                <span style={{ backgroundColor: "red", color: "white" }}>
                  an entire software
                </span>{" "}
                of Adobe Illustrator.
              </p>
              <p className="mb-4">
                The most challenging software for me is specifically{" "}
                <span style={{ backgroundColor: "red", color: "white" }}>
                  to be specifically
                </span>{" "}
                Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is,
                uh, they are quite{" "}
                <span style={{ backgroundColor: "orange", color: "white" }}>
                  nuance
                </span>{" "}
                and all the constraints and, uh,{" "}
                <span style={{ backgroundColor: "blue", color: "white" }}>
                  spill
                </span>{" "}
                small, small things that need to be{" "}
                <span style={{ backgroundColor: "purple", color: "white" }}>
                  learned up
                </span>
                . Yeah. This question, it almost took three to four months to
                complete{" "}
                <span style={{ backgroundColor: "red", color: "white" }}>
                  an entire software
                </span>{" "}
                of Adobe Illustrator.
              </p>
              <p className="mb-4">
                Communication The most challenging software for me is
                specifically to be specifically Telluride is Figma. Yeah. Figma
                and Adobe Illustrator, which is, uh, they are quite{" "}
                <span style={{ backgroundColor: "orange", color: "white" }}>
                  nuance
                </span>{" "}
                and all the constraints and, uh,{" "}
                <span style={{ backgroundColor: "blue", color: "white" }}>
                  spill
                </span>{" "}
                small, small things that need{" "}
                <span style={{ backgroundColor: "purple", color: "white" }}>
                  to be learned up
                </span>
                . Reports Settings Premium Resume Courses Josephine Langford
              </p>
              {/* Content for Student's Answer */}
            </div>
            <div className="flex">
              <div className="w-1/3 p-4">
                <div className="bg-red-500 text-white p-4 rounded">
                  <p>Grammatical Error</p>
                </div>
              </div>

              <div className="w-1/3 p-4">
                <div className="bg-orange-500 text-white p-4 rounded">
                  <p>Vocabulary Error</p>
                </div>
              </div>

              <div className="w-1/3 p-4">
                <div className="bg-blue-500 text-white p-4 rounded">
                  <p>Spelling Error</p>
                </div>
              </div>
            </div>
          </div>

          {/* Management Score Section */}
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-2">Management Score</h2>
            {/* Focus Management */}
            <div className="flex items-center mb-4 p-4">
              <div className="w-1/6">
                <img src={score2} alt="Score" />
                <a href="#*" className="text-blue-500">
                  <p>score:39%</p>
                </a>
              </div>
              <div className="w-2/3">
                <p className="font-bold">Focus Management</p>
                <p>
                  Focus Score: Focus score refers to the ability of an
                  individual to concentrate and direct their attention towards a
                  specific task or information.{" "}
                </p>
              </div>
            </div>

            {/* Time Management */}
            <div className="flex items-center mb-4 p-4">
              <div className="w-1/6">
                <img src={score1} alt="Score" />
                <a href="#*" className="text-green-500">
                  <p>score:39%</p>
                </a>
              </div>
              <div className="w-2/3">
                <p className="font-bold">Time Management</p>
                <p>
                  Time Management: Time management is the practice of planning,
                  organizing, and allocating time to tasks and activities in a
                  way that maximizes productivity and efficiency.{" "}
                </p>
              </div>
            </div>

            {/* Critical Thinking */}
            <div className="flex items-center mb-4 p-4">
              <div className="w-1/6 relative">
                <img src={score3} alt="Score" />

                <a href="#*" className="text-orange-500">
                  <p>score:39%</p>
                </a>
              </div>
              <div className="w-2/3">
                <p className="font-bold">Critical Thinking</p>
                <p>
                  Critical thinking is the process of analyzing, evaluating, and
                  interpreting information or situations in a logical and
                  systematic manner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (40%) */}
        <div className="border p-4 mb-4 w-4/12">
          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4">
            Result: <span className="text-green-600">80%</span>
          </h2>

          {/* Image */}
          <div className="flex items-center mb-4">
            {/* Image */}
            <img src={totalscore} alt="total score" className="mb-4 w-6/12" />

            {/* Three Boxes (aligned vertically) */}
            <div className="flex flex-col ml-4 w-6/12">
              {/* Grammatical Error Box (Red) */}
              <div
                className=" text-white p-4 rounded mb-2"
                style={{ backgroundColor: "#235784" }}
              >
                <p>Correct Answered </p>
              </div>

              {/* Vocabulary Error Box (Orange) */}
              <div
                className=" text-white p-4 rounded mb-2"
                style={{ backgroundColor: "#BCDBDF" }}
              >
                <p>Not Answered</p>
              </div>

              {/* Spelling Error Box (Blue) */}
              <div
                className="text-white p-4 rounded mb-2"
                style={{ backgroundColor: "#40A8C4" }}
              >
                <p>Wrong</p>
              </div>
            </div>
          </div>

          {/* Table with Metrics */}
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Metric</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {metricsData.map((metric, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{metric.metric}</td>
                  <td className="px-4 py-2">{metric.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Report;
