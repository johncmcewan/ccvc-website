    (function () {
      var button=document.querySelector('.mobile-logo-menu'),nav=document.querySelector('.nav');
      var homeSections=document.querySelectorAll('.home-only'),routePages=document.querySelectorAll('.route-page');
      function closeMenu(){if(!nav)return;nav.classList.remove('open');document.body.classList.remove('menu-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation')}
      var isMainPage=!document.body.dataset.page;
      if(isMainPage&&window.location.hash==='#renters'){window.location.replace('renter-guide/');return}
      function routeName(hash){if(hash==='#history')return'history';if(hash==='#map')return'map';if(hash==='#renters')return'renters';if(hash==='#documents')return'documents';return'home'}
      function applyRoute(hash,shouldScroll){var route=routeName(hash);document.body.classList.remove('route-home','route-history','route-map','route-renters','route-documents');document.body.classList.add('route-'+route);homeSections.forEach(function(el){el.hidden=route!=='home'});routePages.forEach(function(el){el.hidden=el.id!==route});document.title=route==='history'?'Our History — Cape Cod Village Club':route==='map'?'Community Map — Cape Cod Village Club':route==='renters'?'Renter Registration — Cape Cod Village Club':route==='documents'?'Historical Documents — Cape Cod Village Club':'Cape Cod Village Club — Hague, New York';document.querySelector('.skip-link').setAttribute('href',route==='home'?'#main':'#'+route);document.querySelectorAll('.nav a[href^="#"]').forEach(function(a){var href=a.getAttribute('href'),active=((route==='history'||route==='documents')&&href==='#history')||(route==='map'&&href==='#map')||(route==='renters'&&href==='#renters');if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});var target=document.getElementById((hash||'#top').slice(1));if(!target||target.hidden)target=document.getElementById(route==='home'?'top':route);if(shouldScroll&&target)requestAnimationFrame(function(){target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})})}
      function navigateToSection(event){var href=this.getAttribute('href');if(!href||href.charAt(0)!=='#')return;var target=document.getElementById(href.slice(1));if(!target)return;event.preventDefault();closeMenu();if(window.history&&window.history.pushState)window.history.pushState(null,'',href);else window.location.hash=href;applyRoute(href,true)}
      if(button&&nav){button.addEventListener('click',function(){var o=nav.classList.toggle('open');document.body.classList.toggle('menu-open',o);button.setAttribute('aria-expanded',String(o));button.setAttribute('aria-label',o?'Close navigation':'Open navigation')});window.addEventListener('resize',function(){if(innerWidth>820)closeMenu()})}
      if(isMainPage){
        document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',navigateToSection)});
        window.addEventListener('popstate',function(){applyRoute(window.location.hash||'#top',true)});
        applyRoute(window.location.hash||'#top',false);
      }
    }());
