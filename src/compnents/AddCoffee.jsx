const AddCoffee = () => {
  return (
    <div>
      <h2 className="text-center text-3xl">Add Coffee</h2>
      <form>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
