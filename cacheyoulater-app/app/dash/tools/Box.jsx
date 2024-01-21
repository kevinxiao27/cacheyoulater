import React from "react";

const Box = (props) => {
    const { jsoninfo } = props;

    return (
        <div
            className="w-[70vw] h-[70vw] rounded-2xl border-2 border-black hover:scale-105 scale-100 transition duration-400 ease-linear"
            onClick={() => {
                jsoninfo(props.children);
            }}
        >
            <div>
                <h1 className="font-bold mx-5 mt-3 mb-2 uppercase">
                    {props.children.title}
                </h1>
                <p className="mx-5">{props.children.description}</p>
            </div>
        </div>
    );
};

export default Box;
