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
  Next free id: 80
*/
window.PAIRCODE_DATA = {
  languages: ["en", "uk", "pl"],

  packs: [
    { key: "core",      title: { en: "Must-knows",          uk: "Головне",                   pl: "Najważniejsze" } },
    { key: "odd",       title: { en: "Three odd ones",      uk: "Три дивні питання",         pl: "Trzy dziwne pytania" },
      note: { en: "In OkCupid's data, couples who agreed on these three tended to stay together longer.",
              uk: "За даними OkCupid, пари, які збігаються в цих трьох, зазвичай довше разом.",
              pl: "Według danych OkCupid pary zgodne w tych trzech pytaniach zwykle są razem dłużej." } },
    { key: "lifestyle", title: { en: "Lifestyle",           uk: "Спосіб життя",              pl: "Styl życia" } },
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
      text: { en: "Your age", uk: "Твій вік", pl: "Twój wiek" },
      options: {
        en: ["18–25", "26–32", "33–40", "41+"],
        uk: ["18–25", "26–32", "33–40", "41+"],
        pl: ["18–25", "26–32", "33–40", "41+"] } },

    { id: 3, pack: "core", quick: true,
      text: { en: "Do you have children?", uk: "Маєш дітей?", pl: "Masz dzieci?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 48, pack: "core", quick: true, showIf: { id: 3, answer: 0 },
      text: { en: "Your children:", uk: "Твої діти:", pl: "Twoje dzieci:" },
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
      text: { en: "Smoking", uk: "Куріння", pl: "Palenie" },
      options: {
        en: ["No", "Vape only", "Rarely, at parties", "Regularly"],
        uk: ["Не курю", "Лише вейп", "Рідко, на вечірках", "Регулярно"],
        pl: ["Nie palę", "Tylko e-papieros", "Rzadko, na imprezach", "Regularnie"] } },

    { id: 6, pack: "core",
      text: { en: "Alcohol", uk: "Алкоголь", pl: "Alkohol" },
      options: {
        en: ["Never", "Rarely", "Moderately, on weekends", "Often"],
        uk: ["Ніколи", "Рідко", "Помірно, на вихідних", "Часто"],
        pl: ["Nigdy", "Rzadko", "Umiarkowanie, w weekendy", "Często"] } },

    { id: 14, pack: "core",
      text: { en: "How often should you text early on?", uk: "Як часто переписуватися на початку стосунків?", pl: "Jak często pisać do siebie na początku znajomości?" },
      options: {
        en: ["Daily is a must", "Most days", "A few times a week", "When there's something to say"],
        uk: ["Щодня обов'язково", "Майже щодня", "Кілька разів на тиждень", "Коли є що сказати"],
        pl: ["Codziennie, koniecznie", "Prawie codziennie", "Kilka razy w tygodniu", "Kiedy jest coś do powiedzenia"] } },

    { id: 21, pack: "core", retired: true, /* replaced by 54 */
      text: { en: "With money you are", uk: "З грошима ти", pl: "Z pieniędzmi jesteś" },
      options: {
        en: ["A saver", "Mostly a saver", "Mostly a spender", "A spender"],
        uk: ["Ощадливий(-а)", "Радше ощадливий(-а)", "Радше транжира", "Транжира"],
        pl: ["Oszczędny/a", "Raczej oszczędny/a", "Raczej rozrzutny/a", "Rozrzutny/a"] } },

    { id: 54, pack: "core", quick: true,
      text: { en: "You unexpectedly get a month's salary. First thing you do?",
              uk: "Несподівано отримуєш місячну зарплату. Що робиш першим?",
              pl: "Niespodziewanie dostajesz równowartość miesięcznej pensji. Co robisz najpierw?" },
      options: {
        en: ["Save or invest it", "Pay something off", "A trip or an experience", "Treat myself and people close to me"],
        uk: ["Відкладаю чи інвестую", "Гашу борг чи кредит", "Поїздка чи враження", "Балую себе й близьких"],
        pl: ["Odkładam lub inwestuję", "Spłacam coś", "Wyjazd albo przeżycie", "Rozpieszczam siebie i bliskich"] } },

    { id: 27, pack: "core",
      text: { en: "Before the first date", uk: "Перед першим побаченням", pl: "Przed pierwszą randką" },
      options: {
        en: ["Meet as soon as possible", "Text for about a week", "Text for a few weeks", "Friends first"],
        uk: ["Зустрітися якнайшвидше", "Переписка десь тиждень", "Переписка кілька тижнів", "Спершу дружба"],
        pl: ["Spotkać się jak najszybciej", "Pisać ok. tygodnia", "Pisać kilka tygodni", "Najpierw przyjaźń"] } },

    /* ---------- Three odd ones (OkCupid's long-term predictors) ---------- */
    { id: 62, pack: "odd", quick: true,
      text: { en: "Do you like horror movies?", uk: "Любиш фільми жахів?", pl: "Lubisz horrory?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 63, pack: "odd",
      text: { en: "Have you ever travelled alone in another country?", uk: "Подорожував(-ла) колись сам(а) по іншій країні?", pl: "Podróżowałeś/aś kiedyś sam/a po innym kraju?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 64, pack: "odd", quick: true,
      text: { en: "Wouldn't it be fun to drop everything and live on a sailboat?", uk: "Хіба не класно було б кинути все й жити на яхті?", pl: "Czy nie byłoby fajnie rzucić wszystko i zamieszkać na żaglówce?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    /* ---------- Lifestyle ---------- */
    { id: 7, pack: "lifestyle",
      text: { en: "Social life", uk: "Соціальне життя", pl: "Życie towarzyskie" },
      options: {
        en: ["Homebody", "Small circle", "Balanced", "Out most weekends"],
        uk: ["Домосід(-ка)", "Вузьке коло", "Збалансовано", "Більшість вихідних на людях"],
        pl: ["Domator/ka", "Wąskie grono", "Pół na pół", "Większość weekendów poza domem"] } },

    { id: 8, pack: "lifestyle", retired: true, /* replaced by 55 */
      text: { en: "Personal space", uk: "Особистий простір", pl: "Przestrzeń osobista" },
      options: {
        en: ["I need lots of time alone", "Some", "A little", "Together as much as possible"],
        uk: ["Потрібно багато часу наодинці", "Трохи", "Небагато", "Разом якомога більше"],
        pl: ["Potrzebuję dużo czasu dla siebie", "Trochę", "Niewiele", "Razem jak najwięcej"] } },

    { id: 55, pack: "lifestyle",
      text: { en: "Your partner is away for a week. By day three you feel",
              uk: "Партнер(-ка) поїхав(-ла) на тиждень. На третій день ти відчуваєш",
              pl: "Partner/ka wyjechał/a na tydzień. Trzeciego dnia czujesz" },
      options: {
        en: ["Relieved, time for myself", "Fine", "I miss them", "Like something's wrong"],
        uk: ["Полегшення, час для себе", "Нормально", "Сумую", "Ніби щось не так"],
        pl: ["Ulgę, czas dla siebie", "Jest OK", "Tęsknię", "Że coś jest nie tak"] } },

    { id: 9, pack: "lifestyle", multi: true,
      text: { en: "Your rhythm", uk: "Твій ритм", pl: "Twój rytm" },
      options: {
        en: ["Early bird", "Night owl", "Shift work", "Flexible"],
        uk: ["Жайворонок", "Сова", "Змінна робота", "Гнучкий графік"],
        pl: ["Skowronek", "Sowa", "Praca zmianowa", "Elastycznie"] } },

    { id: 10, pack: "lifestyle", multi: true,
      text: { en: "Ideal weekend", uk: "Ідеальні вихідні", pl: "Idealny weekend" },
      options: {
        en: ["Rest at home", "Hobbies and projects", "Trips and nature", "Events and parties"],
        uk: ["Відпочинок вдома", "Хобі та проєкти", "Поїздки й природа", "Події та вечірки"],
        pl: ["Odpoczynek w domu", "Hobby i projekty", "Wycieczki i natura", "Wydarzenia i imprezy"] } },

    { id: 11, pack: "lifestyle", retired: true, /* replaced by 59 */
      text: { en: "Physical activity", uk: "Фізична активність", pl: "Aktywność fizyczna" },
      options: {
        en: ["Very active", "Moderate", "Light", "Not active"],
        uk: ["Дуже активний(-а)", "Помірно", "Трохи", "Неактивний(-а)"],
        pl: ["Bardzo aktywny/a", "Umiarkowanie", "Trochę", "Nieaktywny/a"] } },

    { id: 59, pack: "lifestyle",
      text: { en: "Last time you did an hour of sport", uk: "Коли востаннє займався(-лась) спортом годину?", pl: "Kiedy ostatnio ćwiczyłeś/aś przez godzinę?" },
      options: {
        en: ["This week", "This month", "This year", "Can't remember"],
        uk: ["Цього тижня", "Цього місяця", "Цього року", "Не пам'ятаю"],
        pl: ["W tym tygodniu", "W tym miesiącu", "W tym roku", "Nie pamiętam"] } },

    { id: 12, pack: "lifestyle", multi: true,
      text: { en: "Pets", uk: "Тварини", pl: "Zwierzęta" },
      options: {
        en: ["Have one", "Want one", "Either way", "No pets"],
        uk: ["Маю", "Хочу", "Без різниці", "Без тварин"],
        pl: ["Mam", "Chcę", "Obojętne", "Bez zwierząt"] } },

    { id: 13, pack: "lifestyle",
      text: { en: "Social media", uk: "Соцмережі", pl: "Media społecznościowe" },
      options: {
        en: ["Post often", "Sometimes", "Rarely", "Not on it"],
        uk: ["Викладаю часто", "Іноді", "Рідко", "Не користуюсь"],
        pl: ["Publikuję często", "Czasem", "Rzadko", "Nie korzystam"] } },

    { id: 40, pack: "lifestyle",
      text: { en: "Getting around", uk: "Пересування", pl: "Poruszanie się" },
      options: {
        en: ["Own car", "Licence, no car", "No licence"],
        uk: ["Є машина", "Є права, без машини", "Без прав"],
        pl: ["Mam auto", "Prawo jazdy, bez auta", "Bez prawa jazdy"] } },

    { id: 24, pack: "lifestyle",
      text: { en: "Moving", uk: "Переїзд", pl: "Przeprowadzka" },
      options: {
        en: ["Staying where I am", "Open to moving within the country", "Open to moving abroad", "Planning to move"],
        uk: ["Залишаюсь, де є", "Готовий(-а) в межах країни", "Готовий(-а) за кордон", "Планую переїхати"],
        pl: ["Zostaję tam, gdzie jestem", "Mogę w obrębie kraju", "Mogę za granicę", "Planuję się przenieść"] } },

    { id: 43, pack: "lifestyle", retired: true, /* replaced by 60 */
      text: { en: "Goals", uk: "Цілі", pl: "Cele" },
      options: {
        en: ["Clear goals, working on them", "Clear goals, not started yet", "Still figuring it out", "Happy as things are"],
        uk: ["Чіткі цілі, працюю над ними", "Чіткі цілі, ще не почав(-ла)", "Ще шукаю себе", "Мене все влаштовує"],
        pl: ["Jasne cele, pracuję nad nimi", "Jasne cele, jeszcze nie zacząłem/zaczęłam", "Wciąż szukam", "Jest dobrze, jak jest"] } },

    { id: 60, pack: "lifestyle",
      text: { en: "In the past year you learned something new just for yourself",
              uk: "За останній рік вчився(-лась) чогось нового просто для себе",
              pl: "W ostatnim roku uczyłeś/aś się czegoś nowego tylko dla siebie" },
      options: {
        en: ["Yes, still at it", "Yes, then dropped it", "Planned to", "No"],
        uk: ["Так, і досі", "Так, але кинув(-ла)", "Планував(-ла)", "Ні"],
        pl: ["Tak, nadal", "Tak, ale rzuciłem/am", "Planowałem/am", "Nie"] } },

    { id: 73, pack: "lifestyle", added: "2026-11-16",
      text: { en: "Right now your flat looks", uk: "Зараз твоя квартира виглядає", pl: "Teraz twoje mieszkanie wygląda" },
      options: {
        en: ["Tidy, as always", "Lived-in but fine", "Messy, cleaning at the weekend", "Better not open the wardrobe"],
        uk: ["Охайно, як завжди", "Житлово, але нормально", "Безлад, приберу на вихідних", "Шафу краще не відкривати"],
        pl: ["Schludnie, jak zawsze", "Mieszkalnie, ale w porządku", "Bałagan, posprzątam w weekend", "Szafy lepiej nie otwierać"] } },

    { id: 74, pack: "lifestyle", multi: true, added: "2026-11-16",
      text: { en: "A typical free evening", uk: "Типовий вільний вечір", pl: "Typowy wolny wieczór" },
      options: {
        en: ["Out or with people", "A hobby or project", "Series or games", "Scrolling"],
        uk: ["Десь із людьми", "Хобі чи проєкт", "Серіали чи ігри", "Скролінг"],
        pl: ["Na mieście albo ze znajomymi", "Hobby albo projekt", "Seriale albo gry", "Scrollowanie"] } },

    { id: 75, pack: "lifestyle", multi: true, added: "2026-11-16",
      text: { en: "Dinner usually is", uk: "Вечеря зазвичай", pl: "Kolacja zwykle to" },
      options: {
        en: ["Cooked at home", "Quick and simple", "Delivery or eating out", "Whatever's in the fridge"],
        uk: ["Готую вдома", "Щось швидке й просте", "Доставка чи ресторан", "Що є в холодильнику"],
        pl: ["Gotuję w domu", "Coś szybkiego i prostego", "Dostawa albo na mieście", "Co jest w lodówce"] } },

    { id: 76, pack: "lifestyle", added: "2026-11-16",
      text: { en: "Your diet", uk: "Харчування", pl: "Dieta" },
      options: {
        en: ["I eat everything", "Little meat", "Vegetarian or vegan", "Strict diet for sport or health"],
        uk: ["Їм усе", "Мало м'яса", "Вегетаріанство чи веганство", "Сувора дієта для спорту чи здоров'я"],
        pl: ["Jem wszystko", "Mało mięsa", "Wegetariańska lub wegańska", "Ścisła dieta dla sportu lub zdrowia"] } },

    { id: 77, pack: "lifestyle", added: "2026-11-16",
      text: { en: "To fall asleep you need", uk: "Щоб заснути, тобі треба", pl: "Żeby zasnąć, potrzebujesz" },
      options: {
        en: ["Total silence and dark", "A little background noise", "Nothing, I sleep anywhere", "The TV or phone on"],
        uk: ["Повна тиша й темрява", "Трохи фонового шуму", "Нічого, засинаю будь-де", "Увімкнений телевізор чи телефон"],
        pl: ["Całkowitej ciszy i ciemności", "Trochę szumu w tle", "Niczego, zasnę wszędzie", "Włączonego telewizora lub telefonu"] } },

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

    /* ---------- Dating ---------- */
    { id: 28, pack: "dating",
      text: { en: "Who should write first?", uk: "Хто має писати першим?", pl: "Kto powinien napisać pierwszy?" },
      options: {
        en: ["The man", "Either", "The woman"],
        uk: ["Чоловік", "Будь-хто", "Жінка"],
        pl: ["Mężczyzna", "Ktokolwiek", "Kobieta"] } },

    { id: 22, pack: "dating", retired: true, /* replaced by 57 */
      text: { en: "The bill on a first date", uk: "Рахунок на першому побаченні", pl: "Rachunek na pierwszej randce" },
      options: {
        en: ["The man pays", "Whoever invited", "Split", "Take turns"],
        uk: ["Платить чоловік", "Хто запросив", "Навпіл", "По черзі"],
        pl: ["Płaci mężczyzna", "Kto zaprosił", "Po połowie", "Na zmianę"] } },

    { id: 57, pack: "dating", quick: true,
      text: { en: "They pick an expensive place for a date. You",
              uk: "Інша людина обирає дороге місце для побачення. Ти",
              pl: "Druga osoba wybiera drogie miejsce na randkę. Ty" },
      options: {
        en: ["Happily pay", "Suggest splitting", "Suggest somewhere cheaper", "Expect them to pay, they chose it"],
        uk: ["Охоче плачу", "Пропоную навпіл", "Пропоную щось дешевше", "Чекаю, що заплатить той, хто обрав"],
        pl: ["Chętnie płacę", "Proponuję po połowie", "Proponuję coś tańszego", "Oczekuję, że zapłaci ten, kto wybrał"] } },

    { id: 29, pack: "dating",
      text: { en: "Flowers and small gifts", uk: "Квіти й дрібні подарунки", pl: "Kwiaty i drobne prezenty" },
      options: {
        en: ["Often", "On occasions", "Rarely", "Not needed"],
        uk: ["Часто", "З нагоди", "Рідко", "Не потрібно"],
        pl: ["Często", "Od święta", "Rzadko", "Niepotrzebne"] } },

    { id: 30, pack: "dating", sensitive: true,
      text: { en: "Going to each other's place", uk: "Піти одне до одного додому", pl: "Wizyta u siebie w domu" },
      options: {
        en: ["Fine early on", "After a few dates", "Once we're a couple"],
        uk: ["Нормально одразу", "Після кількох побачень", "Коли вже пара"],
        pl: ["Od początku OK", "Po kilku randkach", "Gdy jesteśmy parą"] } },

    { id: 31, pack: "dating", sensitive: true,
      text: { en: "Flirting by text", uk: "Флірт у переписці", pl: "Flirt w wiadomościach" },
      options: {
        en: ["Bold from the start", "Builds gradually", "Mostly after meeting", "Keep it light"],
        uk: ["Сміливо з самого початку", "Поступово", "Здебільшого після зустрічі", "Легко, без натяків"],
        pl: ["Odważnie od początku", "Stopniowo", "Głównie po spotkaniu", "Lekko, bez podtekstów"] } },

    /* ---------- Together ---------- */
    { id: 15, pack: "together",
      text: { en: "Moving in together", uk: "Жити разом", pl: "Wspólne mieszkanie" },
      options: {
        en: ["Within a year", "After 1–2 years", "After marriage", "Prefer separate places"],
        uk: ["Протягом року", "Через 1–2 роки", "Після шлюбу", "Краще окремо"],
        pl: ["W ciągu roku", "Po 1–2 latach", "Po ślubie", "Wolę osobno"] } },

    { id: 16, pack: "together", retired: true, /* replaced by 61 */
      text: { en: "Visiting parents", uk: "Візити до батьків", pl: "Wizyty u rodziców" },
      options: {
        en: ["Weekly", "Every 2 weeks", "Monthly", "Rarely"],
        uk: ["Щотижня", "Раз на 2 тижні", "Раз на місяць", "Рідко"],
        pl: ["Co tydzień", "Co 2 tygodnie", "Raz w miesiącu", "Rzadko"] } },

    { id: 61, pack: "together",
      text: { en: "Your mum calls in the middle of a date. You", uk: "Мама дзвонить посеред побачення. Ти", pl: "Mama dzwoni w trakcie randki. Ty" },
      options: {
        en: ["Answer", "Text \u201clater\u201d", "Call back after", "Depends on the mum"],
        uk: ["Відповідаю", "Пишу «пізніше»", "Передзвоню після", "Залежить від мами"],
        pl: ["Odbieram", "Piszę „później”", "Oddzwonię po", "Zależy od mamy"] } },

    { id: 17, pack: "together", retired: true, /* replaced by 56 */
      text: { en: "In a conflict", uk: "У конфлікті", pl: "W konflikcie" },
      options: {
        en: ["Talk right away", "Cool down, then talk", "Talk the next day or later", "Let it go"],
        uk: ["Говорю одразу", "Охолону, тоді говорю", "Говорю наступного дня чи пізніше", "Відпускаю"],
        pl: ["Rozmawiam od razu", "Ochłonę, potem rozmawiam", "Rozmawiam następnego dnia lub później", "Odpuszczam"] } },

    { id: 56, pack: "together", quick: true,
      text: { en: "They're 40 minutes late without a text. You",
              uk: "Запізнюється на 40 хвилин і не написав(-ла). Ти",
              pl: "Spóźnia się 40 minut bez wiadomości. Ty" },
      options: {
        en: ["Let it go, it happens", "Mention it calmly later", "Ask right away what happened", "Already upset when they arrive"],
        uk: ["Відпускаю, буває", "Спокійно скажу пізніше", "Одразу питаю, що сталося", "Вже злюсь, коли приходить"],
        pl: ["Odpuszczam, zdarza się", "Spokojnie wspomnę później", "Od razu pytam, co się stało", "Jestem zły/a, zanim przyjdzie"] } },

    { id: 18, pack: "together", multi: true,
      text: { en: "You show care through", uk: "Турботу проявляєш через", pl: "Troskę okazujesz przez" },
      options: "care" },

    { id: 42, pack: "together", multi: true,
      text: { en: "You most want to receive", uk: "Найбільше хочеш отримувати", pl: "Najbardziej chcesz dostawać" },
      options: "care" },

    { id: 19, pack: "together", multi: true,
      text: { en: "Your humour", uk: "Твій гумор", pl: "Twoje poczucie humoru" },
      options: {
        en: ["Dry", "Silly", "Dark", "Gentle"],
        uk: ["Сухий", "Дурнуватий", "Чорний", "М'який"],
        pl: ["Suche", "Głupkowate", "Czarne", "Łagodne"] } },

    { id: 20, pack: "together",
      text: { en: "Planning", uk: "Планування", pl: "Planowanie" },
      options: {
        en: ["Plan everything", "Mostly plan", "Mostly spontaneous", "Fully spontaneous"],
        uk: ["Планую все", "Здебільшого планую", "Здебільшого спонтанно", "Повністю спонтанно"],
        pl: ["Planuję wszystko", "Raczej planuję", "Raczej spontanicznie", "Całkiem spontanicznie"] } },

    { id: 32, pack: "together",
      text: { en: "Roles in a couple", uk: "Ролі в парі", pl: "Role w związku" },
      options: {
        en: ["Traditional", "Mostly traditional", "Split by strengths", "Strictly equal"],
        uk: ["Традиційні", "Радше традиційні", "За сильними сторонами", "Строго порівну"],
        pl: ["Tradycyjne", "Raczej tradycyjne", "Według mocnych stron", "Ściśle po równo"] } },

    { id: 33, pack: "together", multi: true,
      text: { en: "Housework", uk: "Домашні справи", pl: "Obowiązki domowe" },
      options: {
        en: ["50/50", "By preference", "Mostly one partner", "Outsource what we can"],
        uk: ["50/50", "Хто що любить", "Здебільшого один", "Делегувати, що можна"],
        pl: ["50/50", "Kto co lubi", "Głównie jedna osoba", "Zlecać, co się da"] } },

    { id: 34, pack: "together", multi: true,
      text: { en: "After a hard day you want", uk: "Після важкого дня хочеш", pl: "Po ciężkim dniu chcesz" },
      options: {
        en: ["To talk it through", "Quiet time alone", "A distraction together", "Support, no advice"],
        uk: ["Проговорити", "Тиші наодинці", "Відволіктися разом", "Підтримки без порад"],
        pl: ["Przegadać to", "Ciszy w samotności", "Oderwać się razem", "Wsparcia bez rad"] } },

    { id: 23, pack: "together",
      text: { en: "Money in a couple", uk: "Гроші в парі", pl: "Pieniądze w związku" },
      options: {
        en: ["Fully shared", "Shared plus personal", "Separate, split 50/50", "Separate, split by income"],
        uk: ["Повністю спільні", "Спільні плюс особисті", "Окремо, навпіл", "Окремо, пропорційно доходу"],
        pl: ["Całkiem wspólne", "Wspólne plus osobiste", "Osobno, po połowie", "Osobno, według dochodu"] } },

    { id: 41, pack: "together", sensitive: true,
      text: { en: "Physical affection", uk: "Тактильність", pl: "Czułość fizyczna" },
      options: {
        en: ["Lots, in public too", "Lots, in private", "Moderate", "Little"],
        uk: ["Багато, і на людях", "Багато, наодинці", "Помірно", "Мало"],
        pl: ["Dużo, także publicznie", "Dużo, prywatnie", "Umiarkowanie", "Mało"] } },

    /* ---------- Privacy and trust ---------- */
    { id: 35, pack: "trust",
      text: { en: "The relationship on social media", uk: "Стосунки в соцмережах", pl: "Związek w social mediach" },
      options: {
        en: ["Post openly", "Occasionally", "Keep it private", "No photos of me online"],
        uk: ["Викладаю відкрито", "Іноді", "Не виставляю", "Жодних моїх фото в мережі"],
        pl: ["Pokazuję otwarcie", "Czasem", "Nie pokazuję", "Żadnych moich zdjęć w sieci"] } },

    { id: 36, pack: "trust",
      text: { en: "Talking about us with friends", uk: "Розповідати друзям про нас", pl: "Opowiadanie znajomym o nas" },
      options: {
        en: ["Share a lot", "Some", "Basics only", "Nothing private"],
        uk: ["Багато ділюсь", "Дещо", "Лише загальне", "Нічого особистого"],
        pl: ["Dużo opowiadam", "Trochę", "Tylko ogólnie", "Nic prywatnego"] } },

    { id: 37, pack: "trust", retired: true, /* replaced by 58 */
      text: { en: "Phones", uk: "Телефони", pl: "Telefony" },
      options: {
        en: ["Open to each other", "Private, nothing to hide", "Fully private"],
        uk: ["Відкриті одне для одного", "Особисті, але нічого не приховую", "Повністю особисті"],
        pl: ["Otwarte dla siebie", "Prywatne, nic do ukrycia", "Całkiem prywatne"] } },

    { id: 58, pack: "trust",
      text: { en: "Their phone lights up: \u201cmiss you 😘\u201d from a name you don't know. You",
              uk: "У партнера(-ки) на телефоні: «сумую 😘» від незнайомого імені. Ти",
              pl: "Na telefonie partnera/ki: „tęsknię 😘” od nieznanego imienia. Ty" },
      options: {
        en: ["Ask calmly", "Wait for them to mention it", "Assume it's nothing", "Look at the phone"],
        uk: ["Спокійно питаю", "Чекаю, що сам(а) скаже", "Вважаю, що це нічого", "Дивлюсь у телефон"],
        pl: ["Spokojnie pytam", "Czekam, aż sam/a powie", "Uznaję, że to nic", "Zaglądam do telefonu"] } },

    { id: 38, pack: "trust",
      text: { en: "Close friends of the opposite sex", uk: "Близькі друзі протилежної статі", pl: "Bliscy przyjaciele płci przeciwnej" },
      options: {
        en: ["Fine", "Fine, if it's open", "Casual friends only", "Not OK"],
        uk: ["Нормально", "Нормально, якщо відкрито", "Лише знайомі", "Неприйнятно"],
        pl: ["W porządku", "W porządku, jeśli otwarcie", "Tylko znajomi", "Nie do przyjęcia"] } },

    { id: 39, pack: "trust",
      text: { en: "Contact with exes", uk: "Контакт з колишніми", pl: "Kontakt z byłymi" },
      options: {
        en: ["Friends is fine", "Only if no feelings are left", "Minimal", "None"],
        uk: ["Дружити нормально", "Лише якщо почуттів не лишилось", "Мінімальний", "Жодного"],
        pl: ["Przyjaźń jest OK", "Tylko jeśli nie ma uczuć", "Minimalny", "Żaden"] } },

    { id: 78, pack: "trust", added: "2026-11-16",
      text: { en: "Your partner goes to a party without you. You", uk: "Партнер(-ка) йде на вечірку без тебе. Ти", pl: "Partner/ka idzie na imprezę bez ciebie. Ty" },
      options: {
        en: ["Enjoy my own evening", "Ask for a text now and then", "Want to know who'll be there", "Would rather they didn't go"],
        uk: ["Проводжу вечір для себе", "Прошу іноді писати", "Хочу знати, хто там буде", "Волію, щоб не йшов(-ла)"],
        pl: ["Spędzam wieczór dla siebie", "Proszę, żeby czasem napisał/a", "Chcę wiedzieć, kto tam będzie", "Wolę, żeby nie szedł/szła"] } },

    /* ---------- Beliefs and personal ---------- */
    { id: 25, pack: "beliefs", sensitive: true,
      text: { en: "Religion", uk: "Релігія", pl: "Religia" },
      options: {
        en: ["Not religious", "Spiritual, not religious", "Practising, not pushy", "Central to my life"],
        uk: ["Нерелігійний(-а)", "Духовність без конфесії", "Практикую, але не нав'язую", "Центральне в житті"],
        pl: ["Niereligijny/a", "Duchowość bez instytucji", "Praktykuję, nie narzucam", "Centrum mojego życia"] } },

    { id: 26, pack: "beliefs", sensitive: true,
      text: { en: "Politics", uk: "Політика", pl: "Polityka" },
      options: {
        en: ["Left", "Centre", "Right", "Not interested"],
        uk: ["Ліві", "Центр", "Праві", "Не цікавлюсь"],
        pl: ["Lewica", "Centrum", "Prawica", "Nie interesuję się"] } },

    { id: 46, pack: "beliefs",
      text: { en: "Astrology, tarot, family constellations", uk: "Астрологія, таро, розстановки", pl: "Astrologia, tarot, ustawienia rodzinne" },
      options: {
        en: ["Into it", "Curious", "Sceptical", "Hard no"],
        uk: ["Захоплююсь", "Цікаво", "Скептично", "Категорично ні"],
        pl: ["Interesuję się", "Ciekawi mnie", "Sceptycznie", "Zdecydowanie nie"] } },

    { id: 44, pack: "beliefs", sensitive: true,
      text: { en: "Attachment style (your own guess)", uk: "Тип прив'язаності (як сам(а) вважаєш)", pl: "Styl przywiązania (jak sądzisz)" },
      options: {
        en: ["Secure", "Anxious", "Avoidant", "Don't know"],
        uk: ["Надійний", "Тривожний", "Уникаючий", "Не знаю"],
        pl: ["Bezpieczny", "Lękowy", "Unikający", "Nie wiem"] } },

    { id: 45, pack: "beliefs", sensitive: true,
      text: { en: "Therapy", uk: "Психолог", pl: "Terapia" },
      options: {
        en: ["Going or went, it helped", "Went, it didn't help", "Never, open to it", "Never, not for me"],
        uk: ["Ходжу чи ходив(-ла), допомогло", "Ходив(-ла), не допомогло", "Не ходив(-ла), але відкритий(-а)", "Не ходив(-ла), не моє"],
        pl: ["Chodzę lub chodziłem/am, pomogło", "Chodziłem/am, nie pomogło", "Nigdy, ale jestem otwarty/a", "Nigdy, nie dla mnie"] } },

    { id: 47, pack: "beliefs", sensitive: true,
      text: { en: "Over your last relationship?", uk: "Відпустив(-ла) минулі стосунки?", pl: "Poprzedni związek masz za sobą?" },
      options: {
        en: ["Fully", "Mostly", "Still processing"],
        uk: ["Повністю", "Здебільшого", "Ще переживаю"],
        pl: ["Całkowicie", "W większości", "Wciąż przeżywam"] } },

    /* ---------- Double standards: the same rule for him and for her ---------- */
    { id: 67, pack: "mirror", added: "2026-11-16",
      text: { en: "“If he earns more, he decides on big purchases.”",
              uk: "«Якщо він заробляє більше, великі покупки вирішує він.»",
              pl: "„Jeśli on zarabia więcej, to on decyduje o dużych zakupach.”" },
      options: "agree" },

    { id: 68, pack: "mirror", mirrorOf: 67, added: "2026-11-16",
      text: { en: "“If she earns more, she decides on big purchases.”",
              uk: "«Якщо вона заробляє більше, великі покупки вирішує вона.»",
              pl: "„Jeśli ona zarabia więcej, to ona decyduje o dużych zakupach.”" },
      options: "agree" },

    { id: 69, pack: "mirror", added: "2026-11-16",
      text: { en: "“It's fine if he earns less than her.”",
              uk: "«Нормально, якщо він заробляє менше за неї.»",
              pl: "„To normalne, jeśli on zarabia mniej niż ona.”" },
      options: "agree" },

    { id: 70, pack: "mirror", mirrorOf: 69, added: "2026-11-16",
      text: { en: "“It's fine if she earns less than him.”",
              uk: "«Нормально, якщо вона заробляє менше за нього.»",
              pl: "„To normalne, jeśli ona zarabia mniej niż on.”" },
      options: "agree" },

    { id: 71, pack: "mirror", added: "2026-11-16",
      text: { en: "“It's fine for him to stay home with the kids while she works.”",
              uk: "«Нормально, якщо він сидить удома з дітьми, а вона працює.»",
              pl: "„To normalne, że on zostaje w domu z dziećmi, a ona pracuje.”" },
      options: "agree" },

    { id: 72, pack: "mirror", mirrorOf: 71, added: "2026-11-16",
      text: { en: "“It's fine for her to stay home with the kids while he works.”",
              uk: "«Нормально, якщо вона сидить удома з дітьми, а він працює.»",
              pl: "„To normalne, że ona zostaje w domu z dziećmi, a on pracuje.”" },
      options: "agree" },

    /* ---------- Hot takes ---------- */
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
      options: "agree" }
  ]
};
