import { IoMdSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className="px-4 my-3">
      <div className="w-ful relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
