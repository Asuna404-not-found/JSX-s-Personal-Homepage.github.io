const STORAGE_KEY = "homepage-language";
const DEFAULT_LANGUAGE = "zh";
const SITE_URL = "https://zx2002430.github.io/Personal-Homepage/";

const uiText = {
  zh: {
    meta: {
      title: "景晟熙 | 个人研究主页",
      description: "景晟熙的个人研究主页，聚焦具身智能、强化学习与机械臂操作。"
    },
    trail: {
      homeLabel: "首页",
      homeCurrent: "个人研究主页"
    },
    nav: {
      skip: "跳转到主要内容",
      about: "简介",
      experience: "教育背景",
      contact: "联系方式"
    },
    hero: {
      eyebrow: "个人研究主页",
      subtitle: "长安大学机械工程与智能装备学院本科生｜研究方向：具身智能、强化学习与机械臂控制",
      text:
        '我目前在长安大学机械工程与智能装备学院，专业为机械工程（交通建设与智能装备）。依托 EILab，主要关注具身智能与强化学习机械臂控制。当前工作集中于三机械臂多模态操作、仿真到真实部署等具身智能方向内容。',
      viewResearch: "查看研究",
      getInTouch: "联系我",
      lab: "实验室",
      github: "GitHub",
      cv: "仓库",
      email: "邮箱",
      identityRole: "本科生，EILab",
      identitySchool: "长安大学机械工程与智能装备学院 · 机械工程",
      focusLabel: "研究方向",
      focusValue: "具身智能 / 强化学习 / 元学习",
      nowLabel: "当前工作",
      nowValue: "具身智能与机器人学习",
      locationLabel: "所在地",
      locationValue: "中国，陕西，西安"
    },
    about: {
      eyebrow: "关于",
      title: "简介",
      p1:
        "我的研究围绕 <strong>具身智能</strong>、<strong>强化学习</strong>、<strong>元学习</strong> 与 <strong>机械臂及人形机器人控制</strong> 展开，重点关注多模态感知、策略自适应学习与高动态敏捷机器人执行之间的衔接。",
      p2:
        "目前的工作重点包括多机械臂实时协同控制、人形机器人的全身敏捷控制（WBC）、以及工业场景中的视觉深度学习分析（如准确提取料堆高度差）和 Sim-to-Real 部署。我致力于将机械硬件基础与前沿 AI 算法深度融合，以持续积累可复现、可扩展、面向真实物理环境的智能系统研究成果。",
      interestsTitle: "研究兴趣",
      tags: {
       embodied: "具身智能",
       rl: "强化学习",
       meta: "元学习",
       robot: "机械臂与人形机器人控制",
       cv: "机器视觉与深度学习",
       sim2real: "Sim-to-Real",
      }
    },
    multiArm: {
    eyebrow: "代表项目",
    note: "基于多模态元强化学习（SAC + MAML）的三台 UR5 机械臂实时协同控制系统。模型在 20 个 Epoch 内收敛至零碰撞，响应延迟低于 0.6 秒，已被 ICME 2026 录用。",
    badge: "核心研究",
    overviewTitle: "基于多模态元强化学习的机械臂实时协同控制 (VA-FastNavi-MARL) ",
    snapshotTitle: "项目概览",
    pipelineTitle: "研究链路",
    highlightsTitle: "核心亮点",
    focusLabel: "系统聚焦",
    focusItem1: "三台 UR5 机械臂 ",
    focusItem2: "MuJoCo + SAC + MAML ",
    focusItem3: "离散相位标志调配",
    focusItem4: "零碰撞避障 ",
    galleryTitle: "论文海报",
    galleryNote: "以下展示覆盖仿真环境搭建、算法逻辑验证与多臂协同实验控制过程。",
    media: {
      realKicker: "协同策略",
      realType: "算法机制",
      realTitle: "Active Agent 动态授权与调度",
      realDesc: "通过离散相位标志 ($0, 1, 2$) 精确授权特定机械臂作为主动智能体 (Active Agent)，实现多臂高效协同无缝切换。",
      simKicker: "仿真",
      simType: "MuJoCo",
      simTitle: "MuJoCo 三机械臂高保真仿真工作空间 ",
      simDesc: "突出高保真物理引擎中的三机臂实时交互行为与基础控制效果 。",
      vizKicker: "自适应",
      vizType: "MAML 框架",
      vizTitle: "多指令任务快速自适应演示 ",
      vizDesc: "体现控制器在面对不同未知指令任务时的快速迁移与自适应执行能力 。",
      ctrlKicker: "控制",
      ctrlType: "极限压测",
      ctrlTitle: "噪声与视觉遮挡压测演示 ",
      ctrlDesc: "在极端干扰环境下展示控制系统的鲁棒性与零碰撞协同避障效果 。",
      deployKicker: "验证",
      deployType: "场景",
      deployTitle: "复杂任务下的协同执行",
      deployDesc: "展示多台机械臂协同规划时的逻辑连贯性与系统级部署过程。"
    }
  },
  humanoid: {
    eyebrow: "研究方向",
    title: "人形机器人敏捷全身控制 (ASAP) ",
    note: "基于 Isaac Gym 与 PyTorch 复现 RSS 2025 论文 ASAP 核心框架，面向 Unitree G1 人形机器人实现从低保真仿真到高保真环境的零样本迁移。",
    badge: "研究方向",
    repo: "Isaac Gym / PyTorch / Unitree G1 / AMASS ",
    overviewTitle: "基于深度强化学习的人形机器人敏捷全身控制复现 ",
    snapshotTitle: "当前快照",
    pipelineTitle: "推进路线",
    highlightsTitle: "研究判断",
    focusLabel: "当前聚焦",
    focusItem1: "ASAP 核心框架复现 ",
    focusItem2: "PPO + AMASS 数据集动作追踪 ",
    focusItem3: "Unitree G1 跳投/跳跃 ",
    focusItem4: "Sim-to-Sim/Real 零样本迁移 "
  },
    updates: {
      eyebrow: "动态",
      title: "科研动态",
      note: "近期的学术成果记录，包括 CCF-B 会议论文（ICME）录用与系统实装进展。"
    },
    futurePapersSection: {
      eyebrow: "论文发表",
      title: "已录用及在投工作",
      note: "一篇 CCF-B 类会议论文（ICME）已录用，两篇 CCF-B 会议论文在投。"
    },
    systems: {
      eyebrow: "项目",
      title: "参与项目",
      note: "涵盖机械臂协同控制、人形机器人全身控制、视觉深度学习及国家级大创项目。"
    },
    modules: {
      eyebrow: "研究模块",
      title: "核心研究模块",
      note: "以下内容分别展示当前最核心的多机械臂协同元强化学习研究链路，以及并行推进的人形机器人控制与视觉感知方向 。"
    },
    background: {
      eyebrow: "背景",
      title: "教育背景"
    },
    community: {
      eyebrow: "能力",
      title: "荣誉、竞赛与技能",
      honorsTitle: "获奖与荣誉",
      honorsText: "国家励志奖学金、国家/省级学科竞赛奖项等。",
      serviceTitle: "竞赛实践与项目负责人",
      serviceText: "多次担任国家级、省级学科竞赛团队负责人，主导机械设计、核心算法开发及软硬件系统集成工作。",
      stackTitle: "专业技能",
      stackText: "Python、C、PyTorch、MuJoCo、Isaac Gym、Solidworks、CAD、EDEM、Abaqus、TeXstudio 等。"
    },
    contact: {
      eyebrow: "联系",
      title: "联系方式",
      text: "欢迎就机械臂控制、强化学习、元学习、具身智能等方向交流合作。"
    },
    filters: {
      all: "全部",
      deployment: "协同控制",
      vla: "人形控制"
    }
  },
  en: {
    meta: {
      title: "Shengxi Jing | Academic Homepage",
      description: "Academic homepage of Shengxi Jing at Chang'an University, focusing on embodied intelligence, reinforcement learning, and robot manipulation."
    },
    trail: {
      homeLabel: "Home",
      homeCurrent: "Academic Homepage"
    },
    nav: {
      skip: "Skip to Main Content",
      about: "Profile",
      experience: "Background",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Academic Homepage",
      subtitle: "Undergraduate at School of Mechanical Engineering and Intelligent Equipment, Chang'an University | Research: Embodied AI, Reinforcement Learning, Robot Control",
      text:
        "I am currently an undergraduate student at Chang'an University, majoring in Mechanical Engineering (Transportation Construction and Intelligent Equipment). Working with EILab, I focus on embodied intelligence and reinforcement-learning-based robot control. My current work centers on multi-arm multimodal manipulation and Sim-to-Real deployment.",
      viewResearch: "View Research",
      getInTouch: "Get in Touch",
      lab: "Lab",
      github: "GitHub",
      cv: "Repository",
      email: "Email",
      identityRole: "Undergraduate, EILab",
      identitySchool: "School of Mechanical Engineering, Chang'an University",
      focusLabel: "Focus",
      focusValue: "Embodied AI / RL / Meta-Learning",
      nowLabel: "Now",
      nowValue: "Embodied AI and Robot Learning",
      locationLabel: "Based In",
      locationValue: "Xi'an, Shaanxi, China"
    },
    about: {
      eyebrow: "About",
      title: "Research Overview",
      p1:
        "My research centers on <strong>Embodied AI</strong>, <strong>Reinforcement Learning</strong>, <strong>Meta-Learning</strong>, and <strong>Deep Learning</strong>, with a focus on connecting multimodal perception, adaptive policy learning, and robotic execution. I deeply participate in embodied intelligence lab projects and national-level innovation training programs.",
      p2:
        "Publications: one CCF-B conference paper (ICME, accepted), two CCF-B papers under review. My current work emphasizes multi-arm real-time coordinated control via meta-reinforcement learning, whole-body control (WBC) for humanoid robots, and vision-based deep learning for industrial analysis (e.g., material pile height difference perception).",
      interestsTitle: "Research Interests",
      tags: {
        embodied: "Embodied Intelligence",
        rl: "Reinforcement Learning",
        meta: "Meta-Learning",
        robot: "Embodied AI & Humanoid Control",
        cv: "Computer Vision and Deep Learning",
        sim2real: "Sim-to-Real"
      }
    },
    multiArm: {
      eyebrow: "Featured Project",
      note: "Meta-reinforcement learning (SAC + MAML) for real-time coordinated control of three UR5 arms. Converges to zero-collision within 20 epochs with latency below 0.6s. Accepted at ICME 2026.",
      badge: "Core Research",
      overviewTitle: "Real-Time Coordinated Control of Three UR5 Arms via Multi-Modal Meta-Reinforcement Learning (VA-FastNavi-MARL)",
      snapshotTitle: "Project Snapshot",
      pipelineTitle: "Research Pipeline",
      highlightsTitle: "Key Highlights",
      focusLabel: "System Focus",
      focusItem1: "Three UR5 Arms",
      focusItem2: "MuJoCo + SAC + MAML",
      focusItem3: "Discrete Phase Flags",
      focusItem4: "Zero-Collision Avoidance",
      galleryTitle: "论文海报",
      galleryNote: "Simulation environment setup, algorithm logic validation, and multi-arm cooperative control experiments.",
      media: {
        realKicker: "Coordination",
        realType: "Mechanism",
        realTitle: "Active Agent Dynamic Authorization & Scheduling",
        realDesc: "Precise authorization of specific arms as active agents via discrete phase flags ($0, 1, 2$), achieving efficient seamless multi-arm coordination.",
        simKicker: "Simulation",
        simType: "MuJoCo",
        simTitle: "MuJoCo Three-Arm High-Fidelity Simulation Workspace",
        simDesc: "Showcasing real-time interaction and control of three robot arms in high-fidelity physics simulation.",
        vizKicker: "Adaptation",
        vizType: "MAML Framework",
        vizTitle: "Fast Adaptation Across Multi-Instruction Tasks",
        vizDesc: "Demonstrating rapid migration and adaptive execution of the controller across different unknown instruction tasks.",
        ctrlKicker: "Control",
        ctrlType: "Stress Test",
        ctrlTitle: "Noise and Visual Occlusion Stress Test",
        ctrlDesc: "Demonstrating system robustness and zero-collision cooperative obstacle avoidance under extreme interference.",
        deployKicker: "Validation",
        deployType: "Scenario",
        deployTitle: "Cooperative Execution in Complex Tasks",
        deployDesc: "Showcasing logical coherence and system-level deployment of multi-arm coordinated planning."
      }
    },
    humanoid: {
      eyebrow: "Research Direction",
      title: "Humanoid Agile Whole-Body Control (ASAP)",
      note: "Reproducing the ASAP core framework (RSS 2025) using Isaac Gym and PyTorch, achieving Sim-to-Real zero-shot transfer for Unitree G1 humanoid robot.",
      badge: "Research Direction",
      repo: "Isaac Gym / PyTorch / Unitree G1 / AMASS",
      overviewTitle: "Reproducing Agile Humanoid Locomotion via Deep Reinforcement Learning",
      snapshotTitle: "Current Snapshot",
      pipelineTitle: "Progress Path",
      highlightsTitle: "Research Judgments",
      focusLabel: "Current Focus",
      focusItem1: "ASAP Core Framework Reproduction",
      focusItem2: "PPO + AMASS Motion Tracking",
      focusItem3: "Unitree G1 Jumping/Throwing",
      focusItem4: "Sim-to-Sim/Real Zero-Shot Transfer"
    },
    updates: {
      eyebrow: "Updates",
      title: "Research Updates",
      note: "Recent academic achievements including CCF-B conference paper (ICME) acceptance and system deployment progress."
    },
    futurePapersSection: {
      eyebrow: "Publications",
      title: "Accepted & Submitted Work",
      note: "One CCF-B conference paper (ICME) accepted, two CCF-B papers under review."
    },
    systems: {
      eyebrow: "Projects",
      title: "Research Projects",
      note: "Covering multi-arm coordinated control, humanoid whole-body control, visual deep learning, and national innovation training projects."
    },
    modules: {
      eyebrow: "Modules",
      title: "Core Research Modules",
      note: "The following sections present the current core multi-arm collaborative meta-reinforcement learning research track alongside parallel humanoid control and visual perception directions."
    },
    background: {
      eyebrow: "Background",
      title: "Background"
    },
    community: {
      eyebrow: "Achievements",
      title: "Honors, Awards & Skills",
      honorsTitle: "Awards & Honors",
      honorsText: "National Endeavor Scholarship, national/provincial competition awards, and academic recognition.",
      serviceTitle: "Competition Leadership",
      serviceText: "Served as team lead for national and provincial academic competitions, leading mechanical design, core algorithm development, and software-hardware system integration.",
      stackTitle: "Professional Skills",
      stackText: "Python, C, PyTorch, MuJoCo, Isaac Gym, Solidworks, CAD, EDEM, Abaqus, TeXstudio."
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      text: "Open to collaboration on robot arm control, reinforcement learning, meta-learning, and embodied intelligence."
    },
    filters: {
      all: "All",
      deployment: "Multi-Arm",
      vla: "Humanoid"
    }
  }
};

const localeData = {
  zh: {
    newsItems: [
      {
        date: "2026.05",
        title: "摊铺机料斗抗离析装置 — 国家级大创项目结题",
        description: "基于结构光相机 3D 点云与 YOLO 的沥青混合料状态实时监测 Pipeline 开发完成。"
      },
      {
        date: "2026.03",
        title: "CCF-B 会议论文 ICME 录用",
        description: "基于多模态元强化学习的机械臂实时协同控制研究（VA-FastNavi-MARL）被 ICME 2026 录用。"
      },
      {
        date: "2026.03",
        title: "两篇 CCF-B 会议论文在投",
        description: "两篇围绕多机械臂协同控制与双机械臂避障论文正在投稿流程中。"
      },
      {
        date: "2025.08",
        title: "ASAP 人形机器人敏捷控制复现完成",
        description: "在 Isaac Gym 上完成 ASAP 核心框架复现，成功在 Unitree G1 实机上部署跳投、跳跃等动作。"
      }
    ],
    featuredProject: {
      summary:
        "基于多模态元强化学习的机械臂实时协同控制研究（VA-FastNavi-MARL）是我最具代表性的项目。在 VS Code 环境下基于 Python 开发，利用 MuJoCo 物理引擎搭建了包含三台 UR5 机械臂的高保真协同控制仿真工作空间。开发基于 SAC 与 MAML 框架的元强化学习控制器，实现三台机械臂对不同指令任务的快速自适应。在噪声与视觉遮挡压测下验证系统性能，模型在 20 个 Epoch 内收敛至零碰撞，响应延迟低于 0.6 秒。以共一作者身份发表学术论文并成功被 ICME 录用。",
      links: [],
      metrics: [
        { label: "机器人平台", value: "三台 UR5 机械臂" },
        { label: "算法框架", value: "SAC + MAML" },
        { label: "仿真环境", value: "MuJoCo" },
        { label: "成果", value: "ICME 2026 录用" }
      ],
      pipeline: [
        {
          stage: "仿真搭建",
          detail: "在 VS Code 环境下基于 Python，利用 MuJoCo 物理引擎搭建三台 UR5 机械臂的高保真协同控制仿真工作空间。"
        },
        {
          stage: "算法开发",
          detail: "开发基于 SAC 与 MAML 框架的元强化学习控制器，实现三台机械臂对不同指令任务的快速自适应。"
        },
        {
          stage: "验证压测",
          detail: "在噪声与视觉遮挡压测下验证系统性能，20 个 Epoch 内收敛至零碰撞，响应延迟低于 0.6 秒。"
        },
        {
          stage: "论文发表",
          detail: "以共一作者身份发表学术论文并成功被国际学术会议 ICME 录用（CCF-B 类）。"
        }
      ],
      highlights: [
        "基于 SAC + MAML 的元强化学习框架，实现多机械臂实时协同控制。",
        "离散相位标志（0, 1, 2）精确授权 Active Agent，实现高效无缝切换。",
        "噪声与视觉遮挡极端环境压测下仍保持零碰撞。",
        "CCF-B 类会议论文（ICME）已录用。"
      ]
    },
    vlaDirection: {
      summary:
        "基于 Isaac Gym 与 PyTorch 复现 RSS 2025 论文 ASAP 核心框架，实现从低保真仿真到高保真环境（Sim-to-Sim/Real）的零样本迁移。面向高维度人形机器人的全身控制（WBC）任务，运用 PPO 强化学习算法结合 AMASS 数据集完成动作追踪训练。依托 HumanoidVerse 仿真平台，成功在 Unitree G1 人形机器人模型上部署并复现跳投、跳跃等高动态敏捷运动。",
      links: [],
      metrics: [
        { label: "方法框架", value: "ASAP + PPO" },
        { label: "仿真平台", value: "Isaac Gym + HumanoidVerse" },
        { label: "机器人", value: "Unitree G1" },
        { label: "数据集", value: "AMASS" }
      ],
      pipeline: [
        {
          stage: "框架复现",
          detail: "在湖北大学具身智能实验室基于 Isaac Gym 与 PyTorch 复现 ASAP (RSS 2025) 核心框架。"
        },
        {
          stage: "训练实验",
          detail: "运用 PPO 算法结合 AMASS 数据集完成动作追踪训练，面向高维度 WBC 任务。"
        },
        {
          stage: "部署验证",
          detail: "在 HumanoidVerse 上成功部署 Unitree G1，复现跳投、跳跃等高动态敏捷运动。"
        }
      ],
      highlights: [
        "复现 RSS 2025 顶会论文 ASAP 核心框架。",
        "PPO + AMASS 数据集实现 Unitree G1 动作追踪。",
        "成功复现跳投、跳跃等高动态运动。",
        "Sim-to-Sim/Real 零样本迁移验证。"
      ]
    },
    overviewPublications: [
      {
        title: "基于多模态元强化学习的机械臂实时协同控制研究 (VA-FastNavi-MARL)",
        authors: "景晟熙（共一作者）",
        venue: "ICME 2026（CCF-B 类会议，已录用）",
        type: "Deployment",
        highlight: "SAC + MAML + MuJoCo + 三臂协同",
        summary: "利用 MuJoCo 搭建三台 UR5 高保真仿真环境，基于 SAC 与 MAML 框架的元强化学习控制器实现多机械臂协同控制与快速自适应。在噪声与视觉遮挡压测下 20 Epoch 收敛至零碰撞，延迟低于 0.6 秒。",
        links: [
          { label: "项目主页", url: "#featured-project" }
        ]
      },
      {
        title: "人形机器人敏捷全身控制算法复现 (ASAP)",
        authors: "景晟熙",
        venue: "RSS 2025 论文复现｜Isaac Gym + PyTorch",
        type: "VLA",
        highlight: "PPO + AMASS + Unitree G1 + Sim-to-Real",
        summary: "基于 Isaac Gym 与 PyTorch 复现 ASAP 核心框架，运用 PPO 强化学习配合 AMASS 数据集实现 Unitree G1 人形机器人的动作追踪与全身控制，验证 Sim-to-Real 零样本迁移。",
        links: [
          { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub", url: "https://github.com/Asuna404-not-found" }
        ]
      },
      {
        title: "基于视觉深度学习的网络开发 — 医学图像分割",
        authors: "景晟熙",
        venue: "Kaggle Vessel Segmentation Top 17%",
        type: "VLA",
        highlight: "VGGNet + U-Net + YOLO + Dice Loss",
        summary: "依托 PyTorch 构建端到端医学图像分析 Pipeline，对比 VGGNet、U-Net、YOLO 等多尺度模型。将 VGGNet 作为 Backbone 融入分割架构，结合 Dice Loss 与交叉熵联合损失，在 Kaggle Vessel Segmentation 数据集上斩获 Top 17%。",
        links: [
          { label: "Kaggle", url: "https://www.kaggle.com/" }
        ]
      },
      {
        title: "摊铺机料斗抗离析装置研制（国家级大创项目）",
        authors: "景晟熙（主导智能识别与感知系统）",
        venue: "国家级大学生创新训练项目 | 2024-2026",
        type: "Deployment",
        highlight: "结构光相机 3D 点云 + YOLOv8 + 实时监测",
        summary: "主导开发\"智能识别与感知系统\"，深度融合结构光相机 3D 点云与 YOLOv8 目标检测算法，重构料堆特征提取网络，实现对混合料异常高度差与表面形貌的实时高精度感知。",
        links: [
          { label: "项目详情", url: "#projects" }
        ]
      }
    ],
    simToRealBreakdown: [
      {
        title: "VA-FastNavi-MARL: 三机械臂实时协同控制",
        authors: "景晟熙（共一作者）",
        venue: "ICME 2026（CCF-B） | MuJoCo + SAC + MAML",
        type: "Deployment",
        highlight: "MuJoCo + SAC + MAML + 三臂协同",
        summary: "基于多模态元强化学习（SAC + MAML）的三台 UR5 机械臂实时协同控制系统。在 VS Code 环境下基于 Python 开发，利用 MuJoCo 搭建高保真仿真环境。模型在 20 个 Epoch 内收敛至零碰撞，响应延迟低于 0.6 秒。",
        links: [
          { label: "项目详情", url: "#featured-project" }
        ]
      },
      {
        title: "摊铺机料斗抗离析装置研制（国家级大创项目）",
        authors: "景晟熙（主导智能识别与感知系统）",
        venue: "国家级大学生创新训练项目 | 2024-2026",
        type: "Deployment",
        highlight: "结构光相机 3D 点云 + YOLOv8 + 实时监测",
        summary: "主导开发\"智能识别与感知系统\"，构建基于机器视觉的沥青混合料状态实时监测 Pipeline。深度融合结构光相机 3D 点云数据与 YOLOv8 目标检测算法，重构料堆特征提取网络。",
        links: [
          { label: "项目详情", url: "#projects" }
        ]
      }
    ],
    vlaPublication: {
      title: "基于 Isaac Gym 的人形机器人敏捷全身控制算法复现 (ASAP)",
      authors: "景晟熙",
      venue: "RSS 2025 论文复现 | Isaac Gym + PyTorch",
      type: "VLA",
      highlight: "PPO + AMASS + Unitree G1 + Sim-to-Real",
      summary: "在湖北大学具身智能实验室基于 Isaac Gym 与 PyTorch 复现 RSS 2025 论文 ASAP 核心框架。运用 PPO 强化学习算法结合 AMASS 数据集完成动作追踪训练，在 Unitree G1 人形机器人模型上部署并复现跳投、跳跃等高动态敏捷运动。",
      links: [
        { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub", url: "https://github.com/Asuna404-not-found" }
      ]
    },
    vlaPublication: {
      title: "面向具身操作的 Vision-Language-Action",
      authors: "景晟熙",
      venue: "进行中的研究方向",
      type: "VLA",
      highlight: "多模态对齐 + 动作生成",
      summary: "探索将视觉观测与语言指令映射到机器人动作的 VLA 风格策略，用于具身操作与任务执行。",
      links: [
        { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub", url: "https://github.com/Asuna404-not-found" }
      ]
    },
    futurePapers: [
      {
        title: "基于多模态元强化学习的机械臂实时协同控制（VA-FastNavi-MARL）",
        status: "已录用",
        track: "Multi-Arm Coordination",
        venue: "ICME 2026（CCF-B 类会议）",
        summary: "利用 MuJoCo 物理引擎搭建三台 UR5 机械臂的高保真仿真环境，开发基于 SAC 与 MAML 框架的元强化学习控制器，实现三台机械臂对不同指令任务的快速自适应。在噪声与视觉遮挡压测下验证系统性能。",
        links: [
          { label: "论文链接", url: "assets/docs/pdf/2604.03998v1.pdf" }
        ]
      },
    ],
    projects: [
      {
        title: "VA-FastNavi-MARL: 三机械臂实时协同控制",
        meta: "MuJoCo | SAC | MAML | ICME 录用",
        description: "基于多模态元强化学习（SAC + MAML）的三台 UR5 机械臂实时协同控制系统。在 VS Code 环境下基于 Python 开发，搭建高保真仿真环境，实现不同指令任务的快速自适应。20 Epoch 内收敛至零碰撞，延迟低于 0.6 秒。",
        links: [
          { label: "详细信息", url: "#featured-project" },
          { label: "实验室", url: "https://eilab-wanghong.eu.cc/" }
        ]
      },
      {
        title: "ASAP: 人形机器人敏捷全身控制",
        meta: "Isaac Gym | PyTorch | PPO | AMASS | Unitree G1",
        description: "复现 RSS 2025 论文 ASAP 核心框架，实现 Unitree G1 人形机器人的跳投、跳跃等高动态敏捷运动，完成从低保真到高保真环境的零样本迁移验证。",
        links: [
          { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub 主页", url: "https://github.com/Asuna404-not-found" }
        ]
      },
      {
        title: "基于视觉深度学习的医学图像分割",
        meta: "PyTorch | VGGNet | U-Net | YOLO | Dice Loss",
        description: "构建端到端医学图像分析 Pipeline，对比多尺度视觉模型。将 VGGNet 作为 Backbone 融入分割架构，结合优化后的 Dice Loss 与交叉熵联合损失函数。在 Kaggle Vessel Segmentation 数据集上斩获 Top 17%。",
        links: [
          { label: "Kaggle", url: "https://www.kaggle.com/" }
        ]
      },
      {
        title: "摊铺机料斗抗离析装置（国家级大创项目）",
        meta: "结构光相机 | 3D 点云 | YOLOv8 | 实时监测",
        description: "主导开发\"智能识别与感知系统\"，深度融合结构光相机 3D 点云数据与 YOLOv8 目标检测算法，重构料堆特征提取网络，实现对沥青混合料异常高度差与表面形貌的实时高精度感知。",
        links: [
          { label: "项目详情", url: "#projects" }
        ]
      },
    ],
    experiences: [
      {
        title: "长安大学 （211/双一流高校）",
        subtitle: "机械工程与智能装备学院 · 机械工程（交通建设与智能装备） · 工学学士 | 2023.09 – 2027.06",
        detail: "GPA: 3.65/5.0（专业排名 7/59）"
      },
      {
        title: "EILab 具身智能实验室",
        subtitle: "",
        detail: "深度参与具身智能实验室项目，研究方向包括多机械臂协同操作、元强化学习算法设计、人形机器人全身控制及 Sim-to-Real 部署。"
      }
    ],
    courseData: [
      { name: "高等数学", grade: "92" },
      { name: "复变函数与积分变换", grade: "95" },
      { name: "概率论与数理统计", grade: "93" },
      { name: "材料力学", grade: "91" },
      { name: "互换性与技术测量", grade: "91" },
      { name: "机械控制工程", grade: "92" },
      { name: "流体力学与液压传动", grade: "92" },
      { name: "机械设计", grade: "93" },
      { name: "工程装备数值仿真与应用", grade: "99" }
    ],
    awardData: [
      { title: "国家励志奖学金", year: "2025", level: "国家级" },
      { title: "中国大学生机械工程创新创意大赛智能制造赛智能装备与产线应用（国家级）, 三等奖", year: "2025", level: "国家级", role: "负责人" },
      { title: "中国大学生机械工程创新创意大赛智能制造赛区域选拔赛智能装备与产线开发（省级）, 三等奖", year: "2025", level: "省级" },
      { title: "第三届西北赛区大学生物理实验竞赛（省级）, 三等奖", year: "2025", level: "省级", role: "负责人" },
      { title: "全国大学生数学建模竞赛陕西赛区（省级）, 二等奖", year: "2025", level: "省级", role: "负责人" },
      { title: "第十六届全国大学生数学竞赛（省级）, 三等奖", year: "2024", level: "省级" },
      { title: "第十七届全国大学生数学竞赛（省级）, 三等奖", year: "2025", level: "省级" }
    ],
    skillData: [
      { category: "编程语言", items: ["Python (熟悉)", "C (熟悉)"] },
      { category: "研究领域", items: ["强化学习", "深度学习", "机械臂控制", "人形机器人"] },
      { category: "专业软件", items: ["Solidworks", "CAD", "EDEM", "Abaqus", "TeXstudio", "Process Simulate"] },
      { category: "英语水平", items: ["大学英语四级 (CET-4)"] },
      { category: "技能证书", items: ["计算机三级网络技术"] }
    ]
  },
  en: {
    newsItems: [
      {
        date: "2026.05",
        title: "National Innovation Project Completed — Asphalt Paving Anti-Segregation Device",
        description: "Completed real-time monitoring pipeline for asphalt mixture using structured-light 3D point cloud and YOLO."
      },
      {
        date: "2026.03",
        title: "CCF-B Paper Accepted at ICME 2026",
        description: "Research on multi-modal meta-reinforcement learning for real-time coordinated robot arm control (VA-FastNavi-MARL) accepted at ICME 2026 as co-first author."
      },
      {
        date: "2026.03",
        title: "Two CCF-B Conference Papers Under Review",
        description: "Two CCF-B papers on multi-arm coordinated control and dual-arm collision avoidance currently under review."
      },
      {
        date: "2025.08",
        title: "ASAP Agile Humanoid Control Reproduction Completed",
        description: "Reproduced the ASAP core framework on Isaac Gym, successfully deploying jumping and throwing motions on real Unitree G1 hardware."
      }
    ],
    featuredProject: {
      summary:
        "VA-FastNavi-MARL is my most representative project. Built in VS Code with Python on MuJoCo, it creates a high-fidelity simulation workspace for three UR5 arms with coordinated control. A meta-reinforcement learning controller based on SAC + MAML achieves fast adaptation across different instruction tasks. Under noise and visual occlusion stress tests, the model converges to zero collision within 20 epochs with latency below 0.6s. The paper was accepted at ICME 2026 (CCF-B) as co-first author.",
      links: [
      ],
      metrics: [
        { label: "Robot Setup", value: "Three UR5 Arms" },
        { label: "Algorithm", value: "SAC + MAML" },
        { label: "Simulation", value: "MuJoCo" },
        { label: "Achievement", value: "Accepted at ICME 2026" }
      ],
      pipeline: [
        {
          stage: "Simulation Setup",
          detail: "Built a high-fidelity three-UR5 arm coordinated control simulation workspace using MuJoCo physics engine, developed in VS Code with Python."
        },
        {
          stage: "Algorithm Development",
          detail: "Developed a meta-reinforcement learning controller based on SAC and MAML frameworks for fast adaptation across diverse instruction tasks."
        },
        {
          stage: "Stress Testing",
          detail: "Validated system performance under noise and visual occlusion — converges to zero collision within 20 epochs with response latency below 0.6s."
        },
        {
          stage: "Publication",
          detail: "Co-first author paper accepted at ICME 2026 (CCF-B conference)."
        }
      ],
      highlights: [
        "SAC + MAML meta-RL framework enabling real-time multi-arm coordinated control.",
        "Discrete phase flags (0, 1, 2) for precise Active Agent authorization with seamless switching.",
        "Maintains zero collision even under extreme noise and visual occlusion stress tests.",
        "CCF-B conference paper (ICME) accepted."
      ]
    },
    vlaDirection: {
      summary:
        "Reproduced the ASAP core framework (RSS 2025) using Isaac Gym and PyTorch, achieving zero-shot Sim-to-Sim/Real transfer. Applied PPO reinforcement learning with the AMASS dataset for motion tracking on high-dimensional whole-body control (WBC) tasks. Using the HumanoidVerse platform, successfully deployed and reproduced high-dynamic agile motions including jumping and throwing on the Unitree G1 humanoid robot model.",
      links: [],
      metrics: [
        { label: "Framework", value: "ASAP + PPO" },
        { label: "Simulation", value: "Isaac Gym + HumanoidVerse" },
        { label: "Robot", value: "Unitree G1" },
        { label: "Dataset", value: "AMASS" }
      ],
      pipeline: [
        {
          stage: "Reproduction",
          detail: "Reproduced ASAP (RSS 2025) core framework using Isaac Gym and PyTorch at EILab, Hubei University."
        },
        {
          stage: "Training",
          detail: "Applied PPO with AMASS dataset for motion tracking on high-dimensional WBC tasks."
        },
        {
          stage: "Deployment",
          detail: "Successfully deployed on Unitree G1 via HumanoidVerse, reproducing jumping, throwing, and other agile motions."
        }
      ],
      highlights: [
        "Reproduced RSS 2025 ASAP core framework.",
        "PPO + AMASS dataset for Unitree G1 motion tracking.",
        "Successfully reproduced jumping, throwing, and other agile motions.",
        "Sim-to-Sim/Real zero-shot transfer validated."
      ]
    },
    overviewPublications: [
      {
        title: "Real-Time Coordinated Control of Robot Arms via Multi-Modal Meta-Reinforcement Learning (VA-FastNavi-MARL)",
        authors: "Shengxi Jing (co-first author)",
        venue: "ICME 2026 (CCF-B Conference, Accepted)",
        type: "Deployment",
        highlight: "SAC + MAML + MuJoCo + Three-Arm Coordination",
        summary: "Built a high-fidelity three-UR5 arm simulation workspace with MuJoCo. Developed a meta-RL controller based on SAC + MAML for multi-arm coordinated control and fast task adaptation. Converges to zero collision within 20 epochs with latency below 0.6s under noise and occlusion stress tests.",
        links: [
          { label: "Project Page", url: "#featured-project" }
        ]
      },
      {
        title: "Reproducing Agile Whole-Body Control for Humanoid Robots (ASAP)",
        authors: "Shengxi Jing",
        venue: "RSS 2025 Reproduction | Isaac Gym + PyTorch",
        type: "VLA",
        highlight: "PPO + AMASS + Unitree G1 + Sim-to-Real",
        summary: "Reproduced the ASAP core framework using Isaac Gym and PyTorch. Applied PPO with AMASS dataset for motion tracking and whole-body control (WBC) on Unitree G1 humanoid, validated Sim-to-Real zero-shot transfer.",
        links: [
          { label: "Lab", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub", url: "https://github.com/Asuna404-not-found" }
        ]
      },
      {
        title: "Medical Image Segmentation with Deep Learning",
        authors: "Shengxi Jing",
        venue: "Kaggle Vessel Segmentation Top 17%",
        type: "VLA",
        highlight: "VGGNet + U-Net + YOLO + Dice Loss",
        summary: "Built an end-to-end medical image analysis pipeline with PyTorch, comparing VGGNet, U-Net, and YOLO. Integrated VGGNet as backbone with Dice loss + cross-entropy for fine vessel segmentation, achieving Top 17% on Kaggle.",
        links: [
          { label: "Kaggle", url: "https://www.kaggle.com/" }
        ]
      },
      {
        title: "Development of Anti-Segregation Device for Asphalt Paver (National Innovation Project)",
        authors: "Shengxi Jing (Lead, Intelligent Perception System)",
        venue: "National Innovation Training Program | 2024-2026",
        type: "Deployment",
        highlight: "Structured-light 3D Point Cloud + YOLOv8 + Real-time Monitoring",
        summary: "Led the development of the 'Intelligent Recognition and Perception System'. Integrated structured-light camera 3D point cloud data with YOLOv8 for material pile feature extraction, achieving real-time high-precision perception of abnormal height differences and surface topography.",
        links: [
          { label: "Project Details", url: "#projects" }
        ]
      }
    ],
    simToRealBreakdown: [
      {
        title: "VA-FastNavi-MARL: Three-Arm Real-Time Coordinated Control",
        authors: "Shengxi Jing (co-first author)",
        venue: "ICME 2026 (CCF-B) | MuJoCo + SAC + MAML",
        type: "Deployment",
        highlight: "MuJoCo + SAC + MAML + Three-Arm Coordination",
        summary: "Multi-modal meta-reinforcement learning (SAC + MAML) for real-time coordinated control of three UR5 arms. Built with Python in VS Code on MuJoCo. Converges to zero collision within 20 epochs with latency below 0.6s.",
        links: [
          { label: "Details", url: "#featured-project" }
        ]
      },
      {
        title: "Anti-Segregation Device for Asphalt Paver (National Innovation Project)",
        authors: "Shengxi Jing (Lead, Intelligent Perception System)",
        venue: "National Innovation Training Program | 2024-2026",
        type: "Deployment",
        highlight: "Structured-light 3D Point Cloud + YOLOv8 + Real-time Monitoring",
        summary: "Led development of 'Intelligent Recognition and Perception System'. Built a real-time monitoring pipeline for asphalt mixture status using machine vision. Integrated structured-light camera 3D point cloud with YOLOv8 for material pile feature extraction.",
        links: [
          { label: "Details", url: "#projects" }
        ]
      }
    ],
    vlaPublication: {
      title: "Humanoid Agile Whole-Body Control via Deep RL (ASAP Reproduction)",
      authors: "Shengxi Jing",
      venue: "RSS 2025 Reproduction | Isaac Gym + PyTorch",
      type: "VLA",
      highlight: "PPO + AMASS + Unitree G1 + Sim-to-Real",
      summary: "Reproduced the ASAP core framework (RSS 2025) using Isaac Gym and PyTorch at EILab, Hubei University. Applied PPO with AMASS dataset for motion tracking and whole-body control, deploying jumping and throwing motions on Unitree G1 humanoid.",
      links: [
        { label: "Lab", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub", url: "https://github.com/Asuna404-not-found" }
      ]
    },
    futurePapers: [
      {
        title: "Real-Time Coordinated Control of Robot Arms via Multi-Modal Meta-Reinforcement Learning (VA-FastNavi-MARL)",
        status: "Accepted",
        track: "Multi-Arm Coordination",
        venue: "ICME 2026 (CCF-B Conference)",
        summary: "Built a high-fidelity three-UR5 arm simulation workspace with MuJoCo. Developed a meta-RL controller based on SAC + MAML for multi-arm coordinated control and fast task adaptation. Validated under noise and visual occlusion stress tests.",
        links: [
          { label: "Paper Link", url: "assets/docs/pdf/2604.03998v1.pdf" }
        ]
      },
    ],
    projects: [
      {
        title: "VA-FastNavi-MARL: Three-Arm Coordinated Control",
        meta: "MuJoCo | SAC | MAML | ICME Accepted",
        description: "Multi-modal meta-reinforcement learning (SAC + MAML) for real-time coordinated control of three UR5 arms. Built in VS Code with Python on MuJoCo. Converges to zero collision within 20 epochs with latency below 0.6s. Accepted at ICME 2026.",
        links: [
          { label: "Details", url: "#featured-project" },
          { label: "Lab", url: "https://eilab-wanghong.eu.cc/" }
        ]
      },
      {
        title: "ASAP: Humanoid Agile Whole-Body Control",
        meta: "Isaac Gym | PyTorch | PPO | AMASS | Unitree G1",
        description: "Reproduced ASAP (RSS 2025) core framework for Unitree G1 humanoid robot. Achieved jumping, throwing, and other agile motions with zero-shot Sim-to-Real transfer validation.",
        links: [
          { label: "Lab", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub Profile", url: "https://github.com/Asuna404-not-found" }
        ]
      },
      {
        title: "Medical Image Segmentation with Deep Learning",
        meta: "PyTorch | VGGNet | U-Net | YOLO | Dice Loss",
        description: "Built end-to-end medical image analysis pipeline comparing VGGNet, U-Net, and YOLO. Integrated VGGNet as backbone with Dice loss + cross-entropy. Achieved Top 17% on Kaggle Vessel Segmentation.",
        links: [
          { label: "Kaggle", url: "https://www.kaggle.com/" }
        ]
      },
      {
        title: "Anti-Segregation Device for Asphalt Paver (National Innovation Project)",
        meta: "Structured-light Camera | 3D Point Cloud | YOLOv8 | Real-time Monitoring",
        description: "Led the 'Intelligent Recognition and Perception System' development. Integrated structured-light camera 3D point cloud with YOLOv8 for real-time high-precision perception of material pile anomalies.",
        links: [
          { label: "Project Details", url: "#projects" }
        ]
      },
    ],
    experiences: [
      {
        title: "Chang'an University (211 / Double First-Class)",
        subtitle: "School of Mechanical Engineering · Mechanical Engineering (Transportation Construction & Intelligent Equipment) · B.E. | Sep 2023 – Jun 2027",
        detail: "GPA: 3.65/5.0 (Rank 7/59)"
      },
      {
        title: "EILab — Embodied Intelligence Lab",
        subtitle: "",
        detail: "Deeply involved in embodied intelligence lab projects. Research directions include multi-arm coordinated manipulation, meta-reinforcement learning algorithm design, humanoid whole-body control, and Sim-to-Real deployment."
      }
    ],
    courseData: [
      { name: "Advanced Mathematics", grade: "92" },
      { name: "Complex Functions & Integral Transforms", grade: "95" },
      { name: "Probability & Mathematical Statistics", grade: "93" },
      { name: "Mechanics of Materials", grade: "91" },
      { name: "Interchangeability & Technical Measurement", grade: "91" },
      { name: "Mechanical Control Engineering", grade: "92" },
      { name: "Fluid Mechanics & Hydraulic Transmission", grade: "92" },
      { name: "Mechanical Design", grade: "93" },
      { name: "Numerical Simulation & Application of Engineering Equipment", grade: "99" }
    ],
    awardData: [
      { title: "National Endeavor Scholarship", year: "2025", level: "National" },
      { title: "Sun Zuwang Scholarship, School of Mechanical Engineering, CHD", year: "2024", level: "School" },
      { title: "National Third Prize, China University Mechanical Engineering Innovation Competition — Intelligent Equipment & Production Line Application", year: "2025", level: "National", role: "Team Lead" },
      { title: "Provincial Third Prize, China University Mechanical Engineering Innovation Competition — Regional Selection", year: "2025", level: "Provincial" },
      { title: "Provincial Third Prize, 3rd NW China University Physics Experiment Competition", year: "2025", level: "Provincial", role: "Team Lead" },
      { title: "Provincial Second Prize, National College Mathematical Contest in Modeling (Shaanxi)", year: "2025", level: "Provincial", role: "Team Lead" },
      { title: "Provincial Third Prize, 16th National College Mathematics Competition", year: "2024", level: "Provincial" },
      { title: "Provincial Third Prize, 17th National College Mathematics Competition", year: "2025", level: "Provincial" }
    ],
    skillData: [
      { category: "Programming Languages", items: ["Python (Proficient)", "C (Proficient)"] },
      { category: "Research Areas", items: ["Reinforcement Learning", "Deep Learning", "Embodied AI", "Humanoid Robots"] },
      { category: "Professional Software", items: ["Solidworks", "CAD", "EDEM", "Abaqus", "TeXstudio", "Process Simulate"] },
      { category: "Language", items: ["CET-4 (College English Test Band 4)"] },
      { category: "Certifications", items: ["National Computer Level 3 — Network Technology"] }
    ]
  }
};

const filterDefinitions = [
  { key: "All", labelKey: "filters.all" },
  { key: "Deployment", labelKey: "filters.deployment" },
  { key: "VLA", labelKey: "filters.vla" }
];

let currentLanguage = getStoredLanguage();
let currentFilter = "All";

function getStoredLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && localeData[stored] ? stored : DEFAULT_LANGUAGE;
}

function getByPath(object, path) {
  return path.split(".").reduce((result, segment) => result?.[segment], object);
}

function renderLink(link) {
  const isInternal = link.url.startsWith("#");
  const target = isInternal ? "_self" : "_blank";
  const rel = isInternal ? "" : ' rel="noopener noreferrer"';
  return `<a href="${link.url}" target="${target}"${rel}>${link.label}</a>`;
}

function renderActionLink(link, variant = "secondary") {
  const isInternal = link.url.startsWith("#") || !/^https?:\/\//.test(link.url);
  const target = isInternal ? "_self" : "_blank";
  const rel = isInternal ? "" : ' rel="noopener noreferrer"';
  return `<a class="action-link action-link-${variant}" href="${link.url}" target="${target}"${rel}>${link.label}</a>`;
}

function getPublicationState(language, item) {
  const map = {
    zh: {
      Deployment: "系统主线",
      VLA: "进行中"
    },
    en: {
      Deployment: "System Track",
      VLA: "Ongoing"
    }
  };
  return map[language]?.[item.type] || (language === "zh" ? "研究条目" : "Research Entry");
}

function getProjectState(language, item) {
  const title = item.title.toLowerCase();
  if (title.includes("vla") || title.includes("fastnavi") || title.includes("三机械臂")) {
    return language === "zh" ? "核心项目" : "Core Project";
  }
  if (title.includes("asap") || title.includes("humanoid") || title.includes("人形")) {
    return language === "zh" ? "研究方向" : "Research Direction";
  }
  if (title.includes("medical") || title.includes("医学") || title.includes("kaggle")) {
    return language === "zh" ? "实践项目" : "Practice";
  }
  if (title.includes("anti") || title.includes("抗离析") || title.includes("paving") || title.includes("摊铺")) {
    return language === "zh" ? "大创项目" : "Innovation Project";
  }
  return language === "zh" ? "项目" : "Project";
}

function applyStaticText(language) {
  const dict = uiText[language];
  const locale = language === "zh" ? "zh_CN" : "en_US";

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dict.meta.title;
  document.getElementById("meta-description").setAttribute("content", dict.meta.description);
  document.getElementById("canonical-link")?.setAttribute("href", SITE_URL);
  document.getElementById("og-title")?.setAttribute("content", dict.meta.title);
  document.getElementById("og-description")?.setAttribute("content", dict.meta.description);
  document.getElementById("og-url")?.setAttribute("content", SITE_URL);
  document.getElementById("og-locale")?.setAttribute("content", locale);
  document.getElementById("twitter-title")?.setAttribute("content", dict.meta.title);
  document.getElementById("twitter-description")?.setAttribute("content", dict.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getByPath(dict, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getByPath(dict, element.dataset.i18nHtml);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });
}

function renderNews(language) {
  const container = document.getElementById("news-list");
  container.innerHTML = localeData[language].newsItems
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-text">${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFeaturedProject(language) {
  const data = localeData[language].featuredProject;
  document.getElementById("featured-summary").textContent = data.summary;
  document.getElementById("featured-links").innerHTML = data.links.map(renderLink).join("");
  document.getElementById("featured-metrics").innerHTML = data.metrics
    .map(
      (item) => `
        <article class="metric-card">
          <span class="metric-label">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");
  document.getElementById("featured-pipeline").innerHTML = data.pipeline
    .map(
      (item, index) => `
        <article class="pipeline-step system-home-pipeline-step">
          <div class="pipeline-marker">${index + 1}</div>
          <div>
            <h4>${item.stage}</h4>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
  document.getElementById("featured-highlights").innerHTML = data.highlights
    .map((item) => `<article class="highlight-item system-home-highlight-item"><p>${item}</p></article>`)
    .join("");
}

function renderVlaDirection(language) {
  const data = localeData[language].vlaDirection;
  document.getElementById("vla-summary").textContent = data.summary;
  document.getElementById("vla-links").innerHTML = data.links.map(renderLink).join("");
  document.getElementById("vla-metrics").innerHTML = data.metrics
    .map(
      (item) => `
        <article class="metric-card">
          <span class="metric-label">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");
  document.getElementById("vla-pipeline").innerHTML = data.pipeline
    .map(
      (item, index) => `
        <article class="pipeline-step">
          <div class="pipeline-marker">${index + 1}</div>
          <div>
            <h4>${item.stage}</h4>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
  document.getElementById("vla-highlights").innerHTML = data.highlights
    .map((item) => `<article class="highlight-item"><p>${item}</p></article>`)
    .join("");
}

function renderFilters(language) {
  const container = document.getElementById("pub-filters");
  const dict = uiText[language];
  container.innerHTML = filterDefinitions
    .map(
      (item) => `
        <button
          class="filter-chip ${item.key === currentFilter ? "is-active" : ""}"
          type="button"
          data-filter="${item.key}"
        >
          ${getByPath(dict, item.labelKey)}
        </button>
      `
    )
    .join("");

  container.onclick = (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) {
      return;
    }
    currentFilter = target.dataset.filter;
    renderFilters(currentLanguage);
    renderPublications(currentLanguage);
  };
}

function renderPublications(language) {
  const container = document.getElementById("publication-list");
  const locale = localeData[language];
  let items = [];

  if (currentFilter === "All") {
    items = locale.overviewPublications;
  } else if (currentFilter === "Deployment") {
    items = locale.simToRealBreakdown;
  } else if (currentFilter === "VLA") {
    items = [locale.vlaPublication];
  }

  container.innerHTML = items
    .map(
      (item) => {
        const primaryLink = item.links?.[0];
        const secondaryLinks = item.links?.slice(1) ?? [];
        return `
        <article class="publication-card">
          <div class="card-state-row">
            <span class="card-state-badge">${getPublicationState(language, item)}</span>
            <span class="card-state-track">${item.type}</span>
          </div>
          <div class="publication-head">
            <h3 class="publication-title">${item.title}</h3>
            <p class="publication-meta">${item.authors}</p>
          </div>
          <p class="publication-meta publication-meta-strong"><strong>${item.venue}</strong></p>
          <p class="publication-summary">${item.summary}</p>
          <p class="publication-tagline">${item.highlight}</p>
          <div class="card-action-stack">
            <div class="card-action-primary">
              ${primaryLink ? renderActionLink(primaryLink, "primary") : ""}
            </div>
            <div class="card-action-secondary">
              ${secondaryLinks.map((link) => renderActionLink(link, "secondary")).join("")}
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderFuturePapers(language) {
  const container = document.getElementById("future-paper-list");
  const venueLabel = language === "zh" ? "目标投稿" : "Target Venue";
  container.innerHTML = localeData[language].futurePapers
    .map(
      (item) => {
        const primaryLink = item.links?.[0];
        const secondaryLinks = item.links?.slice(1) ?? [];
        return `
        <article class="future-paper-card">
          <div class="future-paper-head">
            <div class="future-paper-meta-row">
              <span class="future-paper-status">${item.status}</span>
              <span class="future-paper-track">${item.track}</span>
            </div>
            <h3 class="publication-title">${item.title}</h3>
            <p class="future-paper-target"><strong>${venueLabel}:</strong> ${item.venue}</p>
          </div>
          <p class="future-paper-summary">${item.summary}</p>
          <div class="card-action-stack">
            <div class="card-action-primary">
              ${primaryLink ? renderActionLink(primaryLink, "primary") : ""}
            </div>
            <div class="card-action-secondary">
              ${secondaryLinks.map((link) => renderActionLink(link, "secondary")).join("")}
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderProjects(language) {
  const container = document.getElementById("project-list");
  container.innerHTML = localeData[language].projects
    .map(
      (item) => {
        return `
        <article class="project-card">
          <div class="card-state-row">
            <span class="card-state-badge">${getProjectState(language, item)}</span>
          </div>
          <div class="project-head">
            <h3>${item.title}</h3>
            <p class="project-meta">${item.meta}</p>
          </div>
          <p class="project-summary">${item.description}</p>
        </article>
      `;
      }
    )
    .join("");
}

function renderExperience(language) {
  const container = document.getElementById("experience-list");
  const data = localeData[language].experiences;

  container.innerHTML = data
    .map(
      (item) => `
        <article class="experience-card">
          <div class="experience-card-body">
            <h3>${item.title}</h3>
            <p class="experience-card-subtitle">${item.subtitle}</p>
            <p class="experience-card-detail">${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCourses(language) {
  const container = document.getElementById("course-grid");
  const data = localeData[language].courseData;
  if (!data || !data.length) return;

  const label = language === "zh" ? "主修课程成绩" : "Key Course Grades";

  container.innerHTML = `
    <div class="course-section">
      <h3 class="course-section-title">${label}</h3>
      <div class="course-grid-inner">
        ${data.map(c => `
          <div class="course-item">
            <span class="course-name">${c.name}</span>
            <span class="course-grade">${c.grade}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderAwards(language) {
  const container = document.getElementById("award-list");
  const data = localeData[language].awardData;
  if (!data || !data.length) return;

  container.innerHTML = data.map(a => `
    <div class="award-item">
      <div class="award-head">
        <span class="award-badge">${a.level}</span>
        <span class="award-year">${a.year}</span>
      </div>
      <div class="award-body">
        <strong>${a.title}</strong>
        ${a.role ? `<span class="award-role">${a.role}</span>` : ""}
      </div>
    </div>
  `).join("");
}

function renderCompetitions(language) {
  const container = document.getElementById("competition-list");
  const data = localeData[language].competitionData;
  if (!data || !data.length) return;

  const label = language === "zh" ? "竞赛经历" : "Competition Experience";

  container.innerHTML = `
    <div class="competition-section">
      <h4 class="competition-section-title">${label}</h4>
      ${data.map(c => `
        <div class="competition-item">
          <strong class="competition-name">${c.name}</strong>
          <div class="competition-meta">
            <span class="competition-level">${c.level}</span>
            <span class="competition-role">${c.role}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSkills(language) {
  const container = document.getElementById("skills-overview");
  const data = localeData[language].skillData;
  if (!data || !data.length) return;

  container.innerHTML = data.map(s => `
    <article class="stack-overview-item">
      <strong>${s.category}</strong>
      <span>${s.items.join(" / ")}</span>
    </article>
  `).join("");
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });
}

function initializeMotionLoaders(language = currentLanguage) {
  const labels = {
    zh: {
      idle: "加载演示",
      loading: "加载中..."
    },
    en: {
      idle: "Load Demo",
      loading: "Loading..."
    }
  };
  const text = labels[language] || labels.zh;

  document.querySelectorAll("[data-load-motion]").forEach((button) => {
    const shell = button.closest(".media-preview-shell");
    const image = shell?.querySelector("[data-motion-image]");
    if (!image) {
      return;
    }

    if (image.dataset.motionLoaded === "true") {
      button.textContent = text.loading;
      return;
    }

    button.textContent = text.idle;

    if (button.dataset.motionBound === "true") {
      return;
    }

    button.dataset.motionBound = "true";
    button.addEventListener("click", () => {
      if (image.dataset.motionLoaded === "true" || image.dataset.motionLoading === "true") {
        return;
      }

      const motionSrc = image.dataset.motionSrc;
      const fallbackSrc = image.dataset.motionFallback || image.currentSrc || image.src;
      if (!motionSrc) {
        return;
      }

      image.dataset.motionLoading = "true";
      button.disabled = true;
      button.classList.add("is-loading");
      button.textContent = text.loading;

      image.onerror = () => {
        image.dataset.motionLoading = "false";
        image.src = fallbackSrc;
        button.disabled = false;
        button.classList.remove("is-loading");
        button.textContent = text.idle;
      };

      image.onload = () => {
        image.dataset.motionLoading = "false";
        image.dataset.motionLoaded = "true";
        image.classList.remove("media-motion-preview");
        image.closest(".media-card")?.classList.add("is-motion-loaded");
      };

      image.src = motionSrc;
    });
  });
}

let homepageMotionObserver;

function initializeHomepageMotion() {
  const motionElements = document.querySelectorAll(
    [
      ".hero-copy",
      ".hero-card",
      ".section",
      ".content-card",
      ".future-paper-card",
      ".feature-card",
      ".metric-card",
      ".media-card",
      ".project-card",
      ".stack-card",
      ".timeline-item",
      ".publication-card"
    ].join(", ")
  );
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (homepageMotionObserver) {
    homepageMotionObserver.disconnect();
  }

  motionElements.forEach((element, index) => {
    element.classList.add("motion-reveal");
    element.classList.remove("is-visible");
    element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`);
  });

  if (reduceMotion) {
    motionElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  homepageMotionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          homepageMotionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  motionElements.forEach((element) => homepageMotionObserver.observe(element));
}

function renderPage(language) {
  applyStaticText(language);
  renderNews(language);
  renderFeaturedProject(language);
  renderVlaDirection(language);
  renderFuturePapers(language);
  renderProjects(language);
  renderExperience(language);
  renderCourses(language);
  renderAwards(language);
  renderSkills(language);
  initializeMotionLoaders(language);
  initializeHomepageMotion();
  updateLanguageButtons();
}

function setLanguage(language) {
  currentLanguage = localeData[language] ? language : DEFAULT_LANGUAGE;
  window.localStorage.setItem(STORAGE_KEY, currentLanguage);
  renderPage(currentLanguage);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

renderPage(currentLanguage);
