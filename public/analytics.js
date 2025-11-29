// Skip GA on localhost/127.0.0.1
(function(){
  try {
    var host = location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-0HSF80JZJE';
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-0HSF80JZJE', {
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  } catch (e) {
    // no-op
  }
})();


