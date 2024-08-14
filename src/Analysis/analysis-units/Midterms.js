import React from "react";
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';
import './Units.css';

// Files
// Semester 1
import MT1_2019_Blank from '../documents/Midterms/Semester1/2019_MT1_Blank.pdf';
import MT1_2022_Blank from '../documents/Midterms/Semester1/2022_MT1_Blank.pdf';
import MT2_2022_Blank from '../documents/Midterms/Semester1/2022_MT2_Blank.pdf';
import MT1_2023_Blank from '../documents/Midterms/Semester1/2023_MT1_Blank.pdf';
import MT2_2023_Blank from '../documents/Midterms/Semester1/2023_MT2_Blank.pdf';

import MT1_2016_Raw from '../documents/Midterms/Semester1/2016_MT1_Raw.pdf';
import MT2_2016_Raw from '../documents/Midterms/Semester1/2016_MT2_Raw.pdf';
import MT1_2018_Raw from '../documents/Midterms/Semester1/2018_MT1_Raw.pdf';
import MT2_2018_Raw from '../documents/Midterms/Semester1/2018_MT2_Raw.pdf';
import MT1_2019_Raw from '../documents/Midterms/Semester1/2019_MT1_Raw.pdf';
import MT1_2021_Raw from '../documents/Midterms/Semester1/2021_MT1_Raw.pdf';
import MT2_2021_Raw from '../documents/Midterms/Semester1/2021_MT2_Raw.pdf';
import MT1_2022_Raw from '../documents/Midterms/Semester1/2022_MT1_Raw.pdf';
import MT2_2022_Raw from '../documents/Midterms/Semester1/2022_MT2_Raw.pdf';

import FR1_2021_Blank from '../documents/Midterms/Semester1/2021_Final1_Blank.pdf';
import FR2_2021_Blank from '../documents/Midterms/Semester1/2021_Final2_Blank.pdf';
import FR3_2021_Blank from '../documents/Midterms/Semester1/2021_Final3_Blank.pdf';
import FR4_2021_Blank from '../documents/Midterms/Semester1/2021_Final4_Blank.pdf';

import FR4_2021_Key from '../documents/Midterms/Semester1/2021_Final4_Key.pdf';

// Semester 2
import GAtM_2018_Blank from '../documents/GAtM/2018_Test_Blank.pdf';
import GAtM_2022_Blank from '../documents/GAtM/2022_Test_Blank.pdf';

import Matrix_2018_Blank from '../documents/Matrices/2018_Test_Blank.pdf';
import Matrix_2022_Blank from '../documents/Matrices/2022_Test_Blank.pdf';

import Matrix_2013_Raw from '../documents/Matrices/2013_Test_Raw.pdf';
import Matrix_2016_Raw from '../documents/Matrices/2016_Test_Raw.pdf';
import Matrix_2018_Raw from '../documents/Matrices/2018_Test_Raw.pdf';
import Matrix_2019_Raw from '../documents/Matrices/2019_Test_Raw.pdf';
import Matrix_2021_Raw from '../documents/Matrices/2021_Test_Raw.pdf';
import Matrix_2022_Raw from '../documents/Matrices/2022_Test_Raw.pdf';
import Matrix_2023_Raw from '../documents/Matrices/2023_Test_Raw.pdf';

import GAtM_2013_Raw from '../documents/GAtM/2013_Test_Raw.pdf';
import GAtM_2016_Raw from '../documents/GAtM/2016_Test_Raw.pdf';
import GAtM_2018_Raw from '../documents/GAtM/2018_Test_Raw.pdf';
import GAtM_2019_Raw from '../documents/GAtM/2019_Test_Raw.pdf';
import GAtM_2021_Raw from '../documents/GAtM/2021_Test_Raw.pdf';
import GAtM_2022_Raw from '../documents/GAtM/2022_Test_Raw.pdf';
import GAtM_2023_Raw from '../documents/GAtM/2023_Test_Raw.pdf';

import S2Review1_Blank from '../documents/Midterms/Semester2/AH S2 Review 1.pdf';
import S2Review2_Blank from '../documents/Midterms/Semester2/AH S2 Review 2.pdf';
import S2Review3_Blank from '../documents/Midterms/Semester2/AH S2 Review 3.pdf';
import S2Review4_Blank from '../documents/Midterms/Semester2/AH S2 Review 4.pdf';
import S2Review5_Blank from '../documents/Midterms/Semester2/AH S2 Review 5.pdf';
import FakeExam_Blank from '../documents/Midterms/Semester2/AH Fake Final Exam.pdf';

import S2Review1_Key from '../documents/Midterms/Semester2/AH S2 Review 1 and 2 KEY.pdf';
import S2Review3_Key from '../documents/Midterms/Semester2/AH S2 Review 3 KEY.pdf';
import S2Review4_Key from '../documents/Midterms/Semester2/AH S2 Review 4 KEY.pdf';
import S2Review5_Key from '../documents/Midterms/Semester2/AH S2 Review 5 KEY.pdf';
import FakeExam_Key from '../documents/Midterms/Semester2/AH Fake Final Exam KEY.pdf';

const resources = [
    {
        url: "/semester1",
        text: "Semester 1",
        options: [
            {
                url: "/semester1/midterms",
                text: "Midterm Tests",
                options: [
                    {
                        url: "/semester1/midterms/blank",
                        text: "Blank",
                        options: [
                            {
                                text: "2019 Midterm 1 (Blank)",
                                url: MT1_2019_Blank
                            },
                            {
                                text: "2022 Midterm 1 (Blank)",
                                url: MT1_2022_Blank
                            },
                            {
                                text: "2022 Midterm 2 (Blank)",
                                url: MT2_2022_Blank
                            },
                            {
                                text: "2023 Midterm 1 (Blank)",
                                url: MT1_2023_Blank
                            },
                            {
                                text: "2023 Midterm 2 (Blank)",
                                url: MT2_2023_Blank
                            }
                        ]
                    },
                    {
                        url: "/semester1/midterms/raw",
                        text: "Raw",
                        options: [
                            {
                                text: "2016 Midterm 1 (Raw)",
                                url: MT1_2016_Raw
                            },
                            {
                                text: "2016 Midterm 2 (Raw)",
                                url: MT2_2016_Raw
                            },
                            {
                                text: "2018 Midterm 1 (Raw)",
                                url: MT1_2018_Raw
                            },
                            {
                                text: "2018 Midterm 2 (Raw)",
                                url: MT2_2018_Raw
                            },
                            {
                                text: "2019 Midterm 1 (Raw)",
                                url: MT1_2019_Raw
                            },
                            {
                                text: "2021 Midterm 1 (Raw)",
                                url: MT1_2021_Raw
                            },
                            {
                                text: "2021 Midterm 2 (Raw)",
                                url: MT2_2021_Raw
                            },
                            {
                                text: "2022 Midterm 1 (Raw)",
                                url: MT1_2022_Raw
                            },
                            {
                                text: "2022 Midterm 2 (Raw)",
                                url: MT2_2022_Raw
                            }
                        ]
                    }
                ]
            },
            {
                url: "/semester1/finals",
                text: "Finals Review",
                options: [
                    {
                        url: "/semester1/finals/blank",
                        text: "Blank",
                        options: [
                            {
                                text: "Final Review Sheet 1 (Blank)",
                                url: FR1_2021_Blank
                            },
                            {
                                text: "Final Review Sheet 2 (Blank)",
                                url: FR2_2021_Blank
                            },
                            {
                                text: "Final Review Sheet 3 (Blank)",
                                url: FR3_2021_Blank
                            },
                            {
                                text: "Final Review Sheet 4 (Blank)",
                                url: FR4_2021_Blank
                            }
                        ]
                    },
                    {
                        url: "/semester1/finals/key",
                        text: "Key",
                        options: [
                            {
                                text: "Final Review Sheet 4 (Key)",
                                url: FR4_2021_Key
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        url: "/semester2",
        text: "Semester 2",
        options: [
            {
                url: "/semester2/midterms",
                text: "Midterm Tests",
                options: [
                    {
                        url: "/semester2/midterms/blank",
                        text: "Blank",
                        options: [
                            {
                                text: "2018 Matrices Exam (Blank)",
                                url: Matrix_2018_Blank
                            },
                            {
                                text: "2018 GAtM Exam (Blank)",
                                url: GAtM_2018_Blank
                            },
                            {
                                text: "2022 Matrices Exam (Blank)",
                                url: Matrix_2022_Blank
                            },
                            {
                                text: "2022 GAtM Exam (Blank)",
                                url: GAtM_2022_Blank
                            }
                        ]
                    },
                    {
                        url: "/semester2/midterms/raw",
                        text: "Raw",
                        options: [
                            {
                                text: "2013 Matrices Exam (Raw)",
                                url: Matrix_2013_Raw
                            },
                            {
                                text: "2013 GAtM Exam (Raw)",
                                url: GAtM_2013_Raw
                            },
                            {
                                text: "2016 Matrices Exam (Raw)",
                                url: Matrix_2016_Raw
                            },
                            {
                                text: "2016 GAtM Exam (Raw)",
                                url: GAtM_2016_Raw
                            },
                            {
                                text: "2018 Matrices Exam (Raw)",
                                url: Matrix_2018_Raw
                            },
                            {
                                text: "2018 GAtM Exam (Raw)",
                                url: GAtM_2018_Raw
                            },
                            {
                                text: "2019 Matrices Exam (Raw)",
                                url: Matrix_2019_Raw
                            },
                            {
                                text: "2019 GAtM Exam (Raw)",
                                url: GAtM_2019_Raw
                            },
                            {
                                text: "2021 Matrices Exam (Raw)",
                                url: Matrix_2021_Raw
                            },
                            {
                                text: "2021 GAtM Exam (Raw)",
                                url: GAtM_2021_Raw
                            },
                            {
                                text: "2022 Matrices Exam (Raw)",
                                url: Matrix_2022_Raw
                            },
                            {
                                text: "2022 GAtM Exam (Raw)",
                                url: GAtM_2022_Raw
                            },
                            {
                                text: "2023 Matrices Exam (Raw)",
                                url: Matrix_2023_Raw
                            },
                            {
                                text: "2023 GAtM Exam (Raw)",
                                url: GAtM_2023_Raw
                            }
                        ]
                    }
                ]
            },
            {
                url: "/semester2/finals",
                text: "Finals Review",
                options: [
                    {
                        url: "/semester2/finals/blank",
                        text: "Blank",
                        options: [
                            {
                                text: "Review Sheet 1 (Blank)",
                                url: S2Review1_Blank
                            },
                            {
                                text: "Review Sheet 2 (Blank)",
                                url: S2Review2_Blank
                            },
                            {
                                text: "Review Sheet 3 (Blank)",
                                url: S2Review3_Blank
                            },
                            {
                                text: "Review Sheet 4 (Blank)",
                                url: S2Review4_Blank
                            },
                            {
                                text: "Review Sheet 5 (Blank)",
                                url: S2Review5_Blank
                            },
                            {
                                text: "Fake Final Exam (Blank)",
                                url: FakeExam_Blank
                            }
                        ]
                    },
                    {
                        url: "/semester2/finals/key",
                        text: "Key",
                        options: [
                            {
                                text: "Review Sheet 1 and 2 (Key)",
                                url: S2Review1_Key
                            },
                            {
                                text: "Review Sheet 3 (Key)",
                                url: S2Review3_Key
                            },
                            {
                                text: "Review Sheet 4 (Key)",
                                url: S2Review4_Key
                            },
                            {
                                text: "Review Sheet 5 (Key)",
                                url: S2Review5_Key
                            },
                            {
                                text: "Fake Final Exam (Key)",
                                url: FakeExam_Key
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function Midterms() {
    return (
        <div className="Midterms">
            <Header headerTitle="Midterms" description="Midterm Tests and Review Materials for Finals"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Midterms;