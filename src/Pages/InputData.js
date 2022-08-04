import React, { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import './Style.css'
const InputData = () => {
    const { handleSubmit, register, reset } = useForm();
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const onSubmit = data => {
        console.log("data" , data)
        console.log("date" , value)
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