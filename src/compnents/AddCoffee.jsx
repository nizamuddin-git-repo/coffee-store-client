const AddCoffee = () => {
  return (
    <div className="max-w-8xl justify-center flex">
      <div className="border-2 shadow-md mt-8 bg-[#F4F3F0] p-16 rounded-lg">
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
                      className="input input-bordered input-accent w-96 h-9"
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
      </div>
      {/* <div className="border-4 border-red-400 mt-14  bg-[#F4F3F0] ">
        <div className="hero-content text-center">
          <div className="">
          <h2 className="text-center text-3xl">Add Coffee</h2>
            <form>
              <div className="flex justify-center items-center">
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="label-group">
                      <input
                        type="text"
                        placeholder="Coffee Name"
                        className="input input-bordered input-accent"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Chef</span>
                    </label>
                    <label className="label-group">
                      <input
                        type="text"
                        placeholder="Coffee Name"
                        className="input input-bordered input-accent"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddCoffee;
