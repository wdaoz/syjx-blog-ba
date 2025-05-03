var posts=["posts/52166/","posts/20572/","posts/16107/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };