export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 1,
    name: '最爱大白菜呀',
    role: {
      isAdmin: true,
      isEditor: false,
    },
  });
}
