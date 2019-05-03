import React from 'react';
import './loader.css';

const Loader = () => (
    <React.Fragment>
        <div className="loader-container">
        <h2 className="loader-text">Waiting...Map loading...</h2>
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                        <div></div>
                </div>
            </div>
        </div>
    </React.Fragment>
);


export default Loader;