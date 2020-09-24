import React from 'react';

function Option() {

    return (
        <>
        <p>Options:</p>
        <div className="d-flex">
            <div className="dropdown mr-1">
                <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                Speed
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a className="dropdown-item" href="#">1</a>
                <a className="dropdown-item" href="#">2</a>
                <a className="dropdown-item" href="#">3</a>
                </div>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary">Configure</button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                <a className="dropdown-item" href="#">Glider</a>
                <a className="dropdown-item" href="#">Toad</a>
                <a className="dropdown-item" href="#">Oscillator</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Spaceship</a>
                </div>
            </div>
        </div>
        </>
    )

}

export default Option;