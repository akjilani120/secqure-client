import React, { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import './Style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const InputData = () => {
    const navigate = useNavigate()
    const { handleSubmit, register, reset } = useForm();
    const imgStorageKey = 'a20408031904de293b263e5a8f8e5393'
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const onSubmit = data => {
        const formData = new FormData();
        const image = data.img[0]
        formData.append('image', image);           
            const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url ,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
         .then(result => {
            if(result.success){
                const name = data.name;
                const birthday = data.birthday
                const gender = data.gender;
                const img = result.data.url
                const totalData ={
                    name,
                    birthday, 
                    gender,
                    img,
                    value
                }
               fetch('http://localhost:5000/user', {
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(totalData)
                })
                .then(res => res.json())
                .then(data =>{
                    if(data){
                        toast("Success , Send your data")
                       
                    }else{
                        toast("not success ,donot Send your data")
                    }
                })
                reset()
            }
         })
    };
   
    return (
        <div className='input-data-header'>
            <div className="input-data-body">
                <h2 className='text-center text-primary'>Please Data Add </h2>
                <TimePicker className="d-none" value={value} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input className='form-control' type='text' {...register("name", { required: true })} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Birth Date</label>
                        <input className='form-control' type='date' {...register("birthday", { required: true })} />
                    </div>
                  
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Gender</label>
                        <input className='form-control' type='text' {...register("gender")} />
                    </div>
                  
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Image</label>
                        <input className='form-control' type='file' {...register("img")} />
                    </div>
                  
                    <div class="my-4 text-center ">                       
                    <input className='btn btn-primary py-2 px-3' type="submit" />
                    </div>
                  
                  
                   
                   
                   
                </form>
               
            </div>
            <ToastContainer />
        </div>
    );
};

export default InputData;