//alert('hello');

//challange 1: your age in days

function ageInDays(){
    let birthyear = prompt('What is your birthday?');
    const thisyear = new Date().getFullYear();
    let ageInDayss = Math.round((thisyear - birthyear)*365.25);
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1)
    
}


function reset(){
    document.getElementById('ageInDays').remove()
}


// challenge 2 cat generator

function catgenerator() {
    let image = document.createElement('img');
    let div =document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.alt="";
    div.appendChild(image);
}


// challenge 3: rock, paper and scissors

function rpsGame(yourChoice){
    // console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());    
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    // console.log(final)
    // console.log(humanChoice, botChoice);
    // console.log(results);
    // console.log(message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3)
}


function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number]
}

function decideWinner(human, bot){
    const rpsDatabase ={
            'rock':{'scissors':1, 'rock':0.5, 'paper':0}
            ,'paper':{'scissors':0, 'rock':1, 'paper':0.5}
            ,'scissors':{'scissors':0.5, 'rock':0, 'paper':1}
    };


    let yourScore = rpsDatabase[human][bot]
    let computerScore = rpsDatabase[bot][human]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    let final_score = yourScore - computerScore
    if (final_score==0){
        return {'message': 'You tied!', 'color':'yellow'};
    }else if (final_score == 1){
        return {'message': 'You won!', 'color':'green'};
    }else{
        return {'message': 'You lost!', 'color':'red'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    const imageDatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    let humanImagesrc = imageDatabase[humanImageChoice];
    let botImagesrc = imageDatabase[botImageChoice];
    
    //let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humandiv = document.createElement('div');
    let botdiv = document.createElement('div');
    let messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src= '" + humanImagesrc + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    botdiv.innerHTML = "<img src= '" + botImagesrc + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)' >"
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px '> " + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
    
}


// challenge 4: change the colors within html
function buttonColorChange(color_choice){

}

var all_buttons = document.getElementsByTagName('button')


var copyAllButtons = [];
for (let i=0; i <all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);

}



function buttonColorChange(buttonThingy){
    if(buttonThingy.value=='red'){
        buttonRed();
    }else if (buttonThingy.value=='green'){
        buttonGreen();
    }else if (buttonThingy.value=='reset'){
        buttonReset();
    }else if(buttonThingy.value=='random'){
        buttonRandom();
    }
};


function buttonRed() {
    for (let i=0; i <all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger') 
    }
}

function buttonGreen() {
    for (let i=0; i <all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success') 
    }
}

const distinctcolor = [...new Set(copyAllButtons)]

function buttonRandom() {
    for (let i=0; i <all_buttons.length; i++){
        let randomcolor = distinctcolor[Math.floor(Math.random()*distinctcolor.length)];
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randomcolor);
    };    
}

function buttonReset(){       
    for (let i=0; i <all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i]) 
    };  
}

// challenge 5: Black jack 

let blackjackgame = {
    'you':{'scoreSpan': '#your-blackjack-result'
            , 'div':'#your-box'
            , 'score':0}

    ,'dealer':{'scoreSpan': '#dealer-blackjack-result'
            , 'div':'#dealer-box'
            , 'score':0}
    ,'cards':[
            '3C', '3D', '3H', '3S',
            '4C', '4D', '4H', '4S',
            '9C', '9D', '9H', '9S',
            '5C', '5D', '5H', '5S',
            'JC', 'JD', 'JH', 'JS',
            '7C', '7D', '7H', '7S',
            '8C', '8D', '8H', '8S',
            '6C', '6D', '6H', '6S',
            '10C', '10D', '10H', '10S',
            'AC', 'AD', 'AH', 'AS',
            '2C', '2D', '2H', '2S',
            'QC', 'QD', 'QH', 'QS',
            'KC', 'KD', 'KH', 'KS']
    ,'cards_point':{
        '3C': 3, '3D': 3, '3H': 3, '3S': 3,
        '4C': 4, '4D': 4, '4H': 4, '4S': 4,
        '9C': 9, '9D': 9, '9H': 9, '9S': 9,
        '5C': 5, '5D': 5, '5H': 5, '5S': 5,
        'JC': 10, 'JD': 10, 'JH': 10, 'JS': 10,
        '7C': 7, '7D': 7, '7H': 7, '7S': 7,
        '8C': 8, '8D': 8, '8H': 8, '8S': 8,
        '6C': 6, '6D': 6, '6H': 6, '6S': 6,
        '0C': 10, '0D': 10, '0H': 10, '0S': 10, // this is the number 10
        'AC': 1, 'AD': 1, 'AH': 1, 'AS': 1,
        '2C': 2, '2D': 2, '2H': 2, '2S': 2,
        'QC': 10, 'QD': 10, 'QH': 10, 'QS': 10,
        'KC': 10, 'KD': 10, 'KH': 10, 'KS': 10
                 }
};

const hitSound = new Audio(`./static/sounds/swish.m4a`)
const winSound = new Audio(`./static/sounds/cash.mp3`)
const loseSound = new Audio(`./static/sounds/aww.mp3`)


const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];

document.querySelector('#btn-blackjack-hit')
        .addEventListener('click', blackjackHit);

document.querySelector('#btn-blackjack-deal')
        .addEventListener('click', blackjackDeal);


document.querySelector('#btn-blackjack-stand')
        .addEventListener('click', balckjackStand);






function blackjackHit(){ 
    let your_card_number = document.querySelector("span#your-blackjack-result").firstChild.nodeValue;
    if (your_card_number <=21){    
        let score = 0
        let card = randomCard();    
        src = showCard(card, YOU).src;
       
        let card_name = []
        let all_your_cards = document.querySelector('#your-box').querySelectorAll('img');

        for (let i =0; i<all_your_cards.length; i++){  
            past_card_src = all_your_cards[i].src;            
            past_card_name_withpng = past_card_src.substr(past_card_src.length -6);
            past_card_name = past_card_name_withpng.substring(0,2);
            card_name.push(past_card_name);
        }     
        
        for (card=0; card < card_name.length; card++){            
            let test = blackjackgame['cards_point'][card_name[card]];
            score +=  test;
            
        }
        document.getElementById("your-blackjack-result").textContent=score
    }else {
        alert('You are not eligible to draw more card! Please Stand!')
    }
    
};



function randomCard() {
    let randomIndex = Math.floor(Math.random() * 52)
    return blackjackgame['cards'][randomIndex]
};

function showCard(card, activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src=`./static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    return cardImage
};



function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let i= 0; i< yourImages.length; i++){
        yourImages[i].remove();
    };
    for (let j= 0; j< dealerImages.length; j++){
        dealerImages[j].remove();
    };
    document.getElementById("your-blackjack-result").textContent=0;
    document.getElementById("dealer-blackjack-result").textContent=0;
}


//dealing with the Strand value
function balckjackStand(){ 
    let score = document.getElementById("your-blackjack-result").textContent;        

    let stand_card_name = [];

    let stand_all_your_cards = document.querySelector('#your-box').querySelectorAll('img');
    let stand_card_number = 1;

    for (let i =0; i<stand_all_your_cards.length; i++){  
        past_card_src = stand_all_your_cards[i].src;            
        past_card_name_withpng = past_card_src.substr(past_card_src.length -6);
        past_card_name = past_card_name_withpng.substring(0,2);
        stand_card_name.push(past_card_name);
        stand_card_number+=i
        };
    
    check_black_jack = check_user_black_jack(score, stand_card_number, stand_card_name)

    // hit card for dealer
    let first_stand_dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let j= 0; j< first_stand_dealerImages.length; j++){
        first_stand_dealerImages[j].remove();
    };

    document.getElementById("dealer-blackjack-result").textContent=0;

    
    user_blackjack = check_user_black_jack(score,stand_card_number, stand_card_name);

    

    if (user_blackjack === 'win'){
        // let win = 1;
        document.getElementById("blackjack-wins").textContent = parseInt(document.querySelector("#blackjack-wins").firstChild.nodeValue) + 1;
        alert('Please press deal for the new game!')
    }  

    if (score > 21){
        // let lose = 1;
        document.getElementById("blackjack-losses").textContent = parseInt(document.querySelector("#blackjack-losses").firstChild.nodeValue) + 1;
        alert('Please press deal for the new game!')
    }  

    if(score <=21){
        let dealer_score = 0;
        for (let k= 0; k<=10; k++){
            let dealer_score_number = document.querySelector("span#dealer-blackjack-result").firstChild.nodeValue;
            

            let card = randomCard();    
            showCard(card, DEALER);
            
            let dealer_score = 0;

            let dealer_card_name = []
            let dealer_all_your_cards = document.querySelector('#dealer-box').querySelectorAll('img');

            for (let i =0; i<dealer_all_your_cards.length; i++){  
                past_card_src = dealer_all_your_cards[i].src;            
                past_card_name_withpng = past_card_src.substr(past_card_src.length -6);
                past_card_name = past_card_name_withpng.substring(0,2);
                dealer_card_name.push(past_card_name);
            }     
            
            for (card=0; card < dealer_card_name.length; card++){            
                let dealer_test = blackjackgame['cards_point'][dealer_card_name[card]];
                dealer_score +=  dealer_test;
                
            }
                
            
            document.getElementById("dealer-blackjack-result").textContent=dealer_score;



            
                
            if(dealer_score >= score && dealer_score >=18){
                break;
                if (dealer_score > score){
                    document.getElementById("blackjack-wins").textContent = parseInt(document.querySelector("#blackjack-wins").firstChild.nodeValue) + 1;
                    alert('Please press deal for the new game!')
                } else if(dealer_score = score){
                    document.getElementById("blackjack-draws").textContent = parseInt(document.querySelector("#blackjack-draws").firstChild.nodeValue) + 1;
                    alert('Please press deal for the new game!')
                }
            }
            
        
           
       

        }
            
    }
    
    

};

let score =11
let stand_card_number = 2
let stand_card_name =["AS", "KS"]
function check_user_black_jack(score, stand_card_number, stand_card_name){
    if(score === 11 && stand_card_number === 2){
        if(stand_card_name[0].substring(0,1) === "A" || stand_card_name[1].substring(0,1) === "A"){
            return x = 'win'
        } else {
            return x = 'null'
        }
    } else {
        return x = 'null'
    }
};


