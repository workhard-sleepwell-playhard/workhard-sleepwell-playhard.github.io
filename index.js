
const userName = document.getElementById('user-name');
const userAge = document.getElementById('user-age');
const userGender = document.getElementById('gender');
const userWeight = document.getElementById('user-weight');
const userHeight = document.getElementById('user-height');
const startBtn = document.getElementById("start-btn");
const instructionBtn = document.getElementById("info-btn"); 
const quizBox = document.getElementById("quiz");
const userForm = document.getElementById("user-details");
const quote = document.getElementById("it-helps");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const summaryPage = document.getElementById("summary-page");
const body = document.getElementById("body");
const instruction =document.getElementById('instructions');
let currentQuestionIndex = 0;


 class User {
    constructor(){
        const storedUsers = localStorage.getItem('users');
        console.log('Stored users:', storedUsers);
    this.users =  JSON.parse(localStorage.getItem('users')) || [];
    console.log('Initialized users array:', this.users);
    }
      addUser(userName, userAge, userGender, userWeight, userHeight){
        const newUser = {
            userName: userName,
            userAge: userAge,
            userGender: userGender,
            userWeight: userWeight,
            userHeight: userHeight
      }
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log('New user added:', newUser);
        console.log('Updated users array:', this.users);
      }
    };

class Question {
    constructor(answers) {
        this.questions = [{
            text: "Do you feel less motivitate not just about the gym but also in other areas of life?",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            text: "Have you notice a pattern of unexpected poor sleep when not making any changes to your lifestyle?",
            answers: answers,
            selectedAnswer: undefined
        },     
        {
            text: "Do you feel more irritable or moody?",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            text:"Have you hit a platue even when it's not expected",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text: "do you notice any old injurise starting to flaw back up? ",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text:"Do you get a frequent cold or flu. Even when you are normally healthy?",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text:"You begin to think you'r losing your muscle. Not A FEELING, but you do see yourself getting smaller.",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text:"You have less energy to get through a noraml workout",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text:"Your muscle get fatigued very quickly.",
            answers: answers,
            selectedAnswer: undefined
        },
        {
            
            text:"You started to pack on more fat and minimal muscle gain.",
            answers: answers,
            selectedAnswer: undefined
        }];

    }

    displayQuestion(index){
        const question = this.questions[index];
        const questionContainer = document.getElementById("questions");
        const nextAndBackBtn = document.getElementById("btn");
        if(questionContainer){
        questionContainer.innerHTML = '';
        //create element to dispaly question 
        nextAndBackBtn.style.display = "flex";
        quizBox.style.display = "flex";
        const userQuestions = document.createElement("p")
        userQuestions.classList.add("instruction");
        userQuestions.innerHTML = question.text;
        questionContainer.appendChild(userQuestions);
        //create element to dispaly user options 
        const answerContainer = document.getElementById("user-options");
        answerContainer.innerHTML = '';
        answerContainer.style.display = "flex";
        question.answers.forEach((answer, i) => {
        const answerInput = document.createElement("input"); 
        answerInput.classList.add("radio-btn");
        answerInput.type = "radio";
        answerInput.name = `questions${index}`;
        answerInput.value = answer;
        answerInput.id = `answer${i} questions${index}`;

        const answerLabel = document.createElement("label")
        answerLabel.classList.add("radio-btn");
        answerLabel.htmlFor = answerInput.id;
        answerLabel.textContent = answer;
        answerLabel.prepend(answerInput);
        answerContainer.appendChild(answerLabel);

        answerInput.addEventListener("change", () => {
            this.questions[index].selectedAnswer = answerInput.value;
        })

        })   
    
    };
    }
    }
    //When user finises last question they can check their summeray 
    const adviceLookUp = {
        "q1": {
            "your-done":"You don't want to go to the gym anymore, it's killing you, and you feel and performer like a slug that's running out of slime. In this case you tried everything, so do yourself a favour and stay home.",
            "high-concern":"It seems the gym no longer animates you like before, perhaps training has gotten very reptitive, there are always different ways we can change our session to make it interesting again. However if doing so still feels like a chore then maybe it's time to lay off for a bit",
            "moderate-concern":"motivation is only an feeling that comes and goes, it would be silly to detemine our action based on it alone, and frequtnly it's normal to not be motiviated but still deliever outstadning results ",
            "no-concern":"It seems you still have stronge motivation to keep going, and there really is no reason to slow down if you feel mentally well."
        },
        "q2": {
            "your-done":"Severe sleep problems indicate serious overtraining. Take a break, focus on relaxation (meditation, stretching), and ensure you’re eating enough.",
            "high-concern":"Frequent sleep issues suggest poor recovery. Lower training volume, increase rest days, and avoid caffeine before bed.",
            "moderate-concern":"Inconsistent sleep could be an early sign of overtraining. Try reducing intensity, improving sleep hygiene, and managing stress.",
            "no-concern":"Your sleep is fine—no signs of overtraining. Keep up good habits like a consistent bedtime and proper nutrition."
        },
        "q3": {
            "your-done":"Your mood swings are intense and consistent. It’s a sign that you’ve pushed yourself too far. Time to lay off, rest up, and focus on bouncing back before you burn out completely.",
            "high-concern":"You’re feeling a little off, but it happens to the best of us. Stress, poor recovery, or just life can throw us off, but keep your focus on recovery and rest to get back to feeling solid.",
            "moderate-concern":"Your mood's been all over the place—your body might be screaming for a break. Cut back on your training, take some time to chill, and focus on things like hydration and sleep.",
            "no-concern":"You're still feeling like yourself, and that’s great. Keep fueling yourself well and get enough rest to stay in this positive state."
        },
        "q4": {
            "your-done":"The plateau isn’t just a bump in the road—it’s a sign you’ve overdone it. Your body’s burnt out, and it’s screaming for rest. Time to take a break, reset, and come back stronger.",
            "high-concern":"You're hitting a wall, and it’s clear your body needs a change. Training may have gotten too repetitive or intense—consider adjusting your routine, giving your muscles a chance to recover, or even deloading for a bit.",
            "moderate-concern":"A plateau can happen, especially when you've been pushing hard. It might be time to mix up your routine or take a small break to recharge. Keep it fresh to stay on the path.",
            "no-concern": "You're still making progress and hitting new milestones. Keep at it, and stay consistent—your results are on track."
        },
        "q5": {
            "your-done":"Old injuries resurfacing means you’ve pushed your body beyond its limit. This is a big red flag that you need a serious break and some time to recover fully before you risk making it worse.",
            "high-concern":"Your past injuries are coming back with a vengeance. Your body might not be recovering properly, which is a clear sign to cut back on the intensity, focus on rehab, and give your body time to heal.",
            "moderate-concern":"Your old injuries are giving you some signs of discomfort. It might be time to back off and focus on rehab or mobility exercises, as well as giving yourself more rest to prevent them from getting worse.",
            "no-concern":"No issues with old injuries, which means you're staying on top of your recovery. Keep it up by continuing to stretch, strengthen, and take care of yourself."
        },
        "q6": {
            "your-done":"Your immune system is clearly struggling, and it’s a sign your body is seriously overworked. It’s time to stop pushing and focus on rest and proper care. Give your body the break it needs to heal and recharge.",
            "high-concern":"Frequent sickness could mean your body’s defenses are weakening due to overtraining. Now’s the time to take it easy, rest more, and focus on recovery to get your immune system back to full strength.",
            "moderate-concern":"You’re catching the occasional bug, which can happen, but it could also be a sign that your immune system is getting worn down. Make sure you’re eating well, staying hydrated, and managing stress to keep your body in fighting shape.",
            "no-concern": "No issues with getting sick, and that’s how it should be. Keep doing what you’re doing—balanced nutrition and rest go a long way in keeping your immune system strong."
        },
        "q7": {
            "your-done":"Your muscles are shrinking, and that’s a clear signal that you’ve pushed your body too far. Take a break, adjust your training load, and focus on recovery to preserve what you’ve built and come back stronger.",
            "high-concern":"Losing muscle is a serious sign your body’s not recovering properly. This could be from chronic overtraining. It’s time to dial back your sessions, ensure proper nutrition, and prioritize recovery—your muscles need time to repair and grow.",
            "moderate-concern":"You’re noticing a slight decrease in size, which could be due to overtraining or inadequate recovery. Focus on getting more rest, adjust your training intensity, and make sure you’re eating enough to fuel your muscles.",
            "no-concern": "You’re holding onto your gains and looking solid. Keep up the hard work and stay consistent with your training and nutrition to continue making progress."
        },
        "q8": {
            "your-done":"You’ve got nothing left in the tank, and that’s a sign of serious overtraining. Time to step away from the gym, focus on rest and nutrition, and give your body the recovery it needs before you can even think about hitting the gym again.",
            "high-concern":"You’re struggling to get through your usual routine, which is a red flag. Your body’s worn out, and it’s telling you it needs a break. Cut back on training, focus on recovery, and make sure you’re fueling and sleeping properly.",
            "moderate-concern":"Your energy is dipping a bit, which could be a sign of early overtraining. Focus on getting more rest, making sure you’re eating enough, and perhaps lightening your training load for a bit to recharge",
            "no-concern": "You’re still feeling strong during your workouts—keep that momentum going. Keep fueling your body properly and get enough rest to maintain this level of energy."
        },
        "q9": {
            "your-done":"Your muscles are drained too quickly, signaling that overtraining is taking a heavy toll. Time to stop and focus on complete recovery—give your muscles time to rebuild and ensure you’re taking in the right nutrition to restore your energy.",
            "high-concern":"Muscle fatigue is setting in too fast, which is a clear sign your body isn’t recovering properly. It’s time to ease off the intensity, prioritize rest, and ensure you’re taking in enough calories and nutrients to support muscle recovery.",
            "moderate-concern":"Muscle fatigue hitting quicker than usual could be a sign of overtraining. Consider reducing workout intensity, focusing on proper recovery techniques, and making sure you’re eating enough to support your workouts.",
            "no-concern": "Your muscles are holding up well, so keep pushing forward. Just make sure you're staying hydrated and fueling your body with enough nutrients to keep the energy flowing."
        },
        "q10": {
            "your-done":"Your body’s holding onto fat while muscle growth stalls, which means overtraining is taking a toll. Take a break, focus on proper nutrition, and give your body time to recover and reset before jumping back in.",
            "high-concern":"Packing on fat with minimal muscle gain could be a sign of overtraining or poor recovery. Your body’s in a stress state and storing fat instead of building muscle. It’s time to dial back the intensity, eat with purpose, and prioritize rest and recovery.",
            "moderate-concern":"If fat is creeping up while muscle gain is minimal, you might be in a calorie surplus without enough stimulus to build muscle. Look at adjusting your diet and training to prioritize muscle growth and ensure you're not overtraining.",
            "no-concern": "You’re still making solid progress. Keep tracking your nutrition and training to ensure you're staying on the right path and avoid overindulgence. Consistency will continue to pay off."
        }
    };
    
 function goBack (url){
        window.location.href = url;
        }
        // document.addEventListener('DOMContentLoaded', () => {
           

            if (startBtn) {
                startBtn.addEventListener("click", () => {
                    if (userName.value === "" || userAge.value === "" || userGender.value === "" || userWeight.value === "" || userHeight.value === "") {
                        alert("Please fill out all boxes before starting the quiz");
                        return;
                    }
                    const userDetails = new User();
                    userDetails.addUser(userName.value, userAge.value, userGender.value, userWeight.value, userHeight.value);
                    console.log("user saved", userDetails);
                    const answers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
                    const quiz = new Question(answers);
                    quiz.displayQuestion(currentQuestionIndex);
                    userForm.style.display = "none";
                    quote.style.display = "none";
                    quizBox.style.display = "flex";
                
                if (nextBtn) {
                    nextBtn.addEventListener("click", () => {
                        const dfc = displayFeedback();
                        if (dfc) {
                            quiz.displayQuestion(currentQuestionIndex);
                        }
                    });
                };
                
        
                backBtn.addEventListener("click", () => {
                    if (currentQuestionIndex > 0) {
                        feedback.style.display = 'none';
                        currentQuestionIndex--;
                        quizBox.classList.remove('animate');
                        void quizBox.offsetHeight;
                        quizBox.classList.add('animate');
                        quiz.displayQuestion(currentQuestionIndex);
                        preCheckAnswer();
                        updateProgess();
                        update();
                    }
                });
            
        const displayFeedback = () => {
            const selectedAnswer = document.querySelector(`input[name="questions${currentQuestionIndex}"]:checked`) 
            if(!selectedAnswer){
               alert('please select an option to move on');
               return false;
           };
            if(currentQuestionIndex < quiz.questions.length - 1) {
                quiz.questions[currentQuestionIndex].selectedAnswer = selectedAnswer.value;
                    const feedback = document.getElementById("feedback");
                    feedback.style.display="flex"
                    feedback.classList.remove("animate"); // Reset animation
                    void feedback.offsetWidth; // Trigger reflow
                    feedback.classList.add("animate"); // Start animation
                    switch (parseInt(selectedAnswer.value, 10)) {
                        case 1:
                            feedback.textContent = "You don't need to worry about this. Keep lifting !!";
                            break;
                        case 2:
                            feedback.textContent = "cmon on, push harder you got so much more in you.";
                            break;
                        case  3:
                            feedback.textContent = "What are you saving your energy for that's not hwo you get big!";
                            break;
                        case 4:
                            feedback.textContent = "My mum trains harder then you, and that says alot.";
                            break;
                        case 5: 
                            feedback.textContent = "Ah, finally you decided to train";
                            break;
                        case 6:
                            feedback.textContent = "You would be proud of yourself";
                            break;
                        case 7:
                            feedback.textContent = "I know you should try hard, but careful there";
                            break;
                        case 8: 
                            feedback.textContent = "I think your body had enough";
                            break;
                        case 9: 
                            feedback.textContent = "Who are you trying to prove!?";
                            break;
                        default:
                            feedback.textContent = "Who hurt you :(";
                            break;
                };

                update(currentQuestionIndex, quiz.questions.length);
                quizBox.classList.remove('animate')
                void quizBox.offsetHeight;
                quizBox.classList.add('animate')
              quiz.displayQuestion(currentQuestionIndex);
              return true;
               }else{
                update(currentQuestionIndex, quiz.questions.length);
                localStorage.setItem('quizResults', JSON.stringify(quiz.questions));
               setTimeout(() => { window.location.href = 'summary.html'}, 1000);
                 return false;
            }};

            const preCheckAnswer = () => {
                if (quiz.questions[currentQuestionIndex].selectedAnswer !== undefined){
               const previousSelectedQuesion = document.querySelector(`input[name="questions${currentQuestionIndex}"][value="${quiz.questions[currentQuestionIndex].selectedAnswer}"]`)
               if (previousSelectedQuesion)
               previousSelectedQuesion.checked = true;
                }
            };
            const updateProgess = () => {
                const progressContainer = document.getElementById('progress-bar');
                let progressBar = document.getElementById('progress');
        
                progressContainer.style.display = "flex";
                let progressIncrement = (currentQuestionIndex / quiz.questions.length) * 100;
                progressBar.style.width = progressIncrement + '%';
            };
        
            const update = (c, q) => {
                if(c <= q){
                    currentQuestionIndex ++;
                }
                updateProgess();
               
            };


        });
    
        if(instructionBtn){instructionBtn.addEventListener("click", () => {
            instruction.innerHTML = `
            <div class="instruction">
                <h1 style= "padding-bottom: 10px;">How does it work?</h1>
                <p><strong>Overtraining :</strong> is a common issue for athletes and fitness enthusiasts. Overtraining occurs when the body is pushed beyond its limits and is unable to recover properly. This can lead to a decrease in performance, fatigue, and even injury.</p>
                <p style="padding-top: 20px;";><strong>This quiz will help you :</strong> determine if you are overtraining and provide you with tips on how to prevent it. <p style="padding-top: 20px;"><strong>To get started :</strong> please fill out the form below.</span> Afterwards you will be required to answer some question where we can access how badly you overtrainined or, prehaps you have just been abit lazy to train. <span style="background-color: #19b1f3; "><strong>Please anwer each question from 1 - 10. 1 Being the not at all, and 10 being yes thats so me!</strong></span></p>
                <button id="close-btn" style="margin-left: 520px;">Close</button>
            </div>`;
            userForm.style.display = "none";
            quote.style.display = "none";
            instruction.style.display = "flex";
            const closeBtn = document.getElementById("close-btn");
            closeBtn.addEventListener("click", () => {
                instruction.style.display = "none";
                userForm.style.display = "flex";
                quote.style.display = "flex";
            });
        });
        }; 
        
    //   };
// });

const summary = () => {
    const yourReport = Array.from(document.getElementsByClassName("response"));
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));
    console.log('yourReport:', yourReport);
    console.log('quizResults:', quizResults);
    quizResults.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        const selectedAnswer = parseInt(question.selectedAnswer, 10);
        const advice = getAdvice(questionId, selectedAnswer);
        console.log(`Processing question ${index + 1}:`, question);
        console.log(`Selected answer: ${selectedAnswer}, Advice: ${advice}`);
        if (yourReport[index]) {
            yourReport[index].innerHTML = advice;
        } else {
            console.log(`Answer not found for index ${index}`);
        }
    });
};


    

const getAdvice = (questionId, answerValue) => {
    if (answerValue <= 2){
        return adviceLookUp[questionId]["no-concern"];
    }else if (answerValue >= 3 && answerValue <= 5){
        return adviceLookUp[questionId]["moderate-concern"];
  }else if (answerValue >= 6 && answerValue <= 8){
    return adviceLookUp[questionId]["high-concern"];
  }else{
    return adviceLookUp[questionId]["your-done"]
  }
};


  if (window.location.pathname.endsWith('summary.html')) {
                 summary();
                document.getElementById('download').addEventListener('click', () => {
                    const downloadFile = document.getElementById("summary-container");
                    downloadFile.classList.add('PDF-style');
                    const options = {
                        margin: 0, // Set all margins to zero
                        filename: 'quiz-summary.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                    };
                       
                    html2pdf().from(downloadFile).set(options).save().then(() => {
                        downloadFile.classList.remove('PDF-style');
                    });
                }); 
            };
