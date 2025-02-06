// start section 2
const swiper = new Swiper('.custom-slider', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// end section 2
// start section 3

let dateupto = new Date("December 31, 2024 00:00:00").getTime();

if (dateupto < new Date()) {
    $("#countdown").hide();
    $("#countdownbtn").hide();
    $("#normalbtn").show();
} else {
    $("#countdown").show();
    $("#normalbtn").hide();
}

let $days = document.getElementById('days');
let $hours = document.getElementById('hours');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');

setInterval(function() {
    var now = new Date().getTime();
    
    var timeLeft = (dateupto - now) / 1000;
    updateClock(timeLeft);
}, 1000);

function updateClock(remainingTime) {
    let days = Math.floor(remainingTime / 86400);
    remainingTime -= days * 86400;

    let hours = Math.floor(remainingTime / 3600) % 24;
    remainingTime -= hours * 3600;

    let minutes = Math.floor(remainingTime / 60) % 60;
    remainingTime -= minutes * 60;

    let seconds = Math.floor(remainingTime % 60);

    $days.innerHTML = padNumber(days);
    $hours.innerHTML = padNumber(hours);
    $minutes.innerHTML = padNumber(minutes);
    $seconds.innerHTML = padNumber(seconds);
}

function padNumber(number) {
    return number < 10 ? "0" + number : number;
}

const swiper225 = new Swiper('.custom-slider212', {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next212',
      prevEl: '.swiper-button-prev212',
    },
    slidesPerView: 8,
    spaceBetween: 10,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
  // end section 3
// start section 5
function changeSlide(index, carouselId) {
  const carousel = document.querySelector(`#${carouselId}`);
  const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  carouselInstance.to(index);
}
// end section 5

// start section 6
const swiperr = new Swiper('.custom-slider1', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

 const swiper12 = new Swiper('.custom-slider12', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next12',
    prevEl: '.swiper-button-prev12',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
 const swiper13 = new Swiper('.custom-slider13', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next13',
    prevEl: '.swiper-button-prev13',
  },
  slidesPerView: 8,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// end section 6

// start section 8
const swiperer = new Swiper('.rrr', {
  loop: true, // Enable looping
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.ttt',
    prevEl: '.vvv',
  },
  slidesPerView: 3,
  spaceBetween: 15,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
// end section 8
function registerUser() {
  let firstname = document.getElementById('firstname').value;
  let lasttname = document.getElementById('lasttname').value;
  let email = document.getElementById('email').value;
  let telephone = document.getElementById('telephone').value;
  let password = document.getElementById('password').value;

  // التحقق من عدم وجود حقول فارغة
  if (!firstname || !lasttname || !email || !telephone || !password) {
      alert("Please fill all fields");
      return;
  }

  let users_arr = JSON.parse(localStorage.getItem("users")) || [];

  if (users_arr.some((v) => { return v.email == email; })) {
      alert("This email is already registered!");
  } else {
      const newUser = {
          "firstname": firstname,
          "lasttname": lasttname,
          "email": email,
          "telephone": telephone,
          "password": password,
          "profileImage": "default-avatar.png"
      };
      
      users_arr.push(newUser);
      localStorage.setItem("users", JSON.stringify(users_arr));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      
      // تأكيد التسجيل والتوجيه
      alert("Registration successful!");
      window.location.href = "../account.html";
  }
}

  // start login
// Login popup handlers
document.getElementById('loginButton').addEventListener('click', function() {
  document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
});

document.querySelector(".popup").addEventListener("click", function(e) {
  if (e.target == this) {
      document.querySelector(".popup").style.display = "none";
  }
});

function loginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users_arr = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = users_arr.find(user => 
      user.email === email && user.password === password
  );

  if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      window.location.href = "../account.html";
  } else {
      alert("Invalid email or password");
  }
}

      // end login
