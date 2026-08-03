import api from "./api";

export const getArticles = async () => {
  const response = await api.get("/articles");
  return response.data;
};

export const getArticle = async (slug: string) => {
  const response = await api.get(`/articles/${slug}`);
  return response.data;
};

export const searchArticles = async (query: string) => {
  const response = await api.get(`/articles/search?q=${query}`);
  return response.data;
};

export const getRelatedArticles = async (slug: string) => {
  const response = await api.get(`/articles/${slug}/related`);
  return response.data;
};

export const createArticle = async (
  article: unknown,
  token: string
) => {
  const response = await api.post(
    "/articles",
    article,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateArticle = async (
  id: string,
  article: unknown,
  token: string
) => {
  const response = await api.put(
    `/articles/${id}`,
    article,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteArticle = async (
  id: string,
  token: string
) => {
  const response = await api.delete(
    `/articles/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const toggleFeatured = async (
  id: string,
  token: string
) => {
  const response = await api.patch(
    `/articles/${id}/featured`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const togglePublished = async (
  id: string,
  token: string
) => {
  const response = await api.patch(
    `/articles/${id}/published`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};