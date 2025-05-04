import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";

const unitModules = import.meta.glob(`./documents/**/*`, { eager: true }); // dynamically import all files regardless of the depth
const groupedUnits = Object.keys(unitModules).reduce((accumulator, filePath) => { // accumulator is the object that will hold the units, filePath is the path to the file
    const folderName = filePath.split("/")[2]; // Get the folder name
    if (!accumulator[folderName]) {
        accumulator[folderName] = []; // Initialize an array for the folder if it doesn't exist already
    }
    accumulator[folderName].push({
        name: filePath.split("/").pop().replace(".pdf", ""), // Get the file name without the extension
        path: filePath, // Get the full path to the file
    })

    return accumulator; // Return the accumulator for the next iteration
}, {}); // initial value is an empty object

const units = Object.keys(groupedUnits).map((unit) => {
    return {
        name: unit,
        path: `/analysis/${unit.toLowerCase()}`,
        documents: groupedUnits[unit],
    };
});

const Analysis = () => {
    return (
        <div id="content" className="">
            <Header />
            <div id='units' className="">
                <BackButton />
                <div id="quick-title" className="text-black pt-[3rem] pl-[3.75rem] text-2xl font-bold">
                    <h2>Analysis Resources</h2>    
                </div>
                <div id="grid" className="">
                   {
                       units.map((unit, index) => {
                            return (
                                <div id="unit" key={index} onClick={() => window.location.href = unit.path} className="">
                                    <Link to={unit.path} id="unit-link" className="">
                                        <div id="gradient-overlay" className="">
                                            <h1 id="unit-title" className="">{unit.name}</h1>
                                            <p id="unit-description" className="">{unit.documents.length} Tests and Quizzes</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                       })
                    } 
                </div>
            </div>
        </div>
    )
}

export default Analysis;