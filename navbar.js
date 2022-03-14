window.onscroll = () => {
      const nav = document.querySelector('.nav');
      const Y = window.scrollY;
      if (Y > 120) {
            nav.classList.add('nav_fixed');
      } else if (Y < 122) {
            nav.classList.remove('nav_fixed');
      }
};

// 136