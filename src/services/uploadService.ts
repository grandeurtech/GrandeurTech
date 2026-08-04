import api from "./api";

interface UploadResponse {
  success?: boolean;
  image?: string;
  url?: string;
  imageUrl?: string;
  secure_url?: string;
}

export const uploadImage = async (
  file: File,
  token: string
): Promise<string> => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post<UploadResponse>(
    "/upload",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("UPLOAD RESPONSE:", response.data);

  const imageUrl =
    response.data.image ??
    response.data.url ??
    response.data.imageUrl ??
    response.data.secure_url;

  if (!imageUrl) {
    throw new Error("Backend did not return an image URL");
  }

  return imageUrl;
};