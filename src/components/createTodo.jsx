import React, { useState } from 'react';

const CreateTodo = ({onCreate}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();

        onCreate({name, description});
    }
    return (
        <React.Fragment>
            <h1>Créer une nouvelle Tache</h1>
            <div className="row">
                <div className="col-md-12">
               <form onSubmit={handleSubmit}>
                   <div className="row">
                       <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="name">Nom de tache</label>
                                <input type="text" className="form-control" id="name" name="name" onChange={(e) => {setName(e.target.value)}} required />
                            </div>
                       </div>
                       <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" name="description" onChange={(e) => {setDescription(e.target.value)}} required />
                            </div>
                       </div>
                       <div style={{ paddingTop: 30 }} className="col-md-4 ">
                            <button  type="submit" className="btn btn-primary">Ajouter la tache</button>
                        </div>
                   </div>
               </form>

                </div>
                
            </div>
        </React.Fragment>
    );
}
 
export default CreateTodo;