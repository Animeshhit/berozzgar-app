import getFileSize from "@/lib/getFileSize";
const Size = async ({ url }: { url: string }) => {
  const fileSize = await getFileSize(url);
  return <>{formatFileSize(fileSize as string)}</>;
};
// Utility function to format file size
const formatFileSize = (bytes: string) => {
  if (Number(bytes) < 1024) return bytes + " B";
  else if (Number(bytes) < 1048576)
    return (Number(bytes) / 1024).toFixed(1) + " KB";
  else return (Number(bytes) / 1048576).toFixed(1) + " MB";
};

export default Size;
