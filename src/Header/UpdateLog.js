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
                <p>Version 1.0.1alpha</p>
                <ul>
                    <li>Initial release</li>
                </ul>
                <p>Version 2.0.1alpha</p>
                <ul>
                    <li>AI available for Analysis Units</li>
                </ul>
                <p>Version 2.0.2alpha</p>
                <ul>
                    <li>Added mobile support</li>
                </ul>
            </div>
        </div>
    )
};

export default UpdateLog;
