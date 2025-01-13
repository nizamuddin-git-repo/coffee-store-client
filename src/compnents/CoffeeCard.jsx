import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const ramaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(ramaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side  shadow-xl bg-[#eae7dd] ">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-6">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="space-y-3">
          <button className="btn btn-neutral">View</button>
          <div>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-neutral">Edit</button>
            </Link>
          </div>
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-2xl text-slate-300"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
