import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name,quantity,supplier,taste,category,details,photo}
    console.log(newCoffee);

    // send data to tha server
    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  return (
    <div className=" bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-bold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
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
                type="details"
                name="details"
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
                placeholder="Photo URL"
                className="input border-[#c8a654] focus:border-[#e9b949] w-full"
              />
            </label>
          </div>
        </div>
        <input className="w-full btn btn-neutral" type="submit" value="ADD COFFEE" />
      </form>
    </div>
  );
};

export default AddCoffee;

{
  /* <div className="border-2 shadow-md mt-8 bg-[#F4F3F0] p-16 rounded-lg">
          <h2 className="text-center text-4xl mt-10 font-bold">Update Existing Coffee Details</h2>
        <div className="">
          <form>
            <div className="flex justify-center items-center">
              <div className="flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Coffee Name</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Americano Coffee"
                      className="input input-bordered input-accent w-96 h-9"
                    />
                  </label>
                  <label className="label">
                    <span className="label-text font-semibold">Supplier</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Cappu Authorizer"
                      className="input input-bordered input-accent w-96 h-9"
                    />
                  </label>
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Americano"
                      className="input input-bordered input-accent w-96 h-9"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Chef</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Mr. Matin Paul"
                      className="input input-bordered input-accent w-96 h-9"
                    />
                  </label>
                  <label className="label">
                    <span className="label-text font-semibold">Taste</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Sweet and hot"
                      className="input input-bordered input-accent w-96 h-9"
                    />
                  </label>
                  <label className="label">
                    <span className="label-text font-semibold">Details</span>
                  </label>
                  <label className="label-group">
                    <input
                      type="text"
                      placeholder="Espresso with hot water"
                      className="input input-bordered colo w-96 h-9"
                    />
                  </label>
                </div>
              </div>
            </div>
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <label className="label-group">
              <input
                type="text"
                placeholder="https://i.ibb.co/PGqMPr9/11.png"
                className="input input-bordered input-accent w-full h-9"
              />
            </label>
            <button className="btn w-full mt-2 bg-[#D2B48C] font-semibold">
              Update Coffee Details
            </button>
          </form>
        </div>
      </div> */
}
