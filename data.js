const TASKS = {
  "zeit1": [
    [
      "Ich komme für eine Woche nach Innsbruck. Können wir uns da treffen? (solange)",
      "Я приїжджаю до Інсбрука на тиждень. Чи можемо ми тоді зустрітися?",
      "Solange ich in Innsbruck bin, können wir uns treffen."
    ],
    [
      "Ich kann mich nicht entscheiden, denn mir fehlen noch einige Informationen. (solange)",
      "Я не можу визначитися, адже мені ще бракує деякої інформації.",
      "Solange mir noch einige Informationen fehlen, kann ich mich nicht entscheiden."
    ],
    [
      "Du bist noch nicht geimpft und musst darum mit der Reise noch abwarten. (bis)",
      "Ти ще не вакцинований, тому мусиш зачекати з поїздкою.",
      "Du musst mit der Reise abwarten, bis du geimpft bist."
    ],
    [
      "Sie streiten sich oft. Immer geht es dabei um Politik.",
      "Вони часто сваряться. При цьому завжди йдеться про політику.",
      "Wenn sie sich streiten, geht es immer um Politik."
    ],
    [
      "Ich spiele manchmal Flöte. Hören Sie das in Ihrer Wohnung?",
      "Я іноді граю на флейті. Чи чуєте ви це у своїй квартирі?",
      "Wenn ich Flöte spiele, hören Sie das in Ihrer Wohnung?"
    ],
    [
      "Er warf sich ins Gras; im nächsten Augenblick krachte der Schuss. (kaum)",
      "Він кинувся в траву; наступної миті пролунав постріл.",
      "Kaum hatte er sich ins Gras geworfen, krachte der Schuss."
    ],
    [
      "Er erledigt die Sache und gibt dir dann sofort Bescheid.",
      "Він владнає справу й одразу повідомить тебе.",
      "Sobald er die Sache erledigt hat, gibt er dir Bescheid."
    ],
    [
      "Bald wird das Wetter schlecht. Machen Sie den Ausflug lieber jetzt! (solange)",
      "Незабаром погода зіпсується. Краще вирушайте на екскурсію зараз!",
      "Machen Sie den Ausflug, solange das Wetter noch gut ist."
    ],
    [
      "Es geht ihm jetzt viel besser als vorher. Einen Monat lang wohnt er schon im Studentenheim. (seit)",
      "Зараз він почувається значно краще, ніж раніше. Він уже місяць мешкає в гуртожитку.",
      "Seit er im Studentenheim wohnt, geht es ihm viel besser."
    ],
    [
      "Darüber können wir jetzt noch nicht sprechen, denn Uwe liegt noch im Krankenhaus. (erst … wenn, entlassen)",
      "Ми ще не можемо про це говорити, адже Уве досі в лікарні.",
      "Wir können erst darüber sprechen, wenn Uwe aus dem Krankenhaus entlassen worden ist."
    ],
    [
      "Kurt braucht häufig Geld und ruft dann seinen Bruder an.",
      "Курту часто потрібні гроші, і тоді він телефонує братові.",
      "Immer wenn Kurt Geld braucht, ruft er seinen Bruder an."
    ]
  ],
  "zeit2": [
    [
      "Er stieg nicht gleich ein, sondern zögerte lange. (ehe)",
      "Він не сів одразу, а довго вагався.",
      "Ehe er einstieg, zögerte er lange."
    ],
    [
      "Wir saßen beim Abendessen, und dabei lief die ganze Zeit der Fernseher.",
      "Ми вечеряли, а телевізор увесь час працював.",
      "Während wir beim Abendessen saßen, lief die ganze Zeit der Fernseher."
    ],
    [
      "Nachdem er einen Blick in die Garage geworfen hatte, betrat Eugen das Haus. (ehe)",
      "Після того як він зазирнув до гаража, Ойген увійшов у будинок.",
      "Ehe Eugen das Haus betrat, hatte er einen Blick in die Garage geworfen."
    ],
    [
      "Julia saß über dem Brief. Plötzlich hatte sie eine Idee.",
      "Юлія сиділа над листом. Раптом їй спала на думку ідея.",
      "Während Julia über dem Brief saß, hatte sie plötzlich eine Idee."
    ],
    [
      "Es kam wieder zu einem Streit. Daraufhin reiste er ab.",
      "Знову виникла сварка. Після цього він поїхав.",
      "Nachdem es wieder zu einem Streit gekommen war, reiste er ab."
    ],
    [
      "Lothar verschluckte den Zettel. Man konnte ihn nicht daran hindern. (ehe)",
      "Лотар проковтнув записку. Його не встигли зупинити.",
      "Lothar verschluckte den Zettel, ehe man ihn daran hindern konnte."
    ],
    [
      "Lisa verschwand um die Ecke, und schon sprang er vom Baum.",
      "Ліза зникла за рогом, і він відразу зістрибнув із дерева.",
      "Sobald Lisa um die Ecke verschwunden war, sprang er vom Baum."
    ],
    [
      "Der Zug fährt noch. Sie dürfen die Tür noch nicht öffnen. (erst … wenn)",
      "Потяг ще їде. Вам поки що не можна відчиняти двері.",
      "Sie dürfen die Tür erst öffnen, wenn der Zug steht."
    ],
    [
      "Die beiden begegneten sich jeden Tag. Immer lächelten sie einander zu.",
      "Вони зустрічалися щодня. І щоразу усміхалися одне одному.",
      "Immer wenn die beiden sich begegneten, lächelten sie einander zu."
    ],
    [
      "Als er noch Verpflichtungen hatte, war ihm das Leben nicht langweilig. (seit)",
      "Коли він ще мав обов’язки, життя не здавалося йому нудним.",
      "Seit er keine Verpflichtungen mehr hat, ist ihm das Leben langweilig."
    ],
    [
      "Das Licht ging aus. Im nächsten Moment kroch er unter dem Bett hervor.",
      "Світло згасло. Наступної миті він виліз з-під ліжка.",
      "Kaum war das Licht ausgegangen, kroch er unter dem Bett hervor."
    ]
  ],
  "konzessiv": [
    [
      "Ungeachtet seines nur vierstündigen Schlafs nahm Helmar an der Konzertprobe teil.",
      "Попри лише чотири години сну, Гельмар узяв участь у репетиції концерту.",
      "Obwohl Helmar nur vier Stunden geschlafen hatte, nahm er an der Konzertprobe teil."
    ],
    [
      "Gegen den Rat eines Freundes verlängerte er den Vertrag.",
      "Усупереч пораді друга він продовжив контракт.",
      "Obwohl sein Freund ihm davon abgeraten hatte, verlängerte er den Vertrag."
    ],
    [
      "Trotz chronischen Geldmangels trägt Irma immer teure Kleider.",
      "Попри постійну нестачу грошей, Ірма завжди носить дорогий одяг.",
      "Obwohl Irma ständig Geldmangel hat, trägt sie immer teure Kleider."
    ],
    [
      "Trotz seiner heftigen Gegenwehr nahmen die Räuber dem Spaziergänger die Tasche ab. (sich wehren)",
      "Попри запеклий опір, грабіжники відібрали в перехожого сумку.",
      "Obwohl sich der Spaziergänger heftig wehrte, nahmen ihm die Räuber die Tasche ab."
    ],
    [
      "Trotz ihrer Jugend wirkt sie schon sehr reif.",
      "Попри юний вік, вона здається дуже зрілою.",
      "Obwohl sie noch jung ist, wirkt sie schon sehr reif."
    ],
    [
      "Bei allem Verständnis für deine Lage – Geld kann ich dir nicht geben.",
      "Попри розуміння твого становища, я не можу дати тобі грошей.",
      "Obwohl ich deine Lage verstehe, kann ich dir kein Geld geben."
    ],
    [
      "Trotz der geringen Entfernung zum Theater nahm sie ein Taxi. (Nähe)",
      "Попри невелику відстань до театру, вона взяла таксі.",
      "Obwohl das Theater in der Nähe war, nahm sie ein Taxi."
    ],
    [
      "Trotz ihrer gegenseitigen Sympathie hatten sie Angst vor einem persönlichen Gespräch.",
      "Попри взаємну симпатію, вони боялися особистої розмови.",
      "Obwohl sie einander sympathisch waren, hatten sie Angst vor einem persönlichen Gespräch."
    ],
    [
      "Ungeachtet seiner schlechten Erfahrungen nahm Herr Krone mit der Firma wieder Kontakt auf.",
      "Попри невдалий досвід, пан Кроне знову зв’язався з фірмою.",
      "Obwohl Herr Krone schlechte Erfahrungen gemacht hatte, nahm er wieder Kontakt mit der Firma auf."
    ],
    [
      "Für einen Ausländer spricht er erstaunlich gut Deutsch.",
      "Як для іноземця, він напрочуд добре розмовляє німецькою.",
      "Obwohl er Ausländer ist, spricht er erstaunlich gut Deutsch."
    ],
    [
      "Trotz seines burgenähnlichen Aussehens ist das Haus nicht sehr alt.",
      "Попри схожість на замок, будинок не дуже старий.",
      "Obwohl das Haus wie eine Burg aussieht, ist es nicht sehr alt."
    ],
    [
      "Trotz seines friedlichen Wesens gibt es ständig Streit mit der Nachbarin. (Mensch)",
      "Попри миролюбний характер, із сусідкою постійно виникають сварки.",
      "Obwohl er ein friedlicher Mensch ist, gibt es ständig Streit mit der Nachbarin."
    ],
    [
      "Trotz der Kompromissbereitschaft beider Seiten endeten die Gespräche ergebnislos.",
      "Попри готовність обох сторін до компромісу, переговори завершилися безрезультатно.",
      "Obwohl beide Seiten zu Kompromissen bereit waren, endeten die Gespräche ergebnislos."
    ],
    [
      "Ungeachtet seiner geringen Russischkenntnisse verzichtete er auf einen Dolmetscher.",
      "Попри слабке знання російської мови, він відмовився від перекладача.",
      "Obwohl er nur wenig Russisch konnte, verzichtete er auf einen Dolmetscher."
    ],
    [
      "Trotz seiner großen Macht konnte er das Vorhaben nicht verhindern.",
      "Попри велику владу, він не зміг перешкодити задуму.",
      "Obwohl er große Macht hatte, konnte er das Vorhaben nicht verhindern."
    ],
    [
      "Trotz heftiger Proteste bekam sie das Geld nicht zurück.",
      "Попри сильні протести, вона не отримала гроші назад.",
      "Obwohl sie heftig protestierte, bekam sie das Geld nicht zurück."
    ]
  ],
  "proportional": [
    [
      "Komm bald, denn das ist mir lieber.",
      "Приходь раніше, бо мені так краще.",
      "Je früher du kommst, desto lieber ist es mir."
    ],
    [
      "Zu Beginn seiner Rede herrschte im Saal noch Ruhe. (länger sprechen; Zuhörer, unruhig)",
      "На початку його промови в залі було ще тихо.",
      "Je länger er sprach, desto unruhiger wurden die Zuhörer."
    ],
    [
      "Wenn Sie selbst alles erledigen können, sind Sie nur auf wenige Mitarbeiter angewiesen.",
      "Якщо ви можете все робити самостійно, то менше залежите від працівників.",
      "Je mehr Sie selbst erledigen können, desto weniger sind Sie auf Mitarbeiter angewiesen."
    ],
    [
      "Bei einem reichen Warenangebot sind die Preise niedrig. (knapp; sich erhöhen)",
      "За великої пропозиції товарів ціни низькі.",
      "Je knapper das Warenangebot wird, desto mehr erhöhen sich die Preise."
    ],
    [
      "Als Melanie Herrn Schäfer kennenlernte, war er ihr sehr unsympathisch. (kennen; gefallen)",
      "Коли Мелані познайомилася з паном Шефером, він їй дуже не сподобався.",
      "Je besser Melanie Herrn Schäfer kannte, desto besser gefiel er ihr."
    ],
    [
      "Du bekommst gute Karten, wenn du dich früh an der Kasse anstellst.",
      "Ти отримаєш хороші квитки, якщо рано станеш у чергу до каси.",
      "Je früher du dich an der Kasse anstellst, desto bessere Karten bekommst du."
    ],
    [
      "Wenn man viel Zeit hat, weiß man sie kaum zu schätzen.",
      "Коли маєш багато часу, майже не цінуєш його.",
      "Je mehr Zeit man hat, desto weniger weiß man sie zu schätzen."
    ],
    [
      "Bei geringem Einkommen müssen Sie nicht mit hohen Steuern rechnen. (mehr verdienen)",
      "За невеликого доходу вам не доведеться платити високі податки.",
      "Je mehr Sie verdienen, desto höher sind Ihre Steuern."
    ],
    [
      "Als wir noch nahe an der Fabrik standen, war der Lärm der Maschinen unerträglich. (sich entfernen; schwach)",
      "Коли ми стояли близько до фабрики, шум машин був нестерпним.",
      "Je weiter wir uns von der Fabrik entfernten, desto schwächer wurde der Lärm der Maschinen."
    ],
    [
      "Als man mit dem Projekt begann, gab es kaum Schwierigkeiten. (fortschreiten; kämpfen mit)",
      "На початку проєкту труднощів майже не було.",
      "Je weiter das Projekt fortschritt, desto mehr musste man mit Schwierigkeiten kämpfen."
    ],
    [
      "Wir waren schon lange unterwegs und begannen, am Sinn unserer Reise zu zweifeln.",
      "Ми вже довго були в дорозі й почали сумніватися в сенсі подорожі.",
      "Je länger wir unterwegs waren, desto mehr zweifelten wir am Sinn unserer Reise."
    ],
    [
      "Die Truppen rückten vor, stießen aber auf immer heftigeren Widerstand. (weiter)",
      "Війська наступали, але натрапляли на дедалі сильніший опір.",
      "Je weiter die Truppen vorrückten, desto heftiger wurde der Widerstand."
    ]
  ]
};
