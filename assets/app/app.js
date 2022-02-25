const container = document.querySelector(".container");
const freeSeats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// Update total and count
function updateSelectedCount() {
  const countSelected = document.querySelectorAll(
    ".cinema-seats .seat.selected"
  );
  const countSelectedTotal = countSelected.length;

  count.innerText = countSelectedTotal;
  total.innerText = countSelectedTotal * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", () => {
  ticketPrice = +movieSelect.value;

  updateSelectedCount();

  console.log(ticketPrice);
});

// Seat selected event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
