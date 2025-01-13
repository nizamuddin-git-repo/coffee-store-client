import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category,details, photo } = coffee;
     const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);
    
        // send data to tha server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateCoffee)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Update Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
      }

    return (
         <div className=" bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-bold text-center">Update a Coffee {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input border-[#c8a654] focus:border-[#e9b949]  w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input border-[#c8a654] focus:border-[#e9b949]   w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input border-[#c8a654] focus:border-[#e9b949]  w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input border-[#c8a654] focus:border-[#e9b949]   w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input border-[#c8a654] focus:border-[#e9b949]  w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input border-[#c8a654] focus:border-[#e9b949]   w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input border-[#c8a654] focus:border-[#e9b949] w-full"
              />
            </label>
          </div>
        </div>
        <input className="w-full btn btn-neutral" type="submit" value="UPDATE COFFEE" />
      </form>
    </div>
    );
};

export default UpdateCoffee;