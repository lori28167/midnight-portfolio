document.getElementById('year').textContent = new Date().getFullYear();

const projectsEl = document.getElementById('projects-list');

async function loadProjects(){
  let projects = [];
  try{
    const res = await fetch('projects.json');
    projects = await res.json();
  }catch(e){
    // fallback sample data
    projects = [
      {"title":"Simple Music APP in Python","description":"A minimal music app demonstrating Tkinter and yt-dlp.","repo_url":"https://github.com/lori28167/ticlymusic","live_url":"https://github.com/lori28167/ticlymusic","tags":["vanilla-js","ui"]}
    ];
  }

  projectsEl.innerHTML = projects.map(p => `
    <article class="project">
      <h4>${escapeHtml(p.title)}</h4>
      <p>${escapeHtml(p.description)}</p>
      <div class="links">
        ${p.live_url?`<a href="${p.live_url}" target="_blank" rel="noopener">Live</a>`:''}
        ${p.repo_url?`<a href="${p.repo_url}" target="_blank" rel="noopener">Repo</a>`:''}
      </div>
    </article>
  `).join('');
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

loadProjects();
