export default function sortProjects(projects) {
  let rankedProjects = rankProjects(projects);
  const sortedProjects = rankedProjects.sort((a, b) => {
    if (a.points > b.points) return -1;
    if (a.points < b.points) return 1;
    return 0;
  });
  return sortedProjects;
}

function rankProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    let points = 0;
    let prj = projects[i];

    // points system
    if (prj.homepage) points += 3;
    if (prj.topics.includes("top")) points += 5;
    points += prj.stargazers_count * 2;
    points += prj.watchers_count;

    projects[i].points = points;
  }
  return projects;
}