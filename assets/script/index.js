document.addEventListener("DOMContentLoaded", function () {
  const associations = [
    {
      name: "OuterRim Law Enforcement",
      description:
        "Un grupo de personas que se toman la justicia en sus manos para intentar hacer del borde exterior un lugar mejor.",
      alignment: "Lawful/Neutral",
      imageUrl: "assets/img/outerRim_police.png",
    },
    {
      name: "Merchant Syndicate",
      description:
        "Organización de comerciantes que necesitan transporte, seguridad, etc.",
      alignment: "Neutral",
      imageUrl: "assets/img/transportSyndicate.png",
    },
    {
      name: "Bounty Hunter Brotherhood",
      description:
        "Organización que obtiene beneficios subcontratando a personas para capturar fugitivos, ya sea para las fuerzas del orden o para otras organizaciones más oscuras.",
      alignment: "Neutral",
      imageUrl: "assets/img/bounty-hunter.png",
    },
    {
      name: "Galactic Exploration Corps",
      description:
        "Un grupo de filántropos y exploradores que busca cartografiar Regiones desconocidas",
      alignment: "Neutral",
      imageUrl: "assets/img/exploration.png",
    },
    {
      name: "Galaxy Space Plague Control",
      description:
        "Organización que se ocupa de la caza de especies peligrosas en varios planetas.",
      alignment: "Neutral",
      imageUrl: "assets/img/pestControl.png",
    },
    {
      name: "Smuggler's Guild",
      description:
        "Contrabando de mercancías hacia y desde el centro (InnerRim y MiddleRim) y el borde interior (OuterRim).",
      alignment: "Chaotic/Neutral",
      imageUrl: "assets/img/smuggler.png",
    },
    {
      name: "Droid Liberation Front",
      description:
        "Grupo encargado de la liberación de droides capturados y adquiridos ilegalmente.",
      alignment: "Legal/Neutral",
      imageUrl: "assets/img/droidLiberation2.jpg",
    },
    {
      name: "Corellian Shipyards",
      description:
        "Unidad Corelliana encargada de recoger las naves destruidas y/o inutilizadas de toda la galaxia.",
      alignment: "Neutral",
      imageUrl: "assets/img/shipyard.jpg",
    },
    {
      name: "Space Miner's Guild",
      description: "La Galaxia es una mina grande, pero también peligrosa.",
      alignment: "Legal/Neutral",
      imageUrl: "assets/img/spaceMine.png",
    },
    {
      name: "Galactic News Network",
      description:
        "Investiga misterios, conspiraciones y cubre las noticias de toda la galaxia.",
      alignment: "Caotic/Neutral",
      imageUrl: "assets/img/newspaper.svg",
    },
    {
      name: "Black Sun Syndicate",
      description: "Hay sitio para todos, siempre que paguen por protegerse.",
      alignment: "Neutral/Evil",
      imageUrl: "assets/img/blackSun.png",
    },
    // Add more associations as needed
  ];

  const missions = [
    // OuterRim Law Enforcement
    {
      description: "Arrestar a un contrabandista famoso",
      association: "OuterRim Law Enforcement",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "3 dias",
      reward: "$3000",
      reputation:
        "+15 con OuterRim Law Enforcement, -10 con Gremio de Contrabandistas",
      image: "assets/img/esposas.svg",
    },
    {
      description: "Desmantelar un anillo de especias",
      association: "OuterRim Law Enforcement",
      difficulty: "fácil",
      requirements: "Trained Sleight of Hand; Crew of 4",
      time: "5 dias",
      successRate: "90%",
      reward: "$2000",
      reputation:
        "+20 con OuterRim Law Enforcement, -15 con Sindicato del Sol Negro",
      image: "assets/img/muscle.png",
    },
    {
      description: "Rescatar rehenes",
      association: "OuterRim Law Enforcement",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "70%",
      time: "1 day",
      reward: "$4000",
      reputation:
        "+18 con OuterRim Law Enforcement, +5 con Red de Noticias Galácticas",
      image: "assets/img/rescue.png",
    },
    {
      description: "Proteger a un diplomático",
      association: "OuterRim Law Enforcement",
      difficulty: "fácil",
      requirements: "Trained Intimidation",
      successRate: "90%",
      time: "2 dias",
      reward: "$1200",
      reputation: "+12 con OuterRim Law Enforcement",
      image: "assets/img/security.svg",
    },
    {
      description: "Patrullar rutas comerciales",
      association: "OuterRim Law Enforcement",
      difficulty: "fácil",
      requirements: "Trained Perception / Own ship",
      successRate: "100%",
      time: "3 dias",
      reward: "$1000",
      reputation:
        "+10 con OuterRim Law Enforcement, +5 con Sindicato de Mercaderes",
      image: "assets/img/security.svg",
    },
    {
      description: "Investigar desapariciones",
      association: "OuterRim Law Enforcement",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "60%",
      time: "10 dias",
      reward: "$5000",
      reputation:
        "+15 con OuterRim Law Enforcement, +5 con Galactic Exploration Corps",
      image: "assets/img/investigation.svg",
    },
    {
      description: "Capturar prisioneros escapados",
      association: "OuterRim Law Enforcement",
      difficulty: "difícil",
      requirements: "Level 5",
      successRate: "60%",
      time: "5 dias",
      reward: "$2000/each",
      reputation:
        "+13 con OuterRim Law Enforcement, -10 con Bounty Hunter Brotherhood",
      image: "assets/img/esposas.svg",
    },
    {
      description: "Sofocar un motín",
      association: "OuterRim Law Enforcement",
      difficulty: "medio",
      requirements: "Level 5",
      successRate: "80%",
      reward: "$1100",
      time: "1 day",
      reputation:
        "+11 con OuterRim Law Enforcement, +5 con Gremio de Mineros Espaciales",
      image: "assets/img/security.svg",
    },
    {
      description: "Espiar a un grupo rival",
      association: "OuterRim Law Enforcement",
      difficulty: "medio",
      requirements: "Trained Stealth, Deception or Performance",
      successRate: "70%",
      time: "7 dias",
      reward: "$5000",
      reputation:
        "+14 con OuterRim Law Enforcement, -10 con Sindicato del Sol Negro",
      image: "assets/img/spy.svg",
    },
    {
      description: "Asegurar un sitio de accidente",
      association: "OuterRim Law Enforcement",
      difficulty: "medio",
      requirements: "Trained Athletics",
      successRate: "80%",
      time: "3 dias",
      reward: "$800",
      reputation:
        "+16 con OuterRim Law Enforcement, +5 con Astilleros Corellianos",
      image: "assets/img/muscle.png",
    },

    // Merchant Syndicate
    {
      description: "Transportar mercancías",
      association: "Merchant Syndicate",
      difficulty: "fácil",
      requirements: "Trained Survival",
      successRate: "85%",
      time: "4 dias",
      reward: "$1000",
      reputation: "+10 con Merchant Syndicate",
      image: "transport_goods.jpg",
    },
    {
      description: "Asegurar un contrato",
      association: "Merchant Syndicate",
      difficulty: "medio",
      requirements: "Trained Persuasion",
      successRate: "75%",
      time: "3 dias",
      reward: "$1200",
      reputation: "+12 con Merchant Syndicate, +5 con Sindicato de Mercaderes",
      image: "secure_contract.jpg",
    },
    {
      description: "Contratar escoltas para un convoy",
      association: "Merchant Syndicate",
      difficulty: "fácil",
      requirements: "Trained Intimidation",
      successRate: "90%",
      time: "2 dias",
      reward: "$1500",
      reputation: "+15 con Merchant Syndicate, +5 con OuterRim Law Enforcement",
      image: "hire_escorts.jpg",
    },
    {
      description: "Recuperar mercancía robada",
      association: "Merchant Syndicate",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "60%",
      time: "5 dias",
      reward: "$1800",
      reputation:
        "+18 con Merchant Syndicate, +5 con Bounty Hunter Brotherhood",
      image: "recover_goods.jpg",
    },
    {
      description: "Negociar un acuerdo comercial",
      association: "Merchant Syndicate",
      difficulty: "medio",
      requirements: "Trained Persuasion",
      successRate: "70%",
      time: "3 dias",
      reward: "$1100",
      reputation: "+11 con Merchant Syndicate",
      image: "negotiate_deal.jpg",
    },
    {
      description: "Explorar nuevas rutas comerciales",
      association: "Merchant Syndicate",
      difficulty: "difícil",
      requirements: "Trained Navigation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1400",
      reputation:
        "+14 con Merchant Syndicate, +5 con Galactic Exploration Corps",
      image: "explore_routes.jpg",
    },
    {
      description: "Proteger un puerto estelar",
      association: "Merchant Syndicate",
      difficulty: "medio",
      requirements: "Trained Athletics",
      successRate: "80%",
      time: "4 dias",
      reward: "$1300",
      reputation: "+13 con Merchant Syndicate, +5 con OuterRim Law Enforcement",
      image: "protect_port.jpg",
    },
    {
      description: "Evitar un bloqueo comercial",
      association: "Merchant Syndicate",
      difficulty: "medio",
      requirements: "Trained Piloting",
      successRate: "75%",
      time: "5 dias",
      reward: "$1600",
      reputation: "+16 con Merchant Syndicate",
      image: "avoid_blockade.jpg",
    },
    {
      description: "Recuperar un carguero varado",
      association: "Merchant Syndicate",
      difficulty: "difícil",
      requirements: "Trained Athletics",
      successRate: "70%",
      time: "7 dias",
      reward: "$1700",
      reputation: "+17 con Merchant Syndicate, +5 con Corellian Shipyards",
      image: "recover_freighter.jpg",
    },
    {
      description: "Rescatar a una tripulación perdida",
      association: "Merchant Syndicate",
      difficulty: "difícil",
      requirements: "Trained Medicine",
      successRate: "65%",
      time: "6 dias",
      reward: "$1900",
      reputation:
        "+19 con Merchant Syndicate, +5 con Red de Noticias Galácticas",
      image: "rescue_crew.jpg",
    },

    // Bounty Hunter Brotherhood
    {
      description: "Capturar fugitivos",
      association: "Bounty Hunter Brotherhood",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "4 dias",
      reward: "$1200",
      reputation:
        "+10 con Bounty Hunter Brotherhood, -5 con OuterRim Law Enforcement",
      image: "capture.jpg",
    },
    {
      description: "Eliminar a un caza recompensas rival",
      association: "Bounty Hunter Brotherhood",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "60%",
      time: "3 dias",
      reward: "$1500",
      reputation: "+15 con Bounty Hunter Brotherhood",
      image: "eliminate.jpg",
    },
    {
      description: "Recuperar datos robados",
      association: "Bounty Hunter Brotherhood",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "5 dias",
      reward: "$1700",
      reputation:
        "+17 con Bounty Hunter Brotherhood, +5 con Red de Noticias Galácticas",
      image: "retrieve.jpg",
    },
    {
      description: "Asesinar a un señor del crimen",
      association: "Bounty Hunter Brotherhood",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "55%",
      time: "2 dias",
      reward: "$2500",
      reputation:
        "+25 con Bounty Hunter Brotherhood, -15 con Sindicato del Sol Negro",
      image: "assassinate.jpg",
    },
    {
      description: "Cazar un droide rebelde",
      association: "Bounty Hunter Brotherhood",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "4 dias",
      reward: "$1300",
      reputation:
        "+13 con Bounty Hunter Brotherhood, +5 con Frente de Liberación de Droides",
      image: "hunt.jpg",
    },
    {
      description: "Proteger a un cliente VIP",
      association: "Bounty Hunter Brotherhood",
      difficulty: "medio",
      requirements: "Trained Intimidation",
      successRate: "85%",
      time: "2 dias",
      reward: "$1800",
      reputation: "+18 con Bounty Hunter Brotherhood",
      image: "protect_vip.jpg",
    },
    {
      description: "Infiltrarse en una base enemiga",
      association: "Bounty Hunter Brotherhood",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "60%",
      time: "5 dias",
      reward: "$2200",
      reputation:
        "+22 con Bounty Hunter Brotherhood, -10 con OuterRim Law Enforcement",
      image: "infiltrate.jpg",
    },
    {
      description: "Recuperar tecnología alienígena",
      association: "Bounty Hunter Brotherhood",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "6 dias",
      reward: "$1900",
      reputation:
        "+19 con Bounty Hunter Brotherhood, +5 con Galactic Exploration Corps",
      image: "recover_tech.jpg",
    },
    {
      description: "Destruir una nave enemiga",
      association: "Bounty Hunter Brotherhood",
      difficulty: "difícil",
      requirements: "Trained Piloting",
      successRate: "65%",
      time: "3 dias",
      reward: "$2100",
      reputation:
        "+21 con Bounty Hunter Brotherhood, -10 con Sindicato del Sol Negro",
      image: "destroy_ship.jpg",
    },
    {
      description: "Rescatar a un VIP capturado",
      association: "Bounty Hunter Brotherhood",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "55%",
      time: "4 dias",
      reward: "$2400",
      reputation:
        "+24 con Bounty Hunter Brotherhood, -15 con Gremio de Contrabandistas",
      image: "rescue_vip.jpg",
    },

    // Galactic Exploration Corps
    {
      description: "Explorar un sistema estelar desconocido",
      association: "Galactic Exploration Corps",
      difficulty: "difícil",
      requirements: "Trained Astrogation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1800",
      reputation:
        "+18 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas",
      image: "explore_system.jpg",
    },
    {
      description: "Cartografiar rutas hiperespaciales",
      association: "Galactic Exploration Corps",
      difficulty: "medio",
      requirements: "Trained Astrogation",
      successRate: "70%",
      time: "7 dias",
      reward: "$1500",
      reputation: "+15 con Galactic Exploration Corps",
      image: "map_routes.jpg",
    },
    {
      description: "Investigar señales misteriosas",
      association: "Galactic Exploration Corps",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "8 dias",
      reward: "$1700",
      reputation:
        "+17 con Galactic Exploration Corps, +5 con OuterRim Law Enforcement",
      image: "investigate_signals.jpg",
    },
    {
      description: "Estudiar vida extraterrestre",
      association: "Galactic Exploration Corps",
      difficulty: "difícil",
      requirements: "Trained Nature",
      successRate: "60%",
      time: "15 dias",
      reward: "$2000",
      reputation: "+20 con Galactic Exploration Corps, +5 con Plague Control",
      image: "study_life.jpg",
    },
    {
      description: "Rescatar a exploradores perdidos",
      association: "Galactic Exploration Corps",
      difficulty: "difícil",
      requirements: "Trained Survival",
      successRate: "65%",
      time: "12 dias",
      reward: "$1900",
      reputation:
        "+19 con Galactic Exploration Corps, +5 con Merchant Syndicate",
      image: "rescue_explorers.jpg",
    },
    {
      description: "Recolectar muestras planetarias",
      association: "Galactic Exploration Corps",
      difficulty: "fácil",
      requirements: "Trained Nature",
      successRate: "85%",
      time: "5 dias",
      reward: "$1400",
      reputation: "+14 con Galactic Exploration Corps",
      image: "collect_samples.jpg",
    },
    {
      description: "Establecer una base avanzada",
      association: "Galactic Exploration Corps",
      difficulty: "Very difícil",
      requirements: "Trained Survival",
      successRate: "50%",
      time: "20 dias",
      reward: "$2500",
      reputation:
        "+25 con Galactic Exploration Corps, +5 con OuterRim Law Enforcement",
      image: "establish_base.jpg",
    },
    {
      description: "Recuperar artefactos antiguos",
      association: "Galactic Exploration Corps",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "60%",
      time: "14 dias",
      reward: "$1800",
      reputation:
        "+18 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas",
      image: "recover_artifacts.jpg",
    },
    {
      description: "Documentar civilizaciones perdidas",
      association: "Galactic Exploration Corps",
      difficulty: "Very difícil",
      requirements: "Trained History",
      successRate: "55%",
      time: "18 dias",
      reward: "$2300",
      reputation:
        "+23 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas",
      image: "document_civilizations.jpg",
    },
    {
      description: "Estudiar fenómenos cósmicos",
      association: "Galactic Exploration Corps",
      difficulty: "difícil",
      requirements: "Trained Arcana",
      successRate: "60%",
      time: "16 dias",
      reward: "$2200",
      reputation:
        "+22 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas",
      image: "study_phenomena.jpg",
    },

    // Galaxy Space Plague Control
    {
      description: "Erradicar una infestación de bichos espaciales",
      association: "Galaxy Space Plague Control",
      difficulty: "medio",
      requirements: "Trained Nature",
      successRate: "75%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Galaxy Space Plague Control",
      image: "eradicate.jpg",
    },
    {
      description: "Proteger una colonia de un brote",
      association: "Galaxy Space Plague Control",
      difficulty: "difícil",
      requirements: "Trained Medicine",
      successRate: "60%",
      time: "10 dias",
      reward: "$1800",
      reputation:
        "+18 con Galaxy Space Plague Control, +5 con OuterRim Law Enforcement",
      image: "protect_colony.jpg",
    },
    {
      description: "Estudiar una nueva enfermedad espacial",
      association: "Galaxy Space Plague Control",
      difficulty: "difícil",
      requirements: "Trained Medicine",
      successRate: "65%",
      time: "12 dias",
      reward: "$2000",
      reputation: "+20 con Galaxy Space Plague Control",
      image: "study_disease.jpg",
    },
    {
      description: "Contener una plaga en una estación espacial",
      association: "Galaxy Space Plague Control",
      difficulty: "Very difícil",
      requirements: "Trained Medicine",
      successRate: "50%",
      time: "15 dias",
      reward: "$2200",
      reputation:
        "+22 con Galaxy Space Plague Control, +5 con Galactic Exploration Corps",
      image: "contain_plague.jpg",
    },
    {
      description: "Rescatar a científicos atrapados",
      association: "Galaxy Space Plague Control",
      difficulty: "medio",
      requirements: "Trained Stealth",
      successRate: "70%",
      time: "7 dias",
      reward: "$1700",
      reputation:
        "+17 con Galaxy Space Plague Control, +5 con Red de Noticias Galácticas",
      image: "rescue_scientists.jpg",
    },
    {
      description: "Recoger muestras de un planeta infectado",
      association: "Galaxy Space Plague Control",
      difficulty: "medio",
      requirements: "Trained Nature",
      successRate: "75%",
      time: "8 dias",
      reward: "$1900",
      reputation: "+19 con Galaxy Space Plague Control",
      image: "collect_samples.jpg",
    },
    {
      description: "Neutralizar criaturas mutantes",
      association: "Galaxy Space Plague Control",
      difficulty: "medio",
      requirements: "Trained Arcana",
      successRate: "70%",
      time: "9 dias",
      reward: "$1600",
      reputation: "+16 con Galaxy Space Plague Control",
      image: "neutralize_mutants.jpg",
    },
    {
      description: "Desinfectar una nave infestada",
      association: "Galaxy Space Plague Control",
      difficulty: "fácil",
      requirements: "Trained Medicine",
      successRate: "85%",
      time: "5 dias",
      reward: "$1400",
      reputation: "+14 con Galaxy Space Plague Control",
      image: "disinfect_ship.jpg",
    },
    {
      description: "Realizar cuarentena en un planeta",
      association: "Galaxy Space Plague Control",
      difficulty: "Very difícil",
      requirements: "Trained Medicine",
      successRate: "55%",
      time: "14 dias",
      reward: "$2100",
      reputation:
        "+21 con Galaxy Space Plague Control, +5 con OuterRim Law Enforcement",
      image: "quarantine_planet.jpg",
    },
    {
      description: "Eliminar una amenaza biológica",
      association: "Galaxy Space Plague Control",
      difficulty: "Very difícil",
      requirements: "Trained Nature",
      successRate: "50%",
      time: "18 dias",
      reward: "$2300",
      reputation:
        "+23 con Galaxy Space Plague Control, +5 con Red de Noticias Galácticas",
      image: "eliminate_threat.jpg",
    },

    // Smuggler's Guild
    {
      description: "Transportar contrabando a un planeta central",
      association: "Smuggler's Guild",
      difficulty: "medio",
      requirements: "Trained Stealth",
      successRate: "75%",
      time: "6 dias",
      reward: "$1200",
      reputation: "+12 con Smuggler's Guild, -10 con OuterRim Law Enforcement",
      image: "smuggle_goods.jpg",
    },
    {
      description: "Evitar patrullas de seguridad",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "65%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Smuggler's Guild",
      image: "avoid_patrols.jpg",
    },
    {
      description: "Interceptar una carga valiosa",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Sleight of Hand",
      successRate: "60%",
      time: "10 dias",
      reward: "$1700",
      reputation: "+17 con Smuggler's Guild, +5 con Sindicato del Sol Negro",
      image: "intercept_cargo.jpg",
    },
    {
      description: "Recuperar un cargamento robado",
      association: "Smuggler's Guild",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "7 dias",
      reward: "$1300",
      reputation: "+13 con Smuggler's Guild, +5 con Merchant Syndicate",
      image: "recover_stolen.jpg",
    },
    {
      description: "Transportar mercancías peligrosas",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Survival",
      successRate: "65%",
      time: "9 dias",
      reward: "$1600",
      reputation: "+16 con Smuggler's Guild",
      image: "dangerous_goods.jpg",
    },
    {
      description: "Esconder a un fugitivo",
      association: "Smuggler's Guild",
      difficulty: "medio",
      requirements: "Trained Stealth",
      successRate: "70%",
      time: "6 dias",
      reward: "$1400",
      reputation: "+14 con Smuggler's Guild",
      image: "hide_fugitive.jpg",
    },
    {
      description: "Manipular registros de aduanas",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Deception",
      successRate: "65%",
      time: "8 dias",
      reward: "$1800",
      reputation: "+18 con Smuggler's Guild",
      image: "manipulate_records.jpg",
    },
    {
      description: "Sobornar a un funcionario",
      association: "Smuggler's Guild",
      difficulty: "fácil",
      requirements: "Trained Persuasion",
      successRate: "80%",
      time: "4 dias",
      reward: "$1100",
      reputation: "+11 con Smuggler's Guild, -5 con OuterRim Law Enforcement",
      image: "bribe_official.jpg",
    },
    {
      description: "Escapar de un bloqueo",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Piloting",
      successRate: "60%",
      time: "10 dias",
      reward: "$2000",
      reputation: "+20 con Smuggler's Guild",
      image: "escape_blockade.jpg",
    },
    {
      description: "Transportar bienes robados",
      association: "Smuggler's Guild",
      difficulty: "difícil",
      requirements: "Trained Stealth",
      successRate: "65%",
      time: "9 dias",
      reward: "$1900",
      reputation: "+19 con Smuggler's Guild, +5 con Sindicato del Sol Negro",
      image: "transport_stolen_goods.jpg",
    },

    // Droid Liberation Front
    {
      description: "Liberar droides capturados",
      association: "Droid Liberation Front",
      difficulty: "medio",
      requirements: "Trained Hacking",
      successRate: "70%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Droid Liberation Front",
      image: "liberate_droids.jpg",
    },
    {
      description: "Desactivar dispositivos de control",
      association: "Droid Liberation Front",
      difficulty: "difícil",
      requirements: "Trained Hacking",
      successRate: "65%",
      time: "10 dias",
      reward: "$1700",
      reputation: "+17 con Droid Liberation Front",
      image: "deactivate_control.jpg",
    },
    {
      description: "Proteger un refugio de droides",
      association: "Droid Liberation Front",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "12 dias",
      reward: "$1800",
      reputation: "+18 con Droid Liberation Front",
      image: "protect_shelter.jpg",
    },
    {
      description: "Recuperar droides robados",
      association: "Droid Liberation Front",
      difficulty: "Very difícil",
      requirements: "Trained Investigation",
      successRate: "55%",
      time: "14 dias",
      reward: "$2000",
      reputation: "+20 con Droid Liberation Front, +5 con Merchant Syndicate",
      image: "recover_stolen_droids.jpg",
    },
    {
      description: "Investigar una fábrica de droides",
      association: "Droid Liberation Front",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "8 dias",
      reward: "$1600",
      reputation: "+16 con Droid Liberation Front",
      image: "investigate_factory.jpg",
    },
    {
      description: "Desmantelar un anillo de tráfico de droides",
      association: "Droid Liberation Front",
      difficulty: "Very difícil",
      requirements: "Trained Combat",
      successRate: "50%",
      time: "18 dias",
      reward: "$2200",
      reputation:
        "+22 con Droid Liberation Front, +5 con OuterRim Law Enforcement",
      image: "dismantle_ring.jpg",
    },
    {
      description: "Interceptar una caravana de droides",
      association: "Droid Liberation Front",
      difficulty: "difícil",
      requirements: "Trained Piloting",
      successRate: "60%",
      time: "10 dias",
      reward: "$1900",
      reputation: "+19 con Droid Liberation Front",
      image: "intercept_caravan.jpg",
    },
    {
      description: "Hackear sistemas de seguridad",
      association: "Droid Liberation Front",
      difficulty: "fácil",
      requirements: "Trained Hacking",
      successRate: "85%",
      time: "6 dias",
      reward: "$1400",
      reputation: "+14 con Droid Liberation Front",
      image: "hack_security.jpg",
    },
    {
      description: "Proteger a un líder droide",
      association: "Droid Liberation Front",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "12 dias",
      reward: "$1700",
      reputation: "+17 con Droid Liberation Front, +5 con Merchant Syndicate",
      image: "protect_leader.jpg",
    },
    {
      description: "Exponer abusos contra droides",
      association: "Droid Liberation Front",
      difficulty: "medio",
      requirements: "Trained Persuasion",
      successRate: "70%",
      time: "8 dias",
      reward: "$1800",
      reputation:
        "+18 con Droid Liberation Front, +5 con Red de Noticias Galácticas",
      image: "expose_abuses.jpg",
    },

    // Corellian Shipyards
    {
      description: "Recolectar naves destruidas",
      association: "Corellian Shipyards",
      difficulty: "medio",
      requirements: "Trained Engineering",
      successRate: "75%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Corellian Shipyards",
      image: "collect_ships.jpg",
    },
    {
      description: "Reparar una nave dañada",
      association: "Corellian Shipyards",
      difficulty: "fácil",
      requirements: "Trained Engineering",
      successRate: "85%",
      time: "6 dias",
      reward: "$1300",
      reputation: "+13 con Corellian Shipyards",
      image: "repair_ship.jpg",
    },
    {
      description: "Transportar partes de naves",
      association: "Corellian Shipyards",
      difficulty: "medio",
      requirements: "Trained Piloting",
      successRate: "70%",
      time: "9 dias",
      reward: "$1400",
      reputation: "+14 con Corellian Shipyards, +5 con Merchant Syndicate",
      image: "transport_parts.jpg",
    },
    {
      description: "Recuperar tecnología avanzada",
      association: "Corellian Shipyards",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1700",
      reputation: "+17 con Corellian Shipyards",
      image: "recover_tech.jpg",
    },
    {
      description: "Defender un astillero",
      association: "Corellian Shipyards",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "12 dias",
      reward: "$1600",
      reputation:
        "+16 con Corellian Shipyards, +5 con OuterRim Law Enforcement",
      image: "defend_shipyard.jpg",
    },
    {
      description: "Rescatar tripulaciones varadas",
      association: "Corellian Shipyards",
      difficulty: "difícil",
      requirements: "Trained Survival",
      successRate: "65%",
      time: "10 dias",
      reward: "$1800",
      reputation:
        "+18 con Corellian Shipyards, +5 con Galactic Exploration Corps",
      image: "rescue_crews.jpg",
    },
    {
      description: "Explorar sistemas en busca de chatarra",
      association: "Corellian Shipyards",
      difficulty: "Very difícil",
      requirements: "Trained Astrogation",
      successRate: "50%",
      time: "18 dias",
      reward: "$2000",
      reputation: "+20 con Corellian Shipyards",
      image: "explore_systems.jpg",
    },
    {
      description: "Interceptar cargamentos de naves ilegales",
      association: "Corellian Shipyards",
      difficulty: "difícil",
      requirements: "Trained Piloting",
      successRate: "60%",
      time: "12 dias",
      reward: "$1900",
      reputation: "+19 con Corellian Shipyards",
      image: "intercept_cargo.jpg",
    },

    // Space Miner's Guild
    {
      description: "Extraer minerales raros de un asteroide",
      association: "Space Miner's Guild",
      difficulty: "medio",
      requirements: "Trained Mining",
      successRate: "70%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Space Miner's Guild",
      image: "extract_minerals.jpg",
    },
    {
      description: "Proteger una operación minera",
      association: "Space Miner's Guild",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "10 dias",
      reward: "$1700",
      reputation:
        "+17 con Space Miner's Guild, +5 con OuterRim Law Enforcement",
      image: "protect_operation.jpg",
    },
    {
      description: "Recuperar equipo minero robado",
      association: "Space Miner's Guild",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "7 dias",
      reward: "$1600",
      reputation: "+16 con Space Miner's Guild",
      image: "recover_equipment.jpg",
    },
    {
      description: "Investigar un derrumbe en una mina",
      association: "Space Miner's Guild",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1800",
      reputation:
        "+18 con Space Miner's Guild, +5 con Red de Noticias Galácticas",
      image: "investigate_collapse.jpg",
    },
    {
      description: "Transportar minerales a un planeta central",
      association: "Space Miner's Guild",
      difficulty: "fácil",
      requirements: "Trained Piloting",
      successRate: "85%",
      time: "6 dias",
      reward: "$1400",
      reputation: "+14 con Space Miner's Guild",
      image: "transport_minerals.jpg",
    },
    {
      description: "Despejar una mina de criaturas hostiles",
      association: "Space Miner's Guild",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "12 dias",
      reward: "$1900",
      reputation: "+19 con Space Miner's Guild",
      image: "clear_mine.jpg",
    },
    {
      description: "Instalar equipo minero avanzado",
      association: "Space Miner's Guild",
      difficulty: "fácil",
      requirements: "Trained Engineering",
      successRate: "80%",
      time: "5 dias",
      reward: "$1300",
      reputation: "+13 con Space Miner's Guild",
      image: "install_equipment.jpg",
    },
    {
      description: "Rescatar mineros atrapados",
      association: "Space Miner's Guild",
      difficulty: "Very difícil",
      requirements: "Trained Survival",
      successRate: "55%",
      time: "14 dias",
      reward: "$2000",
      reputation:
        "+20 con Space Miner's Guild, +5 con OuterRim Law Enforcement",
      image: "rescue_miners.jpg",
    },
    {
      description: "Evaluar un nuevo sitio minero",
      association: "Space Miner's Guild",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "75%",
      time: "8 dias",
      reward: "$1500",
      reputation: "+15 con Space Miner's Guild",
      image: "evaluate_site.jpg",
    },
    {
      description: "Recuperar minerales de una nave estrellada",
      association: "Space Miner's Guild",
      difficulty: "difícil",
      requirements: "Trained Salvage",
      successRate: "65%",
      time: "10 dias",
      reward: "$1700",
      reputation: "+17 con Space Miner's Guild",
      image: "recover_minerals.jpg",
    },

    // Galactic News Network
    {
      description: "Cubrir una historia en un planeta lejano",
      association: "Galactic News Network",
      difficulty: "medio",
      requirements: "Trained Journalism",
      successRate: "75%",
      time: "8 dias",
      reward: "$1300",
      reputation: "+13 con Galactic News Network",
      image: "cover_story.jpg",
    },
    {
      description: "Investigar una conspiración",
      association: "Galactic News Network",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1500",
      reputation: "+15 con Galactic News Network",
      image: "investigate_conspiracy.jpg",
    },
    {
      description: "Entrevistar a una figura importante",
      association: "Galactic News Network",
      difficulty: "medio",
      requirements: "Trained Journalism",
      successRate: "70%",
      time: "9 dias",
      reward: "$1400",
      reputation: "+14 con Galactic News Network",
      image: "interview_figure.jpg",
    },
    {
      description: "Exponer corrupción en un gobierno",
      association: "Galactic News Network",
      difficulty: "Very difícil",
      requirements: "Trained Investigation",
      successRate: "50%",
      time: "12 dias",
      reward: "$1700",
      reputation:
        "+17 con Galactic News Network, +5 con OuterRim Law Enforcement",
      image: "expose_corruption.jpg",
    },
    {
      description: "Cubrir un conflicto bélico",
      association: "Galactic News Network",
      difficulty: "Very difícil",
      requirements: "Trained Journalism",
      successRate: "55%",
      time: "14 dias",
      reward: "$1800",
      reputation: "+18 con Galactic News Network",
      image: "cover_conflict.jpg",
    },
    {
      description: "Reportar sobre un descubrimiento científico",
      association: "Galactic News Network",
      difficulty: "medio",
      requirements: "Trained Journalism",
      successRate: "75%",
      time: "8 dias",
      reward: "$1600",
      reputation:
        "+16 con Galactic News Network, +5 con Galactic Exploration Corps",
      image: "report_discovery.jpg",
    },
    {
      description: "Investigar una empresa sospechosa",
      association: "Galactic News Network",
      difficulty: "difícil",
      requirements: "Trained Investigation",
      successRate: "65%",
      time: "10 dias",
      reward: "$1500",
      reputation: "+15 con Galactic News Network",
      image: "investigate_company.jpg",
    },
    {
      description: "Transmitir un evento en vivo",
      association: "Galactic News Network",
      difficulty: "fácil",
      requirements: "Trained Journalism",
      successRate: "85%",
      time: "6 dias",
      reward: "$1200",
      reputation: "+12 con Galactic News Network",
      image: "broadcast_live.jpg",
    },
    {
      description: "Publicar un artículo de opinión",
      association: "Galactic News Network",
      difficulty: "fácil",
      requirements: "Trained Writing",
      successRate: "80%",
      time: "5 dias",
      reward: "$1100",
      reputation: "+11 con Galactic News Network",
      image: "publish_article.jpg",
    },
    {
      description: "Documentar una cultura alienígena",
      association: "Galactic News Network",
      difficulty: "Very difícil",
      requirements: "Trained Filmmaking",
      successRate: "55%",
      time: "14 dias",
      reward: "$2000",
      reputation:
        "+20 con Galactic News Network, +5 con Galactic Exploration Corps",
      image: "make_documentary.jpg",
    },

    // Black Sun Syndicate
    {
      description: "Eliminar un objetivo rival",
      association: "Black Sun Syndicate",
      difficulty: "Very difícil",
      requirements: "Trained Assassination",
      successRate: "50%",
      time: "14 dias",
      reward: "$2000",
      reputation:
        "+20 con Black Sun Syndicate, -20 con OuterRim Law Enforcement",
      image: "eliminate_rival.jpg",
    },
    {
      description: "Proteger una operación ilegal",
      association: "Black Sun Syndicate",
      difficulty: "difícil",
      requirements: "Trained Combat",
      successRate: "60%",
      time: "12 dias",
      reward: "$1700",
      reputation:
        "+17 con Black Sun Syndicate, -15 con OuterRim Law Enforcement",
      image: "protect_operation.jpg",
    },
    {
      description: "Interceptar un cargamento valioso",
      association: "Black Sun Syndicate",
      difficulty: "difícil",
      requirements: "Trained Piloting",
      successRate: "65%",
      time: "10 dias",
      reward: "$1800",
      reputation: "+18 con Black Sun Syndicate",
      image: "intercept_cargo.jpg",
    },
    {
      description: "Recuperar bienes robados",
      association: "Black Sun Syndicate",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "8 dias",
      reward: "$1600",
      reputation: "+16 con Black Sun Syndicate",
      image: "recover_stolen_goods.jpg",
    },
    {
      description: "Sobornar a un funcionario",
      association: "Black Sun Syndicate",
      difficulty: "medio",
      requirements: "Trained Persuasion",
      successRate: "75%",
      time: "8 dias",
      reward: "$1500",
      reputation:
        "+15 con Black Sun Syndicate, -10 con OuterRim Law Enforcement",
      image: "bribe_official.jpg",
    },
    {
      description: "Hackear sistemas de seguridad",
      association: "Black Sun Syndicate",
      difficulty: "fácil",
      requirements: "Trained Hacking",
      successRate: "85%",
      time: "6 dias",
      reward: "$1300",
      reputation: "+13 con Black Sun Syndicate",
      image: "hack_security.jpg",
    },
    {
      description: "Proteger a un informante",
      association: "Black Sun Syndicate",
      difficulty: "medio",
      requirements: "Trained Combat",
      successRate: "70%",
      time: "9 dias",
      reward: "$1400",
      reputation: "+14 con Black Sun Syndicate",
      image: "protect_informant.jpg",
    },
    {
      description: "Infiltrarse en una organización rival",
      association: "Black Sun Syndicate",
      difficulty: "Very difícil",
      requirements: "Trained Espionage",
      successRate: "55%",
      time: "14 dias",
      reward: "$1900",
      reputation: "+19 con Black Sun Syndicate",
      image: "infiltrate_rival.jpg",
    },
    {
      description: "Eliminar pruebas comprometedoras",
      association: "Black Sun Syndicate",
      difficulty: "fácil",
      requirements: "Trained Hacking",
      successRate: "80%",
      time: "5 dias",
      reward: "$1200",
      reputation: "+12 con Black Sun Syndicate",
      image: "eliminate_evidence.jpg",
    },
    {
      description: "Recuperar un paquete perdido",
      association: "Black Sun Syndicate",
      difficulty: "medio",
      requirements: "Trained Investigation",
      successRate: "70%",
      time: "8 dias",
      reward: "$1400",
      reputation: "+14 con Black Sun Syndicate",
      image: "recover_package.jpg",
    },
  ];


  const associationsLogos = document.getElementById("associations-logos");
  const missionsBoard = document.getElementById("missions-board");
  const missionDetailsContainer = document.getElementById("mission-details");
  const boardAssociation = document.getElementById("board-association");
  let activeMissionButton = null; // Variable para guardar el botón activo
  let touchStartY = 0; // Coordenada Y de inicio del toque
  let touchMoved = false; // Bandera para saber si el usuario ha movido el dedo
  
  associations.forEach((association) => {
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
  
    const imgElement = document.createElement("img");
    imgElement.src = association.imageUrl;
    imgElement.alt = `${association.name} Logo`;
    imgElement.classList.add("logo1");
    imgElement.setAttribute("title", association.name);
    imgElement.setAttribute("data-content", association.description);
  
    const hoverInfo = document.createElement("div");
    hoverInfo.classList.add("hoverinfo");
  
    const nameElement = document.createElement("h2");
    nameElement.textContent = association.name;
  
    hoverInfo.appendChild(nameElement);
    logoContainer.appendChild(imgElement);
    logoContainer.appendChild(hoverInfo);
  
    // Agregar evento de clic para mostrar misiones al hacer clic en el logo de la asociación
    logoContainer.addEventListener("click", () => {
      showMissionsForAssociation(association);
    });
  
    // Manejar el toque en dispositivos móviles
    logoContainer.addEventListener("touchstart", (event) => {
      touchStartY = event.touches[0].clientY; // Guardar la coordenada Y del toque
      touchMoved = false; // Restablecer la bandera de movimiento
    });
  
    logoContainer.addEventListener("touchend", (event) => {
      const touchEndY = event.changedTouches[0].clientY;
      const touchDistance = Math.abs(touchEndY - touchStartY);
  
      // Si el toque se movió significativamente, no considerarlo un clic
      if (touchDistance < 10 && !touchMoved) {
        // Si el toque no se movió mucho, lo consideramos un clic
        showMissionsForAssociation(association);
      }
    });
  
    associationsLogos.appendChild(logoContainer);
  });
  
  function showMissionsForAssociation(association) {
    // Limpiar contenido anterior
    missionsBoard.innerHTML = "";
    missionDetailsContainer.innerHTML = "";
    boardAssociation.innerHTML = ""; // Limpiar contenido anterior del contenedor de la asociación
  
    const boardAssociationName = document.createElement("h3");
    const strongElement = document.createElement("strong");
    strongElement.textContent = association.name;
    boardAssociationName.appendChild(strongElement);
    boardAssociationName.style.borderBottom = "1px solid black";
  
    const boardAssociationDescription = document.createElement("div");
    boardAssociationDescription.textContent = association.description;
    boardAssociationDescription.style.paddingBottom = "1em";
  
    boardAssociation.appendChild(boardAssociationName);
    boardAssociation.appendChild(boardAssociationDescription);
  
    missions.forEach((mission) => {
      if (mission.association === association.name) {
        const missionButton = document.createElement("button");
        missionButton.classList.add("mission", 'btn', 'btn-outline-dark');
        missionButton.textContent = mission.description;
  
        missionButton.addEventListener("click", () => {
          showMissionDetails(mission);
          highlightMissionButton(missionButton);
        });
        missionsBoard.appendChild(missionButton);
      }
    });
  }
  
  function showMissionDetails(mission) {
    // Limpiar contenido anterior
    missionDetailsContainer.innerHTML = "";
  
    const missionDetailsInner = document.createElement('div');
    missionDetailsInner.classList.add('mission-details-inner');
  
    // Crear los elementos de la misión
    const missionTitle = document.createElement("h3");
    missionTitle.textContent = mission.description;
    missionTitle.style.borderBottom = "1px solid black";
  
    const missionDifficulty = document.createElement("p");
    missionDifficulty.innerHTML = `<strong>Dificultad:</strong> ${mission.difficulty}`;
  
    const missionRequirements = document.createElement("p");
    missionRequirements.innerHTML = `<strong>Requisitos:</strong> ${mission.requirements}`;
  
    const missionTime = document.createElement("p");
    missionTime.innerHTML = `<strong>Tiempo:</strong> ${mission.time}`;
  
    const missionReward = document.createElement("p");
    missionReward.innerHTML = `<strong>Recompensa:</strong> ${mission.reward}`;
  
    const missionReputation = document.createElement("p");
    missionReputation.innerHTML = `<strong>Reputación:</strong> ${mission.reputation}`;
  
    // Agregar los elementos al contenedor
    missionDetailsInner.appendChild(missionTitle);
    missionDetailsInner.appendChild(missionDifficulty);
    missionDetailsInner.appendChild(missionRequirements);
    missionDetailsInner.appendChild(missionTime);
    missionDetailsInner.appendChild(missionReward);
    missionDetailsInner.appendChild(missionReputation);
  
    missionDetailsContainer.appendChild(missionDetailsInner);
  }
  
  function highlightMissionButton(button) {
    if (activeMissionButton) {
      activeMissionButton.classList.remove("active");
    }
    button.classList.add("active");
    activeMissionButton = button;
  }
  
  // Limpiar contenido al hacer clic en cualquier lugar fuera de logos de asociaciones y misiones
  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
  
    // Verificar si el clic no ocurrió dentro de los logos de asociaciones ni en las misiones
    if (
      !clickedElement.closest("#associations-logos") &&
      !clickedElement.closest("#missions-board") &&
      !clickedElement.closest("#mission-details")
    ) {
      missionsBoard.innerHTML = "";
      missionDetailsContainer.innerHTML = "";
      boardAssociation.innerHTML = "";
      if (activeMissionButton) {
        activeMissionButton.classList.remove("active");
      }
      activeMissionButton = null;
    }
  });
  
  });