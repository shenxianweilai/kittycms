import request from 'umi-request';
export async function getUserList(params: {
  current: number | undefined;
  pageSize: number | undefined;
}) {
  return request<{ data: API.UserList }>('/api/users', { params });
}
