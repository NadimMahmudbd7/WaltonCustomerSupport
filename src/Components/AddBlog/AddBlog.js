import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBlog.css'

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:4000/blogs',{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log(result);
        })
        data.reset()
    };
    return (
        <div>
            <h1 className='text-center my-4'>Add Solving Problem</h1>
            <form className='inputForm login-container' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Problem Name"  required/>
                <textarea className='my-3 rounded' {...register("description")} id="" cols="10" rows="4" placeholder='Solving Description' required></textarea>
                <input {...register("img")} placeholder="Photo URL" required />
                <input type="submit" className='addbtn' />
            </form>
        </div>
    );
};

export default AddBlog;