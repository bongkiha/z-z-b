// 主题切换功能
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }

  // 保存主题偏好
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
});

// 加载保存的主题
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeIcon.className = "fas fa-sun";
}

// 技能条动画
function animateSkillBars() {
  const skillLevels = document.querySelectorAll(".skill-level");

  skillLevels.forEach((skill) => {
    const level = skill.getAttribute("data-level");
    skill.style.width = "0%";

    setTimeout(() => {
      skill.style.width = level + "%";
    }, 300);
  });
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
  // 初始化技能条动画
  setTimeout(animateSkillBars, 500);

  // 为兴趣项添加点击效果
  const interestItems = document.querySelectorAll(".interest-item");
  interestItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // 模拟加载动画
  const profileImg = document.querySelector(".profile-img i");
  profileImg.style.opacity = "0";
  profileImg.style.transform = "scale(0.5)";

  setTimeout(() => {
    profileImg.style.transition = "opacity 0.5s, transform 0.5s";
    profileImg.style.opacity = "1";
    profileImg.style.transform = "scale(1)";
  }, 300);

  // 添加平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // 隐藏滚动指示器
  const scrollIndicator = document.querySelector(".scroll-indicator");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = "0";
      scrollIndicator.style.transition = "opacity 0.3s";
    } else {
      scrollIndicator.style.opacity = "1";
    }
  });
});

// 添加键盘导航支持
document.addEventListener("keydown", function (e) {
  // 使用方向键或PageUp/PageDown滚动
  if (
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "PageDown" ||
    e.key === "PageUp"
  ) {
    e.preventDefault();

    const scrollAmount = 100;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    } else {
      window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
    }
  }

  // 按Home键返回顶部
  if (e.key === "Home") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 按End键滚动到底部
  if (e.key === "End") {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});
