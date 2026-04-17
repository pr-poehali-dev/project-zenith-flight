import { useState } from "react";
import Icon from "@/components/ui/icon";

const timelineData = [
  {
    year: "1971",
    virus: {
      name: "Creeper",
      desc: "Первая самовоспроизводящаяся программа, написанная программистом BBN Technologies Бобом Томасом. Распространялась по сети ARPANET между компьютерами DEC PDP-10, выводя сообщение «I'm the creeper, catch me if you can!». Никакого деструктивного умысла не было — чистый эксперимент. Но именно он доказал: программа может жить в сети сама по себе.",
    },
    antivirus: {
      name: "Reaper",
      desc: "Первая в истории антивирусная программа — также написана в BBN Technologies, предположительно Рэем Томлинсоном (создателем email). Reaper сам распространялся по ARPANET, разыскивал Creeper и удалял его. Парадокс: первое средство защиты было вирусом по своей природе — самораспространяющимся кодом, созданным для уничтожения другого кода.",
    },
  },
  {
    year: "1982",
    virus: {
      name: "Elk Cloner",
      desc: "Первый вирус для персональных компьютеров, написанный 15-летним школьником Ричардом Скрентой в качестве розыгрыша. Заражал загрузочный сектор дискет Apple II и незаметно копировался на каждую дискету, вставленную в заражённый компьютер. На 50-й загрузке выводил стихотворение автора. Концепция вектора распространения через съёмные носители определила архитектуру вирусов на следующее десятилетие.",
    },
    antivirus: {
      name: "—",
      desc: "Специализированных антивирусных инструментов ещё не существовало — угроза не воспринималась всерьёз. Защита сводилась к физическому контролю за дискетами: не давать чужим, не вставлять незнакомые. Сообщество программистов знало о вирусах как об академической концепции, но массового осознания опасности не было. Elk Cloner стал первым звонком, который большинство проигнорировало.",
    },
  },
  {
    year: "1986",
    virus: {
      name: "Brain",
      desc: "Первый вирус для IBM PC, созданный пакистанскими программистами — братьями Баситом и Амджадом Фарук Альви из Лахора. Изначально задуман как защита собственного медицинского ПО от нелицензионного копирования: вирус заражал загрузочный сектор дискет и замедлял работу пиратских копий. Brain содержал контактные данные авторов и даже предлагал «вакцинацию» — первый в истории вирус с обратным адресом.",
    },
    antivirus: {
      name: "Andy Hopkins (CHK4BOMB)",
      desc: "Британский программист Энди Хопкинс создал CHK4BOMB — одну из первых утилит для анализа загрузочных секторов на предмет подозрительного кода. Параллельно в США G Data Software выпустила первый коммерческий антивирусный пакет для Atari ST. Эти инструменты работали по принципу ручного анализа: программист изучал код вручную и составлял «сигнатуру» — уникальный фрагмент байт, по которому можно опознать вирус.",
    },
  },
  {
    year: "1988",
    virus: {
      name: "Червь Морриса",
      desc: "Первый масштабный сетевой червь, написанный аспирантом Корнеллского университета Робертом Моррисом — сыном одного из создателей Unix. Эксплуатировал три уязвимости: ошибку в sendmail, баг в fingerd и слабые пароли. Заразил ~6000 компьютеров ARPANET (около 10% всей сети), нанёс ущерб от $100 тыс. до $10 млн. Моррис стал первым осуждённым по американскому закону о компьютерном мошенничестве (CFAA).",
    },
    antivirus: {
      name: "John McAfee — VirusScan",
      desc: "Джон Макафи, бывший программист Lockheed, основал McAfee Associates и выпустил VirusScan — один из первых коммерческих антивирусов для массового рынка. Параллельно Питер Нортон создал Norton AntiVirus для Symantec, а в СССР Евгений Касперский начинал исследования вредоносного кода. Червь Морриса создал рынок: компании осознали, что за защиту готовы платить. Так родилась антивирусная индустрия.",
    },
  },
  {
    year: "1991",
    virus: {
      name: "Michelangelo",
      desc: "Вирус-«логическая бомба», заражавший загрузочный сектор дискет и MBR жёсткого диска. Активировался строго 6 марта — в день рождения художника Микеланджело — и перезаписывал первые 100 секторов диска случайными данными, уничтожая все файлы. Вызвал беспрецедентную медийную панику: СМИ предрекали заражение 5 миллионов ПК. В реальности пострадало несколько десятков тысяч — но страх сформировал первый массовый спрос на антивирусы.",
    },
    antivirus: {
      name: "Norton AntiVirus",
      desc: "Symantec выпускает Norton AntiVirus — продукт, который на десятилетия станет синонимом антивирусной защиты. Именно вокруг Michelangelo Norton провёл масштабную маркетинговую кампанию, предлагая бесплатную проверку ПК. Это решение оказалось гениальным: продажи взлетели, а понятие «проверить компьютер антивирусом» вошло в повседневный обиход миллионов пользователей по всему миру.",
    },
  },
  {
    year: "1999",
    virus: {
      name: "Melissa",
      desc: "Первый вирус-червь, использовавший Microsoft Word и Outlook как вектор атаки. Автор — Дэвид Смит из Нью-Джерси — назвал его в честь флоридской стриптизёрши. Melissa рассылала себя первым 50 контактам из адресной книги жертвы. За 72 часа заразила 100 000+ компьютеров, перегрузила почтовые серверы Intel, Microsoft и правительственных организаций. Ущерб — $80 млн. Смит получил 20 месяцев тюрьмы.",
    },
    antivirus: {
      name: "Эвристический анализ",
      desc: "Melissa показала: сигнатурные базы не успевают за скоростью распространения новых вирусов. В ответ антивирусные компании начали внедрять эвристику — анализ кода на подозрительные паттерны поведения, без опоры на базу известных сигнатур. Если программа пытается массово рассылать письма или модифицировать системные файлы — это подозрительно, даже если такого вируса ещё нет в базе. Принципиальный сдвиг в логике защиты.",
    },
  },
  {
    year: "2000",
    virus: {
      name: "ILOVEYOU",
      desc: "Один из самых разрушительных вирусов в истории, созданный филиппинскими студентами Онелем де Гузманом и Реонелом Рамонесом. Распространялся как вложение «LOVE-LETTER-FOR-YOU.txt.vbs» — двойное расширение скрывало скрипт. За один день заразил 50+ млн компьютеров, перезаписал файлы изображений и музыки, нанёс ущерб $10 млрд. Авторы избежали наказания — на Филиппинах тогда не было закона о киберпреступлениях.",
    },
    antivirus: {
      name: "Kaspersky Lab",
      desc: "Лаборатория Касперского, основанная Евгением Касперским в 1997 году, в 2000-е выходит на мировой рынок с полноценным коммерческим продуктом. ILOVEYOU был проанализирован и заблокирован Касперским быстрее многих западных конкурентов — это создало репутацию. Россия и страны Восточной Европы, с богатой школой программирования, становятся одним из главных центров антивирусных исследований.",
    },
  },
  {
    year: "2004",
    virus: {
      name: "MyDoom",
      desc: "Самый быстро распространяющийся email-червь в истории — рекорд, не побитый до сих пор. На пике эпидемии каждое 12-е письмо в интернете содержало MyDoom. Червь замедлял глобальный трафик на 10%, организовывал DDoS-атаки на SCO Group и Microsoft. Предположительно создан российскими хакерами по заказу — первый задокументированный случай кибератаки как коммерческой услуги. Автор так и не установлен.",
    },
    antivirus: {
      name: "Поведенческий анализ",
      desc: "MyDoom и волна ботнетов 2004–2006 годов подтолкнули к разработке систем HIPS (Host Intrusion Prevention System). Вместо поиска известных сигнатур HIPS наблюдает за действиями программы в реальном времени: пытается ли она изменить реестр, открыть сетевое соединение, создать исполняемый файл? Подозрительное поведение блокируется немедленно. Это заложило основу современного поведенческого анализа.",
    },
  },
  {
    year: "2010",
    virus: {
      name: "Stuxnet",
      desc: "Первое кибероружие государственного уровня, предположительно созданное совместными усилиями США и Израиля (операция «Олимпийские игры»). Целенаправленно атаковало программируемые контроллеры Siemens на иранском заводе по обогащению урана в Натанзе, физически разрушив ~1000 центрифуг. Stuxnet содержал четыре zero-day уязвимости одновременно — беспрецедентный уровень сложности. Открыл эпоху, когда вирус может уничтожать физические объекты.",
    },
    antivirus: {
      name: "Sandbox-технологии",
      desc: "Stuxnet невозможно было обнаружить сигнатурным или эвристическим методом — слишком сложный и новый. Ответом стало массовое внедрение sandbox-технологий: подозрительный файл запускается в полностью изолированной виртуальной среде, где он может «детонировать» без последствий, пока аналитическая система наблюдает за каждым его действием. Cuckoo Sandbox стал первым крупным open-source инструментом такого рода.",
    },
  },
  {
    year: "2017",
    virus: {
      name: "WannaCry",
      desc: "Глобальная эпидемия вируса-шифровальщика (ransomware), использовавшего уязвимость EternalBlue — предположительно похищенную из АНБ США хакерской группой Shadow Brokers. За 4 дня WannaCry заразил 200 000+ компьютеров в 150 странах: парализовал NHS (британская система здравоохранения), Renault, Telefónica, ряд российских банков. Ущерб — от $4 до $8 млрд. Атаку остановил случай: исследователь Маркус Хатчинс зарегистрировал домен-«выключатель».",
    },
    antivirus: {
      name: "AI-антивирусы",
      desc: "WannaCry распространился быстрее, чем антивирусные компании успели выпустить сигнатуры. Это ускорило переход к AI-защите. Cylance (2012) первой применила модели машинного обучения вместо сигнатурных баз — нейросеть, обученная на миллиардах файлов, определяет вредоносность по структурным признакам кода. CrowdStrike, SentinelOne и другие компании нового поколения строят защиту целиком на основе ИИ, без традиционных баз данных угроз.",
    },
  },
  {
    year: "2024",
    virus: {
      name: "AI-генерируемые угрозы",
      desc: "Злоумышленники используют большие языковые модели для автоматической генерации убедительных фишинговых писем на любом языке, создания полиморфного кода, который меняет свою структуру при каждом заражении, и обхода антивирусных систем через adversarial-атаки. Зафиксированы случаи deepfake-звонков от имени топ-менеджеров с требованием перевести деньги. Барьер входа в киберпреступность рухнул: атаки теперь доступны без технических знаний.",
    },
    antivirus: {
      name: "Zero Trust & XDR",
      desc: "Современная парадигма безопасности строится на принципе Zero Trust: ни один пользователь, устройство или сегмент сети не получает доверия по умолчанию — каждый запрос верифицируется заново. Extended Detection & Response (XDR) объединяет данные с конечных точек, сети, почты и облака в единую аналитическую платформу. Вместо блокировки отдельных угроз система строит полную картину атаки и реагирует на паттерн в целом.",
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
            <p className="text-xl max-w-xl mb-6">
              Полвека противостояния: от первого самовоспроизводящегося кода 1971 года до ИИ-угроз сегодняшнего дня. Параллельная история атаки и защиты.
            </p>
            <p className="text-neutral-500 max-w-lg leading-relaxed">
              Каждый вирус в этой истории породил метод защиты. Каждый метод защиты — следующее поколение вирусов. Это не война, которую можно выиграть. Это гонка, которую нельзя остановить.
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
                  <div className="font-bold mb-1">Эпоха экспериментов</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">Вирусы создавались ради идеи, не ради денег. Вектор — дискеты и локальные сети.</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">1990-е</div>
                  <div className="font-bold mb-1">Эра массовых заражений</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">Интернет дал вирусам глобальный масштаб. Email стал главным оружием.</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2000-е</div>
                  <div className="font-bold mb-1">Эпоха киберпреступности</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">Вирусописательство стало бизнесом. Ботнеты, трояны, спам — индустрия с миллиардными оборотами.</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2010-е</div>
                  <div className="font-bold mb-1">Государственное кибероружие</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">Stuxnet, WannaCry, NotPetya — атаки как инструмент геополитики. Вирус уничтожает физическое оборудование.</div>
                </div>
                <div>
                  <div className="text-red-600 text-sm uppercase tracking-widest mb-1">2020-е</div>
                  <div className="font-bold mb-1">ИИ против ИИ</div>
                  <div className="text-neutral-500 text-xs leading-relaxed">Атака и защита обе используют нейросети. Скорость гонки вооружений измеряется в миллисекундах.</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 md:pt-4">
              <p className="mb-6 leading-relaxed">
                История вредоносных программ начиналась как академический курьёз. В 1971 году программист Боб Томас создал Creeper — не с целью разрушения, а ради самого факта: может ли программа самостоятельно перемещаться между компьютерами? Может. Этот эксперимент открыл ящик Пандоры, который человечество не может закрыть по сей день. Парадоксально, но первый антивирус — Reaper — сам был вирусом: он охотился за Creeper, распространяясь точно так же.
              </p>
              <p className="mb-6 leading-relaxed">
                В 1980-е вирусы стали оружием мелкого хулиганства и пиратской борьбы. Brain (1986) братья Альви написали для защиты своего ПО от копирования — первый коммерческий мотив в истории вредоносного кода. Дискеты были единственным вектором распространения, что физически сдерживало масштаб ущерба: вирус мог распространяться лишь со скоростью курьера. Этот барьер рухнул с приходом сетей.
              </p>
              <p className="mb-6 leading-relaxed">
                Интернет изменил всё. Червь Морриса (1988) наглядно показал, насколько хрупкой может быть сетевая инфраструктура — и мир не прислушался. 1990-е принесли первые глобальные эпидемии: Melissa и ILOVEYOU распространялись со скоростью, которую никто не мог предвидеть. За несколько часов — от нуля до миллионов заражённых машин. Антивирусная индустрия рождалась в режиме постоянного пожара, всегда опаздывая на несколько часов.
              </p>
              <p className="mb-6 leading-relaxed">
                В 2000-е вирусописательство превратилось в полноценный бизнес с иерархией, специализацией и рынком услуг. Ботнеты из миллионов заражённых машин сдавались в аренду для DDoS-атак или рассылки спама. Банковские трояны Zeus и SpyEye похитили сотни миллионов долларов у частных лиц по всему миру. Киберпреступность обрела организованный, транснациональный характер — со структурой, неотличимой от легального бизнеса.
              </p>
              <p className="mb-6 leading-relaxed">
                Stuxnet (2010) перевернул представления о возможном: впервые вредоносная программа уничтожила физическое оборудование — иранские ядерные центрифуги — не прикасаясь к ним руками. Кибератаки стали полноправным инструментом геополитики. WannaCry (2017) атаковал больницы посреди рабочего дня. NotPetya, замаскированный под вымогателя, уничтожил данные без возможности восстановления — чистый саботаж в цифровом пространстве.
              </p>
              <p className="mb-6 leading-relaxed">
                Сегодня мы стоим на пороге новой эпохи: искусственный интеллект используется обеими сторонами одновременно. ИИ генерирует полиморфный код, который меняет свою структуру быстрее, чем успевают обновляться сигнатурные базы. Deepfake-голоса топ-менеджеров убеждают бухгалтеров переводить деньги. ИИ-антивирусы в ответ учатся предсказывать атаки до их начала. Гонка вооружений продолжается — теперь со скоростью нейронных сетей.
              </p>
              <div className="border-t border-black pt-6 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold tracking-tighter">1,1 млрд</div>
                  <div className="text-neutral-500 text-xs mt-1 leading-relaxed">известных вредоносных программ зафиксировано к 2024 году</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tighter text-red-600">$8 трлн</div>
                  <div className="text-neutral-500 text-xs mt-1 leading-relaxed">глобальный ущерб от киберпреступлений в 2023 году</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tighter">450 000</div>
                  <div className="text-neutral-500 text-xs mt-1 leading-relaxed">новых вредоносных программ регистрируется каждый день</div>
                </div>
              </div>
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
                desc: "Каждому известному вирусу соответствует уникальная «сигнатура» — последовательность байт, по которой его можно опознать. Антивирус сравнивает каждый файл с базой таких отпечатков. Метод быстрый и точный для известных угроз, но полностью бессилен перед новыми вирусами и полиморфным кодом, который меняет свою структуру при каждом заражении.",
                level: 40,
                color: "bg-neutral-600",
              },
              {
                num: "02",
                title: "Эвристический анализ",
                era: "1990-е — наст. время",
                desc: "Вместо поиска известных сигнатур анализируется структура и логика кода: есть ли подозрительные инструкции, попытки самокопирования, скрытые вызовы системных функций? Эвристика позволяет обнаруживать ранее неизвестные угрозы, но порождает ложные срабатывания — легитимные программы иногда ведут себя «подозрительно» с точки зрения алгоритма.",
                level: 62,
                color: "bg-neutral-400",
              },
              {
                num: "03",
                title: "Поведенческий анализ",
                era: "2000-е — наст. время",
                desc: "Программу не анализируют заранее — за ней наблюдают в процессе работы. HIPS-системы (Host Intrusion Prevention System) отслеживают каждое действие: обращение к реестру, создание новых процессов, изменение системных файлов, сетевые соединения. Если поведение выходит за рамки допустимого — действие блокируется немедленно, до нанесения ущерба.",
                level: 75,
                color: "bg-neutral-200",
              },
              {
                num: "04",
                title: "Sandbox / Песочница",
                era: "2010-е — наст. время",
                desc: "Подозрительный файл запускается в полностью изолированной виртуальной среде — «песочнице» — где не имеет доступа к реальной системе. Угроза «детонирует» безопасно, пока аналитическая система наблюдает за каждым её шагом. Особенно эффективен против zero-day угроз, ещё не известных никому. Слабость: sophisticated-вредоносы умеют обнаруживать sandbox-окружение и притворяться безвредными.",
                level: 82,
                color: "bg-red-800",
              },
              {
                num: "05",
                title: "Облачная защита",
                era: "2010-е — наст. время",
                desc: "Когда один из миллиарда устройств сталкивается с новой угрозой, информация о ней мгновенно поступает в глобальную облачную базу. Все остальные устройства получают защиту в течение секунд — не дожидаясь очередного обновления. Облако хранит терабайты контекста об угрозах, которые невозможно разместить локально. Это превратило каждое защищённое устройство в сенсор глобальной системы раннего предупреждения.",
                level: 88,
                color: "bg-red-600",
              },
              {
                num: "06",
                title: "ИИ и машинное обучение",
                era: "2020-е — наст. время",
                desc: "Нейросети, обученные на миллиардах образцов вредоносного и легитимного кода, определяют угрозу по совокупности сотен тысяч признаков — без баз данных, без сигнатур, без правил. Модели предсказывают атаки до их начала, анализируя аномалии в поведении пользователей и сети. XDR-платформы объединяют ИИ-анализ на всех уровнях инфраструктуры в единую картину атаки в реальном времени.",
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
              <p className="text-xl mb-4">
                Материалы сайта основаны на открытых исследованиях, академических работах и публикациях ведущих организаций в области кибербезопасности.
              </p>
              <p className="text-red-200 text-sm mb-8 leading-relaxed">
                Хронологические данные, суммы ущерба и технические детали верифицированы по нескольким независимым источникам. Там, где оценки расходятся, указан диапазон или наиболее консервативная цифра.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">01</span>
                  <div>
                    <div className="font-bold">Virus Bulletin</div>
                    <div className="text-red-200 text-sm mt-1 leading-relaxed">Международный рецензируемый журнал по киберугрозам, издаётся с 1989 года. Содержит технический анализ вредоносного ПО и независимые тесты антивирусных продуктов — virusbulletin.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">02</span>
                  <div>
                    <div className="font-bold">NIST</div>
                    <div className="text-red-200 text-sm mt-1 leading-relaxed">Национальный институт стандартов и технологий США. Публикует стандарты кибербезопасности (NIST CSF), ведёт базу уязвимостей NVD и методологические руководства для организаций — nist.gov</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">03</span>
                  <div>
                    <div className="font-bold">Kaspersky Securelist</div>
                    <div className="text-red-200 text-sm mt-1 leading-relaxed">Аналитический портал Лаборатории Касперского с детальными техническими разборами угроз, APT-отчётами и статистикой глобальных кибератак в реальном времени — securelist.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-red-500 pt-4">
                  <span className="w-6 h-6 bg-white text-red-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">04</span>
                  <div>
                    <div className="font-bold">Cybersecurity & Infrastructure Security Agency</div>
                    <div className="text-red-200 text-sm mt-1 leading-relaxed">Федеральное агентство США по кибербезопасности. Публикует официальные бюллетени об инцидентах, рекомендации по устранению уязвимостей и отчёты о критических угрозах инфраструктуре — cisa.gov</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-t border-red-500 pt-8 space-y-8">
                <div>
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">Malware Museum</div>
                  <div className="text-red-200 text-sm leading-relaxed">Интерактивный архив исторических вирусов 1980–90-х годов, запускаемых прямо в браузере через эмулятор DOS. Уникальная возможность увидеть оригинальные «арт-экраны» вирусов — от Michelangelo до Cascade — archive.org/details/malwaremuseum</div>
                </div>
                <div className="border-t border-red-500 pt-8">
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">AV-TEST Institute</div>
                  <div className="text-red-200 text-sm leading-relaxed">Независимая немецкая лаборатория, ежемесячно тестирующая антивирусные продукты по трём критериям: защита, производительность и удобство использования. Результаты тестов используются как стандарт отрасли — av-test.org</div>
                </div>
                <div className="border-t border-red-500 pt-8">
                  <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Дополнительно</div>
                  <div className="font-bold text-xl mb-3">CVE Database</div>
                  <div className="text-red-200 text-sm leading-relaxed">Common Vulnerabilities and Exposures — единый реестр публично известных уязвимостей в программном обеспечении, поддерживаемый MITRE Corporation. Каждая запись содержит описание, степень критичности (CVSS) и ссылки на патчи — cve.mitre.org</div>
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