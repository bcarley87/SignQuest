const SIZE_CLASSES = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-40 h-40',
  xl: 'w-56 h-56',
};

export default function SignImage({ sign, size = 'md', className = '' }) {
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const isVideo = sign.imageUrl?.endsWith('.mp4');

  function handleError(e) {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClass} ${className}`}>
      {isVideo ? (
        <video
          src={sign.imageUrl}
          className={`${sizeClass} object-contain rounded-xl`}
          autoPlay
          loop
          muted
          playsInline
          onError={handleError}
        />
      ) : (
        <img
          src={sign.imageUrl}
          alt={sign.word}
          className={`${sizeClass} object-contain rounded-xl`}
          onError={handleError}
        />
      )}
      <div
        className={`${sizeClass} hidden items-center justify-center rounded-xl bg-indigo-50 border-2 border-indigo-200`}
      >
        <span className="text-indigo-600 font-bold text-center text-sm leading-tight px-1">
          {sign.word}
        </span>
      </div>
    </div>
  );
}
