const container = document.querySelector(".container");
const freeSeats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// Save selected Movie index and Price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const countSelected = document.querySelectorAll(
    ".cinema-seats .seat.selected"
  );

  // Copy selected seats into an array with spread Operator
  // Map through that array
  // return a new array of indexes
  const seatIndex = [...countSelected].map((seat) => {
    return [...freeSeats].indexOf(seat);
  });

  //   Local Storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  const countSelectedTotal = countSelected.length;

  count.innerText = countSelectedTotal;
  total.innerText = countSelectedTotal * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
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
