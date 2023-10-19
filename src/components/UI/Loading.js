const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
      <p className="ml-2 text-blue-500">Loading...</p>
    </div>
  );
};

export default Loading;
