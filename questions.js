/*
  Paircode question list. This is the only file you need to edit.

  EDITING RULES (they keep codes made earlier working):
  1. Never change or reuse an id. Ids are whole numbers from 1 to 255.
  2. To remove a question, set  retired: true  on it. Don't delete it.
  3. Each question has 2 to 4 options. Add new options only at the end,
     never reorder them. If an option's meaning changes, make a new
     question with a new id and retire the old one.
  4. Display order is the order in this file. Move questions freely.
  5. Wording and typo fixes are fine as long as the meaning stays the same.
  6. Every language must have the same number of options.

  Fields:
    id         permanent number, see rule 1
    pack       key of a pack from the "packs" list below
    sensitive  true shows a warning badge next to the question
    quick      true puts the question in the short "quick" version
    multi      true lets people pick several of their own answers. Turning it on
               for an existing question is safe: earlier codes still work.
    scoring    "all" means every option the partner picked must be acceptable
               (used for habits). Default: one acceptable option is enough.
    none       index of a "None of these" option: picking it clears the others,
               and it always counts as acceptable.
    accept     custom label for the "partner answers you'd accept" row
    mirrorOf   id of the question this one mirrors (the same rule for him / for her).
               Different answers to the two show up in comparisons.
    added      date the question was added, "YYYY-MM-DD". For two weeks it gets a
               "New" badge, and the newest statement shows on the home screen.
    showIf     { id: X, answer: N } shows the question only when question X
               is answered with option N (options count from 0)
    text       the question in each language
    options    one list per language, or the name of a shared scale

  Packs can have an optional  note  (one line per language) shown at the top.

  The page checks this file on load and lists any mistakes at the top.
  Next free id: 88
*/
window.PAIRCODE_DATA = {
  languages: ["en", "uk", "pl"],

  packs: [
    { key: "core",      title: { en: "Must-knows",          uk: "Головне",                   pl: "Najważniejsze" } },
    { key: "lifestyle", title: { en: "Everyday life",       uk: "Повсякдення",               pl: "Codzienność" } },
    { key: "habits",    title: { en: "Habits",              uk: "Звички",                    pl: "Nawyki" },
      note: { en: "Tick your own habits, then the ones you can live with in a partner.",
              uk: "Познач свої звички, а потім ті, з якими зможеш жити в партнера.",
              pl: "Zaznacz swoje nawyki, a potem te, z którymi wytrzymasz u partnera." } },
    { key: "dating",    title: { en: "Dating",              uk: "Побачення",                 pl: "Randki" } },
    { key: "together",  title: { en: "Together",            uk: "Разом",                     pl: "Razem" } },
    { key: "trust",     title: { en: "Privacy and trust",   uk: "Довіра й приватність",      pl: "Zaufanie i prywatność" } },
    { key: "beliefs",   title: { en: "Beliefs and personal", uk: "Погляди й особисте",       pl: "Poglądy i sprawy osobiste" } },
    { key: "mirror",    title: { en: "Double standards",    uk: "Подвійні стандарти",        pl: "Podwójne standardy" },
      note: { en: "Each rule is asked twice, once for him and once for her. Different answers show up in the comparison.",
              uk: "Кожне правило питаємо двічі: для нього й для неї. Різні відповіді буде видно в порівнянні.",
              pl: "Każdą zasadę pytamy dwa razy: dla niego i dla niej. Różne odpowiedzi będą widoczne w porównaniu." } },
    { key: "odd",       title: { en: "Three odd ones",      uk: "Три дивні питання",         pl: "Trzy dziwne pytania" },
      note: { en: "In OkCupid's data, couples who agreed on these three tended to stay together longer.",
              uk: "За даними OkCupid, пари, які збігаються в цих трьох, зазвичай довше разом.",
              pl: "Według danych OkCupid pary zgodne w tych trzech pytaniach zwykle są razem dłużej." } },
    { key: "hottakes",  title: { en: "Hot takes",           uk: "Гарячі теми",               pl: "Gorące tematy" } }
  ],

  scales: {
    agree: {
      en: ["Agree", "Rather agree", "Rather disagree", "Disagree"],
      uk: ["Згоден(-на)", "Радше так", "Радше ні", "Не згоден(-на)"],
      pl: ["Zgadzam się", "Raczej tak", "Raczej nie", "Nie zgadzam się"]
    },
    care: {
      en: ["Words", "Time together", "Help", "Touch"],
      uk: ["Слова", "Спільний час", "Допомога", "Дотики"],
      pl: ["Słowa", "Wspólny czas", "Pomoc", "Dotyk"]
    }
  },

  questions: [
    /* ---------- Must-knows ---------- */
    { id: 1, pack: "core", quick: true,
      text: { en: "What are you looking for?", uk: "Що шукаєш?", pl: "Czego szukasz?" },
      options: {
        en: ["Marriage", "Long-term relationship", "See where it goes", "Something casual"],
        uk: ["Шлюб", "Довгі стосунки", "Подивимось, як піде", "Щось легке"],
        pl: ["Małżeństwa", "Stałego związku", "Zobaczymy, co wyjdzie", "Czegoś niezobowiązującego"] } },

    { id: 2, pack: "core", quick: true,
      text: { en: "How old are you?", uk: "Скільки тобі років?", pl: "Ile masz lat?" },
      options: {
        en: ["18–25", "26–32", "33–40", "41+"],
        uk: ["18–25", "26–32", "33–40", "41+"],
        pl: ["18–25", "26–32", "33–40", "41+"] } },

    { id: 3, pack: "core", quick: true,
      text: { en: "Do you have children?", uk: "Маєш дітей?", pl: "Masz dzieci?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 48, pack: "core", quick: true, showIf: { id: 3, answer: 0 },
      text: { en: "Your children…", uk: "Твої діти…", pl: "Twoje dzieci…" },
      options: {
        en: ["Live with me", "I see them often", "I see them rarely"],
        uk: ["Живуть зі мною", "Бачу їх часто", "Бачу їх рідко"],
        pl: ["Mieszkają ze mną", "Widuję je często", "Widuję je rzadko"] } },

    { id: 4, pack: "core", quick: true,
      text: { en: "Do you want (more) children?", uk: "Хочеш дітей (ще)?", pl: "Chcesz (mieć więcej) dzieci?" },
      options: {
        en: ["Yes, within ~2 years", "Yes, someday", "Open to it", "No"],
        uk: ["Так, протягом ~2 років", "Так, колись", "Відкритий(-а) до цього", "Ні"],
        pl: ["Tak, w ciągu ~2 lat", "Tak, kiedyś", "Jestem otwarty/a", "Nie"] } },

    { id: 5, pack: "core", quick: true,
      text: { en: "Do you smoke?", uk: "Куриш?", pl: "Palisz?" },
      options: {
        en: ["No", "Vape only", "Only at parties", "Regularly"],
        uk: ["Ні", "Лише вейп", "Лише на вечірках", "Регулярно"],
        pl: ["Nie", "Tylko e-papieros", "Tylko na imprezach", "Regularnie"] } },

    { id: 6, pack: "core",
      text: { en: "How often do you drink?", uk: "Як часто п'єш алкоголь?", pl: "Jak często pijesz alkohol?" },
      options: {
        en: ["Never", "Rarely", "Moderately, on weekends", "Often"],
        uk: ["Ніколи", "Рідко", "Помірно, на вихідних", "Часто"],
        pl: ["Nigdy", "Rzadko", "Umiarkowanie, w weekendy", "Często"] } },

    { id: 83, pack: "core", quick: true, added: "2026-11-16",
      text: { en: "How far away could the right person live?", uk: "Як далеко може жити правильна людина?", pl: "Jak daleko może mieszkać właściwa osoba?" },
      options: {
        en: ["Same city only", "Up to an hour away", "A few hours away", "Another country"],
        uk: ["Лише моє місто", "До години дороги", "Кілька годин дороги", "Інша країна"],
        pl: ["Tylko moje miasto", "Do godziny drogi", "Kilka godzin drogi", "Inny kraj"] } },

    { id: 80, pack: "core", added: "2026-11-16",
      text: { en: "Would you move for the right person?", uk: "Переїхав(-ла) б заради правильної людини?", pl: "Przeprowadziłbyś/łabyś się dla właściwej osoby?" },
      options: {
        en: ["No, I'm staying put", "Within the country", "Abroad too", "I'm moving anyway"],
        uk: ["Ні, залишаюсь", "У межах країни", "І за кордон", "Я й так переїжджаю"],
        pl: ["Nie, zostaję", "W obrębie kraju", "Nawet za granicę", "I tak się przeprowadzam"] } },

    { id: 84, pack: "core", added: "2026-11-16",
      text: { en: "Long term, where do you see yourself living?", uk: "Де бачиш себе в довгостроковій перспективі?", pl: "Gdzie widzisz się w dłuższej perspektywie?" },
      options: {
        en: ["Where I live now", "Back in my home country", "Somewhere else", "Not sure yet"],
        uk: ["Там, де живу зараз", "Вдома, на батьківщині", "Деінде", "Ще не знаю"],
        pl: ["Tam, gdzie mieszkam teraz", "W kraju, z którego pochodzę", "Gdzie indziej", "Jeszcze nie wiem"] } },

    { id: 87, pack: "core", multi: true, sensitive: true, added: "2026-11-16",
      text: { en: "Which languages would you speak at home?", uk: "Якими мовами говорив(-ла) б удома?", pl: "W jakich językach mówiłbyś/mówiłabyś w domu?" },
      options: {
        en: ["Ukrainian", "Polish", "English", "Another"],
        uk: ["Українська", "Польська", "Англійська", "Інша"],
        pl: ["Ukraiński", "Polski", "Angielski", "Inny"] } },

    { id: 54, pack: "core", quick: true,
      text: { en: "You unexpectedly get a month's salary. First thing you do?",
              uk: "Несподівано отримуєш місячну зарплату. Що робиш першим?",
              pl: "Niespodziewanie dostajesz równowartość miesięcznej pensji. Co robisz najpierw?" },
      options: {
        en: ["Save or invest it", "Pay something off", "A trip or an experience", "Treat myself and people close to me"],
        uk: ["Відкладаю чи інвестую", "Гашу борг чи кредит", "Поїздка чи враження", "Балую себе й близьких"],
        pl: ["Odkładam lub inwestuję", "Spłacam coś", "Wyjazd albo przeżycie", "Rozpieszczam siebie i bliskich"] } },

    /* ---------- Everyday life ---------- */
    { id: 7, pack: "lifestyle",
      text: { en: "How social are you?", uk: "Наскільки ти компанійський(-а)?", pl: "Jak bardzo jesteś towarzyski/a?" },
      options: {
        en: ["Homebody", "Small circle", "Balanced", "Out most weekends"],
        uk: ["Домосід(-ка)", "Вузьке коло", "Збалансовано", "Більшість вихідних на людях"],
        pl: ["Domator/ka", "Wąskie grono", "Pół na pół", "Większość weekendów poza domem"] } },

    { id: 9, pack: "lifestyle", multi: true,
      text: { en: "What's your daily rhythm?", uk: "Який у тебе ритм дня?", pl: "Jaki masz rytm dnia?" },
      options: {
        en: ["Early bird", "Night owl", "Shift work", "Flexible"],
        uk: ["Жайворонок", "Сова", "Змінна робота", "Гнучкий графік"],
        pl: ["Skowronek", "Sowa", "Praca zmianowa", "Elastycznie"] } },

    { id: 10, pack: "lifestyle", multi: true,
      text: { en: "What's your ideal weekend?", uk: "Які в тебе ідеальні вихідні?", pl: "Jak wygląda twój idealny weekend?" },
      options: {
        en: ["Rest at home", "Hobbies and projects", "Trips and nature", "Events and parties"],
        uk: ["Відпочинок вдома", "Хобі та проєкти", "Поїздки й природа", "Події та вечірки"],
        pl: ["Odpoczynek w domu", "Hobby i projekty", "Wycieczki i natura", "Wydarzenia i imprezy"] } },

    { id: 74, pack: "lifestyle", multi: true, added: "2026-11-16",
      text: { en: "What's a typical free evening for you?", uk: "Який у тебе типовий вільний вечір?", pl: "Jak wygląda twój typowy wolny wieczór?" },
      options: {
        en: ["Out or with people", "A hobby or project", "Series or games", "Scrolling"],
        uk: ["Десь із людьми", "Хобі чи проєкт", "Серіали чи ігри", "Скролінг"],
        pl: ["Na mieście albo ze znajomymi", "Hobby albo projekt", "Seriale albo gry", "Scrollowanie"] } },

    { id: 75, pack: "lifestyle", multi: true, added: "2026-11-16",
      text: { en: "What's dinner usually like?", uk: "Яка зазвичай вечеря?", pl: "Jak zwykle wygląda kolacja?" },
      options: {
        en: ["Cooked at home", "Quick and simple", "Delivery or eating out", "Whatever's in the fridge"],
        uk: ["Готую вдома", "Щось швидке й просте", "Доставка чи ресторан", "Що є в холодильнику"],
        pl: ["Gotuję w domu", "Coś szybkiego i prostego", "Dostawa albo na mieście", "Co jest w lodówce"] } },

    { id: 76, pack: "lifestyle", added: "2026-11-16",
      text: { en: "How do you eat?", uk: "Як ти харчуєшся?", pl: "Jak się odżywiasz?" },
      options: {
        en: ["I eat everything", "Little meat", "Vegetarian or vegan", "Strict diet for sport or health"],
        uk: ["Їм усе", "Мало м'яса", "Вегетаріанство чи веганство", "Сувора дієта для спорту чи здоров'я"],
        pl: ["Jem wszystko", "Mało mięsa", "Wegetariańska lub wegańska", "Ścisła dieta dla sportu lub zdrowia"] } },

    { id: 77, pack: "lifestyle", added: "2026-11-16",
      text: { en: "To fall asleep, you need…", uk: "Щоб заснути, тобі треба…", pl: "Żeby zasnąć, potrzebujesz…" },
      options: {
        en: ["Total silence and dark", "A little background noise", "Nothing, I sleep anywhere", "The TV or phone on"],
        uk: ["Повна тиша й темрява", "Трохи фонового шуму", "Нічого, засинаю будь-де", "Увімкнений телевізор чи телефон"],
        pl: ["Całkowitej ciszy i ciemności", "Trochę szumu w tle", "Niczego, zasnę wszędzie", "Włączonego telewizora lub telefonu"] } },

    { id: 73, pack: "lifestyle", added: "2026-11-16",
      text: { en: "Right now your flat looks…", uk: "Зараз твоя квартира виглядає…", pl: "Teraz twoje mieszkanie wygląda…" },
      options: {
        en: ["Tidy, as always", "Lived-in but fine", "Messy, cleaning at the weekend", "Better not open the wardrobe"],
        uk: ["Охайно, як завжди", "Житлово, але нормально", "Безлад, приберу на вихідних", "Шафу краще не відкривати"],
        pl: ["Schludnie, jak zawsze", "Mieszkalnie, ale w porządku", "Bałagan, posprzątam w weekend", "Szafy lepiej nie otwierać"] } },

    { id: 59, pack: "lifestyle",
      text: { en: "When did you last exercise for an hour?", uk: "Коли востаннє тренувався(-лась) годину?", pl: "Kiedy ostatnio ćwiczyłeś/aś przez godzinę?" },
      options: {
        en: ["This week", "This month", "This year", "Can't remember"],
        uk: ["Цього тижня", "Цього місяця", "Цього року", "Не пам'ятаю"],
        pl: ["W tym tygodniu", "W tym miesiącu", "W tym roku", "Nie pamiętam"] } },

    { id: 60, pack: "lifestyle",
      text: { en: "Did you learn something new just for yourself in the past year?", uk: "Чи вчився(-лась) чогось нового для себе за останній рік?", pl: "Czy w ostatnim roku uczyłeś/aś się czegoś nowego dla siebie?" },
      options: {
        en: ["Yes, still at it", "Yes, then dropped it", "Planned to", "No"],
        uk: ["Так, і досі", "Так, але кинув(-ла)", "Планував(-ла)", "Ні"],
        pl: ["Tak, nadal", "Tak, ale rzuciłem/am", "Planowałem/am", "Nie"] } },

    { id: 85, pack: "lifestyle", added: "2026-11-16",
      text: { en: "How big is work in your life right now?", uk: "Яке місце зараз займає робота?", pl: "Jakie miejsce zajmuje teraz praca?" },
      options: {
        en: ["Career comes first", "Balanced", "I work to live", "Between jobs"],
        uk: ["Кар'єра на першому місці", "Баланс", "Працюю, щоб жити", "Між роботами"],
        pl: ["Kariera na pierwszym miejscu", "Równowaga", "Pracuję, żeby żyć", "Między pracami"] } },

    { id: 12, pack: "lifestyle",
      text: { en: "Pets in your life?", uk: "Тварини в твоєму житті?", pl: "Zwierzęta w twoim życiu?" },
      options: {
        en: ["I have a pet", "I want one", "Either way", "I'd rather not"],
        uk: ["Маю", "Хочу", "Без різниці", "Краще без них"],
        pl: ["Mam", "Chcę", "Obojętne", "Wolę bez"] } },

    { id: 40, pack: "lifestyle",
      text: { en: "Do you drive?", uk: "Водиш машину?", pl: "Prowadzisz samochód?" },
      options: {
        en: ["Yes, own car", "Licence, no car", "No licence"],
        uk: ["Так, є машина", "Є права, без машини", "Без прав"],
        pl: ["Tak, mam auto", "Prawo jazdy, bez auta", "Bez prawa jazdy"] } },

    { id: 55, pack: "lifestyle",
      text: { en: "Your partner is away for a week. By day three you feel…", uk: "Партнер(-ка) поїхав(-ла) на тиждень. На третій день ти відчуваєш…", pl: "Partner/ka wyjechał/a na tydzień. Trzeciego dnia czujesz…" },
      options: {
        en: ["Relieved, time for myself", "Fine", "I miss them", "Like something's wrong"],
        uk: ["Полегшення, час для себе", "Нормально", "Сумую", "Ніби щось не так"],
        pl: ["Ulgę, czas dla siebie", "Jest OK", "Tęsknię", "Że coś jest nie tak"] } },

    /* ---------- Habits: your habits vs. the ones you can live with ---------- */
    { id: 65, pack: "habits", multi: true, scoring: "all", none: 3, added: "2026-11-16",
      text: { en: "Be honest. Which of these is you?", uk: "Чесно: що з цього про тебе?", pl: "Szczerze: co z tego to ty?" },
      accept: { en: "Partner habits you can live with", uk: "З якими звичками партнера зможеш жити", pl: "Z jakimi nawykami partnera wytrzymasz" },
      options: {
        en: ["I'm often late", "I snore", "I leave things lying around", "None of these"],
        uk: ["Часто запізнююсь", "Хроплю", "Розкидаю речі", "Нічого з цього"],
        pl: ["Często się spóźniam", "Chrapię", "Zostawiam rzeczy porozrzucane", "Żadne z tych"] } },

    { id: 66, pack: "habits", multi: true, scoring: "all", none: 3, added: "2026-11-16",
      text: { en: "And which of these?", uk: "А з цього?", pl: "A z tego?" },
      accept: { en: "Partner habits you can live with", uk: "З якими звичками партнера зможеш жити", pl: "Z jakimi nawykami partnera wytrzymasz" },
      options: {
        en: ["I'm always on my phone", "I game for hours", "I leave dishes for later", "None of these"],
        uk: ["Постійно в телефоні", "Граю годинами", "Лишаю посуд на потім", "Нічого з цього"],
        pl: ["Ciągle siedzę w telefonie", "Gram godzinami", "Zostawiam naczynia na później", "Żadne z tych"] } },

    { id: 86, pack: "habits", multi: true, scoring: "all", none: 3, added: "2026-11-16",
      text: { en: "And these?", uk: "А це?", pl: "A to?" },
      accept: { en: "Partner habits you can live with", uk: "З якими звичками партнера зможеш жити", pl: "Z jakimi nawykami partnera wytrzymasz" },
      options: {
        en: ["I'm always cold", "I sleep with the window open", "I bring work home", "None of these"],
        uk: ["Мені завжди холодно", "Сплю з відчиненим вікном", "Приношу роботу додому", "Нічого з цього"],
        pl: ["Zawsze mi zimno", "Śpię przy otwartym oknie", "Przynoszę pracę do domu", "Żadne z tych"] } },

    /* ---------- Dating ---------- */
    { id: 14, pack: "dating",
      text: { en: "How often should you text early on?", uk: "Як часто переписуватися на початку стосунків?", pl: "Jak często pisać do siebie na początku znajomości?" },
      options: {
        en: ["Daily is a must", "Most days", "A few times a week", "When there's something to say"],
        uk: ["Щодня обов'язково", "Майже щодня", "Кілька разів на тиждень", "Коли є що сказати"],
        pl: ["Codziennie, koniecznie", "Prawie codziennie", "Kilka razy w tygodniu", "Kiedy jest coś do powiedzenia"] } },

    { id: 27, pack: "dating",
      text: { en: "Before a first date, you'd rather…", uk: "Перед першим побаченням тобі краще…", pl: "Przed pierwszą randką wolisz…" },
      options: {
        en: ["Meet as soon as possible", "Text for about a week", "Text for a few weeks", "Be friends first"],
        uk: ["Зустрітися якнайшвидше", "Листуватися десь тиждень", "Листуватися кілька тижнів", "Спершу подружитися"],
        pl: ["Spotkać się jak najszybciej", "Pisać ok. tygodnia", "Pisać kilka tygodni", "Najpierw się zaprzyjaźnić"] } },

    { id: 28, pack: "dating",
      text: { en: "Who should write first?", uk: "Хто має писати першим?", pl: "Kto powinien napisać pierwszy?" },
      options: {
        en: ["The man", "Either", "The woman"],
        uk: ["Чоловік", "Будь-хто", "Жінка"],
        pl: ["Mężczyzna", "Ktokolwiek", "Kobieta"] } },

    { id: 81, pack: "dating", added: "2026-11-16",
      text: { en: "Flowers and small gifts for you…", uk: "Квіти й дрібні подарунки для тебе…", pl: "Kwiaty i drobne prezenty dla ciebie…" },
      options: {
        en: ["Often, please", "On occasions", "Rarely", "Not needed"],
        uk: ["Часто, будь ласка", "З нагоди", "Рідко", "Не потрібно"],
        pl: ["Często, poproszę", "Od święta", "Rzadko", "Niepotrzebne"] } },

    { id: 57, pack: "dating", quick: true,
      text: { en: "They pick an expensive place for a date. You…", uk: "Інша людина обирає дороге місце для побачення. Ти…", pl: "Druga osoba wybiera drogie miejsce na randkę. Ty…" },
      options: {
        en: ["Happily pay", "Suggest splitting", "Suggest somewhere cheaper", "Expect them to pay, they chose it"],
        uk: ["Охоче плачу", "Пропоную навпіл", "Пропоную щось дешевше", "Чекаю, що заплатить той, хто обрав"],
        pl: ["Chętnie płacę", "Proponuję po połowie", "Proponuję coś tańszego", "Oczekuję, że zapłaci ten, kto wybrał"] } },

    { id: 30, pack: "dating", sensitive: true,
      text: { en: "When is it OK to go to each other's place?", uk: "Коли нормально піти одне до одного додому?", pl: "Kiedy można odwiedzić się w domu?" },
      options: {
        en: ["Fine early on", "After a few dates", "Once we're a couple"],
        uk: ["Нормально одразу", "Після кількох побачень", "Коли вже пара"],
        pl: ["Od początku OK", "Po kilku randkach", "Gdy jesteśmy parą"] } },

    { id: 31, pack: "dating", sensitive: true,
      text: { en: "How do you flirt by text?", uk: "Як ти фліртуєш у переписці?", pl: "Jak flirtujesz w wiadomościach?" },
      options: {
        en: ["Bold from the start", "Builds gradually", "Mostly after meeting", "Keep it light"],
        uk: ["Сміливо з самого початку", "Поступово", "Здебільшого після зустрічі", "Легко, без натяків"],
        pl: ["Odważnie od początku", "Stopniowo", "Głównie po spotkaniu", "Lekko, bez podtekstów"] } },

    /* ---------- Together ---------- */
    { id: 15, pack: "together",
      text: { en: "When would you move in together?", uk: "Коли готовий(-а) жити разом?", pl: "Kiedy zamieszkać razem?" },
      options: {
        en: ["Within a year", "After 1–2 years", "After marriage", "Prefer separate places"],
        uk: ["Протягом року", "Через 1–2 роки", "Після шлюбу", "Краще окремо"],
        pl: ["W ciągu roku", "Po 1–2 latach", "Po ślubie", "Wolę osobno"] } },

    { id: 61, pack: "together",
      text: { en: "Your mum calls in the middle of a date. You…", uk: "Мама дзвонить посеред побачення. Ти…", pl: "Mama dzwoni w trakcie randki. Ty…" },
      options: {
        en: ["Answer", "Text \u201clater\u201d", "Call back after", "Depends on the mum"],
        uk: ["Відповідаю", "Пишу «пізніше»", "Передзвоню після", "Залежить від мами"],
        pl: ["Odbieram", "Piszę „później”", "Oddzwonię po", "Zależy od mamy"] } },

    { id: 56, pack: "together", quick: true,
      text: { en: "They're 40 minutes late without a text. You…", uk: "Запізнюється на 40 хвилин і не написав(-ла). Ти…", pl: "Spóźnia się 40 minut bez wiadomości. Ty…" },
      options: {
        en: ["Let it go, it happens", "Mention it calmly later", "Ask right away what happened", "Already upset when they arrive"],
        uk: ["Відпускаю, буває", "Спокійно скажу пізніше", "Одразу питаю, що сталося", "Вже злюсь, коли приходить"],
        pl: ["Odpuszczam, zdarza się", "Spokojnie wspomnę później", "Od razu pytam, co się stało", "Jestem zły/a, zanim przyjdzie"] } },

    { id: 18, pack: "together", multi: true,
      text: { en: "How do you show care?", uk: "Як ти проявляєш турботу?", pl: "Jak okazujesz troskę?" },
      options: "care" },

    { id: 42, pack: "together", multi: true,
      text: { en: "What do you most want to receive?", uk: "Що найбільше хочеш отримувати?", pl: "Co najbardziej chcesz dostawać?" },
      options: "care" },

    { id: 19, pack: "together", multi: true,
      text: { en: "What's your humour like?", uk: "Який у тебе гумор?", pl: "Jakie masz poczucie humoru?" },
      options: {
        en: ["Dry", "Silly", "Dark", "Gentle"],
        uk: ["Сухий", "Дурнуватий", "Чорний", "М'який"],
        pl: ["Suche", "Głupkowate", "Czarne", "Łagodne"] } },

    { id: 20, pack: "together",
      text: { en: "How do you like to plan?", uk: "Як ти плануєш?", pl: "Jak lubisz planować?" },
      options: {
        en: ["Plan everything", "Mostly plan", "Mostly spontaneous", "Fully spontaneous"],
        uk: ["Планую все", "Здебільшого планую", "Здебільшого спонтанно", "Повністю спонтанно"],
        pl: ["Planuję wszystko", "Raczej planuję", "Raczej spontanicznie", "Całkiem spontanicznie"] } },

    { id: 82, pack: "together", added: "2026-11-16",
      text: { en: "Who should do the housework?", uk: "Хто має робити домашні справи?", pl: "Kto powinien zajmować się domem?" },
      options: {
        en: ["Split 50/50", "Whoever likes what", "Mostly me", "Mostly my partner"],
        uk: ["Навпіл", "Хто що любить", "Здебільшого я", "Здебільшого партнер(-ка)"],
        pl: ["Po połowie", "Kto co lubi", "Głównie ja", "Głównie partner/ka"] } },

    { id: 34, pack: "together", multi: true,
      text: { en: "After a hard day, you want…", uk: "Після важкого дня ти хочеш…", pl: "Po ciężkim dniu chcesz…" },
      options: {
        en: ["To talk it through", "Quiet time alone", "A distraction together", "Support, no advice"],
        uk: ["Проговорити", "Тиші наодинці", "Відволіктися разом", "Підтримки без порад"],
        pl: ["Przegadać to", "Ciszy w samotności", "Oderwać się razem", "Wsparcia bez rad"] } },

    { id: 23, pack: "together",
      text: { en: "How should a couple handle money?", uk: "Як парі вести гроші?", pl: "Jak para powinna zarządzać pieniędzmi?" },
      options: {
        en: ["Fully shared", "Shared plus personal", "Separate, split 50/50", "Separate, split by income"],
        uk: ["Повністю спільні", "Спільні плюс особисті", "Окремо, навпіл", "Окремо, пропорційно доходу"],
        pl: ["Całkiem wspólne", "Wspólne plus osobiste", "Osobno, po połowie", "Osobno, według dochodu"] } },

    { id: 41, pack: "together", sensitive: true,
      text: { en: "How much physical affection do you like?", uk: "Скільки тактильності тобі треба?", pl: "Ile czułości fizycznej lubisz?" },
      options: {
        en: ["Lots, in public too", "Lots, in private", "Moderate", "Little"],
        uk: ["Багато, і на людях", "Багато, наодинці", "Помірно", "Мало"],
        pl: ["Dużo, także publicznie", "Dużo, prywatnie", "Umiarkowanie", "Mało"] } },

    /* ---------- Privacy and trust ---------- */
    { id: 35, pack: "trust",
      text: { en: "Would you post your relationship?", uk: "Чи показуєш стосунки в соцмережах?", pl: "Czy pokazujesz związek w social mediach?" },
      options: {
        en: ["Post openly", "Occasionally", "Keep it private", "No photos of me online"],
        uk: ["Викладаю відкрито", "Іноді", "Не виставляю", "Жодних моїх фото в мережі"],
        pl: ["Pokazuję otwarcie", "Czasem", "Nie pokazuję", "Żadnych moich zdjęć w sieci"] } },

    { id: 36, pack: "trust",
      text: { en: "How much do you tell friends about your relationship?", uk: "Скільки розповідаєш друзям про стосунки?", pl: "Ile opowiadasz znajomym o związku?" },
      options: {
        en: ["Share a lot", "Some", "Basics only", "Nothing private"],
        uk: ["Багато ділюсь", "Дещо", "Лише загальне", "Нічого особистого"],
        pl: ["Dużo opowiadam", "Trochę", "Tylko ogólnie", "Nic prywatnego"] } },

    { id: 58, pack: "trust",
      text: { en: "Their phone lights up: “miss you 😘” from a name you don't know. You…", uk: "У партнера(-ки) на телефоні: «сумую 😘» від незнайомого імені. Ти…", pl: "Na telefonie partnera/ki: „tęsknię 😘” od nieznanego imienia. Ty…" },
      options: {
        en: ["Ask calmly", "Wait for them to mention it", "Assume it's nothing", "Look at the phone"],
        uk: ["Спокійно питаю", "Чекаю, що сам(а) скаже", "Вважаю, що це нічого", "Дивлюсь у телефон"],
        pl: ["Spokojnie pytam", "Czekam, aż sam/a powie", "Uznaję, że to nic", "Zaglądam do telefonu"] } },

    { id: 38, pack: "trust",
      text: { en: "Your partner having close friends of the opposite sex?", uk: "Близькі друзі протилежної статі в партнера?", pl: "Bliscy przyjaciele płci przeciwnej u partnera?" },
      options: {
        en: ["Fine", "Fine, if it's open", "Casual friends only", "Not OK"],
        uk: ["Нормально", "Нормально, якщо відкрито", "Лише знайомі", "Неприйнятно"],
        pl: ["W porządku", "W porządku, jeśli otwarcie", "Tylko znajomi", "Nie do przyjęcia"] } },

    { id: 39, pack: "trust",
      text: { en: "Staying in touch with exes?", uk: "Спілкування з колишніми?", pl: "Kontakt z byłymi?" },
      options: {
        en: ["Friends is fine", "Only if no feelings are left", "Minimal", "None"],
        uk: ["Дружити нормально", "Лише якщо почуттів не лишилось", "Мінімальний", "Жодного"],
        pl: ["Przyjaźń jest OK", "Tylko jeśli nie ma uczuć", "Minimalny", "Żaden"] } },

    { id: 78, pack: "trust", added: "2026-11-16",
      text: { en: "Your partner goes to a party without you. You…", uk: "Партнер(-ка) йде на вечірку без тебе. Ти…", pl: "Partner/ka idzie na imprezę bez ciebie. Ty…" },
      options: {
        en: ["Enjoy my own evening", "Ask for a text now and then", "Want to know who'll be there", "Would rather they didn't go"],
        uk: ["Проводжу вечір для себе", "Прошу іноді писати", "Хочу знати, хто там буде", "Волію, щоб не йшов(-ла)"],
        pl: ["Spędzam wieczór dla siebie", "Proszę, żeby czasem napisał/a", "Chcę wiedzieć, kto tam będzie", "Wolę, żeby nie szedł/szła"] } },

    /* ---------- Beliefs and personal ---------- */
    { id: 25, pack: "beliefs", sensitive: true,
      text: { en: "Religion in your life?", uk: "Релігія в твоєму житті?", pl: "Religia w twoim życiu?" },
      options: {
        en: ["Not religious", "Spiritual, not religious", "Practising, not pushy", "Central to my life"],
        uk: ["Нерелігійний(-а)", "Духовність без конфесії", "Практикую, але не нав'язую", "Центральне в житті"],
        pl: ["Niereligijny/a", "Duchowość bez instytucji", "Praktykuję, nie narzucam", "Centrum mojego życia"] } },

    { id: 26, pack: "beliefs", sensitive: true,
      text: { en: "Your politics?", uk: "Твої політичні погляди?", pl: "Twoje poglądy polityczne?" },
      options: {
        en: ["Left", "Centre", "Right", "Not interested"],
        uk: ["Ліві", "Центр", "Праві", "Не цікавлюсь"],
        pl: ["Lewica", "Centrum", "Prawica", "Nie interesuję się"] } },

    { id: 46, pack: "beliefs",
      text: { en: "What do you think of astrology, tarot and family constellations?", uk: "Що думаєш про астрологію, таро й розстановки?", pl: "Co myślisz o astrologii, tarocie i ustawieniach rodzinnych?" },
      options: {
        en: ["Into it", "Curious", "Sceptical", "Hard no"],
        uk: ["Захоплююсь", "Цікаво", "Скептично", "Категорично ні"],
        pl: ["Interesuję się", "Ciekawi mnie", "Sceptycznie", "Zdecydowanie nie"] } },

    { id: 44, pack: "beliefs", sensitive: true,
      text: { en: "Your attachment style, as you see it?", uk: "Твій тип прив'язаності, як ти вважаєш?", pl: "Twój styl przywiązania, jak sądzisz?" },
      options: {
        en: ["Secure", "Anxious", "Avoidant", "Don't know"],
        uk: ["Надійний", "Тривожний", "Уникаючий", "Не знаю"],
        pl: ["Bezpieczny", "Lękowy", "Unikający", "Nie wiem"] } },

    { id: 45, pack: "beliefs", sensitive: true,
      text: { en: "Have you been to therapy?", uk: "Ходив(-ла) до психолога?", pl: "Chodziłeś/aś na terapię?" },
      options: {
        en: ["Going or went, it helped", "Went, it didn't help", "Never, open to it", "Never, not for me"],
        uk: ["Ходжу чи ходив(-ла), допомогло", "Ходив(-ла), не допомогло", "Не ходив(-ла), але відкритий(-а)", "Не ходив(-ла), не моє"],
        pl: ["Chodzę lub chodziłem/am, pomogło", "Chodziłem/am, nie pomogło", "Nigdy, ale jestem otwarty/a", "Nigdy, nie dla mnie"] } },

    /* ---------- Double standards: all "him" rules first, then the "her" versions ---------- */
    { id: 67, pack: "mirror", added: "2026-11-16",
      text: { en: "“If he earns more, he decides on big purchases.”",
              uk: "«Якщо він заробляє більше, великі покупки вирішує він.»",
              pl: "„Jeśli on zarabia więcej, to on decyduje o dużych zakupach.”" },
      options: "agree" },

    { id: 69, pack: "mirror", added: "2026-11-16",
      text: { en: "“It's fine if he earns less than her.”",
              uk: "«Нормально, якщо він заробляє менше за неї.»",
              pl: "„To normalne, jeśli on zarabia mniej niż ona.”" },
      options: "agree" },

    { id: 71, pack: "mirror", added: "2026-11-16",
      text: { en: "“It's fine for him to stay home with the kids while she works.”",
              uk: "«Нормально, якщо він сидить удома з дітьми, а вона працює.»",
              pl: "„To normalne, że on zostaje w domu z dziećmi, a ona pracuje.”" },
      options: "agree" },

    { id: 68, pack: "mirror", mirrorOf: 67, added: "2026-11-16",
      text: { en: "“If she earns more, she decides on big purchases.”",
              uk: "«Якщо вона заробляє більше, великі покупки вирішує вона.»",
              pl: "„Jeśli ona zarabia więcej, to ona decyduje o dużych zakupach.”" },
      options: "agree" },

    { id: 70, pack: "mirror", mirrorOf: 69, added: "2026-11-16",
      text: { en: "“It's fine if she earns less than him.”",
              uk: "«Нормально, якщо вона заробляє менше за нього.»",
              pl: "„To normalne, jeśli ona zarabia mniej niż on.”" },
      options: "agree" },

    { id: 72, pack: "mirror", mirrorOf: 71, added: "2026-11-16",
      text: { en: "“It's fine for her to stay home with the kids while he works.”",
              uk: "«Нормально, якщо вона сидить удома з дітьми, а він працює.»",
              pl: "„To normalne, że ona zostaje w domu z dziećmi, a on pracuje.”" },
      options: "agree" },

    /* ---------- Three odd ones (OkCupid's long-term predictors) ---------- */
    { id: 62, pack: "odd",
      text: { en: "Do you like horror movies?", uk: "Любиш фільми жахів?", pl: "Lubisz horrory?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 63, pack: "odd",
      text: { en: "Have you ever travelled alone in another country?", uk: "Подорожував(-ла) колись сам(а) по іншій країні?", pl: "Podróżowałeś/aś kiedyś sam/a po innym kraju?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 64, pack: "odd", quick: true,
      text: { en: "Wouldn't it be fun to drop everything and live on a sailboat?", uk: "Хіба не класно було б кинути все й жити на яхті?", pl: "Czy nie byłoby fajnie rzucić wszystko i zamieszkać na żaglówce?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    /* ---------- Hot takes (newest first) ---------- */
    { id: 79, pack: "hottakes", added: "2026-11-16",
      text: { en: "“A prenup is normal, not a sign of distrust.”",
              uk: "«Шлюбний договір це нормально, а не недовіра.»",
              pl: "„Intercyza to normalna rzecz, a nie brak zaufania.”" },
      options: "agree" },

    { id: 49, pack: "hottakes",
      text: { en: "“His salary is the family budget, hers is her own.”",
              uk: "«Зарплата чоловіка — сімейний бюджет, зарплата жінки — її зарплата.»",
              pl: "„Pensja mężczyzny to budżet rodziny, pensja kobiety to jej pensja.”" },
      options: "agree" },

    { id: 50, pack: "hottakes",
      text: { en: "“The man creates the conditions, the woman creates the calm.”",
              uk: "«Чоловік створює умови, жінка створює спокій.»",
              pl: "„Mężczyzna tworzy warunki, kobieta tworzy spokój.”" },
      options: "agree" },

    { id: 51, pack: "hottakes",
      text: { en: "“Looking for friends on a dating app is fine.”",
              uk: "«Шукати друзів у додатку для знайомств — нормально.»",
              pl: "„Szukanie przyjaciół w aplikacji randkowej jest OK.”" },
      options: "agree" },

    { id: 52, pack: "hottakes",
      text: { en: "“Not having Instagram is a red flag.”",
              uk: "«Немає інстаграму — червоний прапорець.»",
              pl: "„Brak Instagrama to czerwona flaga.”" },
      options: "agree" },

    { id: 53, pack: "hottakes",
      text: { en: "“Sending a list of questions before a first date is normal.”",
              uk: "«Надіслати список питань перед першим побаченням — нормально.»",
              pl: "„Wysłanie listy pytań przed pierwszą randką to normalne.”" },
      options: "agree" },

    /* ---------- Retired: kept so codes made earlier still decode ---------- */
    { id: 8, pack: "lifestyle", retired: true, /* replaced by 55 */
      text: { en: "Personal space", uk: "Особистий простір", pl: "Przestrzeń osobista" },
      options: {
        en: ["I need lots of time alone", "Some", "A little", "Together as much as possible"],
        uk: ["Потрібно багато часу наодинці", "Трохи", "Небагато", "Разом якомога більше"],
        pl: ["Potrzebuję dużo czasu dla siebie", "Trochę", "Niewiele", "Razem jak najwięcej"] } },

    { id: 11, pack: "lifestyle", retired: true, /* replaced by 59 */
      text: { en: "Physical activity", uk: "Фізична активність", pl: "Aktywność fizyczna" },
      options: {
        en: ["Very active", "Moderate", "Light", "Not active"],
        uk: ["Дуже активний(-а)", "Помірно", "Трохи", "Неактивний(-а)"],
        pl: ["Bardzo aktywny/a", "Umiarkowanie", "Trochę", "Nieaktywny/a"] } },

    { id: 13, pack: "lifestyle", retired: true, /* removed in the Nov 2026 review */
      text: { en: "Social media", uk: "Соцмережі", pl: "Media społecznościowe" },
      options: {
        en: ["Post often", "Sometimes", "Rarely", "Not on it"],
        uk: ["Викладаю часто", "Іноді", "Рідко", "Не користуюсь"],
        pl: ["Publikuję często", "Czasem", "Rzadko", "Nie korzystam"] } },

    { id: 16, pack: "together", retired: true, /* replaced by 61 */
      text: { en: "Visiting parents", uk: "Візити до батьків", pl: "Wizyty u rodziców" },
      options: {
        en: ["Weekly", "Every 2 weeks", "Monthly", "Rarely"],
        uk: ["Щотижня", "Раз на 2 тижні", "Раз на місяць", "Рідко"],
        pl: ["Co tydzień", "Co 2 tygodnie", "Raz w miesiącu", "Rzadko"] } },

    { id: 17, pack: "together", retired: true, /* replaced by 56 */
      text: { en: "In a conflict", uk: "У конфлікті", pl: "W konflikcie" },
      options: {
        en: ["Talk right away", "Cool down, then talk", "Talk the next day or later", "Let it go"],
        uk: ["Говорю одразу", "Охолону, тоді говорю", "Говорю наступного дня чи пізніше", "Відпускаю"],
        pl: ["Rozmawiam od razu", "Ochłonę, potem rozmawiam", "Rozmawiam następnego dnia lub później", "Odpuszczam"] } },

    { id: 21, pack: "core", retired: true, /* replaced by 54 */
      text: { en: "With money you are", uk: "З грошима ти", pl: "Z pieniędzmi jesteś" },
      options: {
        en: ["A saver", "Mostly a saver", "Mostly a spender", "A spender"],
        uk: ["Ощадливий(-а)", "Радше ощадливий(-а)", "Радше транжира", "Транжира"],
        pl: ["Oszczędny/a", "Raczej oszczędny/a", "Raczej rozrzutny/a", "Rozrzutny/a"] } },

    { id: 22, pack: "dating", retired: true, /* replaced by 57 */
      text: { en: "The bill on a first date", uk: "Рахунок на першому побаченні", pl: "Rachunek na pierwszej randce" },
      options: {
        en: ["The man pays", "Whoever invited", "Split", "Take turns"],
        uk: ["Платить чоловік", "Хто запросив", "Навпіл", "По черзі"],
        pl: ["Płaci mężczyzna", "Kto zaprosił", "Po połowie", "Na zmianę"] } },

    { id: 24, pack: "lifestyle", retired: true, /* replaced by 80 */
      text: { en: "Moving", uk: "Переїзд", pl: "Przeprowadzka" },
      options: {
        en: ["Staying where I am", "Open to moving within the country", "Open to moving abroad", "Planning to move"],
        uk: ["Залишаюсь, де є", "Готовий(-а) в межах країни", "Готовий(-а) за кордон", "Планую переїхати"],
        pl: ["Zostaję tam, gdzie jestem", "Mogę w obrębie kraju", "Mogę za granicę", "Planuję się przenieść"] } },

    { id: 29, pack: "dating", retired: true, /* replaced by 81 */
      text: { en: "Flowers and small gifts", uk: "Квіти й дрібні подарунки", pl: "Kwiaty i drobne prezenty" },
      options: {
        en: ["Often", "On occasions", "Rarely", "Not needed"],
        uk: ["Часто", "З нагоди", "Рідко", "Не потрібно"],
        pl: ["Często", "Od święta", "Rzadko", "Niepotrzebne"] } },

    { id: 32, pack: "together", retired: true, /* removed in the Nov 2026 review */
      text: { en: "Roles in a couple", uk: "Ролі в парі", pl: "Role w związku" },
      options: {
        en: ["Traditional", "Mostly traditional", "Split by strengths", "Strictly equal"],
        uk: ["Традиційні", "Радше традиційні", "За сильними сторонами", "Строго порівну"],
        pl: ["Tradycyjne", "Raczej tradycyjne", "Według mocnych stron", "Ściśle po równo"] } },

    { id: 33, pack: "together", retired: true, /* replaced by 82 */ multi: true,
      text: { en: "Housework", uk: "Домашні справи", pl: "Obowiązki domowe" },
      options: {
        en: ["50/50", "By preference", "Mostly one partner", "Outsource what we can"],
        uk: ["50/50", "Хто що любить", "Здебільшого один", "Делегувати, що можна"],
        pl: ["50/50", "Kto co lubi", "Głównie jedna osoba", "Zlecać, co się da"] } },

    { id: 37, pack: "trust", retired: true, /* replaced by 58 */
      text: { en: "Phones", uk: "Телефони", pl: "Telefony" },
      options: {
        en: ["Open to each other", "Private, nothing to hide", "Fully private"],
        uk: ["Відкриті одне для одного", "Особисті, але нічого не приховую", "Повністю особисті"],
        pl: ["Otwarte dla siebie", "Prywatne, nic do ukrycia", "Całkiem prywatne"] } },

    { id: 43, pack: "lifestyle", retired: true, /* replaced by 60 */
      text: { en: "Goals", uk: "Цілі", pl: "Cele" },
      options: {
        en: ["Clear goals, working on them", "Clear goals, not started yet", "Still figuring it out", "Happy as things are"],
        uk: ["Чіткі цілі, працюю над ними", "Чіткі цілі, ще не почав(-ла)", "Ще шукаю себе", "Мене все влаштовує"],
        pl: ["Jasne cele, pracuję nad nimi", "Jasne cele, jeszcze nie zacząłem/zaczęłam", "Wciąż szukam", "Jest dobrze, jak jest"] } },

    { id: 47, pack: "beliefs", retired: true, /* removed in the Nov 2026 review */ sensitive: true,
      text: { en: "Over your last relationship?", uk: "Відпустив(-ла) минулі стосунки?", pl: "Poprzedni związek masz za sobą?" },
      options: {
        en: ["Fully", "Mostly", "Still processing"],
        uk: ["Повністю", "Здебільшого", "Ще переживаю"],
        pl: ["Całkowicie", "W większości", "Wciąż przeżywam"] } }
  ]
};
