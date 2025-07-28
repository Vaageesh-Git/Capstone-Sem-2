import React, { useState, useEffect } from 'react';
import './task.css';
import Edit from '../editable/edit';
import { gapi } from 'gapi-script';

const CLIENT_ID = "726382350178-unvgdhor3aee4k5rldp6cc5t7cagkrod.apps.googleusercontent.com";
const API_KEY = ""; // Leave blank unless using public data
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function Tasks({ taskList, setTaskList, currNumber, setCurrNumber }) {
    const [edit, setEdit] = useState(false);
    const [editInd, setEditInd] = useState(null);

    useEffect(() => {
        const start = () => {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                })
                .then(() => {
                    const authInstance = gapi.auth2.getAuthInstance();
                    if (!authInstance) {
                        gapi.auth2.init({ client_id: CLIENT_ID });
                    }
                })
                .catch((err) => {
                    console.error("GAPI client init error:", err);
                });
        };

        gapi.load("client:auth2", start);
    }, []);

    const handleEditClick = (index) => {
        const finalList = taskList.filter((task, ind) => {
            if (ind !== index) {
                return task;
            } else {
                setEdit(true);
                setEditInd(index);
                return task;
            }
        });
        setTaskList(finalList);
    };

    const handleDelClick = (index) => {
        const finalList = taskList.filter((task, ind) => ind !== index);
        setTaskList(finalList);

        if (finalList.length <= currNumber && currNumber > 0) {
            setCurrNumber(currNumber - 5);
        }
    };

    const handleCalendarClick = async (task) => {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
            if (!authInstance.isSignedIn.get()) {
                await authInstance.signIn();
            }

            const event = {
                summary: task,
                description: "Created from task list app",
                start: {
                    dateTime: new Date().toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
                end: {
                    dateTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
            };

            const request = gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            });

            const response = await request;
            alert("Event Created: " + response.result.htmlLink);
        } catch (error) {
            console.error("Google Calendar Error:", error);
            if (error?.result?.error?.message) {
                alert("Failed to create event: " + error.result.error.message);
            } else if (error?.message) {
                alert("Failed to create event: " + error.message);
            } else {
                alert("Failed to create event. Check console for details.");
            }
        }
    };

    return (
        <div>
            <ul style={{ margin: 0, padding: 0 }}>
                {taskList.slice(currNumber, currNumber + 5).map((tsk, index) => {
                    const actualInd = currNumber + index;
                    return (
                        <li key={actualInd} style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {edit && editInd === actualInd ? (
                                <Edit
                                    val={tsk}
                                    index={actualInd}
                                    setTaskList={setTaskList}
                                    taskList={taskList}
                                    setEdit={setEdit}
                                />
                            ) : (
                                <div className="card">
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0" }}>
                                        <img
                                            src="/Images/googleCalender.png"
                                            alt="UnAv"
                                            className="calender-icon"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleCalendarClick(tsk)}
                                        />
                                        <div id="li">{tsk}</div>
                                    </div>
                                    <div className="card-buttons">
                                        <button onClick={() => handleEditClick(actualInd)} style={{ color: "rgb(12, 126, 196)" }}>Edit..</button>
                                        <button onClick={() => handleDelClick(actualInd)} style={{ color: "red" }}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Tasks;
