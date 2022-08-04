import React from 'react';
import './Style.css'
const InputData = () => {

    return (
        <div className='input-data-header'>
            <div className="input-data-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Date Of Birth</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Image</label>
                        <input type="file" class="form-control" id="exampleInputPassword1" />
                    </div>                   
                    
                    <div class="mb-3">
                        
                        <input type="submit" class="form-control" value="Submit" id="exampleInputPassword1" />
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
};

export default InputData;