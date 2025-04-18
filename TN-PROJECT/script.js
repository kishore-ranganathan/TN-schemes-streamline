const features = [
    {
      title: "EDUCATION SCHEMES",
      description: "access to various educational schemes",
    },
    {
      title: "ELECTRICAL SCHEMES",
      description: "access to various electronic schemes",
    },
    {
      title: "COMMUNITY SECHEMES",
      description: "access to various community services",
    },
    {
      title: "WOMEN SCHEMES",
      description: "acces to various women empowerment schemes",
    },
    {
      title: "FARMER SCHEMES",
      description: "Access to various farmer schemes.",
    },
    {
      title: "JOB OPPORTUNITIES",
      description: "Access to various job opportunities,",
    },
  ];
  
  const container = document.querySelector(".features");
  
  features.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
  