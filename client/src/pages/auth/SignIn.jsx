const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold text-center text-gray-300 cursor-default">
          Sign In.
          <span className="text-blue-500 cursor-default">Chat App</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="enter username..."
              className="w-full input input-bordered h-10 capitalize"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="enter password..."
              className="w-full input input-bordered h-10 capitalize"
            />
          </div>
          <a
            href="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?/Sign Up
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
