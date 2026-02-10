// // Get All Levels
// const loadLessons = () => {
//   fetch("https://openapi.programming-hero.com/api/levels/all")
//     .then((res) => res.json())
//     .then((json) => displayLesson(json.data));
// };

// // Load words according to category
// const loadLevelWord = (id) => {
//   const url = `https://openapi.programming-hero.com/api/level/${id}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
// const clickBtn=document.getElementById(`lesson-btn-${id}`)
// clickBtn.classList.add("active");
// displayLevelWord(data.data);
//     });
// }
// // synonyms Function dekhano jonno 
// const createElement = (arr) =>{
//   const htmlElement = arr.map((el)=> `<span class="btn">${el}</span>`);
//   return htmlElement.join("");

// };

// // loading section Dekhanor jonno 

// const mangespinner=(status) =>{
// if(status == true){
//   document.getElementById("spinner").classList.remove("hidden");
//   document.getElementById("word-container").classList.add("hidden");
// }
// else{
//  document.getElementById("word-container").classList.remove("hidden");
//   document.getElementById("spinner").classList.add("hidden");
// }
// }

// // Card er Detalies dekhno jonno 
// const loadWordDetail= async (id)=>{
//   mangespinner(true);
//     const url =`https://openapi.programming-hero.com/api/word/${id}`
//     console.log(url);
//     const res = await fetch(url);
//     const detailes = await res.json();
//     displayWordetailes(detailes.data);
// }
// const displayWordetailes=(word)=>{
//  const detailsbox = document.getElementById("details-container");
//  detailsbox.innerHTML=`
//  <h1>${word.word}</h1>
// <p>${word.meaning}</p>
// <p> points:${word.points}</p>
// <p>${word.sentence}</p>
// <p>Level:${word.level}</p>
// <p>${word.pronunciation}</p>
// <div class="">${createElement(word.synonyms)}</div>
//  `
//  document.getElementById("my_modal_5").showModal();
// }
// // End car detaies 

// // Display words catagory anujai card dekhano 
// const displayLevelWord = (words) => {
//   const wordcontainer = document.getElementById("word-container");
//   wordcontainer.innerHTML =""; 

// //   jodi kono Contect na thake 
// if (words.length == 0){
//     wordcontainer.innerHTML =`
//   <div class="flex flex-col items-center mx-auto justify-center text-center bg-red-100 border border-red-300 rounded-xl p-10 m-6 shadow-md">
    
//     <img src="./assets/alert-error.png" alt="Error" class="w-24 h-24 mb-6">
    
//     <h1 class="text-xl font-semibold text-red-700 mb-2">
//         কোনো Lesson Add করা হয় নাই
//     </h1>
    
//     <p class="text-red-600">
//         অনুগ্রহ করে অন্য কোনো lesson দেখুন।
//     </p>
    
// </div>
//  `
//  mangespinner(false)
//    return ; 
// }

//   words.forEach((word) => {
//     console.log(word);
//     const card = document.createElement("div");
 

//     card.innerHTML = `
//       <section id="word-container" class="bg-gray-100 p-10 w-full mx-auto my-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  
//   <!-- Example Word Card -->
//   <div class="bg-white rounded-xl shadow-md text-center p-6 flex flex-col justify-between">
    
//     <div>
//       <h2 class="text-xl font-semibold mb-2">${word.word ? word.word:"Word pawa jai nai "}</h2>
//       <p class="text-gray-500 mb-2">${word.meaning ? word.meaning:"kono otthho pawa jai nai "} /${word.pronunciation ?word.pronunciation:"pawa jai ni"}</p>
     
//     </div>
    
//     <div class="flex justify-between items-center mt-auto">
// // Detalies card er MOdal function 
//       <button onclick="loadWordDetail(${word.id})" class="text-sky-500 hover:text-sky-700 transition p-2">
//         <i class="fa-solid fa-info"></i>
//       </button>
//       <button class="text-sky-500 hover:text-sky-700 transition p-2">
//         <i class="fa-solid fa-volume-high"></i>
//       </button>
//     </div>

//   </div>

// </section>

//     `;

//     wordcontainer.append(card);
//   });
//   mangespinner(false);
// };

// // Display lesson buttons
// const displayLesson = (lessons) => {
//   const levelcontainer = document.getElementById("levelcontainer");
//   levelcontainer.innerHTML = "";

//   for (let lesson of lessons) {
//     const btndiv = document.createElement("div");

//     btndiv.innerHTML = `
//       <button id="lesson-btn-${lesson.level_no}"
//         onclick="loadLevelWord(${lesson.level_no})"
//         class="flex items-center gap-2 border border-sky-500 text-sky-500 px-4 py-2 rounded-lg hover:bg-sky-500 hover:text-white transition"
//       >
//         <i class="fa-solid fa-book-open"></i>
//         Lesson ${lesson.level_no}
//       </button>
//     `;

//     levelcontainer.appendChild(btndiv);
//   }
// };

// // Call function
// loadLessons();


// document.getElementById("btn-search").addEventListener("click",()=>{
//   const input = document.getElementById("input-search");
//   const searchvalue = input.value.trim().toLowerCase();
//   console.log(searchvalue);



// fetch("https://openapi.programming-hero.com/api/words/all")
//     .then((res) => res.json())
//     .then((data) =>  {
//  const allwords = data.data;
//  const filterwords = allwords.filter(word=>word.word.toLowerCase().includes(searchvalue))
//     });
//    displayLesson(filterwords)
// })

































/* =============================
   Load All Lessons
============================= */
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

/* =============================
   Load Words by Lesson
============================= */
const loadLevelWord = (id) => {
  mangespinner(true);

  document
    .querySelectorAll("[id^='lesson-btn']")
    .forEach((btn) => btn.classList.remove("active"));

  document.getElementById(`lesson-btn-${id}`).classList.add("active");

  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

/* =============================
   Spinner Control
============================= */
const mangespinner = (status) => {
  const spinner = document.getElementById("spinner");
  const container = document.getElementById("word-container");

  if (status) {
    spinner.classList.remove("hidden");
    container.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    container.classList.remove("hidden");
  }
};

/* =============================
   Create Synonyms Elements
============================= */
const createElement = (arr = []) => {
  return arr.map((el) => `<span class="btn btn-sm">${el}</span>`).join("");
};

/* =============================
   Load Word Details
============================= */
const loadWordDetail = async (id) => {
  mangespinner(true);

  const res = await fetch(
    `https://openapi.programming-hero.com/api/word/${id}`
  );
  const data = await res.json();

  displayWordetailes(data.data);
  mangespinner(false);
};


//  voice spekar on korar jonno 
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; 
  window.speechSynthesis.speak(utterance);
}

/* =============================
   Display Word Details (Modal)
============================= */
const displayWordetailes = (word) => {
  const detailsbox = document.getElementById("details-container");

  detailsbox.innerHTML = `
    <h2 class="text-2xl font-bold mb-2">${word.word}</h2>
    <p class="mb-2"><strong>Meaning:</strong> ${word.meaning ?? "N/A"}</p>
    <p class="mb-2"><strong>Pronunciation:</strong> ${word.pronunciation ?? "N/A"}</p>
    <p class="mb-2"><strong>Level:</strong> ${word.level}</p>
    <p class="mb-2"><strong>Points:</strong> ${word.points}</p>
    <p class="mb-4">${word.sentence ?? ""}</p>
    <div class="flex flex-wrap gap-2">
      ${createElement(word.synonyms)}
    </div>
  `;

  document.getElementById("my_modal_5").showModal();
};

/* =============================
   Display Words Cards
============================= */
const displayLevelWord = (words) => {
  const wordcontainer = document.getElementById("word-container");
  wordcontainer.innerHTML = "";

  if (!words || words.length === 0) {
    wordcontainer.innerHTML = `
      <div class="flex flex-col items-center text-center bg-red-100 p-10 rounded-xl col-span-full">
        <img src="./assets/alert-error.png" class="w-24 mb-4">
        <h1 class="text-xl font-semibold text-red-700">
          কোনো Lesson Add করা হয় নাই
        </h1>
        <p class="text-red-600">
          অনুগ্রহ করে অন্য Lesson দেখুন
        </p>
      </div>
    `;
    mangespinner(false);
    return;
  }

  words.forEach((word) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-xl shadow-md text-center p-6 flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <h2 class="text-xl font-semibold mb-2">
          ${word.word ?? "Word পাওয়া যায়নি"}
        </h2>
        <p class="text-gray-500 mb-2">
          ${word.meaning ?? "অর্থ পাওয়া যায়নি"} /
          ${word.pronunciation ?? "N/A"}
        </p>
      </div>

      <div class="flex justify-between items-center mt-auto">
        <button
          onclick="loadWordDetail(${word.id})"
          class="text-sky-500 hover:text-sky-700 transition"
        >
          <i class="fa-solid fa-info"></i>
        </button>

        <button onclick="pronounceWord('${word.word}')" class="text-sky-500 hover:text-sky-700 transition">
  <i class="fa-solid fa-volume-high"></i>
</button>

      </div>
    `;

    wordcontainer.appendChild(card);
  });

  mangespinner(false);
};

/* =============================
   Display Lesson Buttons
============================= */
const displayLesson = (lessons) => {
  const levelcontainer = document.getElementById("levelcontainer");
  levelcontainer.innerHTML = "";

  lessons.forEach((lesson) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <button
        id="lesson-btn-${lesson.level_no}"
        onclick="loadLevelWord(${lesson.level_no})"
        class="flex items-center gap-2 border border-sky-500 text-sky-500 px-4 py-2 rounded-lg hover:bg-sky-500 hover:text-white transition"
      >
        <i class="fa-solid fa-book-open"></i>
        Lesson ${lesson.level_no}
      </button>
    `;

    levelcontainer.appendChild(div);
  });
};

/* =============================
   Search Functionality
============================= */
document.getElementById("btn-search")?.addEventListener("click", () => {
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();

  if (!searchValue) return;

  mangespinner(true);

  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => {
      const filteredWords = data.data.filter((word) =>
        word.word.toLowerCase().includes(searchValue)
      );
      displayLevelWord(filteredWords);
    });
});

/* =============================
   Initial Call
============================= */
loadLessons();









