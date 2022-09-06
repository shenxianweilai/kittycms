export default function (initialState: API.IUser) {
  return {
    isAdmin: initialState.role?.isAdmin,
    isEditor: initialState?.role?.isEditor,
    isRoot: () => true,
  };
}
