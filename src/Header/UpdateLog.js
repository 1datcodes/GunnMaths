import React from "react";
import Header from "./Header";
import BackButton from "../BackButton";
import "./Update.css";

const UpdateLog = () => {
    return (
        <div className="Content">
            <Header headerTitle={"Update Log"} description={"Update might be coming"}></Header>
            <div className="Update">
                <BackButton />
                <h1>Update Log</h1>
                <h4>Version 1.0.1alpha</h4>
                <ul>
                    <li>Initial release</li>
                    <li>All Analysis tests and quizzes added</li>
                </ul>
                <h4>Version 2.0.1alpha</h4>
                <ul>
                    <li>Added Calc BC folder (to be completed later)</li>
                    <li>AI available for Analysis Units</li>
                </ul>
                <h4>Version 2.0.2alpha</h4>
                <ul>
                    <li>Added mobile support</li>
                </ul>
                <h4>Version 2.0.3alpha</h4>
                <ul>
                    <li>Updated About Us page</li>
                    <li>Probably the last major change before Calc BC</li>
                </ul>
            </div>
        </div>
    )
};

export default UpdateLog;
