document.addEventListener("DOMContentLoaded", function() {
  const associations = [
    {
      name: "OuterRim Law Enforcement",
      description:
        "A group of people that take law under their hands for trying to make the outer rim a better place.",
      alignment: "Lawful/Neutral",
      imageUrl: "assets/img/outerRimSecurity.jpg",
    },
    {
      name: "Merchant Syndicate",
      description:
        "An organization of merchants that need transportation, security, etc.",
      alignment: "Neutral",
      imageUrl: "assets/img/transportSyndicate.png",
    },
    {
      name: "Bounty Hunter Brotherhood",
      description:
        "An organization that makes a profit by subcontracting people to capture fugitives, either for the Corellian Law enforcement or other darker organizations.",
      alignment: "Neutral",
      imageUrl: "assets/img/bounty-hunter.png",
    },
    {
      name: "Galactic Exploration Corps",
      description:
        "Chart Unknown Regions",
      alignment: "Neutral",
      imageUrl: "assets/img/exploration.png",
    },
    {
      name: "Galaxy Space Plague Control",
      description:
        "An organization that deals with the hunt of dangerous species on several planets.",
      alignment: "Neutral",
      imageUrl: "assets/img/pestControl.png",
    },
    {
      name: "Smuggler's Guild",
      description:
        "Smuggle Goods To Center and Inner Rim.",
      alignment: "Chaotic/Neutral",
      imageUrl: "assets/img/smuggler.png",
    },
    {
      name: "Droid Liberation Front",
      description:
        "Free Captured and Illegally acquired Droids.",
      alignment: "Legal/Neutral",
      imageUrl: "assets/img/droidLiberation2.jpg",
    },
    {
      name: "Corellian Shipyards",
      description:
        "Recolect destroyed and/or inutilized ships across the galaxy.",
      alignment: "Neutral",
      imageUrl: "assets/img/shipyard.jpg",
    },
    {
      name: "Space Miner's Guild",
      description:
        "The Galaxy is a big Mine, but a dangerous one too.",
      alignment: "Legal/Neutral",
      imageUrl: "assets/img/spaceMine.png",
    },
    {
      name: "Galactic News Network",
      description:
        "Investigate mysteries, conspiracies and cover news across the galaxy.",
      alignment: "Caotic/Neutral",
      imageUrl: "assets/img/newspaper.svg",
    },
    {
      name: "Black Sun Syndicate",
      description:
        "There is a place for everyone, as long as they pay for protection.",
      alignment: "Neutral/Evil",
      imageUrl: "assets/img/blackSun.png",
    },
    // Add more associations as needed
  ];

  const missions = [
    // OuterRim Law Enforcement
    { description: "Arrestar a un contrabandista famoso", association: "OuterRim Law Enforcement", difficulty:'Medium', requirements:'Trained Investigation', successRate:'70%', time:'3 days', reward: "$3000", reputation: "+15 con OuterRim Law Enforcement, -10 con Gremio de Contrabandistas", image: "assets/img/esposas.svg" },
    { description: "Desmantelar un anillo de especias", association: "OuterRim Law Enforcement", difficulty:'Easy', requirements:'Trained Sleight of Hand; Crew of 4', time:'5 days', successRate:'90%', reward: "$2000", reputation: "+20 con OuterRim Law Enforcement, -15 con Sindicato del Sol Negro", image: "assets/img/muscle.png" },
    { description: "Rescatar rehenes", association: "OuterRim Law Enforcement", difficulty:'Hard', requirements:'Trained Stealth', successRate:'70%', time:'1 day', reward: "$4000", reputation: "+18 con OuterRim Law Enforcement, +5 con Red de Noticias Galácticas", image: "assets/img/rescue.png" },
    { description: "Proteger a un diplomático", association: "OuterRim Law Enforcement", difficulty:'Easy', requirements:'Trained Intimidation', successRate:'90%', time:'2 days', reward: "$1200", reputation: "+12 con OuterRim Law Enforcement", image: "assets/img/security.svg" },
    { description: "Patrullar rutas comerciales", association: "OuterRim Law Enforcement", difficulty:'Easy', requirements:'Trained Perception / Own ship', successRate:'100%', time:'3 days', reward: "$1000", reputation: "+10 con OuterRim Law Enforcement, +5 con Sindicato de Mercaderes", image: "assets/img/security.svg" },
    { description: "Investigar desapariciones", association: "OuterRim Law Enforcement", difficulty:'Hard', requirements:'Trained Investigation', successRate:'60%', time:'10 days', reward: "$5000", reputation: "+15 con OuterRim Law Enforcement, +5 con Galactic Exploration Corps", image: "assets/img/investigation.svg" },
    { description: "Capturar prisioneros escapados", association: "OuterRim Law Enforcement", difficulty:'Hard', requirements:'Level 5', successRate:'60%', time:'5 days', reward: "$2000/each", reputation: "+13 con OuterRim Law Enforcement, -10 con Bounty Hunter Brotherhood", image: "assets/img/esposas.svg" },
    { description: "Sofocar un motín", association: "OuterRim Law Enforcement", difficulty:'Medium', requirements:'Level 5', successRate:'80%', reward: "$1100", time:'1 day', reputation: "+11 con OuterRim Law Enforcement, +5 con Gremio de Mineros Espaciales", image: "assets/img/security.svg" },
    { description: "Espiar a un grupo rival", association: "OuterRim Law Enforcement", difficulty:'Medium', requirements:'Trained Stealth, Deception or Performance', successRate:'70%', time:'7 days', reward: "$5000", reputation: "+14 con OuterRim Law Enforcement, -10 con Sindicato del Sol Negro", image: "assets/img/spy.svg" },
    { description: "Asegurar un sitio de accidente", association: "OuterRim Law Enforcement", difficulty:'Medium', requirements:'Trained Athletics', successRate:'80%', time:'3 days', reward: "$800", reputation: "+16 con OuterRim Law Enforcement, +5 con Astilleros Corellianos", image: "assets/img/muscle.png" },
    
    // Merchant Syndicate
    { description: "Transportar mercancías a un planeta del borde exterior", association: "Merchant Syndicate", difficulty:'Easy', requirements:'Trained Survival', successRate:'85%', time:'4 days', reward: "$1000", reputation: "+10 con Merchant Syndicate", image: "transport_goods.jpg" },
    { description: "Asegurar un contrato con un cliente importante", association: "Merchant Syndicate", difficulty:'Medium', requirements:'Trained Persuasion', successRate:'75%', time:'3 days', reward: "$1200", reputation: "+12 con Merchant Syndicate, +5 con Sindicato de Mercaderes", image: "secure_contract.jpg" },
    { description: "Contratar escoltas para un convoy", association: "Merchant Syndicate", difficulty:'Easy', requirements:'Trained Intimidation', successRate:'90%', time:'2 days', reward: "$1500", reputation: "+15 con Merchant Syndicate, +5 con OuterRim Law Enforcement", image: "hire_escorts.jpg" },
    { description: "Recuperar mercancía robada", association: "Merchant Syndicate", difficulty:'Hard', requirements:'Trained Investigation', successRate:'60%', time:'5 days', reward: "$1800", reputation: "+18 con Merchant Syndicate, +5 con Bounty Hunter Brotherhood", image: "recover_goods.jpg" },
    { description: "Negociar un acuerdo comercial", association: "Merchant Syndicate", difficulty:'Medium', requirements:'Trained Persuasion', successRate:'70%', time:'3 days', reward: "$1100", reputation: "+11 con Merchant Syndicate", image: "negotiate_deal.jpg" },
    { description: "Explorar nuevas rutas comerciales", association: "Merchant Syndicate", difficulty:'Hard', requirements:'Trained Navigation', successRate:'65%', time:'10 days', reward: "$1400", reputation: "+14 con Merchant Syndicate, +5 con Galactic Exploration Corps", image: "explore_routes.jpg" },
    { description: "Proteger un puerto estelar", association: "Merchant Syndicate", difficulty:'Medium', requirements:'Trained Athletics', successRate:'80%', time:'4 days', reward: "$1300", reputation: "+13 con Merchant Syndicate, +5 con OuterRim Law Enforcement", image: "protect_port.jpg" },
    { description: "Evitar un bloqueo comercial", association: "Merchant Syndicate", difficulty:'Medium', requirements:'Trained Piloting', successRate:'75%', time:'5 days', reward: "$1600", reputation: "+16 con Merchant Syndicate", image: "avoid_blockade.jpg" },
    { description: "Recuperar un carguero varado", association: "Merchant Syndicate", difficulty:'Hard', requirements:'Trained Athletics', successRate:'70%', time:'7 days', reward: "$1700", reputation: "+17 con Merchant Syndicate, +5 con Corellian Shipyards", image: "recover_freighter.jpg" },
    { description: "Rescatar a una tripulación perdida", association: "Merchant Syndicate", difficulty:'Hard', requirements:'Trained Medicine', successRate:'65%', time:'6 days', reward: "$1900", reputation: "+19 con Merchant Syndicate, +5 con Red de Noticias Galácticas", image: "rescue_crew.jpg" },
    
    // Bounty Hunter Brotherhood
    { description: "Capturar fugitivos", association: "Bounty Hunter Brotherhood", difficulty:'Medium', requirements:'Trained Investigation', successRate:'75%', time:'4 days', reward: "$1200", reputation: "+10 con Bounty Hunter Brotherhood, -5 con OuterRim Law Enforcement", image: "capture.jpg" },
    { description: "Eliminar a un cazarrecompensas rival", association: "Bounty Hunter Brotherhood", difficulty:'Hard', requirements:'Trained Stealth', successRate:'60%', time:'3 days', reward: "$1500", reputation: "+15 con Bounty Hunter Brotherhood", image: "eliminate.jpg" },
    { description: "Recuperar datos robados", association: "Bounty Hunter Brotherhood", difficulty:'Medium', requirements:'Trained Investigation', successRate:'70%', time:'5 days', reward: "$1700", reputation: "+17 con Bounty Hunter Brotherhood, +5 con Red de Noticias Galácticas", image: "retrieve.jpg" },
    { description: "Asesinar a un señor del crimen", association: "Bounty Hunter Brotherhood", difficulty:'Hard', requirements:'Trained Stealth', successRate:'55%', time:'2 days', reward: "$2500", reputation: "+25 con Bounty Hunter Brotherhood, -15 con Sindicato del Sol Negro", image: "assassinate.jpg" },
    { description: "Cazar un droide rebelde", association: "Bounty Hunter Brotherhood", difficulty:'Medium', requirements:'Trained Investigation', successRate:'75%', time:'4 days', reward: "$1300", reputation: "+13 con Bounty Hunter Brotherhood, +5 con Frente de Liberación de Droides", image: "hunt.jpg" },
    { description: "Proteger a un cliente VIP", association: "Bounty Hunter Brotherhood", difficulty:'Medium', requirements:'Trained Intimidation', successRate:'85%', time:'2 days', reward: "$1800", reputation: "+18 con Bounty Hunter Brotherhood", image: "protect_vip.jpg" },
    { description: "Infiltrarse en una base enemiga", association: "Bounty Hunter Brotherhood", difficulty:'Hard', requirements:'Trained Stealth', successRate:'60%', time:'5 days', reward: "$2200", reputation: "+22 con Bounty Hunter Brotherhood, -10 con OuterRim Law Enforcement", image: "infiltrate.jpg" },
    { description: "Recuperar tecnología alienígena", association: "Bounty Hunter Brotherhood", difficulty:'Medium', requirements:'Trained Investigation', successRate:'70%', time:'6 days', reward: "$1900", reputation: "+19 con Bounty Hunter Brotherhood, +5 con Galactic Exploration Corps", image: "recover_tech.jpg" },
    { description: "Destruir una nave enemiga", association: "Bounty Hunter Brotherhood", difficulty:'Hard', requirements:'Trained Piloting', successRate:'65%', time:'3 days', reward: "$2100", reputation: "+21 con Bounty Hunter Brotherhood, -10 con Sindicato del Sol Negro", image: "destroy_ship.jpg" },
    { description: "Rescatar a un VIP capturado", association: "Bounty Hunter Brotherhood", difficulty:'Hard', requirements:'Trained Stealth', successRate:'55%', time:'4 days', reward: "$2400", reputation: "+24 con Bounty Hunter Brotherhood, -15 con Gremio de Contrabandistas", image: "rescue_vip.jpg" },

  // Galactic Exploration Corps
    { description: "Explorar un sistema estelar desconocido", association: "Galactic Exploration Corps", difficulty: 'Hard', requirements: 'Trained Astrogation', successRate: '65%', time: '10 days', reward: "$1800", reputation: "+18 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas", image: "explore_system.jpg" },
    { description: "Cartografiar rutas hiperespaciales", association: "Galactic Exploration Corps", difficulty: 'Medium', requirements: 'Trained Astrogation', successRate: '70%', time: '7 days', reward: "$1500", reputation: "+15 con Galactic Exploration Corps", image: "map_routes.jpg" },
    { description: "Investigar señales misteriosas", association: "Galactic Exploration Corps", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '75%', time: '8 days', reward: "$1700", reputation: "+17 con Galactic Exploration Corps, +5 con OuterRim Law Enforcement", image: "investigate_signals.jpg" },
    { description: "Estudiar vida extraterrestre", association: "Galactic Exploration Corps", difficulty: 'Hard', requirements: 'Trained Nature', successRate: '60%', time: '15 days', reward: "$2000", reputation: "+20 con Galactic Exploration Corps, +5 con Plague Control", image: "study_life.jpg" },
    { description: "Rescatar a exploradores perdidos", association: "Galactic Exploration Corps", difficulty: 'Hard', requirements: 'Trained Survival', successRate: '65%', time: '12 days', reward: "$1900", reputation: "+19 con Galactic Exploration Corps, +5 con Merchant Syndicate", image: "rescue_explorers.jpg" },
    { description: "Recolectar muestras planetarias", association: "Galactic Exploration Corps", difficulty: 'Easy', requirements: 'Trained Nature', successRate: '85%', time: '5 days', reward: "$1400", reputation: "+14 con Galactic Exploration Corps", image: "collect_samples.jpg" },
    { description: "Establecer una base avanzada", association: "Galactic Exploration Corps", difficulty: 'Very Hard', requirements: 'Trained Survival', successRate: '50%', time: '20 days', reward: "$2500", reputation: "+25 con Galactic Exploration Corps, +5 con OuterRim Law Enforcement", image: "establish_base.jpg" },
    { description: "Recuperar artefactos antiguos", association: "Galactic Exploration Corps", difficulty: 'Hard', requirements: 'Trained Investigation', successRate: '60%', time: '14 days', reward: "$1800", reputation: "+18 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas", image: "recover_artifacts.jpg" },
    { description: "Documentar civilizaciones perdidas", association: "Galactic Exploration Corps", difficulty: 'Very Hard', requirements: 'Trained History', successRate: '55%', time: '18 days', reward: "$2300", reputation: "+23 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas", image: "document_civilizations.jpg" },
    { description: "Estudiar fenómenos cósmicos", association: "Galactic Exploration Corps", difficulty: 'Hard', requirements: 'Trained Arcana', successRate: '60%', time: '16 days', reward: "$2200", reputation: "+22 con Galactic Exploration Corps, +5 con Red de Noticias Galácticas", image: "study_phenomena.jpg" },

    // Galaxy Space Plague Control
    { description: "Erradicar una infestación de bichos espaciales", association: "Galaxy Space Plague Control", difficulty: 'Medium', requirements: 'Trained Nature', successRate: '75%', time: '8 days', reward: "$1500", reputation: "+15 con Galaxy Space Plague Control", image: "eradicate.jpg" },
    { description: "Proteger una colonia de un brote", association: "Galaxy Space Plague Control", difficulty: 'Hard', requirements: 'Trained Medicine', successRate: '60%', time: '10 days', reward: "$1800", reputation: "+18 con Galaxy Space Plague Control, +5 con OuterRim Law Enforcement", image: "protect_colony.jpg" },
    { description: "Estudiar una nueva enfermedad espacial", association: "Galaxy Space Plague Control", difficulty: 'Hard', requirements: 'Trained Medicine', successRate: '65%', time: '12 days', reward: "$2000", reputation: "+20 con Galaxy Space Plague Control", image: "study_disease.jpg" },
    { description: "Contener una plaga en una estación espacial", association: "Galaxy Space Plague Control", difficulty: 'Very Hard', requirements: 'Trained Medicine', successRate: '50%', time: '15 days', reward: "$2200", reputation: "+22 con Galaxy Space Plague Control, +5 con Galactic Exploration Corps", image: "contain_plague.jpg" },
    { description: "Rescatar a científicos atrapados", association: "Galaxy Space Plague Control", difficulty: 'Medium', requirements: 'Trained Stealth', successRate: '70%', time: '7 days', reward: "$1700", reputation: "+17 con Galaxy Space Plague Control, +5 con Red de Noticias Galácticas", image: "rescue_scientists.jpg" },
    { description: "Recoger muestras de un planeta infectado", association: "Galaxy Space Plague Control", difficulty: 'Medium', requirements: 'Trained Nature', successRate: '75%', time: '8 days', reward: "$1900", reputation: "+19 con Galaxy Space Plague Control", image: "collect_samples.jpg" },
    { description: "Neutralizar criaturas mutantes", association: "Galaxy Space Plague Control", difficulty: 'Medium', requirements: 'Trained Arcana', successRate: '70%', time: '9 days', reward: "$1600", reputation: "+16 con Galaxy Space Plague Control", image: "neutralize_mutants.jpg" },
    { description: "Desinfectar una nave infestada", association: "Galaxy Space Plague Control", difficulty: 'Easy', requirements: 'Trained Medicine', successRate: '85%', time: '5 days', reward: "$1400", reputation: "+14 con Galaxy Space Plague Control", image: "disinfect_ship.jpg" },
    { description: "Realizar cuarentena en un planeta", association: "Galaxy Space Plague Control", difficulty: 'Very Hard', requirements: 'Trained Medicine', successRate: '55%', time: '14 days', reward: "$2100", reputation: "+21 con Galaxy Space Plague Control, +5 con OuterRim Law Enforcement", image: "quarantine_planet.jpg" },
    { description: "Eliminar una amenaza biológica", association: "Galaxy Space Plague Control", difficulty: 'Very Hard', requirements: 'Trained Nature', successRate: '50%', time: '18 days', reward: "$2300", reputation: "+23 con Galaxy Space Plague Control, +5 con Red de Noticias Galácticas", image: "eliminate_threat.jpg" },

    // Smuggler's Guild
    { description: "Transportar contrabando a un planeta central", association: "Smuggler's Guild", difficulty: 'Medium', requirements: 'Trained Stealth', successRate: '75%', time: '6 days', reward: "$1200", reputation: "+12 con Smuggler's Guild, -10 con OuterRim Law Enforcement", image: "smuggle_goods.jpg" },
    { description: "Evitar patrullas de seguridad", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Stealth', successRate: '65%', time: '8 days', reward: "$1500", reputation: "+15 con Smuggler's Guild", image: "avoid_patrols.jpg" },
    { description: "Interceptar una carga valiosa", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Sleight of Hand', successRate: '60%', time: '10 days', reward: "$1700", reputation: "+17 con Smuggler's Guild, +5 con Sindicato del Sol Negro", image: "intercept_cargo.jpg" },
    { description: "Recuperar un cargamento robado", association: "Smuggler's Guild", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '70%', time: '7 days', reward: "$1300", reputation: "+13 con Smuggler's Guild, +5 con Merchant Syndicate", image: "recover_stolen.jpg" },
    { description: "Transportar mercancías peligrosas", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Survival', successRate: '65%', time: '9 days', reward: "$1600", reputation: "+16 con Smuggler's Guild", image: "dangerous_goods.jpg" },
    { description: "Esconder a un fugitivo", association: "Smuggler's Guild", difficulty: 'Medium', requirements: 'Trained Stealth', successRate: '70%', time: '6 days', reward: "$1400", reputation: "+14 con Smuggler's Guild", image: "hide_fugitive.jpg" },
    { description: "Manipular registros de aduanas", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Deception', successRate: '65%', time: '8 days', reward: "$1800", reputation: "+18 con Smuggler's Guild", image: "manipulate_records.jpg" },
    { description: "Sobornar a un funcionario", association: "Smuggler's Guild", difficulty: 'Easy', requirements: 'Trained Persuasion', successRate: '80%', time: '4 days', reward: "$1100", reputation: "+11 con Smuggler's Guild, -5 con OuterRim Law Enforcement", image: "bribe_official.jpg" },
    { description: "Escapar de un bloqueo", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Piloting', successRate: '60%', time: '10 days', reward: "$2000", reputation: "+20 con Smuggler's Guild", image: "escape_blockade.jpg" },
    { description: "Transportar bienes robados", association: "Smuggler's Guild", difficulty: 'Hard', requirements: 'Trained Stealth', successRate: '65%', time: '9 days', reward: "$1900", reputation: "+19 con Smuggler's Guild, +5 con Sindicato del Sol Negro", image: "transport_stolen_goods.jpg" },

    // Droid Liberation Front
    { description: "Liberar droides capturados", association: "Droid Liberation Front", difficulty: 'Medium', requirements: 'Trained Hacking', successRate: '70%', time: '8 days', reward: "$1500", reputation: "+15 con Droid Liberation Front", image: "liberate_droids.jpg" },
    { description: "Desactivar dispositivos de control", association: "Droid Liberation Front", difficulty: 'Hard', requirements: 'Trained Hacking', successRate: '65%', time: '10 days', reward: "$1700", reputation: "+17 con Droid Liberation Front", image: "deactivate_control.jpg" },
    { description: "Proteger un refugio de droides", association: "Droid Liberation Front", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '12 days', reward: "$1800", reputation: "+18 con Droid Liberation Front", image: "protect_shelter.jpg" },
    { description: "Recuperar droides robados", association: "Droid Liberation Front", difficulty: 'Very Hard', requirements: 'Trained Investigation', successRate: '55%', time: '14 days', reward: "$2000", reputation: "+20 con Droid Liberation Front, +5 con Merchant Syndicate", image: "recover_stolen_droids.jpg" },
    { description: "Investigar una fábrica de droides", association: "Droid Liberation Front", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '75%', time: '8 days', reward: "$1600", reputation: "+16 con Droid Liberation Front", image: "investigate_factory.jpg" },
    { description: "Desmantelar un anillo de tráfico de droides", association: "Droid Liberation Front", difficulty: 'Very Hard', requirements: 'Trained Combat', successRate: '50%', time: '18 days', reward: "$2200", reputation: "+22 con Droid Liberation Front, +5 con OuterRim Law Enforcement", image: "dismantle_ring.jpg" },
    { description: "Interceptar una caravana de droides", association: "Droid Liberation Front", difficulty: 'Hard', requirements: 'Trained Piloting', successRate: '60%', time: '10 days', reward: "$1900", reputation: "+19 con Droid Liberation Front", image: "intercept_caravan.jpg" },
    { description: "Hackear sistemas de seguridad", association: "Droid Liberation Front", difficulty: 'Easy', requirements: 'Trained Hacking', successRate: '85%', time: '6 days', reward: "$1400", reputation: "+14 con Droid Liberation Front", image: "hack_security.jpg" },
    { description: "Proteger a un líder droide", association: "Droid Liberation Front", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '12 days', reward: "$1700", reputation: "+17 con Droid Liberation Front, +5 con Merchant Syndicate", image: "protect_leader.jpg" },
    { description: "Exponer abusos contra droides", association: "Droid Liberation Front", difficulty: 'Medium', requirements: 'Trained Persuasion', successRate: '70%', time: '8 days', reward: "$1800", reputation: "+18 con Droid Liberation Front, +5 con Red de Noticias Galácticas", image: "expose_abuses.jpg" },

    // Corellian Shipyards
    { description: "Recolectar naves destruidas", association: "Corellian Shipyards", difficulty: 'Medium', requirements: 'Trained Engineering', successRate: '75%', time: '8 days', reward: "$1500", reputation: "+15 con Corellian Shipyards", image: "collect_ships.jpg" },
    { description: "Reparar una nave dañada", association: "Corellian Shipyards", difficulty: 'Easy', requirements: 'Trained Engineering', successRate: '85%', time: '6 days', reward: "$1300", reputation: "+13 con Corellian Shipyards", image: "repair_ship.jpg" },
    { description: "Transportar partes de naves", association: "Corellian Shipyards", difficulty: 'Medium', requirements: 'Trained Piloting', successRate: '70%', time: '9 days', reward: "$1400", reputation: "+14 con Corellian Shipyards, +5 con Merchant Syndicate", image: "transport_parts.jpg" },
    { description: "Recuperar tecnología avanzada", association: "Corellian Shipyards", difficulty: 'Hard', requirements: 'Trained Investigation', successRate: '65%', time: '10 days', reward: "$1700", reputation: "+17 con Corellian Shipyards", image: "recover_tech.jpg" },
    { description: "Defender un astillero", association: "Corellian Shipyards", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '12 days', reward: "$1600", reputation: "+16 con Corellian Shipyards, +5 con OuterRim Law Enforcement", image: "defend_shipyard.jpg" },
    { description: "Rescatar tripulaciones varadas", association: "Corellian Shipyards", difficulty: 'Hard', requirements: 'Trained Survival', successRate: '65%', time: '10 days', reward: "$1800", reputation: "+18 con Corellian Shipyards, +5 con Galactic Exploration Corps", image: "rescue_crews.jpg" },
    { description: "Explorar sistemas en busca de chatarra espacial", association: "Corellian Shipyards", difficulty: 'Very Hard', requirements: 'Trained Astrogation', successRate: '50%', time: '18 days', reward: "$2000", reputation: "+20 con Corellian Shipyards", image: "explore_systems.jpg" },
    { description: "Interceptar cargamentos de naves ilegales", association: "Corellian Shipyards", difficulty: 'Hard', requirements: 'Trained Piloting', successRate: '60%', time: '12 days', reward: "$1900", reputation: "+19 con Corellian Shipyards", image: "intercept_cargo.jpg" },

    // Space Miner's Guild
    { description: "Extraer minerales raros de un asteroide", association: "Space Miner's Guild", difficulty: 'Medium', requirements: 'Trained Mining', successRate: '70%', time: '8 days', reward: "$1500", reputation: "+15 con Space Miner's Guild", image: "extract_minerals.jpg" },
    { description: "Proteger una operación minera", association: "Space Miner's Guild", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '10 days', reward: "$1700", reputation: "+17 con Space Miner's Guild, +5 con OuterRim Law Enforcement", image: "protect_operation.jpg" },
    { description: "Recuperar equipo minero robado", association: "Space Miner's Guild", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '75%', time: '7 days', reward: "$1600", reputation: "+16 con Space Miner's Guild", image: "recover_equipment.jpg" },
    { description: "Investigar un derrumbe en una mina", association: "Space Miner's Guild", difficulty: 'Hard', requirements: 'Trained Investigation', successRate: '65%', time: '10 days', reward: "$1800", reputation: "+18 con Space Miner's Guild, +5 con Red de Noticias Galácticas", image: "investigate_collapse.jpg" },
    { description: "Transportar minerales a un planeta central", association: "Space Miner's Guild", difficulty: 'Easy', requirements: 'Trained Piloting', successRate: '85%', time: '6 days', reward: "$1400", reputation: "+14 con Space Miner's Guild", image: "transport_minerals.jpg" },
    { description: "Despejar una mina de criaturas hostiles", association: "Space Miner's Guild", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '12 days', reward: "$1900", reputation: "+19 con Space Miner's Guild", image: "clear_mine.jpg" },
    { description: "Instalar equipo minero avanzado", association: "Space Miner's Guild", difficulty: 'Easy', requirements: 'Trained Engineering', successRate: '80%', time: '5 days', reward: "$1300", reputation: "+13 con Space Miner's Guild", image: "install_equipment.jpg" },
    { description: "Rescatar mineros atrapados", association: "Space Miner's Guild", difficulty: 'Very Hard', requirements: 'Trained Survival', successRate: '55%', time: '14 days', reward: "$2000", reputation: "+20 con Space Miner's Guild, +5 con OuterRim Law Enforcement", image: "rescue_miners.jpg" },
    { description: "Evaluar un nuevo sitio minero", association: "Space Miner's Guild", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '75%', time: '8 days', reward: "$1500", reputation: "+15 con Space Miner's Guild", image: "evaluate_site.jpg" },
    { description: "Recuperar minerales de una nave estrellada", association: "Space Miner's Guild", difficulty: 'Hard', requirements: 'Trained Salvage', successRate: '65%', time: '10 days', reward: "$1700", reputation: "+17 con Space Miner's Guild", image: "recover_minerals.jpg" },

  // Galactic News Network
    { description: "Cubrir una historia en un planeta lejano", association: "Galactic News Network", difficulty: 'Medium', requirements: 'Trained Journalism', successRate: '75%', time: '8 days', reward: "$1300", reputation: "+13 con Galactic News Network", image: "cover_story.jpg" },
    { description: "Investigar una conspiración", association: "Galactic News Network", difficulty: 'Hard', requirements: 'Trained Investigation', successRate: '65%', time: '10 days', reward: "$1500", reputation: "+15 con Galactic News Network", image: "investigate_conspiracy.jpg" },
    { description: "Entrevistar a una figura importante", association: "Galactic News Network", difficulty: 'Medium', requirements: 'Trained Journalism', successRate: '70%', time: '9 days', reward: "$1400", reputation: "+14 con Galactic News Network", image: "interview_figure.jpg" },
    { description: "Exponer corrupción en un gobierno", association: "Galactic News Network", difficulty: 'Very Hard', requirements: 'Trained Investigation', successRate: '50%', time: '12 days', reward: "$1700", reputation: "+17 con Galactic News Network, +5 con OuterRim Law Enforcement", image: "expose_corruption.jpg" },
    { description: "Cubrir un conflicto bélico", association: "Galactic News Network", difficulty: 'Very Hard', requirements: 'Trained Journalism', successRate: '55%', time: '14 days', reward: "$1800", reputation: "+18 con Galactic News Network", image: "cover_conflict.jpg" },
    { description: "Reportar sobre un descubrimiento científico", association: "Galactic News Network", difficulty: 'Medium', requirements: 'Trained Journalism', successRate: '75%', time: '8 days', reward: "$1600", reputation: "+16 con Galactic News Network, +5 con Galactic Exploration Corps", image: "report_discovery.jpg" },
    { description: "Investigar una empresa sospechosa", association: "Galactic News Network", difficulty: 'Hard', requirements: 'Trained Investigation', successRate: '65%', time: '10 days', reward: "$1500", reputation: "+15 con Galactic News Network", image: "investigate_company.jpg" },
    { description: "Transmitir un evento en vivo", association: "Galactic News Network", difficulty: 'Easy', requirements: 'Trained Journalism', successRate: '85%', time: '6 days', reward: "$1200", reputation: "+12 con Galactic News Network", image: "broadcast_live.jpg" },
    { description: "Publicar un artículo de opinión", association: "Galactic News Network", difficulty: 'Easy', requirements: 'Trained Writing', successRate: '80%', time: '5 days', reward: "$1100", reputation: "+11 con Galactic News Network", image: "publish_article.jpg" },
    { description: "Realizar un documental sobre una cultura alienígena", association: "Galactic News Network", difficulty: 'Very Hard', requirements: 'Trained Filmmaking', successRate: '55%', time: '14 days', reward: "$2000", reputation: "+20 con Galactic News Network, +5 con Galactic Exploration Corps", image: "make_documentary.jpg" },

    // Black Sun Syndicate
    { description: "Eliminar un objetivo rival", association: "Black Sun Syndicate", difficulty: 'Very Hard', requirements: 'Trained Assassination', successRate: '50%', time: '14 days', reward: "$2000", reputation: "+20 con Black Sun Syndicate, -20 con OuterRim Law Enforcement", image: "eliminate_rival.jpg" },
    { description: "Proteger una operación ilegal", association: "Black Sun Syndicate", difficulty: 'Hard', requirements: 'Trained Combat', successRate: '60%', time: '12 days', reward: "$1700", reputation: "+17 con Black Sun Syndicate, -15 con OuterRim Law Enforcement", image: "protect_operation.jpg" },
    { description: "Interceptar un cargamento valioso", association: "Black Sun Syndicate", difficulty: 'Hard', requirements: 'Trained Piloting', successRate: '65%', time: '10 days', reward: "$1800", reputation: "+18 con Black Sun Syndicate", image: "intercept_cargo.jpg" },
    { description: "Recuperar bienes robados", association: "Black Sun Syndicate", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '70%', time: '8 days', reward: "$1600", reputation: "+16 con Black Sun Syndicate", image: "recover_stolen_goods.jpg" },
    { description: "Sobornar a un funcionario", association: "Black Sun Syndicate", difficulty: 'Medium', requirements: 'Trained Persuasion', successRate: '75%', time: '8 days', reward: "$1500", reputation: "+15 con Black Sun Syndicate, -10 con OuterRim Law Enforcement", image: "bribe_official.jpg" },
    { description: "Hackear sistemas de seguridad", association: "Black Sun Syndicate", difficulty: 'Easy', requirements: 'Trained Hacking', successRate: '85%', time: '6 days', reward: "$1300", reputation: "+13 con Black Sun Syndicate", image: "hack_security.jpg" },
    { description: "Proteger a un informante", association: "Black Sun Syndicate", difficulty: 'Medium', requirements: 'Trained Combat', successRate: '70%', time: '9 days', reward: "$1400", reputation: "+14 con Black Sun Syndicate", image: "protect_informant.jpg" },
    { description: "Infiltrarse en una organización rival", association: "Black Sun Syndicate", difficulty: 'Very Hard', requirements: 'Trained Espionage', successRate: '55%', time: '14 days', reward: "$1900", reputation: "+19 con Black Sun Syndicate", image: "infiltrate_rival.jpg" },
    { description: "Eliminar pruebas comprometedoras", association: "Black Sun Syndicate", difficulty: 'Easy', requirements: 'Trained Hacking', successRate: '80%', time: '5 days', reward: "$1200", reputation: "+12 con Black Sun Syndicate", image: "eliminate_evidence.jpg" },
    { description: "Recuperar un paquete perdido", association: "Black Sun Syndicate", difficulty: 'Medium', requirements: 'Trained Investigation', successRate: '70%', time: '8 days', reward: "$1400", reputation: "+14 con Black Sun Syndicate", image: "recover_package.jpg" }

  ];

  const associationsContainer = document.getElementById("associations-container");

associations.forEach((association) => {
    const associationElement = document.createElement("div");
    associationElement.classList.add("association", "col-md-4", "col-sm-12", "col-lg-3");
    associationElement.setAttribute("id", association.name);
    associationElement.setAttribute("style", 'width:100%');

    // Contenedor para imagen y h2
    const headerContainer = document.createElement("div");
    headerContainer.style.display = "flex";
    headerContainer.style.flexDirection = "row-reverse";
    headerContainer.style.alignItems = "center";  // Centrar verticalmente
    headerContainer.style.justifyContent = 'center'

    const imgElement = document.createElement("img");
    imgElement.src = association.imageUrl;
    imgElement.alt = `${association.name} Logo`;
    imgElement.style.marginLeft = "10px";  // Espacio entre imagen y texto

    const nameElement = document.createElement("h2");
    nameElement.textContent = association.name;

    headerContainer.appendChild(nameElement);
    headerContainer.appendChild(imgElement);
    associationElement.appendChild(headerContainer);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = association.description;
    associationElement.appendChild(descriptionElement);

    const alignmentElement = document.createElement("p");
    alignmentElement.textContent = `Alineamiento: ${association.alignment}`;
    associationElement.appendChild(alignmentElement);

    const missionsContainer = document.createElement("div");
    missionsContainer.classList.add("missions-container");

    missions
        .filter((mission) => mission.association === association.name)
        .forEach((mission) => {
            const missionCard = document.createElement("div");
            missionCard.classList.add("mission-card", "col-sm-12", "col-md-5", "col-lg-3", "card", "border-dark");
            missionCard.setAttribute("style", "width:100%");
            missionCard.style.justifyItems = "center";

            // Contenedor para imagen y card-header
            const cardHeaderContainer = document.createElement("div");
            cardHeaderContainer.style.display = "flex";
            cardHeaderContainer.style.flexDirection = "row";
            cardHeaderContainer.style.alignItems = "center";  // Centrar verticalmente
                // headerContainer.style.alignItems = "center";  // Centrar verticalmente
            cardHeaderContainer.style.justifyContent = 'center'
           

            const missionImage = document.createElement("img");
            missionImage.src = mission.image;
            missionImage.alt = mission.description;
            // missionImage.style.marginLeft = "10px";  // Espacio entre imagen y texto

            const missionTitle = document.createElement("div");
            missionTitle.classList.add("card-header");
            missionTitle.textContent = mission.description;

            cardHeaderContainer.appendChild(missionTitle);
            cardHeaderContainer.appendChild(missionImage);
            missionCard.appendChild(cardHeaderContainer);

            const missionDifficulty = document.createElement("p");
            missionDifficulty.textContent = `Dificultad: ${mission.difficulty}`;

            const missionTime = document.createElement("p");
            missionTime.textContent = `Tiempo: ${mission.time}`;

            const missionRequeriments = document.createElement("p");
            missionRequeriments.textContent = `Requerimientos: ${mission.requirements}`;

            const missionSuccessRate = document.createElement("p");
            missionSuccessRate.textContent = `%éxito: ${mission.successRate}`;

            const missionReward = document.createElement("p");
            missionReward.textContent = `Recomensa: ${mission.reward}`;

            const missionReputation = document.createElement("p");
            missionReputation.textContent = `Reputación: ${mission.reputation}`;

            missionCard.appendChild(missionDifficulty);
            missionCard.appendChild(missionRequeriments);
            missionCard.appendChild(missionSuccessRate);
            missionCard.appendChild(missionTime);
            missionCard.appendChild(missionReward);
            missionCard.appendChild(missionReputation);

            missionsContainer.appendChild(missionCard);
        });

    associationElement.appendChild(missionsContainer);
    associationsContainer.appendChild(associationElement);

    // Obtener el ancho original del elemento antes de aplicar cambios
    const originalWidth = associationElement.style.width || getComputedStyle(associationElement).width;

    associationElement.addEventListener("click", () => {
        const isVisible = missionsContainer.style.display === "flex";
        missionsContainer.style.display = isVisible ? "none" : "flex";

        // Cambiar el ancho del div al hacer clic
        if (isVisible) {
            associationElement.style.width = originalWidth;
            associationElement.className = "association col-md-4 col-sm-12 col-lg-3";
        } else {
            associationElement.style.width = "100%";
            associationElement.className = "association col-10";
        }

        // Ajustar el tamaño de la imagen dentro del div
        const imageElement = associationElement.querySelector("img");
        if (imageElement) {
            if (isVisible) {
                // Restaurar el tamaño original de la imagen al hacer clic nuevamente
                imageElement.style.width = "20%"; // Ajusta aquí el tamaño original de la imagen
                imageElement.style.height = "5%"; // Ajusta aquí el tamaño original de la imagen
            } else {
                // Mantener el tamaño fijo o absoluto de la imagen mientras el div se expande
                imageElement.style.width = "10%";
                imageElement.style.height = "10%";
            }
        }

        // Centrar la pantalla en el div al abrirlo o cerrarlo
        associationElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});





});
