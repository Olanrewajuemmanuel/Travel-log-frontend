import profile from "../assets/profile.webp"
const Profile = () => {
  return (
    <div>
      <div className="flex space-x-16 w-[500px] md:w-full mx-auto select-none">
        <div className="profile-pic">
          <img src={profile} alt="" width={100} height={100} className="rounded-full border border-gray-100 shadow-sm" />
        </div>
        <div className="user-info">
          <h1 className="text-3xl font-light my-2">Username</h1>
          <p>Description</p>
          <button className="font-bold mt-2 rounded-full bg-red-600 w-[80px] border border-red-600 hover:bg-white hover:text-red-600 ease transition-colors text-gray-100">Follow</button>
        </div>
      </div>
      <div className="mt-16">
        <p className="font-light select-none"><span className="font-medium">33</span> posts</p>
        <div className="grid grid-cols-3 gap-y-2 mt-3">
          <div className="pic w-40 h-36 bg-gray-500 cursor-pointer"></div>
          <div className="pic w-40 h-36 bg-red-500"></div>
          <div className="pic w-40 h-36 bg-purple-500"></div>
          <div className="pic w-40 h-36 bg-green-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile