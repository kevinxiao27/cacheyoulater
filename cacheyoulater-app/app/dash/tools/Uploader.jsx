import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = () => {
    const [Ongoing, setOngoing] = useState(false);
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => {
        return { url: "https://httpbin.org/post" };
    };

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file);
        setOngoing(true);
    };

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    };

    useEffect(() => {
        handleSubmit;
    }, []);

    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <div className="w-[80vw] mx-auto my-8">
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept="image/*"
                    inputContent={(files, extra) =>
                        extra.reject
                            ? "Image, audio and video files only"
                            : "Drag Files"
                    }
                    styles={{
                        dropzoneReject: {
                            borderColor: "red",
                            backgroundColor: "#DAA",
                        },
                        inputLabel: (files, extra) =>
                            extra.reject ? { color: "red" } : {},
                    }}
                    submitButtonDisabled={true}
                />
                <span
                    className={`my-2 ${
                        Ongoing ? "visible" : "invisible"
                    } italic mx-auto`}
                >
                    {" "}
                    File Uploaded!
                </span>
            </div>
        </div>
    );
};

export default Uploader;
