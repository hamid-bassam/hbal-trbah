import clsx from "clsx";

interface YouTubeEmbedProps {
  url: string; // URL complète de la vidéo YouTube
  className?: string; // Classes CSS pour personnaliser le style
}

// Fonction utilitaire pour extraire l'ID YouTube
const getYouTubeID = (url: string): string => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)?([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/
  );
  return match?.[1] || match?.[2] || ""; // Retourne l'ID ou une chaîne vide
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, className }) => {
  const videoID = getYouTubeID(url);

  if (!videoID) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  return (
    <div className={`youtube-embed ${className || ""}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
        className={clsx("w-full h-64 rounded", className)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
