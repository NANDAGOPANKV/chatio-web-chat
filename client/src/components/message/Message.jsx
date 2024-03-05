const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="" alt="" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 text-white">Hi! What is up</div>
      <div className="chat-footer opacity-50 text-xs flex-1 gap-2 items-center" >4:30</div>
    </div>
  );
};

export default Message;
