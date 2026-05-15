  // 右パネルに出す内容
  const forestElements = {
    pharmaforest: {
      title: "PharmaForest",
      img: "./logo/pharmaforest.png",
      hint: "Package Repository",
      desc: 
      `
      A collaborative repository of SAS packages for pharmaceutical industry, started by PHUSE Japan OST (Open Source Technology) WG members—Hiroki Yamanobe, Yutaka Morioka, and Ryo Nakaya—showcasing the list of available packages. 

      <br><br> PharmaForest is built on top of SAS Packages Framework(SPF), which was developed by Bartosz Jablonski. There are more packages in his repository SAS Packages Archive(SASPAC).<br><br>
      `,
      badges: ["SAS Packages","Repository","Open-Source","MIT/Apache-2.0"],
      links: [{text:"PharmaForest", href:"https://github.com/PharmaForest"}, {text:"SPF", href:"https://github.com/yabwon/SAS_PACKAGES"},{text:"SASPAC", href:"https://github.com/SASPAC"}]
    },
    forester: {
      title: "Foresters (Contributors)",
      img: "./logo/squirrel.png",
      hint: "Contributors",
      desc: 
      `
      Kudos to all contributors who have enriched the PharmaForest repository with their valuable contributions! Your efforts in developing, maintaining, and enhancing these packages are greatly appreciated and play a crucial role in advancing the SAS programming community within the pharmaceutical industry!<br><br>

      Bartosz Jablonski : Developer of SAS Packages Framework (SPF) and SAS Packages Archive (SASPAC).<br><br>

      PharmaForest <br><br>
      Hiroki Yamanobe   : Co-founder and administrator<br>
      Yutaka Morioka    : Co-founder and administrator<br>
      Ryo Nakaya        : Co-founder and administrator<br>
      Sharad Chhetri    : Administrator<br><br>
      
      Manivannan Mathialagan  : Project member<br>
      Sowmya Kukudapu         : Project member<br>
      Madhura                 : Project member<br>
      Ashwini Shanbhogue      : Project member<br>
      Bhargav Koduru          : Project member<br>
      Ken Nakamatsu           : Project member, SASDoGs, spf-skills<br>
      Abhishek                : Project member<br>
      Akshay                  : Project member<br>
      Venkatesh               : Project member<br>
      Uma                     : Project member<br>
      Aris Barbieri           : Project member<br><br>

      Miyuki Aso                        : devil(%sudoku_solver)<br>
      Akira Matsuzawa                   : devil(%hanabi)<br>
      Teruko Narusawa                   : RWDExpress<br>
      Shingo Suzuki and SAS Japan folks : SASToolbox<br>
      Rika Sakai                        : test of Oncoplotter<br>
      Saikrishnareddy Yengannagari      : sas_dataset_toon, defensivechk, GetCDISCCodelist, misc<br>
      Yoshiki Tokuda                    : SAShighlight<br>
      `,
      badges: ["SAS Packages","Repository","Open-Source"],
      links: [{text:"PharmaForest", href:"https://github.com/PharmaForest"}, {text:"SPF", href:"https://github.com/yabwon/SAS_PACKAGES"},{text:"SASPAC", href:"https://github.com/SASPAC"}]
    }
  };

  const navigatorElements = {
    forest_navigator: {
      title: "Dr. Forest, Morio",
      img: "./logo/forest_navigator.png",
      hint: "Master Navigator of PharmaForest",
      desc: `
      Dr. Forest is our master navigator. He is an excellent and diligent GPT assistant who can answer most questions about PharmaForest. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br> Any collaboration with PharmaForest is very welcome!<br><br>
      <img src="./logo/wewantyou.png" 
     alt="we want you" 
     style="max-width:60%; border-radius:12px; margin-bottom:16px; display:block; margin:0 auto;">
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/DrForest_background.md"}, {navigatorKey: "askDrForest"}]
    },
      apple: {
      title: "Dr. Apple",
      img: "./logo/apple.png",
      hint: "Support Navigator of PharmaForest",
      desc: `
      Dr. Apple is our support navigator. He has a strong character but cool GPT assistant who can asnwer details of #16 - #30 packages. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/Apple_background.md"}, {navigatorKey: "askDrApple"}]
    },
      Rio: {
      title: "Rio",
      img: "./logo/Rio.png",
      hint: "Support Navigator of PharmaForest",
      desc: `
      Rio is our support navigator. She/He is a mysterious GPT assistant who can asnwer details of #31 - #45 packages. However, please understand that she/he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to her/him. See more about her/his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/Rio_background.md"}, {navigatorKey: "askRio"}]
    },
      SASUKE: {
      title: "SASUKE",
      img: "./logo/SASUKE.png",
      hint: "Support Navigator of PharmaForest",
      desc: `
      SASUKE is our support navigator. He is a mysterious GPT assistant who can asnwer details of #46 - #60 packages. However, please understand that he is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to him. See more about his background.<br><br>
      `,
      badges: ["PharmaForest","Navigator","GPTs assistant"],
      links: [{text:"Background", href:"https://github.com/PharmaForest/.github/blob/main/SASUKE_background.md"}, {navigatorKey: "askSasuke"}]
    },
      lady: {
      title: "SAS Package Lady (Oba-chan)",
      img: "./logo/SASPackageLady.png",
      hint: "Diner auntie nearby PharmaForest",
      desc: `
      Oba-chan, the SAS Package Lady is a warm diner-auntie GPT persona who helps you create SAS packages. Note that she is not speaking on behalf of our organization. You need to sign up to ChatGPT (at least a free user account) to talk to her. 
      `,
      badges: ["PharmaForest","Package Cooker","GPTs assistant"],
      links: [{text:"Ask SAS Package Lady", href:"https://chatgpt.com/g/g-6996168447ec8191a238046fbba86451-sas-package-lady-oba-chan"}]
    }
  };

  const normalizeRepositoryItem = (item) => ({
    // add <br> to the beginning of each macro except the first one and those already starting with <br>
    ...item,
    macros: (item.macros || []).map((macro, index) => (
      index === 0 || macro.startsWith("<br>") ? macro : `<br>${macro}`
    ))
  });

  const items = {
    ...forestElements,
    ...Object.fromEntries(
      Object.entries(repositories).map(([key, item]) => [key, normalizeRepositoryItem(item)])
    ),
    ...navigatorElements
  };


const navigatorLinks = Object.freeze({
  askDrForest: {text:"Ask Dr.Forest", href:"https://chatgpt.com/g/g-699610471260819196be8f76e324dafa-dr-forest"},
  askDrApple: {text:"Ask Dr.Apple", href:"https://chatgpt.com/g/g-6996134ec0848191958c0dd931333f8c-dr-apple"},
  askRio: {text:"Ask Rio", href:"https://chatgpt.com/g/g-69961574d1d48191bf402340734acf25-rio"},
  askSasuke: {text:"Ask SASUKE", href:"https://chatgpt.com/g/g-69bda538e5c88191b00e804a5984a03a-sasuke"}
});

const cloneLink = (link) => ({...link});
const resolveLink = (link) => link.navigatorKey ? cloneLink(navigatorLinks[link.navigatorKey]) : cloneLink(link);

Object.values(items).forEach((item) => {
  item.links = (item.links || []).map(resolveLink);
});

const layoutMap = Object.fromEntries(
  Object.entries(repositories)
    .filter(([, item]) => item.layout)
    .map(([key, item]) => [key, {...item.layout}])
);

const navEntries = Object.entries(items)
  .filter(([, item]) => item.img)
  .map(([key, item]) => ({
    key,
    title: item.title,
    hint: item.hint || "",
    img: item.img
  }));
