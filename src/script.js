//global variable
const cardContainer = getvalue("card-container");
const historySection = getvalue("history-section");
const donationBtn = getvalue("donation-btn");
const historyBtn = getvalue("history-btn");
let totalDonationFundValue = parseInt(getvalue("total-balance").innerText);

//utility function
function getvalue(id) {
  const val = document.getElementById(id);
  return val;
}

// Navber turn stick part
window.addEventListener("scroll", () => {
  const navber = getvalue("nav-ber");
  const navberInnerDiv = getvalue("navber-inner-div");
  if (window.scrollY > 50) {
    navber.classList.add("backdrop-blur-md", "bg-white/25");
    navberInnerDiv.classList.remove("bg-[#F9F7F3]");
  } else {
    navber.classList.remove("backdrop-blur-md", "bg-white/25");
    navberInnerDiv.classList.add("bg-[#F9F7F3]");
  }
});

// Donation button click event
donationBtn.addEventListener("click", () => {
  historySection.classList.add("hidden");
  cardContainer.classList.remove("hidden");

  donationBtn.classList.add("bg-[#B4F461]");
  historyBtn.classList.remove("bg-[#B4F461]");
});

// History button click event
historyBtn.addEventListener("click", () => {
  historySection.classList.remove("hidden");
  cardContainer.classList.add("hidden");

  donationBtn.classList.remove("bg-[#B4F461]");
  historyBtn.classList.add("bg-[#B4F461]");
});

//input validation
function validation(card, donationInputValue,donationInputStringValue) {
  if (
    isNaN(donationInputStringValue) || isNaN(donationInputValue) ||
    donationInputValue < 0 ||
    donationInputValue === ""
  ) {
    
    card.querySelector(".donation-input").value = "";
    card.querySelector(".modal2").showModal();
    return false;
  } else {
    card.querySelector(".modal").showModal();
    return true;
  }
}

//show in history function
function showInHistory(card, donationInputValue) {
  const historyCardContainer = document.querySelector(
    ".history-card-container"
  );

  const today = new Date();
  const options = {
    timeZone: "Asia/Dhaka",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const bangladeshDate = today.toLocaleString("en-GB", options);

  const cardTitle = card.querySelector(".title").innerText;
  const cardOuterDiv = document.createElement("div");
  cardOuterDiv.innerHTML = `<div class="p-10 border border-gray-400 rounded-xl flex flex-col gap-4">
                  <p class="font-bold text-lg md:text-xl">${donationInputValue} Taka is Donated for ${cardTitle}</p>
                    <p class="text-sm">Date : ${bangladeshDate} GMT+0600 (Bangladesh Standard Time)</p>
                </div>`;
  historyCardContainer.appendChild(cardOuterDiv);
}

const allCard = document.querySelectorAll(".cards");

allCard.forEach((card) => {
  const donateNowBtn = card.querySelector(".donate-now-btn");

  //donate now button work
  donateNowBtn.addEventListener("click", () => {
    const donationInputStringValue = card.querySelector(".donation-input").value;
    
    const donationInputValue = parseInt(
      card.querySelector(".donation-input").value
    );
    let donationValue = parseInt(
      card.querySelector(".donation-value").innerText
    );

    if(totalDonationFundValue<donationInputValue){
      card.querySelector(".modal3").showModal();
      card.querySelector(".donation-input").value = "";
    }

    else if (validation(card, donationInputValue ,donationInputStringValue)) {
      donationValue += donationInputValue;
      card.querySelector(".donation-value").innerText = `${donationValue} BDT`;
      totalDonationFundValue -= donationInputValue;

      document.querySelector(
        "#total-balance"
      ).innerText = `${totalDonationFundValue}BDT`;

      getvalue("empty-history-alert").classList.add("hidden");
      document.querySelector(".history-card-container").classList.remove("hidden")
      document.querySelector(".history-card-container").classList.add("flex")

      showInHistory(card, donationInputValue);
      card.querySelector(".donation-input").value = "";
    }
  });
});

