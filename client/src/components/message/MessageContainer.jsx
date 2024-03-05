import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text font-semibold">To:</span>{" "}
            <span className="font-bold text-gray-900 ">NGKV-2</span>
          </div>
          {/* Messages*/}
          <Messages />
          {/* Message Input-Field*/}
          <MessageInput />
        </>
      ) : (
        <NoChatSelectComponent />
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelectComponent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome NGKV</p>
        <p>Select a chat start messaging</p>
      </div>
    </div>
  );
};
