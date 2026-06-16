// 陶隅 TAOYU — 互動
(function () {
  // 行動版選單
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // 商品圖切換
  var main = document.getElementById('pd-main');
  if (main) {
    document.querySelectorAll('.thumbs img').forEach(function (t) {
      t.addEventListener('click', function () {
        main.src = t.getAttribute('data-full') || t.src;
      });
    });
  }

  // 加入購物車（示意）
  document.querySelectorAll('[data-cart]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var name = b.getAttribute('data-cart');
      var note = document.getElementById('cart-note');
      if (note) {
        note.textContent = '已將「' + name + '」加入購物車（示範站，未串接金流）。';
        note.style.color = 'var(--clay)';
      } else {
        alert('已加入購物車：' + name + '（示範站）');
      }
    });
  });

  // 聯絡表單（示意，不送出）
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = document.getElementById('form-msg');
      if (ok) { ok.textContent = '感謝您的來信，我們將於兩個工作天內回覆（示範站，表單未實際送出）。'; }
      form.reset();
    });
  }

  // 頁尾年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
