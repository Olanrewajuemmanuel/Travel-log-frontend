import { ChangeEvent, FormEvent, useState } from "react";

export const AddTravelLog = () => {
  const [fileCount, setFileCount] = useState(0)
  return (
    <div>
      <h1 className="text-2xl font-medium mb-5">
        Tell people about your travels
      </h1>
      <form className="space-y-5">
        {/* rating, caption, location, images, date */}
        <div className="form-gr">
          <label
            htmlFor="imgSet"
            className="px-3 py-2 bg-red-600 hover:bg-red-700 border-2 hover:border-gray-500 text-gray-100 rounded-lg w-[] cursor-pointer inline-flex mt-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Choose your images and videos
          </label>

          <input
            type="file"
            id="imgSet"
            accept="image/*, video/*"
            className="hidden"
            multiple
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFileCount(e.target.files?.length || 0)
              console.log(e.target.files);
              

            }}
          />

          <div className="img-preview mt-3">
            {fileCount} file{fileCount > 1 && 's'} selected
          </div>
        </div>
        <div className="form-gr space-y-2">
          <label htmlFor="location">
            Where is this place? <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            name="location"
            placeholder="E.g., Bali, Indonesia"
            className="block py-2 px-3 border border-gray-200 outline-none rounded-lg bg-white"
          />
        </div>
        <div className="form-gr space-y-2">
          <label htmlFor="caption">
            Caption: <span className="text-red-500">*</span>{" "}
          </label>
          <textarea
            name="caption"
            rows={5}
            cols={50}
            placeholder="E.g., Freedom! Love and lights #travels #festivities"
            className="block py-2 px-3 border border-gray-200 outline-none rounded-lg bg-white"
          />
        </div>
        <button className="px-3 py-2 bg-red-600 hover:bg-red-700 text-gray-100 rounded-lg w-[80px]">
          Post
        </button>
      </form>
    </div>
  );
};
