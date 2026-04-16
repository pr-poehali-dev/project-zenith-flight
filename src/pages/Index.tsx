import { useState } from "react";
import Icon from "@/components/ui/icon";

const timelineData = [
  {
    year: "1971",
    virus: {
      name: "Creeper",
      desc: "Первая самовоспроизводящаяся программа. Распространялась по сети ARPANET, выводя сообщение «I'm the creeper, catch me if you can!»",
    },
    antivirus: {
      name: "Reaper",
      desc: "Первая программа для удаления вирусов — специально создана для удаления Creeper с заражённых узлов ARPANET.",
    },
  },
  {
    year: "1982",
    virus: {
      name: "Elk Cloner",
      desc: "Первый вирус для персональных компьютеров (Apple II). Распространялся через дискеты и выводил стихотворение на 50-й загрузке.",
    },
    antivirus: {
      name: "—",
      desc: "Специализированных антивирусов ещё не существовало. Защита сводилась к физическому контролю за дискетами.",
    },
  },
  {
    year: "1986",
    virus: {
      name: "Brain",
      desc: "Первый вирус для IBM PC. Написан пакистанскими программистами — братьями Фарук Альви — изначально для защиты своего ПО от пиратства.",
    },
    antivirus: {
      name: "Andy Hopkins (CHK4BOMB)",
      desc: "Одна из первых утилит для обнаружения вирусов — анализировала загрузочные секторы и поведение программ.",
    },
  },
  {
    year: "1988",
    virus: {
      name: "Червь Морриса",
      desc: "Первый масштабный сетевой червь. Заразил ~6000 компьютеров ARPANET (10% сети), нанёс ущерб до $100 млн. Создан студентом Робертом Моррисом.",
    },
    antivirus: {
      name: "John McAfee — VirusScan",
      desc: "Джон Макафи основал McAfee Associates и выпустил VirusScan — один из первых коммерческих антивирусов для массового рынка.",
    },
  },
  {
    year: "1991",
    virus: {
      name: "Michelangelo",
      desc: "Вирус-«бомба», активировавшийся 6 марта (день рождения Микеланджело). Вызвал массовую панику — СМИ предрекали заражение миллионов ПК.",
    },
    antivirus: {
      name: "Norton AntiVirus",
      desc: "Symantec выпускает Norton AntiVirus — продукт, который на десятилетия станет синонимом антивирусной защиты для рядового пользователя.",
    },
  },
  {
    year: "1999",
    virus: {
      name: "Melissa",
      desc: "Первый вирус-червь, распространявшийся через email. За 72 часа заразил 100 000+ компьютеров, перегрузив почтовые серверы по всему миру.",
    },
    antivirus: {
      name: "Эвристический анализ",
      desc: "Антивирусные компании начинают внедрять эвристику — возможность обнаруживать неизвестные угрозы по поведению, а не только по сигнатурам.",
    },
  },
  {
    year: "2000",
    virus: {
      name: "ILOVEYOU",
      desc: "Один из самых разрушительных вирусов в истории. За один день заразил 50+ млн ПК, нанеся ущерб $10 млрд. Распространялся как письмо с «признанием в любви».",
    },
    antivirus: {
      name: "Kaspersky Lab",
      desc: "Лаборатория Касперского выходит на мировой рынок, предлагая комплексную защиту. Россия становится одним из центров антивирусных разработок.",
    },
  },
  {
    year: "2004",
    virus: {
      name: "MyDoom",
      desc: "Самый быстро распространяющийся email-червь в истории. На пике заражал 1 из каждых 12 писем в интернете, замедляя глобальный трафик на 10%.",
    },
    antivirus: {
      name: "Поведенческий анализ",
      desc: "Появляются первые системы HIPS (Host Intrusion Prevention System) — мониторинг поведения программ в реальном времени вместо сравнения с базой сигнатур.",
    },
  },
  {
    year: "2010",
    virus: {
      name: "Stuxnet",
      desc: "Первое кибероружие государственного уровня. Целенаправленно атаковало ядерные центрифуги Ирана, открыв эпоху кибервойн между государствами.",
    },
    antivirus: {
      name: "Sandbox-технологии",
      desc: "Антивирусы начинают запускать подозрительные файлы в изолированной «песочнице» для безопасного анализа поведения до его выполнения на реальной системе.",
    },
  },
  {
    year: "2017",
    virus: {
      name: "WannaCry",
      desc: "Глобальная эпидемия вируса-шифровальщика. За 4 дня заразил 200 000+ ПК в 150 странах, парализовав больницы, банки и заводы. Ущерб — $4 млрд.",
    },
    antivirus: {
      name: "AI-антивирусы",
      desc: "Компании Cylance, CrowdStrike и другие внедряют машинное обучение для предсказания угроз. ИИ анализирует миллиарды файлов, выявляя паттерны атак.",
    },
  },
  {
    year: "2024",
    virus: {
      name: "AI-генерируемые угрозы",
      desc: "Злоумышленники используют ИИ для создания полиморфных вирусов, автоматической генерации фишинговых писем и обхода антивирусных систем.",
    },
    antivirus: {
      name: "Zero Trust & XDR",
      desc: "Современная парадигма: никому не доверяй по умолчанию. Extended Detection & Response (XDR) объединяет защиту конечных точек, сети и облака в единую систему.",
    },
  },
];

export default function Index() {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#timeline", label: "Хронология" },
    { href: "#about", label: "Развитие угроз" },
    { href: "#defense", label: "Методы защиты" },
    { href: "#sources", label: "Источники" },
  ];

  return (
    <main className="min-h-screen bg-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            VIRUS<span className="text-red-600">LOG</span>
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          {/* Burger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-black ${mobileMenuOpen ? "max-h-64" : "max-h-0 border-t-0"}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-4 text-sm uppercase tracking-widest border-b border-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              <span>{link.label}</span>
              <span className="text-neutral-400 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ВИРУС
              <br />
              <span className="text-red-600">vs</span>
              <br />
              АНТИВИРУС
            </h1>
            <p className="text-xl max-w-xl">
              Полвека противостояния: от первого самовоспроизводящегося кода 1971 года до ИИ-угроз сегодняшнего дня. Параллельная история атаки и защиты.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-end justify-center">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
                {/* Grid lines decoration */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute top-0 bottom-0 border-l border-white" style={{ left: `${(i + 1) * 100 / 7}%` }} />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-white" style={{ top: `${(i + 1) * 100 / 7}%` }} />
                  ))}
                </div>
                {/* Corner marks */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-red-600" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-red-600" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-600" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-600" />
                {/* Main content */}
                <div className="text-center relative z-10">
                  <div className="text-red-600 text-[9rem] font-bold leading-none tracking-tighter">53</div>
                  <div className="text-white text-base uppercase tracking-[0.3em] mt-3">года истории</div>
                  <div className="mt-6 flex justify-center gap-2">
                    {["1971", "1988", "2000", "2010", "2024"].map((y) => (
                      <span key={y} className="text-neutral-600 text-xs font-mono">{y}</span>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-center gap-2">
                    {["1971", "1988", "2000", "2010", "2024"].map((_, i) => (
                      <span key={i} className={`w-2 h-2 inline-block ${i % 2 === 0 ? "bg-red-600" : "bg-neutral-700"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs uppercase tracking-wider text-center leading-tight px-2">1971–<br/>2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-0 mt-20 border-t border-black">
          <div className="border-r border-black pt-8 pr-8">
            <div className="text-5xl font-bold tracking-tighter">1B+</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">заражений WannaCry</div>
          </div>
          <div className="border-r border-black pt-8 px-8">
            <div className="text-5xl font-bold tracking-tighter text-red-600">450K</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">новых вирусов в день</div>
          </div>
          <div className="pt-8 pl-8">
            <div className="text-5xl font-bold tracking-tighter">$8T</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">ущерб от киберугроз 2023</div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">

          {/* Section header */}
          <div className="relative mb-16 overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-white" style={{ left: `${(i + 1) * 100 / 9}%` }} />
              ))}
              <div className="absolute left-0 right-0 border-t border-white" style={{ top: "50%" }} />
            </div>
            <div className="relative flex items-end justify-between">
              <div>
                {/* Corner marks */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 border-t-2 border-l-2 border-red-600" />
                  <span className="text-neutral-600 text-xs uppercase tracking-widest font-mono">1971 — 2024</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">ХРОНОЛОГИЯ</h2>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-neutral-600 text-xs uppercase tracking-widest font-mono">{timelineData.length} событий</span>
                  <div className="w-4 h-4 border-b-2 border-r-2 border-red-600" />
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-3 text-sm uppercase tracking-widest pb-2">
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-600 inline-block"></span>
                  Угроза
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-neutral-600 inline-block"></span>
                  Защита
                </span>
              </div>
            </div>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-0 mb-2">
            <div className="col-span-2 md:col-span-1">
              <span className="text-xs uppercase tracking-widest text-neutral-600">Год</span>
            </div>
            <div className="col-span-5 px-4">
              <span className="text-xs uppercase tracking-widest text-red-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 inline-block"></span>
                Угроза
              </span>
            </div>
            <div className="col-span-5 px-4 text-right">
              <span className="text-xs uppercase tracking-widest text-neutral-500 inline-flex items-center gap-2">
                Защита
                <span className="w-2 h-2 bg-neutral-600 inline-block"></span>
              </span>
            </div>
          </div>

          {/* Timeline entries */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`grid grid-cols-12 gap-0 border-t cursor-pointer transition-all duration-200 group ${
                  activeYear === item.year
                    ? "bg-neutral-900 border-neutral-500"
                    : "border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900"
                }`}
                onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
              >
                {/* Year column */}
                <div className="col-span-2 md:col-span-1 py-6 pr-4 flex flex-col items-start justify-between">
                  <span className="text-red-600 font-bold text-xl tracking-tighter leading-none">{item.year}</span>
                  <span className="text-neutral-800 text-xs font-mono group-hover:text-neutral-600 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Virus column */}
                <div className={`col-span-5 py-6 px-4 border-l transition-colors duration-200 ${activeYear === item.year ? "border-red-900" : "border-neutral-800 group-hover:border-neutral-700"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-red-600 inline-block flex-shrink-0"></span>
                    <div className="text-xs uppercase tracking-widest text-red-600">Угроза</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{item.virus.name}</h3>
                  <p
                    className={`text-neutral-400 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                      activeYear === item.year ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:max-h-40 md:opacity-100"
                    }`}
                  >
                    {item.virus.desc}
                  </p>
                </div>

                {/* Antivirus column */}
                <div className={`col-span-5 py-6 px-4 border-l transition-colors duration-200 text-right ${activeYear === item.year ? "border-neutral-600" : "border-neutral-800 group-hover:border-neutral-700"}`}>
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Защита</div>
                    <span className="w-1.5 h-1.5 bg-neutral-600 inline-block flex-shrink-0"></span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{item.antivirus.name}</h3>
                  <p
                    className={`text-neutral-400 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                      activeYear === item.year ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:max-h-40 md:opacity-100"
                    }`}
                  >
                    {item.antivirus.desc}
                  </p>
                </div>

                {/* Expand indicator (mobile) */}
                <div className="col-span-1 md:hidden py-6 flex items-center justify-center border-l border-neutral-800">
                  <span className="text-neutral-600 text-xl group-hover:text-red-600 transition-colors">{activeYear === item.year ? "−" : "+"}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-neutral-700 flex justify-end pt-3">
              <span className="text-neutral-700 text-xs font-mono uppercase tracking-widest">конец хронологии</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">РАЗВИТИЕ<br />УГРОЗ</h2>
              <div className="border-t border-black pt-8 space-y-6">
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">1970-е — 1980-е</div>
                  <div className="font-bold">Эпоха экспериментов</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">1990-е</div>
                  <div className="font-bold">Эра массовых заражений</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2000-е</div>
                  <div className="font-bold">Эпоха киберпреступности</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2010-е</div>
                  <div className="font-bold">Государственное кибероружие</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2020-е</div>
                  <div className="font-bold">ИИ против ИИ</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 md:pt-4">
              <p className="mb-6 leading-relaxed">
                История вредоносных программ начиналась как академический курьёз. В 1971 году программист Боб Томас создал Creeper — не с целью разрушения, а ради самого факта: может ли программа самостоятельно перемещаться между компьютерами? Может. Этот эксперимент открыл ящик Пандоры, который человечество не может закрыть по сей день.
              </p>
              <p className="mb-6 leading-relaxed">
                В 1980-е вирусы стали оружием мелкого хулиганства и пиратской борьбы. Brain (1986) братья Альви написали для защиты своего ПО от копирования — первый коммерческий мотив в истории вредоносного кода. Дискеты были единственным вектором распространения, что сдерживало масштаб ущерба.
              </p>
              <p className="mb-6 leading-relaxed">
                Интернет изменил всё. Червь Морриса (1988) наглядно показал, насколько хрупкой может быть сетевая инфраструктура. 1990-е принесли первые глобальные эпидемии: Melissa и ILOVEYOU распространялись со скоростью, которую никто не мог предвидеть. Антивирусная индустрия рождалась в режиме постоянного пожара.
              </p>
              <p className="mb-6 leading-relaxed">
                В 2000-е годы вирусописательство превратилось в бизнес. Ботнеты сдавались в аренду, банковские трояны крали миллиарды, спам-рассылки стали индустрией. Киберпреступность обрела организованный, транснациональный характер. Антивирусы ответили поведенческим анализом и облачными базами данных угроз.
              </p>
              <p className="mb-6 leading-relaxed">
                Stuxnet (2010) перевернул представления о возможном: впервые вредоносная программа уничтожила физическое оборудование — иранские ядерные центрифуги. Кибератаки стали инструментом геополитики. WannaCry и NotPetya (2017) парализовали целые отрасли экономики в десятках стран одновременно.
              </p>
              <p className="mb-6 leading-relaxed">
                Сегодня мы стоим на пороге новой эпохи: искусственный интеллект используется обеими сторонами. ИИ генерирует полиморфный код, который меняет себя быстрее, чем успевают обновляться сигнатурные базы. ИИ-антивирусы учатся предсказывать атаки до их начала. Гонка вооружений продолжается — теперь со скоростью нейронных сетей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Methods Section */}
      <section id="defense" className="py-20 px-4 md:px-8 bg-black text-white overflow-hidden">
        <div className="container mx-auto">

          {/* Header */}
          <div className="relative mb-16">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-white" style={{ left: `${(i + 1) * 100 / 7}%` }} />
              ))}
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 border-t-2 border-l-2 border-neutral-600" />
                <span className="text-neutral-600 text-xs uppercase tracking-widest font-mono">кибербезопасность</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                  МЕТОДЫ<br /><span className="text-neutral-500">ЗАЩИТЫ</span>
                </h2>
                <div className="text-neutral-400 text-sm max-w-sm leading-relaxed md:pb-2 space-y-3">
                  <p>
                    Защита никогда не была в позиции силы — она всегда реагировала. Каждый новый метод рождался как ответ на конкретную угрозу, которую предыдущий уже не мог сдержать.
                  </p>
                  <p className="text-neutral-600">
                    Сегодня разрыв сокращается: машинное обучение впервые позволяет действовать на опережение — предсказывать атаку до того, как она состоялась.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Methods grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
            {[
              {
                num: "01",
                title: "Сигнатурный анализ",
                era: "1980-е — наст. время",
                desc: "Сравнение файлов с базой известных вирусных «отпечатков». Быстро и точно — но бессилен против новых и полиморфных угроз.",
                level: 40,
                color: "bg-neutral-600",
              },
              {
                num: "02",
                title: "Эвристический анализ",
                era: "1990-е — наст. время",
                desc: "Оценка кода по подозрительным паттернам поведения. Позволяет ловить неизвестные угрозы, но даёт ложные срабатывания.",
                level: 62,
                color: "bg-neutral-400",
              },
              {
                num: "03",
                title: "Поведенческий анализ",
                era: "2000-е — наст. время",
                desc: "Мониторинг программ в реальном времени. HIPS-системы блокируют опасные действия ещё до нанесения ущерба.",
                level: 75,
                color: "bg-neutral-200",
              },
              {
                num: "04",
                title: "Sandbox / Песочница",
                era: "2010-е — наст. время",
                desc: "Запуск подозрительных файлов в изолированной среде. Угроза «детонирует» безопасно — под наблюдением аналитиков.",
                level: 82,
                color: "bg-red-800",
              },
              {
                num: "05",
                title: "Облачная защита",
                era: "2010-е — наст. время",
                desc: "Проверка файлов через глобальные базы угроз в реальном времени. Миллиарды устройств делятся данными об атаках мгновенно.",
                level: 88,
                color: "bg-red-600",
              },
              {
                num: "06",
                title: "ИИ и машинное обучение",
                era: "2020-е — наст. время",
                desc: "Нейросети анализируют миллионы признаков и предсказывают атаки до их начала. Адаптируются быстрее, чем вирусы меняют форму.",
                level: 97,
                color: "bg-white",
              },
            ].map((method) => (
              <div key={method.num} className="border-t border-neutral-800 border-l-0 md:border-l md:first:border-l-0 p-6 group hover:bg-neutral-900 transition-colors duration-200 flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-neutral-700 text-xs font-mono group-hover:text-neutral-500 transition-colors">{method.num}</span>
                  <span className="text-neutral-600 text-xs uppercase tracking-widest">{method.era}</span>
                </div>
                {/* Efficacy bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neutral-600 text-xs uppercase tracking-widest">Эффективность</span>
                    <span className="text-xs font-mono text-neutral-400">{method.level}%</span>
                  </div>
                  <div className="h-1 bg-neutral-800 w-full">
                    <div
                      className={`h-1 ${method.color} transition-all duration-500`}
                      style={{ width: `${method.level}%` }}
                    />
                  </div>
                </div>
                {/* Content */}
                <h3 className="font-bold text-xl tracking-tight mb-3">{method.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mt-auto">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom comparison strip */}
          <div className="border-t border-neutral-800 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Уровень угроз</div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 bg-neutral-800">
                  <div className="h-2 bg-red-600" style={{ width: "94%" }} />
                </div>
                <span className="text-xs font-mono text-red-600">94%</span>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Уровень защиты</div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 bg-neutral-800">
                  <div className="h-2 bg-white" style={{ width: "78%" }} />
                </div>
                <span className="text-xs font-mono text-white">78%</span>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Разрыв</div>
              <div className="text-2xl font-bold tracking-tighter text-red-600">−16%</div>
              <div className="text-neutral-600 text-xs mt-1">угрозы опережают защиту</div>
            </div>
          </div>

        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ИСТОЧНИКИ</h2>
              <p className="text-xl mb-8">
                Материалы сайта основаны на открытых исследованиях, академических работах и публикациях ведущих организаций в области кибербезопасности.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">01</span>
                  <div>
                    <div className="font-bold">Virus Bulletin</div>
                    <div className="text-red-200 text-sm">Международный журнал по киберугрозам virusbulletin.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">02</span>
                  <div>
                    <div className="font-bold">NIST</div>
                    <div className="text-red-200 text-sm">Национальный институт стандартов и технологий США</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">03</span>
                  <div>
                    <div className="font-bold">Kaspersky Securelist</div>
                    <div className="text-red-200 text-sm">Исследования и аналитика угроз securelist.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">04</span>
                  <div>
                    <div className="font-bold">Cybersecurity & Infrastructure Security Agency</div>
                    <div className="text-red-200 text-sm">cisa.gov — официальные отчёты об инцидентах</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-t border-red-500 pt-8 space-y-8">
                <div>
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">Malware Museum</div>
                  <div className="text-red-200 text-sm leading-relaxed">Интерактивный архив исторических вирусов в браузере — archive.org/details/malwaremuseum</div>
                </div>
                <div className="border-t border-red-500 pt-8">
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">AV-TEST Institute</div>
                  <div className="text-red-200 text-sm leading-relaxed">Независимое тестирование антивирусных продуктов и статистика угроз — av-test.org</div>
                </div>
                <div className="border-t border-red-500 pt-8">
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">CVE Database</div>
                  <div className="text-red-200 text-sm leading-relaxed">Официальная база уязвимостей и угроз — cve.mitre.org</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tighter">
            VIRUS<span className="text-red-600">LOG</span>
          </span>
          <span className="text-sm text-neutral-400 uppercase tracking-widest">История компьютерных вирусов © 2026</span>
        </div>
      </footer>
    </main>
  );
}