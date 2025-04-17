const dialogueList = [
    "这是第一句话，欢迎来到解谜世界。",
    "点击继续，你将进入故事的第一幕。",
    "未来可以从 scenes.json 加载更多内容。"
  ];
  
  let dialogueIndex = 0;
  
  document.getElementById("next-button").addEventListener("click", () => {
    dialogueIndex++;
    if (dialogueIndex < dialogueList.length) {
      document.getElementById("dialogue").textContent = dialogueList[dialogueIndex];
    } else {
      document.getElementById("dialogue").textContent = "（对话结束）";
    }
  });
  