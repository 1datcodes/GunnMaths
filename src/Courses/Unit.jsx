import Header from "../Header/Header";
import BackButton from "../BackButton";

function Unit({ resources }) {
    const organizedResources = resources.reduce((accumulator, resource) => {
        if (!accumulator["Tests"]) { accumulator["Tests"] = []; }
        if (!accumulator["Quizzes"]) { accumulator["Quizzes"] = []; }

        if (resource.name.includes("Test")) {
           if (resource.name.includes("Raw")) {
                if (!accumulator["Tests"]["Raw"]) {
                    accumulator["Tests"]["Raw"] = [];
                }
                accumulator["Tests"]["Raw"].push({
                    name: resource.name,
                    file: resource.file,
                });
           } else if (resource.name.includes("Blank")) {
                if (!accumulator["Tests"]["Blank"]) {
                    accumulator["Tests"]["Blank"] = [];
                }
                accumulator["Tests"]["Blank"].push({
                    name: resource.name,
                    file: resource.file,
                });
           }
        } else if (resource.name.includes("Quiz")) {
            if (resource.name.includes("Raw")) {
                if (!accumulator["Quizzes"]["Raw"]) {
                    accumulator["Quizzes"]["Raw"] = [];
                }
                accumulator["Quizzes"]["Raw"].push({
                    name: resource.name,
                    file: resource.file,
                });
            } else if (resource.name.includes("Blank")) {
                if (!accumulator["Quizzes"]["Blank"]) {
                    accumulator["Quizzes"]["Blank"] = [];
                }
                accumulator["Quizzes"]["Blank"].push({
                    name: resource.name,
                    file: resource.file,
                });
            }
        }
        return accumulator;
    }, []);    
    console.log(organizedResources);

    return (
        <div id="content" className="">
            <Header />
            <div id="resources" className="">
                <BackButton />
                
            </div>
        </div>
    );
}

export default Unit;