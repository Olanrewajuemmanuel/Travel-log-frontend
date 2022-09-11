import profile from "../assets/profile.webp";
const Profile = () => {
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex space-x-16 mx-auto select-none">
        <div className="profile-pic">
          <img
            src={profile}
            alt=""
            width={100}
            height={100}
            className="rounded-full border border-gray-100 shadow-sm"
          />
        </div>
        <div className="user-info relative">
          <h1 className="text-3xl font-light my-2">Username</h1>
          <button className="edit absolute top-0 right-[-38%] hover:bg-red-100 rounded-full p-3 ease-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <p>Description</p>
          <button className="font-bold mt-2 rounded-full bg-red-600 w-[80px] border border-red-600 hover:bg-white hover:text-red-600 ease transition-colors text-gray-100">
            Follow
          </button>
        </div>
      </div>
      <div className="mt-16 max-w-[500px]">
        <p className="font-light select-none border-b-2 py-2 border-gray-300">
          <span className="font-medium">33</span> posts
        </p>
        <div className="grid grid-cols-3 gap-y-2 mt-3  ">
          <div className="pic w-40 h-36 bg-gray-500 cursor-pointer"></div>
          <div className="pic w-40 h-36 bg-red-500"></div>
          <div className="pic w-40 h-36 bg-purple-500"></div>
          <div className="pic w-40 h-36 bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
