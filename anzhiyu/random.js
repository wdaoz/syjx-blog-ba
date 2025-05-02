var posts=["posts/52166/","posts/16107/","posts/20572/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };