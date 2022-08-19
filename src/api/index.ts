export async function fetchJSON<T>(path: string) {
  const response = await fetch(path);
  if (response.headers.get('Content-Type') == 'application/json') {
    return {
      data: await response.json() as T,
      status: response.status,
    };
  }
  return { status: response.status, data: null };
}

export async function fetchFile(path: string) {
  return await fetchJSON<FileInfo[] | FileInfo>(`/api/file/${path}`);
}

export async function fetchFileMetadata(path: string) {
  return (await fetchJSON<FileMetadata>(`/api/file-metadata/${path}`)).data;
}
