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
        '我目前在长安大学机械工程与智能装备学院，专业为机械工程（交通建设与智能装备）。依托 <a href="https://eilab-wanghong.eu.cc/" target="_blank" rel="noopener noreferrer">EILab</a>，主要关注具身智能与强化学习机械臂控制。当前工作集中于三机械臂多模态操作、仿真到真实部署等具身智能方向内容。',
      viewResearch: "查看研究",
      getInTouch: "联系我",
      lab: "实验室",
      github: "GitHub",
      cv: "仓库",
      email: "邮箱",
      identityRole: "本科生，EILab",
      identitySchool: "长安大学机械工程与智能装备学院",
      focusLabel: "研究焦点",
      focusValue: "/ 具身智能 / 强化学习",
      nowLabel: "当前工作",
      nowValue: "研究具身智能与机器人学习",
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
       robot: "机器人操作与控制",
       cv: "机器视觉与深度学习",
       sim2real: "Sim-to-Real",
      }
    },
    multiArm: {
    eyebrow: "代表项目",
    note: "当前最具代表性的研究项目，集中体现多机械臂实时协同操作、元强化学习算法设计与高保真仿真环境开发能力 。",
    badge: "核心研究",
    overviewTitle: "基于多模态元强化学习的三机械臂实时协同控制 (VA-FastNavi-MARL) ",
    snapshotTitle: "项目概览",
    pipelineTitle: "研究链路",
    highlightsTitle: "核心亮点",
    focusLabel: "系统聚焦",
    focusItem1: "Three UR5 Arms ",
    focusItem2: "MuJoCo + SAC + MAML ",
    focusItem3: "离散相位标志调配", 
    focusItem4: "零碰撞避障 ",
    galleryTitle: "项目可视化",
    galleryNote: "以下展示覆盖仿真环境搭建、算法逻辑验证与多臂协同实验控制过程，模型在20个Epoch内收敛至零碰撞，响应延迟低于0.6秒 。",
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
    title: "人形机器人敏捷运动与全身控制 (ASAP) ",
    note: "基于 HumanoidVerse 与 Isaac Gym，聚焦高维度人形机器人的全身控制 (WBC) 与从低保真到高保真环境的 Sim-to-Real 零样本迁移 。",
    badge: "研究方向",
    repo: "Isaac Gym / PyTorch / Unitree G1 ",
    overviewTitle: "当前主线：基于深度强化学习的人形机器人敏捷运动 ",
    snapshotTitle: "当前快照",
    pipelineTitle: "推进路线",
    highlightsTitle: "研究判断",
    focusLabel: "当前聚焦",
    focusItem1: "ASAP 核心框架复现 ",
    focusItem2: "PPO + AMASS 数据集 ",
    focusItem3: "Unitree G1 运动追踪 ",
    focusItem4: "Sim-to-Sim/Real 部署 "
  },
    updates: {
      eyebrow: "动态",
      title: "科研动态",
      note: "保留近期的学术成果记录，如会议论文（ICME等）的录用与系统实装进展，展示持续推进的研究脉络 。"
    },
    research: {
      eyebrow: "方向概览",
      title: "研究方向概览",
      note: "在详细模块展开之前，先概览当前围绕具身智能、强化学习、元学习以及机器视觉在交叉场景下的研究重点 。"
    },
    futurePapersSection: {
      eyebrow: "论文发表",
      title: "已录用及在投工作 "
    },
    systems: {
      eyebrow: "系统",
      title: "智能识别与感知系统项目 ",
      note: "依托视觉深度学习构建的实时监测 Pipeline 。核心成果为准确提取混合料异常高度差与表面形貌 (Attained Results)，为物理控制提供可靠的高精度感知支持 。"
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
      honorsTitle: "代表荣誉",
      honorsText: "国家励志奖学金 (2025)、中国大学生机械工程创新创意大赛智能制造赛国家级三等奖、全国大学生数学建模竞赛省级二等奖等 。",
      serviceTitle: "学术与竞赛实践",
      serviceText: "多次担任国家级、省级学科竞赛团队负责人，主导机械设计、核心算法开发（控制评估模型变量 $S \\in [3, 27]$）及软硬件系统集成工作 。",
      stackTitle: "技术栈",
      stackText: "Python、C、PyTorch、MuJoCo、Isaac Gym、Solidworks、CAD、EDEM、Abaqus、TeXstudio 等 。"
    },
    contact: {
      eyebrow: "联系",
      title: "联系方式"
    },
    filters: {
      all: "全部",
      deployment: "多臂协同",
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
      subtitle: "Undergraduate Student, School of Mechanical Engineering and Intelligent Equipment, Chang'an University | Research: Embodied Intelligence, Reinforcement Learning, Robot Control",
      text:
        "I am currently an undergraduate student at Chang'an University, majoring in Mechanical Engineering (Transportation Construction and Intelligent Equipment). Working with <a href=\"https://eilab-wanghong.eu.cc/\" target=\"_blank\" rel=\"noopener noreferrer\">EILab</a>, I focus on embodied intelligence and reinforcement-learning-based robot control. My current work centers on multi-arm multimodal manipulation and Sim-to-Real deployment.",
      viewResearch: "View Research",
      getInTouch: "Get in Touch",
      lab: "Lab",
      github: "GitHub",
      cv: "Repository",
      email: "Email",
      identityRole: "Undergraduate, EILab",
      identitySchool: "School of Mechanical Engineering and Intelligent Equipment, Chang'an University",
      focusLabel: "Focus",
      focusValue: "Embodied AI / Reinforcement Learning",
      nowLabel: "Now",
      nowValue: "Studying embodied intelligence and robot learning",
      locationLabel: "Based In",
      locationValue: "Xi'an, Shaanxi, China"
    },
    about: {
      eyebrow: "About",
      title: "Profile",
      p1:
        "My research centers on <strong>Embodied Intelligence</strong>, <strong>Reinforcement Learning</strong>, <strong>Meta-Learning</strong>, and <strong>Robot & Humanoid Control</strong>, with a focus on connecting multimodal perception, adaptive policy learning, and highly dynamic agile robot execution.",
      p2:
        "My current work emphasizes multi-arm real-time coordinated control, whole-body control (WBC) for humanoid robots, visual deep learning analysis in industrial scenarios (e.g. accurate extraction of material pile height differences), and Sim-to-Real deployment. I am committed to deeply integrating mechanical hardware foundations with cutting-edge AI algorithms to build reproducible, scalable intelligent systems for real-world physical environments.",
      interestsTitle: "Research Interests",
      tags: {
        embodied: "Embodied Intelligence",
        rl: "Reinforcement Learning",
        meta: "Meta-Learning",
        robot: "Robot Manipulation and Control",
        cv: "Computer Vision and Deep Learning",
        sim2real: "Sim-to-Real"
      }
    },
    multiArm: {
      eyebrow: "Featured Project",
      note: "My most representative current project, highlighting multi-arm real-time coordinated manipulation, meta-reinforcement learning algorithm design, and high-fidelity simulation environment development.",
      badge: "Core Research",
      overviewTitle: "Real-Time Coordinated Control of Three UR5 Arms Based on Multimodal Meta-Reinforcement Learning (VA-FastNavi-MARL)",
      snapshotTitle: "Project Snapshot",
      pipelineTitle: "Research Pipeline",
      highlightsTitle: "Key Highlights",
      focusLabel: "System Focus",
      focusItem1: "Three UR5 Arms",
      focusItem2: "MuJoCo + SAC + MAML",
      focusItem3: "Discrete Phase Flags",
      focusItem4: "Zero-Collision Avoidance",
      galleryTitle: "Project Visuals",
      galleryNote: "The visuals below cover simulation environment setup, algorithm logic validation, and multi-arm cooperative control. The model converges to zero collision within 20 epochs with response latency below 0.6s.",
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
      title: "Humanoid Agile Locomotion and Whole-Body Control (ASAP)",
      note: "Based on HumanoidVerse and Isaac Gym, focusing on whole-body control (WBC) for high-DoF humanoid robots and Sim-to-Real zero-shot transfer from low-fidelity to high-fidelity environments.",
      badge: "Research Direction",
      repo: "Isaac Gym / PyTorch / Unitree G1",
      overviewTitle: "Current Thesis: Humanoid Agile Locomotion via Deep Reinforcement Learning",
      snapshotTitle: "Current Snapshot",
      pipelineTitle: "Progress Path",
      highlightsTitle: "Research Judgments",
      focusLabel: "Current Focus",
      focusItem1: "ASAP Core Framework Reproduction",
      focusItem2: "PPO + AMASS Dataset",
      focusItem3: "Unitree G1 Motion Tracking",
      focusItem4: "Sim-to-Sim/Real Deployment"
    },
    updates: {
      eyebrow: "Updates",
      title: "Research Updates",
      note: "A compact record of recent academic achievements, including conference paper acceptances (ICME, etc.) and system deployment progress."
    },
    research: {
      eyebrow: "Overview",
      title: "Research Direction Overview",
      note: "A compact overview of current research themes centered on embodied intelligence, reinforcement learning, meta-learning, and computer vision in cross-domain scenarios."
    },
    futurePapersSection: {
      eyebrow: "Publications",
      title: "Accepted and Submitted Work"
    },
    systems: {
      eyebrow: "Systems",
      title: "Intelligent Perception & Recognition Systems",
      note: "Real-time monitoring pipeline built on visual deep learning. Core achievement: accurate extraction of abnormal material pile height differences and surface topography (Attained Results), providing reliable high-precision perception support for physical control."
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
      eyebrow: "Community",
      title: "Honors, Competitions & Skills",
      honorsTitle: "Selected Honors",
      honorsText: "National Endeavor Scholarship (2025), National Third Prize in China University Mechanical Engineering Innovation and Creativity Competition (Intelligent Manufacturing), Provincial Second Prize in National College Mathematical Contest in Modeling.",
      serviceTitle: "Academic and Competition Practice",
      serviceText: "Served as team lead for national and provincial academic competitions, leading mechanical design, core algorithm development (control evaluation model variable $S \\in [3, 27]$), and software-hardware system integration.",
      stackTitle: "Technical Stack",
      stackText: "Python, C, PyTorch, MuJoCo, Isaac Gym, Solidworks, CAD, EDEM, Abaqus, TeXstudio."
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact"
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
        date: "2026.04",
        title: "VLA 专题页与首页入口完成联动",
        description: "将首页 VLA 模块收敛为“当前主线 + 推进路线”的入口，并单独整理层级式 speculative VLA 专题页。"
      },
      {
        date: "2026.03",
        title: "VLA 主线收敛到层级式 speculative 框架",
        description: "当前判断聚焦高层语义推理加速，优先验证 latency、replan 次数与长时程成功率。"
      },
      {
        date: "2026.02",
        title: "AdaMoE 与 OpenVLA-OFT 工程链路跑通",
        description: "完成基础接入、mix4 训练链路和恢复逻辑整理，为后续 action-head 与 speculative 主线提供工程基座。"
      },
      {
        date: "2026.01",
        title: "双臂 Sim-to-Real 平台继续完善",
        description: "围绕 Dual_Arm_UR5 持续推进 MuJoCo、PPO、ROS 2 / MoveIt 与感知部署链路，作为后续具身研究的系统基础。"
      }
    ],
    featuredProject: {
      summary:
        "Dual_Arm_UR5 是我当前研究组合中的核心项目，围绕双臂 UR5 建立了从物理建模、任务空间控制，到 PPO 学习、ROS 2 / MoveIt 集成、感知模块接入与真实系统部署的完整实验平台。该平台也为后续面向 VLA 的机器人操作研究提供了稳定的系统基础。",
      links: [
        { label: "项目仓库", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
        { label: "Base 分支", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Base" },
        { label: "RL-Algorithm", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" },
        { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
      ],
      metrics: [
        { label: "机器人平台", value: "双臂 UR5" },
        { label: "学习方法", value: "PPO" },
        { label: "仿真环境", value: "MuJoCo" },
        { label: "部署框架", value: "ROS 2 + MoveIt" }
      ],
      pipeline: [
        {
          stage: "仿真",
          detail: "建立双臂 UR5 的 MuJoCo XML 与 ROS 2 URDF，完成动力学建模、任务空间 PID 与轨迹跟踪。"
        },
        {
          stage: "学习",
          detail: "构建自定义 Gymnasium 环境，设计状态表示、动作空间与奖励函数，并使用 Stable-Baselines3 PPO 训练。"
        },
        {
          stage: "部署",
          detail: "连接策略推理、安全状态机、MoveIt、控制器与真实双臂 UR5 平台，推进 Sim-to-Real 实验。"
        },
        {
          stage: "感知",
          detail: "集成 RGB-D 感知、YOLO 目标检测、2D 到 3D 定位与手眼标定，支撑感知驱动任务。"
        }
      ],
      highlights: [
        "围绕真实双臂 UR5 平台组织研究，而不是单一算法演示。",
        "在同一系统中打通经典控制、强化学习与真实部署。",
        "兼顾仿真验证与真实机器人执行链路。",
        "为后续语言条件操作和 VLA 扩展提供系统基础。"
      ]
    },
    vlaDirection: {
      summary:
        "当前这条方向已经从通用 VLA 介绍收敛到更具体的主线：基于 OpenVLA-OFT 与 AdaMoE，优先推进层级式 speculative VLA，目标是在高层语义推理上加速，同时保持低层闭环执行的稳定性。",
      links: [
        { label: "EILab", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub 主页", url: "https://github.com/zx2002430" },
        { label: "联系方式", url: "#contact" }
      ],
      metrics: [
        { label: "当前主线", value: "Hierarchical Speculative VLA" },
        { label: "工程基座", value: "OpenVLA-OFT + AdaMoE" },
        { label: "执行层", value: "闭环动作执行" },
        { label: "下一步", value: "Long-Horizon Eval" }
      ],
      pipeline: [
        {
          stage: "工程接入",
          detail: "完成 AdaMoE 接入、mix4 训练链路和基础恢复逻辑。"
        },
        {
          stage: "主线收敛",
          detail: "从 backbone-tail MoE 收敛到高层 speculative + 低层保守执行。"
        },
        {
          stage: "实验推进",
          detail: "优先验证 latency、replan 次数与长时程成功率。"
        }
      ],
      highlights: [
        "首页只保留主线判断，细节进入专题页展开。",
        "先验证高层加速，再讨论低层连续动作 speculative。",
        "与双臂 Sim-to-Real 系统可以自然衔接。",
        "适合作为当前论文主线，而不是泛泛的 VLA 展示。"
      ]
    },
    overviewPublications: [
      {
        title: "融合 RGB-D 感知的双臂 Sim-to-Real 控制",
        authors: "景晟熙",
        venue: "研究主线 | Sim-to-Real",
        type: "Deployment",
        highlight: "ROS 2 + MoveIt + YOLO + 手眼标定",
        summary: "围绕双臂 UR5 平台组织的一条完整 Sim-to-Real 研究主线，覆盖 Base 建模、强化学习、真实部署与感知标定。",
        links: [
          { label: "仓库", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "面向具身操作的 Vision-Language-Action",
        authors: "景晟熙",
        venue: "进行中的研究方向",
        type: "VLA",
        highlight: "多模态对齐 + 动作生成",
        summary: "探索将视觉观测与语言指令映射到机器人动作的 VLA 风格策略，用于具身操作与任务执行。",
        links: [
          { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub", url: "https://github.com/zx2002430" }
        ]
      },
    ],
    simToRealBreakdown: [
      {
        title: "Base：双臂 UR5 建模与控制基础",
        authors: "景晟熙",
        venue: "Sim-to-Real 组成部分 | Base",
        type: "Deployment",
        highlight: "MuJoCo + ROS 2 + 任务空间控制",
        summary: "负责双臂 UR5 的系统建模、MuJoCo 环境搭建、ROS 2 描述与任务空间控制，是整条链路的系统基础。",
        links: [
          { label: "仓库", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Base 分支", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Base" }
        ]
      },
      {
        title: "RL：双臂强化学习训练链路",
        authors: "景晟熙",
        venue: "Sim-to-Real 组成部分 | RL",
        type: "Deployment",
        highlight: "PPO + Gymnasium + Stable-Baselines3",
        summary: "基于自定义环境构建 PPO 训练、评估与轨迹分析流程，为双臂协同任务提供学习策略。",
        links: [
          { label: "仓库", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "RL 分支", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" }
        ]
      },
      {
        title: "Deployment：真实双臂部署链路",
        authors: "景晟熙",
        venue: "Sim-to-Real 组成部分 | Deployment",
        type: "Deployment",
        highlight: "MoveIt + 控制器 + 状态机",
        summary: "连接策略推理、MoveIt、控制器与真实双臂平台，形成从仿真到真机执行的部署闭环。",
        links: [
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "Perception：感知与标定模块",
        authors: "景晟熙",
        venue: "Sim-to-Real 组成部分 | Perception",
        type: "Deployment",
        highlight: "RGB-D + YOLO + 手眼标定",
        summary: "集成 RGB-D 感知、YOLO 检测、2D-3D 定位与手眼标定，为真实环境中的感知驱动操作做准备。",
        links: [
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      }
    ],
    vlaPublication: {
      title: "面向具身操作的 Vision-Language-Action",
      authors: "景晟熙",
      venue: "进行中的研究方向",
      type: "VLA",
      highlight: "多模态对齐 + 动作生成",
      summary: "探索将视觉观测与语言指令映射到机器人动作的 VLA 风格策略，用于具身操作与任务执行。",
      links: [
        { label: "实验室", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub", url: "https://github.com/zx2002430" }
      ]
    },
    futurePapers: [
      {
        title: "面向双臂 UR5 的感知驱动 Sim-to-Real 操作系统与真实部署验证",
        status: "方向成型",
        track: "Sim-to-Real",
        venue: "IROS / IEEE RA-L",
        summary: "拟围绕 Dual_Arm_UR5 平台整理一篇系统型论文，把 MuJoCo 建模、PPO 训练、ROS 2 / MoveIt 部署、RGB-D 感知与真机执行整合为同一条双臂 Sim-to-Real 研究链路。",
        contribution: "预计贡献包括一个可复现的双臂操作系统基座、一套感知驱动的真实部署流程，以及面向双臂任务的真机实验验证。",
        links: [
          { label: "Dual_Arm_UR5", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "层级式 Speculative Vision-Language-Action 用于具身双臂操作",
        status: "主线收敛",
        track: "VLA",
        venue: "CoRL / ICRA",
        summary: "拟围绕当前已经收敛的层级式 speculative VLA 主线，研究如何在高层语义子任务空间提升推理与重规划效率，同时保持低层连续动作执行的稳定性。",
        contribution: "预计贡献包括面向 VLA 的层级式 speculative 框架、高层 verification 与 acceptance 设计，以及 latency、replan 频率和长时程成功率的实验验证。",
        links: [
          { label: "Research", url: "#publications" }
        ]
      },
    ],
    projects: [
      {
        title: "Dual_Arm_UR5",
        meta: "双臂操作 | MuJoCo | ROS 2 | 强化学习",
        description: "主研究系统，覆盖建模、控制、学习与部署的完整双臂 UR5 操作链路。",
        links: [
          { label: "GitHub 仓库", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "README", url: "https://github.com/zx2002430/Dual_Arm_UR5" }
        ]
      },
      {
        title: "RL-Algorithm 分支",
        meta: "PPO | Gymnasium | Stable-Baselines3",
        description: "面向双臂协同任务的强化学习训练与评估分支。",
        links: [
          { label: "分支链接", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" }
        ]
      },
      {
        title: "Sim-To-Real 分支",
        meta: "真机 | MoveIt | RGB-D | YOLO",
        description: "面向真实双臂平台的感知、规划与执行部署分支。",
        links: [
          { label: "分支链接", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "VLA Policy Prototyping",
        meta: "Vision-Language-Action | 具身策略 | 机器人执行",
        description: "面向语言条件操作与未来真实部署的 VLA 风格具身策略原型方向。",
        links: [
          { label: "实验室主页", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub 主页", url: "https://github.com/zx2002430" }
        ]
      },
    ],
    experiences: [
      {
        title: "湖北大学",
        subtitle: "人工智能专业研究生，2024 - 至今",
        detail: "在 EILab 开展 VLA、具身智能、强化学习与机械臂操作相关研究。"
      },
      {
        title: "研究兴趣",
        subtitle: "VLA / 具身智能 / 强化学习 / 机器人学习",
        detail: "关注多模态感知、语言对齐、策略学习与稳健的机器人执行。"
      },
      {
        title: "当前重点",
        subtitle: "系统平台与研究组合",
        detail: "围绕双臂操作系统与 VLA 具身策略方向构建可复现的研究成果。"
      }
    ]
  },
  en: {
    newsItems: [
      {
        date: "2026.04",
        title: "Homepage and VLA research page now work as one entry flow",
        description: "The homepage VLA block now serves as a thesis-level entry, while a dedicated page expands the hierarchical speculative VLA plan."
      },
      {
        date: "2026.03",
        title: "VLA mainline converged to a hierarchical speculative frame",
        description: "The current focus is high-level semantic acceleration, with evaluation centered on latency, replanning frequency, and long-horizon success rate."
      },
      {
        date: "2026.02",
        title: "AdaMoE and OpenVLA-OFT engineering path completed",
        description: "Finished the core integration, mix4 training flow, and recovery logic as the engineering base for later action-head and speculative experiments."
      },
      {
        date: "2026.01",
        title: "Dual-arm Sim-to-Real platform kept expanding",
        description: "Continued improving the Dual_Arm_UR5 stack across MuJoCo, PPO, ROS 2 / MoveIt, and perception-driven deployment as the systems base for future embodied work."
      }
    ],
    featuredProject: {
      summary:
        "Dual_Arm_UR5 is the core project in my current research portfolio. It covers the full path from physical modeling and task-space control to PPO learning, ROS 2 / MoveIt integration, perception modules, and real-system deployment. The platform also serves as a stable systems foundation for future VLA-oriented manipulation research.",
      links: [
        { label: "GitHub Repo", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
        { label: "Base", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Base" },
        { label: "RL-Algorithm", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" },
        { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
      ],
      metrics: [
        { label: "Robot Setup", value: "Dual UR5" },
        { label: "Learning Method", value: "PPO" },
        { label: "Simulation", value: "MuJoCo" },
        { label: "Deployment Stack", value: "ROS 2 + MoveIt" }
      ],
      pipeline: [
        {
          stage: "Simulation",
          detail: "Built dual-arm UR5 models in MuJoCo XML and ROS 2 URDF, including dynamics modeling, task-space PID, and trajectory tracking."
        },
        {
          stage: "Learning",
          detail: "Designed a custom Gymnasium environment, state representation, action space, and reward function, then trained with Stable-Baselines3 PPO."
        },
        {
          stage: "Deployment",
          detail: "Connected policy inference, safety state machines, MoveIt, controllers, and the real dual-arm UR5 platform for Sim-to-Real experiments."
        },
        {
          stage: "Perception",
          detail: "Integrated RGB-D sensing, YOLO-based object detection, 2D-to-3D localization, and hand-eye calibration for perception-guided tasks."
        }
      ],
      highlights: [
        "Organized around a real dual-arm UR5 platform rather than a single algorithm demo.",
        "Bridges classical control, reinforcement learning, and real-world deployment in one system.",
        "Supports both simulation validation and real robot execution.",
        "Provides a strong foundation for future language-conditioned and VLA-style manipulation."
      ]
    },
    vlaDirection: {
      summary:
        "This track is no longer presented as a generic VLA overview. It is now framed around a more specific thesis: building a hierarchical speculative VLA pipeline on top of OpenVLA-OFT and AdaMoE, aiming to speed up high-level semantic reasoning while preserving stable low-level closed-loop execution.",
      links: [
        { label: "EILab", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub Profile", url: "https://github.com/zx2002430" },
        { label: "Contact", url: "#contact" }
      ],
      metrics: [
        { label: "Current Thesis", value: "Hierarchical Speculative VLA" },
        { label: "Engineering Base", value: "OpenVLA-OFT + AdaMoE" },
        { label: "Execution Layer", value: "Closed-loop Control" },
        { label: "Next Step", value: "Long-Horizon Eval" }
      ],
      pipeline: [
        {
          stage: "Engineering",
          detail: "Finish AdaMoE integration, mix4 training flow, and recovery logic on OpenVLA-OFT."
        },
        {
          stage: "Convergence",
          detail: "Move from backbone-tail MoE toward high-level speculative reasoning with conservative low-level execution."
        },
        {
          stage: "Evaluation",
          detail: "Prioritize latency, replanning frequency, and long-horizon success rate."
        }
      ],
      highlights: [
        "The homepage only keeps the thesis-level judgment, while the research page expands the details.",
        "High-level acceleration comes first; low-level speculative control stays as a follow-up topic.",
        "The track connects naturally with the existing dual-arm Sim-to-Real system work.",
        "This is framed as a paper-ready mainline rather than a generic VLA showcase."
      ]
    },
    overviewPublications: [
      {
        title: "Sim-to-Real Dual-Arm Control with RGB-D Perception",
        authors: "Shengxi Jing",
        venue: "Research Track | Sim-to-Real",
        type: "Deployment",
        highlight: "ROS 2 + MoveIt + YOLO + Hand-Eye",
        summary: "A complete Sim-to-Real research track organized around the dual-arm UR5 platform, covering Base modeling, reinforcement learning, real-world deployment, and perception calibration.",
        links: [
          { label: "Repo", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "Vision-Language-Action for Embodied Manipulation",
        authors: "Shengxi Jing",
        venue: "Ongoing Research Direction",
        type: "VLA",
        highlight: "Multimodal grounding + action generation",
        summary: "Exploring VLA-style embodied policies that map visual observations and language instructions to robot actions for manipulation and task execution.",
        links: [
          { label: "Lab", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub", url: "https://github.com/zx2002430" }
        ]
      },
    ],
    simToRealBreakdown: [
      {
        title: "Base: Dual-Arm UR5 Modeling and Control Foundation",
        authors: "Shengxi Jing",
        venue: "Sim-to-Real Component | Base",
        type: "Deployment",
        highlight: "MuJoCo + ROS 2 + Task-Space Control",
        summary: "Builds the system foundation with dual-arm UR5 modeling, MuJoCo environment setup, ROS 2 descriptions, and task-space control.",
        links: [
          { label: "Repo", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Base Branch", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Base" }
        ]
      },
      {
        title: "RL: Dual-Arm Reinforcement Learning Pipeline",
        authors: "Shengxi Jing",
        venue: "Sim-to-Real Component | RL",
        type: "Deployment",
        highlight: "PPO + Gymnasium + Stable-Baselines3",
        summary: "Provides PPO-based training, evaluation, and trajectory analysis for coordinated dual-arm tasks.",
        links: [
          { label: "Repo", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "RL Branch", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" }
        ]
      },
      {
        title: "Deployment: Real-Robot Execution Stack",
        authors: "Shengxi Jing",
        venue: "Sim-to-Real Component | Deployment",
        type: "Deployment",
        highlight: "MoveIt + Controllers + Safety Logic",
        summary: "Connects policy inference, MoveIt, controllers, and the real dual-arm platform for execution beyond simulation.",
        links: [
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "Perception: Sensing and Calibration Modules",
        authors: "Shengxi Jing",
        venue: "Sim-to-Real Component | Perception",
        type: "Deployment",
        highlight: "RGB-D + YOLO + Hand-Eye",
        summary: "Integrates RGB-D sensing, YOLO detection, 2D-to-3D localization, and hand-eye calibration for perception-driven manipulation.",
        links: [
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      }
    ],
    vlaPublication: {
      title: "Vision-Language-Action for Embodied Manipulation",
      authors: "Shengxi Jing",
      venue: "Ongoing Research Direction",
      type: "VLA",
      highlight: "Multimodal grounding + action generation",
      summary: "Exploring VLA-style embodied policies that map visual observations and language instructions to robot actions for manipulation and task execution.",
      links: [
        { label: "Lab", url: "https://eilab-wanghong.eu.cc/" },
        { label: "GitHub", url: "https://github.com/zx2002430" }
      ]
    },
    futurePapers: [
      {
        title: "Perception-Driven Sim-to-Real Bimanual Manipulation and Real Deployment with Dual-Arm UR5",
        status: "Concept Framed",
        track: "Sim-to-Real",
        venue: "IROS / IEEE RA-L",
        summary: "This paper is planned around the Dual_Arm_UR5 platform and aims to present a coherent Sim-to-Real story spanning MuJoCo modeling, PPO training, ROS 2 / MoveIt deployment, RGB-D perception, and real-robot execution.",
        contribution: "Expected contributions include a reproducible bimanual system stack, a perception-grounded real deployment workflow, and real-robot validation on dual-arm manipulation tasks.",
        links: [
          { label: "Dual_Arm_UR5", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "Sim-To-Real", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "Hierarchical Speculative Vision-Language-Action for Embodied Bimanual Manipulation",
        status: "Main Direction",
        track: "VLA",
        venue: "CoRL / ICRA",
        summary: "This paper would build on the current hierarchical speculative VLA thesis, studying how to accelerate high-level semantic reasoning and replanning while preserving stable low-level continuous execution.",
        contribution: "Expected contributions include a hierarchical speculative framework for VLA, verification and acceptance design at the high-level semantic layer, and evaluation on latency, replanning frequency, and long-horizon success rate.",
        links: [
          { label: "Research", url: "#publications" }
        ]
      },
    ],
    projects: [
      {
        title: "Dual_Arm_UR5",
        meta: "Dual-arm manipulation | MuJoCo | ROS 2 | Reinforcement Learning",
        description: "A main research system covering modeling, control, learning, and deployment for dual-arm UR5 manipulation.",
        links: [
          { label: "GitHub Repo", url: "https://github.com/zx2002430/Dual_Arm_UR5" },
          { label: "README", url: "https://github.com/zx2002430/Dual_Arm_UR5" }
        ]
      },
      {
        title: "RL-Algorithm Branch",
        meta: "PPO | Gymnasium | Stable-Baselines3",
        description: "A training and evaluation branch for reinforcement learning on coordinated dual-arm tasks.",
        links: [
          { label: "Branch Link", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/RL-Algorithm" }
        ]
      },
      {
        title: "Sim-To-Real Branch",
        meta: "Real Robot | MoveIt | RGB-D | YOLO",
        description: "A deployment-oriented branch for perception, planning, and execution on the real dual-arm robot platform.",
        links: [
          { label: "Branch Link", url: "https://github.com/zx2002430/Dual_Arm_UR5/tree/Sim-To-Real" }
        ]
      },
      {
        title: "VLA Policy Prototyping",
        meta: "Vision-Language-Action | Embodied Policy | Robot Execution",
        description: "A parallel research direction focused on instruction-conditioned embodied policies for manipulation and future real-world execution.",
        links: [
          { label: "Lab Homepage", url: "https://eilab-wanghong.eu.cc/" },
          { label: "GitHub Profile", url: "https://github.com/zx2002430" }
        ]
      },
    ],
    experiences: [
      {
        title: "Hubei University",
        subtitle: "Graduate Student in Artificial Intelligence, 2024 - Present",
        detail: "Working in EILab on VLA, embodied intelligence, reinforcement learning, and robot manipulation."
      },
      {
        title: "Research Interests",
        subtitle: "VLA / Embodied AI / RL / Robot Learning",
        detail: "Interested in multimodal perception, language grounding, policy learning, and robust robot execution."
      },
      {
        title: "Current Focus",
        subtitle: "Systems and Research Portfolio",
        detail: "Developing reproducible systems and research outputs around dual-arm manipulation and VLA-oriented embodied policies."
      }
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
  if (title.includes("dual_arm_ur5")) {
    return language === "zh" ? "主系统" : "Main System";
  }
  if (title.includes("branch") || title.includes("分支")) {
    return language === "zh" ? "工作分支" : "Working Branch";
  }
  if (title.includes("vla")) {
    return language === "zh" ? "研究原型" : "Research Prototype";
  }
  return language === "zh" ? "系统条目" : "System Entry";
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
  const contributionLabel = language === "zh" ? "预计贡献" : "Expected Contribution";
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
          <div class="future-paper-focus">
            <strong>${contributionLabel}</strong>
            <p>${item.contribution}</p>
          </div>
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
        const primaryLink = item.links?.[0];
        const secondaryLinks = item.links?.slice(1) ?? [];
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
  renderFilters(language);
  renderPublications(language);
  renderFuturePapers(language);
  renderProjects(language);
  renderExperience(language);
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
