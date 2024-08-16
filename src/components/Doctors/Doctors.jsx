import React from 'react';

const Doctors = ({doc}) => {
    const {id, img, des, name} = doc
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{des}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Doctors;