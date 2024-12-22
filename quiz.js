// const questionObj = 
//     {
//       category: 'Food & Drink',
//       id: 'qa-1',
//       correctAnswer: 'Three',
//       options: ['Two', 'Three', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     };
const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score = 0;
    let currentQue = 0;
    const totalScore = quesJSON.length;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl = document.getElementById("next");

    function showQuestion(){
      let{correctAnswer,options,question}=quesJSON[currentQue];
      questionEl.textContent = question;
      options = shuffelOptions(options);
      options.forEach((opt)=>{
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionsEl.appendChild(btn);
        btn.addEventListener('click',()=>{
          if(opt === correctAnswer){
            score=score+1;
          } else{
            score =score-0.25;
          }
          scoreEl.textContent =`Score: ${score} / ${totalScore}`;
          // questionEl.textContent = 'Quiz completed!!';
          // optionsEl.textContent = '';
          nextQue();
        })
      })
    }
  
  
   function nextQue(){
    currentQue++;
    optionsEl.textContent ='';
    if(currentQue>= quesJSON.length){
      nextEl.remove();
      questionEl.textContent = 'Quiz completed!!';
    } else{
      showQuestion();
    }
   }
    

    // shuffel options
    function shuffelOptions(optArr){
      for(let i =optArr.length-1; i>=0;i--){
        const j = Math.floor(Math.random()*i+1);
        [optArr[i],optArr[j]]=[optArr[j],optArr[i]];
      }
      return optArr;
    }
    showQuestion();
    nextEl.addEventListener('click',()=>{
      scoreEl.textContent =`Score: ${score}/${totalScore}`;
      nextQue();});

