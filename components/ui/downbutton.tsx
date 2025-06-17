export default function DownButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className="absolute bottom-4 text-center p-2 text-foreground transition-colors border rounded-sm border-foreground/[0.5] cursor-pointer hover:bg-foreground hover:text-background"
    >
      ↓
    </button>
  );
}
