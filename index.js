// index.js

// Associations Array
const associations = [
  {
    name: "OuterRim Law Enforcement",
    description:
      "A group of people that take law under their hands for trying to make the outer rim a better place.",
    alignment: "Lawful/Neutral",
    imageUrl: "path/to/outerrim-law.jpg",
  },
  {
    name: "Merchant Syndicate",
    description:
      "An organization of merchants that need transportation, security, etc.",
    alignment: "Neutral",
    imageUrl: "path/to/merchant-syndicate.jpg",
  },
  {
    name: "Bounty Hunter Brotherhood",
    description:
      "An organization that makes a profit by subcontracting people to capture fugitives, either for the Corellian Law enforcement or other darker organizations.",
    alignment: "Neutral",
    imageUrl: "path/to/bounty-hunter.jpg",
  },
  {
    name: "The New Order",
    description:
      "A Sith-like group (or empire-like group) that has its own interests, apart from the Galaxy.",
    alignment: "Lawful/Evil",
    imageUrl: "path/to/new-order.jpg",
  },
  {
    name: "Galaxy Space Plague Control",
    description:
      "An organization that deals with the hunt of dangerous species on several planets.",
    alignment: "Neutral",
    imageUrl: "path/to/space-plague-control.jpg",
  },
  // Add more associations as needed
];

// Missions Array
const missions = [
  {
    description: "Patrol Outer Rim Sectors",
    association: "OuterRim Law Enforcement",
    difficulty: "Level 2",
    successRate: "85%",
    reward: "$500",
    reputation: "+10 with OuterRim Law Enforcement",
    negativeReputation: "-5 with Space Pirates",
    imageUrl: "path/to/patrol.jpg",
  },
  {
    description: "Escort Cargo Shipment",
    association: "Merchant Syndicate",
    difficulty: "Level 3",
    successRate: "75%",
    reward: "$800",
    reputation: "+15 with Merchant Syndicate",
    negativeReputation: "-10 with Pirates",
    imageUrl: "path/to/escort.jpg",
  },
  {
    description: "Capture Fugitives",
    association: "Bounty Hunter Brotherhood",
    difficulty: "Level 4",
    successRate: "60%",
    reward: "$1200",
    reputation: "+20 with Bounty Hunter Brotherhood",
    negativeReputation: "-15 with Outer Rim Gangs",
    imageUrl: "path/to/capture.jpg",
  },
  {
    description: "Assassinate Political Target",
    association: "The New Order",
    difficulty: "Level 5",
    successRate: "50%",
    reward: "$2000",
    reputation: "+30 with The New Order",
    negativeReputation: "-20 with Rebel Alliance",
    imageUrl: "path/to/assassinate.jpg",
  },
  {
    description: "Exterminate Dangerous Species",
    association: "Galaxy Space Plague Control",
    difficulty: "Level 4",
    successRate: "70%",
    reward: "$1500",
    reputation: "+25 with Galaxy Space Plague Control",
    negativeReputation: "-10 with Environmentalists",
    imageUrl: "path/to/exterminate.jpg",
  },
  // Add more missions as needed
];

// Function to create association sections
function createAssociations() {
  const missionsContainer = document.getElementById("missions");

  associations.forEach((association) => {
    // Create section for each association
    const section = document.createElement("section");
    section.classList.add("faction");

    const header = document.createElement("h2");
    header.classList.add("faction-header");
    header.textContent = association.name;

    const description = document.createElement("p");
    description.textContent = association.description;

    const image = document.createElement("img");
    image.src = association.imageUrl;
    image.alt = association.name;
    image.classList.add("faction-image");

    section.appendChild(header);
    section.appendChild(image);
    section.appendChild(description);

    // Append missions related to the association
    const relatedMissions = missions.filter(
      (mission) => mission.association === association.name
    );
    relatedMissions.forEach((mission) => {
      const missionDiv = document.createElement("div");
      missionDiv.classList.add("mission");

      const missionTitle = document.createElement("h5");
      missionTitle.textContent = mission.description;

      const missionDetails = document.createElement("ul");
      missionDetails.classList.add("mission-details");

      const difficulty = document.createElement("li");
      difficulty.textContent = `Difficulty: ${mission.difficulty}`;

      const successRate = document.createElement("li");
      successRate.textContent = `% Success: ${mission.successRate}`;

      const reward = document.createElement("li");
      reward.textContent = `Reward: ${mission.reward}`;

      const reputation = document.createElement("li");
      reputation.textContent = `Reputation: ${mission.reputation}`;

      const negativeReputation = document.createElement("li");
      negativeReputation.textContent = `Negative Reputation: ${mission.negativeReputation}`;

      const missionImage = document.createElement("img");
      missionImage.src = mission.imageUrl;
      missionImage.alt = mission.description;
      missionImage.classList.add("mission-image");

      missionDetails.appendChild(difficulty);
      missionDetails.appendChild(successRate);
      missionDetails.appendChild(reward);
      missionDetails.appendChild(reputation);
      missionDetails.appendChild(negativeReputation);

      missionDiv.appendChild(missionTitle);
      missionDiv.appendChild(missionImage);
      missionDiv.appendChild(missionDetails);
      section.appendChild(missionDiv);
    });

    missionsContainer.appendChild(section);
  });
}

// Call the function to create associations on page load
document.addEventListener("DOMContentLoaded", createAssociations);
