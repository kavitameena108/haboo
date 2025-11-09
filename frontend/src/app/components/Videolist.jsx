export default function Videolist() {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 2,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    },
    {
      id: 1,
      title: "Video 1",
      thumbnail: "",
    }
  ];
  return (
    <div className="flex space-x-4 overflow-x-auto px-4 py-4 m-5 mt-12">
      {videos.map((video) => (
        <div
          key={video.id}
          className="flex-shrink-0 w-48 h-60 bg-gray-200 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
