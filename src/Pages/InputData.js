import React, { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';
import './Style.css'
const InputData = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
    const handleSubmit =(event) =>{
        event.preventDefault()
        const name = event.target.name.value
        const birthDate = event.target.birth.value
        const gender = event.target.gender.value
        const image = event.target.image.value 
       
    }
    return (
        <div className='input-data-header'>
            <div className="input-data-body">
                 <h2 className='text-center text-primary'>Please Data Add </h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' />
                            
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Date Of Birth</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" name='birth' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='gender' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Image</label>
                        <input type="file" class="form-control" id="exampleInputPassword1" name='image' />
                    </div>                   
                    <div class="mb-3">
                      
                        <TimePicker  value={value} />
                    </div>                   
                    
                    <div class="my-4 mx-auto text-center">
                        
                        <input type="submit" class="form-control btn btn-primary w-50 py-2 btn-submit" value="Submit" id="exampleInputPassword1" />
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
};

export default InputData;