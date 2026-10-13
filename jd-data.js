// AI产品经理招聘要求汇总 — 数据源:2026-10-13 真实抓取各家官方招聘渠道
// Kimi(Moka官方)、OpenAI(Ashby API)、Anthropic(Greenhouse)、字节(社招API+校招页)、
// 腾讯(careers官网)、阿里(控股集团招聘官网)、DeepSeek(talent官网+Moka)
// Manus:官网区域封锁无法直抓,采用公开二手信息,已标注

const COMPANIES = [
  {
    id: 'kimi',
    name: 'Kimi (月之暗面)',
    color: '#1a1a2e',
    accent: '#7c5cff',
    source: 'Moka官方招聘页 (app.mokahr.com/apply/moonshot/148506) · 抓取于2026-10-13',
    jobs: [
      {
        title: 'Vertical Domain Owner, Kimi Agent（垂直领域产品业务负责人）',
        loc: '北京', type: '全职·产品类', urgent: true,
        duties: [
          '定义一个高价值值得投入的领域,在 Agent 任务能力版图上找到决定 10x 成败的本质问题,完成方向判断→产品定义→业务闭环',
          '扎进领域真实需求:用户在让 Agent 做什么?在哪一步失败?泡在 query、数据和真实用户对话里,直到比从业者更懂他们的问题',
          '用数据做判断,用实证代替雄辩:搭建指标体系,从用户行为和业务数据中识别增长机会与断点',
          '和增长、研发、模型团队一起拿到结果:设计获客、激活与转化路径,对齐能力边界与技术节奏',
        ],
        reqs: [
          '是垂直领域的超级用户或产品专家(游戏/电商/科研/vibe coding/设计/金融等),比用户更懂领域需求',
          '有真实的创业或业务 Owner 经历:创始人或早期核心成员,或独立背过产品/业务线核心指标',
          '扎实的产品经理功底:多年一线 PM,需求定义、用户研究、产品节奏等基本功过硬',
          '是 Agent 产品重度用户:日常使用 Claude Code、Codex 等完成真实工作,对能力边界有基于实践的第一手判断',
          '具备与模型与工程师对话的技术素养:理解大模型技术约束,能在约束下做取舍',
        ],
        bonus: ['有工程、研究员或设计背景,能自己用 Agent 搭出原型验证想法——野心不受限于自己亲手能执行什么'],
      },
      {
        title: 'AI Taste Mentor',
        loc: '北京', type: '全职·产品类', urgent: true,
        duties: [
          '定义标准:面对 AI 产出的网页、界面、视觉、3D、动效,一句话说出它「平庸在哪」,把判断变成清晰的评价标准',
          '设计考题:把对美的理解转化为训练题目和评测数据——什么样的题能逼出模型的审美上限',
          '陪模型进化:和评测、后训练团队并肩,像教练复盘比赛一样分析、调教模型,直到作品能过你这关',
          '对最终效果负责:审美判断通过数据与训练链路,直接长进模型能力里',
        ],
        reqs: [
          'Taste 是最强武器:一眼分辨「惊艳」与「还行」的直觉,能讲清楚为什么。作品集比简历更能代表你',
          'Coding Agent 老手:Claude Code、Codex 是日常武器库,深谙如何协作、压榨能力到极限,清楚边界在哪',
          '用 AI 做出过不普通的作品:真正借助 AI 完成过单靠自己难以做到的东西——网站/视觉作品/交互demo/游戏原型',
          '有自己的审美根据地:视觉设计、前端工程、技术美术、程序化生成、交互艺术、游戏开发、3D渲染……至少一个领域能给人当老师',
          '享受「教会别人」:出好题、讲透好坏之分、看着对方(哪怕是模型)开窍让你快乐',
          '相信模型学得会:对 AI 天花板有足够想象力',
        ],
        bonus: ['跨界杂学家:写得了代码、调得了渲染、折腾过开源、玩过硬件', '在 AI 设计/艺术领域有能展示 Taste 的作品,能说清定义的标准以及如何驱动 Agent 优化'],
      },
      {
        title: 'Kimi Work 产品工程师',
        loc: '北京', type: '全职·产品类', urgent: true,
        duties: [
          '定义并构建核心交互体验:负责任务下达、中途交互、成果交付等关键环节的人与 Agent 协作体验,独立完成从设计到原型的验证',
          '以最深度的使用驱动迭代:作为最挑剔的用户应用于真实工作场景,系统性识别 Agent 失败模式与交互断点',
          '探索下一代 Agent 交互范式:Computer Use、Proactive Agent、屏幕及操作系统 context 获取的产品化表达',
          '连接产品与模型能力:把用户行为洞察转化为模型能力与系统设计的有效输入,把未来 2-3 个月的模型能力转化为产品竞争力',
        ],
        reqs: [
          '具备 AI 产品工作经历,同时保持亲手构建的习惯:能独立编写代码,完成可运行、可供真实用户使用的产品原型',
          '是 Agent 产品重度用户:日常使用 Claude Code、Codex 等,对 Agent Loop、工具调用、Context Engineering 有基于实践的第一手理解',
          '对人机交互演进有自己的判断:对「人如何与 Agent 协作」有独特清晰观点,能以原型而非文档表达和验证',
          '完整的产品工程素养:既能打磨交互细节,也能在模型延迟、失败率、推理成本等技术约束下做合理取舍',
        ],
        bonus: ['有 0→1 产品上线并获得真实用户使用的完整经历', '扎实的前端或客户端工程能力,能把原型推进至可发布质量'],
      },
      {
        title: 'AI Product Innovation Explorer',
        loc: '北京', type: '全职·产品类', urgent: true,
        duties: [
          '探索下一代 AI 产品形态:持续关注 AI 模型、Agent、多模态、Coding Agent 前沿变化,判断哪些能力真正值得产品化',
          '定义并推动核心产品体验:深入用户场景,发现真正影响使用、留存和价值感知的问题,推动概念→原型→设计→研发→上线完整闭环',
          '把 AI 能力转化成用户价值:什么交给 Agent 自动完成/什么保留给用户决策/Context 如何组织/Tool API 如何调用/如何判断功能真有用而不只是 Demo 很酷',
          '用 AI Native 方式做产品:借助 AI Coding、原型工具和数据分析快速验证想法。先验证,再做大',
        ],
        reqs: [
          'AI Native:主流 AI 产品深度用户,对 LLM、Agent、Coding Agent、多模态有持续关注和自己的判断。理解的不只是 Prompt,还包括 Context Engineering / Agent Workflow / Tool & API Calling / Model Capability & Limitation / Evaluation & Harness / Feedback Loop',
          '强 C 端产品 Sense:理解用户为什么使用一个产品,也能判断为什么理论上正确的功能用户就是不愿意用',
          '产品审美:不只关心「功能有没有」,也关心「体验是不是对」。在意按钮位置、一句话提示、动效节奏',
          '强执行与探索能力:面对模糊问题快速拆解、提出假设、推动验证;习惯在信息不完整时开始行动',
          '5 年及以上互联网产品经验,有优秀的 C 端产品经历,独立负责过重要产品或核心功能',
        ],
        bonus: ['Agent、智能工作流或多模态产品设计经验', 'Vibe Coding 实践,能快速完成 Demo', '设计/交互背景,做过千万级用户 C 端产品', '对 ChatGPT、Claude、Cursor、Perplexity、Coze 有长期深度观察'],
      },
      {
        title: 'AI Native 产品经理（C端 / Agent方向）',
        loc: '北京', type: '全职·产品类',
        duties: [
          '深度参与 AI 产品(如 Agent / Claw 类)的设计与迭代,从 0-1 或 1-10 推进核心能力',
          '理解大模型(LLM、多模态、Agent 等)能力,设计可落地的用户场景与交互',
          '将技术能力转化为 C 端用户可理解、可使用、可复用的功能(自动化、记忆、陪伴、生成等)',
          '参与 prompt 设计、Agent 流程设计、工具调用链路设计(function calling / workflow)',
          '持续跟踪 AI 前沿(OpenAI、Anthropic、开源模型等),转化为产品机会',
        ],
        reqs: [
          '2 年以上产品经验,有 C 端产品经验优先',
          '强 AI 理解能力(核心):熟悉大模型基本原理(prompt、embedding、RAG、Agent 等)',
          '对 AI 产品有系统性认知(不仅是 chatbot)',
          '能将抽象技术能力转化为用户价值(不是「能做什么」,而是「用户为什么要用」)',
          '有较强的产品结构能力 & 交互 sense',
          '有探索欲,对 AI 新产品高度敏感(ChatGPT、Claude、Perplexity 等)',
        ],
        bonus: ['写过 prompt / 做过 Agent / 用过 LangChain 等', '有 AI 产品从 0-1 经验'],
        note: '直白版:不是「写PRD的人」,而是能把模型能力变成产品体验的人。能回答:这个能力为什么要做?用户什么时候会用?为什么非AI不可?',
      },
      {
        title: '开放平台产品经理',
        loc: '北京', type: '全职·产品类',
        duties: [
          '开放平台产品规划:整体产品架构设计,承接商业化战略需求,推动 AI 能力产品化与平台化落地',
          'AI Agent 产品建设:Agents API 商业化产品从 0 到 1 的规划设计,构建 AI Agent 能力体系,支撑 B 端客户快速构建和部署智能体应用',
          'MaaS API 产品:设计模型推理、评估、监控等全生命周期 API 体系,打造面向开发者的标准化 AI 能力输出平台',
          '商业化支撑:设计定价策略、接入方案、开发者生态体系,推动从能力建设到商业变现的闭环',
          '产品交付:独立完成需求分析、业务建模、流程设计、原型设计及 PRD 输出',
          '数据驱动:建立业务数据指标体系,通过数据分析发现产品优化机会',
        ],
        reqs: [
          '本科及以上,5 年以上互联网产品经理经验,有 AI 产品、开放平台、SaaS 平台经验优先',
          '具备 AI Agent、大模型应用、MaaS/模型 API 产品相关经验,熟悉 Agent 架构、RAG、Function Calling、多 Agent 协作等技术原理与产品化路径',
          '商业化能力:从 0 到 1 产品建设能力,资源有限情况下独立搭建产品体系,有 API 商业化、开发者平台运营经验优先',
          '数据分析能力:熟练使用 SQL、Excel、BI 等分析工具',
        ],
        bonus: ['有 AI Agent 开源项目经验或技术背景,理解 LLM 应用开发全流程,了解 Anthropic/OpenAI 大模型产品生态', '有 MaaS 平台、模型 API 网关、AI 基础设施产品经验', '熟悉开放平台生态建设,有开发者社区运营或 ISV 生态建设经验'],
      },
      {
        title: 'AI C端产品经理',
        loc: '上海', type: '全职·产品类',
        duties: [
          '负责 AI App 的 C 端产品规划与迭代,围绕核心用户场景持续优化体验与转化效率',
          '支持平台级与运营类活动(拉新、促活、转化),从产品视角设计活动机制与承载链路',
          '负责关键用户链路设计与优化(新手引导、功能触达、付费转化、分享路径等)',
          '基于数据的产品分析:独立拆解漏斗、定位问题环节,结合埋点数据、用户行为与定性反馈提出可验证的产品假设',
          '跟进版本效果,对留存、转化、使用频次等关键指标负责,持续通过 A/B 测试验证方案',
        ],
        reqs: [
          '5 年左右 C 端产品经验,有成熟 App 或高频 C 端产品经验优先',
          'C 端 sense 强:对用户情绪、动机、使用场景敏感,能判断「好不好用」「想不想用」「愿不愿留下」',
          '对 AI 产品有强烈兴趣,理解 AI 能力边界,不做「为了 AI 而 AI」的功能',
          '能把复杂能力抽象成简单体验,对交互、文案、节奏有判断力',
        ],
        bonus: ['有 AI App / 大模型 / Agent 类产品经验', '自己是 AI 产品重度用户(会用、爱折腾、会吐槽)', '对增长、留存、转化有实战经验', 'Prompt 设计与调优能力:能从用户目标出发设计高质量 Prompt,理解 Prompt 对输出稳定性、可控性的影响并能产品化'],
      },
      {
        title: '大模型Eval评测（工程方向/产品方向）',
        loc: '北京', type: '全职·产品类',
        duties: [
          '模型评测:设计、搭建并持续迭代大模型多维度评测框架,让模型能力「可衡量、可对比、可解释」',
          '数据驱动:与算法团队配合,把评测结论转化为数据需求,寻找可以提升模型智能的关键数据并推动落地',
          '行业洞察:跟踪前沿论文与开源社区,第一时间把新评测维度、数据策略落地到业务中',
        ],
        reqs: [
          '必备 Python/Go/Java/C++ 任意语言使用经验,能独立写脚本、调 API、搭小工具',
          '逻辑思维强,对「用数据说话」有执念,熟悉 SQL / Pandas / Jupyter 等分析工具',
          '对大模型有基础认知(用过 GPT、Claude 等),能快速理解 SFT、RL 等概念',
          '有参与过大模型 benchmark、evaluation 等方向的工作经验',
        ],
        bonus: ['创业经验或开源项目贡献或研发背景期待转产品', '英语读写流畅'],
      },
    ],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    color: '#10a37f',
    accent: '#0d8a6a',
    source: 'Ashby API (careers.openai.com) · 抓取于2026-10-13 · 808岗中11个PM岗,以下为3个核心岗详情+8岗列表',
    jobs: [
      {
        title: 'Product Manager, API Agents',
        loc: '旧金山', type: 'Product Management',
        duties: [
          '深入理解 Agent 构建者面临的问题,识别让构建 Agent 更快、更直观、更可靠、更强大的机会',
          '定义改进 API 用户 agentic 基础设施的战略优先级和路线图,聚焦用户成果和新兴能力',
          '与研究、工程团队在技术层面合作,把优先级转化为开发者产品和功能(SDK、API 等)',
          '在保持高质量产品标准和用户体验的同时快速交付',
        ],
        reqs: [
          '5 年以上产品管理或相关行业经验',
          '有为开发者构建产品的良好记录,对设计清晰、灵活、可从早期实验扩展到生产使用的 API 和原语有强直觉',
          '有与高增长科技公司深度直接协作的经验',
          '在模糊领域推动共识和行动的实战经验;擅长跨团队协作、清晰传达复杂想法',
        ],
        bonus: [],
      },
      {
        title: 'Product Manager, Core Models',
        loc: '旧金山', type: 'Product Management',
        duties: [
          '把用户和产品目标转化为清晰的模型需求、系统架构选择和研究优先级(覆盖 query 理解、索引、检索、排序、工具边界、数据、训练、推理、评估)',
          '构建闭环学习循环:把产品使用、显式反馈和用户信号转化为数据集、评估、实验、训练优先级和发布决策',
          '定义离线评估和在线产品指标的成功标准,平衡模型质量、有用性、延迟、安全、可靠性和成本',
          '创建可复用的评估、实验和信号收集平台,让新能力随时间改进更快',
          '用具体产品失败案例和新兴用户需求识别缺口、形成假设、塑造下一波研究和产品投资',
        ],
        reqs: [
          '深厚的产品管理专业知识,包括负责技术复杂的产品或平台',
          '精通至少一个相关领域:搜索与信息检索、推荐或个性化系统、ML 平台、大规模数据系统',
          '在所有权和技术边界仍在形成的研究、基础设施、消费产品界面之间自如运作',
        ],
        bonus: [],
      },
      {
        title: 'Product Manager, Learning (Education)',
        loc: '旧金山', type: 'Applied AI',
        duties: [
          '定义并推动 ChatGPT 中教育与学习的产品愿景(学习是 ChatGPT 头部用例)',
          '与研究团队合作探索 AI 如何更好地提升学习成果',
          '与设计、工程、产品、GTM 等跨职能团队协作,把教育功能落地;与增长、青少年、企业产品团队协同',
          '用数据和用户反馈验证影响力并指导产品方向',
        ],
        reqs: [
          '10 年以上产品管理经验,具备强领导力、跨职能协作和沟通能力',
          '有教育、EdTech 或学习研究经验,或渴望深入复杂的研究驱动领域',
        ],
        bonus: [],
      },
      { title: 'Product Manager, Youth', loc: '旧金山', type: 'Product Management', brief: '青少年方向 ChatGPT 产品体验与安全', reqs: ['大规模用户产品经验','青少年安全与信任理解'] },
      { title: 'Product Manager, Integrity', loc: '旧金山', type: 'Product Management', brief: '平台完整性(滥用防护、账号安全)', reqs: ['信任与安全产品经验'] },
      { title: 'Product Manager, API Infrastructure', loc: '旧金山', type: 'Product Management', brief: 'API 基础设施(可靠性、扩展性)', reqs: ['开发者产品经验'] },
      { title: 'Product Manager, Financial Engineering', loc: '旧金山', type: 'Product Management', brief: '计费、定价、用量产品', reqs: ['计费系统经验'] },
      { title: 'Product Manager, Enterprise Identity', loc: '旧金山', type: 'Product Management', brief: '企业身份(SSO/权限/组织)', reqs: ['企业级产品经验'] },
      { title: 'Rosalind Life Sciences Product Manager', loc: '旧金山', type: 'Product Management', brief: '生命科学方向', reqs: ['科学背景'] },
      { title: 'Product Manager, Technology Vertical', loc: '旧金山', type: 'Applied AI', brief: '技术行业垂直方向', reqs: ['开发者生态理解'] },
      { title: 'Product Manager, Financial Services', loc: '旧金山', type: 'Product Management', brief: '金融服务垂直方向', reqs: ['金融行业理解'] },
    ],
  },
  {
    id: 'anthropic',
    name: 'Anthropic (Claude)',
    color: '#d97757',
    accent: '#c05c3d',
    source: 'Greenhouse 招聘板 (job-boards.greenhouse.io/anthropic) · 抓取于2026-10-13 · 17个PM相关岗',
    jobs: [
      {
        title: 'Product Manager, Claude (App Foundations)',
        loc: 'SF/NYC/Seattle', type: 'Product Management',
        salary: '$385k–460k/年',
        duties: [
          '负责 Claude 应用核心体验与共享功能:保留上下文(retained context)、语音交互、Artifacts。Claude 通过浏览器、移动、桌面应用服务数千万人',
          '把先进模型功能转化为普通消费者觉得有用、愉悦的平易近人体验',
          '结合数值分析、受控实验(A/B)和直接用户研究理解行为、确定优先级;检查使用度量和客户输入发现改进',
          '对打磨度保持高标准,包括大量用户反复遇到的小交互;与设计、研发、分析、模型研究员、市场协作频繁发布有价值改进',
          '构建可复用能力,支撑更广的 Claude 产品家族',
        ],
        reqs: [
          '有服务数百万用户产品的经验',
          '对可用性、打磨度和什么让产品愉悦有强判断力',
          '高级分析技能,包括设计实验和用证据支撑决策',
          '清晰沟通,能与不同职责和利益的人有效协调',
          '在快速变化、优先级不确定时依然高效',
          '技术准备或与软件工程师协作的实战能力;能把新兴模型功能塑造成有吸引力、实用的用户体验',
        ],
        bonus: ['8 年以上 PM(个人+企业产品)','创立过公司','开发过 AI 产品'],
      },
      {
        title: 'Product Manager, Claude Science',
        loc: 'SF/NYC/Seattle', type: 'Product Management',
        salary: '$305k–385k/年',
        duties: [
          '领导科学工作台产品领域:文献综述、领域数据集、计算、分析、发表准备;蛋白质/基因组/化学结构可视化;带幻觉引用检查的协调 AI agent 流程。目标=10 年内实现 100 年的科学进步',
          '直接向科学家学习:访谈、协作会话、重要客户讨论;转化为排序需求、规格和可衡量成果',
          '改进科学模型表现:与研究员合作定义期望行为、开发反映真实科学任务的评估、识别生产失败、反哺模型改进',
          '通过原型验证想法:在分配工程资源之前用 Claude 验证概念',
          '做纪律性取舍:哪些学科、受众、任务值得深度初始支持;区分核心发布功能与理想完整产品',
          '衡量有用成果:追踪科研人员的采用与持续使用、分析完成速度、结果信心',
        ],
        reqs: [
          '交付过技术复杂产品的经验(PM 或创始人/工程师/科学家可比经验)',
          '科学专业知识或足够技术深度:理解专家流程、能调查 AI 为何在特定科学问题上失败(如结构生物学、计算化学)',
          '扎实的 AI 和 LLM 知识,日常使用 AI 应用,能调查模型响应、提示设计、评估方法',
          '基于产品分析、评估发现和客户证据(而非直觉)排优先级',
          '把模糊冲突的专家反馈转化为具体产品决策;用写作构建共识而非正式权威',
        ],
        bonus: ['8 年以上 PM 或可比领导经验;创立公司有利','研究生级别科学教育(生物/化学/物理/材料等)或开发科研软件经验','直接创建过模型评估或 benchmark 的经验(尤其科学任务或 AI agent)','向药企、生命科学等受监管组织交付产品的经验'],
      },
      { title: 'Product Manager, Code Research', loc: 'SF/NYC', type: 'Product Management', brief: '代码研究方向', reqs: ['代码/开发者产品经验'] },
      { title: 'Product Manager, Research', loc: 'SF/NYC', type: 'Product Management', brief: '研究产品管理', reqs: ['研究背景'] },
      { title: 'Product Manager, Human Data Platform', loc: 'SF/NYC', type: 'Product Management', brief: '人类数据平台(标注/反馈)', reqs: ['数据平台经验'] },
      { title: 'Product Manager, Billing', loc: 'SF/NYC', type: 'Product Management', brief: '计费产品', reqs: ['计费/订阅经验'] },
      { title: 'Product Manager, Cybersecurity', loc: 'SF/NYC', type: 'Product Management', brief: '网络安全', reqs: ['安全产品经验'] },
      { title: 'Product Manager, Enterprise Privacy', loc: 'SF/NYC', type: 'Product Management', brief: '企业隐私', reqs: ['隐私合规经验'] },
      { title: 'Product Manager, Safe Access', loc: 'SF/NYC', type: 'Product Management', brief: '安全访问', reqs: ['访问控制经验'] },
      { title: 'Product Manager, New Market & Monetization', loc: 'SF', type: 'Product Management', brief: '新市场与变现', reqs: ['商业化经验'] },
      { title: 'Product Manager, Multi-Cloud Growth (Google)', loc: 'SF', type: 'Product Management', brief: '多云增长', reqs: ['云产品经验'] },
      { title: 'Product Manager, Account Integrity', loc: 'SF/NYC', type: 'Product Management', brief: '账号完整性', reqs: ['信任安全经验'] },
      { title: 'Safeguards PM 系列(4岗)', loc: 'SF/NYC', type: 'Product Management', brief: '罕见伤害/网络/通用安全防护', reqs: ['安全防护经验'] },
    ],
  },
  {
    id: 'bytedance',
    name: '字节跳动',
    color: '#325ab4',
    accent: '#2c4f9e',
    source: '社招API(job.bytedance.com)+校招页(jobs.bytedance.com) · 抓取于2026-10-13 · 社搜「AI产品经理」命中668条,其中标题真正含「产品经理」约498岗(全量分页统计);校招451个AI产品岗。下方收录代表性核心岗,完整清单去 job.bytedance.com 搜「AI产品经理」',
    jobs: [
      {
        title: 'AI产品经理-AI Coding（字节云）',
        loc: '杭州/上海/深圳/北京', type: '社招·产品', urgent: true,
        duties: [
          '负责字节云团队 AI Coding 产品整体规划与设计,制定清晰、有前瞻性的产品路线图',
          '深入洞察开发者群体,定义和设计能显著提升开发效率与体验的产品解决方案',
          '跟踪并分析 AI Coding 领域的前沿趋势与相关产品,形成独立的行业判断与产品思考',
        ],
        reqs: [
          '本科及以上,计算机、人工智能等相关专业,3 年以上产品经理经验',
          '产品设计基本功扎实,能撰写清晰的产品需求文档,对用户体验有不懈追求',
          '具备技术背景,了解至少一门主流编程语言,能理解开发者的思维模式和开发习惯',
          '对 AI 编程助手(GitHub Copilot、Claude 等)及相关领域有持续关注和深入使用经验',
          '有独立思考,能跟上技术飞速迭代,能站在业务和战略高度制定长期愿景和阶段性目标',
        ],
        bonus: [],
      },
      {
        title: 'AI产品经理-ArkClaw',
        loc: '杭州', type: '社招·产品经理',
        duties: [
          '产品规划与迭代:负责 ArkClaw 产品路线图,深度理解 C 端用户需求,平衡个人版创新玩法与企业版稳定性',
          '体验与交互设计:主导界面设计和用户流程优化,站在非技术用户视角思考交互,降低使用门槛',
          '用户研究与洞察:通过调研、社群反馈、数据分析持续挖掘痛点,优化易用性',
          '驱动用户增长:和运营合作设计活动、内容、社区运营,提升核心运营指标',
        ],
        reqs: [
          '2 年以上 To C 或 SaaS 产品经理经验,有 AI 类产品、开发者工具、效率工具经验优先',
          '优秀的用户共情能力和交互设计敏感度,站在普通用户视角,重视体验细节',
          '对 AI 技术、智能助手领域有浓厚兴趣,使用过多款 AI 产品并对产品逻辑有深入洞察',
        ],
        bonus: ['有 UX 设计相关经验'],
      },
      {
        title: 'AI产品经理（评测方向）-TikTok',
        loc: '北京', type: '社招·产品经理',
        duties: [
          '负责智能客服效果和安全指标体系设计,从多维度定义可量化的「好 AI Agent」标准',
          '建立 AI 原生的评估与 Ground Truth 体系,让 AI 在标注和测试集建设中起决定性作用,持续提升评估准确率',
          '设计科学的抽样与评估方法,确保评估结果真实反映线上用户分布与痛点,并控制评估成本',
          '搭建 AI 自动发现线上质量问题的系统与机制,打通「发现问题→定位原因→改进建议」端到端闭环',
        ],
        reqs: [
          '本科及以上,3 年以上 AI 产品经理/策略产品经理经验',
          '扎实的指标设计与度量方法论功底,能把模糊的体验目标拆解为可统计、可定目标的量化标准',
          '熟悉抽样、实验评估等数据方法,良好的数据敏感度与分析能力',
        ],
        bonus: ['AI 评估经验(LLM-as-a-Judge、标注体系搭建、Ground Truth 建设)','客服、内容安全、用户体验度量背景','多地区/多合规环境下设计数据方案经验'],
      },
      {
        title: 'AI产品经理-Aime（企业级 AI Agent 平台·校招）',
        loc: '北京/上海', type: '校招·产品-产品经理',
        duties: [
          '参与企业级 AI Agent 平台 Aime 的产品设计:通用 Agent 产品架构、用户核心任务链路、交互方式与工作流',
          '参与任务规划与编排、上下文管理、工具调用、Memory、Workflow 等核心能力产品化,把底层技术抽象为可复用的平台产品模块',
          '面向研发、产品、运营等场景深入分析用户目标与工作流程,完成需求分析、产品策略与功能设计并推动端到端落地',
          '建立覆盖任务过程、结果质量与业务价值的评估指标体系,通过数据、用户反馈和效果评测持续驱动迭代',
        ],
        reqs: ['平台集成代码仓库、文档、知识库、飞书、Browser Use、MCP、研发工具链等企业能力,支持调研、Coding、数据分析、文档生成、Browser Automation 等复杂任务——需要对这些概念有实践理解'],
        bonus: [],
      },
      {
        title: 'AI产品经理 - 剪映CapCut（即梦Dreamina/校招）',
        loc: '北京/深圳/上海', type: '校招·产品',
        duties: [
          '负责即梦 Dreamina Web 端 AI 创作产品规划与设计:文生图、文生视频、创作 Agent、智能画布、灵感社区',
          '建立 AIGC 创作产品核心指标体系(创作效率、作品质量、用户增长与留存),运用数据驱动与 A/B 实验快速验证假设',
          '关注 AIGC 内容生态健康与安全,设计有效产品策略确保内容质量',
        ],
        reqs: ['以用户为中心,深入洞察创作者需求与痛点', '与算法、工程、设计团队紧密协作,定义清晰产品路线图并推动高质量交付'],
        bonus: [],
      },
      { title: 'AI产品经理（AI Agent方向）-剪映CapCut（校招）', loc: '北京', type: '校招·产品', brief: '国际化增长场景 Agent 应用:内容生成/SEO-GEO/达人运营;把行业 Know-how 转化为 Agent 工作流;人机协作交互形态(全局工作台/渐进式拆解);Test&Learn 快速验证', reqs: ['理解增长策略与SOP','GenAI技术与应用范式敏感'] },
      { title: 'AI产品经理（增长方向）-火山引擎', loc: '北京', type: '校招·产品经理', brief: 'harness 工具和 Agent 应用的产品功能设计/增长运营/内容策略(To B/To D 场景)', reqs: ['开源项目研究能力','用户增长模式探索'] },
      { title: 'AI产品经理 - 抖音电商（智能客服·校招）', loc: '北京', type: '校招·产品', brief: '商家客服智能对话/智能工具;按场景定义 Agent 及能力项;参与调参和 Prompt 编写', reqs: ['熟悉大模型知识和技术,了解底层训练逻辑和方法'] },
      { title: '更多社招岗位(全量约498个产品经理岗)', loc: '北京/上海/杭州/深圳', type: '社招·全量概览', brief: '完整分页统计(23页×30条)的方向分布:豆包系(豆包/豆包爱学/豆包搜索/大模型智能办公)·Aime企业Agent平台(通用Agent/垂类场景)·飞书系(多维表格/IM/商业化/妙记音视频/AI Friendly)·抖音系(电商×20+/生活服务×15+/平台/UGC/社交/搜索)·TikTok系(Shop×15+/直播/安全/创作工具)·剪映CapCut(即梦/营销Agent/AI搜索策略)·火山引擎(AI生态平台/创作/汽车Agent评测/豆包搜索)·AI数据与安全(大模型评测/世界模型/模型训练Code&Agent/具身智能)·Dev Infra(研发平台×6/可观测性/策略)·集团信息系统(评测/法务/财务/人才系统)。另有稀缺岗:AI提效产品经理(Vibe Coding招聘管理方向)、办公AI效果评测、AI应用评测-Dola、AI漏洞修复', reqs: ['去 job.bytedance.com 社招搜「AI产品经理」可看全部;方向跨度极大,投递前先想清楚自己的垂直领域'] },
    ],
  },
  {
    id: 'tencent',
    name: '腾讯',
    color: '#07c160',
    accent: '#06a552',
    source: 'careers.tencent.com 官网搜索 · 抓取于2026-10-13',
    jobs: [
      {
        title: 'AI产品经理（TEG·企业AI Agent平台/IMate）',
        loc: '深圳', type: 'TEG·产品·3年+',
        duties: [
          '负责企业 AI Agent 平台产品规划与建设,推动核心产品能力设计、研发协同及版本迭代',
          '负责 IMate 相关产品方向:基础能力建设、研发工作流集成、开放平台能力建设',
          '结合企业内部研发和办公场景,洞察用户需求,探索 AI Agent 提升工作效率的新模式',
          '持续跟踪 AI 技术和行业发展趋势,推动产品能力、用户体验及应用规模提升',
        ],
        reqs: [
          '本科及以上,3 年以上互联网产品经验,有开发者工具、研发效能或平台型产品经验优先',
          '产品基本功扎实:独立完成需求分析、产品设计、项目推进及数据迭代',
          '熟悉企业研发流程和开发者场景,能深入用户工作流,发现并抽象核心需求',
          '对大模型及 AI Agent 有较强理解和兴趣,熟悉 Agent、MCP、API 等相关概念,有实际使用或项目经验优先',
          '良好的技术理解、产品抽象及跨团队推动能力,能推动复杂平台型项目落地',
        ],
        bonus: [],
      },
      {
        title: 'AI产品经理-AI平台（Agent方向·金融科技）',
        loc: '深圳', type: 'CDG·产品·2年+',
        duties: [
          '负责金融科技 AI 平台产品规划、设计和迭代:Agent 研发流程、观测、追踪、安全、调优及成本控制',
          '挖掘技术/非技术用户内部场景痛点,完善产品能力;参与组织级研发体系升级,设计多角色 Agent 协同产品解决方案',
          '建立 AI 服务效果评估治理,通过数据、用户反馈和 Badcase 持续优化产品',
        ],
        reqs: ['2 年以上经验,理解 Agent 研发全流程(观测/追踪/安全/调优/成本)'],
        bonus: [],
      },
      {
        title: '混元AIGC模型产品经理（多模态方向）',
        loc: '深圳/北京/上海', type: 'TEG·产品·3年+',
        duties: [
          '负责图像、视频、3D 或音频等某一 AIGC 方向的产品规划与全生命周期管理',
          '深度洞察用户需求与技术趋势,定义具有竞争力的产品能力矩阵和发展路线图',
          '建立科学的模型评估与迭代机制,确保产品效果持续领先',
        ],
        reqs: ['协调内外部资源,推动产品从概念到上线、优化及商业化落地全过程'],
        bonus: [],
      },
      { title: '微信输入法-AI产品经理', loc: '广州', type: 'WXG·1年+', brief: 'LLM/Agent/多模态/ASR 在文字输入、智能表达、语音交互、内容创作的落地;定义模型效果标准和评测体系,数据飞轮建设', reqs: ['1年+经验','大模型前沿趋势与竞品跟踪'] },
      { title: '企业微信-AI产品经理-效率办公AI', loc: '广州', type: 'WXG·3年+', brief: '文档/智能表格 AI 能力:内容生成与编辑、信息整理、数据分析、可视化', reqs: ['文档创作/表格处理/数据分析真实需求理解'] },
      { title: '企业微信-AI产品经理-智能助理Agent', loc: '广州', type: 'WXG·1年+', brief: '企微 AI 功能、主框架、基础 IM/管理体验', reqs: ['企业通讯/协同工具理解'] },
      { title: '企业微信-AI产品经理-智能机器人', loc: '广州', type: 'WXG·3年+', brief: '企业场景智能体搭建服务:企业应用服务、数据与AI结合', reqs: ['企业AI应用场景理解'] },
      { title: '腾讯会议-AI产品经理-ASR方向', loc: '深圳', type: 'CSIG·3年+', brief: 'AI 语音产品:识别准确率、响应速度等关键指标;效果评测集构建、竞品分析和数据驱动迭代', reqs: ['语音产品经验'] },
      { title: '微信秒剪-AI产品经理', loc: '广州', type: 'WXG·3年+', brief: '视频创作领域 AI 应用', reqs: ['用户痛点挖掘'] },
      { title: '企业微信-AI产品经理-智能文档/邮箱', loc: '广州', type: 'WXG·2-3年+', brief: '智能文档主框架、编辑浏览体验;邮箱+AI 机会点', reqs: ['协同工具理解'] },
    ],
  },
  {
    id: 'alibaba',
    name: '阿里巴巴',
    color: '#ff6a00',
    accent: '#e05f00',
    source: '阿里巴巴控股集团招聘官网 (talent-holding.alibaba.com) · 抓取于2026-10-13 · 关键词命中13个产品岗',
    jobs: [
      {
        title: 'AI创新事业部-AI Agent产品经理（Qoder/Qoderwake）',
        loc: '杭州', type: '产品类·用户型·2年+',
        urgent: true,
        duties: [
          '参与 AI Agent 产品(Qoder/Qoderwake)规划与落地:产品定位、核心价值和演进路径。目标=让 Agent 独立承接复杂任务、持续交付真实成果',
          '深入理解用户需求和真实场景,把复杂问题转化为清晰、可验证的产品方案',
          '关注 AI 技术和行业趋势,持续探索新产品形态、用户体验和增长机会',
          '通过用户研究、数据分析和持续实验,推动产品体验与业务指标提升',
          'QoderWake 方向:数字员工的产品规划、核心体验和重点场景落地;或用增与官网方向:用户增长、转化链路优化',
        ],
        reqs: [
          '本科及以上,2 年以上产品经理经验',
          '对 AI 技术和产品有浓厚兴趣,能快速理解 Agent 的核心机制、能力边界和发展趋势',
          '扎实的产品策划、用户洞察和逻辑分析能力,能独立定义问题并形成解决方案',
          '良好的数据意识和结果导向,结合用户反馈和数据持续优化产品',
          '较强的项目推动和跨团队协作能力,适应快速变化和不确定环境',
        ],
        bonus: ['AI Agent、开发者工具、云产品、SaaS 或复杂场景产品经验','用户增长、官网产品、转化漏斗或增长实验经验','英语阅读能力','有编程或 Coding Agent 使用经验'],
      },
      {
        title: 'Qoder 产品经理-AI Coding 方向',
        loc: '杭州', type: '产品类·商业型',
        duties: ['Qoder AI 编程产品方向的产品设计与迭代'],
        reqs: ['理解 AI Coding 产品形态与开发者需求(同系列:模型策略产品经理-编程方向/Mobile方向/AI创新方向/企业级能力方向共5岗在招)'],
        bonus: [],
      },
      { title: '阿里控股-AI产品经理-平台型', loc: '杭州', type: '平台型', brief: '平台型 AI 产品', reqs: [] },
      { title: '阿里控股-AI产品经理(CFO产品线)', loc: '杭州', type: '平台型', brief: '财务领域 AI 产品', reqs: [] },
      { title: '集团安全部-AI产品经理-内容安全中台', loc: '杭州', type: '平台型', brief: '内容安全 AI 中台', reqs: [] },
      { title: '达摩院-医疗AI产品市场营销专家', loc: '北京/杭州', type: '市场-产品市场营销', brief: '医疗 AI 产品营销', reqs: [] },
    ],
  },
  {
    id: 'deepseek',
    name: 'DeepSeek (深度求索)',
    color: '#4d6bfe',
    accent: '#3d56cc',
    source: 'talent.deepseek.com 官方招聘站 · 抓取于2026-10-13',
    jobs: [
      {
        title: 'AI 产品经理（AI 产品方向 / Agent Harness 方向）',
        loc: '北京/杭州', type: '产品部门',
        urgent: true,
        duties: [
          '【AI产品方向】产品规划:紧密跟踪 AI 技术发展,制定并执行 DeepSeek 在 Chat 网页端、APP 端、开放平台的产品策略;洞察用户需求,规划优先级,推动产品创新和体验优化',
          '【AI产品方向】功能设计:综合运用数据分析、用户反馈和定性观察,从真实用户需求和使用场景出发,定位并拆解产品问题,降低使用门槛,提升使用深度、留存率、粘性和转化率',
          '【AI产品方向】项目管理:与模型、算法、研发和运营团队紧密合作,以快速节奏推进需求从调研到上线,保证高质量交付',
          '【Agent Harness 方向】规划 DeepSeek Harness 产品路线图,连接研究员、工程师、开源社区和广大用户',
          '【Agent Harness 方向】理解判断用户最真实需求,定义与衡量「Agent 是否真的在更多场景下更深入的帮助到更多的人」的指标',
          '【Agent Harness 方向】帮助 Harness 产品落地,持续跟踪真实场景下的用户任务,推动产品创新和体验优化',
        ],
        reqs: [
          '【AI产品方向】有产品经历或完整的从需求到落地的交付经验,AI / 对话 / Agent 类产品经验优先',
          '【AI产品方向】是 AI 产品深度用户:对模型能力边界、不同产品的体验差异和用户场景有真实体感,不只是看过,而是自己用过、拆过',
          '【AI产品方向】有好的产品品味和用户洞察,注重用户日常交互细节,追求极致产品体验',
          '【两方向通用】2 年以上产品经理从业经验,产品逻辑清晰。特别优秀的候选人可放宽年限',
          '【两方向通用】知名高校本科及以上学历',
          '【两方向通用】能够使用 vibe coding 写代码,不一定需要技术背景',
        ],
        bonus: [],
      },
      {
        title: '通用 Agent 数据产品经理（办公/生活/搜索）',
        loc: '北京/杭州', type: '模型数据策略',
        duties: ['通用 Agent 训练数据的产品化:办公、生活、搜索场景'],
        reqs: ['模型数据策略方向,同系列还有:专业领域数据PM(小语种/医学法律)、AI创作数据PM、情感智能数据PM'],
        bonus: [],
      },
      { title: 'Code Agent 数据工程师', loc: '北京', type: '模型数据策略', brief: 'Code Agent 训练数据', reqs: [] },
      { title: '运营团队', loc: '北京', type: '产品部门', brief: '产品运营', reqs: [] },
    ],
  },
  {
    id: 'manus',
    name: 'Manus (蝴蝶效应)',
    color: '#141414',
    accent: '#3d3d3d',
    source: '⚠️ 官网(manus.im)对本机区域封锁无法直抓一手 JD;以下为公开二手信息(官方渠道核实提醒已标注)',
    jobs: [
      {
        title: '产品经理（AI Agent 方向）',
        loc: '北京/武汉', type: '二手信息',
        urgent: true,
        duties: [
          '负责 Manus 产品功能设计与迭代',
          '深入理解 AI Agent 用户需求,挖掘产品机会',
          '与工程团队协作推动产品落地',
        ],
        reqs: [
          '对 AI Agent / LLM 有深刻理解',
          '重度 AI 产品用户,有自驱力和产品直觉',
          '小团队文化:强调「品味」和实际产品能力,而非传统大厂履历',
        ],
        bonus: ['有 0-1 产品经验优先'],
        note: '官方提醒:Manus 从未授权第三方付费内推或培训,谨防虚假招聘。一手信息请通过 manus.im 或官方社媒核实',
      },
    ],
  },
];

// ===== 横向分析:8家共同能力要求矩阵 =====
const CAPABILITY_MATRIX = [
  {
    name: 'Agent 深度使用经验',
    weight: '⭐⭐⭐⭐⭐ 出现率 7/8 家',
    detail: 'Kimi(重度用户,基于实践的第一手判断)/DeepSeek(用过、拆过)/字节(AI Coding 深入使用)/Anthropic(日常使用 AI 应用)/OpenAI(为开发者构建)/腾讯(实际使用或项目经验)/阿里(Coding Agent 使用经验优先)',
    advice: '简历必须有「我用 Agent 完成了什么真实工作」的具体案例,不是「了解 Agent」',
  },
  {
    name: 'Context Engineering / 上下文工程',
    weight: '⭐⭐⭐⭐⭐ 头部岗核心词',
    detail: 'Kimi Innovation Explorer(理解的不只是 Prompt,还包括 Context Engineering)/Kimi Work(Context Engineering 第一手理解)/字节 Aime(上下文管理核心能力产品化)/腾讯(Agent、MCP、API 概念)',
    advice: '这是 2026 年 AI PM 区别于普通 PM 的分水岭词。要能讲清:上下文窗口怎么分配、系统提示vs用户输入、记忆怎么设计、RAG 注入策略',
  },
  {
    name: '模型能力边界判断',
    weight: '⭐⭐⭐⭐⭐ 8/8 家全部出现',
    detail: 'Kimi(理解模型能力边界)/DeepSeek(对模型能力边界有真实体感)/字节(对 AI 编程助手持续关注和深入使用)/Anthropic(把新兴模型功能塑造成实用体验)/OpenAI(Model Capability & Limitation)/腾讯(理解 AI 能力边界,不做为了AI而AI)/阿里(快速理解 Agent 核心机制、能力边界)',
    advice: '面试必考:这个需求该用模型解决还是规则解决?幻觉/延迟/成本约束下怎么设计?',
  },
  {
    name: 'Evaluation / 评测体系',
    weight: '⭐⭐⭐⭐⭐ 高频且差异化',
    detail: 'Kimi(独立岗位:Eval评测)/OpenAI Core Models(构建闭环学习循环、评估平台)/Anthropic Claude Science(开发反映真实任务的评估)/字节 TikTok评测岗(LLM-as-a-Judge、Ground Truth 建设)/腾讯(Agent 观测追踪调优、评估治理、效果评测集构建)/阿里(覆盖任务过程结果质量的评估指标体系)',
    advice: '最强差异化技能:能设计「好 Agent」的量化标准。简历写一个你搭过的评测集案例=秒杀80%候选人',
  },
  {
    name: 'Prompt / 评测数据设计',
    weight: '⭐⭐⭐⭐ ',
    detail: 'Kimi Native PM(参与 prompt 设计)/字节抖音电商(参与调参和 Prompt 编写)/Kimi AI Taste Mentor(把审美转化为训练题目和评测数据)/DeepSeek(数据产品经理岗)',
    advice: '不是「会写提示词」而是「把 Prompt 当产品模块设计,理解它对稳定性、可控性的影响」',
  },
  {
    name: 'MCP / API / Function Calling',
    weight: '⭐⭐⭐⭐',
    detail: '腾讯(熟悉 Agent、MCP、API 概念)/Kimi 开放平台(Function Calling、多Agent协作)/字节 Aime(Browser Use、MCP、研发工具链集成)/阿里(Agent 架构、RAG、Function Calling)/OpenAI API Agents(SDK、API 原语设计)',
    advice: '至少亲手接过一次 MCP server 或 function calling 调用,能画清楚 Agent→工具→结果的链路图',
  },
  {
    name: '数据驱动 / A/B 实验 / 指标体系',
    weight: '⭐⭐⭐⭐⭐ 传统PM基本功的AI版',
    detail: 'Kimi 垂直Owner(搭建指标体系)/Kimi C端PM(拆解漏斗、A/B测试)/字节评测岗(指标设计度量方法论)/腾讯(数据迭代、Badcase治理)/Anthropic(设计实验、证据决策)/OpenAI(离线评估+在线指标)/DeepSeek(数据分析驱动)',
    advice: 'AI PM 特有指标:任务完成率、人工干预率、每任务成本、首字延迟、幻觉率、留存vs使用深度',
  },
  {
    name: '0→1 / 创业 Owner 经历',
    weight: '⭐⭐⭐⭐',
    detail: 'Kimi 垂直Owner(创业或业务Owner经历)/Kimi开放平台(从0到1搭建产品体系)/Anthropic(创立过公司 preferred)/DeepSeek(特别优秀可放宽年限=重实际能力)/Manus(0-1经验优先)',
    advice: '没有创业经历就用「独立负责过完整产品线」或「个人项目从0做到有真实用户」来替代',
  },
  {
    name: 'Vibe Coding / 原型能力',
    weight: '⭐⭐⭐⭐ 2026新增硬通货',
    detail: 'Kimi(能用 Agent 搭出原型验证想法/Vibe Coding 实践加分)/DeepSeek(能够使用 vibe coding 写代码,不一定需要技术背景)/Kimi Work(独立编写代码完成可运行原型)/字节火山引擎(harness工具和Agent应用)/Anthropic Claude Science(用 Claude 验证概念再分配工程资源)',
    advice: '2026年最革命的门槛变化:DeepSeek 明说不需技术背景但要会 vibe coding。作品集>简历',
  },
  {
    name: '人机交互范式判断',
    weight: '⭐⭐⭐⭐',
    detail: 'Kimi Work(任务下达、中途交互、成果交付的协作体验;Computer Use、Proactive Agent)/Kimi Innovation(什么交给Agent/什么留给用户)/字节剪映(人机协作交互形态:全局工作台/渐进式拆解)/Anthropic Claude PM(普通用户觉得有用愉悦)',
    advice: '要有自己的观点:什么时候 Agent 该问人?什么时候自己干完?失败怎么回退?',
  },
  {
    name: '行业深度/垂直领域',
    weight: '⭐⭐⭐',
    detail: 'Kimi 垂直Owner(游戏/电商/科研/vibe coding/设计/金融)/Anthropic Claude Science(结构生物学/计算化学)/OpenAI(Learning/FnServices/Life Sciences/Technology Vertical)/阿里(Qoder 编程方向)/腾讯(会议ASR/风控金融)',
    advice: '「AI PM + 一个垂直领域深度」= 双重稀缺。选一个你有积累的领域深挖',
  },
];

// ===== 简历应展示清单 =====
const RESUME_CHECKLIST = [
  { section: '个人简介/Summary', must: ['一句话定位:AI Native 产品经理 + 你最强的垂直领域', 'Agent 重度用户声明(具体到每天用什么干什么)', '代表作品一句话(有数据:用户量/完成率/收入)'] },
  { section: '核心技能', must: ['Context Engineering(上下文设计/记忆/RAG注入)', 'Evaluation(LLM-as-a-Judge/评测集构建/Ground Truth)', 'Agent 架构(ReAct/工具调用/MCP/Function Calling/多Agent编排)', 'Prompt 工程(结构化设计/稳定性调优/产品化)', '数据(SQL/A/B实验/指标体系:任务完成率、人工干预率、单任务成本)', 'Vibe Coding(Claude Code/Cursor/Codex 完成真实项目)'] },
  { section: '项目经历', must: ['至少1个 Agent 产品 0→1(或1→10)完整案例:问题→方案→模型能力取舍→评测→上线→数据', '至少1个「用 AI 做 AI 产品」案例(用 vibe coding 搭原型/用 LLM 评测替代人工)', '每个项目写:技术约束下的取舍(延迟/成本/幻觉),这是 AI PM 区别于普通 PM 的关键叙事'] },
  { section: '作品集链接', must: ['GitHub:独立项目(带 README、评测数据、demo GIF)', '个人产品(有真实用户>完美 Demo)', '深度产品拆解报告(展示「用过、拆过」)'] },
  { section: '避雷', must: ['不写「熟悉 ChatGPT 使用」这种浅层表述', '不堆 AI 名词没有实例支撑', '不要普通 PRD 流程项目(无模型能力取舍)'] },
];

// ===== 需要学习的知识体系 =====
const LEARNING_PATH = [
  {
    stage: '第1阶段·AI产品基础(1-2周)',
    goal: '把「用过」变成「拆过」:建立对模型能力的第一手体感',
    items: [
      { topic: '大模型工作原理(PM 视角)', depth: '理解 token/上下文窗口/temperature/幻觉机理,不需要数学', res: '3Blue1Brown 神经网络系列;Karpathy「Intro to LLMs」1小时演讲;各模型官方文档' },
      { topic: 'Agent 核心循环', depth: 'ReAct 范式:思考→工具调用→观察→再思考;直到任务完成', res: 'ReAct 论文;Anthropic「Building Effective Agents」;LangChain/LlamaIndex 文档' },
      { topic: 'Context Engineering', depth: '上下文窗口预算分配:系统提示/工具定义/记忆/RAG 注入/中间结果', res: 'Anthropic「Effective Context Engineering for AI Agents」;「Lost in the Middle」论文' },
      { topic: '主流产品深度拆解(每周2个)', depth: 'Claude Code/Codex/Manus/Devin/Coze/Cursor:输入→上下文→工具→交付', res: '亲手用+写拆解笔记(这是面试弹药)' },
    ],
  },
  {
    stage: '第2阶段·差异化硬技能(2-3周)',
    goal: '搭出简历上「别人没有」的东西:评测体系+数据飞轮',
    items: [
      { topic: 'LLM Evaluation', depth: 'LLM-as-a-Judge 设计、盲评、rubric 设计、Ground Truth 集构建、偏差校准', res: 'OpenAI Evals;LangSmith/Langfuse 文档;「LLM-as-a-Judge」综述论文' },
      { topic: 'RAG 与知识注入', depth: 'Embedding/分块/检索/重排;什么知识进上下文 vs 进微调', res: 'Anthropic RAG cookbook;LlamaIndex 文档' },
      { topic: 'MCP / Function Calling', depth: '亲手写一个 MCP server 接给 Claude;理解工具 schema 设计', res: 'modelcontextprotocol.io 官方文档;各家 Function Calling 文档' },
      { topic: 'AI 产品指标体系', depth: '任务完成率/人工干预率/单任务成本/首响延迟/留存与使用深度', res: '各家官方产品的公开指标设计;Vercel AI SDK observability' },
    ],
  },
  {
    stage: '第3阶段·作品集冲刺(3-4周)',
    goal: '做出 2-3 个能「拿出来吓人」的独立项目,提交 GitHub',
    items: [
      { topic: '项目1:垂直 Agent(你最懂的领域)', depth: '完整产品:任务下达→多步执行→评测报告→失败案例分析', res: '用 Claude Code/Codex 实现;部署到可访问 URL' },
      { topic: '项目2:评测体系/数据飞轮', depth: '给某类任务建评测集(50+ case)+ LLM-as-a-Judge 评分器 + 基准对比报告', res: '这是 8 家 JD 里最高频的差异化要求' },
      { topic: '项目3:产品拆解报告集', depth: '3-5 篇深度拆解:交互范式/失败模式/指标设计/改进建议', res: '发布到知乎/公众号/GitHub,面试直接引用' },
    ],
  },
  {
    stage: '第4阶段·面试武装(1周+持续)',
    goal: '把经历炼成 STAR 故事,准备好高频面试题',
    items: [
      { topic: '产品故事打磨', depth: '每个项目:背景→我的判断→技术取舍→数据验证→反思', res: '对着 JD 逐条准备「我做过对应的证据」' },
      { topic: '行业观点', depth: '对 ChatGPT/Claude/Cursor/Manus/Coze 的独立判断;人机交互范式观点', res: '写下来,面试时是「自己的答案」而不是复述' },
    ],
  },
];

// ===== 面试题库 =====
const INTERVIEW_QUESTIONS = [
  {
    cat: '产品判断·为什么做',
    level: '必考',
    qs: [
      { q: 'Kimi 官方原题:「这个能力为什么要做?用户什么时候会用?为什么非 AI 不可?」——请用一个你熟悉的功能回答(如 Claude 的 Artifacts / ChatGPT 的 Memory)', key: '考察:能否把模型能力翻译成用户价值。答法框架:①没有 AI 时用户怎么解决这个问题(对照组)②AI 版本的体验跃迁在哪③判断标准=「非 AI 不可」的场景特征(开放性/生成性/上下文依赖)' },
      { q: '字节/Kimi 共同考察:「什么应该交给 Agent 自动完成,什么应该保留给用户决策?」请给出你的判断框架', key: '考察:人机交互范式观点。参考维度:可逆性(不可逆→人)、错误成本、置信度、用户掌控感需求、任务时长。最好有自己踩过的案例' },
      { q: '你日常使用 Claude Code / Codex / Manus 做真实工作吗?它们的能力边界在哪?最近一次它失败是因为什么?', key: '考察:8/8 家都问的「深度用户」验证题。没有真实使用积累的人会答得非常空。提前准备 3 个真实失败案例+你当时的 workaround' },
      { q: '腾讯原题改编:不做「为了 AI 而 AI」的功能——请举一个你认为「Demo 很酷但没用」的 AI 功能,并说明怎么判断它没用', key: '考察:产品审美+数据意识。答法:定义「有用」的指标(留存/任务完成/重复使用率),Demo 效应 vs 真实价值的区别' },
    ],
  },
  {
    cat: '技术理解·上下文与评测',
    level: '高频',
    qs: [
      { q: 'Context Engineering 是什么?和一个好 Prompt 的区别?如果你产品的用户会话有 50 轮历史,你怎么设计上下文策略?', key: '考察:Kimi/字节核心考点。答法:上下文=有限预算的分配问题(系统提示/工具定义/记忆/RAG/中间结果);50轮会话→分层记忆(近期原文+远期摘要)+相关性检索+压缩时机' },
      { q: 'LLM-as-a-Judge 怎么设计?它自己会出什么偏差?怎么校准?', key: '考察:字节评测岗/腾讯核心考点。答法:rubric 先行、盲评、位置偏差(交换AB顺序)、长度偏差、自我偏好偏差;校准=人工抽检对齐+裁判模型 ensemble' },
      { q: '幻觉无法根除,产品上怎么兜底?给出你的分层防护设计', key: '考察:工程约束下的产品取舍。答法:事前(工具获取事实/检索增强)、事中(引用来源/置信度展示/不确定时说不知道)、事后(用户反馈回流+审核)' },
      { q: 'RAG 和微调,什么知识用哪个?给你一个企业客服产品,预算有限,你怎么选?', key: '考察:技术路线判断。答法:频繁更新的知识→RAG,稳定的行为模式→微调,风格语气→系统提示;先 RAG 后微调的性价比逻辑' },
      { q: '一个 Agent 产品的北极星指标怎么定?「任务完成率」怎么定义才不会被刷?', key: '考察:指标设计深度(字节评测岗/DeepSeek Harness 方向核心)。答法:完成率要绑定人工干预次数+用户确认+下游行为(如采纳/付费);防刷=分层定义完全自动完成/人机协作完成/失败' },
    ],
  },
  {
    cat: '场景设计·现场题',
    level: '高频',
    qs: [
      { q: '现场设计题:为一款「AI 会议助手」设计 Agent 架构:会议前/中/后各做什么?哪些环节实时、哪些异步?失败怎么恢复?', key: '考察:Agent 流程设计(Kimi/字节共同考点)。评分点:上下文获取(会议材料预读)、实时性取舍(转写延迟vs打断体验)、异步交付(纪要/行动项)、失败恢复(转写错误→术语表,LLM失败→模板兜底)' },
      { q: 'MCP 和 Function Calling 你用过吗?设计一个「帮我监控竞品并每周汇报」的工具链,工具 schema 怎么定?', key: '考察:动手真实性。能答出工具描述怎么写才让模型选对、参数枚举、返回值大小控制的人,一定真做过' },
      { q: '多 Agent 还是单 Agent?什么时候拆分有价值,什么时候是过度设计?', key: '考察:架构判断(阿里/字节多Agent协作考点)。答法:拆分价值=上下文隔离/并行/专业化;代价=通信成本/一致性;单 Agent + 好工具往往赢过复杂编排' },
      { q: '你的产品 Agent 单任务成本 2 元,DAU 10万,怎么把成本降到可承受?', key: '考察:成本意识(Anthropic/腾讯考延迟成本取舍)。答法:模型分级(简单步骤小模型)、上下文压缩、缓存(prompt cache)、结果缓存、预算熔断+降级链路' },
    ],
  },
  {
    cat: '行业认知·观点题',
    level: '中频',
    qs: [
      { q: '对 ChatGPT、Claude、Cursor、Manus、Coze 至少两款产品的长期深度观察:它们的产品哲学差异是什么?', key: 'Kimi Innovation Explorer 原题。答法要具体到交互细节而不是套话:如 ChatGPT=大众化记忆+生态,Claude=长任务+Artifacts 的交付哲学,Cursor=开发者工作流嵌入,Manus=异步委托+过程透明' },
      { q: '下一代人机交互范式是什么?Computer Use / Proactive Agent 的机会和坑?', key: 'Kimi Work 核心考点。答法要有判断:主动性的边界(何时打扰=最大风险)、信任建立(可解释+可撤销)、能力展示时刻' },
      { q: '垂直 Agent(游戏/电商/科研/金融)哪个领域最先出大产品?为什么?', key: 'Kimi 垂直 Owner 考题。评分点=领域知识×Agent 能力匹配度的论证,不是猜风口' },
    ],
  },
];

// ===== 笔试题 =====
const WRITTEN_TESTS = [
  {
    name: '笔试A·产品拆解(90分钟)',
    scenario: '选 Claude Code / Manus / Kimi 中一款,写一份 3000 字深度拆解报告',
    tasks: [
      '任务1:还原它的 Agent Loop:输入处理→上下文组织→工具调用→中间状态→交付(画出流程图)',
      '任务2:找出 3 个它做得不好的体验断点,说明失败模式和根因',
      '任务3:为其中一个断点设计改进方案,包括交互设计+模型能力需求+评测方法',
      '任务4:设计 3 个衡量改进效果的指标,给出目标值和理由',
    ],
    scoring: '评分点:拆解深度(是不是真用过)/问题定位准确性/方案可行性(模型能力约束下)/指标设计严谨性',
  },
  {
    name: '笔试B·评测设计(120分钟)',
    scenario: '为一款「AI 简历优化助手」设计完整评测体系',
    tasks: [
      '任务1:定义「好」的维度(rubric),每个维度 1-5 分的具体锚点描述',
      '任务2:构建 50 个测试 case 的抽样方案(覆盖什么用户群/行业/难度)',
      '任务3:设计 LLM-as-a-Judge 方案:裁判提示词、防偏差措施、与人工评分的对齐校准流程',
      '任务4:写一份假想的评测报告模板,以及发现 Top3 问题的改进建议',
    ],
    scoring: '评分点:rubric 可操作性/抽样科学性/防偏差设计/报告可读性。这是字节评测岗/腾讯/阿里高频真题形态',
  },
  {
    name: '笔试C·Agent 原型(48小时·带回家)',
    scenario: '用 Claude Code / Codex / Cursor 做一个你垂直领域的迷你 Agent 产品',
    tasks: [
      '任务1:一句话需求 + 目标用户 + 完成标准(先写评测再写代码)',
      '任务2:实现并部署到可访问 URL(可以简单,但必须真能跑)',
      '任务3:附 10 个真实测试 case 的运行记录(成功/失败都要)',
      '任务4:README 写清:架构图、上下文设计、工具清单、已知局限、下一步',
    ],
    scoring: '评分点:需求判断(做的东西有没有人要)/完成度(可运行>功能多)/诚实度(如实记录失败比全绿更加分)/工程品味。这就是 Kimi「作品集比简历更能代表你」的直接预演',
  },
];

// ===== 深入资料/论文/开源项目 =====
const RESOURCES = [
  { type: '官方工程博客(最优先)', items: [
    { name: 'Anthropic: Building Effective Agents', url: 'https://www.anthropic.com/engineering/building-effective-agents', why: 'Agent 设计模式的权威总结:workflow vs agent、常见反模式。面试引用率最高' },
    { name: 'Anthropic: Effective Context Engineering for AI Agents', url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents', why: 'Context Engineering 最系统的一篇,Kimi/字节 JD 里的这个词的最佳注解' },
    { name: 'Anthropic: Writing Tools for Agents', url: 'https://www.anthropic.com/engineering/writing-tools-for-agents', why: '工具 schema 设计官方指南,MCP 面试的理论底座' },
    { name: 'OpenAI: A Practical Guide to Building Agents', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf', why: 'OpenAI 官方 Agent 实操指南,与 Anthropic 版对照读' },
    { name: 'Manus 团队: Context Engineering for AI Agents 博客', url: 'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus', why: 'Manus 一手工程实践:KV-Cache、文件系统当上下文、认知压缩' },
  ]},
  { type: '论文(面试可引用)', items: [
    { name: 'ReAct: Synergizing Reasoning and Acting (2022)', url: 'https://arxiv.org/abs/2210.03629', why: 'Agent 循环的奠基论文,讲 Agent 架构必引' },
    { name: 'Lost in the Middle (2023)', url: 'https://arxiv.org/abs/2307.03172', why: '上下文位置效应,解释为什么上下文组织是工程问题' },
    { name: 'Judging LLM-as-a-Judge (2023)', url: 'https://arxiv.org/abs/2306.05685', why: 'LLM 评测方法的开山作,评测岗必读' },
    { name: 'Retrieval-Augmented Generation survey (2024)', url: 'https://arxiv.org/abs/2312.10997', why: 'RAG 综述,知识注入决策的依据' },
    { name: 'Toolformer / Function Calling 相关研究', url: 'https://arxiv.org/abs/2302.04761', why: '模型怎么学会用工具,理解工具调用能力边界' },
    { name: 'Voyager / Generative Agents', url: 'https://arxiv.org/abs/2305.16291', why: '终身学习 Agent / 多 Agent 社会,产品想象力的素材库' },
  ]},
  { type: '开源项目(学+抄+贡献)', items: [
    { name: 'modelcontextprotocol (MCP 官方)', url: 'https://github.com/modelcontextprotocol', why: '工具协议事实标准,亲手写一个 server 是最快的学习' },
    { name: 'OpenAI Evals', url: 'https://github.com/openai/evals', why: '评测框架参考实现,笔试B的脚手架' },
    { name: 'Langfuse', url: 'https://github.com/langfuse/langfuse', why: '开源 LLM 可观测性:trace/评测/数据集管理,生产级评测体系长什么样' },
    { name: 'LangChain / LlamaIndex', url: 'https://github.com/langchain-ai/langchain', why: 'Agent 框架双雄,JD 多次点名 LangChain;读源码理解抽象层次' },
    { name: 'AutoGen (微软)', url: 'https://github.com/microsoft/autogen', why: '多 Agent 协作框架,「多Agent vs 单Agent」面试题的实现参考' },
    { name: 'lobehub/lobe-chat', url: 'https://github.com/lobehub/lobe-chat', why: '开源 AI 聊天产品完整实现,看产品功能怎么映射到模型能力' },
    { name: 'vLLM', url: 'https://github.com/vllm-project/vllm', why: '推理引擎,理解延迟/成本/吞吐的工程约束从哪来' },
  ]},
  { type: '产品拆解素材', items: [
    { name: 'Human Atlas (ashebytes)', url: 'https://x.com/ashebytes/status/2096221988763173186', why: '一句话意图→真实软件的当代形态基线,AI Taste 面试的谈资' },
    { name: 'awesome-gpt-6-astra / awesome-claude-fable-5-1', url: 'https://github.com/Anil-matcha/awesome-gpt-6-astra', why: '「一句意图→真实软件/代码/媒体/设备」案例库' },
    { name: 'system_prompts_leaks', url: 'https://github.com/asgeirtj/system_prompts_leaks', why: '各家系统提示词研究:看顶级产品怎么设计上下文(只学机制不抄内容)' },
  ]},
];

// ===== GitHub 作品集结构 =====
const PORTFOLIO_STRUCTURE = {
  repo: 'ai-pm-portfolio (GitHub 个人主页置顶)',
  structure: [
    { dir: 'README.md', what: '你是谁/你的 AI 产品观(3句话)/3个代表作一句话+链接/联系方式。第一屏决定面试官看不看后面' },
    { dir: '01-agent-product/', what: '代表作1:垂直领域 Agent 产品。必备:可访问URL、架构图、评测报告(50+case)、失败案例分析、迭代记录' },
    { dir: '02-eval-framework/', what: '代表作2:评测体系。rubric、测试集、LLM-as-a-Judge实现、基准对比报告。对应8家JD最高频差异化要求' },
    { dir: '03-product-teardowns/', what: '3-5篇产品深度拆解(Claude Code/Manus/Kimi等):交互范式/失败模式/指标设计/改进建议' },
    { dir: '04-prototypes/', what: 'vibe coding 原型集:每个一个README+demo GIF+一句话学习点。展示「野心不受限于自己亲手能执行什么」' },
    { dir: '05-writing/', what: '观点文章:人机交互范式/模型能力边界/垂直领域判断。证明你有「自己的答案」' },
  ],
  principles: [
    '每个项目第一行写「用户是谁、解决什么问题、怎么验证有效」——不是功能清单',
    '失败案例诚实展示>Kimi AI Taste 岗明说「作品集比简历更能代表你」',
    '可运行 > 功能多:一个真能跑的小东西赢过一个跑不起来的大东西',
    '带评测数据:没有数字的作品在 AI PM 面试里说服力减半',
  ],
};

// ===== 简历重点 =====
const RESUME_FOCUS = {
  headline: [
    '第一行就定位:AI Native 产品经理,垂直领域=你的领域,代表作=有数据的作品',
    '8家 JD 共同的隐藏门槛:「重度用户+做过+拆过」——简历每一条都要能回答「你的第一手经验是什么」',
    'Vibe coding 已成硬通货(DeepSeek 明文):作品集链接放简历最显眼处',
  ],
  order: [
    '1. 一句话定位+代表作(带数据)',
    '2. 核心技能(Context Engineering/Evaluation/Agent架构/Prompt/数据/Vibe Coding 六大件)',
    '3. 项目经历(AI项目优先,每个含技术取舍叙事)',
    '4. 作品集与写作(GitHub/拆解报告)',
    '5. 工作经历(倒序,量化结果)',
    '6. 教育背景(DeepSeek 看知名高校本科,如实放)',
  ],
  diffByCompany: {
    kimi: 'Kimi 全线强调 Agent 重度使用+垂直领域深度+作品集。AI Taste 岗直接说「作品集比简历更能代表你」——投 Kimi 作品集权重最高',
    openai: '英文简历;5年+门槛;为开发者构建的经验(API/SDK直觉);国际化叙事',
    anthropic: '英文简历;偏好 8 年+/创始人经历;实验设计与证据决策权重高;安全意识是隐性加分',
    bytedance: '最看重「深入使用 AI 编程助手」和落地执行速度;校招岗对概念理解(MCP/Browser Use)要求明确;Aime 岗是 Agent 平台方向最佳敲门砖',
    tencent: '平台型产品思维+企业场景理解;MCP/API 概念明确点名;跨团队推动力叙事',
    alibaba: 'Qoder 系列全部指向 Agent 承接复杂任务/交付真实成果;数据意识和结果导向;英语阅读',
    deepseek: '门槛最低但标准最高:「用过、拆过」+产品品味+知名高校;Harness 方向是全网稀缺的 Agent Harness PM 岗',
    manus: '小团队,「品味」>履历;0-1 经验;一手信息需官网核实(谨防虚假招聘)',
  },
};

// ===== 16道面试题完整参考答案(顺序与渲染一致) =====
const ANSWERS = [
  // Q1 为什么做/什么时候用/为什么非AI不可
  `答题骨架(以 Claude Artifacts 为例):
①为什么做——先答「对照组」:没有它时,用户让 AI 写代码/做分析 → 拿到一坨文本 → 复制到本地 → 手动跑 → 报错再回来问。价值实现链条断在「复制粘贴」这一步,大量用户死在半路。Artifacts 把「生成→查看→迭代」收进产品内闭环。
②什么时候用——凡是「生成物需要被执行/查看/继续改」的场景:代码、网页、图表、文档。触发信号可从消息特征识别:「给我一个…」「做一个…」。
③为什么非 AI 不可——三问判断法:任务需要生成而非检索?(搜索引擎给不了)需要多轮迭代?(静态模板给不了)依赖上下文个性化?(通用工具给不了)。三个都中,才是 AI 不可替代。面试官在验证你能不能把「模型能力」翻译成「用户价值」,而不是功能罗列。`,
  // Q2 什么交给Agent/什么留给用户
  `五个判断维度(给出框架比给结论重要):
①可逆性:写邮件草稿(可逆)→Agent;点发送(不可逆)→人。
②错误成本:成本越高越靠近人;金额/外发/删除类必须人确认。
③置信度:结果可自校准/可程序验证的才自动,否则降级为「建议+一键采纳」。
④掌控感:身份认同相关决策(署名作品、发给老板的消息)即使 Agent 做得更好也留给人。
⑤时效性:实时且容错高的(会议降噪)自动;反之留人。
产品落法:三档位——全自动 / 自动+通知 / 建议+确认;新用户默认第二档,信任积累后逐步升档。这题答出「档位迁移」的设计感,就是 Kimi Work 岗要的「人机协作交互判断」。`,
  // Q3 Agent边界与失败案例
  `必须准备 3 个自己的真实案例,这里给示范:
①长任务漂移:让 Claude Code 做两小时重构,中途它忘了最初约束(如「不改公开 API」),改了不该改的文件。根因:上下文超长后早期指令权重衰减(Lost in the Middle 效应)。我的解法:硬约束写进常驻配置文件(CLAUDE.md 类机制)+ 阶段性自查清单。
②工具幻觉:模型调用不存在的参数或传格式错误的值。解法:工具 schema 严格校验 + 把校验错误完整回喂,模型大多能自纠。
③假完成:Agent 报「已完成」但没验证。解法:完成契约=必须贴出验证证据(测试输出/文件读回),无证据不算完成。
高分关键:案例真实、有根因、有你自己的 workaround——背概念的人这题立刻露馅。`,
  // Q4 Demo很酷但没用
  `①先定义「有用」:用户用完一次还会回来(留存)+ 任务真实完成(不是看起来完成)。
②举例:「AI 一键生成 PPT」的多数实现——生成瞬间很惊艳,但内容空洞,用户真拿去用时要花更多时间改,改完发现不如自己写。Demo 效应来自生成瞬间的多巴胺,真实价值来自产出的可用性。
③判断方法(产品动作):a. 对照组——没有这个功能时用户怎么解决?AI 版把成本降到 1/10 以下吗?b. 数据——灰度看 7 日留存、完成后的下游行为(下载/分享/二次编辑率)。只有「哇」没有「用」的功能,就是腾讯 JD 说的「为了 AI 而 AI」。`,
  // Q5 Context Engineering + 50轮会话
  `①区别:好 Prompt 是把「一次指令」说清楚;Context Engineering 是跨轮次、跨组件的「有限预算分配问题」——上下文窗口就是内存,系统提示/工具定义/历史/检索结果/中间状态全在抢这块内存。Kimi JD 把这个词和 Prompt 并列,考的就是这个层次差。
②50 轮会话设计:分层记忆——近 3-5 轮保原文(近期意图最相关);更早的滚动摘要(压缩为决策+事实);用户画像与长期目标常驻;按当前话题相关性检索注入(「需要时才取」代替「全塞入」)。
③压缩时机与反模式:预算超 70% 触发压缩;摘要必须保留用户显式偏好与未完成任务。三大反模式:无差别截断(丢的恰好是最早的目标)、摘要丢用户偏好、工具返回全量塞回(应只留结论)。`,
  // Q6 LLM-as-a-Judge
  `①设计:rubric 先行——每个维度 1-5 分锚点描述,先写清楚「3 分长什么样」再写 5 分(防止裁判放水);盲评(不暴露答案来源);成对比较与绝对打分结合。
②已知偏差与对策:位置偏差(A 顺序赢率高→交换顺序复评取一致);长度偏差(提示裁判「长度不等于质量」+对超长答案降权);自我偏好(裁判偏爱同家族模型→换异族裁判或 ensemble);宽松漂移(评久了分数膨胀→中途插已知答案的基准题)。
③校准闭环:人工抽检 10%,裁判与人一致率 <70% 回去修 rubric 锚点而不是换个裁判模型了事;边缘 case(两个都好/都差)单独人工。
这题是字节评测岗/腾讯的核心考点,能说出「修 rubric 优先于换模型」的实操经验直接进 top 候选池。`,
  // Q7 幻觉分层防护
  `正确姿态:不追求消灭幻觉(做不到),设计「幻觉发生时用户损失最小」的体验。分三层:
事前:能工具获取的事实绝不靠生成——计算用代码执行、事实用检索/搜索;给模型「不确定就说不知道」的显式许可与输出格式。
事中:回答带可点击引用来源;低置信度场景降级为「我查到这些,你看哪个对」;关键数字/引用强制回链验证后才展示。
事后:用户纠错回流 badcase 库;高频幻觉场景建专项评测集守护(回归不退化);外发内容加人审或规则过滤。
加分句:把「模型说不知道」设计成正向体验(诚实>圆满),这本身就是产品审美题。`,
  // Q8 RAG vs 微调
  `决策三问:
①改的是什么:知识内容(会变的事实)→RAG;行为模式/输出格式/风格→微调或系统提示;只是语气→系统提示就够,别动微调。
②更新频率:每天变(竞品价格、产品文档)→RAG;一年不变(行业术语、固定流程)→可微调。
③预算与延迟:微调一次性贵但推理快、省 token;RAG 工程简单但有检索延迟和知识库运维成本。
企业客服预算有限的标准答案:先 RAG——90% 场景够用且知识可随时更新;只有出现「合规要求固定话术」或「想用小模型省推理成本」才考虑微调。
常见错误点破(面试加分):用微调注入知识——更新不动、成本高、还会灾难性遗忘。`,
  // Q9 北极星指标+防刷
  `①北极星候选:任务完成率(用户视角的真实价值),但单一指标必被扭曲(Goodhart 定律),必须配护栏。
②防刷分层:完成分三档——完全自动完成(0 干预)/人机协作完成(≤N 次干预)/失败;只算前两档。
③多信号确认:Agent 自报完成不算数,需用户确认或下游行为佐证(采纳率/下载/不再追问),加人工抽检兜底。
④指标成对出现:北极星=任务完成率;护栏=人工干预率(自动化纯度)、单任务成本(经济性)、7 日复用率(真实价值)。DeepSeek Harness 方向的 JD 原话「Agent 是否真的在更多场景更深入地帮助到更多的人」就是要你定义这种可统计的标准。`,
  // Q10 AI会议助手架构
  `按时间轴拆,核心取舍是「实时性 vs 质量」:
会前(异步,大模型):读日历与参会人、预读共享材料,生成议程 + 我方 talking points。
会中(实时约束):转写走低延迟 ASR;说话人分离;关键决策点实时高亮(用户低头也能跟上)。转写有 3-5 秒延迟,所以实时层只做轻量(当前话题关键词),重活全放会后。
会后(异步,大模型):纪要 + 行动项自动到日历;识别「提到但没结论」的悬而未决项单独标出。
失败恢复:ASR 错词→领域词表 + 用户修正进记忆;纪要归属不确定→标置信度而非硬编;断网→本地缓存续传。
高分点:主动说出「我把必须实时的压缩到最小,其余异步用更强模型」——这就是 Anthropic/腾讯 JD 要的「延迟、失败率约束下的取舍」。`,
  // Q11 MCP工具链设计
  `工具清单(3-4 个,不贪多):
①search_updates(competitor, since) → 结构化变更列表
②diff_page(competitor, page) → 页面变更摘要
③write_report(section, content) → 追加周报
④send_digest(channel) → 发送
真正做过的人才答得出的设计细节:
a. 工具描述要写「何时不该用」,不只写「做什么」——模型选错工具多数是描述问题;
b. 返回值宁小勿大:大返回吃光上下文,全文落盘、只返回摘要+关键数字,让模型按需再读;
c. 长任务链可断点续跑:检查点落盘,失败从断点恢复而非重跑;
d. 错误信息可自解释:报错里带修复建议,模型能自救。
这就是 Anthropic《Writing Tools for Agents》的实践版,面试引用即加分。`,
  // Q12 多Agent vs 单Agent
  `拆分有真实价值的三种情况:
①上下文隔离——研究任务与写作任务互不污染,各自窗口干净;
②真并行——独立子任务同时跑,省墙钟时间;
③专业化——不同角色配不同系统提示与工具集。
代价:通信开销(结果序列化丢细节)、一致性风险(两个 Agent 对同一事实判断不同)、调试复杂度指数上升。
判断标准:先用「单 Agent + 好工具」跑通;只有观察到 ①上下文互相污染 ②任务天然可并行且省时显著 ③无关工具干扰推理——才拆。
反模式点名(高分):为了架构好看而拆——「产品经理 Agent + 程序员 Agent + 测试 Agent」大部分场景不如一个带全套工具的 Agent。AutoGen 论文与工业实践都支持这个结论。`,
  // Q13 成本优化
  `先算账再优化(面试官想听「我知道钱花在哪」):
成本 = 输入 token×单价 + 输出 token×单价 × 轮次。拆完逐项打:
①模型分级路由:简单步骤(格式化/判断/摘要)用小模型,关键推理才上大模型——通常省 50%+;
②上下文压缩:历史滚动摘要、工具返回只留结论——直接砍输入 token;
③缓存:prompt cache 命中系统提示+工具定义(这是输入大头);重复问题结果缓存;
④预算熔断:单任务设预算上限,超了降级为「完成关键步骤+给用户手动收尾指引」,而不是失败;
⑤产品手段:引导用户拆小任务(限任务范围)、非实时任务挪到低峰批处理。
收尾句:成本优化的尽头是产品决策——「这个任务本来该全自动吗」比「怎么便宜地跑」更根本。`,
  // Q14 产品哲学差异
  `每个判断落到具体交互细节,忌套话:
ChatGPT:大众化全能助手。记忆+自定义指令把「个性化」做成产品资产;GPTs 生态是平台化野心;交互哲学=对话万能。
Claude:长任务与「交付物」哲学。Artifacts 把结果变成可执行可迭代的实体;Projects/MCP 面向专业工作流;气质是「安静的强」。
Cursor:不造新入口,嵌入开发者已有工作流(IDE);Tab 补全预测的是下一个 diff 动作而非纯文本——这个细节能证明你真用过。
Manus:异步委托——任务扔给它、人去看结果;过程可回放是信任机制的核心;单会话即一台沙箱计算机。
Coze:低代码编排,把 Agent 搭建能力下放给非开发者,模板+生态飞轮。
高分句式:「我最认同 XX 的 YY 设计,因为…;但我觉得 ZZ 是败笔,因为…」——有自己的答案,不是复述。`,
  // Q15 下一代人机交互范式
  `我的判断:从「对话式」走向「委托式 + 渐进披露」。三个论点:
①主动性是双刃剑:Proactive Agent 最大风险不是做错而是「打扰」——用户没求助时出现=打扰。边界设计:只在「用户显式设定目标 + 可逆操作 + 高置信度」三者同时满足时主动。
②信任=可解释+可撤销:Agent 干了什么要可回放(Manus 过程回放是范本);「任何动作可撤销」比「次次做对」更根本(Anthropic 的 approval 机制同理)。
③Computer Use:机会是把所有存量软件变成 Agent 的工具;坑是脆弱(UI 一改就断)、慢、安全(浏览器凭证)。落地节奏:先把「读屏幕理解状态」做稳(观察),再放开「操作」。
反共识加分项:「下一代交互」未必更自然语言化——专业用户反而需要结构化控制(权限/预算/范围的显式旋钮)。自然语言留给意图,结构化留给控制。`,
  // Q16 垂直Agent先出大产品
  `论证框架(匹配度,不是猜风口):大产品 = 任务价值高 × Agent 能力已够 × 容错空间大 × 工具/数据可得。
用尺子量:
①vibe coding/开发:任务价值极高 + 工具链全数字化 + 可自我验证(编译/测试自证)——已爆发,第一个大产品就是它(Claude Code/Cursor 已证明);
②客服/销售:价值高、流程结构化,但错误成本高(说错话赔钱)→ 以人机协作形态先落地;
③科研:价值极高但验证周期长——Anthropic Claude Science 在赌十年;
④游戏/设计:创作容错大(不满意再改),体验惊艳但付费链路长;
⑤金融:价值高但强监管,最后规模化。
结论:「可验证的数字领域」(代码/数据/文档)先出大产品,因为它是唯一能自我证实的领域。
面试动作:把这套尺子套到你的垂直领域现场演算一遍——这正是 Kimi 垂直 Owner 岗的考法。`,
];

// ===== 独立项目实操指南(怎么从零做出来) =====
const PROJECT_GUIDES = [
  {
    name: '项目1 · 垂直领域 Agent 产品',
    time: '2-3 周(每天 2-3 小时)',
    why: '对应 Kimi「能自己用 Agent 搭出原型验证想法」+ DeepSeek「vibe coding 写代码」+ 阿里「Agent 承接复杂任务交付真实成果」。这是作品集的主打,也是面试的主叙事来源。',
    steps: [
      { t: '第0步 · 选领域(半天)', d: '选你简历上最有积累的领域(这就是投 Kimi 垂直 Owner 的入场券)。标准:你能不查资料列出该领域用户的 10 个真实任务和它们现在的解决方式。' },
      { t: '第1步 · 一句话定义(半天)', d: '「帮【谁】完成【什么真实任务】,完成标准是【可验证的】」。例:帮独立开发者监控自家产品的用户反馈,每周生成按影响面排序的改进清单。完成标准=清单里每条有真实反馈数据支撑。' },
      { t: '第2步 · 评测先行(1天)【反直觉但最值钱】', d: '先写 10 个真实测试 case + 期望结果,再写代码。面试时「评测先于开发」这个方法论本身就能讲 10 分钟——这恰恰是 8 家 JD 里评测体系的加分项。' },
      { t: '第3步 · 搭骨架(2-3天)', d: '用 Claude Code/Codex 结对实现:①工具层 3-5 个 function calling/MCP 工具(每个描述写清「何时用/何时不用」);②上下文设计(系统提示+分层记忆);③交付形态(网页或报告文件)。让 AI 写代码,你做产品决策——这本身就是 vibe coding 的面试素材。' },
      { t: '第4步 · 部署到可访问(1天)', d: '静态托管用 Vercel/Cloudflare Pages(免费);定时任务用 GitHub Actions。「别人能打开能跑」是底线——Kimi 原话「作品集比简历更能代表你」。' },
      { t: '第5步 · 跑 50+ case 评测(2天)', d: '记录:成功率、失败模式分类、人工干预次数、单任务成本。这批数据就是评测报告,也是简历上数字的来源。' },
      { t: '第6步 · 迭代最大失败模式(2-3天)', d: '挑 Top1 失败原因修(例:上下文丢失→加检查点落盘),重跑评测对比 Δ。有 Δ 的迭代故事=面试的黄金叙事。' },
      { t: '第7步 · 写 POSTMORTEM(1天)', d: '诚实记录失败案例与你的解法。AI Taste 岗的潜台词:展示判断力比展示完美更重要。' },
    ],
    resumeLine: '简历表述模板:「独立开发 XX Agent(垂直领域):50 case 评测完成率 X%,经 N 轮迭代从 X%→Y%,单任务成本 ¥Z;技术栈:Claude Code 结对开发 + MCP 工具 + 评测集自建」',
  },
  {
    name: '项目2 · 评测体系(LLM-as-a-Judge 框架)',
    time: '1-2 周',
    why: '8 家 JD 中最高频的差异化要求:Kimi 有独立 Eval 岗、字节 TikTok 评测岗点名 LLM-as-a-Judge/Ground Truth、腾讯要「效果评测集构建」、阿里要「覆盖任务过程与结果质量的评估指标体系」。一个自建评测框架 = 秒杀 80% 只会说「关注数据」的候选人。',
    steps: [
      { t: '第1步 · 选任务类型(半天)', d: '选「容易判好坏、难判分数」的生成任务:简历优化/营销文案/摘要/翻译。别选有标准答案的(那不叫评测叫测试)。' },
      { t: '第2步 · 写 rubric(1天)', d: '3-5 个维度,每个维度写 1/3/5 分锚点描述。关键:先写 3 分(及格线)再写 5 分——3 分锚点模糊是裁判放水的头号原因。' },
      { t: '第3步 · 构建测试集 50 条(1-2天)', d: '分层抽样:任务难度 × 输入类型 × 边界 case(空输入/超长/方言)。每条附「参考要点」而非标准答案。记录抽样方案——字节评测岗考「抽样如何反映线上真实分布」。' },
      { t: '第4步 · 实现 Judge(2天)', d: '系统提示放 rubric 全文;强制 JSON 输出(分数+理由+原文引用);防偏差三件套:位置交换复评、长度惩罚提示、中途插基准题。' },
      { t: '第5步 · 人工校准(1天)', d: '自己人工评 10 条,算与 Judge 的一致率;<70% 回去修 rubric 锚点(不是换裁判模型)。这步区分「做过」和「抄过」。' },
      { t: '第6步 · 基准报告(1-2天)', d: '2-3 个模型 × 50 case:雷达图对比 + 每维度失败案例归因 + 改进建议。发布到 GitHub,面试直接打开讲。' },
    ],
    resumeLine: '简历表述模板:「自建 XX 任务 LLM 评测框架:rubric 5 维度/50 case 分层抽样/LLM-as-a-Judge 防偏差设计,人工校准一致率 X%;基准对比 GPT-4o vs Claude vs GLM 三模型并输出归因报告」',
  },
  {
    name: '项目3 · 产品深度拆解报告集',
    time: '每篇 1-2 天,共 3-5 篇',
    why: 'DeepSeek 原话「不只是看过,而是自己用过、拆过」的直接证据;Kimi Innovation Explorer 加分项「对 ChatGPT、Claude、Cursor、Perplexity 长期深度观察」。发布后是面试的随身弹药库。',
    steps: [
      { t: '第1步 · 选品', d: '选你最常用的(Claude Code/Manus/Kimi/Cursor)——常用才有真细节,拆解的灵魂是「只有真用户才知道的断点」。' },
      { t: '第2步 · 还原 Agent Loop', d: '画图:输入处理 → 上下文组装 → 工具选择 → 执行 → 中间状态管理 → 交付。标出每步的上下文预算与延迟。' },
      { t: '第3步 · 找 3 个体验断点', d: '真实使用中卡住/困惑/失败的瞬间,记录复现步骤。例:Manus 任务失败后的重试语义、Claude Code 长任务的约束遗忘。' },
      { t: '第4步 · 根因归因(核心)', d: '每个断点判断:是模型能力不够,还是产品设计问题?能区分这两者 = AI PM 与普通 PM 的分水岭,面试官就在等这句话。' },
      { t: '第5步 · 改进方案+指标', d: '每个断点给:交互设计 + 模型能力需求 + 评测方法 + 3 个指标与目标值。' },
      { t: '第6步 · 发布', d: '知乎/公众号/GitHub 三发。面试时「我写过它的深度拆解」比「我用过它」高一个量级。' },
    ],
    resumeLine: '简历表述模板:「深度拆解 Claude Code/Manus/Kimi 交互范式与失败模式(共 X 篇,知乎阅读 X);提出 XX 断点的改进方案并设计验证指标」',
  },
];
