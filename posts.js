/* Render the blog grid from /posts/posts.json.
   Drop a markdown file in /posts and run `python3 sync.py` to rebuild. */
(function () {
  var grid = document.getElementById('blog-grid');
  if (!grid) return;
  fetch('posts/posts.json', {cache: 'no-store'})
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(render)
    .catch(function () { render([]); });

  function render(posts) {
    if (!posts || !posts.length) {
      grid.outerHTML =
        '<div class="blog-empty">' +
          'No posts yet. Drop a markdown file in <code>~/Desktop/QWT/Site/posts/</code> ' +
          'and run <code>python3 sync.py</code> to rebuild this section.' +
        '</div>';
      return;
    }
    grid.innerHTML = posts.map(function (p) {
      var thumb = p.thumb
        ? '<div class="post-thumb"><img src="' + escape(p.thumb) + '" alt="' + escape(p.title) + '"></div>'
        : '<div class="post-thumb empty">No Image</div>';
      return [
        '<a class="post-card" href="' + escape(p.url || '#') + '">',
          thumb,
          '<div class="post-body">',
            '<div class="post-tag">' + escape(p.tag || 'Journal') + '</div>',
            '<h3 class="post-title">' + escape(p.title || 'Untitled') + '</h3>',
            '<p class="post-excerpt">' + escape(p.excerpt || '') + '</p>',
            '<div class="post-meta">' + escape(p.date || '') + '</div>',
          '</div>',
        '</a>'
      ].join('');
    }).join('');
  }

  function escape(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
})();
