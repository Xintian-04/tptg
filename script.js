const scenes = {
  scene1: {
    background: "assets/backgrounds/bg1.jpg",
    character: "assets/charaters/lh1.jpg",
    dialogue: "这是第一句话，欢迎来到解谜世界。",
    style: "style1"
  },
  scene2: {
    background: "assets/backgrounds/bg2.jpg",
    character: "assets/charaters/lh2.jpg",
    dialogue: "点击继续，你将进入故事的第一幕。",
    style: "style1"
  },
  sceneOption: {  // 重命名为 sceneOption
    background: "assets/backgrounds/option.jpg",
    character: "",
    dialogue: "你要往哪里去？",
    style: "style2"
  },
  scene3: {
    background: "assets/backgrounds/bg3.jpg",
    character: "",
    dialogue: "",
    style: "style3"
  }
};

let currentScene = "scene1";

const background = document.querySelector(".background");
const character = document.querySelector(".character");
const dialogue = document.getElementById("dialogue");
const dialogueBox = document.querySelector(".dialogue-box-img");
const container = document.querySelector(".game-container");
const nextBtn = document.getElementById("next-button");
const optionBtns = document.getElementById("option-buttons");

function loadScene(id) {
  const scene = scenes[id];
  if (!scene) return;

  currentScene = id;

  // 切换 layout class
  container.className = `game-container ${scene.style}`;

  // 更新资源
  background.src = scene.background;
  character.src = scene.character || "";
  dialogue.textContent = scene.dialogue;

  // 控制立绘显示
  character.style.display = scene.character ? "block" : "none";

  // style2 特有的按钮显示
  if (scene.style === "style2") {
    optionBtns.style.display = "flex";
  } else {
    optionBtns.style.display = "none";
  }
}

// 点击“继续”按钮
nextBtn.addEventListener("click", () => {
  if (currentScene === "scene1") {
    loadScene("scene2");
  } else if (currentScene === "scene2") {
    loadScene("sceneOption");  // 修改为 sceneOption
  }
});

// 点击 style2 中的任意选项按钮
document.querySelectorAll(".option-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    loadScene(target);
  });
});

// 初始化场景
loadScene(currentScene);
