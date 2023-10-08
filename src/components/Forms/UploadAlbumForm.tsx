import React, {memo} from 'react';
import {useFormik} from "formik";

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const UploadAlbumForm = memo(() => {
    const formik = useFormik({
        initialValues: {
            album_title: '',
            file: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Create playlist</h2>
            <input
                name="album_title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.album_title}
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

export default UploadAlbumForm;