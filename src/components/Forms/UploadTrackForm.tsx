

import React, {memo} from 'react';
import {useFormik} from "formik";

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


const UploadTrackForm = memo(() => {
    const formik = useFormik({
        initialValues: {
            track_title: '',
            file: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Upload track</h2>
            <input
                name="track_title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.track_title}
            />
            <input
                type="file"
                name="file"
                onChange={(e) => {
                    if (e.currentTarget.files) {
                        formik.setFieldValue("file", e.currentTarget.files![0]);
                    }
                }}
            />
            <button type="submit">submit</button>
        </form>
    );
});

export default UploadTrackForm;