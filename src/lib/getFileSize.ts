async function getFileSize(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" });

    if (response.ok) {
      const fileSize = response.headers.get("Content-Length");
      console.log(`File Size: ${fileSize} bytes`);
      return fileSize; // Returns file size in bytes
    } else {
      console.error("Failed to fetch file size:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getFileSize;
