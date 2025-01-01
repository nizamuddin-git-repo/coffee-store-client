const AddCoffee = () => {
  return (
    <div>
      <h2 className="text-center text-3xl">Add Coffee</h2>
      <form>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
