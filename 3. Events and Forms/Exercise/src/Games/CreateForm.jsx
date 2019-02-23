import React from 'react';

const innerState = { // because we have functional component
    title: '',
    description: '',
    imageUrl: ''
};

const handleFormChange = (event) => { // because we have functional component
    const { value, name } = event.target;

    innerState[name] = value;
}

const CreateForm = (props) => {
    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
                event.preventDefault();
                props.createGame(innerState); // this.innerState because we have functional component
            }}>
                <label>Title</label>
                <input type="text" id="title" name="title" onChange={handleFormChange} />
                <label>Description</label>
                <textarea type="text" id="description" name="description" onChange={handleFormChange} />
                <label>ImageUrl</label>
                <input type="text" id="imageUrl" name="imageUrl" onChange={handleFormChange} />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
};

export default CreateForm;

