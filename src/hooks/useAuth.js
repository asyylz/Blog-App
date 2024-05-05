export function useAuth() {
  const isAuthenticated = localStorage.getItem('user');
  const user = JSON.parse(localStorage.getItem('user'));
  return {isAuthenticated , user}
}
