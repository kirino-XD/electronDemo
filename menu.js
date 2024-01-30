const { BrowserWindow, Menu, shell } = require('electron')

// 菜单模块
const template = [
  {
    label: "文件",
    submenu: [
      {
        label: "新建窗口",
        click: () => {
          const newMainWindow = new BrowserWindow({
            width: 300,
            height: 300,
          });
          newMainWindow.loadFile("./new.html");
        },
      },
    ]
  },
  {
    label: "编辑",
    submenu: [
      {
        label: "新建窗口",
      },
    ],
  },
  {
    label: "青山无尽",
    click() {
      // 点击打开浏览器
      shell.openExternal("http://www.qingshanwujin.cn/#/tool");
    },
  },
];
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);