import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [myInput, setMYInput] = useState("");

    const onInputChange = (event) => {
        setMYInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        onTermSubmit(myInput);
        // TODO: Make sure we call
        // callback from parent component
    };

    return (
        <div className=" search-bar ui segment"> {/* //draw a rectangle around everything inside it */}
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search Song</label>
                    <input
                        type="text"
                        value={myInput}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;