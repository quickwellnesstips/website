/* Render the shop grid from /shop/shop.json. */
(function () {
  var grid = document.getElementById('shop-grid');
  if (!grid) return;
  fetch('shop/shop.json', {cache: 'no-store'})
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(render)
    .catch(function () { render([]); });

  function render(items) {
    if (!items || !items.length) {
      grid.outerHTML =
        '<div class="blog-empty">' +
          'No items yet. Add JSON entries to <code>~/Desktop/QWT/Site/shop/shop.json</code> ' +
          'and run <code>python3 sync.py</code> to refresh this section.' +
        '</div>';
      return;
    }
    grid.innerHTML = items.map(function (it) {
      var thumb = it.image
        ? '<div class="shop-thumb"><img src="' + escape(it.image) + '" alt="' + escape(it.name) + '"></div>'
        : '<div class="shop-thumb empty">No Image</div>';
      return [
        '<a class="shop-card" href="' + escape(it.url || '#') + '" target="_blank" rel="nofollow noopener sponsored">',
          thumb,
          '<div class="shop-body">',
            '<div class="shop-tag">' + escape(it.tag || 'Pick') + '</div>',
            '<h3 class="shop-name">' + escape(it.name || 'Untitled') + '</h3>',
            '<p class="shop-blurb">' + escape(it.blurb || '') + '</p>',
            '<div class="shop-link">View on Amazon &rarr;</div>',
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
