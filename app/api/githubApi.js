export default async function fetchRepos(user) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await response.json();
  return data;
}
