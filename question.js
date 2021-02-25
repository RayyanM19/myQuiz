class Question {
    constructor() {
      this.title=createElement("h1");
      this.input1=createInput("Name");
      this.input2=createElement("The Correct Answer");
      this.button=createButton("Submit");
      this.question=createElement("h3");
      this.option1=createElement("h4");
      this.option2=createElement("h4");
      this.option3=createElement("h4");
      this.option4=createElement("h4");
    }
  
     hide(){
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      
     } 
  
    display(){;
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
      
      this.input1.position(130, 230);
      this.input2.position(350,230);
      this.button.position(290, 300);

      this.question.html("What colour is made when green and blue are mixed?");
      this.question.position(150,80);
      this.option1.html("Purple");
      this.option1.position(150,100);
      this.option2.html("Cyan");
      this.option2.position(150,120);
      this.option3.html("Lime");
      this.option3.position(150,140);
      this.option4.html("Dark Green");
      this.option4.position(150,160);
      
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }
  